"use strict"
//Es6 classes, inheritance, and new Strings[includes, startsWith, endsWith]
class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }


    register(username){
        console.log(`hey ${this.username}, you're successfully registered with us.`)

    }
}

let mike= new User('mike','mike@mike.com','123');
console.log(mike.username);
mike.register();

class Member extends User{
    constructor(username,email,password,memberPackage){
        super(username,email,password);
        this.package=memberPackage;

    }
    getPackageStatus(){
         console.log(`Hey ${this.username},you're successfully subscribed for ${this.package} package.`);
    }
}
let brandon = new Member('Brandon','email@gmail.com','1234ww','premium');
brandon.getPackageStatus();
var userwithUs= `we have two users right now first is ${mike.username} and second is "${Member.username}" in list.`;
console.log(userwithUs);
console.log('i starts with "we"? : '+userwithUs.startsWith('we'));
console.log('i ends with "list" ? : '+userwithUs.endsWith('list'));
console.log('i includes "username" in me ? : '+userwithUs.includes('username'));
console.log('i includes "whale" in me ? : '+userwithUs.includes('whale'));
