//일반함수 사용법

function first(){
    second();
    console.log('첫번째');
}

function second(){
    third();
    console.log('두번째');
}

function third(){
    console.log('세번째');
}

first();