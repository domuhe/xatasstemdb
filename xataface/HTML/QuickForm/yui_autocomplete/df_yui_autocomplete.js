function buildYUIAutocomplete(t){var e;if(t.getAttribute("df:datasource")){var r=t.getAttribute("df:datasource")||"",i="";if(r.indexOf("?")>=0){var a=r.split("?");r=a[0],i=a[1]}for(var d=[t.getAttribute("df:resultNode")||"Result",t.getAttribute("df:queryKeyNode")||"df:title"],u=(t.getAttribute("df:additionalNodes")||"").split(","),n=0;n<u.length;n++)d[d.length]=u[n];e=new YAHOO.widget.DS_XHR(r,d),e.scriptQueryAppend=i,e.responseType=YAHOO.widget.DS_XHR.TYPE_XML,e.scriptQueryParam=t.getAttribute("df:scriptQueryParam")||""}else if(t.getAttribute("df:vocabulary")){var o=window.DATAFACE.VALUELISTS[t.getAttribute("df:vocabulary")];e=new YAHOO.widget.DS_JSArray(o),e.queryMatchContains=!0}var l=document.createElement("div");l.className="yui-autocomplete-wrapper",l.style.width="100%",l.setAttribute("df:noClone","1");var s=t.getAttribute("id")+"-autocomplete-container",A=document.createElement("div");A.className="yui-autocomplete-container",A.style.width="300px",A.setAttribute("id",s),l.appendChild(A),t.nextSibling?t.parentNode.insertBefore(l,t.nextSibling):t.parentNode.appendChild(l);var f=new YAHOO.widget.AutoComplete(t.getAttribute("id"),A.getAttribute("id"),e);t.getAttribute("data-xf-max-results-displayed")&&(f.maxResultsDisplayed=parseInt(t.getAttribute("data-xf-max-results-displayed"))),f.itemSelectEvent.subscribe(function(){jQuery(t).trigger("change")})}function updateYUIVocabulary(t){var e=window.DATAFACE.VALUELISTS[t.getAttribute("df:vocabulary")];-1==e.indexOf(t.value)&&(e[e.length]=t.value,e.sort())}"function"!=typeof Array.indexOf&&(Array.prototype.indexOf=function(t,e){"undefined"==typeof e&&(e=0);for(var r=e;r<this.length;r++)if(t===this[r])return r;return-1});