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
      <div class="badge badge-success">&#215;</div>
          <h2>Có lỗi xảy ra</h2>
          <p></p>
          <a href="{{ route('home') }}">&#9664; Quay về trang chủ</a>
      </div>
      </div>
  </div>
</x-app-layout>