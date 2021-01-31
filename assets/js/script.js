var a = [{
        comment: "Saxla samanı, gələr zamanı.",
        fullName: "Simran Nəsibli"
    },
    {
        comment: "Su kiçiyin, yol böyüyündür.",
        fullName: "Tural Teymur"
    },
    {
        comment: "Abır-həya olan yerdəbərəkət də olar.",
        fullName: "Ilkin Qasımov"
    },
    {
        comment: "Ac qılınca çapar.",
        fullName: "Rəşad Xəlilli"
    },
    {
        comment: "Ac hara, paxaç hara.",
        fullName: "Bəybala Şahbazlı"
    },
    {
        comment: "Adam adıyla tanınar.",
        fullName: "Elvin Əkbərov"
    },
    {
        comment: "Almanı göyə at, yerə gəlincə, ya nəsib!",
        fullName: "Nicat Səfərov"
    },
    {
        comment: "Arı yuvasına çöp uzatmazlar.",
        fullName: "Adil Səfərov"
    },
    {
        comment: "Artıq tamah baş yarar.",
        fullName: "Tural Əliyev"
    },
    {
        comment: "Artıq tikə baş yarar.",
        fullName: "John Wick"
    },
];

var random;

function numberCreate() {

    random = Math.round(Math.random() * 9);
}

setInterval(function(){

    numberCreate();

    document.getElementById("div1").innerHTML = a[random].comment;
    document.getElementById("div2").innerHTML = a[random].fullName;
    
}, 2000)