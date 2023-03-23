$("button").css("color", "blue");

$("h1").addClass("big-title");

$("h1").text("Bye!");

$("button").html("<strong>click me</strong>");

// console.log($("img").attr("src"))

$("a").attr("href", "https://www.youtube.com");

$("button").click(function (e) {
  e.preventDefault();
  $("h1").css("color", "pink");
});


$("input").keypress(function(event) {
    $("h1").text(event.key)
})

$("h1").on("click", function() {
    $("h1").css("text-shadow" ,"7px 7px 35px rgba(0,0,0, 030)")
})

$("h1").before("<button>BEFORE</button>")
$("h1").after("<button>AFTER</button>")

$("h1").prepend("<button>PREPEND</button>")
$("h1").append("<button>APPEND</button>")

// $("button").remove();

// $("button").click( function() {
//     $("h1").fadeToggle()
// })

$("button").click( function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})