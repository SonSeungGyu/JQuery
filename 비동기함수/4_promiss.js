//요청성공여부 예상결과
const result = true;

const promise = new Promise(
    (resolve, reject) => {

        setTimeout(() => {
            if (result) {
                resolve('성공');
            } else {
                reject('실패');
            }
        }, 3000);

    }
);


promise
//성공했을때
.then((response)=>{
    console.log(response);
})

//실패했을때
.catch((error)=>{
    console.log(error);
});