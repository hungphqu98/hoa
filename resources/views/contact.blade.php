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
          <a itemprop="item" href="{{ route('contact') }}">
            <span itemprop="name">Liên hệ</span>
          </a>
          <meta itemprop="position" content="2">
        </li>
      </ol>
    </div>
  </nav>
  @if(Session::has('success'))
    <div class="alert alert-success">
      {{Session::get('success')}}
    </div>
  @endif
  @if(Session::has('error'))
    <div class="alert alert-success">
      {{Session::get('error')}}
    </div>
  @endif
  <div class="container">
    <div id="columns_inner">
      <div id="left-column" class="col-xs-12 col-sm-3" style="width:24.4%">
        <div id="contact-rich" class="contact-rich block">
          <h4 class="block_title hidden-md-down">Thông tin cửa hàng</h4>
          <h4 class="block_title hidden-lg-up" data-target="#contact_rich_toggle" data-toggle="collapse"> Thông tin cửa hàng <span class="pull-xs-right"> <span class="navbar-toggler collapse-icons"> <i class="fa-icon add"></i> <i class="fa-icon remove"></i> </span> </span> </h4>
          <div id="contact_rich_toggle" class="block_content collapse">
            <div class="">
              <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
              <div class="data">97 Nguyễn Khuyến, Phường Quốc Tử Giám, Đống Đa, Hà Nội</div>
            </div>
            <hr />
            <div class="">
              <div class="icon"><i class="fa-solid fa-phone"></i></div>
              <div class="data"> Call us:<br /> <a href="tel:000-000-0000">0916655986 - 0917118688</a> </div>
            </div>
            <hr />
            <div class="">
              <div class="icon"><i class="fa-solid fa-envelope"></i></div>
              <div class="data email"> Email us:<br /> <a href="mailto:sales@yourcompany.com">sales@yourcompany.com</a> </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content-wrapper" class="left-column col-xs-12 col-sm-8 col-md-9" style="width:75.6%">
        <section id="main">
          <section id="content" class="page-content card card-block">
            <section class="contact-form">
              <form action="{{ route('contact.store') }}" method="post" enctype="multipart/form-data">
                @csrf
                <section class="form-fields">
                  <div class="form-group row">
                    <div class="col-md-9 col-md-offset-3">
                      <h3>Liên hệ với chúng tôi</h3>
                    </div>
                  </div>
                  <div class="form-group row"> <label class="col-md-3 form-control-label">Họ tên</label>
                    <div class="col-md-6"> <input class="form-control" name="name" type="text" value="" placeholder="" required> </div>
                  </div>
                  <div class="form-group row"> <label class="col-md-3 form-control-label">Số điện thoại</label>
                    <div class="col-md-6"> <input class="form-control" name="phone" type="text" value="" required> </div>
                  </div>
                  <div class="form-group row"> <label class="col-md-3 form-control-label">Địa chỉ email</label>
                    <div class="col-md-6"> <input class="form-control" name="mail" type="email" value="" placeholder="your@email.com" required> </div>
                  </div>
                  <div class="form-group row"> <label class="col-md-3 form-control-label">Nội dung</label>
                    <div class="col-md-9"> <textarea class="form-control" name="details" placeholder="Chúng tôi có thể giúp được gì?" rows="3" required></textarea> </div>
                  </div>
                  <div class="form-group row">
                    <div class="offset-md-3"> </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12 d-flex justify-content-end">
                      <input type="submit" value="Gửi" class="btn btn-primary btn-submit btn-md text-white">
                    </div>
                  </div>
                </section>
              </form>
            </section>
          </section>
        </section>
      </div>
    </div>
  </div>
</x-app-layout>