abstract class Animal {
  abstract makeNoise() :string 
}

class Dog extends Animal{
  makeNoise(): string {
    return 'Random noise'
  }
}