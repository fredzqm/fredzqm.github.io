webpackJsonp([1],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(355),
        styles: [__webpack_require__(338), __webpack_require__(339)],
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(357),
        styles: [__webpack_require__(341)]
    })
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reactComponent__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__technology_service__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(technologyService) {
        this.technologyService = technologyService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__reactComponent__["a" /* StoneCutter */], { technologies: this.technologyService.getAllTechnologies() }), document.getElementById('stonecutter'));
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(358),
        styles: [__webpack_require__(342)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__technology_service__["a" /* TechnologyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__technology_service__["a" /* TechnologyService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProjectDetailRoutingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__project__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_technology_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__read_me_read_me_component__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(componentFactoryResolver, technologyService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.technologyService = technologyService;
    }
    Object.defineProperty(ProjectDetailComponent.prototype, "project", {
        get: function () {
            return this._project;
        },
        set: function (project) {
            var _this = this;
            this._project = project;
            this.updateCustomizedComponent();
            if (this.project) {
                this.technologies = this.project.technologies.map(function (name) { return _this.technologyService.getTechnologyByName(name); });
            }
            else {
                this.technologies = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    ProjectDetailComponent.prototype.ngAfterContentInit = function () {
        this.updateCustomizedComponent();
    };
    ProjectDetailComponent.prototype.updateCustomizedComponent = function () {
        if (this.project) {
            this.custimizableComponent.clear();
            if (this.project.detailComponent) {
                this.custimizableComponent.createComponent(this.componentFactoryResolver.resolveComponentFactory(this.project.detailComponent));
            }
            else {
                var component = this.custimizableComponent.createComponent(this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__read_me_read_me_component__["a" /* ReadMeComponent */]));
                component.instance.repos = this.project.repos;
            }
        }
    };
    return ProjectDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('customizable', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object)
], ProjectDetailComponent.prototype, "custimizableComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__project__["Project"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project__["Project"]) === "function" && _b || Object),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__project__["Project"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project__["Project"]) === "function" && _c || Object])
], ProjectDetailComponent.prototype, "project", null);
ProjectDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-detail',
        template: __webpack_require__(362),
        styles: [__webpack_require__(346)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_technology_service__["a" /* TechnologyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_technology_service__["a" /* TechnologyService */]) === "function" && _e || Object])
], ProjectDetailComponent);

var ProjectDetailRoutingComponent = (function () {
    function ProjectDetailRoutingComponent(route, _projectService) {
        this.route = route;
        this._projectService = _projectService;
    }
    ProjectDetailRoutingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var repos = this.route.snapshot.params['repos'];
        this._projectService.getOneProjectWithReposName(repos).then(function (project) {
            _this.project = project;
        });
    };
    return ProjectDetailRoutingComponent;
}());
ProjectDetailRoutingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <app-project-detail *ngIf=\"project\" [project]=\"project\"></app-project-detail>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__project_service__["a" /* ProjectService */]) === "function" && _g || Object])
], ProjectDetailRoutingComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=project-detail.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectListComponent = (function () {
    function ProjectListComponent(_projectService, router) {
        this._projectService = _projectService;
        this.router = router;
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    return ProjectListComponent;
}());
ProjectListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(364),
        styles: [__webpack_require__(348)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProjectListComponent);

var _a, _b;
//# sourceMappingURL=project-list.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

//# sourceMappingURL=project.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ourProjects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__projects_chess_project__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_url_connect_project__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_scheme_project_scheme_project__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_uml_generator_project__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_jobee_project__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_laplace_project_laplace_project__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_digger_game_project__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_operating_system_project__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_map_project__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projects_dPSM_project__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_cpu_project_cpu_project__ = __webpack_require__(315);











var ourProjects = [
    __WEBPACK_IMPORTED_MODULE_0__projects_chess_project__["a" /* chessProject */],
    __WEBPACK_IMPORTED_MODULE_3__projects_uml_generator_project__["a" /* umlGeneratorProject */],
    __WEBPACK_IMPORTED_MODULE_2__projects_scheme_project_scheme_project__["a" /* schemeProject */],
    __WEBPACK_IMPORTED_MODULE_4__projects_jobee_project__["a" /* jobeeProject */],
    __WEBPACK_IMPORTED_MODULE_8__projects_map_project__["a" /* mapProejct */],
    __WEBPACK_IMPORTED_MODULE_1__projects_url_connect_project__["a" /* urlConnectProejct */],
    __WEBPACK_IMPORTED_MODULE_7__projects_operating_system_project__["a" /* operatingSystemProject */],
    __WEBPACK_IMPORTED_MODULE_5__projects_laplace_project_laplace_project__["a" /* laplaceProejct */],
    __WEBPACK_IMPORTED_MODULE_9__projects_dPSM_project__["a" /* dPSMProejct */],
    __WEBPACK_IMPORTED_MODULE_6__projects_digger_game_project__["a" /* diggerGameProject */],
    __WEBPACK_IMPORTED_MODULE_10__projects_cpu_project_cpu_project__["a" /* cpuProejct */],
];
//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadMeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadMeComponent = (function () {
    function ReadMeComponent() {
    }
    return ReadMeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ReadMeComponent.prototype, "repos", void 0);
ReadMeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-read-me',
        template: __webpack_require__(367),
        styles: [__webpack_require__(350)],
        host: {
            'class': 'card'
        }
    })
], ReadMeComponent);

//# sourceMappingURL=read-me.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = (function () {
    function ResumeComponent() {
        this.resumeUrl = 'assets/resume.pdf';
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resume',
        template: __webpack_require__(368),
        styles: [__webpack_require__(351)]
    }),
    __metadata("design:paramtypes", [])
], ResumeComponent);

