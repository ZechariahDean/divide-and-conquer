function findRotationCount(arr, bot = 0, top = (arr.length - 1)) {
  if (top < bot) return 0;
  if (top === bot) return top;
  const mid = Math.floor((top + bot) / 2);

  if (arr[mid] > arr[mid + 1] && mid > bot)
    return mid;
  if (arr[mid] < arr[mid - 1] && mid < top)
    return (mid);

  if (arr[top] <= arr[mid])
    return findRotationCount(arr, mid + 1, top);
  return findRotationCount(arr, bot, mid - 1);
}

module.exports = findRotationCount