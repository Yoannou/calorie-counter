# Empties calorie-build folder with rm www/calorie-build/*
# Copies the contents of the build folder (build/.) to the www/calorie-build folder on the apache server

rm -rf /home/james/www/calorie-build/*
cp -r ./build/. /home/james/www/calorie-build/