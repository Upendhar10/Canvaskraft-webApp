export function OpenToolsCont(iconElement) {
  iconElement.classList.remove("cross");
  iconElement.classList.add("bars");
}

export function CloseToolsCont(iconElement) {
  iconElement.classList.remove("bars");
  iconElement.classList.add("cross");
}
