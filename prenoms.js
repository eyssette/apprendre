(function () {
	let images;
	let imagesArray;
	let isPhotoStudent;
	let isPhotoStudentOK;
	let isConditionNumberPhotosOK;
	let imageSource;
	let studentNameFromImageElement;
	function checkSource() {
		const url = window.location.href;
		if (url.indexOf("pronote") > -1) {
			images = document.body.querySelectorAll('div[role="main"] img');
			isPhotoStudent = (image) => {
				return image.alt.includes("Photo de");
			};
			isPhotoStudentOK = (image) => {
				return Array.from(image.classList).includes("ie-imgviewer");
			};
			isConditionNumberPhotosOK = (imagesArray) => {
				return imagesArray.length < 3 ? false : true;
			};
			imageSource = (image) => {
				return image.dataset.src;
			};
			studentNameFromImageElement = (image) => {
				const imageSrc = imageSource(image);
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
				return prenom + " " + nom;
			};
			return true;
		}
		if (url.indexOf("moodle") > -1 || url.indexOf("magistere") > -1) {
			images = document.body.querySelectorAll("th img");
			isPhotoStudent = (image) => {
				return image.classList.contains("userpicture");
			};
			isPhotoStudentOK = (image) => {
				return true;
			};
			isConditionNumberPhotosOK = (imagesArray) => {
				return true;
			};
			imageSource = (image) => {
				return image.src;
			};
			studentNameFromImageElement = (image) => {
				return image.parentNode.textContent;
			};
			return true;
		}
		if (url.indexOf("ecoledirecte") > -1) {
			images = document.body.querySelectorAll(".panel-eleve img");
			isPhotoStudent = (image) => {
				return image.alt.includes("élève");
			};
			isPhotoStudentOK = (image) => {
				return image.src.includes("eleve") ? false : true;
			};
			isConditionNumberPhotosOK = (imagesArray) => {
				return true;
			};
			imageSource = (image) => {
				return image.src;
			};
			studentNameFromImageElement = (image) => {
				return image.parentNode.querySelector("p").textContent;
			};
			return true;
		}
		if (document.body.classList.contains("apprendre-prenoms")) {
			images = document.body.querySelectorAll("#image-list img");
			isPhotoStudent = (image) => {
				return true;
			};
			isPhotoStudentOK = (image) => {
				return true;
			};
			isConditionNumberPhotosOK = (imagesArray) => {
				return true;
			};
			imageSource = (image) => {
				return image.src;
			};
			studentNameFromImageElement = (image) => {
				return image.parentNode.querySelector("span[contenteditable]")
					.textContent;
			};
			return true;
		}
		return false;
	}

	const isSourceOK = checkSource();

	if (isSourceOK == false) {
		alert(
			"Attention, cet outil ne fonctionne que sur certains sites : \nsur Pronote, Ouvrez Pronote en ligne, puis allez dans Mes données / Classes/élèves / Trombinoscope"
		);
		return;
	} else {
		imagesArray = Array.from(images);
		if (!isConditionNumberPhotosOK(imagesArray)) {
			alert(
				"Pour que l'outil fonctionne, il faut aller dans Mes données / Classes/élèves / Trombinoscope, puis sélectionner une classe"
			);
			return;
		}
	}

	function generateContent(imgArray) {
		var htmlContent =
			'<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0"></meta><title>Trombiquiz</title></head><style>div{margin-top:10px; text-align:center;} section, footer, div {display:none;} button {margin:10px;} footer {display: none; justify-content: center; align-items: center; height: 50%; font-size: 20px;} .noPhotos{display:block!important;} b{display:block;margin-top:2em;}img{height:350px;}</style><body>';

		for (var i = 0; i < imgArray.length; i++) {
			const image = imgArray[i];
			if (isPhotoStudent(image)) {
				const imageSrc = imageSource(image);
				const studentName = studentNameFromImageElement(image);
				htmlContent += '<div class="eleve">';
				htmlContent += '<img src="' + imageSrc + '" /><br>';
				if (isPhotoStudentOK(image)) {
					htmlContent +=
						'<button onclick="montrerNomPrenom()">Montrer la réponse</button>';
					htmlContent +=
						'<section class="sectionReponse">' + studentName + "<br>";
				} else {
					htmlContent +=
						'<section class="sectionReponse noPhotos"><b>Pas de photo disponible !</b><br>' +
						studentName +
						"<br>";
				}
				htmlContent += '<button onclick="difficile()">Difficile</button>';
				htmlContent +=
					'<button onclick="facile()">Facile</button></section></div>';
			}
		}
		htmlContent +=
			"<footer>Bravo, vous connaissez tous les élèves de votre classe !</footer>";
		htmlContent += `<script>
      let end = false;
      let index = 0;
      let show = false;
      let indexElevesFaciles = [];

      const eleves = document.querySelectorAll(".eleve");
      eleves[index].style.display = "block";

      const sectionsReponse = document.querySelectorAll(".sectionReponse");

      function montrerNomPrenom() {
        sectionsReponse[index].style.display = "block";
        show = true;
      }

      function eleveSuivant() {
		do {
          sectionsReponse[index].style.display = "none";
          eleves[index].style.display = "none";
          index = (index + 1) % eleves.length;
        } while (indexElevesFaciles.includes(index) && index < eleves.length);
        eleves[index].style.display = "block";
      }
      function difficile() {
        show = false;
        eleveSuivant();
      }
      function facile() {
        show = false;
        indexElevesFaciles.push(index);
        if (indexElevesFaciles.length == eleves.length) {
          end = true;
          const footer = document.querySelector("footer");
          eleves[index].style.display = "none";
          footer.style.display = "flex";
        } else {
          eleveSuivant();
        }
      }
      window.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !end) {
          montrerNomPrenom();
        }
        const isNoPhoto = eleves[index].querySelector(".noPhotos") !== null;

        if (event.key === "ArrowLeft" && (show || isNoPhoto)) {
          difficile();
        }
        if (event.key === "ArrowRight" && (show || isNoPhoto)) {
          facile();
        }
      });
    </script>`;
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
			console.log("Il faut autoriser les pop-up sur ce site");
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
			'Apprendre les prénoms :\n- Par ordre aléatoire → clic sur OK (ou touche "Enter").\n- Par ordre alphabétique → clic sur Annuler (ou touche "Esc")\n\nAttention, pour que l\'outil fonctionne, il faut que toutes les photos des élèves soient visibles sur la page. \n\nVotre navigateur bloquera l\'outil si vous mettez trop de temps à cliquer : relancez-le ou autorisez les pop-up'
		)
	) {
		shuffleArray(imagesArray);
	}

	const html = generateContent(imagesArray);
	generatePage(html);
})();
