import {Component} from 'react'
import Logo from './Logo/Logo.container'
import SearchBarAndCart from './SearchBarCart/SearchBarAndCart.container'

class HeaderMiddleSection extends Component {
	render(){
		return(
				<section
					class="elementor-section elementor-top-section elementor-element elementor-element-2ce839a9 header-elementor4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
					data-id="2ce839a9"
					data-element_type="section"
					data-settings='{"background_background":"classic"}'
				>
					<div class="elementor-container elementor-column-gap-no">
						<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-582f4ff" data-id="582f4ff" data-element_type="column">
							<div class="elementor-widget-wrap elementor-element-populated">
								<section
									class="elementor-section elementor-inner-section elementor-element elementor-element-1d36a22e header-mid elementor-section-boxed elementor-section-height-default elementor-section-height-default"
								>
									<div class="elementor-container elementor-column-gap-no">
										<Logo/>
										<SearchBarAndCart/>
									</div>
								</section>
							</div>
						</div>
					</div>				
				</section>	
			)
	}
}
export default HeaderMiddleSection;