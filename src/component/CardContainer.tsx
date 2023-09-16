import './CardContainer.css'
import ProduktPicture from './ProduktPicture';
import Description from './Description';

function CardContainer(){
    return(
        <div className="cardContainer">
            <ProduktPicture></ProduktPicture>
            <Description></Description>
        </div>
    )
}

export default CardContainer;