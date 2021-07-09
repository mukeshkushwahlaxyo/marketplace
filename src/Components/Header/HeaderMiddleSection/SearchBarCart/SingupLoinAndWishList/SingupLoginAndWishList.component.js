import {Component}  from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';

import { Modal, Button } from 'antd';

class SingupLoinAndWishList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isopen : false
        };

        this.handleClickOpen.bind(this);
    }

    handleClickOpen(){
        this.setState({isopen:!this.state.isopen})
    }

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
                   <div class="elementor-widget-container" style={{fontSize:'17px'}}>
                   {
                    sessionStorage.getItem('token') ?

                        
                        <div class="top-login3" >
                             <Nav>
                                <NavDropdown title='ds' style={{textColor:'white'}}>
                                    <NavDropdown.Item >Logout</NavDropdown.Item>
                                    <NavDropdown.Item >Profile</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                        </div>
                        :
                         <div class="top-login3">
                            <ul>
                                <li>
                                    <Link to="/login" onClick={(()=>this.setOpen())}>Sing In</Link>/
                                    <Link to="/register">Sing Up</Link>
                                </li>
                                
                            </ul>

                        </div>
                    }
                    </div>
                </div>
                 
                  <Modal title="Basic Modal" visible={true} onCancel={this.handleClickOpen}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Modal>
               
            </>
        )
    }
}

export default SingupLoinAndWishList;