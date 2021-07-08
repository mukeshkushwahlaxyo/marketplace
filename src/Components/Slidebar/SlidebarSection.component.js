import {Component} from 'react'
import AwesomeSlider from 'react-awesome-slider';
class SlidebarSection extends Component{
	render(){
		return (
				<>
				  	<section className="elementor-section elementor-top-section elementor-element elementor-element-e84d91e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e84d91e" data-element_type="section">
					  <AwesomeSlider>
					    <div>
					    <img src="https://dimsemenov.com/plugins/royal-slider/img/home.jpg" width="1400px;" height= "855px;" /></div>
					    <div>2</div>
					    <div>3</div>
					    <div>4</div>
					  </AwesomeSlider>
				  </section>
				  


				</>
			)
	}
}

export default SlidebarSection;