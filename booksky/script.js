var popup_overlay=document.querySelector(".popup-overlay")
var popup=document.querySelector(".popup")
var popup_btn=document.getElementById("btn")
popup_btn.addEventListener("click",function()
{
    popup_overlay.style.display="block"
    popup.style.display="block"
})
var cancel_btn=document.getElementById("cancel-popup")
cancel_btn.addEventListener("click",function(event)
{
    event.preventDefault()
    popup_overlay.style.display="none"
    popup.style.display="none"
})
var book_box=document.querySelector(".book-box")
var add_btn=document.getElementById("add-book")
var title_input=document.getElementById("title-input")
var author_input=document.getElementById("author-input")
var text_input=document.getElementById("textarea-input")
add_btn.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-detail")
    div.innerHTML=`
    <h2>${title_input.value}</h2>
    <h5>${author_input.value}</h5>
    <p>${text_input.value}</p>
    <button onclick="removebook(event)">Delete</button>`
    book_box.append(div)
    title_input.value=""
    author_input.value=""
    text_input.value=""
    popup_overlay.style.display="none"
    popup.style.display="none"
})
function removebook(event)
{
    event.target.parentElement.remove()
}