const scrollBtn = document.getElementById('scroll-btn');
const targetSection = document.getElementById('target-section');
const backToTopButton = document.getElementById('back-to-top');
let email_id = document.getElementById("email_id");
const email_val = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let submitbtn = document.getElementById("submit");
let aftersubmit = document.getElementById('aftersubmit')



// Functions starts here 




// Scroll down button function starts here
scrollBtn.addEventListener('click', () => {
  targetSection.scrollIntoView({ behavior: 'smooth' });
});
// Scroll down button function ends here




// Scroll back to top function starts here 
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Scroll back to top function ends here 




// form submission function start here
email_id.onkeyup = function () {
    
  
  if (email_id.value.match(email_val)) {
    email_id.style.border = "2px solid green";
  } else {
    email_id.style.border = "2px solid red";
  }
};


//
submitbtn.onclick = function(){


  if(email_id.value.match(email_val)){
      submitbtn.type= "submit"
      aftersubmit.style.display= "block"
  }

  else{
      alert("Please fill all the fields properly")
  }

}
// form submission function ends here