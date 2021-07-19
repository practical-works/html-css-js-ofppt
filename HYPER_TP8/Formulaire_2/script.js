function showError(error_label_id, show) {
	document.getElementById(error_label_id).textContent = "* Ce champs est obligatoire";
	document.getElementById(error_label_id).style.color = "red";
	if (show === true) {
		document.getElementById(error_label_id).style.display = "inline";
		//document.getElementById(error_label_id.substring(1)).style.backgroundColor = "red"; 
	}
	else {
		document.getElementById(error_label_id).style.display = "none";
		//document.getElementById(error_label_id.substring(1)).style.backgroundColor = "white"; 
	}
	
}
function showInvalid(error_label_id, show) {
	document.getElementById(error_label_id).textContent = "Erreur! Format invalide";
	document.getElementById(error_label_id).style.color = "yellow";
	if (show === true) {
		document.getElementById(error_label_id).style.display = "inline";
		//document.getElementById(error_label_id.substring(1)).style.backgroundColor = "yellow"; 
	}
	else {
		document.getElementById(error_label_id).style.display = "none";
		//document.getElementById(error_label_id.substring(1)).style.backgroundColor = "white"; 
	}
}

function check(F) {
	// Champs
	var valide = true;
	var rempli = true;
	var id = F.id.value;
	var nom = F.nom.value;
	var email = F.email.value;
	var cp = F.cp.value; 
	var ville = F.ville.value;

	// Tests champs vides
	if (id == "" || id == null) {
		showError("_id", true);
		rempli = false;
	} else {
		showError("_id", false);
	}
	
	if (nom == "" || nom == null) {
		showError("_nom", true);
		rempli = false;
	} else {
		showError("_nom", false);
	}
	
	if (email == "" || email == null) {
		showError("_email", true);
		rempli = false;
	} else {
		showError("_email", false);
	}

	if (cp == "" || cp == null) {
		showError("_cp", true);
		rempli = false;
	} else {
		showError("_cp", false);
	}
	
	if (ville == "" || ville == null) {
		showError("_ville", true);
		rempli = false;
	} else {
		showError("_ville", false);
	}
	
	if (!F.ar.checked && !F.fr.checked && !F.en.checked) {
		showError("_langue", true);
		rempli = false;
	} else {
		showError("_langue", false);
	}
	
	if (rempli) {
		// Tests champs invalides
		if (isNaN(id)) {
			showInvalid("_id", true);
			valide = false;
		} else {
			showInvalid("_id", false);
		}
		
		if (!isNaN(nom)) {
			showInvalid("_nom", true);
			valide = false;
		} else {
			showInvalid("_nom", false);
		}
		
		if (!isNaN(email)) {
			showInvalid("_email", true);
			valide = false;
		} else {
			showInvalid("_email", false);
		}
	
		if (isNaN(cp)) {
			showInvalid("_cp", true);
			valide = false;
		} else {
			showInvalid("_cp", false);
		}
		
		return valide;
	} else {
		return false;
	}
}