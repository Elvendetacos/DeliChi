import '../assets/Styles/CardList.css'


function CardList({name, zone, perfil}) {
    return ( 
        <>
            <div className='cardR'>
                <img src={perfil} alt="" />
                <p>{name}</p>
                <p>{zone}</p>
            </div>
        </>
    );
}

export default CardList;