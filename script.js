
let body = document.body;
let startBtn=document.getElementById("start_button")   
startBtn.addEventListener("click", function(){
  startBtn.remove()
})



function createElement (tagName, parentDOMElement,id,type,value ) {
  const newDOMElement = document.createElement(tagName);
  parentDOMElement.append(newDOMElement);
  newDOMElement.id=id;
  newDOMElement.setAttribute('type', type);
  newDOMElement.innerHTML=value
  return newDOMElement;
}

 



/*
const newDOM = createElement("button",body,"idid",null,"готово")
newDOM.addEventListener("click", function(){alert("дадаад")})
*/



/*


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
  

let promises=new Promise( function(resolve, reject){

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
     
    li.innerHTML=arr[k_arr]
    if(button_ready==undefined){
        button_ready=document.createElement("button") 
        button_ready.innerHTML="все задачи введены"
        button_ready.id="step_button"
        arr_area.append(button_ready)
    }
    k_arr++

    resolve(button_ready)
  
})
})

promises.then(function(){
  
  button_ready.addEventListener("click", function(){    
    if(step_area==undefined){step_area=document.createElement("div")
    body.append(step_area)
    step_area.id ="task_body" 
    primary_form.remove()
    button_ready.remove()
    ol.remove()
    li.remove()
    if(ol_double==undefined){ol_double= document.createElement("ol")
arr_area.append(ol_double)}
  for(let i=0; i<k_arr; i++){
    let li_double
  li_double =document.createElement("li")
  ol_double.append(li_double)
  li_input=document.createElement("input")
  li_double.append(li_input)
  li_input.setAttribute('type', 'checkbox');
  li_input.id="li_input";
  li_input.classList.add("li");
  let label=document.createElement("label")
  li_double.append(label)
  label.setAttribute("for","li_input")
    label.innerHTML=arr[i]
      }
let all_li_input=document.querySelectorAll("li")

all_li_input.forEach(input=>{
  input.addEventListener("click", function(){ 
    let size_step = 100/k_arr
    let step = document.createElement("div")
    step_area.append(step)
    step.id="step"
  step.style.width= size_step + "%"
  step.style.height=size_step + "%"
  step.style.position= "absolute"                  
  step.style.left=  shift_right + "%"
  step.style.bottom= shift_right + "%"
  shift_right= shift_right + size_step
  input.remove
   
  })  
})

    
    }})
  
}) 
 




  


   
new Promise(function(resolve, reject) {

   resolve(1); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});*/