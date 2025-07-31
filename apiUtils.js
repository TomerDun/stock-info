export function formatSearch(data) {
    return data.map(r => {
        return {
            symbol: r.symbol,
            name: r.name,
            exchange: r.exchange
        }
    })
}