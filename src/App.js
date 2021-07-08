


import React,{useState} from "react";
import { BrowserRouter, Route} from "react-router-dom";
import { Button,Modal} from "react-bootstrap";

import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
import Login from './Components/Login/Login.container';
import UserLogin from './Components/Login/UserLogin/UserLogin.container.js';
import PolicyAndOther from './Components/Header/PolicyAndOther/PolicyAndOther.container';
import HeaderMiddleSection from './Components/Header/HeaderMiddleSection/HeaderMiddleSection.container';
// import HeaderContainer from './Containers/HeaderContainer.js';
import NavbarSection from './Components/Header/NavbarSection/NavbarSection.container';
import SlidebarSection from './Components/Slidebar/SlidebarSection.container';
import TodayDealSection from './Components/MainSection/TodayDealSection/TodayDealSection.container';
import SeasonalSectionComponent from './Components/MainSection/SeasonalSection/Seasonal.container';
import NewSpringSectionComponent from './Components/MainSection/NewSpringSection/NewSpring.container';
import SaveAndExtraSectionComponent from './Components/MainSection/SaveAndExtraSection/SaveAndExtra.container';
import BundlesVendorsSectionComponent from './Components/MainSection/BundlesVendorsSection/BundlesVendors.container';
import CategorySectionComponent from './Components/MainSection/CategorySection/Category.container';
import FooterSectionComponent from './Components/Footer/FooterSection/Footer.container';
import RgisterComponent from './Components/Register/Register.container.js';
import UserRgisterComponent from './Components/Register/UserRegister/UserRegister.container.js';

function App() {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div class="elementor elementor-8614 elementor-location-header">
          <div class="elementor-section-wrap">
              <section
                  class="elementor-section elementor-top-section elementor-element elementor-element-1317d665 header-elementor4 header-top elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="1317d665"
                  data-element_type="section"
                  data-settings='{"background_background":"classic"}'
              >

              <PolicyAndOther/>
              </section>
               <HeaderMiddleSection/>  
              <NavbarSection/>
              <Route exact path="/">
                  <SlidebarSection/> 
                  <TodayDealSection/>
              </Route> 
              <Route exact path="/login">
                  <Login />
              </Route>   
              <Route exact path="/register">
                  <RgisterComponent />
              </Route>   
              <Route exact path="/user-register">
                  <UserRgisterComponent />
              </Route>
              <Route exact path="/user-login">
                  <UserLogin />
              </Route>                
              <FooterSectionComponent />                          
          </div>
      </div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;