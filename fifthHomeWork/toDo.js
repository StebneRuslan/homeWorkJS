let todoList = JSON.parse(localStorage.getItem('allItems'));

let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

let input = document.getElementById('input');
let list = document.getElementById('list');

if (todoList) {
    open();
}

function open() {
    todoList.forEach(function (element, i) {
        let div = document.createElement('div');
        div.setAttribute('id', i);
        div.setAttribute('done', element.done);

        p = document.createElement('p');
        p.innerText = element.date;

        let h2 = document.createElement('h2');
        h2.innerText = element.text;

        let delButton = document.createElement('button');
        delButton.innerText = 'Delete';
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';

        div.setAttribute('class', 'toDo');
        div.append(h2);
        list.append(div);
        div.append(delButton);
        div.append(editButton);
        div.append(p);

        delButton.onclick = function (e) {
            e.target.parentNode.remove();
            todoList.splice(todoList.indexOf(e.target.parentNode.id), 1);
            localStorage.setItem('allItems', JSON.stringify(todoList));
        };

        editButton.onclick = function (e) {
            let editDiv = document.createElement('div');
            let input = document.createElement('input');
            input.setAttribute('class', 'input');
            editDiv.setAttribute('class', 'edit');
            input.value = e.target.parentNode.childNodes[0].innerText;
            let saveButton = document.createElement('button');
            saveButton.innerText = 'Save';


            editDiv.append(input);
            editDiv.append(saveButton);
            let editId = e.target.parentNode.id;
            list.replaceChild(editDiv, e.target.parentNode);

            saveButton.onclick = function () {
                e.target.parentNode.childNodes[0].innerText = input.value;
                list.replaceChild(e.target.parentNode, editDiv);
                todoList[editId].text = input.value;
                localStorage.setItem('allItems', JSON.stringify(todoList));
            };
        };
    })
}

function addToDo() {
    if (!input.value) {
        alert('Can not be empty');
        return;
    }

    if (!todoList) {
        todoList = [];
    }

    let todo = {
        text: input.value,
        date: new Date().toLocaleString("ru", options),
    };

    todoList.push(todo);

    localStorage.setItem('allItems', JSON.stringify(todoList));
    window.location.reload();
}

function reverse() {
    todoList.reverse();
    localStorage.setItem('allItems', JSON.stringify(todoList));
    window.location.reload();
}

let button = document.getElementById('button');
let reverseButton = document.getElementById('reverseButton');
reverseButton.addEventListener('click', reverse);
button.addEventListener('click', addToDo);