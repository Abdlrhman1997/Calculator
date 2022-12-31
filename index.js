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


  console.log(sum(2,2));
  console.log(subtract(2,2));
  console.log(multiply(2,2));
  console.log(divide(2,2));
