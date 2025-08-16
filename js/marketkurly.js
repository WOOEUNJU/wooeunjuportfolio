  function openImagePopup(src) {
    document.getElementById("imgPopup").style.display = "flex";
    document.getElementById("popupImage").src = src;
    document.body.style.overflow = "hidden"; // 스크롤 막기
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