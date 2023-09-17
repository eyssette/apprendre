# Apprendre les prénoms de ses élèves

Il est essentiel de connaître très rapidement les prénoms de ses élèves.
- Les élèves sentent qu'ils sont respectés en tant que personne et cela crée tout de suite un climat de confiance.
- La gestion de classe en cas de problème est beaucoup plus facile.

Je propose ici un outil qui permet à partir des trombinoscopes sur Pronote (version en ligne) de mémoriser plus facilement les prénoms de ses élèves.

Si on dispose des photos avant même le premier cours, on peut ainsi arriver en classe en connaissant déjà au moins une bonne partie des élèves, ce qui les surprend souvent de manière très positive !

## Comment ça marche ?

## 1/  Glisser-déposer ce lien dans vos favoris :

<a href="javascript&colon;&lpar;function&lpar;&rpar;&lbrace;const e&equals;document&period;getElementsByTagName&lpar;&quot;img&quot;&rpar;&semi;for&lpar;var n&equals;&quot;&lt;html&gt;&lt;head&gt;&lt;title&gt;Images de la Page&lt;&sol;title&gt;&lt;&sol;head&gt;&lt;style&gt;div&lbrace;margin-top&colon;10px&semi; text-align&colon;center&semi;&rcub; section&comma; footer&comma; div &lbrace;display&colon;none&semi;&rcub; button &lbrace;margin&colon;10px&semi;&rcub; footer &lbrace;display&colon; none&semi; justify-content&colon; center&semi; align-items&colon; center&semi; height&colon; 50&percnt;&semi; font-size&colon; 20px&semi;&rcub;&lt;&sol;style&gt;&lt;body&gt;&quot;&comma;t&equals;0&semi;t&lt;e&period;length&semi;t&plus;&plus;&rpar;&lbrace;const o&equals;e&lbrack;t&rsqb;&comma;i&equals;o&period;dataset&period;src&semi;if&lpar;&excl;o&period;alt&rpar;&lbrace;const e&equals;i&period;split&lpar;&quot;&quest;&quot;&rpar;&lbrack;0&rsqb;&comma;t&equals;e&period;lastIndexOf&lpar;&quot;&sol;&quot;&rpar;&comma;o&equals;decodeURIComponent&lpar;e&period;substring&lpar;t&plus;1&rpar;&period;replace&lpar;&quot;&period;jpg&quot;&comma;&quot;&quot;&rpar;&rpar;&comma;s&equals;o&period;search&lpar;&sol;&lbrack;a-z&agrave;-&yuml;&rsqb;&sol;&rpar;&comma;l&equals;o&period;substring&lpar;s-1&rpar;&comma;a&equals;o&period;substring&lpar;0&comma;s-1&rpar;&period;replaceAll&lpar;&quot;&lowbar;&quot;&comma;&quot; &quot;&rpar;&semi;n&plus;&equals;&quot;&lt;div&gt;&quot;&comma;n&plus;&equals;&apos;&lt;img src&equals;&quot;&apos;&plus;i&plus;&apos;&quot; &sol;&gt;&lt;br&gt;&apos;&comma;n&plus;&equals;&apos;&lt;button onclick&equals;&quot;montrerNomPrenom&lpar;&rpar;&quot;&gt;Montrer la r&eacute;ponse&lt;&sol;button&gt;&apos;&comma;n&plus;&equals;&quot;&lt;section&gt;&lt;span&gt;&quot;&plus;l&period;replaceAll&lpar;&quot;&lowbar;&quot;&comma;&quot; &quot;&rpar;&plus;&quot; &quot;&plus;a&plus;&quot;&lt;&sol;span&gt;&lt;br&gt;&quot;&comma;n&plus;&equals;&apos;&lt;button onclick&equals;&quot;difficile&lpar;&rpar;&quot;&gt;Difficile&lt;&sol;button&gt;&apos;&comma;n&plus;&equals;&apos;&lt;button onclick&equals;&quot;facile&lpar;&rpar;&quot;&gt;Facile&lt;&sol;button&gt;&lt;&sol;section&gt;&lt;&sol;div&gt;&apos;&rcub;&rcub;n&plus;&equals;&quot;&lt;footer&gt;Bravo&comma; vous connaissez tous les &eacute;l&egrave;ves de votre classe &excl;&lt;&sol;footer&gt;&quot;&comma;n&plus;&equals;&apos;&lt;script&gt;var end &equals; false&semi; var eleves &equals; document&period;getElementsByTagName&lpar;&quot;div&quot;&rpar;&semi; var index &equals; 0&semi; var show &equals; false&semi; var indexElevesFaciles&equals;&lbrack;&rsqb;&semi; eleves&lbrack;index&rsqb;&period;style&period;display &equals; &quot;block&quot;&semi; var sectionsReponse &equals; document&period;getElementsByTagName&lpar;&quot;section&quot;&rpar;&semi; function montrerNomPrenom&lpar;&rpar;&lbrace; sectionsReponse&lbrack;index&rsqb;&period;style&period;display&equals;&quot;block&quot;&semi; show &equals; true&rcub;&semi; function eleveSuivant&lpar;&rpar; &lbrace;do &lbrace;sectionsReponse&lbrack;index&rsqb;&period;style&period;display&equals;&quot;none&quot;&semi; eleves&lbrack;index&rsqb;&period;style&period;display &equals; &quot;none&quot;&semi; index &equals; &lpar;index &plus; 1&rpar; &percnt; eleves&period;length&semi;&rcub; while &lpar;indexElevesFaciles&period;includes&lpar;index&rpar;&rpar;&semi; eleves&lbrack;index&rsqb;&period;style&period;display &equals; &quot;block&quot;&semi; &rcub;&semi; function difficile&lpar;&rpar; &lbrace;show &equals; false&semi; eleveSuivant&lpar;&rpar;&rcub;&semi; function facile&lpar;&rpar; &lbrace;show &equals; false&semi; indexElevesFaciles&period;push&lpar;index&rpar;&semi; if &lpar;indexElevesFaciles&period;length &equals;&equals; eleves&period;length&rpar; &lbrace;end &equals; true&semi; var footer &equals; document&period;querySelector&lpar;&quot;footer&quot;&rpar;&semi; eleves&lbrack;index&rsqb;&period;style&period;display &equals; &quot;none&quot;&semi; footer&period;style&period;display &equals; &quot;flex&quot;&semi;&rcub; else &lbrace;eleveSuivant&lpar;&rpar;&rcub;&rcub;&semi; window&period;addEventListener&lpar;&quot;keydown&quot;&comma; function &lpar;event&rpar; &lbrace; if &lpar;event&period;keyCode &equals;&equals;&equals; 13 &amp;&amp; end &equals;&equals; false&rpar; &lbrace;montrerNomPrenom&lpar;&rpar;&semi;&rcub; if &lpar;event&period;keyCode &equals;&equals;&equals; 37 &amp;&amp; show &equals;&equals; true&rpar; &lbrace; difficile&lpar;&rpar;&semi; &rcub; if &lpar;event&period;keyCode &equals;&equals;&equals; 39  &amp;&amp; show &equals;&equals; true&rpar; &lbrace; facile&lpar;&rpar;&semi; &rcub;  &rcub;&rpar;&semi;&lt;&bsol;&sol;script&gt;&apos;&comma;n&plus;&equals;&quot;&lt;&sol;body&gt;&lt;&sol;html&gt;&quot;&semi;const o&equals;window&period;open&lpar;&rpar;&semi;o&period;document&period;open&lpar;&rpar;&comma;o&period;document&period;write&lpar;n&rpar;&comma;o&period;document&period;close&lpar;&rpar;&rcub;&rpar;&lpar;&rpar;&semi;">Apprendre les prénoms</a>

