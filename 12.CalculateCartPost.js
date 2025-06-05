function calculateCartCost(N,P,Q){
    // Write code here
    let total=0;
    for(let i=0;i<N;i++){
      total+=P[i]*Q[i];
      }
    console.log(total);
}