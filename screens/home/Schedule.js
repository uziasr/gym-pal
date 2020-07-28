import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';


// const timeToString = (time) => {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
// };

const Schedule = ({ navigation }) => {
    const [items, setItems] = useState({});
    const dateToday = new Date()
    const formattedDate = `${dateToday.getFullYear()}-${dateToday.getMonth() + 1 > 9 ? '' : 0}${dateToday.getMonth() + 1}-${dateToday.getDate() > 9 ? '' : 0}${dateToday.getDate()}`
    const [currentDate, setCurrentDate] = useState(formattedDate)

    const loadItems = (day) => {

        setItems({
            '2012-05-22': [{ name: 'item 1 - any js object' }],
            '2012-05-23': [{ name: 'item 2 - any js object', height: 80 }],
            '2012-05-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }],
            '2020-07-22': [{ name: 'item 3 - any js object' }, { name: 'any js object' }],
            '2020-07-23': [{ name: 'item 4 - hfdsahflkjjlkfda' },],
            '2020-07-27': [{ name: 'item 5 - !!!!!!!!!!!!!!!!!!!!!!' },],
            '2020-07-31': [{ name: 'item 5 - ***************' },],
        })
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
                            <Text>{item ? item.name : null}</Text>
                            <Avatar.Text label="J" />
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
                // items={items}
                items={items}
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
