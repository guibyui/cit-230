
function getJson(url = null) {
   if (!url) {
      url = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'
   }
   return fetch(url)
      .then(res => {
         if (res.ok) {
            return res.json();
         } else {
            console.log('error!');
            throw new Error('response not ok');
         }
      })
      .catch(err => {
         console.log('getJson', err);
      });
}


function getData(url = null) {

   const myList = document.getElementById('list');
   getJson().then(data => {   
      console.log(data);
      const newArray = data.results
         .map(item => {
            return `<li>${item.name}</li>`;
         })
         .join('');
      console.log(newArray);
      myList.innerHTML = newArray;
         const next = document.createElement('button');
         next.innerHTML = 'next';
         next.addEventListener('click', () => {getData(data.next)});
         myList.appendChild(next);
   });
}

getData();