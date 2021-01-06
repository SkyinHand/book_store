(function($) {
	$.fn.extend({
		'modalCreate': function(title, content, btname, modal_style, title_style, content_style, after_function) {
			let modal_code = `
				<div class="modal fade ${ modal_style }" id="modal_show" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				  <div class="modal-dialog">
					<div class="modal-content">
					  <div class="modal-header">
						<h5 class="modal-title ${ title_style }" id="modal_show_label">${title}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
						</button>
					  </div>
					  <div class="modal-body ${content_style}">
						${content}
					  </div>
					  <div class="modal-footer">
						<button type="button" class="btn btn-primary" data-dismiss="modal">${btname}</button>
					  </div>
					</div>
				  </div>
				</div>
			`
			$(this).append(modal_code)
			let modal_element = $('#modal_show')
			modal_element.modal('show')
			modal_element.on('hidden.bs.modal', function (e) {
				$('#modal_show').remove()
				after_function()
			})
		}
	})
})(jQuery)