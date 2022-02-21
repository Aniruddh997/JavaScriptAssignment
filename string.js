class User{
    static count = 0;
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
        User.count++;
    }
    static countUsers(){
        console.log("Number of registered users = "+this.count);
    }
    register(){
        console.log(this.username+" registered successfully.");
    }
}

let u1 = new User('abc','abc@gmail.com','abc@');
u1.register();
User.countUsers();
let u2 = new User('def','def@gmail.com','def@');
User.countUsers();
u2.register();

