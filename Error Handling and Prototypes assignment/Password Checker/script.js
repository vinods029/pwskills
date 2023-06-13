// 7. Password Checker.
// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.


class User{
    constructor(u,p){
        this.username= u;
        this.password = p;
    }

    setPassword(newPass){

        if (newPass.length >=8 && /[A-Z]/.test(newPass) && /\d/.test(newPass) ){
            this.password = newPass
        }
        else {
            console.log("Error: Password must be at lease 9 chacraters long and contain at least one number and one uppercase letter.");
        }
        
    }

    getPassword(){
        console.log("*".repeat(this.password.length));

    }

}

const user = new User("Mithun", "Password123")
user.getPassword()


user.setPassword("heyheh")
user.setPassword("Mypassword12345")
user.getPassword()