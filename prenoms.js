javascript: (function () {
	const url = window.location.href;
	const images = document.getElementsByTagName("img");
	var imagesArray = Array.from(images);
	if (url.indexOf("pronote") === -1) {
		alert(
			"Attention, cet outil ne fonctionne que sur une page Pronote\nOuvrez Pronote en ligne, puis allez dans Mes données / Classes/élèves / Trombinoscope"
		);
		return;
	} else {
		if (imagesArray.length < 3) {
			alert(
				"Pour que l'outil fonctionne, il faut aller dans Mes données / Classes/élèves / Trombinoscope, puis sélectionner une classe"
			);
			return;
		}
	}

	function generateContent(imgArray) {
		var htmlContent =
			"<html><head><title>Images de la Page</title></head><style>div{margin-top:10px; text-align:center;} section, footer, div {display:none;} button {margin:10px;} footer {display: none; justify-content: center; align-items: center; height: 50%; font-size: 20px;} .noPhotos{display:block!important;} b{display:block;margin-top:2em;}</style><body>";

		for (var i = 0; i < images.length; i++) {
			const image = imgArray[i];
			const imageSrc = image.dataset.src;
			if (!image.alt) {
				const srcSansParametres = imageSrc.split("?")[0];
				const indexDerniereBarreOblique = srcSansParametres.lastIndexOf("/");
				const nomPrenom = decodeURIComponent(
					srcSansParametres
						.substring(indexDerniereBarreOblique + 1)
						.replace(".jpg", "")
				);
				const indexPremiereMinuscule = nomPrenom.search(/[a-zà-ÿ]/);
				const partiePrenom = nomPrenom.substring(indexPremiereMinuscule - 1);
				const partieNom = nomPrenom.substring(0, indexPremiereMinuscule - 1);
				const nom = partieNom.replaceAll("_", " ");
				const prenom = partiePrenom.replaceAll("_", " ");
				const imageTitle = prenom + " " + nom;
				htmlContent += "<div>";
				htmlContent += '<img src="' + imageSrc + '" /><br>';
				if (Array.from(image.classList).includes("ie-imgviewer")) {
					htmlContent +=
						'<button onclick="montrerNomPrenom()">Montrer la réponse</button>';
					htmlContent += "<section>" + imageTitle + "<br>";
				} else {
					htmlContent += "<section class=\"noPhotos\"><b>Pas de photo disponible !</b><br>" + imageTitle + "<br>";
				};
				htmlContent += '<button onclick="difficile()">Difficile</button>';
				htmlContent +=
					'<button onclick="facile()">Facile</button></section></div>';
			}
		}
		htmlContent +=
			"<footer>Bravo, vous connaissez tous les élèves de votre classe !</footer>";
		htmlContent +=
			'<script>var end = false; var eleves = document.getElementsByTagName("div"); var index = 0; var show = false; var indexElevesFaciles=[]; eleves[index].style.display = "block"; var sectionsReponse = document.getElementsByTagName("section"); function montrerNomPrenom(){ sectionsReponse[index].style.display="block"; show = true}; function eleveSuivant() {do {sectionsReponse[index].style.display="none"; eleves[index].style.display = "none"; index = (index + 1) % eleves.length;} while (indexElevesFaciles.includes(index)); eleves[index].style.display = "block"; }; function difficile() {show = false; eleveSuivant()}; function facile() {show = false; indexElevesFaciles.push(index); if (indexElevesFaciles.length == eleves.length) {end = true; var footer = document.querySelector("footer"); eleves[index].style.display = "none"; footer.style.display = "flex";} else {eleveSuivant()}}; window.addEventListener("keydown", function (event) { if (event.keyCode === 13 && end == false) {montrerNomPrenom();} if (event.keyCode === 37 && (show == true || eleves[index].childNodes[2].className=="noPhotos")) { difficile(); } if (event.keyCode === 39  && (show == true || eleves[index].childNodes[2].className=="noPhotos")) { facile(); }  });</script>';
		htmlContent += "</body></html>";
		return htmlContent;
	}

	function writeContent(w, html) {
		w.document.open();
		w.document.write(html);
		w.document.close();
	}

	function generatePage(html) {
		var newWindow = window.open();
		if (newWindow && !newWindow.closed) {
			writeContent(newWindow, html);
		} else {
      console.log("Il faut autoriser les pop-up sur ce site")
    }
	}

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	if (
		window.confirm(
			"Apprendre les prénoms :\n- Par ordre aléatoire → clic sur OK (ou touche \"Enter\").\n- Par ordre alphabétique → clic sur Annuler (ou touche \"Esc\")\n\nAttention, pour que l'outil fonctionne, il faut que toutes les photos des élèves soient visibles sur la page. \n\nVotre navigateur bloquera l'outil si vous mettez trop de temps à cliquer : relancez-le ou autorisez les pop-up"
		)
	) {
		shuffleArray(imagesArray);
	}

	const html = generateContent(imagesArray);
	generatePage(html);
})();
