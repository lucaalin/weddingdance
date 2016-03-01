'use strict';

weddingApp.controller('GalleryController',
    function IndexController($scope) {

        $scope.pagecontent = {
            title: 'Galerie',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            phototitle: 'Galerie foto',
            videotitle: 'Galerie video',
            photos: [
                {
                    photoLink: 'photos/wd-1.jpg',
                    thumbnailLink: 'photos/wdt-1.jpg',
                    title: 'Poza 1',
                    imgAlt: 'poza 1'
                },
                {
                    photoLink: 'photos/wd-2.jpg',
                    thumbnailLink: 'photos/wdt-2.jpg',
                    title: 'Poza 1',
                    imgAlt: 'poza 1'
                },
                {
                    photoLink: 'photos/wd-3.jpg',
                    thumbnailLink: 'photos/wdt-3.jpg',
                    title: 'Poza 1',
                    imgAlt: 'poza 1'
                },
                {
                    photoLink: 'photos/wd-4.jpg',
                    thumbnailLink: 'photos/wdt-4.jpg',
                    title: 'Poza 1',
                    imgAlt: 'poza 1'
                },
                {
                    photoLink: 'photos/wd-5.jpg',
                    thumbnailLink: 'photos/wdt-5.jpg',
                    title: 'Poza 1',
                    imgAlt: 'poza 1'
                },
                {
                    photoLink: 'photos/wd-6.jpg',
                    thumbnailLink: 'photos/wdt-6.jpg',
                    title: 'Poza 1',
                    imgAlt: 'poza 1'
                }
            ]
        }

    }
);