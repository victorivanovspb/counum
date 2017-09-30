'use strict';

class Numberman {
    constructor() {
        this.numbers = [];
    }

    static genRandomNum(max=9, min=1) {
        return Math.ceil(Math.random() * (max - min) + min);
    }

    static genRandomSign() {
        return (Math.random() >= .5)
            ? '+'
            : '-';
    }

    get task() {
        let msg = '';
        this.numbers.forEach((number) => {
           if (msg.length === 0) {
                msg += (number.sign === '-')
                    ? `-${number.value}`
                    : `${number.value}`;
           } else {
               msg += ` ${number.sign} ${number.value}`;
           }
        });
        return msg;
    }

    get answer() {
        let s = 0;
        this.numbers.map((number) => {
            if (number.sign === '-') {
                s -= number.value;
            } else {
                s += number.value;
            }
        });
        return s;
    }

    gen(nums=3) {
        this.numbers = [];
        for (let i = 0; i < nums; i++) {
            let sign = Numberman.genRandomSign();
            this.numbers.push({
                sign: sign,
                value: (sign === '-')
                    ? Numberman.genRandomNum(4, 1)
                    : Numberman.genRandomNum(9, 1)
            });
        }
        return this;
    }
}