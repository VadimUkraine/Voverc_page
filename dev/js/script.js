//script for selecting plan if clicked checkbox

$(document).on('click', '.checkbox' , function(event){
	event.stopImmediatePropagation();
	var currentCheckboxIndex = $(this).parent().parent().attr('data-id');
	$('.checkbox_inner').each(function(index){
		if(index !== Number(currentCheckboxIndex)){
			$('.checkbox_inner:eq('+index+')').removeClass('checked');
			$('.plan:eq('+index+')').removeClass('plan_selected');
			$('.plan_attention:eq('+index+')').removeClass('attention_show');
			$('.select_plan:eq('+index+')').removeClass('hide_select_plan');
			$('.btn_confirm:eq('+index+')').removeClass('show_btn_confirm');
		}
	});

	$(this).find('.checkbox_inner').toggleClass('checked');
	$(this).parent().parent().find('.plan_attention').toggleClass('attention_show');
	$(this).parent().toggleClass('plan_selected');
	$(this).parent().find('.select_plan').toggleClass('hide_select_plan');
	$(this).parent().find('.btn_confirm').toggleClass('show_btn_confirm');

})

//script for selecting plan if clicked title "SELECT THIS PLAN"

$(document).on('click', '.select_plan' , function(event){
	event.stopImmediatePropagation();
	var currentCheckboxIndex = $(this).parent().parent().parent().attr('data-id');
	$('.checkbox_inner').each(function(index){
		if(index !== Number(currentCheckboxIndex)){
			$(this).removeClass('checked');
			$('.plan:eq('+index+')').removeClass('plan_selected');
			$('.plan_attention:eq('+index+')').removeClass('attention_show');
			$('.select_plan:eq('+index+')').removeClass('hide_select_plan');
			$('.btn_confirm:eq('+index+')').removeClass('show_btn_confirm');
		}
	});

	$(this).parent().parent().find('.checkbox_inner').addClass('checked');
	$(this).parent().parent().parent().find('.plan_attention').addClass('attention_show');
	$(this).parent().parent().addClass('plan_selected');
	$(this).addClass('hide_select_plan');
	$(this).parent().find('.btn_confirm').addClass('show_btn_confirm');
})

//prevent bubling in select plan

$(document).on('click', '.trial_plan_item, .select_plan_wrap' , function(event){
	event.stopImmediatePropagation();
});


//take off selection of plan if click on BODY

$(document).on('click', 'body' , function(event){  
    	$('.checkbox_inner').removeClass('checked');
		$('.plan').removeClass('plan_selected');
		$('.plan_attention').removeClass('attention_show');
		$('.select_plan').removeClass('hide_select_plan');
		$('.btn_confirm').removeClass('show_btn_confirm');
		$('[data-step]').removeClass('select_step1 select_step2 select_step3  select_step4 step_prev');
})


//script for stepping

$(document).on('click', 'div[data-step]' , function(event){	
	if(Number($(this).attr('data-step')) === 0){
		$(this).removeClass('step_prev').addClass('select_step1');
		$('[data-step]').each(function(){
			$(this).removeClass('select_step2 select_step3 select_step4 step_prev');
		})
	}else if(Number($(this).attr('data-step')) === 1){
		$(this).removeClass('step_prev').addClass('select_step2');	
		$('[data-step]').each(function(){
			$(this).removeClass('select_step1 select_step3 select_step4 step_prev');
		})
		$('[data-step]:eq(0)').addClass('step_prev');
	}else if(Number($(this).attr('data-step')) === 2){
		$(this).removeClass('step_prev').addClass('select_step3');
	
		$('[data-step]').each(function(){
			$(this).removeClass('select_step1 select_step2 select_step4 step_prev');
		})
		$('[data-step]:eq(0)').addClass('step_prev');
		$('[data-step]:eq(1)').addClass('step_prev');
	}else if(Number($(this).attr('data-step')) === 3){
		$(this).addClass('select_step4');
		$('[data-step]:eq(0)').addClass('step_prev');
		$('[data-step]:eq(1)').addClass('step_prev');
		$('[data-step]:eq(2)').addClass('step_prev');
		$('[data-step]').each(function(){
			$(this).removeClass('select_step1 select_step2 select_step3');
		})
	}

})