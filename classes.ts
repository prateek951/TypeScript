//This is static typing in form of classes which we cannot do with regularJS
interface UserInterface{
	name : string;
	email : string;
	age : number;
	register();
	payInvoice();
}
class User implements UserInterface{
	name: string;
	email: string;
	age:number;
	constructor(name:string,email:string,age:number) {
		// code...
		this.name = name;
		this.email = email;
		this.age = age;
		console.log('User created ' + this.name);

	}
	register(){
		console.log(this.name + ' is now registered ');
	}

	payInvoice(){
		console.log(this.name + ' paid invoice');
	}
}

//Creating the instance of the class

// let myUser:User = new User('Prateek','prince.cenation@gmail.com',21);

// console.log(myUser.age);
// myUser.register();

class Member extends User {
	id:number;
	constructor(id:number,name:string,email:string,age:number) {
		super(name,email,age);
		this.id = id;
	}
	payInvoice(){
		super.payInvoice();
	}
}

let myMember: User = new Member(1,'Prateek Madaan','prince.cenation@gmail.com',33);

myMember.payInvoice();