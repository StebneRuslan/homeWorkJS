import taskController from './controller/task';
import '/home/bilmakovchik/homeWorkJS/mvcHomeWork/public/css/task.css';

window.addEventListener('load', function () {
    taskController(document.getElementById('todo-list'));
});


