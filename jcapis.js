//js目的 獨立變數 避免外部呼叫時誤用

//used in jc23.html 檢查身分證字號
function checkTWId(id){
    let ret = false;
    //正規表示碼處理檢查的部分
    //let regex = /regex(要正規化的數字)/;
    //let regex = /A/;       //let id = 'AA23456789' 找到一個A就會離開  print: A
    //let regex = /A/g;      // let id = 'AA23456789' +g 全域變數  print: AA
    //let regex = /[ABC]/g;  // let id = 'AA23456789' +g 全域變數  print: AA
    //let regex = /[A-Z]/g;  // let id = 'AA23456789' +g 全域變數  print: AA
    //let regex = /^[A-Z]/g; // let id = 'AA23456789' +g 全域變數  print: A ;let id = '0A23456789'

    //id ='11,22,33,44,af,a44,333';
    //let regex = /[0-9]{1,5}/g; +g 全域變數  print: none ; ^[]首字元
    let regex = /^[A-Z][12][0-9]{8}$/; //第一碼A-Z; 第二碼1or2; 之後8碼 0-9; $結尾符號 共10碼
    let result = id.match(regex);
    if (result != null){
        let letter = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
        let c12 = id.substr(0,1);
        let n12 = letter.indexOf(c12) +10;
        //取出n1,n2
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;

        //取出n3-11
        let n3 = id.substr(1,1);
        let n4 = id.substr(2,1);
        let n5 = id.substr(3,1);
        let n6 = id.substr(4,1);
        let n7 = id.substr(5,1);
        let n8 = id.substr(6,1);
        let n9 = id.substr(7,1);
        let n10 = id.substr(8,1);
        let n11 = id.substr(9,1);
        let sum = n1*1 + n2*9 + n3*8 + n4*7 + n5*6 + n6*5 + n7*4 + n8*3 + n9*2 + n10*1 + n11*1;
        ret = sum % 10 == 0;
    }
    return ret;
}


//used in guessnumber.html 
//預設 產生三位數字 ; 變數生命範圍僅在此js敘述句中 外圈呼叫時不會誤用
function createAnswer(n = 3){
    let poker = [];
    for (let i=0 ; i<10 ; i++) poker[i] = i;
    for (let i=poker.length-1 ; i>0; i--){
        let rand = parseInt(Math.random()*(i+1)); 
        [poker[i],poker[rand]] = [poker[rand],poker[i]] ; 
    }
    let ret = '';
    for (let i=0; i<n; i++) ret += poker[i];
    return ret;

}

//檢查?A?B
function checkAB(ans, gus){
    let a=0, b=0;
    for (let i = 0 ; i< gus.length; i++){
        if (gus.charAt(i) == ans.charAt(i)){ //檢查gus的第i碼是否等於ans的第i碼
            a++;
        }else if (ans.indexOf(gus.charAt(i)) >= 0){ //檢查gus的i碼是否存在ans中
            b++;
        }
    }
    return a + 'A' + b + 'B';
}


function reset(){
    let a=0, b=0;
    for (let i = 0 ; i< gus.length; i++){
        if (gus.charAt(i) == ans.charAt(i)){
            a++;
        }else if (ans.indexOf(gus.charAt(i)) >= 0){
            b++;
        }
    }
    return a + 'A' + b + 'B';
}

