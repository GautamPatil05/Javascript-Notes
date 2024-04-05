/* code from console

// getElementById ---------------------

document.getElementById('title')
<h1 id="title" class="heading">This is about the Document Object Model </h1>

document.getElementById('title').className
'heading'

document.getElementById('title').getAttribute('class')
'heading'

document.getElementById('title').getAttribute('id')
'title'

document.getElementById('title').setAttribute('id', 'test')
undefined // changes the id to test

const title = document.getElementById('title') // assign h1 tag to title

title.style.backgroundColor="blue"
'blue'

title.style.color="yellow"
'yellow' // and many more changes

// Altering with content/inner text ---------------------------------

1. title.textContent
'This is about the DOM test text ' // print hole content that present in particular tag

2. title.innerHTML
'This is about the DOM <span style="display: none;">test text</span> ' // it also print the html written inside

3. title.innerText
'This is about the DOM' // print only visible text


document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]0: h1#title.headingtitle: h1#title.headinglength: 1[[Prototype]]: HTMLCollection
// gives HTML Collection

// querySelector ----------------------

document.querySelector('h2') // return only first h2
<h2>​Lorem ipsum dolor sit amet.​</h2>​ 

document.querySelector('#title')
<h1 id=​"title" class=​"heading">​…​</h1>​

document.querySelector('.heading')
<h1 id=​"title" class=​"heading">​…​</h1>​

document.querySelector('input[type="password"]')
<input type=​"password" name id>​

// changing color of unordered lists first element

document.querySelector('ul')
<ul>​…​</ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​

const myUl = document.querySelector('ul')

myUl.querySelector('li')
<li>​…​</li>​

const myLi = myUl.querySelector('li')

myLi.style.color="red"
'red'

// querySelectorAll ----------------------

document.querySelectorAll('li')
NodeList(3) [li, li, li]

const liItems = document.querySelectorAll('li')

liItems[2].style.color = 'green'

// getElementByClassName ------------------------

document.getElementsByClassName('list-Item')
// doesn't has forEach, etc methods, need to convert to array

const convertedListItem = Array.from(listItem)

convertedListItem.forEach( (li) => {
    li.style.color= 'yellow'
})

// Doing fun with wikipedia pages

const allH2 = document.querySelectorAll('h2')

allH2[2].style.backgroundColor = 'yellow'

allH2[1].innerText



*/