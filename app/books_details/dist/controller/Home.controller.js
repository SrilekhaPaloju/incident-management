sap.ui.define(["./BaseController","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/m/Token","sap/ui/core/Fragment","sap/ui/model/json/JSONModel","sap/m/MessageBox"],function(e,t,o,i,n,a,r){"use strict";return e.extend("com.app.booksdetails.controller.Home",{onInit:function(){const e=new a({AuthorName:"",title:"",Stock:"",AuthorNumber:""});this.getView().setModel(e,"localModel");this.getRouter().attachRoutePatternMatched(this.onBookListLoad,this)},onBookListLoad:function(){this.getView().byId("idBooksTable").getBinding("items").refresh();var e=this.getView();var t=e.byId("multiInput1");t.addValidator(function(e){if(true){var t=e.text;return new i({key:t,text:t})}});var o=e.byId("multiInput2");o.addValidator(function(e){if(true){var t=e.text;return new i({key:t,text:t})}});var n=e.byId("multiInput3");n.addValidator(function(e){if(true){var t=e.text;return new i({key:t,text:t})}})},onGoPress:function(){const e=this.getView(),i=e.byId("multiInput1"),n=i.getTokens(),a=e.byId("multiInput2"),r=a.getTokens(),s=e.byId("multiInput3"),l=s.getTokens(),u=e.byId("idBooksTable"),d=[];n.filter(e=>{e?d.push(new t("ID",o.EQ,e.getKey())):""});r.filter(e=>{e?d.push(new t("title",o.EQ,e.getKey())):""});l.filter(e=>{e?d.push(new t("AuthorName",o.EQ,e.getKey())):""});u.getBinding("items").filter(d)},onClearFilterPress:function(){const e=this.getView(),t=e.byId("multiInput1").removeAllTokens(),o=e.byId("multiInput2").removeAllTokens(),i=e.byId("multiInput3").removeAllTokens()},onSelectBook:function(e){debugger;const{ID:t,AuthorName:o}=e.getSource().getSelectedItem().getBindingContext().getObject();const i=this.getRouter();i.navTo("RouteDetails",{bookID:t,Name:o})},onCreateButton:async function(){debugger;if(!this.oCreateBookDialog){this.oCreateBookDialog=await this.loadFragment("CreateBookDialog");debugger}this.oCreateBookDialog.open()},onCloseDialog:function(){if(this.oCreateBookDialog.isOpen()){this.oCreateBookDialog.close()}},onCreateBook:async function(){const e=this.getView().getModel("localModel").getProperty("/"),t=this.getView().getModel("ModelV2");debugger;try{await this.createData(t,e,"/Books");this.getView().byId("idBooksTable").getBinding("items").refresh();this.oCreateBookDialog.close()}catch(e){this.oCreateBookDialog.close();r.error("Some technical Issue")}}})});