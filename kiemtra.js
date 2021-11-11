let account = [
  ["nam", "namdang"],   
  ["kien", "kiendang"],
  ["binh", "binhdang"],
  ["an", "andang"],    
];
account[1][0]
function checkLogin() {
  let user = document.getElementById("username").value; // binh
  let pass = document.getElementById("password").value;

  if (user == "") {
    alert("Username not be blank");
    return false;
  }
  if (pass == "") {
    alert("Password not be blank");
    return false;
  }
  let check = false; // tác dụng là để ktra xem có username không
  for (let i = 0; i < account.length; i++){
    if (user == account[i][0]) { // thấy username có trong mảng
      check = true;               // có trong mảng
      if (pass == account[i][1]) {
        alert("Login successful");
        return true;
      } else {
        alert("Invalid password");
        return false;
      }
    }
  }

  if (check == false) {
    alert("Account not found");
    return false;
  }

  return true;
}




function checkRegister() {
  let user = document.getElementById("username").value;
  let pass1 = document.getElementById("password").value;
  let pass2 = document.getElementById("confirm-password").value;

  if (user == "") {
    alert("Username not be plank");
    return false;
  }
  if (pass1 == "") {
    alert("Password not be plank");
    return false;
  }
  if (pass2 == "") {
    alert("Confirm password not be plank");
    return false;
  }

  if (pass1 != pass2) {
    alert("Password not be match confirm password");
    return false;
  }

  let check = 0;
  for (let i = 0; i < account.length; i++) {
    if (user == account[i][0]) {
      alert("Account already exists");
      return false;
    }
  }

  if (check == 0) {
    alert("Register successful");
  }

  return false;
}
