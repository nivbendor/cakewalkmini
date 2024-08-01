interface DistributorConfig {
    name: string;
    primaryColor: string;
    logo: string;
    products: string[];
}

class CakewalkMinisite {
    private config: DistributorConfig;

    constructor(config: DistributorConfig) {
        this.config = config;
        this.initializeSite();
    }

    private initializeSite(): void {
        this.updateColors();
        this.updateLogo();
        this.updateProducts();
        this.setupEventListeners();
    }

    private updateColors(): void {
        document.documentElement.style.setProperty('--primary-color', this.config.primaryColor);
    }

    private updateLogo(): void {
        const logo = document.querySelector('.logo') as HTMLImageElement;
        if (logo) {
            logo.src = this.config.logo;
            logo.alt = `${this.config.name} logo`;
        }
    }

    private updateProducts(): void {
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

    private setupEventListeners(): void {
        const quoteButton = document.querySelector('.instant-quote-btn');
        if (quoteButton) {
            quoteButton.addEventListener('click', this.handleQuoteClick.bind(this));
        }
    }

    private handleQuoteClick(event: Event): void {
        event.preventDefault();
        // Redirect to the specified URL
        window.location.href = 'https://...'; // Replace with the actual URL
    }
}

// Usage
const distributorConfig: DistributorConfig = {
    name: 'Example Distributor',
    primaryColor: '#3c82f6',
    logo: '/path/to/logo.png',
    products: ['Health Solutions', 'Dental', 'Vision', 'Accident', 'Critical Illness w/Cancer', 'Voluntary Life / AD&D', 'Short Term Disability', 'Long Term Disability']
};

new CakewalkMinisite(distributorConfig);