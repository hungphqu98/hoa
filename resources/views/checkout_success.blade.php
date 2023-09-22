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
    <div class="col-12">
      <div class="text-center">
        <div class="checkout-success">
          <div class="success-badge">
            <i class="fas fa-check-circle"></i>
          </div>
          <h2 class="success-title">Đơn hàng đã được tạo thành công!</h2>
          <p class="success-info">Cửa hàng sẽ liên lạc lại với bạn trong thời gian sớm nhất để xác nhận thông tin.</p>
          <a href="{{ route('home') }}" class="back-link"><i class="fas fa-chevron-left"></i> Quay về trang chủ</a>
        </div>
      </div>
    </div>
</x-app-layout>