import { StyleSheet, Text, TextInput, View, ImageBackground, Alert, } from 'react-native'
import React, { useState } from 'react'
import Imagge from '../../assets/images/1.jpeg'
import axios from 'axios'


const Home = () => {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState({})

  const getWeather = async () => {
    if (!city.trim()) return //.trim هاذي تخليه يشيل كل الوايت سبيس ما يحسبها
    console.log('here')
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ar&appid=d61155d6aa5736ab057e3dfe61e43198`)
      setWeather(res.data)

    } catch (error) {

      alert("تأكد من اسم المدينة")

    }
  }

  return (
    <ImageBackground source={Imagge} style={styles.images}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={city}
          placeholder='اكتب مدينتك'
          onChangeText={(text) => setCity(text)}
        />
        <Text style={styles.textButton} onPress={getWeather}> بحث </Text>
      </View>

      {Object.keys(weather).length > 0 ?  
      <>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>
          {weather?.name} , {weather?.sys?.country}
        </Text>
      </View>

      <View style={styles.weatherContainer}>
        <Text style={styles.temp}>
          {Math.round (weather.main.temp)} C°

        </Text>
        <Text style={styles.weather}> {weather.weather[0].main}</Text>
      </View>
      </>
        : null}

    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  images: {
    flex: 1,

  },
  textInputContainer: {
    backgroundColor: "#ffffffcf",
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '60%'
  },
  textInput: {
    height: 40,
    // width: '60%',
    fontWeight: '600',
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  locationContainer: {
    marginVertical: 15,

  },
  location: {
    color: "#ffffff",
    fontSize: 35,
    fontWeight: '500',
    textAlign: 'center',
    textShadowColor: "#0000009f",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  },
  weatherContainer: {
    alignItems: 'center'
  },
  temp: {
    textAlign: 'center',
    color: "#fff",
    fontSize: 100,
    fontWeight: "800",
    backgroundColor: "#ffffff5f",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    overflow: "hidden",
    marginTop: 10,
    textShadowColor: "#0000009f",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 10
  },
  weather: {
    color: "#fff",
    fontSize: 48,
    fontWeight: '700',
    shadowColor: "#000000",
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.7
  },
})