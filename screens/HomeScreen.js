import React,{Component} from 'react'
import {Text,View,Image,FlatList,ToucableOpacity,ImageBackground} from 'react-native'

import { connect } from 'react-redux'
import {ALL_PRODUCTS,ADD_ORDER} from '../redux/actions/product'

import {Container,Header, Content,Card, CardItem,Icon,Right, Button, Body} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';




class HomeScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            isAdd:false,
            idSame:false,
        }

    }

    componentDidMount(){
        this.props.dispatch(ALL_PRODUCTS())
    }

    convertToRupiah(angka)
{
	var rupiah = '';		
	var angkarev = angka.toString().split('').reverse().join('');
	for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
	return rupiah.split('',rupiah.length-1).reverse().join('');
}

order=(item)=>(
    
    this.props.dispatch(ADD_ORDER(item.price,item.id))
)
    

    render(){
        alert(JSON.stringify(this.props.product.results))

        return(
            <Container>
                <Header style={{backgroundColor:'#009688'}} transparent>
                    <Body style={{marginLeft:14}}>
                        <Text style={{color:'white',fontWeight:'500',fontSize:18}}>
                            Home
                        </Text>
                    </Body>
                    <Right style={{marginRight:10}}>
                       
                            <Icon name='md-cart' style={{fontSize:25,color:'white'}}  onPress={()=>this.props.navigation.navigate('CartScreen')}/>
                        
                        
                    </Right>

                </Header>
                <Content contentContainerStyle={{flex:1, alignItems: 'center'}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{padding:0}}>
                <View style={{height:200,backgroundColor:'black',width:'100%'}}>
                    <ImageBackground source={require('../assets/oppo.jpg')} style={{height:200,width:'100%'}} resizeMode='cover'>

                    </ImageBackground>
                </View>
                <FlatList
                    data={this.props.product.results}
                    renderItem={({item}) => (
                        <Card style={{width:170,height:220}}>
                            <CardItem style={{width:170,height:120,justifyContent:'center'}}>
                                <Image source={{uri:item.image_url}} style={{width:120,height:120}}/>

                            </CardItem>
                            <CardItem style={{width:170,height:90,flexDirection:'column'}}>
                                <View style={{height:30,width:170,marginLeft:20}}>
                                    <Text style={{fontSize:16,fontWeight:'500'}}>
                                        {item.name}
                                    </Text>
                                </View>
                                <View style={{height:50,width:170,flexDirection:'row',marginLeft:20}}>
                                    <View style={{height:50,width:70,justifyContent:'center'}}>
                                        <Text style={{fontWeight:'300',fontSize:12}}>
                                        {this.convertToRupiah(item.price)}
                                        </Text>

                                    </View>
                                    <View style={{height:50,width:95,justifyContent:'center',alignItems:'center',marginRight:20}}>
                                        <Button onPress={()=>this.order(item)} style={{width:70,height:30,backgroundColor:'#009688'}}>
                                        <View style={{flexDirection:'row',width:70,height:30,backgroundColor:'#009688',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                                            <Text style={{fontSize:14,color:'white'}}>
                                                +
                                            </Text>
                                            <Text style={{fontSize:12,color:'white',marginLeft:10}}>
                                                Add
                                            </Text>
                                        </View>
                                        </Button>
                                        

                                    </View>
                                    

                                </View>

                            </CardItem>
                        </Card>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={2} />
                </ScrollView>
                
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.productReducer,

  })
  
export default connect(mapStateToProps)(HomeScreen)
