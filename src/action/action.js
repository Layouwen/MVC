import $ from 'jquery'
import './action.css'

const $square = $('#action .square')
const localKey = 'action.active'
const active = localStorage.getItem(localKey) === 'yes'

$square.toggleClass('active', active)

$square.on('click', () => {
    if ($square.hasClass('active')) {
        $square.removeClass('active')
        localStorage.setItem(localKey, 'no')
    } else {
        $square.addClass('active')
        localStorage.setItem(localKey, 'yes')
    }
})