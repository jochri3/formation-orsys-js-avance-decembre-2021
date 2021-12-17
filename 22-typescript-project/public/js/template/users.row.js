export class UserTemplate {
    constructor(user) {
        this.user = user;
    }
    createUserRow() {
        const userRow = document.createElement("tr");
        const htmlString = `<td>${this.user.getFirstName()}</td><td>${this.user.getLastName()}</td>`;
        userRow.innerHTML = htmlString;
        return userRow;
    }
}
