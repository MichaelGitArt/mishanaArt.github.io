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
			console.log(goingBlock);
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
































