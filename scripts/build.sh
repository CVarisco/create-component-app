rm -rf dist
babel src -d dist --copy-files
cp -r templates dist/