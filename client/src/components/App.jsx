import React from 'react';
import axios from 'axios';
import Images from './Images.jsx';
import Title from './Title.jsx';
import ImageCarousel from './ImageCarousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      title: '',
      showImageCarousel: false
    };
    this.onClickImage = this.onClickImage.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
  }

  onClickImage() {
    this.setState({showImageCarousel: true});
  }

  onClickClose() {
    this.setState({showImageCarousel: false});
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
        <Title title = {this.state.title} />
        {this.state.images.length !== 0 ? <Images images = {this.state.images} onClickImage = {this.onClickImage} /> : null}
        {this.state.showImageCarousel ? <ImageCarousel images = {this.state.images} onClickClose = {this.onClickClose}/> : null}
      </div>
    );
  }
}

export default App;