const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pass = document.getElementById("ps");
let valid =document.getElementsByClassName("valid")
let invalid = document.getElementsByClassName("invalid")
let icons = document.getElementsByClassName('icon')
document.getElementById("try").addEventListener("submit", (e) => {
  e.preventDefault()
 
    // if any fill is empty add invalid class 
  // if password is less than 8 characters add invalid class and change invalid text to password must be greater than 8 characters)
  const f=v(fname, 0, 'First name field cannot be empty')
  v(lname, 1, 'Last name fill cannot be empty')
  v(email, 2, 'email fill cannot be empty')
  v(pass, 3, 'password fill cannot be empty')

  

  
})

const v = function checkFills(ele, serial, message){
  
  // if(serial === 1 && )
  if(ele.value.trim() === ""){
    invalid[serial].innerHTML = message;
    ele.style.border = '2px solid hsl(0, 100%, 74%)';
    
    invalid[serial].style.display='block';
    icons[serial].style.display='block';
    return true
  }else{
    invalid[serial].innerHTML = '';
    ele.style.border = '2px solid hsl(154, 59%, 51%)';
    icons[serial].style.display='none';
    SubmitEvent()
  }

  if(serial == 3 && ele.value.trim().length > 1 && ele.value.trim().length < 8){
    ele.style.border = '2px solid hsl(0, 100%, 74%)';
    invalid[serial].innerHTML = 'password must me greater than 8 characters';
    // preventDefault()
  }
  return false
}