(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
	
	/*****
		@Version : 1.0
		@Author  : Hürkan ARAS
		@Email   : info@kodmarka.com
	*****/
		var ___i = 0;
	$.fn.blockUi = function(a,b){}
	$.blockUi = function(a,b){}
	var defaults = {};
	$.fn.buttonAjaxWait = function(action,opt){
		
		 var config = $.extend({},$.blockUi.defaults,opt);
 		   var content =  config.template.content
		 .replace(/\{\{\$icon\}\}/g,'<span class="blockUi-text-icon '+config.addIconClass+'">'+config.icon+'</span>')
		 .replace(/\{\{\$text\}\}/g,'<span class="blockUi-text-html '+config.addTextClass+'">'+config.html+'</span>');
 
		 var plugin = this;
		 plugin.setHtml = function(t){
			 $(plugin).each(function(){
			$(this).data("_blockUi").find(".blockUi-text-html").html(t);
			 });
			return plugin;
		};
		 plugin.setIcon = function(t){
			 $(plugin).each(function(){
			$(this).data("_blockUi").find(".blockUi-text-icon").html(t);
			 });
			return plugin;
		};
		plugin._resize = function(){
			
			$(plugin).each(function(){
				var css = { 	
					"width":$(this).outerWidth() , 
					"height":$(this).outerHeight() ,
					"left":$(this).offset().left,
					"top":$(this).offset().top,
					
				 };
				 if( $(this).data("_append") == 0){
 					$(this).data("_blockUi").css(css);
					 
				 }
			});
			return plugin;
		}
		 plugin.start = function(selector){
											 
														 setTimeout(function(){

											$(plugin).each(function(){
								 
										 var element = {};
										 var $this = $(this);
												if($this.css("display") == "none") return;
								 
										 element.css = {
											"width":$this.outerWidth() ,
											"height":$this.outerHeight() ,
											"left":$this.offset().left,
											"top":$this.offset().top,
											"position":"absolute",
											"cursor":config.cursor,
											"z-index":999999,
											"overflow":"hidden",
											//"border":$this.css("border"),
											"border-radius":$this.css("border-radius"),
											
										 };
										 
											var elementType = $this[0].tagName.toUpperCase();
											
											var notAppendElement = ["TR","TD","TABLE","BUTTON","SELECT","TEXTAREA","INPUT"];
											$this.data("positionP",$this.css("position"));
											if(notAppendElement.indexOf(elementType) == -1 && config.append == true){ //append
												
												if($this.css("position") != "absolute" && $this.css("position") != "fixed" && $this.css("position") != "relative"){
													$this.css("position","relative");
												}
												 var container =  $(config.template.container)
												.addClass( config.addClass).css({
													 "width":"100%",
													 "height":"100%",
													 "display":"block",
													 "overflow":"hidden",
													 "cursor":config.cursor,
													 "position":( (elementType != "BODY" && elementType != "HTML") ? "absolute" : "fixed"),
													 "z-index":"99999",
													 "left":"0px",
													 "top":"0px"
												 }).each(function(){
													$(this) .append($(content)); 
												 });
												$this.prepend(container).queue(function(){
													$this.data("_blockUi",$this.find("."+blockContainerClass));	
												});		
														 $this.data("_append",1);	

											$this.click(function(e){
													if($(e.target).closest("."+blockContainerClass).length == 1){
													e.stopPropagation();
													return false;
													}
											});
											}else{ // not append
											//background:#fff;opacity:0.4;width:100%;height:100%;display:block;position:absolute;z-index:0;left:0px;top:0px
											
											var container = $(config.template.container).addClass( config.addClass).css(element.css);
											 $this.data("_append",0);	

											$("body").append(container.detach().append($(content))).queue(function(){
												
											 
											});

											 $this.data("_blockUi",container);	
											}
															container.find(".blockUi-text").css(config.textCss);
															
															if(config.chameleon == true){ 
															 container.find(".blockUi-Bg").css($.extend(config.bgCss,{"background":$this.css("background-color")}));
															}else{ 
																					
															container.find(".blockUi-Bg").css(config.bgCss.background);
															}
														 

										  
										 
												 });
												/* $(window).unbind("scroll").scroll(function(){
													plugin._resize( );
												});*/
												 $(window).unbind("resize").resize(function(){
													plugin._resize( );
												});
												
												 if(config.timeout > 0 ){
												setTimeout(function(){
								 
												plugin.unblock( );
												},config.timeout);
											}
											
											$(plugin).on("blockUi.onBlock",config.onBlock(plugin));
											$(plugin).trigger("blockUi.onBlock");

										 },config.wait);
														
		 }
		 plugin.unblock = function( ){
			  	$(plugin).each(function(){ 
			  var $this = $(this);
			  $this.css({"position":$this.data("positionP")});
				if( $this.data("_blockUi")){
				$this.data("_blockUi").remove();
				$this.removeData("_blockUi");
				}
			  });
			   $(plugin).on("blockUi.onBlock",config.onUnblock(plugin));
			   $(plugin).trigger("blockUi.onUnblock");
			  return plugin;
		 }
		 if(action == "start"){
			 
				plugin.start();
 			
			
		}else{ 
				plugin.unblock();
		}
	
		return  plugin;
		
		
	};
	
			 $.fn.blockUi = $.blockUi = $.fn.buttonAjaxWait || {} ;
					var blockContainerClass = "blockUi-Container";

			$.blockUi.defaults = {
			 timeout:0,
			 addClass:"",
			 addTextClass:"",
			 addIconClass:"",
			 chameleon:false,
			 wait:0,
			 textCss:{
				"color":"rgb(0,0,0)", 
				"font-size":"100%",
				"margin":"auto"
			 },
			 "cursor":"wait",
			 "html":"",
			 "append":true,
			 "onBlock":function(e){
				 
			 },
			  "OnUnblock":function(e){
				 
			 },
			 bgCss:{
				
				"background":"#fff", 
				"opacity":"0.7",
				"top":"0px",
				"left":"0px",
				"position":"absolute",
				"z-index":"0",
				"display":"block",
				"width":"100%",
				"height":"100%"
			 },
			 template:{
				"homeContainer":"<div></div>",
				"container":'<div class="'+blockContainerClass+'"></div>',
				"content":'<div style="display:table;height:100%;width:100%;z-index:1;position:relative"><div style="vertical-align:middle;width:100%;text-align:center;display:table-cell" class="blockUi-Content" ><span class="blockUi-text">{{$icon}}{{$text}}</span></div></div>'+
				'<div class="blockUi-Bg"></div>'
			 },
			 "icon":'',
		 };
}));
