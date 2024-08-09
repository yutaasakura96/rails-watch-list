// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "bootstrap"
import "@popperjs/core"

const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if(window.scrollY > 0) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove('sticky')
  }
})
