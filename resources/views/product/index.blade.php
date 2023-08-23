<x-app-layout>
  <nav data-depth="2" class="breadcrumb">
    <div class="container">
      <ol itemscope itemtype="http://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <a itemprop="item" href="{{ route('home') }}">
            <span itemprop="name">Trang chủ</span>
          </a>
          <meta itemprop="position" content="1">
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <a itemprop="item" href="{{ route('product.index') }}">
            <span itemprop="name">Sản phẩm</span>
          </a>
          <meta itemprop="position" content="2">
        </li>


      </ol>
    </div>
  </nav>
  <div class="container product-index-container">
    <div id="columns_inner">
      <div id="left-column" class="col-xs-12" style="width:24.4%">
        <div class="block-categories block">
          <h4 class="block_title hidden-md-down"> <a href="" {{ route('product.index') }}>Sản phẩm</a> </h4>
          <div id="block_categories_toggle" class="block_content collapse">
            <ul class="category-top-menu">
              <li>
                <ul class="category-sub-menu">
                  <li data-depth="0"><a href="{{ route('product.index') }}">Lan Hồ Điệp</a>
                    <div class="navbar-toggler collapse-icons" data-toggle="collapse" data-target="#exCollapsingNavbar4"><span class="add"></span><span class="remove"></span></div>
                    <div class="collapse" id="exCollapsingNavbar4">
                      <ul class="category-sub-menu">
                        <li data-depth="1"><a class="category-sub-link" href="">Hoa sự kiện</a></li>
                        <li data-depth="1"><a class="category-sub-link" href="">Bó hoa</a></li>
                        <li data-depth="1"><a class="category-sub-link" href="">Hộp hoa</a> </li>
                        <li data-depth="1"><a class="category-sub-link" href="">Hoa tết</a> </li>
                      </ul>
                    </div>
                  </li>
                  <li data-depth="0"><a href="{{ route('product.index') }}">Hoa sự kiện</a>
                    <div class="navbar-toggler collapse-icons" data-toggle="collapse" data-target="#exCollapsingNavbar4"><span class="add"></span><span class="remove"></span></div>
                    <div class="collapse" id="exCollapsingNavbar4">
                      <ul class="category-sub-menu">
                        <li data-depth="1"><a class="category-sub-link" href="">Hoa sự kiện</a></li>
                        <li data-depth="1"><a class="category-sub-link" href="">Bó hoa</a></li>
                        <li data-depth="1"><a class="category-sub-link" href="">Hộp hoa</a> </li>
                        <li data-depth="1"><a class="category-sub-link" href="">Hoa tết</a> </li>
                      </ul>
                    </div>
                  </li>
                  <li data-depth="0"><a href="{{ route('product.index') }}">Bó hoa</a>
                    <div class="navbar-toggler collapse-icons" data-toggle="collapse" data-target="#exCollapsingNavbar4"><span class="add"></span><span class="remove"></span></div>
                    <div class="collapse" id="exCollapsingNavbar4">
                      <ul class="category-sub-menu">
                        <li data-depth="1"><a class="category-sub-link" href="">Hoa sự kiện</a></li>
                        <li data-depth="1"><a class="category-sub-link" href="">Bó hoa</a></li>
                        <li data-depth="1"><a class="category-sub-link" href="">Hộp hoa</a> </li>
                        <li data-depth="1"><a class="category-sub-link" href="">Hoa tết</a> </li>
                      </ul>
                    </div>
                  </li>
                  <li data-depth="0"><a href="{{ route('product.index') }}">Hoa tết</a>
                    <div class="navbar-toggler collapse-icons" data-toggle="collapse" data-target="#exCollapsingNavbar4"><span class="add"></span><span class="remove"></span></div>
                    <div class="collapse" id="exCollapsingNavbar4">
                      <ul class="category-sub-menu">
                        <li data-depth="1"><a class="category-sub-link" href="">Hoa sự kiện</a></li>
                        <li data-depth="1"><a class="category-sub-link" href="">Bó hoa</a></li>
                        <li data-depth="1"><a class="category-sub-link" href="">Hộp hoa</a> </li>
                        <li data-depth="1"><a class="category-sub-link" href="">Hoa tết</a> </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div id="search_filters_wrapper" class="hidden-md-down block"> <!-- hidden-sm-down -->
          <div id="search_filter_controls" class="hidden-lg-up"> <!-- --> <span id="_mobile_search_filters_clear_all"></span> <button class="btn btn-secondary ok"> <i class="material-icons">&#xE876;</i> OK </button> </div>
          <div id="search_filters">
            <h4 class="block_title">Lọc theo</h4>
            <div class="block_content">
              <div id="_desktop_search_filters_clear_all" class="hidden-md-down clear-all-wrapper"> <button data-search-url="" class="btn btn-tertiary js-search-filters-clear-all"> <i class="material-icons">&#xE14C;</i> Xóa </button> </div>
              <section class="facet">
                <h1 class="h6 facet-title hidden-md-down">Sản phẩm</h1>
                <div class="title hidden-lg-up" data-target="#facet_86716" data-toggle="collapse">
                  <h1 class="h6 facet-title">Sản phẩm</h1> <span class="pull-xs-right"> <span class="navbar-toggler collapse-icons"> <i class="fa-icon add"></i> <i class="fa-icon remove"></i> </span> </span>
                </div>
                <ul id="facet_86716" class="collapse">
                  <li> <label class="facet-label" for="facet_input_86716_0"> <span class="custom-checkbox"> <input id="facet_input_86716_0" data-search-url="" type="checkbox"> <span class="ps-shown-by-js"><i class="material-icons checkbox-checked">&#xE5CA;</i></span> </span> <a href="" class="_gray-darker search-link js-search-link" rel="nofollow"> Lan Hồ Điệp <span class="magnitude">(13)</span> </a> </label> </li>
                  <li> <label class="facet-label" for="facet_input_86716_1"> <span class="custom-checkbox"> <input id="facet_input_86716_1" data-search-url="" type="checkbox"> <span class="ps-shown-by-js"><i class="material-icons checkbox-checked">&#xE5CA;</i></span> </span> <a href="" class="_gray-darker search-link js-search-link" rel="nofollow"> Bó hoa <span class="magnitude">(14)</span> </a> </label> </li>
                  <li> <label class="facet-label" for="facet_input_86716_2"> <span class="custom-checkbox"> <input id="facet_input_86716_2" data-search-url="" type="checkbox"> <span class="ps-shown-by-js"><i class="material-icons checkbox-checked">&#xE5CA;</i></span> </span> <a href="" class="_gray-darker search-link js-search-link" rel="nofollow"> Hộp hoa <span class="magnitude">(14)</span> </a> </label> </li>
                </ul>
              </section>
              <section class="facet">
                <h1 class="h6 facet-title hidden-md-down">Giá</h1>
                <div class="title hidden-lg-up" data-target="#facet_93109" data-toggle="collapse">
                  <h1 class="h6 facet-title">Giá</h1> <span class="pull-xs-right"> <span class="navbar-toggler collapse-icons"> <i class="fa-icon add"></i> <i class="fa-icon remove"></i> </span> </span>
                </div>
                <ul id="facet_93109" class="collapse">
                  <li> <label class="facet-label" for="facet_input_93109_0"> <span class="custom-radio"> <input id="facet_input_93109_0" data-search-url="" type="radio" name="filter Price"> <span class="ps-shown-by-js"></span> </span> <a href="" class="_gray-darker search-link js-search-link" rel="nofollow"> $74.00 - $76.00 <span class="magnitude">(1)</span> </a> </label> </li>
                  <li> <label class="facet-label" for="facet_input_93109_1"> <span class="custom-radio"> <input id="facet_input_93109_1" data-search-url="" type="radio" name="filter Price"> <span class="ps-shown-by-js"></span> </span> <a href="" class="_gray-darker search-link js-search-link" rel="nofollow"> $77.00 - $79.00 <span class="magnitude">(1)</span> </a> </label> </li>
                  <li> <label class="facet-label" for="facet_input_93109_2"> <span class="custom-radio"> <input id="facet_input_93109_2" data-search-url="" type="radio" name="filter Price"> <span class="ps-shown-by-js"></span> </span> <a href="" class="_gray-darker search-link js-search-link" rel="nofollow"> $82.00 - $88.00 <span class="magnitude">(4)</span> </a> </label> </li>
                  <li> <label class="facet-label" for="facet_input_93109_3"> <span class="custom-radio"> <input id="facet_input_93109_3" data-search-url="" type="radio" name="filter Price"> <span class="ps-shown-by-js"></span> </span> <a href="" class="_gray-darker search-link js-search-link" rel="nofollow"> $84.00 - $100.00 <span class="magnitude">(6)</span> </a> </label> </li>
                  <li> <label class="facet-label" for="facet_input_93109_4"> <span class="custom-radio"> <input id="facet_input_93109_4" data-search-url="" type="radio" name="filter Price"> <span class="ps-shown-by-js"></span> </span> <a href="" class="_gray-darker search-link js-search-link" rel="nofollow"> $104.00 - $106.00 <span class="magnitude">(1)</span> </a> </label> </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <div id="ctleftbanner">
          <ul>
            <li class="slide ctleftbanner-container"> <a href="#" title="LeftBanner 1"> <img src="https://capricathemes.com/prestashop/PRS07/PRS070170/modules/ct_leftbanner/views/img/left-banner-1.jpg" alt="LeftBanner 1" title="LeftBanner 1" /> </a> </li>
          </ul>
        </div>
        <div id="newproduct_block" class="block products-block">
          <h4 class="block_title hidden-md-down"> Sản phẩm mới </h4>
          <div id="newproduct_block_toggle" class="block_content collapse">
            <ul class="products">
              @foreach($newProduct as $n)
              <li class="product_item">
                <div class="product-miniature js-product-miniature" itemscope itemtype="http://schema.org/Product">
                  <div class="product_thumbnail"> <a href="{{ route('product.view',['slug'=> $n->slug]) }}" class="thumbnail product-image"> <img src="{{ asset('assets/product/' . $n->image) }}" alt="Lan Hồ Điệp"> </a> </div>
                  <div class="product-info">
                    <h1 class="h3 product-title" itemprop="name"><a href="{{ route('product.view',['slug'=> $n->slug]) }}">{{ $n->name }}</a></h1>
                    <div class="product-price-and-shipping"> <span itemprop="price" class="price">{{ number_format($n->price, 0, ',', '.') }} đ</span> </div>
                  </div>
                </div>
              </li>
              @endforeach
            </ul>
            <div class="view_more"> <a class="all-product-link btn btn-primary" href="{{ route('product.index') }}"> Xem thêm </a> </div>
          </div>
        </div>
      </div>
      <div id="content-wrapper" class="left-column col-xs-12 col-sm-8 col-md-9" style="width:75.6%">
        <section id="main">
          <div class="block-category card card-block ">
            <h1 class="h1">Sản phẩm</h1>
            <div id="category-description">
              <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable that it has a more-or-less normal distribution of letters.</p>
            </div>
          </div>

          <section id="products">
            <div id="">
              <div id="js-product-list-top" class="products-selection">
                <div class="col-md-6 hidden-md-down total-products">
                  <p>There are 15 products.</p>
                </div>
                <div class="col-md-6">
                  <div class="row sort-by-row"> <span class="col-sm-3 col-md-3 hidden-sm-down sort-by">Sort by:</span>
                    <div class="col-sm-9 col-xs-8 col-md-9 products-sort-order dropdown"> <a class="select-title" rel="nofollow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Relevance <i class="material-icons pull-xs-right">&#xE5C5;</i> </a>
                      <div class="dropdown-menu"> <a rel="nofollow" href="index3fbf.html?controller=category&amp;id_category=3&amp;id_lang=1&amp;order=product.position.asc" class="select-list current js-search-link"> Relevance </a> <a rel="nofollow" href="index4ca7.html?controller=category&amp;id_category=3&amp;id_lang=1&amp;order=product.name.asc" class="select-list js-search-link"> Name, A to Z </a> <a rel="nofollow" href="index09f4.html?controller=category&amp;id_category=3&amp;id_lang=1&amp;order=product.name.desc" class="select-list js-search-link"> Name, Z to A </a> <a rel="nofollow" href="index5fd9.html?controller=category&amp;id_category=3&amp;id_lang=1&amp;order=product.price.asc" class="select-list js-search-link"> Price, low to high </a> <a rel="nofollow" href="index17ae.html?controller=category&amp;id_category=3&amp;id_lang=1&amp;order=product.price.desc" class="select-list js-search-link"> Price, high to low </a> </div>
                    </div>
                    <div class="col-sm-3 col-xs-4 hidden-lg-up filter-button"> <button id="search_filter_toggler" class="btn btn-secondary"> Filter </button> </div>
                  </div>
                </div>
                <div class="col-sm-12 hidden-lg-up showing"> Showing 1-9 of 15 item(s) </div>
              </div>
            </div>
            <div id="" class="hidden-sm-down">
              <section id="js-active-search-filters" class="hide"> </section>
            </div>
            <div id="">
              <div id="js-product-list">
                <div class="products row">
                  <ul class="product_list grid gridcount">
                    @foreach($product as $p)
                    <li class="product_item col-xs-12 col-sm-6 col-md-6 col-lg-4">
                      <div class="product-miniature js-product-miniature" itemscope itemtype="http://schema.org/Product">
                        <div class="thumbnail-container"> <a href="{{ route('product.view',['slug'=> $p->slug]) }}" class="thumbnail product-thumbnail"> <img src="{{ asset('assets/product/' . $p->image) }}" alt="Hoa" data-full-size-image-url="{{ asset('assets/product/' . $p->image) }}"> <img class="fliper_image img-responsive" src="{{ asset('assets/product/' . $p->image) }}" data-full-size-image-url="{{ asset('assets/product/' . $p->image) }}" alt="" /> </a>
                          <div class="outer-functional">
                            <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#product-modal{{$p->id}}"> <i class="material-icons search">&#xE417;</i> Quick View </button>
                              <div class="product-actions">
                                <form action="{{ route('cart.add',['id'=>$p->id]) }}" class="add-to-cart-or-refresh">
                                  @csrf
                                <input value="1" name="quantity" type="hidden">
                                <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit"> Thêm vào giỏ hàng </button> </form>
                              </div>
                            </div>
                          </div>
                          <ul class="product-flags">
                            <li class="on-sale">On sale!</li>
                            <li class="new">New</li>
                          </ul>
                        </div>
                        <div class="product-description">
                          <h3 class="h3 product-title" itemprop="name"><a href="{{ route('product.view',['slug'=> $p->slug]) }}">{{ $p->name }}</a></h3>
                          <div class="product-price-and-shipping"> <span itemprop="price" class="price">{{ number_format($p->price, 0, ',', '.') }} đ</span> </div>
                          <div class="product-detail" itemprop="description">
                            <p>{{ $p->description }}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    @endforeach
                  </ul>
                </div>
                <nav class="pagination">
                  <div class="col-md-4"> Showing 1-9 of 15 item(s) </div>
                  <div class="col-md-8">
                    <ul class="page-list clearfix text-xs-right">
                      <li> <a rel="prev" href="" class="previous disabled js-search-link"> <i class="fa fa-long-arrow-left"></i> </a> </li>
                      <li class="current"> <a rel="nofollow" href="" class="disabled js-search-link"> 1 </a> </li>
                      <li> <a rel="nofollow" href="" class="js-search-link"> 2 </a> </li>
                      <li> <a rel="next" href="" class="next js-search-link"> <i class="fa fa-long-arrow-right"></i> </a> </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div id="js-product-list-bottom">
              <div id="js-product-list-bottom"></div>
            </div>
          </section>
          @foreach($product as $p)
          <div class="modal fade" id="product-modal{{$p->id}}">
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
                            <a href="{{ route('product.view',['slug'=> $p->slug]) }}">
                              <img class="js-qv-product-cover-qview" src="{{ asset('assets/product/' . $p->image) }}" alt="" title="" itemprop="image">
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <h1 class="h1">{{ $p->name }}</h1>
                      <div class="product-prices">
                        <div class="product-price h5 " itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                          <link itemprop="availability" href="https://schema.org/InStock">
                          <meta itemprop="priceCurrency" content="EUR">
                          <div class="current-price"> <span itemprop="price">{{ number_format($p->price, 0, ',', '.') }} đ</span> </div>
                        </div>
                        <div class="tax-shipping-delivery-label"> bao gồm VAT </div>
                      </div>
                      <div id="product-description-short" itemprop="description">
                        <p>{{ $p->description }}</p>
                      </div>
                      <div class="product-actions">
                        <form action="{{ route('cart.add',['id'=>$p->id]) }}" id="add-to-cart-or-refresh"> <input value="1" type="hidden">
                          <div class="product-add-to-cart">
                            <div class="product-quantity">
                              <div class="add"> <a href=""><button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit"> Thêm vào giỏ hàng </button></a> </div>
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
          @endforeach
        </section>
      </div>
    </div>
  </div>
</x-app-layout>