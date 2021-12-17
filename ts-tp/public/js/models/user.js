export class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getUsername() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
    getPhone() {
        return this.phone;
    }
    getWebsite() {
        return this.website;
    }
    getAddress() {
        return this.address;
    }
    getCompany() {
        return this.company;
    }
}
