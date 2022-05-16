import React, { useEffect, useRef } from "react";

const SearchBar = () => {
  const focusInputRef = useRef();

  useEffect(() => {
    focusInputRef.current.focus();
  }, []);

  // const handleClick = () => {
  //     console.log("Buscaste '" + focusInputRef.current.value + "'.");
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscaste '" + focusInputRef.current.value + "'.");
    focusInputRef.current.value = "";
  };

  return (
    <div className="search-bar">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search"
          id="search"
          placeholder="Remeras, Camperas, Accesorios, Tecnología"
          ref={focusInputRef}
        />
        <input
          type="button"
          className="btn-search"
          value="🔎" /*onClick={handleClick}*/
        />
      </form>
    </div>
  );
};

export default SearchBar;
