// total rows***************************************************
let tableBody = document.getElementById("TBody");
let rows = TBody.rows.length;

document.getElementById("total-rows").innerHTML = rows;

// Calculate the total of products in the table and quantity*********************
$('.btn-minus').on('click', function(e) {
  var input = $(e.target).closest('.form-type-number').find('input');
  input[0]['stepDown']();
});

$('.btn-plus').on('click', function(e) {
  var input = $(e.target).closest('.form-type-number').find('input');
  input[0]['stepUp']();
});

function Calc(v){
    var index = $(v).parent().parent().index();
    var qty = document.getElementsByName("qty")[index].value;
    var rate = document.getElementsByName("rate")[index].value;
    var amt = qty * rate;
    document .getElementsByName("amt")[index].value = amt;
    GetTotal();
 }
function GetTotal(){
    var sum=0
    var amts = document.getElementsByName("amt");
    for (let index = 0; index < amts.length; index++){
        var amt = amts[index].value;
        sum = +(sum) + +(amt);
    }
    document. getElementById("FTotal").value = sum;
}
// Delete Row  ******************************************
function BtnDel(v){
    $(v).parent().parent().remove();
    GetTotal();
 }
 // mobile screen table **********************************************
function mobile(){
  if(window.innerWidth < 10000){
      let height = window.innerHeight - (document.querySelector('.row.inputs').offsetHeight  + document.querySelector('.end-page').offsetHeight + 40)+'px';
      document.querySelector('.tableFixHead').style.height = height;
      document.querySelector('.tableFixHead').style.maxHeight = height;
      document.querySelector('#sidebar-wrapper').style.height = height;
      document.querySelector('#sidebar-wrapper').style.maxHeight = height;
      document.querySelector('.sidebar-content').style.height = height;
      document.querySelector('.sidebar-content').style.maxHeight = height;
  }
}
mobile();
function side_mobile(){
  if(window.innerWidth < 1024){
      let height = window.innerHeight - (document.querySelector('.start-page').offsetHeight  + document.querySelector('.end-page').offsetHeight)+'px';
      document.querySelector('#sidebar-wrapper').style.height = height;
      document.querySelector('#sidebar-wrapper').style.maxHeight = height;
      document.querySelector('.sidebar-content').style.height = height;
      document.querySelector('.sidebar-content').style.maxHeight = height;
  }
}
side_mobile();
 window.onresize = function (){
  mobile();
  side_mobile();
}
// navbar *************************************************
$(function(){
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
  $(window).resize(function(e) {
    if($(window).width()<=992){
      $("#wrapper").removeClass("toggled");
    }else{
      $("#wrapper").addClass("toggled");
    }
  });
  $(window).scroll(function(){
    if($(window).scrollTop() > 117){
      $('#sidebar-wrapper').addClass('fixed');
    }
    else{
      $('#sidebar-wrapper').removeClass('fixed');
    }
  })
});
//* ************************ Calculator Modal ***********************************
function insert(num) {
  document.form1.textview.value = document.form1.textview.value + num;
}
function equal() {
  var a = document.form1.textview.value;
  if (a) {
    document.form1.textview.value = eval(a);
  }
}
function backspace() {
  var a = document.form1.textview.value;
  document.form1.textview.value = a.substring(0, a.length - 1);
}
//* * * * ** * * * ending shift modal ***************************************
function multiply200(){
  num = document.getElementById("in200").value;
  result = 200 * num;
  document.getElementById("res2").innerHTML = result;
}
function multiply100(){
  num = document.getElementById("in100").value;
  result = 100 * num;
  document.getElementById("res1").innerHTML = result;
}
function multiply50(){
  num = document.getElementById("in50").value;
  result = 50 * num;
  document.getElementById("res5").innerHTML = result;
}
function multiply20(){
  num = document.getElementById("in20").value;
  result = 20 * num;
  document.getElementById("res20").innerHTML = result;
}
// table************************************************* 
// function get_total(){
//   let total = 0;
//   for(let sub_total of document.querySelectorAll('.tableFixHead table tbody tr td:nth-of-type(6)')){
//     total = total + Number(sub_total.innerHTML);
//   }
//   document.querySelector('.tableFixHead table tfoot tr td:nth-of-type(5)').children[0].innerHTML = total;
// }
// for(let input of document.querySelectorAll('.tableFixHead table tbody tr td:nth-of-type(3) input')){
//   input.onkeyup = function(){
//     var quan = this.parentElement.nextElementSibling.nextElementSibling.children[1].value;
//     this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = Number(this.value) * Number(quan);
//     get_total();
//   }
// }
// for(let button of document.querySelectorAll('table tbody tr td:nth-of-type(5) i')){
//   button.onclick = function(){

//     var input = this.parentElement.previousElementSibling.previousElementSibling.children[0];

//     if(input.value == 0){
//        swal({
//         title : ' أدخل سعر المنتج ',
//         icon : "warning"
//        });
//        return false;
//     }
//      var quan = this.parentElement.children[1];
//     if(button.classList.contains('plus')){
//         quan.innerHTML = Number(quan.innerHTML) < 10 ? "0"+(Number(quan.innerHTML)+1):Number(quan.innerHTML)+1
//      }else{
//       if(Number(quan.innerHTML) > 1){
//         quan.innerHTML = Number(quan.innerHTML) < 10 ? "0"+(Number(quan.innerHTML)-1):Number(quan.innerHTML)-1
//       }
//      }
//      var total = this.parentElement.nextElementSibling;
//      total.innerHTML = Number(input.value) * Number(quan.innerHTML);

//      get_total(); 
//   } 
// }


