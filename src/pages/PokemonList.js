import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import PokeInfo from "../components/PokeInfo";
import axios from "axios";

export default function Main() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFetch = async () => {
    setLoading(true);
    const res = await axios.get(url);

    // console.log(res.data.results);
    // To check the data
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
    // console.log(pokeData);
  };

  // That's how i request the api from pokeapi.com
  const getPokemon = async (res) => {
    const newData = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        console.log(result);
        return result.data;
      })
    );

    // Set up the data and sort by number
    setPokeData((state) => {
      const combinedData = [...state, ...newData];
      const uniqueData = Array.from(
        new Set(combinedData.map((pokemon) => pokemon.id))
      ).map((id) => {
        return combinedData.find((pokemon) => pokemon.id === id);
      });
      uniqueData.sort((a, b) => (a.id > b.id ? 1 : -1));
      return uniqueData;
    });
  };
  useEffect(() => {
    pokeFetch();
  }, [url]);
  return (
    <div className="container">
      <h1 className="title">Pokemon List</h1>
      <div className="left-content">
        <Card
          pokemon={pokeData}
          loading={loading}
          infoPokemon={(poke) => setPokeDex(poke)}
        />
      </div>
      <div className="btn-group">
        <button
          onClick={() => {
            // To empty the array
            setPokeData([]);
            setUrl(prevUrl);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            // To empty the array
            setPokeData([]);
            setUrl(nextUrl);
          }}
        >
          Next
        </button>
      </div>
      <div className="right-content">
        <PokeInfo data={pokeDex} />
      </div>
    </div>
  );
}
