import {useState,useEffect ,Component} from 'react'
import { Button } from 'react-bootstrap';
import {useHistory , useParams} from "react-router-dom";

import  axios from 'axios';


 function ShowProduct(props){
 	const API_URL = "http://localhost:8000/storage/";
	const [products, setproducts] = useState();
	useEffect(()=>{
		loadProducts();
	},[]);

	const loadProducts = async () =>{
	const result = await axios.get('http://localhost:8000/api/all_products');
	console.log("http://localhost:8000/"+result.data.reverse()[0].pro_images[0].doc_path)
	setproducts(result.data.reverse())
}
	return (
	<>
	<div id="contents-detail" class="content col-lg-9 col-md-8 col-sm-8" role="main">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div class="single-product clearfix">
				<div class="woocommerce-notices-wrapper"></div>
				<div itemscope="" itemtype="http://schema.org/Product" id="product-4081" class="post-4081 product type-product status-publish has-post-thumbnail product_cat-fashion-clothing product_cat-interior-decoration product_cat-patio-garden product_brand-brand-8 first instock sale featured shipping-taxable purchasable product-type-simple">
					<div class="product_detail row">
						<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 clear_xs">
							<div class="slider_img_productd">
								<!-- woocommerce_show_product_images -->
								<div class="sale-off ">sale</div>
								<div id="product_img_4081" class="woocommerce-product-gallery woocommerce-product-gallery--with-images images product-images" data-vertical="false" data-video="">
									<figure class="woocommerce-product-gallery__wrapper">
										<div class="product-images-container clearfix thumbnail-bottom">
											<!-- Image Slider -->
											<div class="slider product-responsive slick-initialized slick-slider"><a href="#" class="woocommerce-product-gallery__trigger">🔍</a>
												<div class="slick-list draggable">
													<div class="slick-track" style="opacity: 1; width: 2862px;">
														<div data-thumb="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag-100x100.jpg" class="woocommerce-product-gallery__image slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 477px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1; overflow: hidden;" tabindex="0">
															<a href="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag.jpg" tabindex="0">
																<img width="600" height="600" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag.jpg" class="wp-post-image" alt="" loading="lazy" title="Multicolor-Shoulder-Bag" data-caption="" data-src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag.jpg" data-large_image="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag.jpg" data-large_image_width="600" data-large_image_height="600" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag.jpg 600w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag-100x100.jpg 100w" sizes="(max-width: 600px) 100vw, 600px">
															</a>
															<img role="presentation" alt="" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag.jpg" class="zoomImg" style="position: absolute; top: -30.6855px; left: -26.6242px; opacity: 0; width: 600px; height: 600px; border: none; max-width: none; max-height: none;">
														</div>
														<div data-thumb="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag-100x100.jpg" class="woocommerce-product-gallery__image slick-slide" data-slick-index="1" aria-hidden="true" style="width: 477px; position: relative; left: -477px; top: 0px; z-index: 998; opacity: 0; overflow: hidden;" tabindex="-1">
															<a href="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag.jpg" tabindex="-1">
																<img width="600" height="600" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag.jpg" class="wp-post-image" alt="" loading="lazy" title="Multicolor-Shoulder-Bag" data-caption="" data-src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag.jpg" data-large_image="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag.jpg" data-large_image_width="600" data-large_image_height="600" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag.jpg 600w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag-100x100.jpg 100w" sizes="(max-width: 600px) 100vw, 600px">
															</a>
															<img role="presentation" alt="" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag.jpg" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 600px; height: 600px; border: none; max-width: none; max-height: none;">
														</div>
														<div data-thumb="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress-100x100.jpg" class="woocommerce-product-gallery__image slick-slide" data-slick-index="2" aria-hidden="true" style="width: 477px; position: relative; left: -954px; top: 0px; z-index: 998; opacity: 0; overflow: hidden;" tabindex="-1">
															<a href="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress.jpg" tabindex="-1">
																<img width="600" height="600" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress.jpg" class="wp-post-image" alt="" loading="lazy" title="Multicolor-Shoulder-Bag" data-caption="" data-src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress.jpg" data-large_image="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress.jpg" data-large_image_width="600" data-large_image_height="600" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress.jpg 600w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress-100x100.jpg 100w" sizes="(max-width: 600px) 100vw, 600px">
															</a>
															<img role="presentation" alt="" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress.jpg" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 600px; height: 600px; border: none; max-width: none; max-height: none;">
														</div>
														<div data-thumb="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop-100x100.jpg" class="woocommerce-product-gallery__image slick-slide" data-slick-index="3" aria-hidden="true" style="width: 477px; position: relative; left: -1431px; top: 0px; z-index: 998; opacity: 0; overflow: hidden;" tabindex="-1">
															<a href="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop.jpg" tabindex="-1">
																<img width="600" height="600" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop.jpg" class="wp-post-image" alt="" loading="lazy" title="Multicolor-Shoulder-Bag" data-caption="" data-src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop.jpg" data-large_image="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop.jpg" data-large_image_width="600" data-large_image_height="600" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop.jpg 600w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop-100x100.jpg 100w" sizes="(max-width: 600px) 100vw, 600px">
															</a>
															<img role="presentation" alt="" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop.jpg" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 600px; height: 600px; border: none; max-width: none; max-height: none;">
														</div>
														<div data-thumb="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs-100x100.jpg" class="woocommerce-product-gallery__image slick-slide" data-slick-index="4" aria-hidden="true" style="width: 477px; position: relative; left: -1908px; top: 0px; z-index: 998; opacity: 0; overflow: hidden;" tabindex="-1">
															<a href="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs.jpg" tabindex="-1">
																<img width="600" height="600" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs.jpg" class="wp-post-image" alt="" loading="lazy" title="Multicolor-Shoulder-Bag" data-caption="" data-src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs.jpg" data-large_image="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs.jpg" data-large_image_width="600" data-large_image_height="600" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs.jpg 600w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs-100x100.jpg 100w" sizes="(max-width: 600px) 100vw, 600px">
															</a>
															<img role="presentation" alt="" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs.jpg" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 600px; height: 600px; border: none; max-width: none; max-height: none;">
														</div>
														<div data-thumb="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist-100x100.jpg" class="woocommerce-product-gallery__image slick-slide" data-slick-index="5" aria-hidden="true" style="width: 477px; position: relative; left: -2385px; top: 0px; z-index: 998; opacity: 0; overflow: hidden;" tabindex="-1">
															<a href="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist.jpg" tabindex="-1">
																<img width="600" height="600" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist.jpg" class="wp-post-image" alt="" loading="lazy" title="Multicolor-Shoulder-Bag" data-caption="" data-src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist.jpg" data-large_image="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist.jpg" data-large_image_width="600" data-large_image_height="600" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist.jpg 600w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist-100x100.jpg 100w" sizes="(max-width: 600px) 100vw, 600px">
															</a>
															<img role="presentation" alt="" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist.jpg" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 600px; height: 600px; border: none; max-width: none; max-height: none;">
														</div>
													</div>
												</div>
											</div>
											<!-- Thumbnail Slider -->
											<div class="slider product-responsive-thumbnail slick-initialized slick-slider" id="product_thumbnail_4081">
												<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="">Previous</button>
												<div class="slick-list draggable">
													<div class="slick-track" style="opacity: 1; width: 588px; transform: translate3d(0px, 0px, 0px);">
														<div class="item-thumbnail-product slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 98px;" tabindex="0">
															<div class="thumbnail-wrapper">
																<img width="100" height="100" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag-100x100.jpg" class="slick-current" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag.jpg 600w" sizes="(max-width: 100px) 100vw, 100px">
															</div>
														</div>
														<div class="item-thumbnail-product slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 98px;" tabindex="0">
															<div class="thumbnail-wrapper">
																<img width="100" height="100" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag-100x100.jpg" class="slick-current" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag.jpg 600w" sizes="(max-width: 100px) 100vw, 100px">
															</div>
														</div>
														<div class="item-thumbnail-product slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 98px;" tabindex="0">
															<div class="thumbnail-wrapper">
																<img width="100" height="100" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress-100x100.jpg" class="slick-current" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Nightstar-Dress.jpg 600w" sizes="(max-width: 100px) 100vw, 100px">
															</div>
														</div>
														<div class="item-thumbnail-product slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 98px;" tabindex="0">
															<div class="thumbnail-wrapper">
																<img width="100" height="100" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop-100x100.jpg" class="slick-current" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Half-Sleeves-Printed-Cotton-Crop.jpg 600w" sizes="(max-width: 100px) 100vw, 100px">
															</div>
														</div>
														<div class="item-thumbnail-product slick-slide slick-active" data-slick-index="4" aria-hidden="false" style="width: 98px;" tabindex="0">
															<div class="thumbnail-wrapper">
																<img width="100" height="100" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs-100x100.jpg" class="slick-current" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Perfect-Marc-Jacobs.jpg 600w" sizes="(max-width: 100px) 100vw, 100px">
															</div>
														</div>
														<div class="item-thumbnail-product slick-slide" data-slick-index="5" aria-hidden="true" style="width: 98px;" tabindex="-1">
															<div class="thumbnail-wrapper">
																<img width="100" height="100" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist-100x100.jpg" class="slick-current" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Organic-Rose-Water-Facial-Mist.jpg 600w" sizes="(max-width: 100px) 100vw, 100px">
															</div>
														</div>
													</div>
												</div>
												<button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false">Next</button>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 clear_xs">
							<div class="content_product_detail">
							
								<h1 class="product_title entry-title">Multicolor Shoulder Bag</h1>
								<div class="reviews-content" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">
									<div class="star">	<span style="width:0px"></span>	
										<div class="rating-hidden">	<strong itemprop="ratingValue" class="rating">0</strong> out of <span itemprop="bestRating">5</span>	based on <span itemprop="ratingCount" class="rating">0</span> customer ratings</div>
									</div>	<span class="review-number">0 reviews</span>
									<a href="#reviews" class="woocommerce-write-review" rel="nofollow">Write a review</a>
								</div>
								<div class="item-brand">	<span>Brand: </span>
									<a href="https://demo.wpthemego.com/themes/sw_flashmart/product_brand/brand-8/">Alexander</a>
								</div>
								<div class="product_meta"></div>
								<div class="single-price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">	<span class="our-price">Our Price</span>
									<p class="price"><del><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>65.00</bdi>" data-price="65" title="Original price:65">$65.00</span></del>  <ins><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>52.00</bdi>" data-price="52" title="Original price:52">$52.00</span></ins>
									</p>
									<meta itemprop="price" content="52">
									<meta itemprop="priceCurrency" content="USD">
									<link itemprop="availability" href="http://schema.org/InStock">
								</div>
								<div class="description" itemprop="description">
									<p>Aenean in mattis velit. Mauris dolor ante, congue a sagittis quis, varius eu justo. In dictum feugiat sem quis efficitur. Vestibulum velit mi, vestibulum eu laoreet et, porttitor non lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
								</div>
								<form class="cart" action="https://demo.wpthemego.com/themes/sw_flashmart/product/eu-ultrices-ex-tortor-quis-veli/" method="post" enctype="multipart/form-data">
									<div class="addcart-wrapper single-buynow clearfix">
										<div class="qty">Quantity:</div>
										<div class="quantity buttons_added">
											<input type="button" value="-" class="minus">
											<label class="screen-reader-text" for="quantity_60e611596399b">Multicolor Shoulder Bag quantity</label>
											<input type="number" id="quantity_60e611596399b" class="input-text qty text" step="1" min="1" max="" name="quantity" value="1" title="Qty" size="4" placeholder="" inputmode="numeric">
											<input type="button" value="+" class="plus">
										</div>
										<button type="submit" name="add-to-cart" value="4081" class="single_add_to_cart_button button alt">Add to cart</button>	<a class="button-buynow" href="https://demo.wpthemego.com/themes/sw_flashmart/checkout/?add-to-cart=4081&amp;quantity=2" data-url="https://demo.wpthemego.com/themes/sw_flashmart/checkout/?add-to-cart=4081">Buy Now</a>
										<div class="clear"></div>
										<div class="item-bottom">
											<div class="yith-wcwl-add-to-wishlist add-to-wishlist-4081  wishlist-fragment on-first-load" data-fragment-ref="4081" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:4081,&quot;parent_product_id&quot;:4081,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
												<!-- ADD TO WISHLIST -->
												<div class="yith-wcwl-add-button">
													<a href="?add_to_wishlist=4081" rel="nofollow" data-product-id="4081" data-product-type="simple" data-original-product-id="4081" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList">	<span>Add to Wishlist</span>
													</a>
												</div>
												<!-- COUNT TEXT -->
											</div>
										</div>
									</div>
								</form>
								<div class="product-info in-stock">	<span><i class="fa fa-check-circle-o" aria-hidden="true"></i>In stock</span>
									<div class="shipping-text">&amp; Ready to Ship</div>
								</div>
								<div class="item-meta">	<span class="posted_in">Categories: <a href="https://demo.wpthemego.com/themes/sw_flashmart/product-category/fashion-clothing/" rel="tag">Fashion Clothing</a>, <a href="https://demo.wpthemego.com/themes/sw_flashmart/product-category/interior-decoration/" rel="tag">Interior &amp; Decoration</a>, <a href="https://demo.wpthemego.com/themes/sw_flashmart/product-category/patio-garden/" rel="tag">Patio &amp; Garden</a></span>	
								</div>
								<div class="social-share">
									<div class="title-share">Share:</div>
									<div class="wrap-content">
										<div class="item-social facebook">	<a href="http://www.facebook.com/share.php?u=https://demo.wpthemego.com/themes/sw_flashmart/product/eu-ultrices-ex-tortor-quis-veli/&amp;title=Multicolor Shoulder Bag" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><i class="fa fa-facebook"></i></a>
										</div>
										<div class="item-social twitter">	<a href="http://twitter.com/intent/tweet?url=Multicolor Shoulder Bag+https://demo.wpthemego.com/themes/sw_flashmart/product/eu-ultrices-ex-tortor-quis-veli/" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><i class="fa fa-twitter"></i></a>
										</div>
										<div class="item-social pinterest">	<a href="http://pinterest.com/pin/create/button/?url=https://demo.wpthemego.com/themes/sw_flashmart/product/eu-ultrices-ex-tortor-quis-veli/&amp;description=Multicolor Shoulder Bag" class="pin-it-button" count-layout="horizontal" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><i class="fa fa-pinterest-p"></i></a>
										</div>
									</div>
								</div>
								<div class="wc-soldby-start"><small class="wcvendors_sold_by_in_loop">Sold By : sw flashmart</small>
									<br>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="tabs clearfix">
					<div class="tabbable">
						<ul class="nav nav-tabs">
							<li class="description_tab active">	<a href="#tab-description" data-toggle="tab">Description</a>
							</li>
							<li class="reviews_tab">	<a href="#tab-reviews" data-toggle="tab">Reviews (0)</a>
							</li>
						</ul>
						<div class="clear"></div>
						<div class=" tab-content">
							<div class="tab-pane active" id="tab-description">
								<h2>Description</h2>
								<p>Mauris vitae lorem sit amet mi convallis fermentum ac ac lorem. Nam sed facilisis ligula, sed malesuada ligula. Duis consectetur vitae risus vel malesuada. Nullam ut tortor dolor. Sed vel nunc volutpat, condimentum ante a, fermentum ante. Pellentesque iaculis nisi non gravida tristique. Aenean eget risus finibus, dapibus diam a, imperdiet elit. Morbi tristique fringilla felis a sodales. Duis sapien arcu, viverra posuere mattis eu, lacinia nec arcu. Ut sollicitudin gravida tellus, eu dapibus enim venenatis id. Morbi fermentum, velit in tempus pulvinar, lectus enim ultricies lectus, eu ultrices ex tortor quis velit. Phasellus eros massa, laoreet ut volutpat sed, vulputate ac lacus. Donec ligula tellus, porta nec dictum ac, eleifend ac mi. Proin ac dictum elit, eu feugiat odio. Maecenas vehicula sapien non ornare condimentum.</p>
								<p>Donec quis dictum ipsum. Etiam efficitur tortor a velit fermentum, sed tempus sapien vestibulum. In purus ipsum, eleifend quis dictum in, laoreet ultricies velit. Integer aliquet gravida orci vitae tempor. Aliquam fringilla laoreet nunc, luctus malesuada justo varius non. In dictum sapien ut elit tincidunt, sit amet sollicitudin purus laoreet. Nullam id risus non felis faucibus dictum. Vestibulum mollis urna in ligula volutpat condimentum. Nunc imperdiet sed erat vel auctor. Fusce ut mauris suscipit, tempor urna vel, cursus sem. Etiam pulvinar est ut purus interdum bibendum. Cras eleifend ligula enim, ac vulputate massa commodo nec. Morbi vehicula sagittis ultricies. Aliquam at laoreet erat, nec malesuada nunc.</p>
							</div>
							<div class="tab-pane" id="tab-reviews">
								<div id="reviews" class="woocommerce-Reviews">
									<div id="comments">
										<h2 class="woocommerce-Reviews-title">
			Reviews		</h2>
										<p class="woocommerce-noreviews">There are no reviews yet.</p>
									</div>
									<div id="review_form_wrapper">
										<div id="review_form">
											<div id="respond" class="comment-respond">	<span id="reply-title" class="comment-reply-title">Be the first to review “Multicolor Shoulder Bag” <small><a rel="nofollow" id="cancel-comment-reply-link" href="/themes/sw_flashmart/product/eu-ultrices-ex-tortor-quis-veli/#respond" style="display:none;">Cancel reply</a></small></span>
												<p class="must-log-in">You must be <a href="https://demo.wpthemego.com/themes/sw_flashmart/my-account/">logged in</a> to post a review.</p>
											</div>
											<!-- #respond -->
										</div>
									</div>
									<div class="clear"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="bottom-single-product clearfix">
					<div class="widget-1 widget-first widget sw_related_upsell_widget-4 sw_related_upsell_widget" data-scroll-reveal="enter bottom move 20px wait 0.2s">
						<div class="widget-inner">
							<div id="slider_sw_related_upsell_widget-4" class="sw-woo-container-slider related-products responsive-slider clearfix" data-lg="4" data-md="3" data-sm="3" data-xs="2" data-mobile="1" data-speed="1000" data-scroll="2" data-interval="5000" data-autoplay="true" data-dots="true"><span data-role="none" class="res-button slick-prev slick-arrow" aria-label="previous" style=""></span>
								<div class="box-slider-title">
									<h2>related products</h2>	
								</div>
								<div class="resp-slider-container">
									<div class="slider responsive slick-initialized slick-slider slick-dotted">
										<div class="slick-list draggable">
											<div class="slick-track" style="opacity: 1; width: 4064px; transform: translate3d(-1016px, 0px, 0px);">
												<div class="item slick-slide slick-cloned" data-slick-index="-4" id="" aria-hidden="true" style="width: 254px;" tabindex="-1">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/volcom-be-easy-dress/" tabindex="-1">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
																<div class="sale-off ">sale</div>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/volcom-be-easy-dress/" title="Volcom-Be-Easy-Dress" tabindex="-1">Volcom-Be-Easy-Dress</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<ins><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>121.00</bdi>" data-price="121" title="Original price:121">$121.00</span>
																	</ins> <del><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>211.00</bdi>" data-price="211" title="Original price:211">$211.00</span></del>	
																	</span>
																</div>
																<div class="item-bottom"><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/volcom-be-easy-dress/" data-quantity="1" class="button product_type_bundle add_to_cart_button" data-product_id="7090" data-product_sku="" aria-label="Read more about “Volcom-Be-Easy-Dress”" rel="nofollow" title="Add To Cart" tabindex="-1">Read more</a><a href="javascript:void(0)" data-product_id="7090" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-7090  wishlist-fragment on-first-load" data-fragment-ref="7090" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:7090,&quot;parent_product_id&quot;:7090,&quot;product_type&quot;:&quot;bundle&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=7090" rel="nofollow" data-product-id="7090" data-product-type="bundle" data-original-product-id="7090" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-cloned" data-slick-index="-3" id="" aria-hidden="true" style="width: 254px;" tabindex="-1">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/si-non-gravida-tortor-veli-quis/" tabindex="-1">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
																<div class="sale-off ">sale</div>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/si-non-gravida-tortor-veli-quis/" title="Polaroid Snap Touch Instant Digital Camera Red." tabindex="-1">Polaroid Snap Touch Instant Digital Camera Red.</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<del><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>185.00</bdi>" data-price="185" title="Original price:185">$185.00</span>
																	</del> <ins><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>99.00</bdi>" data-price="99" title="Original price:99">$99.00</span></ins>	
																	</span>
																</div>
																<div class="item-bottom"><a href="?add-to-cart=4956" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="4956" data-product_sku="KHU84-1-1" aria-label="Add “Polaroid Snap Touch Instant Digital Camera Red.” to your cart" rel="nofollow" title="Add To Cart" tabindex="-1">Add to cart</a><a href="javascript:void(0)" data-product_id="4956" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-4956  wishlist-fragment on-first-load" data-fragment-ref="4956" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:4956,&quot;parent_product_id&quot;:4956,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=4956" rel="nofollow" data-product-id="4956" data-product-type="simple" data-original-product-id="4956" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-cloned" data-slick-index="-2" id="" aria-hidden="true" style="width: 254px;" tabindex="-1">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/ut-sollicitudin-gravida-tellu/" tabindex="-1">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/ut-sollicitudin-gravida-tellu/" title="MSGR Strobelight GlowPowder" tabindex="-1">MSGR Strobelight GlowPowder</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>55.00</bdi>" data-price="55" title="Original price:55">$55.00</span>
																	</span>
																</div>
																<div class="item-bottom"><a href="?add-to-cart=4079" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="4079" data-product_sku="" aria-label="Add “MSGR Strobelight GlowPowder” to your cart" rel="nofollow" title="Add To Cart" tabindex="-1">Add to cart</a><a href="javascript:void(0)" data-product_id="4079" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-4079  wishlist-fragment on-first-load" data-fragment-ref="4079" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:4079,&quot;parent_product_id&quot;:4079,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=4079" rel="nofollow" data-product-id="4079" data-product-type="simple" data-original-product-id="4079" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" style="width: 254px;" tabindex="-1">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/nunc-imperdiet-sed-erat-vel/" tabindex="-1">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/nunc-imperdiet-sed-erat-vel/" title="La Vie Est Belle Intensement 100Ml Edp" tabindex="-1">La Vie Est Belle Intensement 100Ml Edp</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>68.00</bdi>" data-price="68" title="Original price:68">$68.00</span>
																	</span>
																</div>
																<div class="item-bottom"><a href="?add-to-cart=4077" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="4077" data-product_sku="" aria-label="Add “La Vie Est Belle Intensement 100Ml Edp” to your cart" rel="nofollow" title="Add To Cart" tabindex="-1">Add to cart</a><a href="javascript:void(0)" data-product_id="4077" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-4077  wishlist-fragment on-first-load" data-fragment-ref="4077" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:4077,&quot;parent_product_id&quot;:4077,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=4077" rel="nofollow" data-product-id="4077" data-product-type="simple" data-original-product-id="4077" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 254px;" tabindex="0" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/soborg-chair-wood-frame/" tabindex="0">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/Soborg-Chair-Wood-Frame-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="Soborg Chair - Wood Frame" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/Soborg-Chair-Wood-Frame-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/Soborg-Chair-Wood-Frame-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/Soborg-Chair-Wood-Frame-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/Soborg-Chair-Wood-Frame.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
																<div class="sale-off ">sale</div>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/soborg-chair-wood-frame/" title="Soborg Chair Wood Frame" tabindex="0">Soborg Chair Wood Frame</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<del><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>80.00</bdi>" data-price="80" title="Original price:80">$80.00</span>
																	</del> <ins><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>59.00</bdi>" data-price="59" title="Original price:59">$59.00</span></ins>	
																	</span>
																</div>
																<div class="item-bottom"><a href="?add-to-cart=8286" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="8286" data-product_sku="" aria-label="Add “Soborg Chair Wood Frame” to your cart" rel="nofollow" title="Add To Cart" tabindex="0">Add to cart</a><a href="javascript:void(0)" data-product_id="8286" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="0">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-8286  wishlist-fragment on-first-load" data-fragment-ref="8286" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:8286,&quot;parent_product_id&quot;:8286,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=8286" rel="nofollow" data-product-id="8286" data-product-type="simple" data-original-product-id="8286" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="0">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 254px;" tabindex="0" role="tabpanel" id="slick-slide21">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/samsung-galaxy-s21-2021-bundle/" tabindex="0">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/SAMSUNG-Galaxy-S21-2021-Bundle-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="SAMSUNG Galaxy S21 2021 Bundle" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/SAMSUNG-Galaxy-S21-2021-Bundle-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/SAMSUNG-Galaxy-S21-2021-Bundle-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/SAMSUNG-Galaxy-S21-2021-Bundle-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/SAMSUNG-Galaxy-S21-2021-Bundle.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
																<div class="sale-off ">sale</div>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/samsung-galaxy-s21-2021-bundle/" title="SAMSUNG Galaxy S21 2021 Bundle" tabindex="0">SAMSUNG Galaxy S21 2021 Bundle</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<ins><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>222.00</bdi>" data-price="222" title="Original price:222">$222.00</span>
																	</ins> <del><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>289.00</bdi>" data-price="289" title="Original price:289">$289.00</span></del>	
																	</span>
																</div>
																<div class="item-bottom"><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/samsung-galaxy-s21-2021-bundle/" data-quantity="1" class="button product_type_bundle add_to_cart_button" data-product_id="8157" data-product_sku="" aria-label="Read more about “SAMSUNG Galaxy S21 2021 Bundle”" rel="nofollow" title="Add To Cart" tabindex="0">Read more</a><a href="javascript:void(0)" data-product_id="8157" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="0">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-8157  wishlist-fragment on-first-load" data-fragment-ref="8157" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:8157,&quot;parent_product_id&quot;:8157,&quot;product_type&quot;:&quot;bundle&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=8157" rel="nofollow" data-product-id="8157" data-product-type="bundle" data-original-product-id="8157" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="0">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 254px;" tabindex="0" role="tabpanel" id="slick-slide22" aria-describedby="slick-slide-control21">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/volcom-be-easy-dress/" tabindex="0">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
																<div class="sale-off ">sale</div>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/volcom-be-easy-dress/" title="Volcom-Be-Easy-Dress" tabindex="0">Volcom-Be-Easy-Dress</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<ins><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>121.00</bdi>" data-price="121" title="Original price:121">$121.00</span>
																	</ins> <del><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>211.00</bdi>" data-price="211" title="Original price:211">$211.00</span></del>	
																	</span>
																</div>
																<div class="item-bottom"><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/volcom-be-easy-dress/" data-quantity="1" class="button product_type_bundle add_to_cart_button" data-product_id="7090" data-product_sku="" aria-label="Read more about “Volcom-Be-Easy-Dress”" rel="nofollow" title="Add To Cart" tabindex="0">Read more</a><a href="javascript:void(0)" data-product_id="7090" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="0">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-7090  wishlist-fragment on-first-load" data-fragment-ref="7090" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:7090,&quot;parent_product_id&quot;:7090,&quot;product_type&quot;:&quot;bundle&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=7090" rel="nofollow" data-product-id="7090" data-product-type="bundle" data-original-product-id="7090" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="0">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 254px;" tabindex="0" role="tabpanel" id="slick-slide23">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/si-non-gravida-tortor-veli-quis/" tabindex="0">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
																<div class="sale-off ">sale</div>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/si-non-gravida-tortor-veli-quis/" title="Polaroid Snap Touch Instant Digital Camera Red." tabindex="0">Polaroid Snap Touch Instant Digital Camera Red.</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<del><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>185.00</bdi>" data-price="185" title="Original price:185">$185.00</span>
																	</del> <ins><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>99.00</bdi>" data-price="99" title="Original price:99">$99.00</span></ins>	
																	</span>
																</div>
																<div class="item-bottom"><a href="?add-to-cart=4956" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="4956" data-product_sku="KHU84-1-1" aria-label="Add “Polaroid Snap Touch Instant Digital Camera Red.” to your cart" rel="nofollow" title="Add To Cart" tabindex="0">Add to cart</a><a href="javascript:void(0)" data-product_id="4956" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="0">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-4956  wishlist-fragment on-first-load" data-fragment-ref="4956" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:4956,&quot;parent_product_id&quot;:4956,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=4956" rel="nofollow" data-product-id="4956" data-product-type="simple" data-original-product-id="4956" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="0">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide" data-slick-index="4" aria-hidden="true" style="width: 254px;" tabindex="-1" role="tabpanel" id="slick-slide24" aria-describedby="slick-slide-control22">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/ut-sollicitudin-gravida-tellu/" tabindex="-1">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/ut-sollicitudin-gravida-tellu/" title="MSGR Strobelight GlowPowder" tabindex="-1">MSGR Strobelight GlowPowder</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>55.00</bdi>" data-price="55" title="Original price:55">$55.00</span>
																	</span>
																</div>
																<div class="item-bottom"><a href="?add-to-cart=4079" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="4079" data-product_sku="" aria-label="Add “MSGR Strobelight GlowPowder” to your cart" rel="nofollow" title="Add To Cart" tabindex="-1">Add to cart</a><a href="javascript:void(0)" data-product_id="4079" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-4079  wishlist-fragment on-first-load" data-fragment-ref="4079" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:4079,&quot;parent_product_id&quot;:4079,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=4079" rel="nofollow" data-product-id="4079" data-product-type="simple" data-original-product-id="4079" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide" data-slick-index="5" aria-hidden="true" style="width: 254px;" tabindex="-1" role="tabpanel" id="slick-slide25">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/nunc-imperdiet-sed-erat-vel/" tabindex="-1">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/nunc-imperdiet-sed-erat-vel/" title="La Vie Est Belle Intensement 100Ml Edp" tabindex="-1">La Vie Est Belle Intensement 100Ml Edp</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>68.00</bdi>" data-price="68" title="Original price:68">$68.00</span>
																	</span>
																</div>
																<div class="item-bottom"><a href="?add-to-cart=4077" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="4077" data-product_sku="" aria-label="Add “La Vie Est Belle Intensement 100Ml Edp” to your cart" rel="nofollow" title="Add To Cart" tabindex="-1">Add to cart</a><a href="javascript:void(0)" data-product_id="4077" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-4077  wishlist-fragment on-first-load" data-fragment-ref="4077" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:4077,&quot;parent_product_id&quot;:4077,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=4077" rel="nofollow" data-product-id="4077" data-product-type="simple" data-original-product-id="4077" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-cloned" data-slick-index="6" id="" aria-hidden="true" style="width: 254px;" tabindex="-1">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/soborg-chair-wood-frame/" tabindex="-1">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/Soborg-Chair-Wood-Frame-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="Soborg Chair - Wood Frame" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/Soborg-Chair-Wood-Frame-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/Soborg-Chair-Wood-Frame-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/Soborg-Chair-Wood-Frame-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/Soborg-Chair-Wood-Frame.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
																<div class="sale-off ">sale</div>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/soborg-chair-wood-frame/" title="Soborg Chair Wood Frame" tabindex="-1">Soborg Chair Wood Frame</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<del><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>80.00</bdi>" data-price="80" title="Original price:80">$80.00</span>
																	</del> <ins><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>59.00</bdi>" data-price="59" title="Original price:59">$59.00</span></ins>	
																	</span>
																</div>
																<div class="item-bottom"><a href="?add-to-cart=8286" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="8286" data-product_sku="" aria-label="Add “Soborg Chair Wood Frame” to your cart" rel="nofollow" title="Add To Cart" tabindex="-1">Add to cart</a><a href="javascript:void(0)" data-product_id="8286" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-8286  wishlist-fragment on-first-load" data-fragment-ref="8286" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:8286,&quot;parent_product_id&quot;:8286,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=8286" rel="nofollow" data-product-id="8286" data-product-type="simple" data-original-product-id="8286" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-cloned" data-slick-index="7" id="" aria-hidden="true" style="width: 254px;" tabindex="-1">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/samsung-galaxy-s21-2021-bundle/" tabindex="-1">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/SAMSUNG-Galaxy-S21-2021-Bundle-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="SAMSUNG Galaxy S21 2021 Bundle" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/SAMSUNG-Galaxy-S21-2021-Bundle-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/SAMSUNG-Galaxy-S21-2021-Bundle-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/SAMSUNG-Galaxy-S21-2021-Bundle-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/03/SAMSUNG-Galaxy-S21-2021-Bundle.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
																<div class="sale-off ">sale</div>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/samsung-galaxy-s21-2021-bundle/" title="SAMSUNG Galaxy S21 2021 Bundle" tabindex="-1">SAMSUNG Galaxy S21 2021 Bundle</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<ins><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>222.00</bdi>" data-price="222" title="Original price:222">$222.00</span>
																	</ins> <del><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>289.00</bdi>" data-price="289" title="Original price:289">$289.00</span></del>	
																	</span>
																</div>
																<div class="item-bottom"><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/samsung-galaxy-s21-2021-bundle/" data-quantity="1" class="button product_type_bundle add_to_cart_button" data-product_id="8157" data-product_sku="" aria-label="Read more about “SAMSUNG Galaxy S21 2021 Bundle”" rel="nofollow" title="Add To Cart" tabindex="-1">Read more</a><a href="javascript:void(0)" data-product_id="8157" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-8157  wishlist-fragment on-first-load" data-fragment-ref="8157" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:8157,&quot;parent_product_id&quot;:8157,&quot;product_type&quot;:&quot;bundle&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=8157" rel="nofollow" data-product-id="8157" data-product-type="bundle" data-original-product-id="8157" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-cloned" data-slick-index="8" id="" aria-hidden="true" style="width: 254px;" tabindex="-1">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/volcom-be-easy-dress/" tabindex="-1">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2021/01/Volcom-Be-Easy-Dress.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
																<div class="sale-off ">sale</div>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/volcom-be-easy-dress/" title="Volcom-Be-Easy-Dress" tabindex="-1">Volcom-Be-Easy-Dress</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<ins><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>121.00</bdi>" data-price="121" title="Original price:121">$121.00</span>
																	</ins> <del><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>211.00</bdi>" data-price="211" title="Original price:211">$211.00</span></del>	
																	</span>
																</div>
																<div class="item-bottom"><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/volcom-be-easy-dress/" data-quantity="1" class="button product_type_bundle add_to_cart_button" data-product_id="7090" data-product_sku="" aria-label="Read more about “Volcom-Be-Easy-Dress”" rel="nofollow" title="Add To Cart" tabindex="-1">Read more</a><a href="javascript:void(0)" data-product_id="7090" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-7090  wishlist-fragment on-first-load" data-fragment-ref="7090" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:7090,&quot;parent_product_id&quot;:7090,&quot;product_type&quot;:&quot;bundle&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=7090" rel="nofollow" data-product-id="7090" data-product-type="bundle" data-original-product-id="7090" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-cloned" data-slick-index="9" id="" aria-hidden="true" style="width: 254px;" tabindex="-1">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/si-non-gravida-tortor-veli-quis/" tabindex="-1">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
																<div class="sale-off ">sale</div>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/si-non-gravida-tortor-veli-quis/" title="Polaroid Snap Touch Instant Digital Camera Red." tabindex="-1">Polaroid Snap Touch Instant Digital Camera Red.</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<del><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>185.00</bdi>" data-price="185" title="Original price:185">$185.00</span>
																	</del> <ins><span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>99.00</bdi>" data-price="99" title="Original price:99">$99.00</span></ins>	
																	</span>
																</div>
																<div class="item-bottom"><a href="?add-to-cart=4956" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="4956" data-product_sku="KHU84-1-1" aria-label="Add “Polaroid Snap Touch Instant Digital Camera Red.” to your cart" rel="nofollow" title="Add To Cart" tabindex="-1">Add to cart</a><a href="javascript:void(0)" data-product_id="4956" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-4956  wishlist-fragment on-first-load" data-fragment-ref="4956" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:4956,&quot;parent_product_id&quot;:4956,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=4956" rel="nofollow" data-product-id="4956" data-product-type="simple" data-original-product-id="4956" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-cloned" data-slick-index="10" id="" aria-hidden="true" style="width: 254px;" tabindex="-1">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/ut-sollicitudin-gravida-tellu/" tabindex="-1">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/MSGR-Strobelight-GlowPowder.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/ut-sollicitudin-gravida-tellu/" title="MSGR Strobelight GlowPowder" tabindex="-1">MSGR Strobelight GlowPowder</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>55.00</bdi>" data-price="55" title="Original price:55">$55.00</span>
																	</span>
																</div>
																<div class="item-bottom"><a href="?add-to-cart=4079" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="4079" data-product_sku="" aria-label="Add “MSGR Strobelight GlowPowder” to your cart" rel="nofollow" title="Add To Cart" tabindex="-1">Add to cart</a><a href="javascript:void(0)" data-product_id="4079" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-4079  wishlist-fragment on-first-load" data-fragment-ref="4079" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:4079,&quot;parent_product_id&quot;:4079,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=4079" rel="nofollow" data-product-id="4079" data-product-type="simple" data-original-product-id="4079" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="item slick-slide slick-cloned" data-slick-index="11" id="" aria-hidden="true" style="width: 253px;" tabindex="-1">
													<div class="item-wrap">
														<div class="item-detail">
															<div class="item-img products-thumb">
																<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/nunc-imperdiet-sed-erat-vel/" tabindex="-1">
																	<img width="300" height="300" src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/La-Vie-Est-Belle-Intensement-100Ml-Edp.jpg 600w" sizes="(max-width: 300px) 100vw, 300px">
																</a>
															</div>
															<div class="item-content">
																<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/nunc-imperdiet-sed-erat-vel/" title="La Vie Est Belle Intensement 100Ml Edp" tabindex="-1">La Vie Est Belle Intensement 100Ml Edp</a></h4>
																<!-- rating  -->
																<div class="reviews-content">
																	<div class="star"></div>
																</div>
																<!-- price -->
																<div class="item-price">	<span>
						<span class="woocommerce-Price-amount amount" data-original="<bdi><span class=&quot;woocommerce-Price-currencySymbol&quot;>$</span>68.00</bdi>" data-price="68" title="Original price:68">$68.00</span>
																	</span>
																</div>
																<div class="item-bottom"><a href="?add-to-cart=4077" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="4077" data-product_sku="" aria-label="Add “La Vie Est Belle Intensement 100Ml Edp” to your cart" rel="nofollow" title="Add To Cart" tabindex="-1">Add to cart</a><a href="javascript:void(0)" data-product_id="4077" class="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
																	<div class="yith-wcwl-add-to-wishlist add-to-wishlist-4077  wishlist-fragment on-first-load" data-fragment-ref="4077" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:4077,&quot;parent_product_id&quot;:4077,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
																		<!-- ADD TO WISHLIST -->
																		<div class="yith-wcwl-add-button">
																			<a href="?add_to_wishlist=4077" rel="nofollow" data-product-id="4077" data-product-type="simple" data-original-product-id="4077" class="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1">	<span>Add to Wishlist</span>
																			</a>
																		</div>
																		<!-- COUNT TEXT -->
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<ul class="slick-dots" style="" role="tablist">
											<li class="slick-active" role="presentation">
												<button type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20" aria-label="1 of 2" tabindex="0" aria-selected="true">1</button>
											</li>
											<li role="presentation" class="">
												<button type="button" role="tab" id="slick-slide-control21" aria-controls="slick-slide22" aria-label="2 of 2" tabindex="-1">2</button>
											</li>
											<li role="presentation" class="">
												<button type="button" role="tab" id="slick-slide-control22" aria-controls="slick-slide24" aria-label="3 of 2" tabindex="-1">3</button>
											</li>
										</ul>
									</div>
								</div>	<span data-role="none" class="res-button slick-next slick-arrow" aria-label="next" style=""></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</div>
)
}

export default ShowProduct;