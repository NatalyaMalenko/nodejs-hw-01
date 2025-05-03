import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const oldContacts = await readContacts();

    if (oldContacts.length === 0) {
      return;
    }

    oldContacts.pop();

    await writeContacts(oldContacts);
  } catch (error) {
    console.log(error.message);
  }
};

removeLastContact();
