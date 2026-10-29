/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;

    const from = Math.min(start, end);
    const to = Math.max(start, end);

    for (let i = from; i <= to; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let count = 0;
    let current = a;

    while (current > 0.1) {
        current = current / 2;
        count++;
    }

    return count;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    if (!message) return '';

    let result = message.split('');
    let i = 2;

    if (result.length > 0) {
        do {
            if (i < result.length) {
                result[i] = '_';
            }
            i += 3;
        } while (i < result.length);
    }

    return result.join('');
}
