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
          <a itemprop="item" href="{{ route('user.account') }}">
            <span itemprop="name">Thông tin khách hàng</span>
          </a>
          <meta itemprop="position" content="2">
        </li>
      </ol>
    </div>
  </nav>
  <div class="container space">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Lịch sử mua hàng</div>

          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Ngày</th>
                    <th scope="col">Tổng giá trị</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  @foreach($orders as $o)
                  <tr>
                    <th scope="row">{{ $o->created_at->format('d/m/Y') }}</th>
                    <td>{{number_format($o->total_amount, 0, ',', '.')}}</td>
                    <td>
                      @switch($o->status)
                      @case('DRAFT')
                      Chờ xử lý
                      @break
                      @case('PAID')
                      Đã thanh toán
                      @break
                      @case('DELIVERING')
                      Đang giao hàng
                      @break
                      @case('DELIVERED')
                      Đã giao hàng thành công
                      @break
                      @default
                      {{ $o->status }}
                      @endswitch
                    </td>
                    <td>
                    </td>
                  </tr>
                  @endforeach
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</x-app-layout>