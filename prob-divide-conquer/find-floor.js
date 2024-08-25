function findFloor(arr, q, bot = 0, top = (arr.length - 1)) {
  if (bot > top) return -1;
  const mid = Math.floor((top + bot) / 2);
  if (arr[mid] === q) return arr[mid];
  if (arr[mid - 1] < q && arr[mid] > q) return arr[mid - 1];
  if (arr[mid] < q && arr.length - 1 === mid) return arr[mid];

  if (arr[mid] > q) return findFloor(arr, q, bot, mid - 1);
  return findFloor(arr, q, mid + 1, top);
}

module.exports = findFloor