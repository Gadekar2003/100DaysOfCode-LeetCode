var oddEvenList = function(head) {
    if(!head||!head.next) return head;
    let odd=head; //start 1st node
    let even=head.next; //start 2nd node
    let evenHead=even;  //store even list
    while(even&&even.next){
        odd.next=even.next; //skip even node
        odd=odd.next;
        even.next=odd.next; //skip odd node]
        even=even.next;
    }
    odd.next=evenHead; //connect odd and even
    return head;
    
};