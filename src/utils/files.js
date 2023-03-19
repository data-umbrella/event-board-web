import { v4 as uuidv4 } from 'uuid';

export function imageFileToDataURL(file) {
  if (!file) return;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}

// This function takes in a data URL representing an image, and converts it into a File object.
export function dataURLtoImageFile(dataUrl) {
  const fileName = `${uuidv4()}.png`;
  // If the data URL is empty or null, return undefined.
  if (!dataUrl || dataUrl === '') {
    return undefined;
  }

  // Split the data URL into two parts: the mime type and the data.
  var arr = dataUrl.split(',');
  // Extract the mime type from the first part of the array using a regular expression.
  var mime = arr[0].match(/:(.*?);/)[1];
  // Decode the image data from Base64 format into binary format.
  var bstr = atob(arr[1]);
  // Get the length of the binary data.
  var n = bstr.length;
  // Create a new Uint8Array object with the same length as the binary data.
  var u8arr = new Uint8Array(n);

  // Iterate through each character in the binary data and store it in the Uint8Array.
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  // Create a new File object using the binary data, file name, and mime type.
  return new File([u8arr], fileName, { type: mime });
}
