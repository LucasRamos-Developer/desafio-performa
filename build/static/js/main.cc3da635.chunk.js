(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),s=(a(51),a(7)),i=a(8),l=a(10),d=a(9),m=a(11),u=a(43),p=a.n(u),h=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderOldPrice",value:function(e){var t="";return null!=e&&(t=r.a.createElement("span",{className:"old"},"De: ",e)),t}},{key:"render",value:function(){return r.a.createElement("div",{className:"ProductCard"},r.a.createElement("div",{className:"ProductCard-inner"},r.a.createElement("a",{href:this.props.data.detailUrl,title:this.props.data.name,className:"ProductCard-link link-box block"},r.a.createElement("span",{className:"ProductCard-image block"},r.a.createElement("img",{src:this.props.data.imageName,alt:this.props.data.name})),r.a.createElement("span",{className:"ProductCard-details block"},r.a.createElement("span",{className:"ProductCard-details_name line"},this.props.data.name),r.a.createElement("span",{className:"ProductCard-details_price line"},this.renderOldPrice(this.props.data.oldPrice),r.a.createElement("span",{className:"sale"},r.a.createElement("b",null,"Por:")," ",this.props.data.price)),r.a.createElement("span",{className:"ProductCard-details_installment line"},p()(this.props.data.productInfo.paymentConditions))))))}}]),t}(n.Component),E=a(44),v=a.n(E),b=a(45),f=a.n(b),N=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).state={product:{},recommendation:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){}},{key:"handleScriptCreate",value:function(){var e=this;window.X=function(t){var a=t.data;console.log(a),e.setState({product:a.reference.item,recommendation:a.recommendation})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"ProductRecommendation"},r.a.createElement("div",{className:"ProductRecommendation-row"},r.a.createElement("div",{className:"ProductRecommendation-ref "},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Voc\xea visitou")),r.a.createElement(h,{key:this.state.product.businessId,data:this.state.product})),r.a.createElement("div",{className:"ProductRecommendation-slider"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"e talvez se interesse por: ")),r.a.createElement(v.a,{arrow:!0,dots:!0,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1},this.state.recommendation.map(function(e){return r.a.createElement(h,{key:e.businessId,data:e})})),r.a.createElement(f.a,{url:"http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X",onCreate:this.handleScriptCreate.bind(this)}))))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"AppContainer"},r.a.createElement(N,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,t,a){e.exports=a(100)},51:function(e,t,a){},64:function(e,t){},66:function(e,t){}},[[46,2,1]]]);
//# sourceMappingURL=main.cc3da635.chunk.js.map