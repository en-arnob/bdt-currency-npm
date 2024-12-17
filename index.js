function formatBDT(amount) {
    const formattedAmount = new Intl.NumberFormat('en-BD', {
        style: 'currency',
        currency: 'BDT'
    }).format(amount);
    return formattedAmount;
}

module.exports = formatBDT;
