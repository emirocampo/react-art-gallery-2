const Card = ( {image , author} ) => {
    return(
        <img src={image} className="grid-item" alt={author}></img>
    );
}

export default Card;