// JavaScript Document

function numbersonly(myfield, e, dec)
{
var key;
var keychar;

if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);

// control keys
if ((key==null) || (key==0) || (key==8) || 
    (key==9) || (key==13) || (key==27) )
   return true;

// numbers
else if ((("0123456789").indexOf(keychar) > -1))
   return true;

// decimal point jump
else if (dec && (keychar == "."))
   {
   myfield.form.elements[dec].focus();
   return false;
   }
else
   return false;
}

function doit(){
	    document.getElementById('firstname').classList.remove('inactive');
	    document.getElementById('company').classList.remove('inactive');
	    document.getElementById('email').classList.remove('inactive');
	    document.getElementById('password').classList.remove('inactive');
	    document.getElementById('confirmpassword').classList.remove('inactive');
	    document.getElementById('lastname').classList.add('inactive');
		document.getElementById('lastname').setAttribute('readonly', true);
	    document.getElementById('badge').classList.add('inactive');
		document.getElementById('badge').setAttribute('readonly', true);
	    document.getElementById('badgewrapper').classList.add('inactive');
		document.getElementById('continue').innerHTML = 'Sign Up';
		}