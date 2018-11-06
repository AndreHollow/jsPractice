/*
The "Roulette wheel selection", also known as "Fitness proportionate selection", is a genetic operator used in genetic algorithms for selecting potentially useful solutions for recombination.

Your task is to implement it.

roulette

You throw a coin in and has a chance to fall in one of the slots, the higher the fitness the higher the chance the element has to be selected.

Given the population and fitnesses, your task is to run the roulette to return one element.
*/

const population = [1, 2, 3];
const fitnesses =  [0.05, 0.05, 0.90];

const select = (population, fitnesses) => {
  for(let i = 0; i < population.length; i++){
    if(Math.random() < fitnesses[i])
      return population[i];
  }
};

