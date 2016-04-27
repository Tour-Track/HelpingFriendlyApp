import React, { MapView, StyleSheet, Text, View } from 'react-native';

export default class ShowMapView extends React.Component {
  render() {
    const data = this.props.data;
    const region = {
      latitude: data.latitude,
      longitude: data.longitude,
      latitudeDelta: .01,
      longitudeDelta: .01
    };
    const annotations = [{
      latitude: data.latitude,
      longitude: data.longitude,
      title: data.venue,
      subtitle: `Show Time: ${data.showTime}`
    }];

    return (
      <View style={styles.container}>
        <Text style={styles.venue}>{data.venue}</Text>
        <View style={styles.basicInfoContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.bold}>Show Time: </Text><Text>{data.showTime}</Text>
            <Text style={styles.bold}>Doors Open: </Text><Text>{data.doorTime}</Text>
            <Text style={styles.bold}>Capacity: </Text><Text>{data.capacity}</Text>
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.address}>{data.address}</Text>
            <Text style={styles.address}>{data.city}, {data.state}</Text>
          </View>
        </View>

        <MapView
          style={styles.map}
          region={region}
          annotations={annotations}
        >
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  map: {
    height: 200,
    width: 300
  },
  pageContainer: {
    flex: 1,
  },
  bold: {
    fontWeight: '500',
    flexDirection: 'row'
  },
  basicInfoContainer: {
    flexDirection: 'row',
    // paddingBottom: 20,
    // width: 300,
    justifyContent: 'space-between'
  },
  timeContainer: {
    // alignItems: 'stretch'
  },
  locationContainer: {
    // alignSelf: 'stretch',
  },
  address: {
    textAlign: 'right'
  },
  venue: {
    fontSize: 25,
    // height: 70,
    // paddingTop: 10,
    letterSpacing: 1,
    color: 'darkslategrey',
    fontWeight: '500',
    // paddingBottom: 30,
    textAlign: 'center'
  },
  pic: {
    height: 200,
    width: 300,
  },
  tabBar: {
    // backgroundColor: 'darkslategrey',
    borderWidth: 1,
    // borderColor: 'red',
  },
  tabItems: {
    // flex: 1,
    // justifyContent: 'center'
  },
  tabText: {
    // color: 'red',
    // margin: 50
  },
});