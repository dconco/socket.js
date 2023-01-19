/*!
 * Socket.js Free 1.0.0 by @socket.js - https://socketjs.com
 * License - https://socketjs.com/license
 * Copyright 2023 Socket.js
 */

function _print(message) {
    if (!message) {
        return '';
    } else {
        document.write(message);
    };
};

function _printIn(HTML_ELEMENT, message) {
    if (!message && !HTML_ELEMENT) {
        return '';
    } else {
        HTML_ELEMENT.innerHTML += `${message}`;
    }
};

class Select {
    constructor(selectors) {
        this.selectors = selectors;
        let a = this.selectors.split(', ');
        for (let i = 0; i < a.length; i++) {
            return document.querySelector(a[i]);
        };
    };
};

class Socket {
    constructor(selector) {
        this.selector = selector;
        document.querySelector(this.selector);
    };

    /* About Socket.js */
    about() {
        return [
            'Socket.js is a wide range Javascript libary created with many functions of Javascript, that makes Javascript easier to use. Which CONNECTs PHP with Javascript. It was found since 2022.',
            'Socket.js was developed by teams, some developers includes: Dave Conco, Kig\'s Emmanuel',
            `Socket.js developers Email includes: ${undefined}.`,
            `Socket.js developers Phone Number includes: ${undefined}.`,
            `Socket.js developers link includes: ${undefined}.`,
            'Socket.js was developed by teams, It was found since 2022.'
        ];
    };

