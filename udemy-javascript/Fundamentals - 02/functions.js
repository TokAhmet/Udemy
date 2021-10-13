const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgKoalas = calcAverage(10, 20, 30);
let avgDolphins = calcAverage(30, 45, 50);

const checkWinner = (koalas, dolphins) => {
	if (koalas >= dolphins * 2) {
		console.log(`Koalas wins with ${koalas} vs ${dolphins}`);
	} else if (dolphins >= koalas * 2) {
		console.log(`Dolphins wins with ${dolphins} vs ${koalas}`);
	} else {
		console.log('no team won');
	}
};

checkWinner(avgKoalas, avgDolphins);

avgKoalas = calcAverage(85, 54, 41);
avgDolphins = calcAverage(23, 34, 27);

checkWinner(avgKoalas, avgDolphins);
