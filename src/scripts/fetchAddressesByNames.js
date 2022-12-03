const axios = require('axios');

const fetchAddressesByNames = async universities => {
  const res = [];
  for await (const university of universities) {
    const addressData = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${university.university_name}&key=${API_KEY}`,
      {
        headers: {
          'Accept-Encoding': '*',
        },
      },
    );

    res.push({
      ...university,
      address: addressData.data.results[0]?.formatted_address || '',
    });
  }
  return res;
};

module.exports = {fetchAddressesByNames};
