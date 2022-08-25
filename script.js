const firstSide = document.querySelector('.container')
const secondSide = document.querySelector('.answer')
const btnSumbit = document.querySelector('.sumbit')

const handleActive = () => {
	firstSide.classList.add('close')
	secondSide.classList.remove('close')
}

btnSumbit.addEventListener('click', handleActive)
