$(document).ready(function() {
	//Переменная для открытия и закрытия меню
	var flag=false;
	//Окрываем и закрываем меню
	$('#menu-bars').click(function() {
		if(flag==false){
			$('#menus').addClass('menu-table');
			$('#fa-menu').removeClass('fa-bars');
			$('#fa-menu').addClass('fa-times');
			$('#fa-menu').css({
				'color': '#87a77b'
			});
			flag=true;
		}
		else if(flag==true){
			$('#menus').removeClass('menu-table');
			$('#fa-menu').removeClass('fa-times');
			$('#fa-menu').addClass('fa-bars');
			flag=false;
			$('#fa-menu').css({
				'color': '#ffffff'
			});
		}
	});
	//Переходим на вкладку Обо мне и скрываем меню
	$('#about-me').click(function() {
		$('#menus').removeClass('menu-table');
		$('#fa-menu').removeClass('fa-times');
		$('#fa-menu').addClass('fa-bars');
		//Меняем цвет нашему Бургер-меню
		$('#fa-menu').css({
				'color': '#ffffff'
			});
		flag=false;
	});
	//Переходим на вкладку Мои работы и скрываем меню
	$('#jobs').click(function() {
		$('#menus').removeClass('menu-table');
		$('#fa-menu').removeClass('fa-times');
		$('#fa-menu').addClass('fa-bars');
		//Меняем цвет нашему Бургер-меню
		$('#fa-menu').css({
				'color': '#ffffff'
			});
		flag=false;
	});
});
