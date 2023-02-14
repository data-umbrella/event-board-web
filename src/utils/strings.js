export function arrayifyTags(tags) {
  if (!tags) return [];

  if (typeof tags === 'string') {
    return tags.split(',');
  } else {
    return tags;
  }
}

export function formatPrice(price) {
  return price ? price.charAt(0).toUpperCase() + price.slice(1) : "";
}

export function stringifyTags(tags) {
  if (typeof tags === 'object') {
    return tags.join(',');
  } else if (typeof tags === 'string') {
    return tags;
  } else {
    return '';
  }
}

export function truncate(str, len) {
  if (str === undefined) return '';

  if (str.length > len) {
    if (len <= 3) {
      return str.slice(0, len - 3) + "...";
    } else {
      return str.slice(0, len) + "...";
    }
  } else {
    return str;
  }
}
