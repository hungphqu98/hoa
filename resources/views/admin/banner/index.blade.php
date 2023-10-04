<x-admin-layout>
  <div class="container">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-header">Banner</div>
        <div class="card-body">
          <!-- <a href="{{ route('admin.banner.create') }}" ><button type="button" class="btn btn-primary mb-2">Thêm mới</button></a> -->
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Vị trí</th>
                  <th scope="col">Banner</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                @foreach($banner as $b)
                <tr>
                  <th scope="row">
                    @if ($b->position === '1')
                    Đầu trang chủ
                    @elseif ($b->position === '2')
                    Trang chủ 1
                    @elseif ($b->position === '3')
                    Trang chủ 2
                    @elseif ($b->position === '4')
                    Bên trái trang sản phẩm
                    @endif
                  </th>
                  <td >
                    <img  src="{{ asset('assets/banner/' . $b->images) }}" style="height: 150px;">
                  </td>
                  <td>
                    <a href="{{ route('admin.banner.edit',['id'=> $b->id]) }}"><button type="button" class="btn btn-info mb-2">Sửa</button></a>
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