const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


/* const imagesEl = images.map(image =>{

  const imageItemListEl = document.createElement('li');
    imageItemListEl.classList.add('item');

  const imageItemEl = document.createElement('img');
    imageItemEl.classList.add('img');
    imageItemEl.alt = image.alt;
    imageItemEl.src = image.url;
    imageItemEl.width = 320;

    imageItemListEl.append(imageItemEl);

  return imageItemListEl;
  })



  const listEl = document.querySelector('.gallery')
  listEl.append(imagesEl);
  console.log(imagesEl) */

  const imagesEl = images.map(image =>{

    return  `<li class = item,><img class=img, alt = '${image.alt}', src= ${image.url}, width = 420px, height = 260px></li>`
    })
    .join('');
  
  
  
    const listEl = document.querySelector('.gallery')
    listEl.style.display = 'flex';
    listEl.style.justifyContent = 'space-between';
    listEl.insertAdjacentHTML('afterbegin', imagesEl);
    console.log(imagesEl)