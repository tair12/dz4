import React from "react";
import Products from "../../components/users/Products";


class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            input: ""
        }
    }

    getProducts = () => {
        this.setState({products: ["Apple", "Orange", "Potato"]})
    }

    deleteProducts = () => {
        this.setState({products: []})
    }

    changeInput = (e) => {
        this.setState({...this.state, input: e.target.value})
    }

    deleteInput = () => {
        this.setState({input: ""})
    }

    addProduct = () => {
        this.setState({products: [
                "Apple", "Orange", "Potato", this.state.input
            ]});
        this.deleteInput();
    }

    render() {
        return(
            <div className="cont">
                <div className="first">
                    <input value={this.state.input} type="text" onChange={this.changeInput}/>
                    <button onClick={this.addProduct}>Add</button>
                </div>
                <div className="second">
                    <button onClick={this.getProducts}>Get</button>
                    <button onClick={this.deleteProducts}>Delete</button>
                </div>
                <div className="third">
                    <Products products={this.state.products}/>
                </div>
            </div>
        )
    }
}

export default ProductsPage