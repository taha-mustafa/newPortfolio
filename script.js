// Catching all Elements here
let sections = document.querySelectorAll(".section"),
    controlsSection = document.querySelectorAll(".controls"),
    controlBtn = document.querySelectorAll(".control"),
    allSections = document.querySelector(".main"),
    form = document.getElementById("form"),
    formName = document.getElementById("name"),
    email = document.getElementById("email"),
    subject = document.getElementById("subject"),
    message = document.getElementById("message"),
    submitBox = document.querySelector(".submit"),
    submitBtn = document.getElementById("submit");
////////////////////////////////// 

// Showing Welcoming Message When Load
swal({
  title: "Sweet!",
  text: "Hi there, It's Taha Mustafa Portfolio.",
  icon: "success",
  button: "Aww yess!",
});
///////////////////////////////////

/* A moving Heading */
let movingHeading = new Typed('.moving-text', {
  strings: ['Taha Mustafa', 'A Frontend Developer', 'A Problem Solver', 'A Languages Lover'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


// Time For Funcs
function activeBtnTransition() {
  for (let i  = 0; i < controlBtn.length; i++) {
    controlBtn[i].addEventListener("click", function () {
      let activeBtn = document.querySelectorAll(".active-btn");
      activeBtn[0].className = activeBtn[0].className.replace("active-btn", "");
      this.className += " active-btn";
    })
  }
  allSections.addEventListener("click", (ele) => {
    let dataId = ele.target.dataset.id;
    if (dataId) {
      controlBtn.forEach((btn) => {
        btn.classList.remove('active');
      });
      ele.target.classList.add('active');
      sections.forEach((section) => {
        section.classList.remove('active');
      });
      let everyId = document.getElementById(dataId);
      everyId.classList.add('active');
    }
  })

  // Theme Changer
  let themeChanger = document.querySelector('.theme-changer-btn');
  themeChanger.addEventListener('click', () => {
    let bodyElement = document.body;
    bodyElement.classList.toggle('light-mode');
  })
};
activeBtnTransition();
///////////////////////////////////////////////////////////////////////

/* Start Form Validation */
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkForm ();
  formName.value = '';
  email.value = '';
  subject.value = '';
  message.value = '';
});

function checkForm () {
  let usernemeValue = formName.value.trim();
  let emailValue = email.value.trim();
  let subjectValue = subject.value;
  let messageValue = message.value;

  if (usernemeValue || emailValue || subjectValue || messageValue !== '') {
    formName.style.borderColor = '#2ecc71';
    email.style.borderColor = '#2ecc71';
    subject.style.borderColor = '#2ecc71';
    message.style.borderColor = '#2ecc71';
    let full = document.querySelector('.full');
    full.style.display = 'block';
    setTimeout(() => {
      formName.style.borderColor = '';
      email.style.borderColor = '';
      subject.style.borderColor = '';
      message.style.borderColor = '';
      full.style.display = 'none';
    }, 3500);
  } else {
    let empty = document.querySelector('.submit .empty');
    formName.style.borderColor = '#e74c3c';
    email.style.borderColor = '#e74c3c';
    subject.style.borderColor = '#e74c3c';
    message.style.borderColor = '#e74c3c';
    empty.style.display = 'block';
    setTimeout(() => {
      formName.style.borderColor = '';
      email.style.borderColor = '';
      subject.style.borderColor = '';
      message.style.borderColor = '';
      empty.style.display = 'none';
    }, 3500);
  }
}
/* End Form Validation */