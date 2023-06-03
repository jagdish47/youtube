import React, { useState, useEffect, createContext } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState();
  const [selectCategories, setSelectCategories] = useState();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fectchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fectchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSelectCategories,
        selectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
