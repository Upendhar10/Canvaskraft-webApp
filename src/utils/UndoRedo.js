export function undo(canvas, screen, undoHistory, redoHistory) {
  if (undoHistory.length === 0) return; // we need at least 2 states/urls to undo

  redoHistory.push(undoHistory.pop()); // Move the last state to redo history

  if (undoHistory.length === 0) {
    // If no more states in undo history, clear the canvas
    screen.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    // Otherwise, restore the previous state
    restoreState(canvas, screen, undoHistory);
  }
}

export function redo(canvas, screen, undoHistory, redoHistory) {
  if (redoHistory.length === 0) return; // No history to redo
  undoHistory.push(redoHistory.pop()); // Restore the state from redo history
  restoreState(canvas, screen, undoHistory); // Restore the canvas state
}

export function restoreState(canvas, screen, undoHistory) {
  const img = new Image();
  img.onload = function () {
    screen.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    screen.drawImage(img, 0, 0); // Draw the previous state/url
  };
  img.src = undoHistory[undoHistory.length - 1];
}