## 2/ Afficher le trombinoscope de ses élèves sur Pronote (version en ligne)

Cliquez sur “Mes données” / “Classes/élèves” / “Trombinoscope”

![](https://minio.apps.education.fr/codimd-prod/uploads/upload_1ce9929a1de523fb19b9060d077a3275.png)

Choisissez la classe et cliquez sur votre nouveau favori “Apprendre les prénoms”

## 3/ Apprendre les prénoms

L'outil affiche une photo à la fois.

![](https://minio.apps.education.fr/codimd-prod/uploads/upload_60b95ece9dc0e029919628f7c3157861.png)

Quand vous pensez avoir retrouvé le prénom et le nom de l'élève, cliquez sur “Montrer la réponse”.
- Raccourci clavier : ⏎ (touche “Entrée”).

![](https://minio.apps.education.fr/codimd-prod/uploads/upload_b8c93f1e7b4242fcc8bc1ccbea4e8a27.png)

Si c'était facile, cliquez sur “Facile”. La photo de l'élève sera alors sortie de la liste.
- Raccourci clavier : &rarr; (flèche droite)

Si c'était difficile, cliquez sur “Difficile”. La photo reste dans la liste.
- Raccourci clavier : &larr; (flèche gauche)

Tant qu'il reste des photos dans la liste, l'outil parcourt la liste jusqu'à ce que vous ayez retrouvé tous les prénoms des élèves.

![](https://minio.apps.education.fr/codimd-prod/uploads/upload_8b511ff9285f81797dac501d4f99ac38.png)