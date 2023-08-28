<x-admin-layout>
  <div class="container">
    <div class="page-title">
      <h3>Liên hệ</h3>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">Sửa bài viết</div>
          <div class="card-body">
            @foreach($contact as $c)
            <form  action="{{ route('admin.contact.update' ,['id' => $c->id]) }}" method="post" enctype="multipart/form-data">
              @csrf
              <div class="mb-3">
                <label for="title" class="form-label">Tiêu đề</label>
                <input type="text" name="name" class="form-control" value="{{ $c->name }}" required>
              </div>
              <div class="mb-3">
                <label for="slug" class="form-label">Slug</label>
                <input type="text" name="phone" class="form-control" value="{{ $c->phone }}" required>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="status" id="input" value="ONHOLD" checked="checked">
                  Hiện
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="status" id="input" value="RESOLVED">
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