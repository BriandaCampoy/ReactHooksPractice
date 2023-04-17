import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback
} from 'react';
import useCharacters from '@hooks/useCharacters';
import '@styles/Characters.css';
import CharacterCard from '@components/CharacterCard';
import Search from '../components/Search';

const initialState = {
  favorites: []
};

const API = 'https://rickandmortyapi.com/api/character';

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
};
const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);
  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  };
  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);
  // const filteredUsers = characters.filter((user)=>{
  //   return user.name.toLowerCase().includes(search.toLowerCase())
  // })
  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="Characters">
      <div className="Characters__favorites">
        {favorites.favorites.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </div>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <div className="Characters__All">
        {filteredUsers.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            addFavorite={handleClick}
          />
          // <h2 key={character.id}>{character.name}</h2>
        ))}
      </div>
    </div>
  );
};

export default Characters;
