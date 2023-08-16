import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import {styles} from './styles';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { getLocalStore, localStoreInit } from '../../functions/initialize';

const MainScreen = ({navigation}) => {
  const [userName, setUserName] = useState('')
  const [codeGame, setCodeGame] = useState('')

  const onChangeText = (setValue) => (value) => {
    setValue(value)
  };

  // const userValidation = (type, value) => {
  //   if(type === 'userName' && value < 4) {
  
  //   }
  // };

  const onSubmit = async (event) => {
    // Set local store
    await localStoreInit('userName', userName)
    await localStoreInit('codeGame', codeGame)

    navigation.navigate('Game')
  };

  useEffect(() => {
    (async () => {
      const name = await getLocalStore('userName')
      const code = await getLocalStore('codeGame')

      setUserName(name)
      setCodeGame(code)
    
    })()
  }, []);

  return (
    <View style={styles.wrapper}>
      <Header />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Your name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText(setUserName)}
            value={userName}
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