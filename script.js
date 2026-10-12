function changeHeading() {
    let heading = document.getElementById("mainHeading");

    if (heading.textContent === "Welcome to Campus Connect!") {
        heading.textContent = "Your Campus Adventure Starts Here!";
    } else {
        heading.textContent = "Welcome to Campus Connect!";
    }
}


function changeCardColor() {
    let card = document.querySelector(".event-card");

    if (card.style.backgroundColor === "lightblue") {
        card.style.backgroundColor = "white";
    } else {
        card.style.backgroundColor = "lightblue";
    }
}

function toggleHighlights() {
    let section = document.getElementById("highlights");
    section.classList.toggle("hidden");
}


function addEvent() {
    let name = document.getElementById("eventName").value.trim();
    let message = document.getElementById("eventMessage");
    let list = document.getElementById("addedEvents");

    if (name === "") {
        message.style.color = "red";
        message.textContent = "Please enter an event name.";
        return;
    }

    let eventItem = document.createElement("p");
    eventItem.textContent = name;
    list.appendChild(eventItem);

    message.style.color = "green";
    message.textContent = "Event added successfully!";

    document.getElementById("eventName").value = "";
}


function highlightEvent(button) {
    let card = button.closest(".event-card");
    card.classList.toggle("highlighted");

    if (card.classList.contains("highlighted")) {
        button.textContent = "Remove Highlight";
    } else {
        button.textContent = "Highlight Event";
    }
}


function registerStudent(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value.trim();
    let roll = document.getElementById("rollNumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let selectedEvent = document.getElementById("eventSelection").value;
    let message = document.getElementById("registrationMessage");

    if (name === "" || roll === "" ||
        email === "" || selectedEvent === "") {
        message.style.color = "red";
        message.textContent = "Error: Please fill in all required fields.";
        return;
    }

    message.style.color = "green";
    message.textContent =
        "Thank you, " + name +
        "! You have registered your interest in " +
        selectedEvent + ".";
}

function changeFontSize() {
    let heading = document.getElementById("registrationHeading");

    if (heading.style.fontSize === "40px") {
        heading.style.fontSize = "28px";
    } else {
        heading.style.fontSize = "40px";
    }
}


function toggleForm() {
    let form = document.getElementById("registrationForm");
    form.classList.toggle("hidden");
}