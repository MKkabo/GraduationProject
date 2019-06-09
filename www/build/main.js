webpackJsonp([16],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, alertctrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertctrl = alertctrl;
        this.toastCtrl = toastCtrl;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    PaymentPage.prototype.pay = function () {
        var forgot = this.alertctrl.create({
            title: 'Processing',
            message: 'Successfully',
        });
        forgot.present();
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>payment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header">\n        \n        <ion-card>\n\n            <img src="../assets/img/pay.jpg">\n    <ion-item class="item item-input">\n      <ion-label>Card number</ion-label>\n      <ion-input type="text" size="20"  placeholder="4242 4242 4242 4242"></ion-input>\n    </ion-item>\n    <ion-item class="item item-input">\n        <ion-label>Exp.Mth</ion-label>\n        <ion-input type="text" size="20"  placeholder="01"></ion-input>\n      </ion-item>\n      <ion-item class="item item-input">\n          <ion-label>Exp.Year</ion-label>\n          <ion-input type="text" size="20"  placeholder="2020"></ion-input>\n        </ion-item>\n        <ion-label class="item item-input">\n            <ion-item>\n              <ion-label>Sec. Code (CVC)</ion-label><ion-input type="text" size="20"  placeholder="123"></ion-input>\n            </ion-item>\n          </ion-label>\n   \n    \n  \n\n    <div text-center class="padding center">\n      <button ion-button  (click)="pay()">Pay 50 L.E</button>\n    </div>\n  </ion-card>\n  \n\n    \n  </ion-content>\n\n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEducationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_store_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_db__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddEducationPage = (function () {
    function AddEducationPage(navCtrl, navParams, db, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.store = store;
        this.dates = {};
    }
    AddEducationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEducationPage');
    };
    AddEducationPage.prototype.setDate = function (key, value) {
        this.dates[key] = value;
    };
    AddEducationPage.prototype.submitForm = function (f) {
        var _this = this;
        console.log(f.value);
        f.value['user_id'] = this.store.getUserId();
        this.db.addEducation(f.value).subscribe(function (res) {
            console.log(res);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    AddEducationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-add-education',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\add-education\add-education.html"*/'<!--\n  Generated template for the AddEducationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add-education</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <form (ngSubmit)="submitForm(f)" #f="ngForm">\n      <ion-list>\n          <ion-item>\n            <ion-label floating>\n              <ion-icon name="person" item-start class="text-primary"></ion-icon>\n              School Name\n            </ion-label>\n            <ion-input type="text" name="school_name" ngModel #school_name="ngModel" required></ion-input>\n          </ion-item>\n    \n    \n          <ion-item>\n            <ion-label floating>\n              <ion-icon name="person" item-start class="text-primary"></ion-icon>\n              Degree\n            </ion-label>\n            <ion-input type="text" name="degree" ngModel #degree="ngModel" required></ion-input>\n          </ion-item>\n      \n          <ion-item>\n                <ion-label>Start Date</ion-label>\n                <ion-datetime display-format="MM/YYYY" name="startDate" pickerFormat="M YYYY" min="1900" max="2020" #start ngModel (ionChange)="setDate(\'start\',start)"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label>End Date</ion-label>\n                <ion-datetime display-format="MM/YYYY" name="endDate" pickerFormat="M YYYY" min="1900" max="2020" #end ngModel (ionChange)="setDate(\'end\',end.value)"></ion-datetime>\n            </ion-item>\n    \n        </ion-list>\n    \n        <div margin-top>\n            <button ion-button color="blue" type="submit" block [disabled]="!f.valid">Submit</button>\n        </div>\n      \n  </form>\n\n    <!-- <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-datetime pickerFormat="M YYYY" min="1900" max="2020" [(ngModel)]="dates.test" #test (ionChange)="setDate(\'test\',test._text)"></ion-datetime>\n    </ion-item> -->\n\n</ion-content>\n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\add-education\add-education.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_store_store__["a" /* StoreProvider */]])
    ], AddEducationPage);
    return AddEducationPage;
}());

//# sourceMappingURL=add-education.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_db_db__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsDetailsPage = (function () {
    function NewsDetailsPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
    }
    NewsDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('Welcome to newsfeeds');
        this.db.getNewsfeed().subscribe(function (res) {
            console.log(res);
            if (res['success'] === true) {
                _this.newsfeeds = res['newsfeeds'];
            }
        });
    };
    NewsDetailsPage.prototype.onLoad = function (newsfeed) {
        this.navCtrl.push(newsfeed, {
            newsfeed: newsfeed
        });
    };
    NewsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-news-details',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\news-details\news-details.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title text-center>News</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ng-template [ngIf]="newsfeeds"> \n  <ion-card *ngFor="let newsfeed of newsfeeds"> \n    <ion-card-content>\n        <ion-item>\n          <img src="http://192.168.1.7:3000/{{ newsfeed.image }}">\n          </ion-item>\n    \n     <p  text-wrap>{{ newsfeed.body }}</p>\n   \n    </ion-card-content>\n  </ion-card>\n</ng-template>\n</ion-content>\n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\news-details\news-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_db_db__["a" /* DbProvider */]])
    ], NewsDetailsPage);
    return NewsDetailsPage;
}());

