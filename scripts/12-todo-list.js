/*const todoList = [{name:'make dinner', dueDate:'2022-12-22'}, {name:'wash dishes', dueDate: '2022-12-22'}];*/
let list = [{name: 'Khumbos plans', todoList: [{name:'make dinner', dueDate:'2022-12-22'},{name:'Mc donalds', dueDate:'2022-12-29'}]}];
renderList();

function renderTodoList(indexMain,todoList)
{
    let todoListHTML = '';
    todoList.forEach((todoObject, index) =>
    {
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate, done} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button${indexMain}">Delete</button>
        <div class="checkBox js-checkBox"></div>
        `; 
        todoListHTML += html; 
    });
    document.querySelector(`.js-todo-list${indexMain}`).innerHTML = todoListHTML;
    document.querySelectorAll(`.js-delete-todo-button${indexMain}`).forEach((deleteButton, index)=>
    {
        deleteButton.addEventListener('click', ()=>
        {
            todoList.splice(index, 1);
            renderTodoList(indexMain, todoList);
        });
    });
    document.querySelectorAll('.js-checkBox').forEach((checkBox)=>
    {
        checkBox.addEventListener('click',()=>
        {
            if(checkBox.innerHTML === '')
            {
                checkBox.innerHTML =`
                <img class="check" src="image/check-mark.png">
                `;
            }
            else
            {
                checkBox.innerHTML = '';
            }
        });
    });
};

/*document.querySelector('.js-add-todo-button').addEventListener('click', ()=>
{
    addTodo();
});*/

function addTodo(index, todoList)
{
    const inputElement = document.querySelector(`.js-name-input${index}`);
    const name = inputElement.value;

    const dateInputElement = document.querySelector(`.js-due-date-input${index}`);
    const dueDate = dateInputElement.value;

    todoList.push(
    {
        //name: name, 
        //dueDate: dueDate
        name,
        dueDate
    });

    
    
    inputElement.value = '';

    renderTodoList(index, todoList);
}

document.querySelector('.js-addToDoList').addEventListener('click', ()=>
{
    document.querySelector('.js-add-procedure').innerHTML = `
        <div class="background"></div>
        <div class="ui-new-todo">
        <div class="close-contain">
            <div class="close js-close">
                <img class="x" src="image/x.svg">
            </div>
        </div>
        <div class="contents">
            <input class="js-input" placeholder="new todo list name">
            <button class="js-enter">Enter</button>
        </div>
        </div>
    `;
    document.querySelector('.js-close').addEventListener('click', ()=>
    {
        document.querySelector('.js-add-procedure').innerHTML = ``
    });

    document.querySelector('.js-enter').addEventListener('click', ()=>
    {
        let nameTodo = document.querySelector('.js-input');
        document.querySelector('.js-add-procedure').innerHTML = ``;
        addList(nameTodo.value);
    });    
});

function  renderList()
{
    let listHTML = '';
    let name = '';
    let todoList = [];
    let objectList = [];
    let count = 0;
    list.forEach((listObject, index)=>
    {
        name = listObject.name;
        todoList = listObject.todoList;
        let html = `
        <div class="todo-block">
            <p>${name}</p>
            <div class="todo-input-grid">
                <input placeholder="Task" class="js-name-input${index} name-input">
                <input type="date" class="js-due-date-input${index} due-date-input">
                <button class="add-todo-button js-add-todo-button">Add</button>
                <div class="subtractList js-subtract-list"><img class="add" src="image/subtraction.png"></div>
            </div>
            <div class="js-todo-list${index} todo-grid"></div>
        </div>`;
        document.querySelector('.js-block').innerHTML = html;
        renderTodoList(index, todoList);
        listHTML += document.querySelector('.js-block').innerHTML;
    });
    document.querySelector('.js-block').innerHTML = listHTML;
    document.querySelectorAll('.js-add-todo-button').forEach((addbtn, indexMain)=>
    {
        addbtn.addEventListener('click', ()=>
        {
            addTodo(indexMain, list[indexMain].todoList);
        });
        document.querySelectorAll(`.js-delete-todo-button${indexMain}`).forEach((deleteButton, index)=>
        {
            deleteButton.addEventListener('click', ()=>
            {
                list[indexMain].todoList.splice(index, 1);
                renderTodoList(indexMain, list[indexMain].todoList);
            });
        });
    });
    document.querySelectorAll('.js-subtract-list').forEach((subtractbtn, index)=>
    {
        subtractbtn.addEventListener('click',()=>
        {
            list.splice(index, 1);
            renderList();
        });
    });
    /*document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index)=>
    {
        deleteButton.addEventListener('click', ()=>
        {
            todoList.splice(index, 1);
            renderTodoList(index, todoList);
        });
    });*/
    document.querySelectorAll('.js-checkBox').forEach((checkBox)=>
    {
        checkBox.addEventListener('click',()=>
        {
            if(checkBox.innerHTML === '')
            {
                checkBox.innerHTML =`
                <img class="check" src="image/check-mark.png">
                `;
            }
            else
            {
                checkBox.innerHTML = '';
            }
        });
    });
};

function addList(todoName)
{
    list.push(
    {
        name: todoName,
        todoList: []
    });
    renderList();
}