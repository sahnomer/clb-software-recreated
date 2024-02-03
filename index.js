// intersection observer part
console.clear();

const navs = document.querySelectorAll(".section");
navs.forEach((nav) => {
    console.log(nav);
});
// const navbarLinks = document.querySelectorAll(".menu ul li a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const targetId = entry.target.id;
        const navbarLink = document.querySelector(`.menu ul li a[href="#${targetId}"]`);
        console.log(navbarLink);

        if (entry.isIntersecting) {
            navbarLink.style.color = "black";
            navbarLink.style.border = "1px";
            navbarLink.style.borderradius = "15px";
            navbarLink.style.background = "white";
            console.log(navbarLink);
        } else {
            navbarLink.style.color = "";
            navbarLink.style.border = "";
            navbarLink.style.borderradius = "";
            navbarLink.style.background = "";
        }
    });
},
{
    threshold: 0.4
}
)

navs.forEach((nav) => {
    observer.observe(nav);
});


// for contact us form 

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const checkbox = document.getElementById("accept-terms");

function checkEmpty() {
  if (
    fullName.value === "" ||
    email.value === "" ||
    subject.value === "" ||
    message.value === ""
  ) {
    alert("Please fill in all fields");
    return true;
  }
  return false;
}

function checkForBlank() {

  const inputs = [
    { id: "name", class: ".name-label" },
    { id: "email", class: ".email-label" },
    { id: "subject", class: ".subject-label" },
    { id: "message", class: ".message-label" },
  ];

  inputs.forEach((input) => {
    const { id, class: className } = input;
    const inputValue = document.getElementById(id).value;

    if (inputValue === "") {
      document.querySelector(className).style.display = "block";
      document.addEventListener("click", function () {
        document.querySelector(className).style.display = "none";
      });
    }
  });
}

function sendEmail() {
  const bodyMessage =
    "Full Name: " +
    fullName.value +
    "<br><br> Email:  " +
    email.value +
    "<br><br> Subject:  " +
    subject.value +
    "<br><br> Message:  " +
    message.value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "yigitomerasd@gmail.com",
    Password: "x",
    To: "yigitomerasd@gmail.com",
    From: "yigitomerasd@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then(() => alert("Your message has been sent successfully"));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkForBlank();
  if (!checkEmpty()) {
    if (checkbox.checked) {
        sendEmail();
        form.reset();
    }
    else{
        alert("Please accept the terms and conditions");
    }
  }
});