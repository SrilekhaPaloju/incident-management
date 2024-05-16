//@ui5-bundle com/app/booksfiorielement/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/app/booksfiorielement/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.app.booksfiorielement.Component",{metadata:{manifest:"json"}})});
},
	"com/app/booksfiorielement/i18n/i18n.properties":'# This is the resource bundle for com.app.booksfiorielement\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Books Applications\n\n#YDES: Application description\nappDescription=Books Applications\n\n#XFLD,51\nflpTitle=Books Application\n',
	"com/app/booksfiorielement/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"com.app.booksfiorielement","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.4","toolsId":"d9074ca1-22cc-4864-93e7-2bd221ba5d07"},"dataSources":{"mainService":{"uri":"BookSRV/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"Books application-display":{"semanticObject":"Books application","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.123.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{},"sap.f":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.app.booksfiorielement.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{"flexibleColumnLayout":{"defaultTwoColumnLayoutType":"TwoColumnsBeginExpanded","defaultThreeColumnLayoutType":"ThreeColumnsMidExpanded"},"routerClass":"sap.f.routing.Router"},"routes":[{"pattern":":?query:","name":"BooksList","target":["BooksList"]},{"pattern":"Books({key}):?query:","name":"BooksObjectPage","target":["BooksList","BooksObjectPage"]}],"targets":{"BooksList":{"type":"Component","id":"BooksList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Books","variantManagement":"Page","navigation":{"Books":{"detail":{"route":"BooksObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}},"initialLoad":"Enabled"}},"controlAggregation":"beginColumnPages","contextPattern":""},"BooksObjectPage":{"type":"Component","id":"BooksObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Books"}},"controlAggregation":"midColumnPages","contextPattern":"/Books({key})"}}},"rootView":{"viewName":"sap.fe.templates.RootContainer.view.Fcl","type":"XML","async":true,"id":"appRootView"}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"managedapprouter"}}'
}});