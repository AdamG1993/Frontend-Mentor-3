const firstSide = document.querySelector('.container')
const secondSide = document.querySelector('.answer')
const btnSumbit = document.querySelector('.sumbit')
const inputs = document.querySelectorAll('input')
const spanRate = document.querySelector('.rate-info')
let rate
const handleActive = () => {
	firstSide.classList.add('close')
	secondSide.classList.remove('close')
}

btnSumbit.addEventListener('click', handleActive)

inputs.forEach(input => {
	input.addEventListener('click', e => {
		rate = e.target.value
		spanRate.textContent = rate
	})
})
