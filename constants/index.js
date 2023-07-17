export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/burgerIcon.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/pastaIcon.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/ramenIcon.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/noodlesIcon.png'),
    },
    {
        id: 6,
        name: 'Tatlılar',
        image: require('../assets/images/donutIcon.png'),
    },
    {
        id: 7,
        name: 'Burrito',
        image: require('../assets/images/burritoIcon.png'),
    },
    {
        id: 8,
        name: 'Döner',
        image: require('../assets/images/donerIcon.png'),
    },
    {
        id: 9,
        name: 'Balık',
        image: require('../assets/images/balıkIcon.png'),
    },
    {
        id: 10,
        name: 'Pide',
        image: require('../assets/images/pideIcon.png'),
    },
    {
        id: 11,
        name: 'Tavuk',
        image: require('../assets/images/chickenIcon.png'),
    },
    {
        id: 12,
        name: 'Kahve',
        image: require('../assets/images/coffeIcon.png'),
    },
    {
        id: 13,
        name: 'Kebap',
        image: require('../assets/images/kebapIcon.png'),
    },
    {
        id: 14,
        name: 'Kahvaltı',
        image: require('../assets/images/kahvaltıIcon.png'),
    },
    {
        id: 15,
        name: 'Salata',
        image: require('../assets/images/salataIcon.png'),
    },
    {
        id: 16,
        name: ' Börek',
        image: require('../assets/images/borekIcon.png'),
    },
    {
        id: 17,
        name: 'Sipariş',
        image: require('../assets/images/siparisIcon.png'),
    },
    {
        id: 18,
        name: 'Hesap',
        image: require('../assets/images/hesapIcon.png'),
    },
    

]


export const featured = {
    id: 1,
    title: 'Akşam Yemeği',
    description: 'Lezzetli bir akşam yemeği için doğru adres',
    restaurants: [
        {
            id: 1,
            name: "Daphne'nin Yeri",
            image: require('../assets/images/brand/daphnePhoto1.jpeg'),
            description: "Alsancak'ta muhteşem bir akşam yemeği sizleri bekliyor.",
            lng: 27.1321585405805,
            lat: 38.41993290219605, 
            address: ' Konak',
            exactAdress: 'Konak, 863. Sk. No:32, 35250 Konak/İzmir',
            stars: 5,
            checkedTime: '8 PM',
            availableTime: '7 PM - 11 PM',
            reviews: '2.1k',
            category: 'Akşam Yemeği',
            dishes: [
                {
                    id: 1,
                    name: 'Akşam Sefası',
                    description: ['Taze Somon Tartar\n','Izgara Biftek\n','Crème Brûlée\n'],
                    price: 270,
                    image:  require('../assets/images/somonTartar.jpg')
                },
                {
                    id: 2,
                    name: 'Yunan Gecesi',
                    description: ['Ceviche\n','Ördek Confit\n','Çikolata Füzyon\n'],
                    price: 320,
                    image:  require('../assets/images/ordekConfit.jpeg')
                },
                {
                    id: 3,
                    name: 'Ege Kokusu',
                    description: ['Ricotta Dolgulu Ravioli\n','Izgara Kalamar\n','Elmalı Tart\n'],
                    price: 310,
                    image:  require('../assets/images/somonTartar.jpg')
                },
                {
                    id: 4,
                    name: 'Urla Brûlée',
                    description: ['Levrek Fileto\n','Sebzeli Risotto\n','Crème Brûlée\n'],
                    price: 370,
                    image:  require('../assets/images/somonTartar.jpg')
                },
                {
                    id: 5,
                    name: 'Trakya Kokusu',
                    description: ['Rokalı Kırmızı Pancar Salatası\n','Izgara Biftek\n','Çikolata Füzyon\n'],
                    price: 290,
                    image:  require('../assets/images/somonTartar.jpg')
                },
                {
                    id: 6,
                    name: 'Deniz Mavisi',
                    description: ['Ceviche\n','Karides ve Midye Linguine\n','Crème Brûlée\n'],
                    price: 360,
                    image:  require('../assets/images/somonTartar.jpg')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: ' Alsancak',
            stars: 1,
            checkedTime: '8 PM',
            availableTime: '7 PM - 11 PM',
            reviews: '3.2k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        },
        {
            id: 3,
            name: "Arby's",
            image: require('../assets/images/brand/arby.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: ' Buca',
            stars: 2,
            checkedTime: '8 PM',
            availableTime: '7 PM - 11 PM',
            reviews: '1.5k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Maxi Pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'Orta Boy Pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'Küçük Boy Pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        },
        {
            id: 4,
            name: 'Subway',
            image: require('../assets/images/brand/subway.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: ' Konak',
            stars: 4,
            checkedTime: '8 PM',
            availableTime: '7 PM - 11 PM',
            reviews: '5.3k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        },
        {
            id: 5,
            name: 'Burger King',
            image: require('../assets/images/brand/burgerKing.jpeg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: ' Alsancak',
            stars: 3,
            checkedTime: '8 PM',
            availableTime: '7 PM - 11 PM',
            reviews: '3.2k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        },
        {
            id: 6,
            name: 'Usta Dönerci',
            image: require('../assets/images/brand/ustaDonerci.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: ' Bayraklı',
            stars: 4,
            checkedTime: '8 PM',
            availableTime: '7 PM - 11 PM',
            reviews: '2.6k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        }
    ]
}
