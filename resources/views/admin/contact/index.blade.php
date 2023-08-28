<x-admin-layout>
  <div class="container">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-header">Liên hệ</div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Tên</th>
                  <th scope="col">Nội dung</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                @foreach($contact as $c)
                <tr>
                  <th scope="row">{{ $c->name }}</th>
                  <td>{{ $c->details }}</td>
                  <td>{{ $c->status }}</td>
                  <td>
                    <a href="{{ route('admin.contact.edit',['id'=> $c->id]) }}"><button type="button" class="btn btn-info mb-2">Sửa</button></a>
                    <!-- <a href="{{ route('admin.contact.delete',['id'=> $c->id]) }}"><button type="button" class="btn btn-danger mb-2">Xóa</button></a> -->
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