//# sourceMappingURL=news-details.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_db_db__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c_details_c_details__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoursesPage = (function () {
    function CoursesPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.dates = {
            test: new Date('2018-07').toISOString()
        };
    }
    CoursesPage.prototype.ionViewDidLoad = function () {
        console.log('welcome to courses');
        // this.db.getCourses().subscribe(res => {
        //   if (res['success'] === true) {
        //     this.courses = res['courses'];
        //   }
        // })
        this.loadCourses();
    };
    CoursesPage.prototype.loadCourses = function () {
        var _this = this;
        this.db.getCourses().subscribe(function (res) {
            if (res['success'] === true) {
                _this.courses = res['courses'];
            }
        });
    };
    CoursesPage.prototype.onLoad = function (course) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__c_details_c_details__["a" /* CDetailsPage */], {
            course: course
        });
    };
    CoursesPage.prototype.search = function (event) {
        var _this = this;
        this.db.searchCourses(event).subscribe(function (res) {
            _this.courses = res['courses'];
        });
    };
    CoursesPage.prototype.cancelSearch = function () {
        this.loadCourses();
    };
    CoursesPage.prototype.setDate = function (key, value) {
        this.dates[key] = value;
        console.log(this.dates);
    };
    CoursesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-courses',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\courses\courses.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>Courses</ion-title>\n\n  </ion-navbar>\n\n  <ion-searchbar animated #searchBar (keyup.enter)="search(searchBar.value)" (ionClear)="cancelSearch()"></ion-searchbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content >\n\n    <!-- <ion-item>\n\n        <ion-label>Date</ion-label>\n\n        <ion-datetime display-format="MM/YYYY" pickerFormat="M YYYY" min="1900" max="2020" #start (ionChange)="setDate(\'start\',start)"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Date</ion-label>\n\n        <ion-datetime display-format="MM/YYYY" pickerFormat="M YYYY" min="1900" max="2020" #end (ionChange)="setDate(\'end\',end.value)"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Date</ion-label>\n\n        <ion-datetime pickerFormat="M YYYY" min="1900" max="2020" [(ngModel)]="dates.test" #test (ionChange)="setDate(\'test\',test._text)"></ion-datetime>\n\n    </ion-item> -->\n\n\n\n  <ng-template [ngIf]="courses">\n\n\n\n    <ion-card *ngFor="let course of courses">\n\n      <ion-card-content>\n\n        <img src="http://192.168.1.7:3000/{{ course.image }}">\n\n        <ion-card-header>\n\n          <ion-card-title>{{ course.name }}</ion-card-title>\n\n        </ion-card-header>\n\n        <ion-item>\n\n          <ion-label>Category : {{ course.category }}</ion-label>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Course Level : {{ course.course_level }}</ion-label>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n          <ion-label>Duration : {{ course.duration }} {{ course.duration > 1 ? \'weeks\' : \'week\' }}</ion-label>\n\n        </ion-item>\n\n        <button ion-button fill="outline" full (click)="onLoad(course)">View</button>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ng-template>\n\n</ion-content>'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_db_db__["a" /* DbProvider */]])
    ], CoursesPage);
    return CoursesPage;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_db_db__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rate_rate__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CDetailsPage = (function () {
    function CDetailsPage(navCtrl, navParams, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.course = navParams.get('course');
        this.db.getCourseRate(this.course.id).subscribe(function (res) {
            _this.randRate = res['rate'];
        });
        // this.randRate =  (Math.random() * 5).toFixed(1);
    }
    CDetailsPage.prototype.ionViewDidLoad = function () {
        this.course = this.navParams.get('course');
    };
    CDetailsPage.prototype.rate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__rate_rate__["a" /* RatePage */], {
            course: this.course
        });
    };
    CDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-c-details',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\c-details\c-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      Course Details\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n  <ng-template [ngIf]="course">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col text-right>\n          <span class="rate-col">\n            {{ randRate }}\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <h1>{{ course.name }}</h1>\n\n    \n      <ion-item>\n        <ion-label color="primary">Category :</ion-label>\n        <ion-label text-wrap>{{ course.category }}</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary">Location :</ion-label>\n        <ion-label text-wrap>{{ course.location }}</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary">duration :</ion-label>\n        <ion-label text-wrap>{{ course.duration }} {{ course.duration > 1 ? \'weeks\' : \'week\'  }}</ion-label>\n    </ion-item>\n    \n   \n      <ion-item>\n        <ion-label text-center color="primary">About this course</ion-label>\n      </ion-item>\n    <div class="p2">\n      <p text-center text-wrap>{{ course.about }}</p>\n    </div>\n      <ion-item></ion-item>\n      <ion-item text-center>\n        <button ion-button (click)="rate()">Rate Course</button>\n      </ion-item>\n  \n  </ng-template>\n\n</ion-content>'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\c-details\c-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_db_db__["a" /* DbProvider */]])
    ], CDetailsPage);
    return CDetailsPage;
}());

//# sourceMappingURL=c-details.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_db_db__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_store_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RatePage = (function () {
    function RatePage(navCtrl, navParams, events, store, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.store = store;
        this.db = db;
        this.rating = 5;
        this.description = '';
        this.course = navParams.get('course');
        events.subscribe('star-rating:changed', function (starRating) {
            _this.rating = starRating;
        });
    }
    RatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatePage');
    };
    RatePage.prototype.submitRate = function () {
        var _this = this;
        var rate = {
            user_id: this.store.getUserId(),
            course_id: this.course.id,
            rate: this.rating,
            description: this.description
        };
        console.log(rate);
        this.db.rateCourse(rate).subscribe(function () {
            _this.navCtrl.pop();
        });
    };
    RatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-rate',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\rate\rate.html"*/' <ion-header>\n\n  <ion-navbar>\n    <ion-title>Rate and Review</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n <ion-card class="card">\n   <h1 text-center padding>Rate this Course</h1>\n  <ionic3-star-rating text-center\n    activeIcon = "star"\n    defaultIcon = "star-outline"\n    activeColor = "#1c72a5" \n    defaultColor = "#222"\n    readonly="false"\n    [rating]="rating">\n  </ionic3-star-rating>\n\n \n  <ion-item> \n     <ion-label text-center padding>Tell Us your Feedback?</ion-label>\n  </ion-item>\n<ion-textarea placeholder="Enter your Review" text-center [(ngModel)]="description"></ion-textarea>\n\n  <button ion-button fill="outline" full (click)="submitRate()">Submit</button>\n</ion-card>\n\n\n\n\n  \n</ion-content>\n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\rate\rate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__providers_store_store__["a" /* StoreProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_db_db__["a" /* DbProvider */]])
    ], RatePage);
    return RatePage;
}());

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobDetailsPage = (function () {
    function JobDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.job = navParams.get('job');
    }
    JobDetailsPage.prototype.ionViewDidLoad = function () {
        this.job = this.navParams.get('job');
    };
    JobDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-job-details',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\job-details\job-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Job-Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    \n    <ng-template [ngIf]="job">\n<div class="about-header">\n  <img src="http://192.168.1.7:3000/{{ job.image }}">\n</div>\n<div padding class="about-info">\n  <ion-item-divider color="primary">\n    <ion-label>\n      <h4 text-center>{{ job.company_name }}</h4>\n    </ion-label>\n  </ion-item-divider>\n\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary">Job Title :</ion-label>\n      <ion-label text-wrap> {{ job.job_title }}</ion-label>\n    </ion-item>\n\n    <ion-item> \n      <ion-label color="primary">Field :</ion-label>\n      <ion-label text-wrap>{{ job.job_field }}</ion-label>\n    </ion-item>\n    <ion-item> \n      <ion-label  color="primary">Location :</ion-label>\n      <ion-label text-wrap >{{ job.location }} </ion-label>\n    </ion-item>\n  </ion-list>\n   \n    <ion-label   color="primary">Requirments :</ion-label>\n   \n    <pre>{{ job.requirements }}</pre>\n    <ion-label   color="primary">About Job :</ion-label>\n  <p text-wrap>\n    {{ job.about }}\n  </p>\n</div>\n</ng-template>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\job-details\job-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], JobDetailsPage);
    return JobDetailsPage;
}());

