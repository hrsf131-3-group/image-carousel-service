import React from 'react';
import axios from 'axios';
import Images from './Images.jsx';
import Title from './Title.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      title: ''
    };
  }

  componentDidMount() {
    // generating random id to get a different listing
    var id = Math.floor(Math.random() * 100) + 1;
    axios.get(`/api/listings/${id}/photos`)
      .then((response) => {
        this.setState({images: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get(`/api/listings/${id}`)
      .then((response) => {
        this.setState({title: response.data.name});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render () {
    return (
      <div>
        <Title title = {this.state.title}/>
        <Images images = {this.state.images}/>
      </div>
    );
  }
}

export default App;