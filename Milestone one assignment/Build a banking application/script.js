

let customer = {
    name: "vinod",
    balance:2000,

    deposit: function(amount){
        this.balance += amount;
        console.log(`Deposit of ${amount} successfull. New balance: ${this.balance} `);
    },

    withdrawal: function(amount){
        if (this.balance > amount){
            this.balance -= amount;
            console.log(`withdrawal of ${amount} successfull. New balance: ${this.balance} `);
        } else {
            console.log(`Insufficient balance, withdrawal unsuccessfull`);
        }
    }

}


customer.deposit(10000)
customer.withdrawal(50000)