
let  arr=[]
let task_body = document.querySelector(".task_body")
let body = document.querySelector("body")
let num = 5/*+prompt()*/
let size_step=100/num        /*заменить на значение переменной*/
var root= document.querySelector(":root");
let step
let shift_right = 0
let k_of_step=0
let primary_input
let k_arr=0
let ol 
let primary_form
let  button_ready
/*
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
         step.style.position= "absolute                   
         step.style.left=  shift_right + "%"
         step.style.bottom= shift_right + "%"
         shift_right= shift_right + size_step
      }}
*/

let start_button =  document.getElementById("input_button")   
start_button.addEventListener("click", start_form)

function start_form(){
    start_button.remove()
      primary_form = document.createElement("form")    
      primary_form.id="form"
    body.append(primary_form);
    primary_input=document.createElement("input");
     primary_form.append(primary_input);
     primary_input.id="primary_input"
    primary_input.setAttribute('type', 'text');
    let button__send_value_in_arr = document.createElement("input")
    primary_form.append(button__send_value_in_arr)
    button__send_value_in_arr.id = "send"
    button__send_value_in_arr.setAttribute('type', 'submit');
    button__send_value_in_arr.setAttribute("value", "следующий шаг" )
    primary_form.addEventListener("submit", function(evt) {  
    let value_of_primary_input=document.getElementById("primary_input").value
    arr.push(value_of_primary_input)
    evt.preventDefault()
    arr_append_value_primary_form()
    k_arr++
    })
    create_list_of_arr_area()
}
function arr_append_value_primary_form(){
    let li=document.createElement("input")
    li.setAttribute('type', 'checkbox');
    li.id="li";
    let label=document.createElement("label")
    ol.append(label)
    label.innerHTML="value"
    label.setAttribute("for","li")
    ol.append(li)
    li.innerHTML=arr[k_arr]
 }

function create_list_of_arr_area(){
     arr_area =document.createElement("div")
     body.append(arr_area)
       ol = document.createElement("form")
     arr_area.append(ol)
     arr_area.id="arr_area"
     button_ready=document.createElement("button") 
     button_ready.innerHTML="готово"
        button_ready.id="step_button"
        arr_area.append(button_ready)
    
        button_ready.addEventListener("click", function(){
        let step_area=document.createElement("div")
    body.append(step_area)
    step_area.id ="task_body" 
    primary_form.remove()
    })
   
}



