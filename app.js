"use strict";

window.addEventListener("load", initApp);

function initApp() {
  // Event Listeners
  document.querySelector("#form-create").addEventListener("submit", createUser);
}

function createUser(event) {
  event.preventDefault();

  const name = this.name.value;
  const title = this.title.value;
  const mail = this.mail.value;
  const image = this.image.value;
  const age = this.age.value;
  const userName = this.userName.value;

  console.log(name);
  console.log(title);
  console.log(mail);
  console.log(image);
  validateUser(name, title, mail, image, age, userName);
}
function validateUser(name, title, mail, image, age, userName) {
  if (name.length > 2 && title && (mail || userName) && image && age >= "18") {
    console.log("User Valid");
    alert("User Valid");
    return true;
  } else {
    alert("User Invalid");
    console.log("User Invalid");
    return false;
  }
}

// validate user info
