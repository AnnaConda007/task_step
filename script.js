
let  arr=[1,2,]
let body = document.querySelector(".task_body")
let num = 5/*+prompt()*/
let size_step=100/num        /*заменить на значение переменной*/
var root= document.querySelector(":root");
let step
let shift_right = 0
let k_of_step=0

let button= document.querySelector("button");
button.addEventListener("click",  create_step )
function create_step(){  
    if(k_of_step < num){ 
        k_of_step++
        step = document.createElement("div")
        body.append(step)
         step.style.width= size_step + "%"
         step.style.height=size_step + "%"
         step.style.backgroundColor="blue"
         step.style.position= "absolute"
         step.style.left=  shift_right + "%"
         step.style.bottom= shift_right + "%"
         shift_right= shift_right + size_step
      }}


      input_form=0     /* ?????? input_form ранее нигде не объявлено, но работает , если удалит 0 - не работает */

         
      let value_input=5
      let new_input
let button_input =  document.getElementById("input_button")   
button_input.addEventListener("click", create_input)
function create_input(){
    input_form = document.createElement("form")    
    input_form.id="form"
    body.append(input_form);
     new_input=document.createElement("input");
    input_form.append(new_input);
    new_input.id="new_input"
    new_input.setAttribute('type', 'text');
    new_input.setAttribute;
    let send_button = document.createElement("input")
    input_form.append(send_button)
    send_button.id = "send"
    send_button.style.position="absolute"
    send_button.style.bottom="20px"
    send_button.setAttribute('type', 'submit');

    let form=document.getElementById("form")
    form.addEventListener("submit", function(evt) {  
    value_input=document.getElementById("new_input").value
    arr.push(value_input)
    
    evt.preventDefault()
    
    
    })

}
 
 
let c = document.getElementById("vv")


c.addEventListener("click", function(){

    alert(arr)
})