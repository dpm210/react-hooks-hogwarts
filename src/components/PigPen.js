import Pig from './Pig.js'
function PigPen({ hogs }){
return (
    <div>
        {hogs.map(hog => 
            <Pig 
            hog={hog}
            key={hog.name}/>
)}
    </div>
)

};
export default PigPen;