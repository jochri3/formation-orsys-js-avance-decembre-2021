import { Coordinate } from "./coordinates.js";

export class Address {
  constructor(
    private street: string,
    private suite: string,
    private city: string,
    private zipcode: string,
    private geo: Coordinate
  ) {}
}
