var homebtn = document.getElementById("fire-home");
var aboutbtn = document.getElementById("fire-about");
var servicesbtn = document.getElementById("fire-services");
var contactbtn = document.getElementById("fire-contact");

var home = document.getElementsByClassName("home")[0];
var about = document.getElementsByClassName("About")[0];
var services = document.getElementsByClassName("Services")[0];
var contact = document.getElementsByClassName("Contact")[0];

var newsletter = document.getElementsByClassName("newsletter")[0];
var socialiconbx = document.getElementsByClassName("social-icons")[0];

let subscribeemail = document.getElementById("subscribeemail");
let button = document.getElementById("submit");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let links = document.querySelectorAll(".menu-state");
let navNumbers = document.querySelectorAll(".navNumber");
let paragraphs = document.querySelectorAll(".navText");
let listItems = document.querySelectorAll("li");
let h1 = document.querySelector("h1");
let h2 = document.querySelectorAll("h2"); // Add this line
let icons = document.querySelectorAll("i");
let subBtn = document.querySelectorAll("#submit");
const colorPicker = document.getElementById("color-picker");
let styleSwitch = document.querySelector(".style-switcher");
let togBtn = document.querySelector(".toggle-btn");

// For form
let full_name = document.getElementById("full_name");
let email_id = document.getElementById("email_id");
let phone = document.getElementById("phone");
let textarea = document.getElementById("textarea");
let submitbtn = document.getElementById("submit");

// form validations
const nm_pt = /^[a-zA-Z ]+$/;
const email_val = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneno = /^\d{10}$/;
// form validations

homebtn.addEventListener("click", function () {
  home.style.display = "block";
  newsletter.style.display = "block";
  socialiconbx.style.display = "block";
  about.style.display = "none";
  services.style.display = "none";
  contact.style.display = "none";
});

aboutbtn.addEventListener("click", function () {
  home.style.display = "none";
  newsletter.style.display = "none";
  socialiconbx.style.display = "none";
  about.style.display = "block";
  services.style.display = "none";
  contact.style.display = "none";
});

servicesbtn.addEventListener("click", function () {
  home.style.display = "none";
  newsletter.style.display = "none";
  socialiconbx.style.display = "none";
  about.style.display = "none";
  services.style.display = "block";
  contact.style.display = "none";
});

contactbtn.addEventListener("click", function () {
  home.style.display = "none";
  newsletter.style.display = "none";
  socialiconbx.style.display = "none";
  about.style.display = "none";
  services.style.display = "none";
  contact.style.display = "block";
});

subscribeemail.onkeyup = function () {
  if (subscribeemail.value.match(emailPattern)) {
    subscribeemail.style.borderBottom = "2px solid green";
  } else {
    subscribeemail.style.borderBottom = "2px solid red";
  }
};

button.onclick = function () {
  if (subscribeemail.value.match(emailPattern)) {
    // Email is valid, submit the form
    document.getElementById("subscribe").submit();
  } else {
    alert("Please enter a valid email address");
  }
};

// For contact form

// Form starts here
full_name.onkeyup = function () {
  if (full_name.value.match(nm_pt)) {
    full_name.style.border = "2px solid green";
  } else {
    full_name.style.border = "2px solid red";
  }
};

email_id.onkeyup = function () {
  if (email_id.value.match(email_val)) {
    email_id.style.border = "2px solid green";
  } else {
    email_id.style.border = "2px solid red";
  }
};

phone.onkeyup = function () {
  if (phone.value.match(phoneno)) {
    phone.style.border = "2px solid green";
  } else {
    phone.style.border = "2px solid red";
  }
};

submitbtn.onclick = function () {
  if (
    full_name.value.match(nm_pt) &&
    email_id.value.match(email_val) &&
    phone.value.match(phoneno)
  ) {
    // Form is valid, submit it
    document.getElementById("myform").submit();
  } else {
    alert("Please fill all the fields properly");
  }
};

links.forEach((link, index) => {
  link.addEventListener("click", function () {
    navNumbers.forEach((navNumber) => navNumber.classList.remove("active"));
    paragraphs.forEach((paragraph) => paragraph.classList.remove("active"));
    listItems.forEach((listItem) => listItem.classList.remove("active"));

    navNumbers[index].classList.add("active");
    paragraphs[index].classList.add("active");
    listItems[index].classList.add("active");
  });
});

togBtn.addEventListener("click", () => {
  if (styleSwitch.style.right === "0px") {
    styleSwitch.style.right = "-150px";
  } else {
    styleSwitch.style.right = "0";
  }
});
document.addEventListener("click", (e) => {
  if (e.target !== togBtn && e.target !== styleSwitch && !styleSwitch.contains(e.target)) {
    styleSwitch.style.right = "-150px";
  }
});

// colorPicker.addEventListener("input", (e) => {
//   const selectedColor = e.target.value;

//   console.log(selectedColor);

//   navNumbers.forEach((navNumber) => {
//     navNumber.style.color = selectedColor;
//   });

//   paragraphs.forEach((paragraph) => {
//     paragraph.style.color = selectedColor;
//   });

//   listItems.forEach((listItem) => {
//     listItem.style.color = selectedColor;
//   });

//   h2.forEach((h2Element) => { // Add this block
//     h2Element.style.color = selectedColor;
//   });

//   icons.forEach((icon) => {
//     icon.style.color = selectedColor;
//   });

//   subBtn.forEach((submitBtn) => {
//     submitBtn.style.background = selectedColor;
//     submitBtn.style.border = selectedColor;
//   });

//   h1.style.color = selectedColor;
// });

colorPicker.addEventListener("input", (e) => {
  const selectedColor = e.target.value;

  console.log(selectedColor);

  document.documentElement.style.setProperty("--text-color", selectedColor);
});
