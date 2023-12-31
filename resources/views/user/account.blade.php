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
          <div class="card-header">Thông tin khách hàng</div>

          <div class="card-body">
            <form method="POST" action="{{ route('user.update', $user) }}">
              @csrf
              @method('PUT')
              <div class="row mb-3">
                <label for="name" class="col-md-4 col-form-label text-md-end">Tên</label>

                <div class="col-md-6">
                  <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ $user->name }}" required autocomplete="name" autofocus>

                  @error('name')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-end">Email</label>

                <div class="col-md-6">
                  <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $user->email }}" required autocomplete="email">

                  @error('email')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="row mb-3">
                <label for="phone" class="col-md-4 col-form-label text-md-end">Số điện thoại</label>

                <div class="col-md-6">
                  <input id="phone" type="number" class="form-control @error('phone') is-invalid @enderror" name="phone" value="{{ $user->phone }}" autocomplete="phone">

                  @error('phone')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="row mb-3">
                <label for="address" class="col-md-4 col-form-label text-md-end">Địa chỉ</label>

                <div class="col-md-6">
                  <input id="address" type="text" class="form-control @error('address') is-invalid @enderror" name="address" value="{{ $user->address }}" autocomplete="address">

                  @error('address')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Cập nhật thông tin
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Thay đổi mật khẩu</div>

          <div class="card-body">

            <form method="POST" action="{{ route('user.password') }}">
              @csrf

              <div class="row mb-3">
                <label for="current_password" class="col-md-4 col-form-label text-md-end">Mật khẩu hiện tại</label>

                <div class="col-md-6">
                  <input id="current_password" type="password" class="form-control @error('current_password') is-invalid @enderror" name="current_password" required >
                </div>
              </div>

              <div class="row mb-3">
                <label for="new_password" class="col-md-4 col-form-label text-md-end">Mật khẩu mới</label>

                <div class="col-md-6">
                  <input id="new_password" type="password" class="form-control @error('new_password') is-invalid @enderror" name="new_password" required>
                </div>
              </div>

              <div class="row mb-3">
                <label for="password_confirmation" class="col-md-4 col-form-label text-md-end">Xác nhận mật khẩu</label>

                <div class="col-md-6">
                  <input id="password_confirmation" type="password" class="form-control" name="password_confirmation" required >
                </div>
              </div>

              <div class="row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Thay đổi mật khẩu
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</x-app-layout>