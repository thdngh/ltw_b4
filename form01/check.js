function check()
{
    var username = f.TenDangNhap.value;
    var pass = f.MatKhau.value;

    if (username == '') {
		alert('Tên đăng nhập không được bỏ trống');
		return false;
    }
    if (pass == '') {
        alert('Mật khẩu không được bỏ trống');
        return false;
    }
    return true;
}
