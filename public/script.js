document.getElementById('fetchBtn').addEventListener('click', fetchBalances);

async function fetchBalances() {
    const container = document.getElementById('balancesContainer');
    container.innerHTML = '<p>Loading...</p>';
    
    try {
        const response = await fetch('/api/balances');
        const data = await response.json();
        
        if (data.status === 'success') {
            container.innerHTML = `
                <div style="width: 100%;">
                    <h3>Balance Data</h3>
                    <pre>${JSON.stringify(data.data, null, 2)}</pre>
                </div>
            `;
        } else {
            container.innerHTML = '<p style="color: red;">Error loading balances</p>';
        }
    } catch (error) {
        console.error('Error:', error);
        container.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}
