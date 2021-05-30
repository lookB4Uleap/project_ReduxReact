import React, { useState } from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {add, sub} from '../SampleAction';

const Comp1 = ({name}) => {

    const [count, setCount] = useState(0);

    const state = useSelector(state => state);

    // DISPATCHER
    const dispatch = useDispatch();
    const sum = () => dispatch(add());
    const min = () => dispatch(sub());

    console.log(state.current);

    return (
        <View style={{ height:'50%', width:'100%', backgroundColor:name === 'Component 1' ? 'white' : '#ccfff2', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.innerText}>{name}</Text>
            <View style={styles.inner}>
                <TouchableOpacity style={styles.but} onPress={sum}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.innerText}>{state.current}</Text>
                <TouchableOpacity style={styles.but} onPress={min}>
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        height: '50%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ccfff2'
    },
    inner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },  
    but: {
        borderRadius: 30,
        height: 60,
        width: 60,
        display: 'flex',
        // padding: 5,
        // margin: 5,
        backgroundColor: '#242f3f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        display: 'flex',
        fontSize: 30,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerText: {
        fontSize: 40,
        padding: 5,
        margin: 15,
    }
})

export default Comp1;