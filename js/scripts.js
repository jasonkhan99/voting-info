$(document).ready(function() {
  const age = parseInt(prompt("Enter your age"));

  if (age >= 18) {
    $("#voterInfo").show();
  } else {
    $("#under-18").show();
  }
});