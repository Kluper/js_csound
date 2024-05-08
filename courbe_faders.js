const Max = require('max-api');
const fs = require('fs');


const curveFunctions = {
    easeInSine: function easeInSine(x) {
       return 1 - Math.cos((x * Math.PI) / 2);
    },
  easeOutSine: function easeOutSine(x) {
       return Math.sin((x * Math.PI) / 2);
    },
  easeInOutSine: function easeInOutSine(x) {
     return -(Math.cos(Math.PI * x) - 1) / 2;
  },
  easeInQuad: function easeInQuad(x) {
     return x * x;
  },
  easeOutQuad: function easeOutQuad(x) {
     return 1 - (1 - x) * (1 - x);
  },
  easeInOutQuad: function easeInOutQuad(x) {
     return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  },
  easeInCubic: function easeInCubic(x) {
     return x * x * x;
  },
  easeOutCubic: function easeOutCubic(x) {
     return 1 - Math.pow(1 - x, 3);
  },
  easeInOutCubic: function easeInOutCubic(x) {
     return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  },
  easeInQuart: function easeInQuart(x) {
     return x * x * x * x;
  },
  easeOutQuart: function easeOutQuart(x) {
     return 1 - Math.pow(1 - x, 4);
  },
  easeInOutQuart: function easeInOutQuart(x) {
     return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
  },
  easeInQuint: function easeInQuint(x) {
     return x * x * x * x * x;
  },
  easeOutQuint: function easeOutQuint(x) {
     return 1 - Math.pow(1 - x, 5);
  },
  easeInOutQuint: function easeInOutQuint(x) {
     return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
  },
  easeInExpo: function easeInExpo(x) {
     return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
  },
  easeOutExpo: function easeOutExpo(x) {
     return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  },
  easeInOutExpo: function easeInOutExpo(x) {
     return x === 0
        ? 0
        : x === 1
           ? 1
           : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
              : (2 - Math.pow(2, -20 * x + 10)) / 2;
  },
  easeInCirc: function easeInCirc(x) {
     return 1 - Math.sqrt(1 - Math.pow(x, 2));
  },
  easeOutCirc: function easeOutCirc(x) {
     return Math.sqrt(1 - Math.pow(x - 1, 2));
  },
  easeInOutCirc: function easeInOutCirc(x) {
     return x < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
  },
  easeInBack: function easeInBack(x) {
     const c1 = 1.70158;
     const c3 = c1 + 1;
     return c3 * x * x * x - c1 * x * x;
  },
  easeOutBack: function easeOutBack(x) {
     const c1 = 1.70158;
     const c3 = c1 + 1;
 
     return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
  },
  easeInOutBack: function easeInOutBack(x) {
     const c1 = 1.70158;
     const c2 = c1 * 1.525;
 
     return x < 0.5
        ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
  },
  easeInElastic: function easeInElastic(x) {
     const c4 = (2 * Math.PI) / 3;
 
     return x === 0
        ? 0
        : x === 1
           ? 1
           : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
  },
  easeOutElastic: function easeOutElastic(x) {
     const c4 = (2 * Math.PI) / 3;
 
     return x === 0
        ? 0
        : x === 1
           ? 1
           : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
  },
  easeInOutElastic: function easeInOutElastic(x) {
     const c5 = (2 * Math.PI) / 4.5;
 
     return x === 0
        ? 0
        : x === 1
           ? 1
           : x < 0.5
              ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
              : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
  },
  easeOutBounce: function easeOutBounce(x) {
    const n1 = 7.5625;
    const d1 = 2.75;
 
    if (x < 1 / d1) {
       return n1 * x * x;
    } else if (x < 2 / d1) {
       return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
       return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
       return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
 },
 easeInBounce: function easeInBounce(x) {
    const n1 = 7.5625;
    const d1 = 2.75;
 
    if (x < 1 / d1) {
       return n1 * x * x;
    } else if (x < 2 / d1) {
       return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
       return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
       return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
 },
 
 easeInOutBounce: function easeInOutBounce(x) {
    if (x < 0.5) {
       return 0.5 * curveFunctions.easeInBounce(x * 2);
    } else {
       return 0.5 * curveFunctions.easeOutBounce(x * 2 - 1) + 0.5;
    }
 },
  steeperEaseInExpo: function steeperEaseInExpo(x) {
     return x === 0 ? 0 : Math.pow(2, 20 * x - 20);
  },
   
  steeperEaseOutExpo: function steeperEaseOutExpo(x) {
     return x === 1 ? 1 : 1 - Math.pow(2, -20 * x);
  },
 
  droite: function droite(x) {
     return (x);
  } ,
 };

Max.addHandler('curve', (toto) => {
 let faders = curveFunctions.easeInSine(toto);
 Max.outlet(faders);
})