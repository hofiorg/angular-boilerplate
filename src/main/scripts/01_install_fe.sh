cd ../js  || exit

echo
echo "node version: $(node -v)"
echo "npm version: $(npm -v)"
echo "ng version: $(ng --version)"
echo

npm install
