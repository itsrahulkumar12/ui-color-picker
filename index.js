let red1 = document.querySelector(".red1");
let red2 = document.querySelector(".red2");
let red3 = document.querySelector(".red3");
let red4 = document.querySelector(".red4");
let red5 = document.querySelector(".red5");
let red6 = document.querySelector(".red6");
let red7 = document.querySelector(".red7");
let red8 = document.querySelector(".red8");
let red9 = document.querySelector(".red9");
let red10 = document.querySelector(".red10");
let red11 = document.querySelector(".red11");
let red12 = document.querySelector(".red12");

let blue1 = document.querySelector(".blue1");
let blue2 = document.querySelector(".blue2");
let blue3 = document.querySelector(".blue3");
let blue4 = document.querySelector(".blue4");
let blue5 = document.querySelector(".blue5");
let blue6 = document.querySelector(".blue6");
let blue7 = document.querySelector(".blue7");
let blue8 = document.querySelector(".blue8");
let blue9 = document.querySelector(".blue9");
let blue10 = document.querySelector(".blue10");
let blue11 = document.querySelector(".blue11");
let blue12 = document.querySelector(".blue12");

let yellow1 = document.querySelector(".yellow1");
let yellow2 = document.querySelector(".yellow2");
let yellow3 = document.querySelector(".yellow3");
let yellow4 = document.querySelector(".yellow4");
let yellow5 = document.querySelector(".yellow5");
let yellow6 = document.querySelector(".yellow6");
let yellow7 = document.querySelector(".yellow7");
let yellow8 = document.querySelector(".yellow8");
let yellow9 = document.querySelector(".yellow9");
let yellow10 = document.querySelector(".yellow10");
let yellow11 = document.querySelector(".yellow11");
let yellow12 = document.querySelector(".yellow12");

let green1 = document.querySelector(".green1");
let green2 = document.querySelector(".green2");
let green3 = document.querySelector(".green3");
let green4 = document.querySelector(".green4");
let green5 = document.querySelector(".green5");
let green6 = document.querySelector(".green6");
let green7 = document.querySelector(".green7");
let green8 = document.querySelector(".green8");
let green9 = document.querySelector(".green9");
let green10 = document.querySelector(".green10");
let green11 = document.querySelector(".green11");
let green12 = document.querySelector(".green12");

let fancy1 = document.querySelector(".fancy1");
let fancy2 = document.querySelector(".fancy2");
let fancy3 = document.querySelector(".fancy3");
let fancy4 = document.querySelector(".fancy4");
let fancy5 = document.querySelector(".fancy5");
let fancy6 = document.querySelector(".fancy6");
let fancy7 = document.querySelector(".fancy7");
let fancy8 = document.querySelector(".fancy8");
let fancy9 = document.querySelector(".fancy9");
let fancy10 = document.querySelector(".fancy10");
let fancy11 = document.querySelector(".fancy11");
let fancy12 = document.querySelector(".fancy12");




let code = document.querySelector(".colorcode");
// let textCode = document.querySelector(".textCode");


const getBGColor = (elementSelected) => {
    return window.getComputedStyle(elementSelected).backgroundColor;
}

function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }
  

const copyToClipboard = (element) => {
  return element.addEventListener("click", () => {
    const content = RGBToHex(getBGColor(element));
    navigator.clipboard.writeText(content);
  });
}

copyToClipboard(red1);
copyToClipboard(red2);
copyToClipboard(red3);
copyToClipboard(red4);
copyToClipboard(red5);
copyToClipboard(red6);
copyToClipboard(red7);
copyToClipboard(red8);
copyToClipboard(red9);
copyToClipboard(red10);
copyToClipboard(red11);
copyToClipboard(red12);

copyToClipboard(blue1);
copyToClipboard(blue2);
copyToClipboard(blue3);
copyToClipboard(blue4);
copyToClipboard(blue5);
copyToClipboard(blue6);
copyToClipboard(blue7);
copyToClipboard(blue8);
copyToClipboard(blue9);
copyToClipboard(blue10);
copyToClipboard(blue11);
copyToClipboard(blue12);

copyToClipboard(yellow1);
copyToClipboard(yellow2);
copyToClipboard(yellow3);
copyToClipboard(yellow4);
copyToClipboard(yellow5);
copyToClipboard(yellow6);
copyToClipboard(yellow7);
copyToClipboard(yellow8);
copyToClipboard(yellow9);
copyToClipboard(yellow10);
copyToClipboard(yellow11);
copyToClipboard(yellow12);

copyToClipboard(green1);
copyToClipboard(green2);
copyToClipboard(green3);
copyToClipboard(green4);
copyToClipboard(green5);
copyToClipboard(green6);
copyToClipboard(green7);
copyToClipboard(green8);
copyToClipboard(green9);
copyToClipboard(green10);
copyToClipboard(green11);
copyToClipboard(green12);

copyToClipboard(fancy1);
copyToClipboard(fancy2);
copyToClipboard(fancy3);
copyToClipboard(fancy4);
copyToClipboard(fancy5);
copyToClipboard(fancy6);
copyToClipboard(fancy7);
copyToClipboard(fancy8);
copyToClipboard(fancy9);
copyToClipboard(fancy10);
copyToClipboard(fancy11);
copyToClipboard(fancy12);


const getColorCode = (element) => {
    return element.addEventListener("click", () => {
        code.innerText = RGBToHex(getBGColor(element));
    });
  
  }

  getColorCode(red1);
  getColorCode(red2);
  getColorCode(red3);
  getColorCode(red4);
  getColorCode(red5);
  getColorCode(red6);
  getColorCode(red7);
  getColorCode(red8);
  getColorCode(red9);
  getColorCode(red10);
  getColorCode(red11);
  getColorCode(red12);
  
  getColorCode(blue1);
  getColorCode(blue2);
  getColorCode(blue3);
  getColorCode(blue4);
  getColorCode(blue5);
  getColorCode(blue6);
  getColorCode(blue7);
  getColorCode(blue8);
  getColorCode(blue9);
  getColorCode(blue10);
  getColorCode(blue11);
  getColorCode(blue12);
  
  getColorCode(yellow1);
  getColorCode(yellow2);
  getColorCode(yellow3);
  getColorCode(yellow4);
  getColorCode(yellow5);
  getColorCode(yellow6);
  getColorCode(yellow7);
  getColorCode(yellow8);
  getColorCode(yellow9);
  getColorCode(yellow10);
  getColorCode(yellow11);
  getColorCode(yellow12);

  getColorCode(green1);
  getColorCode(green2);
  getColorCode(green3);
  getColorCode(green4);
  getColorCode(green5);
  getColorCode(green6);
  getColorCode(green7);
  getColorCode(green8);
  getColorCode(green9);
  getColorCode(green10);
  getColorCode(green11);
  getColorCode(green12);

  getColorCode(fancy1);
  getColorCode(fancy2);
  getColorCode(fancy3);
  getColorCode(fancy4);
  getColorCode(fancy5);
  getColorCode(fancy6);
  getColorCode(fancy7);
  getColorCode(fancy8);
  getColorCode(fancy9);
  getColorCode(fancy10);
  getColorCode(fancy11);
  getColorCode(fancy12);
 


