import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {styles} from './styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Map from '../../components/Maps/Map';

const GameScreen = ({navigation}) => {
  const createChannel = async () => {
    
  };
   
  return (
    <View style={styles.container}>
      <Header />
      <Map />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

export default GameScreen;