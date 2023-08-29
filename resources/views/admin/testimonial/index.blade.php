<x-admin-layout>
  <div class="container">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-header">Khách hàng tiêu biểu</div>
        <div class="card-body">
          <a href="{{ route('admin.testimonial.create') }}" ><button type="button" class="btn btn-primary mb-2">Thêm mới</button></a>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Tên</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                @foreach($testimonial as $t)
                <tr>
                  <th scope="row">{{ $t->name }}</th>
                  <td>{{ $t->status }}</td>
                  <td>
                    <a href="{{ route('admin.testimonial.edit',['id'=> $t->id]) }}"><button type="button" class="btn btn-info mb-2">Sửa</button></a>
                    <a href="{{ route('admin.testimonial.delete',['id'=> $t->id]) }}"><button type="button" class="btn btn-danger mb-2">Xóa</button></a>
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