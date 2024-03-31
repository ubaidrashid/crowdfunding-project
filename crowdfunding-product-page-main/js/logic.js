none = document.querySelector('.none')
selectionModal = document.querySelector('.selection-modal')
overLay = document.querySelector('.overlay')


// =======================
// slelectionmodal
// =======================
circles = document.querySelector('.circles')
newNew = document.querySelector('.newnew')
newNew2 = document.querySelector('.newnew2')
newNew3 = document.querySelector('.newnew3')
newNew4 = document.querySelector('.newnew4')
one=document.querySelector('.one')

midMid = document.querySelector('.midmid')
midMid2 = document.querySelector('.midmid2')
midMid3 = document.querySelector('.midmid3')
midMid4 = document.querySelector('.midmid4')
two=document.querySelector('.two')

oldOld = document.querySelector('.oldold')
oldOld2 = document.querySelector('.oldold2')
oldOld3 = document.querySelector('.oldold3')
oldOld4 = document.querySelector('.oldold4')
three=document.querySelector('.three')
onclickSelection = document.querySelector('.onclick-selection')
// forHover=document.querySelector('.forhover')


newNew.addEventListener('click', () => {
    newNew2.classList.toggle('none')
    newNew4.classList.toggle('none')
    newNew3.classList.add('onclick-selection')
})
one.addEventListener('click', () => {
    newNew2.classList.toggle('none')
    newNew4.classList.toggle('none')
    newNew3.classList.add('onclick-selection')
})


oldOld.addEventListener('click', () => {
    oldOld2.classList.toggle('none')
    oldOld4.classList.toggle('none')
    oldOld3.classList.add('onclick-selection')
})
two.addEventListener('click', () => {
    oldOld2.classList.toggle('none')
    oldOld4.classList.toggle('none')
    oldOld3.classList.add('onclick-selection')
})


midMid.addEventListener('click', () => {
    midMid2.classList.toggle('none')
    midMid4.classList.toggle('none')
    midMid3.classList.add('onclick-selection')
})
three.addEventListener('click', () => {
    midMid2.classList.toggle('none')
    midMid4.classList.toggle('none')
    midMid3.classList.add('onclick-selection')
})
// =======================
// slelectionmodal end
// =======================

// =======================
// for open slelectionmodal 
// =======================
head_p_button = document.querySelector('.head-p-button')

head_p_button.addEventListener('click', () => {
    selectionModal.classList.toggle('none')
    overLay.classList.toggle('none')
})

// =======================
// for open slelectionmodal end
// =======================
// =======================
// for close slelectionmodal end
// =======================

closer = document.querySelector('.close')

closer.addEventListener('click', () => {
    selectionModal.classList.add('none')
    overLay.classList.add('none')
})
// =======================
// for close slelectionmodal end
// =======================


// =======================
// for open successmodal end
// =======================




space = document.querySelector('.space')
space2 = document.querySelector('.space2')
forWidth = document.querySelector('.forwidth')
successModel = document.querySelector('.success-model')

forWidth.addEventListener('click',()=>{
    selectionModal.classList.add('none')
    successModel.classList.toggle('none')
})
space.addEventListener('click',()=>{
    selectionModal.classList.add('none')
    successModel.classList.toggle('none')
})
space2.addEventListener('click',()=>{
    // selectionModal.classList.add('none')
    // successModel.classList.toggle('none')
})

// =======================
// for open successmodal end
// =======================

// =======================
// for close successmodal end
// =======================
succesButton = document.querySelector('.succes-button')

succesButton.addEventListener('click',()=>{
    successModel.classList.add('none')
    overLay.classList.add('none')
})


// =======================
// for close successmodal end
// =======================
// =======================
// for nav start
// =======================
menu = document.querySelector('.menu')
items = document.querySelector('.items')
newClose = document.querySelector('.new-close')
menuHide = document.querySelector('.menu-hide')

menu.addEventListener('click',()=>{
    menu.classList.add('menu-hide')
    items.classList.toggle('menu-hide')
    newClose.classList.toggle('none')
    overLay.classList.toggle('none')
})
newClose.addEventListener('click',()=>{
    overLay.classList.add('none')
    items.classList.add('menu-hide')
    newClose.classList.add('none')
    menu.classList.toggle('menu-hide')

    
})

// =======================
// for nav end
// =======================

















