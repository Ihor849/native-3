import { View,  Dimensions, StyleSheet } from "react-native";
import MapView, {Marker} from 'react-native-maps'

const MapScreen = ({ route }) => {
  let x 
  let y 
  const { item } = route.params;

  console.log( item.gps.latitude);

  if(item.location){
     x = item.gps.latitude || 50.515339
     y = item.gps.longitude || 30.602185
  }
  else {
    x = 50.515339
    y = 30.602185

  }

 
  return (
   
     <View style={styles.map}>
      <MapView  style={{ flex: 1,}}
      initialRegion={{
        longitude: y,
        latitude: x,
        longitudeDelta:  0.1,
        latitudeDelta: 0.1 ,
      }}
      >
        <Marker 

        coordinate={{ longitude: y, latitude: x,}}
        title="travel photo"
        />
      </MapView>
     </View>
  
  );
};


const styles = StyleSheet.create({
  map: {

    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;