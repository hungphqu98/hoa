<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => ':attribute phải được chấp nhận.',
    'accepted_if'          => ':attribute phải được chấp nhận khi :other là :value.',
    'active_url'           => ':attribute không phải là một URL hợp lệ.',
    'after'                => ':attribute phải là một ngày sau ngày :date.',
    'after_or_equal'       => ':attribute phải là thời gian bắt đầu sau hoặc đúng bằng :date.',
    'alpha'                => ':attribute chỉ có thể chứa các chữ cái.',
    'alpha_dash'           => ':attribute chỉ có thể chứa chữ cái, số và dấu gạch ngang.',
    'alpha_num'            => ':attribute chỉ có thể chứa chữ cái và số.',
    'array'                => ':attribute phải là dạng mảng.',
    'attached'             => ':attribute đã được đính kèm.',
    'before'               => ':attribute phải là một ngày trước ngày :date.',
    'before_or_equal'      => ':attribute phải là thời gian bắt đầu trước hoặc đúng bằng :date.',
    'between'              => [
        'array'   => ':attribute phải có từ :min - :max phần tử.',
        'file'    => 'Dung lượng tập tin trong :attribute phải từ :min - :max kB.',
        'numeric' => ':attribute phải nằm trong khoảng :min - :max.',
        'string'  => ':attribute phải từ :min - :max kí tự.',
    ],
    'boolean'              => ':attribute phải là true hoặc false.',
    'confirmed'            => 'Giá trị xác nhận trong :attribute không khớp.',
    'current_password'     => 'Mật khẩu không đúng.',
    'date'                 => ':attribute không phải là định dạng của ngày-tháng.',
    'date_equals'          => ':attribute phải là một ngày bằng với :date.',
    'date_format'          => ':attribute không giống với định dạng :format.',
    'different'            => ':attribute và :other phải khác nhau.',
    'digits'               => 'Độ dài của :attribute phải gồm :digits chữ số.',
    'digits_between'       => 'Độ dài của :attribute phải nằm trong khoảng :min and :max chữ số.',
    'dimensions'           => ':attribute có kích thước không hợp lệ.',
    'distinct'             => ':attribute có giá trị trùng lặp.',
    'email'                => ':attribute phải là một địa chỉ email hợp lệ.',
    'ends_with'            => ':attribute phải kết thúc bằng một trong những giá trị sau: :values',
    'exists'               => 'Giá trị đã chọn trong :attribute không hợp lệ.',
    'file'                 => ':attribute phải là một tệp tin.',
    'filled'               => ':attribute không được bỏ trống.',
    'gt'                   => [
        'array'   => 'Mảng :attribute phải có nhiều hơn :value phần tử.',
        'file'    => 'Dung lượng :attribute phải lớn hơn :value kilobytes.',
        'numeric' => 'Giá trị :attribute phải lớn hơn :value.',
        'string'  => 'Độ dài :attribute phải nhiều hơn :value kí tự.',
    ],
    'gte'                  => [
        'array'   => 'Mảng :attribute phải có ít nhất :value phần tử.',
        'file'    => 'Dung lượng :attribute phải lớn hơn hoặc bằng :value kilobytes.',
        'numeric' => 'Giá trị :attribute phải lớn hơn hoặc bằng :value.',
        'string'  => 'Độ dài :attribute phải lớn hơn hoặc bằng :value kí tự.',
    ],
    'image'                => ':attribute phải là định dạng hình ảnh.',
    'in'                   => 'Giá trị đã chọn trong :attribute không hợp lệ.',
    'in_array'             => ':attribute phải thuộc tập cho phép: :other.',
    'integer'              => ':attribute phải là một số nguyên.',
    'ip'                   => ':attribute phải là một địa chỉ IP.',
    'ipv4'                 => ':attribute phải là một địa chỉ IPv4.',
    'ipv6'                 => ':attribute phải là một địa chỉ IPv6.',
    'json'                 => ':attribute phải là một chuỗi JSON.',
    'lt'                   => [
        'array'   => 'Mảng :attribute phải có ít hơn :value phần tử.',
        'file'    => 'Dung lượng :attribute phải nhỏ hơn :value kilobytes.',
        'numeric' => 'Giá trị :attribute phải nhỏ hơn :value.',
        'string'  => 'Độ dài :attribute phải nhỏ hơn :value kí tự.',
    ],
    'lte'                  => [
        'array'   => 'Mảng :attribute không được có nhiều hơn :value phần tử.',
        'file'    => 'Dung lượng :attribute phải nhỏ hơn hoặc bằng :value kilobytes.',
        'numeric' => 'Giá trị :attribute phải nhỏ hơn hoặc bằng :value.',
        'string'  => 'Độ dài :attribute phải nhỏ hơn hoặc bằng :value kí tự.',
    ],
    'max'                  => [
        'array'   => ':attribute không được lớn hơn :max phần tử.',
        'file'    => 'Dung lượng tập tin trong :attribute không được lớn hơn :max kB.',
        'numeric' => ':attribute không được lớn hơn :max.',
        'string'  => ':attribute không được lớn hơn :max kí tự.',
    ],
    'mimes'                => ':attribute phải là một tập tin có định dạng: :values.',
    'mimetypes'            => ':attribute phải là một tập tin có định dạng: :values.',
    'min'                  => [
        'array'   => ':attribute phải có tối thiểu :min phần tử.',
        'file'    => 'Dung lượng tập tin trong :attribute phải tối thiểu :min kB.',
        'numeric' => ':attribute phải tối thiểu là :min.',
        'string'  => ':attribute phải có tối thiểu :min kí tự.',
    ],
    'multiple_of'          => ':attribute phải là bội số của :value',
    'not_in'               => 'Giá trị đã chọn trong :attribute không hợp lệ.',
    'not_regex'            => ':attribute có định dạng không hợp lệ.',
    'numeric'              => ':attribute phải là một số.',
    'password'             => 'Mật khẩu không đúng.',
    'present'              => ':attribute phải được cung cấp.',
    'prohibited'           => ':attribute bị cấm.',
    'prohibited_if'        => ':attribute bị cấm khi :other là :value.',
    'prohibited_unless'    => ':attribute bị cấm trừ khi :other là một trong :values.',
    'regex'                => ':attribute có định dạng không hợp lệ.',
    'relatable'            => ':attribute không thể liên kết với tài nguyên này.',
    'required'             => ':attribute không được bỏ trống.',
    'required_if'          => ':attribute không được bỏ trống khi :other là :value.',
    'required_unless'      => ':attribute không được bỏ trống trừ khi :other là :values.',
    'required_with'        => ':attribute không được bỏ trống khi một trong :values có giá trị.',
    'required_with_all'    => ':attribute không được bỏ trống khi tất cả :values có giá trị.',
    'required_without'     => ':attribute không được bỏ trống khi một trong :values không có giá trị.',
    'required_without_all' => ':attribute không được bỏ trống khi tất cả :values không có giá trị.',
    'same'                 => ':attribute và :other phải giống nhau.',
    'size'                 => [
        'array'   => ':attribute phải chứa :size phần tử.',
        'file'    => 'Dung lượng tập tin trong :attribute phải bằng :size kB.',
        'numeric' => ':attribute phải bằng :size.',
        'string'  => ':attribute phải chứa :size kí tự.',
    ],
    'starts_with'          => ':attribute phải được bắt đầu bằng một trong những giá trị sau: :values',
    'string'               => ':attribute phải là một chuỗi kí tự.',
    'timezone'             => ':attribute phải là một múi giờ hợp lệ.',
    'unique'               => ':attribute đã có trong cơ sở dữ liệu.',
    'uploaded'             => ':attribute tải lên thất bại.',
    'url'                  => ':attribute không giống với định dạng một URL.',
    'uuid'                 => ':attribute phải là một chuỗi UUID hợp lệ.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
        'g-recaptcha-response' => [
            'required' => 'Vui lòng xác minh rằng bạn không phải là robot.',
            'captcha' => 'Lỗi CAPTCHA! hãy thử lại sau hoặc liên hệ với quản trị viên trang web.',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        'address'               => 'Địa chỉ',
        'age'                   => 'Tuổi',
        'available'             => 'có sẵn',
        'body'                  => 'nội dung',
        'city'                  => 'Thành phố',
        'content'               => 'Nội dung',
        'country'               => 'quốc gia',
        'date'                  => 'Ngày',
        'day'                   => 'Ngày',
        'description'           => 'Mô tả',
        'email'                 => 'email',
        'excerpt'               => 'trích dẫn',
        'first_name'            => 'tên',
        'gender'                => 'giới tính',
        'hour'                  => 'giờ',
        'last_name'             => 'họ',
        'message'               => 'lời nhắn',
        'minute'                => 'phút',
        'mobile'                => 'Di động',
        'month'                 => 'tháng',
        'name'                  => 'Tên',
        'password'              => 'Mật khẩu',
        'password_confirmation' => 'xác nhận mật khẩu',
        'phone'                 => 'Số điện thoại',
        'second'                => 'giây',
        'sex'                   => 'giới tính',
        'size'                  => 'kích thước',
        'subject'               => 'tiêu đề',
        'time'                  => 'Thời gian',
        'title'                 => 'tiêu đề',
        'username'              => 'tên đăng nhập',
        'year'                  => 'năm',
    ],

];
