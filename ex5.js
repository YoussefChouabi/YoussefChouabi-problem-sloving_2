/**
 *
 *
 * @param {number} number
 * @return {number} 
 */
function factorielle(number){
    if(number<0){
        exit(1);
    }
    let fact=1 ;
    for(i=2;i<=number;i++){
        fact *=i; 
    }   
     console.log(fact);
}
factorielle(5);