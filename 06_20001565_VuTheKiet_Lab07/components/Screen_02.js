import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import Search from '../assets/search.png'
import Tick from '../assets/tick.png'
import Note from '../assets/note.png'


export default function Screen02() {

    const route = useRoute();
    const navigation = useNavigation();
    const [userData, setUserData] = useState({});
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (route.params && route.params.userData) {
            setUserData(route.params.userData);
            fetchUserTasks(route.params.userData.id);
        }
    }, [route.params]);

    const goToAddTaskScreen03 = () => {
        navigation.navigate('Screen03', {
            userId: userData.id,
            addTask: addTask,
        });
    };

    const addTask = async (task) => {
        try {
            await fetch(`https://65485652dd8ebcd4ab22bd72.mockapi.io/api/user/todos/${userData.id}/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description: task }),
            });
            fetchUserTasks();
        } catch (error) {
            console.error('Error adding task', error);
        }
    };
    
    const fetchUserTasks = async () => {
        try {
            const response = await fetch(`https://65485652dd8ebcd4ab22bd72.mockapi.io/api/user/todos/${userData.id}/tasks`);
            const tasksData = await response.json();
            setTasks(tasksData);
        } catch (error) {
            console.error('Error fetching user tasks', error);
        }
    };
    
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 20, marginLeft: 30}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Screen01')}}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginRight: 20}}>
                    <Image source={{ uri: userData.avatar}} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10}}/>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontFamily: 'Epilogue', fontSize: 20, fontWeight: 700}}>Hi {userData.name}</Text>
                        <Text style={{fontFamily: 'Epilogue', fontSize: 14, fontWeight: 700}}>{userData.description}</Text>
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
                    data={userData.tasks}
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