//# sourceMappingURL=job-details.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddExperiencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_store_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_db__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddExperiencePage = (function () {
    function AddExperiencePage(navCtrl, navParams, db, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.store = store;
        this.dates = {};
    }
    AddExperiencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddExperiencePage');
    };
    AddExperiencePage.prototype.setDate = function (key, value) {
        this.dates[key] = value;
    };
    AddExperiencePage.prototype.submitForm = function (f) {
        var _this = this;
        console.log(f.value);
        f.value['user_id'] = this.store.getUserId();
        this.db.addExperience(f.value).subscribe(function (res) {
            console.log(res);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    AddExperiencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-add-experience',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\add-experience\add-experience.html"*/'<!--\n  Generated template for the AddExperiencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add-experience</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="submitForm(f)" #f="ngForm">\n        <ion-list>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="person" item-start class="text-primary"></ion-icon>\n                Job Title\n              </ion-label>\n              <ion-input type="text" name="job_title" ngModel #job_title="ngModel" required></ion-input>\n            </ion-item>\n      \n      \n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="person" item-start class="text-primary"></ion-icon>\n                Company Name\n              </ion-label>\n              <ion-input type="text" name="company_name" ngModel #company_name="ngModel" required></ion-input>\n            </ion-item>\n\n            \n            <ion-item>\n                <!-- <ion-label floating>\n                  <ion-icon name="person" item-start class="text-primary"></ion-icon>\n                  Description\n                </ion-label> -->\n                <ion-textarea rows="6" cols="20" placeholder="Description" name="description" ngModel #description="ngModel" required></ion-textarea>\n                <!-- <ion-input type="text" name="description" ngModel #description="ngModel" required></ion-input> -->\n              </ion-item>\n        \n            <ion-item>\n                  <ion-label>Start Date</ion-label>\n                  <ion-datetime display-format="MM/YYYY" name="startDate" pickerFormat="M YYYY" min="1900" max="2020" #start ngModel (ionChange)="setDate(\'start\',start)"></ion-datetime>\n              </ion-item>\n              <ion-item>\n                  <ion-label>End Date</ion-label>\n                  <ion-datetime display-format="MM/YYYY" name="endDate" pickerFormat="M YYYY" min="1900" max="2020" #end ngModel (ionChange)="setDate(\'end\',end.value)"></ion-datetime>\n              </ion-item>\n      \n          </ion-list>\n      \n          <div margin-top>\n              <button ion-button color="blue" type="submit" block [disabled]="!f.valid">Submit</button>\n          </div>\n        \n    </form>\n  \n</ion-content>\n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\add-experience\add-experience.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_store_store__["a" /* StoreProvider */]])
    ], AddExperiencePage);
    return AddExperiencePage;
}());

//# sourceMappingURL=add-experience.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEducationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_db_db__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditEducationPage = (function () {
    function EditEducationPage(navCtrl, navParams, store, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.db = db;
        this.education = navParams.get('education');
    }
    EditEducationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditEducationPage');
    };
    EditEducationPage.prototype.submitForm = function (f) {
        var _this = this;
        // f.value['user_id'] = this.store.getUserId();
        // console.log(f.value);
        this.db.editEducation(this.education.id, f.value).subscribe(function (res) {
            console.log(res);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    EditEducationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-edit-education',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\edit-education\edit-education.html"*/'<!--\n  Generated template for the EditEducationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>edit-education</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="submitForm(f)" #f="ngForm">\n        <ion-list>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="person" item-start class="text-primary"></ion-icon>\n                School Name\n              </ion-label>\n              <ion-input type="text" name="school_name" [(ngModel)]="education.school_name" #school_name="ngModel" required></ion-input>\n            </ion-item>\n      \n      \n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="person" item-start class="text-primary"></ion-icon>\n                Degree\n              </ion-label>\n              <ion-input type="text" name="degree" [(ngModel)]="education.degree" #degree="ngModel" required></ion-input>\n            </ion-item>\n        \n            <ion-item>\n                  <ion-label>Start Date</ion-label>\n                  <ion-datetime display-format="MM/YYYY" name="startDate" pickerFormat="M YYYY" min="1900" max="2020" #start [(ngModel)]="education.startDate"></ion-datetime>\n              </ion-item>\n              <ion-item>\n                  <ion-label>End Date</ion-label>\n                  <ion-datetime display-format="MM/YYYY" name="endDate" pickerFormat="M YYYY" min="1900" max="2020" #end [(ngModel)]="education.endDate"></ion-datetime>\n              </ion-item>\n      \n          </ion-list>\n      \n          <div margin-top>\n              <button ion-button color="blue" type="submit" block [disabled]="!f.valid">Submit</button>\n          </div>\n    </form>  \n\n</ion-content>\n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\edit-education\edit-education.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_store_store__["a" /* StoreProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_db_db__["a" /* DbProvider */]])
    ], EditEducationPage);
    return EditEducationPage;
}());

//# sourceMappingURL=edit-education.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExperiencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_db_db__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_store_store__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditExperiencePage = (function () {
    function EditExperiencePage(navCtrl, navParams, store, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.db = db;
        this.experience = navParams.get('experience');
    }
    EditExperiencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditExperiencePage');
    };
    EditExperiencePage.prototype.submitForm = function (f) {
        var _this = this;
        // f.value['user_id'] = this.store.getUserId();
        // console.log(f.value);
        this.db.editExperience(this.experience.id, f.value).subscribe(function (res) {
            console.log(res);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    EditExperiencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-edit-experience',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\edit-experience\edit-experience.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>edit-experience</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="submitForm(f)" #f="ngForm">\n      <ion-list>\n          <ion-item>\n            <ion-label floating>\n              <ion-icon name="person" item-start class="text-primary"></ion-icon>\n              Job Title\n            </ion-label>\n            <ion-input type="text" name="job_title" [(ngModel)]="experience.job_title" #job_title="ngModel" required></ion-input>\n          </ion-item>\n    \n    \n          <ion-item>\n            <ion-label floating>\n              <ion-icon name="person" item-start class="text-primary"></ion-icon>\n              Company Name\n            </ion-label>\n            <ion-input type="text" name="company_name" [(ngModel)]="experience.company_name" #company_name="ngModel" required></ion-input>\n          </ion-item>\n          \n          <ion-item>\n           <ion-label floating>\n             <ion-icon name="person" item-start class="text-primary"></ion-icon>\n             Description\n            </ion-label>\n            <ion-textarea rows="6" cols="20" placeholder="Description" name="description" [(ngModel)]="experience.description" #description="ngModel" required></ion-textarea>\n          </ion-item>\n\n          <ion-item>\n                <ion-label>Start Date</ion-label>\n                <ion-datetime display-format="MM/YYYY" name="startDate" pickerFormat="M YYYY" min="1900" max="2020" #start [(ngModel)]="experience.startDate"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label>End Date</ion-label>\n                <ion-datetime display-format="MM/YYYY" name="endDate" pickerFormat="M YYYY" min="1900" max="2020" #end [(ngModel)]="experience.endDate"></ion-datetime>\n            </ion-item>\n    \n        </ion-list>\n    \n        <div margin-top>\n            <button ion-button color="blue" type="submit" block [disabled]="!f.valid">Submit</button>\n        </div>\n  </form>  \n\n</ion-content>\n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\edit-experience\edit-experience.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_store_store__["a" /* StoreProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_db_db__["a" /* DbProvider */]])
    ], EditExperiencePage);
    return EditExperiencePage;
}());

