/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Info = ({pokemon}) => {
  if (!pokemon) {
    return null; // or handle the case when 'poke' is undefined
  }

  return (
    <div className="flex flex-col  mt-2  ">
 <div className="me-48 mb-2">
 <p className="font-medium  "><span className="capitalize">{pokemon.name}</span> <span>#{pokemon.id}</span></p>
<p><span>Weight: {pokemon.weight}</span> <span>Height: {pokemon.height}</span></p>
<p>Base Exp: {pokemon.base_experience}</p>
 </div>
<div className=" w-68 h-36">

<img className="w-36 h-36  object-cover m-auto" src={pokemon.sprites.front_default} alt="" />
</div>
<p className="my-1 py-1 bg-orange-300 text-black w-24 px-4 rounded-lg text-center font-medium capitalize">{pokemon.types.map((type) => type.type.name)}</p>
    </div>
  )
}

export default Info
