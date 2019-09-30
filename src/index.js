module.exports = function zeros(expression) {
  let arrNum = expression.split('*');
  let arrFac = [], arrNotFac = []; // arrays of factorials(!) and not factorials(!!)
  let f = 0, nf = 0;  // counters for arrays
  let numDoubles = 0, numFives = 0, zeros = 0;  // counters for 2 and 5;

  for (let i = 0; i<arrNum.length; i++) {  // separate expression into 2 arrays
    if (arrNum[i].includes('!!')) {
      arrNotFac[nf] = parseInt(arrNum[i]);
      nf++;
    } else {
      arrFac[f] = parseInt(arrNum[i]);
      f++;
    }
  }
  for (let i = 0; i<arrFac.length; i++) {
    zeros += Math.trunc(arrFac[i]/5) + Math.trunc(arrFac[i]/25);
    numDoubles++; // check for having number(2) in expression
  }
  for (let i = 0; i<arrNotFac.length; i++) {
    if(arrNotFac[i] % 2 == 0) {
      numDoubles++; // check for having number(2) in expression
      zeros += Math.trunc(arrNotFac[i]/10) + Math.trunc(arrNotFac[i]/50);
    } else {
      zeros += Math.trunc(arrNotFac[i]/5) - Math.trunc(arrNotFac[i]/10) + Math.trunc(arrNotFac[i]/25) - Math.trunc(arrNotFac[i]/50);
    }
  }

  return (numDoubles) ? zeros : 0;

}
