import {Component} from 'react'
import Product from '../../Product/Product.container';
class TodayDealSection extends Component{
	render(){
		return (
				<>
					<section className="elementor-section elementor-top-section elementor-element elementor-element-e84d91e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e84d91e" data-element_type="section">
						<div className="elementor-container elementor-column-gap-default">
							<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-da860df" data-id="da860df" data-element_type="column">
								<div className="elementor-widget-wrap elementor-element-populated">
									<div className="elementor-element elementor-element-905f514 elementor-widget elementor-widget-html" data-id="905f514" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
											<div className="block-infor3 clearfix">
												<div className="info info1 col-lg-4 col-md-4 col-sm-4 col-xs-12">
													<a href="#" className="inner">
														<div className="icon"></div>
														<div className="info-cont"> <span>free delivery</span>
															<p>On order over $49.86</p>
														</div>
													</a>
												</div>
												<div className="info info2 col-lg-4 col-md-4 col-sm-4 col-xs-12">
													<a href="#" className="inner">
														<div className="icon"></div>
														<div className="info-cont"> <span>money back</span>
															<p>return over 30 days</p>
														</div>
													</a>
												</div>
												<div className="info info3 col-lg-4 col-md-4 col-sm-4 col-xs-12">
													<a href="#" className="inner">
														<div className="icon"></div>
														<div className="info-cont"> <span>Online Support</span>
															<p>24/24 on day</p>
														</div>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
		<section className="elementor-section elementor-top-section elementor-element elementor-element-5c9cfc8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5c9cfc8" data-element_type="section">
			<div className="elementor-container elementor-column-gap-default">
				<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b0892a5" data-id="b0892a5" data-element_type="column">
					<div className="elementor-widget-wrap elementor-element-populated">
						<div className="elementor-element elementor-element-d4e5bce elementor-widget elementor-widget-wp-widget-sw_woo_slider_countdown_widget" data-id="d4e5bce" data-element_type="widget" data-widget_type="wp-widget-sw_woo_slider_countdown_widget.default">
							<div className="elementor-widget-container">
								<div id="_sw_countdown_sw_woo_slider_countdown_widget_1" className="sw-woo-container-slider responsive-slider countdown-slider2" data-lg="5" data-md="4" data-sm="3" data-xs="2" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false" data-circle="false" data-dots="true"><span data-role="none" className="res-button slick-prev slick-arrow" aria-label="previous"></span>
									<div className="block-title clearfix">
										<div className="box">
											<div className="description">These January Clearance Sales.</div>
											<h3>Today's hot deals</h3> </div>
									</div>
										<Product/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
		)
	}
}


export default TodayDealSection;
