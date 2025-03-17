function SecureBankAcct(){
    let amount=0;
    let operation= {
        deposit: function(increment){
            amount+=increment;
        },
        withdraw: function(decrement){
            amount-=decrement;
        },
        getDeposit: function(){
            return `After transactions final amount : ${amount}`;
        }
    }
    return operation;
}
let account=SecureBankAcct();
account.deposit(100);
account.withdraw(50);
console.log(account.getDeposit());