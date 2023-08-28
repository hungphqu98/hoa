<x-admin-layout>
  <div class="container">
    <div class="page-title">
      <h3>Đơn hàng</h3>
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
                <input type="text" name="name" class="form-control" value="{{ $o->name }}"  readonly required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" name="email" class="form-control" value="{{ $o->email }}" readonly required>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Số điện thoại</label>
                <input type="text" name="phone" class="form-control" value="{{ $o->phone }}" readonly required>
              </div>
              <div class="mb-3">
                <label for="delivery_address" class="form-label">Địa chỉ nhận hàng</label>
                <input type="text" name="delivery_address" class="form-control" value="{{ $o->delivery_address }}" readonly required>
              </div>
              <div class="mb-3">
                <label for="total_amount" class="form-label">Tổng đơn hàng</label>
                <input type="text" name="total_amount" class="form-control" value="{{ number_format($o->total_amount, 0, ',', '.') }}" readonly required>
              </div>
              <div class="mb-3">
                <label for="date" class="form-label">Ngày đặt hàng</label>
                <input type="text" name="date" class="form-control" value="{{ $o->created_at->format('d/m/Y') }}" readonly required>
              </div>
              <div class="mb-3">
                <label for="date" class="form-label">Chi tiết đơn hàng</label>
                  @foreach($detail as $det)
                  <p>{{$det->name}}: {{(number_format($det->item_price, 0, ',', '.'))}}x{{$det->quantity}}</p>
                  @endforeach
              </div>
              <div class="mb-3">
                <label for="payment" class="form-label">Phương thức thanh toán</label>
                <input type="text" name="payment" class="form-control" value="{{ $o->payment }}" readonly required>
              </div>
              <div class="mb-3">
                <label for="payment" class="form-label">Trạng thái</label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="status" id="input" value="DRAFT" {{ $o->status === 'DRAFT' ? 'checked' : '' }}>
                  Đang xử lý
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="status" id="input" value="RECEIVED" {{ $o->status === 'RECEIVED' ? 'checked' : '' }}>
                  Đã nhận được đơn hàng
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="status" id="input" value="PAID" {{ $o->status === 'PAID' ? 'checked' : '' }}>
                  Đã thanh toán 
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="status" id="input" value="DELIVERING" {{ $o->status === 'DELIVERING' ? 'checked' : '' }}>
                  Đang giao hàng
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="status" id="input" value="DELIVERED" {{ $o->status === 'DELIVERED' ? 'checked' : '' }}>
                  Đã giao hàng thành công
                </label>
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