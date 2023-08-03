import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [userInputs, setUserInputs] = useState<(0 | 1)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const bombCount = 10;
  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const directions = [
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
  ];

  //開始された合図
  const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
  //爆発した合図
  const isFaillure = userInputs.some((row, y) =>
    row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  );
  let row = 0;
  let col = 0;
  let bomb = 0;
  let cnt = 0;
  //input = 初めて押した時
  const jaj = userInputs.flat().filter((input) => input === 1).length === 0;

  //自分の状態を表すuserとbomb
  const board = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];
  console.log('初期');
  console.table(userInputs);

  const createBoard = () => {
    for (let py = 0; py < 8; py++) {
      for (let px = 0; px < 8; px++) {
        if (userInputs[py][px] === 1) {
          for (let s = 0; s < 8; s++) {
            const dx = directions[s][0];
            const dy = directions[s][1];
            // console.log(dx, dy);
            if (userInputs[py + dy] !== undefined && bombMap[py + dy][px + dx] === 1) {
              cnt++;
            }
          }
          board[py][px] = cnt;
          console.log('updateInputのbombの個数', cnt);
          console.table(board);

          return board;
        }
      }
    }
  };

  const onClick = (x: number, y: number) => {
    console.log('選択', y, x);
    const updateInput = [...userInputs];
    updateInput[x][y] = 1;

    setUserInputs(updateInput);
    console.log('update');
    console.table(updateInput);
    if (jaj) {
      if (updateInput[x][y] === 1) {
        while (bomb < bombCount) {
          row = Math.floor(Math.random() * 9);
          col = Math.floor(Math.random() * 9);
          console.log(row, col);
          if (updateInput[row][col] !== 1 && bombMap[row][col] !== 1) {
            bombMap[row][col] = 1;
            bomb++;
          }
        }
      }
    }
    console.log('bombmap');
    console.table(bombMap);
  };
  createBoard();

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, x) =>
          row.map((cell, y) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => onClick(x, y)}>
              {cell === -1 && <div className={styles.stone} />}
              {cell === 0 && <div className={styles.stone0} />}
              {cell > 0 && cell < 9 && (
                <div className={styles.number} style={{ backgroundPosition: -30 * cell + 30 }} />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
