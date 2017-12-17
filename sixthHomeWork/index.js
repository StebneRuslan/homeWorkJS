let users = JSON.parse(localStorage.getItem('allUsers')) || [];

function secondsTohhmmss(totalSeconds) {
    let hours   = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

    seconds = Math.round(seconds * 100) / 100;

    let result = (hours < 10 ? "0" + hours : hours);
    result += ":" + (minutes < 10 ? "0" + minutes : minutes);
    result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
    return result;
}

function storage(user, users) {
    if (users.length > 0) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === user.name) {
                users.splice(i, 1);
            }
        }
        users.push(user);
    } else {
        users.push(user);
    }
    localStorage.setItem('allUsers', JSON.stringify(users));
}

function getStorageData () {
    if (users.length > 0) {
        users.sort(function(a,b) {return (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0);} );
        let tableHead = document.getElementById('tableHead');
        for (let i = 0; i < users.length; i++) {
            let tr = document.createElement('tr');
            for (let data in users[i]) {
                let th = document.createElement('th');
                if (data.toString() === 'time') {
                    th.innerText = secondsTohhmmss(users[i][data]);
                } else  {
                    th.innerText = users[i][data];
                }
                tr.appendChild(th);
            }
            tableHead.appendChild(tr)
        }
    }
}
getStorageData ();

function runGame(fifteen) {
    if(fifteen.size < 2 || fifteen.size > 10 || isNaN(fifteen.size)) {
        alert('the size should be greater than 2 and less than 10');
        return;
    }

    document.getElementById('menu').setAttribute('class', 'menuHide');
    const boardSize = parseInt(document.getElementById('size').value);

    let box = document.body.appendChild(document.createElement('div'));
    box.setAttribute('class', 'board');
    box.setAttribute('style', `width: ${boardSize * 100}px`);

    for (let i = 0; i < fifteen.board.length; i++) {
        box.appendChild(document.createElement('div'));
    }

    window.addEventListener('keydown', function(e) {
        if (fifteen.go(fifteen.Pillars[{39: 'left', 37: 'right', 40: 'up', 38: 'down'}[e.keyCode]])) {
            draw();
            if (fifteen.isCompleted()) {
                clearInterval(timer);
                storage(user, users);
                alert('You win!');
                window.location.reload();
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
            } else if (step === boardSize) {
                fifteen.go(fifteen.Pillars.up);
                draw();
            } else if (step === -boardSize) {
                fifteen.go(fifteen.Pillars.down);
                draw();
            }

            if (fifteen.isCompleted()) {
                clearInterval(timer);
                storage(user, users);
                localStorage.setItem('allUsers', JSON.stringify(users));
                alert('You win!');
                window.location.reload();
            }
        })
    }

    function draw() {
        for (let i = 0; i < fifteen.board.length; i++) {
            let tile = box.childNodes[i];
            tile.textContent = fifteen.board[i];
            if (tile.style.visibility = fifteen.board[i]) {
                tile.style.visibility = 'visible';
            } else {
                tile.style.visibility = 'hidden';
            }
        }
    }

    const user = {
        name: document.getElementById('user').value || 'Anonim' + Math.random().toString(),
        time: 1,
        size: fifteen.size
    };

    const timer = setInterval(function () {
        user.time += 1;
        document.getElementById('time').innerText = user.time + 'c.';
    }, 1000);
    draw();
}

document.getElementById('newGame').addEventListener('click', function () {
    const boardSize = parseInt(document.getElementById('size').value);

    let fifteen = {
        Pillars: {up: -boardSize, left: -1, down: boardSize, right: 1},

        size: parseInt(document.getElementById('size').value),

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
                if (Math.floor(this.empty / boardSize) !== Math.floor(index / boardSize)) {
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

    let inputBoard = [];
    for (let i = 1; i < Math.pow(fifteen.size, 2); i++) {
        inputBoard.push(i);
    }
    fifteen.board = inputBoard.sort(function() {
        return Math.random() - 0.2;
    }).concat(0);

    fifteen.empty = inputBoard.length;

    console.log(inputBoard);

    runGame(fifteen);
});


