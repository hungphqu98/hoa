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
      <h3>Blog</h3>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">Thêm sản phẩm mới</div>
          <div class="card-body">
            <form action="{{ route('admin.blog.store') }}" method="post" enctype="multipart/form-data">
              <div class="mb-3">
                <label for="title" class="form-label">Tiêu đề</label>
                <input type="text" name="title" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="slug" class="form-label">Slug</label>
                <input type="text" name="slug" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="thumbnail">Ảnh</label>
                <input name="thumbnail" type="file"></input>
              </div>
              <div class="mb-3">
                <label for="details" class="form-label">Nội dung</label>
                @csrf
                <textarea name="details" class="tinymce_editor" id="tinymce_editor"></textarea>
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