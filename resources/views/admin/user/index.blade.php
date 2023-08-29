<x-admin-layout>
  <div class="container">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-header">Khách hàng</div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Tên</th>
                  <th scope="col">Email</th>
                  <th scope="col">Số điện thoại</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                @foreach($user as $u)
                <tr>
                  <th scope="row">{{ $u->name }}</th>
                  <td>{{ $u->email }}</td>
                  <td>{{ $u->phone }}</td>
                  <td>
                    <a href="{{ route('admin.user.view',['id'=> $u->id]) }}"><button type="button" class="btn btn-info mb-2">Xem thêm</button></a>
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