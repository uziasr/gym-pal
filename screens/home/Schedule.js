import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getSchedule } from '../../state/actions/savedAction'


const Schedule = ({ navigation }) => {

    const dateToday = new Date()
    const formattedDate = `${dateToday.getFullYear()}-${dateToday.getMonth() + 1 > 9 ? '' : 0}${dateToday.getMonth() + 1}-${dateToday.getDate() > 9 ? '' : 0}${dateToday.getDate()}`
    const [currentDate, setCurrentDate] = useState(formattedDate)

    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()


    const loadItems = (day) => {
        dispatch(getSchedule(state.reducer.token))
    };


    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
                <Card>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Text style={{ fontSize: 20 }}>{item ? item.name : null}</Text>
                            <Avatar.Text label={item ? item.name[0].toUpperCase() : null} />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };


    const createEvent = () => (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Schedule Workout', { date: currentDate })} style={{ marginVertical: 40, padding: 20, backgroundColor: "dodgerblue", width: "80%", alignItems: "center", alignSelf: "center", borderRadius: 30 }}>
                <Text style={{ color: "white", fontSize: 24 }}>
                    Schedule a Workout
                </Text>
            </TouchableOpacity>
        </View>
    )


    return (
        <View style={{ flex: 1, height: 400 }}>
            <Agenda
                items={state.savedReducer.agenda}
                onDayChange={day => console.log(day)}
                onDayPress={(day) => setCurrentDate(day.dateString)}
                loadItemsForMonth={loadItems}
                selected={currentDate}
                renderItem={renderItem}
                renderEmptyData={createEvent}
            />
        </View>
    );
};

export default Schedule;