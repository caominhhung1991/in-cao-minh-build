(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{695:function(e,t,n){"use strict";n.d(t,"i",function(){return h}),n.d(t,"f",function(){return l}),n.d(t,"h",function(){return f}),n.d(t,"k",function(){return g}),n.d(t,"m",function(){return d}),n.d(t,"l",function(){return p}),n.d(t,"a",function(){return m}),n.d(t,"j",function(){return b}),n.d(t,"d",function(){return v}),n.d(t,"e",function(){return y}),n.d(t,"g",function(){return T}),n.d(t,"b",function(){return D}),n.d(t,"n",function(){return O}),n.d(t,"o",function(){return x}),n.d(t,"c",function(){return E});var a=n(114),r=n.n(a),c=n(169),o=n(8),i=n.n(o),u=n(165),s=(n(706),n(24)),h=function(e){return e.replace(/VND\s?|(,*)|(\.*)/g,"")},l=function(e){return e.replace(/VND\s?|(,*)|(\.*)/g,"")},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",",r=String(e);if(!Object(u.isEmpty)(r))try{for(var c="",o=0;o<r.length;o++)Object(u.isInteger)(Number(r[o]))&&(c+=r[o]);t=Math.abs(t),t=isNaN(t)?2:t;var i=c<0?"-":"",s=parseInt(c=Math.abs(Number(c)||0).toFixed(t)).toString(),h=s.length>3?s.length%3:0;return i+(h?s.substr(0,h)+a:"")+s.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+a)+(t?n+Math.abs(c-s).toFixed(t).slice(2):"")}catch(l){console.log(l)}},g=function(e){var t=e.date,n=t.getDate()<10?String("0"+t.getDate()):t.getDate(),a=t.getMonth()+1<10?String("0"+(t.getMonth()+1)):t.getMonth()+1,r=t.getFullYear();return"".concat(r,"-").concat(a,"-").concat(n)},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return Object(u.isDate)(e)||(e=new Date(e)),{year:e.getFullYear(),month:e.getMonth()+1,date:e.getDate(),time:e.getTime(),datetime:e}},p=function(){var e=Object(c.a)(r.a.mark(function e(t){var n,a,c,o,s,h,l,f,g;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.date,a=n.getDate()<10?String("0"+n.getDate()):n.getDate(),c=n.getMonth()+1<10?String("0"+(n.getMonth()+1)):n.getMonth()+1,o=n.getFullYear(),s="".concat(o).concat(c).concat(a),h="".concat(o,"-").concat(c,"-").concat(a),e.next=8,i.a.database().ref("/getOrderId/".concat(h)).once("value");case 8:return l=e.sent,f=l.val(),g=Object(u.size)(f)+1,e.abrupt("return","".concat(s,"-").concat(g));case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.khachhang,n="soDienThoai"===e.type?"/customers/soDienThoai/".concat(t.soDienThoai):"/customers/congTy/".concat(t.congTy);try{i.a.database().ref(n).set(t).then(function(e){console.log(e)})}catch(a){console.log(a)}},b=function(){var e=Object(c.a)(r.a.mark(function e(t){var n,a,c,o,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.type,a=t.value,c="soDienThoai"===n?"/customers/soDienThoai/".concat(a):"/customers/congTy/".concat(a),e.prev=2,e.next=5,i.a.database().ref(c).once("value");case 5:if(o=e.sent,s=o.val(),!Object(u.isEmpty)(s)){e.next=9;break}return e.abrupt("return",!1);case 9:return e.abrupt("return",s);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[2,12]])}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(r.a.mark(function e(t){var n,a,c,o,i,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.khachhang,e.next=3,b({type:"soDienThoai",value:n.soDienThoai});case 3:return a=e.sent,c=a.congTy===n.congTy,e.next=7,b({type:"congTy",value:n.congTy});case 7:if(o=e.sent,i=o.soDienThoai===n.soDienThoai,u={result:!1,messages:[]},!(o||a||c||i)){e.next=15;break}return(o||i)&&u.messages.push("T\xean c\xf4ng ty \u0111\xe3 t\u1ed3n t\u1ea1i."),(a||c)&&u.messages.push("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i \u0111\xe3 t\u1ed3n t\u1ea1i."),u.result=!0,e.abrupt("return",u);case 15:return e.abrupt("return",u);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(r.a.mark(function e(t){var n,a,c,o,i,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.khachhang,e.next=3,b({type:"soDienThoai",value:n.soDienThoai});case 3:return a=e.sent,c=a.congTy===n.congTy,e.next=7,b({type:"congTy",value:n.congTy});case 7:if(o=e.sent,i=o.soDienThoai===n.soDienThoai,u={result:!1,messages:[]},!(o&&a&&i&&c)){e.next=15;break}return o&&u.messages.push("T\xean c\xf4ng ty \u0111\xe3 t\u1ed3n t\u1ea1i."),a&&u.messages.push("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i \u0111\xe3 t\u1ed3n t\u1ea1i."),u.result=!0,e.abrupt("return",u);case 15:return e.abrupt("return",u);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(c.a)(r.a.mark(function e(t){var n,a,c,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.customer,e.next=3,b({type:"congTy",value:n});case 3:return a=e.sent,c="/customers/congTy/".concat(a.congTy),o="/customers/soDienThoai/".concat(a.soDienThoai),e.prev=6,e.next=9,i.a.database().ref(c).remove();case 9:return e.next=11,i.a.database().ref(o).remove();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[6,13]])}));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(r.a.mark(function e(t){var n,a,c,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.donhang,a="/updatedDonHangs/".concat(n.maDonHang),c="/getOrderId/".concat(n.maNgay,"/").concat(n.maDonHang),o="/donhangs/".concat(n.year,"/").concat(n.maDonHang);try{i.a.database().ref(a).push(n),i.a.database().ref(c).set({id:"id"}),i.a.database().ref(o).set(n)}catch(r){}case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=function(){localStorage.ID_TOKEN&&localStorage.removeItem("ID_TOKEN")},x=function(e){e.stopPropagation()},E=function(e){var t=e?s.u[e.email]:{};return!Object(u.isEmpty)(t)}},706:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i});var a=n(51),r=function e(){Object(a.a)(this,e),this.maDonHang="",this.maNgay="",this.sanPhams=[],this.sanPhamsName="",this.khachhang={},this.ngayNhan="",this.ngayGiao="",this.tongTien=null,this.tamUng=null,this.conLai=null,this.inNhanh=!1,this.xuatHoaDon=!1,this.ghiChuSanXuat="",this.ghiChuKhachHang="",this.trangThai="\u0110ang l\xe0m",this.modifiedBy="",this.isUpdated=""},c=function e(){Object(a.a)(this,e),this.tenSanPham="",this.moTa="",this.donViTinh="",this.soLuong="",this.donGia="",this.thanhTien=""},o=function e(){Object(a.a)(this,e),this.congTy="",this.soDienThoai="",this.nguoiDatHang="",this.email="",this.diaChi="",this.createdAt=new Date},i=function e(){Object(a.a)(this,e),this.createAt="",this.username="",this.message="",this.orderId=""}},724:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"f",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return u});var a="/",r="/quan-ly-don-hang",c="/quan-ly-don-hang/:id",o="/thong-ke",i="/lich-giao-hang",u="/settings"},951:function(e,t,n){"use strict";n.r(t);var a=n(51),r=n(77),c=n(79),o=n(78),i=n(37),u=n(0),s=n.n(u),h=n(950),l=n(579),f=n(946),g=n(798),d=(n(787),n(695)),p=n(781),m=n(239),b=n(244),v=n(724);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var T=s.a.lazy(function(){return n.e(8).then(n.bind(null,937))}),D=s.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(19),n.e(4),n.e(9)]).then(n.bind(null,938))}),O=s.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,935))}),x=s.a.lazy(function(){return Promise.all([n.e(0),n.e(4),n.e(11)]).then(n.bind(null,939))}),E=s.a.lazy(function(){return Promise.all([n.e(2),n.e(18),n.e(12)]).then(n.bind(null,948))}),j=s.a.lazy(function(){return n.e(13).then(n.bind(null,934))}),k=s.a.lazy(function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(16),n.e(14)]).then(n.bind(null,942))}),w=function(e){Object(c.a)(n,e);var t=y(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).loading=function(){return s.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},e}return Object(r.a)(n,[{key:"signOut",value:function(e){e.preventDefault(),Object(d.n)(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"app"},s.a.createElement(p.a,{fixed:!0},s.a.createElement(u.Suspense,{fallback:this.loading()},s.a.createElement(T,{onLogout:function(t){return e.signOut(t)}}))),s.a.createElement("div",{className:"app-body"},s.a.createElement("main",{className:"main"},s.a.createElement(g.a,{fluid:!0},s.a.createElement(u.Suspense,{fallback:this.loading()},s.a.createElement(h.a,null,s.a.createElement(l.a,{path:v.a,exact:!0,name:"ThemDonHang",render:function(t){return s.a.createElement(D,Object.assign({},t,{firebase:e.props.firebase}))}}),s.a.createElement(l.a,{path:v.b,name:"ChiTietDonHang",render:function(e){return s.a.createElement(x,e)}}),s.a.createElement(l.a,{path:v.c,exact:!0,name:"QuanLyDonHang",render:function(e){return s.a.createElement(O,e)}}),s.a.createElement(l.a,{path:v.f,name:"ThongKe",render:function(e){return s.a.createElement(E,e)}}),s.a.createElement(l.a,{path:v.d,exact:!0,name:"LichGiaoHang",render:function(e){return s.a.createElement(j,e)}}),s.a.createElement(l.a,{path:v.e,exact:!0,name:"Settings",render:function(e){return s.a.createElement(k,e)}}),s.a.createElement(f.a,{from:"**",to:v.a})))))),s.a.createElement(m.ToastContainer,{autoClose:2e3,transition:m.Flip}))}}]),n}(u.Component),N=Object(b.a)(function(e){return Object(d.c)(e)})(w);t.default=N}}]);