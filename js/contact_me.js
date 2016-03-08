

// $(function() {
//
//     $("input,textarea").jqBootstrapValidation({
//         preventSubmit: true,
//         submitError: function($form, event, errors) {
//             // additional error messages or events
//         },
//         submitSuccess: function($form, event) {
//             // Prevent spam click and default submit behaviour
//             $("#btnSubmit").attr("disabled", true);
//             event.preventDefault();
//
//             // get values from FORM
//             var name = $("input#name").val();
//             var email = $("input#email").val();
//             var phone = $("input#phone").val();
//             var message = $("textarea#message").val();
//             var firstName = name; // For Success/Failure Message
//             // Check for white space in name for Success/Fail message
//             if (firstName.indexOf(' ') >= 0) {
//                 firstName = name.split(' ').slice(0, -1).join(' ');
//             }
//             $.ajax({
//                 url: "https://mandrillapp.com/api/1.0/messages/send-template.json",
//                 method: "POST",
//                 data: {
//                     'key': 'Be50ItuT9NzIlPX2ESdEUQ',
// 					'template_name': 'Portfolio',
// 					'template_content': [
// 						{
// 							'name':'example name',
// 							'content': 'example content'
// 						}
// 					  ],
// 					'message': {
// 					  'from_email': email,
// 						'from_name': name,
// 						'headers': {
// 							'Reply-To': email
// 						},
// 						'subject': 'Job Lead',
// 						'to': [
// 							{
// 								'email': 'ganderson7197@icloud.com',
// 								'name': 'Garrett Anderson',
// 								'type': 'to'
// 							}],
// 					'global_merge_vars': [
// 						{
// 							'name': 'name',
// 							'content': name
// 						},
// 						{
// 							'name': 'email',
// 							'content': email
// 						},
// 						{
// 							'name': 'phone',
// 							'content': phone
// 						},
// 						{
// 							'name': 'message',
// 							'content': message
// 						}
// 					]
// 					}
//                 },
//                 cache: false,
//                 success: function() {
//                     // Enable button & show success message
//                     $("#btnSubmit").attr("disabled", false);
//                     $('#success').html("<div class='alert alert-success'>");
//                     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                         .append("</button>");
//                     $('#success > .alert-success')
//                         .append("<strong>Your message has been sent. </strong>");
//                     $('#success > .alert-success')
//                         .append('</div>');
//
//                     //clear all fields
//                     $('#contactForm').trigger("reset");
//                 },
//                 error: function() {
//                     // Fail message
//                     $('#success').html("<div class='alert alert-danger'>");
//                     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                         .append("</button>");
//                     $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
//                     $('#success > .alert-danger').append('</div>');
//                     //clear all fields
//                     $('#contactForm').trigger("reset");
//                 },
//             })
//         },
//         filter: function() {
//             return $(this).is(":visible");
//         },
//     });
//
//     $("a[data-toggle=\"tab\"]").click(function(e) {
//         e.preventDefault();
//         $(this).tab("show");
//     });
// });

// When clicking on Full hide fail/success boxes
// $('#name').focus(function() {
//     $('#success').html('');
// });
