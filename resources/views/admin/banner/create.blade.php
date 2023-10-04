<x-admin-layout>

  <div class="container">
    <div class="page-title">
      <h3>Blog</h3>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">Thêm banner</div>
          <div class="card-body">
            <form action="{{ route('admin.banner.store') }}" method="post" enctype="multipart/form-data">
              @csrf
            <div class="mb-3">
                <label for="images">Ảnh</label>
                <input name="images" type="file"></input>
              </div>
              <div class="mb-3">
                <label for="path" class="form-label">Đường dẫn</label>
                <input type="text" name="path" class="form-control" value="">
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2">Vị trí</label>
                <div class="col-sm-10 select">
                  <select id="position" name="position" class="form-select">
                    <option value="1">option 1</option>
                    <option value="2">option 2</option>
                    <option value="3">option 3</option>
                    <option value="4">option 4</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <input type="submit" class="btn btn-primary">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</x-admin-layout>