//Business logic for AddressBook ---------
function AddressBook() { //AddressBook constructor
  this.contacts = [] //an empty array, containing a list of Contact objects
  this.currentId = 0 //Now each time a new AddressBook is created, it will have a currentId property that begins at 0.
}

//Create a prototype method to add new Contacts to an AddressBook: this new method, called addContact(), takes a contact object as an argument.
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId(); // we need to call this new assignId() method whenever we add a new Contact to the AddressBook
  this.contacts.push(contact); // it locates the AddressBook's contacts array by calling this.contacts. It uses push() to add the Contact provided as an argument to the AddressBook's contacts array property.
}

//ensure each new Contact added to the AddressBook has a unique ID
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
//We'll create a find() method that allows us to find a Contact by its id property. It will be a AddressBook prototype because that's where we're trying to find the specific Contact.
AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        return this.contacts[i];
      }
    };
  return false;

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
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
