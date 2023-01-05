function operate(operator, num1, num2){
  switch (operator){
      case '+' : 
      return roundNumber(Number(num1)+Number(num2));
     
      case '−' : 
      return roundNumber(num1-num2);
      
      case '×' : 
      return  roundNumber(num1*num2);
      
      case '÷' : 
      return   roundNumber(num1/num2);

      case "%":
      return roundNumber(num1%num2);
      
  }
}


function roundNumber(num){
  return Math.round((num) * 100) / 100;
}


//my variables:

let buttons = document.querySelectorAll('button');
let screen = document.querySelector('#screen');
let equalBttn = document.querySelector('#equal');
let newOperand = document.createElement('p');
let Ac = document.querySelector('.clear');


let num1="";
let num2="";
let operator="";
let result="";

Ac.addEventListener('click',()=>{
  screen.innerHTML = "";
  defaultStyle();
});







//Add click events to the buttons(except Ac,c,= and operators) to display them on screen
buttons.forEach(function(e){
  e.onclick = function(){
     
    
     
      if(e.textContent !=="AC" && e.textContent !=="C" && e.textContent !=="="){

        if(e.textContent === "." && newOperand.textContent.charAt(newOperand.textContent.length-1) === "."){
          return;
        }

        if(screen.childNodes[1] !== undefined){
          if(checkOperator(e.textContent)){
            result = screen.childNodes[1].textContent;
            screen.innerHTML = "";
            newOperand.textContent ="";
            newOperand.textContent = result + e.textContent;
            defaultStyle();
            screen.append(newOperand);
            
          }
         }

        else{

        if(!(newOperand.textContent.length > 20)){


        if(screen.childNodes.length === 0 && !checkOperator(e.textContent)){
          newOperand.textContent = e.textContent;
          screen.append(newOperand); 
          }

          else if(checkOperator(e.textContent)){

            if(checkExpression() && !screen.childNodes[1]){
             if(!checkOperator(newOperand.textContent.charAt(newOperand.textContent.length-1))){
              newOperand.textContent = updateScreenOperator() + e.textContent;
             }
               
              
              
             }
            else if(!checkOperator(newOperand.textContent.charAt(newOperand.textContent.length-1))){
              newOperand.textContent +=e.textContent;
            }
            
                                               }
          else{
               newOperand.textContent +=e.textContent;
             }
                
                                                                                }
                                                                                                                                                
       }
      } } });



//I use this function to find the index of the operator, to check if the textContent ends with an operator
       function checkOperator(e){
        return e === "+" || e === "×" || e === "÷" || e === "−" || e === "%" || e === "%";
      
      }

     
    
  


//Assign num1, num2, operator values from the screen 
function assign_Num1_Num2_Operator(){
  num1="";
  num2="";
  let arr = [];
  let operatorIndex;
  let expression = screen.firstElementChild.textContent;
  let expressionArray = Array.from(expression);
    operatorIndex = expressionArray.findIndex(checkOperator);
    num1 += expression.slice(0,operatorIndex);
    num2 += expression.slice(operatorIndex + 1,expression.length);
    operator = expression.charAt(operatorIndex);
    arr = [operator,num1,num2];
      return arr;
   
}


equalBttn.addEventListener('click',function(){

  let arr = assign_Num1_Num2_Operator();
  if(!screen.childNodes[1] && arr[0]!=="" && arr[1]!=="" && arr[2]!==""){
    updateScreenEqual();
  }

});


//check if newOperand contain more than one operator, i use this to evaluate the first part of an expression if the user entered a
//second expression
function checkExpression(){
   let string = newOperand.textContent;

  let arr = Array.from(string);
  let operatorCount =0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] === "." ){
      continue;
    }
    else if(checkOperator(arr[i])){
      operatorCount +=1;
    }
  }
return operatorCount >=1;
}

function updateScreenOperator(){
  let arr =   assign_Num1_Num2_Operator();
  let result = operate(arr[0],arr[1],arr[2]);
  return result;
}

function updateScreenEqual(){
let arr =   assign_Num1_Num2_Operator();
let result = operate(arr[0],arr[1],arr[2]);
let resultOnScreen = document.createElement('p');
resultOnScreen.textContent =  result;
resultOnScreen.style.color = "white";
resultOnScreen.style.fontSize = "30px";
resultOnScreen.style.marginTop = "0px";
resultOnScreen.style.marginLeft = "2px";
screen.append(resultOnScreen); 

newOperand.style.fontSize = "18px";
newOperand.style.marginTop = "1px";
}

function defaultStyle(){
  newOperand.style.fontSize = "25px";
  newOperand.style.marginTop = "10px";
}
