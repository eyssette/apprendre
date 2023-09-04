javascript:(function() {
  var images = document.getElementsByTagName('img');
  var htmlContent = '<html><head><title>Images de la Page</title></head><style>div{display:none; margin-top:10px; text-align:center;} section {display:none;} button {margin:10px;}</style><body>';
  
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var imageSrc = image.src;
    var imageAlt = image.alt;
    if (!image.alt ) {
      var srcSansParametres = imageSrc.split("?")[0];
      var indexDerniereBarreOblique = srcSansParametres.lastIndexOf("/");
      var nomPrenom = decodeURIComponent(srcSansParametres.substring(indexDerniereBarreOblique + 1).replace(".jpg",""));
	  var index = nomPrenom.search(/[a-zà-ÿ]/);
	  var partiePrenom = nomPrenom.substring(index-1);
	  var partieNom = nomPrenom.substring(0, index-1);
      var nom = partieNom.replaceAll('_',' ');
      var prenom = partiePrenom.replaceAll('_',' ');
      var imageTitle = prenom +' '+nom;
      if (imageSrc) {
        htmlContent += '<div>';
        htmlContent += '<img src="' + imageSrc + '" /><br>';
        htmlContent += '<button onclick="montrerNomPrenom()">Montrer la réponse</button>';
        htmlContent += '<section><span>' + imageTitle + '</span><br>';
		htmlContent += '<button onclick="difficile()">Difficile</button>';
		htmlContent += '<button onclick="facile()">Facile</button></section></div>';
      }
    }
  }
  
  htmlContent += '<script>var eleves = document.getElementsByTagName("div"); var index = 0;  eleves[index].style.display = "block"; var sectionsReponse = document.getElementsByTagName("section"); function montrerNomPrenom(){ sectionsReponse[index].style.display="block"}; function eleveSuivant() { sectionsReponse[index].style.display="none"; eleves[index].style.display = "none"; index = (index + 1) % eleves.length; eleves[index].style.display = "block"; }; function difficile() {eleveSuivant()}; function facile() {eleveSuivant()}; window.addEventListener("keydown", function (event) { if (event.keyCode === 13) {montrerNomPrenom();} if (event.keyCode === 37) { difficile(); } if (event.keyCode === 39) { facile(); }  });</script>';
  htmlContent += '</body></html>';
  var newWindow = window.open();
  newWindow.document.open();
  newWindow.document.write(htmlContent);
  newWindow.document.close();
})();
