class People {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}
let people = new People('徐同保3');
console.log(people.getName());