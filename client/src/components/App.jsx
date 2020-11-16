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
    axios.get('/api/listings/4/photos')
      .then((response) => {
        this.setState({images: response.data});
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