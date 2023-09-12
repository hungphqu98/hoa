<x-admin-layout>
  <div class="container">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-header">Sản phẩm</div>
        <div class="card-body">
          <a href="{{ route('admin.product.create') }}" ><button type="button" class="btn btn-primary mb-2">Thêm mới</button></a>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Tên</th>
                  <th scope="col">Giá</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                @foreach($product as $p)
                <tr>
                  <th scope="row">{{ $p->name }}</th>
                  <td>{{ number_format($p->price, 0, ',', '.') }}đ</td>
                  <td>
                    <a href="{{ route('admin.product.edit',['id'=> $p->id]) }}"><button type="button" class="btn btn-info mb-2">Sửa</button></a>
                    <a href="{{ route('admin.product.delete',['id'=> $p->id]) }}"><button type="button" class="btn btn-danger mb-2">Xóa</button></a>
                  </td>
                </tr>
                @endforeach
              </tbody>
            </table>
            {{ $product->links() }}
          </div>
        </div>
      </div>
    </div>
  </div>
</x-admin-layout>