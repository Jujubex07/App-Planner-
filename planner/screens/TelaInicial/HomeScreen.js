import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  const hoje = [
    { id: '1', title: 'Relatório Pam', date: '26-08', color: '#A64AC9' },
  ];

  const futuros = [
    { id: '2', title: 'Festa', date: '28-08', color: '#E0E0E0' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={[styles.circle, { backgroundColor: item.color }]} />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
      <MaterialCommunityIcons name="bookmark-outline" size={24} color="black" />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar"
      />
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Tarefas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Pessoal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Eventos</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Hoje</Text>
      <FlatList
        data={hoje}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Text style={styles.sectionTitle}>Futuros</Text>
      <FlatList
        data={futuros}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="pen" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Agenda')}>
          <MaterialCommunityIcons name="calendar" size={28} color="white" />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <FontAwesome name="user-circle" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7D8F6',
    paddingHorizontal: 16,
  },
  searchBar: {
    marginTop: 30,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 18,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
  },
  filterText: {
    color: '#5A5A5A',
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5A5A5A',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#F6F6F6',
    padding: 15,
    borderRadius: 15,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 15,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDate: {
    fontSize: 14,
    color: '#8F8F8F',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#A64AC9',
    padding: 15,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default HomeScreen;

