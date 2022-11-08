var showingPopup = null;

function popup(who, selector) {
  var e = document.querySelector(selector);
  var o = document.getElementById("popup");
  var r = window.innerWidth - who.getBoundingClientRect().left;
  const scrollbarWidth = window.innerWidth - document.body.clientWidth;
  console.log(scrollbarWidth);
  if (e && o) {
    showingPopup = e;
    e.style.right = r - scrollbarWidth + "px";
    e.classList.add("visible");
    o.classList.add("visible");
    return false;
  }
}

function unpopup() {
  var o = document.getElementById("popup");
  if (o && showingPopup) {
    showingPopup.classList.remove("visible");
    o.classList.remove("visible");
    showingPopup = null;
    return true;
  }
}
