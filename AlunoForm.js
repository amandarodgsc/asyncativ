import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { writeToStorage } from './Storage';

const AlunoForm = ({ onSave }) => {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [turno, setTurno] = useState('');
  const [curso, setCurso] = useState('');
  const [alunoSalvo, setAlunoSalvo] = useState(null);

  const saveAluno = () => {
    const aluno = { nome, matricula, turno, curso };
    writeToStorage(aluno);
    setAlunoSalvo(aluno);
    setNome('');
    setMatricula('');
    setTurno('');
    setCurso('');
  };

  return (
    <View style={styles.formContainer}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNome(text)}
        value={nome}
      />
      <Text>Matrícula:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMatricula(text)}
        value={matricula}
      />
      <Text>Turno:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTurno(text)}
        value={turno}
      />
      <Text>Curso:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCurso(text)}
        value={curso}
      />
      <View style={styles.buttonContainer}>
        <Button title="Salvar" onPress={saveAluno} color="#1976D2" />
      </View>
      {alunoSalvo && (
        <View style={styles.salvoContainer}>
          <Text style={styles.salvoTitle}>Aluno Salvo:</Text>
          <View style={styles.salvoInfo}>
            <Text style={styles.infoItem}>Nome: <Text style={styles.infoValue}>{alunoSalvo.nome}</Text></Text>
            <Text style={styles.infoItem}>Matrícula: <Text style={styles.infoValue}>{alunoSalvo.matricula}</Text></Text>
            <Text style={styles.infoItem}>Turno: <Text style={styles.infoValue}>{alunoSalvo.turno}</Text></Text>
            <Text style={styles.infoItem}>Curso: <Text style={styles.infoValue}>{alunoSalvo.curso}</Text></Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    borderWidth: 1,
    borderColor: '#1976D2',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 5,
  },
  buttonContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#1976D2',
    borderRadius: 10,
    padding: 5,
  },
  salvoContainer: {
    borderWidth: 1,
    borderColor: '#1976D2',
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
  },
  salvoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  salvoInfo: {
    marginLeft: 10,
  },
  infoItem: {
    marginBottom: 5,
  },
  infoValue: {
    fontWeight: 'bold',
  },
});

export default AlunoForm;
