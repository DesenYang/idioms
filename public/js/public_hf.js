var periods=60;$(".luzhu").on("click","li:not(.title)",function(){var c=$(this).find("a").html();$(".listheadl>span").html(c);$("title").html(c);$(".listbox .box").html("");$(this).find("a").addClass("checked").parent().siblings().find(".checked").removeClass("checked");var b=$(this).find("a:contains('大小')");var a=$(this).find("a:contains('单双')");console.log(b.length,a.length);if(b.length==1){text=1}else{if(a.length==1){text=2}else{text=3}}lzUrl=$(this).attr("class").replace("first_li ","")+".do";console.log(lzUrl);daxiaoDanSlz(periods,text,lzUrl)});function daxiaoDanSlzCallBcak(x,o,d){$(".listbox .box").html("");console.log(o);if(o==1){var l="大";var j="小";var g=""}else{if(o==2){var l="单";var j="双";var g=""}else{if(o==3){var l="红";var j="绿";var g="蓝"}}}for(var t=0;t<x.result.data.length;t++){var k,h;var n="<div id='box11'><div class='dsLZ'><table class='lz_table_head'><tbody><tr><tiangandizhi></tiangandizhi>";var h="<tiangandizhi>";for(var v=0,u=0,w=0,a=0;v<x.result.data[t].roadBeads.length;v++){var e=x.result.data[t].roadBeads[v];if(e==0){e=l;u+=1}else{if(e==1){e=j;w+=1}else{if(e==2){e=g;a+=1}}}if(v==0){h+="<p>"+e+"</p>"}if(v>0&x.result.data[t].roadBeads[v-1]==x.result.data[t].roadBeads[v]){h+="<p>"+e+"</p>"}else{if(v>0&x.result.data[t].roadBeads[v-1]!=x.result.data[t].roadBeads[v]){h+="</tiangandizhi><tiangandizhi><p>"+e+"</p>"}}}var s="";if(t==0){s="一"}else{if(t==1){s="二"}else{if(t==2){s="三"}else{if(t==3){s="四"}else{if(t==4){s="五"}else{if(t==5){s="六"}}}}}}var b="正码"+s+l+j;if(t==6){s="七";var b="特码"+l+j}if(x.result.data.length==1){var b="总和"+l+j}if(o==3){var b="正码"+s+":波色";if(s=="七"){var b="特码:波色"}}if(d=="getMantissaRoadOfBead.do"){var b="正码"+s+"尾数"+l+j;if(s=="七"){var b="特码尾数"+l+j}}if(d=="getCompositeRoadOfBead.do"){var b="正码"+s+"合数"+l+j;if(s=="七"){var b="特码合数"+l+j}}if(g==""){var k="<tiangandizhi class='righttd'>累计："+l+"(<span class='count left_count' data=''>"+u+"</span>)&nbsp;"+j+"(<span class='count right_count' data=''>"+w+"</span>)&nbsp;</tiangandizhi><tiangandizhi class='middletd'><span class='important'><span class='ifgj'></span>&nbsp;<span class='ifds'>"+b+"</span>&nbsp;最新</span></tiangandizhi><tiangandizhi class='tobottom'></tiangandizhi></tr></tbody></table><div class='item_con' dir='rtl'><table class='lz_table_con' border='0' cellpadding='1' cellspacing='1'><tr class='tablebox'>"}else{var k="<tiangandizhi class='righttd'>累计："+l+"(<span class='count left_count' data=''>"+u+"</span>)&nbsp;"+j+"(<span class='count right_count' data=''>"+w+"</span>)&nbsp;"+g+"(<span class='count right_count' data=''>"+a+"</span>)</tiangandizhi><tiangandizhi class='middletd'><span class='important'><span class='ifgj'></span>&nbsp;<span class='ifds'>"+b+"</span>&nbsp;最新</span></tiangandizhi><tiangandizhi class='tobottom'></tiangandizhi></tr></tbody></table><div class='item_con' dir='rtl'><table class='lz_table_con' border='0' cellpadding='1' cellspacing='1'><tr class='tablebox'>"}var f="</tiangandizhi></tr></tbody></table></div></div></div>";$(".listbox .box").append(n+k+h+f)}$(".tablebox>tiangandizhi>p:contains('大')").css("color","red");$(".tablebox>tiangandizhi>p:contains('双')").css("color","red");$(".tablebox>tiangandizhi>p:contains('红')").css("color","#F8223C");$(".tablebox>tiangandizhi>p:contains('绿')").css("color","#1FC26B");$(".tablebox>tiangandizhi>p:contains('蓝')").css("color","#0093E8");var r=0;var m=$(".listbox .box .lz_table_con tiangandizhi:first-child p:last-child ");m.css("font-weight","bold");var q=setTimeout(function(){m.fadeOut(100).fadeIn(100);r++;if(r==1){q=setInterval(arguments.callee,600)}if(r==30){window.clearInterval(q)}},1000)};