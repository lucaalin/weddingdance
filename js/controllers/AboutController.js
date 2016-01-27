'use strict';

weddingApp.controller('AboutController',
    function IndexController($scope) {

        $scope.pagecontent = {
            title: 'Despre noi',
            subtitle: 'Echipa',
            membersrows: [
                {
                    members: [
                        {
                            imageUrl: ' ',
                            name: 'Name Surname',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                        },
                        {
                            imageUrl: ' ',
                            name: 'Name Surname',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                        },
                        {
                            imageUrl: ' ',
                            name: 'Name Surname',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                        }
                    ]
                },
                {
                    members: [
                        {
                            imageUrl: ' ',
                            name: 'Name Surname',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                        },
                        {
                            imageUrl: ' ',
                            name: 'Name Surname',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                        },
                        {
                            imageUrl: ' ',
                            name: 'Name Surname',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                        }
                    ]
                }
            ]
        }

        // Migrate all content as html here - sanitize in order to be able to input html content

    }
);