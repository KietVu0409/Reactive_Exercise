import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList} from 'react-native';
import React, { useState } from 'react';

import Male from '../assets/male.png'
import Female from '../assets/female.png'
import Search from '../assets/search.png'
import Tick from '../assets/tick.png'
import Note from '../assets/note.png'

//Danh sách người dùng, ảnh, công việc
//Ví dụ nhập tên An
const userData = {
    'An': {
      image: Male,
      description: 'Mô tả về An.',
      tasks: ['Việc 1', 'Việc 2', 'Việc 3', 'Việc 4', 'Việc 5']
    },
    'Bình': {
        image: Male,
        description: 'Mô tả về Bình.',
        tasks: ['Việc 1', 'Việc 2', 'Việc 3', 'Việc 4', 'Việc 5']
    },
    'Trâm': {
        image: Female,
        description: 'Mô tả về Trâm.',
        tasks: ['Việc 1', 'Việc 2', 'Việc 3', 'Việc 4', 'Việc 5']
    },
    'Trang': {
        image: Female,
        description: 'Mô tả về Trang.',
        tasks: ['Việc 1', 'Việc 2', 'Việc 3', 'Việc 4', 'Việc 5']
    },
};

export default function Screen02({route, navigation}) {
    const {name} = route.params;
    const user = userData[name];
    const [tasks, setTasks] = useState(user.tasks);
    const goToAddTaskScreen03 = () => {
        navigation.navigate('Screen03', { addTask: addTask,
                                            name: name, 
                                            user: user, });
    };
    
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 20, marginLeft: 30}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Screen01')}}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginRight: 20}}>
                    <Image source={user.image} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10}}/>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontFamily: 'Epilogue', fontSize: 20, fontWeight: 700}}>Hi {name}</Text>
                        <Text style={{fontFamily: 'Epilogue', fontSize: 14, fontWeight: 700}}>{user.description}</Text>
                    </View>
                </View>
            </View>
            <View style={{alignItems: 'center'}}>
                <View style={{width: 334, height: 43, marginTop: 50, alignItems: 'center', justifyContent: 'center', border: '1px solid grey', borderRadius: 12, flexDirection: 'row'}}>
                    <Image source={Search} style={{width: 20, height: 20, margin: 15}}/>
                    <TextInput style={{width: 280, height: 43, alignItems: 'center', justifyContent: 'center', borderRadius: 12, padding: 10}} placeholder='Search' ></TextInput>
                </View>
            </View>
            <View style={{marginTop: 30, alignItems: 'center', justifyContent: 'center'}}>
                <FlatList  
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                    <View style={{width: 334, height: 43, alignItems: 'center', border: '1px solid #9095A0', borderRadius: 12, flexDirection: 'row', marginTop: 10, backgroundColor: '#9095A0'}}>
                        <Image source={Tick} style={{width: 20, height: 20, marginLeft: 20}}/>
                        <View style={{width: 250, height: 43, justifyContent: 'center'}}>
                            <Text style={{fontFamily: 'Epilogue', fontSize: 14, fontWeight: 700, padding: 20}}>{item}</Text>
                        </View>
                        <Image source={Note} style={{width: 20, height: 20, marginRight: 20}}/>
                    </View>
                    )}
                />
            </View>
            <View style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{ width: 69, height: 69, borderRadius: 69, backgroundColor: '#00BDD6', justifyContent: 'center', alignItems: 'center'}} onPress={goToAddTaskScreen03}>
                    <Text style={{color: 'white'}}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
