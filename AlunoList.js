import React from 'react';
import { View, FlatList } from 'react-native';
import AlunoItem from './AlunoItem';

const AlunoList = ({ alunos, onDelete }) => {
  return (
    <View>
      <FlatList
        data={alunos}
        keyExtractor={(aluno) => aluno.matricula}
        renderItem={({ item }) => (
          <AlunoItem aluno={item} onDelete={onDelete} />
        )}
      />
    </View>
  );
};

export default AlunoList;
