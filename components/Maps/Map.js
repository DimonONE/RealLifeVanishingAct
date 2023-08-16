import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { View, Dimensions, Text, TouchableOpacity} from 'react-native';
import MapView, {Circle} from 'react-native-maps';
import {styles} from './styles';
import { footerHeight } from '../Footer/styles';
import { headerHeight } from '../Header/styles';
import CratePlayersMarker from '../CratePlayersMarker/CratePlayersMarker';

const radiusDefault = 100

const mockPlayers = [
  {
    id: 1,
    name: 'Dima',
    hunt: false
  },
  {
    id: 2,
    name: 'Valera',
    hunt: true
  },
]


const Map = () => {
  const [players, setPlayers] = useState(mockPlayers)
  const [radius, setRadius] = useState(radiusDefault)
  const [pin, setPin] = useState({
    latitude: 0,
    longitude: 0
  })

  const width = Dimensions.get('window').width; 
  const heightMap = Dimensions.get('window').height - (headerHeight + footerHeight)+ 47 ; 

  const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync({});
    setPin({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    getLocation()
  };

  useEffect(() => {
    requestLocationPermission()
  }, []);

  if (pin.latitude === 0 && pin.longitude === 0) {
    return <Text>Loading...</Text>
  }

  const test = () => {
    setPin((prev) => ({...prev, latitude: prev.latitude + 0.001}))
  };

  return (
    <View 
      style={{ height: heightMap, top: headerHeight}}
    >
      <MapView
        style={{...styles.maps, width, height: heightMap}}
        initialRegion={{
          latitude: pin.latitude,
          longitude: pin.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <CratePlayersMarker pin={pin} players={players} />

        <Circle 
          center={pin} 
          radius={radius}
          strokeWidth={2}
          strokeColor="red"
          fillColor="rgba(0, 255, 11, 0.3)"

        />
      </MapView>
      <TouchableOpacity 
        style={{position: 'absolute', backgroundColor: 'red'}} onPress={test}>
        <Text>Get location</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Map;

      
