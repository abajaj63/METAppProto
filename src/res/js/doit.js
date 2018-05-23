// JavaScript Document
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
document.getElementById('email').focus();