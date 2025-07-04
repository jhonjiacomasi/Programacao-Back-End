class ProtectedController {
    // Obter dados do dashboard (API)
    getDashboardData(req, res) {
        res.json({
            success: true,
            data: {
                username: req.session.username,
                title: 'Loja Primo - Dashboard',
                stats: {
                    totalProducts: 6,
                    totalUsers: 1,
                    systemStatus: 'Online'
                },
                lastAccess: new Date().toISOString()
            }
        });
    }

    getEcommerceData(req, res) {
        const products = [
            {
                id: 1,
                name: 'Smartphone Premium',
                price: 1299.99,
                description: 'Smartphone de última geração com câmera profissional e bateria de longa duração.',
                icon: '📱'
            },
            {
                id: 2,
                name: 'Notebook Gamer',
                price: 2499.99,
                description: 'Notebook para jogos com placa de vídeo dedicada e processador de alta performance.',
                icon: '💻'
            },
            {
                id: 3,
                name: 'Fone Bluetooth',
                price: 199.99,
                description: 'Fone de ouvido sem fio com cancelamento de ruído e qualidade de áudio superior.',
                icon: '🎧'
            },
            {
                id: 4,
                name: 'Smartwatch',
                price: 399.99,
                description: 'Relógio inteligente com monitoramento de saúde e notificações do smartphone.',
                icon: '⌚'
            },
            {
                id: 5,
                name: 'Câmera Digital',
                price: 899.99,
                description: 'Câmera profissional para fotografia com lentes intercambiáveis e alta resolução.',
                icon: '📷'
            },
            {
                id: 6,
                name: 'Monitor 4K',
                price: 699.99,
                description: 'Monitor ultra HD para trabalho e entretenimento com cores vibrantes e precisas.',
                icon: '🖥️'
            }
        ];

        res.json({
            success: true,
            data: {
                username: req.session.username,
                title: 'Loja Primo - E-commerce',
                products: products,
                totalProducts: products.length
            }
        });
    }
}

module.exports = ProtectedController;

