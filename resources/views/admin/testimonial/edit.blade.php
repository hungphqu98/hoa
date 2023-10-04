<x-admin-layout>
  <div class="container">
    <div class="page-title">
      <h3>Khách hàng tiêu biểu</h3>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">Sửa khách hàng tiêu biểu</div>
          <div class="card-body">
            @foreach($testimonial as $t)
            <form  action="{{ route('admin.testimonial.update' ,['id' => $t->id]) }}" method="post" enctype="multipart/form-data">
              @csrf
              <div class="mb-3">
                <label for="name" class="form-label">Tên</label>
                <input type="text" name="name" class="form-control" value="{{ $t->name }}" required>
              </div>
              <div class="mb-3">
                <label for="images">Ảnh</label>
                <input name="images" type="file"></input>
                <img src="{{ asset('assets/' . $t->images) }}">
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="status" id="input" value="SHOW" checked="checked">
                  Hiện
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="status" id="input" value="HIDDEN">
                  Ẩn
                </label>
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