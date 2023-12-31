<x-app-layout>

    <div class="home-container">
        <div id="columns_inner">
            <div id="content-wrapper">
                <section id="main">
                    <section id="content" class="page-home">
                        <div id="owl-banner">
                            <div class="slick-banner">
                                @foreach($banner as $b)
                                @if ($b->position === '1')
                                <img src="{{ asset('assets/banner/' . $b->images)}}" alt="gia-flowers" title="Gia Flowers" />
                                @endif
                                @endforeach
                            </div>
                        </div>
                        <div id="ctaboutcmsblock" class="about-cms-block" style="background-image: url('{{ asset('assets/background-under.png')}}')">
                            <div class="container aboutus-container">
                                <div class="about-store">
                                    <div class="about-store-inner">
                                        <div class="one-half aboutcms1">
                                            <div class="about-image">
                                                <div class="about-banner aboutcms-image1"><a href="{{ route('about') }}" class="banner-anchor">
                                                        @foreach($banner as $b)
                                                        @if ($b->position === '2')
                                                        <img src="{{ asset('assets/banner/' . $b->images)}}" alt="about-store" title="about-store" />
                                                        @endif
                                                        @endforeach
                                                    </a></div>
                                                <div class="about-text">Gia Flowers là địa chỉ đáng tin cậy chuyên cung cấp lan hồ điệp Đà Lạt và hoa tươi sỉ lẻ. Với kinh nghiệm từ năm 2019 đến nay, chúng tôi đặt sự tận tâm và chất lượng phục vụ lên hàng đầu.</div>
                                            </div>
                                        </div>
                                        <div class="one-half aboutcms2">
                                            <div class="about-banner aboutcms-image2"><a href="{{ route('about') }}" class="banner-anchor">
                                                    @foreach($banner as $b)
                                                    @if ($b->position === '3')
                                                    <img src="{{ asset('assets/banner/' . $b->images)}}" alt="about-store" title="about-store" />
                                                    @endif
                                                    @endforeach
                                                </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section class="ct-hometabcontent">
                            <div class="container">
                                <h2 class="h1 products-section-title text-uppercase">Best seller</h2>
                                <div class="tabs">
                                    <div class="tab-content">
                                        <div id="featureProduct" class="ct_productinner tab-pane active">
                                            <section class="featured-products clearfix">
                                                <div class="products"> <!-- Define Number of product for SLIDER -->
                                                    <ul id="feature-grid" class="featured_grid product_list grid row gridcount slick-featured">
                                                        @foreach($bestProduct as $p)
                                                        <li class="product_item col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                            <div class="product-miniature js-product-miniature" itemscope itemtype="http://schema.org/Product">
                                                                <div class="thumbnail-container"> <a href="{{ route('product.view',['slug'=> $p->slug]) }}" class="thumbnail product-thumbnail">
                                                                        <img src="{{ asset('assets/product/' . $p->image) }}" alt="Consectetur Hampden" data-full-size-image-url="{{ asset('assets/product/' . $p->image) }}">
                                                                    </a>
                                                                    <div class="outer-functional">
                                                                        <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#quickview" data-id_product="{{ $p->id }}" style="background-image: url({{ asset('assets/action.png') }})" title="Quick View"><i class="material-icons search">&#xE417;</i> Quick View </button>
                                                                            <div class="product-actions">
                                                                                <form action="{{ route('cart.add',['id'=>$p->id]) }}" class="add-to-cart-or-refresh">
                                                                                    @csrf
                                                                                    <input value="1" name="quantity" type="hidden">
                                                                                    <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit" style="background-image: url({{ asset('assets/action.png') }})" title="Thêm vào giỏ hàng"> Thêm vào giỏ hàng </button>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <ul class="product-flags">
                                                                        @if($p->sale_price > 0)
                                                                        <li class="product-flag new">Sale</li>
                                                                        @endif
                                                                    </ul>
                                                                </div>
                                                                <div class="product-description">
                                                                    <span class="h3 product-title" itemprop="name"><a href="">{{ $p->name }}</a></span>
                                                                    <div class="product-price-and-shipping"> @if($p->sale_price > 0)
                                                                        <span itemprop="price" class="price">{{ number_format($p->sale_price, 0, ',', '.') }}đ</span> <s class="price text-muted">{{ number_format($p->price, 0, ',', '.') }}đ</s>
                                                                        @else
                                                                        <span itemprop="price" class="price">{{ number_format($p->price, 0, ',', '.') }}đ</span>
                                                                        @endif
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        @endforeach
                                                    </ul>
                                                    <div class="view_more"> <a class="all-product-link" href="{{ route('product.index') }}"> Xem thêm </a> </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="ct-hometabcontent">
                            <div class="container">
                                <h2 class="h1 products-section-title text-uppercase">Lan Hồ Điệp 100% Đà Lạt</h2>
                                <div class="tabs">
                                    <div class="tab-content">
                                        <div id="featureProduct" class="ct_productinner tab-pane active">
                                            <section class="featured-products clearfix">
                                                <div class="products"> <!-- Define Number of product for SLIDER -->
                                                    <ul id="feature-grid" class="featured_grid product_list grid row gridcount slick-featured">
                                                        @foreach ($newProduct as $p)
                                                        <li class="product_item col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                            <div class="product-miniature js-product-miniature" itemscope itemtype="http://schema.org/Product">
                                                                <div class="thumbnail-container"> <a href="{{ route('product.view',['slug'=> $p->slug]) }}" class="thumbnail product-thumbnail">
                                                                        <img src="{{ asset('assets/product/' . $p->image) }}" alt="Consectetur Hampden" data-full-size-image-url="{{ asset('assets/product/' . $p->image) }}">
                                                                    </a>
                                                                    <div class="outer-functional">
                                                                        <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#quickview" data-id_product="{{ $p->id }}" style="background-image: url({{ asset('assets/action.png') }})" title="Quick View"><i class="material-icons search">&#xE417;</i> Quick View </button>
                                                                            <div class="product-actions">
                                                                                <form action="{{ route('cart.add',['id'=>$p->id]) }}" class="add-to-cart-or-refresh">
                                                                                    @csrf
                                                                                    <input value="1" name="quantity" type="hidden">
                                                                                    <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit" style="background-image: url({{ asset('assets/action.png') }})" title="Thêm vào giỏ hàng"> Thêm vào giỏ hàng </button>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <ul class="product-flags">
                                                                        @if($p->sale_price > 0)
                                                                        <li class="product-flag new">Sale</li>
                                                                        @endif
                                                                    </ul>
                                                                </div>
                                                                <div class="product-description">
                                                                    <span class="h3 product-title" itemprop="name"><a href="">{{ $p->name }}</a></span>
                                                                    <div class="product-price-and-shipping"> @if($p->sale_price > 0)
                                                                        <span itemprop="price" class="price">{{ number_format($p->sale_price, 0, ',', '.') }}đ</span> <s class="price text-muted">{{ number_format($p->price, 0, ',', '.') }}đ</s>
                                                                        @else
                                                                        <span itemprop="price" class="price">{{ number_format($p->price, 0, ',', '.') }}đ</span>
                                                                        @endif
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        @endforeach
                                                    </ul>
                                                    <div class="view_more"> <a class="all-product-link" href="{{ route('product.index') }}"> Xem thêm </a> </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="ct-hometabcontent">
                            <div class="container">
                                <h2 class="h1 products-section-title text-uppercase">Hoa tươi thành phẩm</h2>
                                <div class="tabs">
                                    <div class="tab-content">
                                        <div id="featureProduct" class="ct_productinner tab-pane active">
                                            <section class="featured-products clearfix">
                                                <div class="products"> <!-- Define Number of product for SLIDER -->
                                                    <ul id="feature-grid" class="featured_grid product_list grid row gridcount slick-featured">
                                                        @foreach ($featuredProduct as $p)
                                                        <li class="product_item col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                            <div class="product-miniature js-product-miniature" itemscope itemtype="http://schema.org/Product">
                                                                <div class="thumbnail-container"> <a href="{{ route('product.view',['slug'=> $p->slug]) }}" class="thumbnail product-thumbnail">
                                                                        <img src="{{ asset('assets/product/' . $p->image) }}" alt="Consectetur Hampden" data-full-size-image-url="{{ asset('assets/product/' . $p->image) }}">
                                                                    </a>
                                                                    <div class="outer-functional">
                                                                        <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#quickview" data-id_product="{{ $p->id }}" style="background-image: url({{ asset('assets/action.png') }})" title="Quick View"><i class="material-icons search">&#xE417;</i> Quick View </button>
                                                                            <div class="product-actions">
                                                                                <form action="{{ route('cart.add',['id'=>$p->id]) }}" class="add-to-cart-or-refresh">
                                                                                    @csrf
                                                                                    <input value="1" name="quantity" type="hidden">
                                                                                    <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit" style="background-image: url({{ asset('assets/action.png') }})" title="Thêm vào giỏ hàng"> Thêm vào giỏ hàng </button>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <ul class="product-flags">
                                                                        @if($p->sale_price > 0)
                                                                        <li class="product-flag new">Sale</li>
                                                                        @endif
                                                                    </ul>
                                                                </div>
                                                                <div class="product-description">
                                                                    <span class="h3 product-title" itemprop="name"><a href="">{{ $p->name }}</a></span>
                                                                    <div class="product-price-and-shipping">@if($p->sale_price > 0)
                                                                        <span itemprop="price" class="price">{{ number_format($p->sale_price, 0, ',', '.') }}đ</span> <s class="price text-muted">{{ number_format($p->price, 0, ',', '.') }}đ</s>
                                                                        @else
                                                                        <span itemprop="price" class="price">{{ number_format($p->price, 0, ',', '.') }}đ</span>
                                                                        @endif
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        @endforeach
                                                    </ul>
                                                    <div class="view_more"> <a class="all-product-link" href="{{ route('product.index') }}"> Xem thêm </a> </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div class="latest_blog block homeblog-latest">
                            <div class="container">
                                <h2 class="h1 products-section-title text-uppercase">
                                    <span class="main-title">Câu chuyện về hoa</span>
                                </h2>
                                <div class="homeblog-wrapper">
                                    <div class="homeblog-inner">
                                        <div class="row">
                                            @foreach($blog as $b)
                                            <div class="col-lg-6 mb-4">
                                                <div class="post-entry-alt">
                                                    <a href="{{ route('blog.view',['slug'=> $b->slug]) }}" class="img-link"><img src="{{ asset('assets/blog/' . $b->thumbnail) }}" alt="Image" class="img-fluid"></a>
                                                    <div class="excerpt">
                                                        <h2><a href="{{ route('blog.view',['slug'=> $b->slug]) }}">{{ $b->title }}</a></h2>
                                                    </div>
                                                </div>
                                            </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Block Last Post -->
                        <div class="testimonial block ">
                            <div class="container">
                                <h2 class="h1 products-section-title text-uppercase">
                                    <span class="main-title">Khách hàng tiêu biểu</span>
                                </h2>
                                <div class="homeblog-wrapper">
                                    <div class="homeblog-inner">
                                        <div class="slick-brands">
                                            @foreach ($testimonial as $t)
                                            <div class="brands-wrapper">
                                                <div class="center-image">
                                                <img src="{{ asset('assets/' . $t->images)}}" }}" alt="{{$t->name}}" title="{{$t->name}}" />
                                                </div>
                                            </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
            <div class="service block ">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 mb-4">
                            <div class="service-entry">
                                <img src="{{ asset('assets/Asset1.png') }}" alt="Image" class="img-fluid">
                                <div class="service-note">
                                    <h2>Giao hàng hỏa tốc</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 mb-4">
                            <div class="service-entry">
                                <img src="{{ asset('assets/Asset2.png') }}" alt="Image" class="img-fluid">
                                <div class="service-note">
                                    <h2>Thanh toán tiện lợi</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 mb-4">
                            <div class="service-entry">
                                <img src="{{ asset('assets/Asset3.png') }}" alt="Image" class="img-fluid">
                                <div class="service-note">
                                    <h2>Hoa luôn bền đẹp</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 mb-4">
                            <div class="service-entry">
                                <img src="{{ asset('assets/Asset4.png') }}" alt="Image" class="img-fluid">
                                <div class="service-note">
                                    <h2>Tư vấn chuyên nghiệp</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <div class="modal fade" id="quickview">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6 col-lg-6 col-sm-6 hidden-xs-down">
                                    <div class="product-slider-container">
                                        <div class="row">
                                            <div class="product-cover slider-main-qview" id="product_quickview_image">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <h1 class="h1" id="product_quickview_name"></h1>
                                    <div class="product-prices">
                                        <div class="product-price h5 " itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                                            <link itemprop="availability" href="https://schema.org/InStock">
                                            <meta itemprop="priceCurrency" content="EUR">
                                            <div class="current-price" id="product_quickview_price">
                                            </div>
                                        </div>
                                    </div>
                                    <div id="product-description-short" itemprop="description">
                                        <p id="product_quickview_description"></p>
                                    </div>
                                    <div class="product-actions" id="product_quickview_cart">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    </div>
    </div>
</x-app-layout>