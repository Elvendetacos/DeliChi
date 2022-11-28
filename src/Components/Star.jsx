import { useState } from 'react';
import {FaStar} from 'react-icons/fa'

const StarRating = ()=>{
    const [rating,setRating] = useState(null);
    return(
        <div>
            {[...Array(5)].map(star=>{
                const ratingValue = i +1;

                return(
                    <label>
                        <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)}
                        />
                        <FaStar className='star' color={ratingValue <= (hover || rating) ? "#ffff" : "#e4e5e9"}
                        />
                    </label>
                    return <FaStar size={30}/>
                )
                
            
            })}
            
        </div>
    )
}

export default StarRating;