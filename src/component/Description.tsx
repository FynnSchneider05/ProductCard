import ProductPrice from "./ProductPrice";
import ProductText from "./ProductText";
import AddToCardButton from "./AddToCard";
import "./Description.css"

function Description(){
    return(
        <div className="ProductDescription">
            <ProductText></ProductText>
            <ProductPrice></ProductPrice>
            <AddToCardButton></AddToCardButton>
        </div>
    )
}

export default Description