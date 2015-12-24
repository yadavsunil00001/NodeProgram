hoistedFunction(); // Hello! I am defined immediately!
 // ReferenceError: notHoistedFunction is not defined

function hoistedFunction () {
  console.log('Hello! I am defined immediately!');
}

var notHoistedFunction = function () {
  console.log('I am not defined immediately.');
}
notHoistedFunction();