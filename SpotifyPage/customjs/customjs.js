const avatars = [
  {
    id: 1,
    name: 'Hoodie Allen',
    image: './images/hoodie.jpg',
    bgImg: './images/hoodieBack.avif',
    montly: '12,100,33'
  },
  {
    id: 2,
    name: 'Mike Stud',
    image: './images/mikeprofile.jpeg',
    bgImg: './images/mikebg.webp',
    montly: '2,135,33'
  },
  {
    id: 3,
    name: 'Drake',
    image: './images/Drakeprofile.webp',
    bgImg: './images/drakebg.jpg',
    montly: '100,326,16'
  },
  {
    id: 4,
    name: 'J. Cole',
    image: './images/jcoleprofile.jpg',
    bgImg: './images/jcolebg.jpg',
    montly: '55,984,21'
  },
  {
    id: 5,
    name: 'Big Sean',
    image: './images/bigseanprofile.jpg',
    bgImg: './images/bigseanbg.jpg',
    montly: '33,941,22'
  },
  {
    id: 6,
    name: 'Wiz Khalifa',
    image: './images/wizprofile.webp',
    bgImg: './images/wizbg.jpg',
    montly: '632,245,99'
  },
  {
    id: 7,
    name: 'Yonas',
    image: './images/yonasprofile.jfif',
    bgImg: './images/yonasbg.jpg',
    montly: '1,345,33'
  },
  {
    id: 8,
    name: 'G-Eazy',
    image: './images/g_eazy_propic.jpg',
    bgImg: './images/custom_bg.png',
    montly: '15,662,810'
  }
]

const el = document.querySelectorAll('.related_artists_item')
const author = document.getElementById('author_image')
const author_Id = document.getElementById('gz')
const custom_bg = document.getElementById('custom_bg')
const montly = document.getElementById('montly')

function changeAvatars () {
  for (let i = 0; i < avatars.length; i++) {
    if (this.id == avatars[i].id) {
      author.src = avatars[i].image
      author_Id.innerHTML = `<h1>${avatars[i].name}</h1>`
      custom_bg.src = avatars[i].bgImg
      montly.textContent = avatars[i].montly

      //SCROLL TO TOP
      const elementInScrollableDiv = document.getElementById('scrollTop')
      const positionFromTopOfScrollableDiv = elementInScrollableDiv.offsetTop

      const scrollableDivElement = document.getElementById('top')
      scrollableDivElement.scrollTop = positionFromTopOfScrollableDiv
    }
  }
}

el.forEach(element => {
  element.addEventListener('click', changeAvatars)
})


