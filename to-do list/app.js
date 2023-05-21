const parentDiv = document.getElementById("myList");
const inputArea = document.getElementById("Input");
const planBtn = document.getElementById("plan-btn");
let editFlag = false;




let newElement = function(){
  if(editFlag==false){
  let itemContainer = document.createElement("div");

  // creating checkbox
  let checkboxInput = document.createElement("input");
  let checkClass = "checkbox-btn";
  checkboxInput.type = "checkbox";
  checkboxInput.className = checkClass;
  checkboxInput.onclick = function() {isCompleted(this.parentElement.id)};

  let buttonContainer = document.createElement("div");
  
  // creating edit button
  let editBtn = document.createElement("button");
  let editBtnText = document.createTextNode("Edit");
  editBtn.className = "edit-btn";
  editBtn.appendChild(editBtnText);
  editBtn.onclick = function() {editItem(this.parentElement.parentElement.id);};

  // creating delete button
  let deleteBtn = document.createElement("button");
  let deleteBtnText = document.createTextNode("Delete");
  deleteBtn.className = "delete-btn";
  deleteBtn.appendChild(deleteBtnText);
  deleteBtn.onclick = function(){deleteItem(this.parentElement.parentElement.id);};

  const todoItem = document.getElementById("Input").value;  
  let todoText = document.createTextNode(todoItem);
  
  // creating unique id for every element
  let itemId = new Date().getTime();

  itemContainer.className = "list-item";
  itemContainer.id = itemId;
  
  //appending items
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);

  itemContainer.appendChild(checkboxInput);
  itemContainer.appendChild(todoText);
  itemContainer.appendChild(buttonContainer);

  parentDiv.appendChild(itemContainer);

  // making the input form blank
  inputArea.value = "";
  }
}

// function to edit
function editItem(elementId){

  const itemToEdit = document.getElementById(elementId).childNodes;
  console.log(itemToEdit[1].data);

  editFlag = true;

  inputArea.value = itemToEdit[1].data;
  planBtn.innerHTML = "Edit";

  planBtn.addEventListener("click", function(){
    if(planBtn.innerHTML == "Edit" && editFlag){
      itemToEdit[1].data = inputArea.value; 
      editFlag = false;
      inputArea.value = "";
      planBtn.innerHTML = "Plan For Today";     
    }
  })

}

// function to delete
function deleteItem(elementId){
  const itemToDelete = document.getElementById(elementId);
  itemToDelete.style.display = "none";
  parentDiv.removeChild(itemToDelete);
}

// function to add line through
function isCompleted(elementId){
  const itemToCheck = document.getElementById(elementId);
  const checkboxValue = document.getElementById(elementId).childNodes[0].checked;


  if(checkboxValue){
    itemToCheck.classList.add("checked");
  }else{
    itemToCheck.classList.remove("checked");
  }
}

// enter key adds task
const enterAddsTask = document.getElementById("Input");
enterAddsTask.addEventListener("keydown", addItemToList);
planBtn.addEventListener("click",addItemToList);

function addItemToList(e){
  if (e.key == "Enter" && planBtn.innerHTML == 'Plan For Today'){
    newElement();
  }
}