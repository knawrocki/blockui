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

$.extend(true,$.blockUi.defaults,{
			icon:'<img src="https://kodwork.s3.amazonaws.com/ajax-loader.gif"/>', // OR your html code 
			html:""
		});

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
            btn.blockUi("unblock"); // or btn.unblock(); or $("button").blockUi("unblock");
           }
         });
  
});

});
</script>
```
####Full Example & Options
```html

<script type="text/javascript">
$(function(){
$("button").click(function(){
    var options = {

    icon:        '<img src="https://kodwork.s3.amazonaws.com/ajax-loader.gif"/>',    // html text icon
    html:        "Please Wait..",    // html message
    timeout:     2000,            // auto unblock / 2000 ms
    wait:        3000,               // Starts in 3 seconds,
    addClass:    "exampleClass", // Home container add class
    addTextClass:"exampleTextClass", // Text element add class
    addIconClass:"exampleIconClass", // Icon element add class
    addIconClass:"exampleIconClass", // Icon element add class
    "cursor":"wait",
    chameleon:true, // this element background
    append:false, //  not append
    // -------
     bgCss:{
         "background":"#ff0000",
          "opacity":"0.7", 
    },
    // -------

    textCss:{
                    "color":"rgb(0,0,0)", 
                    "font-size":"100%",
    },
     "onBlock":function(e){  }, // block start event
     "onUnblock":function(e){  },  // block stop event
};
var btn =   $("button").blockUi("start",options); // $(".example").blockUi(action,{options});
    $.ajax({
            url:"your_url",
           success:function(){
            btn.blockUi("unblock"); // or btn.unblock(); or $("button").blockUi("unblock");
           }
         });
  
});

});
</script>
```
####Set Default Options
```html

<script type="text/javascript">
$(function(){
$.extend(true,$.blockUi.defaults, {

    icon:        '<img src="https://kodwork.s3.amazonaws.com/ajax-loader.gif"/>',    // html text icon
    html:        "Please Wait..",    // html message
    timeout:     2000,            // auto unblock / 2000 ms
    wait:        3000,               // Starts in 3 seconds,
    addClass:    "exampleClass", // Home container add class
    addTextClass:"exampleTextClass", // Text element add class
    addIconClass:"exampleIconClass", // Icon element add class
    addIconClass:"exampleIconClass", // Icon element add class
    "cursor":"wait",
    chameleon:true, // this element background
    append:false, //  not append
    // -------
     bgCss:{
         "background":"#ff0000",
          "opacity":"0.7", 
    },
    // -------

    textCss:{
                    "color":"rgb(0,0,0)", 
                    "font-size":"100%",
    },
     "onBlock":function(e){  }, // block start event
     "onUnblock":function(e){  },  // block stop event
});

$("body").blockUi("start");

});
</script>
```

####Set Text  
```html
<script type="text/javascript">
$(function(){

var elem = $("body").blockUi("start");
 
elem.setText("new text");
elem.setIcon("new Icon");

});
</script>
```



## Copyright and License
Copyright &copy; 2010-2017 Hürkan ARAS.
