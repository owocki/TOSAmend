<?

//functions 
function sendMail($args){
	extract($args);
	$headers = 'From: '. $from . "\r\n" .
	    'Reply-To: '. $from . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();
	
	mail($to, $subject, $message, $headers);
}


// setup
$url = $_REQUEST['url'];
$data = parse_url($url);

//get visitor information
$host = $data['host'];
$ip = $_SERVER['REMOTE_ADDR'];
$useragent = $_SERVER['HTTP_USER_AGENT'];

//build email
$toEmailUsers = array(
	'sales',
	'contact',
	'support',
	'info',
);

$subject = "[TOSAmend] Visitor @ $ip has rejected your Terms of Service.";
$body="
Hello,

The visitor at $ip has submitted a form at $url , in which they have used TOSAmend to reject the standard terms of service and counter-offered their own terms.  The terms of their counter-offer are:

'I reject the proposed terms and conditions and counteroffer that the standard consumer protection terms will apply.'

To accept the visitor's counter-offer, you do not need to take any action.  If you wish to reject or otherwise act upon their counter-offer, you may contact them directly.

For more information, please visit http://www.TOSAmend.com/ForWebsites.php?utm_source=notif_email

Please and Thank You,
Kevin Owocki
http://www.TOSAmend.com/
http://www.twitter.com/TOSAmend
http://www.facebook.com/TOSAmend

";

//send email
foreach($toEmailUsers as $toEmailUser){
	$args = array(
		'to' => $toEmailUser."@".$host,
		'from' => "reply@TOSAmend.com",
		'subject' => $subject,
		'message' => $body,
	);
}

//log statistics
$args = array(
	$host,
	$url,
	$ip,
	$useragent,
	$gender,
	$email,
	$name,
);
$message = implode(',',$args);
syslog(LOG_INFO,$message);


?>