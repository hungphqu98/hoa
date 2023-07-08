<x-app-layout>
        <div class="home-container">
            <div id="columns_inner">
                <div id="content-wrapper">
                    <section id="main">
                        <section id="content" class="page-home">
                            <div id="owl-banner">
                            <div class="slick-banner"><img src="https://capricathemes.com/prestashop/PRS07/PRS070170/modules/ct_imageslider/views/img/sample-1.jpg" alt="sample-1" title="Sample 1" />
                            <img src="https://capricathemes.com/prestashop/PRS07/PRS070170/modules/ct_imageslider/views/img/sample-2.jpg" alt="sample-2" title="Sample 2" />
                            </div>
                            </div>
                            <div id="ctaboutcmsblock" class="about-cms-block">
                                <div class="container aboutus-container">
                                    <div class="about-store">
                                        <div class="about-store-inner">
                                            <div class="one-half aboutcms1">
                                                <div class="about-image">
                                                    <div class="about-banner aboutcms-image1"><a href="#" class="banner-anchor"><img src="https://capricathemes.com/prestashop/PRS07/PRS070170/img/cms/aboutcms1.jpg" alt="about-store1" title="about-store1" /></a></div>
                                                    <div class="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard since the 1500s, when an unknown printer took a galley of type and scrambled</div>
                                                </div>
                                            </div>
                                            <div class="one-half aboutcms2">
                                                <div class="about-banner aboutcms-image2"><a href="#" class="banner-anchor"><img src="https://capricathemes.com/prestashop/PRS07/PRS070170/img/cms/aboutcms2.jpg" alt="about-store2" title="about-store2" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section class="ct-hometabcontent">
                                <div class="container">
                                    <h2 class="h1 products-section-title text-uppercase">Best seller</h2>
                                    <div class="tabs">
                                        <ul id="home-page-tabs" class="nav nav-tabs clearfix">
                                            <li class="nav-item"> <a data-toggle="tab" href="#featureProduct" class="nav-link active" data-text="Featured"> <span>Featured</span> </a> </li>
                                            <li class="nav-item"> <a data-toggle="tab" href="#newProduct" class="nav-link" data-text="Latest"> <span>Latest</span> </a> </li>
                                            <li class="nav-item"> <a data-toggle="tab" href="#bestseller" class="nav-link" data-text="Best Sellers"> <span>Best Sellers</span> </a> </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div id="featureProduct" class="ct_productinner tab-pane active">
                                                <section class="featured-products clearfix">
                                                    <h2 class="h1 products-section-title text-uppercase"> Featured products </h2>
                                                    <div class="products"> <!-- Define Number of product for SLIDER -->
                                                        <ul id="feature-grid" class="featured_grid product_list grid row gridcount">
                                                            @foreach($flower as $f)
                                                            <li class="product_item col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                                <div class="product-miniature js-product-miniature" data-id-product="1" data-id-product-attribute="1" itemscope itemtype="http://schema.org/Product">
                                                                    <div class="thumbnail-container"> <a href="#" class="thumbnail product-thumbnail"> 
                                                                    @if ($f->flowerImages->isNotEmpty())
                                                                    <img src="{{ $f->flowerImages->first()->image_url }}" alt="Consectetur Hampden" data-full-size-image-url="{{ $f->flowerImages->first()->image_url }}"> <img class="fliper_image img-responsive" src="{{ $f->flowerImages->first()->image_url }}" data-full-size-image-url="{{ $f->flowerImages->first()->image_url }}" alt="" /> 
                                                                    @endif
                                                                    </a>
                                                                        <div class="outer-functional">
                                                                            <div class="functional-buttons"> <a href="#" class="quick-view" data-link-action="quickview"> <i class="material-icons search">&#xE417;</i> Quick view </a>
                                                                                <div class="product-actions">
                                                                                    <form action="#" method="post" class="add-to-cart-or-refresh"> <input type="hidden" name="token" value="b88261cab17a7775f54f10a3c0bb0f61"> <input type="hidden" name="id_product" value="1" class="product_page_product_id"> <input type="hidden" name="id_customization" value="0" class="product_customization_id"> <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit"> Add to cart </button> </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <ul class="product-flags">
                                                                            <!-- <li class="on-sale">On sale!</li> -->
                                                                            <li class="new">New</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="product-description">
                                                                        <span class="h3 product-title" itemprop="name"><a href="index8589.html?id_product=1&amp;id_product_attribute=1&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/8-color-white">{{ $f->name }}</a></span>
                                                                        <div class="product-price-and-shipping"> <span itemprop="price" class="price">{{ $f->price }}</span> </div>
                                                                        <div class="highlighted-informations hidden-sm-down">
                                                                            <div class="variant-links"> <a href="index8589.html?id_product=1&amp;id_product_attribute=1&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/8-color-white" class="color" title="White" style="background-color: #ffffff"><span class="sr-only">White</span></a> <a href="index5f9a.html?id_product=1&amp;id_product_attribute=40&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/2-size-m/10-color-red" class="color" title="Red" style="background-color: #E84C3D"><span class="sr-only">Red</span></a> <a href="index5b4b.html?id_product=1&amp;id_product_attribute=2&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/11-color-black" class="color" title="Black" style="background-color: #434A54"><span class="sr-only">Black</span></a> <span class="js-count count"></span> </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            @endforeach
                                                        </ul>
                                                        <div class="view_more"> <a class="all-product-link" href="#"> All products </a> </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div id="newProduct" class="ct_productinner tab-pane">
                                                <section class="newproducts clearfix">
                                                    <h2 class="h1 products-section-title text-uppercase"> New products </h2>
                                                    <div class="products"> <!-- Define Number of product for SLIDER -->
                                                        <ul id="newproduct-grid" class="newproduct_grid product_list grid row gridcount">
                                                        @foreach($flower as $f)
                                                            <li class="product_item col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                                <div class="product-miniature js-product-miniature" data-id-product="1" data-id-product-attribute="1" itemscope itemtype="http://schema.org/Product">
                                                                    <div class="thumbnail-container"> <a href="#" class="thumbnail product-thumbnail"> 
                                                                    @if ($f->flowerImages->isNotEmpty())
                                                                    <img src="{{ $f->flowerImages->first()->image_url }}" alt="Consectetur Hampden" data-full-size-image-url="{{ $f->flowerImages->first()->image_url }}"> <img class="fliper_image img-responsive" src="{{ $f->flowerImages->first()->image_url }}" data-full-size-image-url="{{ $f->flowerImages->first()->image_url }}" alt="" /> 
                                                                    @endif
                                                                    </a>
                                                                        <div class="outer-functional">
                                                                            <div class="functional-buttons"> <a href="#" class="quick-view" data-link-action="quickview"> <i class="material-icons search">&#xE417;</i> Quick view </a>
                                                                                <div class="product-actions">
                                                                                    <form action="#" method="post" class="add-to-cart-or-refresh"> <input type="hidden" name="token" value="b88261cab17a7775f54f10a3c0bb0f61"> <input type="hidden" name="id_product" value="1" class="product_page_product_id"> <input type="hidden" name="id_customization" value="0" class="product_customization_id"> <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit"> Add to cart </button> </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <ul class="product-flags">
                                                                            <!-- <li class="on-sale">On sale!</li> -->
                                                                            <li class="new">New</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="product-description">
                                                                        <span class="h3 product-title" itemprop="name"><a href="index8589.html?id_product=1&amp;id_product_attribute=1&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/8-color-white">{{ $f->name }}</a></span>
                                                                        <div class="product-price-and-shipping"> <span itemprop="price" class="price">{{ $f->price }}</span> </div>
                                                                        <div class="highlighted-informations hidden-sm-down">
                                                                            <div class="variant-links"> <a href="index8589.html?id_product=1&amp;id_product_attribute=1&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/8-color-white" class="color" title="White" style="background-color: #ffffff"><span class="sr-only">White</span></a> <a href="index5f9a.html?id_product=1&amp;id_product_attribute=40&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/2-size-m/10-color-red" class="color" title="Red" style="background-color: #E84C3D"><span class="sr-only">Red</span></a> <a href="index5b4b.html?id_product=1&amp;id_product_attribute=2&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/11-color-black" class="color" title="Black" style="background-color: #434A54"><span class="sr-only">Black</span></a> <span class="js-count count"></span> </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            @endforeach
                                                        </ul>
                                                        <div class="view_more"> <a class="all-product-link" href="index6237.html?controller=new-products"> All new products </a> </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div id="bestseller" class="ct_productinner tab-pane">
                                                <section class="bestseller-products">
                                                    <h2 class="h1 products-section-title text-uppercase"> Best Sellers </h2>
                                                    <div class="products"> <!-- Define Number of product for SLIDER -->
                                                        <ul id="bestseller-carousel" class="ct-carousel product_list">
                                                        @foreach($flower as $f)
                                                            <li class="product_item col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                                <div class="product-miniature js-product-miniature" data-id-product="1" data-id-product-attribute="1" itemscope itemtype="http://schema.org/Product">
                                                                    <div class="thumbnail-container"> <a href="#" class="thumbnail product-thumbnail"> 
                                                                    @if ($f->flowerImages->isNotEmpty())
                                                                    <img src="{{ $f->flowerImages->first()->image_url }}" alt="Consectetur Hampden" data-full-size-image-url="{{ $f->flowerImages->first()->image_url }}"> <img class="fliper_image img-responsive" src="{{ $f->flowerImages->first()->image_url }}" data-full-size-image-url="{{ $f->flowerImages->first()->image_url }}" alt="" /> 
                                                                    @endif
                                                                    </a>
                                                                        <div class="outer-functional">
                                                                            <div class="functional-buttons"> <a href="#" class="quick-view" data-link-action="quickview"> <i class="material-icons search">&#xE417;</i> Quick view </a>
                                                                                <div class="product-actions">
                                                                                    <form action="#" method="post" class="add-to-cart-or-refresh"> <input type="hidden" name="token" value="b88261cab17a7775f54f10a3c0bb0f61"> <input type="hidden" name="id_product" value="1" class="product_page_product_id"> <input type="hidden" name="id_customization" value="0" class="product_customization_id"> <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit"> Add to cart </button> </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <ul class="product-flags">
                                                                            <!-- <li class="on-sale">On sale!</li> -->
                                                                            <li class="new">New</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="product-description">
                                                                        <span class="h3 product-title" itemprop="name"><a href="index8589.html?id_product=1&amp;id_product_attribute=1&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/8-color-white">{{ $f->name }}</a></span>
                                                                        <div class="product-price-and-shipping"> <span itemprop="price" class="price">{{ $f->price }}</span> </div>
                                                                        <div class="highlighted-informations hidden-sm-down">
                                                                            <div class="variant-links"> <a href="index8589.html?id_product=1&amp;id_product_attribute=1&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/8-color-white" class="color" title="White" style="background-color: #ffffff"><span class="sr-only">White</span></a> <a href="index5f9a.html?id_product=1&amp;id_product_attribute=40&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/2-size-m/10-color-red" class="color" title="Red" style="background-color: #E84C3D"><span class="sr-only">Red</span></a> <a href="index5b4b.html?id_product=1&amp;id_product_attribute=2&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/11-color-black" class="color" title="Black" style="background-color: #434A54"><span class="sr-only">Black</span></a> <span class="js-count count"></span> </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            @endforeach
                                                        </ul>
                                                        <div class="customNavigation"> <a class="btn prev bestseller_prev">&nbsp;</a> <a class="btn next bestseller_next">&nbsp;</a> </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </section>
                </div>
            </div>
        </div>
</x-app-layout>