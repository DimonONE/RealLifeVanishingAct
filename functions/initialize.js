import AsyncStorage from '@react-native-community/async-storage';

export const localStoreInit = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error localStoreInit => ', error);
  }
};

export const getLocalStore = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value
  } catch (error) {
    console.error('Error getLocalStore => ', error);
  }
};