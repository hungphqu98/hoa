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
          <a itemprop="item" href="{{ route('policy.delivery') }}">
            <span itemprop="name">Chính sách giao hàng</span>
          </a>
          <meta itemprop="position" content="2">
        </li>
      </ol>
    </div>
  </nav>
  <div class="about-main" style="background-image: url('{{ asset('assets/back.png')}}')">
  <div class="container">
      <h3>Chính sách giao hàng</h3>
      <ul>
        <li>Miễn phí giao hàng đối với đơn hoa tươi > 500k trong bán kính 3km</li>
        <li>Miễn phí giao hàng đối với đơn hoa Lan Hồ Điệp > 1000k trong bán kính 3km</li>
        <li>Các đơn hàng trên 3km sẽ được áp dụng phí ship theo app giao hàng</li>
        <li>Có dịch vụ ship ngoại tỉnh đối với các đơn hoa tươi > 20.000k, phí ship sẽ được thông báo khi khách báo vị trí giao hàng</li>
      </ul>
  </div>
  </div>
</x-app-layout>