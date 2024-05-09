/* eslint-disable react/prop-types */


const Statsdup = ({name,Stat}) => {
  return (
    <div className="flex  space-x-1 justify-around text-center ">
                 <p className="bg-[#7f21ab] py-2 px-16 rounded-md w-[60%]">{name === "Base" ? name : name + ":"}</p>
                <p className="bg-[#7f21ab] py-2 px-12 rounded-md w-[40%]">{Stat}</p>
            </div>
  )
}

export default Statsdup