//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 296;

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(331);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(356),
        styles: [__webpack_require__(340)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_pdf_viewer__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__resume_resume_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__project_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__project_detail_project_detail_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__project_list_project_card_project_card_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__hello_hello_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__project_list_project_list_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__about_about_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__error_error_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__trunc_pipe__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__route_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_markdown_to_html__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__page_header_page_header_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__page_footer_page_footer_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__projects__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__technology_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__read_me_read_me_component__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var projectDetailComponentList = [__WEBPACK_IMPORTED_MODULE_27__read_me_read_me_component__["a" /* ReadMeComponent */]];
for (var _i = 0, ourProjects_1 = __WEBPACK_IMPORTED_MODULE_25__projects__["a" /* ourProjects */]; _i < ourProjects_1.length; _i++) {
    var project = ourProjects_1[_i];
    if (project.detailComponent) {
        projectDetailComponentList.push(project.detailComponent);
    }
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__project_detail_project_detail_component__["b" /* ProjectDetailRoutingComponent */],
            __WEBPACK_IMPORTED_MODULE_15__hello_hello_component__["a" /* HelloComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__project_list_project_list_component__["a" /* ProjectListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_19__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_20__trunc_pipe__["a" /* TruncatePipe */],
            __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_pdf_viewer__["PdfViewerComponent"],
            __WEBPACK_IMPORTED_MODULE_11__resume_resume_component__["a" /* ResumeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__project_list_project_card_project_card_component__["a" /* ProjectCardComponent */],
            __WEBPACK_IMPORTED_MODULE_23__page_header_page_header_component__["a" /* PageHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_24__page_footer_page_footer_component__["a" /* PageFooterComponent */],
        ].concat(projectDetailComponentList),
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_21__route_module__["a" /* Route */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_22_ng2_markdown_to_html__["a" /* MarkdownToHtmlModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["a" /* MaterializeModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_26__technology_service__["a" /* TechnologyService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        entryComponents: projectDetailComponentList
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alphabet; });
var alphabet = {
    A79: {
        W: 75,
        P: [[64, 89, 9, -102], [57, 103, 9, -102], [5, 89, 9, -79], [16, 104, 8, -35], [51, 122, 8, -35], [23, 118, 8, -35], [31, 133, 8, 50], [46, 136, 8, 50], [34, 153, 8, 69], [28, 168, 7, 112], [21, 183, 7, 112]]
    },
    A78: {
        W: 85,
        P: [[10, 148, 8, -103], [21, 137, 8, -92], [33, 125, 7, -79], [50, 124, 7, -35], [58, 135, 7, -35], [68, 148, 7, -35], [40, 111, 7, 51], [33, 103, 7, 51], [21, 86, 7, 51], [56, 106, 7, 51], [67, 92, 7, 112]]
    },
    A77: {
        W: 98,
        P: [[24, 148, 10, -102], [67, 151, 10, -102], [34, 133, 9, -36], [61, 134, 9, -36], [76, 132, 8, -36], [16, 130, 8, -36], [14, 112, 7, 50], [40, 118, 7, 50], [58, 117, 7, 50], [82, 117, 7, 83], [86, 100, 7, 83], [51, 101, 7, 83], [11, 95, 7, 83]]
    },
    A76: {
        W: 70,
        P: [[12, 88, 9, -84], [32, 138, 5, -84], [36, 148, 9, -84], [44, 133, 8, -84], [60, 84, 6, 119], [57, 96, 6, 102], [53, 107, 6, 50], [50, 120, 7, -35], [26, 115, 7, 51], [29, 127, 6, 69], [20, 101, 8, 11]]
    },
    A75: {
        W: 75,
        P: [[58, 148, 9, -103], [60, 128, 8, -84], [38, 150, 8, -35], [21, 147, 7, -35], [61, 109, 7, -35], [17, 128, 7, 42], [13, 110, 7, 80], [62, 92, 7, 80], [14, 90, 7, 80]]
    },
    A74: {
        W: 68,
        P: [[33, 149, 9, -103], [35, 130, 9, -79], [34, 108, 9, -36], [33, 90, 8, 5], [48, 89, 8, 50], [14, 89, 8, 56], [34, 68, 8, 112]]
    },
    A73: {
        W: 70,
        P: [[10, 143, 8, -103], [23, 150, 8, -92], [44, 149, 8, -79], [57, 135, 8, -38], [44, 122, 8, -35], [25, 114, 8, 39], [17, 98, 7, 39], [33, 91, 7, 56], [45, 88, 7, 102], [57, 91, 7, 102]]
    },
    A72: {
        W: 69,
        P: [[58, 105, 7, -102], [56, 88, 8, -35], [42, 91, 7, 51], [29, 96, 7, 91], [16, 90, 7, 91], [18, 105, 8, 37], [17, 120, 7, -50], [17, 134, 6, -79], [17, 149, 8, -102]]
    },
    A71: {
        W: 75,
        P: [[51, 182, 10, -103], [51, 159, 9, -79], [55, 138, 9, -79], [35, 149, 8, -35], [18, 143, 7, 11], [58, 123, 7, 11], [12, 126, 7, 50], [57, 103, 7, 69], [16, 109, 6, 69], [26, 95, 6, 69], [49, 88, 6, 69], [37, 88, 6, 119]]
    },
    A70: {
        W: 77,
        P: [[15, 88, 10, -103], [18, 108, 9, -91], [31, 97, 9, -50], [18, 126, 8, -50], [45, 96, 7, -35], [57, 103, 7, 5], [17, 143, 7, 5], [60, 117, 7, 56], [60, 131, 7, 56], [20, 158, 7, 50], [51, 143, 7, 50], [31, 148, 6, 102], [17, 172, 6, 102], [16, 186, 5, 119]]
    },
    A6d: {
        W: 111,
        P: [[15, 148, 10, -102], [58, 152, 10, -102], [98, 151, 10, -50], [98, 134, 9, -50], [56, 133, 9, -50], [15, 129, 8, 11], [94, 116, 8, 11], [56, 113, 8, 11], [14, 111, 7, 51], [15, 93, 7, 51], [25, 105, 7, 51], [55, 98, 7, 51], [89, 99, 7, 83], [77, 92, 7, 112], [36, 94, 7, 112]]
    },
    A6e: {
        W: 75,
        P: [[17, 148, 10, -92], [62, 149, 10, -92], [17, 125, 9, -50], [62, 127, 9, -35], [61, 107, 8, 29], [23, 104, 8, 69], [15, 86, 7, 69], [36, 94, 7, 69], [55, 92, 7, 69]]
    },
    A6f: {
        W: 76,
        P: [[24, 147, 10, -103], [46, 149, 9, -84], [14, 129, 9, -50], [58, 134, 8, -35], [18, 107, 8, 29], [61, 114, 7, 51], [56, 98, 7, 51], [31, 92, 7, 102], [45, 91, 7, 102]]
    },
    A6a: {
        W: 58,
        P: [[34, 62, 10, -92], [35, 95, 9, -92], [37, 117, 8, -35], [38, 133, 8, -35], [37, 152, 8, 37], [36, 168, 8, 56], [29, 185, 7, 56], [14, 181, 6, 112], [6, 170, 5, 119]]
    },
    A6b: {
        W: 78,
        P: [[19, 148, 8, -84], [20, 131, 7, -84], [68, 149, 10, -84], [58, 134, 8, -84], [50, 123, 6, -84], [65, 83, 6, -35], [21, 44, 7, 51], [21, 59, 6, 83], [21, 72, 5, 112], [21, 85, 6, 112], [21, 99, 6, 69], [53, 99, 5, 102], [59, 90, 6, 50], [42, 110, 10, 29], [20, 115, 7, -35], [31, 122, 5, 5]]
    },
    A6c: {
        W: 40,
        P: [[20, 150, 10, 56], [22, 52, 10, 56], [20, 71, 9, -35], [21, 133, 8, -50], [21, 88, 7, -84], [21, 120, 6, -103], [20, 104, 6, -103]]
    },
    A68: {
        W: 83,
        P: [[18, 149, 10, -102], [69, 147, 10, -102], [18, 131, 9, -36], [64, 126, 8, -36], [65, 109, 8, -36], [19, 109, 8, 51], [57, 93, 7, 69], [39, 94, 8, 37], [20, 89, 8, 37], [18, 69, 8, 91], [17, 52, 7, 119]]
    },
    A69: { W: 41, P: [[23, 60, 10, -92], [22, 91, 9, -36], [21, 111, 8, 39], [19, 130, 7, 56], [21, 148, 6, 112]] },
    A64: {
        W: 84,
        P: [[68, 147, 10, -103], [45, 151, 9, -92], [22, 145, 9, -50], [15, 124, 8, -50], [17, 104, 8, 39], [29, 91, 8, 39], [46, 90, 8, 39], [59, 96, 8, -50], [67, 129, 8, -50], [68, 110, 8, 69], [68, 83, 7, 69], [70, 68, 7, 102], [71, 47, 7, 119]]
    },
    A65: {
        W: 79,
        P: [[16, 127, 10, -103], [23, 145, 9, -50], [41, 151, 8, 11], [54, 148, 7, 102], [70, 142, 6, 119], [61, 96, 7, 51], [54, 109, 7, 51], [44, 90, 8, 51], [41, 117, 8, -50], [27, 92, 8, -50], [17, 107, 8, -50]]
    },
    A66: {
        W: 73,
        P: [[29, 156, 10, -103], [31, 136, 9, -84], [31, 116, 9, -50], [30, 95, 8, -35], [45, 93, 7, -35], [58, 92, 7, 39], [14, 95, 7, 39], [33, 79, 7, 69], [36, 67, 7, 69], [47, 55, 7, 69], [65, 52, 6, 119]]
    },
    A67: {
        W: 76,
        P: [[61, 97, 10, -102], [61, 118, 9, -102], [42, 90, 9, -79], [24, 97, 8, -35], [53, 137, 8, -35], [12, 110, 8, -35], [40, 148, 7, 29], [26, 151, 7, 42], [11, 124, 6, 56], [13, 139, 6, 83], [60, 156, 7, -50], [54, 172, 7, 50], [42, 185, 7, 69], [25, 187, 7, 102], [7, 183, 7, 119]]
    },
    A61: {
        W: 74,
        P: [[58, 94, 8, 42], [45, 89, 7, 69], [31, 91, 7, 119], [20, 99, 7, 91], [12, 111, 7, 51], [11, 124, 8, -35], [29, 151, 8, -35], [45, 149, 7, -35], [65, 153, 6, -35], [57, 126, 6, -35], [57, 112, 6, -102], [58, 142, 8, -102], [15, 140, 9, -102]]
    },
    A62: {
        W: 85,
        P: [[17, 143, 8, -102], [31, 148, 8, -102], [44, 152, 7, -102], [60, 147, 6, -36], [67, 133, 6, -36], [73, 116, 6, 39], [65, 98, 6, 83], [56, 90, 6, 119], [42, 89, 6, 51], [30, 93, 7, 11], [17, 102, 8, -35], [18, 124, 10, -72], [17, 79, 7, 51], [17, 60, 7, 51], [17, 47, 7, 102]]
    },
    A63: {
        W: 74,
        P: [[24, 142, 9, -103], [37, 152, 8, -38], [54, 150, 7, 50], [66, 143, 6, 56], [14, 123, 8, -79], [20, 106, 7, 5], [32, 92, 6, 29], [47, 88, 6, 102], [59, 94, 6, 102]]
    },
    A7e: {
        W: 86,
        P: [[13, 113, 5, -103], [22, 103, 5, -103], [31, 96, 5, 11], [40, 98, 5, 11], [44, 108, 5, 11], [52, 115, 7, 11], [66, 116, 7, 11], [72, 99, 9, 11]]
    },
    A7d: {
        W: 53,
        P: [[42, 115, 9, -103], [31, 104, 7, 5], [30, 86, 7, 5], [30, 72, 7, 5], [25, 57, 7, 5], [32, 128, 7, 5], [30, 144, 7, 5], [27, 158, 7, 5], [24, 170, 7, 5], [11, 174, 5, 112], [12, 51, 5, 112]]
    },
    A7c: {
        W: 61,
        P: [[33, 41, 5, -161], [33, 53, 5, 5], [31, 65, 5, 5], [32, 79, 5, 69], [32, 92, 5, 69], [31, 107, 5, 112], [30, 122, 5, 50], [29, 136, 5, -50], [28, 147, 5, -50], [28, 159, 5, -91], [27, 171, 5, -91]]
    },
    A7b: {
        W: 53,
        P: [[6, 115, 10, -50], [20, 105, 7, -50], [20, 89, 7, -50], [20, 73, 7, -50], [22, 58, 7, -50], [18, 126, 7, -50], [20, 140, 7, -50], [21, 152, 7, -50], [23, 166, 6, 80], [31, 172, 6, 80], [44, 172, 6, 80], [33, 49, 6, 80], [47, 49, 6, 80]]
    },
    A7a: {
        W: 77,
        P: [[19, 152, 10, -103], [37, 150, 9, -79], [53, 150, 8, -35], [31, 132, 8, -35], [42, 121, 7, 50], [53, 109, 7, 50], [61, 92, 7, 50], [40, 89, 7, 83], [23, 89, 7, 112]]
    },
    A4f: {
        W: 114,
        P: [[40, 147, 10, -102], [82, 142, 10, -102], [16, 119, 9, -72], [63, 151, 9, -72], [22, 136, 8, 11], [91, 122, 8, 11], [17, 96, 8, 11], [97, 108, 7, 11], [97, 89, 7, 11], [24, 78, 7, 69], [94, 71, 7, 69], [40, 66, 6, 69], [54, 60, 6, 69], [87, 60, 6, 112], [73, 59, 6, 112]]
    },
    A4d: {
        W: 126,
        P: [[38, 60, 10, -72], [92, 59, 10, -72], [112, 150, 8, -72], [83, 75, 5, -72], [81, 87, 6, -72], [78, 100, 6, -72], [74, 113, 6, -72], [69, 128, 7, -72], [54, 129, 7, -72], [50, 113, 6, -72], [46, 100, 5, -72], [43, 86, 6, -72], [31, 78, 7, -72], [43, 74, 6, 112], [28, 94, 8, -72], [16, 150, 10, -72], [20, 131, 9, 51], [23, 113, 8, 69], [103, 106, 6, 119], [100, 93, 6, 56], [104, 119, 7, 83], [108, 134, 8, 39], [97, 79, 7, 50], [61, 146, 9, 112]]
    },
    A4e: {
        W: 114,
        P: [[16, 151, 8, -91], [19, 55, 8, -91], [95, 59, 8, -91], [98, 147, 8, -91], [98, 132, 7, -91], [16, 133, 7, -91], [17, 71, 7, -91], [100, 72, 7, 5], [101, 119, 7, 5], [103, 86, 7, 5], [17, 119, 7, 5], [84, 138, 7, 5], [74, 126, 7, 5], [32, 68, 6, 56], [37, 80, 6, 56], [45, 90, 6, 56], [63, 112, 6, 56], [101, 102, 6, 56], [17, 108, 6, 112], [54, 101, 6, 112], [18, 93, 6, 112], [16, 81, 6, 112]]
    },
    A4b: {
        W: 88,
        P: [[24, 155, 9, -92], [78, 150, 9, -92], [23, 135, 8, -92], [61, 136, 8, -92], [46, 126, 8, -36], [22, 117, 8, -36], [36, 110, 8, 5], [22, 95, 7, 50], [43, 92, 7, 50], [52, 82, 7, 50], [21, 78, 7, 83], [23, 59, 7, 83], [67, 71, 7, 83], [75, 57, 7, 83]]
    },
    A4c: {
        W: 79,
        P: [[16, 152, 9, -50], [15, 135, 8, -50], [16, 118, 8, -50], [17, 86, 7, -50], [19, 71, 6, -50], [18, 55, 7, -50], [68, 145, 10, -50], [56, 148, 9, 69], [44, 151, 7, 119], [32, 153, 7, 50], [17, 101, 7, 69]]
    },
    A4a: {
        W: 95,
        P: [[32, 55, 10, -103], [84, 57, 9, -84], [49, 59, 9, -84], [65, 58, 8, -36], [60, 71, 8, -36], [60, 90, 8, 11], [61, 105, 8, 11], [55, 126, 8, 50], [54, 141, 7, 56], [46, 153, 7, 56], [28, 151, 7, 112], [14, 136, 7, 112]]
    },
    A51: {
        W: 125,
        P: [[113, 176, 10, -92], [97, 161, 9, -92], [82, 147, 9, -92], [64, 133, 7, -50], [97, 136, 7, -50], [62, 154, 7, -35], [106, 120, 7, -35], [41, 151, 6, 11], [108, 103, 6, 11], [24, 142, 6, 11], [103, 88, 6, 11], [15, 124, 6, 50], [97, 73, 6, 50], [12, 107, 6, 50], [15, 94, 6, 69], [84, 61, 6, 69], [24, 80, 6, 69], [35, 71, 5, 112], [71, 57, 5, 112], [55, 58, 5, 112], [43, 63, 5, 112]]
    },
    A50: {
        W: 75,
        P: [[49, 56, 5, -161], [56, 65, 5, -102], [62, 78, 5, -102], [34, 54, 6, -102], [56, 93, 6, -72], [17, 51, 6, -72], [17, 64, 6, -72], [49, 100, 6, 11], [34, 104, 6, 11], [15, 78, 7, 11], [19, 96, 7, 11], [16, 111, 7, 83], [13, 125, 7, 83], [13, 140, 7, 83]]
    },
    A53: {
        W: 99,
        P: [[18, 139, 8, -84], [32, 149, 7, -84], [47, 150, 6, -84], [65, 146, 6, -84], [79, 138, 6, 50], [86, 126, 6, 50], [81, 112, 6, 50], [69, 103, 6, 102], [58, 101, 6, 102], [44, 98, 6, 102], [30, 92, 7, 50], [29, 76, 6, 5], [42, 63, 6, 5], [56, 62, 6, -84], [70, 60, 6, -84], [81, 64, 6, -84]]
    },
    A52: {
        W: 90,
        P: [[17, 148, 8, -161], [17, 134, 7, 39], [17, 120, 8, -72], [18, 71, 8, -72], [19, 57, 10, -72], [51, 63, 8, -72], [64, 72, 8, -72], [30, 114, 8, -72], [42, 124, 5, -72], [54, 127, 6, -72], [64, 134, 7, -72], [75, 145, 8, -72], [73, 85, 8, 51], [70, 98, 8, 119], [59, 108, 8, 83], [46, 114, 8, 56], [18, 86, 8, 102], [18, 103, 9, 51], [35, 59, 9, 11]]
    },
    A55: {
        W: 105,
        P: [[34, 145, 9, -92], [51, 151, 8, -92], [20, 128, 7, -92], [67, 145, 7, -50], [19, 107, 7, -35], [80, 137, 7, 37], [86, 122, 7, 37], [18, 88, 7, 37], [89, 105, 6, 80], [19, 68, 6, 80], [88, 87, 6, 80], [91, 70, 6, 119]]
    },
    A54: {
        W: 97,
        P: [[14, 57, 9, -102], [92, 59, 9, -102], [54, 144, 9, -50], [55, 125, 8, -50], [75, 60, 7, 29], [30, 59, 7, 29], [58, 59, 6, 29], [46, 59, 6, 51], [51, 72, 6, 69], [53, 109, 6, 69], [53, 97, 6, 102], [53, 85, 6, 119]]
    },
    A57: {
        W: 148,
        P: [[45, 143, 10, -72], [78, 62, 10, -72], [100, 150, 10, -72], [137, 58, 10, -72], [92, 133, 9, -72], [54, 126, 9, -72], [37, 126, 9, -72], [67, 81, 9, -72], [82, 81, 8, -72], [59, 112, 8, -72], [63, 97, 7, -72], [33, 109, 7, -72], [87, 99, 7, -72], [120, 104, 7, 119], [113, 120, 8, 112], [127, 90, 8, 83], [132, 76, 9, 39], [109, 134, 9, 56], [88, 118, 7, 69], [23, 76, 9, 112], [30, 91, 8, 51], [20, 58, 10, 50]]
    },
    A56: {
        W: 93,
        P: [[47, 146, 10, -72], [38, 128, 9, -72], [33, 111, 8, -72], [26, 81, 8, -72], [22, 66, 7, -72], [19, 54, 8, -72], [56, 130, 8, -72], [86, 55, 8, -72], [77, 70, 8, 42], [72, 85, 8, 56], [66, 100, 8, 119], [61, 115, 8, 56], [30, 96, 8, 56]]
    },
    A59: {
        W: 91,
        P: [[8, 59, 9, -102], [77, 58, 9, -102], [34, 151, 8, -50], [43, 135, 8, -50], [71, 73, 7, 5], [18, 71, 7, 5], [25, 80, 7, 50], [63, 89, 7, 50], [34, 95, 7, 50], [48, 121, 6, 102], [57, 102, 6, 102], [39, 109, 6, 102]]
    },
    A58: {
        W: 103,
        P: [[11, 149, 8, -103], [23, 140, 8, -103], [87, 148, 8, -84], [76, 134, 7, -50], [69, 121, 7, -50], [34, 126, 7, -50], [45, 114, 6, 5], [62, 109, 6, 5], [53, 99, 6, 29], [65, 92, 6, 29], [41, 86, 6, 69], [76, 77, 6, 69], [32, 78, 6, 69], [87, 64, 6, 69], [25, 64, 6, 69], [14, 57, 6, 69], [94, 55, 6, 69]]
    },
    A5a: {
        W: 99,
        P: [[15, 146, 10, -92], [89, 148, 10, -92], [33, 149, 9, -92], [52, 150, 9, -92], [69, 150, 8, -36], [27, 129, 8, -36], [38, 112, 7, 11], [47, 97, 7, 11], [57, 87, 7, 56], [67, 74, 7, 56], [79, 68, 7, 56], [91, 61, 7, 119], [15, 56, 7, -35], [29, 58, 7, 11], [45, 60, 7, 50], [61, 58, 7, 112], [75, 55, 7, 56]]
    },
    A5c: {
        W: 79,
        P: [[19, 58, 5, -35], [25, 67, 5, -35], [31, 76, 6, -35], [35, 86, 6, -35], [40, 95, 7, -35], [45, 106, 6, -35], [48, 116, 6, -35], [54, 125, 6, -35], [58, 136, 5, -35], [63, 146, 5, -35], [65, 152, 5, -35]]
    },
    A5b: {
        W: 55,
        P: [[40, 57, 5, -35], [31, 58, 5, -35], [20, 57, 8, -35], [20, 72, 8, -35], [20, 85, 8, -35], [20, 100, 8, -35], [20, 115, 8, -35], [20, 127, 8, -35], [19, 144, 8, -35], [17, 160, 8, -35], [17, 175, 8, -35], [29, 177, 6, -35], [41, 176, 5, -35]]
    },
    A5e: { W: 83, P: [[20, 70, 9, -79], [65, 68, 9, -79], [33, 58, 7, 50], [52, 58, 7, 50], [42, 48, 6, 112]] },
    A5d: {
        W: 55,
        P: [[20, 58, 5, -35], [30, 58, 5, -35], [40, 58, 8, -35], [41, 74, 8, -35], [41, 92, 8, -35], [41, 109, 8, -35], [41, 127, 8, -35], [41, 144, 8, -35], [40, 159, 8, -35], [40, 172, 8, -35], [27, 174, 6, -35], [15, 175, 6, -35]]
    },
    A5f: {
        W: 90,
        P: [[0, 172, 5, -35], [11, 171, 5, -35], [21, 169, 5, -35], [33, 172, 5, -35], [45, 172, 5, -35], [55, 170, 5, -35], [66, 172, 5, -35], [74, 170, 5, -35], [85, 170, 5, -35]]
    },
    A46: {
        W: 87,
        P: [[20, 149, 9, -103], [20, 128, 8, -84], [20, 108, 8, -84], [33, 98, 8, -36], [20, 86, 8, -36], [51, 96, 7, 29], [68, 98, 7, 29], [21, 63, 7, 56], [35, 54, 7, 56], [52, 54, 7, 112], [68, 53, 7, 112]]
    },
    A47: {
        W: 97,
        P: [[25, 148, 8, -103], [61, 145, 8, -103], [16, 109, 8, -79], [43, 151, 8, -79], [15, 132, 7, -36], [77, 132, 7, -36], [23, 83, 7, 37], [83, 110, 7, 37], [36, 66, 6, 37], [49, 53, 6, 37], [67, 106, 6, 56], [53, 112, 6, 56], [63, 57, 6, 112], [40, 114, 6, 112], [76, 59, 6, 112]]
    },
    A44: {
        W: 103,
        P: [[19, 148, 8, -161], [34, 154, 8, -79], [60, 149, 8, -36], [80, 141, 7, -36], [86, 123, 7, 29], [20, 128, 8, -92], [20, 110, 8, -92], [21, 91, 8, -50], [21, 73, 8, 5], [23, 57, 8, 42], [37, 63, 8, 51], [52, 70, 7, 69], [66, 78, 7, 69], [86, 109, 7, 112], [79, 90, 7, 112]]
    },
    A45: {
        W: 89,
        P: [[19, 149, 10, -102], [18, 103, 10, -102], [22, 55, 9, -72], [17, 126, 9, -72], [20, 79, 8, 5], [36, 155, 8, 5], [38, 101, 8, 5], [40, 52, 7, 50], [54, 157, 7, 50], [53, 100, 7, 50], [56, 53, 7, 91], [71, 155, 7, 91], [70, 99, 7, 91], [73, 51, 7, 91]]
    },
    A42: {
        W: 90,
        P: [[26, 56, 9, -102], [22, 68, 5, -102], [23, 79, 5, -102], [21, 92, 5, -84], [22, 103, 6, -50], [20, 114, 6, -50], [22, 125, 6, 91], [22, 137, 6, 91], [32, 104, 7, -35], [24, 151, 7, -35], [48, 148, 7, -35], [68, 115, 7, -35], [35, 152, 6, 51], [43, 110, 6, 51], [61, 144, 6, 51], [76, 124, 6, 51], [72, 137, 9, 119], [52, 107, 9, -79], [66, 81, 7, 80], [66, 92, 9, 11], [42, 52, 9, 42], [64, 64, 9, -102], [55, 54, 6, -102]]
    },
    A43: {
        W: 86,
        P: [[77, 69, 8, -103], [76, 56, 7, 56], [64, 60, 7, 119], [50, 61, 7, 29], [30, 78, 7, -72], [23, 88, 7, -35], [17, 100, 8, -35], [15, 116, 8, 50], [39, 69, 6, 83], [17, 131, 9, -72], [29, 145, 9, -72], [46, 147, 8, 29], [61, 142, 8, 83], [72, 134, 8, -103]]
    },
    A40: {
        W: 132,
        P: [[95, 150, 7, 51], [81, 154, 8, 11], [64, 156, 9, 11], [46, 151, 9, -79], [29, 140, 9, -79], [20, 123, 9, -103], [17, 104, 9, -103], [19, 85, 9, 50], [28, 68, 9, 56], [41, 55, 9, 80], [58, 49, 9, 112], [75, 51, 8, 119], [91, 56, 8, 91], [104, 66, 8, 51], [113, 80, 8, 50], [113, 97, 8, 5], [107, 113, 8, -36], [90, 118, 9, -36], [75, 113, 7, -36], [68, 108, 5, 5], [60, 115, 7, -79], [47, 114, 7, -79], [42, 102, 7, -103], [47, 91, 7, -35], [55, 81, 6, -35], [67, 77, 8, -103], [76, 97, 8, -79]]
    },
    A41: {
        W: 104,
        P: [[88, 148, 10, -102], [29, 118, 10, -102], [68, 57, 5, -102], [23, 134, 8, 11], [16, 148, 8, 119], [39, 103, 8, 51], [47, 90, 7, 51], [55, 77, 7, 51], [62, 67, 6, 83], [76, 95, 5, -35], [77, 107, 6, -35], [73, 83, 5, 83], [71, 71, 5, 83], [79, 121, 7, -35], [84, 134, 8, -50], [65, 111, 6, -50], [52, 114, 6, -50]]
    },
    A48: {
        W: 110,
        P: [[16, 152, 10, -103], [92, 148, 9, -91], [92, 129, 9, -91], [18, 130, 8, -50], [90, 109, 8, -50], [19, 109, 8, -50], [33, 110, 8, 11], [53, 106, 8, 11], [70, 104, 8, 11], [94, 90, 8, 51], [95, 68, 8, 51], [18, 85, 7, 102], [22, 66, 7, 102], [22, 47, 7, 102], [95, 49, 7, 102]]
    },
    A49: {
        W: 78,
        P: [[13, 152, 9, -103], [36, 146, 9, -84], [53, 146, 8, 11], [68, 145, 8, 11], [35, 125, 8, -36], [38, 105, 7, -36], [37, 88, 7, 56], [38, 72, 7, 56], [52, 61, 7, 91], [65, 60, 7, 119], [40, 58, 7, 50], [24, 58, 6, -72], [12, 59, 6, -102]]
    },
    A33: {
        W: 87,
        P: [[22, 65, 10, -35], [16, 136, 10, -35], [32, 100, 10, -35], [38, 56, 8, -35], [54, 57, 7, -35], [63, 67, 6, -35], [66, 80, 6, -35], [57, 91, 7, -35], [47, 99, 7, -35], [56, 106, 7, -35], [64, 117, 6, -35], [65, 129, 6, -35], [59, 138, 7, -35], [49, 144, 7, -35], [31, 144, 7, -35]]
    },
    A32: {
        W: 87,
        P: [[69, 148, 10, -35], [51, 149, 9, -35], [33, 149, 9, -35], [14, 149, 8, -35], [19, 133, 8, -35], [28, 118, 8, -35], [42, 109, 8, -35], [56, 100, 7, -35], [66, 88, 7, -35], [68, 73, 7, -35], [60, 57, 6, -35], [47, 56, 6, -35], [34, 57, 6, -35], [24, 65, 6, -35], [16, 72, 6, -35]]
    },
    A31: {
        W: 65,
        P: [[19, 149, 9, -35], [51, 148, 9, -35], [39, 53, 9, -35], [36, 147, 6, -35], [35, 135, 6, -35], [34, 120, 5, -35], [34, 109, 5, -35], [34, 98, 6, -35], [35, 84, 6, -35], [37, 69, 6, -35], [27, 62, 6, -35], [19, 68, 6, -35]]
    },
    A30: {
        W: 87,
        P: [[67, 138, 10, -102], [48, 148, 10, -102], [73, 117, 9, -50], [74, 95, 9, -50], [22, 144, 8, 11], [69, 76, 8, 11], [15, 126, 8, 11], [12, 104, 7, 56], [58, 63, 7, 56], [13, 87, 6, 56], [46, 57, 6, 56], [20, 75, 6, 112], [27, 64, 6, 112]]
    },
    A37: {
        W: 87,
        P: [[26, 152, 10, -102], [36, 133, 9, -102], [47, 116, 9, -50], [57, 100, 9, 5], [66, 86, 9, 5], [80, 70, 8, 56], [62, 65, 8, 56], [44, 63, 7, 56], [26, 64, 6, 56], [11, 64, 6, 56]]
    },
    A36: {
        W: 87,
        P: [[65, 145, 10, -79], [46, 151, 9, -79], [70, 127, 8, -79], [66, 111, 8, -79], [26, 148, 7, -79], [52, 100, 7, -79], [18, 131, 7, 11], [15, 114, 7, 11], [37, 97, 7, 51], [20, 102, 7, 51], [23, 86, 7, 51], [34, 72, 7, 80], [44, 61, 7, 112], [55, 49, 7, 112]]
    },
    A35: {
        W: 87,
        P: [[21, 55, 9, -50], [38, 56, 9, -50], [53, 57, 9, -50], [69, 55, 9, -50], [20, 71, 8, -50], [18, 87, 8, -50], [18, 104, 8, -50], [32, 95, 8, -50], [46, 89, 7, -50], [57, 91, 7, 50], [64, 101, 7, 50], [71, 113, 7, 83], [69, 127, 7, 83], [61, 140, 7, 83], [49, 146, 6, 83], [34, 146, 6, 83], [22, 140, 6, 83]]
    },
    A34: {
        W: 87,
        P: [[10, 117, 9, -35], [25, 118, 9, -35], [39, 117, 9, -35], [55, 117, 9, -35], [70, 117, 9, -35], [61, 98, 8, -35], [61, 78, 7, -35], [61, 58, 7, -35], [46, 68, 7, -35], [36, 82, 7, -35], [27, 94, 7, -35], [61, 136, 7, -35], [61, 149, 7, -35]]
    },
    A39: {
        W: 87,
        P: [[69, 103, 10, -103], [60, 122, 9, -92], [47, 134, 8, -50], [33, 144, 8, -50], [17, 155, 8, -50], [70, 82, 8, -50], [48, 106, 7, 51], [64, 68, 7, 51], [53, 58, 7, 51], [34, 107, 7, 51], [21, 97, 7, 51], [17, 82, 7, 51], [38, 59, 7, 51], [26, 65, 7, 51]]
    },
    A38: {
        W: 87,
        P: [[43, 98, 10, -103], [61, 90, 8, -103], [58, 105, 8, -79], [27, 107, 8, -79], [24, 91, 7, -36], [67, 73, 7, -36], [21, 75, 7, -36], [29, 61, 7, -36], [58, 61, 6, 102], [46, 55, 6, 102], [17, 118, 7, 37], [67, 118, 7, 37], [69, 131, 7, 37], [16, 133, 6, 56], [66, 142, 6, 56], [23, 146, 6, 56], [33, 151, 6, 56], [57, 151, 5, 119], [46, 154, 5, 119]]
    },
    A2a: {
        W: 76,
        P: [[35, 69, 9, -103], [44, 83, 7, -35], [27, 83, 7, -35], [20, 67, 7, -35], [36, 54, 7, -35], [51, 67, 7, -35], [53, 92, 5, 83], [17, 92, 5, 83], [7, 63, 5, 83], [35, 42, 5, 83], [63, 67, 5, 83]]
    },
    A2b: {
        W: 69,
        P: [[32, 109, 10, -102], [32, 92, 6, 37], [47, 109, 6, 37], [32, 126, 6, 37], [14, 109, 6, 37], [33, 137, 6, 37], [60, 110, 6, 37], [32, 79, 6, 37], [4, 109, 6, 37]]
    },
    A2c: { W: 41, P: [[30, 150, 10, -79], [24, 164, 7, 50], [17, 177, 6, 102]] },
    A2d: { W: 60, P: [[12, 118, 9, -84], [29, 117, 8, 69], [46, 117, 6, 5]] },
    A2e: { W: 37, P: [[19, 152, 6, -35]] },
    A2f: {
        W: 74,
        P: [[14, 154, 10, -102], [23, 133, 9, -72], [34, 114, 9, 5], [42, 96, 9, 5], [50, 77, 8, 83], [59, 62, 8, 83]]
    },
    A20: { W: 40, P: [] },
    A21: {
        W: 35,
        P: [[17, 151, 9, -35], [18, 50, 8, -35], [17, 67, 8, -35], [17, 85, 7, -35], [18, 100, 6, -35], [18, 114, 5, -35], [19, 128, 5, -35]]
    },
    A22: {
        W: 61,
        P: [[15, 51, 5, -35], [16, 61, 5, -35], [14, 73, 5, -35], [14, 85, 5, -35], [44, 53, 5, -35], [43, 66, 5, -35], [42, 77, 5, -35], [40, 87, 5, -35]]
    },
    A23: {
        W: 120,
        P: [[31, 120, 9, -102], [79, 120, 9, -102], [90, 79, 9, -102], [43, 80, 9, -102], [48, 120, 7, 29], [62, 121, 7, 29], [83, 103, 7, 29], [86, 92, 7, 29], [73, 79, 7, 29], [59, 79, 7, 29], [26, 79, 7, 29], [11, 79, 7, 29], [47, 64, 7, 29], [51, 49, 7, 29], [94, 62, 7, 29], [98, 46, 7, 29], [107, 79, 7, 29], [118, 79, 7, 29], [92, 121, 7, 29], [107, 120, 7, 29], [75, 137, 7, 29], [70, 150, 7, 29], [28, 135, 7, 29], [23, 147, 7, 29], [37, 104, 7, 29], [39, 93, 7, 29], [17, 121, 7, 29], [3, 120, 7, 29]]
    },
    A24: {
        W: 99,
        P: [[21, 144, 9, -35], [36, 150, 8, -35], [54, 150, 8, -35], [71, 145, 7, -35], [78, 133, 7, -35], [81, 118, 6, -35], [73, 108, 6, -35], [60, 102, 6, -35], [46, 101, 7, -35], [31, 95, 7, -35], [24, 80, 8, -35], [37, 67, 8, -35], [52, 58, 9, -35], [71, 61, 9, -35], [51, 39, 6, -35], [52, 76, 6, -35], [52, 88, 6, -35], [51, 115, 6, -35], [51, 127, 6, -35], [51, 138, 6, -35], [51, 165, 6, -35], [51, 177, 6, -35]]
    },
    A26: {
        W: 94,
        P: [[80, 151, 10, -103], [68, 134, 9, 11], [58, 117, 9, 11], [48, 98, 9, 11], [39, 80, 9, 11], [32, 99, 7, 91], [20, 108, 7, 91], [11, 120, 6, 91], [10, 133, 6, 91], [17, 143, 5, 91], [27, 148, 6, 56], [40, 150, 6, -72], [54, 147, 6, -72], [76, 123, 6, -72], [81, 108, 6, -72], [56, 81, 6, -72], [63, 69, 5, -92], [60, 57, 5, -92], [47, 52, 5, -92], [44, 63, 5, -92]]
    },
    A27: { W: 56, P: [[27, 72, 5, -35], [25, 62, 5, -35], [27, 51, 5, -35]] },
    A28: {
        W: 53,
        P: [[39, 177, 10, -35], [41, 49, 10, -35], [27, 63, 9, -35], [17, 80, 8, -35], [25, 168, 8, -35], [14, 152, 8, -35], [10, 135, 7, -35], [10, 120, 7, -35], [13, 93, 7, -35], [9, 108, 7, -35]]
    },
    A29: {
        W: 53,
        P: [[15, 179, 10, -92], [15, 51, 10, -92], [29, 165, 9, -35], [27, 63, 9, -35], [34, 79, 9, -35], [37, 151, 8, 56], [41, 133, 8, 56], [41, 96, 8, 56], [44, 113, 7, 119]]
    },
    A3c: {
        W: 55,
        P: [[36, 88, 5, -35], [28, 94, 5, -35], [20, 100, 5, -35], [14, 106, 5, -35], [10, 113, 5, -35], [16, 116, 5, -35], [22, 120, 5, -35], [30, 126, 5, -35], [36, 133, 5, -35]]
    },
    A3b: { W: 44, P: [[21, 91, 10, -79], [21, 144, 8, 42], [11, 155, 6, 102]] },
    A3a: { W: 44, P: [[21, 134, 10, -79], [23, 86, 10, 51]] },
    A3f: {
        W: 75,
        P: [[24, 150, 10, -103], [10, 68, 9, 11], [26, 61, 8, 11], [41, 61, 8, 11], [26, 125, 8, 11], [36, 117, 7, 11], [48, 108, 7, 11], [57, 99, 6, 11], [52, 70, 6, 11], [59, 84, 6, 11]]
    },
    A3e: {
        W: 55,
        P: [[15, 83, 5, -35], [24, 90, 5, -35], [31, 97, 5, -35], [39, 105, 5, -35], [34, 114, 5, -35], [26, 120, 5, -35], [19, 125, 5, -35], [10, 132, 5, -35]]
    },
    A3d: {
        W: 73,
        P: [[11, 91, 9, -50], [27, 90, 9, -50], [44, 90, 9, -50], [59, 90, 9, -50], [11, 127, 6, 69], [21, 128, 6, 69], [33, 129, 6, 69], [44, 129, 6, 69], [53, 129, 6, 69]]
    }
};
//# sourceMappingURL=alphabet.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pointCollection__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelloComponent = (function () {
    function HelloComponent() {
        this.pointCollectionList = [];
        this.height = 600;
        this.width = 2000;
    }
    HelloComponent.prototype.ngOnInit = function () {
        var a = new __WEBPACK_IMPORTED_MODULE_1__pointCollection__["a" /* PointCollection */]('Hello, I am  Fred  Zhang!', {
            left: this.width * 0.1,
            right: this.width * 0.8,
            top: this.height * 0.25,
            buttom: this.height * 0.55
        }, {
            friction: 0.85,
            rotationForce: 0.0,
            springStrength: 0.1,
            letterColors: ['#1E055F', '#2B136A', '#5D507F', '#4C0D67', '#41025C']
        });
        var aRepeat = function () {
            a.shake();
            setTimeout(aRepeat, 20);
        };
        aRepeat();
        this.pointCollectionList.push(a);
        var b = new __WEBPACK_IMPORTED_MODULE_1__pointCollection__["a" /* PointCollection */]('A passionate  programmer~~', {
            left: this.width * 0.3,
            right: this.width * 0.9,
            top: this.height * 0.67,
            buttom: this.height * 0.8
        }, {
            friction: 0.85,
            rotationForce: 0.0,
            springStrength: 0.1,
            letterColors: ['#94990D', '#848900', '#B5B86C']
        });
        var bRepeat = function () {
            b.update();
            setTimeout(bRepeat, 20);
        };
        bRepeat();
        this.pointCollectionList.push(b);
        this.startRepainter(10);
    };
    HelloComponent.prototype.startRepainter = function (interval) {
        var _this = this;
        var repeat = function () {
            var ctx = _this.canvas.nativeElement.getContext('2d');
            ctx.clearRect(0, 0, _this.width, _this.height);
            for (var _i = 0, _a = _this.pointCollectionList; _i < _a.length; _i++) {
                var pc = _a[_i];
                pc.draw(ctx);
            }
            setTimeout(repeat, interval);
        };
        repeat();
    };
    HelloComponent.prototype.onMousemove = function (e) {
        var native = this.canvas.nativeElement;
        var xPos = (e.pageX - native.offsetLeft) / native.offsetWidth * this.width;
        var yPos = (e.pageY - native.offsetTop) / native.offsetHeight * this.height;
        this.setAllMousePosition(xPos, yPos);
    };
    HelloComponent.prototype.onMouseleave = function (e) {
        for (var _i = 0, _a = this.pointCollectionList; _i < _a.length; _i++) {
            var pc = _a[_i];
            pc.setMousePos(Number.MAX_VALUE, Number.MAX_VALUE);
        }
    };
    HelloComponent.prototype.setAllMousePosition = function (xPos, yPos) {
        for (var _i = 0, _a = this.pointCollectionList; _i < _a.length; _i++) {
            var pc = _a[_i];
            pc.setMousePos(xPos, yPos);
        }
    };
    return HelloComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myCanvas'),
    __metadata("design:type", Object)
], HelloComponent.prototype, "canvas", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HelloComponent.prototype, "onMousemove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HelloComponent.prototype, "onMouseleave", null);
HelloComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-hello',
        template: "\n  <canvas #myCanvas class='chess-diag' [height]=\"height\" [width]=\"width\"></canvas>\n  ",
        styles: ["\n  \t:host canvas {\n  \t\twidth: 100%;\n  \t\theight: 100%;\n      background: #CAC4A8;\n  \t}\n  "]
    }),
    __metadata("design:paramtypes", [])
], HelloComponent);

