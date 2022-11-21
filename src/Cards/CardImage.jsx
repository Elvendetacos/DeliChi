import '../assets/Styles/CardImage.css'

function CardImage({key, resources}) {
    return ( 
    <>
        <img src={resources} alt="" className='image-resources-view'/>
    </> 
    );
}

export default CardImage;