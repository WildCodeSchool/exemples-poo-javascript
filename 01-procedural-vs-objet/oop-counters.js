class Counter {
  constructor(name, max) {
    this.value = 0;
    this.max = max;
    this.name = name;
  }

  getValue() {
    return this.value;
  }

  canIncrement() {
    return this.value < this.max;
  }

  increment() {
    if (this.value < this.max) {
      this.value += 1;
      console.log(`Counter ${this.name}'s value is now ${this.value}`);
    } else {
      console.error(`Reached max (${this.max}) - Can't increment ${this.name}`);
    }
  }
}

counter1 = new Counter('Counter #1', 5);
counter2 = new Counter('Counter #2', 3);


// Cette boucle est exécutée tant que le compteur peut être incrémenté
while(counter1.canIncrement()) {
  counter1.increment();
}
// Cette tentative d'incrémenter le compteur, sans vérification préalable,
// va se solder par un échec
counter1.increment();

// Idem
while(counter2.canIncrement()) {
  counter2.increment();
}
counter2.increment();
