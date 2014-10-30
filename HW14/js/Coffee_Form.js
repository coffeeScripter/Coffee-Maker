function showCream(){
			if (!document.getElementById("cream").checked) {
				document.getElementById("cream-check").style.display = "none";
			}else{
				document.getElementById("cream-check").style.display = "inline-block";
			}
		}
		function getAmt(ele){
			document.getElementById("amount").innerHTML = ele.value + " ounces";
		}
		function coffeeLove(ele){
			var exeMark = "";
			var val = ele.value;
			for(var i = 0; i <= val; i++){
				exeMark += "!";
			}
			document.getElementById("love").innerHTML = "I love coffee " + val + " much" + exeMark;
		}

		function validate(){
			var errMsg = "";
			// Brew type validation
			if( document.forms[0]["Brew"].value == ""){
				errColor(document.getElementById("Brewers"));
				errMsg += "Please select a Brew Type\n";

			}

			// bean choice validation
			var beanFields = document.getElementById("Bean-Selection").children;
			var bob = false;
			// checks if any of the checkboxes in beanFields is checked
			// if one is then
			for( var i in beanFields){
				if(beanFields[i].checked){
					bob = true;
				}
			}
			if(!bob){
					errColor(document.getElementById("Bean-Selection"));
					errMsg += "Please select a bean type\n";
			}
			if(document.getElementById("cream").checked){
				if(document.getElementById("cream-dropdown").selectedIndex == 0){
					errColor(document.getElementById("cream-dropdown"));
					errMsg += "Please select a cream type\n";
				}

				if(document.getElementById("flavor-dropdown").selectedIndex == 0){
					errColor(document.getElementById("flavor-dropdown"));
					errMsg += "Please select a flavor of cream\n";
				}
			}

			if(!(0 <= document.getElementById("coffee-count").value <= 64)){
				errColor(document.getElementById("coffee-count").parentNode);
				errMsg += "Please enter an amount of coffee to order\n";
			}

// user info
			if(document.getElementById("name").value == ""){
				errMsg += "Please enter a name for the order\n";
				errColor(document.getElementById("name"));
			}
			if(document.getElementById("bday").value == ""){
				errMsg += "Please enter birth date\n";
				errColor(document.getElementById("bday"));
			}
			if(document.getElementById("address").value != /^[ \w]{3,}([A-Za-z]\.)?([ \w]*\#\d+)?(\r\n| )[ \w]{3,},\x20[A-Za-z]{2}\x20\d{5}(-\d{4})?$/|| document.getElementById("address").value == null){
				// errColor(document.getElementById("address"));
				errMsg += "Please mark address as specified"
			}

			if(errMsg != ""){
				alert(errMsg);
				return false;
			}else{ 
				return true;
			}

		}

		// sneaky
		function errColor(ele){
			ele.style.backgroundColor = "#520000";
			ele.style.color = "#fff";
			ele.style.boxShadow = "0px 0px 10px #520000";
			return ele;
		}