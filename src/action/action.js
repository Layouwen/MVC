import $ from 'jquery'
import './action.css'

const $square = $('#action .square')

$square.on('click', () => {
    $square.toggleClass('active')
})