const tdValue = document.getElementById("tdtext"),
listItems = document.getElementById("list-items"),
addUpdateClick = document.getElementById("AddUpdateClick");

tdValue.addEventListener("keypress", function (e)
{
    if(e.key === "Enter")
    {
        addUpdateClick.click();
    }
});

function createTodoData()
{
    if(tdValue.value === "")
    {
        alert("Please enter a task");
        tdValue.focus();
    }
    else
    {
        let li = document.createElement("li");
        const tdItems = `<div ondlbclick="CompleteTodoItem(this)">${tdValue.value}</div> <div><img class="edit td-controlsOne" src="pencil.png" alt="edit" /><img class="delete td-controls" src="bin.png" alt="delete" /></div>`;

        li.innerHTML = tdItems;
        listItems.appendChild(li);
        tdValue.value = "";
    }
}

function CompleteTodoItem(e)
{
    console.log(e.parentElement);
}
