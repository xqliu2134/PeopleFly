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
        mainbg:{
            default:null,
            type:cc.Node
        },
        enemy01:{
            default:null,
            type:cc.Prefab
        },
        plane:{
            default:null,
            type:cc.Node
        }
    },

    onLoad:function(){
        var newPlane = this.plane;
        var size = this.node.getContentSize();
        console.log("game size width:"+size.width+",height:"+size.height);
        newPlane.getComponent("planeJs").screenWidth = size.width;
        newPlane.getComponent("planeJs").screentHeight = size.height;

        var clickflag = false;
        this.mainbg.on(cc.Node.EventType.MOUSE_DOWN,function(event){
            clickflag = true;
        });

        this.mainbg.on(cc.Node.EventType.MOUSE_UP,function(event){
            clickflag = false;
            newPlane.getComponent("planeJs").deltaX = 0;
            newPlane.getComponent("planeJs").deltaY = 0;
        });

        this.mainbg.on(cc.Node.EventType.MOUSE_MOVE,function(event){
            if(clickflag){
                var delta = event.getDelta();
                newPlane.getComponent("planeJs").deltaX = delta.x;
                newPlane.getComponent("planeJs").deltaY = delta.y;
            }
        });
        this.createEnemy01();
    },

    createEnemy01:function(){
        var newEnemy01 = cc.instantiate(this.enemy01);
        console.log("createEnemy01 : "+newEnemy01);
        newEnemy01.setPosition(cc.p(-334,286));
        this.node.addChild(newEnemy01);
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
