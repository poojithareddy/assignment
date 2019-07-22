import { StyleSheet ,Dimensions} from 'react-native';
const height=Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:16
    },
    header :{
        fontSize: 24,
        paddingBottom: 30,
        color: '#aaa'
    },
    row:{
        flex: 1, 
        flexDirection: 'row'
    },
    item:{
        flex: 1, flexDirection: 'column', margin: 1,
        marginBottom:16   
    },
    itemImage:{
        width:100,
        height: 100,    
    },
    loader:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    androidNavigateTextStyle:
    {
        alignItems:'center',marginTop:Dimensions.get('window').height/3
    }

});

export default styles;
