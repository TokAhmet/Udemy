class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	grettings() {
		console.log(`Hello! my name is ${this.name} and iam ${this.age} years old`);
	}
}
module.exports = Person;
