
let  arr=[]
let task_body = document.querySelector(".task_body")
let body = document.querySelector("body")
let num = 5/*+prompt()*/
let size_step=100/num        /*заменить на значение переменной*/
var root= document.querySelector(":root");
let step
let shift_right = 0
let k_of_step=0
let new_input
let k_arr=0
let ol 

let button= document.querySelector("button");
button.addEventListener("click",  create_step )
function create_step(){  
    if(k_of_step < num){ 
        k_of_step++
        step = document.createElement("div")
        task_body.append(step)
         step.style.width= size_step + "%"
         step.style.height=size_step + "%"
         step.style.backgroundColor="blue"
         step.style.position= "absolute                       /*//////"
         step.style.left=  shift_right + "%"
         step.style.bottom= shift_right + "%"
         shift_right= shift_right + size_step
      }}


let button_input =  document.getElementById("input_button")   
button_input.addEventListener("click", create_form)
function create_form(){
    this.remove()
    let input_form = document.createElement("form")    
    input_form.id="form"
    body.append(input_form);
     new_input=document.createElement("input");
    input_form.append(new_input);
    new_input.id="new_input"
    new_input.setAttribute('type', 'text');
    let send_button = document.createElement("input")
    input_form.append(send_button)
    send_button.id = "send"
    send_button.setAttribute('type', 'submit');
    let form=document.getElementById("form")
    

    form.addEventListener("submit", function(evt) {  
    let value_input=document.getElementById("new_input").value
    arr.push(value_input)
    evt.preventDefault()
    let li=document.createElement("li")
    ol.append(li)
    li.innerHTML=arr[k_arr]
    k_arr++
    })
    arr_area()
}

let step_button
function arr_area(){
     arr_area =document.createElement("div")
     body.append(arr_area)
       ol = document.createElement("ol")
     arr_area.append(ol)
     arr_area.id="arr_area"
    step_button=document.createElement("button")
    arr_area.append(step_button)
    
step_button.addEventListener("click", function(){
    let step_area=document.createElement("div")
body.append(step_area)
step_area.id ="task_body" 
})
    
}



 