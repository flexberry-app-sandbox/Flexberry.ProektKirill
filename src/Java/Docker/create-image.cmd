docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proekt_kirill-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proekt_kirill-java/app ../../..
