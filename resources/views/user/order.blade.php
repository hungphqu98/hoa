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
  <div class="container space">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Lịch sử mua hàng</div>
          @foreach($orders as $o)
          <div class="accordion accordion-flush" id="accordionExample">
            <div class="accordion-item">
              <h3 class="accordion-header" id="heading{{$o->id}}">
                <div class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{$o->id}}" aria-expanded="true" aria-controls="collapse{{$o->id}}">
                  <span>{{ $o->created_at->format('d/m/Y') }}</span>
                  <span class="status-badge badge bg-primary">@switch($o->status)
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
                      @endswitch</span>
                </div>
              </h3>
              <div id="collapse{{$o->id}}" class="accordion-collapse collapse" aria-labelledby="heading{{$o->id}}">
                <div class="accordion-body">
                <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Đơn giá</th>
                  </tr>
                </thead>
                <tbody>
                  @foreach($detail->where('order_id', $o->id) as $d)
                  <tr data-bs-toggle="collapse" data-bs-target="#collapse{{$o->id}}" aria-expanded="false" aria-controls="collapse{{$o->id}}">
                    <th scope="row">{{$d->name}}</th>
                    <td>{{$d->quantity}}</td>
                    <td>{{(number_format($d->item_price, 0, ',', '.'))}}</td>
                  </tr>
                  @endforeach
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2">Tổng cộng</td>
                    <td>{{number_format($o->total_amount, 0, ',', '.')}}</td></tr>
                </tfoot>
              </table>
                </div>
              </div>
            </div>

          </div>
          @endforeach
        </div>

      </div>
    </div>
  </div>
</x-app-layout>