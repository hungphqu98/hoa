<x-app-layout>
  <nav data-depth="3" class="breadcrumb">
    <div class="container">
      <ol itemscope itemtype="http://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a itemprop="item" href="{{ route('home') }}"> <span itemprop="name">Trang chủ</span> </a>
          <meta itemprop="position" content="1">
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a itemprop="item" href="{{ route('blog.index') }}"> <span itemprop="name">Câu chuyện về hoa</span> </a>
          <meta itemprop="position" content="2">
        </li>
      </ol>
    </div>
  </nav>
  <div class="container view-container">
    <div id="columns_inner">
      <div id="content-wrapper" class="left-column">
        <div id="blog-listing" class="blogs-container box">
          <h1 class="blog-heading">Mới nhất</h1>
          <div class="inner">
            <div class="secondary-blog">
              @foreach($blogs as $b)
              <div class="col-lg-6">
                <article class="blog-item">
                  <div class="blog-image-meta">
                    <div class="blog-image"> <a href="{{ route('blog.view',['slug'=> $b->slug]) }}" title="{{ $b->title }}" class="link"> <img src="{{ asset('assets/blog/' . $b->thumbnail) }}" title="{{ $b->title }}" alt="" class="img-fluid" /> </a>
                      <span class="blog-created">
                        <i class="fa fa-calendar"></i>
                        <time class="date">
                          <span class="blog-day">{{ $b->created_at->format('d/m/Y') }}</span>
                        </time>
                      </span>
                    </div>
                  </div>
                  <div class="blog-content-wrap">
                    <div class="blog-meta"> </div>
                    <h4 class="title"><a href="{{ route('blog.view',['slug'=> $b->slug]) }}" title="{{ $b->title }}">{{ $b->title }}</a></h4>
                  </div>
                </article>
              </div>
              @endforeach
            </div>
            <!-- <div class="ps_sortPagiBar clearfix bottom-line">
          <div id="pagination" class="pagination float-xs-left clearfix">
            <ul class="pagination">
              <li id="pagination_previous" class="previous disabled pagination_previous"><span class="previous"><i class="fa fa-long-arrow-left"></i> </span></li>
              <li class="active current"><span><span>1</span></span></li>
              <li><a href="indexb7f0.html?fc=module&amp;module=psblog&amp;controller=list&amp;id_lang=1&amp;p=2"><span>2</span></a></li>
              <li id="pagination_next" class="pagination_next"> <a href="indexb7f0.html?fc=module&amp;module=psblog&amp;controller=list&amp;id_lang=1&amp;p=2" class="next"><i class="fa fa-long-arrow-right"></i></a> </li>
            </ul>
          </div>
          <div class="product-count float-xs-right"> Showing 1 - 6 of 7 items </div>
        </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>

</x-app-layout>