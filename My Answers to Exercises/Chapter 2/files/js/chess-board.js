let board = "",
  size = 8;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (i % 2) board += j % 2 ? " " : "#";
    else board += j % 2 ? "#" : " ";
  }
  board += "\n";
}

console.log(board);
