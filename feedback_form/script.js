<script language="JavaScript">
var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please enter your name");
frmvalidator.addValidation("email","req","Please enter your email");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");
</script>