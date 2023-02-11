import { Component } from "react";
import SearchBar from "./Searchbar";
// import { fetchPhotoApi } from "./Api/Api";


export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    isLoading:false,

  }
  handleFormSubmit = searchQuery => {
    if (!searchQuery || searchQuery === this.setState.searchQuery) {
      return;
    }
    this.setState({
      isLoading:true,
      searchQuery,
      images:[],
      })
  };
  
  render() {
   return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
     >
       <SearchBar onSubmit={this.handleFormSubmit}/>
        </div>
  );
}
 
};
