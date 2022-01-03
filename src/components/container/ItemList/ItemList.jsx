
import Item from "../Item/Item"


const ItemList = ({loading, products}) => {
    return (
        <div>
            {loading ? <h1 className="loading">Espere un momento...</h1> :
                <div className="shoes">
                    {products.map((item) => (
                        <Item item={item} key={item.id} />
                    ))}
                </div>
            }
            
        </div>
    )
}

export default ItemList