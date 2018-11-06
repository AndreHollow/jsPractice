/*
In genetic algorithms, crossover is a genetic operator used to vary the programming of chromosomes from one generation to the next.

The one-point crossover consists in swapping one's cromosome part with another in a specific given point.

In this kata you have to implement a function crossover that receives two chromosomes chromosome1, chromosome2 and a zero-based index and it has to return an array with the crossover result on both chromosomes [chromosome1, chromosome2].

Example:
crossover('111000', '000110', 3) should return ['111110', 000000']

*/

const crossover = (chromosome1, chromosome2, index) => {
  let chr1 = chromosome1.split('').splice(index).join('');
  let chr2 = chromosome2.split('').splice(index).join('');
  return [chromosome1.slice(0,index) + chr2, chromosome2.slice(0,index) + chr1];
}