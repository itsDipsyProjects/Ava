import { Application, Assets, Sprite } from "pixi.js";
import {Input} from "../inputSys/InputSystem.js"


async function main(){

  const app = new Application();
  await app.init({ background: "#1099bb", resizeTo: window });
  document.getElementById("pixi-container").appendChild(app.canvas);

  const texture = await Assets.load("/assets/bunny.png");
  const player = new Sprite(texture);

  player.anchor.set(0.5);
  player.position.set(app.screen.width / 2, app.screen.height / 2);
  app.stage.addChild(player);

  let input = new Input()
  


  


  app.ticker.add((time) => {
    const speed = 7;
    const dt = time.deltaTime; // Pixi v7 gives deltaTime nicely

    if (input.is_key_pressed("W")) {
        player.y -= speed * dt;
    }
    if (input.is_key_pressed("S")) {
        player.y += speed * dt;
    }
    if (input.is_key_pressed("D")) {
        player.x += speed * dt;
    }
    if (input.is_key_pressed("A")) {
        player.x -= speed * dt;
    }
});
}


main();
