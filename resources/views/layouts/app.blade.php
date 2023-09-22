<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-R1BSBZW85Z"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-R1BSBZW85Z');
  </script>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="icon" href="img/favicon.png" type="image/png" />
  <title>Gia Flowers</title>
  <meta name="description" content="Gia Flowers là địa chỉ đáng tin cậy chuyên cung cấp lan hồ điệp Đà Lạt và hoa tươi sỉ lẻ. Với kinh nghiệm từ năm 2019 đến nay, chúng tôi đặt sự tận tâm và chất lượng phục vụ lên hàng đầu.">
  <meta name="keywords" content="hoa, lan hồ điệp, hoa lan, chậu hoa, bán hoa, lan hồ điệp Đà Lạt, hoa tươi" />

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.css" integrity="sha512-lp6wLpq/o3UVdgb9txVgXUTsvs0Fj1YfelAbza2Kl/aQHbNnfTYPMLiQRvy3i+3IigMby34mtcvcrh31U50nRw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/jquery-ui.min.css" integrity="sha512-ELV+xyi8IhEApPS/pSj66+Jiw+sOT1Mqkzlh8ExXihe4zfqbWkxPRi8wptXIO9g73FSlhmquFlUOuMSoXz5IRw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/theme.min.css" integrity="sha512-hbs/7O+vqWZS49DulqH1n2lVtu63t3c3MTAn0oYMINS5aT8eIAbJGDXgLt6IxDHcWyzVTgf9XyzZ9iWyVQ7mCQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap" rel="stylesheet">

  <!-- main css -->
  <link rel="stylesheet" href={{ asset("css/style-cleaned.css") }} />
  <link rel="stylesheet" href={{ asset("css/responsive.css") }} />
  <link rel="stylesheet" href={{ asset("css/main.css") }} />

  @stack('header')

</head>

