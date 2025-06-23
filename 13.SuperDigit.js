var addDigits = function(num) {
    while(num>=10){
        let sum=0;
        let str=num.toString();
        for(let ch of str){
            sum+=parseInt(ch)
        }
        num=sum;
    }
    return num;
}
