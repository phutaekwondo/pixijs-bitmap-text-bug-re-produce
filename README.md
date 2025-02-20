# pixijs-bitmap-text-bug-re-produce


## installation
```
npm install
npm run build
```

## run the app
```
npm run dev
```

## explain case
In ```src/main.ts```, I just set up a simple scene with 2 BitmapText(s) like below.
![Setup scene](./public/assets/readme/setup.png)

Then run the code below:
```typescript
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
```

So 2 BitmapText(s) are supposed to show "second set text" when ```textContainer.visible = true;```, right?
But instead I got this.
![Result](./public/assets/readme/result.png)


please check ```src/main.ts``` to see the code.