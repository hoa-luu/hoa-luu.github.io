function toggleAbstracts(el) {
  let abstract = el.parentNode.getElementsByClassName("abstract")[0];
  if (abstract) {
    toggleMe(abstract);
    hideOther(abstract);
  }
}

function toggleMe(me) {
  if (me.style.maxHeight) {
    me.style.maxHeight = null;
  } else {
    me.style.maxHeight = me.scrollHeight + "px";
  }
}

function hideOther(me) {
  for (let abs of Array.from(document.getElementsByClassName("abstract"))) {
    if (abs !== me) {
      abs.style.maxHeight = null;
    }
  }
}
