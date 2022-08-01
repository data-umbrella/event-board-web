export function imageFileToDataURL(file) {
  if (!file) return

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  })
}

export function dataURLtoImageFile(dataUrl, fileName = 'image') {
  if (!dataUrl || dataUrl === '') return;

  var arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);

  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, {type:mime});
}
