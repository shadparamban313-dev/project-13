// var customer = {
//     Name : "Ajith",
//     Age : 24,
//     AccountType : "Savings",
//     Balance : 50000,
//     Transactions:[5000 , -2000,3000,-1500]
// }

// customer.Transactions.push(10000)
// customer.Balance = customer.Balance + 10000

// customer.Transactions.push(7000)
// customer.Balance = customer.Balance -7000


// customer.Transactions.pop()
// customer.Balance = customer.Balance +7000

// customer.Transactions.push(15000)
// customer.Balance = customer.Balance + 15000

// var totalDeposit = 10000 + 5000 + 15000 + 3000

// var totalWithdrawals = 2000  + 1500 

// var numberTransation = customer.Transactions.length 

// var netTranactionAmount = customer.Balance

// console.log(totalDeposit)
// console.log(totalWithdrawals)
// console.log(numberTransation)
// console.log(netTranactionAmount)

// var withdrawal = prompt("Enter the withdrawal amount")

// if(withdrawal >= 0){
//     if(withdrawal<=customer.Balance){
//         if(customer.Age>=18){
//             if(customer.Balance-withdrawal<10000){
//                 console.log("Warning Balance less then 10000")
//                 customer.Balance = customer.Balance-withdrawal
//                 totalWithdrawals = totalWithdrawals+withdrawal
//                 customer.Transactions.push(-withdrawal)
//                 console.log("Balance amount:",customer.Balance)
                
//             }else{
//                 customer.Balance = customer.Balance-withdrawal
//                  totalWithdrawals = totalWithdrawals+withdrawal
//                 customer.Transactions.push(-withdrawal)
//                 console.log("Balance amount:",customer.Balance)

//             }
//         }else{
//             console.log("Age Must be 18")
//         }

//     }else{
//         console.log("Balance is less than withdrawaal")
//     }
// }else{
//     console.log("enter a amount Greater than zero")
// }



// if (customer.Balance >= 75000){
//     console.log("Premium Customer")
//     customer.AccountStatus = "Premium Customer"
// }else if (customer.Balance >= 40000){
//     console.log("Standard Customer")
//     customer.AccountStatus = "Standard Customer"
// }else if (customer.Balance >= 10000){
//     console.log(" Basic Customer")
//     customer.AccountStatus = "Basic Customer"
// }else{
//     console.log(" Low Balance ")
// }



// if (customer.Balance >=50000 && customer.Age >= 21){
//     console.log("Customer have Premium Benefits")
// }else if (totalDeposit>=20000 || customer.Balance >=75000 ){
//     console.log(" Special Deposit Offer")}
//     else if (customer.Age < 18 || customer.Balance <0 ){
//     console.log("security alert")}



var customer={
    name: "Ajith",
    age: 27,
    membership: "Premium",
    roomTypes: ["Deluxe", "Standard", "Suite"],
    roomPrices: [3000, 2000, 5000],
    numberofNights: [2, 3, 1],
    bookedroom:[1,2,3,4,5],
};

console.log(customer);
customer.roomTypes.push("executive")
customer.roomPrices.push(4000)
customer.numberofNights.push(2)
customer.roomTypes.push("family")
customer.roomPrices.push(6000)
customer.numberofNights.push(2)
customer.roomTypes.pop()
customer.roomPrices.pop()
customer.numberofNights.pop()
customer.roomTypes.push("luxury")
customer.roomPrices.push(8000)
customer.numberofNights.push(3)

var dlx=(customer.roomPrices[0]*customer.numberofNights[0])
var stnd=(customer.roomPrices[1]*customer.numberofNights[1])
var sut=(customer.roomPrices[2]*customer.numberofNights[2])
var exc=(customer.roomPrices[3]*customer.numberofNights[3])
var lux=(customer.roomPrices[4]*customer.numberofNights[4])

console.log(dlx);
console.log(stnd);
console.log(sut);
console.log(exc);
console.log(lux);


var ttlrm=(dlx+stnd+sut+exc+lux)
console.log(ttlrm);
console.log(customer.bookedroom[0]+customer.bookedroom[1]+customer.bookedroom[2]+customer.bookedroom[3]+customer.bookedroom[4]);
var avg=(ttlrm/5)
console.log(avg);
console.log(customer.numberofNights[0]+customer.numberofNights[1]+customer.numberofNights[2]+customer.numberofNights[3]+customer.numberofNights[4]);


if(ttlrm>=30000&&customer.membership=="Premium"){
    console.log("20% discount");
    var discount =(ttlrm*20)/100
    var fb=(ttlrm-discount)
    console.log(fb);
    
    
}else if(ttlrm>=20000){
    console.log("15% discount");
    var discount=(ttlrm*15)/100
    var fb=(ttlrm-discount)
    console.log(fb);
   
    
    
}else if(ttlrm>=10000){
    console.log("10% discount");
    var discount=(ttlrm*10)/100
    var fb=(ttlrm-discount)
    console.log(fb);
    
    
}else{
    console.log("no discount is applied");
    
}

var sc=(fb*5)/100
var fm=(fb+500)
var lastft=(sc+fm)
console.log(sc);
console.log(fm);
console.log(lastft);


if(customer.membership=="Premium"&&lastft>=25000){
    console.log("Free Breakfast Eligibility");
    
}else if(customer.membership=="Premium"&&customer.numberofNights>=4){
    console.log("Free Airport Pickup");
    
}else if(customer.age>=25&&customer.numberofNights>=6){
    console.log("Special Customer Offer");
    
}else if(lastft>40000||customer.roomTypes[4]){
    console.log("Luxury Booking Alert");
    
}