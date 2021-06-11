import {useState} from "react";


function Pig ({ hog }){

    const [togglePig, setTogglePig] = useState(false)
    const [toggleHide, setToggleHide] = useState(false)

    function handleToggle(){
        setTogglePig(!togglePig)
    }

    function hideFunction(){
        setToggleHide(!toggleHide)
        console.log(toggleHide)
    }


    const {name, specialty, greased, weight, image} = hog
    const medal = hog["highest medal achieved"]


    return (
        <div className='ui eight wide column'>
        <button onClick={hideFunction}>{toggleHide ? "Show Pig" : "Hide Pig"}</button>
        
        {!toggleHide ? <div onClick={handleToggle}>
            <h2>{name}</h2>
            {togglePig ? <div>
            <p>{specialty}</p>
            <p>{weight}</p>
            <p>{greased ? "is greased" : "is not greased"}</p>
            <p>{medal}</p>
            </div>
            : null}
            <img src= {image}/>
            
        </div> : null}
        </div>

    )

}
export default Pig;