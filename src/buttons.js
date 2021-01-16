import { ICONS } from "./constants";
// ICONS = ["fish", "poop", "weather"];

// querySelector gets the first element
const toggleHighlighted = (icon, show) =>
  // icon: 0, 1, or 2
  // show: true/false;
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    // .fish-icon; .poop-icon .weather-icon
    .classList.toggle("highlighted", show);
//  if there is a highlighted class, remove;
//  if there isn't a highlighted class, add;

export default function initButtons(handleUserAction) {
  let selectedIcon = 0; // ICONS[0] => 'fish' // doesn't seem to be in sync

  // anytime you're thinking about looping around; modulo is super useful for that
  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      // if at left most option 0
      // (2 + 0) % 3 === 2
      // if at center option 1
      // (2 + 1) % 3 === 0
      // if at right most option 2
      // (2 + 2) % 3 === 1
      toggleHighlighted(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
      // if at left most option 0
      // (1 + 0) % 3 === 1
      // if at center option 1
      // (1 + 1) % 3 === 2
      // if at right most option 2
      // (1 + 2) % 3 === 0
      toggleHighlighted(selectedIcon, true);
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }

  // whenever you click on the buttons container, trigger the buttonClick function
  // there used to be something like this at Beat45;
  // don't add listeners directly to the button; if they go away; let's say from some DOM event;
  // you lose the listener;
  // add listener to the container;
  // when you click on the container, did you happen to click on something with a class of this?
  // that's better when dealing with paginated things especially
  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