    /* Define css property */
    _css(property, value) {
        const _csst_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _csst_.length; _i_++) {
                switch (property) {
                    case 'color':
                        _csst_[_i_].style.color = value;
                        break;
                    case 'width':
                        _csst_[_i_].style.width = value;
                        break;
                    case 'background-color':
                        _csst_[_i_].style.backgroundColor = value;
                        break;
                    default:
                        throw new Error('The css property name is invalid.');
                };
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define html property */
    _html(contents) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                if (!contents) {
                    return _nodeList_[_i_].innerHTML;
                } else {
                    _nodeList_[_i_].innerHTML = contents;
                };
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define text property */
    _text(contents) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                if (!contents) {
                    return _nodeList_[_i_].innerText;
                } else {
                    _nodeList_[_i_].innerText = contents;
                };
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define width property */
    _width(value) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                if (!value) {
                    return _nodeList_[_i_].style.width;
                } else {
                    _nodeList_[_i_].style.width = value;
                };
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define height property */
    _height(value) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                if (!value) {
                    return _nodeList_[_i_].style.height;
                } else {
                    _nodeList_[_i_].style.height = value;
                };
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define input value property */
    _val(string) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                if (!string) {
                    return _nodeList_[_i_].value;
                } else {
                    _nodeList_[_i_].value = string;
                };
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define set and get attribute property */
    _attr(attributeName, value) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                if (!value) {
                    return _nodeList_[_i_].getAttribute(attributeName);;
                } else {
                    _nodeList_[_i_].setAttribute(attributeName, value);
                };
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define set attribute property */
    _setAttr(attributeName, value) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                _nodeList_[_i_].setAttribute(attributeName, value);
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define get attribute property */
    _getAttr(attributeName) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                return _nodeList_[_i_].getAttribute(attributeName);
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define has attribute property */
    _hasAttr(attributeName) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                let final = _nodeList_[_i_].hasAttribute(attributeName);
                if (final == true) {
                    return true;
                } else {
                    return false;
                };
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define remove attribute property */
    _rmAttr(attributeName) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                _nodeList_[_i_].removeAttribute(attributeName);
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define full remove attribute property */
    _removeAttr(attributeName) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                _nodeList_[_i_].removeAttribute(attributeName);
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define set attribute node property */
    _setAttrNode(attributeName) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                _nodeList_[_i_].setAttributeNode(attributeName);
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define create attribute property */
    _createAttr(attributeName) {
        try {
            document.createAttribute(attributeName);
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define add class property */
    _addClass(className) {
        try {
            document.querySelector(this.selector).classList.add(className);
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define has class property */
    _hasClass(className) {
        try {
            let has = document.querySelector(this.selector).classList.contains(className);
            if (has == true) {
                return true;
            } else {
                return false;
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define toggle class property */
    _toggleClass(className) {
        try {
            let toggle = document.querySelector(this.selector).classList.toggle(className);
            if (toggle == true) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define remove class property */
    _rmClass(className) {
        try {
            document.querySelector(this.selector).classList.remove(className);
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Define full remove class property */
    _removeClass(className) {
        try {
            document.querySelector(this.selector).classList.remove(className);
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Events Handler */
    listen(types, listener) {
        this.types = types;
        this.listener = listener;
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let a = 0; a < _nodeList_.length; a++) {
                let multipleEvents = this.types.split(', ');
                for (let i = 0; i < multipleEvents.length; i++) {
                    _nodeList_[a].addEventListener(multipleEvents[i], this.listener);
                };
            }
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Remove the Event Handler */
    _rmEvent(type) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let a = 0; a < _nodeList_.length; a++) {
                _nodeList_[a].removeEventListener(type);
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Remove the full Event Handler */
    _removeEvents(types) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            if (types) {
                for (let a = 0; a < _nodeList_.length; a++) {
                    let multipleEvents = types.split(', ');
                    for (let i = 0; i < multipleEvents.length; i++) {
                        _nodeList_[a].removeEventListener(multipleEvents[i]);
                    };
                };
            } else {
                document.querySelector(this.selector).removeEventListener();
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* success function to make green text */
    _success() {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                _nodeList_[i].style.color = "#02aa02";
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* success function to make green background color */
    _bgSuccess() {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                _nodeList_[i].style.backgroundColor = "#02aa02";
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* success function to make text info color */
    _info() {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                _nodeList_[i].style.color = "#0eadc5";
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* success function to make background info color */
    _bgInfo() {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                _nodeList_[i].style.backgroundColor = "#0eadc5";
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* success function to make text warning color */
    _warning() {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                _nodeList_[i].style.color = "#ffbf00";
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* success function to make background warning color */
    _bgWarning() {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                _nodeList_[i].style.backgroundColor = "#ffbf00";
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* success function to make text danger color */
    _danger() {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                _nodeList_[i].style.color = "#db2b2b";
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* success function to make background danger color */
    _bgDanger() {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                _nodeList_[i].style.backgroundColor = "#db2b2b";
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* innerHeight function */
    _innerHeight(length) {
        const _nodeList_ = document.querySelectorAll(this.selector);
        try {
            for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
                if (length) {
                    _nodeList_[i].offsetHeight = length;
                } else {
                    return _nodeList_[i].offsetHeight;
                };
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* innerWidth function */
    _innerWidth(length) {
        const _nodeList_ = document.querySelector(this.selector);
        try {
            if (length) {
                _nodeList_.offsetWidth = length;
            } else {
                return _nodeList_.offsetWidth;
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };
};
/* End Socket class */

/* show function */
function _show(duration) {
    let _nodeList_ = document.querySelectorAll(new Socket().selector);

    try {
        for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
            if (duration == "slow") {
                _nodeList_[_i_].style.transition = `all 400ms ease-in`;
                _nodeList_[_i_].style.display = "block";
            } else if (duration == "fast") {
                _nodeList_[_i_].style.transition = `all 100ms ease-in`;
                _nodeList_[_i_].style.display = "block";
            } else {
                _nodeList_[_i_].style.transition = `all ${duration}ms ease-in`;
                _nodeList_[_i_].style.display = "block";
            };
        };
    } catch (error) {
        console.error(`There was an uncaught ${error.name}: ${error.message}`);
    };
};

/* hide function */
function _hide(duration, select) {
    let _nodeList_ = document.querySelectorAll(select);

    try {
        for (let _i_ = 0; _i_ < _nodeList_.length; _i_++) {
            if (duration == "slow") {
                _nodeList_[_i_].style.transition = `all 400ms ease-out`;
                _nodeList_[_i_].style.display = "none";
            } else if (duration == "fast") {
                _nodeList_[_i_].style.transition = `all 100ms ease-out`;
                _nodeList_[_i_].style.display = "none";
            } else {
                _nodeList_[_i_].style.transition = `all ${duration}ms ease-out`;
                _nodeList_[_i_].style.display = "none";
            };
        };
    } catch (error) {
        console.error(`There was an uncaught ${error.name}: ${error.message}`);
    };
};

/* Connect html with Js */
class CONNECT {
    /* Connect html with Js */
    static HTML(select) {
        try {
            let split = select.split(', ');
            for (let i = 0; i < split.length; i++) {
                this.tag = document.querySelector(split[i]);
            };

            let tags = this.tag;
            let tag2 = tags.innerHTML;

            let aa = tag2.indexOf('{{');
            let bb = tag2.indexOf('}}');

            let final = tag2.slice(aa + 2, bb);
            eval(final);

            let semi_final = this.tag.innerHTML.substring(bb + 2).toString();
            let last_final = this.tag.innerHTML.substring(0, aa).toString();
            this.tag.innerHTML = last_final + semi_final;
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Connect attribute with Js */
    static ATTR(select, attributeName) {
        try {
            let split = select.split(', ');
            for (let i = 0; i < split.length; i++) {
                this.tag2 = document.querySelector(split[i]);
            };
            let first_final = this.tag2.getAttribute(attributeName);
            let aa = first_final.indexOf('{{');
            let bb = first_final.indexOf('}}');

            let final = first_final.slice(aa + 2, bb);
            eval(final);
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Form validation function */
    static VALIDATE(selector) {
        try {
            let a = document.querySelectorAll(selector);
            for (let _i_ = 0; _i_ < a.length; _i_++) {
                this.selector = a[_i_];
            };

            let b = selector ? this.selector.getAttribute("validate") : null;
            if (b != null) {
                validate();
            } else {
                throw new TypeError('Cannot get validate attribute.');
            };

            /* validate function */
            function validate() {
                let selector = CONNECT.selector;
                let c = b.split('#');
                console.log(c);

                if (c.toString().match('numbers') && !c.toString().match('letters') && !c.toString().match('symbols')) {
                    selector.addEventListener('keypress', function(e) {
                        if (e.key.match(/[^0-9]/)) {
                            e.preventDefault();
                            return "The field should only contain Numbers.";
                        };
                    });
                } else if (c.toString().match('letters') && !c.toString().match('numbers') && !c.toString().match('symbols')) {
                    selector.addEventListener('keypress', function(e) {
                        if (e.key.match(/[^A-Za-z]/)) {
                            e.preventDefault();
                            return "The field should only contain Letters.";
                        };
                    });
                } else if (c.toString().match('symbols') && !c.toString().match('numbers') && !c.toString().match('letters')) {
                    selector.addEventListener('keypress', function(e) {
                        if (e.key.match(/[a-zA-Z0-9]/)) {
                            e.preventDefault();
                            return "The field should only contain Symbols.";
                        };
                    });
                } else if (condition) {

                }
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };
};

/* Include another innerHTML to the {{  }} executed */
function include(select, position) {
    try {
        let selector = CONNECT.tag;
        let selects = document.querySelector(select);

        if (position == "append") {
            selector.innerHTML += selects.innerHTML;
        } else if (position == "prepend") {
            selector.innerHTML = selects.innerHTML + selector.innerHTML;
        } else if (!position) {
            selector.innerHTML += selects.innerHTML;
        } else {
            throw new Error("The position parameter should include append, prepend or should be empty.");
        };

    } catch (error) {
        console.error(`There was an uncaught ${error.name}: ${error.message}`);
    };
};

/* Include another innerHTML file to the {{  }} executed */
function place(select, position) {
    try {
        let selector = CONNECT.tag;
        let selects = document.querySelector(select);

        if (position == "append") {
            selector.innerHTML += selects.innerHTML;
        } else if (position == "prepend") {
            selector.innerHTML = selects.innerHTML + selector.innerHTML;
        } else if (!position) {
            selector.innerHTML += selects.innerHTML;
        } else {
            throw new Error("The position parameter should include append, prepend or should be empty.");
        };

    } catch (error) {
        console.error(`There was an uncaught ${error.name}: ${error.message}`);
    };
};

/* Declear if statement */
function state(condition, _return_if_true) {
    this._return_if_true = _return_if_true;
    this.condition = condition;
    try {
        _return_if_true = null;
        if (this.condition == true) {
            _return_if_true = this._return_if_true;
            return _return_if_true;
        };
    } catch (error) {
        console.error(`There was an uncaught ${error.name}: ${error.message}`);
    };
};

/* Declear ifelse statement */
function stateAll(condition, _return_if_true, _else) {
    this._return_if_true = _return_if_true;
    this._else = _else;
    this.condition = condition;
    try {
        _return_if_true = null;
        _else = null;
        if (this.condition == true) {
            _return_if_true = this._return_if_true;
            return _return_if_true;
        } else {
            _else = this._else;
            return _else;
        };
    } catch (error) {
        console.error(`There was an uncaught ${error.name}: ${error.message}`);
    };
};

/* Declear a define variable */
function define(variable) {
    this.variable = variable;
    try {
        const _props_ = this.variable.split(' as ', 2);
        let _varName_ = _props_[0].toString();
        let _value_ = _props_[1].toString();
        window[_varName_] = _value_;
    } catch (error) {
        console.error(`There was an uncaught ${error.name}: ${error.message}`);
    };
};

/* Define all Dates and Time */
class _Date {

    /* Full Time */
    t() { new Date().getTime() };

    /* 24 Hours Function */
    static h(string) {
        let h = new Date().getHours();
        try {
            if (string == '2digits') {
                if (h < 10) {
                    return '0' + h;
                } else {
                    return h;
                };
            } else if (string == '1digit' || !string) {
                return h;
            } else {
                throw new Error('The parameter should include 2digits, 1digit or should be empty.');
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* 12 Hours Function */
    static hr(string) {
        let hr = new Date().getHours();
        try {
            if (string == '2digits') {
                if (hr == 0) {
                    return `${hr + 12}`;
                } else if (hr >= 0 && hr <= 12) {
                    if (hr >= 10) {
                        return hr;
                    } else {
                        return "0" + hr;
                    };
                } else if (hr > 12 && hr < 22) {
                    return `0${hr - 12}`;
                } else if (hr >= 22) {
                    return `${hr - 12}`;
                };
            } else if (string == '1digit' || !string) {
                if (hr > 12) {
                    return hr - 12;
                } else if (hr == 0) {
                    return hr + 12;
                } else {
                    return hr;
                };
            } else {
                throw new Error('The parameter should include 2digits, 1digit or should be empty.');
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    static meridian(meridian) {
        let hr = new Date().getHours();
        try {
            if (meridian == 'auto' || !meridian) {
                if (hr >= 0 && hr < 12) {
                    return "am";
                } else {
                    return "pm";
                };
            } else if (meridian == 'pm') {
                if (hr >= 13 && hr < 24) {
                    return "pm";
                } else {
                    return "";
                };
            } else if (meridian == 'am') {
                if (hr >= 0 && hr < 12) {
                    return "am";
                } else {
                    return "";
                };
            } else {
                throw new Error('The parameter should include auto, am, pm or should be empty.');
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Minutes Function */
    static m(string) {
        let m = new Date().getMinutes();
        try {
            if (string == '2digits') {
                if (m < 10) {
                    return '0' + m;
                } else {
                    return m;
                };
            } else if (string == '1digit' || !string) {
                return m;
            } else {
                throw new Error('The parameter should include 2digits, 1digit or should be empty.');
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Seconds Function */
    static s(string) {
        let s = new Date().getSeconds();
        try {
            if (string == '2digits') {
                if (s < 10) {
                    return '0' + s;
                } else {
                    return s;
                };
            } else if (string == '1digit' || !string) {
                return s;
            } else {
                throw new Error('The parameter should include 2digits, 1digit or should be empty.');
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Milliseconds */
    static ms() { new Date().getMilliseconds() };

    /* Date */

    /* Date Function */
    static D(string) {
        let D = new Date().getDate();
        try {
            if (string == '2digits') {
                if (D < 10) {
                    return '0' + D;
                } else {
                    return D;
                };
            } else if (string == '1digit' || !string) {
                return D;
            } else {
                throw new Error('The parameter should include 2digits, 1digit or should be empty.');
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Day Function */
    static d(string) {
        let d = new Date().getDay();
        try {
            if (string == '2digits') {
                if (d < 10) {
                    return '0' + d;
                } else {
                    return d;
                };
            } else if (string == '1digit' || !string) {
                return d;
            } else {
                throw new Error('The parameter should include 2digits, 1digit or should be empty.');
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Day 3 Letters Function */
    static dd() {
        let dd = new Date().getDay();
        try {
            if (dd == 1) {
                return 'Mon';
            } else if (dd == 2) {
                return 'Tue';
            } else if (dd == 3) {
                return 'Wed';
            } else if (dd == 4) {
                return 'Thu';
            } else if (dd == 5) {
                return 'Fri';
            } else if (dd == 6) {
                return 'Sat';
            } else {
                return 'Sun';
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Day Full Letters Function */
    static ddd() {
        let ddd = new Date().getDay();
        try {
            if (ddd == 1) {
                return 'Monday';
            } else if (ddd == 2) {
                return 'Tuesday';
            } else if (ddd == 3) {
                return 'Wednesday';
            } else if (ddd == 4) {
                return 'Thursday';
            } else if (ddd == 5) {
                return 'Friday';
            } else if (ddd == 6) {
                return 'Saturday';
            } else {
                return 'Sunday';
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Month Function */
    static M(string) {
        let M = new Date().getMonth() + 1;
        try {
            if (string == '2digits') {
                if (M < 10) {
                    return '0' + M;
                } else {
                    return M;
                };
            } else if (string == '1digit' || !string) {
                return M;
            } else {
                throw new Error('The parameter should include 2digits, 1digit or should be empty.');
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Month Short Letters Function */
    static MM() {
        let MM = new Date().getMonth() + 1;
        try {
            if (MM == 1) {
                return 'Jan';
            } else if (MM == 2) {
                return 'Feb';
            } else if (MM == 3) {
                return 'Mar';
            } else if (MM == 4) {
                return 'Apr';
            } else if (MM == 5) {
                return 'May';
            } else if (MM == 6) {
                return 'Jun';
            } else if (MM == 7) {
                return 'Jul';
            } else if (MM == 8) {
                return 'Aug';
            } else if (MM == 9) {
                return 'Sep';
            } else if (MM == 10) {
                return 'Oct';
            } else if (MM == 11) {
                return 'Nov';
            } else {
                return 'Dec';
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Month Full Letters Function */
    static MMM() {
        let MMM = new Date().getMonth() + 1;
        try {
            if (MMM == 1) {
                return 'January';
            } else if (MMM == 2) {
                return 'February';
            } else if (MMM == 3) {
                return 'March';
            } else if (MMM == 4) {
                return 'April';
            } else if (MMM == 5) {
                return 'May';
            } else if (MMM == 6) {
                return 'June';
            } else if (MMM == 7) {
                return 'July';
            } else if (MMM == 8) {
                return 'August';
            } else if (MMM == 9) {
                return 'September';
            } else if (MMM == 10) {
                return 'October';
            } else if (MMM == 11) {
                return 'November';
            } else {
                return 'December';
            };
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* Year Function */
    static y() {
        let y = new Date().getFullYear();
        try {
            return y;
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };

    /* 2 digits Year Function */
    static Y() {
        let Y = new Date().getFullYear();
        try {
            let sub = Y.substring(2, Y.length);
            return sub;
        } catch (error) {
            console.error(`There was an uncaught ${error.name}: ${error.message}`);
        };
    };
};

/* greet function */
function greet(time_format) {
    this.format = time_format;
    let hr = new Date().getHours();
    try {
        if (!time_format) {
            if (hr >= 0 && hr < 12) {
                return `Good Morning! We're currently in ${_Date.h('2digits')}:${_Date.m('2digits')}:${_Date.s('2digits')}`;
            } else if (hr >= 12 && hr < 17) {
                return `Good Afternoon! We're currently in ${_Date.h('2digits')}:${_Date.m('2digits')}:${_Date.s('2digits')}`;
            } else if (hr >= 17 && hr < 21) {
                return `Good Evening! We're currently in ${_Date.h('2digits')}:${_Date.m('2digits')}:${_Date.s('2digits')}`;
            } else {
                return `Good Night! We're currently in ${_Date.h('2digits')}:${_Date.m('2digits')}:${_Date.s('2digits')}, Time for Bed`;
            };
        } else {
            let split = this.format.split(', ', 4);
            let h = split[0];
            let m = split[1];
            let s = split[2];
            let meridian = split[3];

            if (meridian) {
                if (hr >= 0 && hr < 12) {
                    return `Good Morning! We're currently in ${h}:${m}:${s}${meridian}`;
                } else if (hr >= 12 && hr < 17) {
                    return `Good Afternoon! We're currently in ${h}:${m}:${s}${meridian}`;
                } else if (hr >= 17 && hr < 21) {
                    return `Good Evening! We're currently in ${h}:${m}:${s}${meridian}`;
                } else {
                    return `Good Night! We're currently in ${h}:${m}:${s}${meridian}, Time for Bed`;
                };
            } else {
                if (hr >= 0 && hr < 12) {
                    return `Good Morning! We're currently in ${h}:${m}:${s}`;
                } else if (hr >= 12 && hr < 17) {
                    return `Good Afternoon! We're currently in ${h}:${m}:${s}`;
                } else if (hr >= 17 && hr < 21) {
                    return `Good Evening! We're currently in ${h}:${m}:${s}`;
                } else {
                    return `Good Night! We're currently in ${h}:${m}:${s}, Time for Bed`;
                };
            };
        };
    } catch (error) {
        console.error(`There was an uncaught ${error.name}: ${error.message}`);
    };
};

/* alert message box */
function _alert(message) {
    this.message = message;

    try {
        /* create the alert wrapper element */
        let alertWrapper = document.createElement('sok');
        let body = document.querySelector('body');
        let html = document.querySelector('html');
        let html5 = document.querySelector('doctype html');
        let header = document.querySelector('header');
        if (html) {
            html.prepend(alertWrapper);
        } else if (html5) {
            html5.prepend(alertWrapper);
        } else if (header) {
            header.prepend(alertWrapper);
        } else if (body) {
            body.prepend(alertWrapper);
        } else {
            document.prepend(alertWrapper);
        };

        /* create the alert container element */
        let alertContainer = document.createElement('sok');
        alertWrapper.append(alertContainer);

        /* create the alert title element */
        let alertTitle = document.createElement('sokh2');
        alertContainer.prepend(alertTitle);
        alertTitle.innerText = "This page says";

        /* create the alert title element */
        let alertPWrapper = document.createElement('sok');
        alertContainer.append(alertPWrapper);

        /* create the alert p element */
        let alertP = document.createElement('sokp');
        alertPWrapper.append(alertP);

        if (this.message == undefined || this.message == null || !message) {
            alertP.innerText = "";
        } else {
            if (this.message.length > 700) {
                let max = this.message.substring(0, 700);
                alertP.innerText = max + "...";
            } else {
                alertP.innerText = message;
            };
        };

        /* create the alert ok button */
        let alertBtn = document.createElement('button');
        alertBtn.setAttribute('autofocus', 'on');
        alertContainer.append(alertBtn);
        alertBtn.innerText = "Ok";

        /* style the alert wrapper element */
        let style1 = alertWrapper.style;
        style1.width = "100%";
        style1.height = "100%";
        style1.display = "flex";
        style1.position = "fixed";
        style1.top = "0";
        style1.left = "0";
        style1.right = "0";
        style1.bottom = "0";
        style1.margin = "0";
        style1.visibility = "hidden";
        style1.backgroundColor = "#22222285";
        style1.transition = "all 0.5s ease-in-out";

        /* style alert container element */
        let style2 = alertContainer.style;
        style2.backgroundColor = "#eeeeee";
        style2.width = "400px";
        style2.height = "200px";
        style2.margin = "auto";
        style2.display = "block";
        style2.position = "relative";
        style2.paddingLeft = "15px";
        style2.paddingRight = "15px";
        style2.paddingBottom = "30px";
        style2.borderRadius = "10px";
        style2.wordWrap = "break-word";
        style2.transition = "all 0.5s ease-in-out";
        style2.boxShadow = "5px 5px 10px grey, -5px -5px 10px grey";

        /* style alert title */
        let style3 = alertTitle.style;
        style3.marginTop = "10px";
        style3.marginBottom = "0";
        style3.display = "block";
        style3.fontFamily = 'Impact, Haettenschweiler, \'Arial Narrow Bold\', sans-serif';
        style3.fontWeight = 'lighter';
        style3.fontSize = '1.5pc';
        style3.userSelect = "none";
        style3.paddingBottom = "5px";

        /* style alert P element wrapper */
        let style4 = alertPWrapper.style;
        style4.height = "123px";
        style4.padding = "0px";
        style4.display = "block";
        style4.marginTop = "5px";
        style4.wordWrap = "break-word";
        style4.overflowY = "auto";

        /* style alert p  element*/
        let style5 = alertP.style;
        style5.display = "block";
        style5.fontSize = "18px";
        style5.lineHeight = "0.95";
        fontFamily = "Arial, Helvetica, 'Lucida Sans', Geneva, Verdana, sans-serif 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode'";

        /* style alert ok button */
        let style6 = alertBtn.style;
        style6.padding = "13px";
        style6.fontSize = "18px";
        style6.width = "100%";
        style6.bottom = "5px";
        style6.position = "relative";
        style6.borderRadius = "5px";
        style6.border = "2px solid #838383";
        style6.fontWeight = "600";
        style6.userSelect = "none";
        style6.transition = "all 0.3s ease-in-out";
        style6.backgroundColor = "#c4c4c4";

        /* Function */
        /* Button animation */
        alertBtn.addEventListener('mouseover', () => {
            style6.border = "2px solid #6b6b6b";
            style6.backgroundColor = "#838383";
        });

        alertBtn.addEventListener('mousedown', () => {
            style6.border = "2px solid #6b6b6b";
            style6.backgroundColor = "#5a5a5a";
        });

        alertBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (alertWrapper.style.visibility != 'hidden') {
                style2.transform = "scale(0%)";
                style1.opacity = "0";
                style1.visibility = "hidden";
            };

            return ("true");
        });

        alertBtn.addEventListener('mouseout', () => {
            style6.border = "2px solid #838383";
            style6.backgroundColor = "#c4c4c4";
        });

        if (alertWrapper.style.visibility != 'visible') {
            style1.opacity = "1";
            style1.visibility = "visible";
        };
    } catch (error) {
        console.error(`There was an uncaught ${error.name}: ${error.message}`);
    };
};
/* // End alert dialog */

/* confirm message box */
function _confirm(message) {
    this.message = message;

    try {
        /* create the confirm wrapper element */
        let confirmWrapper = document.createElement('sok');
        let body = document.querySelector('body');
        let html = document.querySelector('html');
        let html5 = document.querySelector('doctype html');
        let header = document.querySelector('header');
        if (html) {
            html.prepend(confirmWrapper);
        } else if (html5) {
            html5.prepend(confirmWrapper);
        } else if (header) {
            header.prepend(confirmWrapper);
        } else if (body) {
            body.prepend(confirmWrapper);
        } else {
            document.prepend(confirmWrapper);
        };

        /* create the confirm container element */
        let confirmContainer = document.createElement('sok');
        confirmWrapper.append(confirmContainer);

        /* create the confirm title element */
        let confirmTitle = document.createElement('sokh2');
        confirmContainer.prepend(confirmTitle);
        confirmTitle.innerText = "This page says";

        /* create the confirm title element */
        let confirmPWrapper = document.createElement('sok');
        confirmContainer.append(confirmPWrapper);

        /* create the confirm p element */
        let confirmP = document.createElement('sokp');
        confirmPWrapper.append(confirmP);


        if (this.message == undefined || this.message == null || !message) {
            confirmP.innerText = "";
        } else {
            if (this.message.length > 700) {
                let max = this.message.substring(0, 700);
                confirmP.innerText = max + "...";
            } else {
                confirmP.innerText = message;
            };
        };

        /* create the confirm ok button */
        let confirmBtn = document.createElement('button');
        confirmContainer.append(confirmBtn);
        confirmBtn.innerText = "Ok";
        confirmBtn.setAttribute('autofocus', 'on');

        /* create the confirm cancel button */
        let confirmBtn2 = document.createElement('button');
        confirmContainer.append(confirmBtn2);
        confirmBtn2.innerText = "Cancel";

        /* style the confirm wrapper element */
        let style1 = confirmWrapper.style;
        style1.width = "100%";
        style1.height = "100%";
        style1.display = "flex";
        style1.position = "fixed";
        style1.top = "0";
        style1.left = "0";
        style1.right = "0";
        style1.bottom = "0";
        style1.margin = "0";
        style1.visibility = "hidden";
        style1.backgroundColor = "#22222285";
        style1.transition = "all 0.5s ease-in-out";

        /* style confirm container element */
        let style2 = confirmContainer.style;
        style2.backgroundColor = "#eeeeee";
        style2.width = "400px";
        style2.height = "200px";
        style2.margin = "auto";
        style2.display = "block";
        style2.position = "relative";
        style2.paddingLeft = "15px";
        style2.paddingRight = "15px";
        style2.paddingBottom = "30px";
        style2.borderRadius = "10px";
        style2.wordWrap = "break-word";
        style2.transition = "all 0.5s ease-in-out";
        style2.boxShadow = "5px 5px 10px grey, -5px -5px 10px grey";

        /* style confirm title */
        let style3 = confirmTitle.style;
        style3.marginTop = "10px";
        style3.marginBottom = "0";
        style3.display = "block";
        style3.fontFamily = 'Impact, Haettenschweiler, \'Arial Narrow Bold\', sans-serif';
        style3.fontWeight = 'lighter';
        style3.fontSize = '1.5pc';
        style3.userSelect = "none";
        style3.paddingBottom = "5px";

        /* style confirm P element wrapper */
        let style4 = confirmPWrapper.style;
        style4.height = "123px";
        style4.padding = "0px";
        style4.display = "block";
        style4.marginTop = "5px";
        style4.wordWrap = "break-word";
        style4.overflowY = "auto";

        /* style confirm p  element*/
        let style5 = confirmP.style;
        style5.display = "block";
        style5.fontSize = "18px";
        style5.lineHeight = "0.95";
        fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

        /* style confirm ok button */
        let style6 = confirmBtn.style;
        style6.padding = "10px";
        style6.fontSize = "18px";
        style6.width = "49%";
        style6.position = "relative";
        style6.borderRadius = "5px";
        style6.border = "2px solid #838383";
        style6.fontWeight = "600";
        style6.userSelect = 'none';
        style6.transition = "all 0.3s ease-in-out";
        style6.backgroundColor = "#c4c4c4";

        /* style confirm cancel button */
        let style7 = confirmBtn2.style;
        style7.padding = "10px";
        style7.fontSize = "18px";
        style7.width = "49%";
        style7.marginLeft = "7px";
        style7.position = "relative";
        style7.borderRadius = "5px";
        style7.userSelect = 'none';
        style7.border = "2px solid #838383";
        style7.fontWeight = "600";
        style7.transition = "all 0.3s ease-in-out";
        style7.backgroundColor = "#c4c4c4";


        /* Function */
        /* Button animation */
        confirmBtn.addEventListener('mouseover', () => {
            style6.border = "2px solid #6b6b6b";
            style6.backgroundColor = "#838383";
        });

        confirmBtn2.addEventListener('mouseover', () => {
            style7.border = "2px solid #6b6b6b";
            style7.backgroundColor = "#838383";
        });

        confirmBtn.addEventListener('mousedown', () => {
            style6.border = "2px solid #6b6b6b";
            style6.backgroundColor = "#5a5a5a";
        });

        confirmBtn2.addEventListener('mousedown', () => {
            style7.border = "2px solid #6b6b6b";
            style7.backgroundColor = "#5a5a5a";
        });

        confirmBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirmWrapper.style.visibility != 'hidden') {
                style1.opacity = "0";
                style1.visibility = "hidden";
                style2.transform = "scale(0%)";
            };

            return ("true");
        });

        confirmBtn2.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirmWrapper.style.visibility != 'hidden') {
                style1.opacity = "0";
                style1.visibility = "hidden";
                style2.transform = "scale(0%)";
            };

            return ("false");
        });

        confirmBtn.addEventListener('mouseout', () => {
            style6.border = "2px solid #838383";
            style6.backgroundColor = "#c4c4c4";
        });

        confirmBtn2.addEventListener('mouseout', () => {
            style7.border = "2px solid #838383";
            style7.backgroundColor = "#c4c4c4";
        });

        if (confirmWrapper.style.visibility != 'visible') {
            style1.opacity = "1";
            style1.visibility = "visible";
        };
    } catch (error) {
        console.error(`There was an uncaught ${error.name}: ${error.message}`);
    };
};
/* // End Confirm dialog */

/* prompt message box */
function _prompt(message, _default) {
    this.message = message;
    this.default = _default;

    try {
        /* create the prompt wrapper element */
        let promptWrapper = document.createElement('sok');
        let body = document.querySelector('body');
        let html = document.querySelector('html');
        let html5 = document.querySelector('doctype html');
        let header = document.querySelector('header');
        if (html) {
            html.prepend(promptWrapper);
        } else if (html5) {
            html5.prepend(promptWrapper);
        } else if (header) {
            header.prepend(promptWrapper);
        } else if (body) {
            body.prepend(promptWrapper);
        } else {
            document.prepend(promptWrapper);
        };

        /* create the prompt container element */
        let promptContainer = document.createElement('sok');
        promptWrapper.append(promptContainer);

        /* create the prompt title element */
        let promptTitle = document.createElement('sokh2');
        promptContainer.prepend(promptTitle);
        promptTitle.innerText = "This page says";

        /* create the prompt title element */
        let promptPWrapper = document.createElement('sok');
        promptContainer.append(promptPWrapper);

        /* create the prompt p element */
        let promptP = document.createElement('sokp');
        promptPWrapper.append(promptP);


        if (message == undefined || message == null || !message) {
            promptP.innerText = "";
        } else {
            if (this.message.length > 700) {
                let max = this.message.substring(0, 700);
                promptP.innerText = max + "...";
            } else {
                promptP.innerText = message;
            };
        };

        /* create the prompt ok button */
        let input = document.createElement('input');
        promptContainer.append(input);
        if (_default) {
            input.value = this.default;
        };

        /* create br element */
        let br = document.createElement('br');
        promptContainer.append(br);

        /* create the prompt ok button */
        let promptBtn = document.createElement('button');
        promptContainer.append(promptBtn);
        promptBtn.innerText = "Ok";
        promptBtn.setAttribute('autofocus', 'on');

        /* create the prompt cancel button */
        let promptBtn2 = document.createElement('button');
        promptContainer.append(promptBtn2);
        promptBtn2.innerText = "Cancel";

        /* style the prompt wrapper element */
        let style1 = promptWrapper.style;
        style1.width = "100%";
        style1.height = "100%";
        style1.display = "flex";
        style1.position = "fixed";
        style1.top = "0";
        style1.left = "0";
        style1.right = "0";
        style1.bottom = "0";
        style1.margin = "0";
        style1.visibility = "hidden";
        style1.backgroundColor = "#22222285";
        style1.transition = "all 0.5s ease-in-out";

        /* style prompt container element */
        let style2 = promptContainer.style;
        style2.backgroundColor = "#eeeeee";
        style2.width = "400px";
        style2.height = "200px";
        style2.margin = "auto";
        style2.display = "block";
        style2.position = "relative";
        style2.paddingLeft = "15px";
        style2.paddingRight = "15px";
        style2.paddingBottom = "30px";
        style2.borderRadius = "10px";
        style2.wordWrap = "break-word";
        style2.transition = "all 0.5s ease-in-out";
        style2.boxShadow = "5px 5px 10px grey, -5px -5px 10px grey";

        /* style prompt title */
        let style3 = promptTitle.style;
        style3.marginTop = "10px";
        style3.marginBottom = "0";
        style3.display = "block";
        style3.fontFamily = 'Impact, Haettenschweiler, \'Arial Narrow Bold\', sans-serif';
        style3.fontWeight = 'lighter';
        style3.fontSize = '1.5pc';
        style3.userSelect = "none";
        style3.paddingBottom = "5px";

        /* style prompt P element wrapper */
        let style4 = promptPWrapper.style;
        style4.height = "80px";
        style4.padding = "0px";
        style4.display = "block";
        style4.marginTop = "5px";
        style4.wordWrap = "break-word";
        style4.overflowY = "auto";

        /* style prompt p  element*/
        let style5 = promptP.style;
        style5.display = "block";
        style5.fontSize = "18px";
        style5.lineHeight = "0.95";
        fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

        /* style prompt input  element*/
        let inp = input.style;
        inp.width = "100%";
        inp.height = "33px";
        inp.margin = "7px 0 7px 0";
        inp.padding = "0 5px 0 5px";
        inp.border = "2px solid #838383";
        inp.borderRadius = "4px";

        /* style prompt ok button */
        let style6 = promptBtn.style;
        style6.padding = "8px";
        style6.fontSize = "18px";
        style6.width = "49%";
        style6.position = "relative";
        style6.borderRadius = "5px";
        style6.border = "2px solid #838383";
        style6.fontWeight = "600";
        style6.userSelect = 'none';
        style6.transition = "all 0.3s ease-in-out";
        style6.backgroundColor = "#c4c4c4";

        /* style prompt cancel button */
        let style7 = promptBtn2.style;
        style7.padding = "8px";
        style7.fontSize = "18px";
        style7.width = "49%";
        style7.marginLeft = "7px";
        style7.position = "relative";
        style7.borderRadius = "5px";
        style7.userSelect = 'none';
        style7.border = "2px solid #838383";
        style7.fontWeight = "600";
        style7.transition = "all 0.3s ease-in-out";
        style7.backgroundColor = "#c4c4c4";


        /* Function */
        /* Button animation */
        promptBtn.addEventListener('mouseover', () => {
            style6.border = "2px solid #6b6b6b";
            style6.backgroundColor = "#838383";
        });

        promptBtn2.addEventListener('mouseover', () => {
            style7.border = "2px solid #6b6b6b";
            style7.backgroundColor = "#838383";
        });

        promptBtn.addEventListener('mousedown', () => {
            style6.border = "2px solid #6b6b6b";
            style6.backgroundColor = "#5a5a5a";
        });

        promptBtn2.addEventListener('mousedown', () => {
            style7.border = "2px solid #6b6b6b";
            style7.backgroundColor = "#5a5a5a";
        });

        promptBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (promptWrapper.style.visibility != 'hidden') {
                style1.opacity = "0";
                style1.visibility = "hidden";
                style2.transform = "scale(0%)";
            };
            console.log(input.value);
            return (input.value);
        });

        promptBtn2.addEventListener('click', (e) => {
            e.preventDefault();
            input.value = "null";
            if (promptWrapper.style.visibility != 'hidden') {
                style1.opacity = "0";
                style1.visibility = "hidden";
                style2.transform = "scale(0%)";
            };
            console.log(input.value);
            return (input.value);
        });

        promptBtn.addEventListener('mouseout', () => {
            style6.border = "2px solid #838383";
            style6.backgroundColor = "#c4c4c4";
        });

        promptBtn2.addEventListener('mouseout', () => {
            style7.border = "2px solid #838383";
            style7.backgroundColor = "#c4c4c4";
        });

        if (promptWrapper.style.visibility != 'visible') {
            style1.opacity = "1";
            style1.visibility = "visible";
        };
    } catch (error) {
        console.error(`There was an uncaught ${error.name}: ${error.message}`);
    };
};
/* // End prompt dialog */

/* Export functions */
function socket(selector) {
    this.selector = selector;
    return new Socket(this.selector);
};
const _select = (selectors) => new Select(selectors);
const HTTP = new XMLHttpRequest;
const current = () => CONNECT.tag;

/* export about Socket */
const aboutSocket = new Socket().about();
const aboutSocketFull = new Socket().about().join('\n');
const socketName = new Socket().about()[0];
const socketDevNames = new Socket().about()[1];
const socketDevEmails = new Socket().about()[2];
const socketDevTels = new Socket().about()[3];
const socketDevLinks = new Socket().about()[4];
const socketDate = new Socket().about()[5];