//# sourceMappingURL=hello.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointCollection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_color_convert__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_color_convert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_color_convert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alphabet__ = __webpack_require__(305);


var Vector = (function () {
    function Vector(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Vector;
}());
var Point = (function () {
    function Point(x, y, z, size, color) {
        this.color = color;
        this.bubbleShape = 'Bubble';
        this.curPos = new Vector(x, y, z);
        this.originalPos = new Vector(x, y, z);
        this.targetPos = new Vector(x, y, z);
        this.velocity = new Vector(0.0, 0.0, 0.0);
        this.radius = size;
        this.size = size;
    }
    Point.prototype.update = function (config) {
        var dx = this.targetPos.x - this.curPos.x;
        var dy = this.targetPos.y - this.curPos.y;
        // Orthogonal vector is [-dy,dx]
        var ax = dx * config.springStrength - config.rotationForce * dy;
        var ay = dy * config.springStrength + config.rotationForce * dx;
        this.velocity.x += ax;
        this.velocity.x *= config.friction;
        this.curPos.x += this.velocity.x;
        this.velocity.y += ay;
        this.velocity.y *= config.friction;
        this.curPos.y += this.velocity.y;
        var dox = this.originalPos.x - this.curPos.x;
        var doy = this.originalPos.y - this.curPos.y;
        var dd = (dox * dox) + (doy * doy);
        var d = Math.sqrt(dd);
        this.targetPos.z = d / 100 + 1;
        var dz = this.targetPos.z - this.curPos.z;
        var az = dz * config.springStrength;
        this.velocity.z += az;
        this.velocity.z *= config.friction;
        this.curPos.z += this.velocity.z;
        this.radius = this.size * this.curPos.z;
        if (this.radius < 1)
            this.radius = 1;
    };
    Point.prototype.draw = function (ctx, dx, dy) {
        ctx.fillStyle = this.color;
        if (this.bubbleShape == 'square') {
            ctx.beginPath();
            ctx.fillRect(this.curPos.x + dx, this.curPos.y + dy, this.radius * 1.5, this.radius * 1.5);
        }
        else {
            ctx.beginPath();
            ctx.arc(this.curPos.x + dx, this.curPos.y + dy, this.radius, 0, Math.PI * 2, true);
            ctx.fill();
        }
    };
    ;
    return Point;
}());
function hexToRgb(str) {
    try {
        if (str[0] === '#')
            return __WEBPACK_IMPORTED_MODULE_0_color_convert__["hex"].hsl(str);
        else
            return __WEBPACK_IMPORTED_MODULE_0_color_convert__["keyword"].hsl(str);
    }
    catch (e) {
        console.log(str + ' cannot be converted into color');
        return [0, 0, 0];
    }
}
var PointCollection = (function () {
    function PointCollection(str, range, config) {
        this.config = config;
        this.mousePos = new Vector(0, 0, 0);
        this.pointCollectionX = 0;
        this.pointCollectionY = 0;
        var letterColors = [];
        for (var _i = 0, _a = config.letterColors; _i < _a.length; _i++) {
            var colorCode = _a[_i];
            letterColors.push(hexToRgb(colorCode));
        }
        this.points = parsePoints(str, range, letterColors);
    }
    PointCollection.prototype.update = function () {
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];
            var dx = this.mousePos.x - point.curPos.x;
            var dy = this.mousePos.y - point.curPos.y;
            var dd = (dx * dx) + (dy * dy);
            var d = Math.sqrt(dd);
            if (d < 150) {
                point.targetPos = new Vector(point.curPos.x - dx, point.curPos.y - dy, 0);
            }
            else {
                point.targetPos = point.originalPos;
            }
            point.update(this.config);
        }
    };
    PointCollection.prototype.shake = function () {
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];
            var dx = this.mousePos.x - point.curPos.x;
            var dy = this.mousePos.y - point.curPos.y;
            var dd = (dx * dx) + (dy * dy);
            var d = Math.sqrt(dd);
            if (d < 50) {
                this.pointCollectionX = Math.floor(Math.random() * 5) - 2;
                this.pointCollectionY = Math.floor(Math.random() * 5) - 2;
            }
        }
    };
    PointCollection.prototype.draw = function (ctx) {
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];
            if (point === null)
                continue;
            point.draw(ctx, this.pointCollectionX, this.pointCollectionY);
        }
    };
    PointCollection.prototype.setMousePos = function (x, y) {
        this.mousePos = new Vector(x, y, 0);
    };
    return PointCollection;
}());

