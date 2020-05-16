/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useCallback } from "react";
import CharacterList from "../../components/character/CharacterList";
import Search from "../../components/character/Search";
import styled from "styled-components";
import { useFetchCharacters } from "../../hooks/";

const Main = styled.div`
  padding: 10px;
  grid-template-columns: minmax(auto, 768px);
  display: grid;
  justify-content: center;
`;

const CharacterContainer = () => {
  const URL_API = "https://rickandmortyapi.com/api/character/";
  const [reload, setReload] = useState(false);
  const [url, setUrl] = useState(URL_API);

  const { loader, characters, infoPage } = useFetchCharacters(url, reload);

  let debouncedFn = null;
  const handleChangeSearch = (e) => {
    e.persist();
    if (!debouncedFn) {
      debouncedFn = debounce(() => {
        const value = e.target.value;
        setReload(true);
        setUrl(`${URL_API}?name=${value}`);
      }, 600);
    }

    debouncedFn();
  };

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  };

  const observer = useRef();

  const refIntersection = useCallback(
    (node) => {
      if (loader) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        const { next } = infoPage;
        if (entries[0].isIntersecting && next) {
          setReload(false);
          setUrl(infoPage.next);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loader, infoPage]
  );

  return (
    <>
      <Search onChange={handleChangeSearch} />
      <Main>
        <CharacterList ref={refIntersection} characters={characters} />
        {loader && <h2>Loading...</h2>}
      </Main>
    </>
  );
};

export default CharacterContainer;
