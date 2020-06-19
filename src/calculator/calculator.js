import $ from 'jquery'
import './calculator.css'


const $number = $('#number')
const $add = $('#add1')
const $minus = $('#minus1')
const $mul = $('#mul2')
const $divide = $('#divide2')

const n = localStorage.getItem('n')
$number.text(n || 100)

// add
$add.on('click', () => {
    let n = parseInt($number.text())
    n += 1
    localStorage.setItem('n', n)
    $number.text(n)
})

// minus
$minus.on('click', () => {
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n', n)
    $number.text(n)
})

// mul
$mul.on('click', () => {
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem('n', n)
    $number.text(n)
})

// divide
$divide.on('click', () => {
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem('n', n)
    $number.text(n)
})