//    
// while (m < 10) {
    let z = prompt('Выберети задание?',)
    switch (z) {
        case 1: {
            let a = 1;
            let b = 1;
            let c;
            let d;
            let e;
            let f;
            let g;
            let h;
            let i;
            let j;
            let n = +prompt("Введите число",);
            for (let i = 0; i < n; i++) {
                c = a + b;
                d = b + c;
                e = c + d;
                f = d + e;
                g = e + f;
                h = f + g;
                i = g + h;
                j = h + i;


            }

            console.log(b);
            console.log(c);
            console.log(d);
            console.log(e);
            console.log(f);
            console.log(g);
            console.log(h);
            console.log(i);
            console.log(j);

            break;
        }
        case 2:{
            let n = +prompt('Введите 1 число');
            let m = +prompt('Введите 2 число');
            while (n >= m) {
                m = +prompt('Введите число больше первого');
            }
            for (let i = n + 1; i <= m; i++) {
                res = n * i;
                console.log(n + '*' + i + ' = ' + res);
            }
            break;
        }
    default: {
            console.log("fuck");
            break;
        }
    }
// xx`}