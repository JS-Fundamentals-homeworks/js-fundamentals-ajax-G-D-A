// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

$(function () {
  const links = $("a");

  links.attr("target", "_blank");

  links.each(function () {
    const href = $(this).attr("href") || "";
    if (href.startsWith("https://")) {
      $(this).addClass("secure");
    }
  });
});