;
function makeColor(hslList, fade) {
    var hue = hslList[0] /*- 17.0 * fade / 1000.0*/;
    var sat = hslList[1] + 81.0 * fade / 1000.0;
    var lgt = hslList[2] /*+ 58.0 * fade / 1000.0*/;
    return 'hsl(' + hue + ',' + sat + '%,' + lgt + '%)';
}
function phraseToHex(phrase) {
    var hexphrase = '';
    for (var i = 0; i < phrase.length; i++) {
        hexphrase += phrase.charCodeAt(i).toString(16);
    }
    return hexphrase;
}
function parsePoints(str, range, letterColors) {
    var border_percentage = 2 / (str.length + 4);
    var xmin = Number.MAX_VALUE;
    var ymin = Number.MAX_VALUE;
    var xmax = 0;
    var ymax = 0;
    var data = [];
    var offset = 0;
    function addLetter(cc_hex, ix, letterCols) {
        var chr_data = __WEBPACK_IMPORTED_MODULE_1__alphabet__["a" /* alphabet */][cc_hex].P;
        var bc = letterColors[ix % letterColors.length];
        for (var i = 0; i < chr_data.length; ++i) {
            var point = chr_data[i];
            var x = point[0] + offset;
            xmin = Math.min(xmin, x);
            xmax = Math.max(xmax, x);
            var y = point[1];
            ymin = Math.min(ymin, y);
            ymax = Math.max(ymax, y);
            data.push({
                x: x,
                y: y,
                r: point[2],
                c: makeColor(bc, point[3])
            });
        }
        offset += __WEBPACK_IMPORTED_MODULE_1__alphabet__["a" /* alphabet */][cc_hex].W;
    }
    var hexphrase = phraseToHex(str);
    var col_ix = -1;
    for (var i = 0; i < hexphrase.length; i += 2) {
        var cc_hex = 'A' + hexphrase.charAt(i) + hexphrase.charAt(i + 1);
        if (cc_hex != 'A20')
            col_ix++;
        addLetter(cc_hex, col_ix, letterColors);
    }
    var xmid = (xmin + xmax) / 2;
    var xcenter = (range.right + range.left) / 2;
    var ymid = (ymin + ymax) / 2;
    var ycenter = (range.top + range.buttom) / 2;
    var ratioX = (range.right - range.left) / (xmax - xmin);
    var ratioY = (range.buttom - range.top) / (ymax - ymin);
    var ratioR = Math.min(ratioX, ratioY);
    for (var i = 0; i < data.length; ++i) {
        var d = data[i];
        var x = (d.x - xmid) * ratioX + xcenter;
        var y = (d.y - ymid) * ratioY + ycenter;
        data[i] = new Point(x, y, 0.0, d.r * ratioR, d.c);
    }
    return data;
}
;
//# sourceMappingURL=pointCollection.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoneCutter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stonecutter__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stonecutter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_stonecutter__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Grid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_stonecutter__["makeResponsive"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_stonecutter__["measureItems"])(__WEBPACK_IMPORTED_MODULE_1_react_stonecutter__["CSSGrid"], { measureImages: true }), {
    maxWidth: 1920,
    minPadding: 0
});
var StoneCutter = (function (_super) {
    __extends(StoneCutter, _super);
    function StoneCutter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StoneCutter.prototype.render = function () {
        var gridStyle = {
            'fontSize': '0.75rem',
            'padding': '7px',
        };
        var imageStyles = {
            'maxHeight': '150px',
            'width': '150px'
        };
        var imageArray = this.props.technologies.map(function (image, i) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: 'grid-item', key: i, style: gridStyle },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: image.href, target: '_blank' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: image.imageSrc, alt: image.name, style: imageStyles })));
        });
        var gridStyles = {
            'listStyle': 'none',
            'padding': '0',
            'margin': '0 auto'
        };
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Grid, { component: 'ul', columnWidth: 250, gutterWidth: 5, gutterHeight: 5, layout: __WEBPACK_IMPORTED_MODULE_1_react_stonecutter__["layout"].pinterest, duration: 500, easing: 'ease-out', style: gridStyles }, imageArray));
    };
    return StoneCutter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

