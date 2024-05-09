import Info from './components/Info';
import Stats from './components/Stats';
import { useState, useEffect } from 'react';
function App() {
  const [pokes, setPokes] = useState([]);
  const [term,setTerm]= useState();
  const getPokemon = async (name) => {
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name}`
    );
    const data = await res.json();
    console.log(data);
    setPokes([data]);
  };
  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <>
      <div className="bg-[#0a0a23] h-screen w-screen  flex flex-col items-center gap-4  ">
        <p className="sm:text-4xl font-semibold text-white mx-auto mt-8 font-mono text-3xl">
          Pokemon Search App
        </p>
        <div className=" border-none w-96 h-[45em] bg-[#f5f6f7] rounded-xl flex flex-col items-center">
          <div>
            <p className="mt-4 font-medium">Search for Pokemon Name or ID:</p>
            <input
              type="text"
              className=" outline-none border-gray-150 border-2 mt-2 font-mono rounded-md py-1 "value={term}  onChange={(e)=>setTerm(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') getPokemon(term); }}
            />
            <button className="bg-[#7f21ab] text-white py-2 px-4 rounded-2xl text-sm mt-2 ms-2 active:bg-[#ad14f4] " onClick={() => getPokemon(term)}>
              Search
            </button>
          </div>
          {pokes.map((poke, index) => (
            
              <Info key={index} pokemon={poke} />
          ))}
          {pokes.map((poke, index) => (
              <Stats key={index} pokemon={poke} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
