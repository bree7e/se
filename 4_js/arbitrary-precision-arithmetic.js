/**
 * Сложение в столбик
 * Вспомогательная рекурсивная функция сложения чисел с использованием длинной арифметики
 * 
 * @param a левое слагаемое
 * @param b правое слагаемое
 * @param result промежуточный результат
 * @param carry единица переноса в следующий разряд
 * @param base основание системы счисления
 * @returns 
 */
function res(a, b, result, carry, base) {
    // выход из рекурсии
    if (a.length == 0 && b.length == 0 && !carry) return result;

    // младшие разряды
    var left = parseInt(a.pop() || "0", base);
    var right = parseInt(b.pop() || "0", base);

    // складываем и добавляем перенос с прошлой итерации
    var l = left + right + (carry || 0);

    // вызываем для следующих разрядов, правильно вычисляя добавленную цифру и цифру переноса
    return res(a, b, l % base + (result || ""), Math.floor(l / base), base);
}

function add(a, b) {
    return res(
        a.toString().split(""),
        b.toString().split(""),
        "",
        "",
        10
    ).toString();
}

console.log(add("123", "123"));
console.log(add("111", "999"));
console.log(add("1000", "1"));
console.log(add("9999999999999999999999999999999999999999999999999999999999999", "1"));
