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
          <a itemprop="item" href="{{ route('policy.warranty') }}">
            <span itemprop="name">Chính sách doanh nghiệp</span>
          </a>
          <meta itemprop="position" content="2">
        </li>
      </ol>
    </div>
  </nav>
  <div class="container about-main">
      <h3>Chính sách khách hàng doanh nghiệp</h3>
      <ul>
        <li>Chiết khấu lên đến 10% đối với khách hàng doanh nghiệp thường xuyên</li>
        <li>Có chương trình tri ân khách hàng lớn hàng năm</li>
        <li>Quy trình chiết khấu linh hoạt</li>
        <li>Cung cấp hóa đơn chứng từ đầy đủ</li>
        <li>Hỗ trợ thiết kế biển, thiệp chúc mừng kèm logo thương hiệu</li>
        <li>Miễn phí ship 6 quận nội thành Hà Nội: Ba Đình, Hoàn Kiếm, Đống Đa, Hai Bà Trưng, Cầu Giấy, Thanh Xuân</li>
      </ul>
  </div>
</x-app-layout>