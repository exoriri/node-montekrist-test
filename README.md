## Описание
Тестовое задание для http://montekrist.media/. Сделано с использованием NestJs + Pure JavaScript без фреймфорворков.

Как шаблонизатор используется handlebars, но он оказался не нужен. </br>
Выбрал NestJs, потому что у него неплохой starter template. Есть готовая структура файлов и настроенный Typescript. </br>
React, Vue и тд. не использовал, потому что в тестовом только одна несложная страничка. Надеюсь читать код будет понятно🙂
## Установка
Для установки нужен NodeJs >= 18.6.0
```bash
$ npm install
```
## Запуск приложения

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod


```
# Использование API
У API есть один endpoint вида `http://hostname/search?text={your_searching_text}`, где text - это текст по которому производится поиск. 
Это возвратит результаты поиска по персонажам, планетам и кораблям. </br>

Пример ответа: 
``` 
  {
    prev: false,  // prev - существует ли предыдущая страница. Страниц может быть любое кол-во.
    next: true,   // next - существует ли следующая страница. Страниц может быть любое кол-во.
    found: [Items] // Items - это найденные персонажи, планеты и/или корабли.
  }
```

Так же у endpoint есть дополнительные query параметры: </br>
- types - параметр для получения отдельной сущности. Например url: `http://hostname/search?text={your_searching_text}&types=people,planets` вернет только персонажей и планеты.</br> По-умолчанию `types=people,planets,starships`.
- page - страница поиска. Принимает только натуральные числа. Например url: `http://hostname/search?text={your_searching_text}&types=people,planets&page=3`. Вернет персонажей и планеты со страницей 3.
