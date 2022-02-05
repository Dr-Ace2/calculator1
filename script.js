let percent = document.getElementById("percent");
let percentmark = document.getElementById("percentmark");
let grade = document.getElementById("grade");
let grademark = document.getElementById("grademark");
let butt = document.getElementById("butt");
let but = document.getElementById("but");
let maths = document.getElementById("maths");
let english = document.getElementById("english");
let physics = document.getElementById("physics");
let chemistry = document.getElementById("chemistry");
let pass = document.getElementById("pass");
let set = document.getElementById("set");
let add = document.getElementById("add");
let error = document.getElementsByClassName("error");
let errorMax = document.getElementsByClassName("errorMax");
let errorNum = document.getElementsByClassName("errorNum");
let classval = document.getElementsByClassName("form-control");
let ids = [];


let marksobt = 0;
let total;
let calcuAns;

// DRY: Don't repeat yourself


function runit() {
  const a = Number(maths.value);
  const b = Number(english.value);
  const c = Number(physics.value);
  const d = Number(chemistry.value);
  const values = [a, b, c, d];

  for (let i = 0; i < ids.length; i++) {

    let id = ids[i];
    let element = document.getElementById(id);
    let value = Number(element.value);
    values.push(value);
  }


  //  validation block of codes

  for (let i = 0; i < values.length; i++) {

    if (isNaN(values[i])) {

      errorNum[i].innerHTML = "Incorrect input, pls check again";
      //  return false;


    }

    if (values[i] > 100) {
      errorMax[i].innerHTML = "Max input is 100";
      // return false
    }

  }

  let errorField = false;
  for (let i = 0; i < classval.length; i++) {
    if (classval[i].value === "") {
      error[i].innerHTML = "Pls input a number";
      errorField = true;
    } else error[i].innerHTML = "";
  }
  if (errorField) return true;

  // if (error === true)   <=>  if (error)
  // if (error !== true)   <=>  if (!error)
  // if (error === false)   <=>  if (!error)



  // mathematics calculation code
  for (let i = 0; i < values.length; i++) {

    marksobt += values[i];
  }

  total = values.length * 100;
  calcuAns = (marksobt / total) * 100;

  marksobt = 0;

  // total=400;
  // marksobt= a+b+c+d;
  // calcuAns = (marksobt/total)*100;

  if (calcuAns >= 70) {

    percent.innerHTML = "Your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "Your grade is"
    grademark.innerHTML = "A";
    pass.innerHTML = "Congratulations you passed!";
    return false;

  } else if (calcuAns >= 60 && calcuAns < 70) {
    percent.innerHTML = "Your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "Your grade is:"
    grademark.innerHTML = "B";
    pass.innerHTML = "Congratulations you passed!";
    return false;
  }
  else if (calcuAns >= 50 && calcuAns < 60) {
    percent.innerHTML = "Your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "Your grade is:"
    grademark.innerHTML = "C";
    pass.innerHTML = "Congratulations you passed!";
    return false;
  }
  else if (calcuAns >= 40 && calcuAns < 50) {
    percent.innerHTML = "Your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "Your grade is:"
    grademark.innerHTML = "D";
    pass.innerHTML = "Congratulations you passed!";
    return false;
  }
  else if (calcuAns >= 30 && calcuAns < 40) {
    percent.innerHTML = "Your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "Your grade is:"
    grademark.innerHTML = "E";
    pass.innerHTML = "Sorry, you failed";
    return false;
  }
  else if (calcuAns <= 30) {
    percent.innerHTML = "Your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "Your grade is:"
    grademark.innerHTML = "F";
    pass.innerHTML = "Sorry, you failed";
    // ids = [];
    return true;
  }

  // ids = [];
  return true;
}

// this code adds new courses

function addNew() {
  let id = String(Date.now());

  but.insertAdjacentHTML('beforebegin', `
  
<div class="form-group">
    <input type="text" class="form-control" placeholder="Enter score" id=${id}>
    <p class="error"></p>
    <p class="errorNum"></p>
    <p class="errorMax"></p>
</div> `)

  ids.push(id);


}

but.addEventListener("click", runit);
add.addEventListener("click", addNew);



function reset() {

  const values = [maths, english, physics, chemistry];
  for (let i = 0; i < values.length; i++) values[i].value = '';

  const utils = [error, errorMax, errorNum, percent, percentmark, grade, grademark, pass]
  for (let i = 0; i < utils.length; i++) utils[i].innerHTML = ""

  // error.innerHTML="";
  // errorMax.innerHTML="";
  // errorNum.innerHTML="";

  // percent.innerHTML="";
  // percentmark.innerHTML="";
  // grade.innerHTML=""
  // grademark.innerHTML="";
  // pass.innerHTML="";

  for (let i = 0; i < ids.length; i++) {
    let id = ids[i];
    let element = document.getElementById(ids[i]);
    element.value = '';
  }

  // ids = [];
}
set.addEventListener("click", reset);

