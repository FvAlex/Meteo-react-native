import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import axios from 'axios';


function Otherdays () {

    // useEffect(() => {
    //     axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=en&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
    //     .then(res => {
    //       setTasks(res.data)
    //     })
    //   }, [])
    return (
        <View style ={styles.week}>
              <View style={styles.jour1}>
                <Text>Wednesday</Text>
                <Text style={styles.temp}>°C</Text>
              </View> 
              <View style={styles.jour2}>
                <Text>Thursday</Text>
                <Text></Text>
                <Text style={styles.temp}>°C</Text>
              </View>
              <View style={styles.jour3}>
                <Text>Friday</Text>
                <Text></Text>
                <Text style={styles.temp}>°C</Text>
              </View>
              <View style={styles.jour4}>
                <Text>Saturday</Text>
                <Text></Text>
                <Text style={styles.temp}>°C</Text>
              </View>
        </View>
    )
}

export default Otherdays

const styles = StyleSheet.create({
//   week: {
//     flex: 1,
//     flexDirection: 'row',
//     marginTop: 220,
//     position: 'absolute',
//   },
// jour1: {
//   border: 'solid black',
//   borderRadius: 30,
//   width: 180,
//   height: 180,
//   marginLeft: 10,
//   textAlign: 'center',
//   fontSize: 20,
//   shadowColor: "#000",
//   shadowOffset: {
//   width: 0,
//   height: 6,
//   },
//   shadowOpacity: 0.39,
//   shadowRadius: 8.30,
//   elevation: 13
// },
// jour2: {
//   border: 'solid black',
//   borderRadius: 30,
//   width: 180,
//   height: 180,
//   marginLeft: 10,
//   textAlign: 'center',
//   fontSize: 20,
//   shadowColor: "#000",
//   shadowOffset: {
//   width: 0,
//   height: 6,
//   },
//   shadowOpacity: 0.39,
//   shadowRadius: 8.30,
//   elevation: 13
// },
// jour3: {
//   border: 'solid black',
//   borderRadius: 30,
//   width: 180,
//   height: 180,
//   marginLeft: 10,
//   textAlign: 'center',
//   fontSize: 20,
//   shadowColor: "#000",
//   shadowOffset: {
//   width: 0,
//   height: 6,
//   },
//   shadowOpacity: 0.39,
//   shadowRadius: 8.30,
//   elevation: 13
// },
// jour4: {
//   border: 'solid black',
//   borderRadius: 30,
//   width: 180,
//   height: 180,
//   marginLeft: 10,
//   textAlign: 'center',
//   fontSize: 20,
//   shadowColor: "#000",
//   shadowOffset: {
//   width: 0,
//   height: 6,
//   },
//   shadowOpacity: 0.39,
//   shadowRadius: 8.30,
//   elevation: 13
// },
  
// temp: {
//   marginTop: 100,
// }

})
