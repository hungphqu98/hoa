<x-app-layout>
  <nav data-depth="3" class="breadcrumb">
    <div class="container">
      <ol itemscope itemtype="http://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a itemprop="item" href="{{ route('home') }}"> <span itemprop="name">Trang chủ</span> </a>
          <meta itemprop="position" content="1">
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a itemprop="item" href="{{ route('product.index') }}"> <span itemprop="name">Sản phẩm</span> </a>
          <meta itemprop="position" content="2">
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a itemprop="item" href="{{ route('product.index') }}"> <span itemprop="name">Lan Hồ Điệp</span> </a>
          <meta itemprop="position" content="3">
        </li>
      </ol>
    </div>
  </nav>
  <div class="container view-container">
    <div id="columns_inner">
      <div id="content-wrapper">
        <section id="main" itemscope itemtype="https://schema.org/Product">
          @foreach($product as $p)
          <div class="row">
            <div class="pp-left-column col-xs-12 col-sm-5 col-md-5">
              <section class="page-content" id="content">
                <div class="product-leftside">
                  <ul class="product-flags">
                    @if($p->sale_price > 0)
                    <li class="product-flag new">Sale</li>
                    @endif
                  </ul>
                  <div class="images-container">
                    <div class="product-cover"> <a href="{{ asset('assets/product/' . $p->image) }}"> <img class="js-qv-product-cover" src="{{ asset('assets/product/' . $p->image) }}" alt="" title="" style="width:100%;" itemprop="image"> </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="pp-right-column col-xs-12 col-sm-7 col-md-7">
              <h1 class="h1 productpage_title" itemprop="name">{{ $p->name }}</h1>
              <div class="product-information">
                <div id="product-description-short-29" itemprop="description">
                  <p>{{ $p->description }}</p>
                </div>
                <div class="product-actions">
                  <form action="{{ route('cart.add',['id'=>$p->id]) }}" class="add-to-cart-or-refresh"> 
                    @csrf
                    <input value="1" name="quantity" type="hidden">
                    <section class="product-discounts"> </section>
                    <div class="product-prices">
                      <div class="product-price h5 " itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                        <link itemprop="availability" href="https://schema.org/InStock" />
                        <div class="current-price">  @if($p->sale_price > 0)
                              <span itemprop="price" class="price">{{ number_format($p->sale_price, 0, ',', '.') }}đ</span> <s class="price text-muted">{{ number_format($p->price, 0, ',', '.') }}đ</s>
                              @else 
                              <span itemprop="price" class="price">{{ number_format($p->price, 0, ',', '.') }}đ</span>
                              @endif </div>
                      </div>
                      <div class="tax-shipping-delivery-label"> bao gồm VAT </div>
                    </div>
                    <div class="product-add-to-cart"> <!-- <span class="control-label">Ilość</span>-->
                      <div class="product-quantity">
                        <div class="add"> <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit"> Thêm vào giỏ hàng </button> </div>
                      </div>
                      <div class="clearfix"></div> <span id="product-availability"> <span class="product-available"> <i class="material-icons">&#xE5CA;</i> Còn hàng </span> </span>
                      <p class="product-minimal-quantity"> </p>
                    </div>
                  </form>
                </div>
                <div id="block-reassurance">
                  <ul>
                    <li>
                      <div class="block-reassurance-item"> <i class="fa-solid fa-user-shield"></i> <span class="h6">Chính sách kiểm hàng</span> </div>
                    </li>
                    <li>
                      <div class="block-reassurance-item"> <i class="fa-solid fa-truck"></i> <span class="h6">Chính sách giao hàng</span> </div>
                    </li>
                    <li>
                      <div class="block-reassurance-item"> <i class="fa-solid fa-right-left"></i> <span class="h6">Chính sách đổi trả</span> </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section class="product-tabcontent">
            <div class="tabs">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Mô tả</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Thông tin sản phẩm</button>
                </li>

              </ul>

              <!-- Tab panes -->
              <div class="tab-content">
                <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div class="product-description">
                    {{ $p->description }}
                  </div>
                </div>
                <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  {!! $p->details !!}
                </div>
              </div>
            </div>
          </section>
          @endforeach
          <section class="product-accessories clearfix">
            <h2 class="h1 products-section-title text-uppercase"> <span>Sản phẩm cùng loại</span> </h2>
            <div class="product-accessories-wrapper">
              <div class="products">
                <ul id="accessories-carousel" class="slick-featured product_list">
                @foreach($bestSeller as $seller)
                  <li class="item">
                    <div class="product-miniature js-product-miniature" itemscope itemtype="http://schema.org/Product">
                      <div class="thumbnail-container">
                        <a href="" class="thumbnail product-thumbnail">
                          <img src="{{ asset('assets/product/' . $seller->image) }}" alt="Accusantium doloremque" data-full-size-image-url="{{ asset('assets/product/' . $seller->image) }}">
                        </a>
                        <div class="outer-functional">
                        <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#quickview" data-id_product="{{ $seller->id }}" style="background-image: url({{ asset('assets/action.png') }})" title="Quick View"><i class="material-icons search">&#xE417;</i> Quick View </button>
                              <div class="product-actions">
                                <form action="{{ route('cart.add',['id'=>$seller->id]) }}" class="add-to-cart-or-refresh">
                                  @csrf
                                <input value="1" name="quantity" type="hidden">
                                <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit" style="background-image: url({{ asset('assets/action.png') }})" title="Thêm vào giỏ hàng"> Thêm vào giỏ hàng </button> </form>
                              </div>
                            </div>
                          </div>
                        <ul class="product-flags">
                        @if($seller->sale_price > 0)
                    <li class="product-flag new">Sale</li>
                    @endif
                        </ul>
                      </div>
                      <div class="product-description">
                        <span class="h3 product-title" itemprop="name"><a href="{{ route('product.view',['slug'=> $seller->slug]) }}">{{ $seller->name }}</a></span>
                        <div class="product-price-and-shipping">  @if($seller->sale_price > 0)
                              <span itemprop="price" class="price">{{ number_format($seller->sale_price, 0, ',', '.') }}đ</span> <s class="price text-muted">{{ number_format($seller->price, 0, ',', '.') }}đ</s>
                              @else 
                              <span itemprop="price" class="price">{{ number_format($seller->price, 0, ',', '.') }}đ</span>
                              @endif </div>
                      </div>
                  </li>
                  @endforeach
                </ul>
                <div class="customNavigation"> <a class="btn prev accessories_prev">&nbsp;</a> <a class="btn next accessories_next">&nbsp;</a> </div>
              </div>
            </div>
          </section>
          <section class="productscategory-products clearfix">
            <h2 class="h1 products-section-title text-uppercase"> Sản phẩm bán chạy </h2>
            <div class="productscategory-wrapper">
              <div class="products">
                <ul id="productscategory-carousel" class="slick-featured product_list">
                  @foreach($bestSeller as $seller)
                  <li class="item">
                    <div class="product-miniature js-product-miniature" itemscope itemtype="http://schema.org/Product">
                      <div class="thumbnail-container">
                        <a href="" class="thumbnail product-thumbnail">
                          <img src="{{ asset('assets/product/' . $seller->image) }}" alt="Accusantium doloremque" data-full-size-image-url="{{ asset('assets/product/' . $seller->image) }}">
                        </a>
                        <div class="outer-functional">
                        <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#quickview" data-id_product="{{ $seller->id }}" style="background-image: url({{ asset('assets/action.png') }})"><i class="material-icons search">&#xE417;</i> Quick View </button>
                              <div class="product-actions">
                                <form action="{{ route('cart.add',['id'=>$seller->id]) }}" class="add-to-cart-or-refresh">
                                  @csrf
                                <input value="1" name="quantity" type="hidden">
                                <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit" style="background-image: url({{ asset('assets/action.png') }})" title="Thêm vào giỏ hàng"> Thêm vào giỏ hàng </button> </form>
                              </div>
                            </div>
                          </div>
                        <ul class="product-flags">
                        @if($seller->sale_price > 0)
                    <li class="product-flag new">Sale</li>
                    @endif
                        </ul>
                      </div>
                      <div class="product-description">
                        <span class="h3 product-title" itemprop="name"><a href="{{ route('product.view',['slug'=> $seller->slug]) }}">{{ $seller->name }}</a></span>
                        <div class="product-price-and-shipping">  @if($seller->sale_price > 0)
                              <span itemprop="price" class="price">{{ number_format($seller->sale_price, 0, ',', '.') }}đ</span> <s class="price text-muted">{{ number_format($seller->price, 0, ',', '.') }}đ</s>
                              @else 
                              <span itemprop="price" class="price">{{ number_format($seller->price, 0, ',', '.') }}đ</span>
                              @endif </div>
                      </div>
                  </li>
                  @endforeach
                </ul>
                <div class="customNavigation"> <a class="btn prev productscategory_prev">&nbsp;</a> <a class="btn next productscategory_next">&nbsp;</a> </div>
              </div>
            </div>
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
                        <div class="tax-shipping-delivery-label"> bao gồm VAT </div>
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