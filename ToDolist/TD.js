function addtolist(){
    var taskname=document.getElementById('taskname').value
    var tododiv=document.getElementById('mytodo').value
    var newtodoitem=document.createElement('div')
    var todoname=document.createElement('li')
      todoname.innerText=taskname
      var deletebtn=document.createElement('i')
      deletebtn.classList.add('far')
      deletebtn.classList.add('fa-trash-alt')
       
      newtodoitem.appendChild(todoname)
      newtodoitem.appendChild(deletebtn)

      tododiv.appendChild(newtodoitem)

}