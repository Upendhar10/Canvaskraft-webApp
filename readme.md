# Canvaskraft

A lightweight whiteboard web application inspired by Excalidraw, built entirely using Vanilla JavaScript and the HTML5 Canvas API.

### Live Demo : 
https://canvaskraft-web-app.vercel.app/

### Repository : 
https://github.com/Upendhar10/Canvaskraft-webApp

---

## Overview

Canvaskraft is a frontend-focused project designed to explore how drawing tools work under the hood.

Unlike typical projects that rely on frameworks, this app is built from scratch using:

- Vanilla JavaScript
- HTML & CSS
- Canvas API

The goal was to strengthen core JavaScript fundamentals and understand event-driven rendering.

---

## Features

- Freehand drawing (multiple colors & sizes)
- Sticky notes with drag & drop and minimize
- Undo / Redo functionality
- Eraser tool
- Image upload
- Export canvas as PNG

---

## Tech Stack

- **Frontend:** Vanilla JavaScript, HTML, CSS
- **Rendering:** HTML5 Canvas API
- **State Management:** Arrays (custom logic)
- **Libraries:** None (built from scratch)

---

## How It Works

### Canvas Rendering
The app uses the Canvas API for drawing. Since canvas is immediate-mode, everything must be redrawn manually.

### Undo / Redo
Implemented using two stacks:

- `undoHistory`
- `redoHistory`

Each state is stored as an image snapshot (data URL).

### Event Handling
All interactions are handled using native DOM event listeners:

- `mousedown`, `mousemove`, `mouseup` for drawing
- Drag events for sticky notes

---

## Challenges

- Implementing undo/redo without built-in state
- Managing drag-and-drop interactions
- Working without frameworks or libraries

---

## What I Learned

- Deep understanding of JavaScript fundamentals
- How Canvas rendering works
- Event-driven architecture
- Trade-offs in frontend design decisions

---

## Future Improvements

- Add persistent storage (localStorage / backend)
- Optimize undo/redo memory usage
- Introduce zoom and pan
- Real-time collaboration (WebSockets)

---

## Acknowledgements

- Inspired by Excalidraw.

---

## Contact

Feel free to connect or provide feedback!