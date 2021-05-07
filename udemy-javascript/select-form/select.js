export default class Select {
	constructor(element) {
		this.element = element;
		this.options = getFormatOptions(element.querySelectorAll('option'));
		this.customElement = document.createElement('div');
		this.labelElement = document.createElement('span');
		this.optionCustomElement = document.createElement('ul');
		setupCustomElement(this);
		element.style.display = 'none';
		element.after(this.customElement);
	}

	get selectedOption() {
		return this.options.find((option) => option.selected);
	}

	get SelectedOptionIndex() {
		return this.options.indexOf(this.selectedOption);
	}

	selectValue(value) {
		const newSelectedOption = this.options.find((option) => option.value === value);
		const prevSelectedOption = this.selectedOption;
		prevSelectedOption.selected = false;
		prevSelectedOption.element.selected = false;

		newSelectedOption.selected = true;
		newSelectedOption.element.selected = true;

		this.labelElement.innerText = newSelectedOption.label;
		this.optionCustomElement.querySelector(`[data-value="${prevSelectedOption.value}"]`).classList.remove('selected');
		const newCustomeElement = this.optionCustomElement.querySelector(`[data-value="${newSelectedOption.value}"]`);
		newCustomeElement.classList.add('selected');
		newCustomeElement.scrollIntoView({ block: 'nearest' });
	}
}

const setupCustomElement = (select) => {
	select.customElement.classList.add('custom-select-container');
	select.customElement.tabIndex = 0;

	select.labelElement.classList.add('custom-select-value');
	select.labelElement.innerText = select.selectedOption.label;
	select.customElement.append(select.labelElement);

	select.optionCustomElement.classList.add('custom-select-options');
	select.options.forEach((option) => {
		const optionItem = document.createElement('li');
		optionItem.classList.add('custom-select-option');
		optionItem.classList.toggle('selected', option.selected);
		optionItem.innerText = option.label;
		optionItem.dataset.value = option.value;
		optionItem.addEventListener('click', () => {
			select.selectValue(option.value);
			select.optionCustomElement.classList.remove('show');
		});
		select.optionCustomElement.append(optionItem);
	});
	select.customElement.append(select.optionCustomElement);

	select.customElement.addEventListener('click', () => {
		select.optionCustomElement.classList.toggle('show');
	});

	select.customElement.addEventListener('blur', () => {
		select.optionCustomElement.classList.remove('show');
	});

	let debounceTimeout;
	let searchTerm = '';

	select.customElement.addEventListener('keydown', (e) => {
		switch (e.code) {
			case 'Space': {
				select.optionCustomElement.classList.toggle('show');
				break;
			}
			case 'ArrowUp': {
				const prevOption = select.options[select.SelectedOptionIndex - 1];
				if (prevOption) {
					select.selectValue(prevOption.value);
				}
				break;
			}
			case 'ArrowDown': {
				const nextOption = select.options[select.SelectedOptionIndex + 1];
				if (nextOption) {
					select.selectValue(nextOption.value);
				}
				break;
			}
			case 'Enter':
			case 'Escape': {
				select.optionCustomElement.classList.remove('show');
				break;
			}
			default: {
				clearTimeout(debounceTimeout);
				searchTerm += e.key;
				debounceTimeout = setTimeout(() => {
					searchTerm = '';
				}, 500);
				const searchedOption = select.options.find((option) => option.label.toLowerCase().startsWith(searchTerm));
				if (searchedOption) {
					select.selectValue(searchedOption.value);
				}
			}
		}
	});
};

const getFormatOptions = (optionElements) =>
	[...optionElements].map((optionElement) => ({
		value: optionElement.value,
		label: optionElement.label,
		selected: optionElement.selected,
		element: optionElement,
	}));
