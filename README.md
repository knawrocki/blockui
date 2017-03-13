# jQuery BlockUI Plugin - Element overlay
## Getting Started
Download either the [production version][min] or the [development version][max] of BlockUI.
[min]: https://raw.githubusercontent.com/hurkanaras/blockui/master/blockUi.min.js
[max]: https://raw.githubusercontent.com/hurkanaras/blockui/master/blockUi.js

<pre>
&lt;!-- include jQuery -->
&lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js">&lt;/script>
&lt;!-- include BlockUI -->
&lt;script type="text/javascript" src="http://domain.com/jquery.blockUI.js">&lt;/script>
</pre>

## Example & Options
```html
<div class="example"></div>
<script type="text/javascript">
$(function(){
$(".example").blockUi("start"); // $(".example").blockUi(action,{options});
});
</script>
```
####Ajax & Options

```html
<div class="button">
<button>Ajax Start</button>
</div>
<script type="text/javascript">
$(function(){
$("button").click(function(){
var btn =   $("button").blockUi("start"); // $(".example").blockUi(action,{options});
    $.ajax({
            url:"your_url",
           success:function(){
            btn.blockUi("unblock");
           }
         });
  
});

});
</script>
```
## Copyright and License
Copyright &copy; 20010-2017 Hürkan ARAS.
