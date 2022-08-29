/*
   Một số điều cần biết về function:

   1. Khi function đặt trùng tên? --> Sẽ gọi function sau cùng (overwrite)
   2. Khai báo biến trong hàm?
   3. Định nghĩa hàm trong hàm?
 */

function showMess() {
   console.log('showMess');
}

function showMess() {
   console.log('showMess Copy');
}

showMess();

//////////////////////////////////////////////////////////////////////////
function TestCase2() {
   var fullName = 'Nguyen Van Khoa';
   console.log(fullName);
}

TestCase2();

//////////////////////////////////////////////////////////////////////////
function showMess_2() {
   function showMess_3() {
      console.log('Message_3');
   }
   showMess_3();
}

showMess_2();

