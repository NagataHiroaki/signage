//first
class Area {
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.space = 250;
        this.gap = 15;
        this.column = Math.floor(this.width / (this.space + 15));
    }

    init(){
        // console.log(this.column);

        $(window).on('resize',()=>this.onResize());
    }

    onResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.column = Math.floor(this.width / (this.space + 15));
        
        images.onResize();
    }

}

class time {
    
}

class Images {
    constructor() {
        this.images = [];
        for(let i = 0; i < 100; i++) {
            // this.images.push(
            //     {'src':'img/img ('+i+').jpg'}
            // );
            this.images.push(
                new Img(i)
            );
        }
    }

    init() {
        for(let i = 0; i < 100; i++) {
            this.images[i].init();
        }
    }

    onResize() {
        for(let i = 0; i < 100; i++) {
            this.images[i].setPos();
        }
    }
}

class Img {
    constructor(num) {
        this.index = num;
        this.elm = $('<span>')
        .addClass('image')
        .css({
            'background-image':'url("/img/img ('+num+').jpg")',
            'width': "250px",
            'height': "250px",
            'display': 'block'
        }).appendTo('#js-area');
    }

    init(){
        this.setPos();
    }
    
    scale() {

    }

    moveTo() {

    }

    setPos() {
        this.col = this.index % area.column;
        this.row = Math.floor(this.index / area.column);
        this.left = (area.space+area.gap) * this.col;
        this.top = (area.space+area.gap) * this.row;
        this.elm.css({
            'transform':'translate3d('+this.left+'px,'+this.top+'px,0)'
        })
    }
}


class Main {
    constructor() {
        area.init();
        images.init();

    }
}
const area = new Area();
const images = new Images();

new Main();