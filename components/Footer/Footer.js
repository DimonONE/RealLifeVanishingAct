import { Image, ImageBackground, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {styles} from './styles';

const Footer = () => {
  return (
    <LinearGradient 
        colors={['rgba(125, 209, 193, 0.05)', 'rgba(136, 125, 193, 0.05) ']} 
        style={styles.footer}
      >
      <View style={styles.name}>
        <Text style={styles.title}>Name</Text>
      </View>

      <ImageBackground 
        source={require('../../assets/svg/buttonTime.png')}
        style={styles.timeContainer}
      >
        <Text style={styles.time}>4:31</Text>
      </ImageBackground>

      <View style={styles.players}>
        <Text style={styles.title}>Players:</Text>
        <Text style={styles.countPlayers}>5</Text>
      </View>
    </LinearGradient>
  );
}

export default Footer;

      
