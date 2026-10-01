$(document).ready(function(){
    $("#btn1").click(function(){
        $("#massage").text("🎉 Wow! You are a Super Coder!")
    })
    $("#btn2").click(function(){
        $("#massage").html("<b>✨ You found the Magic Power!</b>")
    })
    $("#btn3").click(function(){
        $("#text").html("<b>🦄 Go to jQuery Magic</b>")
    })
    $("#btn4").click(function(){
        $("#addflower").append('<div class="magic-item"><h3>⭐ Magic Star</h3></div>')
    })
    $("#btn5").click(function(){
        $("#addflower").prepend('<div class="magic-item"><h3>💕 Magic Heart</h3></div>')
    })
    $("#btn6").click(function(){
        $("#MagicGarden").before('<div class="magicitem"><h3>⬆️ Before the Garden</h3></div>')
    })
    $("#btn7").click(function(){
        $("#MagicGarden").after('<div class="magicitem"><h3>⬇️ After the Garden</h3></div>')
    })
    $("#btn8").click(function(){
        $("#addflower .Magic-item:last").remove();
    })
})