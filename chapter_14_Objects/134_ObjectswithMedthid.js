const user = {
    firstName: "Promode",
    lastName: "Digital",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(user.fullName)
user.fullName="RD SHARMA";
console.log(user.fullName)