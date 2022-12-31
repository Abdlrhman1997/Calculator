const sum = function(...args) {
    
    return args.length === 0 ? 0 : args.reduce((acc,curr)=>acc+curr,0);
  };
  
  const subtract = function(...args) {
      return args.reduce((acc,curr)=>acc-curr);
  };
  
  const multiply = function(...args) {
    return args.reduce((acc,curr)=> acc*curr);
  };

  const divide = function(...args){
    return args.reduce((acc,curr)=>acc/curr);
  }

  function operate(operator, num1, num2){
    switch (operator){
        case '+' : 
        return sum(num1,num2);
       

        case '-' : 
        return subtract(num1,num2);
        

        case '*' : 
        return  multiply(num1,num2);
        

        case '/' : 
        return   divide(num1,num2);
        
    }
  }

  console.log(operate("", 2, 3));


