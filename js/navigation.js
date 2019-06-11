
let $links = document.querySelectorAll('a')
let $routes = document.querySelectorAll('[data-route]')


function initialRender() {
  listenForLinksClick()
  displayOneSectionAndHideOthers('/')
}


function listenForLinksClick() { 
   $links.forEach(($link) => $link.addEventListener('click', (e) => {
     e.preventDefault()
     let href = $link.getAttribute('href')
     console.log('You clicked on the link where href is', href)
     displayOneSectionAndHideOthers(href)
   }))

}
function displayOneSectionAndHideOthers(href) {
  $routes.forEach(($route) => {
  let dataRoute = $route.getAttribute('data-route')
  if(dataRoute === href) {
    $route.style.display = 'block'
    history.pushState({}, null, )
  } else {
    $route.style.display = 'none'
  }
})
}

initialRender()

