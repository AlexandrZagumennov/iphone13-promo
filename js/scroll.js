const links = document.querySelectorAll('.navigation__item a');
const btn = document.querySelector('#offer-btn');

seamless.polyfill();

let arrayScroll = [...links, btn];

arrayScroll.forEach( element => {
	element.addEventListener('click', event => {
		event.preventDefault();

		const id = element.getAttribute('href').substring(1);
		const section = document.getElementById(id);

		if (section) {
			seamless.elementScrollIntoView(section, {
				behavior: 'smooth',
				block: 'start'
			})
		} 

		// Используется здесь так как не у всех ссылок прописан id, к которому необходимо отскроллиться
		else {
			seamless.elementScrollIntoView(document.querySelector('#order'), {
				behavior: 'smooth',
				block: 'start',
				inline: 'center'
			});
		}
	})
});
