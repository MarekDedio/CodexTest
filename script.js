function openNav() 
{
	document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() 
{
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

setInterval(okno,25)
function okno()
{
		var a = window.innerWidth;	
		var y = document.getElementsByClassName("list-group-item");
		mybutton = document.getElementById("myBtn");
		if(a<1150)
			{
			document.getElementById("Kontakt").style.display="none";
			document.getElementById("a1").style.display="block";
			document.getElementById("Wiecej").style.display="block";
			
			for (i = 0; i < y.length; i++) 
				{
					y[i].style.paddingRight = "5%";
					y[i].style.paddingLeft = "5%";
				}	
			}
		if(a>1150)
			{
				document.getElementById("Kontakt").style.display="block";
				document.getElementById("a1").style.display="none";	
				document.getElementById("Wiecej").style.display="none";
			
				for (i = 0; i < y.length; i++) 
				{
					y[i].style.paddingRight = "25%";
					y[i].style.paddingLeft = "25%";
				}					
			}
		if(a<1130)
			{
			document.getElementById("Archiwum").style.display="none";
			document.getElementById("a2").style.display="block";
			
			document.getElementById("a22").style.display="block";
			}
		if(a>1130)
			{
				document.getElementById("Archiwum").style.display="block";
				document.getElementById("a2").style.display="none";		
					
				document.getElementById("a22").style.display="none";					
			}
		if(a<965)
			{
			document.getElementById("Dawni").style.display="none";
			document.getElementById("a3").style.display="block";
			}
		if(a>965)
			{
				document.getElementById("Dawni").style.display="block";
				document.getElementById("a3").style.display="none";						
			}
		if(a<863)
			{
			document.getElementById("Informacja").style.display="none";
			document.getElementById("a4").style.display="block";
			document.getElementById("a444").style.display="block";
			document.getElementById("a41").style.display="block";
			document.getElementById("a42").style.display="block";
			document.getElementById("a43").style.display="block";
			document.getElementById("a44").style.display="block";
			document.getElementById("a45").style.display="block";

			}
		if(a>863)
			{
				document.getElementById("Informacja").style.display="block";
				document.getElementById("a4").style.display="none";	
				document.getElementById("a444").style.display="none";
				document.getElementById("a41").style.display="none";
				document.getElementById("a42").style.display="none";
				document.getElementById("a43").style.display="none";
				document.getElementById("a44").style.display="none";
				document.getElementById("a45").style.display="none";					
			}	
		if(a<776)
			{
			document.getElementById("Lokalizacja").style.display="none";
			document.getElementById("a5").style.display="block";
			document.getElementById("a51").style.display="block";
			}
		if(a>776)
			{
				document.getElementById("Lokalizacja").style.display="block";
				document.getElementById("a5").style.display="none";		
				document.getElementById("a51").style.display="none";					
			}
		if(a<557)
			{
			document.getElementById("Aktualnosci").style.display="none";
			document.getElementById("a6").style.display="block";
			}
		if(a>557)
			{
				document.getElementById("Aktualnosci").style.display="block";
				document.getElementById("a6").style.display="none";						
			}
		if(a<300)
			{
			document.getElementById("Strona").style.display="none";
			document.getElementById("a7").style.display="block";
			}
		if(a>300)
			{
				document.getElementById("Strona").style.display="block";
				document.getElementById("a7").style.display="none";					
			}
				
}
function ShowHideSearchBar()
	{
		var x = document.getElementById("SearchBar");
		if(x.style.display == "none")
		{
			x.style.display = "block"
		}
		else
		{
			x.style.display = "none"
		}
	} 



