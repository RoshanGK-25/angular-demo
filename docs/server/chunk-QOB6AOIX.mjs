import './polyfills.server.mjs';
import{A as me,B as ge,C as s,D as a,E as u,F as ve,G as _,H as K,I as l,J as f,K as ye,L as g,N as _e,T as Ce,V as be,W as Ve,X as De,Y as Me,Z as Ee,_ as we,a as F,b as oe,ba as Ae,c as x,d as se,e as ae,f as I,fa as V,g as k,ga as Fe,h as le,i as z,ia as D,j as T,ja as xe,k as S,l as ue,m as de,n as m,o as U,p as j,q as ce,r as Z,s as Y,t as G,u as h,v as p,w as X,x as he,y as pe,z as fe}from"./chunk-MTMBQWKH.mjs";import{a as v,b}from"./chunk-VVCT4QZE.mjs";var Ie=(()=>{let e=class e{constructor(){this.title="angular-demo"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:1,vars:0,template:function(r,o){r&1&&u(0,"router-outlet")},dependencies:[Fe]});let t=e;return t})();var E=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://jsonplaceholder.typicode.com/",this.firebaseUrl="https://console.firebase.google.com/project/user-collection-98825/database/user-collection-98825-default-rtdb/data/~2F",this.httpOptions={headers:new be({"Content-type":"application/json"})}}getUsers(){return this.http.get(`${this.apiUrl}/users`).pipe(I(i=>i.status!=200?F:x(i)))}deleteUser(i){return this.http.delete(`${this.apiUrl}/users/`+i).pipe(I(r=>r.status!=200?F:x(r)))}updateUser(i,r){return this.http.put(`${this.apiUrl}/users/`+i,r).pipe(I(o=>o.status!==200?F:x(o)))}createUser(i){return this.http.post(`${this.firebaseUrl}/users`,i).pipe(I(r=>r.status!==200?F:x(r)))}};e.\u0275fac=function(r){return new(r||e)(ue(Ve))},e.\u0275prov=z({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function ft(t,e){if(t&1){let n=ve();s(0,"tr")(1,"td"),l(2),a(),s(3,"td"),l(4),a(),s(5,"td"),l(6),a(),s(7,"td"),l(8),a(),s(9,"td"),l(10),a(),s(11,"td"),l(12),a(),s(13,"td"),l(14),a(),s(15,"td"),l(16),a(),s(17,"td"),l(18),a(),s(19,"td"),l(20),a(),s(21,"td"),l(22),a(),s(23,"td",9)(24,"button",10),u(25,"i",11),a(),s(26,"button",12),_("click",function(){let r=Z(n).$implicit,o=K();return Y(o.editUser(r.id,r))}),u(27,"i",13),a(),s(28,"button",14),_("click",function(){let r=Z(n).$implicit,o=K();return Y(o.deleteUser(r.id))}),u(29,"i",15),a()()()}if(t&2){let n=e.$implicit;h(2),f(n.id),h(2),f(n.name),h(2),f(n.username),h(2),f(n.email),h(2),f(n.address.street),h(2),f(n.address.suite),h(2),f(n.address.city),h(2),f(n.address.zipcode),h(2),f(n.phone),h(2),f(n.website),h(2),f(n.company.name)}}var Oe=(()=>{let e=class e{constructor(i,r,o){this.user=i,this.router=r,this.route=o,this.userData=[],this.updateUser={}}ngOnInit(){this.getAllUsers(),this.routeTitle=this.route.snapshot.routeConfig?.title}getAllUsers(){return this.user.getUsers().subscribe(i=>{this.userData=i})}deleteUser(i){return this.user.deleteUser(i).subscribe(r=>{console.log(r),this.getAllUsers()})}editUser(i,r){return this.user.updateUser(i,r).subscribe(o=>{this.updateUser=o,console.log(this.updateUser)})}};e.\u0275fac=function(r){return new(r||e)(p(E),p(D),p(V))},e.\u0275cmp=m({type:e,selectors:[["app-index"]],inputs:{updateUser:"updateUser"},standalone:!0,features:[g],decls:33,vars:1,consts:[[1,"container"],[1,"row"],[1,"col"],["id","heading"],["id","user-table"],["id","tbl-heading"],["rowspan","2"],["colspan","4"],["id","tbl-body"],[1,"btn-group"],["id","edit"],[1,"fa-solid","fa-pen-to-square"],["id","view",3,"click"],[1,"fa-solid","fa-eye"],["id","delete",3,"click"],[1,"fa-solid","fa-trash"]],template:function(r,o){r&1&&(s(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),l(5),a()()()(),s(6,"div",0)(7,"div",1)(8,"div",2)(9,"table",4)(10,"thead",5)(11,"tr")(12,"td",6),l(13,"Id"),a(),s(14,"td",6),l(15,"Name"),a(),s(16,"td",6),l(17,"Username"),a(),s(18,"td",6),l(19,"Email"),a(),s(20,"td",7),l(21,"Address"),a(),s(22,"td",6),l(23,"Phone"),a(),s(24,"td",6),l(25,"Website"),a(),s(26,"td",6),l(27,"Company"),a(),s(28,"td",6),l(29,"Action"),a()()(),s(30,"tbody",8),me(31,ft,30,11,"tr",null,fe),a()()()()()()),r&2&&(h(5),f(o.routeTitle),h(26),ge(o.userData))},styles:["table#user-table[_ngcontent-%COMP%]{width:100%}#heading[_ngcontent-%COMP%]{font-size:40px;text-align:center;padding:30px 0}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid black}thead#tbl-heading[_ngcontent-%COMP%]{background-color:#202020;font-size:18px;color:#fff}thead#tbl-heading[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;text-align:center}tbody#tbl-body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:7px;text-align:center}tbody#tbl-body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#e6e6e6}.btn-group[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center;min-height:66px}button#edit[_ngcontent-%COMP%], button#delete[_ngcontent-%COMP%], button#view[_ngcontent-%COMP%]{font-size:18px;border-radius:10px;cursor:pointer;width:40px;height:40px}button#edit[_ngcontent-%COMP%]{background-color:#007bff;transition:all .2s ease}button#edit[_ngcontent-%COMP%]:hover{background-color:#007bffbc}button#delete[_ngcontent-%COMP%]{background-color:#dc3545;transition:all .2s ease}button#delete[_ngcontent-%COMP%]:hover{background-color:#dc3546b7}button#view[_ngcontent-%COMP%]{background-color:#5cb85a;transition:all .2s ease}button#view[_ngcontent-%COMP%]:hover{background-color:#5cb85ac0}"]});let t=e;return t})();function y(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Re(t){return t!=null&&typeof t.length=="number"}var mt=new S(""),gt=new S(""),vt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,d=class{static min(e){return yt(e)}static max(e){return _t(e)}static required(e){return Ct(e)}static requiredTrue(e){return bt(e)}static email(e){return Vt(e)}static minLength(e){return Dt(e)}static maxLength(e){return Mt(e)}static pattern(e){return Et(e)}static nullValidator(e){return Be(e)}static compose(e){return ze(e)}static composeAsync(e){return Ye(e)}};function yt(t){return e=>{if(y(e.value)||y(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function _t(t){return e=>{if(y(e.value)||y(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Ct(t){return y(t.value)?{required:!0}:null}function bt(t){return t.value===!0?null:{required:!0}}function Vt(t){return y(t.value)||vt.test(t.value)?null:{email:!0}}function Dt(t){return e=>y(e.value)||!Re(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function Mt(t){return e=>Re(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Et(t){if(!t)return Be;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(y(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Be(t){return null}function He(t){return t!=null}function Le(t){return _e(t)?oe(t):t}function $e(t){let e={};return t.forEach(n=>{e=n!=null?v(v({},e),n):e}),Object.keys(e).length===0?null:e}function qe(t,e){return e.map(n=>n(t))}function wt(t){return!t.validate}function We(t){return t.map(e=>wt(e)?e:n=>e.validate(n))}function ze(t){if(!t)return null;let e=t.filter(He);return e.length==0?null:function(n){return $e(qe(n,e))}}function Ze(t){return t!=null?ze(We(t)):null}function Ye(t){if(!t)return null;let e=t.filter(He);return e.length==0?null:function(n){let i=qe(n,e).map(Le);return ae(i).pipe(se($e))}}function Xe(t){return t!=null?Ye(We(t)):null}function Ne(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ke(t){return t._rawValidators}function Je(t){return t._rawAsyncValidators}function Q(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function Pe(t,e){let n=Q(e);return Q(t).forEach(r=>{B(n,r)||n.push(r)}),n}function ke(t,e){return Q(e).filter(n=>!B(t,n))}var ee=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ze(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Xe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},P=class extends ee{get formDirective(){return null}get path(){return null}};var te=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},At={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},bi=b(v({},At),{"[class.ng-submitted]":"isSubmitted"});var Qe=(()=>{let e=class e extends te{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(p(P,10))},e.\u0275dir=j({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&pe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[X]});let t=e;return t})();var O="VALID",R="INVALID",w="PENDING",N="DISABLED";function et(t){return(q(t)?t.validators:t)||null}function Ft(t){return Array.isArray(t)?Ze(t):t||null}function tt(t,e){return(q(e)?e.asyncValidators:t)||null}function xt(t){return Array.isArray(t)?Xe(t):t||null}function q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function It(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new k(1e3,"");if(!i[n])throw new k(1001,"")}function St(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new k(1002,"")})}var H=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===R}get pending(){return this.status==w}get disabled(){return this.status===N}get enabled(){return this.status!==N}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ke(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ke(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=w,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=N,this.errors=null,this._forEachChild(i=>{i.disable(b(v({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(b(v({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(i=>{i.enable(b(v({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(b(v({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===w)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=w,this._hasOwnPendingAsyncValidator=!0;let n=Le(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(w)?w:this._anyControlsHaveStatus(R)?R:O}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ft(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=xt(this._rawAsyncValidators)}},A=class extends H{constructor(e,n,i){super(et(n),tt(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){St(this,!0,e),Object.keys(e).forEach(i=>{It(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ie=new S("CallSetDisabledState",{providedIn:"root",factory:()=>W}),W="always";function Te(t,e,n=W){ne(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Nt(t,e),kt(t,e),Pt(t,e),Ot(t,e)}function Ue(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),$(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function L(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Ot(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ne(t,e){let n=Ke(t);e.validator!==null?t.setValidators(Ne(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Je(t);e.asyncValidator!==null?t.setAsyncValidators(Ne(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();L(e._rawValidators,r),L(e._rawAsyncValidators,r)}function $(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Ke(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(C=>C!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=Je(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(C=>C!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return L(e._rawValidators,i),L(e._rawAsyncValidators,i),n}function Nt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&it(t,e)})}function Pt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&it(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function it(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function kt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Tt(t,e){t==null,ne(t,e)}function Ut(t,e){return $(t,e)}function jt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Gt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function je(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ge(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var c=class extends H{constructor(e=null,n,i){super(et(n),tt(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ge(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){je(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){je(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ge(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Rt=t=>t instanceof c;var nt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=j({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Bt=new S("");var Ht={provide:P,useExisting:le(()=>re)},re=(()=>{let e=class e extends P{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new G,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&($(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Te(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Ue(i.control||null,i,!1),Gt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,jt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(Ue(r||null,i),Rt(o)&&(Te(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Tt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Ut(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ne(this.form,this),this._oldForm&&$(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(p(mt,10),p(gt,10),p(ie,8))},e.\u0275dir=j({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&_("submit",function(pt){return o.onSubmit(pt)})("reset",function(){return o.onReset()})},inputs:{form:[de.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[ye([Ht]),X,ce]});let t=e;return t})();var rt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=U({type:e}),e.\u0275inj=T({});let t=e;return t})();var ot=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ie,useValue:i.callSetDisabledState??W}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=U({type:e}),e.\u0275inj=T({imports:[rt]});let t=e;return t})(),st=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Bt,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:ie,useValue:i.callSetDisabledState??W}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=U({type:e}),e.\u0275inj=T({imports:[rt]});let t=e;return t})();var at=(()=>{let e=class e{constructor(i,r,o){this.route=i,this.user=r,this.router=o,this.createForm=new A({name:new c("name",[d.required]),username:new c("username",[d.required]),email:new c("email",[d.required,d.email]),street:new c("street",[d.required]),suite:new c("suite",[d.required]),city:new c("city",[d.required]),zipcode:new c("zipcode",[d.required]),phone:new c("phone",[d.required]),website:new c("website",[d.required]),companyName:new c("companyName",[d.required])})}ngOnInit(){this.routeTitle=this.route.snapshot.routeConfig?.title}onSubmit(i){return console.log(i),this.user.createUser(i).subscribe(r=>{r=this.createForm.value,console.log(r),console.log(this.createForm.value),this.router.navigate(["index"])})}};e.\u0275fac=function(r){return new(r||e)(p(V),p(E),p(D))},e.\u0275cmp=m({type:e,selectors:[["app-create"]],standalone:!0,features:[g],decls:34,vars:2,consts:[[1,"container"],[1,"row"],[1,"col"],["id","heading"],[1,"form-block"],["action","POST","id","users-form",3,"ngSubmit","formGroup"],[1,"form-content"],[1,"input","name"],["type","text","name","name","id","name","placeholder","Enter the name","FormControlName","name"],[1,"input","username"],["type","text","name","username","id","username","placeholder","Enter the username","FormControlName","username"],[1,"input","email"],["type","text","name","email","id","email","placeholder","example@test.com","FormControlName","email"],[1,"input","street"],["type","text","name","street","id","street","placeholder","Enter the street","FormControlName","street"],[1,"input","suite"],["type","text","name","suite","id","suite","placeholder","Enter the suite","FormControlName","suite"],[1,"input","city"],["type","text","name","city","id","city","placeholder","Enter the city","FormControlName","city"],[1,"input","zipcode"],["type","number","name","zipcode","id","zipcode","placeholder","Enter the zipcode","FormControlName","zipcode"],[1,"input","phone"],["type","number","name","phone","id","phone","placeholder","Enter the phone","FormControlName","phone"],[1,"input","website"],["type","text","name","website","id","website","placeholder","Enter the website","FormControlName","name"],[1,"input","company"],["type","text","name","company","id","company","placeholder","Enter the company","FormControlName","companyName"],["type","submit",1,"form-btn"]],template:function(r,o){r&1&&(s(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),l(5),a()()()(),s(6,"div",0)(7,"div",1)(8,"div",2)(9,"div",4)(10,"form",5),_("ngSubmit",function(){return o.onSubmit(o.createForm.value)}),s(11,"div",6)(12,"div",7),u(13,"input",8),a(),s(14,"div",9),u(15,"input",10),a(),s(16,"div",11),u(17,"input",12),a(),s(18,"div",13),u(19,"input",14),a(),s(20,"div",15),u(21,"input",16),a(),s(22,"div",17),u(23,"input",18),a(),s(24,"div",19),u(25,"input",20),a(),s(26,"div",21),u(27,"input",22),a(),s(28,"div",23),u(29,"input",24),a(),s(30,"div",25),u(31,"input",26),a()(),s(32,"button",27),l(33,"Update"),a()()()()()()()),r&2&&(h(5),f(o.routeTitle),h(5),he("formGroup",o.createForm))},dependencies:[st,nt,Qe,re,ot],styles:[".input[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:400px;width:100%}form#users-form[_ngcontent-%COMP%]{max-width:900px;margin:0 auto}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px 5px;border:none;border-bottom:1px solid #6f6f6f;margin-bottom:20px}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible{padding:10px 5px;border:none;border-bottom:1px solid #000;margin-bottom:20px}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-size:16px}.form-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;margin-bottom:20px}.form-btn[_ngcontent-%COMP%]{padding:10px 30px;font-size:16px;border-radius:10px;background-color:#5a44ff;color:#fff}"]});let t=e;return t})();var lt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-view"]],standalone:!0,features:[g],decls:2,vars:0,template:function(r,o){r&1&&(s(0,"p"),l(1,"view works!"),a())}});let t=e;return t})();var ut=(()=>{let e=class e{constructor(i,r,o){this.router=i,this.route=r,this.user=o,this.updateForm=new A({name:new c("name",[d.required]),username:new c("username",[d.required]),email:new c("email",[d.required,d.email]),street:new c("street",[d.required]),suite:new c("suite",[d.required]),city:new c("city",[d.required]),zipcode:new c("zipcode",[d.required]),phone:new c("phone",[d.required]),website:new c("website",[d.required]),companyName:new c("companyName",[d.required])})}ngOnInit(){this.routeTitle=this.route.snapshot.routeConfig?.title}};e.\u0275fac=function(r){return new(r||e)(p(D),p(V),p(E))},e.\u0275cmp=m({type:e,selectors:[["app-edit"]],standalone:!0,features:[g],decls:34,vars:1,consts:[[1,"container"],[1,"row"],[1,"col"],["id","heading"],[1,"form-block"],["action","POST","id","users-form"],[1,"form-content"],[1,"input","name"],["type","text","name","name","id","name","placeholder","Enter the name"],[1,"input","username"],["type","text","name","username","id","username","placeholder","Enter the username"],[1,"input","email"],["type","text","name","email","id","email","placeholder","example@test.com"],[1,"input","street"],["type","text","name","street","id","street","placeholder","Enter the street"],[1,"input","suite"],["type","text","name","suite","id","suite","placeholder","Enter the suite"],[1,"input","city"],["type","text","name","city","id","city","placeholder","Enter the city"],[1,"input","zipcode"],["type","text","name","zipcode","id","zipcode","placeholder","Enter the zipcode"],[1,"input","phone"],["type","text","name","phone","id","phone","placeholder","Enter the phone"],[1,"input","website"],["type","text","name","website","id","website","placeholder","Enter the website"],[1,"input","company"],["type","text","name","company","id","company","placeholder","Enter the company"],["type","submit",1,"form-btn"]],template:function(r,o){r&1&&(s(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),l(5),a()()()(),s(6,"div",0)(7,"div",1)(8,"div",2)(9,"div",4)(10,"form",5)(11,"div",6)(12,"div",7),u(13,"input",8),a(),s(14,"div",9),u(15,"input",10),a(),s(16,"div",11),u(17,"input",12),a(),s(18,"div",13),u(19,"input",14),a(),s(20,"div",15),u(21,"input",16),a(),s(22,"div",17),u(23,"input",18),a(),s(24,"div",19),u(25,"input",20),a(),s(26,"div",21),u(27,"input",22),a(),s(28,"div",23),u(29,"input",24),a(),s(30,"div",25),u(31,"input",26),a()(),s(32,"button",27),l(33,"Update"),a()()()()()()()),r&2&&(h(5),f(o.routeTitle))},styles:[".input[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:400px;width:100%}form#users-form[_ngcontent-%COMP%]{max-width:900px;margin:0 auto}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px 5px;border:none;border-bottom:1px solid #6f6f6f;margin-bottom:20px}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible{padding:10px 5px;border:none;border-bottom:1px solid #000;margin-bottom:20px}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-size:16px}.form-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;margin-bottom:20px}.form-btn[_ngcontent-%COMP%]{padding:10px 30px;font-size:16px;border-radius:10px;background-color:#5a44ff;color:#fff}"]});let t=e;return t})();var dt=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:Oe,title:"User List"},{path:"create",component:at,title:"Create User"},{path:"view/:id",component:lt,title:"View User"},{path:"edit/:id",component:ut,title:"Update User"}];var ct={providers:[xe(dt),we(),De(Me())]};var $t={providers:[Ae()]},ht=Ce(ct,$t);var qt=()=>Ee(Ie,ht),Wi=qt;export{Wi as a};