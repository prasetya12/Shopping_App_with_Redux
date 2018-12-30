import React,{Component} from 'react'
import {Text,View,Image} from 'react-native'
import { connect } from 'react-redux'
import { Card,CardItem, Container,Header, Left, Icon,Body, Content, Button, Footer} from 'native-base';

import {ALL_ORDER} from '../redux/actions/product'


class CartScreen extends Component{

    componentDidMount(){
        this.props.dispatch(ALL_ORDER())
    }

    convertToRupiah(angka)
{
	var rupiah = '';		
	var angkarev = angka.toString().split('').reverse().join('');
	for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
	return rupiah.split('',rupiah.length-1).reverse().join('');
}
    render(){
        alert(JSON.stringify(this.props.order.results))
        return(
            <Container>
                <Header style={{backgroundColor:'#009688',marginTop:10}}>
                    <Left style={{marginLeft:10}}>
                        <Icon name='ios-arrow-back' style={{fontSize:30,color:'white'}} onPress={()=>this.props.navigation.goBack()}/>
                    </Left>
                    <Body >
                        <Text style={{color:'white',fontWeight:'500',fontSize:18}}>
                            My Cart
                        </Text>
                    </Body>
                    

                </Header>
                <Content>
                    {this.props.order.results.map((item,key)=>(
                        <Card style={{flexDirection:'row'}}>
                        <View style={{position: "absolute", top: 0, right: 0,marginRight:5,marginTop:5}}>
                            <Icon name='md-close' style={{color:'red',fontSize:25}}/>      
                        </View>

                        <View style={{width:100,height:100,marginLeft:10}}>
                            <Image source={{uri:item.product.image_url}} style={{width:100,height:100}}/>

                        </View>
                        <View style={{width:200,height:100,marginLeft:10}}>
                            <View style={{width:250,height:60,justifyContent:'center'}}>
                                <Text style={{fontSize:16,fontWeight:'500'}}>
                                   {item.product.name}
                                </Text>
                            </View>
                            <View style={{width:180,height:60,flexDirection:'row',alignItems:'center'}}>
                                <View style={{width:130,height:60,justifyContent:'center'}}>
                                <Text style={{fontWeight:'300'}}>
                                {this.convertToRupiah(item.price)}
                                
                                </Text>
                                    
                                </View>
                                <View style={{width:100,height:60,flexDirection:'row',justifyContent:'center',marginRight:20,alignSelf:'center',alignItems:'center',marginBottom:50}}>
                    
                                    
                                    <View>
                                        <Button style={{width:30,height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#fffff771'}}>
                                            <Text style={{fontSize:16,fontWeight:'300'}}>
                                                -
                                            </Text>
                                        </Button>
                                    </View>
                                    
                                    <View style={{width:30,height:30,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:16}}>{this.qty}</Text>

                                    </View>
                                    <View>
                                        <Button style={{width:30,height:30,backgroundColor:'#fffff771',justifyContent:'center',alignItems:'center'}}>
                                            <Text style={{fontSize:16,fontWeight:'300'}}>
                                                +
                                            </Text>
                                        </Button>
                                    </View>
                                    
                                </View>
                            </View>
                        </View>
                        {/* <CardItem style={{width:100,height:120}}>
                            <Image source={{uri:'https://d2giyh01gjb6fi.cloudfront.net/default/0002/43/thumb_142427_default_big.jpeg'}} style={{width:100,height:120}}/>

                        </CardItem>
                        <CardItem style={{width:240,height:120,backgroundColor:'yellow',marginLeft:20,flexDirection:'row'}}>
                            <View>
                                <Text>
                                    Xiaomi MI 8
                                </Text>
                            </View>
                        </CardItem>
                        <CardItem style={{width:240,height:60,backgroundColor:'yellow',marginLeft:20,flexDirection:'row'}}>
                            <View style={{width:120,height:60,backgroundColor:'purple'}}>
                                <Text>
                                    10000
                                </Text>
                            </View>
                            <View style={{width:120,height:60,backgroundColor:'yellow'}}>
                            <Text>
                                    10000
                                </Text>
                            </View>
                        </CardItem>
                         */}

                    </Card>
                    ))}


                

                    
                </Content>
                <Footer style={{backgroundColor:'white'}}>
                         <Left style={{marginLeft:20}}>
                            <Text style={{fontSize:14,fontWeight:'400'}}>
                                Total
                            </Text>
                             <Text style={{fontSize:18,color:'#009688',fontWeight:'500'}}>
                                 6000000
                             </Text>
                         </Left>
                         <Body style={{marginRight:10}}>
                             <Button style={{right:0,backgroundColor:'#009688',width:150,height:50,justifyContent:'center',alignItems:'center',borderRadius:16}}>
                                 <Text style={{color:'white'}}>
                                     Checkout
                                 </Text>
                             </Button>
                         </Body>

                </Footer>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    order: state.orderReducer,

  })
  
export default connect(mapStateToProps)(CartScreen)