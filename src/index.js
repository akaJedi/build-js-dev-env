import numeral from 'numeral';

const courseValue = numeral(1000).format('s0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);