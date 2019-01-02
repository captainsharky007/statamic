  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            $(forms).find('input.form-control').each(function (index, element) {
              var required = $(element).siblings('.invalid-feedback').children('.required');
              var error = $(element).siblings('.invalid-feedback').children('.error');
              if (element.validity.valueMissing) {
                required.show();
              } else {
                required.hide();
                if (!element.validity.valid) {
                  error.show();
                } else {
                  error.hide();
                }
              }
            })
            event.preventDefault();
            event.stopPropagation();
          } else {
            post(form);
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  function post(form) {
    event.preventDefault();
    var form = $(form);
    var formData = form.serialize();
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    }).done(function (response) {
      form.trigger('reset');
      form.removeClass('was-validated');
      showSnackBar('Form was submitted successfully.');
      console.log(response);
    }).fail(function (data) {
      console.log(data);
    });
  }