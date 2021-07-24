$(function(){

    function RippleStyle(width,height,posX,posY){
        this.width= (width <= height) ? height : width;
        this.height= (width <= height) ? height:width;
        this.top= posY- (this.height*.5);
        this.left= posX-(this.width*.5);

    }
    $('.btn').on('mousedown',function(e){
        var rippleEl=$('<span class="btn-ripple"></span>').appendTo(this);

        var pos=$(this).offset();

        var width=$(this).outerWidth()
        var height=$(this).outerHeight();

        var posX= e.pageX-pos.left;
        var posY= e.pageY-pos.top;

        var rippleStyle=new RippleStyle(width,height,posX,posY);

        rippleEl.css(rippleStyle)
    });
    $('.btn').on('animationend webkitAnimationEnd oanimantionend MSAnimationEnd','.btn-ripple',function(){
        $(this).remove();
    })
      
    });