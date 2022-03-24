$(document).ready(function() {


 
  $("form#side-form").submit(function(event) { 
    event.preventDefault();
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());
    let c;
    let a;
    let b;
    if(side1 > side2 && side1 > side3){
       c = side1
       b = side2
       a = side3
    }else if(side2 > side1 && side2 > side3) {
       c = side2
       b = side1
       a = side3
    }else {
       c = side3
       a = side2
       b = side1
    }

    if (a + b <= c) {
      console.log("error")
    } else if (a === b && c === a) {
      console.log("equalateril")
    } else if (a === b || b === c || c === a) {
      console.log("Isosceles")
    } else {
      console.log("scalene")
    }
  });
});