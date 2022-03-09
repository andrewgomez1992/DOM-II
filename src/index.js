import './less/index.less'

// Your code goes here!


// DIFFERENT EVENT TYPE EXAMPLES

// 1 - load 
window.onload = function(evt) {
    // console.log(`event ${evt.type} fired!`);
    const heading = document.querySelector('h1');
    heading.textContent = 'Ready to Go!';


    // 2 - copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })


    // 3 - click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    // 4 - dblclick
    // add listenin to document body and make the inner most element disappear
    document.body.addEventListener("dblclick", evt => {
        evt.target.outerHTML = ""
    })

    // 5 - keydown
    window.addEventListener('keydown', evt => {
        if (evt.key == 5) {
            document.body.innerHTML = "<h1>You ran Order 5</h1>"
        }
    })

    // 6 - mousemove
    document.body.addEventListener('mousemove', evt => {

        const { clientX, clientY } = evt
        console.log(`mouse is at ${clientX}, ${clientY}`)

    })


    // 7 - moouseenter
    // 8 - mouseleave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            setTimeout(() => {
                destination.style.fontWeight = 'initial'
            }, 500)
        })
    }

    // 9 - ZOOM WITH MOUSE WHEEL
    let scale = 1;
    const el = document.querySelector('footer');
    el.onwheel = zoom;

    function zoom(event) {
        event.preventDefault();
        scale += event.deltaY * -0.01;
        // Restrict scale
        scale = Math.min(Math.max(.125, scale), 4);
        // Apply scale transform
        el.style.transform = `scale(${scale})`;
    }



}

// Scroll
window.addEventListener('scroll', () => {
    body.style.backgroundColor = 'black';
});