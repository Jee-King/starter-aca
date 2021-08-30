---
# An instance of the Contact widget.
# Documentation: https://sourcethemes.com/academic/docs/page-builder/
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 130

title: Application for Access for Non-Commercial Use
subtitle:

content:
  # Automatically link email and phone or display as text?
  autolink: true
  
  # Email form provider
  form:
    provider: netlify
    formspree:
      id:1406011307@qq.com
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: false
  
design:
  columns: '1'
---

<!DOCTYPE html>
<html>
<head>
<style media="screen" type="text/css">
body
{
  border: 0pt none;
  font-family: inherit;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  margin: 0pt;
  outline-color: invert;
  outline-style: none;
  outline-width: 0pt;
  padding: 0pt;
  vertical-align: baseline;
}
body {
  position: relative;
  margin: 3em auto 2em auto;
  width: 1080px;
  font-family: Times New Roman, Lato, Verdana, Helvetica, sans-serif;
  font-size: 14px;
  background: #fdfdfd;
}
</style>


<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>
</head>

<body>

<hr/>

<font size="4"> Both <font size="4" color="red">training set</font> and <font size="4" color="red">testing set</font> can be obtained via form request! </font>
<br><br>

<font size="3">
	To request access to the dataset for non-commercial use, please review the terms and conditions. If you agree with them, please fill the form below and then click the "<font color="black">Send Request</font>" button to achieve a request. Please fill in your official university/company email address. Thank you!

<br>
<br>

<b>Terms and Conditions</b>
<br>

The dataset can be used freely if you agree with all the following terms.<br>

 - The dataset is used only for non-commercial purposes, such as teaching and research. You do not use the dataset or any of its modified versions for any purposes of commercial advantage or private financial gain.<br>
 - You do not distribute the dataset or any of its modified versions to other individuals, institutes, companies, associations or public.<br>
 - In case you use the dataset within your research papers, you refer to our publications on our website. If the dataset is used in media, a link to our website is included.<br>
 - We reserve all rights that are not explicitly granted to you. The dataset is provided as is, and you take full responsibility for any risk of using it. There may be inaccuracies although we tried, and will try our best to rectify any inaccuracy once found.

</font>
<br>

<h3>Sending Request to Prof. Xin Yang (xinyang@dlut.edu.cn):</h3>

<form class="form" id="emailForm">
	Name:<br>
    <input id="first" name='name' type="text" placeholder="Your name..." class="form__input" />
	<br><br>
	Institute:<br>
    <input id="second" name='institute' type="text" placeholder="Your institute..." class="form__input" />
	<br><br>
	E-mail:<br>
	<input id="third" name='email' type="text" placeholder="Your E-mail address..." class="form__input" />
    <!--<textarea id="third" name='e-mail' type="text" placeholder="Your E-mail..." class="form__input"></textarea>-->
</form>
<br>
<button id="btnSubmit">Send Request</button>
<br><br><br><br>



<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
<script type="text/javascript">
   (function(){
      emailjs.init("user_sjjxu42gVFLvZtjK3yGIz");
   })();
</script>
<script type="text/javascript" src="./main.js"></script>

</body>

</html>

