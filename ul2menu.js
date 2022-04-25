let ul2menu = class{

    ul = null;

    static href = null;
    static cssLoaded = false;

    constructor(ul){
        this.ul = ul;
        ul2menu.loadCss();
        ul2menu.init(ul);
    }

    static loadCss = function(){
        if(!ul2menu.cssLoaded){
            let head = document.getElementsByTagName('HEAD')[0];
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = ul2menu.href.replace('.js', '.css');
            head.appendChild(link);
            ul2menu.cssLoaded = true;
        }
    }

    static init = function(ul){
        for(let li of ul.querySelectorAll(':scope > li')){
            li.addEventListener('mouseenter', function(){ul2menu.onMouseEnterLi(this)});
            li.addEventListener('mouseleave', function(){ul2menu.onMouseLeaveLi(this)});
            for(let ul of li.querySelectorAll('ul')){
                ul.classList.remove('ul2menu-on');
                ul.classList.add('ul2menu-off');
                ul2menu.init(ul);
            }
        }
    }

    static onMouseEnterLi = function(li){
        for(let ul of li.querySelectorAll(':scope > ul')){
            ul.classList.remove('ul2menu-off');
            ul.classList.add('ul2menu-on');
        }
    }

    static onMouseLeaveLi = function(li){
        for(let ul of li.querySelectorAll(':scope > ul')){
            ul.classList.remove('ul2menu-on');
            ul.classList.add('ul2menu-off');
        }
    }

}

ul2menu.href = document.currentScript.src;