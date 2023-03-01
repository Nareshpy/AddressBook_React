import { people } from "../allcontacts";
import { IPerson } from "../assets/icontact";
import { Contactlist } from "./contactlist/contactlist";
export class Services {
    addContact(newPerson: IPerson): void {
        people.unshift(newPerson);
    }
    deleteDetails(id: string): void {
        let toDelete: IPerson = this.getContactById(id);
        people.splice(people.indexOf(toDelete), 1);
    }
    updateContact(id: string, editedContact: IPerson): void {
        let toEdit: IPerson = this.getContactById(id);
        // toEdit.name = editedContact.name;
        // toEdit.email = editedContact.email;
        // toEdit.mobile = editedContact.mobile;
        // toEdit.landline = editedContact.landline;
        // toEdit.website = editedContact.website;
        // toEdit.address = editedContact.address;
        people[people.indexOf(toEdit)]=editedContact;
    }
    getContactById(id: string): IPerson {
        return people.find((contact) => {
            return contact.id == id
        }) as IPerson
    }
}

