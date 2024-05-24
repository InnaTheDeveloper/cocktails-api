import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  React.useEffect(() => {
    searchValue.current.focus();
  }, []); //puts a cursor to the field for typing
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }; //main function
  const handleSubmit = (e) => {
    e.preventDefault();
  }; // to prevent reload if user hits enter
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
