$(document).ready(function () {

    $('.base').height($(window).height());
    
    $('#basic-addon1 , #basic-addon2').click(function(){
     var val1 = $('.first').val();
     var val2 =  $('.sec').val();
        if(val1.length === 0){
          $('.hide').slideDown("slow");
            $('.track-no').text('Your Tracking number not existed');
           $('.table').css('display','none');
            
        }else{
        
        $('.hide').slideDown("slow");
        console.log(val1);
        $('.track-no').html(val1);
         $('.table , .noshow').show();

}
        
    })
    
  

});



