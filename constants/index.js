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
    title: 'Fast Food',
    description: 'Ağızda Dağılan Etler',
    restaurants: [
        {
            id: 1,
            name: "McDonald's",
            image: require('../assets/images/brand/mcdonalds.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: ' Konak',
            stars: 5,
            time: '15-25 min',
            reviews: '2.1k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Maxi Menü',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'Büyük Boy Pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'Orta Boy Pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 4,
                    name: 'Orta Boy Pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 5,
                    name: 'Orta Boy Pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 6,
                    name: 'Orta Boy Pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
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
            time: '20-25 min',
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
            time: '15-35 min',
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
            time: '25-35 min',
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
            time: '15-25 min',
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
            time: '10-15 min',
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
