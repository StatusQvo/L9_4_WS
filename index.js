function checkArrayForCoffee() {
    const coffees = ["Latte", "Cappuccino", "Americano"];
    const prices = [1.5, 1, 2];
    let newPrices = prices.map((item) => item+= 0.5)

    coffees.forEach((item, index)=>{
        alert(`Кофе ${item} сейчас стоит ${newPrices[index]} евро`)
      })
}

checkArrayForCoffee()