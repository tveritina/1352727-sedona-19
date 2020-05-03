var feedbackForm = document.querySelector(".review-form");
var popupsError = document.querySelector("#popups-error");
var popupsSent = document.querySelector("#popups-sent");
var popupsButtonSend = document.querySelector(".popups__button-send");

if (feedbackForm) {
  var submitButton = feedbackForm.querySelector(".button");
};

if (submitButton) {
  submitButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupsSent.classList.add("popups-show");
  });
};

if (popupsButtonSend) {
  popupsButtonSend.addEventListener("click", function () {
      popupsSent.classList.remove("popups-show");
  });
};
