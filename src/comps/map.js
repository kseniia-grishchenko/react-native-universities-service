import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Map = () => {
  return (
    <View style={styles.mainContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 50.45466,
          longitude: 30.5238,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    top: -500,
  },
});

export default Map;
