/* eslint-disable react/prop-types */
import Statsdup from "./Statsdup"

const Stats = ({pokemon}) => {
  return (
    <div >
        <p className="font-medium text-2xl text-center ">Information</p>
        <div className="flex flex-col mt-2 font-medium  text-white space-y-1">
            
                <Statsdup name="Base" Stat="Stats"/>
                <Statsdup name="HP" Stat={pokemon.stats[0].base_stat
}/>
                <Statsdup name="Attack" Stat={pokemon.stats[1].base_stat
}/>
                <Statsdup name="Defense" Stat={pokemon.stats[2].base_stat
}/>
                <Statsdup name="Sp.Attack" Stat={pokemon.stats[3].base_stat
}/>
                <Statsdup name="Sp.Defense" Stat={pokemon.stats[4].base_stat
}/>
                <Statsdup name= "Speed" Stat={pokemon.stats[5].base_stat
}/>
             
        </div>
    </div>
  )
}

export default Stats
