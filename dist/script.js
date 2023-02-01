var listaDeDoces = [
"https://media.istockphoto.com/id/583988614/pt/vetorial/donuts-vector-isolated.jpg?s=170667a&w=0&k=20&c=n-21mIc4prT0F7qr5PEXXNC2bnimk2VbvrLyfM6P9rc=", "https://s2.glbimg.com/JneYkUzq2MDUl89KutRgbB_e5Ho=/0x0:500x385/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2014/03/03/22_41_26_654__Beijinhos.png", "https://docesmomentos.com/wp-content/uploads/2019/06/romeuu.png", "https://panutti.com.br/resize/imagecache//6a89fd8e0490a155eb69e031f4fbde1d.JPG"]

//titulos
var listaTitulos = ["Donuts","Brigadeiro Beijinho", "Romeu & Julieta", "Bolo Sonho De Valsa"]

for( var i=0; i<listaDeDoces.length; i++){
  
document.write ("<img src=" + listaDeDoces[i] + ">" )
document.write ("<p>" + listaTitulos[i] + "</p>")
}