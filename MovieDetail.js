import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { GET_MOVIE } from './redux/actions'

class MovieDetail extends Component {

    componentDidMount(){
        this.props.dispatch(GET_MOVIE())
    }

    render(){
        return (
            <View>
                <Text>{this.props.movie.title}</Text>
            </View>
        )
    }
}

const mapStateToProps= (state)=> ({
    movie: state.movie
})

export default connect(mapStateToProps)(MovieDetail)