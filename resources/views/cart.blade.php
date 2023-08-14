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
                    <li class="cart-item">
                      <div class="product-line-grid">
                        <div class="product-line-grid-left col-md-3 col-xs-4"> <span class="product-image media-middle"> <img src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="Praesentium voluptatum"> </span> </div>
                        <div class="product-line-grid-body col-md-4 col-xs-8">
                          <div class="product-line-info"> <a class="label" href="{{ route('product.view') }}" data-id_customization="0">Praesentium voluptatum</a> </div>
                          <div class="product-line-info product-price h5 ">
                            <div class="current-price"> <span class="price">€79.00</span> </div>
                          </div> <br>
                          <div class="product-line-info"> <span class="label">Size:</span> <span class="value">L</span> </div>
                          <div class="product-line-info"> <span class="label">Color:</span> <span class="value">Orange</span> </div>
                        </div>
                        <div class="product-line-grid-right product-line-actions col-md-5 col-xs-12">
                          <div class="row">
                            <div class="col-xs-4 hidden-md-up"></div>
                            <div class="col-md-10 col-xs-6">
                              <div class="row">
                                <div class="col-md-6 col-xs-6 qty">
                                  <div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span><input class="js-cart-line-product-quantity form-control" data-down-url="" data-up-url="" data-update-url="" data-product-id="26" type="text" value="1" name="product-quantity-spin" min="1" style="display: block;"><span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span><span class="input-group-btn-vertical"><button class="btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-up" type="button"><i class="fa-solid fa-chevron-up"></i></button><button class="btn btn-touchspin js-touchspin js-decrease-product-quantity bootstrap-touchspin-down" type="button"><i class="fa-solid fa-chevron-down"></i></button></span></div>
                                </div>
                                <div class="col-md-6 col-xs-2 price"> <span class="product-price"> <strong> €79.00 </strong> </span> </div>
                              </div>
                            </div>
                            <div class="col-md-2 col-xs-2 text-xs-right">
                              <div class="cart-line-product-actions"> <a class="remove-from-cart" rel="nofollow" href="" data-link-action="delete-from-cart" data-id-product="26" data-id-product-attribute="128" data-id-customization=""> <i class="fa-solid fa-trash"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> <a class="label" href="{{ route('product.index') }}"> <i class="fa-solid fa-chevron-left"></i> Quay lại sản phẩm </a>
            </div>
            <div class="cart-grid-right col-xs-12 col-lg-4">
              <div class="card cart-summary">
                <div class="cart-detailed-totals">
                  <div class="card-block">
                    <div class="cart-summary-line" id="cart-subtotal-products"> <span class="label js-subtotal"> 1 items </span> <span class="value">$79.00</span> </div>
                    <div class="cart-summary-line" id="cart-subtotal-shipping"> <span class="label"> Shipping </span> <span class="value">Free</span>
                      <div><small class="value"></small></div>
                    </div>
                  </div>
                  <hr class="separator">
                  <div class="card-block">
                    <div class="cart-summary-line cart-total"> <span class="label">Total (tax incl.)</span> <span class="value">$79.00</span> </div>
                    <div class="cart-summary-line"> <small class="label"></small> <small class="value"></small> </div>
                  </div>
                  <hr class="separator">
                </div>
                <div class="checkout text-sm-center card-block"> <button type="button" class="btn btn-primary">Checkout</button> </div>
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
        </section>
        <section class="featured-products clearfix">
          <h1 class="h1 products-section-title text-uppercase "> Sản phẩm bán chạy </h1>
          <div class="featured-products-wrapper">
            <div class="products">
              <ul class="featured_grid product_list grid row gridcount">
                <li class="product_item col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <div class="product-miniature js-product-miniature" data-id-product="1" data-id-product-attribute="1" itemscope itemtype="http://schema.org/Product">
                    <div class="thumbnail-container"> <a href="{{ route('product.view') }}" class="thumbnail product-thumbnail"> <img src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="Consectetur Hampden" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg"> <img class="fliper_image img-responsive" src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="" /> </a>
                      <div class="outer-functional">
                        <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#product-modal"> <i class="material-icons search">&#xE417;</i> Quick view</button>
                          <div class="product-actions">
                            <form action="" method="post" class="add-to-cart-or-refresh"> <input type="hidden" name="token" value="b88261cab17a7775f54f10a3c0bb0f61"> <input type="hidden" name="id_product" value="1" class="product_page_product_id"> <input type="hidden" name="id_customization" value="0" class="product_customization_id"> <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit"> Add to cart </button> </form>
                          </div>
                        </div>
                      </div>
                      <ul class="product-flags">
                        <li class="on-sale">On sale!</li>
                        <li class="new">New</li>
                      </ul>
                    </div>
                    <div class="product-description">
                      <span class="h3 product-title" itemprop="name"><a href="{{ route('product.index') }}">Consectetur Hampden</a></span>
                      <div class="product-price-and-shipping"> <span itemprop="price" class="price">$104.86</span> </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="view_more"> <a class="all-product-link" href=""> Tất cả sản phẩm </a> </div>
            </div>
          </div>
          <div class="modal fade" id="product-modal">
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
                          <div class="product-cover slider-main-qview">
                            <a href="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg">
                              <img class="js-qv-product-cover-qview" src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="" title="" itemprop="image">
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <h1 class="h1">Lan Hồ Điệp</h1>
                      <div class="product-prices">
                        <div class="product-price h5 " itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                          <link itemprop="availability" href="https://schema.org/InStock">
                          <meta itemprop="priceCurrency" content="EUR">
                          <div class="current-price"> <span itemprop="price" content="87">€87.00</span> </div>
                        </div>
                        <div class="tax-shipping-delivery-label"> bao gồm VAT </div>
                      </div>
                      <div id="product-description-short" itemprop="description">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
                      </div>
                      <div class="product-actions">
                        <form action="" method="post" id="add-to-cart-or-refresh"> <input type="hidden" name="token" value="b88261cab17a7775f54f10a3c0bb0f61"> <input type="hidden" name="id_product" value="21" id="product_page_product_id"> <input type="hidden" name="id_customization" value="0" id="product_customization_id">
                          <div class="product-variants">
                          </div>
                          <div class="product-add-to-cart"> <!-- <span class="control-label">Quantity</span>-->
                            <div class="product-quantity">
                              <div class="qty">
                                <div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span><input type="text" name="qty" id="quantity_wanted" value="1" class="input-group form-control" min="1" aria-label="Quantity" style="display: block;"><span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span><span class="input-group-btn-vertical"><button class="btn btn-touchspin js-touchspin bootstrap-touchspin-up" type="button"><i class="material-icons touchspin-up"></i></button><button class="btn btn-touchspin js-touchspin bootstrap-touchspin-down" type="button"><i class="material-icons touchspin-down"></i></button></span></div>
                              </div>
                              <div class="add"> <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit"> Add to cart </button> </div>
                            </div>
                            <div class="clearfix"></div>
                            <p class="product-minimal-quantity"> </p>
                          </div>
                        </form>
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