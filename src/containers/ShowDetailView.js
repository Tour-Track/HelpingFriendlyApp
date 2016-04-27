import React, { Image, MapView, StyleSheet, TabBarIOS, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TabBarActions from '../actions/tabBar';
import ShowMapView from './ShowMapView';

const mapStateToProps = (state) => ({
  tour: state.tour
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(TabBarActions, dispatch);
}

export class ShowDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTabs() {
    return (
      <View style={styles.tabItems}>
        <Text style={styles.tabText}>sup</Text>
      </View>
    );
  }

  changeTab(tappedTab) {
    if (this.props.tour.selectedTab !== tappedTab) {
      this.props.changeTab(tappedTab);
    }
  }

  render() {

    return (
      <View style={styles.pageContainer}>

        <ShowMapView
          data={this.props.data}
        />

        <TabBarIOS
          tintColor="darkseagreen"
          barTintColor="ivory"
          style={styles.tabBar}

        >
          <TabBarIOS.Item
            systemIcon="history"
            onPress={() => this.changeTab('history')}
          >
          {this.renderTabs()}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="favorites"
            onPress={() => this.changeTab('favorites')}
          >
          {this.renderTabs()}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="contacts"
            onPress={() => this.changeTab('contacts')}
          >
          {this.renderTabs()}
          </TabBarIOS.Item>
        </TabBarIOS>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailView);
