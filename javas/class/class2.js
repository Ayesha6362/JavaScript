class PersonDetails {
    constructor(fname, lname) {
      this.firstName = fname;
      this.lastName = lname;
    }
    getPersonName() {
      const personName = `First Name: ${this.firstName} Last Name: ${this.lastName}`;
      return personName;
    }
  }
  
  // const personNameDetails = new PersonDetails("John", "Wick");
  // const personNameDetails2 = new PersonDetails("Iron", "Man");
  // console.log(personNameDetails2.getPersonName());
  
  class PersonContact extends PersonDetails {
    constructor(newFname, newLastname, phone, email) {
      super(newFname, newLastname); // new PersonDetails("Thor", "Asgardkar")
      this.phone = phone;
      this.email = email;
    }
    getPersonContact() {
      const contactDetails = `Phone: ${this.phone} Email: ${this.email}`;
      return contactDetails;
    }
  }
  const personContactDetails = new PersonContact(
    "Thor",
    "Asgadkar",
    9876543210,
    "ffroz@icloud.com"
  );
  // console.log(personContactDetails.getPersonName());
  // console.log(personContactDetails.getPersonContact());
  // console.log(new PersonContact("thor","asgard",9763628887,"fff@gmail.com"))