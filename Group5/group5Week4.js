const board = document.querySelector(".board");
const winnerbox = document.querySelector(".winnerbox");
let board_fill = ["", "", "", "", "", "", "", "", ""];
const player1 = "X";
const player2 = "0";
let is_player1 = true;
let is_finished = false;
let isWin = false;

const update_board = () => {
    board.innerHTML = "";
    board_fill.forEach((e, i) => {
        board.innerHTML += `<div id="box${i}" class="box" onclick="add_move(${i})">${board_fill[i]}</div>`;
        if (e == player1 || e == player2) {
            document.querySelector(`#box${i}`).classList.add("filled");
        }
    });
};

const add_move = (location) => {
    if (board_fill[location] == "" && is_finished == false) {
        if (is_player1 == true) {
            board_fill[location] = player1;
            update_board();
            check_winning(player1);
            is_player1 = false;
        } else if (is_player1 == false) {
            board_fill[location] = player2;
            update_board();
            check_winning(player2);
            is_player1 = true;
        }
    }
};

const check_winning = (player) => {
    // Check Horizontal
    for (i = 0; i <= 6; i += 3) {
        for (j = i; j < i + 3; j++) {
            if (board_fill[j] == player) {
                isWin = true;
                if (j == i + 2 && isWin == true) {
                    //PLAYER WINS
                    return declare_win(player);
                }
            } else {
                isWin = false;
                break;
            }
        }
    }
    //Check Vertical
    for (i = 0; i < 3; i++) {
        for (j = i; j <= i + 6; j += 3) {
            if (board_fill[j] == player) {
                isWin = true;
                if (j == i + 6 && isWin == true) {
                    //PLAYER WINS
                    return declare_win(player);
                }
            } else {
                isWin = false;
                break;
            }
        }
    }
    //Check Diagonal
    for (i = 0; i <= 8; i += 4) {
        if (board_fill[i] == player) {
            isWin = true;
            if (i == 8 && isWin == true) {
                //PLAYER WINS
                return declare_win(player);
            }
        } else {
            isWin = false;
            break;
        }
    }
    for (i = 2; i <= 6; i += 2) {
        if (board_fill[i] == player) {
            isWin = true;
            if (i == 6 && isWin == true) {
                //PLAYER WINS
                return declare_win(player);
            }
        } else {
            isWin = false;
            break;
        }
    }
};

const declare_win = (player) => {
    console.log(player + " Wins");
    winnerbox.innerHTML = `Group 5<br>${player} Wins!`;
    is_finished = true;
};

const reset = () => {
    board_fill = ["", "", "", "", "", "", "", "", ""];
    is_finished = false;
    winnerbox.innerHTML = `Group 5<br>X Tic-Tac-Toe 0`;
    update_board();
};

reset();