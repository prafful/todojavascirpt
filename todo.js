var divRef = document.getElementById("todolist")
var divRefSort = document.getElementById("todolistsort")
 //create ul element
 var newul=document.createElement("ul")
 var newulsorted=document.createElement("ul")

function addTodo(){
    console.log("I want to add some todos...");

    //retrieve the value of text input field
    var todoinputRef = document.getElementsByTagName("input")
    var todoinputvalue = todoinputRef[0].value
    //make first alphabet uppercase
    var firstAlphabet = todoinputvalue.trim().charAt(0).toUpperCase()
    //console.log(firstAlphabet);
    var allexceptfirstalphabet = todoinputvalue.slice(1)
    todoinputvalue = firstAlphabet + allexceptfirstalphabet
    console.log(todoinputvalue);
   
    //create li element
    var newli = document.createElement("li")
    //add innerText or innerHTML to new li element which is created
    newli.innerText = todoinputvalue
    newli.setAttribute("class", "todoitem")
    //console.log(newli)
    //append new li to new ul
    newul.appendChild(newli)
    console.log(newul)

    //append new ul to empty div with id 'todolist'
    divRef.appendChild(newul)
    var sortedUl =  sortLiItems(newul)
    divRefSort.appendChild(sortedUl)

    //make text field blank
    todoinputRef[0].value = ""
    todoinputRef[0].focus()
}

function sortLiItems(newul){
    newulsorted.innerHTML=""
    console.log(newul);
    var allUnSortedLi = document.getElementsByClassName("todoitem")
    console.log(allUnSortedLi)
    var liText = []
    for(i =0; i<allUnSortedLi.length; i++){
        liText[i] = allUnSortedLi[i].innerText
        console.log(liText[i]);
    }

    var sortedLiText = liText.sort()
    console.log(sortedLiText);

    for(i=0;i<sortedLiText.length;i++){
      var newsortedli = document.createElement("li")
      newsortedli.innerText = sortedLiText[i]
      newsortedli.setAttribute("class", "todoitem")
      newulsorted.appendChild(newsortedli)  
    }
    console.log(newulsorted);
    return newulsorted

}