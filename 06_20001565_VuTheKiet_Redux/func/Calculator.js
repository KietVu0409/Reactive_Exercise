import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from "react";
import { connect } from 'react-redux';
import { setA } from '../redux/action';
import { setB } from '../redux/action';
import { add } from '../redux/action';
import { subtract } from '../redux/action';
import { multiply } from '../redux/action';
import { divide } from '../redux/action';

const Calculator = ({a, b, result, setA, setB, add, subtract, multiply, divide}) => {

    const handleInputChange = (event, target) => {
        const num = parseInt(event.target.value);
        if (target === 'a') {
            setA(num);
        } else if (target === 'b') {
            setB(num);
        }
    };

    return(
        <View style={styles.container}>

            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text>Nhập a: </Text>
                <TextInput style={{ width: 100, height: 30, border: '1px solid black', padding: 5, borderRadius: 5}} value={a} onChange={(e) => handleInputChange(e, 'a')}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <Text>Nhập b: </Text>
                <TextInput style={{ width: 100, height: 30, border: '1px solid black', padding: 5, borderRadius: 5}} value={b} onChange={(e) => handleInputChange(e, 'b')}/>
            </View>
            <View style={{margin: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text>Kết quả: </Text>
                <Text style={{ width: 200, height: 30, border: '1px solid black', padding: 5, borderRadius: 5}}>{result}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{ width: 80, height: 80, borderRadius: 80, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', marginRight: 20}}
                                    onPress={
                                        () => subtract()
                                    }>
                    <Text style={{fontSize: 50}}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 80, height: 80, borderRadius: 80, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', marginRight: 20}}
                                    onPress={
                                        () => add()
                                    }>
                    <Text style={{fontSize: 50}}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 80, height: 80, borderRadius: 80, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', marginRight: 20}}
                                    onPress={
                                        () => multiply()
                                    }>
                    <Text style={{fontSize: 50}}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 80, height: 80, borderRadius: 80, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}
                                    onPress={
                                        () => divide()
                                    }>
                    <Text style={{fontSize: 50}}>/</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

var mapStateToProps = (state) =>({
    a: state.a,
    b: state.b,
    result: state.result,
})

var mapDispatchToProps = {
    setA,
    setB,
    add,
    subtract,
    multiply,
    divide,
};

// var mapDispatchToProps = (dispatch) => ({
//     add: () =>{return dispatch(add())},
//     subtract: () =>{return dispatch(subtract())},
//     multiply: () =>{return dispatch(multiply())},
//     divide: () =>{return dispatch(divide())},
//     setA: () =>{return dispatch(setA(num))},
//     setB: () =>{return dispatch(setB(num))},
// })

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);