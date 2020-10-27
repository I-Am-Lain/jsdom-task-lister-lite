document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form = document.querySelector('#create-task-form')
  
  
  form.addEventListener('submit', function(event){
    event.preventDefault()
    input = event.target['new-task-description'].value
    form.reset()



    tasks = document.querySelector('#tasks')

    const li = document.createElement('li')
    li.innerText = input
    tasks.append(li)
  
    btn = document.createElement('button')
    btn.innerText = "ZOMG WE DID IT :D"
    btn.setAttribute("class", "change-me")
  
  
    btn.addEventListener('click', function(event){
    li.remove()
    })

  li.append(btn)
  
  })  
});
