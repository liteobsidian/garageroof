//slowScroll for all links
document.querySelectorAll('a[href^="#"').forEach(link => {
	
	let navbar = document.querySelector('#fixedNavbar');

    link.addEventListener('click', function(event) {
        event.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        let topOffset=navbar.offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});








//Visible navbar on scroll

let onVisibleElement = document.querySelector('#header_container');

let Visible = (target) => {
  let navbar = document.querySelector('#fixedNavbar');
  // Все позиции элемента
  let targetPosition = {
      top: window.scrollY + target.getBoundingClientRect().top,
      bottom: window.scrollY + target.getBoundingClientRect().bottom
    };
    // Получаем позиции окна
  let windowPosition = {
      top: window.scrollY,
      bottom: window.scrollY + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom)  { 
    navbar.classList.remove('visible')
  } else {
    // Если элемент не видно, то запускаем этот код
    navbar.classList.add('visible')
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (onVisibleElement);
});

Visible (onVisibleElement);

//Open burger menu

let openBurger = () => {
	let burger = document.querySelector('#burger');
	let modalBurger = document.querySelector('#blackBurger');
	let modalMenu = document.querySelector('#modalMenu');
	let menuWrap = document.querySelector('.menuWrap');
	let closeMenu = document.querySelector('#closeMenu');
    let overflow = document.querySelector('.menuOverflow');
    let links = document.querySelectorAll('.modalMenu a');
	
    let open = () => {
        modalMenu.classList.add('visible')
		menuWrap.classList.add('fadeLeft')
		burger.classList.add('rotate')
		modalBurger.classList.add('rotate')
    };
    
    let close = () => {
        modalMenu.classList.remove('visible')
		menuWrap.classList.remove('fadeLeft')
		burger.classList.remove('rotate')
		modalBurger.classList.remove('rotate')
    }
    
	burger.onclick = open;
	
	modalBurger.onclick = open;
	
	closeMenu.onclick = close;
    
    overflow.onclick = (event) => {
        let target = event.target;
        if (target.tagName != 'IMG' && target.tagName != 'A' && target.classList[0] != 'menuWrap' && target.classList[0] != undefined) { 
            close();
        } else {return};
     };
    for (let i=0; i<links.length; i++) {
        links[i].onclick = close;
    }
}

openBurger();


//Open Gallery

let openGallery = () => {
	let gallery = document.getElementsByClassName('galleryJsGet');
	let modalGallery = document.getElementsByClassName('galleryItem');
    let modalGalleryImage = document.querySelectorAll('.galleryItem img:first-child');
    let modalVisible = document.querySelector('.modalGallery');
    let closeGallery = document.querySelectorAll('.galleryItem .close');
    let overflow = document.querySelector('.galleryOverflow')
    
	console.log (modalGalleryImage);
	gallery.length===!modalGallery.length? alert('количество слайдов в модальной галерее не соответствует превью') : console.log ('галерея собрана правильно');
    
    for(let i=0; i<gallery.length; i++) {
        gallery[i].onclick = () => {
            modalVisible.classList.remove('hidden');
            modalGallery[i].classList.remove('hidden');
            modalVisible.classList.add('visible');
            modalGallery[i].classList.add('fadeIn');
            closeGallery[i].onclick = () =>{
                modalVisible.classList.remove('visible');
                modalGallery[i].classList.remove('fadeIn');
                modalVisible.classList.add('hidden');
                modalGallery[i].classList.add('hidden');
            };
            overflow.onclick = (event) => {
                let target = event.target;
                console.log(target.tagName );
                if (target.tagName != 'IMG') { 
                  modalVisible.classList.remove('visible'),
                  modalGallery[i].classList.remove('fadeIn'),
                  modalVisible.classList.add('hidden'),
                  modalGallery[i].classList.add('hidden')
                } else {return};
            };
        };
    };
   
};

openGallery();







