new Choices('#model', {
	searchEnabled: false,
	itemSelectText: '',
});

new Choices('#color',  {
	searchEnabled: false,
	itemSelectText: '',
});

$('#form-order').on('submit', function(event) {
	event.preventDefault();

	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/posts',
		method: 'POST',
		datatype: 'html',
		data: $('#form-order').serialize(),
		success: function(data) {
			console.log(data);
			$('#form-order').html('Спасибо! Ваша заявка успешно отправлена.');
			$('.form__submit').hide();
		}
	})
})