"use strict";
class CakewalkMinisite {
    constructor(config) {
        this.config = config;
        this.initializeSite();
    }
    initializeSite() {
        this.updateColors();
        this.updateLogo();
        this.updateProducts();
        this.setupEventListeners();
    }
    updateColors() {
        document.documentElement.style.setProperty('--primary-color', this.config.primaryColor);
    }
    updateLogo() {
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.src = this.config.logo;
            logo.alt = `${this.config.name} logo`;
        }
    }
    updateProducts() {
        const productContainer = document.querySelector('.product-portfolio');
        if (productContainer) {
            productContainer.innerHTML = '';
            this.config.products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'bg-white p-4 rounded-lg shadow text-center';
                productElement.innerHTML = `
                    <img src="/api/placeholder/64/64" alt="${product}" class="mx-auto mb-2">
                    <p>${product}</p>
                `;
                productContainer.appendChild(productElement);
            });
        }
    }
    setupEventListeners() {
        const quoteButton = document.querySelector('.instant-quote-btn');
        if (quoteButton) {
            quoteButton.addEventListener('click', this.handleQuoteClick.bind(this));
        }
    }
    handleQuoteClick(event) {
        event.preventDefault();
        // Redirect to the specified URL
        window.location.href = 'https://...'; // Replace with the actual URL
    }
}
// Usage
const distributorConfig = {
    name: 'Example Distributor',
    primaryColor: '#3c82f6',
    logo: '/path/to/logo.png',
    products: ['Health Solutions', 'Dental', 'Vision', 'Accident', 'Critical Illness w/Cancer', 'Voluntary Life / AD&D', 'Short Term Disability', 'Long Term Disability']
};
new CakewalkMinisite(distributorConfig);
