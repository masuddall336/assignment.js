function kilometerToMeter(kilo){
    var makeRasult = kilo * 1000;
    return makeRasult;
}
var rasult = kilometerToMeter(46);
console.log(rasult);



function budgetCalculator(watch, phone, laptop){
    var watch = watch * 50;
    var phone = phone * 100;
    var laptop =laptop * 500;
    var total = watch + phone + laptop;
    return total;
}
var  rasult = budgetCalculator(5, 3, 4);
console.log(rasult);



function hotelCost(userInput){
    if(userInput <= 10){
        var makeRasult = userInput * 100;
        return makeRasult;
    }else if(userInput <= 20){
        var first10 = 10 * 100;
        var outFirst10 = userInput - 10;
        var makeRasultSecond = outFirst10 * 80;
        var total = makeRasultSecond + first10;
        return total;
    }else{
        var first10  = 10 * 100;
        var second10 = 10 * 80;
        var outFirst10AndSecond10 = userInput - 20;
        var makeRasultThird = outFirst10AndSecond10 * 50;
        var total = first10 + second10 + makeRasultThird;
        return total;
    }

}
var rasult = hotelCost(24);
console.log(rasult);



function megaFriend(arra){
    var arryLength = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var takeArry = arra[i].length;
        if (takeArry > arryLength) {
            ans = arra[i];
            arryLength = takeArry;
        }
    }
    return ans;
}
var rasult = megaFriend(["Abdullah", "Roni", "Masud"]);
console.log(rasult);