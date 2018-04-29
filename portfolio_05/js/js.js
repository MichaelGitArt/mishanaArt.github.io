'use strict'

/* Анимация */


document.body.onload = function(){
	setTimeout(function(){
		let preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done') ){
			preloader.classList.add('done')
		};


		/////////// Анимпция изображений ///////////

		// верхний блок
		let topBlock = document.getElementsByClassName('top-block');
				setTimeout(function(){
					for (let i = 0; i < topBlock.length; i++) {
						topBlock[i].classList.add('show');
					}
				}, 1000)

		// главный логот
		let centerLogotype = document.getElementsByClassName('logotype');
				setTimeout(function(){
					for (let i = 0; i < centerLogotype.length; i++) {
						centerLogotype[i].classList.add('show');
					}
				}, 2200)

		// выезжающие изображения
		let goingBlock = document.querySelectorAll('.going');
				setTimeout(function(){
					for (var i = 0; i < goingBlock.length; i++) {
						goingBlock[i].classList.add('show');
					}	
				}, 3200)

		// запуск основной анимации
		let images = document.getElementsByClassName('images');
				setTimeout(function(){
					for (let i = 0; i < images.length; i++) {
						images[i].classList.add('show');
						images[i].classList.add('go');			}
				}, 4200)

		// анимация дыма
		let smoke = document.getElementsByClassName('smoke');
				setTimeout(function(){
					for (let i = 0; i < smoke.length; i++) {
						smoke[i].classList.add('show');
						smoke[i].classList.add('go');
					}
					setTimeout(function(){
						for (let i = 0; i < smoke.length; i++) {
							smoke[i].classList.add('unshow');
						}
					}, 1800)

					// завершения(открыть доступ к меню)
					let colorBlocks = document.querySelectorAll('.wrapper > div');
					setTimeout(function(){
						for (let i = 0; i < colorBlocks.length; i++) {
							colorBlocks[i].classList.add('full-active');
						}
					}, 1000)
				}, 4200)
	},1000)
}

///////////////////////////////////////////////////
////////////////  Адаптация ///////////////////////
///////////////////////////////////////////////////

	let wrapper = document.getElementsByClassName('wrapper')[0];
	let backButton = document.getElementsByClassName('back')[0];
	let forwardButton = document.getElementsByClassName('forward')[0];


	let screenSize = '1000+';

// Начальное мещение wrapper;
	let xMixing = 0;

// Обработчик для сдвига разноцветных блоков
	document.addEventListener('click', function(event){
		let target = event.target;
		while(target != document.body){
				if(target.className == 'back' || target.className == 'forward' ){
					moveBlock(target.className, screenSize);
					return;
				}
			target = target.parentNode;
		}
	});




	//// Обработчики для экранов разной ширины ////

	// вспомогательная функция для проверки ширины экрана
	let testWidth = 'first';


// Проверка  меньше или больше 700px
	if(true){
		let screen = window.matchMedia('(max-width: 700px)');
		screen.addListener(changeScreen2);
		changeScreen2(screen);
	}
// Проверка больше чем 1000px
	if(true){
		let screen = window.matchMedia('(max-width: 1000px)');
		screen.addListener(changeScreen1);
		changeScreen1(screen);
	}



// Запустить если экран 0-1000px
	function changeScreen2(screen){
		// 0-700
		if(screen.matches){
			xMixing = 0
			screenSize = '700-';
			if(testWidth === 'first'){
			testWidth = true;
			}
			console.log('0-700');
			wrapper.style.transform = 'translate(0%, 0)'
			forwardButton.classList.remove('hide');
			backButton.classList.add('hide');
		// 700-1000
		}else{
			wrapper.style.transform = 'translate(0%, 0)'
			xMixing = 0
			screenSize = '1000-';
		}
	}

// Запустить если экран 1000+px
	function changeScreen1(screen){
		if(!screen.matches){
			wrapper.style.transform = 'translate(0%, 0)'
		}
	}






function moveBlock(value, screenSize){
	// Коофициент сдвига
	let k = 1;
	if(screenSize === "700-") k = 2;


	// Значение сдвига с учетом коофициента
	if (value === "back"){
		xMixing += 50 * k;
	}else{
		xMixing -= 50 * k;
	}
	// Движем
	wrapper.style.transform = `translate(${xMixing}%, 0)`


	//Убираем и показываем кнопки для экранов 700-1000
		if(+k === 1 && +xMixing === -50) {
			forwardButton.classList.add('hide')
		}else{
			forwardButton.classList.remove('hide')
		}
		if(+k === 1 && +xMixing === 0) {
			backButton.classList.add('hide')
		}else{
			backButton.classList.remove('hide')
		}
	//Убираем и показываем кнопки для экранов 0-700

	if(+k === 2 && +xMixing === -200) {
			forwardButton.classList.add('hide')
		}else{
			forwardButton.classList.remove('hide')
		}
		if(+k === 2 && +xMixing === 0) {
			backButton.classList.add('hide')
		}else{
			backButton.classList.remove('hide')
		}
}





















