import $ from 'jquery'
import './action.css'


const html = `
<section id="action">
    <div class="square"></div>
</section>
`
$(html).appendTo($('body>.main'))

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