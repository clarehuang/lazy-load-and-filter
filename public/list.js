/* products array */
let prodArray = [
  {
    card__body__prodName: 'Silver Round Accessory With Storage - Black Tea',
    card__header__image: 'https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    card__body__prodMRSP: '$129.99',
    card__body__prodSP: 99.99,
    url: 'https://www.pexels.com/search/tea/'
  },
  {
    card__body__prodName: 'Lighted Tealight Beside Wooden Stick and Ceramic Teapot - Oolong Tea',
    card__header__image: 'https://images.pexels.com/photos/2072592/pexels-photo-2072592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    card__body__prodMRSP: '$89.99',
    card__body__prodSP: 69.99,
    url: 'https://www.corsair.com/us/en/p/CH-9102014-NA'
  },
  {
    card__body__prodName: 'Clear Glass Cup on Brown Wooden Table - Green Tea',
    card__header__image: 'https://images.pexels.com/photos/230483/pexels-photo-230483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    card__body__prodMRSP: '$199.99',
    card__body__prodSP: 129.99,
    url: 'https://www.pexels.com/search/tea/'
  },
  {
    card__body__prodName: 'White and Brown Ceramic Mug - Herbal Tea',
    card__header__image: 'https://images.pexels.com/photos/1793034/pexels-photo-1793034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    card__body__prodMRSP: '$129.99',
    card__body__prodSP: 99.99,
    url: 'https://www.pexels.com/search/tea/'
  },
  {
    card__body__prodName: 'Macro Photography of Clear Drinking Glass With Lemon Fruit and Black Straw - Fruit Tea',
    card__header__image: 'https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    card__body__prodMRSP: '$99.99',
    card__body__prodSP: 83.99,
    url: 'https://www.pexels.com/search/tea/'
  },
  {
    card__body__prodName: 'Lady Night - Fruit Tea ',
    card__header__image: 'https://images.pexels.com/photos/1893530/pexels-photo-1893530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    card__body__prodMRSP: '$59.99',
    card__body__prodSP: 49.99,
    url: 'https://www.pexels.com/search/tea/'
  },
  {
    card__body__prodName: 'Red Beverage-filled Clear Glass Mason Mug With Straw - Fruit Tea',
    card__header__image: 'https://images.pexels.com/photos/914241/pexels-photo-914241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    card__body__prodMRSP: '$29.99',
    card__body__prodSP: 19.99,
    url: 'https://www.pexels.com/search/tea/'
  },
  {
    card__body__prodName: 'Gold Teapot Pouring White Ceramic Teacup - Green Tea',
    card__header__image: 'https://images.pexels.com/photos/230490/pexels-photo-230490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    card__body__prodMRSP: '$59.99',
    card__body__prodSP: 43.99,
    url: 'https://www.pexels.com/search/tea/'
  },
  {
    card__body__prodName: 'Teacup With Tea — Black Tea',
    card__header__image: 'https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    card__body__prodMRSP: '$739.99',
    card__body__prodSP: 649.99,
    url: 'https://www.pexels.com/search/tea/'
  },
  {
    card__body__prodName: 'Black and White Ceramic Coffee Cup Filled With Coffee - Oolong Tea',
    card__header__image: 'https://images.pexels.com/photos/746383/pexels-photo-746383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    card__body__prodMRSP: '$29.99',
    card__body__prodSP: 19.99,
    url: 'https://www.pexels.com/search/tea/'
  },
  {
    card__body__prodName: 'Teapot And Teacups On Tray - Green Tea',
    card__header__image: 'https://images.pexels.com/photos/1872887/pexels-photo-1872887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    card__body__prodMRSP: '$59.99',
    card__body__prodSP: 43.99,
    url: 'https://www.pexels.com/search/tea/'
  },
  {
    card__body__prodName: 'Cup Tea With Saucer and Teaspoon — Black Tea',
    card__header__image: 'https://images.pexels.com/photos/842544/pexels-photo-842544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    card__body__prodMRSP: '$739.99',
    card__body__prodSP: 649.99,
    url: 'https://www.pexels.com/search/tea/'
  },
]
prodListing(prodArray)

