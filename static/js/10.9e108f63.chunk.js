(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{345:function(e,t,n){"use strict";var a=n(170),o=n(732),r=n.n(o),c=n(733),i=n.n(c),l=n(165),s=n(695),h={congTyTextStyle:{fontSize:13,margin:[0,0,0,2],color:"black"},logoStyle:{margin:[0,0,0,5]},headerStyle:{margin:[0,0,0,10]},subheader:{fontSize:16,bold:!0,margin:[0,10,0,5]},tableExample:{margin:[0,5,0,15]},tableHeader:{bold:!0,fontSize:9,color:"black",margin:[2,2,2,2]},textTable:{fontSize:10,color:"black"},textStyle:{fontSize:10,margin:[0,0,0,2],color:"black"},thueVAT:{bold:!0,fontSize:9,color:"red",margin:[10,10,0,0]},ghiChuKhachHang:{bold:!0,fontSize:9,margin:[10,10,10,5]},nguoiNhanHangStyle:{bold:!0,fontSize:10,color:"black",margin:[0,10,0,0]},columnsStyle:{margin:[0,10,0,10]},lineStyle:{backgroundColor:"black"},donDatHangStyle:{color:"red",margin:[0,12,0,0],fontSize:20},lien1GiaoKhachHangStyle:{margin:[16,2,0,0],fontSize:10},lien2LuuHanhNoiBoStyle:{margin:[40,2,0,0],fontSize:10},nguoiThietKe:{bold:!0,fontSize:11,color:"black",margin:[30,10,0,0]},ngayThangNam:{fontSize:11,color:"black",margin:[0,10,0,0]}};n.d(t,"a",function(){return f});var u=function(e){var t=e.donhang,n=e.khachhang;return{style:"columnsStyle",columns:[[{text:[{text:"M\xe3 \u0111\u01a1n h\xe0ng: ",bold:!0},t.maDonHang],style:"textStyle"},{text:[{text:"Ng\xe0y nh\u1eadn: ",bold:!0},t.ngayNhan],style:"textStyle"},{text:[{text:"Ng\xe0y giao:  ",bold:!0},t.ngayGiao],style:"textStyle"}],[{text:[{text:"Kh\xe1ch h\xe0ng: ",bold:!0},n.congTy],style:"textStyle"},{text:[{text:"\u0110\u1ecba ch\u1ec9: ",bold:!0},n.diaChi],style:"textStyle"}],[{text:[{text:"Ng\u01b0\u1eddi \u0111\u1eb7t h\xe0ng: ",bold:!0},n.nguoiDatHang],style:"textStyle"},{text:[{text:"\u0110i\u1ec7n tho\u1ea1i: ",bold:!0},n.soDienThoai],style:"textStyle"},{text:[{text:"Email: ",bold:!0},n.email],style:"textStyle"}]]}},g=function(e){return e.map(function(e,t){var n=e.tenSanPham,a=e.moTa,o=e.donViTinh,r=e.soLuong;return[{text:t+1,style:"textTable",alignment:"center"},{text:n,style:"textTable",alignment:"left"},{text:a,style:"textTable",alignment:"left"},{text:o,style:"textTable",alignment:"center"},{text:Object(s.h)(r),style:"textTable",alignment:"right"}]})},m=function(e){var t=e.tongTien,n=e.tamUng,a=e.conLai,o=e.ghiChuKhachHang;return[[{rowSpan:3,colSpan:5,text:"*Ghi ch\xfa: ".concat(o),style:"ghiChuKhachHang"},"","","","",{text:"T\u1ed5ng ti\u1ec1n",style:"tableHeader",alignment:"center"},{text:Object(s.h)(t),style:"textTable",alignment:"right"}],["","","","","",{text:"\u1ee8ng tr\u01b0\u1edbc",style:"tableHeader",alignment:"center"},{text:(Object(l.isEmpty)(n)?"":"- ")+Object(s.h)(n),style:"textTable",alignment:"right"}],["","","","","",{text:"C\xf2n l\u1ea1i",style:"tableHeader",alignment:"center"},{text:Object(s.h)(a),style:"textTable",alignment:"right",bold:!0}]]},d=function(e){var t=e.ghiChuKhachHang;return[[{colSpan:5,text:"*Ghi ch\xfa: ".concat(t),style:"ghiChuKhachHang"},"","","",""]]},f=function(e){var t=e.donhang,n=e.khachhang,o=(e.type,i.a.pdfMake.vfs);r.a.vfs=o;var c,l={pageSize:"A5",pageOrientation:"landscape",pageMargins:[15,15,15,15],content:[{style:"headerStyle",columns:[[[{text:"C\xd4NG TY IN \u1ea4N CAO MINH",bold:!0,style:"congTyTextStyle"},{text:"33A Hoa L\u01b0, Ph\u01b0\u1edbc Ti\u1ebfn, Nha Trang",style:"textStyle"}]],[[{text:"\u0110\u01a0N \u0110\u1eb6T H\xc0NG",style:"donDatHangStyle",bold:!0},{text:"Li\xean 1: Giao kh\xe1ch h\xe0ng",style:"lien1GiaoKhachHangStyle"}]],[[{text:[{text:"Di \u0111\u1ed9ng: ",bold:!0},"(0258) 3510 014"],style:"textStyle"},{text:[{text:"Email:    ",bold:!0},"incaominh@gmail.com"],style:"textStyle"},{text:[{text:"Website: ",bold:!0},"incaominh.com"],style:"textStyle"}]]]},{canvas:[{type:"line",x1:0,y1:0,x2:560,y2:0,lineWidth:.5}]},u({donhang:t,khachhang:n}),{table:{headerRows:1,dontBreakRows:!0,widths:[23,"*",165,40,45,50,70],body:[["STT","S\u1ea3n Ph\u1ea9m","Chi ti\u1ebft","\u0110VT","S\u1ed1 l\u01b0\u1ee3ng","\u0110\u01a1n gi\xe1","Th\xe0nh ti\u1ec1n"].map(function(e){return[{text:e,style:"tableHeader",alignment:"center"}]})].concat(Object(a.a)((c=t.sanPhams,c.map(function(e,t){var n=e.tenSanPham,a=e.moTa,o=e.donViTinh,r=e.soLuong,c=e.donGia,i=e.thanhTien;return[{text:t+1,style:"textTable",alignment:"center"},{text:n,style:"textTable",alignment:"left"},{text:a,style:"textTable",alignment:"left"},{text:o,style:"textTable",alignment:"center"},{text:Object(s.h)(r),style:"textTable",alignment:"right"},{text:Object(s.h)(c),style:"textTable",alignment:"right"},{text:Object(s.h)(i),style:"textTable",alignment:"right"}]}))),Object(a.a)(m(t)))}},{columns:[{text:"Ng\u01b0\u1eddi l\u1eadp \u0111\u01a1n",style:"nguoiNhanHangStyle",alignment:"right",width:120},{text:"*L\u01b0u \xfd: Gi\xe1 tr\xean ch\u01b0a bao g\u1ed3m thu\u1ebf VAT 10% (N\u1ebfu xu\u1ea5t H\u0110 VAT vui l\xf2ng thanh to\xe1n th\xeam 10%)",style:"thueVAT",alignment:"right",width:"*"}]},{text:"",pageBreak:"before"},{style:"headerStyle",columns:[[[{text:"C\xd4NG TY IN \u1ea4N CAO MINH",bold:!0,style:"congTyTextStyle"},{text:"33A Hoa L\u01b0, Ph\u01b0\u1edbc Ti\u1ebfn, Nha Trang",style:"textStyle"}]],[[{text:"\u0110\u01a0N \u0110\u1eb6T H\xc0NG",style:"donDatHangStyle",bold:!0},{text:"Li\xean 2: N\u1ed9i b\u1ed9",style:"lien2LuuHanhNoiBoStyle"}]],[[{text:[{text:"Di \u0111\u1ed9ng: ",bold:!0},"(0258) 3510 014"],style:"textStyle"},{text:[{text:"Email:    ",bold:!0},"incaominh@gmail.com"],style:"textStyle"},{text:[{text:"Website: ",bold:!0},"incaominh.com"],style:"textStyle"}]]]},{canvas:[{type:"line",x1:0,y1:0,x2:560,y2:0,lineWidth:.5}]},u({donhang:t,khachhang:n}),{table:{headerRows:1,dontBreakRows:!0,widths:[23,140,"*",40,45],body:[["STT","S\u1ea3n Ph\u1ea9m","Chi ti\u1ebft","\u0110VT","S\u1ed1 l\u01b0\u1ee3ng"].map(function(e){return[{text:e,style:"tableHeader",alignment:"center"}]})].concat(Object(a.a)(g(t.sanPhams)),Object(a.a)(d(t)))}},{columns:[{text:"Thi\u1ebft k\u1ebf",style:"nguoiThietKe",alignment:"center",width:130},{text:"Ng\xe0y...... th\xe1ng...... n\u0103m 20.....",style:"ngayThangNam",alignment:"left"}]}],styles:h},f=window.open("","_blank");r.a.createPdf(l).open({},f)}},702:function(e,t,n){"use strict";var a=n(233);n.d(t,"e",function(){return a.g}),n.d(t,"a",function(){return a.b}),n.d(t,"b",function(){return a.c}),n.d(t,"c",function(){return a.d}),n.d(t,"d",function(){return a.e}),n.d(t,"f",function(){return a.i})},717:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(928),c=n(24);t.a=function(e){var t=e.trangThai,n="";switch(t){case c.f:n="success";break;case c.c:n="danger";break;case c.b:n="warning";break;default:n="light"}return o.a.createElement(r.a,{color:n},t)}},731:function(e,t,n){"use strict";var a=n(700);n.d(t,"a",function(){return a.a}),n.d(t,"c",function(){return a.d}),n.d(t,"b",function(){return a.b})},734:function(e,t,n){},765:function(e,t,n){"use strict";var a=n(7),o=n(49),r=n(0),c=n.n(r),i=n(1),l=n.n(i),s=n(33),h=n.n(s),u=n(693),g={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:u.p,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,n=e.cssModule,r=e.row,i=e.disabled,l=e.check,s=e.inline,g=e.tag,m=Object(o.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),d=Object(u.l)(h()(t,!!r&&"row",l?"form-check":"form-group",!(!l||!s)&&"form-check-inline",!(!l||!i)&&"disabled"),n);return c.a.createElement(g,Object(a.a)({},m,{className:d}))};m.propTypes=g,m.defaultProps={tag:"div"},t.a=m},766:function(e,t,n){"use strict";var a=n(7),o=n(49),r=n(0),c=n.n(r),i=n(1),l=n.n(i),s=n(33),h=n.n(s),u=n(699),g=n.n(u),m=n(693),d=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.string,l.a.number,l.a.shape({size:d,push:Object(m.g)(d,'Please use the prop "order"'),pull:Object(m.g)(d,'Please use the prop "order"'),order:d,offset:d})]),p={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:m.p,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},y=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},v=function(e){var t=e.className,n=e.cssModule,r=e.hidden,i=e.widths,l=e.tag,s=e.check,u=e.size,d=e.for,f=Object(o.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];i.forEach(function(t,a){var o=e[t];if(delete f[t],o||""===o){var r,c=!a;if(g()(o)){var i,l=c?"-":"-"+t+"-";r=y(c,t,o.size),p.push(Object(m.l)(h()(((i={})[r]=o.size||""===o.size,i["order"+l+o.order]=o.order||0===o.order,i["offset"+l+o.offset]=o.offset||0===o.offset,i))),n)}else r=y(c,t,o),p.push(r)}});var b=Object(m.l)(h()(t,!!r&&"sr-only",!!s&&"form-check-label",!!u&&"col-form-label-"+u,p,!!p.length&&"col-form-label"),n);return c.a.createElement(l,Object(a.a)({htmlFor:d},f,{className:b}))};v.propTypes=p,v.defaultProps=b,t.a=v},857:function(e,t,n){"use strict";var a=n(7),o=n(49),r=n(10),c=n(234),i=n(0),l=n.n(i),s=n(1),h=n.n(s),u=n(33),g=n.n(u),m=n(693),d={children:h.a.node,type:h.a.string,size:h.a.string,bsSize:h.a.string,state:Object(m.g)(h.a.string,'Please use the props "valid" and "invalid" to indicate the state.'),valid:h.a.bool,invalid:h.a.bool,tag:m.p,innerRef:h.a.oneOfType([h.a.object,h.a.func,h.a.string]),static:Object(m.g)(h.a.bool,'Please use the prop "plaintext"'),plaintext:h.a.bool,addon:h.a.bool,className:h.a.string,cssModule:h.a.object},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(c.a)(Object(c.a)(n))),n.focus=n.focus.bind(Object(c.a)(Object(c.a)(n))),n}Object(r.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.type,c=e.bsSize,i=e.state,s=e.valid,h=e.invalid,u=e.tag,d=e.addon,f=e.static,p=e.plaintext,b=e.innerRef,y=Object(o.a)(e,["className","cssModule","type","bsSize","state","valid","invalid","tag","addon","static","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(r)>-1,x=new RegExp("\\D","g"),T=u||("select"===r||"textarea"===r?r:"input"),E="form-control";p||f?(E+="-plaintext",T=u||"input"):"file"===r?E+="-file":v&&(E=d?null:"form-check-input"),i&&"undefined"===typeof s&&"undefined"===typeof h&&("danger"===i?h=!0:"success"===i&&(s=!0)),y.size&&x.test(y.size)&&(Object(m.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=y.size,delete y.size);var O=Object(m.l)(g()(t,h&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,E),n);return("input"===T||u&&"function"===typeof u)&&(y.type=r),!y.children||p||f||"select"===r||"string"!==typeof T||"select"===T||(Object(m.r)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete y.children),l.a.createElement(T,Object(a.a)({},y,{ref:b,className:O}))},t}(l.a.Component);f.propTypes=d,f.defaultProps={type:"text"},t.a=f},870:function(e,t,n){},939:function(e,t,n){"use strict";n.r(t);var a=n(9),o=n(51),r=n(77),c=n(79),i=n(78),l=n(37),s=(n(734),n(0)),h=n.n(s),u=n(236),g=n(704),m=n.n(g),d=n(701),f=n.n(d),p=n(63),b=n(235),y=n(713),v=n(80),x=n(165),T=n(743),E=n(725),O=n(765),S=n(766),j=n(857),H=(n(870),n(50)),N=n.n(H),w=n(695);function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var k=function(e){Object(c.a)(n,e);var t=D(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).deleteSanPhamIn=function(){var t=e.props,n=t.index,a=t.sanpham;window.confirm('X\xe1c nh\u1eadn x\xf3a s\u1ea3n ph\u1ea9m "'.concat(a.tenSanPham,'" ra kh\u1ecfi \u0111\u01a1n h\xe0ng?'))&&e.props.deleteSanPhamIn({index:n})},e.onChangeSanPham=function(t){var n=e.props,a=n.index;(0,n.onChangeSanPhamIn)({name:t.target.name,value:t.target.value,index:a})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.index,t=this.props.sanpham,n=t.moTa,a=t.donGia,o=t.thanhTien,r=t.donViTinh,c=t.soLuong,i=t.tenSanPham;return h.a.createElement("div",null,h.a.createElement(O.a,{row:!0},h.a.createElement(E.a,{xs:"12"},h.a.createElement(S.a,null,h.a.createElement("strong",null,"S\u1ea3n ph\u1ea9m ",e+1,":"),h.a.createElement(y.a,{size:"sm",color:"danger",className:"ml-2",disabled:!this.props.isDeleted,onClick:this.deleteSanPhamIn},h.a.createElement("i",{className:"fa fa-trash"})," X\xf3a"))),h.a.createElement(E.a,{xs:"4",style:{paddingRight:0}},h.a.createElement(S.a,null,"T\xean"),h.a.createElement(j.a,{className:"form-control",name:"tenSanPham",value:i,onChange:this.onChangeSanPham})),h.a.createElement(E.a,{xs:"2",style:{paddingRight:0}},h.a.createElement(S.a,{htmlFor:"donViTinh"},"\u0110VT"),h.a.createElement(j.a,{type:"text",name:"donViTinh",id:"donViTinh",value:r,onChange:this.onChangeSanPham})),h.a.createElement(E.a,{xs:"3"},h.a.createElement(S.a,{htmlFor:"soLuong"},"SL"),h.a.createElement(j.a,{type:"number",name:"soLuong",id:"soluong",min:"0",step:"1 ",value:c,onChange:this.onChangeSanPham})),h.a.createElement(E.a,{xs:"3"},h.a.createElement(S.a,{htmlFor:"donGia"},"\u0110\u01a1n gi\xe1: ",h.a.createElement("strong",null,Object(w.h)(a))),h.a.createElement(j.a,{type:"number",name:"donGia",id:"dongia",min:"0",step:"100",value:a,onChange:this.onChangeSanPham}))),h.a.createElement(O.a,{row:!0},h.a.createElement(E.a,{xs:"8"},h.a.createElement(S.a,{htmlFor:"moTa"},"M\xf4 t\u1ea3 s\u1ea3n ph\u1ea7m"),h.a.createElement("textarea",{className:"form-control",rows:"1",name:"moTa",id:"moTa",value:n,onChange:this.onChangeSanPham})),h.a.createElement(E.a,{xs:"4"},h.a.createElement(S.a,{htmlFor:"thanhtien"},"Th\xe0nh ti\u1ec1n"),h.a.createElement(O.a,{className:"thanhtien"},h.a.createElement("h5",null,h.a.createElement("strong",null,Object(w.h)(o)))))))}}]),n}(s.Component),P=n(731),C=n(717),z=n(24),R=n(7),M=n(49),A=n(1),U=n.n(A),L=n(33),B=n.n(L),I=n(693),G={tag:I.p,flush:U.a.bool,className:U.a.string,cssModule:U.a.object},K=function(e){var t=e.className,n=e.cssModule,a=e.tag,o=e.flush,r=Object(M.a)(e,["className","cssModule","tag","flush"]),c=Object(I.l)(B()(t,"list-group",!!o&&"list-group-flush"),n);return h.a.createElement(a,Object(R.a)({},r,{className:c}))};K.propTypes=G,K.defaultProps={tag:"ul"};var V=K,_={tag:I.p,active:U.a.bool,disabled:U.a.bool,color:U.a.string,action:U.a.bool,className:U.a.any,cssModule:U.a.object},F=function(e){e.preventDefault()},W=function(e){var t=e.className,n=e.cssModule,a=e.tag,o=e.active,r=e.disabled,c=e.action,i=e.color,l=Object(M.a)(e,["className","cssModule","tag","active","disabled","action","color"]),s=Object(I.l)(B()(t,!!o&&"active",!!r&&"disabled",!!c&&"list-group-item-action",!!i&&"list-group-item-"+i,"list-group-item"),n);return r&&(l.onClick=F),h.a.createElement(a,Object(R.a)({},l,{className:s}))};W.propTypes=_,W.defaultProps={tag:"li"};var X=W;function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var J=function(e){Object(c.a)(n,e);var t=Y(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={updatedDonHangs:{}},e.addDonHangElement=function(t){var n=t.donhang,o=e.state.updatedDonHangs;e.setState({updatedDonHangs:Object(a.a)({},o,Object(v.a)({},n.modifiedAt,Object(a.a)({},n)))})},e.chooseUpdatedOrder=function(t){var n=e.state.updatedDonHangs[t];e.props.chooseUpdatedOrder({donhang:n})},e.getDate=function(t){var n=e.state.updatedDonHangs[t],a=new Date(t),o=n.createAt===n.modifiedAt?"T\u1ea1o ng\xe0y":"S\u1eeda ng\xe0y";return"".concat(o,": ").concat(a.getDate(),"-").concat(a.getMonth()+1,"-").concat(a.getFullYear()," L\xfac: ").concat(a.getHours(),":").concat(a.getMinutes()," b\u1edfi: ").concat(n.modifiedBy)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.firebase,a=t.donhang,o="/updatedDonHangs/".concat(a.maDonHang);this.listen=n.db.ref(o),this.listen.on("child_added",function(t){var n=t.val();e.addDonHangElement({donhang:n})})}},{key:"componentWillUnmount",value:function(){this.listen.off()}},{key:"render",value:function(){var e=this,t=this.state.updatedDonHangs,n=Object(x.toArray)(t).sort(function(e,t){return t.modifiedAt-e.modifiedAt});return t?h.a.createElement(V,null,n.map(function(t){return h.a.createElement(X,{action:!0,onClick:function(){return e.chooseUpdatedOrder(t.modifiedAt)},key:t.modifiedAt},e.getDate(t.modifiedAt))})):h.a.createElement("div",{className:"text-center"},"Ch\u01b0a ch\u1ec9nh s\u1eeda")}}]),n}(s.Component),Q=n(345);function $(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw r}}}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var ee=function(e){return Object(x.get)(e,[z.d.sanPhams.id],[]).reduce(function(e,t){return e+Object(x.get)(t,["thanhTien"],0)},0)},te=function(e){Object(c.a)(n,e);var t=Z(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={newDonHang:null},e.onChange=function(t){var n=t.target,o=n.name,r=n.value;e.setState({newDonHang:Object(a.a)({},e.state.newDonHang,Object(v.a)({},o,r))})},e.onChangeTamUng=function(t){if(e.props.donhang.trangThai!==z.c&&e.props.donhang.trangThai!==z.b){var n=e.state.newDonHang,o=t.target.value;o>n.tongTien&&(o=n.tongTien),n.conLai=Number(n.tongTien)-Number(o),e.setState({newDonHang:Object(a.a)({},n,{tamUng:o})})}},e.checkTamUng=function(t){if(e.props.donhang.trangThai!==z.c&&e.props.donhang.trangThai!==z.b){var n=e.props.donhang,o=e.state.newDonHang,r=Number(t.target.value);r<0&&(r=n.tamUng,o.conLai=Number(o.tongTien)-Number(r),e.setState({newDonHang:Object(a.a)({},o,{tamUng:r})}))}},e.onChangeSanPhamIn=function(t){var n=t.name,o=t.value,r=t.index;if(e.props.donhang.trangThai!==z.c&&e.props.donhang.trangThai!==z.b){var c=e.state.newDonHang,i=c.sanPhams;i[r][n]=o,i[r].thanhTien=Number(i[r].soLuong)*Number(i[r].donGia),c.tongTien=0;var l,s=$(i);try{for(s.s();!(l=s.n()).done;){var h=l.value;c.tongTien+=h.thanhTien}}catch(u){s.e(u)}finally{s.f()}c.conLai=Number(c.tongTien)-Number(c.tamUng),e.setState({newDonHang:Object(a.a)({},c,{sanPhams:i})})}},e.onChangeKhachHang=function(t){if(e.props.donhang.trangThai!==z.c&&e.props.donhang.trangThai!==z.b){var n=e.state.newDonHang,o=t.target.value,r=t.target.name;e.setState({newDonHang:Object(a.a)({},n,{khachhang:Object(a.a)({},e.state.khachhang,Object(v.a)({},r,o))})})}},e.onBlurKhachHang=function(){if(e.props.donhang.trangThai!==z.c&&e.props.donhang.trangThai!==z.b){var t=e.state,n=t.newDonHang.khachhang,o=t.newDonHang,r=e.props,c=r.customers,i=r.donhang;Object(x.isEmpty)(c[n.congTy])?e.setState({newDonHang:Object(a.a)({},o,{khachhang:i.khachhang})}):e.setState({newDonHang:Object(a.a)({},o,{khachhang:c[n.congTy]})})}},e.renderCustomerDatalist=function(){var t=e.props.customers,n=[];return t&&Object(x.forEach)(t,function(e){n.push(h.a.createElement("option",{key:e.congTy,value:e.congTy}))}),n},e.deleteSanPhamIn=function(t){var n=t.index;if(e.props.donhang.trangThai!==z.c&&e.props.donhang.trangThai!==z.b){var a=e.state.newDonHang,o=Object(x.get)(a,[z.d.tamUng.id],0);a[z.d.sanPhams.id]=a.sanPhams.filter(function(e,t){return t!==n}),a[z.d.tongTien.id]=ee(a),a[z.d.conLai.id]=ee(a)-o,e.setState({newDonHang:a})}},e.addNewSanPhamIn=function(){if(e.props.donhang.trangThai!==z.c&&e.props.donhang.trangThai!==z.b){var t=e.state.newDonHang;t.sanPhams.push(new P.c),e.setState({newDonHang:t})}},e.updateDonHangHandle=function(){if(e.props.donhang.trangThai!==z.c&&e.props.donhang.trangThai!==z.b){var t=e.state.newDonHang;e.props.updateDonHangHandle({newDonHang:t})}},e.resetDonHang=function(){if(e.props.donhang.trangThai!==z.c&&e.props.donhang.trangThai!==z.b){var t=e.props.donhang;if(!window.confirm("X\xe1c nh\u1eadn h\u1ee7y nh\u1eefng thay \u0111\u1ed5i trong \u0111\u01a1n h\xe0ng."))return null;var n=Object(a.a)({},e.props.donhang,{sanPhams:t.sanPhams.map(function(e){return Object(a.a)({},e)})});e.setState({newDonHang:n})}},e.chooseUpdatedOrder=function(t){var n=t.donhang,a=Object(x.cloneDeep)(n);e.setState({newDonHang:a})},e.renderThongTin=function(){var t=e.state.newDonHang,n=new Date(t.modifiedAt),a=t.createAt===t.modifiedAt?"T\u1ea1o ng\xe0y":"S\u1eeda ng\xe0y";return"".concat(a,": ").concat(n.getDate(),"-").concat(n.getMonth()+1,"-").concat(n.getFullYear()," L\xfac: ").concat(n.getHours(),":").concat(n.getMinutes()," b\u1edfi: ").concat(t&&t.modifiedBy?t.modifiedBy:"admin")},e}return Object(r.a)(n,[{key:"componentWillMount",value:function(){var e=this.props.donhang,t=Object(a.a)({},this.props.donhang,{sanPhams:e.sanPhams.map(function(e){return Object(a.a)({},e)})});Object(x.isEmpty)(t.tamUng)&&(t.tamUng=0),this.setState({newDonHang:t})}},{key:"componentDidMount",value:function(){N.a.findDOMNode(this.refs.khachHangRef).setAttribute("autocomplete","off")}},{key:"render",value:function(){var e=this,t=this.props.donhang,n=this.state.newDonHang,a=this.state.newDonHang,o=a.tamUng,r=a.conLai,c=a.trangThai,i=n.sanPhams.length>1,l=Object(x.get)(n,[z.d.khachhang.id],{}),s=z.b===t.trangThai||t.trangThai===z.c;return h.a.createElement("div",{className:"mt-2"},h.a.createElement(T.a,null,h.a.createElement(E.a,{sm:"12"},h.a.createElement("div",{className:"py-2"},this.renderThongTin()))),h.a.createElement(T.a,null,h.a.createElement(E.a,{sm:"9"},h.a.createElement("div",{className:"detail__left mb-3 p-2"},h.a.createElement(T.a,null,h.a.createElement(E.a,{sm:"3"},h.a.createElement(O.a,null,h.a.createElement(S.a,{htmlFor:"congTy"},"Kh\xe1ch H\xe0ng"),h.a.createElement(j.a,{type:"text",name:"congTy",id:"congTy",tabIndex:1,value:l.congTy,list:"customers",onChange:this.onChangeKhachHang,onBlur:this.onBlurKhachHang,ref:"khachHangRef"}),h.a.createElement("datalist",{id:"customers"},this.renderCustomerDatalist()))),h.a.createElement(E.a,{sm:"3"},h.a.createElement(O.a,null,h.a.createElement(S.a,{htmlFor:"soDienThoai"},"\u0110i\u1ec7n Tho\u1ea1i"),h.a.createElement(j.a,{value:l.soDienThoai,type:"phone",name:"soDienThoai",id:"soDienThoai",placeholder:"s\u1ed1 \u0111i\u1ec7n tho\u1ea1i",disabled:!0}))),h.a.createElement(E.a,{sm:"2"},h.a.createElement(O.a,null,h.a.createElement(S.a,{htmlFor:"trangThai"},"Tr\u1ea1ng th\xe1i"),h.a.createElement("div",null,h.a.createElement(C.a,{trangThai:c})))),h.a.createElement(E.a,{sm:"4"},h.a.createElement(O.a,null,h.a.createElement(S.a,{htmlFor:"ghiChu"},"Ghi ch\xfa"),h.a.createElement("textarea",{id:"ghiChu",className:"form-control",name:[z.d.ghiChuKhachHang.id],value:Object(x.get)(n,[z.d.ghiChuKhachHang.id],""),onChange:this.onChange})))),h.a.createElement(T.a,null,h.a.createElement(E.a,{sm:"12"},h.a.createElement("h5",{className:"text-center sanphaminStyle"},"S\u1ea3n ph\u1ea9m in"),n.sanPhams.map(function(t,n){return h.a.createElement(k,{key:n,sanpham:t,index:n,onChangeSanPhamIn:e.onChangeSanPhamIn,deleteSanPhamIn:e.deleteSanPhamIn,isDeleted:i})}))),h.a.createElement("hr",null),h.a.createElement(T.a,null,h.a.createElement(E.a,{sm:"4"},h.a.createElement(S.a,null,"T\u1ed5ng ti\u1ec1n"),h.a.createElement(O.a,null,h.a.createElement("h5",{className:"text-danger"},h.a.createElement("strong",null,Object(w.h)(n[z.d.tongTien.id]))))),h.a.createElement(E.a,{sm:"4"},h.a.createElement(S.a,{htmlFor:"tamUng"},"T\u1ea1m \u1ee9ng: ",h.a.createElement("strong",{className:"text-danger"},Object(w.h)(o))),h.a.createElement(O.a,null,h.a.createElement(j.a,{type:"number",name:"tamUng",id:"tamUng",value:o||"",onChange:this.onChangeTamUng,onBlur:this.checkTamUng,min:"0",step:"1"}))),h.a.createElement(E.a,{sm:"4"},h.a.createElement(S.a,null,"C\xf2n l\u1ea1i"),h.a.createElement(O.a,{className:"conLai"},h.a.createElement("h5",{className:"text-danger"},h.a.createElement("strong",null,Object(w.h)(r)))))),h.a.createElement(O.a,{row:!0},h.a.createElement(E.a,{xs:"12"},h.a.createElement(y.a,{size:"sm",outline:!0,color:"warning",onClick:this.addNewSanPhamIn,className:"mr-1",disabled:s},h.a.createElement("i",{className:"fa fa-plus"})," Th\xeam s\u1ea3n ph\u1ea9m in"),h.a.createElement(y.a,{size:"sm",outline:!0,color:"danger",className:"mr-1",onClick:this.resetDonHang,disabled:s},"H\u1ee7y thay \u0111\u1ed5i"),h.a.createElement(y.a,{size:"sm",color:"success",className:"mr-1",onClick:this.updateDonHangHandle,disabled:s},h.a.createElement("i",{className:"fa fa-save"})," L\u01b0u thay \u0111\u1ed5i"),h.a.createElement(y.a,{size:"sm",outline:!0,color:"success",onClick:function(){return Object(Q.a)({donhang:n,khachhang:l})}},h.a.createElement("i",{className:"fa fa-print"})," In"))))),h.a.createElement(E.a,{sm:"3"},h.a.createElement("div",{className:"detail__right p-2"},h.a.createElement(J,{donhang:this.props.donhang,firebase:this.props.firebase,chooseUpdatedOrder:this.chooseUpdatedOrder})))))}}]),n}(s.Component),ne=n(702),ae=n(239);function oe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}n.d(t,"ChiTietDonHang",function(){return re});var re=function(e){Object(c.a)(n,e);var t=oe(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={donhang:null,isDonhang:!0,isEdit:!1},e.updateDonHangHandle=function(t){for(var n=t.newDonHang,o=e.props.firebase.auth.currentUser.email,r=f()(n,[z.d.sanPhams.id],[]),c=0;c<r.length;c++){var i=r[c];if(m()(i.tenSanPham)||m()(i.soLuong)||m()(i.donViTinh)||m()(i.donGia))return ae.toast.error("S\u1ea3n ph\u1ea9m ".concat(c+1," thi\u1ebfu d\u1eef li\u1ec7u.")),null}if(!window.confirm("X\xe1c nh\u1eadn l\u01b0u thay \u0111\u1ed5i"))return null;n.modifiedAt=(new Date).getTime(),n.modifiedBy=o,n.isUpdated="\u0110\xe3 ch\u1ec9nh s\u1eeda",n.sanPhamsName="",n.sanPhams.forEach(function(e){n.sanPhamsName+="".concat(e.tenSanPham,", ")}),e.props.updateDonHang({newDonHang:n}),e.setState({donhang:Object(a.a)({},n,{sanPhams:n.sanPhams.map(function(e){return Object(a.a)({},e)})})}),ae.toast.success("Update th\xe0nh c\xf4ng!")},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.firebase,n=this.props.match.params,a=f()(n,"id",""),o=["donhangs",a.slice(0,4),a];t.db.ref(o.join("/")).once("value").then(function(t){var n=t.val(),a=!!n;e.setState({donhang:n,isDonhang:a})}),window.scrollBy(-1e4,-1e4),this.props.getCustomers()}},{key:"render",value:function(){var e=this.state,t=e.donhang,n=e.isDonhang,a=this.props.match.params.id;return console.log(t),h.a.createElement("div",{className:"donhang"},h.a.createElement("div",{className:"donhang__header"},h.a.createElement(y.a,{onClick:this.props.history.goBack,color:"warning",size:"sm",className:"mr-2"},h.a.createElement("i",{className:"fa fa-long-arrow-left"})," Quay l\u1ea1i"),h.a.createElement("h5",{className:"donhang__header__title"},"\u0110\u01a1n h\xe0ng ",a)),h.a.createElement("div",{className:"donhang__content"},t?h.a.createElement(te,Object.assign({donhang:this.state.donhang,customers:this.props.customers,updateDonHangHandle:this.updateDonHangHandle},this.props)):h.a.createElement("h4",{className:"mt-4 text-center"},n?"\u0110ang l\u1ea5y d\u1eef li\u1ec7u":"\u0110\u01a1n h\xe0ng kh\xf4ng t\u1ed3n t\u1ea1i")))}}]),n}(s.Component),ce=Object(u.a)(Object(b.b)(function(e){return{donhangs:e.sacMauMoi.donhangs,customers:e.sacMauMoi.customers}},{getDonHangs:ne.e,getCustomers:ne.a,updateDonHang:ne.f}),p.c);t.default=ce(re)}}]);