import {people} from './json'
import urlimg from '../img/bird.jpg'

 export default function Image_url(){
    return(
        <div>
            <img src={urlimg} height={200} width={200}/>
        </div>
    )
}