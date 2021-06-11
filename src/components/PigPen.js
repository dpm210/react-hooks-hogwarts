import Pig from './Pig.js'
import {useState} from "react";

function PigPen({ hogs }){

const [filteredPigs, setFilteredPigs]=useState(hogs)
const [toggleFilter, setToggleFilter]=useState(false)
const [sortStatus, setSortStatus] = useState('none')

console.log(hogs)

function handleFilter(){
    if(!toggleFilter){
    const filtered=hogs.filter((hog)=> hog.greased)
    setFilteredPigs(filtered)
    setToggleFilter(true)
    setSortStatus('none')
} else{
    setFilteredPigs(hogs)
    setToggleFilter(false)
    setSortStatus('none')
}
}

function handleSort(e) {
    const sortThing = e.target.value
    setSortStatus(sortThing)

    if(sortThing === 'none') {
        setFilteredPigs(hogs)
    } else if (sortThing === 'weight') {
        const sortedArray = [...filteredPigs]
        sortedArray.sort((hog1, hog2) => hog1.weight - hog2.weight)
        setFilteredPigs(sortedArray)
    } else {
        const sortedArray = [...filteredPigs]
        sortedArray.sort((hog1, hog2) => {
            return hog1.name.localeCompare(hog2.name)
        })
        setFilteredPigs(sortedArray)
    }
}


return (
    <div>
        <label>Sort by:</label>
        <select onChange={handleSort} value={sortStatus}>
            <option value='none'>None</option>
            <option value='weight'>Weight</option>
            <option value='name'>Name</option>
        </select>
        <br></br>
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