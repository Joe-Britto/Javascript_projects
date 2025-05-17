
// Difference between Eventhandler and EventListener.
// Eventhandler  uses one event(eg; clickon=add())  at a time  for an html element ,whereas 
// EventListener one or more event (eg;  (click, function()) (mousekey,function())) at a time and uses anonymous function
// to carry out the operation 



//Program CCs coding explaination
// selecting popupbox and popupoverlay buttons

var popupoverlay =document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
  popupoverlay.style.display="block"
  popupbox.style.display="block"
})

//select canceal button
var cancealpopup = document.getElementById("canceal-popup")
cancealpopup.addEventListener("click", function(event){
    event.preventDefault()  
    // Added  code to prevent default button action such as submit button 
    //operation to CANCEAL button 
    popupoverlay.style.display="none"
  popupbox.style.display="none"

})

//select container, add-book,book-title-input, book-author-input,
//book-description-input
 var container = document.querySelector(".container")
 var addbook =document.getElementById("add-book")
 var booktitleinput =document.getElementById("book-title-input")
 var bookauthorinput =document.getElementById("book-author-input")
 var bookdescriptioninput =document.getElementById("book-description-input")


   addbook.addEventListener("click", function(event){
    event.preventDefault()   // to avoid default action of submit button
    var div =document.createElement("div") //creating a div html element in JS
      div.setAttribute("class","book-container")
      div.innerHTML=`<h2>${booktitleinput.value}</h2>
      <h5>${bookauthorinput.value}</h5>
      <p>${bookdescriptioninput.value}</p>
      <button onclick="deletebutton(event)">Delete</button>`
      container.append(div)
       popupoverlay.style.display="none"
       popupbox.style.display="none"
   })

   function deletebutton(event){
      event.target.parentElement.remove()
   }
   