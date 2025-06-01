const events = {
    "Music Festival 2024": {
        date: "2024-12-31",
        time: "6:00 PM",
        location: "Central Park, HYDERABAD",
        description: "Join us for an amazing evening of live music from local and international artists!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDu19kGwty_s6oTWpD3eKSQQjzWMK42DqIw&s",
        organizer: "MUSIC LEAGUE"
    },
    "Tech Conference": {
        date: "2024-06-25",
        time: "9:00 AM",
        location: "Convention Center, BANGALORE",
        description: "A gathering of the brightest minds in the tech world. Discussions, panels, and networking!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMz_C7SHPg6epCt68wvGafBqrVDSaM91HWg&s",
        organizer: "GENERATIVE TECH"
    },
    "Food Truck Festival": {
        date: "2024-10-20",
        time: "12:00 PM",
        location: "City Square, KURNOOL",
        description: "Experience the best food trucks in town with a variety of delicious foods.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDOVTr9ozzkbjmpj2WawbtZJDX0Q4PeyJkg&s",
        organizer: "FOOD EXPO"
    },
    "Art Exhibition": {
        date: "2023-07-30",
        time: "07:00 PM",
        location: "Gallery 101, LUCKNOW",
        description: "Explore stunning works of art from local and international artists at the annual art exhibition.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZGGYrEfajtHrBg4EJ8mZD1qHCwWB9jPoGA&s",
        organizer: "ART CRAFT"
    },
    "Christmas Market": {
        date: "2024-12-18",
        time: "11:00 PM",
        location: "Town Square, NANDYAL",
        description: "Celebrate the holiday season with festive stalls, holiday gifts, delicious food, and Christmas cheer!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bB5wdAepVqwH3iswBFA-4MgLSVP5JDssVw&s",
        organizer: "YOUTH COMMUNITY"
    }
};

const urlParams = new URLSearchParams(window.location.search);
const eventName = decodeURIComponent(urlParams.get("event"));
const event = events[eventName];

if (event) {
    document.getElementById("event-container").innerHTML = `
        <div class="row">
            <div class="col-md-8">
                <h2>${eventName}</h2>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p><strong>Description:</strong> ${event.description}</p>
                <a href="register.html?event=${encodeURIComponent(eventName)}" class="btn btn-primary">Register</a>
                <a href="index.html" class="btn btn-secondary">Back to Events</a>
            </div>
            <div class="col-md-4">
                <img src="${event.image}" class="img-fluid rounded shadow" alt="${eventName}">
                <p class="mt-3"><strong>Organizer:</strong> ${event.organizer}</p>
            </div>
        </div>
    `;
} else {
    document.getElementById("event-container").innerHTML = `<div class="alert alert-danger">Event not found.</div>`;
}
document.addEventListener('DOMContentLoaded', () => {
  const toggleCheckbox = document.getElementById('mode-toggle');

  if (localStorage.getItem('eventDarkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleCheckbox.checked = true;
  }

  toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('eventDarkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.removeItem('eventDarkMode');
    }
  });
});
