'use strict';

weddingApp.controller('PartnersController',
    function IndexController($scope) {

        $scope.pagecontent = {
            title: 'Parteneri',
            description: [
                {
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ],
            partnersrows: [
                {
                    partners: [
                        {
                            name: 'Partner name',
                            link: ' ',
                            imageUrl: ' '
                        },
                        {
                            name: 'Partner name',
                            link: ' ',
                            imageUrl: ' '
                        },
                        {
                            name: 'Partner name',
                            link: ' ',
                            imageUrl: ' '
                        }
                    ]
                },
                {
                    partners: [
                        {
                            name: 'Partner name',
                            link: ' ',
                            imageUrl: ' '
                        },
                        {
                            name: 'Partner name',
                            link: ' ',
                            imageUrl: ' '
                        },
                        {
                            name: 'Partner name',
                            link: ' ',
                            imageUrl: ' '
                        }
                    ]
                }
            ]
        }

        // TO-DO split partners in rows in 3 for generation

    }
);