<body>
  <div id="fb-root"></div>
  <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0&appId=251373497665940&autoLogAppEvents=1" nonce="wcqh5eRv"></script>


  <!--================Header Menu Area =================-->
  <header id="header">
    <div class="header-banner">
    </div>
    <div class="header-top">
      <div class="container">
        <div class="header_logo">
          <a href="{{ route('home') }}">
            <img class="logo img-responsive" src={{ asset("assets/logo1x.png") }} alt="Gia Flowers">
          </a>
        </div>
        <div id="desktop_cart">
          <div class="blockcart cart-preview inactive">
            <div class="header blockcart-header dropdown js-dropdown">

              <a class="shopping-cart" rel="nofollow" href="{{ route('cart') }}" style="background: url({{ asset('assets/nav-icon.png') }}) no-repeat scroll 0 -389px transparent;">
                <span class="mobile_count">{{$cart->total_quantity}}</span>
                <span class="cart-products-count hidden-sm-down">{{$cart->total_quantity}}</span>
                <!-- <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {{$cart->total_quantity}}
                  <span class="visually-hidden">unread messages</span>
                </span> -->
              </a>


            </div>
          </div>
        </div>
        <div class="user-info dropdown js-dropdown">
          <span class="user-info-title expand-more _gray-darker" data-bs-toggle="dropdown" style="background: url({{ asset('assets/nav-icon.png') }}) no-repeat scroll center -46px transparent;"><span class="account_text">My
              Account</span></span>
          <ul class="dropdown-menu" id="account-dropdown">
            @auth
            <p>Xin chào, {{ Auth::user()->name }}!</p>
            <li>
              <a class="dropdown-item" href="{{ route('user.account') }}" title="Account" rel="nofollow">
                <span>Tài khoản của tôi</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="{{ route('user.order') }}" title="Register" rel="nofollow">
                <span>Lịch sử mua hàng</span>
              </a>
            </li>
            <li class="right-aligned logout">
              <form action="{{ route('logout') }}" method="POST">
                @csrf
                <button type="submit">Đăng xuất</button>
              </form>
            </li>
            @else
            <li>
              <!-- Login Form -->
              <form action="{{ route('login') }}" method="POST" class="dropdown-item">
                @csrf
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary">Đăng nhập</button>
              </form>
              <!-- End of Login Form -->
            </li>
            <li>
              <a class="dropdown-item" href="{{ route('login.google') }}" title="Log in to your customer account" rel="nofollow">
                <button class="btn btn-primary"><i class="fa-brands fa-google"></i>Đăng nhập bằng Google</button>
              </a>
            </li>
            <li class="right-aligned">
              <a class="dropdown-item" href="{{ route('register') }}" title="Register" rel="nofollow">
                <span>Chưa có tài khoản? Đăng ký</span>
              </a>
            </li>
            @endauth
          </ul>
        </div><!-- Block search module TOP -->
        <div id="search_widget" class="col-lg-4 col-md-5 col-sm-12 search-widget" data-search-controller-url="">
          <span class="search_button" style="background: url({{ asset('assets/nav-icon.png') }}) no-repeat scroll 0 -143px transparent;"></span>
          <div class="search_toggle">
            <form action="{{ route('search') }}" role="search" method="GET">
              @csrf
              <input type="hidden" name="controller" value="search">
              <input type="text" name="key" value="" placeholder="Tìm kiếm">
              <button type="submit">
              </button>
            </form>
          </div>
        </div>
        <!-- /Block search module TOP -->

        <div class="header-top-inner">
          <div class="text-xs-left mobile hidden-lg-up mobile-menu">
            <div class="menu-icon">
              <div class="cat-title">Menu</div>
            </div>

            <div id="mobile_top_menu_wrapper" class="row hidden-lg-up">
              <div class="mobile-menu-inner">
                <div class="menu-icon">
                  <div class="cat-title">Menu</div>
                </div>
                <div class="js-top-menu mobile" id="_mobile_top_menu">
                  <ul class="top-menu container" id="top-menu" data-depth="0">
                  <li class="category" id="category-15">
                      <a class="dropdown-item" href="{{ route('home') }}" data-depth="0">
                        Trang chủ
                      </a>
                    </li>
                    <li class="category" id="category-3">
                      <a data-bs-toggle="collapse" href="#top_sub_menu_1" data-depth="0" aria-expanded="false">
                        <span class="pull-xs-right hidden-lg-up">
                          <span class="navbar-toggler collapse-icons">
                            <i class="fa-icon add">&nbsp;</i>
                            <i class="fa-icon remove">&nbsp;</i>
                          </span>
                        </span>
                        Sản phẩm
                      </a>
                      <div class="popover sub-menu collapse sub-menu-container" id="top_sub_menu_1">
                        <ul class="sub-cat-mobile" data-depth="1">
                          <li class="category" id="category-4">
                            <a class="dropdown-item dropdown-submenu" href="{{ route('product.index') }}" data-depth="1">
                              <span class="pull-xs-right hidden-lg-up">
                                <span class="navbar-toggler collapse-icons">
                                  <i class="fa-icon add">&nbsp;</i>
                                  <i class="fa-icon remove">&nbsp;</i>
                                </span>
                              </span>
                              Lan Hồ Điệp 100% Đà Lạt
                            </a>
                            <div id="top_sub_menu_11">
                              <ul class="top-menu  " data-depth="2">
                                <li class="category" id="category-20">
                                  <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                                    Lan Hồ Điệp thiết kế cùng lũa
                                  </a>
                                </li>
                                <li class="category" id="category-21">
                                  <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                                    Lan Hồ Điệp thiết kế Bonsai
                                  </a>
                                </li>
                                <li class="category" id="category-22">
                                  <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                                    Lan Hồ Điệp thiết kế nâng cao
                                  </a>
                                </li>
                                <li class="category" id="category-22">
                                  <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                                    Lan Hồ Điệp thiết kế cơ bản
                                  </a>
                                </li>
                              </ul>

                            </div>
                          </li>
                        </ul>
                        <ul class="sub-cat-mobile" data-depth="1">
                          <li class="category" id="category-5">
                            <a class="dropdown-item dropdown-submenu" href="{{ route('product.index') }}" data-depth="1">
                              <span class="pull-xs-right hidden-lg-up">
                                <span class="navbar-toggler collapse-icons">
                                  <i class="fa-icon add">&nbsp;</i>
                                  <i class="fa-icon remove">&nbsp;</i>
                                </span>
                              </span>
                              Hoa tươi thành phẩm
                            </a>
                            <div id="top_sub_menu_54766">
                              <ul class="top-menu  " data-depth="2">
                                <li class="category" id="category-23">
                                  <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                                    Bó hoa
                                  </a>
                                </li>
                                <li class="category" id="category-24">
                                  <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                                    Lẵng/ Giỏ/ Hộp hoa
                                  </a>
                                </li>
                                <li class="category" id="category-25">
                                  <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                                    Bình hoa
                                  </a>
                                </li>
                                <li class="category" id="category-26">
                                  <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                                    Hoa Valentine
                                  </a>
                                </li>
                                <li class="category" id="category-26">
                                  <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                                    Hoa tết
                                  </a>
                                </li>
                                <li class="category" id="category-26">
                                  <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                                    Kệ hoa Chúc mừng
                                  </a>
                                </li>
                                <li class="category" id="category-26">
                                  <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                                    Kệ hoa Chia buồn
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                        <ul class="sub-cat-mobile" data-depth="1">
                          <li class="category" id="category-14">
                            <a class="dropdown-item dropdown-submenu" href="{{ route('product.index') }}" data-depth="1">
                              <span class="pull-xs-right hidden-lg-up">
                                <span class="navbar-toggler collapse-icons">
                                  <i class="fa-icon add">&nbsp;</i>
                                  <i class="fa-icon remove">&nbsp;</i>
                                </span>
                              </span>
                              Hoa tươi cắt cành
                            </a>
                          </li>
                          <li class="category" id="category-14">
                            <a class="dropdown-item dropdown-submenu" href="{{ route('product.index') }}" data-depth="1">
                              <span class="pull-xs-right hidden-lg-up">
                                <span class="navbar-toggler collapse-icons">
                                  <i class="fa-icon add">&nbsp;</i>
                                  <i class="fa-icon remove">&nbsp;</i>
                                </span>
                              </span>
                              Chậu cây/ Hoa tiểu cành
                            </a>
                          </li>
                          <li class="category" id="category-14">
                            <a class="dropdown-item dropdown-submenu" href="{{ route('product.index') }}" data-depth="1">
                              <span class="pull-xs-right hidden-lg-up">
                                <span class="navbar-toggler collapse-icons">
                                  <i class="fa-icon add">&nbsp;</i>
                                  <i class="fa-icon remove">&nbsp;</i>
                                </span>
                              </span>
                              Hoa tươi sự kiện/ tiệc cưới
                            </a>
                          </li>
                        </ul>


                        <!-- <div class="menu-banners">
                    <div class="menu-banner">
                      <img src="img/c/3-0_thumb.jpg" alt="" />
                    </div>
                  </div> -->
                      </div>
                    </li>
                    <li class="category" id="category-6">
                      <a class="dropdown-item" href="{{ route('about') }}" data-depth="0">
                        Giới thiệu
                      </a>
                    </li>
                    <li class="category" id="category-11">
                      <a class="dropdown-item" href="{{ route('blog.index') }}" data-depth="0">
                        Câu chuyện về hoa
                      </a>
                    </li>
                    <li class="link" id="lnk-blog">
                      <a class="dropdown-item" href="{{ route('contact') }}" data-depth="0">
                        Liên hệ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div class="menu col-lg-12 js-top-menu position-static hidden-md-down" id="_desktop_top_menu">

            <ul class="top-menu container" id="top-menu" data-depth="0">
              <li class="category" id="category-3">
                <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="0">
                  <span class="pull-xs-right hidden-lg-up">
                    <span class="navbar-toggler collapse-icons">
                      <i class="fa-icon add">&nbsp;</i>
                      <i class="fa-icon remove">&nbsp;</i>
                    </span>
                  </span>
                  Sản phẩm
                </a>
                <div class="popover sub-menu js-sub-menu collapse sub-menu-container" id="top_sub_menu_22709">
                  <ul class="sub-cat" data-depth="1">
                    <li class="category" id="category-4">
                      <a class="dropdown-item dropdown-submenu" href="{{ route('product.index') }}" data-depth="1">
                        <span class="pull-xs-right hidden-lg-up">
                          <span class="navbar-toggler collapse-icons">
                            <i class="fa-icon add">&nbsp;</i>
                            <i class="fa-icon remove">&nbsp;</i>
                          </span>
                        </span>
                        Lan Hồ Điệp 100% Đà Lạt
                      </a>
                      <div class="" id="top_sub_menu_52970">
                        <ul class="top-menu " data-depth="2">
                          <li class="category" id="category-20">
                            <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                              Lan Hồ Điệp thiết kế cùng lũa
                            </a>
                          </li>
                          <li class="category" id="category-21">
                            <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                              Lan Hồ Điệp thiết kế Bonsai
                            </a>
                          </li>
                          <li class="category" id="category-22">
                            <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                              Lan Hồ Điệp thiết kế nâng cao
                            </a>
                          </li>
                          <li class="category" id="category-22">
                            <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                              Lan Hồ Điệp thiết kế cơ bản
                            </a>
                          </li>
                        </ul>

                      </div>
                    </li>
                  </ul>
                  <ul class="sub-cat" data-depth="1">
                    <li class="category" id="category-5">
                      <a class="dropdown-item dropdown-submenu" href="{{ route('product.index') }}" data-depth="1">
                        <span class="pull-xs-right hidden-lg-up">
                          <span class="navbar-toggler collapse-icons">
                            <i class="fa-icon add">&nbsp;</i>
                            <i class="fa-icon remove">&nbsp;</i>
                          </span>
                        </span>
                        Hoa tươi thành phẩm
                      </a>
                      <div class="" id="top_sub_menu_54766">
                        <ul class="top-menu  " data-depth="2">
                          <li class="category" id="category-23">
                            <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                              Bó hoa
                            </a>
                          </li>
                          <li class="category" id="category-24">
                            <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                              Lẵng/ Giỏ/ Hộp hoa
                            </a>
                          </li>
                          <li class="category" id="category-25">
                            <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                              Bình hoa
                            </a>
                          </li>
                          <li class="category" id="category-26">
                            <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                              Hoa Valentine
                            </a>
                          </li>
                          <li class="category" id="category-26">
                            <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                              Hoa tết
                            </a>
                          </li>
                          <li class="category" id="category-26">
                            <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                              Kệ hoa Chúc mừng
                            </a>
                          </li>
                          <li class="category" id="category-26">
                            <a class="dropdown-item" href="{{ route('product.index') }}" data-depth="2">
                              Kệ hoa Chia buồn
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <ul class="sub-cat column-3" data-depth="1">
                    <li class="category" id="category-14">
                      <a class="dropdown-item dropdown-submenu" href="{{ route('product.index') }}" data-depth="1">
                        <span class="pull-xs-right hidden-lg-up">
                          <span class="navbar-toggler collapse-icons">
                            <i class="fa-icon add">&nbsp;</i>
                            <i class="fa-icon remove">&nbsp;</i>
                          </span>
                        </span>
                        Hoa tươi cắt cành
                      </a>
                    </li>
                    <li class="category" id="category-14">
                      <a class="dropdown-item dropdown-submenu" href="{{ route('product.index') }}" data-depth="1">
                        <span class="pull-xs-right hidden-lg-up">
                          <span class="navbar-toggler collapse-icons">
                            <i class="fa-icon add">&nbsp;</i>
                            <i class="fa-icon remove">&nbsp;</i>
                          </span>
                        </span>
                        Chậu cây/ Hoa tiểu cành
                      </a>
                    </li>
                    <li class="category" id="category-14">
                      <a class="dropdown-item dropdown-submenu" href="{{ route('product.index') }}" data-depth="1">
                        <span class="pull-xs-right hidden-lg-up">
                          <span class="navbar-toggler collapse-icons">
                            <i class="fa-icon add">&nbsp;</i>
                            <i class="fa-icon remove">&nbsp;</i>
                          </span>
                        </span>
                        Hoa tươi sự kiện/ tiệc cưới
                      </a>
                    </li>
                  </ul>


                  <!-- <div class="menu-banners">
                    <div class="menu-banner">
                      <img src="img/c/3-0_thumb.jpg" alt="" />
                    </div>
                  </div> -->
                </div>
              </li>
              <li class="category" id="category-6">
                <a class="dropdown-item" href="{{ route('about') }}" data-depth="0">
                  Giới thiệu
                </a>
              </li>
              <li class="category" id="category-11">
                <a class="dropdown-item" href="{{ route('blog.index') }}" data-depth="0">
                  Câu chuyện về hoa
                </a>
              </li>
              <li class="link" id="lnk-blog">
                <a class="dropdown-item" href="{{ route('contact') }}" data-depth="0">
                  Liên hệ
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
    @if(Session::has('success'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      {{Session::get('success')}}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif
    @if ($errors->any())
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        @foreach ($errors->all() as $error)
        {{ $error }}
        @endforeach
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif
    @if ($errors->has('g-recaptcha-response'))
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      {{ $errors->first('g-recaptcha-response') }}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif
    <!-- @if ($errors->has('phone'))
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      Số điện thoại không hợp lệ!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif -->

  </header>
  <!--================Header Menu Area =================-->
  <section id="wrapper">
    {{ $slot }}
  </section>
  <!--================ start footer Area  =================-->
  <footer id="footer">

    <div class="footer-before">
      <div class="container">



      </div>
    </div>
    <div class="footer-container">
      <div class="container">
        <div class="row footer">

          <div class="block-contact col-md-3 links wrapper dropdown">
            <h3 class="text-uppercase block-contact-title hidden-sm-down"><a href="#">Store information</a></h3>
            <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-controls="collapseExample">
              <div class="title clearfix hidden-md-up">
                <span class="h3">Thông tin cửa hàng</span>
                <span class="pull-xs-right">
                  <span class="navbar-toggler collapse-icons">
                    <i class="fa-solid fa-caret-down add"></i>
                    <i class="fa-solid fa-caret-up remove"></i>
                  </span>
                </span>
              </div>
            </a>
            <div class="footer-logo" style="background: url({{ asset('assets/logo1x.png') }}) no-repeat scroll 0 0 transparent;"></div>
            <ul class="collapse collapse-footer" id="collapseExample">
              <li>
                <i class="fa-solid fa-location-dot"></i>
                <span>97 Nguyễn Khuyến, Phường Quốc Tử Giám, Đống Đa, Hà Nội</span>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <span>0916655986 - 0917118688</span>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <span>sales@yourcompany.com</span>
              </li>
            </ul>
          </div>
          <div class="col-md-3 links block">
            <h3 class="h3 hidden-md-down">Sản phẩm</h3>
            <div class="title h3 block_title hidden-lg-up" href="#footer_sub_menu_41269" data-bs-toggle="collapse">
              <span class="">Sản phẩm</span>
              <span class="pull-xs-right">
                <span class="navbar-toggler collapse-icons">
                  <i class="fa-solid fa-caret-down add"></i>
                  <i class="fa-solid fa-caret-up remove"></i>
                </span>
              </span>
            </div>
            <div>
              <ul id="footer_sub_menu_41269" class="collapse block_content collapse-footer">
                <li>
                  <a id="link-product-page-prices-drop-1" class="cms-page-link" href="{{ route('product.index') }}" title="Our special products">
                    Lan hồ điệp 100% Đà Lạt
                  </a>
                </li>
                <li>
                  <a id="link-product-page-new-products-1" class="cms-page-link" href="{{ route('product.index') }}" title="Our new products">
                    Hoa tươi thành phẩm
                  </a>
                </li>
                <li>
                  <a id="link-product-page-best-sales-1" class="cms-page-link" href="{{ route('product.index') }}" title="Our best sales">
                    Hoa tươi cắt cành
                  </a>
                </li>
                <li>
                  <a id="link-static-page-contact-1" class="cms-page-link" href="{{ route('product.index') }}" title="Use our form to contact us">
                    Chậu cây/ Hoa tiểu cảnh
                  </a>
                </li>
                <li>
                  <a id="link-static-page-sitemap-1" class="cms-page-link" href="{{ route('product.index') }}" title="Lost ? Find what your are looking for">
                    Hoa tươi sự kiện/ tiệc cưới
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 links block">
            <h3 class="h3 hidden-md-down">Chính sách</h3>
            <div class="title h3 block_title hidden-lg-up" href="#footer_sub_menu_49772" data-bs-toggle="collapse">
              <span class="">Chính sách</span>
              <span class="pull-xs-right">
                <span class="navbar-toggler collapse-icons">
                  <i class="fa-solid fa-caret-down add"></i>
                  <i class="fa-solid fa-caret-up remove"></i>
                </span>
              </span>
            </div>
            <ul id="footer_sub_menu_49772" class="collapse block_content collapse-footer">
              <li>
                <a id="link-cms-page-1-2" class="cms-page-link" href="{{ route('policy.corpo') }}" title="Chính sách khách hàng doanh nghiệp">
                  Chính sách khách hàng doanh nghiệp
                </a>
              </li>
              <li>
                <a id="link-cms-page-2-2" class="cms-page-link" href="{{ route('policy.delivery') }}" title="Chính sách giao hàng">
                  Chính sách giao hàng
                </a>
              </li>
              <li>
                <a id="link-cms-page-3-2" class="cms-page-link" href="{{ route('policy.warranty') }}" title="Chính sách bảo hành, đổi trả">
                  Chính sách bảo hành, đổi trả
                </a>
              </li>
            </ul>
            <!-- <h3 class="h3 hidden-md-down">Fanpage</h3>
            <div class="fb-page" data-href="https://www.facebook.com/profile.php?id=100064056821362" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/profile.php?id=100064056821362" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/profile.php?id=100064056821362">Gia Flowers</a></blockquote></div> -->
          </div>
          <div class="col-md-3 links block">
            <h3 class="h3 hidden-md-down">Fanpage</h3>
            <div class="title h3 block_title hidden-lg-up" data-bs-target="#footer_sub_menu_49772" data-bs-toggle="collapse">
              <span class="">Fanpage</span>
            </div>
            <div class="fb-page" data-href="https://www.facebook.com/profile.php?id=100064056821362" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
              <blockquote cite="https://www.facebook.com/profile.php?id=100064056821362" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/profile.php?id=100064056821362">Gia Flowers</a></blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="footer-after">
      <div class="container">
        <div class="footer-bottom-inner">
          <div class="block-social">
            <ul>
              <li class="facebook"><a href="https://www.facebook.com/profile.php?id=100064056821362" target="_blank"><span>Facebook</span></a></li>
              <li class="tiktok"><a href="#" target="_blank"><span>Tiktok</span></a></li>
              <li class="instagram"><a href="https://www.instagram.com/_giaflowers_/" target="_blank"><span>Instagram</span></a></li>
            </ul>
          </div>
          <div class="copyright">
            <p class="">
              © Bản quyền thuộc về Gia Flowers
            </p>
          </div>
        </div>
      </div>
    </div>


  </footer>
  <!--================ End footer Area  =================-->

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha512-3P8rXCuGJdNZOnUx/03c1jOTnMn3rP63nBip5gOP2qmUh5YAdVAvFZ1E+QLZZbC1rtMrQb+mah3AfYW11RUrWA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js" integrity="sha512-57oZ/vW8ANMjR/KQ6Be9v/+/h6bq9/l3f0Oc7vn6qMqyhvPd1cvKBRWWpzu0QoneImqr2SkmO4MSqU+RpHom3Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  <script>
    var quickviewUrl = @json(route('quickview'));
    $('.quick-view').data('quickview-url', quickviewUrl);
  </script>
  <script src={{ asset("js/script.js") }}></script>

  @stack('footer')
</body>

</html>