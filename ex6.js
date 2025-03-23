/**
 *
 *
 * @param {Function} FuncTion
 * @param {number} number
 */
function executer(FuncTion , number) {
    FuncTion(number);
}
function afficherCarre(number){
     console.log(number*number);
}
executer(afficherCarre,5);