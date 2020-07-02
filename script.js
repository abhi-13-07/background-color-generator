const changeButtonElement = document.getElementsByClassName('btn')
var body = document.querySelector('.body')

for (var i = 0; i < changeButtonElement.length; i++) {
    var changeButton = changeButtonElement[i]
    changeButton.addEventListener('click', (e) => {
        var button = e.target
        if (button.id === 'change-color-1') {
            document.querySelector('.body').style.background = '#EEEDF0'
        }

        if (button.id === 'change-color-2') {
            document.querySelector('.body').style.background = '#A1B5C1'
        }

        if (button.id === 'change-color-3') {
            document.querySelector('.body').style.background = '#F9ACA7'
        }

        if (button.id === 'change-color-4') {
            document.querySelector('.body').style.background = '#68747D'
        }

        if (button.id === 'change-color-5') {
            document.querySelector('.body').style.background = '#CF365F'
        }

        if (button.id === 'change-color-6') {
            document.querySelector('.body').style.background = '#EBEBF3'
        }
    })
}