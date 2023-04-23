// Access elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Access eye icon for password
const closeEye = document.querySelector("i.fa-eye-slash");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //not submiting form untill all field are not validate or success
  checkInputes();
});

password.addEventListener("keydown", () => {
  iconVisibleHide();
});

closeEye.addEventListener("click", () => {
  toggleVisibility();
});

function checkInputes() {
  let isFormValid = true;
  // get the values from the inputes and remove start & end space
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // for username
  if (usernameValue === "") {
    setErrorFor(username, "Username required");
    isFormValid = false;
  } else if (!isUsername(usernameValue)) {
    setErrorFor(username, "Username Invaild");
    isFormValid = false;
  } else {
    setSuccessFor(username);
  }

  // for email
  if (emailValue === "") {
    setErrorFor(email, "Email required");
    isFormValid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
    isFormValid = false;
  } else {
    setSuccessFor(email);
  }

  // for password
  if (passwordValue === "") {
    setErrorFor(password, "Password required");
    isFormValid = false;
  } else if (!isPassword(passwordValue)) {
    setErrorFor(password, "8 chars, upper, lower, digit, symbol for password");
    isFormValid = false;
  } else {
    setSuccessFor(password);
  }

  // for password2
  if (password2Value === "" && passwordValue === "") {
    setErrorFor(password2, "Password required");
    isFormValid = false;
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Password doesn't match ");
    isFormValid = false;
  } else {
    setSuccessFor(password2);
  }

  if (isFormValid) {
    form.submit();
  }
}

// for password eye icon visible or not
function iconVisibleHide() {
  // access password value
  const passwordValue = password.value.trim();
  if (passwordValue === "") {
    closeEye.style.visibility = "hidden";
  } else {
    closeEye.style.visibility = "visible";
  }
}

function toggleVisibility() {
  if (password.type === "password") {
    password.type = "text";
    closeEye.classList.remove("fa-eye-slash");
    closeEye.classList.add("fa-eye");
  } else {
    password.type = "password";
    closeEye.classList.remove("fa-eye");
    closeEye.classList.add("fa-eye-slash");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // access form-control from input
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
  // formControl.classList.add("error");  another way to add class if you like
}

function setSuccessFor(input) {
  // access formControl el using input
  const formControl = input.parentElement;

  // add success class
  formControl.className = "form-control success";
}

function isUsername(username) {
  return /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{5,20}$/.test(username);
}

// Email valid or not
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[0-9a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/.test(
    password
  );
}
