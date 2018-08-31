class Bob {
  _isYelling(command) {
    command = command.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, '');
    return command.length ? command === command.toUpperCase() : false;
  }

  hey(input) {
    input = input.replace(/\s/g, '')
                 .replace(/\d+/g, '')
                 .replace(/\n/g, '')
                 .replace(/\r/g, '')
                 .replace(/\t/g, '');
    if (input.length === 0) return 'Fine. Be that way!';
    let punctuation = input[input.length - 1];
    let response;
    let yelling;
    switch(punctuation) {
      case '.':
        response = 'Whatever.';
        break;
      case '!':
        yelling = this._isYelling(input);
        response = (yelling || /!/.test(input[input.length - 2])) ? 'Whoa, chill out!' : 'Whatever.';
        break;
      case '?':
        yelling = this._isYelling(input);
        // response = /[A-Z]/.test(input[input.length - 2]) ? 'Calm down, I know what I\'m doing!' : 'Sure.';
        response = yelling ? 'Calm down, I know what I\'m doing!' : 'Sure.';
        break;
      default:
        response = /[A-Z]/.test(punctuation) ? 'Whoa, chill out!' : 'Whatever.';
    }
    return response;
  }
}

module.exports = Bob;