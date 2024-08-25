function countZeroes(arr, top = arr.length -1, bot = 0) {
  let mid = Math.floor((top + bot) / 2)
  if (arr[mid] === 0 && arr[mid - 1] === 1) return arr.length - mid;
  else if (arr[mid] !== 0 && arr[mid + 1] === 0) return arr.length - (mid + 1);
  else if (arr[mid] !== 0 && mid + 1 > arr.length - 1) return 0;
  else if (arr[mid] === 0) return countZeroes(arr, mid - 1, bot);
  else return countZeroes(arr, top, mid + 1);
}

module.exports = countZeroes