//全选
function check_all(){
	var check_all = document.getElementById('check_all');
	var checkboxs = document.getElementsByName('checkboxs');
	for (var i = 0; i < checkboxs.length; i++){
		if(!checkboxs[i].disabled){
			var e = checkboxs[i];
			if(e.name !== 'check_all'){
				e.checked = check_all.checked;
			}
		}
	}
	select_checkboxs();
}
function select_checkboxs(){
	var sel_check = new Array();
	var checkboxs = document.getElementsByName('checkboxs');
	var j = 0;
	var flag = true;
	for (var i = 0; i < checkboxs.length; i++){
		if(checkboxs[i].checked == true){
			sel_check[j] = checkboxs[i].value;
			j++;
		}else{
			flag = false;
		}
	}
	document.getElementById('check_all').checked = flag;
}