import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    let newContact = [];

    for (let i = 0; i < number; i++) {
      newContact.push(createFakeContact());
    }

    await writeContacts([...contacts, ...newContact]);
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(10);
