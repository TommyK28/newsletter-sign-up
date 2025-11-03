console.log("Version: 0.0.1");

const form = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");

const dialog = document.getElementById("successModal");
const closeButton = document.getElementById("dismissModal");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!emailInput.validity.valid) {
        form.classList.add("error");
    } else {
        form.classList.remove("error");

        dialog.showModal();
    }
});

closeButton.addEventListener("click", function () {
    dialog.close();
    form.reset();
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && dialog.open) {
        dialog.close();
        form.reset();
    }
});
