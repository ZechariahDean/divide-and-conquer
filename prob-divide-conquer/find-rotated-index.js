function findRotatedIndex(arr, q) {
  let axis = findAxis(arr);

  if (arr[axis - 1] >= q && axis > 0 && q >= arr[0])
    return binarySearch(arr, q, 0, axis - 1);
  else return binarySearch(arr, q, axis, arr.length - 1);
}

function binarySearch(arr, q, bot = 0, top = (arr.length - 1)) {
  let mid = Math.floor((bot + top) / 2);
  if (bot === top && arr[mid] !== q) return -1;
   
  if (arr[mid] === q) return mid;
  else if (arr[mid] < q) return binarySearch(arr, q, mid + 1, top);
  else return binarySearch(arr, q, bot, mid - 1);
}

function findAxis(arr) {
  if (arr[0] < arr[arr.length - 1] || arr.length === 1) return 0;
  let bot = 0;
  let top = (arr.length - 1);
  while (bot <= top) {
    const mid = Math.floor((bot + top) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    else if (arr[bot] <= arr[mid]) bot = mid + 1;
    else top = mid - 1;
  }
}

module.exports = findRotatedIndex