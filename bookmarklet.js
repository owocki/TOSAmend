/* TODO: Break apart this minified code into a more readable version */
javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement(&quot;script&quot;);c.type=&quot;text/javascript&quot;;c.src=&quot;http://ajax.googleapis.com/ajax/libs/jquery/&quot;+g+&quot;/jquery.min.js&quot;;c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d==&quot;loaded&quot;||d==&quot;complete&quot;)){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,&quot;1.3.2&quot;,function($,L){function getSelectedText(){if(window.getSelection){return window.getSelection()}else if(document.getSelection){return document.getSelection()}else if(document.selection){return document.selection.createRange().text}};var text=getSelectedText();if(text!=''){var foundin=$('*:contains(&quot;'+text+'&quot;):last');if(foundin.length>0){foundin.html('i agree that i like cheese sandwiches. (via <a href=&quot;http://www.tosamend.com&quot;>TOSAmend</a>) <input type=&quot;hidden&quot; name=&quot;TOSAmended&quot; value=&quot;1&quot;> <img src=&quot;http://www.owocki.com/TOSAmended.php?url='+document.location.href+'&quot; style=&quot;width:1px; height:1px;&quot;/>  ');alert('TOS Amended')}}else{alert('Could not find TOS text.  Please highlight the text area you\'d like to amend.')}  });