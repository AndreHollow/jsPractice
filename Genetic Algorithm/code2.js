/*
Mutation is a genetic operator used to maintain genetic diversity from one generation of a population of genetic algorithm chromosomes to the next.

Mutation

A mutation here may happen on zero or more positions in a chromosome. It is going to check every position and by a given probability it will decide if a mutation will occur.

A mutation is the change from 0 to 1 or from 1 to 0.

*/
function mutate(chromosome, p){
  let mutated = [];
  
  chromosome.split('').forEach((i) => {
    if(Math.random() < p){
      if(+i){
        i = 0;
        mutated.push(i);
      }
      else {
        i = 1;
        mutated.push(i);
      }
    }
    else mutated.push(i);
  })
  
  return mutated.toString().replace(/,/g,'');
};




// refactored

const mutate = (chromosome, p) => {
  let mutated = '';
  for (let i = 0; i < chromosome.length; i++) {
    mutated += Math.random() < p ? chromosome[i] ^ 1 : chromosome[i];
  }
  return mutated;
}