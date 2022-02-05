export default function sortPlayer(obj, order = []) {
  const sortedArray = [];
  const alphSortedArray = [];

  for (const i of order) {
    if (i in obj) {
      sortedArray.push({ key: i, value: obj[i] });
    }
  }

  for (const key in obj) {
    if (!order.includes(key)) {
      alphSortedArray.push({ key, value: obj[key] });
      alphSortedArray.sort((a, b) => a.key.localeCompare(b.key));
    }
  }

  return [...sortedArray, ...alphSortedArray];
}
