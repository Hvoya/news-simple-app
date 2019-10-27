## Проблема API

API позволяет получать только список новостей. Нет эндпоинтов на получение одной новости.
Поэтому при клике на новость происходит переход на страницу новости в источнике. Все решения в обход этого
показались некрасивыми костылями.

Так же получение новостей без фильтров невозможно. Требуется указать в параметрах домены, строку поиска 
или источники. Поэтому в настройках сделал выбор языка и источников, с их проставлением по умолчанию.

Ссылка на Heroku - [Simple News App on Heroku](https://news4873.herokuapp.com).

---------------------------------------
## Поднять локально
### Установка
`yarn install` или `npm install`
### Запуск
`yarn start` или `npm start`
