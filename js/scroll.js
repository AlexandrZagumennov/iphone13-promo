const links = document.querySelectorAll('.navigation__item a');

seamless.polyfill();

links.forEach( element => {
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

		// Используется здесь так как не у всех сылок прописан id, к которому необходимо отскроллиться
		else {
			seamless.elementScrollIntoView(document.querySelector('#order'), {
				behavior: 'smooth',
				block: 'start',
				inline: 'center'
			});
		}
	})
});
