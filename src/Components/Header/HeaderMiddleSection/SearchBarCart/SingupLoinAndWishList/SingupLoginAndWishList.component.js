import {Component}  from 'react'

class SingupLoinAndWishList extends Component {
    render(){
        return(
            <>
                <div
                    class="elementor-element elementor-element-bf628f0 elementor-widget elementor-widget-wp-widget-custom_html"
                    data-id="bf628f0"
                    data-element_type="widget"
                    data-widget_type="wp-widget-custom_html.default"
                >
                    <div class="elementor-widget-container">
                        <div class="textwidget custom-html-widget">
                            <h4><a class="wishlist" href="https://demo.wpthemego.com/themes/sw_flashmart/wishlist">Wishlist</a></h4>
                        </div>
                    </div>
                </div>
                <div
                    class="elementor-element elementor-element-434c6541 elementor-widget elementor-widget-wp-widget-sw_top"
                    data-id="434c6541"
                    data-element_type="widget"
                    data-widget_type="wp-widget-sw_top.default"
                >
                    <div class="elementor-widget-container">
                        <div class="top-login3">
                            <ul>
                                <li>
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#login_form">Sign In</a> /
                                    <a class="register" href="https://demo.wpthemego.com/themes/sw_flashmart/my-account" title="Sign Up">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SingupLoinAndWishList;