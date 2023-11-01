import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { writeToStorage, removeFromStorage } from './Storage';

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

  const deleteAluno = () => {
    removeFromStorage(alunoSalvo.matricula);
    setAlunoSalvo(null);
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
        <TouchableOpacity
          style={styles.saveButton}
          onPress={saveAluno}
        >
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
      {alunoSalvo && (
        <View style={styles.salvoContainer}>
          <Text style={styles.salvoTitle}>Aluno Salvo:</Text>
          <View style={styles.salvoInfo}>
            <Text style={styles.infoItem}>
              <Text style={styles.infoLabel}>Nome:</Text> {alunoSalvo.nome}
            </Text>
            <Text style={styles.infoItem}>
              <Text style={styles.infoLabel}>Matrícula:</Text> {alunoSalvo.matricula}
            </Text>
            <Text style={styles.infoItem}>
              <Text style={styles.infoLabel}>Turno:</Text> {alunoSalvo.turno}
            </Text>
            <Text style={styles.infoItem}>
              <Text style={styles.infoLabel}>Curso:</Text> {alunoSalvo.curso}
            </Text>
          </View>
          <TouchableOpacity onPress={deleteAluno} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Excluir</Text>
          </TouchableOpacity>
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
  saveButton: {
    backgroundColor: '#1976D2',
    borderRadius: 5,
    padding: 10,
  },
  saveButtonText: {
    color: 'white',
    textAlign: 'center',
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
  infoLabel: {
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  deleteButtonText: {
    color: '#FFFFFF',
  },
});

export default AlunoForm;
