import { SearchbarHeader, SearchForm, SearchFormButton,SearchFormLabel, SearchFormInput } from "./Searchbar.styled";

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit(evt.target.serch.value.trim())
        evt.currentTarget.reset();
    }
    return(
        <SearchbarHeader>
            <SearchForm onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                    <SearchFormLabel>Search</SearchFormLabel>
                </SearchFormButton>

                <SearchFormInput
                    name="search"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
        </SearchbarHeader>
    )
};

export default SearchBar;