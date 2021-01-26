import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';


function Today() {


  const [temperature, setTemp] = useState([]);
  const [mintemperature, setMintemp] = useState([]);
  const [description, setDescription] = useState([]);
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
    .then(res => {
      setTemp(res.data.daily[0].temp.day)
      setMintemp(res.data.daily[0].temp.min)
      setDescription(res.data.daily[0].weather[0].description)
      setIcon(res.data.daily[0].weather[0].icon)
    })
  }, [])

  return (
    <View style={styles.body}>
        <View style={styles.box_today}>
          <Text style={styles.text_today}>Today</Text>
          <Text style={styles.text_temp}>{temperature}°C</Text>
          <Text style={styles.text_mintemp}>{mintemperature}°C</Text>
        </View>
        <View style={styles.img}>
            <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}} />
            <Text style={styles.description}>{description}</Text>
        </View>
    </View>
  );
}
  // const [temperature, setTemp] = useState([]);
  // const [mintemperature, setMintemp] = useState([]);
  // const [description, setDescription] = useState([]);
  // const [icon, setIcon] = useState([]);
  // const todayData = [
  //   setTemp(res.data.daily[0].temp.day),
  //   setMintemp(res.data.daily[0].temp.min),
  //   setDescription(res.data.daily[0].weather[0].desription),
  //   setIcon(res.data.daily[0].weather[0].icon),
  // ]
  // const [today, setToday] = useState([])
  
  // useEffect(() => {
  //   axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
  //   .then(res => {  
  //     const today = {
  //       temp: setTemp(res.data.daily[0].temp.day),
  //       minTemp: setMintemp(res.data.daily[0].temp.min),
  //       description: setDescription(res.data.daily[0].weather[0].desription),
  //       icon: setIcon(res.data.daily[0].weather[0].icon),
  //     }

  //     setToday([...today, newToday])
  //   })
  // }, [])
  // const image = { uri : ""}
  // return (
  //   <View style={styles.body}>

  //       <View>
  //         <Text>Today</Text>
  //         <Text></Text>
  //         <Text></Text>
  //       </View>
  //       <View>
  //           <Text></Text>
  //           <Text></Text>
  //       </View>
  //   </View>
  // );
  // }

export default Today

const styles = StyleSheet.create({
    body: {
      backgroundColor: '#265EBF',
      height: 200,
      flex: 1,
      flexDirection: 'row',
      margin: 0,
    },
    icon: {
      height: 150,
      width: 200,
    },
    text_color: {
      color: 'white',
    },
    text_today: {
      color: 'white',
      fontSize: 30,
    },
    text_temp: {
      color: 'white',
      fontSize: 60,
    },
    text_mintemp: {
      color: 'white',
      fontSize: 40,
    },
    img: {
      marginLeft: 150,
    },
    description: {
      color: 'white',
      marginLeft: 10,
      fontSize: 30,
    },
    today: {
        width: 200,
        marginLeft: '60%',
        marginTop: 100,
        fontSize: 20,
    },
    box_today: {
      marginLeft: 30,
      marginTop: 20,
    },
})
