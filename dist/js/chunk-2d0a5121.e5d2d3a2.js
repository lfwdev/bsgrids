(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a5121"],{"08ad":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),s={class:"controls container"},r={class:"input-group input-group-sm mb-3"},c=Object(o["e"])("span",{class:"input-group-text"},"# Items",-1),l={class:"input-group input-group-sm mb-3"},a=Object(o["e"])("span",{class:"input-group-text"},"Container Classes",-1),u={class:"input-group input-group-sm mb-3"},i=Object(o["e"])("span",{class:"input-group-text"},"Container Style",-1),b={class:"input-group input-group-sm mb-3"},p=Object(o["e"])("span",{class:"input-group-text"},"Row Classes¹",-1),d={class:"input-group input-group-sm mb-3"},m=Object(o["e"])("span",{class:"input-group-text"},"Row Style",-1),O={class:"input-group input-group-sm mb-3"},j=Object(o["e"])("span",{class:"input-group-text"},"Item Classes",-1),g={class:"input-group input-group-sm mb-3"},y=Object(o["e"])("span",{class:"input-group-text"},"Item Style",-1),f=Object(o["e"])("div",{class:"alert info"},[Object(o["e"])("small",null," ¹ Parent container needs matching padding utility to use gutter on the X axis! ")],-1),C={class:"bg-dark text-center text-white p-1"};function v(e,t,n,v,w,x){return Object(o["s"])(),Object(o["d"])("div",null,[Object(o["e"])("div",s,[Object(o["e"])("div",r,[c,Object(o["H"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t}),class:"form-control"},null,512),[[o["E"],e.value]])]),Object(o["e"])("div",l,[a,Object(o["H"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.containerClasses=t}),class:"form-control"},null,512),[[o["E"],e.containerClasses]])]),Object(o["e"])("div",u,[i,Object(o["H"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.containerStyle=t}),class:"form-control"},null,512),[[o["E"],e.containerStyle]])]),Object(o["e"])("div",b,[p,Object(o["H"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.rowClasses=t}),class:"form-control"},null,512),[[o["E"],e.rowClasses]])]),Object(o["e"])("div",d,[m,Object(o["H"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.rowStyle=t}),class:"form-control"},null,512),[[o["E"],e.rowStyle]])]),Object(o["e"])("div",O,[j,Object(o["H"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.itemClasses=t}),class:"form-control"},null,512),[[o["E"],e.itemClasses]])]),Object(o["e"])("div",g,[y,Object(o["H"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.itemStyle=t}),class:"form-control"},null,512),[[o["E"],e.itemStyle]])]),f]),Object(o["e"])("div",{class:Object(o["n"])(e.containerClasses),style:Object(o["o"])(e.containerStyle)},[Object(o["e"])("div",{class:Object(o["n"])(e.rowClasses),style:Object(o["o"])(e.rowStyle)},[(Object(o["s"])(!0),Object(o["d"])(o["a"],null,Object(o["z"])(x.getNumberOfItems(),(function(t){return Object(o["s"])(),Object(o["d"])("div",{key:"demo-"+t,class:Object(o["n"])(e.itemClasses+" "+x.getRandomBorderColor()),style:Object(o["o"])(e.itemStyle)},[Object(o["e"])("div",C,[Object(o["e"])("b",null,Object(o["C"])(t),1)])],6)})),128))],6)],6)])}var w={data:function(){return{containerClasses:"container px-3",containerStyle:"border: 1px dashed red;",rowClasses:"row row-cols-12 gx-0",rowStyle:"border: 1px dashed cyan;",itemClasses:"border border-5 col-1",itemStyle:"border-style: inset !important;",value:48,bgColors:["bg-primary","bg-success","bg-danger","bg-warning","bg-secondary","bg-info"],borderColors:["border-primary","border-success","border-danger","border-warning","border-secondary","border-info"]}},methods:{getNumberOfItems:function(){var e=1*this.value;return e<255?e:255},getRandomInt:function(e){return Math.floor(Math.random()*e)},getRandomBgColor:function(){return this.bgColors[this.getRandomInt(5)]},getRandomBorderColor:function(){return this.borderColors[this.getRandomInt(5)]}}},x=n("6b0d"),h=n.n(x);const S=h()(w,[["render",v]]);t["default"]=S}}]);
//# sourceMappingURL=chunk-2d0a5121.e5d2d3a2.js.map