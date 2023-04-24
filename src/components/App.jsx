import { Component } from 'react';
import {  getSearch } from './services/img.api';
import { SearchBar } from './Searchbar';
import { Button } from './Button';
import { Loader } from './Loader';
import { ModalApp } from './Modal';
import { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery'

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    total: 1,
    loading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
    alt: '',
    empty: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.getFunc(this.state.search, this.state.page);
    }
  }

  getFunc = (text, page) => {
    this.setState({ loading: true });

    getSearch(text, page)
      .then(resp => resp.json())
      .then(data => {
        if (data.hits.length === 0) {
          this.setState({ empty: true });
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          total: data.total,
        }));
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  openModal = (largeImageURL, alt) => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
      alt: alt,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      largeImageURL: '',
      alt: '',
    });
  };

  handleSubmit = search => {
    this.setState({
      search: search,
      images: [],
      page: 1,
      total: 1,
      loading: false,
      error: null,
      empty: false,
    });
  };

  handleClickLoad = e => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div>
         <Toaster
          toastOptions={{
            duration: 1500,
          }}
        />
        <SearchBar handleSubmit={this.handleSubmit} />
        {this.state.error && (
          <h2>Something went wrong: ({this.state.error})!</h2>
        )}
        <ImageGallery
          toggleModal={this.openModal}
          images={this.state.images}
        />
        {this.state.loading && <Loader />}
        {this.state.empty && (
          <h2>Sorry. There are no images...</h2>
        )}
        {this.state.total / 12 > this.state.page && (
          <Button clickLoad={this.handleClickLoad} />
        )}
        {this.state.showModal && (
          <ModalApp onClose={this.closeModal}>
            <img
              src={this.state.largeImageURL}
              alt={this.state.alt}
            />
          </ModalApp>
        )}
      </div>
    );
  }
}
