'use strict';

weddingApp.controller('IndexController',
    function IndexController($scope) {

        $scope.pagecontent = {
            intro: {
                backgroundUrl: 'assets/img/bg-intro.jpg',
                title: 'Îți ia puțin ca să dansezi',
                subtitle: 'Pașii spre pasul cel mare',
                buttonLabel: 'Mai multe detalii',
                buttonLink: 'despre-noi.html'
            },
            about: {
                backgroundUrl: 'assets/img/bg-about.jpg',
                title: 'Despre noi',
                paragraphs: [
                    {
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    },
                    {
                        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
                    }
                ],
                buttonLabel: 'Contacteaza-ne',
                buttonLink: 'contact.html'
            },
            reviewstitle: 'Testimoniale',
            reviewsrows: [
                {
                    reviews: [
                            {
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                author: 'Name Surname'
                            },
                            {
                                description: 'Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                author: 'Surname Name'
                            }
                    ]
                },
                {
                    reviews: [
                        {
                            description: 'Corem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            author: 'Name Surname'
                        },
                        {
                            description: 'Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            author: 'Surname Name'
                        }
                    ]
                }
            ]
        }
    }
);