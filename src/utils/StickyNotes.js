// # CreateSticky
export function createSticky(stickyTemplateHTML) {
  let stickyCont = document.createElement("div");
  stickyCont.setAttribute("class", "sticky-cont");
  stickyCont.innerHTML = stickyTemplateHTML;
  document.body.appendChild(stickyCont);

  let minimize = stickyCont.querySelector(".minimize");
  let remove = stickyCont.querySelector(".remove");

  stickyActions(minimize, remove, stickyCont);

  stickyCont.onmousedown = function (event) {
    DragAndDrop(stickyCont, event);
  };

  stickyCont.ondragstart = function () {
    return false;
  };
}

// # DragAndDrop
export function DragAndDrop(element, event) {
  let shiftX = event.clientX - element.getBoundingClientRect().left;
  let shiftY = event.clientY - element.getBoundingClientRect().top;

  element.style.position = "absolute";
  element.style.zIndex = 1000;
  // document.body.append(element);

  moveAt(event.pageX, event.pageY);

  // moves the element at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    element.style.left = pageX - shiftX + "px";
    element.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the element on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // drop the element, remove unneeded handlers
  element.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    element.onmouseup = null;
  };
}

// # StickyActions
export function stickyActions(minimize, remove, stickyCont) {
  minimize.addEventListener("click", () => {
    let stickyBodyCont = stickyCont.querySelector(".sticky-body-cont");
    let display = getComputedStyle(stickyBodyCont).getPropertyValue("display");

    if (display === "block") {
      stickyBodyCont.style.display = "none";
    } else {
      stickyBodyCont.style.display = "block";
    }
  });

  remove.addEventListener("click", () => {
    stickyCont.remove();
  });
}
