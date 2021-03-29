function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), ms);
    });
}

if (!Promise.myAll) {
    Promise.myAll = function (promisesArray) {
        return new Promise(function (resolve, reject) {
            let processingCount = promisesArray.length;
            let results = [];
            let runIdx = 0;
            promisesArray.forEach(promise => {
                promise.then(
                    result => {
                        processingCount--;
                        results.push({ id: runIdx, result: result });
                        if (processingCount == 0) {
                            resolve(results.sort((a, b) => {
                                return b.id - a.id;
                            }).map(item => {
                                return item.result
                            }));
                        }
                        runIdx++;
                    },
                    error => { reject(new Error(error)); }
                );
            });
        });        
    }
}

if(!Promise.myRace) {
    Promise.myRace = function (promisesArray) {
        return new Promise(function (resolve, reject) {
            promisesArray.forEach(promise => {
                promise.then(
                    result => {
                        resolve(result);
                    },
                    error => { reject(new Error(error)); }
                );
            });
        });
    }
}


Promise.myAll([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert);

Promise.myRace([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert);