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

  const textContainer = new Container();
  textContainer.label = "textContainer";

  const text1 = new BitmapText({
    text: "text1",
    style: {
      fontFamily: "Fnt gold",
      fontSize: 100
    }
  });
  text1.label = "text1";

  const text2 = new BitmapText({
    text: "text2",
    style: {
      fontFamily: "Fnt gold",
      fontSize: 100
    }
  });
  text2.label = "text2";
  text2.y = 100;

  textContainer.addChild(text1);
  textContainer.addChild(text2);
  app.stage.addChild(textContainer);

  const setText = (text: string) =>
  {
    text1.text = text;
    text2.text = text;
  }

  await delay(100);
  textContainer.visible = false;

  await delay(100);
  setText("first set text");

  await delay(100);
  setText("second set text");

  await delay(100);
  textContainer.visible = true;

})();

