// const boxes = document.querySelectorAll('.box')

// window.addEventListener('scroll',checkbox)
// checkbox();

// function checkbox(){
//     const height  = window.innerHeight / 5 * 4

//     boxes.forEach(box=>{
//         const start = box.getBoundingClientRect().top

//         if(start < height){
//             box.classList.add('show')
//         }
//         else{
//             box.classList.remove('show')
//         }
//     })
// }

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        console.log(boxTop+'->'+triggerBottom)
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}