import {Component} from 'react';

class SearchBar extends Component {
    render(){
        return(
            <>
                <div class="elementor-widget-container">
                    <div class="revo_top swsearch-wrapper clearfix">
                        <div class="top-form top-search">
                            <div class="topsearch-entry">
                                <form method="GET" action="https://demo.wpthemego.com/themes/sw_flashmart/">
                                    <div
                                        id="sw_woo_search_1"
                                        class="search input-group"
                                        data-height_image="50"
                                        data-width_image="50"
                                        data-show_image="1"
                                        data-show_price="1"
                                        data-character="3"
                                        data-limit="5"
                                        data-search_type="0"
                                    >
                                        <div class="cat-wrapper">
                                            <label class="label-search">
                                                <select name="category_product" class="s1_option category-selection">
                                                    <option value="">All Category</option>
                                                    <option value="cameras-photos">Cameras &amp; Photos</option>

                                                    <option value="camera">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Camera</option>

                                                    <option value="sports">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sports</option>

                                                    <option value="technology">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technology</option>

                                                    <option value="tripods-supports">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tripods &amp; Supports</option>

                                                    <option value="electric-kitchen">Electric Kitchen</option>

                                                    <option value="air-quality">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air Quality</option>

                                                    <option value="cooling">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cooling</option>

                                                    <option value="heating">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Heating</option>

                                                    <option value="tools">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tools</option>

                                                    <option value="fashion-clothing">Fashion Clothing</option>

                                                    <option value="health-hair">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Health &amp; Hair</option>

                                                    <option value="luggaage-travel">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Luggaage &amp; Travel</option>

                                                    <option value="outer-jacket">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outer &amp; Jacket</option>

                                                    <option value="womens-dress">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Women’s Dress</option>

                                                    <option value="games-consoles">Games &amp; Consoles</option>

                                                    <option value="handheld-console">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Handheld Console</option>

                                                    <option value="retro-arcade-gaming">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Retro &amp; Arcade Gaming</option>

                                                    <option value="table-console">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Table Console</option>

                                                    <option value="video-game">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Video Game</option>

                                                    <option value="headphone">Headphone</option>

                                                    <option value="bluetooth-headphones">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bluetooth Headphones</option>

                                                    <option value="dvd-players">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DVD Players</option>

                                                    <option value="ipod-mp3-players">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iPod &amp; MP3 Players</option>

                                                    <option value="portable-audio">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Portable Audio</option>

                                                    <option value="interior-decoration">Interior &amp; Decoration</option>

                                                    <option value="appiliances">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appiliances</option>

                                                    <option value="blinds-shades">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blinds &amp; Shades</option>

                                                    <option value="decor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Decor</option>

                                                    <option value="wall-art">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wall Art</option>

                                                    <option value="jewelrys">Jewelrys</option>

                                                    <option value="charms">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Charms</option>

                                                    <option value="earrings">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earrings</option>

                                                    <option value="necklaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Necklaces</option>

                                                    <option value="rings">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rings</option>

                                                    <option value="movies-music-books">Movies, Music &amp; Books</option>

                                                    <option value="books">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Books</option>

                                                    <option value="movies-disc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Movies Disc</option>

                                                    <option value="music">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Music</option>

                                                    <option value="stage-lighting">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stage Lighting</option>

                                                    <option value="patio-garden">Patio &amp; Garden</option>

                                                    <option value="grills-outdoor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Grills &amp; Outdoor Cooking</option>

                                                    <option value="live-plants">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Live Plants</option>

                                                    <option value="outdoor-furnitures">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor Furnitures</option>

                                                    <option value="patio-outdoor-decor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Patio &amp; Outdoor Decor</option>

                                                    <option value="smartphone">Smartphone</option>

                                                    <option value="google-pixel-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Google Pixel 5</option>

                                                    <option value="iphone-12">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iPhone 12</option>

                                                    <option value="oneplus-8t">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OnePlus 8T</option>

                                                    <option value="tvs-videos">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TVs &amp; Videos</option>

                                                    <option value="tablets-handheld">Tablets &amp; Handheld</option>

                                                    <option value="accessories">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accessories</option>

                                                    <option value="ereaders">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eReaders</option>

                                                    <option value="ipad">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iPad</option>

                                                    <option value="window-tablet">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Window Tablet</option>

                                                    <option value="toys-games-kids">Toys, Games &amp; Kids</option>

                                                    <option value="bikes-ride-ons">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bikes &amp; Ride-Ons</option>

                                                    <option value="collectibles">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Collectibles</option>

                                                    <option value="musical-instruments">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Musical Instruments</option>

                                                    <option value="outdoor-play">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor Play</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div class="content-search">
                                            <input class="autosearch-input" type="text" value="" size="50" autocomplete="off" placeholder="Search Item..." name="s" />
                                            <div class="search-append"></div>
                                        </div>
                                        <span class="input-group-btn">
                                            <button type="submit" class="fa fa-search button-search-pro form-button"></button>
                                        </span>
                                        <input name="search_posttype" value="product" type="hidden" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
            </>
        )
    }
}

export default SearchBar;