import React, {Component} from 'react'
import {StyleSheet,Image} from 'react-native'
import {View, Container, Content, Left, Right, Button,Text, Item, Form, Input, Body} from 'native-base'

class SignUp extends Component{
    render(){
        return(
           <Container>
               <Content>
                   <View style={{flexDirection:'row'}}>
                       <Left>
                       <Text style={{fontSize: 20,marginLeft:10,marginTop:30,
        fontWeight: 'bold',
        color: '#009688'}}>
                            PhoneShop
                        </Text>
                       </Left>
                       <Right>
                           <Button transparent>
                                <Item style={styles.contTxt} onPress={()=>this.props.navigation.navigate('SignInScreen')}>
                                     <Text style={styles.txt}>Sign In</Text>
                                </Item> 
                           
                           </Button>
                       </Right>
                       
                   </View>
                   <View style={styles.cont1}>
                       <Text style={styles.txtCreate}>Create new account</Text>
                        <View style={styles.contForm}>
                            <Form>
                                <Item>
                                    <Input placeholder='Username' style={styles.inputUser} placeholderTextColor='grey'/>
                                </Item>
                                <Item style={styles.contEmail}>
                                    <Input placeholder='Email Address' style={styles.inputEmail} placeholderTextColor='grey'/>
                                </Item>
                                <Item style={styles.contPass}>
                                    <Input placeholder='Password' style={styles.inputPass} placeholderTextColor='grey'/>
                                </Item>
                            </Form>
                            <Body style={styles.contSignButton}>
                                <Button style={styles.buttonSign} onPress={()=>this.props.navigation.navigate('BookDetail')}>
                                    <Body style={{ justifyContent: 'center' }}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={styles.txtSign}>Sign Up</Text>
                                        </View>
                                    </Body>
                                </Button>
                            </Body>
                            
                            
                            

                        </View>
                        
                   </View>
               </Content>
           </Container>
        )
    }
}

export default SignUp

const styles=StyleSheet.create({
    
    image:{
        width:50,
        height:50,
        marginLeft:20,
        marginTop:20
    },
    txt:{
        marginTop:20,
        color:'#009688',
        
    },
    contTxt:{
        borderBottomColor:'#009688', 
        borderBottomWidth:3,
        paddingBottom:5,
        marginRight:10
    },
    cont1:{
        marginTop:50
    },
    txtCreate:{
        marginLeft:20,
        fontSize:18,
        color:'#009688'
    },
    contForm:{
        marginTop:30   
    },
    inputUser:{
        borderColor:'#009688',
        borderWidth:1,
        marginRight:20
    },
    contEmail:{
        marginTop:20
    },
    inputEmail:{
        borderColor:'#009688',
        borderWidth:1,
        marginRight:20
    },
    contPass:{
        marginTop:20
    },
    inputPass:{
        borderColor:'#009688',
        borderWidth:1,
        marginRight:20
    },
    contSignButton:{
        alignItems: 'center' 
    },
    buttonSign:{
        backgroundColor:'#009688',
        width:'90%',
        marginTop:30,
        borderRadius:20,
        padding:20
    },
    txtSign:{
        color:'#fff',
        fontSize:16
    }
})