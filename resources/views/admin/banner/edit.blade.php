<x-admin-layout>
  <div class="container">
    <div class="page-title">
      <h3>Banner</h3>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">Sửa banner</div>
          <div class="card-body">
            @foreach($banner as $b)
            <form action="{{ route('admin.banner.update' ,['id' => $b->id]) }}" method="post" enctype="multipart/form-data">
              @csrf
              <div class="mb-3">
                <label for="images">Ảnh</label>
                <input name="images" type="file"></input>
                <div class="banner-preview">
                <img  src="{{ asset('assets/banner/' . $b->images) }}">
                </div>
                
              </div>
              <div class="mb-3">
                <label for="path" class="form-label">Đường dẫn</label>
                <input type="text" name="path" class="form-control" value="{{ $b->path }}">
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2">Vị trí</label>
                <div class="col-sm-10 select">
                  <select id="position" name="position" class="form-select">
                    <option value="1" {{$b->position === "1" ? "selected" : '' }}>Đầu trang chủ</option>
                    <option value="2" {{$b->position === "2" ? "selected" : '' }}>Trang chủ 1</option>
                    <option value="3" {{$b->position === "3" ? "selected" : '' }}>Trang chủ 2</option>
                    <option value="4" {{$b->position === "4" ? "selected" : '' }}>Bên trái trang sản phẩm</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <input type="submit" class="btn btn-primary">
              </div>
            </form>
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </div>
</x-admin-layout>