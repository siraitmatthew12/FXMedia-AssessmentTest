const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const search = document.querySelector('#search')
const searchBar = document.querySelector('.searching')

search.addEventListener('click', function(){
    search.classList.toggle('is-active');
    searchBar.classList.toggle('active');
})

const searching = document.querySelector('#search-btn')
const searchingBar = document.querySelector('.nav-search')

searching.addEventListener('click', function(){
    searching.classList.toggle('is-active');
    searchingBar.classList.toggle('active');
})


const read = document.querySelector('.news-read-more')
const viewRead = document.querySelector('.news-more')

read.addEventListener('click', function(){
    read.classList.toggle('is-active');
    viewRead.classList.toggle('active');
})

const read1 = document.querySelector('.read')
const viewRead1 = document.querySelector('.upcoming-news-more-p')

read1.addEventListener('click', function(){
    read1.classList.toggle('is-active');
    viewRead1.classList.toggle('active');
})

const read2 = document.querySelector('.read1')
const viewRead2 = document.querySelector('.upcoming-news-more-p1')

read2.addEventListener('click', function(){
    read2.classList.toggle('is-active');
    viewRead2.classList.toggle('active');
})

const menu2 = document.querySelector('.fa-ellipsis-h')
const viewMenu2 = document.querySelector('.news-section ul')

menu2.addEventListener('click', function(){
    menu2.classList.toggle('is-active');
    viewMenu2.classList.toggle('active');
})