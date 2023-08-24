<x-admin-layout>
  <div class="container">
    <div class="page-title">
      <h3>Blog</h3>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">Thông tin đơn hàng</div>
          <div class="card-body">
            @foreach($order as $o)
            <form action="{{ route('admin.order.update' ,['id' => $o->id]) }}" method="post" enctype="multipart/form-data">
              @csrf
              <div class="mb-3">
                <label for="name" class="form-label">Tên</label>
                <input type="text" name="name" class="form-control" value="{{ $o->name }}" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" name="email" class="form-control" value="{{ $o->email }}" required>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Số điện thoại</label>
                <input type="text" name="phone" class="form-control" value="{{ $o->phone }}" required>
              </div>
              <div class="mb-3">
                <label for="delivery_address" class="form-label">Địa chỉ nhận hàng</label>
                <input type="text" name="delivery_address" class="form-control" value="{{ $o->delivery_address }}" required>
              </div>
              <div class="mb-3">
                <label for="total_amount" class="form-label">Tổng đơn hàng</label>
                <input type="text" name="total_amount" class="form-control" value="{{ number_format($o->total_amount, 0, ',', '.') }}" required>
              </div>
              <div class="mb-3">
                <label for="date" class="form-label">Ngày đặt hàng</label>
                <input type="text" name="date" class="form-control" value="{{ $o->created_at->format('d/m/Y') }}" required>
              </div>
              <div class="mb-3">
                <label for="date" class="form-label">Chi tiết đơn hàng</label>
                <textarea>
                  @foreach($detail as $det)
                  {{$det->name}}({{$det->item_price}})*{{$det->quantity}}
                  @endforeach
                </textarea>
              </div>
              <div class="mb-3">
                <label for="payment" class="form-label">Phương thức thanh toán</label>
                <input type="text" name="payment" class="form-control" value="{{ $o->payment }}" required>
              </div>
              <div class="mb-3">
                <input type="submit" class="btn btn-primary">
              </div>
            </form>
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </div>
</x-admin-layout>