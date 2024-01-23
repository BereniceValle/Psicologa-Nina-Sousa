/*-------  Ações de navegação hader-nav-menu  -------*/

$('header nav.nav-esquerda ul.menu-principal li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})

.$('header nav.nav-esquerda ul.menu-principal li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section.tratamento').offset().top}, 1000)
})

.$('header nav.nav-esquerda ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.sobre-mim').offset().top}, 1000)
})