import Airtable from 'airtable';

console.log('AIRTABLE_API_KEY:', process.env.AIRTABLE_API_KEY);
console.log('AIRTABLE_BASE_ID:', process.env.AIRTABLE_BASE_ID);

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export const getProjects = async () => {
  try {
    const records = await base('Projects').select().all();
    return records.map(record => ({
      id: record.id,
      ...record.fields,
      image: record.fields.image[0].url // Assuming 'image' is an attachment field
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};