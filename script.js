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
        const tdItems = `  <div class="checkbox-wrapper-11">
        <input id="02-11" type="checkbox" name="r" value="2">
        <label for="02-11">${tdValue.value}</label>
      </div>`;

        li.innerHTML = tdItems;
        listItems.appendChild(li);
        tdValue.value = "";
    }
}
