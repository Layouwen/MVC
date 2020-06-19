import $ from 'jquery'
import './animation.css'


const html = `
<section id="animation">
    <div class="circle"></div>
</section>
`
$(html).appendTo($('body>.main'))

const $circle = $('#animation .circle')

$circle.on('mouseenter', () => {
    $circle.addClass('active')
}).on('mouseleave', () => {
    $circle.removeClass('active')
})