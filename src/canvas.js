import { undo, redo } from "./utils/UndoRedo.js";

let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

let pencilColorList = document.querySelectorAll(".pencil-color");
let pencilWidthElem = document.querySelector("#pencil-width");
let eraserWidthElem = document.querySelector("#eraser-width");

let pencilWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value;

let pencilColor = "white"; // Default color
let eraserColor = "black"; // Default background color for eraser

let undobtn = document.querySelector("#undo");
let redobtn = document.querySelector("#redo");

let download = document.querySelector("#download");

// API
let screen = canvas.getContext("2d");

screen.strokeStyle = pencilColor;
screen.lineWidth = pencilWidth;

let eraserToggle = false;

let undoHistory = [];
let redoHistory = [];

let mouseDownFlag = false;

// # Pencil Color

pencilColorList.forEach((colorElem) => {
  colorElem.addEventListener("click", (e) => {
    pencilColor = colorElem.id;
    if (!eraserToggle) {
      screen.strokeStyle = pencilColor;
    }
  });
});

pencilWidthElem.addEventListener("change", (e) => {
  pencilWidth = pencilWidthElem.value;
  if (!eraserToggle) {
    screen.lineWidth = pencilWidth;
  }
});

// # eraser color
eraserWidthElem.addEventListener("change", (e) => {
  eraserWidth = eraserWidthElem.value;
  if (eraserToggle) {
    screen.lineWidth = eraserWidth;
  }
});

// Handle pencil/eraser toggling
function toggleEraser(isEraser) {
  eraserToggle = isEraser;
  if (eraserToggle) {
    screen.strokeStyle = eraserColor;
    screen.lineWidth = eraserWidth;
  } else {
    screen.strokeStyle = pencilColor;
    screen.lineWidth = pencilWidth;
  }
}

// Eraser button logic
document.querySelector("#eraser").addEventListener("click", () => {
  toggleEraser(true);
});

// Pencil button logic
document.querySelector("#pencil").addEventListener("click", () => {
  toggleEraser(false);
});

// store the data written on the board in the form of urls in an array

export function saveState() {
  undoHistory.push(canvas.toDataURL());
  redoHistory = [];
}

export function startDrawing(event) {
  mouseDownFlag = true;
  screen.beginPath();
  screen.moveTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
}

// drawing logic
function draw(event) {
  if (!mouseDownFlag) return;
  drawLine({
    x: event.clientX - canvas.offsetLeft,
    y: event.clientY - canvas.offsetTop,
    color: eraserToggle ? eraserColor : pencilColor,
    width: eraserToggle ? eraserWidth : pencilWidth,
  });
}

function drawLine(strokeObj) {
  screen.strokeStyle = strokeObj.color;
  screen.lineWidth = strokeObj.width;
  screen.lineTo(strokeObj.x, strokeObj.y);
  screen.stroke();
}

function endDrawing() {
  if (!mouseDownFlag) return;
  mouseDownFlag = false;
  saveState();
}

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", endDrawing);
canvas.addEventListener("mouseout", endDrawing);

// # Tools - Undo
undobtn.addEventListener("click", () => {
  undo(canvas, screen, undoHistory, redoHistory);
});

// # Tools - redo
redobtn.addEventListener("click", () => {
  redo(canvas, screen, undoHistory, redoHistory);
});

// # Tools - download
download.addEventListener("click", (e) => {
  let url = canvas.toDataURL();

  let link = document.createElement("a");
  link.href = url;
  link.download = "canvas.png";
  link.click();
});
