cinematography = document.querySelector('.cinematography')
category = document.querySelector('.category')
cats = document.querySelector('.cats')
categoryBtn = document.querySelector('.categoryBtn')

document.addEventListener('DOMContentLoaded', async function getAllCinematography() {
  const response = await fetch("http://127.0.0.1:8000/getCinematography/", {
    method: "GET",
  });
  result = await response.json();
  for (i of result) {
    div = cinematography.appendChild(document.createElement('div'))
    div.classList.add('cinematographyElement')
    cinemaName = div.appendChild(document.createElement('h')).innerHTML = i.name
    cinemaImage = div.appendChild(document.createElement('img')).src = `${i.image}`
    cinemaVariety = div.appendChild(document.createElement('p')).innerHTML = 'Тип: ' + i.variety
    cinemaDirector = div.appendChild(document.createElement('p')).innerHTML = 'Режиссёр: ' + i.director
    cinemaDescription = div.appendChild(document.createElement('p')).innerHTML = i.description
  }
})

async function CinematographyByGenre() {
  category.style.display = 'block'
  const response = await fetch("http://127.0.0.1:8000/getGenres/", {
      method: "GET",
  });
  result = await response.json();
  cats.innerHTML = ''
  cats.style.paddingBottom = '10px'
  for (i of result) {
    cats_li = cats.appendChild(document.createElement('li'))
    h = cats_li.appendChild(document.createElement('h'))
    p = cats_li.appendChild(document.createElement('p'))
    h.innerHTML = i.genre_name
    h.href = '#'
    p.innerHTML = i.description
    let id = i.id
    let genre_name = i.genre_name
    h.addEventListener('click', async function(){
      const response = await fetch(`http://127.0.0.1:8000/getCinematographyByGenres/{id}?genre=${id}`, {
        method: "GET",
      });
      result = await response.json();
      cinematography.innerHTML = ''
      filmsCheckbox = document.querySelector('#films').checked
      serialsCheckbox = document.querySelector('#serials').checked
      if (filmsCheckbox  == true) {
        cinematography.innerHTML = ''
        for (i of result){
          if (i.variety == 'Фильм') {
            div = cinematography.appendChild(document.createElement('div'))
            div.classList.add('cinematographyElement')
            cinemaName = div.appendChild(document.createElement('h')).innerHTML = i.name
            cinemaImage = div.appendChild(document.createElement('img')).src = `${i.image}`
            cinemaVariety = div.appendChild(document.createElement('p')).innerHTML = 'Тип: ' + i.variety
            cinemaGenre = div.appendChild(document.createElement('p')).innerHTML = 'Жанр: ' + genre_name
            cinemaDirector = div.appendChild(document.createElement('p')).innerHTML = 'Режиссёр: ' + i.director
            cinemaDescription = div.appendChild(document.createElement('p')).innerHTML = i.description
          }
        }
      } if (serialsCheckbox == true) {
        cinematography.innerHTML = ''
        for (i of result){
          if (i.variety == 'Сериал') {
            div = cinematography.appendChild(document.createElement('div'))
            div.classList.add('cinematographyElement')
            cinemaName = div.appendChild(document.createElement('h')).innerHTML = i.name
            cinemaImage = div.appendChild(document.createElement('img')).src = `${i.image}`
            cinemaVariety = div.appendChild(document.createElement('p')).innerHTML = 'Тип: ' + i.variety
            cinemaGenre = div.appendChild(document.createElement('p')).innerHTML = 'Жанр: ' + genre_name
            cinemaDirector = div.appendChild(document.createElement('p')).innerHTML = 'Режиссёр: ' + i.director
            cinemaDescription = div.appendChild(document.createElement('p')).innerHTML = i.description
          }
        }
      } if ((serialsCheckbox == true) && (filmsCheckbox == true)) {
        cinematography.innerHTML = ''
        for (i of result){
          div = cinematography.appendChild(document.createElement('div'))
          div.classList.add('cinematographyElement')
          cinemaName = div.appendChild(document.createElement('h')).innerHTML = i.name
          cinemaImage = div.appendChild(document.createElement('img')).src = `${i.image}`
          cinemaVariety = div.appendChild(document.createElement('p')).innerHTML = 'Тип: ' + i.variety
          cinemaGenre = div.appendChild(document.createElement('p')).innerHTML = 'Жанр: ' + genre_name
          cinemaDirector = div.appendChild(document.createElement('p')).innerHTML = 'Режиссёр: ' + i.director
          cinemaDescription = div.appendChild(document.createElement('p')).innerHTML = i.description
        }
      }
    })
  }
}

CinematographyByGenre()
