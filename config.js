// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
	    "祝最最美丽的大宝贝生日快乐呀！",
	    "时间可能有点长，请耐心看完以下的信哦",
	    "2018年,这张合照有点傻",
	    "2019年，使劲摆拍，还记得那个蛋糕吗？",
	    "两个穷鬼身上没什么钱了，买的这个迷你蛋糕",
	    "2020年，自己的生日自己布置",
	    "2021年，和你的新同学们一起庆祝",
	    "这抱着花的美女好好看！",
	    "2022年，连续这几年来第一次缺席了，先道个歉",
	    "这一年里最大的变化当然就是你终于脱单了",
	    "终于有人照顾你了",
	    "那我就退居二线,把你身边的位置交给小章了",
	    "你要跟小章好好的，一定一定要幸福！",
	    "但是如果你遇到了什么事，不开心了",
	    "就回头看看，我就在你身后",
	    "只要你需要，随叫随到！我给你撑腰！",
	    "你说2021年太苦了",
	    "给了买了糖吃",
	    "愿你2022年每一天都甜甜的！",
	    "《爱你就像爱生命》里面有甜甜的恋爱",
	    "愿你也能拥有这般美好的爱情！",
	    "愿你贪吃不胖",
	    "愿你懒惰不丑",
	    "愿你从旧衣服找到零钱",
	    "愿你做过的所有美梦都能实现",
	    "愿你永远都有好运气",
	    "若这一切太难",
	    "我只愿你一生简单！健康快乐！",
	    "顺利毕业！早日发论文！！",
	    "第一次做这样的网页，做得很粗糙",
	    "但希望你喜欢，永远爱你！",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式，
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     
     */
    imgs: {
	"祝最最美丽的大宝贝生日快乐呀！": "./imgs/little.jpeg",
	"2018年,这张合照有点傻": "./imgs/2018-1.jpeg",
	"2019年，使劲摆拍，还记得那个蛋糕吗？": "./imgs/2019-2.jpeg",
	"两个穷鬼身上没什么钱了，买的这个迷你蛋糕": "./imgs/2019-3.jpeg",
	"2020年，自己的生日自己布置": "./imgs/2020-2.jpeg",
	"2021年，和你的新同学们一起庆祝": "./imgs/2021-2.jpeg",
	"这抱着花的美女好好看！": "./imgs/2021-1.jpeg",
	"2022年，连续这几年来第一次缺席了，先道个歉": "./imgs/apologize.jpeg",
        "但希望你喜欢，永远爱你！": "./imgs/loveyou.jpeg",
        //"今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    
        
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
