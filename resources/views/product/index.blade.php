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
          <div id="block_categories_toggle" class="block_content">
            <ul class="category-top-menu">
              <li>
                <ul class="category-sub-menu">
                  <li data-depth="0"><a href="{{ route('product.index') }}">Lan Hồ Điệp</a>
                    <div class="navbar-toggler collapse-icons" data-bs-toggle="collapse" data-bs-target="#exCollapsingNavbar4"><span class="add"></span><span class="remove"></span></div>
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
                    <div class="navbar-toggler collapse-icons" data-bs-toggle="collapse" data-bs-target="#exCollapsingNavbar4"><span class="add"></span><span class="remove"></span></div>
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
                    <div class="navbar-toggler collapse-icons" data-bs-toggle="collapse" data-bs-target="#exCollapsingNavbar4"><span class="add"></span><span class="remove"></span></div>
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
                    <div class="navbar-toggler collapse-icons" data-bs-toggle="collapse" data-bs-target="#exCollapsingNavbar4"><span class="add"></span><span class="remove"></span></div>
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
            <h4 class="block_title">Lọc</h4>
            <div class="block_content">
              <section class="facet">
                <form action="{{ route('product.index') }}" method="get">
                  <ul id="facet_86716" class="">
                    <li>
                      <input class="" type="checkbox" name="filters[]" id="on_sale_filter" value="on_sale" @if(in_array('on_sale', $filters)) checked @endif>
                      <label class="facet-label form-check-label" for="on_sale_filter">
                        Giảm giá
                      </label>
                    </li>
                    <button type="submit" id="filterFormSubmit" style="display: none;">Apply Filters</button>
                  </ul>
                </form>

              </section>
              <section class="facet">
                <h1 class="h6 facet-title hidden-md-down">Giá</h1>
                <div class="title hidden-lg-up" data-target="#facet_93109" data-toggle="collapse">
                  <h1 class="h6 facet-title">Giá</h1> <span class="pull-xs-right"> <span class="navbar-toggler collapse-icons"> <i class="fa-icon add"></i> <i class="fa-icon remove"></i> </span> </span>
                </div>
                <form action="{{ route('product.index') }}" method="get" id="filterForm">
                  <ul id="facet_93109" class="">
                    <li class="">
                      <input class="" type="radio" name="price_filter" id="priceFilterDefault" value="0" @if(request()->input('price_filter', '0') == '0') checked @endif>
                      <label class="facet-label form-check-label" for="priceFilterDefault">
                        Tất cả
                      </label>
                    </li>
                    <li class="">
                      <input class="" type="radio" name="price_filter" id="priceFilter1" value="1" @if(request()->input('price_filter') == '1') checked @endif>
                      <label class="facet-label form-check-label" for="priceFilter1">
                        Dưới 500.000 đ
                      </label>
                    </li>
                    <li class="">
                      <input class="" type="radio" name="price_filter" id="priceFilter2" value="2" @if(request()->input('price_filter') == '2') checked @endif>
                      <label class="facet-label form-check-label" for="priceFilter2">
                        Từ 500.000 - 1.000.000 đ
                      </label>
                    </li>
                    <li class="">
                      <input class="" type="radio" name="price_filter" id="priceFilter3" value="3" @if(request()->input('price_filter') == '3') checked @endif>
                      <label class="facet-label form-check-label" for="priceFilter3">
                        Từ 1.000.000 - 2.000.000 đ
                      </label>
                    </li>
                    <li class="">
                      <input class="" type="radio" name="price_filter" id="priceFilter4" value="4" @if(request()->input('price_filter') == '4') checked @endif>
                      <label class=" facet-label form-check-label" for="priceFilter4">
                        Trên 2.000.000 đ
                      </label>
                    </li>
                  </ul>
                </form>
              </section>
            </div>
          </div>
        </div>
        <div id="ctleftbanner">
          <ul>
            <li class="slide ctleftbanner-container"> <a href="#" title="LeftBanner 1">
                                                        @foreach($banner as $b)
                                                        <img src="{{ asset('assets/banner/' . $b->images)}}" alt="LeftBanner 1" title="LeftBanner 1" />
                                                        @endforeach
             </a> </li>
          </ul>
        </div>
        <div id="newproduct_block" class="block products-block">
          <h4 class="block_title hidden-md-down"> Sản phẩm mới </h4>
          <div id="newproduct_block_toggle" class="block_content">
            <ul class="products">
              @foreach($newProduct as $n)
              <li class="product_item">
                <div class="product-miniature js-product-miniature" itemscope itemtype="http://schema.org/Product">
                  <div class="product_thumbnail"> <a href="{{ route('product.view',['slug'=> $n->slug]) }}" class="thumbnail product-image"> <img src="{{ asset('assets/product/' . $n->image) }}" alt="Lan Hồ Điệp"> </a> </div>
                  <div class="product-info">
                    <h1 class="h3 product-title" itemprop="name"><a href="{{ route('product.view',['slug'=> $n->slug]) }}">{{ $n->name }}</a></h1>
                    <div class="product-price-and-shipping"> @if($n->sale_price > 0)
                      <span itemprop="price" class="price">{{ number_format($n->sale_price, 0, ',', '.') }}đ</span><br /> <s class="price text-muted">{{ number_format($n->price, 0, ',', '.') }}đ</s>
                      @else
                      <span itemprop="price" class="price">{{ number_format($n->price, 0, ',', '.') }}đ</span>
                      @endif
                    </div>
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
              <p></p>
            </div>
          </div>

          <section id="products">
            <div id="">
              <div id="js-product-list-top" class="products-selection">
                <div class="col-md-6 hidden-md-down total-products">
                </div>
                <div class="col-md-6">
                  <div class="row sort-by-row"> <span class="col-sm-3 col-md-3 hidden-sm-down sort-by">Sắp xếp:</span>
                    <div class="col-sm-9 col-xs-8 col-md-9 products-sort-order dropdown"> <a class="select-title" href="#" role="button" id="dropdownSort" rel="nofollow" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        @if ($sort === 'name')
                        Tên, A->Z
                        @elseif ($sort === 'name:desc')
                        Tên, Z->A
                        @elseif ($sort === 'price')
                        Giá tăng dần
                        @elseif ($sort === 'price:desc')
                        Giá giảm dần
                        @else
                        Mặc định
                        @endif</a>
                      <div class="dropdown-menu" aria-labelledby="dropdownSort">
                        <a rel="nofollow" href="{{ route('product.index', ['sort' => 'name']) }}" class="select-list js-search-link dropdown-item @if($sort == 'name') active @endif""> Tên, A->Z </a>
                        <a rel=" nofollow" href="{{ route('product.index', ['sort' => 'name:desc']) }}" class="select-list js-search-link dropdown-item @if($sort == 'name:desc') active @endif""> Tên, Z->A </a>
                        <a rel=" nofollow" href="{{ route('product.index', ['sort' => 'price']) }}" class="select-list js-search-link dropdown-item @if($sort == 'price') active @endif""> Giá tăng dần </a>
                        <a rel=" nofollow" href="{{ route('product.index', ['sort' => 'price:desc']) }}" class="select-list js-search-link dropdown-item @if($sort == 'price:desc') active @endif""> Giá giảm dần </a>
                      </div>
                    </div>
                    <div class=" col-sm-3 col-xs-4 hidden-lg-up filter-button"> <button id="search_filter_toggler" class="btn btn-secondary"> Lọc </button>
                      </div>
                    </div>
                  </div>
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
                          <div class="thumbnail-container"> <a href="{{ route('product.view',['slug'=> $p->slug]) }}" class="thumbnail product-thumbnail"> <img src="{{ asset('assets/product/' . $p->image) }}" alt="Hoa"> </a>
                            <div class="outer-functional">
                              <div class="functional-buttons"> <button type="button" class="quick-view" data-bs-toggle="modal" data-bs-target="#quickview" data-id_product="{{ $p->id }}" style="background-image: url({{ asset('assets/action.png') }})"><i class="material-icons search">&#xE417;</i> Quick View </button>
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
                            <h3 class="h3 product-title" itemprop="name"><a href="{{ route('product.view',['slug'=> $p->slug]) }}">{{ $p->name }}</a></h3>
                            <div class="product-price-and-shipping">
                              @if($p->sale_price > 0)
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
                  </div>
                  <nav class="pagination">
                    {{ $product->appends(['filters' => $filters, 'sort' => $sort])->links() }}
                  </nav>
                </div>
              </div>
              <div id="js-product-list-bottom">
                <div id="js-product-list-bottom"></div>
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
  @push('footer')
  <script>
    document.getElementById('on_sale_filter').addEventListener('change', function() {
      document.getElementById('filterFormSubmit').click();
    });
    document.addEventListener("DOMContentLoaded", function() {
      var radioButtons = document.querySelectorAll("input[type='radio']");

      radioButtons.forEach(function(radio) {
        radio.addEventListener("click", function() {
          document.getElementById("filterForm").submit();
        });
      });
    });
  </script>
  @endpush
</x-app-layout>