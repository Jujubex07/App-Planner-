import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Button, StyleSheet } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
};

LocaleConfig.defaultLocale = 'br';

export default function EditableCalendar() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [eventText, setEventText] = useState('');

    const handleDayPress = day => {
        setSelectedDate(day.dateString);
        setModalVisible(true);
    };

    const handleAddEvent = () => {
        if (selectedDate && eventText) {
            setEvents(prevEvents => ({
                ...prevEvents,
                [selectedDate]: {
                    marked: true,
                    dotColor: 'red',
                    events: [...(prevEvents[selectedDate]?.events || []), eventText]
                }
            }));
            setModalVisible(false);
            setEventText('');
        }
    };

    return (
        <View style={styles.container}>
            <CalendarList
                current={selectedDate}
                onDayPress={handleDayPress}
                markedDates={events}
                monthFormat={'MMMM yyyy'}
                horizontal={true}
                pagingEnabled={true}
                pastScrollRange={50}
                futureScrollRange={50}
                hideArrows={false}
                hideExtraDays={false}
                disableMonthChange={false}
                theme={{
                    selectedDayBackgroundColor: '#085BC7',
                    todayTextColor: '#085BC7',
                    selectedDayTextColor: '#ffffff',
                    dayTextColor: '#000',
                    dotColor: '#085BC7',
                    selectedDotColor: '#ffffff',
                    arrowColor: '#085BC7',
                }}
            />

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o evento"
                        value={eventText}
                        onChangeText={setEventText}
                    />
                    <Button title="Adicionar Evento" onPress={handleAddEvent} />
                    <Button title="Cancelar" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});
