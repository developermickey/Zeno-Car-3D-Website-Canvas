function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
       ./0001.avif
       ./0002.avif
       ./0003.avif
       ./0004.avif
       ./0005.avif
       ./0006.avif
       ./0007.avif
       ./0008.avif
       ./0009.avif
       ./0010.avif
       ./0011.avif
       ./0012.avif
       ./0013.avif
       ./0014.avif
       ./0015.avif
       ./0016.avif
       ./0017.avif
       ./0018.avif
       ./0019.avif
       ./0020.avif
       ./0021.avif
       ./0022.avif
       ./0023.avif
       ./0024.avif
       ./0025.avif
       ./0026.avif
       ./0027.avif
       ./0028.avif
       ./0029.avif
       ./0030.avif
       ./0031.avif
       ./0032.avif
       ./0033.avif
       ./0034.avif
       ./0035.avif
       ./0036.avif
       ./0037.avif
       ./0038.avif
       ./0039.avif
       ./0040.avif
       ./0041.avif
       ./0042.avif
       ./0043.avif
       ./0044.avif
       ./0045.avif
       ./0046.avif
       ./0047.avif
       ./0048.avif
       ./0049.avif
       ./0050.avif
       ./0051.avif
       ./0052.avif
       ./0053.avif
       ./0054.avif
       ./0055.avif
       ./0056.avif
       ./0057.avif
       ./0058.avif
       ./0059.avif
       ./0060.avif
       ./0061.avif
       ./0062.avif
       ./0063.avif
       ./0064.avif
       ./0065.avif
       ./0066.avif
       ./0067.avif
       ./0068.avif
       ./0069.avif
       ./0070.avif
       ./0071.avif
       ./0072.avif
       ./0073.avif
       ./0074.avif
       ./0075.avif
       ./0076.avif
       ./0077.avif
       ./0078.avif
       ./0079.avif
       ./0080.avif
       ./0081.avif
       ./0082.avif
       ./0083.avif
       ./0084.avif
       ./0085.avif
       ./0086.avif
       ./0087.avif
       ./0088.avif
       ./0089.avif
       ./0090.avif
       ./0091.avif
       ./0092.avif
       ./0093.avif
       ./0094.avif
       ./0095.avif
       ./0096.avif
       ./0097.avif
       ./0098.avif
       ./0099.avif
       ./0100.avif
       ./0101.avif
       ./0102.avif
       ./0103.avif
       ./0104.avif
       ./0105.avif
       ./0106.avif
       ./0107.avif
   `;
  return data.split("\n")[index];
}

const frameCount = 107;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});
