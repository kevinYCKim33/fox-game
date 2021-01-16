import game from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";
// try to have one point of entry point the browser loads
// i.e. Google Analytics put in here
// put all the fluffy stuff in init.js
// everything else import as modules

// you could use setTimeouts

// do not do it! too many synchronosis problem!

function tick() {
  console.log("tick", Date.now());
}

// async won't do anything here but in case...
async function init() {
  console.log("starting game");
  initButtons(game.handleUserAction);

  let nextTimeToTick = Date.now();

  // using closure...it's cool
  // have to keep track of when 3 seconds from now...

  // why using let...
  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();

// requestAnimationFrame (typically used for js animation)
// hey browser: when you can pause, call this function that i've provided to you
