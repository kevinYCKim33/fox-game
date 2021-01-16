const gameState = {
  current: "INIT", // INIT SLEEPING FEEDING CELEBRATING HATCHING POOPING
  clock: 1,
  wakeTime: -1, // sentinel value; when something is not currently working; aka mathy undefined;
  tick() {
    this.clock++;
    console.log("clock", this.clock);
    return this.clock;
  },
  startGame() {
    console.log("hatching");
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  wake() {
    console.log("awoken");
    this.current = "IDLING";
    this.wakeTime = -1;
  },
  handleUserAction(icon) {
    // 'this' without binding actually ends up becoming undefined / Window
    if (
      ["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current)
    ) {
      // do nothing;
      return;
    }

    if (this.current === "INIT" || this.current === "DEAD") {
      this.startGame(); // because this freaks out if handleUserAction isn't bound...line 57 happens
      return;
    }

    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  changeWeather() {
    console.log("changeWeather");
  },
  cleanUpPoop() {
    console.log("cleanupPoop");
  },
  feed() {
    console.log("feed");
  },
};

export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;
