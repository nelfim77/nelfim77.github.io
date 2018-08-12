// /***********************************/
// $(document).ready(function(){
		
//     $('input#name-send, input#tel-send').unbind().blur( function(){
             
// 		$('[data-toggle="popover"]').popover(); 
		
//         var id = $(this).attr('id');
//         var val = $(this).val();
 
//         switch(id)
//         {
//             // Проверка поля "Имя"
//             case 'name-send':
// 				var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

//                 if(val.length > 2 && val != '' && rv_name.test(val))
//                 {
//                     $("#name-send").addClass('not_error');
// 					$(this).removeClass('error')
//                 }
//                 else
//                 {
//                     $("#name-send").removeClass('not_error')
// 					$(this).addClass('error');
//                 }
//                 break;

//                // Проверка tel
//             case 'tel-send':
//                 var rv_tel =  /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
//                 console.log(id);
// 				if(val != '' && rv_tel.test(val))
//                 {
// 					$("#tel-send").addClass('not_error');
// 					$(this).removeClass('error')
//                 }
//                 else
//                 {
// 					$("#tel-send").removeClass('not_error')
// 					$(this).addClass('error');
//                 }
//                break;   
//            } // end switch(...)
//          }); // end blur()

//         // Теперь отправим наше письмо с помощью AJAX
//         $('form#feedback-form-send').submit(function(e){
		
//             // Запрещаем стандартное поведение для кнопки submit
//             e.preventDefault();
			 
// 			if($("#name-send").val()!="" && $("#tel-send").val()!=""){
// 				if($("#name-send").hasClass('error'))
// 					{
// 						$('#name-send').css('border','2px solid red');	
// 					}else{
// 						$('#name-send').css('border','2px solid green');
// 					}
// 				if($("#tel-send").hasClass('error'))
// 					{
// 						$('#tel-send').css('border','2px solid red');
// 					}else{
// 						$('#tel-send').css('border','2px solid green');
// 					}
// 			}else{
// 				$("#name-send,#tel-send").css('border','2px solid red');
// 			}
//             if($('.not_error').length == 2)
//             {  
//                 $.ajax({
// 					url: 'controller/form-send.php',
//                     type: 'post',
//                     data: $(this).serialize(),

//                     beforeSend: function(xhr, textStatus){ 
//                         $('form#feedback-form-send :input').attr('disabled','disabled');
//                     },

//                     success: function(response){
//                         $('form#feedback-form-send :input').removeAttr('disabled');  
//                         alert(response);
//                     }
//                 }); // end ajax({...})
//             }
//             else
//             {
//               return false;
//             }
//     }); // end submit()
// }); // end script
// ////***********************************///
// *********************************
// $(document).ready(function(){
		
//     $('input#name-send-1, input#tel-send-1').unbind().blur( function(){
             
// 		$('[data-toggle="popover"]').popover(); 
		
//         var id = $(this).attr('id');
//         var val = $(this).val();
 
//         switch(id)
//         {
//             // Проверка поля "Имя"
//             case 'name-send-1':
// 				var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

//                 if(val.length > 2 && val != '' && rv_name.test(val))
//                 {
//                     $("#name-send-1").addClass('not_error');
// 					$(this).removeClass('error')
//                 }
//                 else
//                 {
//                     $("#name-send-1").removeClass('not_error')
// 					$(this).addClass('error');
//                 }
//                 break;

//                // Проверка tel
//             case 'tel-send-1':
//                 var rv_tel =  /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
//                 console.log(id);
// 				if(val != '' && rv_tel.test(val))
//                 {
// 					$("#tel-send-1").addClass('not_error');
// 					$(this).removeClass('error')
//                 }
//                 else
//                 {
// 					$("#tel-send-1").removeClass('not_error')
// 					$(this).addClass('error');
//                 }
//                break;   
//            } // end switch(...)
//          }); // end blur()

//         // Теперь отправим наше письмо с помощью AJAX
//         $('form#feedback-form-order-1').submit(function(e){
		
//             // Запрещаем стандартное поведение для кнопки submit
//             e.preventDefault();
			 
// 			if($("#name-send-1").val()!="" && $("#tel-send-1").val()!=""){
// 				if($("#name-send-1").hasClass('error'))
// 					{
// 						$('#name-send-1').css('border','2px solid red');	
// 					}else{
// 						$('#name-send-1').css('border','2px solid green');
// 					}
// 				if($("#tel-send").hasClass('error'))
// 					{
// 						$('#tel-send-1').css('border','2px solid red');
// 					}else{
// 						$('#tel-send-1').css('border','2px solid green');
// 					}
// 			}else{
// 				$("#name-send-1,#tel-send-1").css('border','2px solid red');
// 			}
//             if($('.not_error').length == 2)
//             {  
//                 $.ajax({
// 					url: 'controller/form-send-1.php',
//                     type: 'post',
//                     data: $(this).serialize(),

