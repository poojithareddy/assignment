import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image,NativeModules,Platform ,NativeEventEmitter,Dimensions,TouchableOpacity} from 'react-native';
import styles from './styles';
var RootActivity = NativeModules.RootActivity;
const height=Dimensions.get('window').height;
class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageList: []
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.imageList != prevProps.imageList) {
            this.setState({ imageList: this.props.imageList })
        }
    }
    renderItemView(item) {
        /**
         * by giving width and height from server they are fitting screen nicely thats why i added hard coded width height
         */
        return (
            <View style={styles.item}>
                <Image style={styles.itemImage}
                    source={{ uri: item.download_url }} />
                <Text>{item.author}</Text>
            </View>
        )
    }
    countUpdate()
    {
        if(Platform.OS==='android')
        {
            RootActivity.navigateAndroid();

        }   
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.countUpdate?
                <View>
                <FlatList
                    data={this.state.imageList}
                    renderItem={({ item }) => this.renderItemView(item)}
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                />
                 {this.props.loader &&
                    <ActivityIndicator color="#0000ff" 
                    size="large"
                    style={{alignItems:'center',justifyContent:'center',marginTop:height/3}}
                    />}
                    </View>
                    :
                    <View style={{alignItems:'center',marginTop:height/3}}>
                    <TouchableOpacity onPress={()=>this.countUpdate()}>
                    <Text style={{fontSize:16}}>Click to android screen and enter count</Text>
                    </TouchableOpacity>

                    </View>
                
            }
            </View>

        );
    }
}
export default HomeView;
