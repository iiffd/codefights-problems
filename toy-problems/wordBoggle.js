// Not solved. Doesn't pass hidden tests.

board = [["A","P","P","L"], 
 ["A","P","P","L"], 
 ["P","L","P","I"], 
 ["P","P","L","E"]]

words = [
  "AP",
  "LA",
  "PA",
  "PP",
  "APPLE",
  "PL",
  "PR",
  "APPL",
  "APP",
  "LE",
  "EIL",
  "IL",
  "APPPLEILPPPPPA"
]
function recurse(board, word, y, x, length = 0) {
  let bool = false;
  length += 1;
  if (word.length === length) return true;
  const temp = board[y][x];
  board[y][x] = null;

  if (y - 1 > -1 && x - 1 > -1 && board[y - 1][x - 1] === word[length]) {
    bool = recurse(board, word, y - 1, x - 1, length);
    if (bool) {
      board[y][x] = temp;
      return bool;
    }
  }
  if (y - 1 > -1 && board[y - 1][x] === word[length]) {
    bool = recurse(board, word, y - 1, x, length);
    if (bool) {
      board[y][x] = temp;
      return bool;
    }
  }
  if (y - 1 > -1 && x + 1 < board[0].length && board[y - 1][x + 1] === word[length]) {
    bool = recurse(board, word, y - 1, x + 1, length);
    if (bool) {
      board[y][x] = temp;
      return bool;
    }
  }
  if (x - 1 > -1 && board[y][x - 1] === word[length]) {
    bool = recurse(board, word, y, x - 1, length);
    if (bool) {
      board[y][x] = temp;
      return bool;
    }
  }
  if (x + 1 < board[0].length && board[y][x + 1] === word[length]) {
    bool = recurse(board, word, y, x + 1, length);
    if (bool) {
      board[y][x] = temp;
      return bool;
    }
  }
  if (x + 1 < board[0].length && y + 1 < board.length && board[y + 1][x + 1] === word[length]) {
    bool = recurse(board, word, y + 1, x + 1, length);
    if (bool) {
      board[y][x] = temp;
      return bool;
    }
  }
  if (y + 1 < board.length && board[y + 1][x] === word[length]) {
    bool = recurse(board, word, y + 1, x, length);
    if (bool) {
      board[y][x] = temp;
      return bool;
    }
  }
  if (y + 1 < board.length && x - 1 > -1 && board[y + 1][x - 1] === word[length]) {
    bool = recurse(board, word, y + 1, x - 1, length);
    if (bool) {
      board[y][x] = temp;
      return bool;
    }
  }
  board[y][x] = temp;
  return bool;
}


function wordBoggle(board, words) {
  const results = [];
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      for (const word of words) {
        if (word[0] === board[i][j] && recurse(board, word, i, j)) {
          results.push(word);
          words.splice(words.indexOf(word), 1);
        }
      }
    }
  }
  return results.sort();
}

wordBoggle(board, words);
