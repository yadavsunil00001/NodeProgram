

hoistedFunction(); // Hello! I am defined immediately!
notHoistedFunction(); // ReferenceError: notHoistedFunction is not defined

function hoistedFunction () {
  console.log('Hello! I am defined immediately!');
}


function notHoistedFunction() {
  console.log('I am not defined immediately.');
}