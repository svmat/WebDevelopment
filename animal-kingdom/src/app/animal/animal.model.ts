export class Animal {
  name: string;
  level: string;
  type: string;
  imageURL: string;


constructor(level: string, type: string, name?: string, imageURL?: string) {
    this.name = name || "";
    this.level = level;
    this.type = type;
    this.imageURL = imageURL || "";
  }
}
