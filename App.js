import React, {useState} from 'react';
import { View, StyleSheet, Text, FlatList} from 'react-native';


export default function App(){

  const [feed, setFeed] = useState([
    {id: 1,nome:'Rodrigo', idade: 32,email: 'rodrigoTeste@gmail.com'},
    {id: 2,nome:'Elisama', idade: 30,email: 'zaminha@hotmail.com'},
    {id: 3,nome:'João Pedro', idade: 14,email: 'jpm@outlook.com'},
    {id: 4,nome:'José Lucas', idade: 10,email: 'lukinhas@yahoo.com.br'},
    {id: 5,nome:'Ana Clara', idade: 10,email: 'clarinha@bol.com'},
    {id: 6,nome:'Toni', idade: 60,email: 'tonyaxetony@gmail.com'},
    {id: 7,nome:'Natalia', idade: 50,email: 'irmaNathalia@teste.com'},
    {id: 8,nome:'Helane Nacimento', idade: 29,email: 'laineDoOlhao@hotmail.com'},
    {id: 9,nome:'Willamis', idade: 30,email: 'willgostosodasilva@gmail.com'},
    {id: 10,nome:'Josuel Fernandes', idade: 20,email: 'josuelFernandes@silva.com.br'},
  ]);

  return(
    <View style={myStyle.container}>
      <FlatList
        data={feed}
        renderItem={ ({item}) => <PessoaFeed data={item} /> }
        
      />
    </View>
  );
}

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#919191'
  },
  title:{
    fontSize: 25,
    color: '#fefefe'
  },
  areaPessoaFeed:{
    backgroundColor: '#121212',
    height: 200,
    marginBottom: 15,
  }
});

function PessoaFeed(props){
  return(
    <View style={myStyle.areaPessoaFeed}>
      <Text style={myStyle.title}>{props.data.id}</Text>
      <Text style={myStyle.title}>{props.data.nome}</Text>
      <Text style={myStyle.title}>{props.data.idade}</Text>
      <Text style={myStyle.title}>{props.data.email}</Text>
    </View>
  );
}