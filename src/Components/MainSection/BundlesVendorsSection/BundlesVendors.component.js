import {Component} from 'react'
import TopCombo from './TopCombo/TopCombo.container'
import TopSelling from './TopSelling/TopSelling.container'

class BundlesVendors extends Component{
	render(){
		return (
				<>
				<section className="elementor-section elementor-top-section elementor-element elementor-element-936e42b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="936e42b" data-element_type="section">
				<div className="elementor-container elementor-column-gap-default">
				<TopCombo/>
					<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9c20ada elementor-hidden-tablet elementor-hidden-phone" data-id="9c20ada" data-element_type="column">
						<div className="elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-e0cd9b3 elementor-widget elementor-widget-image" data-id="e0cd9b3" data-element_type="widget" data-widget_type="image.default">
								<div className="elementor-widget-container">
									<div className="elementor-image">
										<a href="#"> <img src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/banner411.jpg" title="banner411" alt="banner411" className="elementor-animation-wobble-horizontal" /> </a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<TopSelling/>
					</div>
					</section>
				</>
			)
	}
}

export default BundlesVendors;