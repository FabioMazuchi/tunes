(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{32:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(22),s=n.n(c),i=(n(32),n(18)),o=n(3),u=n(4),l=n(6),d=n(5),j=n(7),h=n(25),b=n(2),O=n.n(b),p=n(10),m=n(8),f=n(17),v=n(0),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("header",{"data-testid":"header-component",children:Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{children:[Object(v.jsx)(f.a,{"data-testid":"link-to-search",to:"/search",children:"Procurar"}),Object(v.jsx)(f.a,{"data-testid":"link-to-favorites",to:"/favorites",children:"Favoritas"})]})})})}}]),n}(a.Component),g=x,k=n(14),S=n(26),y="favorite_songs";JSON.parse(localStorage.getItem(y))||localStorage.setItem(y,JSON.stringify([]));var N=function(){return JSON.parse(localStorage.getItem(y))},C=function(e){return localStorage.setItem(y,JSON.stringify(e))},w=function(e){return function(t){setTimeout((function(){t(e)}),500)}},I=function(){return new Promise((function(e){var t=N();w(t)(e)}))},F=function(e){return new Promise((function(t){if(e){var n=N();C([].concat(Object(S.a)(n),[e]))}w("OK")(t)}))},D=function(e){return new Promise((function(t){var n=N();C(n.filter((function(t){return t.trackId!==e.trackId}))),w("OK")(t)}))},P=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={favoritCheck:!1,loading:!1},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.addSongFavorite=e.addSongFavorite.bind(Object(m.a)(e)),e.removeSongFavorite=e.removeSongFavorite.bind(Object(m.a)(e)),e.setObjOnSetState=e.setObjOnSetState.bind(Object(m.a)(e)),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.requestSongs()}},{key:"handleChange",value:function(e){var t=this,n=e.target,a=n.name,r=n.checked;this.setState(Object(k.a)({},a,r),(function(){return t.setObjOnSetState(n)}))}},{key:"setObjOnSetState",value:function(e){var t=this.props.songs,n=Number(e.getAttribute("data-testid").split("-")[2]),a=t.find((function(e){return e.trackId===n}));e.checked?this.addSongFavorite(a):this.removeSongFavorite(a)}},{key:"requestSongs",value:function(){var e=Object(p.a)(O.a.mark((function e(){var t,n=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.trackId,e.next=3,I();case 3:e.sent.forEach((function(e){e.trackId===t&&n.setState({favoritCheck:!0})}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeSongFavorite",value:function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,D(t);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addSongFavorite",value:function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,F(t);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.previewUrl,n=e.trackId,a=e.trackName,r=this.state.favoritCheck;return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"songsSingle",children:[Object(v.jsx)("p",{children:a}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("audio",{"data-testid":"audio-component",src:t,controls:!0,children:[Object(v.jsx)("track",{kind:"captions"}),Object(v.jsx)("code",{children:"audio"})]}),Object(v.jsxs)("label",{htmlFor:n,children:[Object(v.jsx)("input",{id:n,checked:r,name:"favoritCheck",onChange:this.handleChange,type:"checkbox","data-testid":"checkbox-music-".concat(n)}),r?Object(v.jsx)("i",{className:"fas fa-heart"}):Object(v.jsx)("i",{className:"far fa-heart"})]})]})]})})}}]),n}(a.Component),R=P,A=function(){var e=Object(p.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=A,q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("footer",{children:Object(v.jsx)("p",{children:"F\xe1bio Mazuchi | ".concat((new Date).getFullYear())})})}}]),n}(a.Component),J=q,M=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"loading",children:"Carregando..."})}}]),n}(a.Component),L=M,T=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={songs:[],artisName:"",albumName:"",loading:!1},e.callApi=e.callApi.bind(Object(m.a)(e)),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.callApi()}},{key:"callApi",value:function(){var e=Object(p.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),t=this.props.match.params.id,e.next=4,U(t);case 4:n=e.sent,this.setState({songs:n,artisName:n[0].artistName,albumName:n[0].collectionName,imgAlbum:n[0].artworkUrl100}),this.setState({loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.songs,n=e.artisName,a=e.albumName,r=e.imgAlbum,c=e.loading;return Object(v.jsxs)("div",{children:[Object(v.jsx)(g,{}),c?Object(v.jsx)(L,{}):Object(v.jsxs)("div",{"data-testid":"page-album",className:"albumTracks",children:[Object(v.jsxs)("section",{className:"tituloImagem",children:[Object(v.jsx)("img",{src:r,alt:"imagem"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{"data-testid":"artist-name",children:n}),Object(v.jsx)("h4",{"data-testid":"album-name",children:a})]})]}),Object(v.jsx)("section",{className:"containerSongs",children:t.filter((function(e){return void 0!==e.kind})).map((function(e,n){return Object(v.jsx)(R,{track:n+1,previewUrl:e.previewUrl,trackId:e.trackId,trackName:e.trackName,songs:t},e.trackId)}))})]}),Object(v.jsx)(J,{})]})}}]),n}(a.Component),E=T,B=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={favoritCheck:!0,favSongs:[],loading:!1},e.removeSongFavorite=e.removeSongFavorite.bind(Object(m.a)(e)),e.getFav=e.getFav.bind(Object(m.a)(e)),e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.setObjOnSetState=e.setObjOnSetState.bind(Object(m.a)(e)),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getFav()}},{key:"componentDidUpdate",value:function(e,t){t.favoritCheck||this.getFav()}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.checked;this.setState(Object(k.a)({},n,a),this.setObjOnSetState(t))}},{key:"getFav",value:function(){var e=Object(p.a)(O.a.mark((function e(){var t=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.t0=this,e.next=4,I();case 4:e.t1=e.sent,e.t2={favSongs:e.t1},e.t3=function(){return t.setState({loading:!1})},e.t0.setState.call(e.t0,e.t2,e.t3);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setObjOnSetState",value:function(e){var t=this.state.favSongs,n=Number(e.getAttribute("data-testid").split("-")[2]),a=t.find((function(e){return e.trackId===n}));this.removeSongFavorite(a)}},{key:"removeSongFavorite",value:function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,D(t);case 3:this.setState({loading:!1,favoritCheck:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.favSongs,a=t.favoritCheck,r=t.loading,c=t.trackId;return Object(v.jsxs)("div",{"data-testid":"page-favorites",children:[Object(v.jsx)(g,{}),0===n.length&&"",r?Object(v.jsx)(L,{}):Object(v.jsxs)("div",{className:"favorites",children:[Object(v.jsx)("h1",{children:"M\xfasicas Favoritas"}),n.map((function(t){return Object(v.jsx)("div",{className:"songsSingle",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:t.artworkUrl60,alt:t.trackName}),Object(v.jsxs)("section",{children:[Object(v.jsx)("p",{children:t.trackName}),Object(v.jsxs)("audio",{"data-testid":"audio-component",src:t.previewUrl,controls:!0,children:[Object(v.jsx)("track",{kind:"captions"}),Object(v.jsx)("code",{children:"audio"})]})]}),Object(v.jsxs)("label",{htmlFor:c,children:[Object(v.jsx)("input",{id:c,checked:a,name:"favoritCheck",onChange:e.handleChange,type:"checkbox","data-testid":"checkbox-music-".concat(t.trackId)}),a?Object(v.jsx)("i",{className:"fas fa-heart"}):Object(v.jsx)("i",{className:"far fa-heart"})]})]})},t.trackId)}))]}),Object(v.jsx)(J,{})]})}}]),n}(a.Component),K=B,z=n(27),Q="user",Y=function(e){return localStorage.setItem(Q,JSON.stringify(e))},_=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},G=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(Q));null===t&&(t={}),_(t)(e)}))},H=function(e){return new Promise((function(t){Y(Object(i.a)(Object(i.a)({},{name:"",email:"",image:"",description:""}),e)),_("OK")(t)}))},V=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={nome:"",isDisabled:!0,logado:!1},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.validateinputs=e.validateinputs.bind(Object(m.a)(e)),e.changeRoute=e.changeRoute.bind(Object(m.a)(e)),e.handleLogin=e.handleLogin.bind(Object(m.a)(e)),e}return Object(u.a)(n,[{key:"handleChange",value:function(e){var t=this,n=e.target,a=n.name,r=n.value;this.setState(Object(k.a)({},a,r),(function(){return t.validateinputs()}))}},{key:"handleLogin",value:function(){var e=Object(p.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state.nome,this.setState({logado:!0}),e.next=5,H({name:n});case 5:this.changeRoute(t);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"validateinputs",value:function(){this.state.nome.length>=3?this.setState({isDisabled:!1}):this.setState({isDisabled:!0})}},{key:"changeRoute",value:function(e){e.preventDefault(),this.props.history.push("/search")}},{key:"render",value:function(){var e=this.state,t=e.nome,n=e.isDisabled,a=e.logado;return Object(v.jsx)("div",{className:"login","data-testid":"page-login",children:a?Object(v.jsx)(L,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"div-login",children:[Object(v.jsxs)("h1",{children:["Trybetunes",Object(v.jsx)("span",{children:Object(v.jsx)(z.a,{})})]}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"Liste os \xe1lbuns de um artista, banda, dupla etc."}),Object(v.jsx)("li",{children:"Ou\xe7a por 30 segundos as faixas de um \xe1lbum."}),Object(v.jsx)("li",{children:"Confira os nomes das m\xfasicas em um \xe1lbum."})]})]}),Object(v.jsxs)("form",{className:"login",children:[Object(v.jsxs)("label",{htmlFor:"nome",children:["Qual \xe9 o seu nome?",Object(v.jsx)("input",{"data-testid":"login-name-input",type:"text",name:"nome",value:t,onChange:this.handleChange,id:"nome"})]}),Object(v.jsx)("button",{"data-testid":"login-submit-button",onClick:this.handleLogin,type:"submit",disabled:n,children:"Entrar"})]})]})})}}]),n}(a.Component),W=V,X=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{"data-testid":"page-not-found",children:Object(v.jsx)("h1",{children:"404 P\xe1gina n\xe3o encontrada"})})}}]),n}(a.Component),Z=X,$=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{"data-testid":"page-profile",children:[Object(v.jsx)(g,{}),Object(v.jsx)("h1",{children:"Profile"})]})}}]),n}(a.Component),ee=$,te=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(v.jsx)(g,{}),Object(v.jsx)("h1",{children:"Profile Edit"})]})}}]),n}(a.Component),ne=te,ae=function(){var e=Object(p.a)(O.a.mark((function e(t){var n,a,r,c,s,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(t).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),e.next=4,fetch(a);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,s=c.results,i=s.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=ae,ce={userName:"",loading:!0,artistName:"",isDisabled:!0,loadingPesquisa:!1,responseApi:!1,artisNameShow:"",albuns:[]},se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(k.a)({},a,r),(function(){return e.validateinputs()}))},e.handleRequest=Object(p.a)(O.a.mark((function t(){var n,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.artistName,e.setState({artistName:"",loadingPesquisa:!0,responseApi:!1,artisNameShow:n}),t.next=4,re(n);case 4:a=t.sent,e.setState({loadingPesquisa:!1,responseApi:!0,albuns:a});case 6:case"end":return t.stop()}}),t)}))),e.validateinputs=function(){e.state.artistName.length>=2?e.setState({isDisabled:!1}):e.setState({isDisabled:!0})},e.state=ce,e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.renderUser()}},{key:"renderUser",value:function(){var e=Object(p.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:t=e.sent,n=t.name,this.setState({userName:n,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.userName,n=e.loading,a=e.artistName,r=e.isDisabled,c=e.loadingPesquisa,s=e.responseApi,i=e.artisNameShow,o=e.albuns;return Object(v.jsxs)("div",{className:"search","data-testid":"page-search",children:[Object(v.jsx)(g,{}),n?Object(v.jsx)(L,{}):Object(v.jsx)("h2",{"data-testid":"header-user-name",children:"Bem vindo(a) ".concat(t)}),c?Object(v.jsx)(L,{}):Object(v.jsxs)("form",{className:"search",children:[Object(v.jsx)("input",{name:"artistName","data-testid":"search-artist-input",type:"text",placeholder:"Digite aqui sua pesquisa",onChange:this.handleChange,value:a}),Object(v.jsx)("button",{disabled:r,"data-testid":"search-artist-button",type:"reset",onClick:this.handleRequest,children:"Pesquisar"})]}),s&&Object(v.jsx)("section",{className:"container",children:0===o.length?Object(v.jsx)("div",{className:"nenhumAlbum",children:Object(v.jsx)("span",{children:"Nenhum \xe1lbum foi encontrado"})}):Object(v.jsxs)("section",{children:[Object(v.jsx)("h3",{children:"Resultado de \xe1lbuns de ".concat(i)}),Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"albuns",children:o.map((function(e){return Object(v.jsxs)(f.a,{"data-testid":"link-to-album-".concat(e.collectionId),to:"/album/".concat(e.collectionId),children:[Object(v.jsx)("img",{src:e.artworkUrl100,alt:e.collectionName}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"".concat(e.artistName)}),Object(v.jsx)("p",{children:e.collectionName})]})]},e.id)}))})})]})}),Object(v.jsx)(J,{})]})}}]),n}(a.Component),ie=se,oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(h.BrowserRouter,{children:Object(v.jsxs)(j.Switch,{children:[Object(v.jsx)(j.Route,{exact:!0,path:"/trybetunes",component:W}),Object(v.jsx)(j.Route,{exact:!0,path:"/search",component:ie}),Object(v.jsx)(j.Route,{path:"/album/:id",render:function(e){return Object(v.jsx)(E,Object(i.a)({},e))}}),Object(v.jsx)(j.Route,{exact:!0,path:"/favorites",component:K}),Object(v.jsx)(j.Route,{exact:!0,path:"/profile/edit",component:ne}),Object(v.jsx)(j.Route,{exact:!0,path:"/profile",component:ee}),Object(v.jsx)(j.Route,{exact:!0,path:"*",component:Z})]})})})}}]),n}(r.a.Component),ue=oe;s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(ue,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.eae91dfc.chunk.js.map