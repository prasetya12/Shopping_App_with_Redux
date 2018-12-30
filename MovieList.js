import React, { Component }  from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { ALL_MOVIES } from './redux/actions/movie'
import { GET_CATEGORY } from './redux/actions/category'

import axios from 'axios'


class MovieList extends Component {

    componentDidMount(){
        this.props.dispatch(ALL_MOVIES())
        this.props.dispatch(GET_CATEGORY(1))
    }

    handleSubmit(){
        axios.post('http://192.168.0.11:3333/movie', {
            title: "cebong 90%, kampret 10%"
        }).then((res)=>{
            this.props.dispatch(ALL_MOVIES())
        })
    }

    render(){
        return (
            <View>
                {this.props.movie.isLoading? (
                    <Text>Loading</Text>
                ): (
                    <View>
                        <Text>{this.props.category.data.title}</Text>

                        {this.props.movie.results.map((movie)=>(
                            <Text style={{fontSize: 30}} key={movie.id}>
                                {movie.title}
                            </Text>
                        ))}

                        <TouchableOpacity onPress={()=> this.handleSubmit()}>
                            <Text>Add Movie</Text>
                        </TouchableOpacity>
                    </View>
                )}                
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
  movie: state.movieReducer,
  category: state.categoryReducer,
})

export default connect(mapStateToProps)(MovieList)