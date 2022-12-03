import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

import {ref, onValue} from 'firebase/database';
import {db} from '../../firebase-config.js';

const UniversitiesList = () => {
  const [universites, setUniversities] = useState([]);
  useEffect(() => {
    const starCountRef = ref(db, 'universities');
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      setUniversities(data);
    });
  }, []);

  return (
    <ScrollView style={styles.mainContainer}>
      {universites?.map((uni, index) => {
        return (
          <Text
            style={[styles.text, index % 2 !== 0 && {backgroundColor: '#fff'}]}>
            {index + 1}. {uni.university_name.split(' /')[0]}
          </Text>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    marginBottom: 6,
    padding: 10,
  },
});

export default UniversitiesList;
