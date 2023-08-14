<x-admin-layout>
  <div class="container">
    <div class="page-title">
      <h3>Sản phẩm</h3>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">Thêm sản phẩm mới</div>
          <div class="card-body">
            <form action="{{ route('admin.product.store') }}" method="post" enctype="multipart/form-data">
              @csrf
              <div class="mb-3">
                <label for="name" class="form-label">Tên sản phẩm</label>
                <input type="text" name="name" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="slug" class="form-label">Slug</label>
                <input type="text" name="slug" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="image">Ảnh</label>
                <input name="image" type="file"></input>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label"> Mô tả chung </label>
                <textarea name="description" class="form-control" required></textarea>
              </div>
              <div class="mb-3">
                <label for="details" class="form-label">Thông tin chi tiết</label>
                <textarea name="details" class="form-control" required></textarea>
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">Giá</label>
                <input type="text" name="price" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="sale_price" class="form-label">Giá giảm</label>
                <input type="text" name="sale_price" class="form-control">
              </div>
              <div class="mb-3">
                <label for="category_ids[]" class="form-label">Tag</label>
                <select class="form-select" name="category_ids[]" id="multiple-select-field" data-placeholder="Choose anything" multiple>
                @foreach($cat as $c)  
                <option value="{{ $c->id }}">{{ $c->name }}</option>
                @endforeach
                </select>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="status" id="input" value="AVAILABLE" checked="checked">
                  Hiện
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="status" id="input" value="UNAVAILABLE">
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