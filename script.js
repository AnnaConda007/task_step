
let  arr=[]
let task_body = document.querySelector(".task_body")
let body = document.querySelector("body")
let num = 5
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
let li_input=0


let start_button =  document.getElementById("start_button")   
start_button.addEventListener("click", function(){



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
    button__send_value_in_arr.setAttribute("value", "следующая задача" )
    primary_form.addEventListener("submit", function(evt) {  
    let value_of_primary_input=document.getElementById("primary_input").value
    arr.push(value_of_primary_input)
    evt.preventDefault()
    arr_send_in_display()
    function arr_send_in_display(){
        let li =document.createElement("li")
        ol.append(li)
        ol.append(button_ready)
        li_input=document.createElement("input")
        li.append(li_input)
        li_input.setAttribute('type', 'checkbox');
        li_input.id="li_input";
        let label=document.createElement("label")
        li.append(label)
        label.setAttribute("for","li_input")
        label.innerHTML=arr[k_arr]
        
    }
    blue() 
    k_arr++
    })
    create_arr_area()  
    function create_arr_area(){
        arr_area =document.createElement("div")
        body.append(arr_area)
        arr_area.id="arr_area"
        ol = document.createElement("ol")
       arr_area.append(ol)
        button_ready=document.createElement("button") 
        button_ready.innerHTML="все задачи введены"
           button_ready.id="step_button"
           button_ready.addEventListener("click", function(){
           let step_area=document.createElement("div")
       body.append(step_area)
       step_area.id ="task_body" 
       primary_form.remove()
       button_ready.remove()
       

        })
       }
    }




    
)




    







    function blue(){ ol.addEventListener("click", function(){
        if(k_of_step < num   ){ 
            k_of_step++
    
            ol.style.backgroundColor="blue"
            ol.addEventListener("click", function(){
                alert("vhn")
            })
          }}
          )}

          
         






 

    /*ol.addEventListener("click", function(){
        if(k_of_step < num){ 
            k_of_step++
           let step = document.createElement("div")
           step_area.append(step)
         step.style.width= size_step + "%"
         step.style.height=size_step + "%"
         step.style.backgroundColor="blue"
         step.style.position= "absolute"                  
         step.style.left=  shift_right + "%"
         step.style.bottom= shift_right + "%"
         shift_right= shift_right + size_step
          }

       })*/