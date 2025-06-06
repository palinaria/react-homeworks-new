import Input from "../Input/Input";
import Button from "../Button/Button";



return(
    <div className="order_item">
        <div className="left_order_item">
            <img src={img} alt="product" className="prod_img"/>
            <div className="title">{meal}</div>
        </div>
        <div className="right_order_item">
            <div className="price highlight">${parseFloat(price.toString()).toFixed(2)}</div>
            <div className="add_to_cart">
                <Input
                    type="number"
                    defaultValue="1"
                    min="1"
                    inputSize="small"
                    ref={inputRef}
                />
                <Button>Click</Button>
        </div>
    </div>
)


return (
    <div className="product_card">
        <img src={img} alt="product" className="prod_img"/>
        <div className="price highlight">${parseFloat(price.toString()).toFixed(2)}</div>

        <div className="product_info">
            <div className="title">{meal}</div>
            <div className="description common_font">{instructions}</div>
            <div className="add_to_cart">
                <Input
                    type="number"
                    defaultValue="1"
                    min="1"
                    inputSize="small"
                    ref={inputRef}
                />
                <Button onClick={handleAddClick}>Add to cart</Button>
            </div>
        </div>
    </div>
);
};
