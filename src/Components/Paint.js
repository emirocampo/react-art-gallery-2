import Card from "./Card";
import Data from "../Data/data.json"

const Paint = () => {
    const list = Data.paints.map( (item,index) => {
        return (
            <Card
                key = {item.author + index}
                image = {item.paint}
                author = {item.author} 
            />
        )
    })
    return(
        <>
            { list }
        </>
        
    );
}

export default Paint;