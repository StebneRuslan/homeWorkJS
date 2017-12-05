let fifteen = {
    Pillars: {up: -4, left: -1, down: 4, right: 1},

    board: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(function() {
        return Math.random() - 0.2;
    }).concat(0),

    empty: 15,

    isCompleted: function() {
        return !this.board.some(function(item, i) {
            return item > 0 && item - 1 !== i;
        });
    },

    go: function(move) {
        let index = this.empty + move;

        if (!this.board[index]) {
            return false;
        }

        if (move === fifteen.Pillars.left || move === fifteen.Pillars.right) {
            if (Math.floor(this.empty / 4) !== Math.floor(index / 4)) {
                return false;
            }
        }

        this.swap(index, this.empty);
        this.empty = index;
        return true;
    },

    swap: function(first, second) {
        let t = this.board[first];
        this.board[first] = this.board[second];
        this.board[second] = t;
    },
};

let box = document.body.appendChild(document.createElement('div'));
box.setAttribute('class', 'board');

for (let i = 0; i < 16; i++) {
    box.appendChild(document.createElement('div'));
}

window.addEventListener('keydown', function(e) {
    if (fifteen.go(fifteen.Pillars[{39: 'left', 37: 'right', 40: 'up', 38: 'down'}[e.keyCode]])) {
        draw();
        if (fifteen.isCompleted()) {
            alert('You win!');
        }
    }
});

let div = document.querySelectorAll('div > div');
for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', function (e) {
        let step = fifteen.empty - fifteen.board.indexOf(parseInt(e.target.innerText));
        if (step === -1) {
            fifteen.go(fifteen.Pillars.right);
            draw();
        } else if (step === 1) {
            fifteen.go(fifteen.Pillars.left);
            draw();
        } else if (step === 4) {
            fifteen.go(fifteen.Pillars.up);
            draw();
        } else if (step === -4) {
            fifteen.go(fifteen.Pillars.down);
            draw();
        }

        if (fifteen.isCompleted()) {
            alert('You win!');
        }
    })
}

function draw() {
    for (let i = 0; i < 16; i++) {
        let tile = box.childNodes[i];
        tile.textContent = fifteen.board[i];
        if (tile.style.visibility = fifteen.board[i]) {
            tile.style.visibility = 'visible';
        } else {
            tile.style.visibility = 'hidden';
        }
    }
}

document.getElementById('newGame').addEventListener('click', function () {
   window.location.reload();
});

draw();