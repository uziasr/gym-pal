import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



const WorkoutCalendar = ({ dates }) => {

    const [markedDates, setMarkedDates] = useState({})

    const sampleDates = {
        '2020-05-16': true,
        '2020-05-17': true,
        '2020-05-18': true,
        '2020-05-19': true,
    }


    if (dates.length > 0 && Object.keys(markedDates).length == 0) {
        dates.map(date => {
            setMarkedDates(() => {
                return { ...markedDates, [date]: { disabled: false, marked: true } }
            })
        })
    }

    dayPressHandler = (date) =>{
        if (date in markedDates){
            console.log("this is a valid date ", date)
        } 
    }

    return (
            <Calendar
                // Collection of dates that have to be marked. Default = {}
                horizontal={true}
                minDate={'2020-01-01'}
                onDayPress={(day) => dayPressHandler(day.dateString)}
                // style={{
                //     height:400
                // }}
                // markedDates={{
                //     '2020-05-16': { disabled: false, marked: true },
                //     '2020-05-17': { disabled: false, marked: true },
                //     '2020-05-18': { disabled: false, marked: true, dotColor: 'red', activeOpacity: 0 },
                //     '2020-05-19': { disabled: true, disableTouchEvent: true }
                // }}
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