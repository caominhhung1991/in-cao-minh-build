(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{695:function(t,e,n){"use strict";n.d(e,"i",function(){return h}),n.d(e,"f",function(){return l}),n.d(e,"h",function(){return f}),n.d(e,"k",function(){return g}),n.d(e,"m",function(){return d}),n.d(e,"l",function(){return p}),n.d(e,"a",function(){return m}),n.d(e,"j",function(){return b}),n.d(e,"d",function(){return v}),n.d(e,"e",function(){return y}),n.d(e,"g",function(){return T}),n.d(e,"b",function(){return D}),n.d(e,"n",function(){return O}),n.d(e,"o",function(){return x}),n.d(e,"c",function(){return E});var a=n(114),r=n.n(a),c=n(169),o=n(8),i=n.n(o),u=n(165),s=(n(700),n(24)),h=function(t){return t.replace(/VND\s?|(,*)|(\.*)/g,"")},l=function(t){return t.replace(/VND\s?|(,*)|(\.*)/g,"")},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",",r=String(t);if(!Object(u.isEmpty)(r))try{for(var c="",o=0;o<r.length;o++)Object(u.isInteger)(Number(r[o]))&&(c+=r[o]);e=Math.abs(e),e=isNaN(e)?2:e;var i=c<0?"-":"",s=parseInt(c=Math.abs(Number(c)||0).toFixed(e)).toString(),h=s.length>3?s.length%3:0;return i+(h?s.substr(0,h)+a:"")+s.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+a)+(e?n+Math.abs(c-s).toFixed(e).slice(2):"")}catch(l){console.log(l)}},g=function(t){var e=t.date,n=e.getDate()<10?String("0"+e.getDate()):e.getDate(),a=e.getMonth()+1<10?String("0"+(e.getMonth()+1)):e.getMonth()+1,r=e.getFullYear();return"".concat(r,"-").concat(a,"-").concat(n)},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return Object(u.isDate)(t)||(t=new Date(t)),{year:t.getFullYear(),month:t.getMonth()+1,date:t.getDate(),time:t.getTime(),datetime:t}},p=function(){var t=Object(c.a)(r.a.mark(function t(e){var n,a,c,o,s,h,l,f,g;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.date,a=n.getDate()<10?String("0"+n.getDate()):n.getDate(),c=n.getMonth()+1<10?String("0"+(n.getMonth()+1)):n.getMonth()+1,o=n.getFullYear(),s="".concat(o).concat(c).concat(a),h="".concat(o,"-").concat(c,"-").concat(a),t.next=8,i.a.database().ref("/getOrderId/".concat(h)).once("value");case 8:return l=t.sent,f=l.val(),g=Object(u.size)(f)+1,t.abrupt("return","".concat(s,"-").concat(g));case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.khachhang,n="soDienThoai"===t.type?"/customers/soDienThoai/".concat(e.soDienThoai):"/customers/congTy/".concat(e.congTy);try{i.a.database().ref(n).set(e).then(function(t){console.log(t)})}catch(a){console.log(a)}},b=function(){var t=Object(c.a)(r.a.mark(function t(e){var n,a,c,o,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.type,a=e.value,c="soDienThoai"===n?"/customers/soDienThoai/".concat(a):"/customers/congTy/".concat(a),t.prev=2,t.next=5,i.a.database().ref(c).once("value");case 5:if(o=t.sent,s=o.val(),!Object(u.isEmpty)(s)){t.next=9;break}return t.abrupt("return",!1);case 9:return t.abrupt("return",s);case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0);case 15:case"end":return t.stop()}},t,null,[[2,12]])}));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(r.a.mark(function t(e){var n,a,c,o,i,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.khachhang,t.next=3,b({type:"soDienThoai",value:n.soDienThoai});case 3:return a=t.sent,c=a.congTy===n.congTy,t.next=7,b({type:"congTy",value:n.congTy});case 7:if(o=t.sent,i=o.soDienThoai===n.soDienThoai,u={result:!1,messages:[]},!(o||a||c||i)){t.next=15;break}return(o||i)&&u.messages.push("T\xean c\xf4ng ty \u0111\xe3 t\u1ed3n t\u1ea1i."),(a||c)&&u.messages.push("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i \u0111\xe3 t\u1ed3n t\u1ea1i."),u.result=!0,t.abrupt("return",u);case 15:return t.abrupt("return",u);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(r.a.mark(function t(e){var n,a,c,o,i,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.khachhang,t.next=3,b({type:"soDienThoai",value:n.soDienThoai});case 3:return a=t.sent,c=a.congTy===n.congTy,t.next=7,b({type:"congTy",value:n.congTy});case 7:if(o=t.sent,i=o.soDienThoai===n.soDienThoai,u={result:!1,messages:[]},!(o&&a&&i&&c)){t.next=15;break}return o&&u.messages.push("T\xean c\xf4ng ty \u0111\xe3 t\u1ed3n t\u1ea1i."),a&&u.messages.push("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i \u0111\xe3 t\u1ed3n t\u1ea1i."),u.result=!0,t.abrupt("return",u);case 15:return t.abrupt("return",u);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(c.a)(r.a.mark(function t(e){var n,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.customer,t.next=3,b({type:"congTy",value:n});case 3:return a=t.sent,c="/customers/congTy/".concat(a.congTy),o="/customers/soDienThoai/".concat(a.soDienThoai),t.prev=6,t.next=9,i.a.database().ref(c).remove();case 9:return t.next=11,i.a.database().ref(o).remove();case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),console.log(t.t0);case 16:case"end":return t.stop()}},t,null,[[6,13]])}));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=Object(c.a)(r.a.mark(function t(e){var n,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.donhang,a="/updatedDonHangs/".concat(n.maDonHang),c="/getOrderId/".concat(n.maNgay,"/").concat(n.maDonHang),o="/donhangs/".concat(n.year,"/").concat(n.maDonHang);try{i.a.database().ref(a).push(n),i.a.database().ref(c).set({id:"id"}),i.a.database().ref(o).set(n)}catch(r){}case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),O=function(){localStorage.ID_TOKEN&&localStorage.removeItem("ID_TOKEN")},x=function(t){t.stopPropagation()},E=function(t){var e=t?s.u[t.email]:{};return!Object(u.isEmpty)(e)}},700:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"d",function(){return c}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i});var a=n(51),r=function t(){Object(a.a)(this,t),this.maDonHang="",this.maNgay="",this.sanPhams=[],this.sanPhamsName="",this.khachhang={},this.ngayNhan="",this.ngayGiao="",this.tongTien=null,this.tamUng=null,this.conLai=null,this.inNhanh=!1,this.xuatHoaDon=!1,this.ghiChuSanXuat="",this.ghiChuKhachHang="",this.trangThai="\u0110ang l\xe0m",this.modifiedBy="",this.isUpdated=""},c=function t(){Object(a.a)(this,t),this.tenSanPham="",this.moTa="",this.donViTinh="",this.soLuong="",this.donGia="",this.thanhTien=""},o=function t(){Object(a.a)(this,t),this.congTy="",this.soDienThoai="",this.nguoiDatHang="",this.email="",this.diaChi="",this.createdAt=new Date},i=function t(){Object(a.a)(this,t),this.createAt="",this.username="",this.message="",this.orderId=""}},724:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"b",function(){return c}),n.d(e,"f",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return u});var a="/",r="/quan-ly-don-hang",c="/quan-ly-don-hang/:id",o="/thong-ke",i="/lich-giao-hang",u="/settings"},951:function(t,e,n){"use strict";n.r(e);var a=n(51),r=n(77),c=n(79),o=n(78),i=n(37),u=n(0),s=n.n(u),h=n(950),l=n(579),f=n(946),g=n(798),d=(n(787),n(695)),p=n(781),m=n(239),b=n(244),v=n(724);function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,a=Object(i.a)(t);if(e){var r=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var T=s.a.lazy(function(){return n.e(7).then(n.bind(null,937))}),D=s.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(18),n.e(8)]).then(n.bind(null,938))}),O=s.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(9)]).then(n.bind(null,935))}),x=s.a.lazy(function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,939))}),E=s.a.lazy(function(){return Promise.all([n.e(2),n.e(17),n.e(11)]).then(n.bind(null,948))}),j=s.a.lazy(function(){return n.e(12).then(n.bind(null,934))}),k=s.a.lazy(function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(15),n.e(13)]).then(n.bind(null,942))}),w=function(t){Object(c.a)(n,t);var e=y(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).loading=function(){return s.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t}return Object(r.a)(n,[{key:"signOut",value:function(t){t.preventDefault(),Object(d.n)(),this.props.history.push("/login")}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"app"},s.a.createElement(p.a,{fixed:!0},s.a.createElement(u.Suspense,{fallback:this.loading()},s.a.createElement(T,{onLogout:function(e){return t.signOut(e)}}))),s.a.createElement("div",{className:"app-body"},s.a.createElement("main",{className:"main"},s.a.createElement(g.a,{fluid:!0},s.a.createElement(u.Suspense,{fallback:this.loading()},s.a.createElement(h.a,null,s.a.createElement(l.a,{path:v.a,exact:!0,name:"ThemDonHang",render:function(e){return s.a.createElement(D,Object.assign({},e,{firebase:t.props.firebase}))}}),s.a.createElement(l.a,{path:v.b,name:"ChiTietDonHang",render:function(t){return s.a.createElement(x,t)}}),s.a.createElement(l.a,{path:v.c,exact:!0,name:"QuanLyDonHang",render:function(t){return s.a.createElement(O,t)}}),s.a.createElement(l.a,{path:v.f,name:"ThongKe",render:function(t){return s.a.createElement(E,t)}}),s.a.createElement(l.a,{path:v.d,exact:!0,name:"LichGiaoHang",render:function(t){return s.a.createElement(j,t)}}),s.a.createElement(l.a,{path:v.e,exact:!0,name:"Settings",render:function(t){return s.a.createElement(k,t)}}),s.a.createElement(f.a,{from:"**",to:v.a})))))),s.a.createElement(m.ToastContainer,{autoClose:2e3,transition:m.Flip}))}}]),n}(u.Component),N=Object(b.a)(function(t){return Object(d.c)(t)})(w);e.default=N}}]);