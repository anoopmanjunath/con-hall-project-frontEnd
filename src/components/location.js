import React, { Component } from 'react'
import axios from 'axios'

const { API_KEY } = 23456790
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Location extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data 
                                                        
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search For Place"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }
}

export default Location;
