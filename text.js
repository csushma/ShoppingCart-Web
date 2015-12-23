    $(document).ready(function () {
        $("#contactTable").on('click', '.deleteRow', function () {
            $(this).parent().parent().remove();
        });
        $(".addRow").click(function () {
            $("#contactTable").append("<tr><td></td><td></td><td><input type='button' class='deleteRow' value='DELETE'/></td></tr>");
        });
        $(".rowHover").mouseover(function (e) {
            if(e.altKey){
                $(this).css("background-color","white");
            }
        });
        $(".rowHover").mouseout(function (e) {
                $(this).css("background-color","#9DF5A8");
        });
        $(".rowHover").keyup(function (e) {
                $(this).css("background-color","#9DF5A8");
        });
    });