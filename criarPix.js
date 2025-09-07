// netlify/functions/criarPix.js
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async function(event, context) {
  try {
    const response = await fetch("https://api.wiinpay.com.br/payment/create", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        api_key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NTQ3NzQwNTZ9.ftlvgvP6X7qPJIT9prvt1paNTPOAr2mNuwxKypFewpM",
        value: 29.90,
        name: "Cliente WinPay",
        email: "cliente@exemplo.com",
        description: "Pagamento WinPay - R$29,90",
        webhook_url: "https://meusite-teste123.com/webhook"
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
