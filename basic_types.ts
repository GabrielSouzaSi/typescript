// numbers
let name_var: number = 123;
name_var = 321;
name_var = 1.2;
name_var = 0xfa;
console.log(name_var);

// boolean
let active: boolean = true;

// string
let firstName = "Gabriel";
let lastName = "Souza";
let fullName: string = `${firstName} ${lastName}`;

//enum
enum ROLRES {
  MANAGER = "manager",
  ADMIN = "Admin",
  CEO = "CEO",
  CTO = "CTO",
}

function setRole(role: ROLRES): void {}
setRole(ROLRES.ADMIN);

// arrays
let names = ["Gabriel", "TI", "DEV", true, 1];
let names1: string[] = ["Gabriel", "Eti"];
let names2: Array<string> = ["Gabriel", "Eti"];
let names3: Array<any> = ["Gabriel", "Eti", true, 123, 0xfa];
