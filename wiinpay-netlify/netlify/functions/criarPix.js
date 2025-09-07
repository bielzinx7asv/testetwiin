const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

export default async function handler(req, res) {
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
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
