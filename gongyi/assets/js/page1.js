$(function() {
    window.onresize = function() {
        if (window.innerWidth < window.innerHeight) {

        }
    }

    //播放/暂停
    $('.j-bgm-icon').click(function() {
        if ($(this).hasClass("off")) {
            $("audio")[0].play();
            $(this).removeClass('off')
        } else {
            $("audio")[0].pause();
            $(this).addClass('off')
        }
    })
    var DOG_LIST = ["土豪汪", "撒粮汪", "颜值汪", "佛系汪", "开挂汪"],
        DATA_DOG = ["财运亨通", "佳偶天成", "倾国倾城", "禅性佛心", "功成名就"],
        LOT_LIST = ["天真无鞋", "不明觉栗", "无欲则刚", "搬砖加班", "出双入对", "人艰不拆", "骨骼清奇", "花见花开", "剁手吃土", "黄金万两"],
        DATA_LOTS = [
            "然而呆到深处自然萌",
            "而且旁人不明，但无不觉厉",
            "而且云淡风轻，上善若水",
            "然而砖友明天见，砖友天天见",
            "而且囤了成吨的狗粮",
            "却只能心疼的抱住孤傲的自己",
            "然而仙风道骨，颜不由衷",
            "而且人见人爱，鸟见鸟呆",
            "然而剁手剁不尽，春风吹又生",
            "而且有钱只是你的超能力之一"
        ],
        DATA_RESULT_PROMPT = ["听说有爱心的人新年会更旺哦", "听说旺运同享会成双哦"]
    $(".j-start").click(function() {
        $('.index').removeClass("show").addClass("hide");
        setTimeout(function() {
            $('.bg2').addClass("show");
            $('.bg1').removeClass("show");
            $('.bg3').removeClass("show");
            $('.medal-block').addClass('show');
            $('.prompt.medal-prompt.j-medal-prompt').addClass('show');
        }, 1000)
    })

    $('.medal-inner').each(function(index, value) {
        $(value).click(function() {
            $('#lotsmp3')[0].src = 'http://mat1.gtimg.com/gongyi/m/act/2018fortune/audio/coin.mp3'
            $('.index').css({ 'display': 'none' })
            $('.medal-block').removeClass("show").addClass("hide").eq(index).removeClass("hide");
            $('.mail-wrap').show();
            $('.mail-wrap').addClass('show');
            $('.prompt.medal-prompt.j-medal-prompt').hide();
            $('.mail-bone.bone').addClass('show');
            $('.j-mail-prompt').addClass('show');
            //获取dog序号
            var dog = +$(this).find(".medal").attr("data-dog") + 1;
            console.log(dog);
            $('.mail-medal .medal-txt').addClass("t" + dog);
            $('.j-dog-title').addClass("data" + dog);
            $('.dog').addClass('data' + dog);
            var numb = Math.floor(Math.random() * 10 + 1);
            $('.bone-txt.j-bone-txt').addClass("data" + numb);
            $('.j-lots-title').addClass("data" + numb);
            $('.dog-part.j-dog-part')[0].src = "./dog" + dog + "-part" + numb + ".png";

            if ([1, 2, 4, 7, 9].indexOf(numb - 1) != -1) {
                $('.j-data-dog-desc').html("2018的你不仅" + DATA_DOG[dog - 1])
                $('.j-result-prompt').html(DATA_RESULT_PROMPT[1]);
            } else {
                $('.j-data-dog-desc').html("2018的你虽" + DATA_DOG[dog - 1]);
                $('.j-result-prompt').html(DATA_RESULT_PROMPT[0]);
            }
            $('.j-data-lots-desc').text(DATA_LOTS[numb - 1])

            setTimeout(function() {
                $('.mail-wrap.show')[0].addEventListener('click', function() {
                    console.log(87)
                    $('#lotsmp3')[0].src = 'http://mat1.gtimg.com/gongyi/m/act/2018fortune/audio/lots.mp3'
                    $('.medal-block').hide();
                    $('.j-mail-prompt').removeClass('show').addClass('hide').hide();
                    $('.mail-bone-selected').animate({ "bottom": "2.3rem" }, 1000, function() {

                        $('.mail-wrap.show .mail').css({ "transition": "all 2s linear 0" });
                        $('.mail-wrap.show .mail').animate({ 'bottom': "-5.59rem" }, 3000, function() {
                            $(".mail-wrap").removeClass("show");
                            $(".result").addClass("show");
                            $('.result-foot').addClass('show');
                        })
                    });
                }, false);
                if (window.DeviceMotionEvent) {
                    var speed = 25;
                    var x = y = z = lastX = lastY = lastZ = 0;
                    //摇一摇事件
                    window.addEventListener('devicemotion', function() {
                        var acceleration = event.accelerationIncludingGravity;
                        x = acceleration.x;
                        y = acceleration.y;
                        if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
                            $('#lotsmp3')[0].src = 'http://mat1.gtimg.com/gongyi/m/act/2018fortune/audio/lots.mp3'
                            $('.medal-block').hide();
                            $('.j-mail-prompt').removeClass('show').addClass('hide').hide();
                            $('.mail-bone-selected').animate({ "bottom": "2.3rem" }, 500, function() {
                                $('.mail-wrap.show .mail').css({ "transition": "all 2s linear 0" });
                                $('.mail-wrap.show .mail').animate({ 'bottom': "-5.59rem" }, 1000, function() {
                                    $(".mail-wrap").removeClass("show");
                                    $(".result").addClass("show");
                                    $('.result-foot').addClass('show');
                                })
                            });
                        }
                        lastX = x;
                        lastY = y;
                    }, false);

                }
            }, 1000)

        })
    })

    $('.j-share').click(function() {
        $('#pageContainer').siblings().css({ "display": "none" })
        html2canvas($('#pageContainer')[0]).then(function(canvas) {
            document.body.appendChild(canvas);
            $('#pageContainer').hide();
        });
        /*  html2canvas(document.body, {
             allowTaint: true,
             height: window.innerHeight
         }).then(function(canvas) {
             $('#pageContainer').hide();


             document.body.appendChild(canvas);
             //var data = canvas.toDataURL("image/png"); //生成的格式
             // $('#savePic')[0].src = data;
             // $('#savePic').css({ "width": "100%", "height": "100%" })
         }); */
    })
    $('.j-reset').click(function() {
        console.log("123")
        $('.medal-block').show();
        $('.j-mail-prompt').show().removeClass('hide').addClass('show')
        $('.medal-block').addClass('show');
        $('.prompt.medal-prompt.j-medal-prompt').addClass('show');
        $('.result').removeClass('show')
        $('.result-foot').removeClass('show');
        $(".j-mail-prompt").removeClass("show")
        $(".j-medal-prompt").show().addClass("show")
        $('.mail').css({ "bottom": ".09rem", "display": "block" })
        $('.mail-bone-selected').css({
            "bottom": "-.06rem"
        })
    })
})