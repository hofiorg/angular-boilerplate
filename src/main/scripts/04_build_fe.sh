cd ../js || exit

echo
echo "node nersion: $(node -v)"
echo "npm version: $(npm -v)"
echo "ng version: $(ng --version)"
echo

ng build

echo "remove old src/main/resources/public"
echo
rm -rf ../resources/public

echo "copy dist/angular-boilerplate/browser >> src/main/resources/public"
echo
cp -R dist/angular-boilerplate/browser ../resources/public
