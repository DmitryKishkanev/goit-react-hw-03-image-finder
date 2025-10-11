import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import * as API from 'components/Services/api';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { Container } from 'components/App/App.styled';

// const LS_KEY = 'contact_list';

class App extends Component {
  state = {
    image: '',
    imageResults: [],
    searchPage: 1,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const prevImage = prevState.image;
    const nextImage = this.state.image;
    if (nextImage !== prevImage) {
      try {
        this.setState({ isLoading: true });
        const images = await API.getImages(nextImage);
        this.setState({
          imageResults: images,
          searchPage: this.state.searchPage + 1,
          isLoading: false,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  loadMoreImages = async () => {
    try {
      this.setState({ isLoading: true });
      const moreImages = await API.getImages(
        this.state.image,
        this.state.searchPage,
      );
      this.setState(state => ({
        imageResults: [...state.imageResults, ...moreImages],
        searchPage: this.state.searchPage + 1,
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  scrollToBottom = () => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  addImage = newImage => {
    this.setState({ image: newImage });
  };

  render() {
    const { imageResults, isLoading } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.addImage} />
        <ImageGallery images={imageResults} />
        {isLoading && <Loader />}

        {imageResults.length > 0 && <Button loadMore={this.loadMoreImages} />}
      </Container>
    );
  }
}

export default App;
