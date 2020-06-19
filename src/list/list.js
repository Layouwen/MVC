import $ from 'jquery'
import './list.css'

const $tabBar = $('#list>.tab-bar')
const $tabContent = $('#list>.tab-content')

// tabBar
$tabBar.on('click', 'li', e => {
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index()
    $tabContent.children().eq(index).addClass('active')
        .siblings().removeClass('active')
})