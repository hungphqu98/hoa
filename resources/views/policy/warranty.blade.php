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
            <span itemprop="name">Chính sách bảo hành</span>
          </a>
          <meta itemprop="position" content="2">
        </li>
      </ol>
    </div>
  </nav>
  <div class="container about-main">
      <h3>Chính sách bảo hành, đổi trả</h3>
      <ul>
        <li>Quý khách có thể thực hiện đổi trả hàng trong thời hạn 24 giờ kể từ khi nhận hàng đối với Lan Hồ Điệp và 05 giờ kể từ khi nhận hàng đối với sản phẩm Hoa tươi. Quy trình đổi trả hàng được chuyển về đia chỉ cửa hàng của Gia Flowers.</li>
        <li>Gia Flowers sẽ thực hiện các bước tiếp theo để kiểm tra chất lượng sản phẩm và tiến hành đổi trả hàng hoặc hoàn tiền theo yêu cầu của quý khách.</li>
      </ul>
      <p>Điều kiện đổi trả hàng đối với lan hồ điệp:</p>
      <ul>
        <li>Sản phẩm hoa còn tươi, không bị héo, biến dạng, đổi màu</li>
        <li>Đầy đủ các bộ phận, phụ kiện, chi tiết khác, hóa đơn… phải còn đầy đủ và nguyên vẹn</li>
        <li>Không bị dơ bẩn, trầy xước, bể vỡ, hư hỏng, có mùi lạ</li>
      </ul>
      <p>Điều kiện đổi trả hàng đối với hoa tươi:</p>
      <ul>
        <li>Sản phẩm không bị biến dạng, đổi màu, dập nát</li>
        <li>Đầy đủ các bộ phận, phụ kiện, chi tiết khác, hóa đơn… phải còn đầy đủ và nguyên vẹn</li>
        <li>Không bị dơ bẩn, trầy xước, bể vỡ, hư hỏng, có mùi lạ</li>
      </ul>
  </div>
</x-app-layout>