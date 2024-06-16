const hash= document.querySelector('#hash');
const nav_container=document.querySelector('.nav_container');
const cross= document.querySelector('#cross');



hash.addEventListener('click',()=>{
    nav_container.classList.add('active');
    console.log(nav_container);
})

cross.addEventListener('click',()=>{
    nav_container.classList.remove('active');
})

