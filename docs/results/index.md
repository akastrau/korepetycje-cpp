# Wyniki
<!-- Simple Textfield -->
  <div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" id="login" required>
    <label class="mdl-textfield__label" for="login">login</label>
  </div>
  <br>
  <div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="password" id="password" required>
    <label class="mdl-textfield__label" for="password">hasło</label>
  </div>
  <br>
  <div class="mdl-button mdl-js-button">
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit" id="submit">
    SPRAWDŹ WYNIKI
    </button>
  </div>

<script>
function loadPage(login, password) {
		var shaObj = new jsSHA("SHA3-512", "TEXT");
        shaObj.update(login);
        shaObj.update(password);
        shaObj.update("$");
		var hash = shaObj.getHash("HEX");
		var url = hash;
			
		$.ajax({
			url : url + '/',
			dataType : "html",
			success : function(data) {
				window.location = url;
			},
			error : function(xhr, ajaxOptions, thrownError) {
				parent.location.hash = hash;

				$("#password").attr("placeholder","Niepoprawne hasło!");
                $("#password").val("");
                $("#login").val("");
			}
		});
	};
	 
</script>
