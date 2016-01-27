weddingApp.factory('contactData', function () {
    return {
        user: {
            firstName: '',
            lastName: '',
            phoneNo: '',
            emailAddress: '',
            interests: [
                {
                    title: ''
                },
                {
                    title: ''
                }
            ],
            eventDate: '',
            eventLocation: '',
            message: ''
        }
    };
});