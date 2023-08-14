<x-admin-layout>
  <div class="container">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-header">Danh mục</div>
        <div class="card-body">
          <a href="{{ route('admin.category.create') }}" ><button type="button" class="btn btn-primary mb-2">Thêm mới</button></a>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Tên</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                @foreach($category as $c)
                <tr>
                  <th scope="row">{{ $c->name }}</th>
                  <td>
                    <a href="{{ route('admin.category.edit',['id'=> $c->id]) }}"><button type="button" class="btn btn-info mb-2">Sửa</button></a>
                    <a href="{{ route('admin.category.delete',['id'=> $c->id]) }}"><button type="button" class="btn btn-danger mb-2">Xóa</button></a>
                  </td>
                </tr>
                @endforeach
              </tbody>
              
            </table>
            {{ $category->links() }}
          </div>
        </div>
      </div>
    </div>
  </div>
</x-admin-layout>