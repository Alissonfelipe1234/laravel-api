# Laravel API

Dependecias: Docker

Imagens usadas: PHP fpm, NGINX e MYSQL

#### Primeiro é preciso criar um arquivo .env com base no .env.exemple, 
#### você pode criar com seu programa favorito ou usar o bash:
```
cp .env.example .env
vim .env
```


#### Para iniciar o servidor você precisa rodar os comandos abaixo:

```
docker-compose up -d
docker-compose exec app composer install
docker-compose exec app php artisan key:generate
docker-compose exec app php artisan migrate
docker-compose exec app php artisan command:update
```

> Foram criados dois endereços:
> - *[API](http://localhost:8000)*
> - *[Documentação](http://localhost:8001)*
