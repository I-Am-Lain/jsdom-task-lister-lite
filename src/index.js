const form = document.querySelector("#create-task-form")
const list = document.querySelector("#tasks")

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function formListener(){
  form.addEventListener("submit", function(event){
    event.preventDefault()
    const input = event.target['new-task-description'].value

    const li = document.createElement("li")
    const button = document.createElement("button")

    li.innerText = input
    button.setAttribute("data-description", `${input}`)
    button.innerText = "X"
    
    li.appendChild(button)
    list.appendChild(li)

  })
}
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function addDelete(){
  list.addEventListener("click", function(event){
    if (event.target.getAttribute("data-description")) {
      deleteTask(event)
    }
  })
}

function deleteTask(event){
  const listID = event.target.dataset.description
  const theListItem = document.querySelector(`[data-description="${listID}"`)
  theListItem.parentNode.remove()
}
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function main() {
  formListener()
  addDelete()
}

main()