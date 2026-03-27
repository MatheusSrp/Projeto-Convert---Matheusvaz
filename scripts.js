// Cotação de moedas do dia
const USD = 5.16
const EUR = 5.44
const GBP = 6.28

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipuando o input amount para receber números
amount.addEventListener("input", () => {
    // Limitar só para coletar números
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Capturando o evento de submit (enviar) do formulario
form.onsubmit = (event) => {
    // Prevenir o comportamento padrão do submit, que é recarregar a página
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula o total
        let total = amount * price
        total = formatCurrencyBRL(total). replace("R$", "")

        // Exibe o resultado total
        result.textContent =  `${total} Reais`

        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)

        // Remove a classe do footer ocultado ele
        footer.classList.remove("show-result")

        alert("Não foi possivel converter, Tente novamente mais tarde")
    }
}

// Formata a moeda em Real Brasileiro (BRL)
function formatCurrencyBRL(value) {
    // Converte para número e formata para o estilo de moeda do Brasil (BRL)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    }) 
}