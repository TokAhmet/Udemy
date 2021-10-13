const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const pass = document.querySelector('.password');
const cbox = document.querySelector('#cbox');
const numberInput = document.querySelector('.number');
const button = document.querySelector('.handleButton');
const resetButton = document.querySelector('.resetButton');
const arr = [];
const output = document.querySelector('.output');
const errorMessage = document.createElement('div');

button.addEventListener('click', () => {
	output.innerHTML = '';
	if (firstName.value !== '' || lastName.value !== '') {
		if (pass.value === 'KYH') {
			const name = `${firstName.value} ${lastName.value}`;
			arr.push(name);
			arr.forEach((element) => {
				const block = document.createElement('p');
				block.innerHTML += `${element}`;
				output.appendChild(block);
				if (cbox.checked) {
					for (let i = 0; i < numberInput.value; i++) {
						const block2 = document.createElement('p');
						block2.innerHTML += `Hello ${element}`;
						output.appendChild(block2);
					}
				}
			});
		} else {
			errorMessage.innerHTML = 'Fel lösen';
			output.appendChild(errorMessage);
		}
	} else {
		errorMessage.innerHTML = 'Error något stämde inte';
		output.appendChild(errorMessage);
	}
});

resetButton.addEventListener('click', () => {
	output.innerHTML = '';
	arr.length = 0;
});
