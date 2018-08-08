//first
class Area {
    constructor() {
        // this.width = window.innerWidth;
        // this.height = window.innerHeight;
        this.space = 250;
        this.gap = 15;
        this.itemHeight = this.space + this.gap;

        // this.column = Math.floor(this.width / (this.space + 15));
        // this.endPos = -(this.itemHeight);
        // this.startPos = this.column * this.itemHeight;
    }

    init(){
        // console.log(this.column);
        this.onResize();

        $(window).on('resize',()=>this.onResize());
    }

    onResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.column = Math.floor(this.width / (this.space + 15));
        this.endPos = -(this.itemHeight);
        this.startPos = this.column * this.itemHeight;
        
        images.onResize();
    }

}

class Timer {
    constructor() {
        this.timer;
        this.count = 0;
        this.ismoved = false;
    }

    init() {
        this.play();
    }
    update() {
        // console.log(performance.now());
        this.count++;
        // if(this.count === 1) {
            // this.count = 0;
            images.update();
        // }


        this.timer = requestAnimationFrame(()=>this.update());

        if (this.count === 60) {
            this.count = 0;
        }
    }
    stop() {
        console.log('stop');
        cancelAnimationFrame(this.timer);
        this.ismoved = false;
    }
    play() {
        if(this.ismoved) return;
        this.start = performance.now();
        this.update();
        this.ismoved = true;
    }
}

class Images {
    constructor() {
        this.images = [];
        this.length = 20;
        for(let i = 0; i < this.length; i++) {
            // this.images.push(
            //     {'src':'img/img ('+i+').jpg'}
            // );
            this.images.push(
                new Img(i)
            );
        }
    }

    init() {
        for(let i = 0; i < this.length; i++) {
            this.images[i].init();
        }
    }

    update() {
        for(let i = 0; i < this.length; i++) {
            this.images[i].update();
        }
    }

    takashi(current,index) {
        // const top = 
        // const bottom =
        const right = (current+1===area.column)? 0:current+1;
        const left = (current === 0)? area.column:current-1;
    }

    onResize() {
        for(let i = 0; i < this.length; i++) {
            this.images[i].setPos();
        }
    }
}

class Img {
    constructor(num) {
        this.index = num;
        this.path = 'url("/img/img ('+num+').jpg")';
        this.elm = $('<span>')
        .addClass('image')
        .css({
            'background-image':this.path,
            'width': "250px",
            'height': "250px",
            'display': 'block'
        }).appendTo('#js-area');
        this.top;
        this.left;
        this.col;
        this.row;
        this.speed = 3;
        this.istouched = false;
        this.delay;
    }

    init(){
        this.setPos();
        this.elm.on('mouseleave',()=>this.onMouseLeave());
        this.elm.on('mouseenter',()=>this.onMouseEnter());

        this.elm.on('click',()=>this.onClick());
    }

    onMouseEnter(){
        this.istouched = true;
        timer.stop();
        // clearTimeout(this.delay);
        this.delay = setTimeout( ()=>{
            this.istouched = true;
                }
            ,100);

        timer.takashi(this.col);
    }

    onMouseLeave(){
        // this.delay = setTimeout( ()=>{
        //     console.log(this);
        //         }
        //     ,1000);
        this.istouched = false;
            if(!this.istouched)this.play();
    }

    play() {
        timer.play();
    }

    onClick() {
        this.istouched = true;
        timer.stop();
        // clearTimeout(this.delay);
        modal.setImage(this.path);
        modal.open();
    }
    
    scale() {

    }

    akira(pos,power) {
        
    }

    moveTo(x=this.left,y=this.top) {
        this.elm.css({
            'transform':'translate3d('+x+'px,'+y+'px,0)'
        });
    }

    update() {
        this.top -= this.speed;
        this.moveTo();
        
        if(this.top < area.endPos) this.rollback();
    }

    rollback() {
        this.top = area.startPos;
        this.moveTo();
    }

    setPos() {
        this.col = this.index % area.column;
        this.row = Math.floor(this.index / area.column);
        this.left = (area.space+area.gap) * this.col;
        this.top = (area.space+area.gap) * this.row;
        this.moveTo();
    }
}

class Modal {
    constructor() {
        this.$target = $('#js-modal>span');
        this.$modal = $('#js-modal');
        this.$overlay = $('#js-overlay');
    }

    init() {
        this.$overlay.on('click',()=>this.close());
    }

    setImage(path) {
        this.$target.css('background-image',path)
    }

    open() {
        this.$modal.addClass('active');
        this.$overlay.addClass('active');
    }
    close() {
        this.$modal.removeClass('active');
        this.$overlay.removeClass('active');
    }
}


class Main {
    constructor() {
        area.init();
        images.init();
        modal.init();

    }
}
const area = new Area();
const images = new Images();
const timer = new Timer();
const modal = new Modal();
timer.play();

new Main();