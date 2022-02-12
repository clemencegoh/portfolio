export function isTruthy(item: any): boolean {
  if (typeof item === "string") {
    return item != undefined && item !== "";
  }
  if (typeof item === "object") {
    return item != undefined && item.length > 0;
  }
  return false;
}
