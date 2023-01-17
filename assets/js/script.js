var app = angular.module('pepnApp', []);

app.controller('controller', function($scope, $http) {

    $scope.submitData = function (form) {

        var formData = new FormData();

        formData.append('name', $scope.name);
        formData.append('email', $scope.email);
        formData.append('message', $scope.message);

        $("#overlay").fadeIn();
        $http.post('https://unique-func.azurewebsites.net/api/sendgrid_email?code=GcJwU7tew1BcDUAE4uZ7bgVZh83kH9Ca70mOyJeaJ94HKhJ07WPvsg==',
            formData
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