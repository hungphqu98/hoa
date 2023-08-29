<x-admin-layout>
  <div class="container">
    <div class="page-title">
      <h3>Khách hàng</h3>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">Thông tin khách hàng</div>
          <div class="card-body">
            @foreach($user as $u)
              <div class="mb-3">
                <label for="name" class="form-label">Tên</label>
                <input type="text" name="name" class="form-control" value="{{ $u->name }}" readonly>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" name="email" class="form-control" value="{{ $u->email }}" readonly>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Số điện thoại</label>
                <input type="text" name="email" class="form-control" value="{{ $u->phone }}" readonly>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Địa chỉ</label>
                <input type="text" name="email" class="form-control" value="{{ $u->address }}" readonly>
              </div>
            @endforeach
          </div>
        </div>
      </div>
    </div>
    </div>
</x-admin-layout>