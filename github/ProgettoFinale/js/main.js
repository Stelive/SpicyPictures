/**
 * @file: main.js
 * @author: Francesco Panetta
 *
 * Purpose of file:
 * ...
 */

$(window).load(function(){
    setTimeout(function(){
        $('div.loading').velocity({
            opacity : 0.1,
            translateY: "-80px"
        }, {
            duration: 400,
            complete: function(){
            $('div.sfondo').velocity({
            translateY : "-100%"
        }, {
            duration: 1000,
            easing: [0.7,0,0.3,1],
            complete: function(){
                $('.home').addClass('animate-border divide');
            }
        })  
            }
        })
    },500)
})