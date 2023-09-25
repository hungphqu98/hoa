<x-app-layout>
  @push('header')
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  @endpush
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
    <div id="columns_inner">
      <div id="content-wrapper">
        <section id="main">
          <div class="cart-grid row">
            <div class="cart-grid-body col-xs-12 col-lg-8">
              <div class="card cart-container">
                <div class="card-block">
                  <h1 class="h1">Thông tin thanh toán</h1>
                </div>
                <hr class="separator">
                <form action="#" method="post" id="checkoutForm">
                  @csrf
                  <div class="cart-overview js-cart" data-refresh-url="">
                    <div class="form-group row "> <label class="col-md-4 form-control-label required"> Họ & tên * </label>
                      <div class="col-md-6"> <input class="form-control" name="name" type="text" value="{{ isset($user) ? $user->name : '' }}"> </div>
                      <div class="col-md-2 form-control-comment"> </div>
                    </div>
                    <div class="form-group row "> <label class="col-md-4 form-control-label required"> Email *</label>
                      <div class="col-md-6"> <input class="form-control" name="email" type="text" value="{{ isset($user) ? $user->email : '' }}" > </div>
                      <div class="col-md-2 form-control-comment"> </div>
                    </div>
                    <div class="form-group row "> <label class="col-md-4 form-control-label required"> Địa chỉ nhận hàng *</label>
                      <div class="col-md-6"> <input class="form-control" name="delivery_address" type="text" value="{{ isset($user) ? $user->address : '' }}" > </div>
                      <div class="col-md-2 form-control-comment"> </div>
                    </div>
                    <div class="form-group row "> <label class="col-md-4 form-control-label required"> Số điện thoại liên hệ *</label>
                      <div class="col-md-6"> <input class="form-control" name="phone" type="tel" value="{{ isset($user) ? $user->phone : '' }}" maxlength="32" > </div>
                      <div class="col-md-2 form-control-comment"> </div>
                    </div>
                    <div class="form-group row "> <label class="col-md-4 form-control-label required"> Ghi chú </label>
                      <div class="col-md-6"> <input class="form-control" name="note" type="text" value=""> </div>
                      <div class="col-md-2 form-control-comment"> </div>
                    </div>
                    <div class="form-group row "> <label class="col-md-4 form-control-label required"> Phương thức thanh toán </label>
                      <div class="col-md-6">
                        <input type="radio" name="payment" value="COD" checked>
                        <label for="COD">Thanh toán khi nhận hàng</label><br>
                        <input type="radio" name="payment" value="BANK">
                        <label for="BANK">Chuyển khoản ngân hàng</label><br>
                      </div>
                      <div class="col-md-2 form-control-comment"> </div>
                    </div>


                  </div>
                  {!! NoCaptcha::display() !!}
                  <button type="button" class="continue btn btn-primary float-end" id="confirmButton">
                    Đặt hàng
                  </button>
                </form>
              </div>
            </div>
            <div class="cart-grid-right col-xs-12 col-lg-4">
              <div class="card cart-summary">
                <div class="cart-detailed-totals">
                  <div class="card-block">
                    <div class="cart-summary-line" id="cart-subtotal-products"> <span class="label js-subtotal"> {{$cart->total_quantity}} sản phẩm </span> <span class="value">{{number_format($cart->total_price, 0, ',', '.')}}</span> </div>
                    <div class="cart-summary-line" id="cart-subtotal-shipping"> <a href="{{ route('cart') }}"><i class="fa-solid fa-chevron-left"></i><span class="label"> Xem giỏ hàng </span></a>
                    </div>
                  </div>
                  <hr class="separator">
                  <div class="card-block">
                    <div class="cart-summary-line cart-total"> <span class="label">Tổng cộng</span> <span class="value">{{number_format($cart->total_price, 0, ',', '.')}}</span> </div>
                    <div class="cart-summary-line"> <small class="label"></small> <small class="value"></small> </div>
                  </div>
                  <hr class="separator">
                </div>
              </div>
              <div id="block-reassurance">
                <ul>
                  <li>
                    <div class="block-reassurance-item"> <a href="{{ route('policy.corpo') }}"><i class="fa-solid fa-user-shield"></i> <span class="h6">Chính sách khách hàng doanh nghiệp</span></a> </div>
                  </li>
                  <li>
                    <div class="block-reassurance-item"> <a href="{{ route('policy.delivery') }}"><i class="fa-solid fa-truck"></i> <span class="h6">Chính sách giao hàng</span></a> </div>
                  </li>
                  <li>
                    <div class="block-reassurance-item"> <a href="{{ route('policy.warranty') }}"><i class="fa-solid fa-right-left"></i> <span class="h6">Chính sách đổi trả</span></a>  </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="confirmationModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmationModalLabel">Xác nhận đặt hàng</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Bạn có chắc chắn muốn đặt hàng không?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
          <button type="button" class="btn btn-primary" id="confirmOrder">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
  @push('footer')
  <script>
  $(document).ready(function() {
    // Handle click event on the submit button
    $('#confirmButton').click(function() {
      // Display the confirmation modal
      $('#confirmationModal').modal('show');
    });

    // Handle click event on the "Xác nhận" button in the modal
    $('#confirmOrder').click(function() {
      // Close the modal
      $('#confirmationModal').modal('hide');

      // Submit the form when confirmed
      $('#checkoutForm').submit();
    });
  });
</script>
  @endpush
</x-app-layout>