//# sourceMappingURL=edit-experience.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_db_db__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_store_store__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, navParams, db, store) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.store = store;
        this.interests = [
            {
                val: 'Buisness',
                isChecked: false
            },
            {
                val: 'Finance',
                isChecked: false
            },
            {
                val: 'Information System',
                isChecked: false
            },
            {
                val: 'ERP',
                isChecked: false
            },
            {
                val: 'Web-Development',
                isChecked: false
            },
            {
                val: 'Security',
                isChecked: false
            }
        ];
        this.profile = navParams.get('profile');
        this.interests = this.interests.map(function (item) {
            if (_this.profile.interests.indexOf(item.val)) {
                item.isChecked = true;
            }
            return item;
        });
        console.log('from edit page', this.profile);
    }
    EditProfilePage.prototype.submitForm = function (f) {
        var _this = this;
        console.log(f.value);
        var interests = this.interests.filter(function (it) { return it.isChecked; }).map(function (it) { return it.val; }).join(',');
        var profile = {
            'user_id': this.store.getUserId(),
            'first_name': f.value.first_name,
            'last_name': f.value.last_name,
            'address': f.value.address,
            'birthdate': f.value.birthdate,
            'featured_skills': f.value.featured_skills,
            'phone': f.value.phone,
            'interests': interests,
        };
        this.db.updateProfile(profile).subscribe(function (result) {
            // Go To profile Page
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\edit-profile\edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>edit-profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="submitForm(f)" #f="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          First Name\n        </ion-label>\n        <ion-input type="text" name="first_name" [(ngModel)]="profile.first_name" #first_name="ngModel" required></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Last Name\n        </ion-label>\n        <ion-input type="text" name="last_name" [(ngModel)]="profile.last_name" #last_name="ngModel" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Address\n        </ion-label>\n        <ion-input type="text" name="address" [(ngModel)]="profile.address" #address="ngModel" required></ion-input>\n      </ion-item>\n\n\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Birth Date\n        </ion-label>\n        <ion-input type="text" name="birthdate" [(ngModel)]="profile.birthdate" #birthdate="ngModel" required></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n          <ion-label floating>\n            <ion-icon name="person" item-start class="text-primary"></ion-icon>\n            Phone\n          </ion-label>\n          <ion-input type="text" name="phone" [(ngModel)]="profile.phone" #phone="ngModel" required></ion-input>\n        </ion-item>\n  \n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Featured Skills\n        </ion-label>\n        <ion-input type="text" name="featured_skills" [(ngModel)]="profile.featured_skills" #featured_skills="ngModel" required></ion-input>\n      </ion-item>\n\n\n      <!-- <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Profile Pic.\n        </ion-label>\n        <ion-input type="file" name="image" ngModel #image="ngModel" required (change)="choosePhoto($event)">\n        </ion-input>\n      </ion-item> -->\n\n\n    <p text-center ion-text color="secondary">which field you may be interested in?</p>\n\n      <ion-item *ngFor="let entry of interests">\n        <ion-label>{{entry.val}}</ion-label>\n        <ion-checkbox slot="end" [(ngModel)]="entry.isChecked" name="{{ entry.val }}"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n    <div margin-top>\n      <button ion-button color="blue" type="submit" block [disabled]="!f.valid">Submit</button>\n    </div>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_store_store__["a" /* StoreProvider */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_store_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_db_db__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InterestPage = (function () {
    function InterestPage(navCtrl, navParams, db, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.store = store;
        this.interests = [
            {
                val: 'Buisness',
                isChecked: false
            },
            {
                val: 'Finance',
                isChecked: false
            },
            {
                val: 'Information System',
                isChecked: false
            },
            {
                val: 'ERP',
                isChecked: false
            },
            {
                val: 'Web-Development',
                isChecked: false
            },
            {
                val: 'Security',
                isChecked: false
            }
        ];
    }
    InterestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InterestPage');
    };
    InterestPage.prototype.submitForm = function (data) {
        var _this = this;
        // let { value } = data;
        // console.log(this.form);
        var interests = this.interests.filter(function (it) { return it.isChecked; }).map(function (it) { return it.val; }).join(',');
        var fd = new FormData();
        fd.append('user_id', this.store.getUserId());
        fd.append('image', this.image);
        fd.append('first_name', data.value.first_name);
        fd.append('last_name', data.value.last_name);
        fd.append('address', data.value.address);
        fd.append('birthdate', data.value.birthdate);
        fd.append('featured_skills', data.value.featured_skills);
        fd.append('phone', data.value.phone);
        fd.append('interests', interests);
        var profile = {
            'image': this.image,
            'first_name': data.value.first_name,
            'last_name': data.value.last_name,
            'address': data.value.address,
            'birthdate': data.value.birthdate,
            'featured_skills': data.value.featured_skills,
            'phone': data.value.phone,
            'interests': interests,
        };
        this.db.completeProfile(fd).subscribe(function (res) {
            console.log(fd);
            console.log(profile);
            if (res['success'] === true) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
            }
        });
    };
    InterestPage.prototype.choosePhoto = function (event) {
        this.image = event.target.files[0];
    };
    InterestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-interest',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\interest\interest.html"*/'\n\n<ion-header>\n\n\n\n          <ion-navbar color="primary">\n\n            <ion-title>Complete Profile</ion-title>\n\n          </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  \n\n\n\n      <form (ngSubmit)="submitForm(f)" #f="ngForm">\n\n\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label floating>\n\n              <ion-icon name="person" item-start class="text-primary"></ion-icon>\n\n              First Name\n\n            </ion-label>\n\n            <ion-input type="text" name="first_name" ngModel #first_name="ngModel" required></ion-input>\n\n          </ion-item>\n\n\n\n\n\n          <ion-item>\n\n            <ion-label floating>\n\n              <ion-icon name="person" item-start class="text-primary"></ion-icon>\n\n              Last Name\n\n            </ion-label>\n\n            <ion-input type="text" name="last_name" ngModel #last_name="ngModel" required></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>\n\n              <ion-icon name="person" item-start class="text-primary"></ion-icon>\n\n              Address\n\n            </ion-label>\n\n            <ion-input type="text" name="address" ngModel #address="ngModel" required></ion-input>\n\n          </ion-item>\n\n\n\n\n\n\n\n          <ion-item>\n\n            <ion-label floating>\n\n              <ion-icon name="person" item-start class="text-primary"></ion-icon>\n\n              Birth Date\n\n            </ion-label>\n\n            <ion-input type="text" name="birthdate" ngModel #birthdate="ngModel" required></ion-input>\n\n          </ion-item>\n\n\n\n\n\n          <ion-item>\n\n              <ion-label floating>\n\n                <ion-icon name="person" item-start class="text-primary"></ion-icon>\n\n                Phone\n\n              </ion-label>\n\n              <ion-input type="text" name="phone" ngModel #phone="ngModel" required></ion-input>\n\n            </ion-item>\n\n      \n\n          <ion-item>\n\n            <ion-label floating>\n\n              <ion-icon name="person" item-start class="text-primary"></ion-icon>\n\n              Featured Skills\n\n            </ion-label>\n\n            <ion-input type="text" name="featured_skills" ngModel #featured_skills="ngModel" required></ion-input>\n\n          </ion-item>\n\n\n\n\n\n          <ion-item>\n\n            <ion-label floating>\n\n              <ion-icon name="person" item-start class="text-primary"></ion-icon>\n\n              Profile Pic.\n\n            </ion-label>\n\n            <ion-input type="file" name="image" ngModel #image="ngModel" required (change)="choosePhoto($event)">\n\n            </ion-input>\n\n          </ion-item>\n\n\n\n\n\n        <p text-center ion-text color="secondary">which field you may be interested in?</p>\n\n\n\n          <ion-item *ngFor="let entry of interests">\n\n            <ion-label>{{entry.val}}</ion-label>\n\n            <ion-checkbox slot="end" [(ngModel)]="entry.isChecked" name="{{ entry.val }}"></ion-checkbox>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n        <div margin-top>\n\n          <button ion-button color="blue" type="submit" block [disabled]="!f.valid">Submit</button>\n\n        </div>\n\n\n\n      </form>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\interest\interest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_store_store__["a" /* StoreProvider */]])
    ], InterestPage);
    return InterestPage;
}());

