cd ../../.. || exit

echo
echo "maven version: $(mvn -v)"
echo

mvn test
