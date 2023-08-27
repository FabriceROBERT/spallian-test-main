import React from "react";

// It's called from PokemonList
export default function PokeInfo({ data }) {
  return (
    <>
      {/* if data not exist display nothing or display PokeIfo that's means abilities, name hp etc... */}
      {!data ? (
        ""
      ) : (
        <>
          <div>
            <h1>{data.name}</h1>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
              alt=""
            />
            <div className="abilities">
              {data.abilities.map((poke) => {
                return (
                  <>
                    <div className="group">
                      <h2>{poke.ability.name}</h2>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="base-stat">
              {data.stats.map((poke) => {
                return (
                  <div className="style_base-stat">
                    <h3 className="">
                      {poke.stat.name}: {poke.base_stat}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
