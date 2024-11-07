cd ../js || exit

echo
echo "node nersion: $(node -v)"
echo "npm version: $(npm -v)"
echo "ng version: $(ng --version)"
echo

ng test --watch=false
