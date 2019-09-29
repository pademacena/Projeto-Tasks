import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    ImageBackground, 
    FlatList,
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import Task from '../components/Task'

export default class Agenda extends Component {

    state = {
        tasks: [
            {id: Math.random(), desc: 'Comprar o curso de react antive',
                estimateAt: new Date(), doneAT: new Date()},
            {id: Math.random(), desc: 'Concluir curso de react antive',
                estimateAt: new Date(), doneAT: null},
            {id: Math.random(), desc: 'Comprar o curso de react antive',
                estimateAt: new Date(), doneAT: new Date()},
            {id: Math.random(), desc: 'Concluir curso de react antive',
                estimateAt: new Date(), doneAT: null},
            {id: Math.random(), desc: 'Comprar o curso de react antive',
                estimateAt: new Date(), doneAT: new Date()},
            {id: Math.random(), desc: 'Concluir curso de react antive',
                estimateAt: new Date(), doneAT: null},
            {id: Math.random(), desc: 'Comprar o curso de react antive',
                estimateAt: new Date(), doneAT: new Date()},
            {id: Math.random(), desc: 'Concluir curso de react antive',
                estimateAt: new Date(), doneAT: null},
            {id: Math.random(), desc: 'Comprar o curso de react antive',
                estimateAt: new Date(), doneAT: new Date()},
            {id: Math.random(), desc: 'Concluir curso de react antive',
                estimateAt: new Date(), doneAT: null},
        ]
    }

    toogleTask = id => {
        const tasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task = {...task}
                task.doneAT = task.doneAT ? null : new Date()
            }
            return task
        })
        this.setState({ tasks })
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} 
                    style={styles.background}>
                        <View style={styles.titleBar}>
                            <Text style={styles.title}>Hoje</Text>
                            <Text style={styles.subtitle}>
                                {moment().locale('pt-br').format('ddd, D [de] MMMM ')}
                            </Text>
                        </View>
                </ImageBackground>
                <View style={styles.taksContainer}>
                    <FlatList data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => 
                            <Task {...item} toogleTask={this.toogleTask} /> }/>
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
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    taksContainer: {
        flex: 7,
    }

})