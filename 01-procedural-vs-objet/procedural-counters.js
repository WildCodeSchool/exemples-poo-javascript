function incrementCounter(counter) {
  if (counter.value < counter.max) {
    counter.value += 1;
    console.log(`Counter ${counter.name}'s value is now ${counter.value}`);
  } else {
    console.error(`Reached max (${counter.max}) - Can't increment ${counter.name}`);
  }
}

function canIncrementCounter(counter) {
  return counter.value < counter.max;
}

const counter1 = {
  name: 'Counter #1', value: 0, max: 5
};

const counter2 = {
  name: 'Counter #2', value: 0, max: 3
};

// Cette boucle est exécutée tant que le compteur peut être incrémenté
while(canIncrementCounter(counter1)) {
  incrementCounter(counter1);
}
// Cette tentative d'incrémenter le compteur, sans vérification préalable,
// va se solder par un échec
incrementCounter(counter1);

// Idem
while(canIncrementCounter(counter2)) {
  incrementCounter(counter2);
}
incrementCounter(counter2);
