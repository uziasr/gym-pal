import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



const WorkoutCalendar = ({ dates, dayPressHandler, currentDate }) => {

    const [markedDates, setMarkedDates] = useState({})

    if (dates.length > 0 && Object.keys(markedDates).length == 0) {
        dates.map(date => {
            setMarkedDates(() => {
                if (currentDate!==""){
                    return { ...markedDates, [currentDate]: {selected:true, disabled: false, marked: true, activeOpacity: 0, selectedColor: 'blue' } }
                }
                return { ...markedDates, [date]: { disabled: false, marked: true } }
            })
        })
    }

    const dayPress = (date) =>{
        if (date in markedDates){
            dayPressHandler({date:date})
        } 
    }

        // markedDates={{
                //     '2020-05-16': { disabled: false, marked: true },
                //     '2020-05-17': { disabled: false, marked: true },
                //     '2020-05-18': { disabled: false, marked: true, dotColor: 'blue', activeOpacity: 0 },
                //     '2020-05-19': { disabled: true, disableTouchEvent: true }
                // }}

    return (
            <Calendar
                horizontal={true}
                minDate={'2020-01-01'}
                onDayPress={(day) => dayPress(day.dateString)}
                markedDates={markedDates}
                disabledByDefault={true}
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: 'rgb(30, 144, 255)',
                    indicatorColor: 'rgb(30, 144, 255)',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'monospace',
                    textDayHeaderFontFamily: 'monospace',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16,
                    height: 350
                }}
            />
    );
};

export default WorkoutCalendar;