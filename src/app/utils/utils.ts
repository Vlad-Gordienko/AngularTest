export function clearNull(obj: {[key: string]: any}) {
  const result: {[key: string]: any} = {};
  for (let key in obj) {
    if (obj[key] !== null || obj[key] !== undefined) {
      result[key] = obj[key]
    }
  }
  return result;
}
