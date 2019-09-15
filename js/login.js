

/**
* A simple function that checks if the fields entered by the user are valid.
*/
function validateForm() {
  // gets the values typed in the forms, and stores it into a variable.
  let email = document.forms["login-form"]["email"].value;
  let username = document.forms["login-form"]["username"].value;
  let firstPassword = document.forms["login-form"]["first-password"].value;
  let secondPassword = document.forms["login-form"]["second-password"].value;

  /**
  * These if statements is a simple implementation of form validation.
  */
  if (email == "" || username == "" || secondPassword == "" || firstPassword == "") {
    alert("All forms are required.");
    return false;
  }

  if(!email.includes("@")) {
  	alert("Please enter a valid email address");
  	return false
  }

  if(firstPassword.length < 8) {
  	alert("Password length must be greater than 8");
  	return false;
  }

  if(firstPassword != secondPassword) {
  	alert("Passwords do not match");
  	return false
  }

  return true
}

