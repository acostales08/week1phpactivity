    $(document).ready(function() {
        function fetchData() {
            $.ajax({
                url: 'helper/helper.php?isTrue=true',
                type: 'GET',
                dataType: 'json',
                success: (response) => {
                    if (response) {
                        var userData = response;
                        var html = '';
                        $.each(userData, function(index, user) {
                            html += '<tr>';
                            html += '<td>' + user.lastName + '</td>';
                            html += '<td>' + user.firstName + '</td>';
                            html += '<td>' + user.middleName + '</td>';
                            html += '</tr>';
                        });
                        $('#userData').html(html);
                    } else {
                        $('#userData').html('<tr><td colspan="3">No data found</td></tr>');
                    }
                },
                error: (error) => {
                    console.error(error);
                }
            });
        }
        fetchData();
    });

        $(document).ready(function() {
        function fetchData() {
            $.ajax({
                url: 'helper/helper.php?isTrue=true',
                type: 'GET',
                dataType: 'json',
                success: function(response) {
                    if (response) {
                        var userData = response;
                        var html = '';
                        $.each(userData, (index, user) => {
                            html += '<tr>';
                            html += '<td>' + user.lastName + '</td>';
                            html += '<td>' + user.middleName + '</td>';
                            html += '<td>' + user.firstName + '</td>';
                            html += '<td>' + user.age + '</td>';
                            html += '</tr>';
                        });
                        $('#userDatawithage').html(html);
                    } else {
                        $('#userDatawithage').html('<tr><td colspan="3">No data found</td></tr>');
                    }
                },
                error: (error) => {
                    console.error(error);
                }
            });
        }
        fetchData();
    });