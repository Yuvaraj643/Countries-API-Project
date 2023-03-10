const cont = document.querySelector(".container");
const row = document.querySelector(".row");

function fetchApiData() {
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data)
            createCards(data)
        })
}

fetchApiData();
    
  function createCards(data){
    data.forEach((country) => {
      const div = document.createElement('div')
      const div2 =document.createElement('div')
      const div3=document.createElement('div')

      div.classList.add('col')

      div2.classList.add('card')
      div2.classList.add('text-bg-light')
      div2.classList.add('mb-3')
      div2.classList.add('h-100')

      div3.classList.add('card-body')

      const img =document.createElement('img')
      img.src=country.flags.svg
      img.classList.add('card-img-top')
      img.classList.add('rounded')
      img.classList.add('mx-auto')
      img.classList.add('d-block')

      const heading = document.createElement('h1')
      heading.innerHTML=country.name.common

      const title2 = document.createElement('h3')
      title2.innerHTML=`<b>Capital&nbsp</b>:&nbsp${country.capital}`

      const title3 = document.createElement('h3')
      title3.innerHTML=`<b>Region&nbsp</b>:&nbsp${country.region}`

      const title4 = document.createElement('h3')
      title4.innerHTML=`<b>Population&nbsp</b>:&nbsp${country.population}`
      

      div2.appendChild(div3)
      div2.appendChild(img)
      div3.appendChild(heading)
      div3.appendChild(title2)
      div3.appendChild(title3)
      div3.appendChild(title4)


      cont.appendChild(row)
      row.appendChild(div)
      div.appendChild(div2)
      div2.appendChild(div3)
      
    })
  }
