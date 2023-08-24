<x-app-layout>
  <nav data-depth="3" class="breadcrumb">
    <div class="container">
      <ol itemscope itemtype="http://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a itemprop="item" href="{{ route('home') }}"> <span itemprop="name">Trang chủ</span> </a>
          <meta itemprop="position" content="1">
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a itemprop="item" href="{{ route('product.index') }}"> <span itemprop="name">Câu chuyện về hoa</span> </a>
          <meta itemprop="position" content="2">
        </li>
      </ol>
    </div>
  </nav>
  <div class="container view-container">
    <div id="columns_inner">
      <div id="content-wrapper">
        <section id="main" itemscope itemtype="https://schema.org/Product">
          @foreach($blog as $b)
            <h3>{{ $b->title }}</h3>
            <div class="blog-content">
            {!! $b->details !!}
            </div>
            
          @endforeach
          </section>
      </div>
    </div>
  </div>
</x-app-layout>