const boleto = 'jui';

const codigoacceso = boleto === 'vip' ? 'vip.123': 'regular.123';

boleto === 'vip' ? console.log('el boleto es tipo vip') : console.log ('el boleto es tipo regular');