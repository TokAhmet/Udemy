import Select from './select.js';

const selectElement = document.querySelectorAll('[data-custom]');

selectElement.forEach((item) => {
	const select = new Select(item);
	select;
});
