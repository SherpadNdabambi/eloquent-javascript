<!doctype html>
<script src="code/chapter/16_game.js"></script>
<script src="code/levels.js"></script>

<link rel="stylesheet" href="css/game.css">

<body>
<script>
  // To know when to stop and restart the animation, a level that is
  // being displayed may be in three `running` states:
  //
  // * "yes":     Running normally.
  // * "no":      Paused, animation isn't running
  // * "pausing": Must pause, but animation is still running
  //
  // The key handler, when it notices escape being pressed, will do a
  // different thing depending on the current state. When running is
  // "yes" or "pausing", it will switch to the other of those two
  // states. When it is "no", it will restart the animation and switch
  // the state to "yes".
  //
  // The animation function, when state is "pausing", will set the state
  // to "no" and return false to stop the animation.

  function runLevel(level, Display) {
    let display = new Display(document.body, level);
    let state = State.start(level);
    let ending = 1;
    let running = "yes";

    return new Promise(resolve => {
      function escHandler(event) {
        if (event.key != "Escape") return;
        event.preventDefault();
        if (running == "no") {
          running = "yes";
          runAnimation(frame);
        } else if (running == "yes") {
          running = "pausing";
        } else {
          running = "yes";
        }
      }
      window.addEventListener("keydown", escHandler);
      let arrowKeys = trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"]);

      function frame(time) {
        if (running == "pausing") {
          running = "no";
          return false;
        }

        state = state.update(time, arrowKeys);
        display.syncState(state);
        if (state.status == "playing") {
          return true;
        } else if (ending > 0) {
          ending -= time;
          return true;
        } else {
          display.clear();
          window.removeEventListener("keydown", escHandler);
          arrowKeys.unregister();
          resolve(state.status);
          return false;
        }
      }
      runAnimation(frame);
    });
  }

  function trackKeys(keys) {
    let down = Object.create(null);
    function track(event) {
      if (keys.includes(event.key)) {
        down[event.key] = event.type == "keydown";
        event.preventDefault();
      }
    }
    window.addEventListener("keydown", track);
    window.addEventListener("keyup", track);
    down.unregister = () => {
      window.removeEventListener("keydown", track);
      window.removeEventListener("keyup", track);
    };
    return down;
  }

  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>