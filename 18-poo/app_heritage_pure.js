const Person = {
  id: 0,
  fname: "",
  lname: "",
  gender: "",
  fullName: function () {
    return this.fname + " " + this.lname;
  },
};

const Professor = Object.create(Person);
Professor.universities = [];
Professor.courses = [];

const Student = Object.create(Person);
Student.study = "";
Student.mname = "";
Student.fullName = function () {
  return Person.fullName.apply(this) + " " + this.mname;
};
