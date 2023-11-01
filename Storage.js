import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'alunos';

export const writeToStorage = async (aluno) => {
  try {
    const data = await readFromStorage();
    const newData = data ? [...data, aluno] : [aluno];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  } catch (error) {
    console.error('Error writing to storage:', error);
  }
};

export const readFromStorage = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading from storage:', error);
    return [];
  }
};

export const removeFromStorage = async (matricula) => {
  try {
    const data = await readFromStorage();
    const updatedData = data.filter((aluno) => aluno.matricula !== matricula);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  } catch (error) {
    console.error('Error removing from storage:', error);
  }
};
