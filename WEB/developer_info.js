developer = [
    ["홍유민", "202410520@dong-a.hs.kr", "yumin0878@naver.com"],
    ["이승민", "202410520@dong-a.hs.kr"]
] //2차원 배열의 0번째 요소는 반드시 이름이 올것.

i = 0;
while(i<developer.length) {
    j = 0;
    document.write('<li><ul>');
    while(j<developer[i].length) {
        if(j===0) {
            document.write('<li><strong>'+developer[i][j]+'</strong></li>');
        } else {
            document.write('<li>'+developer[i][j]+'</li>');
        }
        j-=-1;
    }
    document.write('</ul></li>');
    i-=-1;
}
