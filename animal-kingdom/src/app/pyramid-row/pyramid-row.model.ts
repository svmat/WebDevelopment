import { Animal} from '../animal/animal.model';

export class PyramidRow {
  animals: Animal[] = [];
  level: number;

  constructor(level: number) {
      this.level = level;
  }

  addAnimal(animal) {
    console.log("Animal " + animal.type + " added to the row level " + this.level);
    this.animals.push(animal);
  }
}
