
var isValidSudoku = function(board) {
    if (board === null) { return board;}
    // col
    for (let i = 0; i < board.length; i++){
        let colMap = {};
        for (let j = 0; j < board[0].length; j++){
            if (board[j][i] === '.') continue;
            let currentValue = board[j][i];
            if (colMap[currentValue] === undefined) {
                colMap[currentValue] = currentValue;
            } else {
                return false;
            }
        }
    }

    // row
    for (let i = 0; i < board.length; i++){
        let rowMap = {};
        for (let j = 0; j < board[0].length; j++){
            if (board[i][j] === '.') continue;
            let currentValue = board[i][j];
            if (rowMap[currentValue] === undefined) {
                rowMap[currentValue] = currentValue;
            } else {
                return false;
            }
        }
    }

    // 3x3 Matrix
    for (let i = 0; i < board.length; i = i + 3){
        for (let j = 0; j < board[0].length; j = j + 3) {
            let matrixMap = {};
            let subX = i + 3;
            let subY = j + 3;
            for (let k = i; k < subX; k++) {
                for (let l = j; l < subY; l++) {
                    let currentValue = board[k][l];
                    if (currentValue === '.') continue;
                    if (matrixMap[currentValue] === undefined) {
                        matrixMap[currentValue] = currentValue;
                    } else {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}