pandoc -f markdown+mark+lists_without_preceding_blankline+emoji -t html -s index.md -o test.html --lua-filter=pandoc/fr-nbsp.lua --lua-filter=pandoc/set-title-from-h1.lua --lua-filter=pandoc/underline.lua --mathjax -c "pandoc/style.css" --template=pandoc/template.html --lua-filter=pandoc/include.lua