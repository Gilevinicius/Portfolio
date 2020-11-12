  // Menu
  let header = document.getElementById ("header");
  let setamenu = document.getElementById ("setamenu");
  let estrutura = document.getElementById ("estrutura");
  
  setamenu.addEventListener ("mouseover", move1);
  header.addEventListener ("mouseover", move1);
  
  function move1 () {
    header.style.left = "0px"
    setamenu.style.transform = "rotate(180deg)"
    header.addEventListener ("mouseout", move2)
    estrutura.style.filter = "brightness(40%)"
  };
  function move2 () {
    header.style.left = "-150px"
    setamenu.style.transform = "rotate(0deg)"
    estrutura.style.filter = "brightness(100%)"
  };

// Foto perfil
  let imgperfil = document.getElementById ("imgperfil")

  imgperfil.addEventListener("mouseover", foto)
  function foto() {
    imgperfil.style.borderRadius = "0px"
    imgperfil.addEventListener("mouseout",function foto() {
    imgperfil.style.borderRadius = "140px"
    })
  };
  
  function animacaofoto () {
    imgperfil.style.transition = "3s"
    imgperfil.style.opacity = "1"
    setTimeout(animacaofoto2, 3000)
  }
  function animacaofoto2 () {
    imgperfil.style.transition = ".3s"
    }
  setTimeout(animacaofoto, 2000)

// Animacao card
  let cardhtml = document.getElementById ("cardhtml")
  let cardwp = document.getElementById ("cardwp")
  let cardcss = document.getElementById ("cardcss")
  let cardjs = document.getElementById ("cardjs")
  let cardphp = document.getElementById ("cardphp")
  let txtcardhtml = document.getElementById ("txtcardhtml")
  let txtcardwp = document.getElementById ("txtcardwp")
  let txtcardcss = document.getElementById ("txtcardcss")
  let txtcardjs = document.getElementById ("txtcardjs")
  let txtcardphp = document.getElementById ("txtcardphp")
  let tltcardhtml = document.getElementById ("tltcardhtml")
  let tltcardwp = document.getElementById ("tltcardwp")
  let tltcardphp = document.getElementById ("tltcardphp")
  let tltcardcss = document.getElementById ("tltcardcss")
  let tltcardjs = document.getElementById ("tltcardjs")

  cardhtml.addEventListener("mouseover", function animecard1 () {
    tltcardhtml.style.top ="-20px"
    txtcardhtml.style.top ="35px"
    cardhtml.addEventListener("mouseout", function animecard2 () {
      tltcardhtml.style.top ="40px"
      txtcardhtml.style.top ="120px"
    })
  })

  cardcss.addEventListener("mouseover", function animecard3 () {
    tltcardcss.style.top ="-20px"
    txtcardcss.style.top ="35px"
    cardcss.addEventListener("mouseout", function animecard4 () {
      tltcardcss.style.top ="40px"
      txtcardcss.style.top ="120px"
    })
  })

  cardjs.addEventListener("mouseover", function animecard5 () {
    tltcardjs.style.top ="-20px"
    txtcardjs.style.top ="35px"
    cardjs.addEventListener("mouseout", function animecard6 () {
      tltcardjs.style.top ="40px"
      txtcardjs.style.top ="120px"
    })
  })

  cardphp.addEventListener("mouseover", function animecard7 () {
    tltcardphp.style.top ="-20px"
    txtcardphp.style.top ="35px"
    cardphp.addEventListener("mouseout", function animecard8 () {
      tltcardphp.style.top ="40px"
      txtcardphp.style.top ="120px"
})
})

cardwp.addEventListener("mouseover", function animecard9 () {
  tltcardwp.style.top ="-20px"
  txtcardwp.style.top ="35px"
  cardwp.addEventListener("mouseout", function animecard10 () {
    tltcardwp.style.top ="40px"
    txtcardwp.style.top ="120px"
})
})
  
  
// Animacao scrollSuave
$('.scroll').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top,
			menuHeight = $('nav').innerHeight();

	console.log(menuHeight);

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});



// Animacao projetos
let skew = document.getElementById ("skew")
let section4 = document.getElementById ("section4")

section4.addEventListener("mouseover", function animepro () {
  skew.style.left = "-500px"
  section4.addEventListener("mouseout", function animepro2 () {
    skew.style.left = "-250px"
  })
} )





