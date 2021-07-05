
import PolicyAndOther from './Components/Header/PolicyAndOther/PolicyAndOther.container';
import HeaderMiddleSection from './Components/Header/HeaderMiddleSection/HeaderMiddleSection.container';

function App() {
  return (
    <div className="App">
      <div class="elementor elementor-8614 elementor-location-header">
          <div class="elementor-section-wrap">
              <section
                  class="elementor-section elementor-top-section elementor-element elementor-element-1317d665 header-elementor4 header-top elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="1317d665"
                  data-element_type="section"
                  data-settings='{"background_background":"classic"}'
              >
                <PolicyAndOther/>
                <HeaderMiddleSection/>                
              </section>
          </div>
      </div>    
    </div>
  );
}

export default App;
