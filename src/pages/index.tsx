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
  //左側から時計回り
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

  //input = 初めて押した時
  const isFirst = userInputs.flat().filter((input) => input === 1).length === 0;

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
  // console.log('初期');
  // console.table(userInputs);

  const Blank = (x: number, y: number) => {
    //始めにbombがあったら処理を行わない
    if (bombMap[x][y] === 1) {
      console.log('BAKUHATU!');
      board[x][y] = 11;
      return;
    }
    //8方向のbombcnt
    let checkbomb = 0;
    for (let s = 0; s < 8; s++) {
      const dx = directions[s][0];
      const dy = directions[s][1];
      if (bombMap[y + dy] === undefined || bombMap[y + dy][x + dx] === undefined) {
        continue;
      }
      if (bombMap[y + dy][x + dx] === 1) {
        checkbomb++;
      }
    }
    if (checkbomb >= 1) {
      board[x][y] = checkbomb;
      return;
    }
    board[x][y] = 0;

    for (let t = 0; t < 8; t++) {
      if (x + directions[t][0] < 0 || y + directions[t][1] < 0) {
        continue;
      }
      //Blank(x + directions[t][0], y + directions[t][1]);
      if (userInputs[y + directions[t][1]][x + directions[t][0]] !== 1) {
        Blank(x + directions[t][0], y + directions[t][1]);
      }
    }

    console.log(checkbomb);
  };

  const createBoard = () => {
    for (let py = 0; py < 9; py++) {
      for (let px = 0; px < 9; px++) {
        if (userInputs[py][px] === 1) {
          Blank(py, px);
        }
      }
    }
    // console.log('updateInputのbombの個数');
    // console.table(board);
    return board;
  };

  const onClick = (x: number, y: number) => {
    console.log('選択', y, x);
    if (userInputs[y][x] === 1) {
      return; // 既に選択済みの場合は何もしない
    }
    const updateInput = [...userInputs];
    updateInput[x][y] = 1;

    setUserInputs(updateInput);
    console.log('update');
    // console.table(updateInput);
    if (isFirst) {
      console.log('aaaa');
      while (bomb < bombCount) {
        row = Math.floor(Math.random() * 9);
        col = Math.floor(Math.random() * 9);
        console.log(row, col);

        if (updateInput[col][row] !== 1 && bombMap[col][row] !== 1) {
          bombMap[col][row] = 1;
          bomb++;
        }
      }
      setBombMap(bombMap);
    }

    console.log('bombmap');
    console.table(bombMap);
    console.log('board');
    console.table(board);
    console.table(userInputs);
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
              {cell === 11 && <div className={styles.bomb} />}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