//# sourceMappingURL=reactComponent.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(359),
        styles: [__webpack_require__(343)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageFooterComponent = (function () {
    function PageFooterComponent() {
    }
    PageFooterComponent.prototype.ngOnInit = function () {
    };
    return PageFooterComponent;
}());
PageFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-footer',
        template: __webpack_require__(360),
        styles: [__webpack_require__(344)]
    }),
    __metadata("design:paramtypes", [])
], PageFooterComponent);

//# sourceMappingURL=page-footer.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    return PageHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "title", void 0);
PageHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-header',
        template: __webpack_require__(361),
        styles: [__webpack_require__(345)]
    }),
    __metadata("design:paramtypes", [])
], PageHeaderComponent);

//# sourceMappingURL=page-header.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__project__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectCardComponent = (function () {
    function ProjectCardComponent() {
    }
    ProjectCardComponent.prototype.showRepos = function ($event) {
        window.open('https://github.com/fredzqm/' + this.project.repos, '_blank');
        $event.stopPropagation();
    };
    return ProjectCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__project__["Project"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project__["Project"]) === "function" && _a || Object)
], ProjectCardComponent.prototype, "project", void 0);
ProjectCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-card',
        template: __webpack_require__(363),
        styles: [__webpack_require__(347)],
        host: {
            'class': 'col-sm-12 col-md-6 col-lg-4 col-xl-3'
        }
    }),
    __metadata("design:paramtypes", [])
], ProjectCardComponent);

var _a;
//# sourceMappingURL=project-card.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chessProject; });
var chessProject = {
    name: 'Chess Grandmaster',
    information: "This Chess app built in Java with an Angular web interface. It supports all rules in Chess, including regular moves and captures plus those special moves like En Passant, Castling, and Pawn Promotion. It also keeps track of the records and allows undoing. I built this App with MVC in mind, so recently I was able to add a new web view easily. We built an Angular App, which talks to Firebase for each user action and board status. The Java server runs in Google App engine listens and handles these events. If you love Chess, invite your friend and let play!",
    overview: "\n<p>\n  I love playing Chess. After I learned Java in my first quarter at Rose, I started my first personal project -- Chess because I wanted to use my new Java skills to do something fun. This Chess app supports all rules in Chess, including regular moves and captures plus those special moves like En Passant, Castling, and Pawn Promotion. It also keeps track of the records and allows undoing. I built this App with MVC in mind, so recently I was able to add a new web view easily. We built an Angular App, which talks to Firebase for each user action and board status. The Java server runs in Google App engine listens and handles these events. \n<p/>\n<p>-*\n If you also love Chess, invite your friend and let play!\n</p>\n",
    image: 'assets/projects/Chess.png',
    repos: 'Chess',
    technologies: ['Java', 'Firebase', 'Angular', 'Yarn', 'Gradle'],
    detailComponent: null,
};
//# sourceMappingURL=chess-project.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CPUProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CPUProjectComponent = (function () {
    function CPUProjectComponent() {
    }
    return CPUProjectComponent;
}());
CPUProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cpu-project',
        template: __webpack_require__(365),
    })
], CPUProjectComponent);

//# sourceMappingURL=cpu-project.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cpuProejct; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cpu_project_component__ = __webpack_require__(314);

var cpuProejct = {
    name: 'CPU Project',
    information: "This is a computer architecture project, where a team of four designed and implemented a 15-bit processor",
    overview: null,
    image: 'assets/projects/datapath.png',
    repos: 'CPU',
    technologies: [],
    detailComponent: __WEBPACK_IMPORTED_MODULE_0__cpu_project_component__["a" /* CPUProjectComponent */],
};
//# sourceMappingURL=cpu-project.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dPSMProejct; });
var dPSMProejct = {
    name: 'dPSM',
    information: "\n    This is a research project to solve delayed differential equation numerically with PSM. \n    This is a continuation of the Laplace research project with Dr. Isaia.\n    In MATLAB, I use template pattern to create a framework for defining computation rules for each iterations.\n    Within the framework, we can specify the relationship among each component of the delayed DE.\n  ",
    overview: null,
    image: 'assets/projects/dPSM.jpg',
    repos: 'dPSM',
    technologies: ['MATLAB'],
    detailComponent: null,
};
//# sourceMappingURL=dPSM-project.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return diggerGameProject; });
var diggerGameProject = {
    name: 'Digger Game',
    information: "This is a freshmen intro project. It mimics the old Arcade Game, and also make the ghosts smart.",
    overview: null,
    image: 'assets/projects/diggergame.png',
    repos: 'diggerGame',
    technologies: ['Java'],
    detailComponent: null,
};
//# sourceMappingURL=digger-game-project.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jobeeProject; });
var jobeeProject = {
    name: 'Jobee',
    information: "This is an Android app for sharing resumes via QR code. There are two part of the app -- recruiter side and job seeker side. The job seeker can post their resumes and generate QR code. The recruiter can post jobs and accept job applicant by scanning the QR code. I also built notification system with Firebase cloud messaging",
    overview: null,
    image: 'assets/projects/jobee.png',
    repos: 'jobee',
    technologies: ['Android', 'Gradle', 'Firebase'],
    detailComponent: null
};
//# sourceMappingURL=jobee-project.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaplaceProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LaplaceProjectComponent = (function () {
    function LaplaceProjectComponent() {
    }
    return LaplaceProjectComponent;
}());
LaplaceProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-laplace-project',
        template: "\n    <app-read-me repos=\"laplace\"></app-read-me>\n    <pdf-viewer\n      src=\"https://raw.githubusercontent.com/fredzqm/laplace/master/paper/laplace.pdf\"\n      [zoom]=\"1.9\"\n      page=\"page\"\n      [render-text]=\"true\"\n      [show-all]=\"true\">\n    </pdf-viewer>\n  "
    })
], LaplaceProjectComponent);

//# sourceMappingURL=laplace-project.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return laplaceProejct; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__laplace_project_component__ = __webpack_require__(319);

var laplaceProejct = {
    name: 'Numerical Inverse Laplace Transform',
    information: "This is a mathematical research project about computing inverse laplace transform through numerical method. Based on Post\u2019s Inversion Formula, we are trying to approximate inverse Laplace transform by solving high order differential equations. I built a MATLAB model that uses Picard Iteration to solve high order differential equations that consists of only plus, multiple operation. It can be shown that every differential equation can be converted into such form.",
    overview: "\n <p>\n This is a mathematical research project about computing inverse laplace transform through numerical method. I was invited by Dr. Isaia to work on this project. Based on Post\u2019s Inversion Formula, we tried to approximate inverse Laplace transform by solving high order differential equations. I built a MATLAB model that uses Picard Iteration to solve high order differential equations that consists of only plus, multiple operation. It can be shown that every differential equation can be converted into such form.\n </p>\n <p>\n The image on the left is the result of computing <img height=\"50px\" src=\"paper/example.png\">. The red dots is the expectated value, and the blue line is the computed result through Post's Inversion formula.\n</p>\n  ",
    image: 'assets/projects/laplace-example.png',
    repos: 'laplace',
    technologies: ["MATLAB"],
    detailComponent: __WEBPACK_IMPORTED_MODULE_0__laplace_project_component__["a" /* LaplaceProjectComponent */],
};
//# sourceMappingURL=laplace-project.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapProejct; });
var mapProejct = {
    name: 'Path Finder',
    information: "\n  Path finder is an attemmpt to solve the classic shortest path problem scalably with Hadoop. \n  We import open street map data into hive and then run my divide-and-conquer algorithm to produce multi-level maps.\n  ",
    overview: "\n  Map project is an attemmpt to solve the classic shortest path problem scalably with Hadoop. We import open street map data into hive with \n  <a href=\"https://github.com/PanierAvide/OSM2Hive\">OSM2Hive</a>. Then we created scripts to preprocess the data:\n  <ol>\n    <li>Divide map into smaller maps with certain configurable maximum spots and minimum area.</li>\n    <li>Serialized data into customized 2D map data structure, represented as bytearray in hive and pig script.</li>\n    <li>Run Warshall's algorithm on each small map and generate the travel distance matrix</li>\n    <li>Merge smaller maps into large maps by picking hot spots that tends to be traffic center</li>\n  </ol>\n  <p>\n    The merge algorithm based on the assumption that most quickest path within a block should not pass through non-adjacent blocks.\n    This assumption might not be true, but provides a good approximation to save unnecessary computation.\n  </p>\n  <p class=\"center\">\n    &forall; X &isin; {Path from A to B} : |X - B| < 2|X - A| &and; |X - A| < 2|X - B|\n  </p>\n  <p>\n    Through those steps, we were able to create distance matrix data for huge amount of data scalable.\n    Both the time and complexity is O(nlogn), and Hadoop can help us parallelize tasks and achieve horizontal scale.\n  </p>\n  ",
    image: 'assets/projects/osm_logo_wiki.png',
    repos: 'pathFinder',
    technologies: ['Hadoop', 'Pig', 'Hive', 'Java', 'Oozie'],
    detailComponent: null,
};
//# sourceMappingURL=map-project.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return operatingSystemProject; });
var operatingSystemProject = {
    name: 'Operating System',
    information: "\n  An old-fashion command-line based operating system project with basic file system and round-robin multiprocess scheduler.\n  The project is built with bochs CPU simulator, which simulates the boot process of a computer.\n  We use floppya.img to simulate the hard disk storage, and copy some bootload assembly into the first segment, which loads our kernel upon boot.\n  ",
    overview: null,
    image: 'assets/projects/OperatingSystem.jpg',
    repos: 'Operating-System',
    technologies: ['C'],
    detailComponent: null
};
//# sourceMappingURL=operating-system-project.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemeProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terminal__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchemeProjectComponent = (function () {
    function SchemeProjectComponent() {
        this.interpreter = new BiwaScheme.Interpreter();
        this.eval = this.eval.bind(this);
    }
    SchemeProjectComponent.prototype.eval = function (input) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.interpreter.on_error = function (error) {
                resolve(error.message);
            };
            var result = _this.interpreter.evaluate(input);
            resolve(result);
        });
    };
    SchemeProjectComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* Terminal */], { interpreter: this.eval, prompt: '$  >' }), document.getElementById('terminal'));
    };
    return SchemeProjectComponent;
}());
SchemeProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-scheme-project',
        template: __webpack_require__(366),
        styles: [__webpack_require__(349)]
    }),
    __metadata("design:paramtypes", [])
], SchemeProjectComponent);

//# sourceMappingURL=scheme-project.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schemeProject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheme_project_component__ = __webpack_require__(323);

