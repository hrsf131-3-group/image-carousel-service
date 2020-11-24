import React from 'react';
import axios from 'axios';
import Images from './Images.jsx';
import Title from './Title.jsx';
import ImageCarousel from './ImageCarousel.jsx';
import FavoriteCategory from './FavoriteCategory.jsx';
import ShareLike from './ShareLike.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      title: '',
      showImageCarousel: false,
      showFavCategory: false,
      currentIndex: 0,
      // generating random id to get a different listing
      listingId: Math.floor(Math.random() * 100) + 1,
      favCategories: []
    };
    this.onClickShowImage = this.onClickShowImage.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickFav = this.onClickFav.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
    this.goRight = this.goRight.bind(this);
    this.goLeft = this.goLeft.bind(this);
  }

  onClickShowImage(index) {
    this.setState({showImageCarousel: true, currentIndex: index});
  }

  onClickClose() {
    this.setState({showImageCarousel: false});
  }

  onClickFav() {
    axios.get(`/api/listings/${this.state.listingId}/fav_categories`, {
      params: {
        'user_id': 16
      }
    })
      .then((response) => {
        this.setState({favCategories: response.data.fav_categories});
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({showFavCategory: true});
  }

  onClickDone() {
    this.setState({showFavCategory: false});
  }

  goRight() {
    this.setState({currentIndex: ++this.state.currentIndex});
  }

  goLeft() {
    this.setState({currentIndex: --this.state.currentIndex});
  }

  componentDidMount() {
    axios.get(`/api/listings/${this.state.listingId}/photos`)
      .then((response) => {
        this.setState({images: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get(`/api/listings/${this.state.listingId}`)
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

        <ShareLike onClickFav = {this.onClickFav}/>

        {this.state.images.length !== 0 ? <Images images = {this.state.images} onClickShowImage = {this.onClickShowImage} /> : null}

        {this.state.images.length !== 0 ? <ImageCarousel onClickClose = {this.onClickClose} onClickFav = {this.onClickFav} goRight = {this.goRight} goLeft = {this.goLeft} currentIndex = {this.state.currentIndex} images = {this.state.images} showImageCarousel = {this.state.showImageCarousel}/> : null}

        {this.state.images.length !== 0 ? <FavoriteCategory onClickDone = {this.onClickDone} favCategories = {this.state.favCategories} image = {this.state.images[0]} showFavCategory = {this.state.showFavCategory}/> : null}
      </div>
    );
  }
}

export default App;