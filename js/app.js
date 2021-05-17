//getting sections
let sections = document.querySelectorAll('section');

//getting the empty list
let list = document.getElementById('navbar__list');

//creating a document fragment
let frag = document.createDocumentFragment();

//function for adding navbar items
function addItem() {
    //looping over all sections
    for (let section of sections) {
        //creating new li element
        let li = document.createElement('li');

        //getting anchor values
        let anchor = document.createElement('a');
        let link = section.getAttribute('id');
        let name = section.getAttribute('data-nav');
        anchor.innerHTML = `<a href='#${link}'>${name}</a>`;
        anchor.classList.add('menu__link');
        anchor.classList.add('navbar__menu');


        //appending children
        li.appendChild(anchor);
        frag.appendChild(li);



    }

    list.appendChild(frag);

}

//getting anchor elements
let anchors = document.querySelectorAll('a');

addItem()


//functions for active section

//intersectionobserver options
const options = {
    root: null,
    threshold: .5,
    rootMargin: '50px'
}

//observer function
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        //checking if section is intersectiog
        if (entry.isIntersecting) {
            //if yes add active class
            entry.target.classList.add('your-active-class')
        }
        //if not remove active class
        else {
            entry.target.classList.remove('your-active-class')
        }


    })
}, options)

//using observer on sections
sections.forEach(section => {
    observer.observe(section)

})
