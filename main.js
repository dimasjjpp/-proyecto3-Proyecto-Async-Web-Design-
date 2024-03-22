import './style.css'

const leftButtonContainerTemplate = `
  <a href="#home"
    ><img
      src="./public/assets/icons/pinteresticon.png" class="navbar-button-logo"
      alt="Icono Pinterest"
      id="iconPinterest"
  /></a>
  <a href=""><button class="navbar-button">HOME</button></a>
  <a href=""><button class="navbar-button">CREATE</button></a>
`
const rightButtonContainerTemplate = `
<a href="#Notifications">
  <img
    src="./public/assets/icons/bell.png"
    id="bell-mini"
    class="navbar-button"
    alt=""
/></a>
<a href="#Messages"
  ><img
    src="./public/assets/icons/messagecloud.png"
    id="message-mini"
    class="navbar-button"
    alt=""
/></a>
<a href="#user" id="user-mini"><p>D</p></a>
<div class="toogle-options" id="button-toggle">
  <button id="button-toogle-menu">
  <img src="./public/assets/icons/arrowDown.png" id="button-toogle-image"alt="arrow-down" />
  </button>
</div>
`
const navbarTemplate = `
<header>
  <nav>
    <div class="navbar-button-container" id="navbar-button-left-container"> 
    ${leftButtonContainerTemplate}
    </div>
    <div class="navbar-searchbox-container" id="navbar-searchbox-container">
     <input type="text" class="search-input" placeholder="🔍SEARCH" />
     <img src="./public/assets/icons/magnifier.png" alt="magnifier-search" id="icon-media-mobile">
    </div>
    <div class="navbar-button-container" id="navbar-button-right-container">
    ${rightButtonContainerTemplate}
     </div>
    </div>
  </nav>
</header>`

const modalTemplate = `
    <span id="close-modal">X</span>
    <div>
      <h4>Your accouts</h4>
      <ul class="ulModal">
        <li>Currently in user</li>
        <li>user name</li>
        <li>Personal</li>
        <li>example@mail.com</li>
      </ul>
    </div>
    <div>
    <h4>More options</h4>
    <ul class="ulModal">
      <li>Your accounts</li>
      <li>Add account</li>
      <li>Convert to business</li>
      <li>More options</li>
      <li>Reports and violations center</li>
      <li>Settings</li>
      <li>Tune your home feed</li>
      <li>Install the Windows app</li>
      <li>Your privacy rights</li>
      <li>Get help</li>
      <li>See terms of service</li>
      <li>See privacy policy</li>
      <li>Be a beta tester</li>
    </ul>
    </div>
`

const navbarRender = () => {
  //render navbar function
  const body = document.querySelector('body')
  body.innerHTML = navbarTemplate
}
navbarRender()

const renderModalMenu = () => {
  //renderModalMenu
  const navSelect = document.querySelector('nav')
  const modalContainer = document.createElement('div')
  modalContainer.id = 'modal-menu'
  modalContainer.classList.add('modal')

  const modalContent = document.createElement('div')
  modalContent.classList.add('modal-content')
  modalContent.innerHTML += modalTemplate
  navSelect.appendChild(modalContainer)
  modalContainer.appendChild(modalContent)
}

renderModalMenu()

const displayMenu = () => {
  const toggleButtonSelect = document.getElementById('button-toogle-menu')
  console.log(toggleButtonSelect)

  const menuModal = document.getElementById('modal-menu')

  toggleButtonSelect.addEventListener('click', (event) => {
    console.log(event)
    menuModal.style.display = 'block'
  })
  const closeModalButton = document.getElementById('close-modal')
  closeModalButton.addEventListener('click', (event) => {
    console.log(event)
    menuModal.style.display = 'none'
  })
}

document.addEventListener('DOMContentLoaded', displayMenu)

//gallery

import { fetchRandomImages } from './API'
const createMainSection = document.createElement('main')
createMainSection.setAttribute('id', 'gallery-main')

const bodyElement = document.body

bodyElement.appendChild(createMainSection)

const galleryContainer = document.querySelector('#gallery-main')

const getGalleryContainerTemplate = () => {
  return `
  <div id="gallery" class="gallery-container"></div>
  `
}
galleryContainer.innerHTML += getGalleryContainerTemplate()
const getHeader = document.body.querySelector('header')
getHeader.appendChild(galleryContainer)

const galleryElement = document.getElementById('gallery')

const getImageTemplate = (id, alt, url, author) => `
<div class="image-container">
  <p class="display-none" id="save">SAVE</p>
  <img src="${url}" id="${id}" alt="${alt}" />
  <div class="text-container">
    <p class="display-none">${author}</p>
    <div id="left-text-container" >
      <a class="display-none"><img src="./public/assets/externalLinkIcon.png" alt="" class="display-none"/></a>
      <a class="display-none"><img src="./public/assets/icons8-more-30.png" alt="" class="display-none"/></a>
    </div>
  </div>
</div>
`

async function handleImages() {
  try {
    const images = await fetchRandomImages()
    for (const [id, alt, url, author] of images) {
      const imageValues = getImageTemplate(id, alt, url, author)
      galleryElement.innerHTML += imageValues
    }
    console.log('ok')
  } catch (error) {
    console.error(error)
  }
}
handleImages()
