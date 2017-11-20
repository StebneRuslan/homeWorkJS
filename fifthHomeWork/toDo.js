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

        let p = document.createElement('p');
        p.innerText = element.date;

        let h2 = document.createElement('h2');
        h2.innerText = element.text;

        let a = document.createElement('a');
        a.innerText = element.done;



        let delButton = document.createElement('button');
        delButton.innerText = 'Delete';
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        let doneButton = document.createElement('button');
        doneButton.innerText = 'Done';

        div.setAttribute('class', 'toDo');
        div.setAttribute('draggable', 'true');

        addDrag(div);
        div.append(h2);
        list.append(div);
        div.append(delButton);
        div.append(editButton);
        div.append(doneButton);
        div.append(a);
        div.append(p);

        if (element.done) {
            div.setAttribute('class', 'toDo done');
            editButton.setAttribute('class', 'doneEdit');
        }


        doneButton.onclick = function (e) {
            todoList[e.target.parentNode.id].done = !e.target.parentNode.matches('.done');
            a.innerText = todoList[e.target.parentNode.id].done;
            e.target.parentNode.classList.toggle('done');
            editButton.classList.toggle('doneEdit');
            localStorage.setItem('allItems', JSON.stringify(todoList));
        };

        delButton.onclick = function (e) {
            e.target.parentNode.remove();
            todoList.splice(parseInt(e.target.parentNode.id), 1);
            localStorage.setItem('allItems', JSON.stringify(todoList));
            window.location.reload();
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

function startDrag(e) {
    drag = e.target;
    element = this;
    e.dataTransfer.effectAllowed = "move";
    e.currentTarget.classList.add('divMove');
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dropped(e) {
    e.preventDefault();
    element.innerHTML = this.innerHTML;

    this.innerHTML = e.dataTransfer.getData('text/html');
    todoList = [];
    let list = document.querySelectorAll('.toDo');
    list.forEach(function (element) {
        let toDo = {
            text: element.firstChild.textContent,
            date: element.lastChild.textContent,
        };
        toDo.done = element.children[element.children.length - 2].innerText !== 'false';
        todoList.push(toDo);
    });
    localStorage.setItem('allItems', JSON.stringify(todoList));
    window.location.reload();
}

function addDrag(element) {
    element.addEventListener('dragstart', startDrag, false);
    element.addEventListener('dragenter', function (e) {
        e.preventDefault();
        e.currentTarget.classList.remove('divMove');
        }, false);
    element.addEventListener('dragover', function (e) { e.preventDefault()}, false);
    element.addEventListener('drop', dropped, false);
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
        done: false,
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