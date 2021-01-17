import { quotes } from './quotes/quotes'
import './scss/index.scss'

const $btn = document.querySelector('.btn-1')
const $quote = document.querySelector('.quote')

function changeQuote() {
  const random = Math.floor(Math.random() * quotes.length)
  return ($quote.innerHTML = quotes[random])
}

$btn.addEventListener(
  'click',
  () => {
    console.log('clicked')
    changeQuote()
  },
  false
)
