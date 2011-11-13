javascript:(
	function(e,a,g,h,f,c,b,d){
		if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){
			c=a.createElement("script");c.type="text/javascript";
			c.src="http://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";
			c.onload=c.onreadystatechange=function(){
				if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){
					h((f=e.jQuery).noConflict(1),b=1);f(c).remove()
					}
			};
			
			a.documentElement.childNodes[0].appendChild(c)}
			}
	)(window,document,"1.3.2",function($,L){
	
			function getSelectedText(){
				if(window.getSelection){
						return window.getSelection()
					} else if(document.getSelection){
						return document.getSelection()
					} else if(document.selection){
						return document.selection.createRange().text
					}
				};
				var text=getSelectedText();
				if(text!=''){	
					var foundin=$('*:contains("'+text+'"):last');
					var isAlreadyAmended = $('#TOSAmended').length;
					if(isAlreadyAmended){
						alert('TOS Amended');
					}else if(foundin && foundin.length>0){
						foundin.html( ''
							+'I reject the proposed terms and conditions and counteroffer that the standard consumer protection terms will apply. '
							+'(via <a href="http://www.tosamend.com/?utm_source=bookmarklet">TOSAmend</a>) '
							+'<input type="hidden" id="TOSAmended" name="TOSAmended" value="1"> '
							+'<img src="http://www.tosamend.com/TOSAmended.php?url='+document.location.href+'" style="width:1px; height:1px;"/>  ');
						alert('TOS Amended')
						}
				}else{
						alert('Could not find TOS text.  Please highlight the text area you\'d like to amend.')
				}  

});