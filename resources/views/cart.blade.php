<x-app-layout>
  <nav data-depth="1" class="breadcrumb">
    <div class="container">
      <ol itemscope itemtype="http://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a itemprop="item" href="{{ route('home') }}"> <span itemprop="name">Trang chủ</span> </a>
          <meta itemprop="position" content="1">
        </li>
      </ol>
    </div>
  </nav>
  <div class="container">
    <div id="columns_inner">
      <div id="content-wrapper">
        <section id="main">
          <div class="cart-grid row">
            <div class="cart-grid-body col-xs-12 col-lg-8">
              <div class="card cart-container">
                <div class="card-block">
                  <h1 class="h1">Giỏ hàng</h1>
                </div>
                <hr class="separator">
                <div class="cart-overview js-cart" data-refresh-url="">
                  <ul class="cart-items">
                    @foreach($cart->items as $key => $item)
                    <li class="cart-item">
                      <div class="product-line-grid">
                        <div class="product-line-grid-left col-md-3 col-xs-4"> <span class="product-image media-middle"> <img src="{{ asset('assets/product/' . $item['image']) }}" alt="Praesentium voluptatum"> </span> </div>
                        <div class="product-line-grid-body col-md-4 col-xs-8">
                          <div class="product-line-info"> <a class="label" href="{{ route('product.view',['slug'=> $item['slug']]) }}" data-id_customization="0"> {{ $item['name']}}</a> </div>
                          <div class="product-line-info product-price h5 ">
                            <div class="current-price"> <span class="price">{{ number_format($item['price'], 0, ',', '.') }} đ</span> </div>
                          </div> <br>
                        </div>
                        <div class="product-line-grid-right product-line-actions col-md-5 col-xs-12">
                          <div class="row">
                            <div class="col-xs-4 hidden-md-up"></div>
                            <div class="col-md-10 col-xs-6">
                              <div class="row">
                                <div class="col-md-6 col-xs-6 qty">
                                  <form action="{{route('cart.update',['id' => $item['id']])}}" class="cart-update-form">
                                    @csrf
                                  <div class="input-group bootstrap-touchspin">
                                    <input class="js-cart-line-product-quantity form-control" type="number" value="{{ $item['quantity']}}" name="quantity" min="1" style="display: block;">
                                    <button class="cart-update" type="submit">&#10004;</button>
                                  </div>
                                  </form>
                                </div>
                                <div class="col-md-6 col-xs-2 price"> <span class="product-price"> <strong> {{ number_format($item['price']*$item['quantity'], 0, ',', '.') }}đ</strong> </span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-2 col-xs-2 text-xs-right">
                              <div class="cart-line-product-actions"> <a class="remove-from-cart" rel="nofollow" href="{{route('cart.delete',['id'=>$key])}}" data-link-action="delete-from-cart"> <i class="fa-solid fa-trash"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    @endforeach
                  </ul>
                </div>
              </div> <a class="label" href="{{ route('product.index') }}"> <i class="fa-solid fa-chevron-left"></i> Quay lại sản phẩm </a>
            </div>
            <div class="cart-grid-right col-xs-12 col-lg-4">
              <div class="card cart-summary">
                <div class="cart-detailed-totals">
                  <div class="card-block">
                    <div class="cart-summary-line" id="cart-subtotal-products"> <span class="label js-subtotal"> {{$cart->total_quantity}} sản phẩm </span> <span class="value">{{number_format($cart->total_price, 0, ',', '.')}}</span> </div>
                    <div class="cart-summary-line" id="cart-subtotal-shipping"> <span class="label"> Shipping </span> <span class="value">Free</span>
                      <div><small class="value"></small></div>
                    </div>
                  </div>
                  <hr class="separator">
                  <div class="card-block">
                    <div class="cart-summary-line cart-total"> <span class="label">Tổng cộng</span> <span class="value">{{number_format($cart->total_price, 0, ',', '.')}}</span> </div>
                    <div class="cart-summary-line"> <small class="label"></small> <small class="value"></small> </div>
                  </div>
                  <hr class="separator">
                </div>
                <div class="checkout text-sm-center card-block"> <a href="{{ route('checkout') }}"><button type="button" class="btn btn-primary">Đặt hàng</button></a> </div>
              </div>
              <div id="block-reassurance">
                <ul>
                  <li>
                    <div class="block-reassurance-item"> <i class="fa-solid fa-user-shield"></i> <span class="h6">Chính sách khách hàng doanh nghiệp</span> </div>
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
        </section>
        <section class="featured-products clearfix">
          <h1 class="h1 products-section-title text-uppercase "> Sản phẩm bán chạy </h1>
          <div class="featured-products-wrapper">
            <div class="products">
              <ul class="featured_grid product_list grid row gridcount slick-featured">
                @foreach ($bestSeller as $seller)
                <li class="product_item col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <div class="product-miniature js-product-miniature" data-id-product="1" data-id-product-attribute="1" itemscope itemtype="http://schema.org/Product">
                    <div class="thumbnail-container"> <a href="{{ route('product.view',['slug'=> $seller->slug ]) }}" class="thumbnail product-thumbnail"> <img src="{{ asset('assets/product/' . $seller->image) }}" alt="Consectetur Hampden" data-full-size-image-url="{{ asset('assets/product/' . $seller->image) }}"></a>
                      <div class="outer-functional">
                      <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#quickview" data-id_product="{{ $seller->id }}" style="background-image: url({{ asset('assets/action.png') }})"><i class="material-icons search">&#xE417;</i> Quick View </button>
                          <div class="product-actions">
                            <form action="" method="post" class="add-to-cart-or-refresh"> <input type="hidden" name="token" value=""> <input type="hidden" name="id_product" value="1" class="product_page_product_id"> <input type="hidden" name="id_customization" value="0" class="product_customization_id"> <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit"> Add to cart </button> </form>
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
                      <span class="h3 product-title" itemprop="name"><a href="{{ route('product.index') }}">{{ $seller->name }}</a></span>
                      <div class="product-price-and-shipping"> @if($seller->sale_price > 0)
                              <span itemprop="price" class="price">{{ number_format($seller->sale_price, 0, ',', '.') }}đ</span> <s class="price text-muted">{{ number_format($seller->price, 0, ',', '.') }}đ</s>
                              @else 
                              <span itemprop="price" class="price">{{ number_format($seller->price, 0, ',', '.') }}đ</span>
                              @endif  </div>
                    </div>
                  </div>
                </li>
                @endforeach
              </ul>
              <div class="view_more"> <a class="all-product-link" href=""> Tất cả sản phẩm </a> </div>
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