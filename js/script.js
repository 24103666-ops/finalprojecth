const preview = document.getElementById("image");
const galleryImages = document.querySelectorAll(".grid img");
const defaultMessage = "Hover over or focus on an image below to display it here.";

function upDate(previewPic) {
  preview.textContent = previewPic.alt;
  preview.setAttribute("aria-label", previewPic.alt);
  preview.style.backgroundImage = `url("${previewPic.src}")`;
}

function undo() {
  preview.style.backgroundImage = "url('')";
  preview.textContent = defaultMessage;
  preview.setAttribute("aria-label", defaultMessage);
}

galleryImages.forEach((image) => {
  image.addEventListener("mouseenter", () => upDate(image));
  image.addEventListener("mouseleave", undo);
  image.addEventListener("focus", () => upDate(image));
  image.addEventListener("blur", undo);
});
