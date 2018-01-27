import taskController from './controller/task';
import 'mvcHomeWork/public/css/task.css';

window.addEventListener('load', function () {
    taskController(document.getElementById('todo-list'));
});


