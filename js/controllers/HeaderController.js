'use strict';

weddingApp.controller('HeaderController',
    function IndexController($scope) {

        $scope.logo = {
            link: 'index.html',
            imageUrl: 'assets/img/logo.png'
        };

        $scope.secmenus = [
            {
                link: ' ',
                label: 'Shop',
                disabled: true
            },
            {
                link: 'parteneri.html',
                label: 'Parteneri',
                disabled: false
            }
        ];

        $scope.menus = [
            {
                link: 'index.html',
                label: 'Home'
            },
            {
                link: 'despre-noi.html',
                label: 'Despre noi'
            },
            {
                link: 'servicii.html',
                label: 'Servicii'
            },
            {
                link: 'galerie.html',
                label: 'Galerie'
            },
            {
                link: 'contact.html',
                label: 'Contact'
            }
        ]

    }
);