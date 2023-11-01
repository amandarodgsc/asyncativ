import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AlunoForm from './AlunoForm';
import AlunoList from './AlunoList';
import { readFromStorage, removeFromStorage } from './Storage';

const HomeScreen = () => {
  const [alunos, setAlunos] = useState([]);

  const fetchAlunos = async () => {
    const data = await readFromStorage();
    setAlunos(data);
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  const addAluno = (aluno) => {
    setAlunos([...alunos, aluno]);
  };

  const deleteAluno = (matricula) => {
    removeFromStorage(matricula);
    setAlunos(alunos.filter((aluno) => aluno.matricula !== matricula));
  };

  return (
    <View style={styles.container}>
      <AlunoForm onSave={addAluno} />
      <AlunoList alunos={alunos} onDelete={deleteAluno} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;
