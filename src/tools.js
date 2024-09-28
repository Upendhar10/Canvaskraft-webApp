import { OpenToolsCont, CloseToolsCont } from "./utils/MenuCont.js";
import { createSticky } from "./utils/StickyNotes.js";

let MenuCont = document.querySelector(".Menu-cont");
let iconElement = MenuCont.children[0];
console.log(iconElement);

let toolsCont = document.querySelector(".tools-cont");
toolsCont.style.display = "none";

let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");

pencilToolCont.style.display = "none";
eraserToolCont.style.display = "none";

let stickyNotes = document.querySelector("#stickyNotes");

let UploadImg = document.querySelector("#UploadImg");

// # MenuCont

/*
  true  -> hide toolsCont , show menu symbol
  false -> show toolsCont , hide close symbol
*/

let MenuContFlag = true;
MenuCont.addEventListener("click", () => {
  MenuContFlag = !MenuContFlag;
  if (MenuContFlag) {
    OpenToolsCont(iconElement);
    toolsCont.style.display = "none";

    pencilToolCont.style.display = "none";
    eraserToolCont.style.display = "none";
  } else {
    CloseToolsCont(iconElement);
    toolsCont.style.display = "grid";
  }
});

// # Tools - pencil
let pencilToggle = false;
pencil.addEventListener("click", () => {
  pencilToggle = !pencilToggle;

  if (pencilToggle) {
    pencilToolCont.style.display = "flex";
    pencil.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
  } else {
    pencilToolCont.style.display = "none";
    pencil.style.boxShadow = "none";
  }
});

// # Tools - eraser
let eraserToggle = false;
eraser.addEventListener("click", () => {
  eraserToggle = !eraserToggle;

  if (eraserToggle) {
    eraserToolCont.style.display = "flex";
    eraser.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
  } else {
    eraserToolCont.style.display = "none";
    eraser.style.boxShadow = "none";
  }
});

// # Tools - StickyNotes
stickyNotes.addEventListener("click", (e) => {
  // stickyNotes.style.boxShadow =
  //   "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";

  let stickyTemplateHTML = `
  <div class="sticky-header-cont">
      <div class="minimize"></div>
      <div class="remove"></div>
      </div>
  <div class="sticky-body-cont">
      <textarea spellcheck="false"></textarea>
  </div>
  `;
  createSticky(stickyTemplateHTML);
});

// # Tools - Upload
UploadImg.addEventListener("click", () => {
  // open file explorer
  let input = document.createElement("input");
  input.setAttribute("type", "file");
  input.click();

  input.addEventListener("change", (e) => {
    let file = input.files[0];
    let url = URL.createObjectURL(file);

    let stickyTemplateHTML = `
        <div class="sticky-header-cont">
            <div class="minimize"></div>
            <div class="remove"></div>
            </div>
        <div class="sticky-body-cont">
            <img src="${url}" id="ImgUpload"/>
        </div>
        `;
    createSticky(stickyTemplateHTML);
  });
});