//# sourceMappingURL=interest.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payment_payment__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_store_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interest_interest__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_db_db__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, db, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.store = store;
    }
    // register and go to home page
    RegisterPage.prototype.register = function (data) {
        var _this = this;
        var _a = data.value, fullName = _a.fullName, email = _a.email, password = _a.password;
        this.db.register({ name: fullName, email: email, password: password }).subscribe(function (res) {
            if (res['success'] === true) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__interest_interest__["a" /* InterestPage */]);
                console.log(res);
                _this.store.setUser(res['user_id']);
            }
        });
        // this.db.setUser(data.value);
    };
    /**
     * @description Go to Login Page
     */
    RegisterPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.payment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__payment_payment__["a" /* PaymentPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\register\register.html"*/'<ion-content class="auth-page">\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding text-center>\n\n      <div class="logo"></div>\n\n    </div>\n\n\n\n    <!-- Login form -->\n\n    <form class="list-form" (ngSubmit)="register(f)" #f="ngForm">\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n\n          Full Name\n\n        </ion-label>\n\n        <ion-input type="text" name="fullName" ngModel #fullName="ngModel" required></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n\n          Email\n\n        </ion-label>\n\n        <ion-input type="email" name="email" ngModel #email="ngModel" required></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="password" name="password" #password="ngModel" ngModel required></ion-input>\n\n      </ion-item>\n\n      <ion-grid radio-group> \n\n        <ion-row>\n\n          <ion-col col-md-3>  \n\n            <div class="acc">\n\n              <ion-label color="primary">Free  <ion-radio  name="free" value="free" slot="start"  checked="true"></ion-radio>\n\n              </ion-label>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-md-3 offset-md-3>\n\n           <div class="acc">\n\n             <ion-label color="primary">Premium  <ion-radio name="pri" value="pri" slot="start" (click)="payment()"></ion-radio>\n\n            </ion-label>\n\n          </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <div margin-top>\n\n        <button ion-button block color="blue" tappable [disabled]="!f.valid">\n\n          SIGN UP\n\n        </button>\n\n      </div>\n\n    </form>\n\n   \n\n    <!-- Other links -->\n\n    <div text-center margin-top class="link">\n\n      <span ion-text color="secondary" tappable (click)="login()">I have an account</span>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_store_store__["a" /* StoreProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = (function () {
    function IntroPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.db.getData().subscribe(function (data) {
            _this.db.setData(data);
            // console.log(data);
        });
    };
    IntroPage.prototype.gotoRegister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\intro\intro.html"*/'\n <ion-header no-border>\n    <ion-toolbar  color=\'primary\'>\n      <ion-buttons end>\n           <button ion-button round small (click)="gotoRegister()">Start</button> \n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n   <ion-content fullscreen>\n\n    <img src="../assets/img/start.png">\n    <h2 class="slide-title">\n      Welcome to\n      <b>Ekharni</b>\n    </h2>\n    <p>\n      We would like to thanks\n      <b>ay 7agaaaaaaa</b> is a practical preview of the ionic framework in action, and a demonstration of proper code\n      use.\n    </p>\n\n   </ion-content>\n    \n \n  \n    \n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_experience_edit_experience__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_education_add_education__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_experience_add_experience__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_db_db__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_education_edit_education__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var profilePage = (function () {
    function profilePage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
    }
    profilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.db.getProfile().subscribe(function (res) {
            console.log(res);
            if (res['success'] === true) {
                _this.user = res['profile'];
            }
        });
        this.db.getExperience().subscribe(function (res) {
            console.log('experience', res);
            _this.experience = res['experiences'];
        });
        this.db.getEducation().subscribe(function (res) {
            console.log('education', res);
            _this.education = res['educations'];
        });
        // this.user = this.db.getUserData();
        // this.interests = this.user.interests;
        // console.log('ionViewDidLoad ProfilePage');
    };
    profilePage.prototype.goToEditPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__["a" /* EditProfilePage */], {
            profile: this.user
        });
    };
    profilePage.prototype.goToAddExperience = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_experience_add_experience__["a" /* AddExperiencePage */]);
    };
    profilePage.prototype.goToAddEducation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__add_education_add_education__["a" /* AddEducationPage */]);
    };
    profilePage.prototype.goToEditEducation = function (edu) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__edit_education_edit_education__["a" /* EditEducationPage */], {
            education: edu
        });
    };
    profilePage.prototype.goToEditExperience = function (exp) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__edit_experience_edit_experience__["a" /* EditExperiencePage */], {
            experience: exp
        });
    };
    profilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\profile\profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding text-center>\n\n  <ng-template [ngIf]="user">\n\n    <div class="cover">\n\n      <img src="http://192.168.1.7:3000/{{ user.image }}">\n\n    </div>\n\n    <h2>{{ user.first_name }} {{ user.last_name }}</h2>\n\n\n\n    <button ion-button small (click)="goToEditPage()">\n\n      Edit Profile\n\n    </button>\n\n\n\n    <ion-grid>\n\n      <ion-item text-center>\n\n      <h2>Views</h2>\n\n          <p>8</p>\n\n        </ion-item>\n\n      <ion-row>\n\n          \n\n        <!-- <ion-col col-md-3>\n\n          <h3>Follwoing</h3>\n\n          <p>0</p>\n\n        </ion-col>\n\n        <ion-col col-md-3 offset-md-3>\n\n          <h3>Follwers</h3>\n\n          <p>0</p>\n\n        </ion-col> -->\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-card>\n\n      <ion-card-header>\n\n        <ion-card-title color="primary">Personal Information</ion-card-title>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label>\n\n              Email : {{ user.email || \'example@gmail.com\' }}\n\n            </ion-label>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label>\n\n              Phone : {{ user.phone || \'+201098271750\' }}\n\n            </ion-label>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label>\n\n              Address : {{ user.address || \'----\' }}\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>\n\n              Birthday : {{ user.birthdate }}\n\n            </ion-label>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="edu">\n\n      \n\n      <ion-card-title color="primary">Education  </ion-card-title>\n\n     \n\n      <ion-buttons right>\n\n          <button ion-button (click)="goToAddEducation()">\n\n              <ion-icon name="add-circle"></ion-icon>\n\n            </button>\n\n      </ion-buttons>\n\n\n\n      <ng-template [ngIf]="education">\n\n        <ion-card *ngFor="let edu of education">\n\n\n\n          <ion-card-content>\n\n            <ion-buttons right>\n\n              <button ion-button (click)="goToEditEducation(edu)">\n\n                <ion-icon name="create"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-label>\n\n                  {{ edu.school_name }} <br>{{ edu.degree }} <br> {{ edu.startDate }} | {{ edu.endDate }}\n\n                </ion-label>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ng-template>\n\n    </ion-card>\n\n\n\n    <ion-card class="exp">\n\n      <div>\n\n        <ion-card-title color="primary">Experience</ion-card-title>\n\n        <ion-buttons right>\n\n          <button ion-button (click)="goToAddExperience()">\n\n            <ion-icon name="add-circle"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </div>\n\n      <ng-template [ngIf]="experience">\n\n        <ion-card *ngFor="let exp of experience">\n\n          <ion-buttons right>\n\n            <button ion-button (click)="goToEditExperience(exp)">\n\n              <ion-icon name="create"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n          <ion-card-content>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-label>\n\n                  {{ exp.job_title }}<br>{{ exp.company_name }} <br> {{ exp.startDate }} | {{ exp.endDate }}\n\n                </ion-label>\n\n              </ion-item>\n\n              <!-- <ion-label>\n\n              <p>\n\n                {{ exp.description }}\n\n              </p>\n\n            </ion-label> -->\n\n            </ion-list>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ng-template>\n\n    </ion-card>\n\n\n\n    <!-- <ion-card>\n\n      <ion-card-header>\n\n        <ion-card-title>Experience</ion-card-title>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label>\n\n\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>\n\n              experience place <br>Field<br>2013-2015\n\n            </ion-label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card> -->\n\n    <ion-card>\n\n      <ion-card-header>\n\n        <ion-card-title color="primary">Featured Skills</ion-card-title>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content>\n\n        <ion-list>\n\n          <ion-item *ngFor="let feature of user.featured_skills.split(\',\')">\n\n            <ion-label>\n\n              {{ feature }}\n\n            </ion-label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-header>\n\n        <ion-card-title color="primary">Intrested Fields</ion-card-title>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n\n\n        <ion-list>\n\n          <ion-item *ngFor="let int of user.interests.split(\',\')">\n\n            <ion-label text-wrap>\n\n              {{ int }}\n\n              <ion-icon name="star"></ion-icon>\n\n            </ion-label>\n\n          </ion-item>\n\n          <!-- If not working un comment these from herer -> -->\n\n          <!-- <div *ngFor="let int of user.interests">\n\n            <span>{{ int }}</span>\n\n            <ion-icon name="star"></ion-icon>\n\n          </div> -->\n\n          <!-- to here -->\n\n          <!-- <ion-item>\n\n            <ion-label text-wrap>\n\n              level of experanice :\n\n            </ion-label>\n\n          </ion-item> -->\n\n        </ion-list>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ng-template>\n\n</ion-content>'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_db_db__["a" /* DbProvider */]])
    ], profilePage);
    return profilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, alertctrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertctrl = alertctrl;
        this.toastCtrl = toastCtrl;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    SettingsPage.prototype.changepassword = function () {
        var _this = this;
        var forgot = this.alertctrl.create({
            title: 'Do you want to change Password?',
            message: 'Enter New Password',
            inputs: [
                {
                    name: 'New Password',
                    placeholder: 'Password',
                    type: 'password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Change',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.alertctrl.create({
                            message: 'Password Changed successfully',
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n      <ion-label>  <button ion-button   (click)="changepassword()">Change Password </button></ion-label>\n    </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DbProvider = (function () {
    function DbProvider(http, store) {
        this.http = http;
        this.store = store;
        this.base_url = 'http://192.168.1.7:3000/api';
        console.log('Hello DbProvider Provider');
    }
    DbProvider.prototype.getData = function () {
        return this.http.get('/assets/db.json');
    };
    DbProvider.prototype.setData = function (data) {
        this.data = data;
    };
    DbProvider.prototype.login = function (email, password) {
        // let user = this.data.filter((user) => {
        //   return user.name === username && user.password === password
        // });
        return this.http.post(this.base_url + "/users/login", { email: email, password: password });
        // if (user.length > 0) return user;
        // else return [];
    };
    DbProvider.prototype.register = function (body) {
        console.log(body);
        return this.http.post(this.base_url + "/users/signup", body);
    };
    DbProvider.prototype.completeProfile = function (fd) {
        return this.http.post(this.base_url + "/profile/complete", fd);
    };
    DbProvider.prototype.updateProfile = function (body) {
        return this.http.post(this.base_url + "/profile/updateProfile", body);
    };
    DbProvider.prototype.getProfile = function () {
        return this.http.get(this.base_url + "/profile/" + this.store.getUserId());
    };
    DbProvider.prototype.getCourses = function () {
        console.log('Inside');
        return this.http.get(this.base_url + "/courses/all");
    };
    DbProvider.prototype.getJobs = function () {
        console.log('Inside');
        return this.http.get(this.base_url + "/jobs/all");
    };
    DbProvider.prototype.getNewsfeed = function () {
        console.log('Inside');
        return this.http.get(this.base_url + "/newsfeed/all");
    };
    DbProvider.prototype.searchCourses = function (search) {
        var body = { search: search };
        return this.http.post(this.base_url + "/courses/search", body);
    };
    DbProvider.prototype.addExperience = function (body) {
        return this.http.post(this.base_url + "/experience/add", body);
    };
    DbProvider.prototype.addEducation = function (body) {
        return this.http.post(this.base_url + "/education/add", body);
    };
    DbProvider.prototype.getExperience = function () {
        var id = this.store.getUserId();
        return this.http.get(this.base_url + "/experience/" + id);
    };
    DbProvider.prototype.getEducation = function () {
        var id = this.store.getUserId();
        return this.http.get(this.base_url + "/education/" + id);
    };
    DbProvider.prototype.editExperience = function (id, body) {
        return this.http.post(this.base_url + "/experience/edit/" + id, body);
    };
    DbProvider.prototype.editEducation = function (id, body) {
        return this.http.post(this.base_url + "/education/edit/" + id, body);
    };
    DbProvider.prototype.rateCourse = function (body) {
        return this.http.post(this.base_url + "/rate/add", body);
    };
    DbProvider.prototype.getCourseRate = function (courseId) {
        return this.http.get(this.base_url + "/rate/" + courseId);
    };
    DbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__store_store__["a" /* StoreProvider */]])
    ], DbProvider);
    return DbProvider;
}());

//# sourceMappingURL=db.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the StoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StoreProvider = (function () {
    function StoreProvider(http) {
        this.http = http;
        this.state$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        console.log('Hello StoreProvider Provider');
    }
    StoreProvider.prototype.setUser = function (id) {
        localStorage.setItem('user', id);
    };
    StoreProvider.prototype.emitState = function () {
        this.state$.next();
    };
    StoreProvider.prototype.stateSubscription = function () {
        return this.state$.asObservable();
    };
    StoreProvider.prototype.getUserId = function () {
        return localStorage.getItem('user');
    };
    StoreProvider.prototype.setUserData = function (_a) {
        var name = _a.name, image = _a.image;
        var userData = JSON.stringify({ name: name, image: image });
        localStorage.setItem('userData', userData);
    };
    StoreProvider.prototype.getUserData = function () {
        return JSON.parse(localStorage.getItem('userData'));
    };
    StoreProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StoreProvider);
    return StoreProvider;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-education/add-education.module": [
		302,
		15
	],
	"../pages/add-experience/add-experience.module": [
		303,
		14
	],
	"../pages/c-details/c-details.module": [
		304,
		13
	],
	"../pages/courses/courses.module": [
		305,
		12
	],
	"../pages/edit-education/edit-education.module": [
		306,
		11
	],
	"../pages/edit-experience/edit-experience.module": [
		307,
		10
	],
	"../pages/edit-profile/edit-profile.module": [
		308,
		9
	],
	"../pages/interest/interest.module": [
		309,
		8
	],
	"../pages/intro/intro.module": [
		310,
		7
	],
	"../pages/job-details/job-details.module": [
		311,
		6
	],
	"../pages/news-details/news-details.module": [
		312,
		5
	],
	"../pages/payment/payment.module": [
		313,
		4
	],
	"../pages/profile/profile.module": [
		314,
		3
	],
	"../pages/rate/rate.module": [
		315,
		2
	],
	"../pages/register/register.module": [
		316,
		1
	],
	"../pages/settings/settings.module": [
		317,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_popover_popover__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_db_db__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_details_job_details__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var HomePage = (function () {
    function HomePage(navCtrl, app, navParams, db, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.navParams = navParams;
        this.db = db;
        this.popoverCtrl = popoverCtrl;
        this.jobDetailsPage = __WEBPACK_IMPORTED_MODULE_2__job_details_job_details__["a" /* JobDetailsPage */];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('welcome to jobs');
        this.db.getJobs().subscribe(function (res) {
            console.log(res);
            if (res['success'] === true) {
                _this.jobs = res['jobs'];
            }
        });
    };
    HomePage.prototype.onLoad = function (job) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__job_details_job_details__["a" /* JobDetailsPage */], {
            job: job
        });
    };
    HomePage.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_popover_popover__["a" /* PopoverComponent */], {});
                popover.present({
                    ev: ev
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>Home</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button (click)="presentPopover($event)">\n\n        <ion-badge color="danger">1</ion-badge>\n\n        <ion-icon name="notifications"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <!-- <ion-toolbar>\n\n    <ion-segment>\n\n      <ion-segment-button value="Jobs" (click)="show(jobDetailsPage)">\n\n        Jobs\n\n      </ion-segment-button>\n\n      <ion-segment-button value="News" (click)="show(jobDetailsPage)">\n\n        NEWS\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n -->\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ng-template [ngIf]="jobs">\n\n    <ion-list>\n\n      <ion-grid>\n\n        <ion-row align-items-stretch>\n\n          <ion-col>\n\n            <ion-card class="card" *ngFor="let job of jobs">\n\n              <ion-toolbar color="danger">\n\n                <ion-title text-center>Job Opportunity</ion-title>\n\n              </ion-toolbar>\n\n              <ion-card-header>\n\n                <ion-item lines="none">\n\n                  <ion-avatar slot="start">\n\n                    <img src="../assets/img/cm.png">\n\n\n\n                    <h1>{{ job.company_name }}</h1>\n\n                  </ion-avatar>\n\n                </ion-item>\n\n              </ion-card-header>\n\n\n\n              <ion-card-content>\n\n                <ion-list>\n\n                  <ion-item>\n\n                    <h2>Job Title : {{ job.job_title }}</h2>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                    <h2>Job Field : {{ job.job_field }}</h2>\n\n                  </ion-item>\n\n                </ion-list>\n\n              </ion-card-content>\n\n              <button fill="clear" full color="primary" ion-button (click)="onLoad(job)">\n\n                View\n\n              </button>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-list>\n\n\n\n  </ng-template>\n\n</ion-content>'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* PopoverController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverComponent = (function () {
    function PopoverComponent() {
    }
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'popover',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\components\popover\popover.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title >\n        Notifications\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content class="not">\n<ion-list>\n<ion-item >\n  <ion-label>Welcome To Ekhtarni </ion-label>\n</ion-item>\n<ion-item><ion-label> </ion-label></ion-item>\n<ion-item><ion-label> </ion-label></ion-item>\n<ion-item><ion-label> </ion-label></ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\components\popover\popover.html"*/
        })
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <img src="../assets/img/ionic3-ico.png">\n      <ion-card-title text-center color="danger">Ekhtarni Team</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content text-center>\n      First of All, We Would like to thank our supervisors for let us to create this app..\n    </ion-card-content>\n    <ion-card-content>\n\n       <h5>Made by</h5>\n\n       <ion-list>\n      <ion-chip>\n        <ion-icon name="contact"></ion-icon>\n        <ion-label>Mohamed Khaled</ion-label>\n      </ion-chip>\n      <ion-chip>\n          <ion-icon name="contact"></ion-icon>\n          <ion-label>Allaa Magdy</ion-label>\n      </ion-chip>\n      <ion-chip>\n              <ion-icon name="contact"></ion-icon>\n              <ion-label>Tasnim Mohamed</ion-label>\n      </ion-chip> \n      <ion-chip>\n            <ion-icon name="contact"></ion-icon>\n            <ion-label>Farida Mohsen</ion-label>\n      </ion-chip>     \n      \n      <ion-chip>\n                <ion-icon name="contact"></ion-icon>\n                <ion-label>Nada Mohamed</ion-label>\n      </ion-chip>\n      <ion-chip>\n                  <ion-icon name="contact"></ion-icon>\n                  <ion-label>Karim Mahmoud</ion-label>\n      </ion-chip>\n    </ion-list>\n    </ion-card-content>\n    \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_payment_payment__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_edit_experience_edit_experience__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_add_education_add_education__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_add_experience_add_experience__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_popover_popover__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_job_details_job_details__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_c_details_c_details__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_interest_interest__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_courses_courses__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_intro_intro__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_about__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_db_db__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_news_details_news_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_rate_rate__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_store_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ionic3_star_rating__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_edit_profile_edit_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_edit_education_edit_education__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* profilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_interest_interest__["a" /* InterestPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_c_details_c_details__["a" /* CDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_news_details_news_details__["a" /* NewsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_job_details_job_details__["a" /* JobDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_4__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_add_experience_add_experience__["a" /* AddExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_add_education_add_education__["a" /* AddEducationPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_edit_education_edit_education__["a" /* EditEducationPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_edit_experience_edit_experience__["a" /* EditExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_payment_payment__["a" /* PaymentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-education/add-education.module#AddEducationPageModule', name: 'AddEducationPage', segment: 'add-education', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-experience/add-experience.module#AddExperiencePageModule', name: 'AddExperiencePage', segment: 'add-experience', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/c-details/c-details.module#CDetailsPageModule', name: 'CDetailsPage', segment: 'c-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-education/edit-education.module#EditEducationPageModule', name: 'EditEducationPage', segment: 'edit-education', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-experience/edit-experience.module#EditExperiencePageModule', name: 'EditExperiencePage', segment: 'edit-experience', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interest/interest.module#InterestPageModule', name: 'InterestPage', segment: 'interest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-details/job-details.module#JobDetailsPageModule', name: 'JobDetailsPage', segment: 'job-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-details/news-details.module#NewsDetailsPageModule', name: 'NewsDetailsPage', segment: 'news-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#profilePageModule', name: 'profilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rate/rate.module#RatePageModule', name: 'RatePage', segment: 'rate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_29_ionic3_star_rating__["a" /* StarRatingModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* profilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_interest_interest__["a" /* InterestPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_c_details_c_details__["a" /* CDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_news_details_news_details__["a" /* NewsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_job_details_job_details__["a" /* JobDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_4__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_add_experience_add_experience__["a" /* AddExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_add_education_add_education__["a" /* AddEducationPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_edit_education_edit_education__["a" /* EditEducationPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_edit_experience_edit_experience__["a" /* EditExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_payment_payment__["a" /* PaymentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_13__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_15_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_db_db__["a" /* DbProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_store_store__["a" /* StoreProvider */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_13__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__news_details_news_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__courses_courses__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_0__news_details_news_details__["a" /* NewsDetailsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__courses_courses__["a" /* CoursesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="News" tabIcon="paper"></ion-tab> \n  <ion-tab [root]="tab3Root" tabTitle="Courses" tabIcon="arrow-dropright-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_profile_profile__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_intro_intro__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_about_about__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_settings_settings__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_store_store__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app, menuCtrl, store) {
        var _this = this;
        this.app = app;
        this.menuCtrl = menuCtrl;
        this.store = store;
        this.rootPage = '';
        this.SettingsPage = __WEBPACK_IMPORTED_MODULE_3__pages_settings_settings__["a" /* SettingsPage */];
        this.AboutPage = __WEBPACK_IMPORTED_MODULE_2__pages_about_about__["a" /* AboutPage */];
        this.profilePage = __WEBPACK_IMPORTED_MODULE_0__pages_profile_profile__["a" /* profilePage */];
        this.user = this.store.getUserData();
        if (localStorage.getItem("user")) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_intro_intro__["a" /* IntroPage */];
        }
        this.store.stateSubscription().subscribe(function (value) {
            _this.user = _this.store.getUserData();
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem("userData")) {
            this.user = this.store.getUserData();
        }
    };
    MyApp.prototype.logout = function () {
        // localStorage.removeItem("loggedIN");
        localStorage.removeItem("user");
        localStorage.removeItem("userData");
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.onLoad = function (page) {
        this.nav.push(page);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\app\app.html"*/'<ion-nav [root]="rootPage" #nav></ion-nav>\n\n<ion-menu [content]="nav">\n\n  <ion-header>\n\n\n\n    <ion-toolbar class="user-profile">\n\n\n\n      <ion-grid>\n\n        <ion-row *ngIf="user">\n\n          <ion-col col-4>\n\n            <div class="user-avatar">\n\n              <img src="http://192.168.1.7:3000/{{ user.image }}">\n\n            </div>\n\n          </ion-col>\n\n          <ion-col padding-top col-8>\n\n            <h2 ion-text class="no-margin bold text-white">\n\n              {{ user.name }}\n\n            </h2>\n\n            <span ion-text color="light">Applicant</span>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row no-padding class="other-data">\n\n          <ion-col no-padding class="column">\n\n            <button ion-button icon-left small full color="light" menuClose (click)="onLoad(profilePage)">\n\n              <ion-icon name="contact"></ion-icon>\n\n              Profile\n\n            </button>\n\n          </ion-col>\n\n          <ion-col no-padding class="column">\n\n            <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n\n              <ion-icon name="log-out"></ion-icon>\n\n              Log Out\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-grid>\n\n\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item (click)="onLoad(SettingsPage)">\n\n        <ion-icon name="settings" item-left></ion-icon>\n\n        Settings\n\n      </button>\n\n      <button ion-item (click)="onLoad(AboutPage)">\n\n        <ion-icon name="md-information-circle" item-left></ion-icon>\n\n        About Us\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_10__providers_store_store__["a" /* StoreProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_store_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_db_db__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, forgotCtrl, toastCtrl, db, store) {
        this.navCtrl = navCtrl;
        this.forgotCtrl = forgotCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.store = store;
    }
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage.prototype.submitForm = function (data) {
        var _this = this;
        var _a = data.value, email = _a.email, password = _a.password;
        this.db.login(email, password).subscribe(function (res) {
            console.log(res);
            if (res['success'] === true) {
                var id = res['user'].id;
                _this.error = false;
                _this.store.setUser(id);
                // Store Image and name
                _this.db.getProfile().subscribe(function (result) {
                    var name = (result['profile']['first_name'] + " " + result['profile']['last_name']);
                    var image = result['profile']['image'];
                    _this.store.setUserData({ name: name, image: image });
                    _this.store.emitState();
                    // setTimeout(() => {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                    // }, 1500);
                });
            }
            else {
                _this.error = true;
            }
        });
        // let result = this.db.login(username, password)
        // if (!result.length) {
        //   this.error = true;
        // } else {
        //   this.error = false;
        //   localStorage.setItem("user", JSON.stringify(result[0]));
        //   localStorage.setItem("loggedIN", "true");
        //   this.navCtrl.setRoot(TabsPage);
        // }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Graduation\Ekhtarni\src\pages\login\login.html"*/'<ion-content padding class="animated fadeIn login auth-page">\n\n  <div class="login-content">\n\n    <!-- Logo -->\n\n    <div padding-horizontal text-center class="animated fadeInDown">\n\n      <div class="logo"></div>\n\n    </div>\n\n\n\n    <div class="alert-danger" *ngIf="error">Something Went Wrong!</div>\n\n    <!-- Login form -->\n\n    <form class="list-form" (ngSubmit)="submitForm(f)" #f="ngForm">\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="contact" item-start class="text-primary"></ion-icon>\n\n          Email\n\n        </ion-label>\n\n        <ion-input type="email" ngModel name="email" #email="ngModel" required></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="password" ngModel name="password" #password="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <div margin-top>\n\n        <button ion-button color="blue" type="submit" block [disabled]="!f.valid">Login</button>\n\n      </div>\n\n    </form>\n\n    <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n\n\n\n    <div text-center margin-top>\n\n      <span ion-text color="secondary" tappable (click)="register()">New here? <strong>Sign up</strong></span>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Graduation\Ekhtarni\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_store_store__["a" /* StoreProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map