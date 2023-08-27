import React from "react";
// they're called from PokemonList
export default function Card({ pokemon, infoPokemon, loading }) {
  return (
    // When we're waiting for cards the "loading" appears
    <>
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div
                className="card"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <h3>{item.name}</h3>
              </div>
            </>
          );
        })
      )}
    </>
  );
}
