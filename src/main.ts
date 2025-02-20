import { Application, BitmapText } from "pixi.js";

(async () =>
{
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({ background: "#1099bb", resizeTo: window });

  // Append the application canvas to the document body
  document.getElementById("pixi-container")!.appendChild(app.canvas);

  const text1 = new BitmapText({
    text: "text1",
    style: {
      fontSize: 100
    }
  });
  text1.label = "text1";

  const text2 = new BitmapText({
    text: "text2",
    style: {
      fontSize: 100
    }
  });
  text2.label = "text2";
  text2.y = 100;

  app.stage.addChild(text1);
  app.stage.addChild(text2);

  const delay = async () =>
  {
    const duration = 1000; //ms
    return new Promise(resolve => setTimeout(resolve, duration));
  }

  const setText = (text: string) =>
  {
    text1.text = text;
    text2.text = text;
  }

  await delay();
  text1.visible = false;

  await delay();
  setText("first set text");

  await delay();
  setText("second set text");

  await delay();
  text1.visible = true;

})();

