enchant();
window.onload = function() {	//ロード
    var game = new Game(320, 480); //ゲーム画面の大きさ
    game.onload = function() {  //イベント
        var bgSprite = new Sprite(320, 480); //背景画像となるスプライト　画面と同じ大きさ
        var bgSurface = new Surface(320, 480); //スプライトの画像データ
        bgSurface.context.strokeStyle = 'red'; //線の色を赤にする　コンテキスト
        bgSurface.context.beginPath(); //描画開始　準備

        bgSurface.context.rect(100, 100, 150, 150); // 四角形
		bgSurface.context.moveTo(200, 200); //直線の始点　そこに行け(準備)
		bgSurface.context.lineTo(300, 300); //直線の終点　そこに向かって線を引け

	    var len = 10,i;
		var x = 200,y = 200;
		bgSurface.context.moveTo(x,y);
	    for(i = 0;i<10;i ++){
			y = y - len;
			bgSurface.context.lineTo(x,y);
    		len = len +5;
	   		x=x+len;
			bgSurface.context.lineTo(x,y);
    		len = len +5;
			y = y + len;
			bgSurface.context.lineTo(x,y);
    		len = len +5;
		    x=x - len;
			bgSurface.context.lineTo(x,y);
    		len = len +5;
    	}

bgSurface.context.stroke(); //描画指示
		bgSprite.image = bgSurface; //image 属性として指定　画像として変換
		game.rootScene.addChild(bgSprite); //子として追加

        bgSprite.addEventListener(Event.TOUCH_START, function(event){
	    	if(event.x > 160){
	    		bgSprite.totate(90);
			}else{
	            bgSprite.rotate(270);
   	    	}
		});
	};
	game.start(); // ゲームスタート
};