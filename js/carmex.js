  function openImagePopup(src) {
    const popup = document.getElementById("imgPopup");
    popup.style.display = "flex";
    document.getElementById("popupImage").src = src;
    document.body.style.overflow = "hidden";
    popup.scrollTop = 0;  // 항상 맨 위로
  }

  function closeImagePopup() {
    document.getElementById("imgPopup").style.display = "none";
    document.body.style.overflow = "auto";
  }

  window.onclick = function(e) {
    let popup = document.getElementById("imgPopup");
    if (e.target === popup) {
      closeImagePopup();
    }
  };