function Pig ({ hog }){
    const {name, specialty, greased, weight, image} = hog
    const medal = hog["highest medal achieved"]

    return (
        <div>
            <h2>{name}</h2>
            <img src= {image}/>
        </div>

    )

}
export default Pig;