// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        screenWidth: 0,//背景宽度
        screentHeight: 0,//背景高度
        width: 0,//当前精灵宽度
        height: 0,//当前精灵高度
        deltaX: 0,//移动坐标
        deltaY: 0//移动坐标
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onLoad:function(){
        var size = this.node.getContentSize();
        this.width = size.width;
        this.height = size.height;
        console.log("plane width:"+this.width+",height:"+this.height);
    },

    update:function(dt){
        var p = this.node.getPosition();
        var moveP = cc.p(p.x+this.deltaX,p.y+this.deltaY);
        this.node.setPosition(moveP);
        this.deltaX = 0;
        this.deltaY = 0;

        console.log("cccp x:"+this.node.position.x+",y:"+this.node.position.y);
        var wp = this.node.convertToWorldSpace(this.node.position);
        console.log("wwwp x:"+wp.x+",y:"+wp.y);
    },

    vertifyRect:function(){
        var vp = this.node.getPosition();
        var wp = this.node.convertToWorldSpaceAR(vp);
        var moveP = cc.p(vp.x+this.deltaX,vp.y+this.deltaY);
        console.log("p x:"+wp.x+",y:"+wp.y);

        var rect = new cc.Rect(-this.screenWidth/2,-(this.screentHeight/2-this.height/2),this.screenWidth,this.screentHeight);
        console.log("rect x:"+rect.x+",y:"+rect.y+",w:"+rect.width+",h:"+rect.height);
        if(rect.contains(moveP)){
            return true;
        }
        return false;
    }

    // update (dt) {},
});
