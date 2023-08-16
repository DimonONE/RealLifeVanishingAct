import { Text } from 'react-native';
import  { Callout, Marker} from 'react-native-maps';
import {styles} from './styles';


const CratePlayersMarker = (props) => {
  const {pin, players} = props;

  return players.map((player) => (
    <Marker 
      key={player.id}
      // coordinate={pin}
      coordinate={{
        latitude: player.hunt ? pin.latitude + 0.0005 : pin.latitude,
        longitude: pin.longitude 
      }}
      pinColor= {player.hunt ? 'tomato' : 'plum'}
    >
      <Callout 
        style={styles.callout}
      >
        <Text style={styles.calloutText}>{player.name}</Text>
      </Callout>
    </Marker>
  ))
   
}

export default CratePlayersMarker;

      
