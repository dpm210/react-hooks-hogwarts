import {useState} from "react";


function Pig ({ hog }){

    const [togglePig, setTogglePig] = useState(false)

    function handleToggle(){
        setTogglePig(!togglePig)
    }


    const {name, specialty, greased, weight, image} = hog
    const medal = hog["highest medal achieved"]


    return (
        <div onClick={handleToggle}>
            <h2>{name}</h2>
            {togglePig ? <div>
            <p>{specialty}</p>
            <p>{weight}</p>
            <p>{greased ? "is greased" : "is not greased"}</p>
            <p>{medal}</p>
            </div>
            : null}
            <img src= {image}/>
            
        </div>

    )

}
export default Pig;