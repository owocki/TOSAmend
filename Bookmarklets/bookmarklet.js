javascript:(
	function(e,a,g,h,f,c,b,d){
		if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){
			c=a.createElement('script');c.type='text/javascript';
			c.src='http://ajax.googleapis.com/ajax/libs/jquery/'+g+'/jquery.min.js';
			c.onload=c.onreadystatechange=function(){
				if(!b&&(!(d=this.readyState)||d=='loaded'||d=='complete')){
					h((f=e.jQuery).noConflict(1),b=1);f(c).remove()
					}
			};
			
			a.documentElement.childNodes[0].appendChild(c)}
			}
	)(window,document,'1.3.2',function($,L){
	
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
					var foundin=$('*:contains(\''+text+'\'):last');
					var isAlreadyAmended = $('#TOSAmended').length;
					if(isAlreadyAmended){
						alert('TOS Amended');
					}else if(foundin && foundin.length>0){
					
						
						/* Record Demographic info for INFORMATIONAL purposes only. TOSAmend will NEVER sell your email address. */
						var recordURL = 'http://www.tosamend.com/TOSAmended.php?url='+document.location.href+'';
						
						var gender='';
						if(!gender){
							if($('[name=gender]').length > 0)
								gender = $('[name=gender]').val();
						}
						
						var email='';
						if(!email){
							if($('[name=email]').length > 0)
								email = $('[name=email]').val();
						}
							
						var name='';
						if(!name){
							if($('[name=name]').length > 0)
								name = $('[name=name]').val();
						}
						if(!name){
							if($('[name=firstname]').length > 0)
								name = $('[name=firstname]').val();
						}
						if(!name){
							if($('[name=fname]').length > 0)
								name = $('[name=fname]').val();
						}
						if(!name){
							if($('[name=uname]').length > 0)
								name = $('[name=uname]').val();
						}
						if(!name){
							if($('[name=username]').length > 0)
								name = $('[name=username]').val();
						}
							
						if(gender)
							recordURL+='&gender='+gender;
						
						if(email)
							recordURL+='&email='+email;
						
						if(name)
							recordURL+='&name='+name;
						
						foundin.html( ''
							+'By clicking this box, I reject the proposed terms and conditions, and counter-offer that the transaction be governed by the applicable default rules and consumer protection laws. '
							+'(via <a href=http://www.tosamend.com/?utm_source=bookmarklet>TOSAmend</a>) '
							+'<input type=\'hidden\' id=\'TOSAmended\' name=\'TOSAmended\' value=\'1\'> '
							+'<img src=\''+recordURL+'\' style=\'width:1px; height:1px;\'/>  ');
						alert('TOS Amended')
						}
				}else{
						alert('Could not find TOS text.  Please highlight the text area you\'d like to amend.')
				}  

});