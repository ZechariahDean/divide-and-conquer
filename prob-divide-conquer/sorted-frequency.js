function sortedFrequency(arr, q) {
  const top = findTop(arr, q);
  const bot = findBot(arr, q);

  if (top === -1 || bot === -1) return -1;
  else return top - bot;
}

// function to find the top of the requested number string
function findTop(arr, q, top = arr.length - 1, bot = 0) {
  const mid = Math.floor((top + bot) / 2);
  if (bot > top) return -1;
  if (arr[mid] === q && arr[mid + 1] !== q) return mid + 1;
  
  if (arr[mid] <= q) return findTop(arr, q, top, (mid + 1));
  else if (arr[mid] > q) return findTop(arr, q, (mid - 1), bot);
}

// function to find the bottom of the requested number string
function findBot(arr, q, bot = 0, top = (arr.length - 1)) {
  const mid = Math.floor((top + bot) / 2);
  if (bot > top) return -1;
  if (arr[mid] === q && arr[mid - 1] !== q) return mid;
  
  if (arr[mid] < q) return findBot(arr, q, (mid + 1), top);
  else if (arr[mid] >= q) return findBot(arr, q, bot, (mid - 1));
}


module.exports = sortedFrequency