var schemeProject = {
    name: 'Scheme Interpreter',
    information: "This is a Scheme interpreter project for CSSE304(Programming language concept) course at Rose. Apart from implementing the required syntax including, lambda, set!, if, let, letrec, etc, I also implement define-syntax, which gives my interpreter the ultimate extensibility.",
    overview: "\n<p>\n  Scheme a small programming language that can be defined in <a href=\"http://scheme.com/tspl4/further.html#./further:h0\">a single-page context-free grammar</a>, with only five core keywords. Each of them matches to a core programming language concept.\n</p>\n<ol>\n  <li>lambda (closure)</li>\n  <li>set! and define (assignment)</li>\n  <li>if (condition)</li>\n  <li>literal (quote)</li>\n</ol>\n<p>\n  Scheme is an extensibility <a href=\"https://www.youtube.com/watch?v=_ahvzDzKdB0\" target=\"_blank\">growing language</a>. Instead of introducing more keywords to the language, Scheme embraces <a href=\"http://scheme.com/tspl4/syntax.html#./syntax:s12\">define-syntax</a>, a framework to define new syntax as equivalent existing expressions. With no primitive loop, Scheme actually achieves loops through recursion.\n</p>\n<p>\n  I built a Scheme in our <a href=\"http://www.rose-hulman.edu/class/cs/csse304/201630/Schedule/Schedule.htm\" target=\"_blank\">programming programming concepts course</a> Within the interpreter project, I went beyond the expectation and implemented define-syntax, which significantly reduces the marginal development time to add a additional syntax to my interpreter. That is why I enjoy building framework and extensible software.\n</p>\n<p>\nScheme is a functional programming language. I learned about continuation from Scheme and found power in callbacks and asynchronous event-based programming. In fact, we went a bit forward and implement <a href=\"http://scheme.com/tspl4/control.html#./control:s54\">call-with-current-continuation (call/cc)</a> in our interpreter. Call/cc highlights the key concept behind exception handling and Promise.\n</p>\n<p>\nThis scheme project is in <a href=\"http://www.scheme.com/\">Chez Scheme</a>, which does not have a javascript library. I found <a href=\"http://www.biwascheme.org/\">Biwascheme</a>, something similar in npm and added an interactive shell here, so you can play with Scheme here.\nThe codes in the image show a syntax expansion rule for while loop. It only works in my interpreter (not Chez Scheme or Biwascheme), but I found it to be a very elegant though convoluted way of implementing while loop with the fundamental buidling blocks of programming concepts.\n</p>\n",
    image: 'assets/projects/scheme_project.png',
    repos: 'Scheme_interpreter',
    technologies: ['Scheme'],
    detailComponent: __WEBPACK_IMPORTED_MODULE_0__scheme_project_component__["a" /* SchemeProjectComponent */],
};
//# sourceMappingURL=scheme-project.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Terminal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_autosize_textarea__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_autosize_textarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_autosize_textarea__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Terminal = (function (_super) {
    __extends(Terminal, _super);
    function Terminal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            history: ['Shift + Enter to execute the scheme code'],
            command: ''
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleInput = _this.handleInput.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Terminal.prototype.componentDidMount = function () {
        this.term.focus();
    };
    Terminal.prototype.componentDidUpdate = function () {
        var container = document.getElementById('terminal');
        var el = __WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"](this);
        container.scrollTop = el.scrollHeight;
    };
    Terminal.prototype.handleChange = function (e) {
        this.setState({
            command: e.target.value.trimLeft()
        });
    };
    Terminal.prototype.handleInput = function (e) {
        var _this = this;
        if (e.key === 'Enter' && e.shiftKey) {
            var command_1 = this.state.command;
            this.setState(function (prevState, props) {
                prevState.history.push(props.prompt + prevState.command);
                prevState.command = '';
                return prevState;
            }, function () {
                _this.props.interpreter(command_1)
                    .then(function (output) {
                    _this.setState(function (prevState, props) {
                        prevState.history.push(output.toString());
                        prevState.command = '';
                        return prevState;
                    });
                });
            });
        }
    };
    Terminal.prototype.handleClick = function (e) {
        this.term.focus();
    };
    Terminal.prototype.render = function () {
        var _this = this;
        var output = this.state.history.map(function (op, i) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { key: i }, op);
        });
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'terminal', onClick: this.handleClick },
            output,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'prompt' },
                    this.props.prompt,
                    " "),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_autosize_textarea___default.a, { value: this.state.command, onChange: this.handleChange, onKeyPress: this.handleInput, innerRef: function (el) { return _this.term = el; } }))));
    };
    return Terminal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

//# sourceMappingURL=terminal.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return umlGeneratorProject; });
var umlGeneratorProject = {
    name: 'UML Generator',
    information: "UML generator is an extensible tool for generating a UML for any Java project. It parses the java bytecode with ASM library, and generate svg image via GraphViz. The UML includes the methods and fields of each class and their inheritance, dependency relationships. We also add design pattern detector or our UML generator. We have built-in support for detecting strategy, observer, decorator and adapter pattern. You may implement your own pattern detector.",
    overview: null,
    image: 'assets/projects/DecLab.svg',
    repos: 'UMLGenerator',
    technologies: ['Java', 'GraphViz', 'Gradle'],
    detailComponent: null
};
//# sourceMappingURL=uml-generator-project.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urlConnectProejct; });
var urlConnectProejct = {
    name: 'Url Connect',
    information: "This is a chrome extension chat room app built in React. The main idea is to talk to people who are visiting the same website. Based on the url in your browser, you will be in a different chat room. We use firebase to keep track of users at each url and messages history. Whenever all users left the room, the room is removed to save storage. We also support private room with a token and video chat via WebRTC.",
    overview: null,
    image: 'assets/projects/url_connect.png',
    repos: 'url_connect',
    technologies: ["Chrome Extension", "React", "Webpack", "Typescript", "Yarn"],
    detailComponent: null,
};
//# sourceMappingURL=url-connect-project.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Route; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_list_project_list_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_error_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resume_resume_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_detail_project_detail_component__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'detail/:repos', component: __WEBPACK_IMPORTED_MODULE_7__project_detail_project_detail_component__["b" /* ProjectDetailRoutingComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_2__project_list_project_list_component__["a" /* ProjectListComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_6__resume_resume_component__["a" /* ResumeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__error_error_component__["a" /* ErrorComponent */] }
];
var Route = (function () {
    function Route() {
    }
    return Route;
}());
Route = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]]
    })
], Route);

//# sourceMappingURL=route.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vendorImages; });
var vendorImages = [{
        href: 'https://git-scm.com/',
        imageSrc: 'assets/technologies/git.png',
        name: 'Git'
    }, {
        href: 'https://www.oracle.com/java/index.html',
        imageSrc: 'assets/technologies/java.png',
        name: 'Java'
    }, {
        href: 'https://www.python.org/',
        imageSrc: 'assets/technologies/python.png',
        name: 'Python'
    }, {
        href: 'https://isocpp.org/',
        imageSrc: 'assets/technologies/cpp_logo.png',
        name: 'C++'
    }, {
        href: 'https://www.wikiwand.com/en/C_(programming_language)',
        imageSrc: 'assets/technologies/C.png',
        name: 'C'
    }, {
        href: 'https://isocpp.org/',
        imageSrc: 'assets/technologies/csharp.png',
        name: 'C#'
    }, {
        href: 'https://www.typescriptlang.org/',
        imageSrc: 'assets/technologies/typescript.png',
        name: 'Typescript'
    }, {
        href: 'https://www.mathworks.com/products/matlab.html',
        imageSrc: 'assets/technologies/MATLAB.png',
        name: 'MATLAB'
    }, {
        href: 'https://angular.io/',
        imageSrc: 'assets/technologies/angular.svg',
        name: 'Angular'
    }, {
        href: 'https://facebook.github.io/react/',
        imageSrc: 'assets/technologies/react.png',
        name: 'React'
    }, {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        imageSrc: 'assets/technologies/javascript.png',
        name: 'Javascript6'
    }, {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        imageSrc: 'assets/technologies/html.png',
        name: 'HTML5'
    }, {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        imageSrc: 'assets/technologies/css.png',
        name: 'CSS3'
    }, {
        href: 'https://firebase.google.com/',
        imageSrc: 'assets/technologies/firebase.png',
        name: 'Firebase'
    }, {
        href: 'https://www.ruby-lang.org/en/',
        imageSrc: 'assets/technologies/ruby.png',
        name: 'Ruby'
    }, {
        href: 'https://developer.apple.com/swift/',
        imageSrc: 'assets/technologies/swift.png',
        name: 'Swift'
    }, {
        href: 'https://www.android.com/',
        imageSrc: 'assets/technologies/android.png',
        name: 'Android'
    }, {
        href: 'https://developer.apple.com/ios/',
        imageSrc: 'assets/technologies/ios.jpg',
        name: 'IOS'
    }, {
        href: 'http://github.com/',
        imageSrc: 'assets/technologies/github.png',
        name: 'Github'
    }, {
        href: 'https://www.docker.com/',
        imageSrc: 'assets/technologies/docker.svg',
        name: 'Docker'
    }, {
        href: 'http://hadoop.apache.org/',
        imageSrc: 'assets/technologies/hadoop.png',
        name: 'Hadoop'
    }, {
        href: 'https://pig.apache.org/',
        imageSrc: 'assets/technologies/pig.png',
        name: 'Pig'
    }, {
        href: 'https://hive.apache.org/',
        imageSrc: 'assets/technologies/hive.png',
        name: 'Hive'
    }, {
        href: 'http://lucene.apache.org/solr/',
        imageSrc: 'assets/technologies/solr.png',
        name: 'Solr'
    }, {
        href: 'https://spark.apache.org/',
        imageSrc: 'assets/technologies/spark.png',
        name: 'Spark'
    }, {
        href: 'http://oozie.apache.org/',
        imageSrc: 'assets/technologies/oozie.png',
        name: 'Oozie'
    }, {
        href: 'http://sqoop.apache.org/',
        imageSrc: 'assets/technologies/sqoop.png',
        name: 'Sqoop'
    }, {
        href: 'https://zookeeper.apache.org/',
        imageSrc: 'assets/technologies/zookeeper.png',
        name: 'zookeeper'
    }, {
        href: 'https://kafka.apache.org/',
        imageSrc: 'assets/technologies/kafka.png',
        name: 'kafka'
    }, {
        href: 'http://maven.apache.org/',
        imageSrc: 'assets/technologies/maven.png',
        name: 'Maven'
    }, {
        href: 'https://gradle.org/',
        imageSrc: 'assets/technologies/gradle.png',
        name: 'Gradle'
    }, {
        href: 'https://projects.spring.io/spring-boot/',
        imageSrc: 'assets/technologies/spring-boot.png',
        name: 'Spring Boot'
    }, {
        href: 'https://nodejs.org/',
        imageSrc: 'assets/technologies/nodejs.svg',
        name: 'Node.js'
    }, {
        href: 'https://www.npmjs.com/',
        imageSrc: 'assets/technologies/npm.svg',
        name: 'npm'
    }, {
        href: 'https://yarnpkg.com/en/',
        imageSrc: 'assets/technologies/yarn.png',
        name: 'Yarn'
    }, {
        href: 'https://webpack.github.io',
        imageSrc: 'assets/technologies/webpack.png',
        name: 'Webpack'
    }, {
        href: 'http://getbootstrap.com/',
        imageSrc: 'assets/technologies/boostrap.png',
        name: 'Boostrap'
    }, {
        href: 'http://fontawesome.io/',
        imageSrc: 'assets/technologies/font-awesome.png',
        name: 'Font Awesome'
    }, {
        href: 'https://karma-runner.github.io',
        imageSrc: 'assets/technologies/karma.png',
        name: 'Karma'
    }, {
        href: 'http://gulpjs.com/',
        imageSrc: 'assets/technologies/gulp.png',
        name: 'Gulp'
    }, {
        href: 'http://mochajs.org/',
        imageSrc: 'assets/technologies/mocha.svg',
        name: 'Mocha'
    }, {
        href: 'http://sass-lang.com/',
        imageSrc: 'assets/technologies/sass.svg',
        name: 'Sass'
    }, {
        href: 'https://www.mongodb.org/',
        imageSrc: 'assets/technologies/mongodb.svg',
        name: 'Mongodb'
    }, {
        href: 'https://redis.io/',
        imageSrc: 'assets/technologies/redis.svg',
        name: 'Redis'
    }, {
        href: 'http://expressjs.com/',
        imageSrc: 'assets/technologies/express.png',
        name: 'express'
    }, {
        href: 'https://material.io/',
        imageSrc: 'assets/technologies/material-design.png',
        name: 'Material Design'
    }, {
        href: 'http://socket.io/',
        imageSrc: 'assets/technologies/socketio.svg',
        name: 'socket.io'
    }, {
        href: 'https://babeljs.io/',
        imageSrc: 'assets/technologies/babel.png',
        name: 'Babel'
    }, {
        href: 'http://flask.pocoo.org/',
        imageSrc: 'assets/technologies/flask.png',
        name: 'Flask'
    }, {
        href: 'https://developer.chrome.com/extensions',
        imageSrc: 'assets/technologies/chrome-extension.png',
        name: 'Chrome Extension'
    }, {
        href: 'http://www.graphviz.org/',
        imageSrc: 'assets/technologies/GraphvizLogo.png',
        name: 'GraphViz'
    }, {
        href: 'http://www.ni.com/en-us/shop/labview.html',
        imageSrc: 'assets/technologies/LabVIEW.png',
        name: 'LabVIEW'
    }, {
        href: 'http://www.scheme.com/tspl4/',
        imageSrc: 'assets/technologies/Lambda_lc.svg.png',
        name: 'Scheme'
    }, {
        href: 'https://tla.msr-inria.inria.fr/tlaps/content/Home.html',
        imageSrc: 'assets/technologies/TLA+.png',
        name: 'TLA+'
    }, {
        href: 'https://www.tensorflow.org/',
        imageSrc: 'assets/technologies/tensorflow.png',
        name: 'TensorFlow'
    }];
//# sourceMappingURL=technology.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        if (value.length > 180)
            return value.substring(0, 180) + '...';
        else
            return value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'truncate' })
], TruncatePipe);

