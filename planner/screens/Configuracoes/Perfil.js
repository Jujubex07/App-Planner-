import React from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Button, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { UseNavigation } from '@react-navigation/native';

export default function Perfil() {
  const navigation = UseNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialIcons name="more-vert" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.profilePicture} />
        <Text style={styles.profileName}>Juliana Marques</Text>
      </View>

      <View style={styles.overviewSection}>
        <View style={styles.taskBox}>
          <Text style={styles.taskNumber}>1</Text>
          <Text style={styles.taskLabel}>Tarefas Concluídas</Text>
        </View>
        <View style={styles.taskBox}>
          <Text style={styles.taskNumber}>1</Text>
          <Text style={styles.taskLabel}>Tarefas Pendentes</Text>
        </View>
      </View>

      <View style={styles.upcomingTasksSection}>
        <Text style={styles.upcomingTasksTitle}>Tarefas nos próximos 7 dias</Text>
        <View style={styles.taskCard}>
          <MaterialIcons name="event" size={24} color="black" />
          <View style={styles.taskDetails}>
            <Text style={styles.taskTitle}>Festa</Text>
            <Text style={styles.taskDate}>28-08</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="calendar-today" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="person" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F3EAF5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E5D4E8',
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7B529D',
  },
  overviewSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  taskBox: {
    width: '45%',
    backgroundColor: '#E5D4E8',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  taskNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7B529D',
  },
  taskLabel: {
    fontSize: 16,
    color: '#7B529D',
  },
  upcomingTasksSection: {
    marginVertical: 20,
  },
  upcomingTasksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#7B529D',
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5D4E8',
    padding: 15,
    borderRadius: 10,
  },
  taskDetails: {
    marginLeft: 10,
  },
  taskTitle: {
    fontSize: 16,
    color: '#7B529D',
  },
  taskDate: {
    fontSize: 14,
    color: '#7B529D',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
};
