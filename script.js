// стрелочная callback функция через 5с
function lesson1(text = "hello", delay = 5000) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}
// lesson1()

// Создать переменную "Good Morning"
// Заменить "Morning" на "Evening" и присвоить результат новой переменной
// Вывести новую переменную в консоль
function lesson2() {
    let gm = "Good Morning";
    // находим индекс пробела
    let spaceIndex = gm.indexOf(" ");
    // создаем новую переменную для "Good Evening"
    let ge = gm.slice(0, spaceIndex) + " Evening";
    console.log(ge);
}
// lesson2()

// 1. создать массив
// 2. вывести массив в консоль
// 3. заменить второй элемент
// 4. вывести массив в консоль
function lesson3() {
    let arr = ["one", "two", "three"];
    console.log(arr);
    arr[1] = "newTwo";
    console.log(arr);
}
lesson3();
