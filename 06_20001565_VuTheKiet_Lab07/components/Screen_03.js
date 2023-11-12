import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import Job from '../assets/job.png'
import Book from '../assets/book.png'

export default function Screen03() {
    const route = useRoute();
    const navigation = useNavigation();
    const [newTask, setNewTask] = useState('');

    const addTaskAndNavigateBack = async () => {
        try {
            const response = await fetch(`https://your-api-url.com/api/user/${route.params.userId}/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description: newTask }),
            });
            if (response.ok) {
                // Nếu thêm công việc thành công, thông báo và quay lại màn hình trước đó
                route.params.addTask(newTask);
                navigation.goBack();
            } else {
                console.error('Lỗi khi thêm công việc');
            }
        } catch (error) {
            console.error('Lỗi khi thêm công việc', error);
        }
    };

    return (
        <View style={styles.container}>
            {/* <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 20, marginLeft: 30}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Screen02')}}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginRight: 20}}>
                    <Image source={userData.avatar} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10}}/>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontFamily: 'Epilogue', fontSize: 20, fontWeight: 700}}>Hi {userData.name}</Text>
                        <Text style={{fontFamily: 'Epilogue', fontSize: 14, fontWeight: 700}}>{userData.description}</Text>
                    </View>
                </View>
            </View> */}
            <View style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'Epilogue', fontSize: 32, fontWeight: 700}}>ADD YOUR JOB</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
                <View style={{width: 334, height: 43, marginTop: 50, alignItems: 'center', justifyContent: 'center', border: '1px solid grey', borderRadius: 12, flexDirection: 'row'}}>
                    <Image source={Job} style={{width: 20, height: 20, margin: 15}}/>
                    <TextInput style={{width: 280, height: 43, alignItems: 'center', justifyContent: 'center', borderRadius: 12, padding: 10}} placeholder='Input your job' 
                                value={newTask}
                                onChangeText={text => setNewTask(text)}></TextInput>
                </View>
            </View>
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
            <TouchableOpacity style={{width: 190, height: 44, borderRadius: 12, backgroundColor: '#00BDD6', alignItems: 'center', justifyContent: 'center', marginTop: 30}} onPress={addTaskAndNavigateBack}>
                <Text style={{fontFamily: 'Inter', fontSize: 16, fontWeight: 400, color: '#FFFFFF'}}>FINISH</Text>
            </TouchableOpacity>
        </View>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
                <Image source={Book} style={{width: 190, height: 170}}/>
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

