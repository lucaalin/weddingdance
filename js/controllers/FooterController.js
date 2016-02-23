'use strict';

weddingApp.controller('FooterController',
    function IndexController($scope) {

        $scope.secmenus = [
            {
                link: ' ',
                label: 'Shop',
                disabled: true
            },
            {
                link: 'parteneri.html',
                label: 'Parteneri',
                disabled: true
            },
            {
                link: 'faq.html',
                label: 'FAQ',
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
        ];

        $scope.socials = [
            {
                name: 'facebook',
                link: 'http://facebook.com/dansulmirilorcluj',
                imageUrl: 'assets/img/social/fb.png'
            },
            {
                name: 'youtube',
                link: 'https://www.youtube.com/watch?v=mHly3ZIyjLE',
                imageUrl: 'assets/img/social/yt.png'
            }
        ];

        $scope.addresses = [
            {
                area: 'Grigorescu',
                phone: 'Miki - 0732672867',
                phone2: 'Paul - 0721672867',
                addrLineOne: 'str. Bihorului, nr. 10',
                addrLineTwo: 'Cluj-Napoca, jud. Cluj'
            }
        ];

        $scope.copyright = {
            copy: 'Copyright 2016',
            link: 'index.html',
            label: 'weddingdance.ro',
            rights: 'Toate drepturile rezervate'
        }

    }
);