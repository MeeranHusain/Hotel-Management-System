// Mock room data
const rooms = [
    { id: 1, name: "Standard Room", price: "$100", available: true },
    { id: 2, name: "Deluxe Room", price: "$150", available: true },
    { id: 3, name: "Suite", price: "$250", available: false },
];

// Function to display rooms
function displayRooms() {
    const roomContainer = document.querySelector("#rooms .container");

    rooms.forEach(room => {
        const roomDiv = document.createElement("div");
        roomDiv.classList.add("room");

        const statusClass = room.available ? "available" : "not-available";
        roomDiv.classList.add(statusClass);

        roomDiv.innerHTML = `
            <h3>${room.name}</h3>
            <p>Price: ${room.price}</p>
            <p>Status: ${room.available ? "Available" : "Not Available"}</p>
        `;

        roomContainer.appendChild(roomDiv);
    });
}

// Function to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("booking-form");

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const checkInDate = new Date(document.getElementById("check-in").value);
        const checkOutDate = new Date(document.getElementById("check-out").value);

        const availabilityDiv = document.getElementById("availability");
        availabilityDiv.innerHTML = "";

        const availableRooms = rooms.filter(room => room.available);

        availableRooms.forEach(room => {
            const availabilityResult = document.createElement("div");
            availabilityResult.classList.add("availability-result");
            availabilityResult.textContent = `${room.name} is available for your selected dates.`;
            availabilityResult.classList.add("available");

            availabilityDiv.appendChild(availabilityResult);
        });
    });
});

// Load rooms when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    displayRooms();
});
