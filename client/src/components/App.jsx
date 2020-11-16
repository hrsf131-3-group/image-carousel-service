import React from 'react';
import Images from './Images.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
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
        <Images images = {this.state.images}/>
      </div>
    );
  }
}

export default App;