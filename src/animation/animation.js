import $ from 'jquery'
import './animation.css'

const $circle = $('#animation .circle')

$circle.on('mouseenter', () => {
    $circle.addClass('active')
}).on('mouseleave', () => {
    $circle.removeClass('active')
})