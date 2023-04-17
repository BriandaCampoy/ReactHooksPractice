import React, { useEffect, useState } from 'react';

function useCharacters(url) {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(url)
    .then((response) => {response.json()
      .then((data) => {
        setCharacters(data.results);
      });
    });
  }, [url]);
  return characters;
}

export default useCharacters;
