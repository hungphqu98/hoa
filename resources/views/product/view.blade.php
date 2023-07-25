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
          <div class="row">
            <div class="pp-left-column col-xs-12 col-sm-5 col-md-5">
              <section class="page-content" id="content">
                <div class="product-leftside">
                  <ul class="product-flags">
                    <li class="product-flag new">Mới</li>
                  </ul>
                  <div class="images-container">
                    <div class="product-cover"> <a href='https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg'> <img class="js-qv-product-cover" src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="" title="" style="width:100%;" itemprop="image"> </a>
                      <div class="layer hidden-sm-down" data-toggle="modal" data-target="#product-modal"> <i class="fa fa-arrows-alt zoom-in"></i> </div>
                    </div> <!-- Define Number of product for SLIDER -->
                  </div>
                </div>
              </section>
            </div>
            <div class="pp-right-column col-xs-12 col-sm-7 col-md-7">
              <h1 class="h1 productpage_title" itemprop="name">Tên hoa</h1>
              <div class="product-information">
                <div id="product-description-short-29" itemprop="description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div class="product-actions">
                  <form action="#" method="post" id="add-to-cart-or-refresh"> <input type="hidden" name="token" value="b88261cab17a7775f54f10a3c0bb0f61"> <input type="hidden" name="id_product" value="29" id="product_page_product_id"> <input type="hidden" name="id_customization" value="0" id="product_customization_id">
                    <section class="product-discounts"> </section>
                    <div class="product-prices">
                      <div class="product-price h5 " itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                        <link itemprop="availability" href="https://schema.org/InStock" />
                        <meta itemprop="priceCurrency" content="USD">
                        <div class="current-price"> <span itemprop="price" content="83">83,00 USD</span> </div>
                      </div>
                      <div class="tax-shipping-delivery-label"> bao gồm VAT </div>
                    </div>
                    <div class="product-add-to-cart"> <!-- <span class="control-label">Ilość</span>-->
                      <div class="product-quantity">
                        <div class="qty"> <input type="text" name="qty" id="quantity_wanted" value="1" class="input-group" min="1" aria-label="Ilość"> </div>
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
                    <p><b>The standard Lorem Ipsum passage, used since the 1500</b></p>
                    <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which has since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance.</p>
                    <p><b>Contrary to popular belief, Lorem Ipsum is not simply random text. </b></p>
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                  </div>
                </div>
                <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div class="product-manufacturer"> <a href="https://capricathemes.com/prestashop/PRS07/PRS070170/index.php?id_manufacturer=5&amp;controller=manufacturer&amp;id_lang=1"> <img src="https://capricathemes.com/prestashop/PRS07/PRS070170/img/m/5.jpg" class="img img-thumbnail manufacturer-logo" alt="Exercitation"> </a> </div>
                  <div class="product-reference"> <label class="label">Reference </label> <span itemprop="sku">product15</span> </div>
                  <div class="product-quantities"> <label class="label">In stock</label> <span data-stock="998" data-allow-oosp="0">998 Items</span> </div>
                  <div class="product-out-of-stock"> </div>
                  <section class="product-features">
                    <h3 class="h6">Data sheet</h3>
                    <dl class="data-sheet">
                      <dt class="name">Compositions</dt>
                      <dd class="value"> Wool</dd>
                      <dt class="name">Frame Size</dt>
                      <dd class="value">Polyester</dd>
                      <dt class="name">styles</dt>
                      <dd class="value">Rock</dd>
                      <dt class="name">Properties</dt>
                      <dd class="value">Maxi Dress</dd>
                    </dl>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section class="product-accessories clearfix">
            <h2 class="h1 products-section-title text-uppercase"> <span>Sản phẩm cùng loại</span> </h2>
            <div class="product-accessories-wrapper">
              <div class="products">
                <ul id="accessories-carousel" class="slick-product-view-list product_list">
                  <li class="item">
                    <div class="product-miniature js-product-miniature" data-id-product="25" data-id-product-attribute="110" itemscope itemtype="http://schema.org/Product">
                      <div class="thumbnail-container"> <a href="#" class="thumbnail product-thumbnail"> <img src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="Commodi consequatur" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg"> <img class="fliper_image img-responsive" src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="" /> </a>
                        <div class="outer-functional">
                          <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#product-modal"> <i class="material-icons search">&#xE417;</i> Szybki podgląd </button>
                            <div class="product-actions"> <a href="" class="btn btn-primary add-to-cart view_page"> View Detail </a> </div>
                          </div>
                        </div>
                        <ul class="product-flags">
                          <li class="new">Mới</li>
                        </ul>
                      </div>
                      <div class="product-description">
                        <span class="h3 product-title" itemprop="name"><a href="">Commodi consequatur</a></span>
                        <div class="product-price-and-shipping"> <span itemprop="price" class="price">85,00 USD</span> </div>

                      </div>
                    </div>
                  </li>
                  <li class="item">
                    <div class="product-miniature js-product-miniature" data-id-product="25" data-id-product-attribute="110" itemscope itemtype="http://schema.org/Product">
                      <div class="thumbnail-container"> <a href="#" class="thumbnail product-thumbnail"> <img src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="Commodi consequatur" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg"> <img class="fliper_image img-responsive" src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="" /> </a>
                        <div class="outer-functional">
                          <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#product-modal"> <i class="material-icons search">&#xE417;</i> Szybki podgląd </button>
                            <div class="product-actions"> <a href="" class="btn btn-primary add-to-cart view_page"> View Detail </a> </div>
                          </div>
                        </div>
                        <ul class="product-flags">
                          <li class="new">Mới</li>
                        </ul>
                      </div>
                      <div class="product-description">
                        <span class="h3 product-title" itemprop="name"><a href="">Commodi consequatur</a></span>
                        <div class="product-price-and-shipping"> <span itemprop="price" class="price">85,00 USD</span> </div>
                      </div>
                    </div>
                  </li>
                  <li class="item">
                    <div class="product-miniature js-product-miniature" data-id-product="25" data-id-product-attribute="110" itemscope itemtype="http://schema.org/Product">
                      <div class="thumbnail-container"> <a href="#" class="thumbnail product-thumbnail"> <img src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="Commodi consequatur" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg"> <img class="fliper_image img-responsive" src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="" /> </a>
                        <div class="outer-functional">
                          <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#product-modal"> <i class="material-icons search">&#xE417;</i> Szybki podgląd </button>
                            <div class="product-actions"> <a href="" class="btn btn-primary add-to-cart view_page"> View Detail </a> </div>
                          </div>
                        </div>
                        <ul class="product-flags">
                          <li class="new">Mới</li>
                        </ul>
                      </div>
                      <div class="product-description">
                        <span class="h3 product-title" itemprop="name"><a href="">Commodi consequatur</a></span>
                        <div class="product-price-and-shipping"> <span itemprop="price" class="price">85,00 USD</span> </div>
                      </div>
                    </div>
                  </li>
                  <li class="item">
                    <div class="product-miniature js-product-miniature" data-id-product="25" data-id-product-attribute="110" itemscope itemtype="http://schema.org/Product">
                      <div class="thumbnail-container"> <a href="#" class="thumbnail product-thumbnail"> <img src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="Commodi consequatur" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg"> <img class="fliper_image img-responsive" src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="" /> </a>
                        <div class="outer-functional">
                          <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#product-modal"> <i class="material-icons search">&#xE417;</i> Szybki podgląd </button>
                            <div class="product-actions"> <a href="" class="btn btn-primary add-to-cart view_page"> View Detail </a> </div>
                          </div>
                        </div>
                        <ul class="product-flags">
                          <li class="new">Mới</li>
                        </ul>
                      </div>
                      <div class="product-description">
                        <span class="h3 product-title" itemprop="name"><a href="index87b3.html?id_product=25&amp;id_product_attribute=110&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=6#/1-rozmiar-s/5-kolor-szary">Commodi consequatur</a></span>
                        <div class="product-price-and-shipping"> <span itemprop="price" class="price">85,00 USD</span> </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="customNavigation"> <a class="btn prev accessories_prev">&nbsp;</a> <a class="btn next accessories_next">&nbsp;</a> </div>
              </div>
            </div>
          </section>
          <section class="productscategory-products clearfix">
            <h2 class="h1 products-section-title text-uppercase"> Sản phẩm bán chạy </h2>
            <div class="productscategory-wrapper">
              <div class="products">
                <ul id="productscategory-carousel" class="slick-product-view-list product_list">
                  <li class="item">
                    <div class="product-miniature js-product-miniature" data-id-product="22" data-id-product-attribute="70" itemscope itemtype="http://schema.org/Product">
                      <div class="thumbnail-container">
                        <a href="" class="thumbnail product-thumbnail">
                          <img src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="Accusantium doloremque" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg">
                          <img class="fliper_image img-responsive" src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="" />
                        </a>
                        <div class="outer-functional">
                          <div class="functional-buttons">
                            <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#product-modal"> <i class="material-icons search">&#xE417;</i> Szybki podgląd</button>
                            <div class="product-actions">
                              <a href="" class="btn btn-primary add-to-cart view_page"> View Detail </a>
                          </div>
                        </div>
                      </div>
                      <ul class="product-flags">
                        <li class="new">Mới</li>
                      </ul>
                    </div>
                    <div class="product-description">
                      <span class="h3 product-title" itemprop="name"><a href="">Accusantium doloremque</a></span>
                      <div class="product-price-and-shipping"> <span itemprop="price" class="price">110,00 USD</span> </div>
                    </div>
                  </li>
                  <li class="item">
                    <div class="product-miniature js-product-miniature" data-id-product="22" data-id-product-attribute="70" itemscope itemtype="http://schema.org/Product">
                      <div class="thumbnail-container">
                        <a href="" class="thumbnail product-thumbnail">
                          <img src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="Accusantium doloremque" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg">
                          <img class="fliper_image img-responsive" src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="" />
                        </a>
                        <div class="outer-functional">
                          <div class="functional-buttons">
                            <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#product-modal"> <i class="material-icons search">&#xE417;</i> Szybki podgląd</button>
                            <div class="product-actions">
                              <a href="" class="btn btn-primary add-to-cart view_page"> View Detail </a>
                          </div>
                        </div>
                      </div>
                      <ul class="product-flags">
                        <li class="new">Mới</li>
                      </ul>
                    </div>
                    <div class="product-description">
                      <span class="h3 product-title" itemprop="name"><a href="">Accusantium doloremque</a></span>
                      <div class="product-price-and-shipping"> <span itemprop="price" class="price">110,00 USD</span> </div>
                    </div>
                  </li>
                  <li class="item">
                    <div class="product-miniature js-product-miniature" data-id-product="22" data-id-product-attribute="70" itemscope itemtype="http://schema.org/Product">
                      <div class="thumbnail-container">
                        <a href="" class="thumbnail product-thumbnail">
                          <img src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="Accusantium doloremque" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg">
                          <img class="fliper_image img-responsive" src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="" />
                        </a>
                        <div class="outer-functional">
                          <div class="functional-buttons">
                            <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#product-modal"> <i class="material-icons search">&#xE417;</i> Szybki podgląd</button>
                            <div class="product-actions">
                              <a href="" class="btn btn-primary add-to-cart view_page"> View Detail </a>
                          </div>
                        </div>
                      </div>
                      <ul class="product-flags">
                        <li class="new">Mới</li>
                      </ul>
                    </div>
                    <div class="product-description">
                      <span class="h3 product-title" itemprop="name"><a href="">Accusantium doloremque</a></span>
                      <div class="product-price-and-shipping"> <span itemprop="price" class="price">110,00 USD</span> </div>
                    </div>
                  </li>
                  <li class="item">
                    <div class="product-miniature js-product-miniature" data-id-product="22" data-id-product-attribute="70" itemscope itemtype="http://schema.org/Product">
                      <div class="thumbnail-container">
                        <a href="" class="thumbnail product-thumbnail">
                          <img src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="Accusantium doloremque" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg">
                          <img class="fliper_image img-responsive" src="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" data-full-size-image-url="https://cayvahoa.net/wp-content/uploads/2016/04/lan-ho-diep-vang1-600x600.jpg" alt="" />
                        </a>
                        <div class="outer-functional">
                          <div class="functional-buttons">
                            <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#product-modal"> <i class="material-icons search">&#xE417;</i> Szybki podgląd</button>
                            <div class="product-actions">
                              <a href="" class="btn btn-primary add-to-cart view_page"> View Detail </a>
                          </div>
                        </div>
                      </div>
                      <ul class="product-flags">
                        <li class="new">Mới</li>
                      </ul>
                    </div>
                    <div class="product-description">
                      <span class="h3 product-title" itemprop="name"><a href="">Accusantium doloremque</a></span>
                      <div class="product-price-and-shipping"> <span itemprop="price" class="price">110,00 USD</span> </div>
                    </div>
                  </li>
              </ul>
              <div class="customNavigation"> <a class="btn prev productscategory_prev">&nbsp;</a> <a class="btn next productscategory_next">&nbsp;</a> </div>
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