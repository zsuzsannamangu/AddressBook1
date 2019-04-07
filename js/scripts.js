//Business logic for AddressBook ---------
function AddressBook() { //AddressBook constructor
  this.contacts = [] //an empty array, containing a list of Contact objects
}

//Create a prototype method to add new Contacts to an AddressBook: this new method, called addContact(), takes a contact object as an argument.
AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact); // it locates the AddressBook's contacts array by calling this.contacts. It uses push() to add the Contact provided as an argument to the AddressBook's contacts array property.
}

//Business logic for Contacts -------------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var addressBook = new AddressBook();
var contact = new Contact("Ada", "Lovelace", "503-555-0100");
var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
addressBook.addContact(contact);
addressBook.addContact(contact2);

// return addressBook.contacts;
// return addressBook.contacts[0].firstName;
