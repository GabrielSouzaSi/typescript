interface userInterface {
  firstName: string;
  lastName: string;
  age: number;

  getFullName(): string;
}

const getUser = (user: userInterface): string => {
  return `${user.firstName} ${user.lastName}, age: ${user.age}`;
};

// let user = {
//   firstName: 'Gabriel',
//   lastName: 'Souza',
//   age: 28
// }

// console.log(getUser(user));
class Person implements userInterface {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, ageU: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = ageU;
  }

  getFullName(): string {
    return `${this.firstName} ${this.firstName}`;
  }
}

let person = new Person("Gabriel", "Souza", 28);
console.log(person);
