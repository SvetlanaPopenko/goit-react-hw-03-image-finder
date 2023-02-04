const { render } = require("@testing-library/react");

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31629453-3aa42bb9ff6dc8c3c3e379cd8';

const SearchBar = ({onSubmit}) => {
    render(
        <header class="searchbar">
            <form class="form">
                <button type="submit" class="button">
                    <span class="button-label">Search</span>
                </button>

                <input
                    class="input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
};

export default SearchBar;