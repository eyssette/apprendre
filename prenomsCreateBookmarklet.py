import html

def create_bookmarklet(js_file_path, output_file_path=None):
	# Lire le contenu du fichier JS
	with open(js_file_path, 'r', encoding='utf-8') as js_file:
		js_code = js_file.read()

	# Minification du code JavaScript
	# minified_js_code = jsmin.jsmin(js_code)

	# Préparer le code pour le bookmarklet en encodant les caractères spéciaux en HTML entities
	encoded_js_code = ''.join([f'&#{ord(char)};' if ord(char) > 127 and char not in 'àâäéèêëîïôöùûüçÿÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ→' else char for char in js_code])

	# Préfixe pour un bookmarklet
	bookmarklet = f"javascript:{encoded_js_code}"

	# Si un fichier de sortie est spécifié, écrire le bookmarklet dans ce fichier
	if output_file_path:
		with open(output_file_path, 'w', encoding='utf-8') as output_file:
				output_file.write(bookmarklet)
		print(f"Bookmarklet enregistré dans {output_file_path}")

# Exécuter la fonction avec un fichier en entrée
input_js_file = 'prenoms.min.js'
output_bookmarklet_file = 'prenomsBookmarklet.js'
create_bookmarklet(input_js_file, output_bookmarklet_file)