// const getResult = () => {
function getResult() {
  let math = document.getElementById("math").value;
  let physics = document.getElementById("physics").value;
  let chemistry = document.getElementById("chemistry").value;
  let english = document.getElementById("english").value;
  let computer = document.getElementById("computer").value;

  let total =
    parseFloat(math) +
    parseFloat(physics) +
    parseFloat(chemistry) +
    parseFloat(english) +
    parseFloat(computer);
  let percentage = (total * 100) / 500;

  if (percentage >= 90) {
    document.getElementById("grade").innerHTML = "A+";
  } else if (percentage >= 80) {
    document.getElementById("grade").innerHTML = "A";
  } else if (percentage >= 70) {
    document.getElementById("grade").innerHTML = "B+";
  } else if (percentage >= 60) {
    document.getElementById("grade").innerHTML = "B";
  } else if (percentage >= 50) {
    document.getElementById("grade").innerHTML = "C+";
  } else if (percentage >= 40) {
    document.getElementById("grade").innerHTML = "C";
  } else if (percentage >= 30) {
    document.getElementById("grade").innerHTML = "D+";
  } else if (percentage >= 20) {
    document.getElementById("grade").innerHTML = "D";
  }
else{document.getElementById('grade').innerHTML ="you're Failed";
}


  document.getElementById("total").innerHTML = total;
  document.getElementById("percentage").innerHTML = percentage;

  if(percentage>=30)
  document.getElementById('resultShow').innerHTML = "Congratulation You're Passed";

  else{
  document.getElementById('resultShow').innerHTML = "Sorry You're Failed";
  }
}
