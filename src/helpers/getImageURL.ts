export function getImageURL(relativeURL: string) {
  return `${process.env.PUBLIC_URL}/images/${relativeURL}`;
}
