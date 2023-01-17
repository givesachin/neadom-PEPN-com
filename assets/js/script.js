var app = angular.module('pepnApp', []);

app.controller('controller', function($scope, $http) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";

    $scope.submitData = function (form) {
        console.log('test');

        var formData = new FormData();

        formData.append('name', $scope.name);
        formData.append('email', $scope.email);
        formData.append('message', $scope.message);

        const headers = new Headers;
        headers.append('Access-Control-Allow-Origin', '*');

        $("#overlay").fadeIn();
        $http.post('https://unique-func.azurewebsites.net/api/sendgrid_email?code=GcJwU7tew1BcDUAE4uZ7bgVZh83kH9Ca70mOyJeaJ94HKhJ07WPvsg==',
            formData, { headers: headers }
        )
            .then(function (response)
            {
                $("#successModal").modal("show");
                $("#overlay").fadeOut();
            })
            .catch(function ()
            {
                $("#overlay").fadeOut();
            });
    }

});