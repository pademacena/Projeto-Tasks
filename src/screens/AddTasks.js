import React, { Component } from 'react'
import { 
    Modal,
    View,
    Text,
    TextInput,
    DatePickerIOS,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert

} from 'react-native'
import moment from 'moment'
import commonStyles from '../commonStyles'

const initialState = { desc: '',date: new Date() }

export default class AddTask extends Component {
    state = { ...initialState }

    save = () => {
        if (!this.state.desc.trim()) {
            Alert.alert('Dados Invalidos', 'Infrome uma descricao para a sua Task')
            return
        }
        const data = { ...this.state }
        this.props.onSave(data)
        this.setState({ ...initialState })
    }

    render() {
        return (
            <Modal onRequestClose={this.props.onCancel}
                visible={this.props.isVisible}
                animationType='slide' transparent={true}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={StyleSheet.offset}></View>
                </TouchableWithoutFeedback>
                <View style={StyleSheet.container}>
                    <Text style={StyleSheet.header}>Nova Task!</Text>
                    <TextInput placeholder="Descricao..." style={StyleSheet.input}
                        onChangeText={desc => this.setState({ desc })}
                        value={this.state.desc} />
                    <DatePickerIOS mode='sate' date={this.state.date}
                        onDateChange={ date => this.setState({ date })} />
                    <View style={{ 
                        flexDirection: 'row', 
                        justifyContent: 'flex-end'
                    }} >
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={StyleSheet.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={StyleSheet.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={StyleSheet.offset}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    offset: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.default,
    },
    header: {
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.default,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 15,
    },
    input: {
        fontFamily: commonStyles.fontFamily,
        width: '90%',
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6,
    },
})