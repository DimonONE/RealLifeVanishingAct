import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {styles} from './styles';
import { useState } from 'react';
import Header from '../../components/Header/Header';

const MainScreen = ({navigation}) => {
  const [name, setName] = useState('')
  const [codeGame, setCodeGame] = useState('')
console.log('navigation', navigation);
  const onChangeText = (setValue) => (value) => {
    setValue(value)
  };

  const onSubmit = (event) => {
    console.log('event');
     navigation.navigate('Game', {name: 'Jane'})
  };

  return (
    <View style={styles.wrapper}>
      <Header />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Your name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText(setName)}
            value={name}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Code group:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText(setCodeGame)}
            value={codeGame}
          />
        </View>

        <Pressable 
          style={styles.submit}
          onPress={onSubmit}
        >
          <Text style={styles.title}>Connect</Text>
        </Pressable>
      
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default MainScreen;