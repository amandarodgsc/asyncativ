import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AlunoItem = ({ aluno, onDelete }) => {
  return (
    <View style={styles.item}>
      <Text>Nome: {aluno.nome}</Text>
      <Text>Matrícula: {aluno.matricula}</Text>
      <Text>Turno: {aluno.turno}</Text>
      <Text>Curso: {aluno.curso}</Text>
      <Button title="Excluir" onPress={() => onDelete(aluno.matricula)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
});

export default AlunoItem;
