<x-admin-layout>
  <div class="container">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-header">Đơn hàng</div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Tên</th>
                  <th scope="col">Email</th>
                  <th scope="col">Ngày</th>
                  <th scope="col">Tổng đơn hàng</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                @foreach($order as $o)
                <tr>
                  <th scope="row">{{ $o->name }}</th>
                  <td>{{ $o->email }}</td>
                  <td>{{ $o->created_at->format('d/m/Y') }}</td>
                  <td>{{number_format($o->total_amount, 0, ',', '.')}}</td>
                  <td>{{ $o->status }}</td>
                  <td>
                    <a href="{{ route('admin.order.edit',['id'=> $o->id]) }}"><button type="button" class="btn btn-info mb-2">Sửa</button></a>
                    <a href="{{ route('admin.order.delete',['id'=> $o->id]) }}"><button type="button" class="btn btn-danger mb-2">Xóa</button></a>

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
</x-admin-layout>