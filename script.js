var InitialPrice = document.querySelector("#initial-price");
var StocksQuantity = document.querySelector("#stocks-quantity");
var CurrentPrice = document.querySelector("#current-price");
var CheckBtn = document.querySelector("#check-btn");
var Output = document.querySelector("#output");

CheckBtn.addEventListener("click", function CalculateProfitAndLoss(){
    Output.style.display="none";
    var initial = Number(InitialPrice.value);
    var quantity = Number(StocksQuantity.value);
    var current = Number(CurrentPrice.value);
    if(initial>current){
        var loss = (initial - current)* quantity;
        var lossPercentage = (loss/initial)*100;
        showMessage(`The loss is ${loss} The loss percent is ${lossPercentage}%`);
    } else if(initial<current){
        var profit = (current - initial)* quantity;
        var ProfitPercentage = (profit/initial)*100;
        showMessage(`The Profit is ${profit} and The Profit percent is ${ProfitPercentage}%`);
    } else {
        showMessage("Welcome to the static world")
    }
});
function showMessage(msg){
    Output.innerText = msg;
    Output.style.display = "block";
}