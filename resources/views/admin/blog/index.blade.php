<x-admin-layout>
  <div class="container">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-header">Blog</div>
        <div class="card-body">
          <a href="{{ route('admin.blog.create') }}" ><button type="button" class="btn btn-primary mb-2">Thêm mới</button></a>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Tiêu đề</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                @foreach($blog as $b)
                <tr>
                  <th scope="row">{{ $b->title }}</th>
                  <td>{{ $b->status }}</td>
                  <td>
                    <a href="{{ route('admin.blog.edit',['id'=> $b->id]) }}"><button type="button" class="btn btn-info mb-2">Sửa</button></a>
                    <a href="{{ route('admin.blog.delete',['id'=> $b->id]) }}"><button type="button" class="btn btn-danger mb-2">Xóa</button></a>
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