function check()
{
    var name = f.HoTen.value;
    var dc = f.DiaChi.value;
    var mail = f.Mail.value;
    var dt = f.DT.value;
	var emailparttern =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;	
	
    if (name == '') {
		alert('Họ tên không được bỏ trống');
		return false;
    }
    if (dc == '') {
        alert('Địa chỉ không được bỏ trống');
        return false;
    }
	
	if (dt == '') {
        alert('Điện thoại không được bỏ trống');
        return false;
    }
	if(!emailparttern.test(mail))
    {
        alert('Email không hợp lệ');
        return false
    }
	
    return true;
}
