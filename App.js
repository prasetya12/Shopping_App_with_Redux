import React, { Component }  from 'react'



import { createStackNavigator, createAppContainer } from 'react-navigation'

import store from './redux/store'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import BeginScreen from './screens/BeginScreen'
import SignIn from './screens/SignIn'
import Register from './screens/RegisterScreen'



const Navigator = createStackNavigator({
  RegisterScreen:{
    screen:Register,
    navigationOptions:{
      header:null
    }
  },
  BeginScreen:{
    screen:BeginScreen,
    navigationOptions:{
      header:null
    }
  },
  SignInScreen:{
    screen:SignIn,
    navigationOptions:{
      header:null
    }
  },
  HomeScreen:{
    screen:HomeScreen,
    navigationOptions:{
      header:null
    }
  },
  CartScreen:{
    screen:CartScreen,
    navigationOptions:{
    header:null
  }
  }
},{
  initialRouteName:'RegisterScreen'
})

const Appcontainer = createAppContainer(Navigator)

export default class App extends Component {

  render(){
    return (
      <Appcontainer/>
    )
  }
}