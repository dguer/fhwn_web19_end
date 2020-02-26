function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/login-page/login-page.component.ts");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./scoreboard/scoreboard.component */
    "./src/app/scoreboard/scoreboard.component.ts");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/auth.guard */
    "./src/app/services/auth.guard.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    }, {
      path: 'login',
      component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: 'game',
      component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'scoreboard',
      component: _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_5__["ScoreboardComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: '**',
      component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/authenticationservice.service */
    "./src/app/services/authenticationservice.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'Breakout Game';
      }

      _createClass(AppComponent, [{
        key: "token",
        get: function get() {
          return this.authService.Token;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationserviceService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background-image: url(\"http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  font-family: \"Numans\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxkZ3VyXFxEZXNrdG9wXFxHYW1lIEJyZWFrb3V0IExhc3RcXEZyb250ZW5kL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxpRkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vZ2V0d2FsbHBhcGVycy5jb20vd2FsbHBhcGVyL2Z1bGwvYS81L2QvNTQ0NzUwLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbn0iLCJodG1sLFxuYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly9nZXR3YWxscGFwZXJzLmNvbS93YWxscGFwZXIvZnVsbC9hLzUvZC81NDQ3NTAuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bWFuc1wiLCBzYW5zLXNlcmlmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }]
      }], function () {
        return [{
          type: _services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/login-page/login-page.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./scoreboard/scoreboard.component */
    "./src/app/scoreboard/scoreboard.component.ts");
    /* harmony import */


    var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/auth-interceptor.service */
    "./src/app/services/auth-interceptor.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/data.service */
    "./src/app/services/data.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptorService"],
        multi: true
      }, {
        provide: _services_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"],
        useClass: _services_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_11__["ScoreboardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_11__["ScoreboardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptorService"],
            multi: true
          }, {
            provide: _services_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"],
            useClass: _services_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/game/game.component.ts":
  /*!****************************************!*\
    !*** ./src/app/game/game.component.ts ***!
    \****************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var p5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! p5 */
    "./node_modules/p5/lib/p5.js");
    /* harmony import */


    var p5__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_ip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/ip.service */
    "./src/app/services/ip.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["sketch"];
    var that;
    var key;
    var moveMent = 150;
    var rightPress = false;
    var leftPress = false;
    var game = true;
    var dx = 4;
    var dy = 4;
    var score = 0;
    var lives = 3;
    var livesRestart = false;
    var bricks = [];
    var brickColors = ["#f56642", "#f5ad42", "#f5ce42", "#cef542", "#8df542", "#4266f5", "#CCFFEE", "#CCFFDD"];
    var win = false;
    var fastMode = 0;
    var kids = false;
    var circle = {
      x: moveMent + 50,
      y: 380,
      radius: 20
    };

    var sketch = function sketch(p) {
      // IN ORDER TO PLAY - CLICK THE ON THE SCREEN
      // MOVE THE PADDLE WITH THE ARROW KEYS
      // SHOOT USING SPACEBAR
      p.setup = function () {
        p.createCanvas(600, 400);
        createBricks();
      };

      function paddle() {
        p.stroke('purple');
        p.fill('#FF6961');
        p.rect(moveMent, 385, 100, 15, 20);

        if (rightPress && moveMent < 500) {
          moveMent += 10;
        }

        if (leftPress && moveMent > 0) {
          moveMent += -10;
        }
      }

      function ball() {
        p.noStroke();
        p.fill('#FBD8F8');
        p.ellipse(circle.x, circle.y, circle.radius, circle.radius);

        if (circle.y <= 0) {
          dy = -dy; //score++
        }

        if (circle.y >= p.height - 15 && circle.x > moveMent - fastMode && circle.x <= moveMent + 50) {
          dy = -dy;
          if (dx > 0) dx = -dx;
          if (dx < 0) dx = dx;
        }

        if (circle.y >= p.height - 15 && circle.x > moveMent + 50 && circle.x <= moveMent + 100 + fastMode) {
          dy = -dy;
          if (dx > 0) dx = dx;
          if (dx < 0) dx = -dx;
        }

        if (circle.x >= p.width - 10 || circle.x <= 0) dx = -dx;
        bricks.forEach(function (item, index) {
          if (checkCollisionBottom(circle, item)) {
            dy = -dy;
            score++;
            bricks.splice(index, 1);
          }
        });

        if (circle.y > p.height) {
          lives--;
          livesRestart = true;
          if (lives === 0) game = false;
        }

        circle.x += dx;
        circle.y += dy;
      }

      function createBricks() {
        var rows = 6;
        var cols = 10;
        var brickWidth = p.width / cols;

        for (var i = 0; i < cols; i++) {
          for (var j = 0; j < rows; j++) {
            var brick = {
              x: i * 58 + 10,
              y: j * 12 + 30,
              w: 57,
              h: 10,
              color: brickColors[j]
            };
            bricks.push(brick);
          }
        }
      }

      function drawBricks() {
        bricks.forEach(function (brick) {
          p.fill(brick.color);
          p.rect(brick.x, brick.y, brick.w, brick.h);
        });
      }

      function keyPress() {
        if (p.keyCode === 75) {
          kids = true;
        }

        if (p.keyCode === 39) {
          rightPress = true;
        }

        if (p.keyCode === 37) {
          leftPress = true;
        }

        if (p.keyCode === 32 && livesRestart) {
          livesRestart = false;
          circle.x = moveMent + 50;
          circle.y = 380;
        }

        if (p.keyCode === 32 && !game) {
          game = true;
          circle.x = moveMent + 50;
          circle.y = 380;
          score = 0;
          lives = 3;
          dy = -6;
          moveMent = 250;
          createBricks();
        }
      }

      ;

      p.keyReleased = function (value) {
        if (p.keyCode === 39) {
          rightPress = false;
        }

        if (p.keyCode === 37) {
          leftPress = false;
        }
      };

      function restartGame() {
        p.fill('#FFEEEE');
        p.textAlign(p.CENTER);
        p.noStroke();
        p.textStyle(p.BOLD);
        p.textFont('Arial');
        p.textSize(38);
        p.text('GAME OVER', 300, 170);
        p.textFont('Arial');
        p.textSize(28);
        p.text('Final score: ' + score, 300, 200);
        p.textSize(18);
        p.text('Press Enter to end the game and go to scoreboard', 300, 225);
      }

      function winGame() {
        p.fill('#FFEEEE');
        p.textAlign(p.CENTER);
        p.noStroke();
        p.textStyle(p.BOLD);
        p.textFont('Arial');
        p.textSize(38);
        p.text('YOU WON', 300, 170);
        p.textFont('Arial');
        p.textSize(28);
        p.text('Final score: ' + score, 300, 200);
        p.textSize(18);
        p.text('Press Enter to end the game and go to scoreboard', 300, 225);
      }

      function lostLifeText() {
        p.fill('#FFEEEE');
        p.textAlign(p.CENTER);
        p.noStroke();
        p.textStyle(p.BOLD);
        p.textFont('Arial');
        p.textSize(36);
        p.text('Life Lost', 300, 170);
        p.textFont('Arial');
        p.textSize(24);
        p.text('You now have ' + lives + ' lives remaining', 300, 200);
        p.textSize(18);
        p.text('Press SpaceBar to restart', 300, 225);
      }

      function scoreText() {
        p.fill('#FFEEEE');
        p.textStyle(p.BOLD);
        p.textAlign(p.CENTER);
        p.noStroke();
        p.textFont('Arial');
        p.textSize(18);
        p.text('Score: ' + score, 555, 20);
      }

      function kidsText() {
        p.fill('#FFEEEE');
        p.textStyle(p.BOLD);
        p.textAlign(p.CENTER);
        p.noStroke();
        p.textFont('Arial');
        p.textSize(14);
        p.text('Press "K" for kid mode', 300, 20);
      }

      function livesText() {
        p.textStyle(p.BOLD);
        p.textAlign(p.CENTER);
        p.noStroke();
        p.textFont('Arial');
        p.textSize(18);
        p.text('Lives: ' + lives, 40, 20);
      }

      function checkCollisionBottom(ball, brick) {
        if (ball.y - 20 < brick.y && ball.x > brick.x && ball.x <= brick.x + 58) {
          return true;
        }
      }

      p.draw = function () {
        if (win) {
          winGame();
        } else {
          if (p.keyIsPressed === true) {
            keyPress();
          }

          p.background('#779ecb');
          if (kids) fastMode = 500;
          if (game && !livesRestart) ball();
          if (livesRestart && game) lostLifeText();
          if (!game && livesRestart) restartGame();

          if (game) {
            scoreText();
            livesText();
            drawBricks();
            paddle();
            kidsText();
          }

          if (score == 60) {
            win = true;
          }
        }
      };
    };

    var GameComponent =
    /*#__PURE__*/
    function () {
      function GameComponent(http, ip, data, router) {
        _classCallCheck(this, GameComponent);

        this.http = http;
        this.ip = ip;
        this.data = data;
        this.router = router;
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.p5 = new p5__WEBPACK_IMPORTED_MODULE_1__(sketch, this.sketch.nativeElement);
          this.data.currentMessage.subscribe(function (message) {
            return _this.message = message;
          }); // console.log(this.message);
        }
      }, {
        key: "handleKeyboardEvent",
        value: function handleKeyboardEvent(event) {
          key = event.code;

          if (key === "Enter") {
            this.setScore();
            this.router.navigate(['scoreboard']);
          }
        }
      }, {
        key: "setScore",
        value: function setScore() {
          this.http.post('http://' + this.ip.IP + ':3001/score', {
            name: this.data.text,
            score: score
          }).subscribe(function (x) {
            console.log(x);
          }, function (error) {
            console.error(error);
          });
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ip_service__WEBPACK_IMPORTED_MODULE_3__["IpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["app-game"]],
      viewQuery: function GameComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sketch = _t.first);
        }
      },
      hostBindings: function GameComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function GameComponent_keypress_HostBindingHandler($event) {
            return ctx.handleKeyboardEvent($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      decls: 3,
      vars: 1,
      consts: [["sketch", ""]],
      template: function GameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: ["canvas[_ngcontent-%COMP%] {\n  border-style: black;\n  border: solid;\n  background-color: black;\n  height: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#over[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n#content-desktop[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#content-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 768px) {\n  #content-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #content-mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n#sketch[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 0px auto;\n  border: 1px solid red;\n}\n\ncanvas[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: auto;\n  display: block;\n  width: 800px;\n  height: 600px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9DOlxcVXNlcnNcXGRndXJcXERlc2t0b3BcXEdhbWUgQnJlYWtvdXQgTGFzdFxcRnJvbnRlbmQvc3JjXFxhcHBcXGdhbWVcXGdhbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNBLGtCQUFBO0FDRUE7O0FEQ0E7RUFBa0IsY0FBQTtBQ0dsQjs7QURGQTtFQUFpQixhQUFBO0FDTWpCOztBREpBO0VBRUE7SUFBa0IsYUFBQTtFQ09oQjs7RURORjtJQUFpQixjQUFBO0VDVWY7QUFDRjs7QURDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREdTO0VBQ0csVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XHJcbiAgICBib3JkZXItc3R5bGU6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA1MCU7ICAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiNvdmVye1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbiNjb250ZW50LWRlc2t0b3Age2Rpc3BsYXk6IGJsb2NrO31cclxuI2NvbnRlbnQtbW9iaWxlIHtkaXNwbGF5OiBub25lO31cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4jY29udGVudC1kZXNrdG9wIHtkaXNwbGF5OiBub25lO31cclxuI2NvbnRlbnQtbW9iaWxlIHtkaXNwbGF5OiBibG9jazt9XHJcbi8vIGNhbnZhcyB7XHJcbi8vICAgICBib3JkZXItc3R5bGU6IGJsYWNrO1xyXG4vLyAgICAgYm9yZGVyOiBzb2xpZDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4vLyAgICAgaGVpZ2h0OiA1MCU7ICBcclxuLy8gICAgIG1heC13aWR0aDogNzAlOyBcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4vLyB9XHJcblxyXG59XHJcbiNza2V0Y2ggeyBcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDoxMDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcblxyXG5cclxuICAgICAgICAgfVxyXG4gICAgICAgICBjYW52YXMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIH0iLCJjYW52YXMge1xuICBib3JkZXItc3R5bGU6IGJsYWNrO1xuICBib3JkZXI6IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbiNvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jY29udGVudC1kZXNrdG9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNjb250ZW50LW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNjb250ZW50LWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjY29udGVudC1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4jc2tldGNoIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbmNhbnZhcyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game',
          template: '<div #sketch>{{message}}</div>',
          styleUrls: ['./game.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_ip_service__WEBPACK_IMPORTED_MODULE_3__["IpService"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, {
        sketch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sketch', {
            static: true
          }]
        }],
        handleKeyboardEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keypress', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/login-page/login-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/login-page/login-page.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authenticationservice.service */
    "./src/app/services/authenticationservice.service.ts");
    /* harmony import */


    var _services_ip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/ip.service */
    "./src/app/services/ip.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginPageComponent_label_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wrong username ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_div_11_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wrong password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_div_11_label_1_Template, 2, 0, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r210.testFormGroup.get("password").valid);
      }
    }

    var LoginPageComponent =
    /*#__PURE__*/
    function () {
      function LoginPageComponent(http, authenticationservice, ip, router, data) {
        _classCallCheck(this, LoginPageComponent);

        this.http = http;
        this.authenticationservice = authenticationservice;
        this.ip = ip;
        this.router = router;
        this.data = data;
        this.isUserValid = Boolean(true);
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.data.currentMessage.subscribe(function (message) {
            return _this2.message = message;
          });
          this.testFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'user': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[A-Z]+.*")]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this3 = this;

          this.http.post('http://' + this.ip.IP + ':3001/signin', {
            username: this.usernameValue,
            password: this.passwordValue
          }).subscribe(function (x) {
            // console.log(x);
            _this3.authenticationservice.Token = x.Token;

            _this3.data.changeMessage(_this3.usernameValue);

            _this3.router.navigate(['game']);
          }, function (error) {
            console.error(error);
          });
        }
      }, {
        key: "inputUserFocusOut",
        value: function inputUserFocusOut() {
          if (!this.testFormGroup.get('user').valid) {
            this.isUserValid = false;
            return;
          }

          this.isUserValid = true;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationservice.Token = '';
        }
      }, {
        key: "password",
        get: function get() {
          return this.testFormGroup.get('password');
        }
      }, {
        key: "username",
        get: function get() {
          return this.testFormGroup.get('user');
        }
      }, {
        key: "usernameValue",
        get: function get() {
          return this.testFormGroup.get('user').value;
        }
      }, {
        key: "passwordValue",
        get: function get() {
          return this.testFormGroup.get('password').value;
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ip_service__WEBPACK_IMPORTED_MODULE_4__["IpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]));
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-login-page"]],
      decls: 20,
      vars: 3,
      consts: [[1, "login-container", "body"], ["id", "login", 1, "login"], [1, "login-form", 3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "User", "required", "", "autofocus", "", "formControlName", "user", 1, "login-input", 3, "focusout"], ["id", "errorText", 4, "ngIf"], ["type", "password", "placeholder", "Password", "formControlName", "password", "required", "", 1, "login-input"], [4, "ngIf"], [1, "submit-container"], ["type", "submit", 1, "login-button"], [1, "form-group"], ["href", "https://www.twitch.tv/ellibesh"], ["id", "errorText"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "BreakOut Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_7_listener($event) {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function LoginPageComponent_Template_input_focusout_8_listener($event) {
            return ctx.inputUserFocusOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginPageComponent_label_9_Template, 2, 0, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginPageComponent_div_11_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "SIGN IN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2020 - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Designed by Dilber");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: [".body[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n  background: #F1F1F1;\n  margin: 0 auto;\n}\n\n\n\n@-webkit-keyframes scale_header {\n  0% {\n    max-height: 0px;\n    margin-bottom: 0px;\n    opacity: 0;\n  }\n  100% {\n    max-height: 117px;\n    margin-bottom: 25px;\n    opacity: 1;\n  }\n}\n\n@keyframes scale_header {\n  0% {\n    max-height: 0px;\n    margin-bottom: 0px;\n    opacity: 0;\n  }\n  100% {\n    max-height: 117px;\n    margin-bottom: 25px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes input_opacity {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes input_opacity {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes text_opacity {\n  0% {\n    color: transparent;\n  }\n}\n\n@keyframes text_opacity {\n  0% {\n    color: transparent;\n  }\n}\n\n@-webkit-keyframes error_before {\n  0% {\n    height: 5px;\n    background: rgba(0, 0, 0, 0.156);\n    color: transparent;\n  }\n  10% {\n    height: 117px;\n    background: #FFFFFF;\n    color: #C62828;\n  }\n  90% {\n    height: 117px;\n    background: #FFFFFF;\n    color: #C62828;\n  }\n  100% {\n    height: 5px;\n    background: rgba(0, 0, 0, 0.156);\n    color: transparent;\n  }\n}\n\n@keyframes error_before {\n  0% {\n    height: 5px;\n    background: rgba(0, 0, 0, 0.156);\n    color: transparent;\n  }\n  10% {\n    height: 117px;\n    background: #FFFFFF;\n    color: #C62828;\n  }\n  90% {\n    height: 117px;\n    background: #FFFFFF;\n    color: #C62828;\n  }\n  100% {\n    height: 5px;\n    background: rgba(0, 0, 0, 0.156);\n    color: transparent;\n  }\n}\n\n\n\n.login-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n  width: 340px;\n  height: auto;\n  padding: 5px;\n  box-sizing: border-box;\n}\n\n.login-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: 0 0 20px 0;\n}\n\n.login-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.8rem;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.login-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.login[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  margin: 0 0 10px 0;\n  box-sizing: border-box;\n  border-radius: 3px;\n  background: #FAFAFA;\n  overflow: hidden;\n  -webkit-animation: input_opacity 0.2s cubic-bezier(0.55, 0, 0.1, 1);\n          animation: input_opacity 0.2s cubic-bezier(0.55, 0, 0.1, 1);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.login[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  margin: -10px -10px 25px -10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  background: #009688;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.3rem;\n  color: #FAFAFA;\n  -webkit-animation: scale_header 0.6s cubic-bezier(0.55, 0, 0.1, 1), text_opacity 1s cubic-bezier(0.55, 0, 0.1, 1);\n          animation: scale_header 0.6s cubic-bezier(0.55, 0, 0.1, 1), text_opacity 1s cubic-bezier(0.55, 0, 0.1, 1);\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.login[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  padding: 10px;\n  margin: -10px 0 0 -10px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.156);\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.9rem;\n  color: transparent;\n  z-index: 5;\n}\n\n.login.error_1[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]:before, .login.error_2[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]:before {\n  -webkit-animation: error_before 3s cubic-bezier(0.55, 0, 0.1, 1);\n          animation: error_before 3s cubic-bezier(0.55, 0, 0.1, 1);\n}\n\n.login.error_1[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]:before {\n  content: \"Invalid username or password!\";\n}\n\n.login.error_2[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]:before {\n  content: \"Invalid or expired Token!\";\n}\n\n.login[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 50px 0 10px 0;\n  color: #FDAB43;\n}\n\n.login[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  -webkit-animation: text_opacity 1.5s cubic-bezier(0.55, 0, 0.1, 1);\n          animation: text_opacity 1.5s cubic-bezier(0.55, 0, 0.1, 1);\n  color: rgba(255, 255, 255, 0.4);\n}\n\n\n\n.login-form[_ngcontent-%COMP%] {\n  padding: 15px;\n  box-sizing: border-box;\n}\n\n\n\n.login-input[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 10px 5px;\n  margin: 0 0 25px 0;\n  border: none;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  background: transparent;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  opacity: 1;\n  -webkit-animation: input_opacity 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n          animation: input_opacity 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n  -webkit-transition: border-bottom 0.2s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: border-bottom 0.2s cubic-bezier(0.55, 0, 0.1, 1);\n}\n\n.login-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom: 2px solid #E37F00;\n}\n\n\n\n.submit-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  position: relative;\n  padding: 10px;\n  margin: 35px -25px -25px -25px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.login-button[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: none;\n  border-radius: 3px;\n  background: transparent;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #E37F00;\n  cursor: pointer;\n  opacity: 1;\n  -webkit-animation: input_opacity 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n          animation: input_opacity 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n  -webkit-transition: background 0.2s ease-in-out;\n  transition: background 0.2s ease-in-out;\n}\n\n.login-button.raised[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  color: #FAFAFA;\n  background: #E37F00;\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.137255), 0px 1px 5px 0px rgba(0, 0, 0, 0.117647), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.login-button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.login-button.raised[_ngcontent-%COMP%]:hover {\n  background: #FDAB43;\n}\n\n\n\n\n\n.card[_ngcontent-%COMP%] {\n  height: 370px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 400px;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-left: 10px;\n  color: #FFC312;\n}\n\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.social_icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: -45px;\n}\n\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 50px;\n  background-color: #FFC312;\n  color: black;\n  border: 0 !important;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: 0 0 0 0 !important;\n  box-shadow: 0 0 0 0 !important;\n}\n\n.remember[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 15px;\n  margin-right: 5px;\n}\n\n.login_btn[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #FFC312;\n  width: 100px;\n}\n\n.login_btn[_ngcontent-%COMP%]:hover {\n  color: black;\n  background-color: white;\n}\n\n.links[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9DOlxcVXNlcnNcXGRndXJcXERlc2t0b3BcXEdhbWUgQnJlYWtvdXQgTGFzdFxcRnJvbnRlbmQvc3JjXFxhcHBcXGxvZ2luLXBhZ2VcXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHRSx3QkFBQTs7QUFDQTtFQUNFO0lBQU0sZUFBQTtJQUFpQixrQkFBQTtJQUFvQixVQUFBO0VDRzdDO0VERkU7SUFBTSxpQkFBQTtJQUFtQixtQkFBQTtJQUFxQixVQUFBO0VDT2hEO0FBQ0Y7O0FEVkU7RUFDRTtJQUFNLGVBQUE7SUFBaUIsa0JBQUE7SUFBb0IsVUFBQTtFQ0c3QztFREZFO0lBQU0saUJBQUE7SUFBbUIsbUJBQUE7SUFBcUIsVUFBQTtFQ09oRDtBQUNGOztBRExFO0VBQ0U7SUFBTSxvQ0FBQTtZQUFBLDRCQUFBO0lBQThCLFVBQUE7RUNTdEM7RURSRTtJQUFNLGtDQUFBO1lBQUEsMEJBQUE7SUFBNEIsVUFBQTtFQ1lwQztBQUNGOztBRGZFO0VBQ0U7SUFBTSxvQ0FBQTtZQUFBLDRCQUFBO0lBQThCLFVBQUE7RUNTdEM7RURSRTtJQUFNLGtDQUFBO1lBQUEsMEJBQUE7SUFBNEIsVUFBQTtFQ1lwQztBQUNGOztBRFZFO0VBQ0U7SUFBSSxrQkFBQTtFQ2FOO0FBQ0Y7O0FEZkU7RUFDRTtJQUFJLGtCQUFBO0VDYU47QUFDRjs7QURYRTtFQUNFO0lBQU0sV0FBQTtJQUFhLGdDQUFBO0lBQWtDLGtCQUFBO0VDZ0J2RDtFRGZFO0lBQU0sYUFBQTtJQUFlLG1CQUFBO0lBQXFCLGNBQUE7RUNvQjVDO0VEbkJFO0lBQU0sYUFBQTtJQUFlLG1CQUFBO0lBQXFCLGNBQUE7RUN3QjVDO0VEdkJFO0lBQU0sV0FBQTtJQUFhLGdDQUFBO0lBQWtDLGtCQUFBO0VDNEJ2RDtBQUNGOztBRGpDRTtFQUNFO0lBQU0sV0FBQTtJQUFhLGdDQUFBO0lBQWtDLGtCQUFBO0VDZ0J2RDtFRGZFO0lBQU0sYUFBQTtJQUFlLG1CQUFBO0lBQXFCLGNBQUE7RUNvQjVDO0VEbkJFO0lBQU0sYUFBQTtJQUFlLG1CQUFBO0lBQXFCLGNBQUE7RUN3QjVDO0VEdkJFO0lBQU0sV0FBQTtJQUFhLGdDQUFBO0lBQWtDLGtCQUFBO0VDNEJ2RDtBQUNGOztBRHpCRSxlQUFBOztBQUNBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUMyQko7O0FEeEJFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDMkJKOztBRHhCRTtFQUNFLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDMkJKOztBRHhCRTtFQUNFLHlCQUFBO0FDMkJKOztBRHhCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7VUFBQSwyREFBQTtFQUNBLCtHQUFBO0FDMkJKOztBRHRCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlIQUFBO1VBQUEseUdBQUE7RUFDQSx5SEFBQTtBQ3lCSjs7QURwQkU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUN1Qko7O0FEcEJFOztFQUVFLGdFQUFBO1VBQUEsd0RBQUE7QUN1Qko7O0FEcEJFO0VBQ0Usd0NBQUE7QUN1Qko7O0FEcEJFO0VBQ0Usb0NBQUE7QUN1Qko7O0FEcEJFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDdUJKOztBRHBCRTtFQUNFLGdCQUFBO0VBQ0Esa0VBQUE7VUFBQSwwREFBQTtFQUNBLCtCQUFBO0FDdUJKOztBRHBCRSxTQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDdUJKOztBRG5CRSxXQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0Esb0VBQUE7RUFBQSw0REFBQTtBQ3NCSjs7QURuQkU7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7QUNzQko7O0FEbEJFLGtCQUFBOztBQUNBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7QUNxQko7O0FEbEJFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUVBQUE7VUFBQSwyREFBQTtFQUNBLCtDQUFBO0VBQUEsdUNBQUE7QUNxQko7O0FEbEJFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpSUFBQTtBQ3FCSjs7QURoQkU7RUFDRSwrQkFBQTtBQ21CSjs7QURoQkU7RUFDRSxtQkFBQTtBQ21CSjs7QURqQkUsR0FBQTs7QUFDRjs7Ozs7Ozs7OztHQUFBOztBQVlBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUNtQko7O0FEaEJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ21CSjs7QURoQkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ21CSjs7QURoQkE7RUFDSSxZQUFBO0FDbUJKOztBRGhCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNtQko7O0FEaEJBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDbUJKOztBRGhCQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUNtQko7O0FEaEJBO0VBQ0ksWUFBQTtBQ21CSjs7QURoQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNtQko7O0FEaEJBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ21CSjs7QURoQkE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUNtQko7O0FEaEJBO0VBQ0ksWUFBQTtBQ21CSjs7QURoQkE7RUFDSSxnQkFBQTtBQ21CSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI0YxRjFGMTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAvKiBBbmltYXRpb24gS2V5ZnJhbWVzICovXHJcbiAgQGtleWZyYW1lcyBzY2FsZV9oZWFkZXIge1xyXG4gICAgMCUgICB7bWF4LWhlaWdodDogMHB4OyBtYXJnaW4tYm90dG9tOiAwcHg7IG9wYWNpdHk6IDA7fVxyXG4gICAgMTAwJSB7bWF4LWhlaWdodDogMTE3cHg7IG1hcmdpbi1ib3R0b206IDI1cHg7IG9wYWNpdHk6IDE7fVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGlucHV0X29wYWNpdHkge1xyXG4gICAgMCUgICB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgb3BhY2l0eTogMH1cclxuICAgIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyBvcGFjaXR5OiAxfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHRleHRfb3BhY2l0eSB7XHJcbiAgICAwJSB7Y29sb3I6IHRyYW5zcGFyZW50O31cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBlcnJvcl9iZWZvcmUge1xyXG4gICAgMCUgICB7aGVpZ2h0OiA1cHg7IGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNTYpOyBjb2xvcjogdHJhbnNwYXJlbnQ7fVxyXG4gICAgMTAlICB7aGVpZ2h0OiAxMTdweDsgYmFja2dyb3VuZDogI0ZGRkZGRjsgY29sb3I6ICNDNjI4Mjh9XHJcbiAgICA5MCUgIHtoZWlnaHQ6IDExN3B4OyBiYWNrZ3JvdW5kOiAjRkZGRkZGOyBjb2xvcjogI0M2MjgyOH1cclxuICAgIDEwMCUge2hlaWdodDogNXB4OyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTU2KTsgY29sb3I6IHRyYW5zcGFyZW50O31cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogTG9naW4gRm9ybSAqL1xyXG4gIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWNvbnRhaW5lciBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tY29udGFpbmVyIHAge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWNvbnRhaW5lciBwIGEge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGFuaW1hdGlvbjogaW5wdXRfb3BhY2l0eSAwLjJzIGN1YmljLWJlemllciguNTUsIDAsIC4xLCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICBcclxuICAubG9naW4gPiBoZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAtMTBweCAtMTBweCAyNXB4IC0xMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDk2ODg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGNvbG9yOiAjRkFGQUZBO1xyXG4gICAgYW5pbWF0aW9uOiBzY2FsZV9oZWFkZXIgMC42cyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuMSwgMSksIHRleHRfb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuMSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxyXG4gICAgICAgICAgICAgICAgMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbiA+IGhlYWRlcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IC0xMHB4IDAgMCAtMTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTU2KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgei1pbmRleDogNTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLmVycm9yXzEgPiBoZWFkZXI6YmVmb3JlLFxyXG4gIC5sb2dpbi5lcnJvcl8yID4gaGVhZGVyOmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IGVycm9yX2JlZm9yZSAzcyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuMSwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi5lcnJvcl8xID4gaGVhZGVyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCEnO1xyXG4gIH1cclxuICBcclxuICAubG9naW4uZXJyb3JfMiA+IGhlYWRlcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ0ludmFsaWQgb3IgZXhwaXJlZCBUb2tlbiEnO1xyXG4gIH1cclxuICBcclxuICAubG9naW4gPiBoZWFkZXIgaDIge1xyXG4gICAgbWFyZ2luOiA1MHB4IDAgMTBweCAwO1xyXG4gICAgY29sb3I6ICNGREFCNDM7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbiA+IGhlYWRlciBoNCB7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgYW5pbWF0aW9uOiB0ZXh0X29wYWNpdHkgMS41cyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuMSwgMSk7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gIH1cclxuICBcclxuICAvKiBGb3JtICovXHJcbiAgLmxvZ2luLWZvcm0ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIElucHV0cyAqL1xyXG4gIC5sb2dpbi1pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMjVweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYW5pbWF0aW9uOiBpbnB1dF9vcGFjaXR5IDAuOHMgY3ViaWMtYmV6aWVyKC41NSwgMCwgLjEsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjJzIGN1YmljLWJlemllciguNTUsIDAsIC4xLCAxKTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0UzN0YwMDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogU3VibWl0IEJ1dHRvbiAqL1xyXG4gIC5zdWJtaXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDM1cHggLTI1cHggLTI1cHggLTI1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjRTM3RjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGFuaW1hdGlvbjogaW5wdXRfb3BhY2l0eSAwLjhzIGN1YmljLWJlemllciguNTUsIDAsIC4xLCAxKTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWJ1dHRvbi5yYWlzZWQge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBjb2xvcjogI0ZBRkFGQTtcclxuICAgIGJhY2tncm91bmQ6ICNFMzdGMDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEzNzI1NSksXHJcbiAgICAgICAgICAgICAgICAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjExNzY0NyksXHJcbiAgICAgICAgICAgICAgICAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tYnV0dG9uLnJhaXNlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkRBQjQzO1xyXG4gIH1cclxuICAvKiovXHJcbi8qIFxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bWFucycpO1xyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2dldHdhbGxwYXBlcnMuY29tL3dhbGxwYXBlci9mdWxsL2EvNS9kLzU0NDc1MC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG59ICovXHJcblxyXG4uY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDM3MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogI0ZGQzMxMjtcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHNwYW46aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaDMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc29jaWFsX2ljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IC00NXB4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFuIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzMxMjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZW1lbWJlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yZW1lbWJlciBpbnB1dCB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5sb2dpbl9idG4ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzMxMjtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmxvZ2luX2J0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpbmtzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpbmtzIGEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG4gICIsIi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi8qIEFuaW1hdGlvbiBLZXlmcmFtZXMgKi9cbkBrZXlmcmFtZXMgc2NhbGVfaGVhZGVyIHtcbiAgMCUge1xuICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXgtaGVpZ2h0OiAxMTdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaW5wdXRfb3BhY2l0eSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyB0ZXh0X29wYWNpdHkge1xuICAwJSB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGVycm9yX2JlZm9yZSB7XG4gIDAlIHtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTU2KTtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgMTAlIHtcbiAgICBoZWlnaHQ6IDExN3B4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgY29sb3I6ICNDNjI4Mjg7XG4gIH1cbiAgOTAlIHtcbiAgICBoZWlnaHQ6IDExN3B4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgY29sb3I6ICNDNjI4Mjg7XG4gIH1cbiAgMTAwJSB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1Nik7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG4vKiBMb2dpbiBGb3JtICovXG4ubG9naW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzQwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubG9naW4tY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuXG4ubG9naW4tY29udGFpbmVyIHAge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5sb2dpbi1jb250YWluZXIgcCBhIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmxvZ2luIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogaW5wdXRfb3BhY2l0eSAwLjJzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5sb2dpbiA+IGhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogLTEwcHggLTEwcHggMjVweCAtMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZDogIzAwOTY4ODtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogI0ZBRkFGQTtcbiAgYW5pbWF0aW9uOiBzY2FsZV9oZWFkZXIgMC42cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKSwgdGV4dF9vcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubG9naW4gPiBoZWFkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IC0xMHB4IDAgMCAtMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1Nik7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiA1O1xufVxuXG4ubG9naW4uZXJyb3JfMSA+IGhlYWRlcjpiZWZvcmUsXG4ubG9naW4uZXJyb3JfMiA+IGhlYWRlcjpiZWZvcmUge1xuICBhbmltYXRpb246IGVycm9yX2JlZm9yZSAzcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcbn1cblxuLmxvZ2luLmVycm9yXzEgPiBoZWFkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkIVwiO1xufVxuXG4ubG9naW4uZXJyb3JfMiA+IGhlYWRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIkludmFsaWQgb3IgZXhwaXJlZCBUb2tlbiFcIjtcbn1cblxuLmxvZ2luID4gaGVhZGVyIGgyIHtcbiAgbWFyZ2luOiA1MHB4IDAgMTBweCAwO1xuICBjb2xvcjogI0ZEQUI0Mztcbn1cblxuLmxvZ2luID4gaGVhZGVyIGg0IHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgYW5pbWF0aW9uOiB0ZXh0X29wYWNpdHkgMS41cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cblxuLyogRm9ybSAqL1xuLmxvZ2luLWZvcm0ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBJbnB1dHMgKi9cbi5sb2dpbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtYXJnaW46IDAgMCAyNXB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbjogaW5wdXRfb3BhY2l0eSAwLjhzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDAuMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XG59XG5cbi5sb2dpbi1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRTM3RjAwO1xufVxuXG4vKiBTdWJtaXQgQnV0dG9uICovXG4uc3VibWl0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAzNXB4IC0yNXB4IC0yNXB4IC0yNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjRTM3RjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbjogaW5wdXRfb3BhY2l0eSAwLjhzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5sb2dpbi1idXR0b24ucmFpc2VkIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGNvbG9yOiAjRkFGQUZBO1xuICBiYWNrZ3JvdW5kOiAjRTM3RjAwO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEzNzI1NSksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTE3NjQ3KSwgMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5sb2dpbi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4ubG9naW4tYnV0dG9uLnJhaXNlZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGREFCNDM7XG59XG5cbi8qKi9cbi8qIFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcbi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vZ2V0d2FsbHBhcGVycy5jb20vd2FsbHBhcGVyL2Z1bGwvYS81L2QvNTQ0NzUwLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xufSAqL1xuLmNhcmQge1xuICBoZWlnaHQ6IDM3MHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB3aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uc29jaWFsX2ljb24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjRkZDMzEyO1xufVxuXG4uc29jaWFsX2ljb24gc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC1oZWFkZXIgaDMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zb2NpYWxfaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogLTQ1cHg7XG59XG5cbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW4ge1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzMxMjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwIDAgMCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcbn1cblxuLnJlbWVtYmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVtZW1iZXIgaW5wdXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5sb2dpbl9idG4ge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmxvZ2luX2J0bjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5saW5rcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpbmtzIGEge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-page',
          templateUrl: './login-page.component.html',
          styleUrls: ['./login-page.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationserviceService"]
        }, {
          type: _services_ip_service__WEBPACK_IMPORTED_MODULE_4__["IpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/authenticationservice.service */
    "./src/app/services/authenticationservice.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/register"];
    };

    function NavbarComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return ["/login"];
    };

    function NavbarComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var _c2 = function _c2() {
      return ["/game"];
    };

    function NavbarComponent_a_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Play Game");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
      }
    }

    var _c3 = function _c3() {
      return ["/scoreboard"];
    };

    function NavbarComponent_a_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show Scores");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
      }
    }

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(authenticationservice) {
        _classCallCheck(this, NavbarComponent);

        this.authenticationservice = authenticationservice;
      }

      _createClass(NavbarComponent, [{
        key: "IsloggedIn",
        value: function IsloggedIn() {
          if (this.authenticationservice.Token.length > 0) {
            return true;
          }

          return false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationserviceService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 16,
      vars: 4,
      consts: [[1, "container-fluid"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "navbar-brand"], ["src", "../../favicon.ico", "alt", "Logo", "id", "logo"], ["data-toggle", "collapse", "data-target", "#collapse_target", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapse_target", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["class", "nav-link", 3, "routerLink", 4, "ngIf"], [1, "nav-link"], [1, "nav-link", 3, "routerLink"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_a_9_Template, 2, 2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_a_11_Template, 2, 2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_a_13_Template, 2, 2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_a_15_Template, 2, 2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsloggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsloggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsloggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsloggedIn());
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [{
          type: _services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authenticationservice.service */
    "./src/app/services/authenticationservice.service.ts");
    /* harmony import */


    var _services_ip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/ip.service */
    "./src/app/services/ip.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_label_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wrong username ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_11_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wrong password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_11_label_1_Template, 2, 0, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r214.testFormGroup.get("password").valid);
      }
    }

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(http, authenticationservice, ip) {
        _classCallCheck(this, RegisterComponent);

        this.http = http;
        this.authenticationservice = authenticationservice;
        this.ip = ip;
        this.isUserValid = Boolean(true);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.testFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'user': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[A-Z]+.*")]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.http.post('http://' + this.ip.IP + ':3001/register', {
            username: this.usernameValue,
            password: this.passwordValue
          }).subscribe(function (x) {
            console.log(x);

            if (x == "LUL") {}
          }, function (error) {
            console.error(error);
          });
        }
      }, {
        key: "onConfigure",
        value: function onConfigure() {
          alert("Glückwunsch");
        }
      }, {
        key: "inputUserFocusOut",
        value: function inputUserFocusOut() {
          if (!this.testFormGroup.get('user').valid) {
            this.isUserValid = false;
            return;
          }

          this.isUserValid = true;
        }
      }, {
        key: "password",
        get: function get() {
          return this.testFormGroup.get('password');
        }
      }, {
        key: "username",
        get: function get() {
          return this.testFormGroup.get('user');
        }
      }, {
        key: "usernameValue",
        get: function get() {
          return this.testFormGroup.get('user').value;
        }
      }, {
        key: "passwordValue",
        get: function get() {
          return this.testFormGroup.get('password').value;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ip_service__WEBPACK_IMPORTED_MODULE_4__["IpService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 19,
      vars: 3,
      consts: [[1, "login-container", "body"], ["id", "login", 1, "login"], [1, "login-form", 3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "User", "required", "", "autofocus", "", "formControlName", "user", 1, "login-input", 3, "focusout"], ["id", "errorText", 4, "ngIf"], ["type", "password", "placeholder", "Password", "formControlName", "password", "required", "", 1, "login-input"], [4, "ngIf"], [1, "submit-container"], ["type", "submit", 1, "login-button"], ["href", "https://www.twitch.tv/ellibesh"], ["id", "errorText"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "BreakOut Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener($event) {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function RegisterComponent_Template_input_focusout_8_listener($event) {
            return ctx.inputUserFocusOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_label_9_Template, 2, 0, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegisterComponent_div_11_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "SIGN UP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "2020 - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Designed by Dilber");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".body[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n  background: #F1F1F1;\n  margin: 0 auto;\n}\n\n\n\n@-webkit-keyframes scale_header {\n  0% {\n    max-height: 0px;\n    margin-bottom: 0px;\n    opacity: 0;\n  }\n  100% {\n    max-height: 117px;\n    margin-bottom: 25px;\n    opacity: 1;\n  }\n}\n\n@keyframes scale_header {\n  0% {\n    max-height: 0px;\n    margin-bottom: 0px;\n    opacity: 0;\n  }\n  100% {\n    max-height: 117px;\n    margin-bottom: 25px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes input_opacity {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes input_opacity {\n  0% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes text_opacity {\n  0% {\n    color: transparent;\n  }\n}\n\n@keyframes text_opacity {\n  0% {\n    color: transparent;\n  }\n}\n\n@-webkit-keyframes error_before {\n  0% {\n    height: 5px;\n    background: rgba(0, 0, 0, 0.156);\n    color: transparent;\n  }\n  10% {\n    height: 117px;\n    background: #FFFFFF;\n    color: #C62828;\n  }\n  90% {\n    height: 117px;\n    background: #FFFFFF;\n    color: #C62828;\n  }\n  100% {\n    height: 5px;\n    background: rgba(0, 0, 0, 0.156);\n    color: transparent;\n  }\n}\n\n@keyframes error_before {\n  0% {\n    height: 5px;\n    background: rgba(0, 0, 0, 0.156);\n    color: transparent;\n  }\n  10% {\n    height: 117px;\n    background: #FFFFFF;\n    color: #C62828;\n  }\n  90% {\n    height: 117px;\n    background: #FFFFFF;\n    color: #C62828;\n  }\n  100% {\n    height: 5px;\n    background: rgba(0, 0, 0, 0.156);\n    color: transparent;\n  }\n}\n\n\n\n.login-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n  width: 340px;\n  height: auto;\n  padding: 5px;\n  box-sizing: border-box;\n}\n\n.login-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: 0 0 20px 0;\n}\n\n.login-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.8rem;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.login-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.login[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  margin: 0 0 10px 0;\n  box-sizing: border-box;\n  border-radius: 3px;\n  background: #FAFAFA;\n  overflow: hidden;\n  -webkit-animation: input_opacity 0.2s cubic-bezier(0.55, 0, 0.1, 1);\n          animation: input_opacity 0.2s cubic-bezier(0.55, 0, 0.1, 1);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.login[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  margin: -10px -10px 25px -10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  background: #009688;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.3rem;\n  color: #FAFAFA;\n  -webkit-animation: scale_header 0.6s cubic-bezier(0.55, 0, 0.1, 1), text_opacity 1s cubic-bezier(0.55, 0, 0.1, 1);\n          animation: scale_header 0.6s cubic-bezier(0.55, 0, 0.1, 1), text_opacity 1s cubic-bezier(0.55, 0, 0.1, 1);\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.login[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  padding: 10px;\n  margin: -10px 0 0 -10px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.156);\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.9rem;\n  color: transparent;\n  z-index: 5;\n}\n\n.login.error_1[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]:before, .login.error_2[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]:before {\n  -webkit-animation: error_before 3s cubic-bezier(0.55, 0, 0.1, 1);\n          animation: error_before 3s cubic-bezier(0.55, 0, 0.1, 1);\n}\n\n.login.error_1[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]:before {\n  content: \"Invalid username or password!\";\n}\n\n.login.error_2[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]:before {\n  content: \"Invalid or expired Token!\";\n}\n\n.login[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 50px 0 10px 0;\n  color: #FDAB43;\n}\n\n.login[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  -webkit-animation: text_opacity 1.5s cubic-bezier(0.55, 0, 0.1, 1);\n          animation: text_opacity 1.5s cubic-bezier(0.55, 0, 0.1, 1);\n  color: rgba(255, 255, 255, 0.4);\n}\n\n\n\n.login-form[_ngcontent-%COMP%] {\n  padding: 15px;\n  box-sizing: border-box;\n}\n\n\n\n.login-input[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 10px 5px;\n  margin: 0 0 25px 0;\n  border: none;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  background: transparent;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  opacity: 1;\n  -webkit-animation: input_opacity 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n          animation: input_opacity 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n  -webkit-transition: border-bottom 0.2s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: border-bottom 0.2s cubic-bezier(0.55, 0, 0.1, 1);\n}\n\n.login-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom: 2px solid #E37F00;\n}\n\n\n\n.submit-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  position: relative;\n  padding: 10px;\n  margin: 35px -25px -25px -25px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.login-button[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: none;\n  border-radius: 3px;\n  background: transparent;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #E37F00;\n  cursor: pointer;\n  opacity: 1;\n  -webkit-animation: input_opacity 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n          animation: input_opacity 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n  -webkit-transition: background 0.2s ease-in-out;\n  transition: background 0.2s ease-in-out;\n}\n\n.login-button.raised[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  color: #FAFAFA;\n  background: #E37F00;\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.137255), 0px 1px 5px 0px rgba(0, 0, 0, 0.117647), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.login-button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.login-button.raised[_ngcontent-%COMP%]:hover {\n  background: #FDAB43;\n}\n\n\n\n\n\n.card[_ngcontent-%COMP%] {\n  height: 370px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 400px;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-left: 10px;\n  color: #FFC312;\n}\n\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.social_icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: -45px;\n}\n\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 50px;\n  background-color: #FFC312;\n  color: black;\n  border: 0 !important;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: 0 0 0 0 !important;\n  box-shadow: 0 0 0 0 !important;\n}\n\n.remember[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 15px;\n  margin-right: 5px;\n}\n\n.login_btn[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #FFC312;\n  width: 100px;\n}\n\n.login_btn[_ngcontent-%COMP%]:hover {\n  color: black;\n  background-color: white;\n}\n\n.links[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxkZ3VyXFxEZXNrdG9wXFxHYW1lIEJyZWFrb3V0IExhc3RcXEZyb250ZW5kL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdFLHdCQUFBOztBQUNBO0VBQ0U7SUFBTSxlQUFBO0lBQWlCLGtCQUFBO0lBQW9CLFVBQUE7RUNHN0M7RURGRTtJQUFNLGlCQUFBO0lBQW1CLG1CQUFBO0lBQXFCLFVBQUE7RUNPaEQ7QUFDRjs7QURWRTtFQUNFO0lBQU0sZUFBQTtJQUFpQixrQkFBQTtJQUFvQixVQUFBO0VDRzdDO0VERkU7SUFBTSxpQkFBQTtJQUFtQixtQkFBQTtJQUFxQixVQUFBO0VDT2hEO0FBQ0Y7O0FETEU7RUFDRTtJQUFNLG9DQUFBO1lBQUEsNEJBQUE7SUFBOEIsVUFBQTtFQ1N0QztFRFJFO0lBQU0sa0NBQUE7WUFBQSwwQkFBQTtJQUE0QixVQUFBO0VDWXBDO0FBQ0Y7O0FEZkU7RUFDRTtJQUFNLG9DQUFBO1lBQUEsNEJBQUE7SUFBOEIsVUFBQTtFQ1N0QztFRFJFO0lBQU0sa0NBQUE7WUFBQSwwQkFBQTtJQUE0QixVQUFBO0VDWXBDO0FBQ0Y7O0FEVkU7RUFDRTtJQUFJLGtCQUFBO0VDYU47QUFDRjs7QURmRTtFQUNFO0lBQUksa0JBQUE7RUNhTjtBQUNGOztBRFhFO0VBQ0U7SUFBTSxXQUFBO0lBQWEsZ0NBQUE7SUFBa0Msa0JBQUE7RUNnQnZEO0VEZkU7SUFBTSxhQUFBO0lBQWUsbUJBQUE7SUFBcUIsY0FBQTtFQ29CNUM7RURuQkU7SUFBTSxhQUFBO0lBQWUsbUJBQUE7SUFBcUIsY0FBQTtFQ3dCNUM7RUR2QkU7SUFBTSxXQUFBO0lBQWEsZ0NBQUE7SUFBa0Msa0JBQUE7RUM0QnZEO0FBQ0Y7O0FEakNFO0VBQ0U7SUFBTSxXQUFBO0lBQWEsZ0NBQUE7SUFBa0Msa0JBQUE7RUNnQnZEO0VEZkU7SUFBTSxhQUFBO0lBQWUsbUJBQUE7SUFBcUIsY0FBQTtFQ29CNUM7RURuQkU7SUFBTSxhQUFBO0lBQWUsbUJBQUE7SUFBcUIsY0FBQTtFQ3dCNUM7RUR2QkU7SUFBTSxXQUFBO0lBQWEsZ0NBQUE7SUFBa0Msa0JBQUE7RUM0QnZEO0FBQ0Y7O0FEekJFLGVBQUE7O0FBQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQzJCSjs7QUR4QkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUMyQko7O0FEeEJFO0VBQ0Usc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUMyQko7O0FEeEJFO0VBQ0UseUJBQUE7QUMyQko7O0FEeEJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsK0dBQUE7QUMyQko7O0FEdEJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUhBQUE7VUFBQSx5R0FBQTtFQUNBLHlIQUFBO0FDeUJKOztBRHBCRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ3VCSjs7QURwQkU7O0VBRUUsZ0VBQUE7VUFBQSx3REFBQTtBQ3VCSjs7QURwQkU7RUFDRSx3Q0FBQTtBQ3VCSjs7QURwQkU7RUFDRSxvQ0FBQTtBQ3VCSjs7QURwQkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUN1Qko7O0FEcEJFO0VBQ0UsZ0JBQUE7RUFDQSxrRUFBQTtVQUFBLDBEQUFBO0VBQ0EsK0JBQUE7QUN1Qko7O0FEcEJFLFNBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUN1Qko7O0FEbkJFLFdBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1FQUFBO1VBQUEsMkRBQUE7RUFDQSxvRUFBQTtFQUFBLDREQUFBO0FDc0JKOztBRG5CRTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtBQ3NCSjs7QURsQkUsa0JBQUE7O0FBQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtBQ3FCSjs7QURsQkU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsK0NBQUE7RUFBQSx1Q0FBQTtBQ3FCSjs7QURsQkU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlJQUFBO0FDcUJKOztBRGhCRTtFQUNFLCtCQUFBO0FDbUJKOztBRGhCRTtFQUNFLG1CQUFBO0FDbUJKOztBRGpCRSxHQUFBOztBQUNGOzs7Ozs7Ozs7O0dBQUE7O0FBWUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQ21CSjs7QURoQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbUJKOztBRGhCQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDbUJKOztBRGhCQTtFQUNJLFlBQUE7QUNtQko7O0FEaEJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ21CSjs7QURoQkE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNtQko7O0FEaEJBO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBQ21CSjs7QURoQkE7RUFDSSxZQUFBO0FDbUJKOztBRGhCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ21CSjs7QURoQkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDbUJKOztBRGhCQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQ21CSjs7QURoQkE7RUFDSSxZQUFBO0FDbUJKOztBRGhCQTtFQUNJLGdCQUFBO0FDbUJKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLyogQW5pbWF0aW9uIEtleWZyYW1lcyAqL1xyXG4gIEBrZXlmcmFtZXMgc2NhbGVfaGVhZGVyIHtcclxuICAgIDAlICAge21heC1oZWlnaHQ6IDBweDsgbWFyZ2luLWJvdHRvbTogMHB4OyBvcGFjaXR5OiAwO31cclxuICAgIDEwMCUge21heC1oZWlnaHQ6IDExN3B4OyBtYXJnaW4tYm90dG9tOiAyNXB4OyBvcGFjaXR5OiAxO31cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBpbnB1dF9vcGFjaXR5IHtcclxuICAgIDAlICAge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IG9wYWNpdHk6IDB9XHJcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgb3BhY2l0eTogMX1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyB0ZXh0X29wYWNpdHkge1xyXG4gICAgMCUge2NvbG9yOiB0cmFuc3BhcmVudDt9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZXJyb3JfYmVmb3JlIHtcclxuICAgIDAlICAge2hlaWdodDogNXB4OyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTU2KTsgY29sb3I6IHRyYW5zcGFyZW50O31cclxuICAgIDEwJSAge2hlaWdodDogMTE3cHg7IGJhY2tncm91bmQ6ICNGRkZGRkY7IGNvbG9yOiAjQzYyODI4fVxyXG4gICAgOTAlICB7aGVpZ2h0OiAxMTdweDsgYmFja2dyb3VuZDogI0ZGRkZGRjsgY29sb3I6ICNDNjI4Mjh9XHJcbiAgICAxMDAlIHtoZWlnaHQ6IDVweDsgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1Nik7IGNvbG9yOiB0cmFuc3BhcmVudDt9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIExvZ2luIEZvcm0gKi9cclxuICAubG9naW4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWNvbnRhaW5lciBwIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1jb250YWluZXIgcCBhIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBhbmltYXRpb246IGlucHV0X29wYWNpdHkgMC4ycyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuMSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luID4gaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogLTEwcHggLTEwcHggMjVweCAtMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Njg4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBjb2xvcjogI0ZBRkFGQTtcclxuICAgIGFuaW1hdGlvbjogc2NhbGVfaGVhZGVyIDAuNnMgY3ViaWMtYmV6aWVyKC41NSwgMCwgLjEsIDEpLCB0ZXh0X29wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKC41NSwgMCwgLjEsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcclxuICAgICAgICAgICAgICAgIDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICBcclxuICAubG9naW4gPiBoZWFkZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAtMTBweCAwIDAgLTEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1Nik7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi5lcnJvcl8xID4gaGVhZGVyOmJlZm9yZSxcclxuICAubG9naW4uZXJyb3JfMiA+IGhlYWRlcjpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uOiBlcnJvcl9iZWZvcmUgM3MgY3ViaWMtYmV6aWVyKC41NSwgMCwgLjEsIDEpO1xyXG4gIH1cclxuICBcclxuICAubG9naW4uZXJyb3JfMSA+IGhlYWRlcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQhJztcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLmVycm9yXzIgPiBoZWFkZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdJbnZhbGlkIG9yIGV4cGlyZWQgVG9rZW4hJztcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luID4gaGVhZGVyIGgyIHtcclxuICAgIG1hcmdpbjogNTBweCAwIDEwcHggMDtcclxuICAgIGNvbG9yOiAjRkRBQjQzO1xyXG4gIH1cclxuICBcclxuICAubG9naW4gPiBoZWFkZXIgaDQge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGFuaW1hdGlvbjogdGV4dF9vcGFjaXR5IDEuNXMgY3ViaWMtYmV6aWVyKC41NSwgMCwgLjEsIDEpO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICB9XHJcbiAgXHJcbiAgLyogRm9ybSAqL1xyXG4gIC5sb2dpbi1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBJbnB1dHMgKi9cclxuICAubG9naW4taW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIG1hcmdpbjogMCAwIDI1cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGFuaW1hdGlvbjogaW5wdXRfb3BhY2l0eSAwLjhzIGN1YmljLWJlemllciguNTUsIDAsIC4xLCAxKTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC4ycyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuMSwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFMzdGMDA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIFN1Ym1pdCBCdXR0b24gKi9cclxuICAuc3VibWl0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAzNXB4IC0yNXB4IC0yNXB4IC0yNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0UzN0YwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBhbmltYXRpb246IGlucHV0X29wYWNpdHkgMC44cyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuMSwgMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1idXR0b24ucmFpc2VkIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgY29sb3I6ICNGQUZBRkE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTM3RjAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMzcyNTUpLFxyXG4gICAgICAgICAgICAgICAgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMTc2NDcpLFxyXG4gICAgICAgICAgICAgICAgMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWJ1dHRvbi5yYWlzZWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZEQUI0MztcclxuICB9XHJcbiAgLyoqL1xyXG4vKiBcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcclxuLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9nZXR3YWxscGFwZXJzLmNvbS93YWxscGFwZXIvZnVsbC9hLzUvZC81NDQ3NTAuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjtcclxufSAqL1xyXG5cclxuLmNhcmQge1xyXG4gICAgaGVpZ2h0OiAzNzBweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zb2NpYWxfaWNvbiBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICNGRkMzMTI7XHJcbn1cclxuXHJcbi5zb2NpYWxfaWNvbiBzcGFuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIGgzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAtNDVweDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXByZXBlbmQgc3BhbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVtZW1iZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucmVtZW1iZXIgaW5wdXQge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubG9naW5fYnRuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbl9idG46aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rcyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rcyBhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuICAiLCIuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiBBbmltYXRpb24gS2V5ZnJhbWVzICovXG5Aa2V5ZnJhbWVzIHNjYWxlX2hlYWRlciB7XG4gIDAlIHtcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWF4LWhlaWdodDogMTE3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGlucHV0X29wYWNpdHkge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdGV4dF9vcGFjaXR5IHtcbiAgMCUge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuQGtleWZyYW1lcyBlcnJvcl9iZWZvcmUge1xuICAwJSB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1Nik7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIDEwJSB7XG4gICAgaGVpZ2h0OiAxMTdweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGNvbG9yOiAjQzYyODI4O1xuICB9XG4gIDkwJSB7XG4gICAgaGVpZ2h0OiAxMTdweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGNvbG9yOiAjQzYyODI4O1xuICB9XG4gIDEwMCUge1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNTYpO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuLyogTG9naW4gRm9ybSAqL1xuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM0MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciBwIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubG9naW4tY29udGFpbmVyIHAgYSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5sb2dpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IGlucHV0X29wYWNpdHkgMC4ycyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubG9naW4gPiBoZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IC0xMHB4IC0xMHB4IDI1cHggLTEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQ6ICMwMDk2ODg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICNGQUZBRkE7XG4gIGFuaW1hdGlvbjogc2NhbGVfaGVhZGVyIDAuNnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSksIHRleHRfb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmxvZ2luID4gaGVhZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAtMTBweCAwIDAgLTEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNTYpO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogNTtcbn1cblxuLmxvZ2luLmVycm9yXzEgPiBoZWFkZXI6YmVmb3JlLFxuLmxvZ2luLmVycm9yXzIgPiBoZWFkZXI6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBlcnJvcl9iZWZvcmUgM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XG59XG5cbi5sb2dpbi5lcnJvcl8xID4gaGVhZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCFcIjtcbn1cblxuLmxvZ2luLmVycm9yXzIgPiBoZWFkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJJbnZhbGlkIG9yIGV4cGlyZWQgVG9rZW4hXCI7XG59XG5cbi5sb2dpbiA+IGhlYWRlciBoMiB7XG4gIG1hcmdpbjogNTBweCAwIDEwcHggMDtcbiAgY29sb3I6ICNGREFCNDM7XG59XG5cbi5sb2dpbiA+IGhlYWRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGFuaW1hdGlvbjogdGV4dF9vcGFjaXR5IDEuNXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG5cbi8qIEZvcm0gKi9cbi5sb2dpbi1mb3JtIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogSW5wdXRzICovXG4ubG9naW4taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWFyZ2luOiAwIDAgMjVweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb246IGlucHV0X29wYWNpdHkgMC44cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjJzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xufVxuXG4ubG9naW4taW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0UzN0YwMDtcbn1cblxuLyogU3VibWl0IEJ1dHRvbiAqL1xuLnN1Ym1pdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMzVweCAtMjVweCAtMjVweCAtMjVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmxvZ2luLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0UzN0YwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb246IGlucHV0X29wYWNpdHkgMC44cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubG9naW4tYnV0dG9uLnJhaXNlZCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogI0ZBRkFGQTtcbiAgYmFja2dyb3VuZDogI0UzN0YwMDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMzcyNTUpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjExNzY0NyksIDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubG9naW4tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLmxvZ2luLWJ1dHRvbi5yYWlzZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRkRBQjQzO1xufVxuXG4vKiovXG4vKiBcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XG4uY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2dldHdhbGxwYXBlcnMuY29tL3dhbGxwYXBlci9mdWxsL2EvNS9kLzU0NDc1MC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjtcbn0gKi9cbi5jYXJkIHtcbiAgaGVpZ2h0OiAzNzBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcbn1cblxuLnNvY2lhbF9pY29uIHNwYW4ge1xuICBmb250LXNpemU6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI0ZGQzMxMjtcbn1cblxuLnNvY2lhbF9pY29uIHNwYW46aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtaGVhZGVyIGgzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc29jaWFsX2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IC00NXB4O1xufVxuXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFuIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMCAwIDAgMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAwICFpbXBvcnRhbnQ7XG59XG5cbi5yZW1lbWJlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlbWVtYmVyIGlucHV0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubG9naW5fYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5sb2dpbl9idG46aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubGlua3Mge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saW5rcyBhIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationserviceService"]
        }, {
          type: _services_ip_service__WEBPACK_IMPORTED_MODULE_4__["IpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/scoreboard/scoreboard.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/scoreboard/scoreboard.component.ts ***!
    \****************************************************/

  /*! exports provided: ScoreboardComponent */

  /***/
  function srcAppScoreboardScoreboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScoreboardComponent", function () {
      return ScoreboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/authenticationservice.service */
    "./src/app/services/authenticationservice.service.ts");
    /* harmony import */


    var _services_ip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/ip.service */
    "./src/app/services/ip.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ScoreboardComponent_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var scoreItem_r217 = ctx.$implicit;
        var i_r218 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r218 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](scoreItem_r217.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](scoreItem_r217.score);
      }
    }

    var ScoreboardComponent =
    /*#__PURE__*/
    function () {
      function ScoreboardComponent(http, authService, ip) {
        _classCallCheck(this, ScoreboardComponent);

        this.http = http;
        this.authService = authService;
        this.ip = ip;
        this.scoreBoard = [];
      }

      _createClass(ScoreboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.table = document.getElementById('table');
          console.log(this.authService.Token);
          this.http.post('http://' + this.ip.IP + ':3001/scoreboard', {}).subscribe(function (x) {
            _this4.scoreBoard = x;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ScoreboardComponent;
    }();

    ScoreboardComponent.ɵfac = function ScoreboardComponent_Factory(t) {
      return new (t || ScoreboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ip_service__WEBPACK_IMPORTED_MODULE_3__["IpService"]));
    };

    ScoreboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScoreboardComponent,
      selectors: [["app-scoreboard"]],
      decls: 11,
      vars: 1,
      consts: [["id", "table", 1, "table", "table-dark"], [4, "ngFor", "ngForOf"]],
      template: function ScoreboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ScoreBoard Break Out\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Player ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "High Scores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ScoreboardComponent_tr_10_Template, 7, 3, "tr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scoreBoard);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njb3JlYm9hcmQvc2NvcmVib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-scoreboard',
          templateUrl: './scoreboard.component.html',
          styleUrls: ['./scoreboard.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_authenticationservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationserviceService"]
        }, {
          type: _services_ip_service__WEBPACK_IMPORTED_MODULE_3__["IpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth-interceptor.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/auth-interceptor.service.ts ***!
    \******************************************************/

  /*! exports provided: AuthInterceptorService */

  /***/
  function srcAppServicesAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
      return AuthInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authenticationservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authenticationservice.service */
    "./src/app/services/authenticationservice.service.ts");

    var AuthInterceptorService =
    /*#__PURE__*/
    function () {
      function AuthInterceptorService(authenticationService) {
        _classCallCheck(this, AuthInterceptorService);

        this.authenticationService = authenticationService;
      }

      _createClass(AuthInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          // console.log(this.authenticationService.Token);
          if (req.url.endsWith('s') || req.url.endsWith('ss')) {
            return next.handle(req);
          }

          var authReq = req.clone({
            setHeaders: {
              Authorization: this.authenticationService.Token
            }
          });
          return next.handle(authReq);
        }
      }]);

      return AuthInterceptorService;
    }();

    AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) {
      return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authenticationservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationserviceService"]));
    };

    AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptorService,
      factory: AuthInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _authenticationservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/services/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authenticationservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authenticationservice.service */
    "./src/app/services/authenticationservice.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authenticationService, router) {
        _classCallCheck(this, AuthGuard);

        this.authenticationService = authenticationService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authenticationService.Token.length > 0) {
            return true;
          }

          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authenticationservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _authenticationservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationserviceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/authenticationservice.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/authenticationservice.service.ts ***!
    \***********************************************************/

  /*! exports provided: AuthenticationserviceService */

  /***/
  function srcAppServicesAuthenticationserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationserviceService", function () {
      return AuthenticationserviceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthenticationserviceService = function AuthenticationserviceService() {
      _classCallCheck(this, AuthenticationserviceService);

      this.Token = '';
    };

    AuthenticationserviceService.ɵfac = function AuthenticationserviceService_Factory(t) {
      return new (t || AuthenticationserviceService)();
    };

    AuthenticationserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationserviceService,
      factory: AuthenticationserviceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentMessage = this.messageSource.asObservable();
      }

      _createClass(DataService, [{
        key: "changeMessage",
        value: function changeMessage(message) {
          var _this5 = this;

          this.currentMessage.subscribe(function (message) {
            return _this5.text = message;
          });
          this.messageSource.next(message);
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)();
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/ip.service.ts":
  /*!****************************************!*\
    !*** ./src/app/services/ip.service.ts ***!
    \****************************************/

  /*! exports provided: IpService */

  /***/
  function srcAppServicesIpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IpService", function () {
      return IpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IpService = function IpService() {
      _classCallCheck(this, IpService);

      this.IP = '127.0.0.1';
    };

    IpService.ɵfac = function IpService_Factory(t) {
      return new (t || IpService)();
    };

    IpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IpService,
      factory: IpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\dgur\Desktop\Game Breakout Last\Frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map