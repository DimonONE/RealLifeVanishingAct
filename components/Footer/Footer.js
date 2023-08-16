import { Image, ImageBackground, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {styles} from './styles';
import { useGlobalState } from '../../Store/Store';
import { useEffect, useState } from 'react';
import { formatTime, getTimeUpdate } from '../../functions/times';

const Footer = () => {
  const [time, setTime] = useGlobalState('timeUpdate')
  const [timeUpdate, setTimeUpdate] = useState('01:00')

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const remainingTime = getTimeUpdate(timeUpdate);

      setTimeUpdate(formatTime(remainingTime));

      if (remainingTime < 0) {
        // Обратный отсчет завершен, обновляем глобальное состояние времени
        setTimeUpdate('02:00')
        setTime(timeUpdate);

        clearInterval(countdownInterval);
      }
    }, 1000); 

    return () => {
      clearInterval(countdownInterval);
    };
  }, [timeUpdate, setTime]);

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
        <Text style={styles.time}>{timeUpdate || '00:00'}</Text>
      </ImageBackground>

      <View style={styles.players}>
        <Text style={styles.title}>Players:</Text>
        <Text style={styles.countPlayers}>5</Text>
      </View>
    </LinearGradient>
  );
}

export default Footer;

      
