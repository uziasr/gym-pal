import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, Overlay } from 'react-native-elements';
import { setStyles } from '../../styles/index'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

const Sets = ({ exerciseSet, order }) => {

    const [editing, setEditing] = useState(false)

    const [editedValues, setEditedValues] = useState({
        weight: exerciseSet.weight,
        repetition: exerciseSet.repetition,
        unit: exerciseSet.unit
    })

    const [deleting, setDeleting] = useState(false)

    const toggleOverlay = () => {
        setEditing(() => !editing);
    };

    const onChangeHandler = (name, text) => {
        setEditedValues(() => ({ ...editedValues, [name]: text }))
    }

    const EditForm = () => (
        // <Overlay isVisible={editing} style={setStyles.overlayStyles} onBackdropPress={toggleOverlay}>
        <>
            {deleting ?
                <View style={{justifyContent:"center"}}>
                    <Text style={{alignSelf: "center", color: "white", fontSize: 17, bottom:5}}>Are you sure you want to delete?</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between", width: "40%", alignSelf:"center",}}>
                        <TouchableOpacity style={{ padding:12}}>
                            <Text style={{color:"white", fontSize: 18}}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding:12}}>
                            <Text style={{color:"white", fontSize: 18}}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={setStyles.editWrap}>
                    <TouchableOpacity onPress={() => setDeleting(!deleting)}>
                        <FontAwesome name="trash-o" size={20} color="red" />
                    </TouchableOpacity>
                    <View style={setStyles.inputStyles}>
                        <Input
                            label="Weight" x
                            value={(editedValues.weight).toString()}
                            onChangeText={text => onChangeHandler("weight", text)}
                            inputStyle={{ textAlign: "center", color: "white" }}
                            keyboardType='number-pad'
                        // numericValue
                        />
                    </View>
                    <View style={setStyles.inputStyles}>
                        <Input
                            label="Repetitions"
                            value={(editedValues.repetition).toString()}
                            onChangeText={text =>
                                setEditedValues(() => ({ ...editedValues, repetition: text.toString() }))
                            }
                            inputStyle={{ textAlign: "center", color: "white" }}
                            keyboardType='number-pad'
                        // numericValue
                        />
                    </View>
                    <TouchableOpacity onPress={() => {
                        setEditedValues({ ...editedValues, unit: editedValues.unit == "pounds" ? "kilograms" : "pounds" })
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1E90FF", paddingVertical: 5, paddingHorizontal: 12, borderRadius: 60 }}>{editedValues.unit == "pounds" ? "LBS" : "KG"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="check-circle" size={24} color="#00FF7F" />
                    </TouchableOpacity>
                </View>
            }
        </>

        // </Overlay>
    )

    return (
        <View style={setStyles.rootWrap}>
            <View style={{ ...setStyles.textWrap, height: editing ? 140 : null }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                    <Text style={setStyles.textStyles}>{order}</Text>
                    <Text style={setStyles.textStyles}>{exerciseSet.weight} X {exerciseSet.repetition}</Text>
                    <Text style={setStyles.textStyles}>{exerciseSet.unit ? 'LBS' : 'KG'}</Text>
                    <TouchableOpacity style={{ padding: 5 }} onPress={() => toggleOverlay()}>
                        <FontAwesome5 name="edit" size={16} color="white" />
                    </TouchableOpacity>
                </View>
                {editing ? EditForm() : null}
            </View>

        </View>
    );
};

export default Sets;