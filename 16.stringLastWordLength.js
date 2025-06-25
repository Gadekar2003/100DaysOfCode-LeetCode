var lengthOfLastWord = function(s) {
    // s=s.trim(); //remove the space start and end 
    // let words=s.split(" ") //split string by space
    // return words[words.length-1].length; //it takes t.c =O(n) and s.c=O(n)
    let length=0;
    let i=s.length-1;
    while(i>=0&&s[i]==" "){
        i--;
    }
    while(i>=0&&s[i]!==" "){
        length++;
        i--;
    }
    return length; //and it takes t.c=O(n) and s.c=O(1)
};