import { createServer } from 'node:http';
import accounting from 'accounting';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h3>Tax Calculator</h3>');

    const subTotal = 59.99;
    const tax = subTotal * 0.13;
    const total = tax + subTotal;

    res.write(`<h4>Sub-Total: ${accounting.formatMoney(subTotal)}</h4>
        <h4>Tax: ${accounting.formatMoney(tax)}</h4>
        <h4>Total: ${accounting.formatMoney(total)}</h4>`);

    res.end();
})

server.listen(3000, '127.0.0.1', () => { console.log('Server running on port 3000')} );