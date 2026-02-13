

// Navbar script

  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
  });

//   end of Navbar script

// defines function and parameters
function toggleSection(id) {

//finds the element with given ID
  const target = document.getElementById(id);

// if there is no element with ID given, will stop the function from running to prevent errors
  if (!target) return;

//allows for the function to call and control every accordion section
  const buttons = document.querySelectorAll(".resource-btn");
  const panels = document.querySelectorAll(".resource-panel");

//this loops through all panels and hides away any panel that the user is not currently clicked on to only allow one section open at a time
  panels.forEach(panel => {
    if (panel.id !== id) panel.style.display = "none";
  });

//this checks if the selected panel was already open and sets it so that clicking an open panel closes it and vice versa
  const isOpen = target.style.display === "block";
  target.style.display = isOpen ? "none" : "block";

//this updates the screen info. it loops through all buttons collecting the aria controls value and sets the boolean to what it needs to be
  buttons.forEach(btn => {
    const controls = btn.getAttribute("aria-controls");
    btn.setAttribute("aria-expanded", controls === id && !isOpen ? "true" : "false");
  });
}