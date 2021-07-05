import {Component} from 'react';
import SearchBar from './SearcBar/SearcBar.container';
import SingupLoginAndWishList from './SingupLoinAndWishList/SingupLoginAndWishList.container'
import Cart from './Cart/Cart.container'


class SearchBarAndCart extends Component {
    render(){
        return(
            <>
                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-66d1e640 top-right1" data-id="66d1e640" data-element_type="column">
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                            class="elementor-element elementor-element-4bdf4dea elementor-widget elementor-widget-wp-widget-sw_ajax_woocommerce_search"
                            data-id="4bdf4dea"
                        >
                            <SearchBar/>

                        </div>
                        <SingupLoginAndWishList/>
                        <div
                            class="elementor-element elementor-element-62b308ec elementor-widget elementor-widget-wp-widget-sw_woocommerce_minicart_ajax"
                            data-id="62b308ec"
                            data-element_type="widget"
                            data-widget_type="wp-widget-sw_woocommerce_minicart_ajax.default"
                        >
                            <Cart/>

                        </div>
                     </div>
                </div>        
            </>
        )
    }
}

export default SearchBarAndCart;