import { Application, BitmapText, Container } from "pixi.js";

function delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () =>
{
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({ background: "#1099bb", resizeTo: window });

  // Append the application canvas to the document body
  document.getElementById("pixi-container")!.appendChild(app.canvas);

  const container = new Container();

  const text1 = new BitmapText({
    text: "init",
    style: {
      fontFamily: "Fnt gold",
      fontSize: 100
    }
  });

  const text2 = new BitmapText({
    text: "init",
    style: {
      fontFamily: "Fnt gold",
      fontSize: 100
    }
  });

  text2.y = 100;

  container.addChild(text1);
  container.addChild(text2);
  app.stage.addChild(container);

  const setText = (text: string) =>
  {
    text1.text = text;
    text2.text = text;
  }

  await delay(100);
  container.visible = false;

  await delay(100);
  setText("1");

  await delay(100);
  setText("2");

  await delay(100);
  container.visible = true;

})();

