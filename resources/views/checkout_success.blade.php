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
    <div class="col-12">
      <div class="text-center">
      <div class="badge badge-success">&#10004</div>
          <h2>Đơn hàng đã được tạo thành công</h2>
          <p></p>
          <a href="{{ route('home') }}">Quay về trang chủ</a>
      </div>
      </div>
  </div>
</x-app-layout>