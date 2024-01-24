export const validCpf = (cpf: any) => {
  if (cpf !== '') {
    const cpfWithoutMask = cpf.replace(/[^\w\s]/gi, '');
    let number;
    let digit;
    let sum;
    let i;
    let result;
    let equals;
    equals = 1;

    if (cpfWithoutMask.length < 11) {
      return false;
    }

    for (i = 0; i < cpfWithoutMask.length - 1; i += 1) {
      if (cpfWithoutMask.charAt(i) !== cpfWithoutMask.charAt(i + 1)) {
        equals = 0;
        break;
      }
    }

    if (!equals) {
      number = cpfWithoutMask.substring(0, 9);
      digit = cpfWithoutMask.substring(9);
      sum = 0;

      for (i = 10; i > 1; i -= 1) {
        sum += number.charAt(10 - i) * i;
      }

      result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

      if (result !== parseInt(digit.charAt(0), 10)) {
        return false;
      }
      number = cpfWithoutMask.substring(0, 10);
      sum = 0;

      for (i = 11; i > 1; i -= 1) {
        sum += number.charAt(11 - i) * i;
      }

      result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

      if (result !== parseInt(digit.charAt(1), 10)) {
        return false;
      }

      return true;
    }
    return false;
  }
  return false;
};
