alert("Attention! Currency transactions on this page are based on EUR = 1")

setCurrencies();
function setCurrencies() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.exchangeratesapi.io/latest", true);
    xhr.onload = function () {
        if (this.status === 200) {
            let response = JSON.parse(this.responseText);
            let rate = response.rates;
            let currencies = document.getElementById("currencies");
            currencies.innerHTML = `<option value="${response.base} = ${1} ">`;
            Object.keys(rate).forEach(function (element) {
                currencies.innerHTML += `
                <option value="${element} = ${rate[element]} ">
                `;
            })

        }

    }
    xhr.send();

}
document.getElementById("exchange").addEventListener("click", function () {

    let target1 = parseFloat(document.getElementById("unit1").value.replace(/[^0-9.]/g, ''));
    let target2 = parseFloat(document.getElementById("unit2").value.replace(/[^0-9.]/g, ''));
    
    let quantity = parseFloat(document.getElementById("quantity").value);
    
    document.getElementById("result").value= quantity*(target2/target1);

})