//# sourceMappingURL=trunc.pipe.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".right {\r\n  float: right !important;\r\n}\r\n\r\nul:not(.browser-default) {\r\n  padding-left: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-floating, .dropdown-content, .collapsible, .side-nav {\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.collapsible span.badge {\r\n  margin-top: calc(1.5rem - 11px);\r\n}\r\n\r\n.collapsible .collection {\r\n  margin: 0;\r\n  border: none;\r\n}\r\n\r\n.modal.modal-fixed-footer {\r\n  padding: 0;\r\n  height: 70%;\r\n}\r\n\r\n.modal.modal-fixed-footer .modal-content {\r\n  position: absolute;\r\n  height: calc(100% - 56px);\r\n  max-height: 100%;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal.modal-fixed-footer .modal-footer {\r\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n\r\n.modal.bottom-sheet {\r\n  top: auto;\r\n  bottom: -100%;\r\n  margin: 0;\r\n  width: 100%;\r\n  max-height: 45%;\r\n  border-radius: 0;\r\n  will-change: bottom, opacity;\r\n}\r\n\r\n.collapsible {\r\n  border-top: 1px solid #ddd;\r\n  border-right: 1px solid #ddd;\r\n  border-left: 1px solid #ddd;\r\n  margin: 0.5rem 0 1rem 0;\r\n}\r\n\r\n.collapsible-header {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: block;\r\n  cursor: pointer;\r\n  -webkit-tap-highlight-color: transparent;\r\n  line-height: 1.5;\r\n  padding: 1rem;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.collapsible-header i {\r\n  width: 2rem;\r\n  font-size: 1.6rem;\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.collapsible-body {\r\n  display: none;\r\n  border-bottom: 1px solid #ddd;\r\n  box-sizing: border-box;\r\n  padding: 2rem;\r\n}\r\n\r\n.side-nav .collapsible,\r\n.side-nav.fixed .collapsible {\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.side-nav .collapsible li,\r\n.side-nav.fixed .collapsible li {\r\n  padding: 0;\r\n}\r\n\r\n.side-nav .collapsible-header,\r\n.side-nav.fixed .collapsible-header {\r\n  background-color: transparent;\r\n  border: none;\r\n  line-height: inherit;\r\n  height: inherit;\r\n  padding: 0 16px;\r\n}\r\n\r\n.side-nav .collapsible-header:hover,\r\n.side-nav.fixed .collapsible-header:hover {\r\n  background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.side-nav .collapsible-header i,\r\n.side-nav.fixed .collapsible-header i {\r\n  line-height: inherit;\r\n}\r\n\r\n.side-nav .collapsible-body,\r\n.side-nav.fixed .collapsible-body {\r\n  border: 0;\r\n  background-color: #fff;\r\n}\r\n\r\n.side-nav .collapsible-body li a,\r\n.side-nav.fixed .collapsible-body li a {\r\n  padding: 0 23.5px 0 31px;\r\n}\r\n\r\n.collapsible.popout {\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.collapsible.popout > li {\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n  margin: 0 24px;\r\n  transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n.collapsible.popout > li.active {\r\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n  margin: 16px 0;\r\n}\r\n\r\n.side-nav .collapsible {\r\n  margin: 0;\r\n}\r\n\r\n.side-nav .collapsible-body > ul:not(.collapsible) > li.active,\r\n.side-nav.fixed .collapsible-body > ul:not(.collapsible) > li.active {\r\n  background-color: #ee6e73;\r\n}\r\n\r\n.side-nav .collapsible-body > ul:not(.collapsible) > li.active a,\r\n.side-nav.fixed .collapsible-body > ul:not(.collapsible) > li.active a {\r\n  color: #fff;\r\n}\r\n\r\n.side-nav .collapsible-body {\r\n  padding: 0;\r\n}\r\n\r\n/*@import \"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/css/materialize.min.css\";*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".about-row{\r\n  padding-top: 7%;\r\n}\r\n\r\np {\r\n  text-indent: 50px;\r\n}\r\n\r\ndiv.collapsible-header {\r\n  font-size: 32px;\r\n  font-family: 'Yanone Kaffeesatz', sans-serif;\r\n  font-weight: bold;\r\n}\r\n\r\ndiv.collapsible-body {\r\n  font-size: 20px;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n}\r\n\r\ndiv.collapsible-body ol li {\r\n  list-style: circle inside;\r\n}\r\n\r\ndiv.collapsible-body ul li {\r\n  list-style: circle inside;\r\n}\r\n\r\ndiv.collapsible-header a {\r\n  margin-left: 0.7em;\r\n}\r\n\r\ndiv.collapsible-header a img {\r\n  height: 35px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "#Hello {\r\n  height: 100vh;\r\n}\r\n\r\n#sidebar {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".error-row{\r\n    margin-top: 7%;\r\n    height: 100%;\r\n    color: black;\r\n}\r\n\r\n.spacer {\r\n    height: 40%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".jumbotron {\r\n    padding: 0;\r\n    max-height: 40%;\r\n}\r\n\r\n.jumbo {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.btn-app{\r\n    border-top: 1px solid black;\r\n    border-bottom: 1px solid black;\r\n    color: black;\r\n}\r\n\r\n.spacer {\r\n    min-height: 3%;\r\n}\r\n\r\napp-hello {\r\n  height: 600px;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Gloria Hallelujah', cursive;\r\n  font-size: 3em;\r\n  line-height: 4em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "md-toolbar button {\r\n  font-size: 1.3em;\r\n  margin: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.fill-remaining-space {\r\n  /*This fills the remaining space, by using flexbox.\r\n Every toolbar row uses a flexbox row layout. */\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.useAwesomeFont {\r\n  margin-left: 1px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "footer {\r\n  border-top: 1px solid #eee;\r\n  padding: 30px 0;\r\n  text-align: center;\r\n  color: #aaa;\r\n  margin-top: 20px;\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  color: #BAAE6C;\r\n}\r\n\r\nfooter:hover {\r\n  color: #9A840D;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "header {\r\n  height: 120px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  font-family: 'Overpass', sans-serif;\r\n  color: #1E055F;\r\n  background: #CAC4A8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".project-image {\r\n  height: 80%;\r\n  width: 100%;\r\n}\r\n\r\n#gitHubLabel {\r\n  right: 10px;\r\n  position: absolute;\r\n  top: 10px;\r\n  background-color: #4C0D67;\r\n}\r\n\r\n.floatingLabel {\r\n  position: absolute;\r\n  top: 10px;\r\n  background-color: #F7F0D7;\r\n}\r\n\r\n#IntroCard {\r\n  margin: 35px 0px;\r\n}\r\n\r\n.card-block .card-text {\r\n  margin: 25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ":host {\r\n  margin-top: 20px;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  img.card-img-top {\r\n    height: 21em;\r\n  }\r\n  div.card {\r\n    height: 35em;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  img.card-img-top {\r\n    height: 17em;\r\n  }\r\n}\r\n\r\n:host:hover {\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n}\r\n\r\n:host p {\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.card-title {\r\n  color: #1E055F;\r\n  font-family: 'Pangolin', cursive;\r\n}\r\n\r\n#showRepos {\r\n  position: absolute;\r\n  right: 10px;\r\n  bottom: 10px;\r\n  background-color: #6D4A7C;\r\n}\r\n\r\n.card .card-title {\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".spacer {\r\n    padding-top: 10%;\r\n    padding-bottom: 5%;\r\n}\r\n\r\n.btn-app{\r\n    border-top: 1px solid black;\r\n    border-bottom: 1px solid black;\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "#terminal {\r\n  max-width: 1000px;\r\n  height: 400px;\r\n  background: #2b303b;\r\n  border-radius: 5px;\r\n  margin: 0 auto;\r\n}\r\n\r\n:host /deep/ .terminal {\r\n  padding: 20px 10px;\r\n  height: 100%;\r\n  font-family: Inconsolata, monospace;\r\n  font-size: 14px;\r\n  color: #dfe1e8;\r\n  background: #2b303b;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n}\r\n\r\n:host /deep/ .prompt {\r\n  color: #d28445;\r\n}\r\n\r\n:host /deep/ span.prompt {\r\n  float: left;\r\n}\r\n\r\n:host /deep/ textarea {\r\n  float: left;\r\n  border: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 22px;\r\n  background: #2b303b;\r\n  color: #ebcb8b;\r\n  resize: none;\r\n  width: 95%;\r\n  outline: none;\r\n}\r\n\r\n:host /deep/ p {\r\n  margin-bottom: 0;\r\n  line-height: 21px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ":host {\r\n  padding: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "#DownloadButton {\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"About me\"></app-page-header>\r\n<div class=\"container\">\r\n  <div class=\"row about-row\">\r\n    <div class=\"col-sm-3\">\r\n      <img class=\"img-fluid img-thumbnail rounded\" src=\"assets/photo.png\" alt=\"Generic placeholder image\">\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <ul materialize=\"collapsible\" class=\"collapsible popout\" data-collapsible=\"expandable\">\r\n        <li>\r\n          <div class=\"collapsible-header active\">Overview\r\n            <a class=\"right\" href=\"http://www.rose-hulman.edu/\" target=\"_blank\"><img src=\"assets/rose-hulman.png\"></a>\r\n          </div>\r\n          <div class=\"collapsible-body\">\r\n            <p>\r\n              I am Fred Zhang, a <span mdTooltip=\"Computer science\" mdTooltipPosition=\"above\">CS</span>/<span mdTooltip=\"Software engineering\" mdTooltipPosition=\"above\">SE</span>/<span mdTooltip=\"Computer engineering\" mdTooltipPosition=\"above\">CPE</span>\r\n              senior at <a href=\"http://www.rose-hulman.edu\" target=\"_blank\">Rose-Hulman</a> with 4.0 GPA in all major related courses.\r\n              I will graduate in May 2018 and seek for full-time software engineer positions.\r\n              I started Rose with zero programming experience as an <span mdTooltip=\"Electrical engineering\" mdTooltipPosition=\"above\">EE</span>.\r\n              In my freshmen year at Rose, I found myself fascinated by smart algorithms and how much and how quickly I can do just by programming, so I switched my major.\r\n            </p>\r\n            <p>\r\n              Life at Rose-Hulman aren't so easy, which means I will leave fully equipped.\r\n              I see every single course project as an opportunity to learn new technologies, so I always try something different each time.\r\n              Therefore, I know so many <a routerLink=\"/home\">new technologies</a>.\r\n              As I wrote more codes, I found two things that excite me the most:\r\n            </p>\r\n            <ol>\r\n              <li>Data, Data, Data!!</li>\r\n              <li>Extensible software</li>\r\n            </ol>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"collapsible-header\">Internship At Groupon\r\n            <a class=\"right\" href=\"https://www.mysql.com/\" target=\"_blank\"><img src=\"assets/technologies/mysql.png\"></a>\r\n            <a class=\"right\" href=\"https://www.groupon.com\" target=\"_blank\"><img src=\"assets/groupon-g.png\"></a>\r\n          </div>\r\n          <div class=\"collapsible-body\">\r\n            <p>\r\n              This summer (2017), I am interning at <a href=\"https://www.groupon.com\">Groupon</a> in Seattle.\r\n              I am happy that I got work on an inventory supply team and learned so much about development and deployment practice within a <b>microservice architecture</b>.\r\n              My intern project is removing one external dependency of our service by creating new endpoints and migrating data.\r\n              I worked on mysql migration scripts, Java Ebeans entities and API updates.\r\n              Working on a deployed system is so much different from a course project.\r\n              Every deployment involving changes in API or workflow requires extreme caution.\r\n              To mitigate the risks, we have to come up with meticulous rollback planning in case something goes wrong.\r\n              I also become familiar with <b>agile process</b> and task management tools like JIRA.\r\n            </p>\r\n            <p>\r\n              I feel so lucky to have so many wonderful teammates who help and guide me through this internship.\r\n              I learned so much in the discussions with my mentors and teammates.\r\n              Intern life at Groupon in Seattle is so fun. I enjoyed Seattle sea foods and roof top grills with friends.\r\n              I am actually surprised by how much free time I have after work. Perhaps I worked too hard at Rose,\r\n              but I am so looking forward to my life after graduation!\r\n            </p>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"collapsible-header\">Go Data!\r\n            <a class=\"right\" href=\"https://hive.apache.org/\" target=\"_blank\"><img src=\"assets/technologies/hive.png\"></a>\r\n            <a class=\"right\" href=\"https://pig.apache.org/\" target=\"_blank\"><img src=\"assets/technologies/pig.png\"></a>\r\n            <a class=\"right\" href=\"http://hadoop.apache.org/\" target=\"_blank\"><img src=\"assets/technologies/hadoop.png\"></a>\r\n          </div>\r\n          <div class=\"collapsible-body\">\r\n            <p>\r\n              I am a huge fan of <b>Hadoop</b> ecosystem and <b>MapReduce</b> after I took the class with <a href=\"http://www.rose-hulman.edu/academics/faculty/mohan-sriram-mohan.html\">Sriram</a>.\r\n              It is an incredible growing community with so many <i>“cute animals”</i> to help us out.\r\n              To name a few, I enjoy working with Pig, Hive, Hbase, Solr, Oozie, Sqoop, Zookeeper.\r\n              I learned about Spark, Storm, Kafka and their ability to work with data in real-time.\r\n              I use hive and pig to build classic shortest path finding engine using data set from <a href=\"https://wiki.openstreetmap.org/wiki/Main_Page\">Open street map</a>.\r\n            </p>\r\n            <p>\r\n              In the information era, I believe that traditional relational database can no longer scale in the era of the data explosion.\r\n              To guarantee reliability, we need distributed file systems like <span mdTooltip=\"Hadoop distributed file system\" mdTooltipPosition=\"above\">HDFS</span> or GFS.\r\n              With DFS, we can have luxury of storing the complete history view, and using MapReduce to extract any data we want.\r\n              I am very excited for those advancements and want to build a robust and scalable system.\r\n              In addition, when the system is required to be highly available real-time system, the trade-offs among <span mdTooltip=\"Consistency\" mdTooltipPosition=\"above\">C</span> and <span mdTooltip=\"Tolerant for network partition\" mdTooltipPosition=\"above\">P</span> become fascinating.\r\n            </p>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"collapsible-header\">Design Extensible Software\r\n            <span class=\"right\">Gang of Four</span>\r\n          </div>\r\n          <div class=\"collapsible-body\">\r\n            <p>\r\n              I freaks out when coding becomes robotic-like chores.\r\n              Here are two examples from both work and school. All of them have logical design and are used for many years.\r\n              However, I do not like them because making changes involves tedious and repetitive work.\r\n              The bad code smell here specifically is shotgun surgery.\r\n            </p>\r\n            <ol>\r\n              <li>\r\n                In order to add an additional attribute in an entity,\r\n                <ol>\r\n                  <li>Add it to the database table</li>\r\n                  <li>Add it to the Java entity class</li>\r\n                  <li>Add it to the Typescript entity class</li>\r\n                  <li>Add it to the Python entity class</li>\r\n                  <li>Add support in the manager class for this entity</li>\r\n                  <li>......</li>\r\n                </ol>\r\n                Why not create a library that generates cross-languages entities and serialization codes?\r\n                So we only need to modify one file and the rest is auto-generated.\r\n                In fact, thanks to Google, we have <a href=\"https://github.com/google/protobuf\">protobuf</a> that does exactly this.\r\n              </li>\r\n              <br />\r\n              <li>\r\n                In order to add support for new syntax in this interpreter,\r\n                <ol>\r\n                  <li>Add a new data type to represent this syntax</li>\r\n                  <li>Add an additional case in expression parsing phase</li>\r\n                  <li>Add an additional case in interpreting phase</li>\r\n                </ol>\r\n                Why not create a interface called Syntax with two method parse() and interpret()?\r\n                So we can group coupled procedures in the same place.\r\n                I was facing similar issues in my <a href=\"https://github.com/fredzqm/Scheme_interpreter\">Scheme Interpreter</a>, and ended in another way.\r\n              </li>\r\n              <br />\r\n            </ol>\r\n            <p>\r\n              My point is that software design matters. A good design saves development time and headaches when requirement changes.\r\n              I learned so much about design principals and patterns from <a href=\"http://www.rose-hulman.edu/academics/course-catalog/current/programs/Computer%20Science/csse-374.html\">Software design course</a> of <a href=\"https://www.rose-hulman.edu/academics/faculty/hays-mark-hays.html\">Dr. Hays</a>.\r\n              I want to work on extensible software that can grows, in particular libraries or frameworks used by a community.\r\n              I want make impacts by applying design techniques to improve the productivity of the whole community.\r\n            </p>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"collapsible-header\">Web Development\r\n            <a class=\"right\" href=\"https://firebase.google.com/\" target=\"_blank\"><img src=\"assets/technologies/firebase.png\"></a>\r\n            <a class=\"right\" href=\"https://facebook.github.io/react/\" target=\"_blank\"><img src=\"assets/technologies/react.png\"></a>\r\n            <a class=\"right\" href=\"https://angular.io/\" target=\"_blank\"><img src=\"assets/technologies/angular.svg\"></a>\r\n            <a class=\"right\" href=\"https://nodejs.org/en/\" target=\"_blank\"><img src=\"assets/technologies/nodejs.png\"></a>\r\n          </div>\r\n          <div class=\"collapsible-body\">\r\n            <p>\r\n              After many course projects, I also gathered quite web development experience.\r\n              Many people prefer Angular or React over the other. To me, they are very different. Angular is a framework, while React is a library.\r\n              I love them both especially when you can easily use React component within an Angular App.\r\n              In fact, I build this website with Angular, but also uses a few React library, like <a href=\"https://www.npmjs.com/package/react-stonecutter\">react-stonecutter</a>.\r\n            </p>\r\n            <p>\r\n              For other common platforms, I also worked with Android, Chrome extension, ASP.NET and Spring Boot.\r\n              Web development is such a rapid-growing area with numerous node packages for us to choose.\r\n              One thing that I used quite often is Firebase. As a NoSQL database with real-time within built-in event event broadcasting and off-line support,\r\n              Firebase makes building application that only needs CRUD operations so easy.\r\n              I also used Firebase messaging for my Android app -- <a href=\"https://github.com/fredzqm/Jobee\">Jobee</a>.\r\n            </p>\r\n            <p>\r\n              I had some web development experience, but I am not very particularly into building websites as a full-time position.\r\n              However, I am always excited if I can contribute to those frameworks and libraries to help improve the community.\r\n            </p>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"collapsible-header\">Project</div>\r\n          <div class=\"collapsible-body\">\r\n            <p>\r\n              It is hard to get to know me until you see the projects I worked.\r\n              In the end, I want to describe a couple of my favorite projects from my projects. There are so many interesting one, so I regret that I cannot illustrate all of them here.\r\n              How about my first project right after I learned Java in my freshman year? It is my wonderful <a href=\"https://github.com/fredzqm/Chess\">chess project</a>.\r\n              I love playing chess and I had so many free time in my <span mdTooltip=\"(They do not let my overload)\" mdTooltipPosition=\"above\">first quarter at Rose</span>, so I started this personal project.\r\n              The code written by an newbie was functional but <a href=\"https://github.com/fredzqm/Chess/commit/7309b6d03c102e0c8ae55f55804d83edbef38d71\">not so great in quality</a>.\r\n              In sophomore year thanksgiving break, I learned MVC pattern and realized that bad design was the reason it became so difficult to add new features to this project.\r\n              I spent that week refactoring the code base into MVC pattern because I wanted to <a href=\"https://github.com/fredzqm/Chess/tree/ad5c9799e86579013170935618965c59cdbb7b11\">make it great and add more features</a>.\r\n              In my junior year, I took a software evolution class which focuses on improving legacy code through refactoring. I was glad that my team (Coco Liu, John Hein and me) chose my little Chess project.\r\n              We worked ambitiously, not only improved code quality, added tests and new features, but also put it onto the web.\r\n              MVC design pattern shines because we can easily inject a fresh new web view while having the rest of the code base untouched.\r\n              We built the frontend in Angular4 and used Firebase as the tier between Java backend and web frontend (https://fredzqm.github.io/Chess/).\r\n              I continued to work on my Chess app because I am passionate about what I enjoy and cannot tolerate mediocre result.\r\n              The functional java applet created by the freshman newbie was functional but was going to die without a good design.\r\n              I was not OK with spaghetti codes, so I spent time improving and growing them. This is just one of many projects I worked on and loved.\r\n              I always pursue extensibility and have zero tolerant with poor design.\r\n            </p>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"collapsible-header\">Honors & Activities</div>\r\n          <div class=\"collapsible-body\">\r\n            <ul>\r\n              <li>\r\n                Eta Kappa Nu (HKN), IEEE National Honor Society\r\n              </li>\r\n              <li>\r\n                Alpha Lambda Delta (ALD), National Freshman Honor Society\r\n              </li>\r\n              <li>\r\n                Webmaster of International Student Association (ISA)\r\n              </li>\r\n              <li>\r\n                Certificate of Distinction in American Mathematics Competition, 2014\r\n              </li>\r\n              <li>\r\n                Third Place in Alfred R. Schmidt Freshman Mathematics Competition, 2015\r\n              </li>\r\n              <li>\r\n                Dean’s list for all terms (9 of 9) Rose-Hulman Institute of Technology\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-page-footer></app-page-footer>\r\n"

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    \r\n    <div class=\"row error-row bg-danger\">\r\n        \r\n        <div class=\"col-lg-12 spacer\">\r\n        </div>\r\n\r\n        <h1 class=\"text-center\">ERROR - NO PAGE EXISTS WITH THIS NAME!</h1>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <app-hello></app-hello>\r\n</div>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 text-center\">\r\n      <h1>Technologies that I love:</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 vendor-section\">\r\n      <div id=\"stonecutter\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n  <button md-button routerLink=\"/\" href=\"/\" fxHide fxShow.gt-md>\r\n    <md-icon>home</md-icon>\r\n    Home\r\n  </button>\r\n  <md-icon routerLink=\"/\" href=\"/\" fxShow fxHide.gt-md>home</md-icon>\r\n  <!-- This fills the remaining space of the current row -->\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <div fxLayout=\"row\" fxHide fxShow.gt-sm>\r\n    <button md-button routerLink=\"/projects\" href=\"/projects\">\r\n      <md-icon>list</md-icon>\r\n      Projects\r\n    </button>\r\n    <button md-button routerLink=\"/about\" href=\"/about\">\r\n      <md-icon>star half</md-icon>\r\n      About\r\n    </button>\r\n    <button md-button routerLink=\"/resume\" href=\"/resume\">\r\n      <md-icon>assignment</md-icon>\r\n      Resume\r\n    </button>\r\n    <button md-button onclick=\"window.open('https://www.github.com/fredzqm', '_blank');\">\r\n      <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\r\n      GitHub\r\n    </button>\r\n    <button md-button onclick=\"window.open('http://www.linkedin.com/in/fredzqm','_blank');\">\r\n      <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n      LinkedIn\r\n    </button>\r\n  </div>\r\n  <md-icon md-button [md-menu-trigger-for]=\"menu1\" fxShow fxHide.gt-sm>\r\n    <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n  </md-icon>\r\n</md-toolbar>\r\n<md-menu x-position=\"before\" #menu1=\"mdMenu\">\r\n  <button md-menu-item routerLink=\"/projects\" href=\"/projects\">\r\n    <md-icon>list</md-icon>\r\n      Projects\r\n  </button>\r\n  <button md-menu-item routerLink=\"/about\" href=\"/about\">\r\n    <md-icon>star half</md-icon>\r\n    About\r\n  </button>\r\n  <button md-menu-item routerLink=\"/resume\" href=\"/resume\">\r\n    <md-icon>assignment</md-icon>\r\n    Resume\r\n  </button>\r\n  <button md-menu-item class=\"useAwesomeFont\" onclick=\"window.location='https://www.github.com/fredzqm';\">\r\n    <md-icon><i class=\"fa fa-github\" aria-hidden=\"true\"></i></md-icon>\r\n    GitHub\r\n  </button>\r\n  <button md-menu-item class=\"useAwesomeFont\" onclick=\"window.location='http://www.linkedin.com/in/fredzqm';\">\r\n    <md-icon><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></md-icon>\r\n    LinkedIn\r\n  </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

