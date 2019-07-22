import React, { Component } from 'react';
import HomeView from './HomeView';
import {Platform,NativeEventEmitter,DeviceEventEmitter} from 'react-native'
import { connect } from 'react-redux';
class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            imageList:[],
            loader:true,
            countUpdate:false
        }
    }
    componentWillMount(){
        /**
         * updating count from native to react native is done only in android and in ios i am giving count directly
         */
        if(Platform.OS==='android')
        {
            const RootActivity = new NativeEventEmitter(RootActivity);
            RootActivity.addListener('Count', (data)=> {
                this.setState({countUpdate:true})
                this.fetchImagelist(data.Count);      
                console.log("RootActivitycomponentWillMount"+JSON.stringify(data))    
            });
        }
        else{
            this.fetchImagelist(30);   
            this.setState({countUpdate:true})  
        }  
      }
    fetchImagelist(count)
    {
         fetch('https://picsum.photos/v2/list?limit='+count)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                loader:false,
                imageList:responseJson});          
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render() {
        return <HomeView 
        countUpdate={this.state.countUpdate}
        loader={this.state.loader} imageList={this.state.imageList} 
        {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
