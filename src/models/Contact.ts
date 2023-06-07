class Contact {
  name: string;
  email: string;
  numberContact: number;
  id: number;

  constructor(name: string, email: string, numberContact: number, id: number) {
    this.name = name;
    this.email = email;
    this.numberContact = numberContact;
    this.id = id;
  }
}

export default Contact;
