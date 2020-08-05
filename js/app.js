const menuBar = document.querySelector(".menu-bar"),
  bar = document.querySelector(".bar"),
  navBar = document.querySelector("nav"),
  menuLists = document.querySelectorAll(".menu-list li a"),
  cursor = document.querySelector(".custom-cursor");

// custom cursor
window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
});

// custom cursor hover effect
window.addEventListener("mouseover", (e) => {
  let target = e.target;
  if (target.className === "menu-bar" || target.tagName.toLowerCase() === "a") {
    cursor.classList.add("custom-cursor_active");
  } else {
    cursor.classList.remove("custom-cursor_active");
  }
});

// menu bar
menuBar.addEventListener("click", () => {
  bar.classList.toggle("bar_active_bar");
  navBar.classList.toggle("_active");
  document.body.classList.toggle("body-active");
});

// menu list
menuLists.forEach((list) => {
  list.addEventListener("click", () => {
    setTimeout(() => {
      bar.classList.remove("bar_active_bar");
      navBar.classList.remove("navigation_active");
    }, 1003);
  });
});

// hover efffect
const animateit = function (e) {
  const offX = e.offsetX,
    offY = e.offsetY,
    width = menuBar.offsetWidth,
    height = menuBar.offsetHeight,
    move = 25,
    xMove = (offX / width) * (move * 2) - move,
    yMove = (offY / height) * (move * 2) - move;

  menuBar.style.transform = `translate(${xMove}px, ${yMove}px)`;

  if (e.type === "mouseleave") menuBar.style.transform = "";
};

function calculateWidth() {
  if (window.innerWidth < 768) {
    menuBar.style.transform = "";
  } else {
    menuBar.addEventListener("mousemove", animateit);
    menuBar.addEventListener("mouseleave", animateit);
  }
  window.requestAnimationFrame(calculateWidth);
}
calculateWidth();

// scroll text
const scrlTxt = document.querySelector(".scroll-txt h1");

const circleType = new CircleType(document.getElementById("circle"));

window.addEventListener("scroll", () => {
  let scrollPx = scrollY;
  circle.style.transform = `rotate(${scrollPx * 0.4}deg)`;

  if (window.innerWidth <= 600) {
    scrlTxt.style.left = `${Math.floor(800 - 2 * scrollPx)}px`;
  } else {
    scrlTxt.style.left = `${Math.floor(400 - 0.5 * scrollPx)}px`;
  }
});

const pfSection = document.querySelector(".portfolio");
let currentPos = window.pageYOffset;

//   scroll skew effect
function distort() {
  const newPos = window.pageYOffset,
    diff = newPos - currentPos,
    speed = diff * 0.35;
  pfSection.style.transform = `skewY(${speed}deg)`;
  currentPos = newPos;
  requestAnimationFrame(distort);
}

distort();
