import { ICONS } from "./constants";

// querySelector gets the first element
const toggleHighlighted = (icon, show) =>
  document
    .querySelector(`${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show);

export default function initButtons(handleUserAction) {
  let selectedIcon = 0;

  // anytime you're thinking about looping around; modulo is super useful for that
  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
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
