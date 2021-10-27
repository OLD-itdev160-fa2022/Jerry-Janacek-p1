(function(){
    var data = [
        {
            name: 'Outer Wilds',
            description: 'A space archaeology game stuck in a time loop.',
            developer: 'Mobius Digital',
            price: '24.99',
            stars: '4.5',
            review: 'Outer Wilds is a beautiful game, with a diverse and mysterious universe, and a gorgeous and emotional soundtrack. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nisl vitae ligula scelerisque pretium. Proin dictum, arcu ut semper bibendum, arcu dui ornare magna, eget interdum nunc mauris eget neque. Nullam tempus lacus ut turpis dignissim, auctor facilisis nisi sodales. Duis porta eros faucibus, blandit orci id, semper ex. Integer ac nisi elit. Quisque dapibus mollis neque, in euismod nisi euismod nec. Quisque sapien tortor, gravida a purus nec, elementum tincidunt sem. Sed vitae lectus quis dui sollicitudin venenatis in at ipsum. Nunc at turpis non est pharetra eleifend vel sed risus. Phasellus blandit a augue ac fermentum. Etiam bibendum molestie ipsum a varius. Morbi eleifend urna et nulla efficitur tempus. Sed consequat arcu at orci pharetra, luctus sodales ex porttitor. Quisque efficitur nisl sit amet sem imperdiet imperdiet. Curabitur ligula tellus, luctus ac tincidunt quis, ultricies eu justo.',
            selector: 'g1'
        },
        {
            name: 'Hollow Knight',
            description: 'A metroidvania set in a fallen kingdom, with brutally tough yet satisfying combat.',
            developer: 'Team Cherry',
            price: '14.99',
            stars: '5',
            review: 'Hollow knight is an extremely difficult game with a deep and interesting story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nisl vitae ligula scelerisque pretium. Proin dictum, arcu ut semper bibendum, arcu dui ornare magna, eget interdum nunc mauris eget neque. Nullam tempus lacus ut turpis dignissim, auctor facilisis nisi sodales. Duis porta eros faucibus, blandit orci id, semper ex. Integer ac nisi elit. Quisque dapibus mollis neque, in euismod nisi euismod nec. Quisque sapien tortor, gravida a purus nec, elementum tincidunt sem. Sed vitae lectus quis dui sollicitudin venenatis in at ipsum. Nunc at turpis non est pharetra eleifend vel sed risus. Phasellus blandit a augue ac fermentum. Etiam bibendum molestie ipsum a varius. Morbi eleifend urna et nulla efficitur tempus. Sed consequat arcu at orci pharetra, luctus sodales ex porttitor. Quisque efficitur nisl sit amet sem imperdiet imperdiet. Curabitur ligula tellus, luctus ac tincidunt quis, ultricies eu justo.',
            selector: 'g2'  
        },
        {
            name: 'Celeste',
            description: 'A fast paced, difficult platformer with a beautiful story.',
            developer: 'Extremely OK Games',
            price: '19.99',
            stars: '4.5',
            review: 'celeste has a great story with brilliant symbolism throughout the game. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nisl vitae ligula scelerisque pretium. Proin dictum, arcu ut semper bibendum, arcu dui ornare magna, eget interdum nunc mauris eget neque. Nullam tempus lacus ut turpis dignissim, auctor facilisis nisi sodales. Duis porta eros faucibus, blandit orci id, semper ex. Integer ac nisi elit. Quisque dapibus mollis neque, in euismod nisi euismod nec. Quisque sapien tortor, gravida a purus nec, elementum tincidunt sem. Sed vitae lectus quis dui sollicitudin venenatis in at ipsum. Nunc at turpis non est pharetra eleifend vel sed risus. Phasellus blandit a augue ac fermentum. Etiam bibendum molestie ipsum a varius. Morbi eleifend urna et nulla efficitur tempus. Sed consequat arcu at orci pharetra, luctus sodales ex porttitor. Quisque efficitur nisl sit amet sem imperdiet imperdiet. Curabitur ligula tellus, luctus ac tincidunt quis, ultricies eu justo.',
            selector: 'g3'  
        }
    ];

    //package constructor function
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.developer = data.developer;
        this.price = data.price;
        this.review = data.review;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedPrice = function () {
            return this.price.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };

    }

    

    //utility functions
    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    }

    var getEl = function(id) {
        return document.getElementById(id);
    }

    //write package data
    var writePackageInfo = function(package) {
        //get references to elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            devEl = getEl(selector + '-developer'),
            priceEl = getEl(selector + '-price'),
            starsEl = getEl(selector + '-stars');
            reviewEl = getEl(selector + '-review');
        //write data to elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        devEl.textContent = 'Developer: '+package.developer;
        priceEl.textContent = '$' + package.getFormattedPrice();
        starsEl.textContent = package.getFormattedStars() + ' stars';
        reviewEl.textContent = package.review;
    }



    var outerWilds = new Package(data[0]);
    writePackageInfo(outerWilds);

    var hollowKnight = new Package(data[1]);
    writePackageInfo(hollowKnight);

    var celeste = new Package(data[2]);
    writePackageInfo(celeste);
})();

