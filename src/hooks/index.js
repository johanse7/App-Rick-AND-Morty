import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [url]);

  return data;
};

export const useFetchCharacters = (url, isReload) => {
  const [loader, SetLoader] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [infoPage, setInfoPage] = useState({});

  useEffect(() => {
    SetLoader(true);
    fetch(url)
      .then((response) => response.json())
      .then(({ results, info }) => {
        const listCharacters = results || [];
        setInfoPage(info);
        setCharacters((prevCharacters) => {
          if (isReload) return listCharacters;
          return [...prevCharacters, ...listCharacters];
        });
        SetLoader(false);
      });
  }, [url, isReload]);

  return {
    loader,
    characters,
    infoPage,
  };
};

// Our hook
export const useDebounce = (value, delay) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
