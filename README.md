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

Then run the code:
```typescript
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
```

So both 2 BitmapText(s) are supposed to show "second set text" when ```textContainer.visible = true;```, right?
But instead I got this.
![Result](./public/assets/readme/result.png)


please check ```src/main.ts``` to see the code.