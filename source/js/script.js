var feedbackForm = document.querySelector(".review-form");
var popupsError = document.querySelector("#popups-error");
var popupsSent = document.querySelector("#popups-sent");
var popupsButtonSend = document.querySelector(".popups__button-send");
var popupsButtonOk = document.querySelector(".popups__button-ok");

if (feedbackForm) {
  var submitButton = feedbackForm.querySelector(".button");
  var firstName = document.querySelector("#firstname");
  var lastName = document.querySelector("#lastname");
  var contactsPhone = document.querySelector("#contacts-phone");
  var contactsEmail = document.querySelector("#contacts-email");
};

if (popupsButtonSend) {
  popupsButtonSend.addEventListener("click", function () {
    popupsSent.classList.remove("popups-show");
  });
};

if (popupsButtonOk) {
  popupsButtonOk.addEventListener("click", function () {
    popupsError.classList.remove("popups-show");
  });
};

if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (evt) {
    if (!firstName.value || !lastName.value || !contactsPhone.value || !contactsEmail.value) {
      evt.preventDefault();
      popupsError.classList.add("popups-show");
    }
    else {
      evt.preventDefault();
      popupsSent.classList.add("popups-show");
    }
  });
};
