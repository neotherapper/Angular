export class Person {
  name: string;
  dayOfBirth: number;
  monthOfBirth: number;
  yearOfBirth: number;

  constructor(
    name: string,
    dayOfBirth: number,
    monthOfBirth: number,
    yearOfBirth: number
    ) {
    this.name = name;
    this.dayOfBirth = dayOfBirth;
    this.monthOfBirth = monthOfBirth;
    this.yearOfBirth = yearOfBirth;
  }
}
