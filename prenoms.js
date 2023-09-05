javascript:(function() {
  const images = document.getElementsByTagName('img');
  var htmlContent = '<html><head><title>Images de la Page</title></head><style>div{margin-top:10px; text-align:center;} section, footer, div {display:none;} button {margin:10px;} footer {display: none; justify-content: center; align-items: center; height: 50%; font-size: 20px;}</style><body>';
  
  for (var i = 0; i < images.length; i++) {
    const image = images[i];
    const imageSrc = image.dataset.src;
    if (!image.alt ) {
      const srcSansParametres = imageSrc.split("?")[0];
      const indexDerniereBarreOblique = srcSansParametres.lastIndexOf("/");
      const nomPrenom = decodeURIComponent(srcSansParametres.substring(indexDerniereBarreOblique + 1).replace(".jpg",""));
	  const indexPremiereMinuscule = nomPrenom.search(/[a-zà-ÿ]/);
	  const partiePrenom = nomPrenom.substring(indexPremiereMinuscule-1);
	  const partieNom = nomPrenom.substring(0, indexPremiereMinuscule-1);
      const nom = partieNom.replaceAll('_',' ');
      const prenom = partiePrenom.replaceAll('_',' ');
      const imageTitle = prenom +' '+nom;
        htmlContent += '<div>';
        htmlContent += '<img src="' + imageSrc + '" /><br>';
        htmlContent += '<button onclick="montrerNomPrenom()">Montrer la réponse</button>';
        htmlContent += '<section><span>' + imageTitle + '</span><br>';
		htmlContent += '<button onclick="difficile()">Difficile</button>';
		htmlContent += '<button onclick="facile()">Facile</button></section></div>';
    }
  }
  htmlContent += '<footer>Bravo, vous connaissez tous les élèves de votre classe !</footer>';
  htmlContent += '<script>var end = false; var eleves = document.getElementsByTagName("div"); var index = 0; var show = false; var indexElevesFaciles=[]; eleves[index].style.display = "block"; var sectionsReponse = document.getElementsByTagName("section"); function montrerNomPrenom(){ sectionsReponse[index].style.display="block"; show = true}; function eleveSuivant() {do {sectionsReponse[index].style.display="none"; eleves[index].style.display = "none"; index = (index + 1) % eleves.length;} while (indexElevesFaciles.includes(index)); eleves[index].style.display = "block"; }; function difficile() {show = false; eleveSuivant()}; function facile() {show = false; indexElevesFaciles.push(index); if (indexElevesFaciles.length == eleves.length) {end = true; var footer = document.querySelector("footer"); eleves[index].style.display = "none"; footer.style.display = "flex";} else {eleveSuivant()}}; window.addEventListener("keydown", function (event) { if (event.keyCode === 13 && end == false) {montrerNomPrenom();} if (event.keyCode === 37 && show == true) { difficile(); } if (event.keyCode === 39  && show == true) { facile(); }  });</script>';
  htmlContent += '</body></html>';
  const newWindow = window.open();
  newWindow.document.open();
  newWindow.document.write(htmlContent);
  newWindow.document.close();
})();
