//////////////////// 하트 별점 ////////////////////
$(document).ready(function () {
  // Gets the span width of the filled-ratings span
  // this will be the same for each rating
  var star_rating_width = $('.fill-ratings span').width();
  // Sets the container of the ratings to span width
  // thus the percentages in mobile will never be wrong
  $('.star-ratings').width(star_rating_width);
});

//////////////////// slick slider ////////////////////
$(document).ready(function(){
  $('.new-items').slick({
    autoplay: true
  });
});

// LOGIN Modal
$(document).ready(function(){
  $('.h-r-top .login').click(function(){
    $('#modal').show();
  });
  $('.close-modal').click(function(){
    $('#modal').hide();
  });  
});

//////////////////// 용량 선택시 price 변경 & img 변경 ////////////////////
$(document).ready(function(){
  // n1
  $('.n1').change(function(){
    if($('#n1').val() == "n1-op1"){
      $('.n1-img').attr("src", "images/new/n1-50.jpg");
      $('.n1 .price').text('42,000원');
    } else {
      $('.n1-img').attr("src", "images/new/n1-175.jpg");
      $('.n1 .price').text('95,000원');
    };
  });
  // n2
  $('.n2').change(function(){
    if($('#n2').val() == "n2-op1"){
      $('.n2-img').attr("src", "images/new/n2.jpg");
      $('.n2 .price').text('110,000원');
    } else {
      $('.n2-img').attr("src", "images/new/n2.jpg");
      $('.n2 .price').text('110,000원');
    };
  });
  // n3
  $('.n3').change(function(){
    if($('#n3').val() == "n3-op1"){
      $('.n3-img').attr("src", "images/new/n3-250.jpg");
      $('.n3 .price').text('59,000원');
    } else {
      $('.n3-img').attr("src", "images/new/n3-500.jpg");
      $('.n3 .price').text('102,000원');
    };
  });
  // n4
  $('.n4').change(function(){
    if($('#n4').val() == "n4-op1"){
      $('.n4-img').attr("src", "images/new/n4.jpg");
      $('.n4 .price').text('95,000원');
    } else {
      $('.n4-img').attr("src", "images/new/n4.jpg");
      $('.n4 .price').text('95,000원');
    };
  });
  // n5
  $('.n5').change(function(){
    if($('#n5').val() == "n5-op1"){
      $('.n5-img').attr("src", "images/new/n5.jpg");
      $('.n5 .price').text('87,000원');
    } else {
      $('.n5-img').attr("src", "images/new/n5.jpg");
      $('.n5 .price').text('87,000원');
    };
  });
  // n6
  $('.n6').change(function(){
    if($('#n6').val() == "n6-op1"){
      $('.n6-img').attr("src", "images/new/n6-100.jpg");
      $('.n6 .price').text('86,000원');
    } else {
      $('.n6-img').attr("src", "images/new/n6-200.jpg");
      $('.n6 .price').text('129,000원');
    };
  });
  // n7
  $('.n7').change(function(){
    if($('#n7').val() == "n7-op1"){
      $('.n7-img').attr("src", "images/new/n7-28.jpg");
      $('.n7 .price').text('10,000원');
    } else {
      $('.n7-img').attr("src", "images/new/n7-100.jpg");
      $('.n7 .price').text('60,000원');
    };
  });
  // n8
  $('.n8').change(function(){
    if($('#n8').val() == "n8-op1"){
      $('.n8-img').attr("src", "images/new/n8-50.jpg");
      $('.n8 .price').text('42,000원');
    } else {
      $('.n8-img').attr("src", "images/new/n8-125.jpg");
      $('.n8 .price').text('80,000원');
    };
  });

  // bs1
  $('.bs1').change(function(){
    if($('#bs1').val() == "bs1-op1"){
      $('.bs1-img').attr("src", "images/best-seller/bs1-50.jpg");
      $('.bs1 .price').text('42,000원');
    } else {
      $('.bs1-img').attr("src", "images/best-seller/bs1-175.jpg");
      $('.bs1 .price').text('95,000원');
    };
  });
});

//////////////////// join_2 전체동의 ////////////////////
$(document).ready(function() {
  // 전체동의 누르면 전부 체크 onoff
  $("#allcheck").click(function() {
    if($("#allcheck").prop("checked")) {
      $(".ag-checkbox").prop("checked", true);
    } else {
      $(".ag-checkbox").prop("checked", false);
    }
  });
  // 3개 중 하나라도 체크off -> 전체동의 off
  $(".ag-checkbox").click(function() {
    var total = $(".ag-checkbox").length;
    var checked = $(".ag-checkbox:checked").length;
    
    if(total != checked) {
      $("#allcheck").prop("checked", false);
    } else {
      $("#allcheck").prop("checked", true);
    }
  });
});

//////////////////// join_3 전체동의 ////////////////////
$(document).ready(function() {
  // 전체동의 누르면 전부 체크 onoff
  $(".agall-check").click(function() {
    if($(".agall-check").prop("checked")) {
      $(".ag-check").prop("checked", true);
    } else {
      $(".ag-check").prop("checked", false);
    }
  });
  // 3개 중 하나라도 체크off -> 전체동의 off
  $(".ag-check").click(function() {
    var total = $(".ag-check").length;
    var checked = $(".ag-check:checked").length;
    
    if(total != checked) {
      $(".agall-check").prop("checked", false);
    } else {
      $(".agall-check").prop("checked", true);
    }
  });
});