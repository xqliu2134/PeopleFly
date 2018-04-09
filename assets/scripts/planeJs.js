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
        screentWidth: 0,//背景宽度
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
        console.log("screen width:"+this.screentWidth+",height:"+this.screentHeight);
        if(!this.vertifyRect()){
            return;
        }
        var p = this.node.getPosition();
        var moveP = cc.p(p.x+this.deltaX,p.y+this.deltaY);
        this.node.setPosition(moveP);
    },

    vertifyRect:function(){
        var vp = this.node.getPosition();
        var moveP = cc.p(vp.x+this.deltaX,vp.y+this.deltaY);
        var rect = new cc.Rect(-this.screentWidth/2,this.screentHeight/2-this.height/2,this.screentWidth/2-this.width/2,-this.screentHeight/2-this.height/2);
        if(rect.contains(moveP)){
            console.log("vertify true");
            return true;
        }
        console.log("vertify false");
        return false;
    }

    // update (dt) {},
});
