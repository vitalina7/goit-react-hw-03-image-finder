import { Component } from "react";
import { SearchbarHeader, SearchForm, SearchFormButton,  SearchFormInput } from "./Searchbar.styled";
import { toast } from 'react-hot-toast';
import { BiSearch } from 'react-icons/bi';

export class SearchBar extends Component {
  state = {
    search: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
     return  toast.error('Please enter a value');
    }
    this.props.handleSubmit(this.state.search)
    this.resetForm();
  };
    
  handleChange = (e) => {
    this.setState({ search: e.currentTarget.value });
  };

  resetForm = () => {
    this.setState({ search: " " });
  }

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <BiSearch size="20px" />
            Search
          </SearchFormButton>
          <SearchFormInput
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
