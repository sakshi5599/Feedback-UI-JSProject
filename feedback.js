const ratingelements = document.querySelectorAll(".rating");
const btnelement = document.getElementById("btn");
const containerelement = document.getElementById("container");
let selectrating = "";

ratingelements.forEach((ratingels) => {
  ratingels.addEventListener("click", (event) => {
    // console.log(event.target.innerText||event.target.parentNode.innerText);
    removeActive();
    selectrating = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnelement.addEventListener("click", () => {
  if (selectrating !== "") {
    containerelement.innerHTML = `
        <strong>Thank You !</strong>
        <br><br>
        <strong>Feedback : ${selectrating}</strong>
        <Br><Br>
        <p>we'll user your feedback to improve our  customer support !Thank you..giving feedback</P>
        `;
  }
});

function removeActive() {
  ratingelements.forEach((ratingel) => {
    ratingel.classList.remove("active");
  });
}
