module.exports =
  function validate(title, locate, descr) {
    if(title === '' || locate === '' || descr === ''){
      var errors = 'You must fill in each field';
    }
    return errors;
  }
