
Имя БД и логин-пароль прописывам в `server/.env`

PORT=7000

DB_HOST=localhost

DB_NAME=online_store

DB_USER=postgres

DB_PASS=databasepos1

DB_PORT=5432

SECRET_KEY=databasepos1123456

Переходим в директорию `shop/server`, устанавливаем пакеты, запускаем сервер

npm install
npm run start-dev


Переходим в директорию `shop/client`, устанавливаем пакеты, запускаем клиент

cd /path/to/shop/client
npm install
npm start


Таблицы базы данных будут созданы при первом запуске приложения.

Здесь `postgres` — имя пользователя БД, `databasepos1` — пароль для доступа к БД, `online_store` — имя базы данных магазина.

