!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),c=tinymce.util.Tools.resolve("tinymce.EditorManager"),s=tinymce.util.Tools.resolve("tinymce.Env"),a=tinymce.util.Tools.resolve("tinymce.util.Delay"),y=tinymce.util.Tools.resolve("tinymce.util.Tools"),f=tinymce.util.Tools.resolve("tinymce.util.VK"),d=function(e){return e.getParam("tab_focus",e.getParam("tabfocus_elements",":prev,:next"))},m=t.DOM,n=function(e){e.keyCode!==f.TAB||e.ctrlKey||e.altKey||e.metaKey||e.preventDefault()},i=function(r){function e(n){function e(e){function t(t){return/INPUT|TEXTAREA|BUTTON/.test(t.tagName)&&c.get(n.id)&&-1!==t.tabIndex&&function e(t){return"BODY"===t.nodeName||"hidden"!==t.type&&"none"!==t.style.display&&"hidden"!==t.style.visibility&&e(t.parentNode)}(t)}if(o=m.select(":input:enabled,*[tabindex]:not(iframe)"),y.each(o,function(e,t){if(e.id===r.id)return i=t,!1}),0<e){for(l=i+1;l<o.length;l++)if(t(o[l]))return o[l]}else for(l=i-1;0<=l;l--)if(t(o[l]))return o[l];return null}var i,o,t,l;if(!(n.keyCode!==f.TAB||n.ctrlKey||n.altKey||n.metaKey||n.isDefaultPrevented())&&(1===(t=y.explode(d(r))).length&&(t[1]=t[0],t[0]=":prev"),o=n.shiftKey?":prev"===t[0]?e(-1):m.get(t[0]):":next"===t[1]?e(1):m.get(t[1]))){var u=c.get(o.id||o.name);o.id&&u?u.focus():a.setTimeout(function(){s.webkit||window.focus(),o.focus()},10),n.preventDefault()}}r.on("init",function(){r.inline&&m.setAttrib(r.getBody(),"tabIndex",null),r.on("keyup",n),s.gecko?r.on("keypress keydown",e):r.on("keydown",e)})};e.add("tabfocus",function(e){i(e)})}();