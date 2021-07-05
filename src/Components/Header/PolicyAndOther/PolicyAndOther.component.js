import {Component} from 'react';

class PolicyAndOther extends Component{

    renderPolicy(){
        return(
            <>
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3ed23c35 top-left1" data-id="3ed23c35" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-3d1cf9d9 elementor-widget elementor-widget-html" data-id="3d1cf9d9" data-element_type="widget" data-widget_type="html.default">
                            <div className="elementor-widget-container">
                                <ul className="policy">
                                    <li><a >Policy</a></li>
                                    <li><a >Terms</a></li>
                                    <li><a >Shipping &amp; Returns</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    renderContact(){
        return(
            <div className="elementor-element elementor-element-30f394c1 elementor-widget elementor-widget-html" data-id="30f394c1" data-element_type="widget" data-widget_type="html.default">
                <div className="elementor-widget-container">
                    <div className="header-mess">
                        <div className="item item-phone"><a href="tel:111234666">(+9) 111 234-666</a></div>
                        <div className="item item-faq"><a >FAQs</a></div>
                        <div className="item item-order"><a >Tracking Orders</a></div>
                    </div>
                </div>
            </div>
        )
    }

    renderLanguge(){
        return(
            <div className="elementor-element elementor-element-35c9d5e8 elementor-widget elementor-widget-wp-widget-custom_html">
                <div className="elementor-widget-container">
                    <div className="textwidget custom-html-widget">
                        <div id="lang_sel">
                            <ul className="nav">
                                <li>
                                    <a className="lang_sel_sel icl-en" >
                                        <img className="iclflag" title="English" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/themes/flashmart/assets/img/en.png" alt="en" width="18" height="12" />English
                                    </a>
                                    <ul>
                                        <li className="icl-en">
                                            <a >
                                                <img className="iclflag" title="English" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/themes/flashmart/assets/img/en.png" alt="en" width="18" height="12" />
                                                English
                                            </a>
                                        </li>
                                        <li className="icl-ar">
                                            <a >
                                                <img className="iclflag" title="Arabic" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/themes/flashmart/assets/img/ar.png" alt="ar" width="18" height="12" />
                                                Arabic
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderCurrncy(){
        return(
            <div className="elementor-element elementor-element-28b6076d elementor-widget elementor-widget-wp-widget-woocommerce_currency_converter">
                <div className="elementor-widget-container">
                    <form method="post" id="currency_converter" action="https://demo.wpthemego.com/themes/sw_flashmart/">
                        <ul className="currency_w">
                            <li>
                                <a  className="">USD</a>
                                <ul className="currency_switcher">
                                    <li><a  className="default currency-USD" data-currencycode="USD">USD</a></li>
                                    <li><a  className="currency-EUR" data-currencycode="EUR">EUR</a></li>
                                </ul>
                            </li>
                        </ul>
                    </form>                                    
                </div>
            </div>
        )
    }

    render(){
        return(
            <>
                <div className="elementor-container elementor-column-gap-no">
                    {this.renderPolicy()}
                    
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-72693b2f top-right1" data-id="72693b2f" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            {this.renderContact()}                            
                            {this.renderLanguge()}
                            {this.renderCurrncy()}                            
                        </div>
                    </div>
                </div> 

            </>
        )
    }

}

export default PolicyAndOther;