/* create getSiblings function */
let getSiblings = function (elem) {
  // Setup siblings array and get the first sibling
  let siblings = [];
  let sibling = elem.parentNode.firstChild;
  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling
  }
  return siblings;
}

/* count and give the products with relative category name */
function categoryCount(arr) {
  const categoryMap = {
    'blacktea': [/black tea/i, 0],
    'greentea': [/green tea/i, 0],
    'oolongtea': [/oolong tea/i, 0],
    'herbaltea': [/herbal tea/i, 0],
    'fruittea': [/fruit tea/i, 0]
  }
  for (let i = 0; i < arr.length; i++) {
    //add category to each product
    for (let key in categoryMap) {
      if (prodArray[i].card__body__prodName.match(categoryMap[key][0])) {
        prodArray[i].data_category = key
        categoryMap[key][1] += 1
      }
    }
  }
  let all = 0
  //Method A: write with for...in...
  for (let key in categoryMap) {
    const countText = document.querySelector('.product-category__checkbox__count[data-options="' + key + '"]')
    all += categoryMap[key][1]
    countText.innerHTML = `(${categoryMap[key][1]})`
  }
  //Method B: write with for loop with Object.keys()
  // const categoryKeys = Object.keys(categoryMap)
  // for(let i=0; i < categoryKeys.length; i++){
  //   const countText = document.querySelector('.product-category__checkbox__count[data-options="'+ categoryKeys[i] + '"]')
  //   countText.innerHTML = `(${categoryMap[categoryKeys[i]][1]})`
  //   all += categoryMap[key][1]
  // }
  document.getElementById('checkbox_all').innerHTML = `(${all})`
}
categoryCount(prodArray)

/* display the product list with lazy load effect */
function prodListing(arr) {
  let content = ''
  // give category names
  for (let i = 0; i < arr.length; i++) {
    content += `<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 lazy_card">
                    <a class="card--link" data-category="${arr[i].data_category}" href="${arr[i].url}">
                      <div class="card__header lazyload_container">
                        <img class="card__header__image lazyload_img" data-boolean="isLazyLoad" data-src="${arr[i].card__header__image}" alt="${arr[i].card__body__prodName}">
                      </div>
                      <div class="card__body">
                        <h5 class="card__body__prodName">${arr[i].card__body__prodName}</h5>
                        <p class="card__body__prodMRSP"><strike>${arr[i].card__body__prodMRSP}</strike> <strong class="card__body__prodSP">$${arr[i].card__body__prodSP}</strong></p>
                      </div>
                    </a>
                  </div>`
  }
  const cardList = document.querySelector('.card-list')
  // Preventing cross-site scripting attacks
  cardList.innerHTML = `<script>alert("XSS Attack");</script>${content}`
  
  // Lazy Load
  const options = {
    lazyParentClass: '.lazyload_container',
    lazyItemClass: '.lazyload_img'
  }
  const lazyLoadParents = document.querySelectorAll(options.lazyParentClass)
  const lazyLoad = new IntersectionObserver(entries => {
    entries.map(entry => {
      // check if observed entry is intersecting
      if (!entry.isIntersecting) return false
      // target = intersected element
      const img = entry.target.querySelector(options.lazyItemClass)

      if (img) {
        if (img.dataset.srcset) {
          // move data-srcset to srcset
          img.srcset = img.dataset.srcset
          img.removeAttribute('data-srcset')
        }
        if (img.dataset.src) {
          // move data-src to src
          img.src = img.dataset.src
          img.removeAttribute('data-src')
        }
        // wait for image to load and addClass to fade in
        img.onload = () => img.classList.add('loaded')
      }
    })
  })
  lazyLoadParents.forEach(item => {
    // add items to IntersectionObserver
    lazyLoad.observe(item)
  })
}

