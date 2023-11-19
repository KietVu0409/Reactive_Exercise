import React, { useState } from "react";
import { Provider } from "react-redux";
import store from '../redux/store';
import Calculator from '../func/Calculator.js'

export default function Demo() {
    //npm install redux react-redux
    return (
        <Provider store={store}>
            <Calculator/>;
        </Provider>
        
    );
}
