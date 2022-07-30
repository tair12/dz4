import React from 'react';

function Products(props) {
    return (
        <div>
            <ul>
                {props.products.map (
                    ( product,key  )=> <li key = {key}>{product}</li>
                )
                }
            </ul>
        </div>
    );
}

export default Products;