import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const json = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, json, 'utf-8');
    console.log('Контакти успішно записані у файл.');
  } catch (error) {
    console.error('Помилка запису:', error.message);
  }
};
