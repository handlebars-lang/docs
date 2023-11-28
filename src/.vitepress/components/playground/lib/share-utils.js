const CURRENT_SHARING_FORMAT = 1;

export function createSharedUrl(currentExample) {
  let currentExampleAsJson = JSON.stringify(currentExample);
  const { protocol, host } = document.location;
  const hash = "#format=" + CURRENT_SHARING_FORMAT + "&currentExample=" + encodeURIComponent(currentExampleAsJson);
  return `${protocol}//${host}/playground.html${hash}`;
}

export function loadFromSharedUrl() {
  const hashMatch = document.location.hash.match(/#format=(\d+)&currentExample=(.*)/);
  if (hashMatch) {
    const format = Number(hashMatch[1]);
    const encodedExampleData = hashMatch[2];
    switch (format) {
      case 1:
        return loadFromFormatVersion1(encodedExampleData);
      default:
        throw new Error("Unknown example sharing format " + format);
    }
  }
}

function loadFromFormatVersion1(encodedExampleData) {
  const decodedExampleData = decodeURIComponent(encodedExampleData);
  return JSON.parse(decodedExampleData);
}
