import Select from './select.js';

const selectElement = document.querySelectorAll('[data-custom]');

selectElement.forEach((item) => {
	new Select(item);
});