module.exports = "<footer>\r\n<div>\r\n  Copyright &copy; Fred(Qinmao) Zhang <br/> <br/>\r\n  Contact # <a href=\"mailto:qinmao.zhang@rose-hulman.edu\">qinmao.zhang@rose-hulman.edu</a> <br/>\r\n  Phone # <a href=\"tel:8122411392\">(812)&nbsp;241-1392</a> <br/>\r\n  GitHub # <a href=\"https://github.com/fredzqm\" target=\"_blank\">fredzqm</a> <br/>\r\n  <br/>\r\n  All Rights Reserved. <br/>\r\n</div>\r\n</footer>\r\n"

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"jumbotron row\">\r\n  <h1 class=\"text-center\">{{title}}</h1>\r\n</header>\r\n"

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"{{'Project Gallery &gt; ' + project.name}}\"></app-page-header>\r\n<div class=\"container\">\r\n  <div id=\"IntroCard\" class=\"card\">\r\n    <a id=\"gitHubLabel\" md-mini-fab color=\"warn\"\r\n       [href]=\"'https://github.com/fredzqm/' + project.repos\">\r\n      <img alt=\"GitHub\" src=\"assets/github-circle-black.svg\">\r\n    </a>\r\n    <a *ngFor=\"let tech of technologies; let i = index\" class=\"floatingLabel\" md-mini-fab\r\n       [href]=\"tech.href\"\r\n       [ngStyle]=\"{'left': (10 + i * 50) + 'px'}\">\r\n      <img alt=\"GitHub\" [src]=\"tech.imageSrc\">\r\n    </a>\r\n    <div class=\"card-block\">\r\n      <h1 class=\"card-title text-center\">{{project.name}}</h1>\r\n      <div class=\"media row\">\r\n        <img class=\"project-image img-fluid img-thumbnail rounded-circle col-4\"\r\n             *ngIf=\"project.image\"\r\n             [alt]=\"project.name\"\r\n             [src]=\"project.image\"\r\n             [alt]=\"project.name\">\r\n        <div class=\"card-text media-body align-self-center col-8\" height=\"100%\">\r\n          <div *ngIf=\"project.overview\" [innerHTML]=\"project.overview\"></div>\r\n          <div *ngIf=\"!project.overview\">{{project.information}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div #customizable></div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [routerLink]=\"['/detail', project.repos]\">\r\n  <img class=\"card-img-top img-thumbnail img-fluid\" [src]=\"project.image\" alt=\"Generic placeholder image\">\r\n  <div class=\"card-block\">\r\n    <h4 class=\"card-title\">{{project.name}}</h4>\r\n    <p>{{project.information | truncate}}</p>\r\n  </div>\r\n  <a id=\"showRepos\"\r\n     target=\"_new\"\r\n     md-mini-fab color=\"warn\"\r\n     (click)=\"showRepos($event)\"\r\n     mdTooltip=\"Show Repository!\"\r\n     mdTooltipPosition=\"before\">\r\n    <img alt=\"GitHub\" src=\"assets/github-circle-black.svg\">\r\n  </a>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Project Gallery\"></app-page-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <app-project-card *ngFor=\"let project of projects\" [project]=project></app-project-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = "<app-read-me repos=\"CPU\"></app-read-me>\r\n<div class=\"card\">\r\n  <br>\r\n  <br>\r\n  <h1 class=\"card-title text-center\">DOCUMENTATION</h1>\r\n  <br>\r\n  <br>\r\n  <pdf-viewer\r\n    src=\"https://raw.githubusercontent.com/fredzqm/CPU/master/DesignDocument.pdf\"\r\n    [zoom]=\"1.9\"\r\n    page=\"page\"\r\n    [render-text]=\"true\"\r\n    [show-all]=\"true\">\r\n  </pdf-viewer>\r\n</div>\r\n"

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<div id=\"terminal\">\r\n</div>\r\n<br/>\r\n<br/>\r\n<app-read-me repos=\"Scheme_interpreter\"></app-read-me>\r\n<br/>\r\n"

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"card-title text-center\">README</h1>\r\n<br>\r\n<br>\r\n<markdown-to-html\r\n  src=\"{{'https://raw.githubusercontent.com/fredzqm/'+repos+'/master/README.md'}}\"></markdown-to-html>\r\n"

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Resume\"></app-page-header>\r\n<div class=\"container\" id=\"PDF\">\r\n    <pdf-viewer\r\n      [src]=\"resumeUrl\"\r\n      [zoom]=\"1.9\"\r\n      page=\"page\"\r\n      [render-text]=\"true\"\r\n      [show-all]=\"true\">\r\n    </pdf-viewer>\r\n</div>\r\n<a id=\"DownloadButton\" md-mini-fab [href]=\"resumeUrl\">\r\n  <md-icon><i class=\"fa fa-download\" aria-hidden=\"true\"></i></md-icon>\r\n</a>\r\n"

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(297);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProjectService = (function () {
    function ProjectService() {
        this.projectPromise = Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__projects__["a" /* ourProjects */]);
    }
    ProjectService.prototype.getProjects = function () {
        return this.projectPromise;
    };
    ProjectService.prototype.getOneProjectWithReposName = function (reposName) {
        return this.projectPromise
            .then(function (project) { return project.find(function (p) { return p.repos === reposName; }); });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ProjectService);

//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__technology__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TechnologyService = (function () {
    function TechnologyService() {
    }
    TechnologyService.prototype.getAllTechnologies = function () {
        return __WEBPACK_IMPORTED_MODULE_1__technology__["a" /* vendorImages */];
    };
    TechnologyService.prototype.getTechnologyByName = function (name) {
        for (var _i = 0, vendorImages_1 = __WEBPACK_IMPORTED_MODULE_1__technology__["a" /* vendorImages */]; _i < vendorImages_1.length; _i++) {
            var tech = vendorImages_1[_i];
            if (name === tech.name)
                return tech;
        }
        throw "Technology " + name + " cannot be found";
    };
    return TechnologyService;
}());
TechnologyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TechnologyService);

//# sourceMappingURL=technology.service.js.map

/***/ })

},[648]);
//# sourceMappingURL=main.bundle.js.map