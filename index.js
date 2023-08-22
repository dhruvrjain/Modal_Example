var close=document.getElementById('close')
var open=document.getElementById('open')
var modalContainer=document.getElementById('modal-container')
var modal=document.getElementById('modal')

open.addEventListener('click',function(){
    modalContainer.style.display='block'
    modal.style.animationName='openModal'
})

close.addEventListener('click',function(){
    modal.style.animationName='closeModal'
    setTimeout(function(){
        modalContainer.style.display='none'
    },400)
})

window.addEventListener('click',function(e){
    if(e.target===modalContainer){
        modal.style.animationName='closeModal'
        setTimeout(function(){
            modalContainer.style.display='none'
        },400)
    }
})