import React, { Component } from 'react'
import { StyleSheet, Text, view, ImageBackground } from 'react-native'
// import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from './assets/imgs/today.jpg'
import commonStyles from './src/commonStyles'

export default class Agenda extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} 
                    style={styles.background}>
                        <View style={styles.titleBar}>
                            <Text style={styles.title}>Hoje</Text>
                            <Text style={styles.subtitle}>
                                {/* {moment().locale('pt-br').format('ddd, D [de] MMMM ')} */}
                            </Text>
                        </View>
                </ImageBackground>
                <View style={styles.taksContainer}>
                    <Text>Tarefa 1</Text>
                    <Text>Tarefa 2</Text>
                    <Text>Tarefa 3</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        flex: 1,
        color: commonStyles.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle: {
        flex: 1,
        color: commonStyles.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    taksContainer: {
        flex: 7,
    }

})