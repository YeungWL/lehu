window.onload = function () {
    // 首页的swiper初始化
    swiperCon.mainSwiper();
    swiperCon.indexASwiper();
    swiperCon.attentionSwiper();
    swiperCon.takeSwiper();
    swiperCon.interestSwiper();

    // 发现页的swiper初始化
    swiperCon.findSwiper();
    swiperCon.findBanner();

    swiperCon.indexCSwiper();

    swiperCon.indexDswiper();
}

// 这么封装不会造成全局污染，非常符合封装的思想
var swiperCon = {
    mainSwiper: function () {
        //顶级swiper的初始化
        var mainSwiper = new Swiper('.main', {
            // 分页器
            pagination: '.main-pagination',
            // 分页器允许点击
            paginationClickable: true,
        })
    },
    indexASwiper: function () {
        // 首页的swiper初始化
        var slideASwiper = new Swiper('.slideA-swiper', {
            pagination: '.slideA-pagination',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                // console.log(index + '|' + className);
                if (index == 0) {
                    return '<span class="' + className + '">' + '关注' + '</span>';
                } else {
                    return '<span class="' + className + '">' + '订阅' + '</span>';
                }
            }
        })
    },
    attentionSwiper: function () {
        // 首页的关注区域内容滚动
        var attentionSwiper = new Swiper('.attention-swiper', {
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true,
            roundLengths: true, //防止文字模糊
            // 默认禁止拖动
            noSwiping: true
        })
    },
    takeSwiper: function () {
        // 首页的订阅区域内容滚动
        var takeSwiper = new Swiper('.take-container', {
            // 滚动条
            scrollbar: '.take-scrollbar',
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true,
            roundLengths: true, //防止文字模糊
        })
    },
    interestSwiper: function () {
        // 关注区域 --- 兴趣区域的swiper
        var interestSwipers = new Swiper('.interest-swiper', {
            slidesPerView: "auto",
            freeMode: true,
            noSwiping: false,
            // 每一页的间距
            spaceBetween: 30
        })
    },
    findSwiper: function () {
        // 发现页的内容滚动
        var findSwipers = new Swiper('.find-swiper', {
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true,
            roundLengths: true, //防止文字模糊
            // 默认禁止拖动
            noSwiping: true
        })
    },
    findBanner: function () {
        // 发现页的第一个轮播图
        var findBanner = new Swiper('.find-banner-container', {
            // 如果需要分页器
            pagination: '.find-pagination',
            paginationClickable: true
        })
        // 发现页的达人切换部分
        var masterSwipers = new Swiper('.master-swiper', {
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 0,
                stretch: -30,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }
        })
    },
    indexCSwiper: function () {
        // 消息的swiper初始化
        var indexCSwiper = new Swiper('.slideC-swiper', {
            pagination: '.slideC-pagination',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                // console.log(index + '|' + className);
                if (index == 0) {
                    return '<span class="' + className + '">' + '动态' + '</span>';
                } else if(index == 1) {
                    return '<span class="' + className + '">' + '消息' + '</span>';
                }else{
                    return '<span class="' + className + '">' + '聊天' + '</span>';
                }
            }
        })
        // 动态页的swiper初始化
        var messageTrend = new Swiper('.message-trend-swiper',{
            // 滚动条
            scrollbar: '.message-scroll',
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true,
            roundLengths: true, //防止文字模糊
            // 默认禁止拖动
            noSwiping: true
        })
        // 消息分页的swiper初始化
        var messageNews = new Swiper('.message-news-swiper',{
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true,
            roundLengths: true, //防止文字模糊
            // 默认禁止拖动
            noSwiping: true
        })
        // 聊天的swiper初始化
        var messageChat = new Swiper('.message-chat-swiper',{
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true,
            roundLengths: true, //防止文字模糊
            // 默认禁止拖动
            noSwiping: true
        })
    },
    indexDswiper:function(){
        var selfSwiper = new Swiper('.self-swiper',{
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true,
            roundLengths: true, //防止文字模糊
            // 默认禁止拖动
            noSwiping: true
        })
    }
};