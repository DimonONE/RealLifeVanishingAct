import { Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {styles} from './styles';

const Header = () => {
  return (
    <LinearGradient 
        colors={['rgba(125, 209, 193, 0.05)', 'rgba(136, 125, 193, 0.05) ']} 
        style={styles.header}
      >
        <Text style={styles.headerLogo}>R L V A - T U H S A</Text>
      </LinearGradient>
  );
}

export default Header;

      
