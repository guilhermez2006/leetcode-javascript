function maxProfit(prices) {
    let melhorLucro = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let valorAtual = prices[j] - prices[i];
            if (valorAtual > melhorLucro) {
                melhorLucro = valorAtual;
            }
        }
    }
    return melhorLucro;
}