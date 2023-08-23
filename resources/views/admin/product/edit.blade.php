<x-admin-layout>
@push('head')
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.10.7/tinymce.min.js" referrerpolicy="origin"></script>
  <script>
    var editor_config = {
    path_absolute : "/admin/",
    selector: 'textarea.tinymce_editor',
    height: 800,
    relative_urls: false,
    remove_script_host : false,
    convert_urls : true,
    plugins: [
      "advlist autolink lists link image charmap print preview hr anchor pagebreak",
      "searchreplace wordcount visualblocks visualchars code fullscreen",
      "insertdatetime media nonbreaking save table directionality",
      "emoticons template paste textpattern"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media",
    file_picker_callback : function(callback, value, meta) {
      var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
      var y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

      var cmsURL = editor_config.path_absolute + 'laravel-filemanager?editor=' + meta.fieldname;
      if (meta.filetype == 'image') {
        cmsURL = cmsURL + "&type=Images";
      } else {
        cmsURL = cmsURL + "&type=Files";
      }

      tinyMCE.activeEditor.windowManager.openUrl({
        url : cmsURL,
        title : 'Filemanager',
        width : x * 0.8,
        height : y * 0.8,
        resizable : "yes",
        close_previous : "no",
        onMessage: (api, message) => {
          callback(message.content);
        }
      });
    }
  };

  tinymce.init(editor_config);
  </script>

  @endpush
  <div class="container">
    <div class="page-title">
      <h3>Sản phẩm</h3>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">Sửa sản phẩm</div>
          <div class="card-body">
            @foreach($product as $p)
            <form  action="{{ route('admin.product.update' ,['id' => $p->id]) }}" method="post" enctype="multipart/form-data">
              @csrf
              <div class="mb-3">
                <label for="name" class="form-label">Tên sản phẩm</label>
                <input type="text" name="name" class="form-control" value="{{ $p->name }}" required>
              </div>
              <div class="mb-3">
                <label for="slug" class="form-label">Slug</label>
                <input type="text" name="slug" class="form-control" value="{{ $p->slug }}" required>
              </div>
              <div class="mb-3">
                <label for="image">Ảnh</label>
                <input name="image" type="file"></input>
                <img src="{{ asset('assets/product/' . $p->image) }}">
              </div>
              <div class="mb-3">
                <label for="description" class="form-label"> Mô tả chung </label>
                <textarea name="description" class="form-control" required>{!! $p->description !!}</textarea>
              </div>
              <div class="mb-3">
                <label for="details" class="form-label">Thông tin chi tiết</label>
                <textarea name="details" class="tinymce_editor" id="tinymce_editor">{!! $p->details !!}</textarea>
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">Giá</label>
                <input type="text" name="price" class="form-control" value="{{ $p->price }}" required>
              </div>
              <div class="mb-3">
                <label for="sale_price" class="form-label">Giá giảm</label>
                <input type="text" name="sale_price" class="form-control" value="{{ $p->sale_price }}" >
              </div>
              <div class="mb-3">
                <label for="category_ids[]" class="form-label">Tag</label>
                <select class="form-select" name="category_ids[]" id="multiple-select-field" data-placeholder="Choose anything" multiple>
                @foreach($cat as $c)  
                <option value="{{ $c->id }}" @if($p->productCategory->contains($c)) selected @endif>{{ $c->name }}</option>
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
            @endforeach
          </div>
        </div>
      </div>
    </div>
    </div>
</x-admin-layout>