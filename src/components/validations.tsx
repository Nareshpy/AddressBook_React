export class Validator {
    isEmptyName() {
        let name = $("#name").val();
        if (name == "") {
            $("#blankName").text("    Name is required");
            return false;
        }
        else {
            $("#blankName").text("*");
            return true;
        }
    }
    isEmptyMail() {
        let name = $("#mail").val();
        if (name == "") {
            $("#blankMail").text("    Mail is required");
            return false;
        }
        else {
            $("#blankMail").text("*");
            return true;
        }
    }
    mailCheck() {
        let temp = $('#mail').val();
        if (temp == "") {
            $("#blankMail").text("Mail is required");
            return false;
        }
        else {
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            // if (temp.match(mailformat)) {
            //     return true;
            // }
            // else {
            //     $("#blankMail").text("Enter valid mail");
            //     return false;
            // }
        }
    }
    validate() {
        if (this.isEmptyMail() && this.isEmptyName() && this.mailCheck()) 
        {
             return true 
        }
        else {
             return false 
            }
    }

}