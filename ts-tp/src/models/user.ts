import { Company } from "./company.js";
import { Address } from "./address.js";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export class User {
  constructor(
    private id: number,
    private name: string,
    private username: string,
    private email: string,
    private address: Address,
    private phone: string,
    private website: string,
    private company: Company
  ) {}

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getUsername() {
    return this.username;
  }

  public getEmail() {
    return this.email;
  }

  public getPhone() {
    return this.phone;
  }

  public getWebsite() {
    return this.website;
  }

  public getAddress() {
    return this.address;
  }
  public getCompany() {
    return this.company;
  }
}
