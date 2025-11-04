import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const UsersScreen = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://fake-json-api.mock.beeceptor.com/users')
            setUsers(response.data)
            console.log(response.data);
        } catch (error) {
            console.log("حدث خطأ:", error)
        }
    }

    const renderItem = ({ item }) => (
        <View style={styles.card}>

            <Image source={{ uri: item.photo }} style={styles.Image} />

            <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
                <Text style={styles.company}>{item.company}</Text>
            </View>
        </View>
    )
    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Profiles</Text>

            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default UsersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#054385',
        padding: 10,
        alignItems:'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10,
        color:'#ffffff'
        
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 3, // ظل خفيف للأندرويد
    },
    Image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    info: {
        marginLeft: 12,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    email: {
        color: 'gray',
    },
    company: {
        color: '#007AFF',
    },
})