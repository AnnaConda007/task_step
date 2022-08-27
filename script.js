
let body = document.body;
let startBtn=document.getElementById("start_button")   
let arr=[]
let k_arr = 0
let ol_double 
let stepArea 
let shift_right=0
let repeadBtn
let li_double
let goal =document.getElementById("goalForm")  
function createElement (tagName, parentDOMElement,id) {
  const newDOMElement = document.createElement(tagName);
  parentDOMElement.append(newDOMElement);
  newDOMElement.id=id;
  return newDOMElement;
}


let goalValue
goal.addEventListener("submit", function start(evt){
  evt.preventDefault()
  goalValue=document.getElementById("goalInput").value
  goal.remove()
  let arr_area
  let ol
  let buttonReady
let primary_form=createElement ("form",body,"form")
let primary_input=createElement ("input",primary_form,"primary_input")
primary_input.setAttribute('autocomplete', 'off')
let button__send_value_in_arr=createElement ("input",primary_form,"send")
button__send_value_in_arr.setAttribute('type', 'submit')
button__send_value_in_arr.value="следующий этап"
if(arr_area===undefined) {
  arr_area =createElement ("div",body,"arr_area")}
let p = createElement ("p",arr_area,"id")
p.innerHTML=`что бы ${goalValue} мне нужно:`
let promises=new Promise( function(resolve){ 
  primary_form.addEventListener("submit", function (evt) {  
    evt.preventDefault()
    primary_input.style.boxShadow="none"
    let value_of_primary_input=document.getElementById("primary_input").value
    if( primary_input.value!=""){
    arr.push(value_of_primary_input)
    if(arr_area===undefined) {
      arr_area =createElement ("div",body,"arr_area")}
    if(ol==undefined){ol=createElement ("ol",arr_area,null)}
    li =document.createElement("li")
    ol.append(li)
    li.innerHTML=arr[k_arr]
    k_arr++}else{ primary_input.style.boxShadow=" 0 0 15px red"}
     primary_input.value=""
     if(buttonReady==undefined && k_arr>1){
      buttonReady=createElement ("button",arr_area,"step_button" )
      buttonReady.innerHTML="все задачи введены"
      resolve(buttonReady)
  } 
})
})


promises.then(function end(){
  buttonReady.addEventListener("click", function(){
    arr_area.remove()
     primary_form.remove()
     ol.remove()
     li.remove()
    if(ol_double==undefined){
      ol_double=createElement ("ol",body,"ol_double" )
    for(let i=0; i<k_arr; i++){
      
      li_double=createElement ("li",ol_double,"id" )
    let li_input
       
    li_double.innerHTML= arr[i]
    }
  }
 if(stepArea==undefined){
  stepArea=createElement ("div",body,"task_body"  )
 }
 stepArea.append(p)
 p.innerHTML=`${goalValue}`
p.style.textAlign="end"

 let all_li_input=document.querySelectorAll("li")
 all_li_input.forEach(input=>{input.addEventListener("click", function(){
  input.style.textDecoration="line-through"
  step()
 }
 
 )
})
  })
 
})
 
let k = 0
function step(){ 
k++  
 
    let size_step = 100/k_arr
  let step = document.createElement("div")
  stepArea.append(step)
  step.id="step"
step.style.width= size_step + "%"
step.style.height=size_step + "%"
step.style.position= "absolute"                  
step.style.left=  shift_right + "%"
step.style.bottom= shift_right + "%"
shift_right= shift_right + size_step
if(k==k_arr){
let img = document.createElement("img");
img.src = "https://vk.com/sticker/1-13796-512-9";
stepArea.append(img)
p.style.textDecorationLine= "underline"
repeadBtn=createElement ("button",ol_double,"step_button")
repeadBtn.innerHTML="следующая цель"
repeadBtn.style.margin="0 auto 0"
repeadBtn.addEventListener("click",function(){location.reload()})
}

}




})


 
 
 

 