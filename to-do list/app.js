let myToDoList = document.getElementsByTagName("li");

for (let i=0 ; i<myToDoList.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("Delete");
  span.className = "close-btn";
  span.appendChild(txt);
  myToDoList[i].appendChild(span);
}

// close button functionality

let close = document.getElementsByClassName("close-btn");
for (let i=0 ; i<close.length; i++){
  close[i].onclick = function(){
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// adding a checked sign

let list = document.querySelector('ul');

list.addEventListener('click', function(ev){
  if (ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
  }
}, false);

// creating new list item
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("Input").value;
  let t = document.createTextNode(inputValue);

  let id = new Date().getTime();
  let itemClass = "list-item";
  li.className = itemClass;
  li.id = id;
  li.appendChild(t);

  if (inputValue === "") {
    alert("Code: null");
  }else{
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("Input").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("Delete");
  span.className = "close-btn";
  span.appendChild(txt);
  li.appendChild(span);

  //adding close button functionality
  let div;
  for (i = 0; i<close.length; i++) {
    close[i].onclick = function(){
      div = this.parentElement;
      id = this.parentElement.id;
      div.style.display = "none";
      document.querySelector("ul").removeChild(div);
      
    }
  }

}

//"Enter" adds the item to the list
const enterForm = document.querySelector(".inputForm");
enterForm.addEventListener("keydown" , function(e) {
  if(e.key == "Enter"){
    newElement();
  };

});