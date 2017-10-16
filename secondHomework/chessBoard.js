function chessBoard(n, m) {
    let grille = '#';
    let space = ' ';
    let res = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    res += grille
                } else {
                    res += space;
                }
            } else {
                if (j % 2 === 1) {
                    res += grille;
                } else {
                    res += space;
                }
            }
        }
        res += '\n';
    }
    console.log(res);
}