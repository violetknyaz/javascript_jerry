
class Scroll {
   constructor(options) {
      if (typeof options.elem == 'string') {
         this.element = document.querySelector(options.elem);
      }
      else if (options.elem instanceof HTMLElement) {
         this.element = options.elem;
      }
      this.top = options.top;
      this.element.style.position = 'fixed';
      this.unit = options.unit;
      if (this.unit == 'px') {
         this.window = this.top >= 0 ? this.top : 0;
         this.element.style.top = this.window + 'px';
      }
      else if (this.unit == '%' || this.unit == undefined) {
         this.window = this.calc(window.innerHeight, this.top) - this.element.clientHeight;
         this.element.style.top = this.window + 'px';
      }
      window.addEventListener('scroll', () => {
         this.scroll();
      })
   }
     scroll() {
         if (this.window - pageYOffset > 0) {
         this.element.style.top = this.window - pageYOffset + 'px';
      }
      else {
         this.element.style.top = 0;
      }
   }
   calc(height, top) {
      return height / 100 * top;
   }
}
const myScroll = new Scroll({
   elem: '.header__nav',
   top: 610,
   unit: 'px'
})

const jerry = document.querySelector('.jerry');
const arrow = document.querySelector('.arrow')
const h1 = document.querySelector('h1');
const header = document.querySelector('header');
const p = document.querySelector('.header__content p');

let minH = 0;
let minW = 0;
let maxH = window.innerHeight - 150;
let maxW = window.innerWidth - 150;
function myRndHeight(minH, maxH) {
   return Math.floor(Math.random() * maxH + minH);
}
function myRndWidth(minW, maxW) {
   return Math.floor(Math.random() * maxW + minW);
}
h1.addEventListener('mouseover', function () {
   document.querySelector('.header__nav').style.display = 'none';
   arrow.style.display = 'none';
   p.style.display = 'none';
   jerry.style.display = 'block';
   this.style.animation = 'opacity 1s infinite';
   this.innerHTML = `Try to catch me!`;
   this.style.color = 'red';   
   document.querySelector('main').style.display = 'none';
   document.querySelector('footer').style.display = 'none';
})
h1.addEventListener('click', function(){
   location.reload();
})
jerry.addEventListener('mouseover', function () {
   let rndHeight = myRndHeight(minH, maxH);
   let rndWidth = myRndWidth(minW, maxW);
   this.style.position = 'absolute';
   this.style.top = rndHeight + 'px';
   this.style.left = rndWidth + 'px';
   this.style.zIndex = '5';
})

