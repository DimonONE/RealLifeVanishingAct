import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {styles} from './styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const GameScreen = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Header />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

export default GameScreen;