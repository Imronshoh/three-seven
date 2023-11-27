var elInp = document.querySelector(".inp");

function myFn() {
  var nm = elInp.value;

  if (nm == "") {
    alert("Nimadur kiriting iltimos");
  } else if (nm % 3 == 0 && nm % 7 == 0) {
    console.log("Bu son 3ga va 7ga bolinadi");
  } else if (nm % 7 == 0) {
    console.log("Bu son 7ga bolinadi");
  } else if (nm % 3 == 0) {
    console.log("Bu son 3ga bolinadi");
  } else {
    console.log("Bu son vashe bolinmedi 3ga yoki 7ga");
  }
  elInp.value = "";
}
