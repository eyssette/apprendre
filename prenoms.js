javascript:(function() {
  var images = document.getElementsByTagName('img');
  var htmlContent = '<html><head><title>Images de la Page</title></head><style>div{display:none; margin-top:10px; text-align:center;}</style><body>';
  
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var imageSrc = image.src;
    var imageAlt = image.alt;
    if (!image.alt ) {
      var srcSansParametres = imageSrc.split("?")[0]  ;
      var indexDerniereBarreOblique = srcSansParametres.lastIndexOf("/");
      var nomPrenom = srcSansParametres.substring(indexDerniereBarreOblique + 1).split('_');
      var nom = nomPrenom[0];
      var prenom = nomPrenom[1];
      if (prenom) {
        prenom = decodeURIComponent(prenom.split('.')[0]);
      }
      var imageTitle = prenom +' '+nom;

      if (imageSrc) {
        htmlContent += '<div>';
        htmlContent += '<img src="' + imageSrc + '" /><br>';
        htmlContent += '<span>' + imageTitle + '</span><br>';
        htmlContent += '<button onclick="eleveSuivant()">Élève suivant</button>';
        htmlContent += '</div>';
      }
    }
  }
  
  htmlContent += '<script>var eleves = document.getElementsByTagName("div"); var index = 0;  eleves[index].style.display = "block"; function eleveSuivant() { eleves[index].style.display = "none"; index = (index + 1) % eleves.length; eleves[index].style.display = "block"; };</script>';
  htmlContent += '</body></html>';
  var newWindow = window.open();
  newWindow.document.open();
  newWindow.document.write(htmlContent);
  newWindow.document.close();
})();
