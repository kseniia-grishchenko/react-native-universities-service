const {db} = require('../../firebase-config.js');
const {ref, set} = require('firebase/database');
const fs = require('fs');
const path = require('path');
const {fetchAddressesByNames} = require('./fetchAddressesByNames.js');

async function writeUserData() {
  const file = fs.readFileSync(
    path.resolve(__dirname, '../../assets/universities.json'),
    'utf-8',
  );
  const universities = JSON.parse(file);
  const universitiesWithCitiesName = await fetchAddressesByNames(universities);
  set(ref(db, 'universities'), universitiesWithCitiesName);
}

writeUserData();
