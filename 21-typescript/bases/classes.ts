abstract class Person {
  private firstName: string;
  private lastName: string;
  private age: number;
  constructor(fistName: string, lastName: string, age: number) {
    this.firstName = fistName;
    this.lastName = lastName;
    this.age = age;
  }

  public getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

interface Fly {
  fly: () => void;
}

class SuperHero extends Person {
  private puissance: number;
  constructor(
    fistName: string,
    lastName: string,
    age: number,
    puissance: number
  ) {
    super(fistName, lastName, age);
    this.puissance = puissance;
  }
}

class FlyingSuperHero extends SuperHero implements Fly {
  fly: () => void;
}
