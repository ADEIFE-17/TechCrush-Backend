let total = 0;

total += 5000;
total += 3000;
total += 2000;
console.log("Total before discount: ₦" + total);

total -= total * 0.10;
console.log("After 10% discount: ₦" + total);

total += total * 0.075;
console.log("After 7.5% VAT: ₦" + total);

total /= 3;
console.log("Amount per person: ₦" + total);