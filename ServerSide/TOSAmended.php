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

//log statistics
$args = array(
	"TOSAMENDED",
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

//build email
$toEmailUsers = array(
	'sales',
	'contact',
	'support',
	'info',
	'legal',
);

$emailForBody = $email ? $email : "[no-email-provided]";

$subject = "[TOSAmend] Visitor @ $ip has rejected your Terms of Service.";
$body="
Hello,

This email provides you with notice that the visitor at $ip has submitted a form at $url , in which the visitor used TOSAmend to reject the standard terms of service and counter-offered their own terms and made their performance conditional on your acceptance of the proposed terms.  The terms of their counter-offer are:

'I reject the proposed terms and conditions and counter-offer that the transaction shall be governed by the applicable default rules and consumer protection laws.'

You can accept the visitor's counter-offer by continuing with the transaction.  If you wish to reject or modify their counter-offer, you may do so in writing by contact them directly at $emailForBody within two weeks from the time-stamp on this email, or directly via the email address they used on your signup form.

For more information, please visit http://www.TOSAmend.com/ForWebsites.php?utm_source=notif_email

Please and Thank You,
Kevin Owocki
http://www.TOSAmend.com/
http://www.twitter.com/TOSAmend
http://www.facebook.com/TOSAmend

";

//send email
foreach($toEmailUsers as $toEmailUser){
	$to[] = $toEmailUser."@".$host;
}
$to = implode(',',$to);
$args = array(
    'to' => $to,
    'from' => "kevin@TOSAmend.com",
    'subject' => $subject,
    'message' => $body,
);
sendMail($args);

echo "OK";

?>