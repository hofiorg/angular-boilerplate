cd ../../.. || exit

echo
echo "maven version: $(mvn -v)"
echo

mvn clean package spring-boot:repackage