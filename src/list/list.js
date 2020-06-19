import $ from 'jquery'
import './list.css'


const html = `
<section id="list">
    <ol class="tab-bar">
        <li class="selected"><span>one</span></li>
        <li><span>two</span></li>
    </ol>
    <ol class="tab-content">
        <li>i am content one</li>
        <li>i am content two</li>
    </ol>
</section>
`
$(html).appendTo($('body>.main'))

const $tabBar = $('#list>.tab-bar')
const $tabContent = $('#list>.tab-content')
const localKey = 'list.index'
const index = localStorage.getItem(localKey) || 0

// tabBar
$tabBar.on('click', 'li', e => {
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index()
    localStorage.setItem(localKey, index)
    $tabContent.children().eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tabBar.children().eq(index).trigger('click')