/* product list - checkbox fuction */
let prodArray_checked = prodArray.slice()
const category = document.querySelector('.product-category')
category.addEventListener('click', categoryFilter)
function categoryFilter(e) {
  let matchCategory = ''
  document.querySelector('.product-filter__appearance').innerHTML = 'SORT PRODUCTS BY PRICE'
  let childrenArry = [].slice.call(document.querySelectorAll('.product-filter__menu__item'))
  childrenArry.forEach(item => {
    item.setAttribute('data-value', 0)
    item.className = 'product-filter__menu__item'
  })
  if (!e.target.classList.contains('product-category__checkbox')) {
    if (e.target.parentElement.classList.contains('checked')) {
      e.target.parentElement.classList.remove('checked')
    } else {
      e.target.parentElement.classList.add('checked')
      matchCategory = e.target.parentElement.getAttribute('data-options')
    }
    let siblings = getSiblings(e.target.parentElement)
    for (i = 0; i < siblings.length; i++) {
      siblings[i].classList.remove('checked')
    }
  } else {
    if (e.target.classList.contains('checked')) {
      matchCategory = e.target.getAttribute('data-options')
    } else {
      e.target.classList.add('checked')
      matchCategory = e.target.getAttribute('data-options')
      let siblings = getSiblings(e.target)
      for (i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('checked')
      }
    }
  }
  let newArray = []
  if (matchCategory !== 'all' && matchCategory !== null) {
    prodArray.map(item => {
      if (item.data_category == matchCategory) {
        return newArray.push(item)
      }
    })
  } else {
    newArray = prodArray.slice()
  }
  prodArray_checked = newArray
  prodListing(prodArray_checked)
}

/* product list - filter_hover effect */
const hover = document.querySelector('.product-filter__menu')
hover.addEventListener('mouseover', mouseOver);
hover.addEventListener('mouseout', mouseOut);
function mouseOver(e) {
  if (!e.target.classList.contains('is-hover')) {
    e.target.classList.add('is-hover')
  }
  let siblings = getSiblings(e.target)
  for (i = 0; i < siblings.length; i++) {
    siblings[i].classList.remove('is-hover')
  }
}
function mouseOut(e) {
  if (!e.target.classList.contains('is-clicked')) {
    e.target.classList.remove('is-hover')
  }
}

/* product list - filter_sort by price */
const filter = document.querySelector('.product-filter')
filter.addEventListener('click', filterOptions)
window.addEventListener('click', (e) => {
  let className = ['btn', 'product-filter__btn','product-filter__appearance', 'fa', 'fa-angle-down', 'product-filter__menu', 'product-filter__menu__item']
  if(!className.some(className => e.target.classList.contains(className))){
    document.querySelector('.product-filter__menu').classList.remove('open');
  }
})
function filterOptions(e) {
  const dropdownMenu = document.querySelector('.product-filter__menu')
  if (dropdownMenu.classList.contains('open')) {
    console.log('if contains open')
    dropdownMenu.classList.remove('open')
  } else {
    console.log('if not contains open')
    dropdownMenu.classList.add('open')
  }
  let className = ['product-filter__menu__item', 'is-hover']
  let appearance = ""
  if (className.every(className => e.target.classList.contains(className))) {
    e.target.setAttribute('data-value', 1)
    e.target.classList.add('is-hover', 'is-clicked')
    let siblings = getSiblings(e.target)
    for (i = 0; i < siblings.length; i++) {
      siblings[i].setAttribute('data-value', 0)
      siblings[i].classList.remove('is-clicked')
    }
    appearance = e.target.getAttribute('data-content')
    document.querySelector('.product-filter__appearance').innerHTML = appearance
    document.querySelector('.card-list').innerHTML = ""
    let prodArray_sorting = []
    if (!prodArray_checked) {
      prodArray_sorting = prodArray.slice()
    } else {
      prodArray_sorting = prodArray_checked.slice()
    }
    if (e.target.getAttribute('data-content') == "PRICE: LOW TO HIGH") {
      prodArray_sorting = prodArray_sorting.sort((a, b) => {
        return a.card__body__prodSP - b.card__body__prodSP
      })
    } if (e.target.getAttribute('data-content') == "PRICE: HIGH TO LOW") {
      prodArray_sorting = prodArray_sorting.sort((a, b) => {
        return b.card__body__prodSP - a.card__body__prodSP
      })
    }
    prodListing(prodArray_sorting)
  }
}