//                     beforeSend: function(xhr, textStatus){ 
//                         $('form#feedback-form-order-1 :input').attr('disabled','disabled');
//                     },

//                     success: function(response){
//                         $('form#feedback-form-order-1 :input').removeAttr('disabled');  
//                         alert(response);
//                     }
//                 }); // end ajax({...})
//             }
//             else
//             {
//               return false;
//             }
//     }); // end submit()
// }); // end script



oForm = {
    init: function() {
        $(document).on('submit', '.js__form', oForm.mSubmit);
    },
    mSubmit: function(e) {
        e.preventDefault();

        var jForm = $(this),
            jInputs = jForm.find('input, textarea'),
            jResponse = $('.response'),
            jSubmit = jForm.find('.form-submit'),
            bError = 1;

        jInputs.each(function(){
            var jInput = $(this),
                sType = jInput.data('type'),
                sVal = jInput.val();

            oForm.mRegTest(jInput, sType, sVal);
        });

        jInputs.each(function(){
            var jInput = $(this);

            if(jInput.hasClass('is-error')){
                bError = 0;
            }
        })

        if(bError){
            $.ajax({
                url: 'controller/form-send.php',
                type: 'POST',
                data: jForm.serialize(),
            }).always(function(){
                jSubmit.attr('disabled', 'disabled');
            }).done(function(response) {
                alert(response);
                jSubmit.removeAttr('disabled');

                if(jResponse.length >0){
                    jResponse.html(response);
                }
                jForm[0].reset();
            }).fail(function(response){
                alert(response);
                if(jResponse.length >0){
                    jResponse.html(response);
                }
            });
        }
        
        return false;
    },
    mRegTest: function(jInput, sType, sVal) {
        switch (sType) {
            case 'name':
                var rv_name = /^[a-zA-Zà-ÿÀ-ß]+$/;
                if (sVal.length >= 2 && sVal != '' && rv_name.test(sVal)) {
                    jInput.removeClass('is-error')
                } else {
                    jInput.addClass('is-error');
                }
                break;
            case 'phone':
                var rv_tel = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
                if (sVal != '' && rv_tel.test(sVal)) {
                    jInput.removeClass('is-error')
                } else {
                    jInput.addClass('is-error');
                }
                break;
            case 'email':
                var email_reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
                if (sVal != '' && email_reg.test(sVal)) {
                    jInput.removeClass('is-error')
                } else {
                    jInput.addClass('is-error');
                }
                break;
            case 'email-phone':
                var email_reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
                var rv_tel = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;

                if ((sVal != '' && email_reg.test(sVal)) || (sVal != '' && rv_tel.test(sVal))) {
                    jInput.removeClass('is-error')
                } else {
                    jInput.addClass('is-error');
                }
                break;
            case 'checkbox':
                if(jInput.is(':checked')){
                    jInput.removeClass('is-error')
                } else {
                    jInput.addClass('is-error');
                }
                break;
            default:
                if(sVal != ''){
                    jInput.removeClass('is-error')
                } else {
                    jInput.addClass('is-error');
                }
        }
    }
}

$(function() {
    oForm.init();
});



$(function(){
    var oPopup = {
        init: function()
        {
            $(document).on('click','[data-popup-close]', oPopup.closeSelector);
            $(document).on('click','[data-popup-open]', oPopup.openSelector);

            $(window).on('resize', oPopup.checkHeight);
        },

        openSelector: function(e)
        {
            var jThis = $(e.currentTarget),
                sPopUpId = jThis.attr('data-popup-open');

            e.preventDefault();
            oPopup.open(sPopUpId);
        },
        open: function (sPopUpId)
        {
            var jPopUp = $('[data-popup-id="' + sPopUpId + '"]');

            jPopUp.stop().fadeIn(200).css('z-index', 550).addClass('is-visible');
            $('body').addClass('is-overflow');

            oPopup.checkHeight();

            return false;
        },




        closeSelector: function(e)
        {
            var jThis = $(e.currentTarget)
                sPopUpId = jThis.attr('data-popup-close');

            e.preventDefault();
            oPopup.close(sPopUpId);
        },
        close: function (sPopUpId)
        {
            var jPopUp = $('[data-popup-id="' + sPopUpId + '"]');

            jPopUp.stop().fadeOut(200).removeClass('is-visible');
            $('body').removeClass('is-overflow')

            return false;
        },




        checkHeight: function(){
            $('.popup:visible').each(function(){
                var jThis = $(this);

                if(jThis.outerHeight() >= $(window).height()){
                    jThis.addClass('is-large');
                } else{
                    jThis.removeClass('is-large');
                }
            });
        }
    }

    window.oPopup = oPopup;

    oPopup.init();
});
