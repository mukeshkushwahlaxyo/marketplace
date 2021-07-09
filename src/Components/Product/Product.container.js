import {Component} from 'react'
import ProductComponent from './Product.component';
import {connect} from 'react-redux'


const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({

    showProduct:data=>dispatch()

})

class Product extends Component{
	render(){
		return (
				<>
					<ProductComponent/>
				</>
			)
	}
}

export default Product;