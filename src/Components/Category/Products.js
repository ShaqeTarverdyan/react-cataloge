import React from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Products extends React.Component {

    currentCategory = () => {
        const curCat = this.props.products.map(product => {
            
        })
        return curCat;
    }
    resultProducts = () => {
        const result = this.props.products.map(prod => {
            return prod
        })
        return result;
    }
    render() {
        const test = this.currentCategory();
        console.log('kkkk', test)
        const product = this.resultProducts();
        console.log(product, 'rrrrrrrr')

        return (
            product.map(prod => (
                <Card style={{margin:'2vw', listStyleType:'none', textAlign:'center'}}>
                    <li>id - - <strong>{prod.id}</strong></li>
                    <li>title - -<strong>{prod.title}</strong></li>
                    <li>categories - -<strong>{prod.categories.join(',')}</strong></li>
                    <li>price - -<strong>{prod.price}</strong></li>
                </Card>
            ))




        )
    }

}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        products: state.products
    }
}
export default connect(mapStateToProps)(Products);  