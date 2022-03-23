

/**
 * Bài tập 1: 
 * Đầu Vào :
 * - Tạo biến số nguyên dương nhỏ nhất (n)
 * - Tạo biến tổng (s) sao cho s > 10000
 * Xử Lý
 * cho n = 0
 * cho s = 0
 * - Sử dụng vòng lặp while (s <= 10000)
 * s = s + n (Tìm Tổng)
 * n++ (Tìm số nguyên dương nhỏ Nhất)
 * Đầu Ra : Show kết quả
 */

var n = 0;
var s = 0;

while (s <= 10000) {
    s = s + n
    n++ ;
    result = "Số Nguyên Dương Nhỏ Nhất Là : " + n + "</br>" + "Tổng Là : " + s ;
}
document.getElementById("footerCheckNumber1").innerHTML = result ;


/**
 * Bài tập 2 :
 * Đầu vào :
 * - Cho nhập vào 2 số x , n tính tổng 
 * Xử lý:
 * - Tạo biến x , n
 * - Tạo biến tổng (s) cho s = 0
 * 
 */


document.getElementById("btnCheckNumber2").onclick = function() {
    var x = document.getElementById("txtNumberX").value ;
    var n = document.getElementById("txtNumberN").value ;
    var s = 0;
    var t = 1;
    for(var i = 1; i <= n; i++ ){
        t = t * x;
        s = t + s ;
    }
    document.getElementById("footerCheckNumber2").innerHTML = "Tổng Là : " + s;

}

/**
 * Bài tập 3 : Tính giai thừa
 * Đầu vào :
 * - Cho nhập vào sô bất kì
 * Xử lý :
 * - Tạo biến n (số được lấy từ người dùng nhập vào)
 * - Tạo biến Tổng (s), cho s = 1
 * - Sử dụng vòng lặp for
 * - Công thức tính tổng là s = s * i
 * Đầu ra: Show kết quả
 */


document.getElementById("btnCheckNumber3").onclick = function (){
    var n = document.getElementById("Number3").value ;
    var s = 1 ;
    for ( var i = 1 ; i <= n ; i++ ){
        s = s * i ;
    }
    document.getElementById("footerCheckNumber3").innerHTML = s ;
}


/**
 * Bài tập 4 :
 * Đầu vào : 
 * - Khi click button sẽ in ra 10 thẻ div
 * Xử Lý :
 * - Xử dụng vòng lặp for 
 * - Nếu chia hết cho 2 => chẵn có màu đỏ 
 * - Nếu không chia hết cho 2 => lẻ có màu xanh
 * Đầu ra : Show kết quả
 */


document.getElementById("btnCheckNumber4").onclick = function() {
    
   
    for (var i = 1 ; i <= 10 ; i++ ){
        var color = document.getElementById("footerCheckNumber4") ;
        var child = document.createElement("div");
        color.appendChild(child);
        if ( i % 2 === 0){
            child.innerHTML = "Div Chẵn "+ i;
            child.style.background = "red"; 
            child.style.color = "white";
        }else{
            child.innerHTML = "Div Lẻ "+ i;
            child.style.background = "blue";
            child.style.color = "white";
        }
        
        
    }
    
     
    
}





