import Pig from './Pig.js'
import {useState} from "react";

function PigPen({ hogs }){

const [filteredPigs, setFilteredPigs]=useState(hogs)
const [toggleFilter, setToggleFilter]=useState(false)

function handleFilter(){
    if(!toggleFilter){
    const filtered=hogs.filter((hog)=> hog.greased)
    setFilteredPigs(filtered)
    setToggleFilter(true)
} else{
    setFilteredPigs(hogs)
    setToggleFilter(false)
}
}


return (
    <div>
        <button onClick={handleFilter}>{toggleFilter? "Bring me all the pigs!" : "Bring me the greased pigs!"}</button>
        {filteredPigs.map(hog => 
            <Pig 
            hog={hog}
            key={hog.name}/>
)}
    </div>
)

};
export default PigPen;