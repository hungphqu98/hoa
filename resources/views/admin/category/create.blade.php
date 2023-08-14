<x-admin-layout>
  <div class="container">
    <div class="page-title">
      <h3>Danh mục</h3>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">Thêm danh mục mới</div>
          <div class="card-body">
            <form  action="{{ route('admin.category.store') }}" method="post" enctype="multipart/form-data">
              @csrf
              <div class="mb-3">
                <label for="name" class="form-label">Tên danh mục</label>
                <input type="text" name="name" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="slug" class="form-label">Slug</label>
                <input type="text" name="slug" class="form-control" required>
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
          </div>
        </div>
      </div>
    </div>
    </div>
</x-admin-layout>