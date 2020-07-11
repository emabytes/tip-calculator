function calculate() {
  let billInput = Number(document.getElementById("bill-input").value);
  let splitInput = Number(document.getElementById("split-input").value);
  let perPerson = billInput / splitInput;
  let rateInput = document.getElementById("rate").value;

  if (rateInput == "bad") {
    //bad service - 2% tip
    tipTwo = billInput * 0.02;
    document.getElementById("bill-amount").innerHTML =
      billInput + tipTwo + " &euro;";
    document.getElementById("tip-amount").innerHTML = tipTwo.toFixed(2) + " &euro; (2%)";
    document.getElementById("per-person").innerHTML =
      (perPerson + tipTwo / splitInput).toFixed(2) + " &euro;";
  } else if (rateInput == "good") {
    //good service - 10% tip
    tipTen = billInput * 0.1;
    document.getElementById("bill-amount").innerHTML =
      billInput + tipTen + " &euro;";
    document.getElementById("tip-amount").innerHTML = tipTen.toFixed(2) + " &euro; (10%)";
    document.getElementById("per-person").innerHTML =
      (perPerson + tipTen / splitInput).toFixed(2) + " &euro;";
  } else if (rateInput == "great") {
    //great service 20% tip
    tipTwenty = billInput * 0.2;
    document.getElementById("bill-amount").innerHTML =
      billInput + tipTwenty + " &euro;";
    document.getElementById("tip-amount").innerHTML = tipTwenty.toFixed(2) + " &euro; (20%)";
    document.getElementById("per-person").innerHTML =
      (perPerson + tipTwenty / splitInput).toFixed(2) + " &euro;";
  } else {
      document.getElementById("warning").innerHTML = "Please, rate the service!";
      document.getElementById("bill-amount").innerHTML = "...";
      document.getElementById("tip-amount").innerHTML = "...";
      document.getElementById("per-person").innerHTML = "...";
  }
}
