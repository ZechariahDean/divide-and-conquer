const arr = [1, 2, 3, 3, 4, 5, 6, 17, 20, 31, 37, 91] // size 0 - 11

function binarySearch(arr, bot = 0, top = (arr.length - 1), q) {
  let mid = Math.floor((bot + top) / 2);
  if (bot === top && arr[mid] !== q) return -1;
   
  if (arr[mid] === q) return mid;
  else if (arr[mid] < q) return binarySearch(arr, mid + 1, top, q);
  else return binarySearch(arr, bot, mid - 1, q);
}