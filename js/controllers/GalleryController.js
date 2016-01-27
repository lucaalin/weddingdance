'use strict';

weddingApp.controller('GalleryController',
    function IndexController($scope) {

        $scope.pagecontent = {
            title: 'Galerie',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            phototitle: 'Galerie foto',
            photos: [
                {
                    imageUrl: 'assets/img/test.jpg',
                    order: '1'
                },
                {
                    imageUrl: 'assets/img/test.jpg',
                    order: '2'
                },
                {
                    imageUrl: 'assets/img/test.jpg',
                    order: '3'
                }
            ],
            videotitle: 'Galerie video'
        }

    }
);