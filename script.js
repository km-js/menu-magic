let arrow = document.querySelector('.arrow');
let menu = document.querySelector('.menu');
let select = document.querySelector('.select');
let li = document.querySelector('.menu li')


let list = [{ title: 'Facebook', image: './images/facebook.png' }, { title: 'Twitter', image: './images/twitter.png' }, { title: 'Youtube', image: './images/youtube.png' }, { title: 'Whatsapp', image: './images/whatsapp.png' }, { title: 'Pinterest', image: './images/pinterest.png' }]

let menuOpen = false;
select.addEventListener('click', function () {
    let divElement = document.createElement('div');

    let ulElement = document.createElement('ul');


    if (!menuOpen) {
        list.forEach(item => {
            let liElement = document.createElement('li');
            let imgElement = document.createElement('img');
            let textNode = document.createTextNode(item.title)

            imgElement.src = item.image;

            liElement.appendChild(imgElement);
            liElement.appendChild(textNode);
            ulElement.appendChild(liElement);

            liElement.addEventListener('click', function () {
                console.log("list clicked")
                menu.innerHTML = '';
                select.textContent = item.title;
                select.style.textAlign = 'left';
                arrow.classList.remove('reverse-image');
                select.appendChild(arrow)
                menuOpen = !menuOpen;
            })

        })

        divElement.appendChild(ulElement);
        menu.innerHTML = ''
        menu.appendChild(divElement);
        arrow.classList.add('reverse-image');
        menuOpen = !menuOpen;
    }
    else {
        handleMenuClosed()
    }
})

function handleMenuClosed() {
    menu.innerHTML = '';
    arrow.classList.remove('reverse-image');
    menuOpen = !menuOpen;
}



