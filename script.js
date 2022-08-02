
let  arr=[]
let primary_form
let body = document.querySelector("body")
let primary_input
let li
let ol 
let arr_area
let  button_ready
let task_body = document.querySelector(".task_body")
let num = 5
let size_step=100/num        /*заменить на значение переменной*/
var root= document.querySelector(":root");
let step
let shift_right = 0
let k_of_step=0  /*k_arr*/
let step_area
let k_arr=0
let li_input=0

 





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
  button__send_value_in_arr.setAttribute("value", "следующая задача" )
  
  primary_form.addEventListener("submit", function(evt) {  
    evt.preventDefault()
    let value_of_primary_input=document.getElementById("primary_input").value
    arr.push(value_of_primary_input)
        if(arr_area==undefined) {
            arr_area =document.createElement("div")
            body.append(arr_area)
            arr_area.id="arr_area"}
        if (ol==undefined){
         ol = document.createElement("ol")
         arr_area.append(ol)}
    li =document.createElement("li")
    ol.append(li)
    li_input=document.createElement("input")
    li.append(li_input)
    li_input.setAttribute('type', 'checkbox');
    li_input.id="li_input";
    let label=document.createElement("label")
    li.append(label)
    label.setAttribute("for","li_input")
    label.innerHTML=arr[k_arr]
    if(button_ready==undefined){
        button_ready=document.createElement("button") 
        button_ready.innerHTML="все задачи введены"
        button_ready.id="step_button"
        arr_area.append(button_ready)
    }
    k_arr++
    button_ready.addEventListener("click", function(){     /*  Заменить на нормальное решение*/
    if(step_area==undefined){step_area=document.createElement("div")
    body.append(step_area)
    step_area.id ="task_body" 
    primary_form.remove()
    button_ready.remove()
}})


li.addEventListener("click", function(){
    alert(arr)
})

  })




