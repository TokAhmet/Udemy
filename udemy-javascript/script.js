const bill = 275;

// check if the bill value is between 50 aen 300 then then tip is 15% else it is 20%
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
