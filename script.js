<script type="text/javascript">


var word,temp,syllab,res,n,m,res,x,f,temp;

syllab = 0;


function word_count(x)
{
	var str = x;
	res = str.split(" ");
	return res.length;
}





function line_count(x)
{
	var str = x;
	var res = str.split(".");
	return res.length;
}



function new_count(word)
{
word=word.toLowerCase();
	if(word.length <= 3) { return 1;}
word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
word=word.replace(/^y/, '');
return word.match(/[aeiouy]{1,2}/g).length;
}



function grade()
{

temp = new_count(res[i]);

syllab = syllab + temp;
}


f = ( 206.835 - 1.015 * (n/m) - 84.6 * (syllab)/n);

document.getElementById("demo").innerHTML = f;
}
</script>
