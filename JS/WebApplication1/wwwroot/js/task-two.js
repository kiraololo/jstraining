function Calculator(num) {
    if (this instanceof Calculator && !this.__previouslyConstructedByCalculator) {
        this.__previouslyConstructedByCalculator = true;
    }
    else {
        throw new Error('Use like constructor only!');
    }

    let priorityOperations = [];
    let plusArray = [];
    let minusArray = [];
    let multiArray = [];
    let divArray = [];

    return {
        plus: function (plusNum) {
            plusArray.push(plusNum);
            return this;
        },
        minus: function (minusNum) {
            minusArray.push(minusNum);
            return this;
        },
        multiply: function (multiNum) {
            priorityOperations.push('*');
            multiArray.push(multiNum);
            return this;
        },
        divide: function (divNum) {
            priorityOperations.push('/');
            divArray.push(divNum);
            return this;
        },
        calculate: function () {
            let res = num;
            priorityOperations.forEach((operation) => {
                if (operation == '*') {
                    res *= multiArray.shift();
                }
                if (operation == '/') {
                    res /= divArray.shift();
                }
            });

            plusArray.forEach((plusNum) => {
                res += plusNum;
            });

            minusArray.forEach((minusNum) => {
                res -= minusNum;
            });

            return res;
        }
    };
}