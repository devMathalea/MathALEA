var iep =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/dom/index.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/dom/index.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * This file is part of Sesatheque.
 *   Copyright 2014-2015, Association Sésamath
 *
 * Sesatheque is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License version 3
 * as published by the Free Software Foundation.
 *
 * Sesatheque is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Sesatheque (LICENCE.txt).
 * @see http://www.gnu.org/licenses/agpl.txt
 *
 *
 * Ce fichier fait partie de l'application Sésathèque, créée par l'association Sésamath.
 *
 * Sésathèque est un logiciel libre ; vous pouvez le redistribuer ou le modifier suivant
 * les termes de la GNU Affero General Public License version 3 telle que publiée par la
 * Free Software Foundation.
 * Sésathèque est distribué dans l'espoir qu'il sera utile, mais SANS AUCUNE GARANTIE,
 * sans même la garantie tacite de QUALITÉ MARCHANDE ou d'ADÉQUATION à UN BUT PARTICULIER.
 * Consultez la GNU Affero General Public License pour plus de détails.
 * Vous devez avoir reçu une copie de la GNU General Public License en même temps que Sésathèque
 * (cf LICENCE.txt et http://vvlibri.org/fr/Analyse/gnu-affero-general-public-license-v3-analyse
 * pour une explication en français)
 */


var log = __webpack_require__(/*! ../utils/log */ "./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/utils/log.js")
var hasProp = __webpack_require__(/*! ../index */ "./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/index.js").hasProp

/**
 * Ajoute une css dans le <head> de la page
 *
 * Déclaré par init (dès son chargement)
 * @param {string}  file Chemin du fichier css (mis dans href tel quel)
 */
function addCss (file) {
  var head = window.document.getElementsByTagName('head')[0]
  var links = head.getElementsByTagName('link')
  var dejala = false
  for (var i = 0; i < links.length; i++) {
    if (links[i].href === file) {
      dejala = true
      break
    }
  }

  if (dejala) {
    log(file + " était déjà présent, on ne l'ajoute pas")
  } else {
    var elt = window.document.createElement('link')
    elt.rel = 'stylesheet'
    elt.type = 'text/css'
    elt.href = file
    head.appendChild(elt)
  }
}

/**
 * Ajoute un js à la fin du body et appelle la callback quand il est chargé
 * @param {string}  file Chemin du fichier jss (mis dans src tel quel)
 */
function addJs (file, cb) {
  function callCb () {
    cb()
    elt.removeEventListener('load', callCb)
  }
  /**
   * @private
   * @type {HTMLElement}
   */
  var body = window.document.getElementsByTagName('body')[0]
  var elt = window.document.createElement('script')
  elt.type = 'text/javascript'
  // pour que ça marche mieux partout, il vaut mieux mettre le listener onload après avoir mis l'élément dans le dom
  body.appendChild(elt)
  elt.addEventListener('load', callCb)
  // et ensuite indiquer le fichier à charger
  elt.src = file
}

/**
 * Ajoute un élément html de type tag à parent
 * @param {HTMLElement} parent
 * @param {string} tag
 * @param {Object=} attrs Les attributs
 * @param {string=} content
 * @returns {HTMLElement} L'élément ajouté
 */
function addElement (parent, tag, attrs, content) {
  var elt = getElement(tag, attrs, content)
  parent.appendChild(elt)

  return elt
}

/**
 * Ajoute un élément html juste après element
 * @param {HTMLElement} element
 * @param {string} tag
 * @param {Object=} attrs Les attributs
 * @param {string=} content
 * @returns {HTMLElement} L'élément ajouté
 */
function addElementAfter (element, tag, attrs, content) {
  var newElt = getElement(tag, attrs, content)
  var parent = element.parentNode
  // pas de insertAfter, si nextSibling est null ça le mettra à la fin, cf https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
  if (parent) parent.insertBefore(newElt, element.nextSibling)
  else log.error(new Error("Navigateur incompatible (pas de parentNode), impossible d'ajouter l'élément"))

  return newElt
}

/**
 * Ajoute un élément html juste avant element
 * @param {HTMLElement} element
 * @param {string} tag
 * @param {Object=} attrs Les attributs
 * @param {string=} content
 * @returns {HTMLElement} L'élément ajouté
 */
function addElementBefore (element, tag, attrs, content) {
  var newElt = getElement(tag, attrs, content)
  var parent = element.parentNode
  if (parent) parent.insertBefore(newElt, element)
  else log.error(new Error("Navigateur incompatible (pas de parentNode), impossible d'insérer l'élément"))

  return newElt
}

/**
 * Ajoute un élément html comme premier enfant de parent
 * @param {HTMLElement} parent
 * @param {string} tag
 * @param {Object=} attrs Les attributs
 * @param {string=} content
 * @returns {HTMLElement} L'élément ajouté
 */
function addElementFirstChild (parent, tag, attrs, content) {
  var newElt = getElement(tag, attrs, content)
  parent.insertBefore(newElt, parent.firstChild)

  return newElt
}

/**
 * Ajoute un élément html comme frère aîné de elementRef
 * @param {HTMLElement} elementRef
 * @param {string} tag
 * @param {Object=} attrs Les attributs
 * @param {string=} content
 * @returns {HTMLElement} L'élément ajouté
 */
function addElementFirstSibling (elementRef, tag, attrs, content) {
  var newElt = getElement(tag, attrs, content)
  elementRef.parentNode.insertBefore(newElt, elementRef.parentNode.firstChild)

  return newElt
}

/**
 * Ajoute du texte dans un élément
 *
 * Déclaré par init (dès son chargement)
 * @param {HTMLElement} elt
 * @param {string} text
 */
function addText (elt, text) {
  elt.appendChild(window.document.createTextNode(text))
}

/**
 * Vide un élément html de tous ses enfants
 *
 * Déclaré par init (dès son chargement)
 * @param {HTMLElement} element
 */
function empty (element) {
  if (element && element.firstChild) {
    while (element.firstChild) element.removeChild(element.firstChild)
  }
}

/**
 * Retourne un élément html de type tag (non inséré dans le dom)
 *
 * Déclaré par init (dès son chargement)
 * @param {string} tag
 * @param {Object=} attrs Les attributs
 * @param {string=} txtContent
 */
function getElement (tag, attrs, txtContent) {
  var elt = window.document.createElement(tag)
  var attr
  try {
    if (attrs) {
      for (attr in attrs) {
        if (hasProp(attrs, attr)) {
          if (attr === 'class') elt.className = attrs.class
          else if (attr === 'className') elt.className = attrs.className
          else if (attr === 'style') setStyles(elt, attrs.style)
          else elt.setAttribute(attr, attrs[attr])
        }
      }
    }
  } catch (error) {
    log('plantage dans getElement ' + tag + ' avec les attributs ', attrs, error)
  }

  if (txtContent) addText(elt, txtContent)

  return elt
}

/**
 * Retourne la taille de la fenêtre
 * @returns {{width: number, height: number}}
 */
function getSize () {
  // suivant que l'on est en mode standard ou quirk faut prendre l'un ou l'autre
  var body = (window.document.compatMode === 'CSS1Compat') ? window.document.documentElement : window.document.body
  // en cas de zoom, window.innerWidth est plus petit, et c'est la bonne valeur
  return {
    width: Math.floor(Math.min(body.clientWidth, window.innerWidth)),
    height: Math.floor(Math.min(body.clientHeight, window.innerHeight))
  }
}

/**
 * Retourne un id qui n'existe pas encore dans le dom (mais ne le créé pas)
 */
var getNewId = (function () {
  // au dela de 10000 id dans un dom y'a un pb !
  var max = 10000
  // une closure pour conserver la valeur de cette variable privée entre 2 appels
  var lastId = 0
  var id = 'sesa' + lastId
  return function getNewId () {
    while (window.document.getElementById(id) && lastId < max) {
      lastId++
      id = 'sesa' + lastId
    }
    if (lastId === max) throw Error('Max de ' + max + ' id générés atteint')

    return id
  }
})()

/**
 * Affecte des styles à un élément html (on peut pas affecter elt.style directement car read only, faut faire du elt.style.foo = bar)
 * sans planter en cas de pb (on le signale juste en console)
 *
 * Déclaré par init (dès son chargement)
 * @param {HTMLElement} elt
 * @param {string|object} styles
 */
function setStyles (elt, styles) {
  try {
    if (elt && elt.style) {
      if (typeof styles === 'string') {
        styles = styles.split(';')
        styles.forEach(function (paire) {
          paire = /([\w]+):(.+)/.exec(paire)
          if (paire && paire.length === 3) {
            var key = paire[1]
            elt.style[key] = paire[2]
          }
        })
      } else if (typeof styles === 'object') {
        for (var prop in styles) {
          if (hasProp(styles, prop)) {
            elt.style[prop] = styles[prop]
          }
        }
      }
    }
  } catch (error) {
    log.error(error)
  }
}

/**
 * Fonctions génériques pour manipuler le dom
 * @service sesajstools/dom
 */
module.exports = {
  // faut rester en es5 :-/ (uglifyJs aime pas si on répète pas `prop: prop`)
  addCss: addCss,
  addJs: addJs,
  addElement: addElement,
  addElementAfter: addElementAfter,
  addElementBefore: addElementBefore,
  addElementFirstChild: addElementFirstChild,
  addElementFirstSibling: addElementFirstSibling,
  addText: addText,
  empty: empty,
  getElement: getElement,
  getSize: getSize,
  getNewId: getNewId,
  setStyles: setStyles
}


/***/ }),

/***/ "./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/index.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/index.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * This file is part of Sesatheque.
 *   Copyright 2014-2015, Association Sésamath
 *
 * Sesatheque is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License version 3
 * as published by the Free Software Foundation.
 *
 * Sesatheque is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Sesatheque (LICENCE.txt).
 * @see http://www.gnu.org/licenses/agpl.txt
 *
 *
 * Ce fichier fait partie de l'application Sésathèque, créée par l'association Sésamath.
 *
 * Sésathèque est un logiciel libre ; vous pouvez le redistribuer ou le modifier suivant
 * les termes de la GNU Affero General Public License version 3 telle que publiée par la
 * Free Software Foundation.
 * Sésathèque est distribué dans l'espoir qu'il sera utile, mais SANS AUCUNE GARANTIE,
 * sans même la garantie tacite de QUALITÉ MARCHANDE ou d'ADÉQUATION à UN BUT PARTICULIER.
 * Consultez la GNU Affero General Public License pour plus de détails.
 * Vous devez avoir reçu une copie de la GNU General Public License en même temps que Sésathèque
 * (cf LICENCE.txt et http://vvlibri.org/fr/Analyse/gnu-affero-general-public-license-v3-analyse
 * pour une explication en français)
 */


// ajoute du forEach sur les Array si le navigateur connait pas ça
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (fn) { // eslint-disable-line no-extend-native
    for (var i = 0; i < this.length; i++) {
      // on passe en argument (eltDuTableau, index, tableau)
      fn(this[i], i, this)
    }
  }
}

var specialHtmlChars = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;'
}

/**
 * Retourne le nb de slash dans la string
 * @param {sting} str
 * @return {number} le nombre de slashes dans str
 * @throws {TypeError} Si str n'était pas une string
 */
function countSlash (str) {
  if (typeof str !== 'string') throw new TypeError('countSlash n’accepte qu’une string en paramètre')
  return str.replace(/[^/]+/g, '').length
}

/**
 * Échappe les caractères spéciaux en les remplaçant par leur équivalent html
 * Merci à jbo5112 https://stackoverflow.com/a/4835406
 * cf https://jsperf.com/escape-html-special-chars/11
 * @param {string} str
 * @param {boolean} [all] passer true pour remplacer les 5 caractères "&<>' (sinon ça ne remplace que <), attention dans ce cas ce n'est plus invariant (il ne faut pas rappeler la fct sur une chaîne qui y serait déjà passée)
 * @return {void|string|*}
 */
function escapeForHtml (str, all) {
  if (!all) return str.replace(/</g, '&lt;')
  return str.replace(/[&<>"']/g, function (char) { return specialHtmlChars[char] })
}

/**
 * Formate une date, en retournant format avec les %x interprétés (si x est connu, laissé tel quel sinon).
 * Attention, pas la même syntaxe que an-format-date (©arNuméral).
 *
 * Formats gérés comme la commande unix date
 * - %% symbole %
 * - %F YYYY-mm-dd
 * - %T HH:MM:SS
 * - %d jour du mois (01 à 31)
 * - %m n° du mois (01 à 12)
 * - %Y année sur 4 chiffres
 * - %y année sur 2 chiffres
 * - %H heure (00 à 23)/
 * - %M minutes (00 à 59)
 * - %S secondes (00 à 59)
 * - %s timestamp (secondes depuis 01/01/1970/)
 * Formats ajoutés (o était la seule lettre dispo)
 * - %o millisecondes (000 à 999)
 * - %O heure avec ms (idem %T.%o ou %H:%M:%S.%o)
 * @param {string} format
 * @param {Date} [date] La date à formater (now si non fourni)
 * @return {string}
 */
function formatDate (format, date) {
  function pad0 (val, nb) {
    return pad(val, '0', nb)
  }
  if (!date) date = new Date()
  else if (!(date instanceof Date)) throw new TypeError('date is not a Date')
  if (typeof format !== 'string') throw new TypeError('format is not a string')
  return format.replace(/%(.)/g, function (capture, formatChar) {
    switch (formatChar) {
      case 'd': return pad0(date.getDate())
      case 'F': return String(date.getFullYear()) + '-' + pad0(date.getMonth() + 1) + '-' + pad0(date.getDate()) // '%Y-%m-%d'
      case 'H': return pad0(date.getHours())
      case 'm': return pad0(date.getMonth() + 1)
      case 'M': return pad0(date.getMinutes())
      case 'o': return pad0(date.getMilliseconds(), 3)
      case 'O': return pad0(date.getHours()) + ':' + pad0(date.getMinutes()) + ':' + pad0(date.getSeconds()) + '.' + pad0(date.getMilliseconds(), 3) // '%H:%M:%S.%o'
      case 's': return pad0(Math.round(date.getTime() / 1000))
      case 'S': return pad0(date.getSeconds())
      case 'T': return pad0(date.getHours()) + ':' + pad0(date.getMinutes()) + ':' + pad0(date.getSeconds()) // '%H:%M:%S'
      case 'y': return String(date.getFullYear()).substr(2)
      case 'Y': return date.getFullYear()
      case '%': return '%' // pour remplacer %% par %
      // On change rien si on connait pas le format demandé
      default: return '%' + formatChar
    }
  })
}

/**
 * Renvoie un token aléatoire de 22 caractères
 * Pas aussi random ni unique que l'usage de crypto ou d'un module uuid
 * mais suffisant dans pas mal de cas (utiliser an-uuid sinon)
 * @returns {string}
 */
function getToken () {
  return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)
}

/**
 * Retourne true si object est un objet avec la propriété prop
 * @param object
 * @param prop
 * @return {boolean}
 */
function hasProp (object, prop) {
  if (typeof object === 'object') return Object.prototype.hasOwnProperty.call(object, prop)
  return false
}

/**
 * @param {*} arg
 * @returns {boolean}
 */
function isArray (arg) {
  return Array.isArray(arg)
}

/**
 * true si value est un array vide (mais false s'il contient un élément false|undefined)
 * @param value
 * @returns {boolean}
 */
function isArrayEmpty (value) {
  return Boolean(Array.isArray(value) && value.length === 0)
}

/**
 * true si value est un array non vide (même s'il contient un seul élément false|undefined|null|'')
 * @param value
 * @returns {boolean}
 */
function isArrayNotEmpty (value) {
  return Boolean(Array.isArray(value) && value.length)
}

/**
 * @param arg
 * @returns {boolean}
 */
function isDate (arg) {
  return typeof arg === 'object' && Object.prototype.toString.call(arg) === '[object Date]'
}

/**
 * Thanks to bugsnag-js
 * @param {*} value
 * @return {boolean}
 */
function isError (value) {
  switch (Object.prototype.toString.call(value)) {
    case '[object Error]':
      return true
    case '[object Exception]':
      return true
    case '[object DOMException]':
      return true
    default:
      return value instanceof Error
  }
}

/**
 * Retourne true si l'argument est une fonction
 * cf https://github.com/lodash/lodash/blob/4.11.2/lodash.js#L10826
 * cette implémentation plus simple sur typeof bug dans phandomJs 1.9 qui retourne function pour typeof NodeList
 * @param {*} arg
 * @returns {boolean}
 */
function isFunction (arg) {
  return (typeof arg === 'function')
}

/**
 * Indique si un array contient un élément
 * @param {Array} ar  Le tableau dans lequel chercher
 * @param {*}     elt L'élément à chercher (type natif, marche pas si c'est un objet littéral)
 * @returns {boolean}
 * @throws {Error} si on lui passe pas un Array en 1er argument
 */
function isInArray (ar, elt) {
  if (!Array.isArray(ar)) throw new Error('isInArray veut un tableau en 1er argument')
  return ar.indexOf(elt) !== -1
}

/**
 * Retourne true si c'est un entier (utiliser Number.isInteger si c'est dispo)
 * @param arg
 * @param {boolean} [isStringAllowed=false] Passer true pour accepter les strings comme "42"
 * @returns {boolean}
 */
function isInt (arg, isStringAllowed) {
  switch (typeof arg) {
    case 'number':
      return Math.floor(arg) === arg
    case 'string':
      return Boolean(isStringAllowed && arg && Math.floor(arg) == arg) // eslint-disable-line eqeqeq
    default:
      return false
  }
}

/**
 * Retourne true pour un entier (number) positif
 * @param arg
 * @param {boolean} [strict=false] passer true pour que 0 renvoie false
 * @param {boolean} [isStringAllowed=false] Passer true pour accepter les strings comme "42"
 * @returns {boolean}
 */
function isIntPos (arg, strict, isStringAllowed) {
  return isInt(arg, isStringAllowed) && (strict ? arg > 0 : arg >= 0)
}

/**
 * Retourne true sur un objet (donc aussi une fonction, mais pas null)
 * Piqué à lodash (https://github.com/lodash/lodash/blob/4.11.2/lodash.js#L10921)
 * @param {*} arg
 * @returns {boolean}
 */
function isObject (arg) {
  var type = typeof arg
  return !!arg && (type === 'object' || type === 'function')
}

/**
 * Retourne true pour les objets qui n'ont pas d'autre constructeur qu'object (ni null, ni fonction ni regexp ni date ni array…)
 * @param {*} arg
 * @returns {boolean}
 */
function isObjectPlain (arg) {
  return !!arg && typeof arg === 'object' && Object.prototype.toString.call(arg) === '[object Object]'
}

/**
 * Retourne true pour les RegExp
 * @param arg
 * @returns {boolean}
 */
function isRegExp (arg) {
  return !!arg && typeof arg === 'object' && Object.prototype.toString.call(arg) === '[object RegExp]'
}

/**
 * Retourne true si l'argument est une string
 * @param {*} arg
 * @returns {boolean}
 */
function isString (arg) {
  return (typeof arg === 'string')
}

/**
 * @param arg
 * @returns {boolean}
 */
function isUndefined (arg) {
  return typeof arg === 'undefined'
}

/**
 * Retourne true si l'argument est une url absolue
 * @param {*} arg
 * @returns {boolean}
 */
function isUrlAbsolute (arg) {
  return (typeof arg === 'string' && /^https?:\/\/[a-z0-9\-._]+(:[0-9]+)?(\/|$)/.test(arg))
}

/**
 * Complete la valeur avec des caractères initiaux pour atteindre la longueur voulue
 * @param {number|string} value
 * @param {string} [char=0| ] Le caractère à ajouter au début (par défaut 0 si value est un nombre, espace sinon)
 * @param {number) [nb=2] Nb de caractères finaux voulus
 * @return {string} padded value
 */
function pad (value, char, nb) {
  // check char
  if (char) {
    if (typeof char !== 'string') char = String(char)
    if (char.length !== 1) {
      console.error(new Error('char invalide ' + char))
      char = undefined
    }
  }
  // init char
  if (!char) {
    char = typeof value === 'number' ? '0' : ' '
  }
  // cast value
  if (typeof value !== 'string') value = String(value)
  // default nb
  if (!nb) nb = 2
  // padding
  while (value.length < nb) value = char + value
  return value
}

/**
 * Idem JSON.parse mais renvoie undefined en cas de plantage
 * @param jsonString La string à parser
 * @return {Object}
 */
function parse (jsonString) {
  var obj
  if (typeof jsonString === 'string') {
    try {
      obj = JSON.parse(jsonString)
    } catch (e) {
      if (!isUndefined(console) && console.error) console.error(e)
    }
  }
  return obj
}

/**
 * split une chaine et fait un trim sur chaque élément
 * @param str
 * @param {string|RegExp} [delim=/[,;\s]+/] Délimiteur, par défaut  virgule, point virgule ou n'importe quel espace (incluant tab, \n & co)
 * @returns {*}
 */
function splitAndTrim (str, delim) {
  if (typeof str === 'string') {
    if (!delim) delim = /[,;\s]+/
    // split + trim + filter au cas où il y aurait un délimiteur au début ou à la fin
    // serait plus lisible en es6 mais on peut être utilisé par qqun sans babel…
    return str.split(delim).map(function (elt) { return elt.trim() }).filter(function (elt) { return elt })
  }
  return []
}

/**
 * Idem JSON.stringify mais sans planter, en cas de ref circulaire sur une propriété on renvoie quand même les autres
 * (avec le message d'erreur de JSON.stringify sur la propriété à pb)
 * @param obj
 * @param {number} [indent]  Le nb d'espaces d'indentation
 * @returns {string}
 */
function stringify (obj, indent) {
  var buffer
  try {
    // ça peut planter en cas de ref circulaire
    buffer = indent ? JSON.stringify(obj, null, indent) : JSON.stringify(obj)
  } catch (error) {
    // on a un objet avec ref circulaire
    var key
    var value
    var pile = []
    for (key in obj) {
      // on veut le même comportement que JSON.stringify qui omet les valeurs undefined et les fct
      // et met du {} pour regexp et function
      if (hasProp(obj, key) && !isUndefined(obj[key]) && !isFunction(obj[key])) {
        value = obj[key]
        buffer = '"' + key + '":'
        try {
          buffer += indent ? JSON.stringify(value, null, indent) : JSON.stringify(value)
        } catch (error) {
          buffer += '"' + error.toString() + '"'
        }
        pile.push(buffer)
      }
    }
    var sep = ','
    buffer = '{'
    if (indent) {
      var sepSup = '\n' + ' '.repeat(indent)
      sep += sepSup
      buffer += sepSup
    }
    buffer += pile.join(sep)
    if (indent) buffer += '\n'
    buffer += '}'
  }
  return buffer
}

/**
 * Retire les accents d'une chaîne
 * @param {string} string
 * @return {string} la même désaccentuée
 */
function toAscii (string) {
  function reducer (acc, r) {
    return acc.replace(r[0], r[1])
  }
  if (typeof string === 'string') {
    // si c'est déjà sans accent on retourne
    if (/^[\w]*$/.test(string)) return string
    // faut inspecter
    var toReplace = [
      [/[áàâäãå]/g, 'a'],
      [/[ÁÀÂÄÃÅ]/g, 'A'],
      ['ç', 'c'],
      ['Ç', 'C'],
      [/[éèêë]/g, 'e'],
      [/[ÉÈÊË]/g, 'E'],
      [/[íìîï]/g, 'i'],
      [/[ÍÌÎÏ]/g, 'I'],
      ['ñ', 'n'],
      ['Ñ', 'N'],
      [/[óòôöõ]/g, 'o'],
      [/[ÓÒÔÖÕ]/g, 'O'],
      [/[úùûü]/g, 'u'],
      [/[ÚÙÛÜ]/g, 'U'],
      [/[ýÿ]/g, 'y'],
      [/[ÝŸ]/g, 'Y'],
      ['æ', 'ae'],
      ['Æ', 'AE'],
      ['œ', 'oe'],
      ['Œ', 'OE']
    ]
    return toReplace.reduce(reducer, string)
  }
  console.error(new TypeError('not a string'), string)
  return ''
}

/**
 * Quasi alias de Math.round, cast en entier mais retourne NaN pour tout ce qui
 * ne ressemble pas à un nombre (chaine vide, boolean, null) là ou round retourne 0 (ou 1 pour true)
 * @param arg
 * @returns {number}
 */
function toInt (arg) {
  switch (typeof arg) {
    case 'number':
      return Math.round(arg)
    case 'string':
      if (arg === '') return NaN
      else return Math.round(arg)
    default:
      return NaN
  }
}

/**
 * Notre module pour toutes nos fonctions génériques
 * (cf aussi les extensions sesajstools/http/xhr, sesajstools/dom, etc.)
 * @module sesajstools
 */
module.exports = {
  countSlash: countSlash,
  escapeForHtml: escapeForHtml,
  formatDate: formatDate,
  getToken: getToken,
  hasProp: hasProp,
  isArray: isArray,
  isArrayEmpty: isArrayEmpty,
  isArrayNotEmpty: isArrayNotEmpty,
  isDate: isDate,
  isError: isError,
  isFunction: isFunction,
  isInArray: isInArray,
  isInt: isInt,
  isIntPos: isIntPos,
  isObject: isObject,
  isObjectPlain: isObjectPlain,
  isRegExp: isRegExp,
  isString: isString,
  isUndefined: isUndefined,
  isUrlAbsolute: isUrlAbsolute,
  pad: pad,
  parse: parse,
  splitAndTrim: splitAndTrim,
  stringify: stringify,
  toAscii: toAscii,
  toInt: toInt
}


/***/ }),

/***/ "./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/utils/dump.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/utils/dump.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * This file is part of SesaJsTools.
 *   Copyright 2014-2015, Association Sésamath
 *
 * SesaJsTools is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License version 3
 * as published by the Free Software Foundation.
 *
 * SesaJsTools is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with SesaJsTools (LICENCE.txt).
 * @see http://www.gnu.org/licenses/agpl.txt
 *
 *
 * Ce fichier fait partie de l'application Sésathèque, créée par l'association Sésamath.
 *
 * Sésathèque est un logiciel libre ; vous pouvez le redistribuer ou le modifier suivant
 * les termes de la GNU Affero General Public License version 3 telle que publiée par la
 * Free Software Foundation.
 * Sésathèque est distribué dans l'espoir qu'il sera utile, mais SANS AUCUNE GARANTIE,
 * sans même la garantie tacite de QUALITÉ MARCHANDE ou d'ADÉQUATION à UN BUT PARTICULIER.
 * Consultez la GNU Affero General Public License pour plus de détails.
 * Vous devez avoir reçu une copie de la GNU General Public License en même temps que Sésathèque
 * (cf LICENCE.txt et http://vvlibri.org/fr/Analyse/gnu-affero-general-public-license-v3-analyse
 * pour une explication en français)
 */



var tools = __webpack_require__(/*! ../index */ "./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/index.js")
var hasProp = tools.hasProp

/**
 * dump un objet de manière plus complète qu'un stringify
 * @param obj
 * @param indent
 * @returns {*}
 */
module.exports = function dump (obj, indent) {
  // on traite déjà null
  if (obj === null) return 'null'
  // puis les types natifs basiques
  var type = typeof obj
  switch (type) {
    case 'undefined':
      return obj
    case 'number':
    case 'boolean':
      return String(obj)
    case 'string':
      return '"' + obj.replace('"', '\\"') + '"'
    case 'symbol':
      return '[Symbol ' + obj.toString() + ']'

    default:
      if (!indent) indent = 0
      // decalage de base
      var prefix = (' ').repeat(indent)
      indent += 2
      var innerPrefix = prefix + '  '
      var pile = []
      var buffer
      // object et symbol
      // on regarde d'abord si on a une méthode toSource toute prête qui existe sur cet objet
      // (sauf pour les date qui posent pb sous node)
      if (tools.isDate(obj)) {
        return JSON.stringify(obj)
      } else if (tools.isArray(obj)) {
        buffer = '[\n'
        obj.forEach(function (elt, index) {
          buffer += innerPrefix + dump(elt, indent) + (index === obj.length - 1 ? '\n' : ',\n')
        })
        if (obj.length) buffer += prefix + ']'
        else buffer += ']'
        return buffer
      } else if (tools.isRegExp(obj) || tools.isFunction(obj)) {
        // dans un navigateur toSource existe pour eux, mais pas dans node
        return (typeof obj.toSource === 'function') ? obj.toSource() : obj.toString()
      } else if (tools.isObject(obj)) {
        var nbp = 0
        for (var p in obj) {
          if (hasProp(obj, p)) {
            nbp++
            // pour détecter les refs circulaires, on regarde si JSON.stringify plante,
            // pas génial mais évite de lancer une récursion infinie, à pas si cher (et dump est vraiment rarement utilisé en prod)
            try {
              JSON.stringify(obj[p])
              pile.push(p + ': ' + dump(obj[p], indent))
            } catch (error) {
              pile.push(p + ': "' + error.toString().replace('"', '\\"') + '"')
            }
          }
        }
        if (nbp) return '{\n' + innerPrefix + pile.join(',\n' + innerPrefix) + '\n' + prefix + '}'
        else if (tools.isObjectPlain(obj)) return prefix + '{}'
        else return prefix + obj.toString()
      } else {
        console.error('dump est tombé sur un truc qui ne ressemble à rien de connu', obj)
        return tools.stringify(obj, 2)
      }
  }
}


/***/ }),

/***/ "./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/utils/log.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/utils/log.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * This file is part of Sesatheque.
 *   Copyright 2014-2015, Association Sésamath
 *
 * Sesatheque is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License version 3
 * as published by the Free Software Foundation.
 *
 * Sesatheque is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Sesatheque (LICENCE.txt).
 * @see http://www.gnu.org/licenses/agpl.txt
 *
 *
 * Ce fichier fait partie de l'application Sésathèque, créée par l'association Sésamath.
 *
 * Sésathèque est un logiciel libre ; vous pouvez le redistribuer ou le modifier suivant
 * les termes de la GNU Affero General Public License version 3 telle que publiée par la
 * Free Software Foundation.
 * Sésathèque est distribué dans l'espoir qu'il sera utile, mais SANS AUCUNE GARANTIE
 * sans même la garantie tacite de QUALITÉ MARCHANDE ou d'ADÉQUATION à UN BUT PARTICULIER.
 * Consultez la GNU Affero General Public License pour plus de détails.
 * Vous devez avoir reçu une copie de la GNU General Public License en même temps que Sésathèque
 * (cf LICENCE.txt et http://vvlibri.org/fr/Analyse/gnu-affero-general-public-license-v3-analyse
 * pour une explication en français)
 */


var dump = __webpack_require__(/*! ./dump */ "./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/utils/dump.js")
var tools = __webpack_require__(/*! ../index */ "./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/index.js")
var formatDate = tools.formatDate
var hasProp = tools.hasProp

// attention, on duplique plus bas pour l'export
var levels = {
  debug: 0,
  info: 1,
  notice: 1,
  warn: 2,
  warning: 2,
  error: 3,
  alert: 4,
  critical: 4
}
var prefixes = [
  '[debug]',
  '[info]',
  '[warning]',
  '[error]',
  '[CRITICAL]'
]
var loggers = [
  console.info || console.log, // 0 => debug
  console.log, // 1 => info|notice
  console.warn || console.error || console.log, // 2 => warning
  console.error || console.log, // 3 => error
  console.error || console.log // 4 => critical|alert
]

// valeurs par défaut
/**
 * Niveau minimum requis pour affichage (un niveau 2 affiche warning, error et critical)
 * @private
 * @type {number}
 */
var logLevel = levels.info
// on peut tourner sous node comme dans un navigateur
var isNode = typeof process !== 'undefined' && process.env
var isCluster = isNode && hasProp(process.env, 'NODE_APP_INSTANCE')
/**
 * Flag pour savoir s'il faut ajouter la date en préfixe (false par défaut dans un navigateur et true ailleurs)
 * @private
 * @type {boolean}
 */
var hasDatePrefix = isNode && !isCluster // en mode cluster c'est pm2 qui met le préfixe de date
var datePrefix = '[%O]'

// idem pour le process
var hasProcessPrefix = isCluster
// NODE_APP_INSTANCE est une string, donc '0' ne sera pas falsy
var processPrefix = (isCluster && process.env.NODE_APP_INSTANCE) || 'N/A'

/**
 * Écrit en console en ajoutant les préfixes
 * @param {Array} args arguments d'une autre fct (pseudo Array)
 * @param {number} level
 * @private
 */
function _log (args, level) {
  try {
    var logger = loggers[level] || console.log
    var prefix = ''
    // date en 1er
    if (hasDatePrefix) prefix = formatDate(datePrefix)
    // puis processId
    if (hasProcessPrefix) {
      if (prefix) prefix += ' '
      prefix += '[' + processPrefix + ']'
    }
    // puis logLevel
    if (prefix) prefix += ' '
    prefix += prefixes[level]
    // avec le 1er argument sur la même ligne, mais on râle si y’en a pas (pour avoir la trace et retrouver l'appelant)
    if (args.length < 1) args = [Error('fonction de log appelée sans contenu')]
    logger(prefix, args[0])
    // puis les autres sans préfixe
    if (args.length > 1) for (var i = 1; i < args.length; i++) logger(args[i])
  } catch (e) {
    // rien, fallait un environnement décent avec console...
  }
}

/**
 * Un console.log qui plante pas sur les anciens IE (ou d'autres navigateurs qui n'auraient pas de console.log)
 * @param {...*} arguments Nombre variable d'arguments, chacun sera passé à console.log ou console.error si c'est une erreur
 * @service sesajstools/utils/log
 */
function log () {
  if (logLevel < levels.warning) {
    _log(arguments, levels.info)
  }
}
// les logger des ≠ niveaux
log.debug = function debug () {
  if (logLevel < levels.info) {
    _log(arguments, levels.debug)
  }
}
log.info = function info () {
  if (logLevel < levels.warning) {
    _log(arguments, levels.info)
  }
}
log.warn = function warn () {
  if (logLevel < levels.error) {
    _log(arguments, levels.warning)
  }
}
log.ifError = function error () {
  if (error && logLevel < levels.critical) {
    _log(arguments, levels.error)
  }
}
log.error = function error () {
  if (logLevel < levels.critical) {
    _log(arguments, levels.error)
  }
}
log.critical = function critical () {
  _log(arguments, levels.critical)
}

/**
 * Passe logLevel au niveau error (désactive donc seulement les infos et warnings…)
 * Pour comptatibilité ascendante, à remplacer par log.setLevel(log.levels.error)
 * @deprecated
 */
log.disable = function disable () {
  logLevel = levels.error
}
/**
 * Supprime le préfixe de date
 */
log.disableDatePrefix = function disableDatePrefix () {
  hasDatePrefix = false
}
/**
 * Supprime le préfixe de process
 */
log.disableProcessPrefix = function disableProcessPrefix () {
  hasProcessPrefix = false
}
/**
 * Dump un objet en console si le niveau de log est <= à celui indiqué
 * @param {string} message affiché avant le dump
 * @param {*} objToDump peut être n'importe quoi
 * @param {object} [options]
 * @param {string|number} [options.max=1000] le nb max de caractères affichés du dump
 * @param {string|number} [options.level=debug] le niveau d'affichage souhaité
 */
log.dump = function (message, objToDump, options) {
  if (typeof options !== 'object') options = {}
  var level = options.level || levels.debug
  if (typeof level === 'string') level = levels[level] || levels.debug
  var dumped = dump(objToDump)
  var max = options.max || 1000
  if (dumped.length > max) dumped = dumped.substr(0, max) + '…'
  if (logLevel <= level) _log([message, dumped], level)
}
/**
 * Passe logLevel au niveau info (qui le rend plus bavard)
 * Pour comptatibilité ascendante, à remplacer par log.setLevel(log.levels.info)
 * @deprecated
 */
log.enable = function enable () {
  logLevel = levels.info
}
/**
 * Active le préfixe de date
 */
log.enableDatePrefix = function enableDatePrefix () {
  hasDatePrefix = true
}
/**
 * Active le préfixe de process
 */
log.enableProcessPrefix = function enableProcessPrefix () {
  if (typeof process === 'undefined') console.error('process not available')
  else hasProcessPrefix = true
}
/**
 * Modifie le préfixe de date (cf formats gérés par formatDate)
 * @param prefix
 */
log.setDatePrefix = function setDatePrefix (prefix) {
  if (typeof prefix === 'string') datePrefix = prefix
  else log.error(new Error('Le préfixe de log doit être une string'))
}
/**
 * Modifie le niveau de log
 * @param {number|string} level
 */
log.setLogLevel = function setLogLevel (level) {
  switch (level) {
    case 0:
    case '0':
    case 'debug':
      logLevel = levels.debug
      break
    case 1:
    case '1':
    case 'info':
    case 'notice':
      logLevel = levels.notice
      break
    case 2:
    case '2':
    case 'warn':
    case 'warning':
      logLevel = levels.warning
      break
    case 3:
    case '3':
    case 'err':
    case 'error':
      logLevel = levels.error
      break
    case 4:
    case '4':
    case 'alert':
    case 'crit':
    case 'critical':
      logLevel = levels.critical
      break
    default:
      log.error('niveau d’erreur ' + level)
  }
}
// et on ajoute les levels, mais sans ref pour empêcher de modifier nos constantes locale de l'extérieur
log.levels = {
  debug: 0,
  info: 1,
  notice: 1,
  warn: 2,
  warning: 2,
  error: 3,
  alert: 4,
  critical: 4
}
// ce serait plus élégant de cloner (quoi que, en es5 ça reste moche) mais ça empêche l'autocompletion

module.exports = log

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../.registry.npmjs.org/process/0.11.10/node_modules/process/browser.js */ "./node_modules/.registry.npmjs.org/process/0.11.10/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/a-function.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/a-function.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/a-possible-prototype.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/a-possible-prototype.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/add-to-unscopables.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/add-to-unscopables.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-create.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  hide(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/advance-string-index.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/advance-string-index.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-instance.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-instance.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-for-each.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-for-each.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-includes.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-includes.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-iteration.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-iteration.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-method-has-species-support.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-method-has-species-support.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  return !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-species-create.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-species-create.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/bind-context.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/bind-context.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof-raw.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof-raw.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/copy-constructor-properties.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/correct-prototype-getter.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-html.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-html.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/require-object-coercible.js");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-iterator-constructor.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-property-descriptor.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-property-descriptor.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-property.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-property.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/define-iterator.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/define-iterator.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-to-string-tag.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/define-well-known-symbol.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/define-well-known-symbol.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/wrapped-well-known-symbol.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/descriptors.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/descriptors.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/document-create-element.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/document-create-element.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/dom-iterables.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/dom-iterables.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/enum-bug-keys.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/enum-bug-keys.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-exec.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/forced-string-html-method.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/forced-string-html-method.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/forced-string-trim-method.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/forced-string-trim-method.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/function-to-string.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/function-to-string.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/get-built-in.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/get-built-in.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/get-iterator-method.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/get-iterator-method.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/4.39.2_webpack@4.39.2/node_modules/webpack/buildin/global.js */ "./node_modules/.registry.npmjs.org/webpack/4.39.2_webpack@4.39.2/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hidden-keys.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hidden-keys.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/host-report-errors.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/host-report-errors.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/html.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/html.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/ie8-dom-define.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/ie8-dom-define.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/indexed-object.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/indexed-object.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/inherit-if-required.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/inherit-if-required.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/internal-state.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/internal-state.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-array-iterator-method.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-array-iterator-method.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-array.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-array.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-forced.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-forced.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-pure.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-pure.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-regexp.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-regexp.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterate.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterate.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  while (!(step = iterator.next()).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterators-core.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterators-core.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-prototype-of.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterators.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterators.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/math-sign.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/math-sign.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `Math.sign` method implementation
// https://tc39.github.io/ecma262/#sec-math.sign
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/microtask.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/microtask.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof-raw.js");
var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/task.js").set;
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/user-agent.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/native-promise-constructor.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/native-promise-constructor.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/native-symbol.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/native-symbol.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/native-weak-map.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/native-weak-map.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/new-promise-capability.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/new-promise-capability.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/not-a-regexp.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/not-a-regexp.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-create.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-create.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-properties.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-properties.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-names.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-prototype-of.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-keys-internal.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-keys-internal.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-keys.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-keys.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-property-is-enumerable.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-set-prototype-of.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-to-string.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-to-string.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/own-keys.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/own-keys.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/parse-float.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/parse-float.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/whitespaces.js");

var nativeParseFloat = global.parseFloat;
var FORCED = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = nativeParseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : nativeParseFloat;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/parse-int.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/parse-int.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/whitespaces.js");

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/path.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/path.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/perform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/perform.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/promise-resolve.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/promise-resolve.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine-all.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine-all.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-exec-abstract.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-exec.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-exec.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-flags.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-flags.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/require-object-coercible.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/require-object-coercible.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/same-value.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/same-value.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-global.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-global.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-species.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-species.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-to-string-tag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-to-string-tag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared-key.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared-key.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-global.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.2.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/sloppy-array-method.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/sloppy-array-method.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/species-constructor.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/species-constructor.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-multibyte.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-multibyte.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-repeat.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-repeat.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-trim.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-trim.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/task.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/task.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof-raw.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/document-create-element.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-absolute-index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-absolute-index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-indexed-object.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-indexed-object.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-integer.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-integer.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-length.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-length.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-object.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-object.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-primitive.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-primitive.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/uid.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/uid.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/user-agent.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/user-agent.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/whitespaces.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/whitespaces.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/wrapped-well-known-symbol.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/wrapped-well-known-symbol.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.concat.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.concat.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.filter.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.filter.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-method-has-species-support.js");

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.includes.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.includes.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.index-of.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.index-of.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-includes.js").indexOf;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/sloppy-array-method.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.iterator.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.iterator.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.math.sign.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.math.sign.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var sign = __webpack_require__(/*! ../internals/math-sign */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/math-sign.js");

// `Math.sign` method
// https://tc39.github.io/ecma262/#sec-math.sign
$({ target: 'Math', stat: true }, {
  sign: sign
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.number.constructor.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.number.constructor.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.object.to-string.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.object.to-string.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-to-string.js");

var ObjectPrototype = Object.prototype;

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (toString !== ObjectPrototype.toString) {
  redefine(ObjectPrototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/parse-float.js");

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-int.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-int.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.promise.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.promise.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/path.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-instance.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/classof-raw.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/perform.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/user-agent.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = global.fetch;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  // correct subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var empty = function () { /* empty */ };
  var FakePromise = (promise.constructor = {})[SPECIES] = function (exec) {
    exec(empty, empty);
  };
  // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !((IS_NODE || typeof PromiseRejectionEvent == 'function')
    && (!IS_PURE || promise['finally'])
    && promise.then(empty) instanceof FakePromise
    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0
    && userAgent.indexOf('Chrome/66') === -1);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = path[PROMISE];

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.regexp.constructor.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.regexp.constructor.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-forced.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/inherit-if-required.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js").f;
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-names.js").f;
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-regexp.js");
var getFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-flags.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-species.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    return !thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined ? pattern
      : inheritIfRequired(CORRECT_NEW
        ? new NativeRegExp(patternIsRegExp && !flagsAreUndefined ? pattern.source : pattern, flags)
        : NativeRegExp((patternIsRegExp = pattern instanceof RegExpWrapper)
          ? pattern.source
          : pattern, patternIsRegExp && flagsAreUndefined ? getFlags.call(pattern) : flags)
      , thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.regexp.to-string.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.regexp.to-string.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.bold.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.bold.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/forced-string-html-method */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/forced-string-html-method.js");

// `String.prototype.bold` method
// https://tc39.github.io/ecma262/#sec-string.prototype.bold
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('bold') }, {
  bold: function bold() {
    return createHTML(this, 'b', '', '');
  }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.includes.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.includes.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.italics.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.italics.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/forced-string-html-method */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/forced-string-html-method.js");

// `String.prototype.italics` method
// https://tc39.github.io/ecma262/#sec-string.prototype.italics
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('italics') }, {
  italics: function italics() {
    return createHTML(this, 'i', '', '');
  }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.iterator.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.iterator.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.repeat.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.repeat.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-repeat.js");

// `String.prototype.repeat` method
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.replace.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.replace.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.search.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.search.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/same-value.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.split.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.split.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.trim.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.trim.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/forced-string-trim-method */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/forced-string-trim-method.js");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.symbol.description.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.symbol.description.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.symbol.iterator.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.symbol.iterator.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.symbol.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.symbol.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/native-symbol.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/object-property-is-enumerable.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/wrapped-well-known-symbol.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var JSON = global.JSON;
var nativeJSONStringify = JSON && JSON.stringify;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
JSON && $({ target: 'JSON', stat: true, forced: !NATIVE_SYMBOL || fails(function () {
  var symbol = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  return nativeJSONStringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || nativeJSONStringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || nativeJSONStringify(Object(symbol)) != '{}';
}) }, {
  stringify: function stringify(it) {
    var args = [it];
    var index = 1;
    var replacer, $replacer;
    while (arguments.length > index) args.push(arguments[index++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return nativeJSONStringify.apply(JSON, args);
  }
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/array-for-each.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    hide(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.iterator.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/hide.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      hide(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) hide(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        hide(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/process/0.11.10/node_modules/process/browser.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/process/0.11.10/node_modules/process/browser.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/webpack/4.39.2_webpack@4.39.2/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./sources_js/actions/actionAncetre.js":
/*!*********************************************!*\
  !*** ./sources_js/actions/actionAncetre.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-int.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
module.exports = ActionAncetre;
/**
 * Action ancetre de toutes les actions de la figure
 * @constructor
 * @param {iep.iepDoc} doc : le document contenant les objets
 * @param {string} tempo : Le tempo à attendre à la fin de l'action en dixièmes de seconde
 * avant de passer à l'action suivante. Si null on passe directement à l'action suivante.
 */

function ActionAncetre(doc, tempo) {
  if (arguments.length === 0) return;
  this.doc = doc;
  this.tempo = tempo === null ? null : parseInt(tempo) * 100; // tempo est en dizièmes de seconde

  this.isReady = false; // Sera mis à true une fois qu'on est sûr que l'élément est bien chargé et prêt.
}
/**
 * Fonction renvoyant lorsque l'action a été chargé et prête.
 * Est redéfini pour les actions dont le chargement est asynchrone : images et actions
 * d'écriture de texte nécessitant l'utilisation du LaTeX.
 */


ActionAncetre.prototype.setReady = function () {
  this.isReady = true;
};
/**
 * Fonction qui n'aura une action que pour les actions de création d'objet et créera l'élément graphique
 * du DOM associé Srea redéfini pour les actions de création d'objet
 */


ActionAncetre.prototype.creegElement = function () {};
/**
 * Fonction renvoyant true seulement si l'action a une action visible sur la figure.
 * Lors de l'appel de iepDoc.ajouteAction, chaque action se voit attribuer un membre indice
 * qui est son indice dans la liste des actions créées..
 * Renvoie true par défaut.
 * @returns {boolean}
 */


ActionAncetre.prototype.actionVisible = function () {
  return true;
};

/***/ }),

/***/ "./sources_js/actions/actionCoucherCompas.js":
/*!***************************************************!*\
  !*** ./sources_js/actions/actionCoucherCompas.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionCoucherCompas;
/**
 * Action couchant le compas.
 * @extends ActionAncetre
 * @constructor
 * @param {iepDoc} doc
 */

function ActionCoucherCompas(doc, tempo) {
  ActionAncetre.call(this, doc, tempo);
}

ActionCoucherCompas.prototype = new ActionAncetre();
/**
 * Fonction couchant le compas et le montrant si immediat est false
 * @param {boolean} immediat
 */

ActionCoucherCompas.prototype.execute = function (immediat) {
  var compas = this.doc.compas;
  var compasLeve = this.doc.compasLeve;

  if (compas.leve) {
    compasLeve.montre(false);
    compas.setPosition(compasLeve.x, compasLeve.y, compasLeve.angle);
  }

  if (!immediat && compas.visible) compas.montre(true);
  compas.leve = false;
  if (!immediat) this.doc.actionSuivante(immediat);
};
/** @inheritDoc */


ActionCoucherCompas.prototype.actionVisible = function () {
  var visible = this.doc.getInstrumentVisibility(this.doc.compas.compas, this.indice - 1);
  if (!visible) return false;else return this.doc.getCompasStatus(this.indice - 1) === 'leve';
};

/***/ }),

/***/ "./sources_js/actions/actionCreation.js":
/*!**********************************************!*\
  !*** ./sources_js/actions/actionCreation.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

var Texte = __webpack_require__(/*! ../objets/texte */ "./sources_js/objets/texte.js");

module.exports = ActionCreation;
/**
 * Action de création de l'objet objet d'id id dans le document doc
 * @extends ActionAncetre
 * @constructor
 * @param {type} doc
 * @param {type} id
 * @param {type} objet
 */

function ActionCreation(doc, id, objet, tempo, vitesse) {
  ActionAncetre.call(this, doc, tempo);
  this.id = id;
  var ob = this.doc.getElement(id, objet.objet);
  this.objetRemplace = ob === null ? null : ob;
  this.objet = objet; // Ci-dessous un parseFloat car dans certains scripts j'ai vu des sens = "-0.3"

  if (arguments.length >= 5) this.vitesse = vitesse != null ? Math.abs(parseFloat(vitesse)) : 8;else this.vitesse = 8;
  if (this.objetRemplace !== null) this.doc.addElement(this.objet);else this.doc.pushElement(this.objet);
}

ActionCreation.prototype = new ActionAncetre();
/**
 * Fonction lançant l'animation de création de l'objet objet si la création de l'objet nécessite une animation
 * et si immediat est à false et sinon affichant immédiatement l'objet
 * @param {boolean} immediat
 */

ActionCreation.prototype.execute = function (immediat) {
  // Pour un texte on a mémorisé sa position initiale car il peut avoir été translaté.
  // et quand on relance la figure il doit remprendre sa place initiale
  if (this.objet instanceof Texte) {
    this.objet.x = this.objet.xinit;
    this.objet.y = this.objet.yinit;
  } // this.doc.svg.appendChild(this.objet.g);


  if (this.objetRemplace !== null) {
    this.objetRemplace.montre(false); // this.doc.svg.replaceChild(this.objet.g,this.objetRemplace.g);
  }

  if (this.objet.creationAnimee() && !immediat) {
    this.objet.lanceAnimation(this.vitesse);
  } else {
    this.objet.montre(true);
    if (immediat) this.objet.finAction();else this.doc.actionSuivante(immediat);
  }
};
/**
 * Fonction créant l'élément graphique du DOM associé à une action de création d'objet
 * L'objet est calculé par positionne() et caché
 */


ActionCreation.prototype.creegElement = function () {
  var doc = this.doc;
  var objet = this.objet;
  objet.creeg();
  objet.positionne();
  objet.g.setAttribute('visibility', 'hidden');
  doc.svg.appendChild(objet.g);
};
/** @inheritDoc */


ActionCreation.prototype.actionVisible = function () {
  return !(this.objet instanceof Texte);
};

/***/ }),

/***/ "./sources_js/actions/actionEcarterCompas.js":
/*!***************************************************!*\
  !*** ./sources_js/actions/actionEcarterCompas.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionEcarterCompas;
/**
 * Écarte le compas
 * @extends iep.actionAncetre
 * @constructor
 * @param doc
 * @param ecartement
 * @param tempo
 * @param ec10
 */

function ActionEcarterCompas(doc, ecartement, tempo, ec10) {
  ActionAncetre.call(this, doc, tempo);
  this.ecartement = ecartement;
  this.ec10 = ec10 === null ? 16 : parseFloat(ec10); // this.doc.compas.ecart = this.ecartement;
}

ActionEcarterCompas.prototype = new ActionAncetre();
/**
 * Fonction lançant l'animation d'écartement du compas sauf si immediat est true
 * @param {boolean} immediat
 */

ActionEcarterCompas.prototype.execute = function (immediat) {
  if (!immediat) this.doc.compas.lanceAnimationEcartement(this.ecartement, this.ec10);else {
    this.doc.compas.ecart = this.ecartement;
    this.doc.compas.positionne();
  }
};
/** @inheritDoc */


ActionEcarterCompas.prototype.actionVisible = function () {
  return this.doc.getInstrumentVisibility(this.doc.compas, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionEcrireTexte.js":
/*!*************************************************!*\
  !*** ./sources_js/actions/actionEcrireTexte.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.split.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

var mathjaxLoader = __webpack_require__(/*! ../mathjaxLoader */ "./sources_js/mathjaxLoader.js");

module.exports = ActionEcrireTexte;
/**
 * Action d'écriture d'un texte. Le texte doit avoir été créé auparavant.
 * @constructor
 * @extends iep.actionAncetre
 * @param {iepDoc} doc            le document propriétaire
 * @param {string} id             l'id du texte sur lequel écrire
 * @param {string} couleur        la couleur du texte
 * @param {string} taille         la taille du texte
 * @param {string} texte          Le texte à afficher
 * @param {string} marge          la marge éventuelle
 * @param {string} margeGauche    la marge gauche éventuelle
 * @param {string} margeDroite    la marge droite éventuelle
 * @param {string} margeHaut      la marge haute éventuelle
 * @param {string} margeBas       la marge basse éventuelle
 * @param {string} tempo          le tempo
 */

function ActionEcrireTexte(doc, id, couleur, taille, texte, style, couleurFond, opaciteFond, couleurCadre, epaisseurCadre, marge, margeGauche, margeDroite, margeHaut, margeBas, tempo) {
  ActionAncetre.call(this, doc, tempo);
  this.txt = this.doc.getElement(id, 'texte');
  this.id = id;
  this.couleur = couleur; // On remplace dans la taille les lettres O mises par les étourdis à la place de 0

  this.taille = taille == null ? '20' : taille.replace(/O/g, '0');
  this.texte = kernel.remplaceAccentsHtml(kernel.remplaceBalises(kernel.remplaceCarSpe(texte)));
  this.style = style === null ? 'texte' : style;
  this.couleurFond = couleurFond;
  this.opaciteFond = opaciteFond == null ? '0.6' : parseFloat(opaciteFond) / 100; // Modification version 5.0.2. Causait des problèmes avec explorer
  // this.couleurCadre = (couleurCadre == null) ? couleur : couleurCadre;

  this.couleurCadre = couleurCadre;
  if (epaisseurCadre !== null && couleurCadre === null) this.couleurCadre = couleur; //

  this.epaisseurCadre = epaisseurCadre != null ? epaisseurCadre : couleurCadre == null ? 0 : 1;
  this.marge = marge == null ? 0 : parseFloat(marge);
  this.margeGauche = margeGauche == null ? 0 : parseFloat(margeGauche);
  this.margeDroite = margeDroite == null ? 0 : parseFloat(margeDroite);
  this.margeHaut = margeHaut == null ? 0 : parseFloat(margeHaut);
  this.margeBas = margeBas == null ? 0 : parseFloat(margeBas);
  this.estLatex = this.estAffichageLatex();
  this.texte = this.traduitCaracteresGrecs(this.texte);

  if (!this.estLatex) {
    this.texte = this.texte.replace(/\*/g, '×');

    if (kernel.necessiteLatex(texte)) {
      this.texte = '$' + this.traiteMaths(this.texte) + '$';
      this.estLatex = true;
    } else this.texte = kernel.traiteAccents(this.texte);
  }
}

ActionEcrireTexte.prototype = new ActionAncetre();
/**
 * Action écrivant le contenu du texte sur la figure
 * @param {Boolean} immediat
 * @returns {undefined}
 */

ActionEcrireTexte.prototype.execute = function (immediat) {
  if (this.txt != null) {
    // Pour éviter les erreurs des auteurs
    this.angle = 0; // Car on peut dans la version js faire toruner un texte

    var txt = this.txt;
    txt.couleur = this.couleur;
    txt.taille = this.taille;
    txt.texte = this.texte;
    txt.couleurFond = this.couleurFond;
    txt.couleurCadre = this.couleurCadre;
    txt.epaisseurCadre = this.epaisseurCadre;
    txt.updateg(this.g);
    txt.positionne();
  }

  if (!immediat) this.doc.actionSuivante(immediat);
};
/**
 * Fonction renvoyant true si l'affichage de texte utilise le LaTeX de façon délibérée
 * en encadrant alors le code LaTeX par deux caractères $
 * A priori ne sera utilisé que pour une prochaine version
 * @returns {boolean}
 */


ActionEcrireTexte.prototype.estAffichageLatex = function () {
  return this.texte.charAt(0) === '$' && this.texte.charAt(this.texte.length - 1) === '$';
};
/**
 * Fonction remplaçant les codes du type £...£ représentant des caractères grecs
 * par les caractères UTF8 correspondants
 * @param {string} ch
 * @returns {string}
 */


ActionEcrireTexte.prototype.traduitCaracteresGrecs = function (ch) {
  var i, search;
  var ta = kernel.caracteresGrecs;

  if (ch.indexOf('£') !== -1) {
    for (i = 0; i < ta.length; i++) {
      search = '£' + ta[i] + '£';
      if (ch.indexOf(search) !== -1) ch = ch.replace(new RegExp(search, 'g'), kernel.caracteresGrecsUtf8[i]);
    }
  }

  return ch;
};
/**
 * Fonction traitant la chaîne ch pour la transcrire en code LaTeX
 * Renvoie la chaîne LaTeX correspondante.
 * Si la chaîne contient des balises <br>, un tableau LaTeX est utilisé pour rendre le contenu
 * @param {string} ch : la chaîne à traiter
 * @returns {string} la chaîne LaTeX correpondante une fois ch traduite
 */


ActionEcrireTexte.prototype.traiteMaths = function (ch) {
  var i;
  var ch2 = ch;
  var bStyletTexte = this.style === 'texte';
  var a = ch2.split(new RegExp('<br>|</br>', 'gi')); // On recherche les codes <br> et on remplace les lignes par une matrice

  if (a.length <= 1) return kernel.traiteAccents(kernel.getMaths(ch, bStyletTexte)); // True pour mode texte par défaut

  var res = '\\begin{array}{l}';

  for (i = 0; i < a.length; i++) {
    if (i !== 0) res += '\\\\';
    res += kernel.traiteAccents(kernel.getMaths(a[i], bStyletTexte)); // true pour mode texte par défaut
  }

  res += '\\end{array}';
  return res;
};
/**
 * Fonction appelée lors de l'appel de iepDoc.creeActions()
 * Si l'écriture du texte ne nécessite pas l'emploi du LaTeX, on crée l'élément grapique qui sera
 * démasqué quand l'action sera exécutée
 * Sinon, on charge mathjax si besoin et on crée un div provisoire dans la figure
 * dans lequel on met la formule et on demande à MathJax via sa pile d'appels
 * de traiter ce div pour le remplacer par un svg
 * Via la pile d'appel de MathJax, setReady sera appelée
 * une fois le svg représentant la figure prêt . Cette fonction de callback appelera ensuite
 * iepDoc.waitForReadyState qui est la fonction attendant que tout les objets asynchrones soient prêts
 * (images et affichages de texte utilisant le LaTeX)
 */


ActionEcrireTexte.prototype.prepare = function () {
  if (this.estLatex) {
    this.div = document.createElement('div'); // On diminue la taille pour le LaTeX eet on ne spécifie pas la taille en px
    // différence par rapport à MathGraph32

    this.div.setAttribute('style', 'top:0px;left:0px;position:absolute;font-family: "Times New Roman", Times, serif;font-size:' + String(this.taille - 2) + 'px;visibility:hidden;');
    this.div.setAttribute('id', this.id + 'iepprov');
    var ch = '$$' + this.prelatex() + this.texte.substring(1) + '$';
    this.div.appendChild(document.createTextNode(ch));
    document.body.appendChild(this.div);
    var self = this;
    mathjaxLoader().then(function () {
      /* global MathJax */
      // MathJax.Hub.Typeset(this.div);
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, self.div]);
      MathJax.Hub.Queue([function () {
        self.creegLatex();
        self.setReady();
      }]);
    }).catch(function (error) {
      console.error(Error('Mathjax n’a pas été chargé correctement, impossible d’afficher du texte en LaTeX'), error);
    });
  } else {
    this.creeg();
    this.setReady();
  }
};
/**
 * Fonction renvoyant l'en-tête à rajouter pour que, dans le cas d'utilisation du
 * LaTeX, l'affichage soit de la bonne couleur.
 */


ActionEcrireTexte.prototype.prelatex = function () {
  return '\\color{' + this.couleur + '}';
};
/**
 * Fonction appelée par prepare() qui récupère l'élement svg graphique représentant
 * la formule dans le div provisoire précédemment créé, détruit ensuite ce div provisoire
 * Rajoute les éléments graphiques correspondant à un cadre si une couleur de fond
 * et un cadre ont été demandés
 */


ActionEcrireTexte.prototype.creegLatex = function () {
  var w, h;

  try {
    var g = document.createElementNS(kernel.svgsn, 'g');
    var c1 = this.div.childNodes[1];
    if (!c1) return document.createElementNS(kernel.svgsn, 'g');
    var c2 = c1.childNodes[0];
    if (!c2) return document.createElementNS(kernel.svgsn, 'g');
    var s = c2.childNodes[0];
    if (!s) return document.createElementNS(kernel.svgsn, 'g'); // Pour gérer Chrome

    while (s.tagName === 'SPAN') {
      s = s.childNodes[0];
    } // Le test suivant est du à la compatibilité avec l'explorer


    if (s.clientWidth !== 0 && s.clientHeight !== 0) {
      w = s.clientWidth;
      h = s.clientHeight;
    } else {
      w = c2.clientWidth;
      h = c2.clientHeight;
    }

    var t = this.taille;
    if (h < t) h = t;
    /* Modifié version 5.0.2 pour assurer compatibilité avec explorer
    s.setAttribute("x","0");
    s.setAttribute("y", String(-this.taille)); // Différent de MathGraph32
    s.setAttribute("width", w+"px");
    s.setAttribute("height",h+"px");
    g.appendChild(s.parentNode.removeChild(s));
    */

    var clone = s.cloneNode(true);
    clone.setAttribute('x', '0');
    clone.setAttribute('y', String(-this.taille)); // Différent de MathGraph32

    clone.setAttribute('width', w + 'px');
    clone.setAttribute('height', h + 'px');
    g.appendChild(clone);
    document.body.removeChild(this.div);
    g.setAttribute('visibility', 'hidden'); // g.setAttribute("id",this.id);

    if (this.couleurFond !== null || this.couleurCadre !== null) {
      g.setAttribute('visibility', 'hidden');
      this.doc.svg.appendChild(g);
      this.rectAff = {};
      var epc = parseFloat(this.epaisseurCadre);
      this.rectAff.height = g.getBBox().height + 2 * epc + 4 + 2 * this.marge + this.margeHaut + this.margeBas;
      this.rectAff.width = g.getBBox().width + 2 * epc + 2 + 2 * this.marge + this.margeGauche + this.margeDroite;
      this.rectAff.x = g.getBBox().x - epc - 1 - this.marge - this.margeGauche;
      this.rectAff.y = g.getBBox().y - epc - 1 - this.marge - this.margeHaut;
      g.setAttribute('visibility', 'visible');
      this.doc.svg.removeChild(g);
      this.creeRectangle(g, this.couleurFond == null ? 'white' : this.couleurFond);
    }

    this.g = g;
  } catch (e) {
    if (this.div != null) document.body.removeChild(this.div);
    this.g = document.createElementNS(kernel.svgsn, 'g'); // Crée un g vide en cas de problème
  }
};
/**
 * Retourne l'élément graphique associé dans le cas où l'affichage n'utilise pas le LaTeX
 * Avant appel, this.text doit voir été affecté
 */


ActionEcrireTexte.prototype.creeg = function () {
  var indbalise, tspan, ch, ch2, style, txt, ind, indexp, indind, mini, bexp, tailleind, stylespan, y, sp, i, debutLigne, an;
  var dy = 0; // Le baselineshift de chaque tspan

  var inf = '<'; // Equivalent du symbole <

  var debexp = '£e(';
  var debind = '£i(';
  var g = document.createElementNS(kernel.svgsn, 'g');
  var hautlig = parseFloat(this.taille) + 2;
  var decblp = 0; // Décalage vers le bas de la ligne précédente

  var decalage = parseFloat(this.taille) * 0.4; // Décalage vers le bas ou le haut en cas d'indice ou d'exposant

  if (this.texte !== '') {
    txt = document.createElementNS(kernel.svgsn, 'text');
    txt.setAttribute('pointer-events', 'none');
    txt.setAttribute('x', 0);
    txt.setAttribute('y', 0);
    style = 'text-anchor:left;font-size:' + this.taille + 'px;' + 'fill:' + this.couleur + ';';
    txt.setAttribute('style', style); // On remplace les espaces par des espaces insécables

    ch2 = this.texte.replace(new RegExp(' ', 'g'), "\xA0"); // Affecter une longueur ne peut être efficace que pour du texte simpel sans balise

    if (this.texte.indexOf(inf) === -1 && this.texte.indexOf(debexp) === -1 && this.texte.indexOf(debind) === -1 && this.texte.indexOf('<br>') === -1) {
      txt.appendChild(document.createTextNode(ch2));
    } else {
      sp = ch2.split(/<br>/gi);
      y = -hautlig;

      for (i = 0; i < sp.length; i++) {
        debutLigne = true;
        ch = sp[i];

        while (ch !== '') {
          indbalise = ch.indexOf(inf);
          indexp = ch.indexOf(debexp);
          indind = ch.indexOf(debind);
          if (debutLigne) y += hautlig + decblp;
          if (indexp !== -1) y += decalage;

          if (indbalise === -1 && indexp === -1 && indind === -1) {
            // txt.appendChild(document.createTextNode(this.texte));
            tspan = document.createElementNS(kernel.svgsn, 'tspan');
            tspan.setAttribute('pointer-events', 'none');
            tspan.setAttribute('dy', dy);

            if (debutLigne) {
              tspan.setAttribute('x', 0);
              tspan.setAttribute('y', y);
              debutLigne = false;
            }

            dy = 0; // On est revenu au niveau 0

            tspan.appendChild(document.createTextNode(ch));
            txt.appendChild(tspan);
            break;
          } else {
            while (ch.indexOf(inf) !== -1 || ch.indexOf(debexp) !== -1 || ch.indexOf(debind) !== -1) {
              indbalise = ch.indexOf(inf);
              indexp = ch.indexOf(debexp);
              indind = ch.indexOf(debind);

              if (indbalise === -1) {
                if (indexp === -1) mini = indind;else mini = indind === -1 ? indexp : Math.min(indind, indexp);
              } else {
                if (indexp === -1) mini = indind === -1 ? indbalise : Math.min(indbalise, indind);else {
                  if (indind === -1) mini = Math.min(indbalise, indexp);else mini = Math.min(indbalise, indind, indexp);
                }
              }

              if (mini > 0) {
                // Il y a du texte avant les balises
                tspan = document.createElementNS(kernel.svgsn, 'tspan');
                tspan.setAttribute('pointer-events', 'none');
                tspan.setAttribute('dy', dy);

                if (debutLigne) {
                  tspan.setAttribute('x', 0);
                  tspan.setAttribute('y', y);
                  debutLigne = false;
                }

                dy = 0; // On est revenu au niveau 0

                tspan.appendChild(document.createTextNode(ch.substring(0, mini)));
                txt.appendChild(tspan);
                ch = ch.substring(mini);
              } else {
                if (indbalise === 0) {
                  var infoBalise = new kernel.infoBalise(false, false, false, this.couleur, '', this.taille);
                  ind = kernel.indiceFinBalise(ch);
                  if (ind === -1) kernel.traiteBalise(ch, infoBalise, txt, debutLigne, y);else kernel.traiteBalise(ch.substring(0, ind), infoBalise, txt, debutLigne, y);
                  debutLigne = false;
                  if (ind !== -1) ch = ch.substring(ind);else ch = '';
                  dy = 0; // On est revenu au niveau 0
                } else {
                  // mini est égal à 0
                  bexp = mini === indexp;
                  an = kernel.analyseExposantOuIndice(ch);
                  tspan = document.createElementNS(kernel.svgsn, 'tspan');
                  tspan.setAttribute('pointer-events', 'none');
                  tspan.setAttribute('dy', dy + 'px');

                  if (debutLigne) {
                    tspan.setAttribute('x', 0);
                    tspan.setAttribute('y', y);
                    debutLigne = false;
                  }

                  if (an.erreur) tspan.appendChild(document.createTextNode(ch));else {
                    tspan.appendChild(document.createTextNode(an.operande));
                    txt.appendChild(tspan);
                    tspan = document.createElementNS(kernel.svgsn, 'tspan');
                    tspan.setAttribute('pointer-events', 'none');
                    tspan.appendChild(document.createTextNode(an.exposant));
                    dy = decalage;
                    if (bexp) dy = -dy;else decblp = dy;
                    tspan.setAttribute('dy', dy + 'px');
                    tailleind = parseFloat(this.taille) * 0.6;
                    stylespan = 'font-size:' + tailleind + 'px;';
                    tspan.setAttribute('style', stylespan);
                    txt.appendChild(tspan);
                    dy = -dy; // Car sinon la suite sera décalée aussi en hauteur
                  }
                  ch = an.texte;
                }
              }
            }
          }
        }
      }
    }

    g.appendChild(txt);
  }

  g.setAttribute('visibility', 'hidden'); // g.setAttribute("id",this.id);

  if (this.couleurFond != null || this.couleurCadre != null) {
    g.setAttribute('visibility', 'hidden');
    this.doc.svg.appendChild(g);
    this.rectAff = {};
    var epc = parseFloat(this.epaisseurCadre);
    this.rectAff.height = g.getBBox().height + 2 * epc + 3 + 2 * this.marge + this.margeHaut + this.margeBas;
    this.rectAff.width = g.getBBox().width + 2 * epc + 2 + 2 * this.marge + this.margeGauche + this.margeDroite;
    this.rectAff.x = g.getBBox().x - epc - 1 - this.marge - this.margeGauche;
    this.rectAff.y = g.getBBox().y - epc - 1 - this.marge - this.margeHaut;
    g.setAttribute('visibility', 'visible');
    this.doc.svg.removeChild(g);
    this.creeRectangle(g, this.couleurFond == null ? 'white' : this.couleurFond);
  }

  this.g = g;
};
/**
 * Renvoie true si la chaîne ch contient des balises &lt;u\> ou \<i\>
 * @param {string} ch
 * @returns {boolean}
 */


ActionEcrireTexte.prototype.contientBalisesItaliqueOuUnderlineOuFontOuBold = function (ch) {
  return new RegExp(/<(u|b|i|font[^>]+)>/, 'gi').test(ch);
};
/**
 * Fonction appelée dans le cas où l'affihcage de texte a une couleur de fond ou doit être encadrée.
 * Elle rajoute le rectangle au g élément avant l'afficgae correspondant au texte (de faaçon à pouvoir
 * le cas échéant effacer le fond avant l'affichage du texte
 * @param {svg.g} : le svg.g élément qui contient l'affichae de texte (normal ou svg dans le cas du LaTeX
 */


ActionEcrireTexte.prototype.creeRectangle = function (g, coulFond) {
  var r = document.createElementNS(kernel.svgsn, 'rect');
  var style = 'stroke-width:' + this.epaisseurCadre + 'px;' + 'stroke:' + this.couleurCadre + ';' + 'fill:' + coulFond + ';fill-opacity:' + this.opaciteFond + ';';
  r.setAttribute('style', style);
  r.setAttribute('x', this.rectAff.x);
  r.setAttribute('y', this.rectAff.y);
  r.setAttribute('width', this.rectAff.width);
  r.setAttribute('height', this.rectAff.height);
  r.setAttribute('pointer-events', 'none');
  g.insertBefore(r, g.childNodes[0]);
};

/***/ }),

/***/ "./sources_js/actions/actionGlisser.js":
/*!*********************************************!*\
  !*** ./sources_js/actions/actionGlisser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionGlisser;
/**
 * Action faisant glisser l'équerre de la règle équerre
 * @constructor
 * @extends iep.actionAncetre
 * @param {iep.iepDoc} doc : le document propriétaire
 * @param {int} abscisseFin : l'abscisse de fin de déplacement
 * @param {string} tempo : le tempo en dixième de seconde (ou null)
 * @param {string} pix10 : le nombre de pixels de déplacement à chaque dixième de seconde
 */

function ActionGlisser(doc, abscisseFin, tempo, pix10) {
  ActionAncetre.call(this, doc, tempo);
  this.abscisseFin = parseFloat(abscisseFin);
  this.pix10 = pix10 === null ? 8 : String(Math.abs(pix10));
}

ActionGlisser.prototype = new ActionAncetre();
/**
 * Fonction lançant une animation de glissement de la règle équerre sauf si immediat est true
 * @param {type} immediat
 */

ActionGlisser.prototype.execute = function (immediat) {
  if (!immediat) this.doc.requerre.lanceAnimationGlissement(this.abscisseFin, this.pix10);else {
    this.doc.requerre.setAbs(this.abscisseFin);
    this.doc.requerre.positionne(); // this.doc.actionSuivante(immediat);
  }
};
/** @inheritDoc */


ActionGlisser.prototype.actionVisible = function () {
  return this.doc.getInstrumentVisibility(this.doc.requerre, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionLeverCompas.js":
/*!*************************************************!*\
  !*** ./sources_js/actions/actionLeverCompas.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

var CompasLeve = __webpack_require__(/*! ../instruments/compasLeve */ "./sources_js/instruments/compasLeve.js");

module.exports = ActionLeverCompas;
/**
 * Action levant le compas
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire
 */

function ActionLeverCompas(doc, tempo) {
  ActionAncetre.call(this, doc, tempo);
}

ActionLeverCompas.prototype = new ActionAncetre();
/**
 * Fonction cachant le compas normal et créant un compas couché qui est ensuite affiché
 * si le compas est visible
 * @param {string} immediat : true dans le cas d'une exécution sans passage à l'action suivante
 */

ActionLeverCompas.prototype.execute = function (immediat) {
  var compas = this.doc.compas;

  if (compas.visible) {
    compas.montre(false);
    compas.visible = true; // Car a été modifié par montre()
  }

  this.doc.compasLeve = new CompasLeve(this.doc, compas.x, compas.y, compas.angle, compas.ecart);
  if (!immediat && compas.visible) this.doc.compasLeve.montre(true);
  compas.leve = true;
  if (!immediat) this.doc.actionSuivante(immediat);
};
/** @inheritDoc */


ActionLeverCompas.prototype.actionVisible = function () {
  var visible = this.doc.getInstrumentVisibility(this.doc.compas, this.indice - 1);
  if (!visible) return false;else return this.doc.getCompasStatus(this.indice - 1) === 'couche';
};

/***/ }),

/***/ "./sources_js/actions/actionMasquer.js":
/*!*********************************************!*\
  !*** ./sources_js/actions/actionMasquer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionMasquer;
/**
 * Action masquant un objet.
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire
 * @param {iep.objetBase} objet : l'objet à masquer
 */

function ActionMasquer(doc, idel, nature, tempo) {
  ActionAncetre.call(this, doc, tempo);
  this.objet = this.doc.getElement(idel, nature);
}

ActionMasquer.prototype = new ActionAncetre();
/**
 * Fonction exécutant le masque de l'objet objet
 * @param {boolean} immediat : true en cas d'exécution immédiate sans passage
 * à l'action suivante
 */

ActionMasquer.prototype.execute = function (immediat) {
  var el = this.objet;
  if (el != null) el.montre(false);
  if (!immediat) this.doc.actionSuivante(immediat);
};
/** @inheritDoc */


ActionMasquer.prototype.actionVisible = function () {
  return this.doc.getObjectVisibility(this.objet, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionMasquerInstrument.js":
/*!*******************************************************!*\
  !*** ./sources_js/actions/actionMasquerInstrument.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionMasquerInstrument;
/**
 * Action masquant un instrument.
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire
 * @param {iep.instrumentAncetre} instrument : l'instrument à masquer
 */

function ActionMasquerInstrument(doc, instrument, tempo) {
  ActionAncetre.call(this, doc, tempo);
  this.instrument = instrument;
}

ActionMasquerInstrument.prototype = new ActionAncetre();
/**
 * Fonction exécutant l'action et masquanf l'instrument instrument
 * @param {type} immediat
 */

ActionMasquerInstrument.prototype.execute = function (immediat) {
  var compas = this.doc.compas;
  this.instrument.montre(false);
  if (compas.leve) this.doc.compasLeve.montre(false);
  if (!immediat) this.doc.actionSuivante(immediat);
};
/** @inheritDoc */


ActionMasquerInstrument.prototype.actionVisible = function () {
  return this.doc.getInstrumentVisibility(this.instrument, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionModifierLongueur.js":
/*!******************************************************!*\
  !*** ./sources_js/actions/actionModifierLongueur.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionModifierLongueur;
/*
 * Action modifiant la longueur d'un instrument.
 * Pour le moment seulement implémenté pour la règle.
 */

/**
 * Action modifiant la longueur d'un instrument.
 * Pour le moment seulement implémenté pour la règle.
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} Le document propriétaire
 * @param {iep.instrumentAncetre} instrument : L'istrument sur lequel a lieu l'action
 * @param {string} longueur : La nouvelle longueur
 * @param {string} tempo : Le tempo de temporisation
 */

function ActionModifierLongueur(doc, instrument, longueur, tempo) {
  ActionAncetre.call(this, doc, tempo); // null car action immédiate

  this.instrument = instrument;
  this.longueur = longueur;
}

ActionModifierLongueur.prototype = new ActionAncetre();
/**
 * Fonction exécutant l'action et modifiant la longueur de l'instrument
 * @param {boolean} immediat : true si l'action est immdiate et on ne passe
 * pas ensuite à l'action suivante
 */

ActionModifierLongueur.prototype.execute = function (immediat) {
  if (this.instrument === this.doc.regle) {
    var vis = this.instrument.visible;
    this.instrument.longueur = this.longueur;
    var oldg = this.instrument.g;
    this.instrument.creeg();
    this.instrument.g.setAttribute('visibility', vis ? 'visible' : 'hidden');
    this.doc.svg.replaceChild(this.instrument.g, oldg);
    this.instrument.translate(this.instrument.x, this.instrument.y);
  }

  if (!immediat) this.doc.actionSuivante(immediat);
};
/** @inheritDoc */


ActionModifierLongueur.prototype.actionVisible = function () {
  return this.doc.getInstrumentVisibility(this.instrument, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionModifierRayon.js":
/*!***************************************************!*\
  !*** ./sources_js/actions/actionModifierRayon.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionModificationRayon;
/**
 * Action modifiant le rayon d'un arc de cercle.
 * A ma connaissance n'a été utilisé que pour l'objet Gabarit
 * @param {iep.iepDoc} doc
 * @param {string} idel : L'id de l'objet dont il faut modifier le rayon
 * @param {string} rayFin : Le rayon à la fin de l'animation
 * @param {string} type : le type de l'objet
 * @param {string} tempo : Le tempo de temporisation
 * @param {string} pix10 : Le nombre de pixels pour la translation par dixième de seconde. Peut être null
 * @constructor
 */

function ActionModificationRayon(doc, idel, rayFin, type, tempo, pix10) {
  ActionAncetre.call(this, doc, tempo);
  this.rayFin = parseFloat(rayFin);
  this.pix10 = pix10 == null ? 8 : parseFloat(pix10);
  this.type = type;
  this.objet = this.doc.getElement(idel, type);
}

ActionModificationRayon.prototype = new ActionAncetre();
/**
 * Fonction lançant la translation de objet sauf si immediat est false
 * @param {type} immediat
 */

ActionModificationRayon.prototype.execute = function (immediat) {
  var objet = this.objet;

  if (objet == null) {
    this.doc.actionSuivante(immediat);
    return;
  }

  if (!immediat) objet.lanceAnimationModificationRayon(this.rayFin, this.pix10);else {
    objet.donneRayon(this.rayFin);
  }
};
/** @inheritDoc */


ActionModificationRayon.prototype.actionVisible = function () {
  return this.doc.getObjectVisibility(this.objet, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionMontrer.js":
/*!*********************************************!*\
  !*** ./sources_js/actions/actionMontrer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionMontrer;
/**
 * Action montrant un objet.
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire
 * @param {iep.objetBase} objet : l'objet à démasquer
 */

function ActionMontrer(doc, idel, nature, tempo) {
  ActionAncetre.call(this, doc, tempo);
  this.objet = this.doc.getElement(idel, nature);
}

ActionMontrer.prototype = new ActionAncetre();
/**
 * Fonction démasquant l'élément graphique de l'objet objet
 * @param {type} immediat
 */

ActionMontrer.prototype.execute = function (immediat) {
  var el = this.objet;
  if (el !== null) el.montre(true);
  if (!immediat) this.doc.actionSuivante(immediat);
};
/** @inheritDoc */


ActionMontrer.prototype.actionVisible = function () {
  return !this.doc.getObjectVisibility(this.objet, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionMontrerGraduations.js":
/*!********************************************************!*\
  !*** ./sources_js/actions/actionMontrerGraduations.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionMontrerGraduations;
/**
 * Action montrant ou masquant les graduations de l'instrument instrument
 * Attention : Pour la rèle, cette action s'exerce sur la graduation
 * et pour le rapporteur, sur la graduation interne
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire
 * @param {iep.instrumentAncetre} instrument : l'instrument possédant les graduations
 * @param {boolean} bmontrer : true pour montrer les graduations, false pour les cacher
 * @param {type} tempo
 */

function ActionMontrerGraduations(doc, instrument, bmontrer, tempo) {
  ActionAncetre.call(this, doc, tempo);
  this.instrument = instrument;
  this.bmontrer = bmontrer;
}

ActionMontrerGraduations.prototype = new ActionAncetre();
/**
 * Fonction exécutant l'action donc montrant ou masquant les graduations de instrument
 * @param {boolean} immediat Si true,pas de passage à l'action suivante
 */

ActionMontrerGraduations.prototype.execute = function (immediat) {
  this.instrument.montreGraduations(this.bmontrer);
  if (!immediat) this.doc.actionSuivante(immediat);
};
/** @inheritDoc */


ActionMontrerGraduations.prototype.actionVisible = function () {
  return this.doc.getInstrumentVisibility(this.instrument, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionMontrerInstrument.js":
/*!*******************************************************!*\
  !*** ./sources_js/actions/actionMontrerInstrument.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionMontrerInstrument;
/**
 * Action montrant un instrument.
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire
 * @param {iep.instrumentAncetre} instrument : l'instrument à montrer
 */

function ActionMontrerInstrument(doc, instrument, x, y, tempo) {
  ActionAncetre.call(this, doc, tempo);
  this.x = x === null ? null : parseFloat(x);
  this.y = y === null ? null : parseFloat(y);
  this.instrument = instrument;
}

ActionMontrerInstrument.prototype = new ActionAncetre();
/**
 * Fonction montrant l'instrument instrument
 * @param {boolean} immediat : si rrue on ne passe pas à l'action suivante
 */

ActionMontrerInstrument.prototype.execute = function (immediat) {
  var compas = this.doc.compas;
  if (this.x !== null && this.y !== null) this.instrument.translate(this.x, this.y);

  if (this.instrument === compas && !immediat) {
    if (!compas.leve) compas.montre(true);else this.doc.compasLeve.montre(true);
    compas.visible = true;
  } else this.instrument.montre(true);

  if (!immediat) this.doc.actionSuivante(immediat);
};
/** @inheritDoc */


ActionMontrerInstrument.prototype.actionVisible = function () {
  return !this.doc.getInstrumentVisibility(this.instrument, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionMontrerNombres.js":
/*!****************************************************!*\
  !*** ./sources_js/actions/actionMontrerNombres.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionMontrerNombres; // Cette action agit sur les graduations externes du rapporteur

/**
 * Action montrant changeant le statut des gradiations externes du rapporteur
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire
 * @param {boolean} bmontrer : true si on montre les graduations, false sinon
 * @param {type} tempo
 */

function ActionMontrerNombres(doc, bmontrer, tempo) {
  ActionAncetre.call(this, doc, tempo);
  this.bmontrer = bmontrer;
}

ActionMontrerNombres.prototype = new ActionAncetre();
/**
 * Exécution de l'action changeant le statut des gradiations externes du rapporteur
 * @param {boolean} immediat : si true on ne passe pas à l'action suivante
 */

ActionMontrerNombres.prototype.execute = function (immediat) {
  this.doc.rapporteur.montreGraduationsExternes(this.bmontrer);
  if (!immediat) this.doc.actionSuivante(immediat);
};
/** @inheritDoc */


ActionMontrerNombres.prototype.actionVisible = function () {
  return this.doc.getInstrumentVisibility(this.doc.rapporteur, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionNommerPoint.js":
/*!*************************************************!*\
  !*** ./sources_js/actions/actionNommerPoint.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

var mathjaxLoader = __webpack_require__(/*! ../mathjaxLoader */ "./sources_js/mathjaxLoader.js");

module.exports = ActionNommerPoint;
/**
 * Action donnant un nom à un point
 * @extends iep.actionAncetre
 * @constructor
 * @param {ie.iepDoc} doc : le doculent propriétaire
 * @param {iep.nomPoint} objet :  l'objet représentant le nom
 * @param {string} tempo : le tempk en dixièmes de seconde (ou null)
 */

function ActionNommerPoint(doc, objet, tempo) {
  ActionAncetre.call(this, doc, tempo);
  this.nomPoint = objet;
}

ActionNommerPoint.prototype = new ActionAncetre();
/**
 * Appelée par creeActions, précharge Mathjax si besoin et prépare son div de rendu
 */

ActionNommerPoint.prototype.prepare = function () {
  if (this.nomPoint.estLatex) {
    this.nomPoint.div = document.createElement('div'); // On diminue la taille pour le LaTeX eet on ne spécifie pas la taille en px
    // différence par rapport à MathGraph32

    this.nomPoint.div.setAttribute('style', 'top:0px;left:0px;position:absolute;font-size:' + String(this.nomPoint.taille - 2) + 'px;visibility:hidden;');
    this.nomPoint.div.setAttribute('id', this.nomPoint.id + 'iepprov');
    var ch = '$$' + this.nomPoint.nom.substring(1) + '$';
    this.nomPoint.div.appendChild(document.createTextNode(ch));
    document.body.appendChild(this.nomPoint.div); // la suite est async

    var self = this;
    mathjaxLoader().then(function () {
      /* global MathJax */
      // MathJax.Hub.Typeset(this.div);
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, self.nomPoint.div]);
      MathJax.Hub.Queue([function () {
        self.nomPoint.creegLatex();
        self.setReady();
      }]);
    }).catch(function (error) {
      console.error(Error('Mathjax n’a pas été chargé correctement, impossible d’afficher le point en LaTeX'), error);
    });
  } else {
    this.nomPoint.creeg();
    this.setReady();
  }
};
/**
 * Exécutant de l'action donnant un nom au point
 * @param {boolean} immediat : Si true pas de passage à l'action suivante
 */


ActionNommerPoint.prototype.execute = function (immediat) {
  // if ((this.nomPoint.objet === "point") && !this.nomPoint.nomCree) {
  if (this.nomPoint.objet === 'point') {
    // this.nomPoint.creeg();
    this.nomPoint.positionne();
    var point = this.nomPoint.point;

    if (point.nom !== null) {
      this.doc.svg.replaceChild(this.nomPoint.g, point.nom.g);
    } else this.doc.svg.appendChild(this.nomPoint.g);

    point.nom = this.nomPoint;
  }

  this.nomPoint.g.setAttribute('visibility', 'visible');
  if (!immediat) this.doc.actionSuivante(immediat);
};
/** @inheritDoc */


ActionNommerPoint.prototype.actionVisible = function () {
  return this.doc.getObjectVisibility(this.nomPoint.point, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionPause.js":
/*!*******************************************!*\
  !*** ./sources_js/actions/actionPause.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionPause;
/**
 * Action faisant une pause dans l'animation de la figure
 * Pour continuer l'action  l'utilisation doit cliquer sur le bouton rouge dans
 * la barre d'icônes
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire
 * @param {string} tempo : le tempo de temporisation (ou null)
 */

function ActionPause(doc, tempo) {
  ActionAncetre.call(this, doc, tempo);
}

ActionPause.prototype = new ActionAncetre();
/**
 * Exécute l'action en suspendant l'animation en cours.
 * Pour continuer, l'utilisateur doit cliquer sur le bouton roouge.
 * @param {type} immediat
 */

ActionPause.prototype.execute = function (immediat) {
  if (!immediat) {
    this.doc.activeIconeContinuer();
    this.doc.animationEnCours = false;
  }
};
/** @inheritDoc */


ActionPause.prototype.actionVisible = function () {
  return false;
};

/***/ }),

/***/ "./sources_js/actions/actionRetourner.js":
/*!***********************************************!*\
  !*** ./sources_js/actions/actionRetourner.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionRetourner;
/**
 * Action de retournement du compas
 * @extends iep.actionAncetre
 * @constructor
 * @param {iepDoc} doc
 * @param {Integer} tempo
 */

function ActionRetourner(doc, tempo) {
  ActionAncetre.call(this, doc, tempo);
}

ActionRetourner.prototype = new ActionAncetre();
/**
 * Exécution de l'action de retournement du compas
 * @param {boolean} immediat : Si true on ne passe pas à l'action suivante
 */

ActionRetourner.prototype.execute = function (immediat) {
  this.doc.compas.retourne();
  if (!immediat) this.doc.actionSuivante(immediat);
};
/** @inheritDoc */


ActionRetourner.prototype.actionVisible = function () {
  return this.doc.getInstrumentVisibility(this.doc.compas, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionRotationInstrument.js":
/*!********************************************************!*\
  !*** ./sources_js/actions/actionRotationInstrument.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionRotationInstrument;
/**
 * Action de rotation d'un instrument
 * A noter que le paramètre correspondant à la vitesse s'appelle sens
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire
 * @param {iep.instrementAncetre} instrument : l'instrument à tourner
 * @param {string} anglefin : l'angle de fin
 * @param {string} tempo :  le tempo de temporisation (ou null)
 * @param {string} deg10 : le nombre de degrés à tourner à chaque dizième de seconde
 * ou null( sera alors de 8)
 */

function ActionRotationInstrument(doc, instrument, anglefin, tempo, deg10) {
  ActionAncetre.call(this, doc, tempo);
  this.instrument = instrument;
  this.anglefin = parseFloat(anglefin);
  this.deg10 = deg10 == null ? 8 : Math.abs(parseFloat(deg10));
}

ActionRotationInstrument.prototype = new ActionAncetre();
/**
 * Fonction lançant l'animation de rotation de l'instrument si immediat est false
 * @param {boolean} immediat
 */

ActionRotationInstrument.prototype.execute = function (immediat) {
  if (!immediat) this.instrument.lanceAnimationRotation(this.anglefin, this.deg10);else {
    this.instrument.angle = this.anglefin;
    this.instrument.positionne();
    if (!immediat) this.doc.actionSuivante(immediat);
  }
};
/** @inheritDoc */


ActionRotationInstrument.prototype.actionVisible = function () {
  return this.doc.getInstrumentVisibility(this.instrument, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionRotationObjet.js":
/*!***************************************************!*\
  !*** ./sources_js/actions/actionRotationObjet.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionRotationObjet;
/**
 * Action de rotation d'un objet
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc : le document proprétaire
 * @param {string} idel : l'id de l'objet à faire tourner
 * @param {string} anglefin : l'angle de fin de rotation
 * @param {string} type : le type de l'objet à faire tourner "image"
 * ou "texte" (la possibilité de tourner un texte n'était pas présnete
 * dans la version Flash)
 * car seules les images ont des objets que l'on peut faire tourner)
 * @param {string} tempo :  le tempo de temporisation (peut être null)
 * @param {string} deg10 : Le pas d'incrémentation de l'angle par dixième de seconde
 * Vaudra 8 si  null
 */

function ActionRotationObjet(doc, idel, anglefin, type, tempo, deg10) {
  ActionAncetre.call(this, doc, tempo);
  this.anglefin = parseFloat(anglefin);
  this.deg10 = deg10 == null ? 8 : Math.abs(parseFloat(deg10));
  this.objet = this.doc.getElement(idel, type);
}

ActionRotationObjet.prototype = new ActionAncetre();
/**
 * Fonction lançant l'animation de l'objet seulement si immediat est false;
 * @param {boolean} immediat
 */

ActionRotationObjet.prototype.execute = function (immediat) {
  var objet = this.objet;

  if (objet == null) {
    if (!immediat) this.doc.actionSuivante(immediat);
    return;
  }

  if (!immediat) objet.lanceAnimationRotation(this.anglefin, this.deg10, this.tempo);else {
    objet.angle = this.anglefin;
    objet.positionne(); // this.doc.actionSuivante(immediat);
  }
};
/** @inheritDoc */


ActionRotationObjet.prototype.actionVisible = function () {
  return this.doc.getObjectVisibility(this.objet, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionTranslationInstrument.js":
/*!***********************************************************!*\
  !*** ./sources_js/actions/actionTranslationInstrument.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionTranslationInstrument;
/**
 * Action de translation d'un instrument
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire
 * @param {iep.instrumentAncetre} instrument : l'instrument à translater
 * @param {string} xfin : l'abscisse de fin de translation
 * @param {string} yfin : l'ordonnée de fin de translation
 * @param {type} tempo : le tempo (peut être null)
 * @param {type} pix10 : Le nombre de pixels par dixième de seconde pour la translation
 * Sera
 */

function ActionTranslationInstrument(doc, instrument, xfin, yfin, tempo, pix10) {
  ActionAncetre.call(this, doc, tempo);
  this.instrument = instrument;
  this.xfin = parseFloat(xfin);
  this.yfin = parseFloat(yfin);
  this.pix10 = pix10 == null ? 8 : parseFloat(pix10);
}

ActionTranslationInstrument.prototype = new ActionAncetre();

ActionTranslationInstrument.prototype.execute = function (immediat) {
  if (isNaN(this.xfin) || isNaN(this.yfin)) this.doc.actionSuivante(immediat);else {
    if (immediat) this.instrument.translate(this.xfin, this.yfin);else this.instrument.lanceAnimationTranslation(this.xfin, this.yfin, this.pix10);
  }
};
/** @inheritDoc */


ActionTranslationInstrument.prototype.actionVisible = function () {
  return this.doc.getInstrumentVisibility(this.instrument, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionTranslationObjet.js":
/*!******************************************************!*\
  !*** ./sources_js/actions/actionTranslationObjet.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionTranslationObjet;
/**
 * Action translatant un objet
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc
 * @param {string} idel : L'id de l'objet à translater
 * @param {string} xfin : l'abscisse de fin de translation
 * @param {string} yfin : L'ordonnée de fin de translation
 * @param {string} type : le type de l'objet
 * @param {string} tempo : Le tempo de temporisation
 * @param {string} pix10 : Le nombre de pixels pour la translation par dixième de seconde. Peut être null
 */

function ActionTranslationObjet(doc, idel, xfin, yfin, type, tempo, pix10) {
  ActionAncetre.call(this, doc, tempo);
  this.xfin = parseFloat(xfin);
  this.yfin = parseFloat(yfin);
  this.pix10 = pix10 == null ? 8 : parseFloat(pix10);
  this.type = type;
  this.objet = this.doc.getElement(idel, type);
}

ActionTranslationObjet.prototype = new ActionAncetre();
/**
 * Fonction lançant la translation de objet sauf si immediat est false
 * @param {type} immediat
 */

ActionTranslationObjet.prototype.execute = function (immediat) {
  var objet = this.objet;

  if (objet == null) {
    this.doc.actionSuivante(immediat);
    return;
  }

  if (!immediat) objet.lanceAnimationTranslation(this.xfin, this.yfin, this.pix10);else {
    objet.translate(this.xfin, this.yfin);
  }
};
/** @inheritDoc */


ActionTranslationObjet.prototype.actionVisible = function () {
  return this.doc.getObjectVisibility(this.objet, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionZoomInstrument.js":
/*!****************************************************!*\
  !*** ./sources_js/actions/actionZoomInstrument.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-int.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionZoomInstrument;
/**
 * Action zoomant sur un instrument
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc
 * @param {iep.instrumentAncetre} instrument
 * @param {string} zoomfin : Le zoom de fin (de 0 à 100)
 * @param {string} tempo : Le tempo de factorisation
 * @param {string} vitesse : Facteur de rapidité de l'animation
 */

function ActionZoomInstrument(doc, instrument, zoomfin, tempo, vitesse) {
  ActionAncetre.call(this, doc, tempo);
  this.instrument = instrument;
  this.zoomfin = parseFloat(zoomfin) / 100;
  this.vitesse = parseInt(vitesse);
}

ActionZoomInstrument.prototype = new ActionAncetre();

ActionZoomInstrument.prototype.execute = function (immediat) {
  if (!immediat) this.instrument.lanceAnimationZoom(this.zoomfin, this.vitesse);else {
    this.instrument.zoomfactor = this.zoomfin;
    this.instrument.positionne(); // this.doc.actionSuivante(immediat);
  }
};
/** @inheritDoc */


ActionZoomInstrument.prototype.actionVisible = function () {
  return this.doc.getInstrumentVisibility(this.instrument, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/actions/actionZoomObjet.js":
/*!***********************************************!*\
  !*** ./sources_js/actions/actionZoomObjet.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ActionAncetre = __webpack_require__(/*! ./actionAncetre */ "./sources_js/actions/actionAncetre.js");

module.exports = ActionZoomObjet;
/**
 * Action zoomant sur un objet
 * @extends iep.actionAncetre
 * @constructor
 * @param {iep.iepDoc} doc : Le document propriétaire
 * @param {Stirng} idel
 * @param {string} zoomfin : L'id de l'objet sur lequel on zoome
 * @param {string} type : Le type de l'objet
 * @param {string} tempo : Le tempo de factorisation
 * @param {string} vitesse : Facteur de vitesse pour l'animation
 */

function ActionZoomObjet(doc, idel, zoomfin, type, tempo, vitesse) {
  ActionAncetre.call(this, doc, tempo);
  this.objet = this.doc.getElement(idel, type);
  this.zoomfin = parseFloat(zoomfin) / 100;
  this.vitesse = vitesse;
  this.type = type;
}

ActionZoomObjet.prototype = new ActionAncetre();
/**
 * Fonction lançant l'animation de zoom de l'objet sauf si immediat est false
 * @param {type} immediat
 */

ActionZoomObjet.prototype.execute = function (immediat) {
  var objet = this.objet;

  if (objet == null) {
    this.doc.actionSuivante(immediat);
    return;
  }

  if (!immediat) objet.lanceAnimationZoom(this.zoomfin, this.vitesse);else {
    objet.zoomfactor = this.zoomfin;
    objet.positionne(); // this.doc.actionSuivante(immediat);
  }
};
/** @inheritDoc */


ActionZoomObjet.prototype.actionVisible = function () {
  return this.doc.getObjectVisibility(this.objet, this.indice - 1);
};

/***/ }),

/***/ "./sources_js/app/IepApp.js":
/*!**********************************!*\
  !*** ./sources_js/app/IepApp.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var IepDoc = __webpack_require__(/*! ./IepDoc */ "./sources_js/app/IepDoc.js");

module.exports = IepApp;
/**
 * Fonction créant un objet permettant de gérer plusieurs figures instrumenPoche
 * dans des svg différents
 * @param {Object} [options]
 * @param {boolean} [options.debug] passer true pour avoir des infos de debug en console
 * @constructor
 */

function IepApp(options) {
  this.debug = Boolean(options && options.debug);
  if (this.debug) console.log('Mode debug activé');
  this.docs = [];
  var self = this;
  window.addEventListener('unload', function () {
    return self.closeAllXMLWindows();
  });
}
/**
 * Fonction ajoutant un document à un iepApp
 * @param {string|Element} svg : Le svg (l'élément du dom ou son id) dans lequel vont se faire les affichages.
 * @param {string} chDoc : La chaîne XML décrivant le document.
 * @param {boolean} [autoStart=true] Passer false pour ne pas démarrer l'animation dès le chargement
 */


IepApp.prototype.addDoc = function (svg, chDoc) {
  var autoStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (typeof svg === 'string') svg = document.getElementById(svg);
  if (!svg) return new Error('svg manquant');
  if (svg.localName !== 'svg') return new Error('svg incorrect');
  var options = {
    autoStart: autoStart,
    debug: this.debug
  };
  var doc = new IepDoc(svg, chDoc, options);
  this.docs.push(doc);
  svg.iepDoc = doc; // Pour que les boutons accèdent au document.

  return doc;
};
/**
 * Fonction utilisée lors de la fermeture d'une fenêtre contenant des figures
 * InstrumenPoche dans des SVG.
 * Elle provoque la fermeture des éventuelles fenêtres popup contenant le code
 * XML d'une figure (obtenues en cliquant sur une icône XML)
 */


IepApp.prototype.closeAllXMLWindows = function () {
  for (var i = 0; i < this.docs.length; i++) {
    var doc = this.docs[i];
    if (doc.windowxml != null) doc.windowxml.close();
  }
};

/***/ }),

/***/ "./sources_js/app/IepDoc.js":
/*!**********************************!*\
  !*** ./sources_js/app/IepDoc.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var Vect = __webpack_require__(/*! ../types/vecteur */ "./sources_js/types/vecteur.js");

var Compas = __webpack_require__(/*! ../instruments/compas */ "./sources_js/instruments/compas.js");

var Equerre = __webpack_require__(/*! ../instruments/equerre */ "./sources_js/instruments/equerre.js");

var Rapporteur = __webpack_require__(/*! ../instruments/rapporteur */ "./sources_js/instruments/rapporteur.js");

var Regle = __webpack_require__(/*! ../instruments/regle */ "./sources_js/instruments/regle.js");

var Requerre = __webpack_require__(/*! ../instruments/requerre */ "./sources_js/instruments/requerre.js");

var Crayon = __webpack_require__(/*! ../instruments/crayon */ "./sources_js/instruments/crayon.js");

var ActionCoucherCompas = __webpack_require__(/*! ../actions/actionCoucherCompas */ "./sources_js/actions/actionCoucherCompas.js");

var ActionCreation = __webpack_require__(/*! ../actions/actionCreation */ "./sources_js/actions/actionCreation.js");

var ActionEcarterCompas = __webpack_require__(/*! ../actions/actionEcarterCompas */ "./sources_js/actions/actionEcarterCompas.js");

var ActionEcrireTexte = __webpack_require__(/*! ../actions/actionEcrireTexte */ "./sources_js/actions/actionEcrireTexte.js");

var ActionGlisser = __webpack_require__(/*! ../actions/actionGlisser */ "./sources_js/actions/actionGlisser.js");

var ActionLeverCompas = __webpack_require__(/*! ../actions/actionLeverCompas */ "./sources_js/actions/actionLeverCompas.js");

var ActionMasquer = __webpack_require__(/*! ../actions/actionMasquer */ "./sources_js/actions/actionMasquer.js");

var ActionMasquerInstrument = __webpack_require__(/*! ../actions/actionMasquerInstrument */ "./sources_js/actions/actionMasquerInstrument.js");

var ActionModifierLongueur = __webpack_require__(/*! ../actions/actionModifierLongueur */ "./sources_js/actions/actionModifierLongueur.js");

var ActionMontrer = __webpack_require__(/*! ../actions/actionMontrer */ "./sources_js/actions/actionMontrer.js");

var ActionMontrerGraduations = __webpack_require__(/*! ../actions/actionMontrerGraduations */ "./sources_js/actions/actionMontrerGraduations.js");

var ActionMontrerInstrument = __webpack_require__(/*! ../actions/actionMontrerInstrument */ "./sources_js/actions/actionMontrerInstrument.js");

var ActionMontrerNombres = __webpack_require__(/*! ../actions/actionMontrerNombres */ "./sources_js/actions/actionMontrerNombres.js");

var ActionNommerPoint = __webpack_require__(/*! ../actions/actionNommerPoint */ "./sources_js/actions/actionNommerPoint.js");

var ActionPause = __webpack_require__(/*! ../actions/actionPause */ "./sources_js/actions/actionPause.js");

var ActionRotationInstrument = __webpack_require__(/*! ../actions/actionRotationInstrument */ "./sources_js/actions/actionRotationInstrument.js");

var ActionRetourner = __webpack_require__(/*! ../actions/actionRetourner */ "./sources_js/actions/actionRetourner.js");

var ActionRotationObjet = __webpack_require__(/*! ../actions/actionRotationObjet */ "./sources_js/actions/actionRotationObjet.js");

var ActionTranslationInstrument = __webpack_require__(/*! ../actions/actionTranslationInstrument */ "./sources_js/actions/actionTranslationInstrument.js");

var ActionTranslationObjet = __webpack_require__(/*! ../actions/actionTranslationObjet */ "./sources_js/actions/actionTranslationObjet.js");

var ActionZoomInstrument = __webpack_require__(/*! ../actions/actionZoomInstrument */ "./sources_js/actions/actionZoomInstrument.js");

var ActionZoomObjet = __webpack_require__(/*! ../actions/actionZoomObjet */ "./sources_js/actions/actionZoomObjet.js");

var ActionModifierRayon = __webpack_require__(/*! ../actions/actionModifierRayon */ "./sources_js/actions/actionModifierRayon.js");

var Angle = __webpack_require__(/*! ../objets/angle */ "./sources_js/objets/angle.js");

var AngleDroit = __webpack_require__(/*! ../objets/angleDroit */ "./sources_js/objets/angleDroit.js");

var Arc = __webpack_require__(/*! ../objets/arc */ "./sources_js/objets/arc.js");

var Gabarit = __webpack_require__(/*! ../objets/gabarit */ "./sources_js/objets/gabarit.js");

var Axe = __webpack_require__(/*! ../objets/axe */ "./sources_js/objets/axe.js");

var DemiDroite = __webpack_require__(/*! ../objets/demiDroite */ "./sources_js/objets/demiDroite.js");

var Droite = __webpack_require__(/*! ../objets/droite */ "./sources_js/objets/droite.js");

var Imag = __webpack_require__(/*! ../objets/Imag */ "./sources_js/objets/Imag.js");

var LigneContinue = __webpack_require__(/*! ../objets/ligneContinue */ "./sources_js/objets/ligneContinue.js");

var MarqueSegment = __webpack_require__(/*! ../objets/marqueSegment */ "./sources_js/objets/marqueSegment.js");

var NomPoint = __webpack_require__(/*! ../objets/nomPoint */ "./sources_js/objets/nomPoint.js");

var Point = __webpack_require__(/*! ../objets/point */ "./sources_js/objets/point.js");

var Polygone = __webpack_require__(/*! ../objets/polygone */ "./sources_js/objets/polygone.js");

var Quadrillage = __webpack_require__(/*! ../objets/quadrillage */ "./sources_js/objets/quadrillage.js");

var Repere = __webpack_require__(/*! ../objets/repere */ "./sources_js/objets/repere.js");

var Segment = __webpack_require__(/*! ../objets/segment */ "./sources_js/objets/segment.js");

var Texte = __webpack_require__(/*! ../objets/texte */ "./sources_js/objets/texte.js");

module.exports = IepDoc; // la liste des outils

var outils = ['compas', 'equerre', 'rapporteur', 'regle', 'requerre', 'crayon'];
/**
 * Document représentant une figure affichée dans le SVG d'id idDoc
 * @constructor
 * @param {Element} svg  Le SVG contenant la figure
 * @param {string} chdoc La chaîne contenant le code XML décrivant la figure.
 * @param {boolean} [autoStart=false] : Si true l'animation démarre automatiquement
 * @param {Object} [options]
 * @param {boolean} [options.debug] passer true pour avoir des infos de debug en console
 * @param {boolean} [options.autoStart=false] passer true pour démarrer l'animation dès le chargement
 */

function IepDoc(svg, chdoc, options) {
  /*
   * L'élément html du svg
   * @type Element
   */
  this.svg = svg; // pour la compatibilité ascendante, on traite le 3e argument booléen comme autostart

  if (typeof options === 'boolean') {
    this.autoStart = options;
    options = {};
  } else {
    if (_typeof(options) !== 'object') options = {};
    this.autoStart = Boolean(options.autoStart);
  }

  this.debug = Boolean(options.debug);
  /**
   * Pointera sur la fenêtre contenant le code xml
   * @type Window
   */

  this.windowxml = null;
  var ch = chdoc; // On ajoute l'en-tête xml si elle a été ommise.

  if (ch.search(/<?xml/gi) === -1) ch = '<?xml version="1.0" encoding="UTF-8"?>' + ch; // On élimine les <action_ suivis de chiffres

  ch = ch.replace(/<action[_]\d*/gi, '<action'); // On élimine les remarques html

  ch = ch.replace(/<!--.*-->/g, ''); // On corrige les oublis d'espaces et les -- dans les attributs

  ch = ch.replace(/(="[^"]*")([^ ])/g, '$1 $2').replace(/--/g, ''); // On corrige les éventuels << ou >>

  ch = ch.replace(/<</g, '<').replace(/>>/g, '>'); // Certains auteurs ont mis des <actiontempo= sans espace ou autre

  ch = ch.replace(/<action(\w)/gi, '<action $1'); // Les commentaires peuvent un attribut texte ce qui pose des problèmes dans elimineDoublonsXML
  // On les remplace par un attribut texteCommentaire

  ch = ch.replace(/<commentaire\s*texte\s*=/gi, '<commentaire texteCommentaire ='); // On corrige les attributs en doublon

  ch = kernel.elimineDoublonsXML(ch); // On élimine l'en-tête qui contient parfois des caractères bizarres

  /**
   * La string xml du doc
   * @type string
   */

  this.codexml = ch; // Mémorisé pour pouvoir être affiche quand on clique sur le bouton XML
  // on corrige le tag ouvrant et fermant, parfois folklorique dans les scripts existants

  var ind1 = ch.search(/<\s*INSTRUMENPOCHE/gi);
  var ind2 = ch.indexOf('>', ind1);
  var ind3 = ch.search(new RegExp('<\\s*/INSTRUMENPOCHE', 'gi')); // Pas de > dans la recherche car certains auteurs se sont trompés sur la balise de fin

  this.chdoc = '<INSTRUMENPOCHE>' + ch.substring(ind2 + 1, ind3) + '</INSTRUMENPOCHE>';
  this.actions = []; // Un tableau qui contiendra toutes les actions de la figure.
  // Une liste des éléments graphiques de type objet graphique traités par la figure.
  // Chaque élément sera identifié par un n° d'id et par son type
  // Lorsqu'un élément de même id et de même nature qu'un élément déjà existant est créé, lors de l'exécution
  // de l'action de création, son élément graphique remplacera celui de l'élement déjà existant
  // dans le DOM du svg de la figure

  this.elements = [];
  this.compasRetourne = false; // On crée les instruments dès le début car à chaque fois qu'un instrument est translaté, tourné, zoomé,
  // certains objet créés ont besoin de connaître l'état des instruments pour leur création

  this.compasLeve = null;
  this.compas = new Compas(this);
  this.equerre = new Equerre(this);
  this.rapporteur = new Rapporteur(this);
  this.regle = new Regle(this);
  this.requerre = new Requerre(this);
  this.crayon = new Crayon(this); // On parse le xml

  this.xmldoc = kernel.parseXMLDoc(this.chdoc);
  this.tabact = this.xmldoc.getElementsByTagName('action');
  this.started = false;
  this.animationEnCours = true; // Sera mis à false pour le pas à pas
  // indiceActionEnCours est l'indice de la première future action qui devra être exécutée

  this.indiceActionEnCours = 0;
  this.creeActions();
  var t = this; // Les événements souris pour pouvoir gérer les déplacements de la barre d'icônes

  svg.addEventListener('mousemove', function (ev) {
    t.onmousemove(ev, ev.clientX, ev.clientY);
  }, false);
  svg.addEventListener('mouseup', function () {
    t.onmouseup();
  }, false);
  svg.addEventListener('mouseleave', function () {
    t.onmouseleave();
  }, false);
  svg.addEventListener('touchmove', function (ev) {
    t.onmousemove(ev, ev.touches[0].pageX, ev.touches[0].pageY);
  }, false);
  svg.addEventListener('touchend', function () {
    t.onmouseup();
  }, false);
  svg.addEventListener('touchcancel', function () {
    t.onmouseup();
  }, false);
  svg.addEventListener('touchleave', function () {
    t.onmouseleave();
  }, false);
  if (this.debug) console.log('iepDoc instancié :', this);
}

;
/**
 * Fontion apppelée à la fin du chargement de certains onjets dont le chargement est asynchrone : les images
 * et les textes dont l'écriture nécessite l'utilisation du LaTeX.
 * Renvoie true si tous les objets de la figure sont bien chargés.
 * Au bout de 10 secondes écoulées affiche un message d'erreur
 * @returns
 */

IepDoc.prototype.waitForReadyState = function () {
  if (this.started) return;
  var ready = this.verifyReadyState();

  if (ready) {
    this.start();
  } else {
    var self = this;
    setTimeout(function () {
      self.waitForReadyState();
    }, 200); // On vérifie toutes les 200ms
  }
};
/**
 * Fonction renvoyant true seulement si tous les objets de la figure sont bien chargés
 * @returns {boolean}
 */


IepDoc.prototype.verifyReadyState = function () {
  if (this.debug) {
    var pasPretes = this.actions.filter(function (action) {
      return !action.ready;
    });
    if (pasPretes.length) console.log("".concat(pasPretes.length, " actions pas encore pr\xEAtes (sur ").concat(this.actions.length, ")"));else console.log("Les ".concat(this.actions.length, " actions sont pr\xEAtes"));
  }

  return this.actions.every(function (action) {
    return action.isReady;
  });
};
/**
 * Fonction créant tous les éléments graphiques des aactions de création de la figure.
 * Seules les actions de créations d'objets ont une fonction creegElement faisant quelquechose
 */


IepDoc.prototype.creeElementsGraphiques = function () {
  this.actions.forEach(function (action) {
    return action.creegElement();
  });
};
/**
 * Fonction réinitilisant la position initiale de tous les instruments et les cachant.
 */


IepDoc.prototype.initialiseOutils = function () {
  var _this = this;

  outils.forEach(function (outil) {
    _this[outil].initialisePosition();

    _this[outil].montre(false);
  });
  this.compas.leve = false;
};
/**
 * Fonction retirnat du DOM du SVG les éléments graphiques des outils et les recréant
 * de façon à ce que les outils soient créées dans le DOM après les éléments graphiques
 * des objets de la figure.
 */


IepDoc.prototype.recreeOutils = function () {
  var _this2 = this;

  outils.forEach(function (outil) {
    _this2[outil].updateg();

    _this2[outil].montre(false);
  });
  this.compasLeve = null;
};
/**
 * Fonction lancée après le chargement complet de la figure.
 * Toutes les actions de création d'objet de la figure créent leur propre élément graphique dans le DOM du svg
 * qu'elles stockent dans une variable this.g. Ces éléments sont initialeùent tous cachés.
 * Ensuite on recrée dans le DOM les éléments graphiques des outils pour qu'ils soient situés après les objets créés.
 * Puis on crée les icônes et on les initialise à leur état initial  pour le démarrage de la figure.
 */


IepDoc.prototype.start = function () {
  this.started = true;
  this.creeElementsGraphiques();
  this.recreeOutils();
  this.creeIcones();
  this.InitialiseIcones();

  if (this.autoStart) {
    this.onPlay();
  } else {
    this.montreIcone('Pause', false);
    this.montreIcone('Play', true);
  }
};
/**
 * Fonction créant les icônes de la figure.
 */


IepDoc.prototype.creeIcones = function () {
  // Toutes les images seront contenues dans un g element appelé barreIcones
  var nbIcones = 8;
  var t = this;
  this.barreIcones = document.createElementNS(kernel.svgsn, 'g');
  this.creeElementsPourIcones();
  this.iconGoBegin = this.iconeGoBegin(0, 0, 'fonce');
  this.iconGoBeginGris = this.iconeGoBegin(0, 0, 'clair');

  this.iconGoBegin.onclick = function () {
    t.onGoBegin();
  };

  this.barreIcones.appendChild(this.iconGoBegin);
  this.barreIcones.appendChild(this.iconGoBeginGris);
  this.iconStepPrev = this.iconeStepPrev(32, 0, 'fonce');
  this.iconStepPrevGris = this.iconeStepPrev(32, 0, 'clair');

  this.iconStepPrev.onclick = function () {
    t.onStepPrev();
  };

  this.barreIcones.appendChild(this.iconStepPrev);
  this.barreIcones.appendChild(this.iconStepPrevGris);
  this.iconPause = this.iconePause(64, 0, 'fonce');
  this.iconPauseGris = this.iconePause(64, 0, 'clair');

  this.iconPause.onclick = function () {
    t.onPause();
  };

  this.barreIcones.appendChild(this.iconPause);
  this.barreIcones.appendChild(this.iconPauseGris);
  this.iconPlay = this.iconePlay(96, 0, 'fonce');
  this.iconPlayGris = this.iconePlay(96, 0, 'clair');

  this.iconPlay.onclick = function () {
    t.onPlay();
  };

  this.barreIcones.appendChild(this.iconPlay); // Icône rouge à activer quand on rencontre une pause
  // Cette icône ne sera visible et active que quand on rencontre une action de pause

  this.iconPlay2 = this.iconePlay(96, 0, 'rouge');
  this.iconPlay2.setAttribute('visibility', 'hidden');

  this.iconPlay2.onclick = function () {
    t.onPlayContinuer();
  };

  this.barreIcones.appendChild(this.iconPlay2);
  this.barreIcones.appendChild(this.iconPlayGris);
  this.iconRestart = this.iconeRestart(128, 0, 'fonce');
  this.iconRestartGris = this.iconeRestart(128, 0, 'clair');

  this.iconRestart.onclick = function () {
    t.onRestart();
  };

  this.barreIcones.appendChild(this.iconRestart);
  this.barreIcones.appendChild(this.iconRestartGris);
  this.iconStepNext = this.iconeStepNext(160, 0, 'fonce');
  this.iconStepNextGris = this.iconeStepNext(160, 0, 'clair');

  this.iconStepNext.onclick = function () {
    t.onStepNext();
  };

  this.barreIcones.appendChild(this.iconStepNext);
  this.barreIcones.appendChild(this.iconStepNextGris);
  this.iconGoEnd = this.iconeGoEnd(192, 0, 'fonce');
  this.iconGoEndGris = this.iconeGoEnd(192, 0, 'clair');

  this.iconGoEnd.onclick = function () {
    t.onGoEnd();
  };

  this.barreIcones.appendChild(this.iconGoEnd);
  this.barreIcones.appendChild(this.iconGoEndGris);
  this.iconXML = this.iconeXML(224, 0, 'fonce');
  this.iconXMLGris = this.iconeXML(224, 0, 'clair');

  this.iconXML.onclick = function () {
    t.onXML();
  };

  this.barreIcones.appendChild(this.iconXML);
  this.barreIcones.appendChild(this.iconXMLGris);
  this.hauteurBarre = 32;
  this.demiLargeurBarre = nbIcones * 16; // this.xbarre et this.ybarre contiennent les coordonnées initiales de la barre d'outils dans le SVG

  this.xbarre = 50; // Barre placée à gauche de bord

  this.ybarre = 4;
  this.barreIcones.setAttribute('transform', 'translate(' + this.xbarre + ',4)');
  this.svg.appendChild(this.barreIcones); // Ajout ge gestionnaires de souris sur la barre d'icônes

  this.isDraggingBarre = false;
  this.barreIcones.addEventListener('mousedown', function (ev) {
    t.onmousedownbarre(ev.clientX, ev.clientY);
  }, false);
  this.barreIcones.addEventListener('mousemove', function (ev) {
    t.onmousemovebarre(ev.clientX, ev.clientY);
  }, false); // C'est le SVG qui gère les événements mouseup

  this.barreIcones.addEventListener('touchstart', function (ev) {
    t.onmousedownbarre(ev.touches[0].pageX, ev.touches[0].pageY);
  }, false);
  this.barreIcones.addEventListener('touchmove', function () {
    t.onmousemovebarre();
  }, false); // C'est le svg qui gère les événements touhcance et touchend
  // this.barreIcones.addEventListener("touchcancel",function() {t.onmouseupbarre()},false);
  // Initialisation de la position relative de la barre d'outils
  // this.deltax et this.deltay contiendront de décalage relatif de la barre d'outils par rapport
  // à sa position initiale lorsqu'on la fait glisser.

  this.deltax = 0;
  this.deltay = 0;
};
/**
 * Fonction appelée quand on clique ou fait un appui tactile sur la barre d'icônes de la figure
 * @param {Integer} xmouse : l'abscisse du point cliqué par la souris
 * @param {Integer} ymouse : l'ordonnée du point cliqué par la souris
 */


IepDoc.prototype.onmousedownbarre = function (xmouse, ymouse) {
  if (this.animationEnCours) return;
  this.isDraggingBarre = true;
  this.xcapturebarre = xmouse;
  this.ycapturebarre = ymouse;
};
/**
 * Fonction appelée au survol de la barre d'icônes par la souris ou du pointeur tactive
 */


IepDoc.prototype.onmousemovebarre = function () {
  if (this.animationEnCours) {
    this.barreIcones.style.cursor = 'default';
    this.isDraggingBarre = false;
    return;
  }

  this.barreIcones.style.cursor = 'pointer';
};
/**
 * Fonction appelée au ssurvol du svg par la souris ou le pointeur tactile
 * @param {event} ev
 * @param {Integer} xmouse : l'abscisse pointée par la souris
 * @param {Integer} ymouse : l'ordonnée pointée par la souris
 */


IepDoc.prototype.onmousemove = function (ev, xmouse, ymouse) {
  if (this.isDraggingBarre) {
    var w = parseInt(this.svg.getAttribute('width'));
    var h = parseInt(this.svg.getAttribute('height'));
    var dx = xmouse - this.xcapturebarre;
    var dy = ymouse - this.ycapturebarre;
    var deltax = this.deltax + dx;
    var deltay = this.deltay + dy;
    var xpos = this.xbarre + deltax;
    var ypos = this.ybarre + deltay;

    if (xpos <= w - 2 * this.demiLargeurBarre && xpos >= 0 && ypos >= 0 && ypos <= h - this.hauteurBarre) {
      this.barreIcones.setAttribute('transform', 'translate(' + xpos + ',' + ypos + ')');
      this.deltax = deltax;
      this.deltay = deltay;
      this.xcapturebarre = xmouse;
      this.ycapturebarre = ymouse;
    }

    ev.preventDefault(); // Pour éviter que des éléments texte soient sélectionnés en bougeant la souris
  } // ev.preventDefault(); // Pour éviter que des éléments texte soient sélectionnés en bougeant la souris
  // Abandonné car alors on e peut pls zoomer ou dézoomer sur périphérique mobile

};
/**
 * Fonction appelée lorsque le bouton de la souris est relâché sur le svg
 */


IepDoc.prototype.onmouseup = function () {
  this.isDraggingBarre = false;
};
/**
 * Fonction appelée quand on relâche le bouton de la souris sur la figure
 */


IepDoc.prototype.onmouseleave = function () {
  this.isDraggingBarre = false;
};
/**
 * Fonction appelée quand on clique sur le bouton XML de la barre d'outils
 * Ouvre une fenêtre affichant le code XML de la figure
 */


IepDoc.prototype.onXML = function () {
  if (this.windowxml == null) this.windowxml = this.popup();else this.windowxml.focus();
};
/**
 * Fonction activant ou désactivant l'icône de nom nomIcone
 * Si bvisible est true, l'icône normale est montrée et l'icône grisée est cachée
 * Si bvisible est false,l'icône normale est masquée et l'icône grisée est montrée
 * @param {string} nomIcone
 * @param {boolean} bvisible
 */


IepDoc.prototype.montreIcone = function (nomIcone, bvisible) {
  var nom = 'icon' + nomIcone;
  this[nom].setAttribute('visibility', bvisible ? 'visible' : 'hidden');
  this[nom + 'Gris'].setAttribute('visibility', bvisible ? 'hidden' : 'visible');
};
/**
 * Fonction activant l'icône rouge Continuer et désactivant les autres icônes
 */


IepDoc.prototype.activeIconeContinuer = function () {
  this.montreIcone('GoBegin', false);
  this.montreIcone('StepPrev', false);
  this.montreIcone('Pause', false);
  this.montreIcone('Play', false);
  this.montreIcone('Restart', false);
  this.montreIcone('StepNext', false);
  this.montreIcone('GoEnd', false);
  this.iconPlayGris.setAttribute('visibility', 'hidden');
  this.iconPlay2.setAttribute('visibility', 'visible');
  this.montreIcone('XML', true);
};
/**
 * Fonction désactivant toutes les icônes suf l'icône de pause
 */


IepDoc.prototype.InitialiseIcones = function () {
  this.montreIcone('GoBegin', false);
  this.montreIcone('StepPrev', false);
  this.montreIcone('Pause', true);
  this.montreIcone('Play', false);
  this.montreIcone('Restart', false);
  this.montreIcone('StepNext', false);
  this.montreIcone('GoEnd', false);
  this.montreIcone('XML', false);
};
/**
 * Fonction appelée lors d'un clic sur l'icône de retour de la figure au début
 */


IepDoc.prototype.onGoBegin = function () {
  this.animationEnCours = false;
  this.initialise();
  this.montreIcone('GoBegin', false);
  this.montreIcone('StepPrev', false);
  this.montreIcone('Pause', false);
  this.montreIcone('Play', true);
  this.montreIcone('Restart', false);
  this.montreIcone('StepNext', true);
  this.montreIcone('GoEnd', true);
  this.montreIcone('XML', true);
  this.indiceActionEnCours = 0;
};
/**
 * Fonction appelée lors d'un clic sur l'icône de saut à la fin de la figure
 */


IepDoc.prototype.onGoEnd = function () {
  this.animationEnCours = false;
  this.initialise();
  this.montreIcone('GoBegin', true);
  this.montreIcone('StepPrev', true);
  this.montreIcone('Pause', false);
  this.montreIcone('Play', false);
  this.montreIcone('Restart', true);
  this.montreIcone('StepNext', false);
  this.montreIcone('GoEnd', false);
  this.montreIcone('XML', true);
  this.executeJusque(this.actions.length - 1);
  this.indiceActionEnCours = this.actions.length;
};
/**
 * Fonction appelée quand on clique sur l'icône play de la figure
 */


IepDoc.prototype.onPlay = function () {
  this.animationEnCours = true;
  this.montreIcone('GoBegin', false);
  this.montreIcone('StepPrev', false);
  this.montreIcone('Pause', true);
  this.montreIcone('Play', false);
  this.montreIcone('Restart', false);
  this.montreIcone('StepNext', false);
  this.montreIcone('GoEnd', false);
  this.montreIcone('XML', false);
  this.actions[this.indiceActionEnCours].execute(false);
};
/**
 * Fonction appelée quand on clique sur l'icône continuer de la figure
 */


IepDoc.prototype.onPlayContinuer = function () {
  if (this.indiceActionEnCours === this.actions.length) {
    this.onGoEnd();
    return;
  }

  this.iconPlay2.setAttribute('visibility', 'hidden');
  this.montreIcone('GoBegin', false);
  this.montreIcone('StepPrev', false);
  this.montreIcone('Pause', true);
  this.montreIcone('Play', false);
  this.montreIcone('Restart', false);
  this.montreIcone('StepNext', false);
  this.montreIcone('GoEnd', false);
  this.montreIcone('XML', false);
  this.animationEnCours = true;
  this.indiceActionEnCours++;
  this.actions[this.indiceActionEnCours].execute(false);
};
/**
 * Fonction appelée quand on clique sur l'icône de retour au début et jouer
 */


IepDoc.prototype.onRestart = function () {
  var t = this;

  if (this.animationEnCours) {
    this.animationEnCours = false;
    setTimeout(function () {
      t.onRestart();
    }, 100);
    return;
  }

  if (this.animationEnCours) return;
  this.animationEnCours = false;
  this.initialise();
  this.indiceActionEnCours = 0;
  this.onPlay();
};
/**
 * Fonction appelée quand on clique sur l'icône pause de la figure
 */


IepDoc.prototype.onPause = function () {
  var t = this;
  t.animationEnCours = false; // On laisse 5 dixièmes de seconde pour finir l'animation en cours.

  setTimeout(function () {
    t.montreIcone('GoBegin', true);
    t.montreIcone('StepPrev', true);
    t.montreIcone('Pause', false);
    t.montreIcone('Play', true);
    t.montreIcone('Restart', true);
    t.montreIcone('StepNext', true);
    t.montreIcone('GoEnd', true);
    t.montreIcone('XML', true);
  }, 500);
};
/**
 * Fonction appelée quand on clique sur l'icône suivant de la figure (pas à pas)
 */


IepDoc.prototype.onStepNext = function () {
  var nbActions = this.actions.length;
  this.animationEnCours = false;

  if (this.indiceActionEnCours < nbActions) {
    if (this.actions[this.indiceActionEnCours].actionVisible()) this.indiceActionEnCours++;else this.indiceActionEnCours = this.indiceProchaineActionVisible(this.indiceActionEnCours) + 1;
    this.executeJusque(this.indiceActionEnCours - 1);
  }

  var derniereAction = this.indiceActionEnCours === this.actions.length;
  this.montreIcone('GoBegin', true);
  this.montreIcone('StepPrev', true);
  this.montreIcone('Pause', false);
  this.montreIcone('Play', !derniereAction);
  this.montreIcone('Restart', true);
  this.montreIcone('StepNext', !derniereAction);
  this.montreIcone('GoEnd', !derniereAction);
  this.montreIcone('XML', true);
};
/**
 * Fonction appelée quand on clique sur l'icône précédent de la figure (pas à pas)
 */


IepDoc.prototype.onStepPrev = function () {
  this.animationEnCours = false; // this.indiceActionEnCours--;

  this.indiceActionEnCours = this.indicePrecedenteActionVisible(this.indiceActionEnCours - 1);
  if (this.indiceActionEnCours > 0) this.executeJusque(this.indiceActionEnCours - 1);
  var premiereAction = this.indiceActionEnCours === 0;
  this.montreIcone('GoBegin', !premiereAction);
  this.montreIcone('StepPrev', !premiereAction);
  this.montreIcone('Pause', false);
  this.montreIcone('Play', true);
  this.montreIcone('Restart', false);
  this.montreIcone('StepNext', true);
  this.montreIcone('GoEnd', true);
  this.montreIcone('XML', true);
};
/**
 * Fonction cachant tous les éléments graphiques de la figure, réinitialisant tous les outils
 * et réinitialisant la position de tous les objets ou instruments qui peuvent être translatés, tournés ou zoomés
 * à savoir les points et images
 */


IepDoc.prototype.initialise = function () {
  var i, el;
  var svg = this.svg;

  for (i = 0; i < svg.childNodes.length; i++) {
    el = svg.childNodes[i];

    if (el !== this.barreIcones) {
      try {
        // Pour compatibilité avec explorer
        svg.childNodes[i].setAttribute('visibility', 'hidden');
      } catch (e) {}
    }
  }

  for (i = 0; i < this.actions.length; i++) {
    var action = this.actions[i];
    if (action instanceof ActionCreation) action.objet.initialisePosition();
  }

  this.initialiseOutils();
};
/**
 * Fonction donnant l'état de visibilité de l'instrument instrument après l'exécution
 * de l'action d'indice indaction
 * @param {iep.instrumentAncetre} instrument
 * @param {Integer} indaction
 * @returns {boolean}
 */


IepDoc.prototype.getInstrumentVisibility = function (instrument, indaction) {
  if (indaction === -1) return false;
  var action;
  var visible = false;

  for (var i = 0; i <= indaction; i++) {
    action = this.actions[i];

    if (action instanceof ActionMontrerInstrument) {
      if (action.instrument === instrument) visible = true;
    } else if (action instanceof ActionMasquerInstrument) {
      if (action.instrument === instrument) visible = false;
    }
  }

  return visible;
};
/**
 * Fonction donnant l'état de visibilité de l'objet objet après l'exécution
 * de l'action d'indice indaction
 * @param {iep.ObjetBase} objet
 * @param {Integer} indaction
 * @returns {boolean}
 */


IepDoc.prototype.getObjectVisibility = function (object, indaction) {
  if (indaction === -1) return false;
  var action;
  var visible = false;

  for (var i = 0; i <= indaction; i++) {
    action = this.actions[i];

    if (action instanceof ActionMontrer) {
      if (action.objet === object) visible = true;
    } else if (action instanceof ActionMasquer) {
      if (action.objet === object) visible = false;
    }
  }

  return visible;
};
/**
 * Fonction donnant l'état du compas (levé ou couché) après l'exécution
 * de l'action d'indice indaction.
 * Si le compas est couché, renvoie "couche", s'il est leve, renvoie "leve"
 * @param {Integer} indaction
 * @returns {string}
 */


IepDoc.prototype.getCompasStatus = function (indaction) {
  if (indaction === -1) return 'couche';
  var couche = true;
  var action;

  for (var i = 0; i <= indaction; i++) {
    action = this.actions[i];

    if (action instanceof ActionCoucherCompas) {
      couche = true;
    } else if (action instanceof ActionLeverCompas) {
      couche = false;
    }
  }

  return couche ? 'couche' : 'leve';
};
/**
 * Fonction renvoyant l'indice de la prochaine action qui aura une action visible sur la figure
 * à partir de l'indice ind
 * Si aucune action visible ne figure après ind, renvoie this.actions.length
 * @param {type} ind
 * @returns {iep.iepDoc.prototype.indiceProchaineActionVisible.i|iep.iepDoc.actions.length}
 */


IepDoc.prototype.indiceProchaineActionVisible = function (ind) {
  if (ind >= this.actions.length) return this.actions.length - 1;

  for (var i = ind; i < this.actions.length; i++) {
    if (this.actions[i].actionVisible()) return i;
  }

  return this.actions.length - 1;
};
/**
 * Fonction renvoyant l'indice de la précédene action qui aura une action visible sur la figure
 * à partir de l'indice ind
 * Si aucune action visible ne figure avant ind, renvoie 0
 * @param {type} ind
 * @returns {iep.iepDoc.prototype.indiceProchaineActionVisible.i|iep.iepDoc.actions.length}
 */


IepDoc.prototype.indicePrecedenteActionVisible = function (ind) {
  if (ind < 0) return 0;
  if (ind === this.actions.length) ind--;

  for (var i = ind; i >= 0; i--) {
    if (this.actions[i].actionVisible()) return i;
  }

  return 0;
};
/**
 * Fonction montrant les instruments à leur étape de visibilité à l'étape n
 * @param {Integer} n : l'indice de la dernière action exécutée
 */


IepDoc.prototype.montreInstrumentsEtape = function (n) {
  var visible = this.getInstrumentVisibility(this.compas, n);
  if (this.compas.leve) this.compasLeve.montre(visible);else this.compas.montre(visible);
  visible = this.getInstrumentVisibility(this.crayon, n);
  this.crayon.montre(visible);
  visible = this.getInstrumentVisibility(this.equerre, n);
  this.equerre.montre(visible);
  visible = this.getInstrumentVisibility(this.rapporteur, n);
  this.rapporteur.montre(visible);
  visible = this.getInstrumentVisibility(this.regle, n);
  this.regle.montre(visible);
  visible = this.getInstrumentVisibility(this.requerre, n);
  this.requerre.montre(visible);
};
/**
 * Fonction excécutant sans animation toutes les actions de la figure jusqu'à l'indice indfin compris
 * @param {Integer} indfin
 */


IepDoc.prototype.executeJusque = function (indfin) {
  if (indfin >= this.actions.length) return;
  this.initialise();
  this.initialiseOutils();
  this.animationEnCours = false;

  for (var i = 0; i <= indfin; i++) {
    this.actions[i].execute(true);
  } // true pour que l'exécution soit immédiate


  this.montreInstrumentsEtape(indfin);
};
/**
 * Fonction recherchant s'il y a déjà dans la liste doc.elements un élément de même id et de même
 * nature.
 * Si oui on remplace l'ancien. Sinon on rajoute element à la liste.
 * @param {iep.doc.elements[]} element
 */


IepDoc.prototype.addElement = function (element) {
  var i, el;

  for (i = 0; i < this.elements.length; i++) {
    el = this.elements[i]; // S'il existe un élément de même type et de même id, on le remplace par le nouveau

    if (el.id === element.id && el.objet === element.objet) {
      this.elements[i] = element;
      return;
    }
  } // S'il n'y a pas d'élément du même type et de même id, on ajoute le nouvel élément


  this.elements.push(element);
};
/**
 * Fonction appelée dans le cas où on est sur que la liste doc.elements ne contient pas
 * déjà un élément de même id et de même nature que element
 * @param {type} element
 */


IepDoc.prototype.pushElement = function (element) {
  this.elements.push(element);
};
/**
 * Fonction renvoyant l'objet de elements d'id égale à id s'il y en a une et sinon null
 * @param {type} id
 * @returns {Boolean|iep.iepDoc.elements|iep.iepDoc.prototype.element.el}
 * Attention : Le quadrillage est le seul objet a ne pas avoir d'id et il ne peut y en avoir qu'un par figure
 */


IepDoc.prototype.getElement = function (id, nature) {
  var i, el;

  if (nature === 'quadrillage') {
    for (i = 0; i < this.elements.length; i++) {
      el = this.elements[i];
      if (el.objet === nature) return el;
    }
  } else {
    for (i = 0; i < this.elements.length; i++) {
      el = this.elements[i];
      if (el.id === id && el.objet === nature) return el;
    }
  }

  return null;
};
/**
 * Fonction remplaçant l'élément de elements did id par e s'il y en a un
 * S'il n'y a pas délément d'id id renvoie false
 * @param {type} id
 * @param {type} e
 * @returns {boolean}
 */


IepDoc.prototype.setElement = function (id, e) {
  for (var i = 0; i < this.elements.length; i++) {
    if (this.elements[i].id === id) {
      this.elements[i] = e;
      return true;
    }
  }

  return false;
};
/**
 * Fonction ajoutant l'action action à la liste d'actions listeActions
 * @param {type} action
 */


IepDoc.prototype.ajouteAction = function (action) {
  // On donne à action un indice por qu'lle sache quelle est son rand dans la liste
  // Ainsi elle pourra ensuite indiquer si son action sur la figure est visible ou non
  action.indice = this.actions.length;
  this.actions.push(action);
};
/**
 * Fonction créant toutes les actions de la figure
 * @param {type} ind
 */


IepDoc.prototype.creeActions = function () {
  var ind, el, at, ato, objet, action, forme, xcrayon, ycrayon, id, angle, sens, vitesse, abs, ord, cibles, coord, tempo, len, ecart, v1, echelle, point, cible;

  for (ind = 0; ind < this.tabact.length; ind++) {
    el = this.tabact[ind];
    id = this.getId(el);
    at = el.getAttribute('mouvement');
    tempo = el.getAttribute('tempo');

    try {
      var abscisse_bas_droite = void 0,
          ecartAngle = void 0; // faut éviter de déclarer dans un case directement, on le fait dans le bloc parent (eslint no-case-declarations)

      switch (at) {
        case 'creer':
          ato = el.getAttribute('objet'); // Si on a déjà créé un objet avec le même id c'est une erreur et on saute a création

          if (this.getElement(id, ato) !== null) break;

          if (ato != null) {
            switch (ato) {
              case 'point':
                objet = new Point(this, id, parseFloat(this.getAbs(el)), parseFloat(this.getOrd(el)), this.getCouleur(el), this.getEpaisseur(el));
                action = new ActionCreation(this, id, objet, tempo);
                break;

              case 'angle':
                objet = new Angle(this, id, this.getAbs(el), this.getOrd(el), el.getAttribute('rayon'), el.getAttribute('angle1'), el.getAttribute('angle2'), this.getCouleur(el), this.getEpaisseur(el), this.getOpaciteFond(el), el.getAttribute('forme'));
                action = new ActionCreation(this, id, objet, tempo);
                break;

              case 'angle_droit':
                objet = new AngleDroit(this, id, el.getAttribute('abscisse_sommet'), el.getAttribute('ordonnee_sommet'), el.getAttribute('abscisse_inter'), el.getAttribute('ordonnee_inter'), this.getCouleur(el), this.getEpaisseur(el));
                action = new ActionCreation(this, id, objet, tempo);
                break;

              case 'longueur':
                objet = new MarqueSegment(this, id, this.getAbs(el), this.getOrd(el), this.getCouleur(el), this.getEpaisseur(el), el.getAttribute('forme'));
                action = new ActionCreation(this, id, objet, tempo);
                break;

              case 'texte':
                objet = new Texte(this, id, this.getAbs(el), this.getOrd(el), this.getCouleur(el), el.getAttribute('taille'));
                action = new ActionCreation(this, id, objet, tempo);
                break;

              case 'repere':
                objet = new Repere(this, el.getAttribute('hauteur'), el.getAttribute('largeur'), el.getAttribute('haut'), el.getAttribute('gauche'), el.getAttribute('Xgrad'), el.getAttribute('Ygrad'), el.getAttribute('Xmin'), el.getAttribute('Xmax'), el.getAttribute('Ymin'), el.getAttribute('Ymax'), this.getCouleur(el), el.getAttribute('grille'), el.getAttribute('axes'), el.getAttribute('etiquettes'));
                action = new ActionCreation(this, id, objet, tempo);
                break;

              case 'quadrillage':
                abscisse_bas_droite = el.getAttribute('abscisse_bas_droite');

                if (abscisse_bas_droite != null) {
                  // Syntaxe non documentée dans la doc
                  abscisse_bas_droite = parseFloat(abscisse_bas_droite) / 30;
                  var ordonnee_bas_droite = parseFloat(el.getAttribute('ordonnee_bas_droite')) / 30;
                  var abscisse_haut_gauche = parseFloat(el.getAttribute('abscisse_haut_gauche')) / 30;
                  var ordonnee_haut_gauche = parseFloat(el.getAttribute('ordonnee_haut_gauche')) / 30;
                  objet = new Quadrillage(this, el.getAttribute('quadrillage'), String(ordonnee_bas_droite - ordonnee_haut_gauche), String(abscisse_bas_droite - abscisse_haut_gauche), ordonnee_haut_gauche, abscisse_haut_gauche, this.getCouleur(el));
                  action = new ActionCreation(this, 'quadrillageIEP', objet, tempo);
                } else {
                  objet = new Quadrillage(this, el.getAttribute('quadrillage'), el.getAttribute('hauteur'), el.getAttribute('largeur'), el.getAttribute('haut'), el.getAttribute('gauche'), this.getCouleur(el));
                }

                action = new ActionCreation(this, 'quadrillageIEP', objet, tempo);
                break;

              case 'axe':
                objet = new Axe(this, el.getAttribute('pente'), el.getAttribute('largeur'), el.getAttribute('haut'), el.getAttribute('gauche'), el.getAttribute('distanceBord'), el.getAttribute('Xgrad'), el.getAttribute('Xmin'), el.getAttribute('Xmax'), this.getCouleur(el));
                action = new ActionCreation(this, id, objet, tempo);
                break;

              case 'gabarit':
                ecartAngle = el.getAttribute('ecart_angle');
                if (ecartAngle === null) ecartAngle = '-30';
                objet = new Gabarit(this, id, el.getAttribute('abscisse'), el.getAttribute('ordonnee'), el.getAttribute('rayon'), ecartAngle, this.getCouleur(el), this.getEpaisseur(el), this.getCouleurFond(el), this.getOpaciteTrait(el));
                action = new ActionCreation(this, id, objet, tempo);
                break;

              default:
                action = null;
              // Pour ce que j'aurais oublié d'implémenter
            }

            if (action) {
              this.ajouteAction(action);
              action.setReady();
            }
          }

          break;

        case 'montrer':
          ato = el.getAttribute('objet');

          if (kernel.estInstrument(ato)) {
            abs = el.getAttribute('abscisse');
            ord = el.getAttribute('ordonnee');
            action = new ActionMontrerInstrument(this, this[ato], abs, ord, tempo);
            if ((ato === 'crayon' || ato === 'compas') && abs != null && ord != null) this[ato].translate(parseFloat(abs), parseFloat(ord));
          } else action = new ActionMontrer(this, id, ato, tempo);

          this.ajouteAction(action);
          action.setReady();
          break;

        case 'masquer':
          ato = el.getAttribute('objet');
          if (kernel.estInstrument(ato)) action = new ActionMasquerInstrument(this, this[ato], tempo);else action = new ActionMasquer(this, id, ato, tempo);
          this.ajouteAction(action);
          action.setReady();
          break;

        case 'tracer':
          ato = el.getAttribute('objet');
          cible = el.getAttribute('cible');

          if (cible != null) {
            objet = this.getElement(cible, 'point'); // Le point vers lequel on veut translater l'objet

            abs = objet.xcons;
            ord = objet.ycons;
          } else {
            abs = parseFloat(this.getAbs(el));
            ord = parseFloat(this.getOrd(el));
          }

          switch (ato) {
            case 'crayon':
              forme = el.getAttribute('forme');
              xcrayon = this.crayon.x;
              ycrayon = this.crayon.y;
              id = this.getId(el);

              switch (forme) {
                case null:
                  // Cas d'un segment
                  if (isNaN(abs) || isNaN(ord)) {
                    // Cas d'une forme libre pas déclarée
                    objet = new LigneContinue(this, id, this.crayon.x, this.crayon.y, el.getAttribute('abscisses'), el.getAttribute('ordonnees'), this.getCouleur(el), this.getEpaisseur(el), this.getOpaciteTrait(el), this.getStyleTrait(el), this.getStyle(el));
                    len = objet.abs.length;
                    this.crayon.translate(objet.abs[len - 1], objet.ord[len - 1]);
                  } else {
                    objet = new Segment(this, id, xcrayon, ycrayon, abs, ord, this.getCouleur(el), this.getEpaisseur(el), this.getOpaciteTrait(el), this.getStyleTrait(el), this.getStyle(el));
                    this.crayon.translate(abs, ord);
                  }

                  break;

                case 'droite':
                  // Cas d'une droite
                  if (isNaN(abs) || isNaN(ord)) break;
                  objet = new Droite(this, id, xcrayon, ycrayon, abs, ord, this.getCouleur(el), this.getEpaisseur(el), this.getOpaciteTrait(el), this.getStyleTrait(el), this.getStyle(el));
                  this.crayon.translate(abs, ord);
                  break;

                case 'demidroite':
                  // Cas d'une demi-droite
                  if (isNaN(abs) || isNaN(ord)) break;
                  objet = new DemiDroite(this, id, xcrayon, ycrayon, abs, ord, this.getCouleur(el), this.getEpaisseur(el), this.getOpaciteTrait(el), this.getStyleTrait(el), this.getStyle(el));
                  this.crayon.translate(abs, ord);
                  break;

                case 'polygone':
                  cibles = el.getAttribute('cibles');

                  if (cibles === null) {
                    objet = new Polygone(this, id, el.getAttribute('abscisses'), el.getAttribute('ordonnees'), this.getCouleur(el), this.getEpaisseur(el), this.getCouleurFond(el), el.getAttribute('opacite'));
                  } else {
                    coord = this.getCoord(cibles);
                    objet = new Polygone(this, id, coord.abs, coord.ord, this.getCouleur(el), this.getEpaisseur(el), this.getCouleurFond(el), el.getAttribute('opacite'));
                  }

                  len = objet.abs.length;
                  this.crayon.translate(objet.abs[len - 1], objet.ord[len - 1]);
                  break;

                case 'libre':
                  objet = new LigneContinue(this, id, this.crayon.x, this.crayon.y, el.getAttribute('abscisses'), el.getAttribute('ordonnees'), this.getCouleur(el), this.getEpaisseur(el), this.getOpaciteTrait(el), this.getStyleTrait(el), this.getStyle(el));
                  len = objet.abs.length;
                  this.crayon.translate(objet.abs[len - 1], objet.ord[len - 1]);
              }

              vitesse = el.getAttribute('vitesse');
              if (vitesse == null) vitesse = '4';
              action = new ActionCreation(this, this.getId(el), objet, tempo, vitesse);
              this.ajouteAction(action);
              action.setReady();
              break;

            case 'trait':
              vitesse = el.getAttribute('vitesse');
              if (vitesse === null) vitesse = 10000; // Instantané si vitesse pas précisé

              objet = new Segment(this, id, el.getAttribute('abscisse1'), el.getAttribute('ordonnee1'), el.getAttribute('abscisse2'), el.getAttribute('ordonnee2'), this.getCouleur(el), this.getEpaisseur(el), this.getOpaciteTrait(el), this.getStyleTrait(el), this.getStyle(el));
              action = new ActionCreation(this, this.getId(el), objet, tempo, vitesse); // Pas d'animation pour les traits

              this.ajouteAction(action);
              action.setReady();
              break;

            case 'compas':
              objet = new Arc(this, id, this.compas.x, this.compas.y, this.compas.ecart, this.getAngle(el, 'debut'), this.getAngle(el, 'fin'), this.getCouleur(el), this.getEpaisseur(el), this.getOpaciteTrait(el), this.getStyleTrait(el));
              vitesse = el.getAttribute('sens');
              if (vitesse == null) vitesse = '8';
              action = new ActionCreation(this, this.getId(el), objet, tempo, vitesse);
              this.ajouteAction(action);
              action.setReady();
              break;

            case 'angle_droit':
              // Certains scripts utilisent tracer au lieu de créer pour les angles droits ...
              objet = new AngleDroit(this, id, el.getAttribute('abscisse_sommet'), el.getAttribute('ordonnee_sommet'), el.getAttribute('abscisse_inter'), el.getAttribute('ordonnee_inter'), this.getCouleur(el), this.getEpaisseur(el));
              action = new ActionCreation(this, this.getId(el), objet, tempo, vitesse);
              this.ajouteAction(action);
              action.setReady();
              break;
          }

          break;

        case 'rotation':
          ato = el.getAttribute('objet');
          sens = el.getAttribute('sens');

          if (kernel.estInstrument(ato)) {
            cible = el.getAttribute('cible'); // Au cas ou un auteur a mis à la fois un attribut cible et un attribut angle,
            // C'est l'attribut angle qui semble l'emporter (constaté par des tests).

            if (cible != null && el.getAttribute('angle') === null) {
              objet = this.getElement(cible, 'point'); // Le point vers lequel on veut translater l'objet

              abs = objet.xcons;
              ord = objet.ycons;
              v1 = new Vect(this[ato].x, this[ato].y, abs, ord);
              if (v1.presqueNul()) angle = 0;else angle = -v1.angle();
            } else {
              if (ato === 'compas') angle = this.getAngle(el, 'angle');else angle = el.getAttribute('angle');
            }

            action = new ActionRotationInstrument(this, this[ato], angle, tempo, sens);
          } else {
            // On vérifie que l'action est cohérente (que l'objet cible existe)
            if (this.getElement(id, ato) === null) action = null;else {
              angle = el.getAttribute('angle');
              action = new ActionRotationObjet(this, id, angle, ato, tempo, sens);
            }
          }

          if (action !== null) {
            this.ajouteAction(action);
            action.setReady();
          }

          break;

        case 'translation':
          ato = el.getAttribute('objet');
          cible = el.getAttribute('cible'); // Au cas où on a spécifié abscisse et ordonnée et cible, cible aa priorité

          if (cible != null) {
            objet = this.getElement(cible, 'point'); // Le point vers lequel on veut translater l'objet

            abs = objet.xcons;
            ord = objet.ycons;
          } else {
            abs = parseFloat(this.getAbs(el));
            ord = parseFloat(this.getOrd(el));
          }

          vitesse = el.getAttribute('vitesse');

          if (kernel.estInstrument(ato)) {
            this[ato].x = abs;
            this[ato].y = ord;
            action = new ActionTranslationInstrument(this, this[ato], abs, ord, tempo, vitesse);
          } else {
            // On vérifie que l'action est cohérente
            if (this.getElement(id, ato) === null) action = null;else {
              // Dans le cas où on translate un point il faut modifier ses champs xcons et ycons
              // pour que tout objet ultérieur l'utilisant comme cible soit correctement initialisé
              if (ato === 'point') {
                point = this.getElement(id, 'point');
                point.xcons = abs;
                point.ycons = ord;
              }

              action = new ActionTranslationObjet(this, id, abs, ord, ato, tempo, vitesse);
            }
          }

          if (action !== null) {
            this.ajouteAction(action);

            if (ato === 'crayon' || ato === 'compas') {
              this[ato].translate(abs, ord);
            }

            action.setReady();
          }

          break;

        case 'zoom':
          ato = el.getAttribute('objet');
          vitesse = el.getAttribute('vitesse');

          if (kernel.estInstrument(ato)) {
            echelle = el.getAttribute('echelle');
            this[ato].zoomfactor = parseFloat(echelle) / 100;
            action = new ActionZoomInstrument(this, this[ato], echelle, tempo, vitesse);
          } else {
            // On ne peut zoomer que sur un texte ou une image
            if (ato === 'texte' || ato === 'image') action = new ActionZoomObjet(this, id, el.getAttribute('echelle'), ato, tempo, vitesse);else action = null;
          }

          if (action !== null) {
            this.ajouteAction(action);
            action.setReady();
          }

          break;

        case 'ecarter':
          cible = el.getAttribute('cible');

          if (cible != null) {
            objet = this.getElement(cible, 'point'); // Le point vers lequel on veut translater l'objet

            v1 = new Vect(this.compas.x, this.compas.y, objet.xcons, objet.ycons);
            ecart = v1.norme();
          } else ecart = parseFloat(el.getAttribute('ecart')) * this.compas.zoomfactor;

          this.compas.ecart = ecart;
          action = new ActionEcarterCompas(this, ecart, tempo, el.getAttribute('vitesse'));
          this.ajouteAction(action);
          action.setReady();
          break;

        case 'lever':
          action = new ActionLeverCompas(this, tempo);
          this.ajouteAction(action);
          action.setReady();
          break;

        case 'coucher':
          action = new ActionCoucherCompas(this, tempo);
          this.ajouteAction(action);
          action.setReady();
          break;

        case 'masquer_nombres':
          action = new ActionMontrerNombres(this, false, tempo);
          this.ajouteAction(action);
          action.setReady();
          break;

        case 'montrer_nombres':
          action = new ActionMontrerNombres(this, true, tempo);
          this.ajouteAction(action);
          action.setReady();
          break;

        case 'graduations':
          ato = el.getAttribute('objet');
          action = new ActionMontrerGraduations(this, this[ato], true, tempo);
          this.ajouteAction(action);
          action.setReady();
          break;

        case 'vide':
          ato = el.getAttribute('objet');
          action = new ActionMontrerGraduations(this, this[ato], false, tempo);
          this.ajouteAction(action);
          action.setReady();
          break;

        case 'retourner':
          this.compasRetourne = !this.compasRetourne;
          action = new ActionRetourner(this, tempo);
          this.ajouteAction(action);
          action.setReady();
          break;

        case 'glisser':
          action = new ActionGlisser(this, el.getAttribute('abscisse'), tempo, el.getAttribute('vitesse'));
          this.ajouteAction(action);
          action.setReady();
          break;

        case 'chargement':
          // Attention, pour l'image, pas d'appel de creeAction(ind+1)
          // car c'est une fonction de callBack qui s'en charge une fois l'image chargée
          objet = new Imag(this, id, el.getAttribute('url'));
          objet.prepareAction(); // Pas de action.setReady car il faut attendre que la figure soit chargée

          break;

        case 'ecrire':
          // Texte
          action = new ActionEcrireTexte(this, id, this.getCouleur(el), el.getAttribute('taille'), el.getAttribute('texte'), el.getAttribute('style'), this.getCouleurFondTexte(el), el.getAttribute('opacite_fond'), this.getCouleurCadre(el), el.getAttribute('epaisseur_cadre'), el.getAttribute('marge'), el.getAttribute('marge_gauche'), el.getAttribute('marge_droite'), el.getAttribute('marge_haut'), el.getAttribute('marge_bas'), tempo);
          this.ajouteAction(action);
          action.prepare();
          break;

        case 'nommer':
          // on regarde si le point à nommer a été créé sinon erreur de script
          if (this.getElement(id, 'point') !== null) {
            // Dans certains script on nommait un point avec une chaîne vide ce qui n'a pas de sens.
            var nomPoint = el.getAttribute('nom');

            if (nomPoint !== '') {
              objet = new NomPoint(this, id, this.getAbs(el), this.getOrd(el), nomPoint, this.getCouleur(el));
              action = new ActionNommerPoint(this, objet, tempo);
              this.ajouteAction(action);
              action.prepare();
            }
          }

          break;

        case 'pause':
          action = new ActionPause(this, tempo);
          this.ajouteAction(action);
          action.setReady();
          break;

        case 'modifier_longueur':
          ato = el.getAttribute('objet');
          action = new ActionModifierLongueur(this, this[ato], el.getAttribute('longueur'), tempo);
          this.ajouteAction(action);
          action.setReady();
          break;
        // Modification du rayon d'un gabarit

        case 'modifier_rayon':
          ato = el.getAttribute('objet');
          action = new ActionModifierRayon(this, id, el.getAttribute('rayon'), ato, tempo);
          this.ajouteAction(action);
          action.setReady();
          break;
      }
    } catch (e) {// On ne fait rien si xml incorrect
    }
  } // Une fois les actions créées on attend que les éléments asynchrones soient prêts pour continuer
  // en laissant 10 secondes maxi pour le chargement de la figure


  var self = this;
  setTimeout(function () {
    if (!self.started) {
      console.error('10s après l’instanciation IepDoc la figure n’est toujours pas prête');
      window.alert('Le chargement de la figure IEP a échoué');
      self.started = true;
    }
  }, 20000); // On laisse maxi 10 secondes à la figure pour se charger

  this.waitForReadyState();
};
/**
 * Si immediat est true, les actions sont exécutées immédiatement, sans animation et sans temporisation
 * @param {type} immediat
 */


IepDoc.prototype.execute = function (immediat) {
  this.indiceActionEnCours = 0;
  this.actions[0].execute(immediat);
};
/**
 * Fonction appelée lorsqu'une action a été exécutée pour passer à l'exécution suivante.
 * Si immediat est true, on retourne sans rien faire
 * Si animationECours en false, on revient sans rien faire (pour arrêter une animation en cours)
 * Si l'action.tempo n'est pas nul, on attend action.tempo millièmes de seconde avant de passer à l'action suivante
 * indiceActionEnCours est l'indice de la prochaine action à exécuter
 * @param {boolean} immediat
 */


IepDoc.prototype.actionSuivante = function (immediat) {
  var imm = arguments.length === 0 ? false : immediat;

  if (!this.animationEnCours && !imm) {
    // if (this.indiceActionEnCours != this.actions.length-1) this.indiceActionEnCours++;
    return;
  } // Pas de passage à l'action suivante pour le mode pas à pas.


  var action = this.actions[this.indiceActionEnCours];
  if (action.tempo === null || imm) this.passageActionSuivante(imm);else {
    var t = this;
    setTimeout(function () {
      t.passageActionSuivante(imm);
    }, action.tempo);
  }
};
/**
 * Fonction appelée par actionSuivante pour passer à l'action suivante
 * indiceActionEnCours est l'indice de la prochaine action à exécuter
 * @param {boolean} immediat
 */


IepDoc.prototype.passageActionSuivante = function (immediat) {
  // IL peut arriver qu'on arrive ici alors qu'on a cliqué pour arrêter une animation, cliqué rapidement
  // pour aller à la fin alors que l'animation n'était pas finie...
  if (this.indiceActionEnCours >= this.actions.length) return;

  if (this.indiceActionEnCours !== this.actions.length - 1) {
    this.indiceActionEnCours++;
    this.actions[this.indiceActionEnCours].execute(immediat);
  } else {
    this.indiceActionEnCours++;
    this.montreIcone('GoBegin', true);
    this.montreIcone('StepPrev', true);
    this.montreIcone('Pause', false);
    this.montreIcone('Play', false);
    this.montreIcone('StepNext', false);
    this.montreIcone('GoEnd', false);
    this.montreIcone('Restart', true);
    this.montreIcone('XML', true);
    this.animationEnCours = false;
  }
}; // Attention : Pour les fonctions suivantes ne pas utiliser de test d'identité ===

/**
 * Fonction renvoyant l'attribut couleur d'une action
 * @param {Element} el element retourné par this.xmldoc.getElementsByTagName("action")[]
 * @returns {string|Couleur}
 */


IepDoc.prototype.getCouleur = function (el) {
  var coul = el.getAttribute('couleur');
  if (coul === null) return 'black';else return kernel.couleur(coul);
};

IepDoc.prototype.getCouleurCadre = function (el) {
  var coul = el.getAttribute('couleur_cadre');
  if (coul === null) return null;else return kernel.couleur(coul);
};
/**
 * Fonction renvoyant l'attribut couleur de fond d'une action
 * @param {Element} el element retourné par this.xmldoc.getElementsByTagName("action")[]
 * @returns {string|Couleur}
 */


IepDoc.prototype.getCouleurFond = function (el) {
  var coul = el.getAttribute('couleur_fond');
  if (coul === null) return null;else return kernel.couleur(coul);
};
/**
 * Fonction renvoyant l'attribut couleur de fond d'une action d'écriture de texte
 * @param {Element} el element retourné par this.xmldoc.getElementsByTagName("action")[]
 * @returns {string|Couleur}
 */


IepDoc.prototype.getCouleurFondTexte = function (el) {
  var coul = el.getAttribute('couleur_fond');
  if (coul === null) return null;else return kernel.couleur(coul);
};
/**
 * Fonction renvoyant l'attribut épaisseur d'une action
 * @param {Element} el element retourné par this.xmldoc.getElementsByTagName("action")[]
 * @returns {string|Couleur}
 */


IepDoc.prototype.getEpaisseur = function (el) {
  var ep = el.getAttribute('epaisseur');
  if (ep === null || parseInt(ep) === 0) return '1';else return ep;
};
/**
 * Fonction renvoyant l'attribut opacité de trait d'une action
 * @param {Element} el element retourné par this.xmldoc.getElementsByTagName("action")[]
 * @returns {string|Couleur}
 */


IepDoc.prototype.getOpaciteTrait = function (el) {
  var op = el.getAttribute('opacite');
  if (op === null) return '100';else return op;
};
/**
 * Fonction renvoyant l'attribut opacité de fond d'une action
 * @param {Element} el element retourné par this.xmldoc.getElementsByTagName("action")[]
 * @returns {string|Couleur}
 */


IepDoc.prototype.getOpaciteFond = function (el) {
  var op = el.getAttribute('opacite');
  if (op === null) return '50';else return op;
};
/**
 * Fonction renvoyant l'attribut le style de trait d'une action
 * @param {Element} el element retourné par this.xmldoc.getElementsByTagName("action")[]
 * @returns {string|Couleur}
 */


IepDoc.prototype.getStyleTrait = function (el) {
  var st = el.getAttribute('pointille');
  if (st == null) return 'continu';else return st;
};
/**
 * Fonction renvoyant l'attribut style de flèce d'une action
 * @param {Element} el element retourné par this.xmldoc.getElementsByTagName("action")[]
 * @returns {string|Couleur}
 */


IepDoc.prototype.getStyle = function (el) {
  var st = el.getAttribute('style');
  if (st == null) return 'normal';else return st;
};
/**
 * Fonction renvoyant l'attribut id d'une action
 * @param {Element} el element retourné par this.xmldoc.getElementsByTagName("action")[]
 * @returns {string|Couleur}
 */


IepDoc.prototype.getId = function (el) {
  return el.getAttribute('id');
};
/**
 * Fonction renvoyant l'attribut abscisse de trait d'une action
 * @param {Element} el element retourné par this.xmldoc.getElementsByTagName("action")[]
 * @returns {string|Couleur}
 */


IepDoc.prototype.getAbs = function (el) {
  return el.getAttribute('abscisse');
};
/**
 * Fonction renvoyant l'attribut ordonnée de trait d'une action
 * @param {Element} el element retourné par this.xmldoc.getElementsByTagName("action")[]
 * @returns {string|Couleur}
 */


IepDoc.prototype.getOrd = function (el) {
  var ord = el.getAttribute('ordonnee');
  if (ord !== null) return ord;else return el.getAttribute('ordonnée');
};
/**
 * Fonction renvoyant l'attribut point d'une action de création de polygône
 * @param {type} cible
 * @returns {iep.iepDoc.prototype.getCoord.res|Object}
 */


IepDoc.prototype.getCoord = function (cible) {
  var _this3 = this;

  var abs = '';
  var ord = '';
  cible.split(',').forEach(function (elt, i) {
    var sep = i === 0 ? '' : ',';

    var obj = _this3.getElement(elt, 'point');

    abs += sep + obj.xcons;
    ord += sep + obj.ycons;
  });
  return {
    abs: abs,
    ord: ord
  };
};
/**
 * Fonction renvoyant l'attribut angle d'une action
 * @param {Element} el element retourné par this.xmldoc.getElementsByTagName("action")[]
 * @returns {string|Couleur}
 */


IepDoc.prototype.getAngle = function (el, attribute) {
  var a = el.getAttribute(attribute);
  if (a == null) return null;
  if (this.compasRetourne) return String(parseFloat(a) + 180);else return a;
};
/**
 * Fonction créant l'icône play de la figure
 * Si teinte == "fonce", la couleur bleu foncée est employée
 * Si "teinte == "clair", la couleur gris clair est employée
 * @param {Integer} x : l'abscisse de l'icône relative à la barre d'icônes
 * @param {Integer} y : l'ordonnée de l'icône relative à la barre d'icônes
 * @param {string} teinte : "fonce" ou "clair"
 * @returns {iep.iconePlay.svg}
 */


IepDoc.prototype.iconePlay = function (x, y, teinte) {
  var svg = document.createElementNS(kernel.svgsn, 'svg');
  svg.setAttribute('x', x);
  svg.setAttribute('y', y);
  svg.setAttribute('width', 32);
  svg.setAttribute('height', 32);
  var circ = document.createElementNS(kernel.svgsn, 'circle'); // le cercle entourant l'icône

  svg.appendChild(circ);
  circ.setAttribute('cx', 16);
  circ.setAttribute('cy', 16);
  circ.setAttribute('r', 15);
  var filtre = teinte === 'fonce' ? 'filtrebleu' : 'filtregris';
  circ.setAttribute('style', 'stroke:none;' + 'fill:url(#radial' + teinte + '); filter:url(#' + filtre + ');');
  var pol = document.createElementNS(kernel.svgsn, 'polygon');
  pol.setAttribute('points', '-5,8 8,0 -5,-8');
  pol.setAttribute('style', 'stroke:white;fill:white;');
  pol.setAttribute('transform', 'translate(16,16)');
  svg.appendChild(pol);
  return svg;
};
/**
 * Fonction créant l'icône pause de la figure
 * Si teinte == "fonce", la couleur bleu foncée est employée
 * Si "teinte == "clair", la couleur gris clair est employée
 * @param {Integer} x : l'abscisse de l'icône relative à la barre d'icônes
 * @param {Integer} y : l'ordonnée de l'icône relative à la barre d'icônes
 * @param {string} teinte : "fonce" ou "clair"
 */


IepDoc.prototype.iconePause = function (x, y, teinte) {
  var svg = document.createElementNS(kernel.svgsn, 'svg');
  svg.setAttribute('x', x);
  svg.setAttribute('y', y);
  svg.setAttribute('width', 32);
  svg.setAttribute('height', 32);
  var circ = document.createElementNS(kernel.svgsn, 'circle'); // le cercle entourant l'icône

  svg.appendChild(circ);
  circ.setAttribute('cx', 16);
  circ.setAttribute('cy', 16);
  circ.setAttribute('r', 15);
  var filtre = teinte === 'fonce' ? 'filtrebleu' : 'filtregris';
  circ.setAttribute('style', 'stroke:none;' + 'fill:url(#radial' + teinte + '); filter:url(#' + filtre + ');');
  var rect = document.createElementNS(kernel.svgsn, 'rect');
  rect.setAttribute('x', -6);
  rect.setAttribute('y', -7);
  rect.setAttribute('width', 3);
  rect.setAttribute('height', 14);
  rect.setAttribute('style', 'stroke:white;fill:white;');
  rect.setAttribute('transform', 'translate(16,16)');
  svg.appendChild(rect);
  rect = document.createElementNS(kernel.svgsn, 'rect');
  rect.setAttribute('x', 2);
  rect.setAttribute('y', -7);
  rect.setAttribute('width', 3);
  rect.setAttribute('height', 14);
  rect.setAttribute('style', 'stroke:white;fill:white;');
  rect.setAttribute('transform', 'translate(16,16)');
  svg.appendChild(rect); // svg.setAttribute("transform","translate(16,16)");

  return svg;
};
/**
 * Fonction créant l'icône stepNext de la figure
 * Si teinte == "fonce", la couleur bleu foncée est employée
 * Si "teinte == "clair", la couleur gris clair est employée
 * @param {Integer} x : l'abscisse de l'icône relative à la barre d'icônes
 * @param {Integer} y : l'ordonnée de l'icône relative à la barre d'icônes
 * @param {string} teinte : "fonce" ou "clair"
 * @returns {iep.iconeStepNext.svg}
 */


IepDoc.prototype.iconeStepNext = function (x, y, teinte) {
  var svg = document.createElementNS(kernel.svgsn, 'svg');
  svg.setAttribute('x', x);
  svg.setAttribute('y', y);
  svg.setAttribute('width', 32);
  svg.setAttribute('height', 32);
  var circ = document.createElementNS(kernel.svgsn, 'circle'); // le cercle entourant l'icône

  svg.appendChild(circ);
  circ.setAttribute('cx', 16);
  circ.setAttribute('cy', 16);
  circ.setAttribute('r', 15);
  var filtre = teinte === 'fonce' ? 'filtrebleu' : 'filtregris';
  circ.setAttribute('style', 'stroke:none;' + 'fill:url(#radial' + teinte + '); filter:url(#' + filtre + ');');
  var rect = document.createElementNS(kernel.svgsn, 'rect');
  rect.setAttribute('x', 5);
  rect.setAttribute('y', -6);
  rect.setAttribute('width', 3);
  rect.setAttribute('height', 12);
  rect.setAttribute('style', 'stroke:white;fill:white;');
  rect.setAttribute('transform', 'translate(16,16)');
  svg.appendChild(rect);
  var pol = document.createElementNS(kernel.svgsn, 'polygon');
  pol.setAttribute('points', '-7,6 2,0 -7,-6');
  pol.setAttribute('style', 'stroke:white;fill:white;');
  pol.setAttribute('transform', 'translate(16,16)');
  svg.appendChild(pol);
  return svg;
};
/**
 * Fonction créant l'icône stepPrev de la figure
 * Si teinte == "fonce", la couleur bleu foncée est employée
 * Si "teinte == "clair", la couleur gris clair est employée
 * @param {Integer} x : l'abscisse de l'icône relative à la barre d'icônes
 * @param {Integer} y : l'ordonnée de l'icône relative à la barre d'icônes
 * @param {string} teinte : "fonce" ou "clair"
 * @returns {iep.iconeStepPrev.svg}
 */


IepDoc.prototype.iconeStepPrev = function (x, y, teinte) {
  var svg = document.createElementNS(kernel.svgsn, 'svg');
  svg.setAttribute('x', x);
  svg.setAttribute('y', y);
  svg.setAttribute('width', 32);
  svg.setAttribute('height', 32);
  var circ = document.createElementNS(kernel.svgsn, 'circle'); // le cercle entourant l'icône

  svg.appendChild(circ);
  circ.setAttribute('cx', 16);
  circ.setAttribute('cy', 16);
  circ.setAttribute('r', 15);
  var filtre = teinte === 'fonce' ? 'filtrebleu' : 'filtregris';
  circ.setAttribute('style', 'stroke:none;' + 'fill:url(#radial' + teinte + '); filter:url(#' + filtre + ');');
  var rect = document.createElementNS(kernel.svgsn, 'rect');
  rect.setAttribute('x', -7);
  rect.setAttribute('y', -6);
  rect.setAttribute('width', 3);
  rect.setAttribute('height', 12);
  rect.setAttribute('style', 'stroke:white;fill:white;');
  rect.setAttribute('transform', 'translate(16,16)');
  svg.appendChild(rect);
  var pol = document.createElementNS(kernel.svgsn, 'polygon');
  pol.setAttribute('points', '7,6 -2,0 7,-6');
  pol.setAttribute('style', 'stroke:white;fill:white;');
  pol.setAttribute('transform', 'translate(16,16)');
  svg.appendChild(pol);
  return svg;
};
/**
 * Fonction créant l'icône goEnd de la figure
 * Si teinte == "fonce", la couleur bleu foncée est employée
 * Si "teinte == "clair", la couleur gris clair est employée
 * @param {Integer} x : l'abscisse de l'icône relative à la barre d'icônes
 * @param {Integer} y : l'ordonnée de l'icône relative à la barre d'icônes
 * @param {string} teinte : "fonce" ou "clair"
 * @returns {iep.iconeGoEnd.svg}
 */


IepDoc.prototype.iconeGoEnd = function (x, y, teinte) {
  var svg = document.createElementNS(kernel.svgsn, 'svg');
  svg.setAttribute('x', x);
  svg.setAttribute('y', y);
  svg.setAttribute('width', 32);
  svg.setAttribute('height', 32);
  var circ = document.createElementNS(kernel.svgsn, 'circle'); // le cercle entourant l'icône

  svg.appendChild(circ);
  circ.setAttribute('cx', 16);
  circ.setAttribute('cy', 16);
  circ.setAttribute('r', 15);
  var filtre = teinte === 'fonce' ? 'filtrebleu' : 'filtregris';
  circ.setAttribute('style', 'stroke:none;' + 'fill:url(#radial' + teinte + '); filter:url(#' + filtre + ');');
  var pol = document.createElementNS(kernel.svgsn, 'polygon');
  pol.setAttribute('points', '-6,7 1,0 -6,-7');
  pol.setAttribute('style', 'stroke:white;fill:white;');
  pol.setAttribute('transform', 'translate(16,16)');
  svg.appendChild(pol);
  pol = document.createElementNS(kernel.svgsn, 'polygon');
  pol.setAttribute('points', '3,7 10,0 3,-7');
  pol.setAttribute('style', 'stroke:white;fill:white;');
  pol.setAttribute('transform', 'translate(16,16)');
  svg.appendChild(pol);
  return svg;
};
/**
 * Fonction créant l'icône goBegin de la figure
 * Si teinte == "fonce", la couleur bleu foncée est employée
 * Si "teinte == "clair", la couleur gris clair est employée
 * @param {Integer} x : l'abscisse de l'icône relative à la barre d'icônes
 * @param {Integer} y : l'ordonnée de l'icône relative à la barre d'icônes
 * @param {string} teinte : "fonce" ou "clair"
 * @returns {iep.iconeGoBegin.svg}
 */


IepDoc.prototype.iconeGoBegin = function (x, y, teinte) {
  var svg = document.createElementNS(kernel.svgsn, 'svg');
  svg.setAttribute('x', x);
  svg.setAttribute('y', y);
  svg.setAttribute('width', 32);
  svg.setAttribute('height', 32);
  var circ = document.createElementNS(kernel.svgsn, 'circle'); // le cercle entourant l'icône

  svg.appendChild(circ);
  circ.setAttribute('cx', 16);
  circ.setAttribute('cy', 16);
  circ.setAttribute('r', 15);
  var filtre = teinte === 'fonce' ? 'filtrebleu' : 'filtregris';
  circ.setAttribute('style', 'stroke:none;' + 'fill:url(#radial' + teinte + '); filter:url(#' + filtre + ');');
  var pol = document.createElementNS(kernel.svgsn, 'polygon');
  pol.setAttribute('points', '6,7 -1,0 6,-7');
  pol.setAttribute('style', 'stroke:white;fill:white;');
  pol.setAttribute('transform', 'translate(16,16)');
  svg.appendChild(pol);
  pol = document.createElementNS(kernel.svgsn, 'polygon');
  pol.setAttribute('points', '-3,7 -10,0 -3,-7');
  pol.setAttribute('style', 'stroke:white;fill:white;');
  pol.setAttribute('transform', 'translate(16,16)');
  svg.appendChild(pol);
  return svg;
};
/**
 * Fonction créant l'icône restart de la figure
 * Si teinte == "fonce", la couleur bleu foncée est employée
 * Si "teinte == "clair", la couleur gris clair est employée
 * @param {Integer} x : l'abscisse de l'icône relative à la barre d'icônes
 * @param {Integer} y : l'ordonnée de l'icône relative à la barre d'icônes
 * @param {string} teinte : "fonce" ou "clair"
 * @returns {iep.iconeRestart.svg}
 */


IepDoc.prototype.iconeRestart = function (x, y, teinte) {
  var svg = document.createElementNS(kernel.svgsn, 'svg');
  svg.setAttribute('x', x);
  svg.setAttribute('y', y);
  svg.setAttribute('width', 32);
  svg.setAttribute('height', 32);
  var circ = document.createElementNS(kernel.svgsn, 'circle'); // le cercle entourant l'icône

  svg.appendChild(circ);
  circ.setAttribute('cx', 16);
  circ.setAttribute('cy', 16);
  circ.setAttribute('r', 15);
  var filtre = teinte === 'fonce' ? 'filtrebleu' : 'filtregris';
  circ.setAttribute('style', 'stroke:none;' + 'fill:url(#radial' + teinte + '); filter:url(#' + filtre + ');');
  var path = document.createElementNS(kernel.svgsn, 'path');
  path.setAttribute('d', 'M 0 -8 A 8 8 -90 1 1 -8 0');
  path.setAttribute('style', 'stroke:white;stroke-width:3;fill:none;');
  path.setAttribute('marker-end', 'url(#markerarrow');
  path.setAttribute('transform', 'translate(16,16)');
  svg.appendChild(path);
  return svg;
};
/**
 * Fonction créant l'icône XML de la figure
 * Si teinte == "fonce", la couleur bleu foncée est employée
 * Si "teinte == "clair", la couleur gris clair est employée
 * @param {Integer} x : l'abscisse de l'icône relative à la barre d'icônes
 * @param {Integer} y : l'ordonnée de l'icône relative à la barre d'icônes
 * @param {string} teinte : "fonce" ou "clair"
 * @returns {iep.iconeXML.svg}
 */


IepDoc.prototype.iconeXML = function (x, y, teinte) {
  var svg = document.createElementNS(kernel.svgsn, 'svg');
  svg.setAttribute('x', x);
  svg.setAttribute('y', y);
  svg.setAttribute('width', 32);
  svg.setAttribute('height', 32);
  var circ = document.createElementNS(kernel.svgsn, 'circle'); // le cercle entourant l'icône

  svg.appendChild(circ);
  circ.setAttribute('cx', 16);
  circ.setAttribute('cy', 16);
  circ.setAttribute('r', 15);
  var filtre = teinte === 'fonce' ? 'filtrebleu' : 'filtregris';
  circ.setAttribute('style', 'stroke:none;' + 'fill:url(#radial' + teinte + '); filter:url(#' + filtre + ');');
  var text = document.createElementNS(kernel.svgsn, 'text');
  text.setAttribute('pointer-events', 'none');
  text.appendChild(document.createTextNode('XML'));
  text.setAttribute('x', 16);
  text.setAttribute('y', 21);
  text.setAttribute('style', 'font-family:Arial;font-size:9pt;fill:white;text-anchor:middle');
  svg.appendChild(text);
  return svg;
};
/**
 * Fonction rajoutant dans le svg parent des définitions defs qui serot utilisées
 * plusieurs fois dans les icônes (radialGradiant et marker pour la flèche de l'icône restart.
 * On les mets dans le svg barreIcones pour qu'il ne soient pas effacés lors de initialise()
 */


IepDoc.prototype.creeElementsPourIcones = function () {
  var defs = document.createElementNS(kernel.svgsn, 'defs');
  defs.appendChild(this.radialGradiant('#9999FF', '#000099', 'radialfonce'));
  this.svg.appendChild(defs);
  defs = document.createElementNS(kernel.svgsn, 'defs');
  defs.appendChild(this.radialGradiant('#CCCCCC', '#666666', 'radialclair'));
  this.svg.appendChild(defs);
  defs = document.createElementNS(kernel.svgsn, 'defs');
  defs.appendChild(this.radialGradiant('#FF9999', '#FF0000', 'radialrouge'));
  this.svg.appendChild(defs);
  defs = document.createElementNS(kernel.svgsn, 'defs');
  defs.appendChild(this.markerArrow('markerarrow'));
  this.barreIcones.appendChild(defs);
  defs = document.createElementNS(kernel.svgsn, 'defs');
  defs.appendChild(this.filtreEclairageIcone('filtrebleu'));
  this.barreIcones.appendChild(defs);
  defs = document.createElementNS(kernel.svgsn, 'defs');
  defs.appendChild(this.filtreEclairageIcone('filtregris'));
  this.barreIcones.appendChild(defs);
};
/**
 * Fonction renvoyant un radialGradiant utilisé pour le dessin des icônes
 * @param {string} clair : la couleur claire de gradiant
 * @param {string} fonce :  la couleur focée du gradiant
 * @param {Sring} id : l'id du gradiant
 * @returns {iep.radialGradiant.rg}
 */


IepDoc.prototype.radialGradiant = function (clair, fonce, id) {
  var rg = document.createElementNS(kernel.svgsn, 'radialGradient');
  rg.setAttribute('id', id);
  var stop = document.createElementNS(kernel.svgsn, 'stop');
  stop.setAttribute('offset', '0%');
  stop.setAttribute('style', 'stop-color:' + fonce + ';');
  rg.appendChild(stop);
  stop = document.createElementNS(kernel.svgsn, 'stop');
  stop.setAttribute('offset', '80%');
  stop.setAttribute('style', 'stop-color:' + clair + ';');
  rg.appendChild(stop);
  stop = document.createElementNS(kernel.svgsn, 'stop');
  stop.setAttribute('offset', '100%');
  stop.setAttribute('style', 'stop-color:' + fonce + ';');
  rg.appendChild(stop);
  return rg;
};
/**
 * Fonction renvoyant un marker qui sera utilisé pour la flèche de l'icône restart
 * @param {string} id : L'id du marker
 * @returns {iep.markerArrow.marker}
 */


IepDoc.prototype.markerArrow = function (id) {
  var marker = document.createElementNS(kernel.svgsn, 'marker');
  marker.setAttribute('id', id);
  marker.setAttribute('markerWidth', '4');
  marker.setAttribute('markerHeight', '4');
  marker.setAttribute('refX', '0');
  marker.setAttribute('refY', '2');
  marker.setAttribute('orient', 'auto');
  var pathm = document.createElementNS(kernel.svgsn, 'path');
  pathm.setAttribute('d', 'M 0 0 2 2 0 4 Z');
  pathm.setAttribute('style', 'fill:white;');
  marker.appendChild(pathm);
  return marker;
};
/**
 * Foncion renvoyant un filtre qui sera utilisé pour donner un aspect de relief aux icônes
 * @param {type} id : L'id du filtre
 * @returns {iep.filtreEclairageIcone.filter}
 */


IepDoc.prototype.filtreEclairageIcone = function (id) {
  var filter = document.createElementNS(kernel.svgsn, 'filter');
  filter.setAttribute('x', '0');
  filter.setAttribute('y', '0');
  filter.setAttribute('width', '100%');
  filter.setAttribute('height', '100%');
  filter.setAttribute('color-interpolation-filters', 'sRGB');
  var dl = document.createElementNS(kernel.svgsn, 'feDiffuseLighting');
  dl.setAttribute('lighting-color', 'white');
  dl.setAttribute('surfaceScale', '1');
  dl.setAttribute('diffuseConstant', '1.2');
  dl.setAttribute('in', 'SourceGraphic');
  dl.setAttribute('result', 'diffOut');
  var pointLight = document.createElementNS(kernel.svgsn, 'fePointLight');
  pointLight.setAttribute('x', '5');
  pointLight.setAttribute('y', '5');
  pointLight.setAttribute('z', '15');
  dl.appendChild(pointLight);
  filter.appendChild(dl);
  var fc = document.createElementNS(kernel.svgsn, 'feComposite');
  fc.setAttribute('in', 'SourceGraphic');
  fc.setAttribute('in2', 'diffOut');
  fc.setAttribute('operator', 'arithmetic');
  fc.setAttribute('k1', '1');
  fc.setAttribute('k2', '0');
  fc.setAttribute('k3', '0');
  fc.setAttribute('k4', '0');
  filter.appendChild(fc);
  filter.setAttribute('id', id);
  return filter;
};
/**
 * Fonction renvoyant une fenêtre contenant le code XML de la figure
 */


IepDoc.prototype.popup = function () {
  // ouvre une fenetre sans barre d'etat, ni d'ascenceur
  var w = window.open('', 'popup', 'width=700,height=450,toolbar=no,scrollbars=no,resizable=yes');
  w.iepDoc = this;
  var doc = w.document;
  doc.title = 'Code Xml de la figure';
  var div = document.createElement('div');
  var form = document.createElement('form');
  div.appendChild(form);
  div.setAttribute('align', 'center');
  doc.body.appendChild(div);
  var ta = document.createElement('textarea');
  form.appendChild(ta);
  ta.setAttribute('cols', 80);
  ta.setAttribute('rows', 25);
  ta.setAttribute('readonly', true);
  ta.style.fontSize = '13px';
  ta.scrollIntoView(); // Si le script ne comporte pas de retours à la ligne (une seule ligne), on en rajoute

  var ch = this.codexml;
  ch = ch.replace(/>\s*</g, '>\n<');
  ta.appendChild(document.createTextNode(ch));
  ta.select(); // w.onbeforeunload = function(){this.iepDoc.windowxml = null;};

  w.addEventListener('unload', function () {
    this.iepDoc.windowxml = null;
  });
  return w;
};

/***/ }),

/***/ "./sources_js/global/global.js":
/*!*************************************!*\
  !*** ./sources_js/global/global.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.includes.js");

__webpack_require__(/*! core-js/modules/es.string.repeat */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.repeat.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.string.bold */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.bold.js");

__webpack_require__(/*! core-js/modules/es.string.italics */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.italics.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */

/**
 * Si on est en dev
 * @type {boolean}
 */

/*
iep.isDev = /(\.devsesamath\.net|\.local)$/.test(window.location.hostname) || window.location.href.substr(0, 7) === "file://";
*/
var kernel = {
  svgsn: 'http://www.w3.org/2000/svg',
  caracteresGrecs: ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', ' theta', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'pi', 'rho', 'sigma', 'tau', 'phi', 'chi', 'psi', 'omega', 'Gamma', 'Delta', 'Xi', 'Pi', 'Sigma', 'Phi', 'Chi', 'Psi', 'Omega'],
  caracteresGrecsUtf8: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'κ', 'λ', 'μ', 'ν', 'ξ', 'π', 'ρ', 'σ', 'τ', 'φ', 'χ', 'ψ', 'ω', 'Γ', 'Δ', 'Ξ', 'Π', 'Σ', 'Φ', 'Χ', 'Ψ', 'Ω'],
  // Constantes globales utilisés dans les calculs
  convDegRad: Math.PI / 180,
  convRadDeg: 180 / Math.PI,
  sin30: 0.5,

  /**
   * Fonction renvoyant true si le nombre x a une valeur absolue inférieue à 10^-9
   * @param {float} x
   * @returns {boolean}
   */
  zero: function zero(x) {
    return Math.abs(x) < 1e-9;
  },

  /**
   * Fonction renvoyant true si la valeur absolue de a est inférieure à 10^-7
   * Utilisé pour tester si un angle est quasi nul.
   * @param {number} a
   * @returns {boolean}
   */
  zeroAngle: function zeroAngle(a) {
    return Math.abs(a) < 1e-7;
  },

  /**
   * Fonction renvoyant la mesure principale en degrés de l'angle dont ang est une mesure
   * @param {Float} ang
   * @returns {Float}
   */
  mesurePrincDeg: function mesurePrincDeg(ang) {
    var q = Math.floor((ang + 180) / 360);
    var ret = ang - 360 * q;
    if (ret === -180) ret = 180;
    return ret;
  },

  /**
   * Fonction servant à parser un fichier xml contenu dans la chaîne txt
   * @param {string} txt
   * @returns {DOMParser}
   */
  parseXMLDoc: function parseXMLDoc(txt) {
    var parser, xmlDoc;

    if (window.DOMParser) {
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(txt, 'text/xml');
    } else {
      // Internet Explorer
      xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
      xmlDoc.async = false;
      xmlDoc.loadXML(txt);
    }

    return xmlDoc;
  },

  /**
   * Fonction renvoyant true si ch contient le nom d'un instrument.
   * @param {type} ch
   * @returns {boolean}
   */
  estInstrument: function estInstrument(ch) {
    return ch === 'compas' || ch === 'compasLeve' || ch === 'crayon' || ch === 'equerre' || ch === 'rapporteur' || ch === 'regle' || ch === 'requerre';
  },

  /**
   * Fonction appelée pour une chaîne qui commence par un caractère de balise ouvrante.
   * Avant appel la chaîne doit commencer par une balise ouvrante
   * Renvoie -1 s'il n'y a pas de balise fermante correspondante
   * @param {string} ch
   * @returns {int} Renvoie l'indice du dernier caractère de la balise fermante correspondante
   * augmentée de 1
   */
  indiceFinBalise: function indiceFinBalise(ch) {
    var bal, balf, indf;
    var balisefont = false;

    if (ch.indexOf('<font') === 0) {
      balf = '</font>';
      balisefont = true;
    } else {
      indf = ch.indexOf('>');
      if (indf === -1) return ch.length; // Erreur

      bal = ch.substring(0, indf + 1);
      balf = bal.substring(0, 1) + '/' + bal.substring(1);
    }

    var ind = ch.indexOf(balf);

    if (ind === -1) {
      // Il arrive que des gens oublient de fermer une baise font et en ouvrent une autre
      if (balisefont) {
        var ind2 = ch.indexOf('<font', 5);
        if (ind2 !== -1) return ind2;
      }

      return -1;
    } // Incorrect. Balise de fn oubliée ?
    else return ind + balf.length;
  },

  /**
   * Fonction analysant une chaîne commençant par £e( ou £i(
   * et renvoyant un objet formé de l'opérande et de l'exposant (ou indice)
   * @param {type} chaine
   * @returns {kernel.analyseExposantOuIndice.res|Object}
   */
  analyseExposantOuIndice: function analyseExposantOuIndice(chaine) {
    var ch = chaine.trim();
    var res = {};
    var indvirg = ch.indexOf(',');
    var indparf = ch.indexOf(')');
    res.erreur = indvirg === -1 || indparf === -1;

    if (res.erreur) {
      res.texte = '';
      return res;
    }

    res.operande = ch.substring(3, indvirg);
    res.exposant = ch.substring(indvirg + 1, indparf);
    res.texte = ch.substring(indparf + 1);
    return res;
  },

  /**
   * Fonction appelée dans le cas ou pDebut est l'indice dans chaine d'une
   * parenthèse ouvrante et renvoyant l'indice de la parenthèse
   * fermante correspondante dans la chaîne.
   */
  indiceParentheseFermante: function indiceParentheseFermante(chaine, deb) {
    var p;
    var ch;
    var somme = 1;
    p = deb + 1;

    while (p < chaine.length) {
      ch = chaine.charAt(p);

      if (ch === '(') {
        somme++;
      } else {
        if (ch === ')') {
          somme--;
        }
      }

      if (somme === 0) break;
      p++;
    }

    if (somme === 0) return p;else return -1; // On renvoie -1 si pas trouvé
  },

  /**
   * Fonction renvoyant true si le premier caractère de la chaîne est un chiffre
   * @param {type} car
   * @returns {boolean}
   */
  chiffre: function chiffre(car) {
    var s = '0123456789';
    return s.indexOf(car) !== -1;
  },
  // Fonctions reprises depuis le code source de InstrumentPoche en flash
  valeur_approchee: function valeur_approchee(nombre, precision) {
    var prec = Math.pow(10, precision);
    return Math.round(nombre / prec) * prec;
  },

  /**
   * Fonction reprise à partir du code de la version Flash et servant pour les
   * repères et quadrillages
   * @param {Float} nbr
   * @param {Float} borne1
   * @param {Float} borne2
   * @param {Float} borne_pix1
   * @param {Float} borne_pix2
   * @returns {Float}
   */
  mettre_en_pixels: function mettre_en_pixels(nbr, borne1, borne2, borne_pix1, borne_pix2) {
    var coeff_dir = (borne_pix1 - borne_pix2) / (borne1 - borne2);
    var ordo_orig = borne_pix1 - coeff_dir * borne1;
    return coeff_dir * nbr + ordo_orig;
  },

  /** Fonctions éléminant dans le code XML contenu dans la chaîne ch les attributs
   * en doublon en ne gardant que le premier
   * @param {string} ch
   * @returns {string} / La chaîne avec les doublons d'attribut supprimés.
   */
  elimineDoublonsXML: function elimineDoublonsXML(ch) {
    var i;
    var j;
    var li;
    var a;
    var b;
    var res = '';
    var liste = ['objet', 'mouvement', 'vitesse', 'tempo', 'abscisse', 'ordonnee', 'id', 'couleur', 'pointille', 'echelle', 'angle', 'cible', 'texte', 'ecrire', 'rotation', 'translation', 'epaisseur', 'opacite', 'masquer', 'montrer', 'crayon', 'equerre', 'regle', 'compas', 'reglequerre', 'sens', 'hauteur', 'largeur', 'haut', 'gauche', 'Xmin', 'Ymin', 'Xmax', 'yMax', 'Xgrad', 'Ygrad', 'image', 'police', 'taille', 'ordonnee_bas_droite', 'abscisse_bas_droite', 'ordonnee_haut_gauche', 'abscisse_haut_gauche'];
    var s = ch.split(/<action/gi);

    for (i = 0; i < s.length; i++) {
      li = s[i];

      for (j = 0; j < liste.length; j++) {
        var r = new RegExp(' ' + liste[j] + '[^\\w ]*= *"[\\w]*"', 'i');
        a = li.search(r);

        if (a !== -1) {
          b = li.substring(a + 1).search(r);

          if (b !== -1) {
            li = li.replace(r, '');
          }
        }
      }

      res += i === 0 ? li : '<action' + li;
    }

    return res;
  },

  /**
   * Constructeur utilisée dans l'objet kernel.ActionEcrireTexte. L'objet contient les informations
   * sur un texte contenant des balises <b> ou <i> ou <u> ou <font> (ou un mélange)
   * @param {type} bold
   * @param {type} italic
   * @param {type} underline
   * @param {type} couleur
   * @param {type} fontface
   * @param {type} taille
   */
  infoBalise: function infoBalise(bold, italic, underline, couleur, fontface, taille) {
    this.bold = bold;
    this.italic = italic;
    this.underline = underline;
    this.couleur = couleur;
    this.fontface = fontface;
    this.taille = taille;
  },

  /**
   * Fonction remplaçant dans la chaîne ch les accents écrits en code html par leur caractère utf8
   * @param {string} ch : La chaîne à traiter
   * @returns {string} : La chaîne avec les caractères remplacès
   */
  remplaceAccentsHtml: function remplaceAccentsHtml(ch) {
    var t1 = ['&agrave;', '&acirc;', '&aelig;', '&egrave;', '&eacute;', '&ecirc;', '&icirc;', '&ocirc;', '&ouml;', '&oslash;', '&Oslash;', '&ugrave;', '&ucirc;', '&apos;'];
    var t2 = ['à', 'â', 'æ', 'è', 'é', 'ê', 'î', 'ô', 'ö', 'ø', 'Ø', 'ù', 'û', "'"];
    var i;

    for (i = 0; i < t1.length; i++) {
      ch = ch.replace(new RegExp(t1[i], 'g'), t2[i]);
    }

    return ch;
  },

  /**
   * Fonction remplaçant dans la chaîne ch toutes les balises écrites avec des caractères spéciaux £
   * par des balises normales du type <...>
   * @param {string} ch : La chaîne à traiter contenant les balises spéciales
   * @returns {string} : La chaîne avec les balises normales
   */
  remplaceBalises: function remplaceBalises(ch) {
    // Certains auteurs ont utilisé les codes £lt; et £gt;
    // Inutile car quand on parse avec getAttribute pour avoir le texte le balises sont déjà remplacées

    /*
    ch = ch.replace(/£lt;/gi,"£lt£");
    ch = ch.replace(/£gt;/gi,"£gt£");
    */
    // Par contre si elles ont déjà été remplacées et utilisaient des majuscules il faut mettre des minuscules
    ch = ch.replace(/<B>/g, '<b>');
    ch = ch.replace(/<\/B>/g, '</b>');
    ch = ch.replace(/<I>/g, '<i>');
    ch = ch.replace(/<\/I>/g, '</i>');
    ch = ch.replace(/<U>/g, '<u>');
    ch = ch.replace(/<\/U>/g, '</u>');
    ch = ch.replace(/£lt£i£gt£/gi, '<i>');
    ch = ch.replace(/£i£/gi, '<i>');
    ch = ch.replace(new RegExp('£lt£/i£gt£', 'gi'), '</i>');
    ch = ch.replace(new RegExp('£/i£', 'gi'), '</i>');
    ch = ch.replace(/£lt£b£gt£/gi, '<b>');
    ch = ch.replace(/£b£/gi, '<b>');
    ch = ch.replace(new RegExp('£lt£/b£gt£', 'gi'), '</b>');
    ch = ch.replace(new RegExp('£/b£', 'gi'), '</b>');
    ch = ch.replace(/£lt£u£gt£/gi, '<u>');
    ch = ch.replace(/£u£/gi, '<u>');
    ch = ch.replace(new RegExp('£lt£/u£gt£', 'gi'), '</u>');
    ch = ch.replace(new RegExp('£/u£', 'gi'), '</u>');
    ch = ch.replace(/£lt£br£gt£/gi, '<br>');
    ch = ch.replace(new RegExp('£lt£br/£gt£', 'gi'), '<br>');
    ch = ch.replace(/£br£/gi, '<br>');
    ch = ch.replace(new RegExp('£br/£', 'gi'), '<br>');
    ch = ch.replace(/£lt£font/gi, '<font');
    ch = ch.replace(new RegExp('£lt£/font£gt£', 'gi'), '</font>'); // Remplacement de balises exotiques utilisées par certains

    ch = ch.replace(/£lt£bold£gt£/gi, '<b>');
    ch = ch.replace(new RegExp('£lt£/bold£gt£', 'gi'), '</b>'); // remplacement des £lt£ et £gt£ utiliséscomme caractères

    ch = ch.replace(/£lt£/gi, '<');
    ch = ch.replace(/£gt£/gi, '>');
    ch = ch.replace(/£inferieurstrict£/gi, '<');
    ch = ch.replace(/£superieurstrict£/gi, '>'); // Remplacement des guillemets

    ch = ch.replace(/£guillemet£/gi, '"');
    return ch;
  },

  /**
   * Fonction renvoyant une chaîne où les caractères spéciaux de Flash de ch sont remplacés par
   * le caractère UTF8 correspondant
   * @param {string} ch : La chaîne à traiter
   */
  remplaceCarSpe: function remplaceCarSpe(ch) {
    var i;
    var cha;
    var chb;
    var s = ch;

    if (ch.indexOf('£') !== -1) {
      var a = ['alpha2', 'plus', 'moins', 'fois', 'divise', 'petitf', 'petitebarre', 'grandebarre', 'prime', 'seconde', 'puceronde', 'grandC', 'euler', 'petitg', 'petith', 'Ironde', 'Lronde', 'lronde', 'grandN', 'Pronde', 'grandQ', 'Rronde', 'grandR', 'grandZ', 'Eronde', 'Fronde', 'Nronde', 'flecheG', 'flecheH', 'flecheD', 'flecheB', 'flecheDG', 'flecheGD', 'flecheHB', 'flecheBH', 'croissant', 'decroissant', 'alaligneadroite', 'alaligneagauche', 'doubleflecheG', 'doubleflecheD', 'doubleflecheDG', 'doubleflecheGD', 'flecheGbarre', 'flecheDbarre', 'flecheGcreuse', 'flecheHcreuse', 'flecheDcreuse', 'flecheBcreuse', 'qqsoit', 'pourtout', 'quelquesoit', 'complement', 'differentielpartiel', 'ilexiste', 'ilnexistepas', 'vide', 'nabla', 'appartienta', 'nappartientpasa', 'contient', 'petitcontient', 'grandproduit', 'grandcoproduit', 'grandesomme', 'petitebarrefine', 'moinsouplus', 'antislash', 'asterisque', 'racine', 'proportionnela', 'infini', 'angle', 'anglespherique', 'divise', 'nedivisepas', 'parallelea', 'nestpasparallelea', 'etlogique', 'oulogique', 'inter', 'intersection', 'union', 'integrale', 'doubleintegrale', 'tripleintegrale', 'integralecurviligne', 'integralesurfacique', 'integralevolumique', 'egaleasymptotiquea', 'environdroit', 'environegala', 'environ', 'egalpardefinition', 'differentde', 'identiquea', 'inferieura', 'superieura', 'inclusdans', 'contient', 'nestpasinclusdans', 'necontientpas', 'sommedirecte', 'differencedirecte', 'produittensoriel', 'divisiondirecte', 'produitdirect', 'top', 'perpendiculairea', 'antecedentde', 'imagede', 'angledroitarc', 'point', 'pv'];
      var b = ['α', '+', '-', '×', '÷', 'f', '–', '—', "'", '"', '•', 'ℂ', 'ℂ', 'ℊ', 'ℏ', 'ℑ', 'ℒ', 'ℓ', 'ℕ', '℘', 'ℚ', 'ℜ', 'ℝ', 'ℤ', 'ℰ', 'ℱ', 'ℵ', '←', '↑', '→', '↓', '↔', '↔', '↕', '↕', '↗', '↘', '↳', '↵', '⇐', '⇒', '⇔', '⇔', '⇤', '⇥', '⇦', '⇧', '⇨', '⇩', '∀', '∀', '∀', '∁', '∂', '∃', '∄', '∅', '∇', '∈', '∉', '∋', '∍', '∏', '∐', '∑', '−', '∓', '∖', '∗', '√', '∝', '∞', '∡', '∢', '∣', '∤', '//', '∦', '∧', '∨', '∩', '∩', '∪', '∫', '∬', '∭', '∮', '∯', '∰', '≃', '≃', '≅', '≈', '≝', '≠', '≡', '≤', '≥', '⊂', '⊃', '⊄', '⊅', '⊕', '⊖', '⊗', '⊘', '⊙', '⊤', '⊥', '⊶', '⊷', '⊾', '⋅', ';'];

      for (i = 0; i < a.length; i++) {
        cha = '£' + a[i] + '£';
        chb = b[i];
        if (s.indexOf(cha) !== -1) s = s.replace(new RegExp(cha, 'gi'), chb);
      }
    }

    return s;
  },

  /**
   * Fonction renvoyant l'idice dans la chaîne chaine de l'accolade fermante
   * correspondant à l'accolade ouvrante dont l'indice dans la chaîne est pdebut
   * Avant appel,l le caractère d'indice pdebut de la chaîne ch doit contenir
   * une parenthèse ouvrante.
   */
  accoladeFermante: function accoladeFermante(chaine, pdebut) {
    var p, ch, somme;
    somme = 1;
    p = pdebut + 1;

    while (p < chaine.length) {
      ch = chaine.charAt(p);

      if (ch === '{') {
        somme++;
      } else {
        if (ch === '}') {
          somme--;
        }
      }

      if (somme === 0) break;
      p++;
    }

    if (somme === 0) return p;else return -1; // On renvoie -1 si pas trouvé
  },

  /**
   * Fonction renvoyant true si ch conteint une balise LaTeX : fraction, racine carrée,
   * puissance, indice, chapeau, parenthèses, crochets, valeur abolue, norme,
   * vecteur ou texte
   * @param {type} ch
   * @returns {Boolean}
   */
  contientBaliseLaTeX: function contientBaliseLaTeX(ch) {
    return ch.indexOf('\\frac') !== -1 || ch.indexOf('\\sqrt') !== -1 || ch.indexOf('}^{') !== -1 || ch.indexOf('}_{') !== -1 || ch.indexOf('\\widehat{') !== -1 || ch.indexOf('\\left[') !== -1 || ch.indexOf('\\left(') !== -1 || ch.indexOf('\\left|') !== -1 || ch.indexOf('\\left\\|') !== -1 || ch.indexOf('\\overrightarrow{') !== -1 || ch.indexOf('\\text{') !== -1;
  }
};
kernel.cos30 = Math.cos(30 * kernel.convDegRad);
/**
 * Fonction renvoyant une chaîne de carcatère représentant en svg la couleur
 * correspondant au contenu de ch (couleur en Flash)
 * @param {string} ch
 * @returns {string}
 */

kernel.couleur = function (ch) {
  var i, s, t;
  var cc1 = ['noir', 'rouge', 'vert', 'bleu', 'blanc', 'gris', 'darkorange'];
  var cc2 = ['black', 'red', 'green', 'blue', 'white', 'grey', 'maroon'];
  if (ch === '0') return 'black';

  for (i = 0; i < cc1.length; i++) {
    if (cc1[i] === ch) return cc2[i];
  }

  if (ch.substring(0, 2) === '0x') {
    s = '000000' + ch.substring(2);
    t = s.substring(s.length - 6);
    ch = '#' + t;
  } else {
    if (kernel.chiffre(ch.charAt(0))) {
      ch = parseFloat(ch).toString(16);
      s = '000000' + ch;
      t = s.substring(s.length - 6);
      ch = '#' + t;
    } else {
      if (ch.charAt(0) === '#') {
        s = '000000' + ch.substring(1);
        t = s.substring(s.length - 6);
        ch = '#' + t;
      }
    }
  }

  return ch;
};
/**
 * Fonction renvoyant true si les vecteurs u et v sont quasi colinéaires
 * @param {kernel.vect} u
 * @param {kernel.vect} v
 * @returns {boolean}
 */


kernel.colineaires = function (u, v) {
  var n1 = u.norme();
  var n2 = v.norme();
  if (kernel.zero(n1) || kernel.zero(n2)) return true;else return kernel.zero((u.x * v.y - u.y * v.x) / n1 / n2);
};
/**
 * Fonction renvoyant true si les vecteurs u et v sont quasi colinéaires
 * de même sens
 * @param {kernel.vect} u
 * @param {kernel.vect} v
 * @returns {boolean}
 */


kernel.colineairesMemeSens = function (u, v) {
  return kernel.colineaires(u, v) && u.x * v.x + u.y * v.y >= 0;
};
/**
 * Fonction renvoyant l'indice de la nb ième virgule dans la chaîne ch
 * à partir de l'indice deb en sauta,t le contenu des parenthèses
 * @param {type} chaine
 * @param {type} deb
 * @param {type} nb
 * @returns {Integer}
 */


kernel.indiceVirgule = function (chaine, deb, nb) {
  var ch;
  var indpf;
  var k = 0;
  var p = deb;

  while (p < chaine.length) {
    ch = chaine.charAt(p);

    if (ch === '(') {
      indpf = kernel.indiceParentheseFermante(chaine, p);
      if (indpf === -1) return -1;else p = indpf;
    } else {
      if (ch === ',') k++;
      if (k === nb) return p;
    }

    p++;
  }

  return -1;
};
/**
 * Cette fonction permet de trouver les meilleures graduations a afficher pour un repere.
 * Elle retourne la plus petite de ces graduations, afin que des nombres "ronds" soient affichés.
 * Fonction reprise à partir du code de la version Flash et servant pour les
 * repères et quadrillages
 * @param {Float} mini
 * @param {Float} maxi
 * @param {Float} unite
 * @returns {Float}
 */


kernel.determiner_graduations = function (mini, maxi, unite) {
  var debut_trace; // lorsque 0 est entre les bornes, on part de 0 et on cherche le début du tracé

  if (maxi * mini < 0) {
    debut_trace = -Math.floor(-mini / unite) * unite;
  } // en cas de puissance de 10 entre les bornes, on prend
  else if (Math.ceil(Math.log(Math.abs(mini)) / Math.LN10) !== Math.ceil(Math.log(Math.abs(maxi)) / Math.LN10)) {
      if (mini < 0) {
        debut_trace = -Math.pow(10, Math.floor(Math.log(Math.abs(mini)) / Math.LN10));
      } else {
        debut_trace = Math.pow(10, Math.ceil(Math.log(Math.abs(mini)) / Math.LN10));
      }

      debut_trace = debut_trace - Math.floor((debut_trace - mini) / unite) * unite;
    } // dans tous les autres cas, on fait ce qu'on peut
    else {
        debut_trace = kernel.valeur_approchee(mini, Math.floor(Math.log(unite) / Math.LN10));

        if (debut_trace < mini) {
          debut_trace += unite;
        }
      }

  return debut_trace;
};
/**
 * Fonction récursive appelée lorsque l'affichage de texte n'utilise pas le LaTeX
 * Elle traite les balises u, i, b et font pour ajouter à txt (qui est élément
 * graphique svg text des tspans correspondants.
 * @param {String} : La chaîne contenant le texte avec balises éventuelles
 * @param {kernel.infoBalise} infoBalise : un objet qui contient les caractéristiques du texte, à savoir
 * bold ou non, italique ou non, souligné ou non, couleur et fonte utilisée
 * @param {svg.text} txt : L'élément text de svg auquel seront rajoutés les tspan créés
 * @param {Boolean} debutLigne : true si l'affichage du prochain tspan doit se faire en début de ligne
 * @param {Integer} y : le paramètre y du prochain tspan à créer
 */


kernel.traiteBalise = function (ch, infoBalise, txt, debutLigne, y) {
  if (ch === '') return;
  var stylespan;
  var indfb;
  var ind1;
  var ind2;
  var fonte;
  var couleur;
  var taille;
  var inddeb;
  var info;
  var ind = ch.search(/<b>|<i>|<u>|<font/);
  var tspan = document.createElementNS(kernel.svgsn, 'tspan');
  tspan.setAttribute('pointer-events', 'none');

  if (ind === -1 || ind > 0) {
    // Il y a du texte
    stylespan = ''; // if (infoBalise.couleur !== "") stylespan += "fill:" + infoBalise.couleur+";";

    if (infoBalise.couleur) stylespan += 'fill:' + infoBalise.couleur + ';';
    if (infoBalise.bold) stylespan += 'font-weight:bold;';
    if (infoBalise.italic) stylespan += 'font-style:italic;';
    if (infoBalise.underline) stylespan += 'text-decoration:underline;';
    if (infoBalise.fontface !== '') stylespan += 'font-family:' + infoBalise.fontface + ';';else stylespan += 'font-family: "Times New Roman", Times, serif;';
    stylespan += 'font-size:' + infoBalise.taille + 'px;';
    tspan.setAttribute('style', stylespan);

    if (debutLigne) {
      tspan.setAttribute('x', 0);
      debutLigne = false;
    }

    tspan.setAttribute('y', y);
    var ch2 = ind === -1 ? ch : ch.substring(0, ind);
    tspan.appendChild(document.createTextNode(ch2));
    txt.appendChild(tspan);
    if (ind > 0) kernel.traiteBalise(ch.substring(ind), infoBalise, txt, debutLigne, y); // else ch = "";
  } else {
    if (ch.indexOf('<b>') === 0) {
      // Balise bold
      info = new kernel.infoBalise(true, infoBalise.italic, infoBalise.underline, infoBalise.couleur, infoBalise.fontface);
      indfb = kernel.indiceFinBalise(ch);
      if (indfb === -1) kernel.traiteBalise(ch.substring(3), info, txt, debutLigne, y);else kernel.traiteBalise(ch.substring(3, indfb - 4), info, txt, debutLigne, y);
    } else {
      if (ch.indexOf('<i>') === 0) {
        // Balise italique
        info = new kernel.infoBalise(infoBalise.bold, true, infoBalise.underline, infoBalise.couleur, infoBalise.fontface);
        indfb = kernel.indiceFinBalise(ch);
        if (indfb === -1) kernel.traiteBalise(ch.substring(3), info, txt, debutLigne, y);else kernel.traiteBalise(ch.substring(3, indfb - 4), info, txt, debutLigne, y);
      } else {
        if (ch.indexOf('<u>') === 0) {
          // Balise souigné
          info = new kernel.infoBalise(infoBalise.bold, infoBalise.italic, true, infoBalise.couleur, infoBalise.fontface);
          indfb = kernel.indiceFinBalise(ch);
          if (indfb === -1) kernel.traiteBalise(ch.substring(3), info, txt, debutLigne, y);else kernel.traiteBalise(ch.substring(3, indfb - 4), info, txt, debutLigne, y);
        } else {
          if (ch.indexOf('<font') === 0) {
            indfb = kernel.indiceFinBalise(ch);
            if (indfb === -1) indfb = ch.length;
            ind1 = ch.indexOf('face="');

            if (ind1 !== -1) {
              ind2 = ch.indexOf('"', ind1 + 6);

              if (ind2 !== -1) {
                fonte = ch.substring(ind1 + 6, ind2);
              } else fonte = '';
            } else fonte = '';

            couleur = '';
            ind1 = ch.indexOf('couleur="');

            if (ind1 !== -1) {
              ind2 = ch.indexOf('"', ind1 + 9);

              if (ind2 !== -1) {
                couleur = kernel.couleur(ch.substring(ind1 + 9, ind2));
              }
            } else {
              ind1 = ch.indexOf('color="');

              if (ind1 !== -1) {
                ind2 = ch.indexOf('"', ind1 + 7);

                if (ind2 !== -1) {
                  couleur = kernel.couleur(ch.substring(ind1 + 7, ind2));
                }
              }
            }

            ind1 = ch.indexOf('size="');

            if (ind1 !== -1) {
              ind2 = ch.indexOf('"', ind1 + 6);

              if (ind2 !== -1) {
                taille = ch.substring(ind1 + 6, ind2);
              } else taille = infoBalise.taille;
            }

            info = new kernel.infoBalise(infoBalise.bold, infoBalise.italic, infoBalise.underline, couleur, fonte, taille);
            inddeb = ch.indexOf('>'); // Recherche du > de la balise <font>

            if (ch.search(new RegExp('</font>', 'i')) !== -1) {
              kernel.traiteBalise(ch.substring(inddeb + 1, indfb - 7), info, txt, debutLigne, y);
            } else kernel.traiteBalise(ch.substring(inddeb + 1), info, txt, debutLigne, y);
          }
        }
      }
    }
  }
};
/**
 * Fonction renvoyant true si la chaîne ch contient des codes spéciaux de maths en flash
 * sauf les £e() et £i() simples.
 * Si les arguments de £e() ou £i() contiennent des appels à des balises ou d'autres
 * appels à £e() et £i() renvoie true car alors il faut utiliser le LaTeX pour représenter la formule.
 * Si expind est true on cherche aussi les puissances et indices
 * @param {string} ch
 * @returns {Boolean}
 */


kernel.necessiteLatex = function (ch) {
  // Les codes e (exposant) et i (idice) ne nécessitent pas l'utilisation de MathJax
  if (['a', 'c', 'd', 'f', 'g', 'n', 'p', 'r', 's', 'u', 'v'].some(function (code) {
    return ch.includes("\xA3".concat(code, "("));
  })) return true; // Si la formule contient des puissances ou des indices utilisant elle-mêmes des balises
  // puissances, indices ou font il faut passer par le LaTeX donc on renvoie true

  var ind, indparf, s;
  var ch1 = ch;

  while ((ind = ch1.search(/£e\(|£i\(/g)) !== -1) {
    indparf = kernel.indiceParentheseFermante(ch1, ind + 3);
    if (indparf === -1) indparf = ch1.length;
    s = ch1.substring(ind, indparf);
    if (s.search(/£e\(|£i\(£lt£font/g) !== -1) return true;
    if (indparf === ch1.length) return false;else ch1 = s.substring(indparf + 1);
  }

  ch1 = ch; // Si la formule contient des balise font contenant des indices ou exposants
  // il faut aussi passer par le LaTeX donc on renvoie true

  while ((ind = ch1.search(/£lt£font/g)) !== -1) {
    indparf = kernel.indiceFinBalise(ch1.substring(ind));
    if (indparf === -1) indparf = ch1.length;else indparf += ind;
    s = ch1.substring(ind, indparf);
    if (s.search(/£e\(|£i\(/g) !== -1) return true;
    if (indparf === ch1.length) return false;else ch1 = s.substring(indparf + 1);
  }

  return false;
};
/**
 * Fonction récursive renvoyant une chaîne LaTeX représentant la chaîne contenue dans s
 * @param {string} s : la chaîne à traiter (qui représente une ligne dans le cas de plusieurs lignes)
 * @param {Boolena} btexte : Si true, le contenut renvoyé est encadré par une balise \text
 */


kernel.getMaths = function (s, btexte) {
  var ind, indpf, indv, ind1, ind2, inddeb, ch2, couleur, ret, indv1, indv2, indv3, car;
  var ch = s;
  if (ch === '') return ''; // Traitement des balises Font
  // On ne traite que les changements de couleur

  while ((ind = ch.indexOf('<font')) !== -1) {
    couleur = null;
    ch2 = ch.substring(ind);
    indpf = kernel.indiceFinBalise(ch2);
    ind1 = ch2.indexOf('couleur="');

    if (ind1 !== -1) {
      ind2 = ch2.indexOf('"', ind1 + 9);
      if (ind2 !== -1) couleur = kernel.couleur(ch2.substring(ind1 + 9, ind2));
    } else {
      ind1 = ch2.indexOf('color="');

      if (ind1 !== -1) {
        ind2 = ch2.indexOf('"', ind1 + 7);
        if (ind2 !== -1) couleur = kernel.couleur(ch2.substring(ind1 + 7, ind2));
      }
    }

    if (couleur != null) {
      // On ne traite que les changements de couleur
      inddeb = ind + ch2.indexOf('>') + 1; // Pointe sur le début concerné par la balise <font

      if (indpf === -1) {
        return kernel.getMaths(ch.substring(0, ind) + '\\textcolor{' + couleur + '}{' + ch.substring(inddeb) + '}', btexte);
      } else {
        indpf += ind;
        return kernel.getMaths(ch.substring(0, ind) + '\\textcolor{' + couleur + '}{' + ch.substring(inddeb, indpf - 7) + '}' + ch.substring(indpf), btexte);
      }
    } else {
      inddeb = ind + ch2.indexOf('>') + 1;
      if (indpf === -1) return kernel.getMaths(ch.substring(0, ind) + ch.substring(inddeb), btexte);else {
        indpf += ind;
        return kernel.getMaths(ch.substring(0, ind) + ch.substring(inddeb, indpf - 7) + ch.substring(indpf), btexte);
      }
    }
  } // Traitement des caractères par code hexadécimal


  while ((ind = ch.indexOf('£u(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMaths(ch.substring(0, ind), btexte) + "\\unicode{x" + ch.substring(ind + 3, indpf) + '}' + kernel.getMaths(ch.substring(indpf + 1), btexte);
  } // Traitement des fractions


  while ((ind = ch.indexOf('£f(')) !== -1) {
    indv = kernel.indiceVirgule(ch, ind + 3, 1); // Recherche de la première virgule

    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indv === -1 || indpf === -1 || indv > indpf) return ch;
    return kernel.getMaths(kernel.getMaths(ch.substring(0, ind), btexte) + '\\frac{' + kernel.getMaths(ch.substring(ind + 3, indv), false) + '}{' + kernel.getMaths(ch.substring(indv + 1, indpf), false) + '}' + kernel.getMaths(ch.substring(indpf + 1), btexte), btexte);
  } // Traitement des racines carrées


  while ((ind = ch.indexOf('£r(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMaths(kernel.getMaths(ch.substring(0, ind), btexte) + '\\sqrt{' + kernel.getMaths(ch.substring(ind + 3, indpf), false) + '}' + kernel.getMaths(ch.substring(indpf + 1), btexte), btexte);
  } // Traitement des codes d'angle


  while ((ind = ch.indexOf('£a(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMaths(kernel.getMaths(ch.substring(0, ind), btexte) + '\\widehat{' + kernel.getMaths(ch.substring(ind + 3, indpf), true) + '}' + kernel.getMaths(ch.substring(indpf + 1), btexte), btexte);
  } // Traitement des intégrales


  while ((ind = ch.indexOf('£g(')) !== -1) {
    indv1 = kernel.indiceVirgule(ch, ind + 3, 1); // Recherche de la première virgule

    indv2 = kernel.indiceVirgule(ch, ind + 3, 2); // Recherche de la première virgule

    indv3 = kernel.indiceVirgule(ch, ind + 3, 3); // Recherche de la première virgule

    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMaths(kernel.getMaths(ch.substring(0, ind), btexte) + '\\int_{' + kernel.getMaths(ch.substring(indv2 + 1, indv3), false) + '}^{' + kernel.getMaths(ch.substring(indv3 + 1, indpf), false) + '}' + kernel.getMaths(ch.substring(ind + 3, indv1), false) + ' d' + kernel.getMaths(ch.substring(indv1 + 1, indv2), false) + kernel.getMaths(ch.substring(indpf + 1), btexte), btexte);
  } // Traitement des crochets


  while ((ind = ch.indexOf('£c(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMaths(ch.substring(0, ind), btexte) + '\\left[' + kernel.getMaths(ch.substring(ind + 3, indpf), btexte) + '\\right]' + kernel.getMaths(ch.substring(indpf + 1), btexte);
  } // Traitement des parenthèses


  while ((ind = ch.indexOf('£p(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMaths(kernel.getMaths(ch.substring(0, ind), btexte) + '\\left(' + kernel.getMaths(ch.substring(ind + 3, indpf), btexte) + '\\right)' + kernel.getMaths(ch.substring(indpf + 1), btexte));
  } // Traitement des valeurs absolues


  while ((ind = ch.indexOf('£d(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMaths(kernel.getMaths(ch.substring(0, ind), btexte) + '\\left|' + kernel.getMaths(ch.substring(ind + 3, indpf), false) + '\\right|' + kernel.getMaths(ch.substring(indpf + 1), btexte), btexte);
  } // Traitement des normes


  while ((ind = ch.indexOf('£n(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMaths(kernel.getMaths(ch.substring(0, ind), btexte) + '\\left\\|' + kernel.getMaths(ch.substring(ind + 3, indpf), false) + '\\right\\|' + kernel.getMaths(ch.substring(indpf + 1), btexte));
  } // Traitement des indices


  while ((ind = ch.indexOf('£i(')) !== -1) {
    indv = kernel.indiceVirgule(ch, ind + 3, 1); // Recherche de la première virgule

    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indv === -1 || indpf === -1 || indv > indpf) return ch;
    return kernel.getMaths(kernel.getMaths(ch.substring(0, ind), btexte) + '{' + kernel.getMaths(ch.substring(ind + 3, indv), false) + '}_{' + kernel.getMaths(ch.substring(indv + 1, indpf), false) + '}' + kernel.getMaths(ch.substring(indpf + 1), btexte), btexte);
  } // Traitement des exposants


  while ((ind = ch.indexOf('£e(')) !== -1) {
    indv = kernel.indiceVirgule(ch, ind + 3, 1); // Recherche de la première virgule

    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indv === -1 || indpf === -1 || indv > indpf) return ch;
    return kernel.getMaths(kernel.getMaths(ch.substring(0, ind), btexte) + '{' + kernel.getMaths(ch.substring(ind + 3, indv), false) + '}^{' + kernel.getMaths(ch.substring(indv + 1, indpf), false) + '}' + kernel.getMaths(ch.substring(indpf + 1), btexte));
  } // Traitement des vecteurs


  while ((ind = ch.indexOf('£v(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMaths(kernel.getMaths(ch.substring(0, ind), btexte) + '\\overrightarrow{' + kernel.getMaths(ch.substring(ind + 3, indpf), false) + '}' + kernel.getMaths(ch.substring(indpf + 1), btexte), btexte);
  } // Traitement des balises <u>


  while ((ind = ch.indexOf('<u>')) !== -1) {
    indpf = kernel.indiceFinBalise(ch.substring(ind));
    if (indpf === -1) return ch;else indpf += ind;
    return kernel.getMaths(ch.substring(0, ind), btexte) + "\\underline{" + kernel.getMaths(ch.substring(ind + 3, indpf - 4), true) + '}' + kernel.getMaths(ch.substring(indpf), btexte);
  } // Traitement des balises <i>


  while ((ind = ch.indexOf('<i>')) !== -1) {
    indpf = kernel.indiceFinBalise(ch.substring(ind));

    if (indpf === -1) {
      return kernel.getMaths(ch.substring(0, ind), btexte) + '\\textit{' + kernel.getMaths(ch.substring(ind + 3), false) + '}';
    } else {
      indpf += ind;
      return kernel.getMaths(ch.substring(0, ind), btexte) + '\\textit{' + kernel.getMaths(ch.substring(ind + 3, indpf - 4), false) + '}' + kernel.getMaths(ch.substring(indpf), btexte);
    }
  } // Traitement des balises <b>


  while ((ind = ch.indexOf('<b>')) !== -1) {
    indpf = kernel.indiceFinBalise(ch.substring(ind));

    if (indpf === -1) {
      return kernel.getMaths(ch.substring(0, ind), btexte) + '\\textbf{' + kernel.getMaths(ch.substring(ind + 3), false) + '}';
    } else {
      indpf += ind;
      return kernel.getMaths(ch.substring(0, ind), btexte) + '\\textbf{' + kernel.getMaths(ch.substring(ind + 3, indpf - 4), false) + '}' + kernel.getMaths(ch.substring(indpf), btexte);
    }
  }

  if (btexte) {
    car = ch.charAt(0); // if ((car === ")") || (car === ",") || (car === "}")) return ch;

    if (car === ')' || car === ',' || car === '}') return car + kernel.getMaths(ch.substring(1), btexte);else {
      // Même si on et en mode texte, on peut avoir au début de ch une balise \textcolor incomplète
      if (kernel.contientBaliseLaTeX(ch)) return ch;else {
        // Il faut sauter les balises \\textcolor en tenant compte que certaines ne sont pas fermées.
        ind = ch.indexOf('\\textcolor{');

        if (ind !== -1) {
          ret = '';
          ch2 = ch;

          while ((ind = ch2.indexOf('\\textcolor{')) !== -1) {
            ind1 = ch2.indexOf('}{');
            indpf = kernel.accoladeFermante(ch2, ind1 + 1);

            if (indpf === -1) {
              if (ind === 0) {
                if (ind1 + 2 !== ch2.length) ret += ch2.substring(0, ind1 + 2) + '\\text{' + ch2.substring(ind1 + 2) + '}';else ret += ch2;
                ch2 = '';
              } else {
                if (ind1 + 2 !== ch2.length) {
                  ret += '\\text{' + ch2.substring(0, ind) + '}' + ch2.substring(ind, ind1 + 2) + '\\text{' + ch2.substring(ind1 + 2) + '}';
                } else ret += '\\text{' + ch2.substring(0, ind) + '}' + ch2.substring(ind, ind1 + 2);

                ch2 = '';
              }
            } else {
              if (ind === 0) {
                ret += ch2.substring(0, indpf + 1);
                if (indpf < ch2.length - 1) ch2 = ch2.substring(indpf + 1);else ch2 = '';
              } else {
                ret += '\\text{' + ch2.substring(0, ind) + '}' + ch2.substring(ind, ind1 + 2) + '\\text{' + ch2.substring(ind1 + 2, indpf + 1) + '}';
                if (indpf < ch2.length - 1) ch2 = ch2.substring(indpf + 1);else ch2 = '';
              }
            }
          }

          if (ch2 === '') return ret;else return ret + '\\text{' + ch2 + '}';
        } else {
          // Si la chaîne commence par une parenthèse fermante, une accolade fermante ou une virgule
          //  il s'agit d'une formule en cours et pas de mode texte
          // Si le texte commence par des espaces, pour qu'ils soient pris en compte, on rajoute des espaces
          // insécables en mode maths
          var deb = 0;
          var k = 0;

          while (ch.charAt(k) === ' ') {
            deb++;
            k++;
          }

          return '~'.repeat(deb) + '\\text{' + ch.substring(k) + '}';
        }
      }
    }
  } else return ch;
};
/**
 * Fonction récursive renvoyant une chaîne LaTeX représentant la chaîne contenue dans s
 * Utilisée pour les noms devant utiliser le LaTeX pour être affichés
 * @param {string} s : la chaîne à traiter (qui représente une ligne dans le cas de plusieurs lignes)
 * @param {Boolena} btexte : Si true, le contenut renvoyé est encadré par une balise \text Test
 */


kernel.getMathsForName = function (s, btexte) {
  var ind, indpf, indv, ind1, ind2, inddeb, ch2, couleur, ret, car;
  var ch = s;
  if (ch === '') return ''; // Traitement des balises Font
  // On ne traite que les changements de couleur

  while ((ind = ch.indexOf('<font')) !== -1) {
    couleur = null;
    ch2 = ch.substring(ind);
    indpf = kernel.indiceFinBalise(ch2);
    ind1 = ch2.indexOf('couleur="');

    if (ind1 !== -1) {
      ind2 = ch2.indexOf('"', ind1 + 9);
      if (ind2 !== -1) couleur = kernel.couleur(ch2.substring(ind1 + 9, ind2));
    } else {
      ind1 = ch2.indexOf('color="');

      if (ind1 !== -1) {
        ind2 = ch2.indexOf('"', ind1 + 7);
        if (ind2 !== -1) couleur = kernel.couleur(ch2.substring(ind1 + 7, ind2));
      }
    }

    if (couleur !== null) {
      // On ne traite que les changements de couleur
      inddeb = ind + ch2.indexOf('>') + 1; // Pointe sur le début concerné par la balise <font

      if (indpf === -1) {
        return kernel.getMathsForName(ch.substring(0, ind) + '\\textcolor{' + couleur + '}{' + ch.substring(inddeb) + '}', btexte);
      } else {
        indpf += ind;
        return kernel.getMathsForName(ch.substring(0, ind) + '\\textcolor{' + couleur + '}{' + ch.substring(inddeb, indpf - 7) + '}' + ch.substring(indpf), btexte);
      }
    } else {
      inddeb = ind + ch2.indexOf('>') + 1;
      if (indpf === -1) return kernel.getMathsForName(ch.substring(0, ind) + ch.substring(inddeb), btexte);else {
        indpf += ind;
        return kernel.getMathsForName(ch.substring(0, ind) + ch.substring(inddeb, indpf - 7) + ch.substring(indpf), btexte);
      }
    }
  } // Traitement des caractères par code hexadécimal


  while ((ind = ch.indexOf('£u(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMathsForName(ch.substring(0, ind), btexte) + "\\unicode{x" + ch.substring(ind + 3, indpf) + '}' + kernel.getMathsForName(ch.substring(indpf + 1), btexte);
  } // Traitement des racines carrées


  while ((ind = ch.indexOf('£r(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMathsForName(kernel.getMathsForName(ch.substring(0, ind), btexte) + '\\sqrt{' + kernel.getMathsForName(ch.substring(ind + 3, indpf), false) + '}' + kernel.getMathsForName(ch.substring(indpf + 1), btexte), btexte);
  } // Traitement des valeurs absolues


  while ((ind = ch.indexOf('£d(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMathsForName(kernel.getMathsForName(ch.substring(0, ind), btexte) + '\\left|' + kernel.getMathsForName(ch.substring(ind + 3, indpf), false) + '\\right|' + kernel.getMathsForName(ch.substring(indpf + 1), btexte), btexte);
  } // Traitement des normes


  while ((ind = ch.indexOf('£n(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMathsForName(kernel.getMathsForName(ch.substring(0, ind), btexte) + '\\left\\|' + kernel.getMathsForName(ch.substring(ind + 3, indpf), false) + '\\right\\|' + kernel.getMathsForName(ch.substring(indpf + 1), btexte));
  } // Traitement des indices


  while ((ind = ch.indexOf('£i(')) !== -1) {
    indv = kernel.indiceVirgule(ch, ind + 3, 1); // Recherche de la première virgule

    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indv === -1 || indpf === -1 || indv > indpf) return ch; // rrue car il s'agit d'un nom : kernel.getMathsForName(ch.substring(ind+3,indv),true)

    return kernel.getMathsForName(kernel.getMathsForName(ch.substring(0, ind), btexte) + '{' + kernel.getMathsForName(ch.substring(ind + 3, indv), true) + '}_{' + kernel.getMathsForName(ch.substring(indv + 1, indpf), false) + '}' + kernel.getMathsForName(ch.substring(indpf + 1), btexte), btexte);
  } // Traitement des exposants


  while ((ind = ch.indexOf('£e(')) !== -1) {
    indv = kernel.indiceVirgule(ch, ind + 3, 1); // Recherche de la première virgule

    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indv === -1 || indpf === -1 || indv > indpf) return ch; // true car il s'agit d'un affichage de nom : kernel.getMathsForName(ch.substring(ind+3,indv),true)

    return kernel.getMathsForName(kernel.getMathsForName(ch.substring(0, ind), btexte) + '{' + kernel.getMathsForName(ch.substring(ind + 3, indv), true) + '}^{' + kernel.getMathsForName(ch.substring(indv + 1, indpf), false) + '}' + kernel.getMathsForName(ch.substring(indpf + 1), btexte));
  } // Traitement des vecteurs


  while ((ind = ch.indexOf('£v(')) !== -1) {
    indpf = kernel.indiceParentheseFermante(ch, ind + 2);
    if (indpf === -1) return ch;
    return kernel.getMathsForName(kernel.getMathsForName(ch.substring(0, ind), btexte) + '\\overrightarrow{' + kernel.getMathsForName(ch.substring(ind + 3, indpf), false) + '}' + kernel.getMathsForName(ch.substring(indpf + 1), btexte), btexte);
  } // Traitement des balises <u>


  while ((ind = ch.indexOf('<u>')) !== -1) {
    indpf = kernel.indiceFinBalise(ch.substring(ind));
    if (indpf === -1) return ch;else indpf += ind;
    return kernel.getMathsForName(ch.substring(0, ind), btexte) + "\\underline{" + kernel.getMathsForName(ch.substring(ind + 3, indpf - 4), true) + '}' + kernel.getMathsForName(ch.substring(indpf), btexte);
  } // Traitement des balises <i>


  while ((ind = ch.indexOf('<i>')) !== -1) {
    indpf = kernel.indiceFinBalise(ch.substring(ind));

    if (indpf === -1) {
      return kernel.getMathsForName(ch.substring(0, ind), btexte) + '\\textit{' + kernel.getMathsForName(ch.substring(ind + 3), false) + '}';
    } else {
      indpf += ind;
      return kernel.getMathsForName(ch.substring(0, ind), btexte) + '\\textit{' + kernel.getMathsForName(ch.substring(ind + 3, indpf - 4), false) + '}' + kernel.getMathsForName(ch.substring(indpf), btexte);
    }
  } // Traitement des balises <b>


  while ((ind = ch.indexOf('<b>')) !== -1) {
    indpf = kernel.indiceFinBalise(ch.substring(ind));

    if (indpf === -1) {
      return kernel.getMathsForName(ch.substring(0, ind), btexte) + '\\textbf{' + kernel.getMathsForName(ch.substring(ind + 3), false) + '}';
    } else {
      indpf += ind;
      return kernel.getMathsForName(ch.substring(0, ind), btexte) + '\\textbf{' + kernel.getMathsForName(ch.substring(ind + 3, indpf - 4), false) + '}' + kernel.getMathsForName(ch.substring(indpf), btexte);
    }
  }

  if (btexte) {
    // Même si on et en mode texte, on peut avoir au début de ch une balise \textcolor incomplète
    if (kernel.contientBaliseLaTeX(ch)) return ch;else {
      // Il faut sauter les balises \\textcolor en tenant compte que certaines ne sont pas fermées.
      ind = ch.indexOf('\\textcolor{');

      if (ind !== -1) {
        ret = '';
        ch2 = ch;

        while ((ind = ch2.indexOf('\\textcolor{')) !== -1) {
          ind1 = ch2.indexOf('}{');
          indpf = kernel.accoladeFermante(ch2, ind1 + 1);

          if (indpf === -1) {
            if (ind === 0) {
              if (ind1 + 2 !== ch2.length) ret += ch2.substring(0, ind1 + 2) + '\\text{' + ch2.substring(ind1 + 2) + '}';else ret += ch2;
              ch2 = '';
            } else {
              if (ind1 + 2 !== ch2.length) {
                ret += '\\text{' + ch2.substring(0, ind) + '}' + ch2.substring(ind, ind1 + 2) + '\\text{' + ch2.substring(ind1 + 2) + '}';
              } else ret += '\\text{' + ch2.substring(0, ind) + '}' + ch2.substring(ind, ind1 + 2);

              ch2 = '';
            }
          } else {
            if (ind === 0) {
              ret += ch2.substring(0, indpf + 1);
              if (indpf < ch2.length - 1) ch2 = ch2.substring(indpf + 1);else ch2 = '';
            } else {
              ret += '\\text{' + ch2.substring(0, ind) + '}' + ch2.substring(ind, ind1 + 2) + '\\text{' + ch2.substring(ind1 + 2, indpf + 1) + '}';
              if (indpf < ch2.length - 1) ch2 = ch2.substring(indpf + 1);else ch2 = '';
            }
          }
        }

        if (ch2 === '') return ret;else return ret + '\\text{' + ch2 + '}';
      } else {
        // Si la chaîne commence par une parenthèse fermante, une accolade fermante ou une virgule
        //  il s'agit d'une formule en cours et pas de mode texte
        car = ch.charAt(0);
        if (car === ')' || car === ',' || car === '}') return ch;else {
          // Si on est en modetexte et que la chaîne commence par des espaces, pour qu'ils soient pris en compte
          // on va, pour ces espaces, rester en mode maths et les remplacer par des ~ pour avoir des espaces insécables.
          var deb = '';

          while (ch.indexOf(' ') === 0) {
            deb += '~';
            ch = ch.substring(1);
          }

          return deb + '\\text{' + ch + '}';
        }
      }
    }
  } else return ch;
};
/**
 * Fontion qui, dans le cas d'utilisation du LaTeX, remplace les caractères accentués
 * qui ne sont pas bien traités par MathJax par des codes LaTeX
 * @param {string} ch
 * @returns {string|iep.traiteAccents.st} : La chaîne avec les caractères remplacés
 */


kernel.traiteAccents = function (ch) {
  var indpf, st, i, car, car2, bool, ind;
  var a = 'éèàùâêô';
  var b = ['acute', 'grave', 'grave', 'grave', 'hat', 'hat', 'hat'];
  var c = 'eeauaeo'; // On traite les £virg£ et £virg£

  ch = ch.replace(/£virg£/gi, ',');
  ch = ch.replace(/£virgule£/gi, ',');
  bool = false;

  for (i = 0; i < a.length; i++) {
    bool = bool || ch.indexOf(a.charAt(i)) !== 0;
  }

  if (!bool || ch.indexOf('\\text{') === -1) return ch;
  var res = '';
  var inddeb = 0;

  while ((ind = ch.indexOf('\\text{', inddeb)) !== -1 && inddeb < ch.length) {
    indpf = kernel.accoladeFermante(ch, ind + 6);
    if (indpf === -1) break;
    res = res + ch.substring(inddeb, ind);
    st = ch.substring(ind + 6, indpf + 1);

    for (i = 0; i < a.length; i++) {
      car = a.charAt(i);
      car2 = c.charAt(i);
      if (st.charAt(0) === car) st = '\\' + b[i] + '{' + car2 + '}' + '\\text{' + st.substring(1);

      if (st.charAt(st.length - 1) === car) {
        st = st.substring(0, st.length - 1) + '\\' + b[i] + '{' + car2 + '}';
      }

      st = st.replace(new RegExp(car, 'g'), '}\\' + b[i] + '{' + car2 + '} \\text{');
    } // Impossible de traite le c cédille
    // // Pour le lecteur IEP je laisse comme ça
    // st = st.replace(new RegExp("ç","g"),"c");


    bool = false;

    for (i = 0; i < a.length; i++) {
      bool = bool || st.indexOf('\\' + b[i]) === 0;
    }

    if (bool) res = res + st;else res = res + '\\text{' + st;
    inddeb = indpf + 1;
  }

  if (inddeb < ch.length) res = res + ch.substring(inddeb);
  return res;
};
/**
 * Fonction de log en dev (ne fait rien en prod)
 * @param {*} … autant d'arguments que l'on veut, les erreur seront envoyées à console.error et le reste à console.log
 */

/*
kernel.log = function () {
  if (kernel.isDev && typeof console !== "undefined" && console.log && console.error) {
    var i, arg;
    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      if (arg instanceof Error) console.error(arg);
      else console.log(arg);
    }
  }
}
*/

/**
 * Le namespace svg
 * @type {string}
 */
// kernel.svgsn = "http://www.w3.org/2000/svg";


module.exports = kernel;

/***/ }),

/***/ "./sources_js/iep.js":
/*!***************************!*\
  !*** ./sources_js/iep.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 *
 * Sert à compiler iepjsmax.js et iepjsmin.js, en exportant la version webpack du lecteur iep
 * dans le même espace de nom que précédemment. à savoir une var globale iep
 * (cf webpack.old.config.js avec libraryTarget: var &  library: 'iep')
 * qui s'utilise avec `var app = new iep.iepApp()`
 *
 * On laisse ça, pour ceux qui utilisent encore ces js, dépréciés au profit du loader
 */
var IepApp = __webpack_require__(/*! ./app/IepApp */ "./sources_js/app/IepApp.js");

module.exports = {
  iepApp: IepApp
};

/***/ }),

/***/ "./sources_js/instruments/compas.js":
/*!******************************************!*\
  !*** ./sources_js/instruments/compas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var InstrumentAncetre = __webpack_require__(/*! ./instrumentAncetre */ "./sources_js/instruments/instrumentAncetre.js");

module.exports = Compas;
/**
 * @constructor
 * @extends iep.instrumentAncetre
 * Objet Compas contenu dans une animation InstrumenPche
 * @param {iep.iepDoc} doc : le document propriétaire
 * la variable this.leve contient true si une action ActionLeverCompas a été
 * précédemment exécutée. Dans ce as c'est un autre objet iep.compasLeve qui sera créé
 * La variable this.bretourne contient true si une action ActionRetourner a été
 * exécutée précdemment.
 * et utilisé dans la figure.
 */

function Compas(doc) {
  InstrumentAncetre.call(this, doc);
  this.ecart = 0;
  this.bretourne = false;
  this.leve = false;
  this.lon = 185; // Longueur intérieure des deux branches des compas

  this.longpointe = 18;
  var d = this.lon + this.longpointe;
  this.alp = Math.asin(this.ecart / (2 * d)) / Math.PI * 180; // Le demi-angle que font les deux branches du compas

  this.decbh = 30; // Décalage vers le bas de la partie haute

  this.creeg();
  this.g.setAttribute('visibility', 'hidden');
  this.setPosition(this.x, this.y, this.angle, 1); // Ajout de d'élément graphique représentnant le compas dans le SVG contenant la figure

  doc.svg.appendChild(this.g);
}

Compas.prototype = new InstrumentAncetre();
/**
 * Fonction initialisant la position du compas
 */

Compas.prototype.initialisePosition = function () {
  InstrumentAncetre.prototype.initialisePosition.call(this);
  this.ecart = 0;
  this.positionne();
};
/**
 * Fonction créant l'élément graphique représentant le compas
 * @returns {svgElement}
 */


Compas.prototype.creeg = function () {
  var g, li, p, path, circ, text, rect;
  var lon = this.lon; // Longueur intérieure des deux branches des compas

  var longpointe = this.longpointe; // Longueur de la pointe et de la mine

  var ep = 7; // Epaisseur des branches

  var retb = 20; // Retrait du bouton de gauche sur la branche;

  var rayb = 6; // Le rayon des boutons

  var epm = 3.5; // Epaisseur de la mine

  var dlb = 3; // la demi-largeur basse de la partie fixe

  var dlm = 12; // La demi-largeur moyenne de la partie fixe

  var ylm = 24; // L'ordonnée correspondante

  var ylm2 = 35; // Ordonnée de la partie moyenne haute

  var dlh = 6; // La demi-largeur haute de la partie fixe

  var ylh = 50; // L'ordonnée correspondante

  var dltop = 3; // La demi-largeur de la partie supérieure du châpeau

  var ytop = 70; // L'ordonnée correspondante

  g = document.createElementNS(kernel.svgsn, 'g');
  this.bg = document.createElementNS(kernel.svgsn, 'g'); // La branche de gauche

  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('x1', 0);
  li.setAttribute('y1', 0);
  li.setAttribute('x2', 0);
  li.setAttribute('y2', -longpointe);
  li.setAttribute('style', 'stroke: black; stroke-width:1.5;');
  this.bg.appendChild(li);
  p = document.createElementNS(kernel.svgsn, 'path');
  path = 'M0 ' + String(-longpointe) + 'L 0 ' + String(-longpointe - lon) + ' ' + String(-ep) + ' ' + String(-longpointe - lon) + ' ' + String(-ep) + ' ' + String(-longpointe) + 'Z';
  p.setAttribute('d', path);
  p.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: silver; fill-opacity: 1');
  this.bg.appendChild(p); // On rajoute le bouton de gauche

  circ = document.createElementNS(kernel.svgsn, 'circle');
  circ.setAttribute('cx', -ep / 2);
  circ.setAttribute('cy', -longpointe - retb);
  circ.setAttribute('r', rayb);
  circ.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: silver; fill-opacity: 1');
  this.bg.appendChild(circ);
  circ = document.createElementNS(kernel.svgsn, 'circle');
  circ.setAttribute('cx', -ep / 2);
  circ.setAttribute('cy', -longpointe - retb);
  circ.setAttribute('r', 2);
  circ.setAttribute('style', 'stroke:black;stroke-width:1; fill: silver; fill-opacity: 1');
  this.bg.appendChild(circ);
  g.appendChild(this.bg); // La branche de droite

  this.bd = document.createElementNS(kernel.svgsn, 'g'); // La branche de gauche
  // La mine

  p = document.createElementNS(kernel.svgsn, 'path');
  path = 'M 0 0 L0' + ' ' + String(-longpointe) + ' ' + epm + ' ' + String(-longpointe - epm) + ' ' + epm + ' ' + String(-epm - 3) + 'Z';
  p.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: blck; fill-opacity: 1');
  p.setAttribute('d', path);
  this.bd.appendChild(p);
  p = document.createElementNS(kernel.svgsn, 'path');
  path = 'M0 ' + String(-longpointe) + 'L 0 ' + String(-longpointe - lon) + ' ' + ep + ' ' + String(-longpointe - lon) + ' ' + ep + ' ' + String(-longpointe) + 'Z';
  p.setAttribute('d', path);
  p.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: silver; fill-opacity: 1');
  this.bd.appendChild(p); // Le petit bout de bouton à droite

  p = document.createElementNS(kernel.svgsn, 'path');
  var rayx = rayb / 4 * 3;
  var rayy = rayb / 2;
  path = 'M' + ep + ' ' + String(-longpointe - retb + rayx) + 'A ' + rayx + ' ' + rayy + ' -90 0 0 ' + ep + ' ' + String(-longpointe - retb - rayx) + 'Z';
  p.setAttribute('style', 'stroke:black;stroke-width:1; fill: silver; fill-opacity: 1');
  p.setAttribute('d', path);
  this.bd.appendChild(p); // Ligne en biais sur la branche droite

  var styleli = 'stroke: black; stroke-width:1;';
  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('x1', 0);
  li.setAttribute('y1', -100);
  li.setAttribute('x2', ep);
  li.setAttribute('y2', -100 + ep);
  li.setAttribute('style', styleli);
  this.bd.appendChild(li); // Autres lignes branche de droite

  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('x1', 0);
  li.setAttribute('y1', -50);
  li.setAttribute('x2', ep);
  li.setAttribute('y2', -50);
  li.setAttribute('style', styleli);
  this.bd.appendChild(li);
  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('x1', ep / 2);
  li.setAttribute('y1', -50);
  li.setAttribute('x2', ep / 2);
  li.setAttribute('y2', -73);
  li.setAttribute('style', styleli);
  this.bd.appendChild(li); // Le bouton vu de côté

  rect = document.createElementNS(kernel.svgsn, 'rect');
  rect.setAttribute('x', ep);
  rect.setAttribute('y', -68);
  rect.setAttribute('width', 4);
  rect.setAttribute('height', 12);
  rect.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: silver; fill-opacity: 1');
  this.bd.appendChild(rect);
  g.appendChild(this.bd); // La partie fixe du haut

  this.haut = document.createElementNS(kernel.svgsn, 'g');
  p = document.createElementNS(kernel.svgsn, 'path');
  path = 'M 0 0 L' + dlb + ' 0 ' + dlm + ' ' + String(-ylm) + ' ' + dlm + ' ' + String(-ylm2) + 'A' + String(ylh - ylm2) + ' ' + String(dlm - dlh) + ' -90 0 1 ' + dlh + ' ' + String(-ylh) + 'L' + dltop + ' ' + String(-ytop) + ' ' + String(-dltop) + ' ' + String(-ytop) + 'L' + String(-dlh) + ' ' + String(-ylh) + 'A' + String(ylh - ylm2) + ' ' + String(dlm - dlh) + ' 90 0 1 ' + String(-dlm) + ' ' + String(-ylm2) + ' L ' + String(-dlm) + ' ' + String(-ylm) + ' ' + String(-dlb) + ' 0Z';
  p.setAttribute('d', path);
  p.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: #666666; fill-opacity: 1'); // this.haut.setAttribute("transform","translate(0,30)");

  this.haut.appendChild(p);
  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('x1', dlh);
  li.setAttribute('y1', -ylh);
  li.setAttribute('x2', -dlh);
  li.setAttribute('y2', -ylh);
  li.setAttribute('style', 'stroke: black; stroke-width:1;');
  this.haut.appendChild(li); // On ajoute le logo Sesamath

  text = document.createElementNS(kernel.svgsn, 'text');
  text.setAttribute('pointer-events', 'none');
  text.appendChild(document.createTextNode('Sésamath'));
  text.setAttribute('x', 0);
  text.setAttribute('y', 0);
  text.setAttribute('style', 'font-family: Arial;font-size: 5pt;fill: white');
  text.setAttribute('transform', 'rotate(-90) translate(4,2.5)');
  this.haut.appendChild(text); // On rajoute les deux petits ronds blancs (rivets) à chaque branche

  circ = document.createElementNS(kernel.svgsn, 'circle');
  circ.setAttribute('cx', -ep + 1);
  circ.setAttribute('cy', -this.decbh);
  circ.setAttribute('r', 3);
  circ.setAttribute('style', 'stroke:black;stroke-width:1; fill: white; fill-opacity: 1');
  this.haut.appendChild(circ);
  circ = document.createElementNS(kernel.svgsn, 'circle');
  circ.setAttribute('cx', ep - 1);
  circ.setAttribute('cy', -this.decbh);
  circ.setAttribute('r', 3);
  circ.setAttribute('style', 'stroke:black;stroke-width:1; fill: white; fill-opacity: 1');
  this.haut.appendChild(circ);
  g.appendChild(this.haut);
  this.g = g;
};
/**
 * Fonction calculant les éléments graphiques du compas et modifiant le svg element
 * en conséquence.
 * @param {Float} x : l'abscisse de la point du compas
 * @param {Float} y : l'ordonnée de la pointe du compas
 * @param {Float} angle : l'angle en degrés que fait le compas avec l'horizontale
 * @param {Float} zoomfactor : le zoom initialisé au daprt à 1 et qui peut être
 * modifié par une action ActionZoomInstrument
 */


Compas.prototype.setPosition = function (x, y, angle, zoomfactor) {
  var zoom, scale;

  if (arguments.length >= 4) {
    zoom = zoomfactor;
    this.zoomfactor = zoom;
  } else zoom = this.zoomfactor;

  if (this.bretroune) scale = 'scale(' + zoom + ',' + String(-zoom) + ') ';else scale = 'scale(' + zoom + ') ';
  this.x = x;
  this.y = y;
  this.angle = angle;
  var d = this.lon + this.longpointe;
  this.alp = Math.asin(this.ecart / (2 * d * zoom)) / Math.PI * 180; // Le demi-angle que font les deux branches du compas

  this.bg.setAttribute('transform', 'rotate(' + this.alp + ')');
  this.bd.setAttribute('transform', 'translate(' + this.ecart / zoom + ',0) rotate(' + String(-this.alp) + ')');
  var ang = this.alp / 180 * Math.PI;
  this.haut.setAttribute('transform', 'translate(' + String(this.ecart / 2 / zoom) + ',' + String(-d * Math.cos(ang) + this.decbh) + ')');
  this.g.setAttribute('transform', scale + 'translate(' + String(x / zoom) + ',' + String(y / zoom) + ') rotate(' + angle + ')');
};
/**
 * Fonction utilisée pour mettre le compas en position retournée par rapport
 * à la position précédente.
 */


Compas.prototype.retourne = function () {
  this.bretourne = !this.bretourne;
  this.setPosition(this.x, this.y, this.angle);
};
/**
 * Fonction recalculant les éléments du Compas et mettant en conséquence à jour
 * l'élément graphique qui le représente.
 */


Compas.prototype.positionne = function () {
  InstrumentAncetre.prototype.positionne.call(this);
  if (this.leve && this.doc.compasLeve != null) InstrumentAncetre.prototype.positionne.call(this.doc.compasLeve);
};
/**
 * Fonction translatant le compas au point de coordonnées (x;y)
 * @param {Float} x : l'abscisse du point de destination
 * @param {Float} y : l'ordonnée du point de destination
 */


Compas.prototype.translate = function (x, y) {
  InstrumentAncetre.prototype.translate.call(this, x, y);
  if (this.leve && this.doc.compasLeve != null) InstrumentAncetre.prototype.translate.call(this.doc.compasLeve, x, y);
};
/**
 * Fonction lançant une animation d'écartement de compas pour une action ActionEcaterCompas
 * @param {Float} ecart l la valeur de l'écartement final (en unités de longueur)
 * @param {Float} ec10 : le pas d'incrémentation pour l'écart à chaque dixième de seconde
 */


Compas.prototype.lanceAnimationEcartement = function (ecart, ec10) {
  this.ecartfin = parseFloat(ecart); // Dans la version JavaScript on pourra rajouter un paramètre donnant le pas
  // d'écartement par dixième de seconde

  this.pasecart = ec10 / 4;
  this.pasecart *= ecart >= this.ecart ? 1 : -1; // 1 pour le sens direct svg

  this.distecart = Math.abs(ecart - this.ecart);
  var t = this;
  this.timer = setInterval(function () {
    t.actionPourEcartement();
  }, 25);
}; // On poursuit l'animation tant que la distance entre la position actuelle et la psoition de fin
// est inférieure à la distance précédente

/**
 * Fonction appelée par un timer lors d'une aniamtion d'écartement de compas
 * On poursuit l'animation tant que la distance entre la position actuelle et
 * la position de fin de n réaugmente pas
 */


Compas.prototype.actionPourEcartement = function () {
  var ec = this.ecart + this.pasecart;
  var dis = Math.abs(ec - this.ecartfin);

  if (dis > this.distecart || !this.doc.animationEnCours) {
    this.ecart = this.ecartfin;
    this.setPosition(this.x, this.y, this.angle);
    clearInterval(this.timer);
    this.doc.actionSuivante();
  } else {
    this.distecart = dis;
    this.ecart = ec;
    this.setPosition(this.x, this.y, this.angle);
  }
};

/***/ }),

/***/ "./sources_js/instruments/compasLeve.js":
/*!**********************************************!*\
  !*** ./sources_js/instruments/compasLeve.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var InstrumentAncetre = __webpack_require__(/*! ./instrumentAncetre */ "./sources_js/instruments/instrumentAncetre.js");

module.exports = CompasLeve;
/**
 * @constructor
 * @extends iep.instrumentAncetre
 * Classe représentant le compas vu du dessus.
 * Attention : Contrairement au compas normal, le compas levé doit être reconstruit à  chaque fois
 * que son écartement est modifié.
 */

function CompasLeve(doc, x, y, angle, ecart) {
  InstrumentAncetre.call(this, doc);
  var oldg = doc.compasLeve == null ? null : doc.compasLeve.g;
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.ecart = ecart;
  this.creeg();
  this.g.setAttribute('visibility', 'hidden');
  this.setPosition(x, y, angle);
  if (oldg == null) doc.svg.appendChild(this.g);else doc.svg.replaceChild(this.g, oldg);
}

CompasLeve.prototype = new InstrumentAncetre();
/**
 * Fonction mettant dans this.g l'élément graphique représentant le compas
 * levé dans le DOM du svg contenant la figure.
 */

CompasLeve.prototype.creeg = function () {
  var rect, li, p, circ;
  var ep = 7; // Epaisseur des branches. La même que dans compas.

  var longpointe = 8; // Longueur de la pointe et des mines

  var ecart = this.ecart;
  var g = document.createElementNS(kernel.svgsn, 'g');

  if (this.ecart > 2 * longpointe) {
    rect = document.createElementNS(kernel.svgsn, 'rect');
    rect.setAttribute('x', longpointe);
    rect.setAttribute('y', -ep / 2);
    rect.setAttribute('width', this.ecart - 2 * longpointe);
    rect.setAttribute('height', ep);
    rect.setAttribute('rx', 1);
    rect.setAttribute('ry', 1);
    rect.setAttribute('style', 'stroke:black;stroke-width:0.5;fill:silver;fill-opacity:1');
    g.appendChild(rect);
  }

  p = document.createElementNS(kernel.svgsn, 'path');
  p.setAttribute('d', 'M0 0 L' + longpointe + ' 1 ' + longpointe + ' -1Z');
  p.setAttribute('style', 'stroke:black;stroke-width:0.5;fill:black;fill-opacity:1');
  g.appendChild(p);
  var d = ecart - 2 * longpointe;
  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('x1', longpointe);
  li.setAttribute('y1', 0);
  li.setAttribute('x2', longpointe + d / 8);
  li.setAttribute('y2', 0);
  li.setAttribute('style', 'stroke: black; stroke-width:0.5;');
  g.appendChild(li);
  p = document.createElementNS(kernel.svgsn, 'path');
  var e = String(ecart - longpointe);
  p.setAttribute('d', 'M' + ecart + ' 0 L' + e + ' 1.5 ' + e + ' -1.5Z');
  p.setAttribute('style', 'stroke:black;stroke-width:0.5;fill:black;fill-opacity:1');
  g.appendChild(p);
  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('x1', e);
  li.setAttribute('y1', 0);
  li.setAttribute('x2', String(ecart - longpointe - d / 8));
  li.setAttribute('y2', 0);
  li.setAttribute('style', 'stroke: black; stroke-width:0.5;');
  g.appendChild(li);
  li = document.createElementNS(kernel.svgsn, 'line');
  var f = String(ecart - longpointe - d / 8 - 2);
  li.setAttribute('x1', f);
  li.setAttribute('y1', -ep / 2);
  li.setAttribute('x2', f);
  li.setAttribute('y2', ep / 2);
  li.setAttribute('style', 'stroke: black; stroke-width:0.5;');
  g.appendChild(li);
  li = document.createElementNS(kernel.svgsn, 'line');
  f = String(ecart - longpointe - d / 3 - 2);
  li.setAttribute('x1', f);
  li.setAttribute('y1', -ep / 2);
  li.setAttribute('x2', f);
  li.setAttribute('y2', ep / 2);
  li.setAttribute('style', 'stroke: black; stroke-width:0.5;');
  g.appendChild(li); // Les boutons vus en perspective

  rect = document.createElementNS(kernel.svgsn, 'rect');
  rect.setAttribute('x', String(longpointe + d / 8 - 5));
  rect.setAttribute('y', String(-ep));
  rect.setAttribute('width', 8);
  rect.setAttribute('height', 3);
  rect.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: silver; fill-opacity: 1');
  g.appendChild(rect);
  rect = document.createElementNS(kernel.svgsn, 'rect');
  rect.setAttribute('x', String(ecart - longpointe - d / 8 - 4));
  rect.setAttribute('y', String(-ep));
  rect.setAttribute('width', 8);
  rect.setAttribute('height', 3);
  rect.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: silver; fill-opacity: 1');
  g.appendChild(rect); // Le dessus

  var dl = 12; // Demi-largeur de la partie centrale grise

  var dh = 4; // Demi-hauteur de la partie centrale grise

  p = document.createElementNS(kernel.svgsn, 'path');
  var path = 'M' + String(ecart / 2 + dl) + ' ' + String(-dh) + ' A ' + String(dl) + ' 2 180 0 0 ' + String(ecart / 2 - dl) + ' ' + String(-dh) + 'A' + String(dh) + ' 2 90 0 1 ' + String(ecart / 2 - dl) + ' ' + String(dh) + 'A' + String(dl) + ' 2 0 0 0 ' + String(ecart / 2 + dl) + ' ' + String(dh) + 'A' + String(dh) + ' 2 -90 0 1 ' + String(ecart / 2 + dl) + ' ' + String(-dh);
  p.setAttribute('d', path);
  p.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: #666666; fill-opacity: 1');
  g.appendChild(p);
  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('x1', String(ecart / 2 + dl));
  li.setAttribute('y1', -ep / 2);
  li.setAttribute('x2', String(ecart / 2 - dl));
  li.setAttribute('y2', ep / 2);
  li.setAttribute('style', 'stroke: black; stroke-width:0.5;');
  g.appendChild(li);
  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('x1', String(ecart / 2 - dl));
  li.setAttribute('y1', -ep / 2);
  li.setAttribute('x2', String(ecart / 2 + dl));
  li.setAttribute('y2', ep / 2);
  li.setAttribute('style', 'stroke: black; stroke-width:0.5;');
  g.appendChild(li);
  circ = document.createElementNS(kernel.svgsn, 'circle');
  circ.setAttribute('cx', String(ecart / 2));
  circ.setAttribute('cy', 0);
  circ.setAttribute('r', 5);
  circ.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: #666666; fill-opacity: 1');
  g.appendChild(circ); // Les boutons vus en perspective

  rect = document.createElementNS(kernel.svgsn, 'rect');
  rect.setAttribute('x', String(longpointe + d / 8 - 5));
  rect.setAttribute('y', String(-ep));
  rect.setAttribute('width', 7);
  rect.setAttribute('height', 3);
  rect.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: silver; fill-opacity: 1');
  g.appendChild(rect);
  rect = document.createElementNS(kernel.svgsn, 'rect');
  rect.setAttribute('x', String(ecart - longpointe - d / 8 - 4));
  rect.setAttribute('y', String(-ep));
  rect.setAttribute('width', 7);
  rect.setAttribute('height', 3);
  rect.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: silver; fill-opacity: 1');
  g.appendChild(rect);
  this.g = g;
};
/**
 * Fonction mettant le svg element représentant le compas levé à la position (x,y)
 * avec un angle avce l'horizontale égal à angle
 * @param {type} x
 * @param {type} y
 * @param {type} angle
 */


CompasLeve.prototype.setPosition = function (x, y, angle) {
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.g.setAttribute('transform', 'translate(' + x + ',' + y + ') rotate(' + angle + ')');
};

/***/ }),

/***/ "./sources_js/instruments/crayon.js":
/*!******************************************!*\
  !*** ./sources_js/instruments/crayon.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var InstrumentAncetre = __webpack_require__(/*! ./instrumentAncetre */ "./sources_js/instruments/instrumentAncetre.js");

module.exports = Crayon;
/**
 * Classe représentant le crayon de la figure.
 * (this.x,this.y) sont les coordonnées de la pointe de la mine
 * this.angle est l'angle du corps du crayon par rapport à l'horizontale.
 * @constructor
 * @extends iep.instrumentAncetre
 * @param {iep.iepDoc} doc : le document propriétaire de la figure
 */

function Crayon(doc) {
  InstrumentAncetre.call(this, doc);
  this.angle = this.angleInit();
  this.creeg();
  this.g.setAttribute('visibility', 'hidden');
  this.setPosition(this.x, this.y, this.angle);
  doc.svg.appendChild(this.g);
}

Crayon.prototype = new InstrumentAncetre();
/**
 * extends iep.instruementAncetre
 */

Crayon.prototype.angleInit = function () {
  return -40;
};
/**
 * Fonction mettant dans this.g l'élément graphique représentant le crayon
 * dans le DOM du svg de la figure
 */


Crayon.prototype.creeg = function () {
  var g, defs, p, path, path1, lg, stop, circ;
  var lon = 97; // La longueur totale (sans le demi-cercle final)

  var longpointe = 15; // La longueur de la mine

  var demlarg = 4.5; // La demi-largeur du crayon

  var longmine = 3;
  var demlargmine = longmine / longpointe * demlarg;
  g = document.createElementNS(kernel.svgsn, 'g'); // On crée un gradiant linéaire pour la mine
  // Il est nécessaire d'englober le gradient dans un defs pour pouvoir l'utiliser via url(#grad) plus tard

  defs = document.createElementNS(kernel.svgsn, 'defs');
  lg = document.createElementNS(kernel.svgsn, 'linearGradient');
  lg.setAttribute('id', 'gradpointe');
  stop = document.createElementNS(kernel.svgsn, 'stop');
  stop.setAttribute('offset', '0%');
  stop.setAttribute('style', 'stop-color: #f00000;');
  lg.appendChild(stop);
  stop = document.createElementNS(kernel.svgsn, 'stop');
  stop.setAttribute('offset', '50%');
  stop.setAttribute('style', 'stop-color: #eeb444;');
  lg.appendChild(stop);
  stop = document.createElementNS(kernel.svgsn, 'stop');
  stop.setAttribute('offset', '100%');
  stop.setAttribute('style', 'stop-color: #f00000');
  lg.appendChild(stop);
  lg.setAttribute('x1', '0%');
  lg.setAttribute('y1', '0%');
  lg.setAttribute('x2', '0%');
  lg.setAttribute('y2', '100%');
  defs.appendChild(lg);
  g.appendChild(defs); // Un autre gradiant pour le corps du crayon

  defs = document.createElementNS(kernel.svgsn, 'defs');
  lg = document.createElementNS(kernel.svgsn, 'linearGradient');
  lg.setAttribute('id', 'gradcorps');
  stop = document.createElementNS(kernel.svgsn, 'stop');
  stop.setAttribute('offset', '0%');
  stop.setAttribute('style', 'stop-color: #810216;');
  lg.appendChild(stop);
  stop = document.createElementNS(kernel.svgsn, 'stop');
  stop.setAttribute('offset', '25%');
  stop.setAttribute('style', 'stop-color: #c64f00;');
  lg.appendChild(stop);
  stop = document.createElementNS(kernel.svgsn, 'stop');
  stop.setAttribute('offset', '50%');
  stop.setAttribute('style', 'stop-color: #ab4a36');
  lg.appendChild(stop);
  stop = document.createElementNS(kernel.svgsn, 'stop');
  stop.setAttribute('offset', '75%');
  stop.setAttribute('style', 'stop-color: #c64f00;');
  lg.appendChild(stop);
  stop = document.createElementNS(kernel.svgsn, 'stop');
  stop.setAttribute('offset', '100%');
  stop.setAttribute('style', 'stop-colr: #810216;');
  lg.appendChild(stop);
  lg.setAttribute('x1', '0%');
  lg.setAttribute('y1', '0%');
  lg.setAttribute('x2', '0%');
  lg.setAttribute('y2', '100%');
  defs.appendChild(lg);
  g.appendChild(defs); // D'abord la mine

  p = document.createElementNS(kernel.svgsn, 'path');
  var rx = demlarg / 3;
  var ry = rx * 3 / 4;
  path1 = 'A' + rx + ' ' + ry + ' -90 0 0 ' + longpointe + ' ' + String(rx) + 'A' + rx + ' ' + ry + ' -90 0 1 ' + +longpointe + ' ' + String(-rx) + 'A' + rx + ' ' + ry + ' -90 0 0 ' + +longpointe + ' ' + String(-demlarg);
  path = 'M 0 0 L' + longpointe + ' ' + demlarg + path1 + 'Z';
  p.setAttribute('d', path);
  p.setAttribute('style', 'stroke:black; stroke-width:0.5; fill: url(#gradpointe); fill-opacity: 1;');
  g.appendChild(p); // La pointe noire

  p = document.createElementNS(kernel.svgsn, 'path');
  path = 'M 0 0 L ' + longmine + ' ' + demlargmine + ' ' + longmine + ' ' + String(-demlargmine) + 'Z';
  p.setAttribute('d', path);
  p.setAttribute('style', 'stroke:black; stroke-width:0.5; fill: black; fill-opacity: 1;');
  g.appendChild(p); // Le corps du crayon

  p = document.createElementNS(kernel.svgsn, 'path');
  path = 'M ' + longpointe + ' ' + demlarg + path1 + ' L ' + lon + ' ' + String(-demlarg) + ' L ' + lon + ' ' + String(demlarg) + 'Z';
  p.setAttribute('d', path);
  p.setAttribute('style', 'stroke:black; stroke-width:0.5; fill: url(#gradcorps); fill-opacity: 1;');
  g.appendChild(p); // Le cercle bleu du bout

  circ = document.createElementNS(kernel.svgsn, 'circle');
  circ.setAttribute('r', demlarg);
  circ.setAttribute('cx', lon);
  circ.setAttribute('cy', 0);
  circ.setAttribute('style', 'stroke:blue; stroke-width:0.5; fill: blue; fill-opacity: 1;');
  g.appendChild(circ);
  this.g = g;
};

/***/ }),

/***/ "./sources_js/instruments/equerre.js":
/*!*******************************************!*\
  !*** ./sources_js/instruments/equerre.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var InstrumentAncetre = __webpack_require__(/*! ./instrumentAncetre */ "./sources_js/instruments/instrumentAncetre.js");

module.exports = Equerre;
/**
 * Objet représentant l'équerre de la figure.
 * @constructor
 * @extends iep.instrumentAncetre
 * (this.x,this.y)  sont les coordonnées du sommet de l'équerre
 * this.angle est l'angle que fait l'équerre avec l'horizontale.
 * @param {iep.iepDoc} doc : le document propriétaire de la figure
 */

function Equerre(doc) {
  InstrumentAncetre.call(this, doc);
  this.creeg();
  this.g.setAttribute('visibility', 'hidden');
  this.setPosition(this.x, this.y, this.angle);
  doc.svg.appendChild(this.g);
}

Equerre.prototype = new InstrumentAncetre();
/**
 * Fonction mettannt dans this.g l'élément graphique représentant l'équerre
 * dans le DOM du svg qui contient la figure
 * @returns {g}
 */

Equerre.prototype.creeg = function () {
  var g, p, path, path2, text;
  var largeur = 131;
  var hauteur = 223;
  var largeurbas = 31;
  var largeurgauche = 24;
  var largeurint = 61;
  var hauteurint = largeurint * hauteur / largeur;
  var largeurbande = 16; // pour la partie plus claire en bas et à gauche.

  var h = hauteur / largeur * (largeur - largeurbande); // Hauteur basse de la partie plus claire

  var l = largeur / hauteur * (hauteur - largeurbande);
  g = document.createElementNS(kernel.svgsn, 'g'); // D'abord le pourtour

  p = document.createElementNS(kernel.svgsn, 'path'); // Pourtour exterieur

  path = 'M 0 0 L ' + largeur + ' 0 L 0 ' + String(-hauteur) + ' Z'; // Pourtout intérieur qui doit être parcouru dans l'autre sens pour le remplissage

  path2 = 'M ' + largeurgauche + ' ' + String(-largeurbas) + ' L ' + largeurgauche + ' ' + String(-largeurbas - hauteurint) + ' L ' + String(largeurgauche + largeurint) + ' ' + String(-largeurbas) + ' Z';
  path += path2;
  p.setAttribute('d', path);
  p.setAttribute('style', 'stroke:black;stroke-width:0.75; fill: #c6cbe8; fill-opacity: 0.5');
  g.appendChild(p); // On repasse l'intérieur pour laisser une bande plus claire sur les côtés

  p = document.createElementNS(kernel.svgsn, 'path');
  path = 'M ' + largeurbande + ' ' + String(-largeurbande) + ' L ' + l + ' ' + String(-largeurbande) + ' L ' + largeurbande + ' ' + -h + ' Z';
  path += path2;
  p.setAttribute('d', path);
  p.setAttribute('style', 'stroke-width:0; fill: #c6cbe8; fill-opacity: 0.5');
  g.appendChild(p); // On rajoute le texte Sesamath dans la barre du bas

  text = document.createElementNS(kernel.svgsn, 'text');
  text.setAttribute('pointer-events', 'none');
  text.appendChild(document.createTextNode('Sésamath'));
  text.setAttribute('x', largeurgauche);
  text.setAttribute('y', -largeurbande / 2 - 5);
  text.setAttribute('style', 'font-family: Arial;font-size: 8pt;font-weight:bold;fill: maroon');
  g.appendChild(text);
  this.g = g;
  return g; // Sert pour la règle équerre
};

/***/ }),

/***/ "./sources_js/instruments/instrumentAncetre.js":
/*!*****************************************************!*\
  !*** ./sources_js/instruments/instrumentAncetre.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-int.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var Vect = __webpack_require__(/*! ../types/vecteur */ "./sources_js/types/vecteur.js");

module.exports = InstrumentAncetre;
/**
 * Classe ancêtre de tous les instruments.
 * Contient deux membres this.x et this.y contenant les coordonnées de l'instrument
 * un membre this.angle contenant l'angle de l'instrument avec l'ohorizontale
 * et un membre this.zoomfactor contenant le facteur d'agrandissement de l'instrument.
 * @constructor
 * @param {iep.iepDoc} doc : le document contenant la figure et les instruments
 * @returns {undefined}
 */

function InstrumentAncetre(doc) {
  this.doc = doc;
  this.x = 200;
  this.y = 400;
  this.angle = 0; // Sera modifié au départ seulement pour le crayon

  this.zoomfactor = 1;
  this.visible = false;
}
/**
 * Fonction mettant l'instrument en position visible et montrant l'élement
 * graphique le représentant dans le DOM du svg de la figure
 * @param {boolean} bvisible
 */


InstrumentAncetre.prototype.montre = function (bvisible) {
  this.visible = bvisible;
  this.g.setAttribute('visibility', bvisible ? 'visible' : 'hidden');
};
/**
 * Fonction retirant du DOM du svg de la figure l'élément graphique représentant
 * l'instrument, le recréant et le rajoutant ensuite de façon que l'instrument
 * soit après les éléments graphiques représentant les objets de la figure et ne
 * soit pas recouvert par eux.
 * @returns {undefined}
 */


InstrumentAncetre.prototype.updateg = function () {
  this.initialisePosition();
  this.doc.svg.removeChild(this.g);
  this.doc.svg.appendChild(this.g);
};
/**
 * Fonction amenant l'instruemnt aux coordonnées (x,y) sans changer l'angle
 * ni le rapport de zoom.
 * @param {type} x : La nouvelle abscisse
 * @param {type} y : La nouvelle ordonnée
 * @returns {undefined}
 */


InstrumentAncetre.prototype.translate = function (x, y) {
  this.setPosition(x, y, this.angle, this.zoomfactor);
};
/**
 * Fonction envoayan l'angle initial de l'instruement.
 * Sera redéfini pour le crayon à -40°
 * @returns {Number}
 */


InstrumentAncetre.prototype.angleInit = function () {
  return 0;
};
/**
 * Fonction modifiant la position relative du g element représentant l'instrument
 * dans le svg de la figure pour qu'i soit à la bonne position, bon angle et bon zoom
 * Sera redéfini pour le compas et le compas levé.
 * @param {type} x
 * @param {type} y
 * @param {type} angle
 * @param {type} zoomfactor
 */


InstrumentAncetre.prototype.setPosition = function (x, y, angle, zoomfactor) {
  var zoom;
  this.x = x;
  this.y = y;
  this.angle = angle;

  if (arguments.length >= 4) {
    zoom = zoomfactor;
    this.zoomfactor = zoom;
  } else zoom = this.zoomfactor;

  this.g.setAttribute('transform', 'scale(' + zoom + ') translate(' + String(x / zoom) + ',' + String(y / zoom) + ') rotate(' + angle + ')');
};
/**
 * Fonction initialisant la position de l'instrument
 */


InstrumentAncetre.prototype.initialisePosition = function () {
  this.setPosition(200, 400, this.angleInit(), 1);
};
/**
 * Fonction lançant une animation de l'instrument par translation
 * @param {Float} xfin : l'abscisse de l'instrument à la fin de la translation
 * @param {Float} yfin : l'ordonnée de l'instrument à la fin de la translation
 * @param {Float} pix : Le nombre de pixels de la translation à chaque dixième de seconde
 */


InstrumentAncetre.prototype.lanceAnimationTranslation = function (xfin, yfin, pix10) {
  this.xfin = xfin;
  this.yfin = yfin;
  this.pix = Math.abs(pix10 / 2); // Dans la version JavaScript on quadruple la fréquence
  // en divisant le pas par 4
  // (en fait on corrige par car la rapidité semble double de celle annoncée dans le mode d'emploi)

  var v = new Vect(this.x, this.y, xfin, yfin);
  this.dist = v.norme(); // La distance entre la position actuelle et la position finale

  if (this.dist === 0) {
    this.doc.actionSuivante();
    return;
  }

  this.vect = v.vecteurColineaire(this.pix);
  var t = this;
  this.timer = setInterval(function () {
    t.actionPourTranslation();
  }, 25);
}; // On poursuit l'animation tant que la distance entre la position actuelle et la psoition de fin
// est inférieure à la distance précédente

/**
 * Fonction appelée par un timer lors de l'animation de translation de l'instrument
 */


InstrumentAncetre.prototype.actionPourTranslation = function () {
  var x = this.x + this.vect.x;
  var y = this.y + this.vect.y;
  var u = new Vect(x, y, this.xfin, this.yfin);
  var d = u.norme();

  if (d > this.dist || !this.doc.animationEnCours) {
    this.setPosition(this.xfin, this.yfin, this.angle);

    if (this === this.doc.compas) {
      if (this.doc.compasLeve != null && this.doc.compasLeve.visible) {
        this.doc.compasLeve.setPosition(this.xfin, this.yfin, this.angle);
      }
    }

    clearInterval(this.timer);
    this.doc.actionSuivante();
  } else {
    this.dist = d;
    this.setPosition(x, y, this.angle);

    if (this === this.doc.compas) {
      if (this.doc.compasLeve != null && this.doc.compasLeve.visible) {
        this.doc.compasLeve.setPosition(x, y, this.angle);
      }
    }
  }
};
/**
 * Fonction lançant une animation de l'instrument par rotation
 * @param {Float} l'angle de fin de l'objet avec l'horizontale après la rotation
 * @param {Integer} deg10 : le nombre de degrés dont on tounre à chaque
 * dixième de seconde
 */


InstrumentAncetre.prototype.lanceAnimationRotation = function (angfin, deg10) {
  // Il faut choisir le déplacement "le plus court"
  var ang1 = kernel.mesurePrincDeg(this.angle);
  var ang2 = kernel.mesurePrincDeg(angfin);

  if (Math.abs(ang2 - ang1) > 180) {
    if (ang2 > ang1) ang2 = ang2 - 360;else ang2 = ang2 + 360;
  }

  this.anglefin = ang2;
  this.angle = ang1; // Contraiement à ce qui est dit dans la doc d'instrumenpoche il semble que le pas par défaut soit de 16 °
  // et même un peu plus

  this.pasdeg = deg10 / 3; // Dans la version JavaScript on quadruple la fréquence
  // En divisant le pas par 4
  // Mais en fait par deux pour compatibilité observée

  this.pasdeg *= ang2 >= ang1 ? 1 : -1; // 1 pour le sens direct svg;

  this.distang = Math.abs(ang2 - this.angle);
  var t = this;
  this.timer = setInterval(function () {
    t.actionPourRotation();
  }, 25);
};
/**
 * Fonction appelée par un timer lors de l'animation de rotation de l'instrument
 */


InstrumentAncetre.prototype.actionPourRotation = function () {
  var ang = parseFloat(this.angle) + parseFloat(this.pasdeg);
  var dis = Math.abs(ang - this.anglefin);

  if (dis > this.distang || !this.doc.animationEnCours) {
    this.setPosition(this.x, this.y, this.anglefin);
    clearInterval(this.timer);
    this.doc.actionSuivante();
  } else {
    this.distang = dis;
    this.setPosition(this.x, this.y, ang);
  }
};
/**
 * Fonction lançant une animation de l'instrument par zoom
 * @param {Integer} zoomfin : le zoom final quand l'animation est finie
 * @param {Float} vitesse : paramètre représentant la vitesse d'animation
 */


InstrumentAncetre.prototype.lanceAnimationZoom = function (zoomfin, vitesse) {
  this.zoomfin = zoomfin;
  this.vitesse = parseInt(vitesse);
  this.pas = this.vitesse * 0.05 * (this.zoomfin - this.zoomfactor); // On augmente
  // par défaut de 5% de vitesse tous les dixièmes de seconde

  this.senspos = this.pas >= 0;
  var t = this;
  this.timer = setInterval(function () {
    t.actionPourZoom();
  }, 100);
};
/**
 * Fonction appelée par un timer lors de l'animation de zoom de l'instrument
 */


InstrumentAncetre.prototype.actionPourZoom = function () {
  var z = this.zoomfactor + this.pas;

  if (this.doc.animationEnCours && (this.senspos && z < this.zoomfin || !this.senspos && z > this.zoomfin)) {
    this.setPosition(this.x, this.y, this.angle, z);
  } else {
    this.zoomfactor = this.zoomfin;
    this.positionne();
    clearInterval(this.timer);
    this.doc.actionSuivante();
  }
};
/**
 * Fonction recalculant l'élément graphique représentant l'instrument et
 * remettant son élément grapique en accord avec cette position
 */


InstrumentAncetre.prototype.positionne = function () {
  this.setPosition(this.x, this.y, this.angle, this.zoomfactor);
};

/***/ }),

/***/ "./sources_js/instruments/rapporteur.js":
/*!**********************************************!*\
  !*** ./sources_js/instruments/rapporteur.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var InstrumentAncetre = __webpack_require__(/*! ./instrumentAncetre */ "./sources_js/instruments/instrumentAncetre.js");

module.exports = Rapporteur;
/**
 * @constructor
 * @extends iep.instrumentAncetre
 * Classe représentant le rapporteur de la figure.
 * @param {type} doc
 */

function Rapporteur(doc) {
  InstrumentAncetre.call(this, doc);
  this.graduationExterneVisible = true;
  this.graduationInterneVisible = true;
  this.creeg();
  this.g.setAttribute('visibility', 'hidden');
  this.setPosition(this.x, this.y, this.angle);
  doc.svg.appendChild(this.g);
}

Rapporteur.prototype = new InstrumentAncetre();
/**
 * Fonction mettant dans this.g l'élément graphique représentant le rapporteur dans
 * le DOM du svg de la figure
 */

Rapporteur.prototype.creeg = function () {
  var path, p, g, li, i, text, circ;
  var hauteurPolice = 10;
  var hauteurPoliceInterne = 9;
  var largeurBarre = '13';
  var ray = 156;
  var rayon = String(ray); // Le rayon extérieur

  var rayInt = 89;
  var rayonInt = String(rayInt); // Le rayon intérieur

  var raytraitint = '116'; // Le rayon du trait interne

  var rayonMire = '7';
  g = document.createElementNS(kernel.svgsn, 'g');
  p = document.createElementNS(kernel.svgsn, 'path'); // Le pourtour

  path = 'M ' + rayon + ' 0 A ' + rayon + ' ' + rayon + ' 0 0 0 -' + rayon + ' 0 L ' + '-' + rayon + ' ' + largeurBarre + ' L ' + rayon + ' ' + largeurBarre + ' L ' + rayon + ' 0'; // L'intérieur qui doit être tacé dans l'autre sens

  path += 'M 0 0 L -' + rayonInt + ' 0 A ' + rayonInt + ' ' + rayonInt + ' 0 0 1 ' + rayonInt + ' 0 Z';
  p.setAttribute('d', path);
  p.setAttribute('style', 'stroke:#999999;stroke-width:1; fill: #c6cbe8; fill-opacity: 0.5');
  g.appendChild(p); // La mire

  p = document.createElementNS(kernel.svgsn, 'path');
  path = 'M ' + rayonMire + ' 0 A ' + rayonMire + ' ' + rayonMire + ' 0 0 0 ' + '-' + rayonMire + ' 0 M 0 0 L 0 -' + rayonMire;
  p.setAttribute('d', path);
  p.setAttribute('style', 'stroke: #666666;stroke-width:1; fill: none');
  g.appendChild(p); // Les graduations externes

  for (i = 0; i <= 180; i++) {
    li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('x1', rayon);
    li.setAttribute('y1', 0);
    li.setAttribute('x2', i % 10 === 0 ? ray - 20 : i % 5 === 0 ? ray - 10 : ray - 5);
    li.setAttribute('y2', 0);
    li.setAttribute('transform', 'rotate(-' + i + ')');
    li.setAttribute('style', 'stroke: #333333;stroke-width:0.7;');
    g.appendChild(li);
  } // Les nombres de la graduation externe


  this.gradext = document.createElementNS(kernel.svgsn, 'g');

  for (i = 0; i <= 180; i++) {
    if (i % 10 === 0) {
      text = document.createElementNS(kernel.svgsn, 'text');
      text.setAttribute('pointer-events', 'none');
      text.appendChild(document.createTextNode(i));
      text.setAttribute('x', 0);
      text.setAttribute('y', 0);
      text.setAttribute('style', 'font-family: arial;font-size: ' + hauteurPolice + 'px;text-anchor: middle; fill: black');
      text.setAttribute('transform', ' scale(-1) rotate(' + String(-i - 90) + ') translate(0,' + String(-ray + 22 + hauteurPolice) + ')');
      this.gradext.appendChild(text);
    }
  }

  g.appendChild(this.gradext); // On rajoute le trait interne séparat les graduatiosn externes et internes

  var dep = ray - 26 - hauteurPolice;
  p = document.createElementNS(kernel.svgsn, 'path');
  path = 'M ' + String(dep) + ' 0 L ' + raytraitint + ' 0 A ' + raytraitint + ' ' + raytraitint + ' 0 0 0 -' + raytraitint + ' 0 L ' + String(-dep) + ' 0';
  p.setAttribute('d', path);
  p.setAttribute('style', 'stroke: #666666;stroke-width:1; fill: none');
  g.appendChild(p); // On rajoute les graduatiions internes

  for (i = 0; i <= 18; i++) {
    li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('x1', rayInt);
    li.setAttribute('y1', 0);
    li.setAttribute('x2', rayInt + 10);
    li.setAttribute('y2', 0);
    li.setAttribute('transform', 'rotate(-' + String(10 * i) + ')');
    li.setAttribute('style', 'stroke: #333333;stroke-width:0.7;');
    g.appendChild(li);
  } // Les nombres de la graduation interne


  this.gradint = document.createElementNS(kernel.svgsn, 'g');

  for (i = 0; i <= 18; i++) {
    text = document.createElementNS(kernel.svgsn, 'text');
    text.setAttribute('pointer-events', 'none');
    text.appendChild(document.createTextNode(180 - 10 * i));
    text.setAttribute('x', 0);
    text.setAttribute('y', 0);
    text.setAttribute('style', 'font-family: arial;font-size: ' + hauteurPoliceInterne + 'px;text-anchor: middle; fill: black');
    text.setAttribute('transform', 'scale(-1) rotate(' + String(-10 * i - 90) + ') translate(0,' + String(-rayInt - 14) + ')'); // text.setAttribute("transform", "rotate(" + String(-10*i+1) + ")");

    this.gradint.appendChild(text);
  }

  g.appendChild(this.gradint); // On matérialise le centre par un petit rond (n'existait pas).

  circ = document.createElementNS(kernel.svgsn, 'circle');
  circ.setAttribute('cx', 0);
  circ.setAttribute('cy', 0);
  circ.setAttribute('r', 2);
  circ.setAttribute('style', 'stroke: black; stroke-width: 1;fill: none');
  g.appendChild(circ); // On rajoute le texte Sesamath dans la barre du bas

  text = document.createElementNS(kernel.svgsn, 'text');
  text.setAttribute('pointer-events', 'none');
  text.appendChild(document.createTextNode('Sésamath'));
  text.setAttribute('x', 0);
  text.setAttribute('y', largeurBarre - 2);
  text.setAttribute('style', 'font-family: sans-serif;font-size: 7pt;font-weight:bold;text-anchor: middle; fill: maroon');
  g.appendChild(text);
  this.g = g;
};
/**
 * Fonction montrant ou affichant les nombres de la graduation externe
 * @param {type} bvisible : Nombres affichés si true
 */


Rapporteur.prototype.montreGraduations = function (bvisible) {
  this.graduationInterneVisible = true;
  if (this.visible) this.gradint.setAttribute('visibility', bvisible ? 'visible' : 'hidden');
};
/**
 * Fonction montrant ou affichant les nombres de la graduation interne du rapporteur
 * @param {type} bvisible : : Nombres affichés si true
 */


Rapporteur.prototype.montreGraduationsExternes = function (bvisible) {
  this.graduationExterneVisible = true;
  if (this.visible) this.gradext.setAttribute('visibility', bvisible ? 'visible' : 'hidden');
};
/**
 * Fonction mettant le rapporteur en position visible ou caché suivant la
 * valeur de bvisible
 * @param {boolean} bvisible
 */


Rapporteur.prototype.montre = function (bvisible) {
  InstrumentAncetre.prototype.montre.call(this, bvisible);

  if (bvisible) {
    this.gradint.setAttribute('visibility', this.graduationInterneVisible ? 'visible' : 'hidden');
    this.gradext.setAttribute('visibility', this.graduationExterneVisible ? 'visible' : 'hidden');
  } else {
    this.gradint.setAttribute('visibility', 'hidden');
    this.gradext.setAttribute('visibility', 'hidden');
  }
};

/***/ }),

/***/ "./sources_js/instruments/regle.js":
/*!*****************************************!*\
  !*** ./sources_js/instruments/regle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var InstrumentAncetre = __webpack_require__(/*! ./instrumentAncetre */ "./sources_js/instruments/instrumentAncetre.js");

module.exports = Regle;
/**
 * @constructor
 * @extends iep.instrumentAncetre
 * Classe représentant la règle de la figure
 * @param {iep.iepDoc} doc : le document propriétaire de la figure
 */

function Regle(doc) {
  InstrumentAncetre.call(this, doc);
  this.x = 100;
  this.y = 400;
  this.angle = 0;
  this.longueur = 15; // Longueur en cm. Peut être modifier par actionModifierLongueur
  // 30 pixels par cm

  this.graduationVisible = true;
  this.creeg();
  this.g.setAttribute('visibility', 'hidden');
  this.setPosition(this.x, this.y, this.angle);
  doc.svg.appendChild(this.g);
}

Regle.prototype = new InstrumentAncetre();
/**
 * Fonction mettant dans this.g l'élément graphique représentant la règle
 * dans le DOM du svg de la figure
 */

Regle.prototype.creeg = function () {
  var li, text;
  var hauteurPolice = 9;
  var longint = this.longueur * 30 + 15;
  var larg = 57;
  var largeur = String(larg);
  var ray = 6; // Rayon de courbure des coins

  var rayon = String(ray);
  var g = document.createElementNS(kernel.svgsn, 'g');
  var rect = document.createElementNS(kernel.svgsn, 'rect');
  rect.setAttribute('x', -rayon - 1);
  rect.setAttribute('y', 0);
  rect.setAttribute('width', String(longint + ray + 1));
  rect.setAttribute('height', largeur);
  rect.setAttribute('rx', rayon);
  rect.setAttribute('ry', rayon);
  rect.setAttribute('style', 'stroke:#999999;stroke-width:2; fill: #c6cbe8; fill-opacity: 0.5;');
  g.appendChild(rect);
  var line = document.createElementNS(kernel.svgsn, 'line');
  line.setAttribute('x1', -rayon);
  line.setAttribute('y1', 27);
  line.setAttribute('x2', longint);
  line.setAttribute('y2', 27);
  line.setAttribute('style', 'stroke:#999999;stroke-width:2;');
  g.appendChild(line); // On crée les graduations

  this.graduations = document.createElementNS(kernel.svgsn, 'g');

  for (var i = 0; i <= this.longueur * 10; i++) {
    li = document.createElementNS(kernel.svgsn, 'line');
    var x = 3 * i;
    li.setAttribute('x1', x);
    li.setAttribute('y1', 0);
    li.setAttribute('x2', x);
    li.setAttribute('y2', i % 10 === 0 ? 12 : i % 5 === 0 ? 9 : 6);

    if (i % 10 === 0) {
      text = document.createElementNS(kernel.svgsn, 'text');
      text.setAttribute('pointer-events', 'none');
      text.appendChild(document.createTextNode(String(i / 10)));
      text.setAttribute('x', x);
      text.setAttribute('y', 12 + hauteurPolice);
      text.setAttribute('style', 'font-family: monospace;font-size: ' + hauteurPolice + 'pt;text-anchor:middle');
      this.graduations.appendChild(text);
    }

    li.setAttribute('style', 'stroke:black;stroke-width:0.7;');
    this.graduations.appendChild(li);
  } // On rajoute le texte Sesamath


  text = document.createElementNS(kernel.svgsn, 'text');
  text.setAttribute('pointer-events', 'none');
  text.appendChild(document.createTextNode('Sésamath'));
  text.setAttribute('x', longint / 2 - ray - 3);
  text.setAttribute('y', largeur - 5);
  text.setAttribute('style', 'font-family: Arial;font-size: 8pt;font-weight:bold;fill: maroon;text-anchor:middle;');
  g.appendChild(text);
  g.appendChild(this.graduations);
  this.g = g;
};
/**
 * Fonction mettant les graduations de la règle en mode visible
 * et les endnt visibles dans le svg si l'instrument y est visible
 * @param {boolean} bvisible
 */


Regle.prototype.montreGraduations = function (bvisible) {
  this.graduationVisible = bvisible;
  this.graduations.setAttribute('visibility', this.visible ? bvisible ? 'visible' : 'hidden' : 'hidden');
};
/**
 * Fonction montrant la régle ou la cachant suivant la valeur de bvisible
 * @param {type} bvisible
 */


Regle.prototype.montre = function (bvisible) {
  InstrumentAncetre.prototype.montre.call(this, bvisible);

  if (bvisible) {
    this.graduations.setAttribute('visibility', this.graduationVisible ? 'visble' : 'hidden');
  } else {
    this.graduations.setAttribute('visibility', 'hidden');
  }
};
/**
 * Fonction initialisant la position de la règle.
 * Si la longueur de la règle a été modifiée il faut la réinitialiser
 */


Regle.prototype.initialisePosition = function () {
  if (this.longueur !== 15) {
    this.longueur = 15;
    var vis = this.visible;
    var oldg = this.g;
    this.creeg();
    this.g.setAttribute('visibility', vis ? 'visible' : 'hidden');
    this.doc.svg.replaceChild(this.g, oldg);
  }

  InstrumentAncetre.prototype.initialisePosition.call(this);
};

/***/ }),

/***/ "./sources_js/instruments/requerre.js":
/*!********************************************!*\
  !*** ./sources_js/instruments/requerre.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var InstrumentAncetre = __webpack_require__(/*! ./instrumentAncetre */ "./sources_js/instruments/instrumentAncetre.js");

var Equerre = __webpack_require__(/*! ../instruments/equerre */ "./sources_js/instruments/equerre.js");

module.exports = Requerre;
/**
 * @constructor
 * @extends iep.instrumentAncetre
 * Classe représentant la régle-equerre dans la figure InstrumenPoche
 * @param {iep.iepDo} doc : le document propriétaire de la figure
 */

function Requerre(doc) {
  InstrumentAncetre.call(this, doc);
  this.x = 200;
  this.y = 400;
  this.angle = 0;
  this.zoomfactor = 1;
  this.abscisse = 0; // L'abscisse au coin de l'équerre sur la règle

  this.creeg();
  this.g.setAttribute('visibility', 'hidden');
  this.setPosition(this.x, this.y, this.angle);
  doc.svg.appendChild(this.g);
}

Requerre.prototype = new InstrumentAncetre();
/**
 * Fonction mettant dans this.g l'élément graphique représentant la règle-équerre
 * dans le DOM du svg de la figure
 */

Requerre.prototype.creeg = function () {
  var g, p, path, pathtrou, line;
  var longd = 172; // Longueur de la partie droite à partir de l'origine

  var longg = 256; // Longueur de la partie gauche à partir de l'origine

  var larg = 57; // La largeur

  var ray = 5; // Rayon de courbure des coins

  var largeurbande = 16; // Largeur des bandes plus claires

  var dectroud = 20;
  var dectroub = 15;
  var raytrou = 6;
  var style = 'stroke:#999999;stroke-width:2; fill: #c6cbe8; fill-opacity: 0.5'; // Ici on ne peut pas faire un rectangle aux bords arrondis si on veut le petit cercle
  // ajouré en bas et à droite

  g = document.createElementNS(kernel.svgsn, 'g');
  p = document.createElementNS(kernel.svgsn, 'path');
  path = 'M 0 0 L ' + String(longd - ray) + ' 0 A ' + ray + ' ' + ray + ' 0 0 1 ' + String(longd) + ' ' + ray + ' L ' + String(longd) + ' ' + String(larg - ray) + ' A ' + ray + ' ' + ray + ' 90 0 1 ' + String(longd - ray) + ' ' + String(larg) + ' L ' + String(-longg + ray) + ' ' + larg + ' A ' + ray + ' ' + ray + ' 180 0 1 ' + '-' + longg + ' ' + String(larg - ray) + ' L ' + String(-longg) + ' ' + ray + ' A ' + ray + ' ' + ray + ' -90 0 1 ' + String(-longg + ray) + ' 0Z'; // On rajoute le trou parcouru dans le sens inverse pour qu'il ne soit pas rempli
  // Forcément deux demi-cercles. Un cercle entier ne semble pas possible.

  var ytrou = larg - dectroub;
  pathtrou = 'M' + String(longd - dectroud + raytrou) + ' ' + ytrou + 'A ' + raytrou + ' ' + raytrou + ' 180 0 0 ' + String(longd - dectroud - raytrou) + ' ' + String(ytrou) + 'A ' + raytrou + ' ' + raytrou + ' 180 0 0 ' + String(longd - dectroud + raytrou) + ' ' + String(ytrou);
  path += pathtrou;
  p.setAttribute('d', path);
  p.setAttribute('style', style);
  g.appendChild(p); // On rajoute l'intérieur pour les bords soient plus clairs

  p = document.createElementNS(kernel.svgsn, 'path');
  path = 'M' + String(longd) + ' ' + String(largeurbande) + 'L' + String(longd) + ' ' + String(larg - ray) + ' A ' + ray + ' ' + ray + ' 90 0 1 ' + String(longd - ray) + ' ' + String(larg) + ' L ' + String(-longg + ray) + ' ' + larg + ' A ' + ray + ' ' + ray + ' 180 0 1 ' + '-' + longg + ' ' + String(larg - ray) + ' L ' + String(-longg) + ' ' + String(largeurbande) + 'Z' + pathtrou;
  p.setAttribute('d', path);
  p.setAttribute('style', style);
  g.appendChild(p); // Un trait de rappel pour l'origine

  line = document.createElementNS(kernel.svgsn, 'line');
  line.setAttribute('x1', 0);
  line.setAttribute('y1', 8);
  line.setAttribute('x2', 0);
  line.setAttribute('y2', 0);
  line.setAttribute('style', 'stroke: black');
  g.appendChild(line);
  this.gequerre = new Equerre.prototype.creeg();
  this.gequerre.setAttribute('transform', 'scale(0.7)');
  g.appendChild(this.gequerre);
  this.setAbs(this.abscisse);
  this.g = g;
};
/**
 * Fonction faisant glisser l'équerre sur la règle jusqu'à l'abscisse abs
 * L'abscisse 0 est représentée par le petit trait sur la règle
 * @param {type} abs
 */


Requerre.prototype.setAbs = function (abs) {
  this.abscisse = abs;
  this.gequerre.setAttribute('transform', 'translate(' + abs + ',0)');
};
/**
 * Fonction lançant une animation de glissement de l'équerre sur la règle
 * La règle équerre est le seul instrument à voir un mouvement autre que translation et rotation : Le glissement.
 * @param {Float} absfin : l'abscisse de l'équerre à la fin du glissement
 * @param {Float} pix10 : le nombre de pixels dont gilsse l'équerre
 * à chaque dixième de seconde.
 */


Requerre.prototype.lanceAnimationGlissement = function (absfin, pix10) {
  this.absfin = absfin;
  this.pix = absfin >= this.abscisse ? pix10 / 4 : -pix10 / 4; // Dans la version JavaScript on quadruple la fréquence

  this.dist = Math.abs(absfin - this.abscisse);
  var t = this;
  this.timer = setInterval(function () {
    t.actionPourGlissement();
  }, 25);
};
/**
 * Fonction appelée par un timer lors de l'aniamtion de glissement de l'équerre
 * sur la règle
 */


Requerre.prototype.actionPourGlissement = function () {
  var abs = this.abscisse + this.pix;
  var dis = Math.abs(this.absfin - abs);

  if (dis > this.dist || !this.doc.animationEnCours) {
    this.setAbs(this.absfin);
    clearInterval(this.timer);
    this.doc.actionSuivante();
  } else {
    this.dist = dis;
    this.setAbs(abs);
  }
};

/***/ }),

/***/ "./sources_js/mathjaxLoader.js":
/*!*************************************!*\
  !*** ./sources_js/mathjaxLoader.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * This file is part of Instrumenpoche.
 *   Copyright 2014-2015, Association Sésamath
 *
 * Instrumenpoche is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License version 3
 * as published by the Free Software Foundation.
 *
 * Instrumenpoche is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with SesaReactComponent (LICENCE.txt).
 * @see http://www.gnu.org/licenses/agpl.txt
 *
 *
 * Ce fichier fait partie de SesaReactComponent, créée par l'association Sésamath.
 *
 * Instrumenpoche est un logiciel libre ; vous pouvez le redistribuer ou le modifier suivant
 * les termes de la GNU Affero General Public License version 3 telle que publiée par la
 * Free Software Foundation.
 * Instrumenpoche est distribué dans l'espoir qu'il sera utile, mais SANS AUCUNE GARANTIE,
 * sans même la garantie tacite de QUALITÉ MARCHANDE ou d'ADÉQUATION à UN BUT PARTICULIER.
 * Consultez la GNU Affero General Public License pour plus de détails.
 * Vous devez avoir reçu une copie de la GNU General Public License en même temps que SesaQcm
 * (cf LICENCE.txt et http://vvlibri.org/fr/Analyse/gnu-affero-general-public-license-v3-analyse
 * pour une explication en français)
 */

/* eslint-env browser */

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.promise.js");

var _require = __webpack_require__(/*! sesajstools/dom */ "./node_modules/.framagit.org/Sesamath/sesajstools/ac6283ba39b63def7e316a1f1c813915656c401e/node_modules/sesajstools/dom/index.js"),
    addJs = _require.addJs;

var mathJaxUrl = 'https://www.mathgraph32.org/js/MathJax/MathJax.js?config=TeX-AMS-MML_SVG-full';
var configCode = "MathJax.Hub.Config({\n  tex2jax: {\n    inlineMath: [['$', '$'],['\\\\(', '\\\\)']]\n  },\n  jax: ['input/TeX','output/SVG'],\n  TeX: {extensions: ['color.js']},\n  messageStyle:'none'\n});"; // en s

var loadDelay = 10; // La 1re promesse de chargement qui sera créée, puis renvoyée lors de tous les appels
// (ça permet de ne lancer qu'un seul chargement même en cas d'appels multiples avant que MathJax ne soit complètement chargé)

var firstLoadingPromise;
/**
 * Charge mathjax dans le <head> de la page courante
 * (appelé par le prepare de ActionEcrireTexte et ActionNommerPoint,
 * donc déclenche le chargement dès que le tableau des actions est construit,
 * seulement si l'une des actions a besoin de Mathjax)
 * @private
 * @return {Promise}
 */

module.exports = function mathjaxLoader() {
  // Au 1er appel on charge MathJax
  if (!firstLoadingPromise) {
    if (typeof MathJax === 'undefined') {
      // faut le charger
      firstLoadingPromise = new Promise(function (resolve, reject) {
        var head = window.document.getElementsByTagName('head')[0]; // la config

        var eltConfig = window.document.createElement('script');
        eltConfig.type = 'text/x-mathjax-config';
        eltConfig.appendChild(window.document.createTextNode(configCode));
        head.appendChild(eltConfig); // load du js

        addJs(mathJaxUrl, function () {
          clearTimeout(timeout);
          resolve();
        }); // on ajoute un timeout de chargement

        var timeout = setTimeout(function () {
          // on reset pour que le prochain appel relance un chargement
          firstLoadingPromise = null;
          reject(Error("Mathjax non charg\xE9 apr\xE8s ".concat(loadDelay, "s d\u2019attente")));
        }, loadDelay * 1000);
      });
    } else {
      // on avait déjà chargé MathJax avant le 1er appel de cette fct, on le garde
      console.log('MathJax était déjà chargé, on ne fait rien');
      firstLoadingPromise = Promise.resolve();
    }
  }

  return firstLoadingPromise;
};

/***/ }),

/***/ "./sources_js/objets/Imag.js":
/*!***********************************!*\
  !*** ./sources_js/objets/Imag.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 * Attention : Ne pas appeler cet objet Imag car entre en conflit avec l'objet Imag du JS
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetBase = __webpack_require__(/*! ./objetBase */ "./sources_js/objets/objetBase.js");

var ActionCreation = __webpack_require__(/*! ../actions/actionCreation */ "./sources_js/actions/actionCreation.js");

module.exports = Imag;
/**
 * Classe représentant une image incluse dans la figure InstrumenPoche
 * @extends iep.objetBase
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire
 * @param {string} id : id de l'objet créé dans le fichier XML de la figure
 * @param {string} url : l'url de la figure
 */

function Imag(doc, id, url) {
  this.doc = doc;
  this.id = id;
  this.url = url;
  this.x = 0;
  this.y = 0;
  this.angle = 0;
  this.objet = 'image';
  this.zoomfactor = 1;
}

Imag.prototype = new ObjetBase();
/** @inheritDoc */

Imag.prototype.initialisePosition = function () {
  this.x = 0;
  this.y = 0;
  this.angle = 0;
  this.zoomfactor = 1;
  this.positionne();
};
/**
 * Fonction appelée dans iepDoc.creeActions
 * crée une image avec l'url url de façon à récupérer ses dimensions
 * Lorsque l'image est chargée, une fonction de callBack crée l'élément graphique
 * image dans le DOM du svg contenant la igure
 */


Imag.prototype.prepareAction = function () {
  var img = new Image();
  img.owner = this;
  this.action = new ActionCreation(this.doc, this.id, this);
  this.action.isReady = false;
  this.doc.ajouteAction(this.action);

  img.onload = function () {
    var own = this.owner;
    own.width = this.width;
    own.height = this.height;
    own.action.isReady = true; // own.doc.waitForReadyState();
  };

  img.src = this.url; // Provoque le chargement de l'image
};
/**
 * Fonction mettant dans this.g l'élément graphique svg représentant l'objet dans
 * le DOM du svg de la figure
 */


Imag.prototype.creeg = function () {
  var image = document.createElementNS(kernel.svgsn, 'image');
  image.setAttribute('width', this.width);
  image.setAttribute('height', this.height);
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this.url);
  image.setAttribute('x', this.x);
  image.setAttribute('y', this.y);
  image.setAttribute('visibility', 'hidden');
  this.g = image; // image.setAttribute("id",this.id);

  this.setPosition(this.x, this.y, this.angle, this.zoomfactor);
  this.doc.svg.appendChild(image);
};
/**
 * Fonction mettant l'image aux coordonnées (x,y) avec un angle angle et
 * un coefficient de zoom zoomfactor et modifiant la position du svg element qui
 * le représente dans le DOM du svg.
 * @param {float} x
 * @param {float} y
 * @param {float} angle
 * @param {integer} zoomfactor
 * @returns {undefined}
 */


Imag.prototype.setPosition = function (x, y, angle, zoomfactor) {
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.zoomfactor = zoomfactor;
  this.g.setAttribute('transform', 'scale(' + zoomfactor + ') translate(' + String(x / zoomfactor) + ',' + String(y / zoomfactor) + ') rotate(' + angle + ')');
};
/**
 * Fonction mettant à jour l'élément graphique image dans le DOM du svg de la figure
 */


Imag.prototype.positionne = function () {
  this.setPosition(this.x, this.y, this.angle, this.zoomfactor);
};

/***/ }),

/***/ "./sources_js/objets/angle.js":
/*!************************************!*\
  !*** ./sources_js/objets/angle.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetLigne = __webpack_require__(/*! ./objetLigne */ "./sources_js/objets/objetLigne.js");

var Vect = __webpack_require__(/*! ../types/vecteur */ "./sources_js/types/vecteur.js");

module.exports = Angle;
/**
 * Classe représentant une marque d'angle sur la figure
 * @extends iep.objetBase
 * @constructor
 * @param {Float} x  : abscisse du centre
 * @param {Float} y : ordonnée du centre
 * @param {Float} ray : le rayon
 * @param {Float} ang1 : angle de départ (en degrés)
 * @param {Float} ang2 : angle de fin (en degrés)
 * @param {string} couleur : la couleur
 * @param {string} epaisseur : épaisseur du trait
 * @param {string} opacite : chaine de caractère pour l'opacité (0 à 100)
 * @param {string} motif ; chaîne de caractères. Si elle commence par plein la marque doit être remplie.
 * Si elle finit par un, deux ou trois slashes, elle a des traits de marque
 * d'angle (autant que de /)
 */

function Angle(doc, id, x, y, ray, ang1, ang2, couleur, epaisseur, opacite, motif) {
  this.x = parseFloat(x);
  this.y = parseFloat(y);
  this.ray = parseFloat(ray);
  this.ang1 = parseFloat(ang1);
  this.ang2 = parseFloat(ang2);
  this.motif = motif == null ? 'simple' : motif; // Pas d'opacité pour le trait

  ObjetLigne.call(this, doc, id, couleur, epaisseur, 1);
  this.opaciteRemplissage = opacite == null ? 0.7 : parseFloat(opacite) / 100;
  this.objet = 'angle';
}

Angle.prototype = new ObjetLigne();
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */

Angle.prototype.creeg = function () {
  var direct, path, line, v2, xc1, yc1, xmilieu, ymilieu, ang2, ang3;
  var demilong = 5; // Demi-longueur des traits de marque

  var motif = this.motif;
  var ray = this.ray;
  var a1 = this.ang1;
  var a2 = this.ang2;
  var d = a2 - a1;
  var ang = kernel.mesurePrincDeg(d); // var direct = (ang>0) && !iep.zeroAngle(d+180); // Direct dans le sens du repère du svg

  if (kernel.zeroAngle(Math.abs(d) - 180)) direct = this.ang1 <= this.ang2;else direct = ang > 0;
  var u1 = new Vect(this.x, this.y, this.x + Math.cos(a1 * kernel.convDegRad), this.y + Math.sin(a1 * kernel.convDegRad)).vecteurColineaire(ray);
  var u2 = new Vect(this.x, this.y, this.x + Math.cos(a2 * kernel.convDegRad), this.y + Math.sin(a2 * kernel.convDegRad)).vecteurColineaire(ray); // Début de l'arc

  var xd = this.x + u1.x;
  var yd = this.y + u1.y; // Fin de l'arc

  var xf = this.x + u2.x;
  var yf = this.y + u2.y;
  var g = document.createElementNS(kernel.svgsn, 'g');
  var p = document.createElementNS(kernel.svgsn, 'path');
  var remplis = motif.indexOf('plein') !== -1 ? this.couleur : 'none';

  if (remplis !== 'none') {
    path = 'M' + this.x + ' ' + this.y + 'L' + xd + ' ' + yd + 'A' + ray + ' ' + ray + ' ' + this.ang1 + ' 0 ' + (direct ? '1 ' : '0 ') + xf + ' ' + yf + ' Z';
  } else {
    path = 'M' + xd + ' ' + yd + 'A' + ray + ' ' + ray + ' ' + this.ang1 + ' 0 ' + (direct ? '1 ' : '0 ') + xf + ' ' + yf;
  }

  p.setAttribute('d', path);
  var style1 = 'stroke:' + this.couleur + ';stroke-width:' + this.epaisseur + ';';
  var style = style1 + 'fill:' + remplis + ';fill-opacity:' + this.opaciteRemplissage + ';';
  p.setAttribute('style', style);
  g.appendChild(p);
  var rond = motif.indexOf('O') !== -1;
  var uc = u1.tourne(ang / 2); // Vecteur du centre vers le milieu de l'arc

  var xc = this.x + uc.x; // Abscisse du centre de l'arc

  var yc = this.y + uc.y; // Ordonnée du centre de l'arc

  if (rond) {
    var circ = document.createElementNS(kernel.svgsn, 'circle');
    circ.setAttribute('r', 5); // Rayon de 5 pixels pour le petir rond de marque

    circ.setAttribute('cx', xc);
    circ.setAttribute('cy', yc);
    circ.setAttribute('style', style1 + 'fill:none;');
    g.appendChild(circ);
  } // On regarde s'il y a un, deux ou trois arcs de cercle à tracer


  var n = motif.indexOf('triple') !== -1 ? 2 : motif.indexOf('double') !== -1 ? 1 : 0;

  for (var i = 1; i <= n; i++) {
    p = document.createElementNS(kernel.svgsn, 'path');
    var r = ray - i * 5;
    var u3 = u1.vecteurColineaire(r);
    var u4 = u2.vecteurColineaire(r);
    xd = this.x + u3.x;
    yd = this.y + u3.y;
    xf = this.x + u4.x;
    yf = this.y + u4.y;
    path = 'M' + xd + ' ' + yd + 'A' + r + ' ' + r + ' ' + this.ang1 + ' 0 ' + (direct ? '1 ' : '0 ') + xf + ' ' + yf;
    p.setAttribute('d', path);
    p.setAttribute('style', style1 + 'fill:none;');
    g.appendChild(p);
  } // On rajoute les éventuels traits (de 1 à 3)


  var nbtraits = motif.indexOf('///') !== -1 ? 3 : motif.indexOf('//') !== -1 ? 2 : motif.indexOf('/') !== -1 ? 1 : 0;

  if (nbtraits === 0) {
    this.g = g;
    return;
  }

  var n1 = n + 1;
  var v = uc.vecteurColineaire(1); // Vecteur de longueur 1

  switch (nbtraits) {
    case 1:
      xmilieu = this.x + v.x * ray;
      ymilieu = this.y + v.y * ray;
      line = document.createElementNS(kernel.svgsn, 'line');
      line.setAttribute('x1', xmilieu - v.x * demilong * n1);
      line.setAttribute('y1', ymilieu - v.y * demilong * n1);
      line.setAttribute('x2', xmilieu + v.x * demilong);
      line.setAttribute('y2', ymilieu + v.y * demilong);
      line.setAttribute('style', style);
      g.appendChild(line);
      break;

    case 2:
      ang2 = ang / 6;
      ang3 = 6;
      if (Math.abs(ang2) >= Math.abs(ang3)) ang2 = ang3;
      v2 = v.tourne(ang2);
      xc1 = this.x + v2.x * ray;
      yc1 = this.y + v2.y * ray;
      line = document.createElementNS(kernel.svgsn, 'line');
      line.setAttribute('x1', xc1 - v.x * demilong * n1);
      line.setAttribute('y1', yc1 - v.y * demilong * n1);
      line.setAttribute('x2', xc1 + v.x * demilong);
      line.setAttribute('y2', yc1 + v.y * demilong);
      line.setAttribute('style', style);
      g.appendChild(line);
      v2 = v.tourne(-ang2);
      xc1 = this.x + v2.x * ray;
      yc1 = this.y + v2.y * ray;
      line = document.createElementNS(kernel.svgsn, 'line');
      line.setAttribute('x1', xc1 - v.x * demilong * n1);
      line.setAttribute('y1', yc1 - v.y * demilong * n1);
      line.setAttribute('x2', xc1 + v.x * demilong);
      line.setAttribute('y2', yc1 + v.y * demilong);
      line.setAttribute('style', style);
      g.appendChild(line);
      break;

    case 3:
      xmilieu = this.x + v.x * ray;
      ymilieu = this.y + v.y * ray;
      line = document.createElementNS(kernel.svgsn, 'line');
      line.setAttribute('x1', xmilieu - v.x * demilong * n1);
      line.setAttribute('y1', ymilieu - v.y * demilong * n1);
      line.setAttribute('x2', xmilieu + v.x * demilong);
      line.setAttribute('y2', ymilieu + v.y * demilong);
      line.setAttribute('style', style);
      g.appendChild(line);
      ang2 = ang / 4;
      ang3 = 9;
      if (Math.abs(ang2) >= Math.abs(ang3)) ang2 = ang3;
      v2 = v.tourne(ang2);
      xc1 = this.x + v2.x * ray;
      yc1 = this.y + v2.y * ray;
      line = document.createElementNS(kernel.svgsn, 'line');
      line.setAttribute('x1', xc1 - v.x * demilong * n1);
      line.setAttribute('y1', yc1 - v.y * demilong * n1);
      line.setAttribute('x2', xc1 + v.x * demilong);
      line.setAttribute('y2', yc1 + v.y * demilong);
      line.setAttribute('style', style);
      g.appendChild(line);
      v2 = v.tourne(-ang2);
      xc1 = this.x + v2.x * ray;
      yc1 = this.y + v2.y * ray;
      line = document.createElementNS(kernel.svgsn, 'line');
      line.setAttribute('x1', xc1 - v.x * demilong * n1);
      line.setAttribute('y1', yc1 - v.y * demilong * n1);
      line.setAttribute('x2', xc1 + v.x * demilong);
      line.setAttribute('y2', yc1 + v.y * demilong);
      line.setAttribute('style', style);
      g.appendChild(line);
      break;
  }

  this.g = g;
};

/***/ }),

/***/ "./sources_js/objets/angleDroit.js":
/*!*****************************************!*\
  !*** ./sources_js/objets/angleDroit.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetLigne = __webpack_require__(/*! ./objetLigne */ "./sources_js/objets/objetLigne.js");

var Vect = __webpack_require__(/*! ../types/vecteur */ "./sources_js/types/vecteur.js");

module.exports = AngleDroit;
/**
 * Classe représentant une marque d'angle droit de la figure
 * @extends iep.objetBase
 * @constructor
 * @param {iep.iepDoc} doc : le document propiétaire de la figure
 * @param {type} id : l'ide de l'objet dans le xml de la figure
 * @param {Float} xsommet : absisse du sommet de l'angle droit
 * @param {Float} ysommet : ordonnée du sommet de l'angle droit
 * @param {Float} xinter : abscisse du sommet de la marque d'angle
 * @param {type} yinter : ordonnée du sommet de la marque d'angle
 * @param {type} couleur : couleur de la marque
 * @param {type} epaisseur
 */

function AngleDroit(doc, id, xsommet, ysommet, xinter, yinter, couleur, epaisseur) {
  this.xsommet = parseFloat(xsommet);
  this.ysommet = parseFloat(ysommet);
  this.xinter = parseFloat(xinter);
  this.yinter = parseFloat(yinter);
  ObjetLigne.call(this, doc, id, couleur, epaisseur, 100);
  this.objet = 'angle_droit';
}

AngleDroit.prototype = new ObjetLigne();
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */

AngleDroit.prototype.creeg = function () {
  var v1 = new Vect(this.xsommet, this.ysommet, this.xinter, this.yinter);
  var n = v1.norme();
  v1 = v1.vecteurColineaire(n / Math.sqrt(2));
  v1 = v1.tourne(45);
  var v2 = v1.tourne(-90);
  var p = document.createElementNS(kernel.svgsn, 'polyline');
  var points = String(this.xsommet + v1.x) + ' ' + String(this.ysommet + v1.y) + ' ' + this.xsommet + ' ' + this.ysommet + ' ' + String(this.xsommet + v2.x) + ' ' + String(this.ysommet + v2.y);
  p.setAttribute('points', points);
  p.setAttribute('style', this.style + 'fill:none;');
  this.g = p;
};

/***/ }),

/***/ "./sources_js/objets/arc.js":
/*!**********************************!*\
  !*** ./sources_js/objets/arc.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
* Visualiseur InstrumenPoche en Javascript et SVG
* @Author Yves Biton (yves.biton@sesamath.net)
* @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
*/
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetLigne = __webpack_require__(/*! ./objetLigne */ "./sources_js/objets/objetLigne.js");

var CompasLeve = __webpack_require__(/*! ../instruments/compasLeve */ "./sources_js/instruments/compasLeve.js");

var Vect = __webpack_require__(/*! ../types/vecteur */ "./sources_js/types/vecteur.js");

module.exports = Arc;
/**
 * Classe arc de cercle (servant aussi à tracer les cercles)
 * extends iep.objetBase
 * @constructor
 * @param {type} x : abscisse du centre
 * @param {type} y : Ordonnée du centre
 * @param {type} ray : Le rayon
 * @param {type} debut : L'angle de début de tracé
 * @param {type} fin : L'angle de fin de tracé
 * @param {type} couleur : La couleur
 * @param {type} epaisseur : L'épaisseur du trait
 * @param {type} opacite : L'opacité du tracé
 * @param {type} styleTrait : "tiret" pour avoir des pointillés
 * Si debut < angle, l'arc est tracé dans le sens des ailluilles d'une montre, sinon dans le sens inverse
 */
// Important : l'objet graphque (g element) sera initialisé avec comme centre l'origine

function Arc(doc, id, x, y, ray, debut, fin, couleur, epaisseur, opacite, styleTrait) {
  this.x = parseFloat(x);
  this.y = parseFloat(y);
  this.ray = parseFloat(ray);
  this.debut = parseFloat(debut);
  this.fin = parseFloat(fin);
  ObjetLigne.call(this, doc, id, couleur, epaisseur, opacite, styleTrait);
}

Arc.prototype = new ObjetLigne();

Arc.prototype.creeg = function () {
  var deb = this.debut;
  var fin = this.fin;
  var ray = this.ray;
  var sens = deb < fin ? '1' : '0'; // 1 pour le sens des aiguilles d'une montre (direct pour le SVG)

  var ecart = Math.abs(fin - deb);
  var g = document.createElementNS(kernel.svgsn, 'g');

  if (ecart >= 359.9) {
    // Cas d'un cercle ou presque
    var circ = document.createElementNS(kernel.svgsn, 'circle');
    circ.setAttribute('r', ray);
    circ.setAttribute('cx', 0);
    circ.setAttribute('cy', 0);
    circ.setAttribute('style', this.style + ';fill:none;');
    g.appendChild(circ);
  } else {
    var p = document.createElementNS(kernel.svgsn, 'path');
    var u1 = new Vect(Math.cos(deb * kernel.convDegRad) * ray, Math.sin(deb * kernel.convDegRad) * ray);
    var u2 = new Vect(Math.cos(fin * kernel.convDegRad) * ray, Math.sin(fin * kernel.convDegRad) * ray);
    var xdeb = u1.x;
    var ydeb = u1.y;
    var xfin = u2.x;
    var yfin = u2.y;
    var path = 'M' + xdeb + ' ' + ydeb + 'A' + ray + ' ' + ray + ' ' + deb + ' ' + (ecart > 180 ? '1' : '0') + ' ' + sens + ' ' + xfin + ' ' + yfin;
    p.setAttribute('d', path);
    p.setAttribute('style', this.style + ';fill:none');
    g.appendChild(p);
  }

  g.setAttribute('transform', 'translate(' + this.x + ',' + this.y + ')'); // g.setAttribute("id",this.id);

  g.setAttribute('visibility', 'hidden');
  this.g = g;
};

Arc.prototype.creationAnimee = function () {
  return true;
};

Arc.prototype.lanceAnimation = function (vitesse) {
  var compas = this.doc.compas;

  if (this.doc.compasLeve == null) {
    this.doc.compasLeve = new CompasLeve(this.doc, compas.x, compas.y, compas.angle, compas.ecart);
  }

  var compasLeve = this.doc.compasLeve;
  this.ray = this.doc.compas.ecart; // Le rayon ne peut etre connu qu'au mancement de l'animation

  this.angfin = this.fin;
  this.pasdeg = vitesse / 2; // Dans la version JavaScript on quadruple la fréquence mais on la double par rapport aux autres animations

  this.pasdeg *= this.fin >= this.debut ? 1 : -1; // 1 pour le sens direct svg;

  this.distang = Math.abs(this.fin - this.debut);
  this.fin = this.debut;
  compas.setPosition(this.x, this.y, this.debut);
  compasLeve.setPosition(this.x, this.y, this.debut);
  var t = this;
  this.timer = setInterval(function () {
    t.actionPourAnimation();
  }, 25);
};

Arc.prototype.actionPourAnimation = function () {
  var compas = this.doc.compas;
  var compasLeve = this.doc.compasLeve;
  this.fin += this.pasdeg;
  var dis = Math.abs(this.angfin - this.fin);

  if (dis > this.distang || !this.doc.animationEnCours) {
    this.fin = this.angfin;
    this.updateg(); // compas.setPosition(this.x,this.y,this.fin);

    this.finAction();
    clearInterval(this.timer);
    this.doc.actionSuivante();
  } else {
    this.distang = dis;
    this.updateg();
    compas.setPosition(this.x, this.y, this.fin);
    if (compasLeve !== null) compasLeve.setPosition(this.x, this.y, this.fin);
  }
};

Arc.prototype.finAction = function () {
  this.doc.compas.setPosition(this.x, this.y, this.fin);
  if (this.doc.compasLeve !== null) this.doc.compasLeve.setPosition(this.x, this.y, this.fin);
};

/***/ }),

/***/ "./sources_js/objets/axe.js":
/*!**********************************!*\
  !*** ./sources_js/objets/axe.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetBase = __webpack_require__(/*! ./objetBase */ "./sources_js/objets/objetBase.js");

module.exports = Axe;
/**
 * Classe représentant un axe dans une figure InstrumenPoche
 * Repris à partir du code Flash
 * @extends iep.objetBase
 * @constructor
 * @param {ie.iepDoc} doc : le document propriétaire
 * @param {string} pente : "horizontal" pour un axe horizontal, sinon vertical
 * @param {string} largeur
 * @param {string} haut
 * @param {string} gauche
 * @param {string} distanceBord
 * @param {string} xgrad
 * @param {string} xmin
 * @param {string} xmax
 * @param {string} couleur : la couleur de l'axe
 */

function Axe(doc, pente, largeur, haut, gauche, distanceBord, xgrad, xmin, xmax, couleur) {
  ObjetBase.call(this, doc, 'axeIEP', couleur); // Le repère aura pour Id axeIEP

  this.pente = pente == null ? 'horizontal' : pente;
  this.largeur = largeur;
  this.haut = haut == null ? 0 : parseFloat(haut);
  this.gauche = gauche == null ? 0 : parseFloat(gauche);
  this.distanceBord = parseFloat(distanceBord);
  this.xgrad = xgrad;
  this.xmin = xmin;
  this.xmax = xmax;
  this.cadre = {};
  this.cadre.gauche = this.gauche * 30; // 30 px pour 1 cm

  this.cadre.haut = this.haut * 30;
  this.width = 30 * largeur;
  this.cadre.droite = this.gauche + this.width;
  this.cadre.bas = this.haut + this.width;
}

Axe.prototype = new ObjetBase();
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */

Axe.prototype.creeg = function () {
  var li, nb_grad_x, bord, debut_trace_x;
  this.g = document.createElementNS(kernel.svgsn, 'g');
  var style = 'stroke:black;stroke-width:1;'; // Si besoin, on trace des graduations pour les abscisses

  if (this.pente === 'horizontal' && this.xmax - this.xmin > this.xgrad) {
    // nombre de graduations qui apparaitront
    nb_grad_x = Math.floor((this.xmax - this.xmin) / this.xgrad);
    /*
     determination de l'ordonnée de l'axe horizontal
     */

    bord = this.distanceBord * 30;
    /*
     FIN ETIQUETTES
     */

    /*
     DETERMINATION ABSCISSES
     */

    debut_trace_x = kernel.determiner_graduations(this.xmin, this.xmax, this.xgrad);
    this.tracer_abscisses(debut_trace_x, this.xgrad, nb_grad_x, bord);
    li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('style', style);
    li.setAttribute('x1', this.cadre.gauche);
    li.setAttribute('y1', bord);
    li.setAttribute('x2', this.cadre.droite);
    li.setAttribute('y2', bord);
    this.g.appendChild(li);
    /*
     FIN ABSCISSES
     */
  } else if (this.xmax - this.xmin > this.xgrad) {
    // nombre de graduations qui apparaitront
    nb_grad_x = Math.floor((this.xmax - this.xmin) / this.xgrad);
    /*
     determination de l'ordonnée de l'axe horizontal
     */

    bord = Number(this.distanceBord) * 30;
    /*
     FIN ETIQUETTES
     */

    /*
     DETERMINATION ABSCISSES
     */

    debut_trace_x = kernel.determiner_graduations(this.xmin, this.xmax, this.xgrad);
    this.tracer_ordonnees(debut_trace_x, this.xgrad, nb_grad_x, bord);
    li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('style', style);
    li.setAttribute('x1', bord);
    li.setAttribute('y1', this.cadre.bas);
    li.setAttribute('x2', bord);
    li.setAttribute('y2', this.cadre.haut);
    this.g.appendChild(li);
    /*
     FIN ABSCISSES
     */
  }
};
/**
 * Fonction reprise du code Flash, utiilisée dans creeg()
 */


Axe.prototype.tracer_abscisses = function (debut_trace_x, unite_x, nb_grad_x, ordo_etiquettes) {
  var li, txt, abscisse, i;
  var tailleEtiquettes = 12; // Taille de la police utilisée pour les étiquettes

  var style = 'stroke:black;stroke-width:1.5;';
  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('style', style);
  li.setAttribute('x1', this.cadre.gauche);
  li.setAttribute('y1', ordo_etiquettes);
  li.setAttribute('x2', this.cadre.droite);
  li.setAttribute('y2', ordo_etiquettes);
  this.g.appendChild(li);

  for (i = 0; i <= nb_grad_x; i++) {
    li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('style', style);
    abscisse = this.mettre_x_en_pixels(debut_trace_x + i * unite_x);
    li.setAttribute('x1', abscisse);
    li.setAttribute('y1', String(ordo_etiquettes - 5));
    li.setAttribute('x2', abscisse);
    li.setAttribute('y2', String(ordo_etiquettes + 5));
    this.g.appendChild(li);
    txt = document.createElementNS(kernel.svgsn, 'text');
    txt.setAttribute('x', abscisse);
    txt.setAttribute('y', ordo_etiquettes + tailleEtiquettes + 5);
    var stylet = 'text-anchor:left;font-size:' + tailleEtiquettes + 'px;' + 'fill:' + this.couleur + ';';
    txt.setAttribute('style', stylet);
    txt.appendChild(document.createTextNode(String(debut_trace_x + i * unite_x)));
    this.g.appendChild(txt);
  }
};
/**
 * Fonction reprise du code Flash, utiilisée dans creeg()
 */


Axe.prototype.tracer_ordonnees = function (debut_trace_y, unite_y, nb_grad_y, abs_etiquettes) {
  var li, txt, i;
  var tailleEtiquettes = 12; // Taille de la police utilisée pour les étiquettes

  var style = 'stroke:black;stroke-width:1.5;';
  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('style', style);
  li.setAttribute('x1', abs_etiquettes);
  li.setAttribute('y1', this.cadre.haut);
  li.setAttribute('x2', abs_etiquettes);
  li.setAttribute('y2', this.cadre.bas);
  this.g.appendChild(li);

  for (i = 0; i <= nb_grad_y; i++) {
    li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('style', style);
    var ordonnee = this.mettre_y_en_pixels(debut_trace_y + i * unite_y);
    li.setAttribute('x1', String(abs_etiquettes - 5));
    li.setAttribute('y1', ordonnee);
    li.setAttribute('x2', String(abs_etiquettes + 5));
    li.setAttribute('y2', ordonnee);
    this.g.appendChild(li);
    txt = document.createElementNS(kernel.svgsn, 'text');
    txt.setAttribute('x', abs_etiquettes + 10);
    txt.setAttribute('y', ordonnee + 2);
    var stylet = 'text-anchor:left;font-size:' + tailleEtiquettes + 'px;' + 'fill:' + this.couleur + ';';
    txt.setAttribute('style', stylet);
    txt.appendChild(document.createTextNode(String(debut_trace_y + i * unite_y)));
    this.g.appendChild(txt);
  }
};
/**
 * Fonction utilisée dans iep.axe
 * @param {type} nbr
 * @returns {Float}
 */


Axe.prototype.mettre_x_en_pixels = function (nbr) {
  return kernel.mettre_en_pixels(nbr, this.xmin, this.xmax, this.cadre.gauche, this.cadre.droite);
};
/**
 * Fonction utilisée dans iep.axe
 * @param {type} nbr
 * @returns {Float}
 */


Axe.prototype.mettre_y_en_pixels = function (nbr) {
  return kernel.mettre_en_pixels(nbr, this.xmax, this.xmin, this.cadre.haut, this.cadre.bas);
};

/***/ }),

/***/ "./sources_js/objets/demiDroite.js":
/*!*****************************************!*\
  !*** ./sources_js/objets/demiDroite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var Droite = __webpack_require__(/*! ./droite */ "./sources_js/objets/droite.js");

var Vect = __webpack_require__(/*! ../types/vecteur */ "./sources_js/types/vecteur.js");

module.exports = DemiDroite;
/**
 * Classe représentant une demi-droite dans la figure InstrumenPoche
 * @extends iep.objetBase
 * @constructor
 * @param {iep.iepDoc} doc :le document propriétaire de la figure
 * @param {type} id : l'id de l'objet dans le fichier XML
 * @param {Float} x1 : abscisse du premier point
 * @param {Float} y1 : ordonnée du premier point
 * @param {Float} x2 : abscisse du second point
 * @param {Float} y2 : ordonnée du premier point
 * @param {string} couleur : couelur de la demi-droite
 * @param {string} epaisseur : Epaisseur du trait
 * @param {string} opacite : Opacité du trait
 * @param {string} styleTrait : "tiret" pour avoir des pointillés
 */

function DemiDroite(doc, id, x1, y1, x2, y2, couleur, epaisseur, opacite, styleTrait) {
  Droite.call(this, doc, id, x1, y1, x2, y2, couleur, epaisseur, opacite, styleTrait);
}

DemiDroite.prototype = new Droite(); // Inutile de redéfinir creeg()

/**
 * Fonction calculant les coordonnées des points à la limite de la figure
 * (xext1,yext1) et (xext2,yext2) pour le tracé réel
 */

DemiDroite.prototype.calcule = function () {
  var u, v;
  Droite.prototype.calcule.call(this);
  var v1 = new Vect(this.x1, this.y1, this.x2, this.y2); // Vceteur directeur de la demi-droite
  // Si la droite est hors-fenêtre, la demi-droite l'est aussi

  if (this.horsFenetre) return; // Dans IEP l'origine est toujours dans la fenêtre

  u = new Vect(this.x1, this.y1, this.xext1, this.yext1);

  if (u.presqueNul()) {
    v = new Vect(this.x1, this.y1, this.xext2, this.yext2);

    if (kernel.colineairesMemeSens(v, v1)) {
      this.xext1 = this.x1;
      this.yext1 = this.y1;
    } else {
      this.xext2 = this.xext1;
      this.yext2 = this.yext1;
      this.xext1 = this.x1;
      this.yext1 = this.y1;
    }
  } else {
    if (kernel.colineairesMemeSens(u, v1)) {
      this.xext2 = this.xext1;
      this.yext2 = this.yext1;
      this.xext1 = this.x1;
      this.yext1 = this.y1;
    } else {
      this.xext1 = this.x1;
      this.yext1 = this.y1;
    }
  }
};

/***/ }),

/***/ "./sources_js/objets/droite.js":
/*!*************************************!*\
  !*** ./sources_js/objets/droite.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-int.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var DroiteAncetre = __webpack_require__(/*! ./droiteAncetre */ "./sources_js/objets/droiteAncetre.js");

module.exports = Droite;
/**
 * Classe représentant une droite donnée par les coordonnées de ses deux points
 * @constructor
 * @extends iep.objetBase
 * @param {Float} x1 : Abscisse du premier point
 * @param {Float} y1 : Ordonnée du deuième point
 * @param {Float} x2 : Abscisse du deuxième point
 * @param {Float} y2 : Ordonnée du deuxième point
 * @param {string} couleur : La couleur
 * @param {string} epaisseur : L'épaisseur de trait
 * @param {string} opacite : L'opacité du tracé
 * @param {string} styleTrait : "tiret" pour un trait pointillé
 */

function Droite(doc, id, x1, y1, x2, y2, couleur, epaisseur, opacite, styleTrait) {
  DroiteAncetre.call(this, doc, id, x1, y1, x2, y2, couleur, epaisseur, opacite, styleTrait);
}

Droite.prototype = new DroiteAncetre();
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */

Droite.prototype.creeg = function () {
  this.calcule();

  if (!this.horsFenetre) {
    var li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('x1', this.xext1);
    li.setAttribute('y1', this.yext1);
    li.setAttribute('x2', this.xext2);
    li.setAttribute('y2', this.yext2);
    li.setAttribute('style', this.style);
    this.g = li;
  } else this.g = document.createElementNS(kernel.svgsn, 'g');

  this.g.setAttribute('visibility', 'hidden'); // this.g.setAttribute("id",this.id);
};
/**
 * Calcul des coordonnées des points d'intersection de la droite avec les bords de la fenêtre
 * Si la droite est hors de la fenêtre, this.horsFenetre est mis à false, sinon true
 * Au retour, (this.xext1, this.yext1) et (this.xext2, this.yext2) sont les coodonnées des points au bord
 * @param {type} svg
 */


Droite.prototype.calcule = function () {
  var a, xa, ya, xb, yb, xc, yc, xd, yd, x1, y1, x2, y2;
  var width = parseInt(this.doc.svg.getAttribute('width'));
  var height = parseInt(this.doc.svg.getAttribute('height'));
  x1 = this.x1;
  y1 = this.y1;
  x2 = this.x2;
  y2 = this.y2;

  if (x1 === x2 && y1 === y2) {
    this.horsFenetre = true;
    return;
  }

  this.horsFenetre = false;

  if (x1 === x2) {
    this.xext1 = x1;
    this.yext1 = 0;
    this.xext2 = x1;
    this.yext2 = height;

    if (x1 < 0 || x1 > width) {
      this.horsFenetre = true;
      return;
    }

    this.xext1 = x1;
    this.yext1 = 0;
    this.xext2 = x1;
    this.yext2 = height;
    return;
  }

  if (y1 === y2) {
    this.xext1 = 0;
    this.yext1 = y1;
    this.xext2 = width;
    this.yext2 = y1;

    if (y1 < 0 || y1 > height) {
      this.horsFenetre = true;
      return;
    }

    this.xext1 = 0;
    this.yext1 = y1;
    this.xext2 = width;
    this.yext2 = y1;
    return;
  }

  var indicePoint = 0;
  a = (y2 - y1) / (x2 - x1);
  xa = 0;
  ya = this.y1 + a * (xa - x1);

  if (ya >= 0 && ya <= height) {
    indicePoint++;
    this.xext1 = xa;
    this.yext1 = ya;
  }

  xb = width;
  yb = a * (xb - x1) + y1;

  if (yb >= 0 && yb <= height) {
    indicePoint++;

    if (indicePoint === 1) {
      this.xext1 = xb;
      this.yext1 = yb;
    } else {
      this.xext2 = xb;
      this.yext2 = yb;
      return;
    }
  }

  yc = 0;
  xc = (yc - y1) / a + x1;

  if (xc > 0 && xc < width) {
    indicePoint++;

    if (indicePoint === 1) {
      this.xext1 = xc;
      this.yext1 = yc;
    } else {
      this.xext2 = xc;
      this.yext2 = yc;
      return;
    }
  }

  yd = height;
  xd = (yd - y1) / a + x1;

  if (xd > 0 && xd <= width) {
    indicePoint++;

    if (indicePoint === 2) {
      this.xext2 = xd;
      this.yext2 = yd;
    } else {
      this.horsFenetre = true;
    }
  } else this.horsFenetre = true;

  if (this.horsFenetre) {
    this.xext1 = 0;
    this.yext1 = ya;
    this.xext2 = xb;
    this.yext2 = yb;
  }
};

/***/ }),

/***/ "./sources_js/objets/droiteAncetre.js":
/*!********************************************!*\
  !*** ./sources_js/objets/droiteAncetre.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetLigne = __webpack_require__(/*! ./objetLigne */ "./sources_js/objets/objetLigne.js");

var Vect = __webpack_require__(/*! ../types/vecteur */ "./sources_js/types/vecteur.js");

module.exports = DroiteAncetre;
/**
 * La classe représentant l'ancêtre des droites, segments, demi-droites
 * @extends iep.objetBase
 * @constructor
 * @param {type} x1 : Abscisse du premier point
 * @param {type} y1 : Ordonnée du deuième point
 * @param {type} x2 : Abscisse du deuxième point
 * @param {type} y2 : Ordonnée du deuxième point
 * @param {type} couleur : La couleur
 * @param {type} epaisseur : L'épaisseur de trait
 * @param {type} opacite : L'opacité du tracé
 * @param {type} styleTrait : "tiret" pour un trait pointillé
 * @param {boolean} vecteur : Si true une flèche est tracée
 */

function DroiteAncetre(doc, id, x1, y1, x2, y2, couleur, epaisseur, opacite, styleTrait) {
  this.x1 = parseFloat(x1);
  this.y1 = parseFloat(y1);
  this.x2 = parseFloat(x2);
  this.y2 = parseFloat(y2);
  ObjetLigne.call(this, doc, id, couleur, epaisseur, opacite, styleTrait);
}

DroiteAncetre.prototype = new ObjetLigne();
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */

DroiteAncetre.prototype.creeg = function () {
  var g, li;
  g = document.createElementNS(kernel.svgsn, 'g');
  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('x1', this.x1);
  li.setAttribute('y1', this.y1);
  li.setAttribute('x2', this.x2);
  li.setAttribute('y2', this.y2);
  li.setAttribute('style', this.style);
  g.appendChild(li);
  g.setAttribute('visibility', 'hidden'); // g.setAttribute("id",this.id);

  this.g = g;
};

DroiteAncetre.prototype.creationAnimee = function () {
  return true;
};

DroiteAncetre.prototype.lanceAnimation = function (vitesse) {
  this.vitesse = vitesse / 4;
  var v = new Vect(this.x1, this.y1, this.x2, this.y2);
  this.dist = v.norme(); // La distance entre la position actuelle et la position finale

  if (kernel.zero(this.dist)) {
    this.doc.actionSuivante();
    return;
  }

  this.vect = v.vecteurColineaire(this.vitesse * 1.8); //* 1.8 car dans la réalité c'est plus rapide

  this.xfin = this.x2;
  this.yfin = this.y2;
  this.x2 = this.x1;
  this.y2 = this.y1;
  var cray = this.doc.crayon;
  cray.setPosition(this.x1, this.y1, cray.angle);
  var t = this;
  this.timer = setInterval(function () {
    t.actionPourAnimation(t);
  }, 25);
};

DroiteAncetre.prototype.actionPourAnimation = function () {
  this.x2 += this.vect.x;
  this.y2 += this.vect.y;
  var u = new Vect(this.x1, this.y1, this.x2, this.y2);
  var d = u.norme();
  var cray = this.doc.crayon;

  if (d > this.dist || !this.doc.animationEnCours) {
    this.x2 = this.xfin;
    this.y2 = this.yfin;
    this.finAction();
    this.updateg();
    clearInterval(this.timer);
    this.doc.actionSuivante();
  } else {
    cray.translate(this.x2, this.y2);
    this.updateg();
  }
};
/**
 * extends iep.objetBase.prototype.finAction
 */


DroiteAncetre.prototype.finAction = function () {
  this.doc.crayon.translate(this.x2, this.y2);
};

/***/ }),

/***/ "./sources_js/objets/gabarit.js":
/*!**************************************!*\
  !*** ./sources_js/objets/gabarit.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.math.sign */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.math.sign.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
* Visualiseur InstrumenPoche en Javascript et SVG
* @Author Yves Biton (yves.biton@sesamath.net)
* @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
*/
var ObjetLigne = __webpack_require__(/*! ../objets/objetLigne */ "./sources_js/objets/objetLigne.js");

var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var Vect = __webpack_require__(/*! ../types/vecteur */ "./sources_js/types/vecteur.js");

module.exports = Gabarit;
/**
 * Classe Gabarit de cercle (servant aussi à tracer les cercles)
 * L'objet gabarit va hériter de cet objet (secteur circulaire)
 * extends iep.objetBase
 * @constructor
 * @param {type} x : abscisse du centre
 * @param {type} y : Ordonnée du centre
 * @param {type} ray : Le rayon
 * @param {type} debut : L'angle de début de tracé
 * @param {type} fin : L'angle de fin de tracé
 * @param {type} couleur : La couleur
 * @param {type} epaisseur : L'épaisseur du trait
 * @param {type} opacite : L'opacité du tracé
 * @param {type} styleTrait : "tiret" pour avoir des pointillés
 * Si debut < angle, l'arc est tracé dans le sens des ailluilles d'une montre, sinon dans le sens inverse
 */
// Important : l'objet graphique (g element) sera initialisé avec comme centre l'origine

function Gabarit(doc, id, x, y, ray, ecartAngle, couleur, epaisseur, couleurFond, opacite) {
  ObjetLigne.call(this, doc, id, couleur, epaisseur, opacite, 'continu');
  this.x = parseFloat(x);
  this.y = parseFloat(y);
  this.ray = ray === null ? 10 : parseFloat(ray);
  this.ecartAngle = parseFloat(ecartAngle);
  this.couleur = couleur;
  this.couleurFond = couleurFond === null ? couleur : couleurFond;
  this.angle = 0; // On peut appliquer une rotation à cet objet

  this.objet = 'gabarit';
}

Gabarit.prototype = new ObjetLigne(); // Le gabarit n'a pas d'animation quand on le crée contrairement à l'arc de cercle

Gabarit.prototype.creationAnimee = function () {
  return false;
};

Gabarit.prototype.creeg = function () {
  var fin = this.ecartAngle;
  var ray = this.ray;
  var sens = fin >= 0 ? '1' : '0'; // 1 pour le sens des aiguilles d'une montre (direct pour le SVG)

  var ecart = Math.abs(fin);
  var g = document.createElementNS(kernel.svgsn, 'g');
  var p = document.createElementNS(kernel.svgsn, 'path');
  var u2 = new Vect(Math.cos(fin * kernel.convDegRad) * ray, Math.sin(fin * kernel.convDegRad) * ray);
  var xdeb = ray;
  var ydeb = 0;
  var xfin = u2.x;
  var yfin = u2.y;
  var path = 'M 0 0 L ' + xdeb + ' ' + ydeb + ' A ' + ray + ' ' + ray + ' 0 ' + (ecart > 180 ? '1' : '0') + ' ' + sens + ' ' + xfin + ' ' + yfin + ' Z';
  p.setAttribute('d', path);
  var op = parseFloat(this.opacite / 100);
  var style = 'stroke:' + this.couleur + ';stroke-width:' + this.epaisseur + ';' + 'fill:' + this.couleurFond + ';fill-opacity:' + op + ';';
  p.setAttribute('style', style);
  g.appendChild(p);
  g.setAttribute('transform', 'translate(' + this.x + ',' + this.y + ') rotate(' + this.angle + ')'); // g.setAttribute("id",this.id);

  g.setAttribute('visibility', 'hidden');
  this.g = g;
};

Gabarit.prototype.donneRayon = function (ray) {
  this.ray = ray;
  this.updateg();
  this.setPosition(this.x, this.y, this.angle);
};

Gabarit.prototype.setPosition = function (x, y, angle) {
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.g.setAttribute('transform', 'translate(' + x + ',' + y + ') rotate(' + angle + ')');
};

Gabarit.prototype.lanceAnimationModificationRayon = function (rayFin, pix10) {
  this.rayFin = rayFin;
  this.rayInit = this.ray;
  var dif = rayFin - this.ray;
  this.dist = Math.abs(dif); // La distance entre la position actuelle et la position finale

  this.dray = Math.sign(dif) * Math.abs(pix10 / 4); // Dans la version JavaScript on quadruple la fréquence;
  // en divisant le pas par 4
  // (en fait par deux car la rapidité semble double de celle annoncée dans le mode d'emploi)
  // Cas où l'objet est déjà à la bonne position

  if (this.dist === 0) return; // this.vect = v.vecteurColineaire(this.pix);

  var t = this;
  this.timer = setInterval(function () {
    t.actionPourModificationRayon();
  }, 25);
};

Gabarit.prototype.actionPourModificationRayon = function () {
  var r = this.ray + this.dray;
  var d = Math.abs(r - this.rayInit);

  if (d > this.dist || !this.doc.animationEnCours) {
    this.donneRayon(this.rayFin);
    clearInterval(this.timer);
    this.doc.actionSuivante();
  } else {
    this.dist = d;
    this.donneRayon(r);
  }
};

/***/ }),

/***/ "./sources_js/objets/ligneContinue.js":
/*!********************************************!*\
  !*** ./sources_js/objets/ligneContinue.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.split.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetLigne = __webpack_require__(/*! ./objetLigne */ "./sources_js/objets/objetLigne.js");

module.exports = LigneContinue;
/**
 * Classe représentant une ligne continue de la figure
 * @extends iep.objetBase
 * @constructor
 * @param {iepDoc} doc : Le document propriétaire
 * @param {Integer} id : L'id de l'objet dans le fichier XML de la figure
 * @param {string} abs : Une chaîne contenant les abscisses séparées par des virgules
 * @param {string} ord : Une chaîne contenant les ordonnées séparées par des virgules
 * @param{Integer} xdeb : abscisse de début (en fait l'abscisse actuelle du crayon)
 * @param{Integer} ydeb : ordonée de début (en fait l'ordonnée actuelle du crayon)
 * @param {string} couleur : La couleur
 * @param {string} epaisseur : L'épaisseur de trait
 * @param {string} opacite : L'opacité du trait
 * @param {string} styleTrait : tiret pour avoir des pointillés
 */

function LigneContinue(doc, id, xdeb, ydeb, abs, ord, couleur, epaisseur, opacite, styleTrait) {
  ObjetLigne.call(this, doc, id, couleur, epaisseur, opacite, styleTrait);
  this.xdeb = xdeb;
  this.ydeb = ydeb;
  this.abs = abs.split(',');
  this.ord = ord.split(',');
  this.objet = 'trait';
}

LigneContinue.prototype = new ObjetLigne();
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */

LigneContinue.prototype.creeg = function () {
  var p, points, i;
  p = document.createElementNS(kernel.svgsn, 'polyline');
  points = this.xdeb + ' ' + this.ydeb;

  for (i = 0; i < this.abs.length; i++) {
    points += ' ' + this.abs[i] + ' ' + this.ord[i];
  }

  p.setAttribute('points', points);
  p.setAttribute('style', this.style + 'fill:none;');
  p.setAttribute('visibility', 'hidden'); // p.setAttribute("id",this.id);

  this.g = p;
};
/** @inheritDoc */


LigneContinue.prototype.creationAnimee = function () {
  return true;
};
/**
 * Fonction lançant l'animation de visualisation de la ligne continue
 * Utilise un timer et une fonction de callBack
 */


LigneContinue.prototype.lanceAnimation = function () {
  this.sauveabs = this.abs;
  this.sauveord = this.ord;
  this.abs = [];
  this.ord = [];
  this.ind = -1; // L'indice dans le tableau des coordonnées

  var t = this;
  this.timer = setInterval(function () {
    t.actionPourAnimation();
  }, 25);
};
/**
 * Fonction de callBack appelée par un timer pour l'animation du tracé
 */


LigneContinue.prototype.actionPourAnimation = function () {
  this.ind++;
  var cray = this.doc.crayon;

  if (this.ind >= this.sauveabs.length) {
    this.abs = this.sauveabs;
    this.ord = this.sauveord;
    this.updateg();
    clearInterval(this.timer);
    this.finAction();
    this.doc.actionSuivante();
  } else {
    var x = this.sauveabs[this.ind];
    var y = this.sauveord[this.ind];
    this.abs.push(x);
    this.ord.push(y);
    this.updateg();
    cray.setPosition(parseFloat(x), parseFloat(y), cray.angle);
    this.updateg();
  }
};
/**
 * extends iep.objetBase.prototype.finAction
 */


LigneContinue.prototype.finAction = function () {
  var len = this.abs.length;
  this.doc.crayon.translate(parseFloat(this.abs[len - 1]), parseFloat(this.ord[len - 1]));
};

/***/ }),

/***/ "./sources_js/objets/marqueSegment.js":
/*!********************************************!*\
  !*** ./sources_js/objets/marqueSegment.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetLigne = __webpack_require__(/*! ./objetLigne */ "./sources_js/objets/objetLigne.js");

module.exports = MarqueSegment;
/**
 * Objet représentant une marque de segment
 * @extends iep.objetBase
 * @constructor
 * @param {iep.iepDoc} doc : Le document propriétaire
 * @param {string} id : L'id de l'objet
 * @param {string} x : L'abscisse
 * @param {string} y : L'ordonnée
 * @param {string} couleur : La couleur de tracé
 * @param {string} epaisseur : L'épaisseur de tracé
 * @param {string} motif : Donne le motif de la marque
 */

function MarqueSegment(doc, id, x, y, couleur, epaisseur, motif) {
  this.x = parseFloat(x);
  this.y = parseFloat(y);
  this.motif = motif;
  ObjetLigne.call(this, doc, id, couleur, epaisseur, 100);
  this.objet = 'longueur';
}

MarqueSegment.prototype = new ObjetLigne();
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */

MarqueSegment.prototype.creeg = function () {
  var g, li, k;
  var demlong = 5;
  var ec = 5; // demi écart horizontal entre deux traits

  var dec = ec / 2;
  var diam = 5; // Diamètre du rond dans le cas où style == O

  switch (this.motif) {
    case '/':
      g = document.createElementNS(kernel.svgsn, 'line');
      g.setAttribute('x1', demlong);
      g.setAttribute('y1', -demlong);
      g.setAttribute('x2', -demlong);
      g.setAttribute('y2', demlong);
      g.setAttribute('style', this.style);
      break;

    case '\\':
      g = document.createElementNS(kernel.svgsn, 'line');
      g.setAttribute('x1', -demlong);
      g.setAttribute('y1', -demlong);
      g.setAttribute('x2', demlong);
      g.setAttribute('y2', demlong);
      g.setAttribute('style', this.style);
      break;

    case '//':
      g = document.createElementNS(kernel.svgsn, 'g');

      for (k = -1; k <= 1; k += 2) {
        li = document.createElementNS(kernel.svgsn, 'line');
        li.setAttribute('x1', k * dec + demlong);
        li.setAttribute('y1', -demlong);
        li.setAttribute('x2', k * dec - demlong);
        li.setAttribute('y2', demlong);
        li.setAttribute('style', this.style);
        g.appendChild(li);
      }

      break;

    case '///':
      g = document.createElementNS(kernel.svgsn, 'g');

      for (k = -1; k <= 1; k++) {
        li = document.createElementNS(kernel.svgsn, 'line');
        li.setAttribute('x1', k * ec + demlong);
        li.setAttribute('y1', -demlong);
        li.setAttribute('x2', k * ec - demlong);
        li.setAttribute('y2', demlong);
        li.setAttribute('style', this.style);
        g.appendChild(li);
      }

      break;

    case '\\\\':
      g = document.createElementNS(kernel.svgsn, 'g');

      for (k = -1; k <= 1; k += 2) {
        li = document.createElementNS(kernel.svgsn, 'line');
        li.setAttribute('x1', k * dec - demlong);
        li.setAttribute('y1', -demlong);
        li.setAttribute('x2', k * dec + demlong);
        li.setAttribute('y2', demlong);
        li.setAttribute('style', this.style);
        g.appendChild(li);
      }

      break;

    case '\\\\\\':
      g = document.createElementNS(kernel.svgsn, 'g');

      for (k = -1; k <= 1; k++) {
        li = document.createElementNS(kernel.svgsn, 'line');
        li.setAttribute('x1', k * ec - demlong);
        li.setAttribute('y1', -demlong);
        li.setAttribute('x2', k * ec + demlong);
        li.setAttribute('y2', demlong);
        li.setAttribute('style', this.style);
        g.appendChild(li);
      }

      break;

    case 'X':
      // Croix
      g = document.createElementNS(kernel.svgsn, 'g');
      li = document.createElementNS(kernel.svgsn, 'line');
      li.setAttribute('x1', -demlong);
      li.setAttribute('y1', -demlong);
      li.setAttribute('x2', demlong);
      li.setAttribute('y2', demlong);
      li.setAttribute('style', this.style);
      g.appendChild(li);
      li = document.createElementNS(kernel.svgsn, 'line');
      li.setAttribute('x1', demlong);
      li.setAttribute('y1', -demlong);
      li.setAttribute('x2', -demlong);
      li.setAttribute('y2', demlong);
      li.setAttribute('style', this.style);
      g.appendChild(li);
      break;

    case 'O':
      // Rond
      g = document.createElementNS(kernel.svgsn, 'circle');
      g.setAttribute('cx', 0);
      g.setAttribute('cy', 0);
      g.setAttribute('r', diam);
      g.setAttribute('style', this.style + 'fill:none;');
      break;

    default:
      g = document.createElementNS(kernel.svgsn, 'g');
    // Vide en cas d'erreur
  }

  this.g = g;
};
/** @inheritDoc */


MarqueSegment.prototype.positionne = function () {
  this.g.setAttribute('transform', 'translate(' + this.x + ',' + this.y + ')');
};
/** @inheritDoc */


MarqueSegment.prototype.translate = function (x, y) {
  this.x = x;
  this.y = y;
  this.positionne();
};

/***/ }),

/***/ "./sources_js/objets/nomPoint.js":
/*!***************************************!*\
  !*** ./sources_js/objets/nomPoint.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.split.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetBase = __webpack_require__(/*! ./objetBase */ "./sources_js/objets/objetBase.js");

module.exports = NomPoint;
/**
 * Objet servant à nommer un point
 * @extends iep.objetBase
 * @constructor
 * @param {iepDoc} doc : le document propriétaire
 * @param {string} id : l'id du point auquel le nom est attribué
 * @param {string} dx : le décalage en abscisses du nom par rapport au point (haut-gauche de la matrice du nom)
 * @param {string} dy : le décalage en ordonnées du nom par rapport au point (haut-gauche de la matrice du nom)
 * @param {string} couleur : la couleur du nom
 */

function NomPoint(doc, id, dx, dy, nom, couleur) {
  ObjetBase.call(this, doc, id, couleur);
  this.dx = dx == null ? 2 : parseFloat(dx);
  this.dy = dy == null ? 4 : parseFloat(dy);
  this.nom = kernel.remplaceAccentsHtml(kernel.remplaceBalises(kernel.remplaceCarSpe(nom)));
  this.taille = 20;
  this.point = this.doc.getElement(this.id, 'point');
  this.objet = 'point';
  this.nom = this.nom.replace(/\*/g, '×');

  if (kernel.necessiteLatex(nom)) {
    this.nom = '$' + this.traiteMaths(this.nom) + '$';
    this.estLatex = true;
  } else {
    this.nom = kernel.traiteAccents(this.nom);
    this.estLatex = false;
  }
}

NomPoint.prototype = new ObjetBase();
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */

NomPoint.prototype.creeg = function () {
  var indbalise, tspan, ch, ch2, style, txt, ind, indexp, indind, mini, bexp, tailleind, stylespan, y, sp, i, debutLigne, an;
  var dy = 0; // Le baselineshift de chaque tspan

  var inf = '<'; // Equivalent du symbole <

  var debexp = '£e(';
  var debind = '£i(';
  var g = document.createElementNS(kernel.svgsn, 'g');
  var hautlig = parseFloat(this.taille) + 2;
  var decblp = 0; // Décalage vers le bas de la ligne précédente

  var decalage = parseFloat(this.taille) * 0.4; // Décalage vers le bas ou le haut en cas d'indice ou d'exposant

  if (this.nom.length !== 0) {
    txt = document.createElementNS(kernel.svgsn, 'text');
    txt.setAttribute('pointer-events', 'none');
    txt.setAttribute('x', 0);
    txt.setAttribute('y', 0);
    style = 'text-anchor:left;font-size:' + this.taille + 'px;' + 'fill:' + this.couleur + ';';
    txt.setAttribute('style', style); // On remplace les espaces par des espaces insécables

    ch2 = this.nom.replace(new RegExp(' ', 'g'), "\xA0"); // Affecter une longueur ne peut être efficace que pour du texte simpel sans balise

    if (this.nom.indexOf(inf) === -1 && this.nom.indexOf(debexp) === -1 && this.nom.indexOf(debind) === -1 && this.nom.indexOf('<br>') === -1) {
      txt.appendChild(document.createTextNode(ch2));
    } else {
      sp = ch2.split(/<br>/gi);
      y = -hautlig;

      for (i = 0; i < sp.length; i++) {
        debutLigne = true;
        ch = sp[i];

        while (ch.length !== 0) {
          indbalise = ch.indexOf(inf);
          indexp = ch.indexOf(debexp);
          indind = ch.indexOf(debind);
          if (debutLigne) y += hautlig + decblp;
          if (indexp !== -1) y += decalage;

          if (indbalise === -1 && indexp === -1 && indind === -1) {
            tspan = document.createElementNS(kernel.svgsn, 'tspan');
            tspan.setAttribute('pointer-events', 'none');
            tspan.setAttribute('dy', dy);

            if (debutLigne) {
              tspan.setAttribute('x', 0);
              tspan.setAttribute('y', y);
              debutLigne = false;
            }

            dy = 0; // On est revenu au niveau 0

            tspan.appendChild(document.createTextNode(ch));
            txt.appendChild(tspan);
            break;
          } else {
            while (ch.indexOf(inf) !== -1 || ch.indexOf(debexp) !== -1 || ch.indexOf(debind) !== -1) {
              indbalise = ch.indexOf(inf);
              indexp = ch.indexOf(debexp);
              indind = ch.indexOf(debind);

              if (indbalise === -1) {
                if (indexp === -1) mini = indind;else mini = indind === -1 ? indexp : Math.min(indind, indexp);
              } else {
                if (indexp === -1) mini = indind === -1 ? indbalise : Math.min(indbalise, indind);else {
                  if (indind === -1) mini = Math.min(indbalise, indexp);else mini = Math.min(indbalise, indind, indexp);
                }
              }

              if (mini > 0) {
                // Il y a du texte avant les balises
                tspan = document.createElementNS(kernel.svgsn, 'tspan');
                tspan.setAttribute('pointer-events', 'none');
                tspan.setAttribute('dy', dy);

                if (debutLigne) {
                  tspan.setAttribute('x', 0);
                  tspan.setAttribute('y', y);
                  debutLigne = false;
                }

                dy = 0; // On est revenu au niveau 0

                tspan.appendChild(document.createTextNode(ch.substring(0, mini)));
                txt.appendChild(tspan);
                ch = ch.substring(mini);
              } else {
                if (indbalise === 0) {
                  var infoBalise = new kernel.infoBalise(false, false, false, this.couleur, '', this.taille);
                  ind = kernel.indiceFinBalise(ch);
                  if (ind === -1) kernel.traiteBalise(ch, infoBalise, txt, debutLigne, y);else kernel.traiteBalise(ch.substring(0, ind), infoBalise, txt, debutLigne, y);
                  debutLigne = false;
                  if (ind !== -1) ch = ch.substring(ind);else ch = '';
                  dy = 0; // On est revenu au niveau 0
                } else {
                  // mini est égal à 0
                  bexp = mini === indexp;
                  an = kernel.analyseExposantOuIndice(ch);
                  tspan = document.createElementNS(kernel.svgsn, 'tspan');
                  tspan.setAttribute('pointer-events', 'none');
                  tspan.setAttribute('dy', dy + 'px');

                  if (debutLigne) {
                    tspan.setAttribute('x', 0);
                    tspan.setAttribute('y', y);
                    debutLigne = false;
                  }

                  if (an.erreur) tspan.appendChild(document.createTextNode(ch));else {
                    tspan.appendChild(document.createTextNode(an.operande));
                    txt.appendChild(tspan);
                    tspan = document.createElementNS(kernel.svgsn, 'tspan');
                    tspan.setAttribute('pointer-events', 'none');
                    tspan.appendChild(document.createTextNode(an.exposant));
                    dy = decalage;
                    if (bexp) dy = -dy;else decblp = dy;
                    tspan.setAttribute('dy', dy + 'px');
                    tailleind = parseFloat(this.taille) * 0.6;
                    stylespan = 'font-size:' + tailleind + 'px;';
                    tspan.setAttribute('style', stylespan);
                    txt.appendChild(tspan);
                    dy = -dy; // Car sinon la suite sera décalée aussi en hauteur
                  }
                  ch = an.texte;
                }
              }
            }
          }
        }
      }
    }

    g.appendChild(txt);
    this.g = g;
  }

  g.setAttribute('visibility', 'hidden'); // g.setAttribute("id",this.id);
};
/**
 * Fonction appelée par prepare() qui récupère l'élement svg graphique représentant
 * la formule dans le div provisoire précédemment créé, détruit ensuite ce div provisoire
 * Rajoute les éléments graphiques correspondant à un cadre si une couleur de fond
 * et un cadre ont été demandés
 */


NomPoint.prototype.creegLatex = function () {
  var w, h, ratio;

  try {
    var g = document.createElementNS(kernel.svgsn, 'g');
    var c1 = this.div.childNodes[1];
    if (c1 === undefined) return document.createElementNS(kernel.svgsn, 'g');
    var c2 = c1.childNodes[0];
    if (c2 === undefined) return document.createElementNS(kernel.svgsn, 'g');
    var s = c2.childNodes[0];
    if (s === undefined) return document.createElementNS(kernel.svgsn, 'g'); // Pour gérer Chrome

    while (s.tagName === 'SPAN') {
      s = s.childNodes[0];
    } // Le test suivant est du à la compatibilité avec l'explorer


    if (s.clientWidth !== 0 && s.clientHeight !== 0) {
      w = s.clientWidth;
      h = s.clientHeight;
    } else {
      var b = s.getBBox();
      ratio = b.height / b.width;
      w = this.div.clientWidth;
      h = w * ratio;
    }

    var t = this.taille;
    if (h < t) h = t;
    s.setAttribute('x', '0');
    s.setAttribute('y', String(-this.taille)); // Différent de MathGraph32

    s.setAttribute('width', w + 'px');
    s.setAttribute('height', h + 'px');
    g.appendChild(s.parentNode.removeChild(s));
    document.body.removeChild(this.div);
    g.setAttribute('visibility', 'hidden'); // g.setAttribute("id",this.id);

    this.g = g;
  } catch (e) {
    if (this.div != null) document.body.removeChild(this.div);
    this.g = document.createElementNS(kernel.svgsn, 'g'); // Crée un g vide en cas de problème
  }
};
/** @inheritDoc */


NomPoint.prototype.positionne = function () {
  // Il arrive que des gens aient mis l'actiond e nommer le point avant la créatin du point lui-même d'où le test
  // suivant :
  if (this.point === null) this.point = this.doc.getElement(this.id, 'point');
  var xp = this.point.x;
  var yp = this.point.y;
  this.g.setAttribute('transform', 'translate(' + String(xp + this.dx) + ',' + String(yp + this.dy + this.taille) + ')');
};
/**
 * Fonction traitant la chaîne ch pour la transcrire en code LaTeX
 * Renvoie la chaîne LaTeX correspondante.
 * Si la chaîne contient des balises <br>, un tableau LaTeX est utilisé pour rendre le contenu
 * @param {string} ch : la chaîne à traiter
 * @returns {string} la chaîne LaTeX correpondante une fois ch traduite
 */


NomPoint.prototype.traiteMaths = function (ch) {
  return kernel.traiteAccents(kernel.getMathsForName(ch, true)); // True pour mode texte
};

/***/ }),

/***/ "./sources_js/objets/objetBase.js":
/*!****************************************!*\
  !*** ./sources_js/objets/objetBase.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-int.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var Vect = __webpack_require__(/*! ../types/vecteur */ "./sources_js/types/vecteur.js");

var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

module.exports = ObjetBase;
/**
 * Objet ancêtre de tous les objets graphiques
 * Le prototype de chaque descendant de cet objet devra comprendre une fonction creeg qui créera
 * le svg élément associé et l'affectera à this.g
 * @constructor
 * @param {type} doc : Le document propriétaire de l'objet
 * @param {type} id : Le numéro de l'objet dans le document
 */

function ObjetBase(doc, id, couleur) {
  this.doc = doc;
  this.id = id;
  this.couleur = couleur;
  this.zoomfactor = 1; // Pour les images

  this.visible = false;
  this.objet = 'trait'; // Ne sera redéfini que pour les points, textes, les angles et le gabarits
}
/**
 * Cette fonction est appelée lors de la création d'objets.
 * par défaut elle ne fait rien;
 * Elle sera redéfinie pour les objets qui peuvent être translatés : points, marques de segments, textes, images
 */


ObjetBase.prototype.positionne = function () {};
/**
 * Fonction qui réinitialisera la psoition des objets lorsqu'on retrace la figure
 * Ne sera redéfinie que pour les objets dont la position peut être modifiee par translation, rotation ou zoom
 */


ObjetBase.prototype.initialisePosition = function () {};
/**
 * Fonction translatant l'objet auux coordonnées (ab)
 * @param {type} a
 * @param {type} b
 */


ObjetBase.prototype.translate = function (a, b) {
  this.setPosition(a, b, this.angle, this.zoomfactor);
};
/**
 * Fonction donnant au membre angle de l'objet la valeur ang
 * @param {type} ang
 */


ObjetBase.prototype.tourne = function (ang) {
  this.setPosition(this.x, this.y, ang, this.zoomfactor);
};
/**
 * Fonction donnant au membre zoom de l'objet la valeur rap
 * @param {type} rap
 */


ObjetBase.prototype.zoom = function (rap) {
  this.zoomfactor = rap;
  this.setPosition(this.x, this.y, this.angle, rap);
};
/**
 * Fonction rendant l'objet visible ou invisible suivant la valeur de bvisible
 * Modifie en consequence la valeur de bvisible
 * @param {type} bvisible
 */


ObjetBase.prototype.montre = function (bvisible) {
  this.visible = bvisible;
  if (this.g) this.g.setAttribute('visibility', bvisible ? 'visible' : 'hidden');
}; // Les fonctions suivantes ne serviront que pour les points, marques de segment et affichages de texte
// et d'images
// Ces objets doivent posséder une fonction setPosition(x,y)

/**
 * Fonction ne servant que pour les points, marques de segment, affichages de texte et images
 * Lance une aniamtion de translation de l'objet via un timer et une fonction de callBack
 * Ces objets doivent posséder une fonction setPosition(x,y)
 * @param {Float} xfin : abscisse de la position finale de l'objet
 * @param {type} yfin : ordonnée de la position finale de l'objet
 * @param {type} pix10 : Nombre de pixels pour le déplacement par dixième de seconde
 */


ObjetBase.prototype.lanceAnimationTranslation = function (xfin, yfin, pix10) {
  // this.g.setAttribute("visibility","visible");
  this.xfin = xfin;
  this.yfin = yfin;
  this.pix = Math.abs(pix10 / 4); // Dans la version JavaScript on quadruple la fréquence
  // en divisant le pas par 4
  // (en fait par deux car la rapidité semble double de celle annoncée dans le mode d'emploi)

  var v = new Vect(this.x, this.y, xfin, yfin);
  this.dist = v.norme(); // La distance entre la position actuelle et la position finale
  // Cas où l'objet est déjà à la bonne position

  if (this.dist === 0) {
    this.translate(this.xfin, this.yfin);
    this.doc.actionSuivante();
    return;
  }

  this.vect = v.vecteurColineaire(this.pix);
  var t = this;
  this.timer = setInterval(function () {
    t.actionPourTranslation();
  }, 25);
};
/**
 * Fonction de callBack appelée par un timer lors de l'animation de translation
 * On poursuit l'animation tant que la distance entre la position actuelle et la psoition de fin
 * est inférieure à la distance précédente
 */


ObjetBase.prototype.actionPourTranslation = function () {
  var x = this.x + this.vect.x;
  var y = this.y + this.vect.y;
  var u = new Vect(x, y, this.xfin, this.yfin);
  var d = u.norme();

  if (d > this.dist || !this.doc.animationEnCours) {
    this.translate(this.xfin, this.yfin);
    clearInterval(this.timer);
    this.doc.actionSuivante();
  } else {
    this.dist = d;
    this.translate(x, y);
  }
};
/**
 * Fonction ne servant que pour les points, marques de segment, affichages de texte et images
 * Lance une animation de rotation de l'objet via un timer et une fonction de callBack
 * Ces objets doivent posséder une fonction setPosition(x,y)
 * @param {Float} angfin : l'angle de fin de l'objet
 * @param {Float} deg10 : le nombre de degrés dont on tourne par dixième de seconde
 */


ObjetBase.prototype.lanceAnimationRotation = function (angfin, deg10) {
  // Il faut choisir le déplacement "le plus court"
  var ang1 = kernel.mesurePrincDeg(this.angle);
  var ang2 = kernel.mesurePrincDeg(angfin);

  if (Math.abs(ang2 - ang1) > 180) {
    if (ang2 > ang1) ang2 = ang2 - 360;else ang2 = ang2 + 360;
  }

  this.anglefin = ang2;
  this.angle = ang1;
  this.pasdeg = deg10 * 2 / 3; // Dans la version JavaScript on quadruple la fréquence
  // en divisant le pas par 4
  // (en fait on corrige par *2/3 car la rapidité semble double de celle annoncée dans le mode d'emploi)

  this.pasdeg *= angfin >= this.angle ? 1 : -1; // 1 pour le sens direct svg;

  this.distang = Math.abs(angfin - this.angle);
  var t = this;
  this.timer = setInterval(function () {
    t.actionPourRotation();
  }, 25);
};
/**
 * Fonction de callBack appelée par un timer lors de l'animation de rotation
 */


ObjetBase.prototype.actionPourRotation = function () {
  var ang = parseFloat(this.angle) + parseFloat(this.pasdeg);
  var dis = Math.abs(ang - this.anglefin);

  if (dis > this.distang || !this.doc.animationEnCours) {
    this.tourne(this.anglefin);
    clearInterval(this.timer);
    this.doc.actionSuivante();
  } else {
    this.distang = dis;
    this.tourne(ang);
  }
};
/**
 * Fonction ne servant que pour les affichages de texte et images
 * Lance une aniamtion de zoom de l'objet via un timer et une fonction de callBack
 * @param {Float} zoomfin : la valeur de fin du zoomfactor de l'objet
 * @param {Float} vitesse : pour la vitesse d'animation
 */


ObjetBase.prototype.lanceAnimationZoom = function (zoomfin, vitesse) {
  this.zoomfin = zoomfin;
  this.vitesse = parseInt(vitesse);
  this.pas = this.vitesse * 0.05 * (this.zoomfin - this.zoomfactor); // On augmente
  // par défaut de 5% de vitesse tous les dixièmes de seconde

  this.senspos = this.pas >= 0;
  var t = this;
  this.timer = setInterval(function () {
    t.actionPourZoom();
  }, 100);
};
/**
 * Fonction de callBack appelée par un timer lors de l'animation de zoom
 */


ObjetBase.prototype.actionPourZoom = function () {
  var z = this.zoomfactor + this.pas;

  if (this.doc.animationEnCours && (this.senspos && z < this.zoomfin || !this.senspos && z > this.zoomfin)) {
    this.zoom(z);
  } else {
    this.zoom(this.zoomfin);
    clearInterval(this.timer);
    this.doc.actionSuivante();
  }
};
/**
 * Fonction qui devra être appelée pour remettre à jour le g élément représentant
 * l'objet dans le DOM du svg de la figure
 * Appelé quand on recalcule la figure ou lors des animations
 * Par défaut on reconstruit le svg élément pour mettre à jour l'objet
 * Pour certains objets (point par exemple) ce sera inutile
 * @retursn {undefined}
 */


ObjetBase.prototype.updateg = function () {
  var oldg = this.g;
  this.creeg();
  this.doc.svg.replaceChild(this.g, oldg);
  this.doc.setElement(this.id, this);
  this.g.setAttribute('visibility', 'visible');
};
/**
 * Fonction qui renverra true lorsque la création de l'objet donne lieu à une animation
 * par exemple pour les segments, droites. Sera donc redéfini dans droiteAncetre
 * Dans ce cas, l'objet devra avoir deux fonctions : lanceAnimation et actionPourAnimation
 * @returns {boolean}
 */


ObjetBase.prototype.creationAnimee = function () {
  return false;
};
/**
 * Fonction qui devra être redéfinie pour les objets créés avec une animation
 * appelée à la fin d'une animation ou lors de la visualisation immédiate de l'objet
 * lors du click sur une icône stepNext ou stepPrev
 */


ObjetBase.prototype.finAction = function () {};

/***/ }),

/***/ "./sources_js/objets/objetLigne.js":
/*!*****************************************!*\
  !*** ./sources_js/objets/objetLigne.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var ObjetBase = __webpack_require__(/*! ./objetBase */ "./sources_js/objets/objetBase.js");

module.exports = ObjetLigne;
/**
 * Classe ancêtre de tous les objets de type ligne
 * @extends iep.objetBase
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire de l'objet
 * @param {string} id : l'id de l'objet dans le fichier XML de la figure
 * @param {string} couleur : la couleur de l'objet
 * @param {string} epaisseur : l'épaisseur de trait
 * @param {string} opacite : l'opacité du trait
 * @param {string} styleTrait : "tiret" pour avoir des pointillés
 */

function ObjetLigne(doc, id, couleur, epaisseur, opacite, styleTrait) {
  ObjetBase.call(this, doc, id, couleur);
  this.epaisseur = epaisseur;
  this.opacite = arguments.length >= 5 ? opacite : '100';
  this.styleTrait = arguments.length >= 6 ? styleTrait : 'continu';
  var op = parseFloat(this.opacite / 100);
  this.style = 'stroke:' + couleur + ';stroke-width:' + epaisseur + ';stroke-opacity:' + op + ';stroke-linecap:round;';
  if (this.styleTrait === 'tiret') this.style += 'stroke-dasharray:10 8 10;'; // Pointillés
}

ObjetLigne.prototype = new ObjetBase();

/***/ }),

/***/ "./sources_js/objets/point.js":
/*!************************************!*\
  !*** ./sources_js/objets/point.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetLigne = __webpack_require__(/*! ./objetLigne */ "./sources_js/objets/objetLigne.js");

var ObjetBase = __webpack_require__(/*! ./objetBase */ "./sources_js/objets/objetBase.js");

module.exports = Point;
/**
 * Classe représentant un objet de type point
 * A noter que point possèdera deux champs supplémentaires xcons et ycons
 * qui contiendront les coordonées du point au cours de la construction des autres objets
 * xcons et ycons seront modifiés lors d'une action de translation du point
 * pour que les objets l'utilisant comme cible soient correctement initialisés.
 * @extends iep.objetBase
 * @constructor
 * @param {iepDoc} doc : le document propriétaire
 * @param {string} id : L'id de l'objet
 * @param {string} x : l'abscisse initiale
 * @param {string} y : l'ordonnée initiale
 * @param {string} couleur
 * @param {string} epaisseur
 */

function Point(doc, id, x, y, couleur, epaisseur) {
  this.x = parseFloat(x);
  this.y = parseFloat(y); // Les deux variables suivantes servent à rétablir la figure dans son état initial quand on revien au début de la figure

  this.xinit = this.x;
  this.yinit = this.y; //

  this.xcons = this.x;
  this.ycons = this.y;
  ObjetLigne.call(this, doc, id, couleur, epaisseur);
  this.style += 'stroke-linecap:round;'; // Des bouts de croix arrondis

  this.nom = null; // Un nom peut être affecté ultérieurement par une action nommer

  this.objet = 'point';
}

Point.prototype = new ObjetLigne();
/** @inheritDoc */

Point.prototype.initialisePosition = function () {
  this.x = this.xinit;
  this.y = this.yinit;
  this.positionne();
};
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */


Point.prototype.creeg = function () {
  var g, li;
  var lon = 5; // Longuueur en pixels d'un demi-trait

  g = document.createElementNS(kernel.svgsn, 'g');
  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('x1', -lon);
  li.setAttribute('y1', lon);
  li.setAttribute('x2', lon);
  li.setAttribute('y2', -lon);
  li.setAttribute('style', this.style);
  g.appendChild(li);
  li = document.createElementNS(kernel.svgsn, 'line');
  li.setAttribute('x1', -lon);
  li.setAttribute('y1', -lon);
  li.setAttribute('x2', lon);
  li.setAttribute('y2', lon);
  li.setAttribute('style', this.style);
  g.appendChild(li); // g.setAttribute("id",this.id);

  this.g = g;
};
/** @inheritDoc */


Point.prototype.positionne = function () {
  this.g.setAttribute('transform', 'translate(' + this.x + ',' + this.y + ')');
};
/** @inheritDoc */


Point.prototype.translate = function (x, y) {
  this.x = x;
  this.y = y;
  this.positionne();
  if (this.nom !== null) this.nom.positionne();
};
/** @inheritDoc */


Point.prototype.updateg = function () {
  this.setPosition(this.x, this.y);
}; // Nécessaire de redéfinir montre car il peut y avoir un nom attaché au point


Point.prototype.montre = function (bvisible) {
  ObjetBase.prototype.montre.call(this, bvisible);
  if (this.nom !== null) if (this.nom.g) this.nom.montre(bvisible);
};

/***/ }),

/***/ "./sources_js/objets/polygone.js":
/*!***************************************!*\
  !*** ./sources_js/objets/polygone.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.string.split.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetBase = __webpack_require__(/*! ./objetBase */ "./sources_js/objets/objetBase.js");

var Vect = __webpack_require__(/*! ../types/vecteur */ "./sources_js/types/vecteur.js");

module.exports = Polygone;
/**
 * Classe représentant un polygone de la figure
 * @extends iep.objetBase
 * @constructor
 * @param {iep.iepDoc} doc : le document propriétaire
 * @param {string} id : l'id de l'objet dans le fichier XML de la figure
 * @param {string[]} abs : un tableau contenant les abscisses des sommets
 * @param {string[]} ord : : un tableau contenant les ordonnées des sommets
 * @param {string} couleur : la couleur du polygone
 * @param {Float} epaisseur : l'épaisseur du tracé
 * @param {string} couleurFond : la couelur de onc de l'intérieur du polygone
 * @param {string} opacite : l'opacité du remplissage (de 0 à 100)
 */

function Polygone(doc, id, abs, ord, couleur, epaisseur, couleurFond, opacite) {
  ObjetBase.call(this, doc, id, couleur);
  this.abs = abs.split(',');
  this.ord = ord.split(',');
  this.sauveabs = this.abs;
  this.sauveord = this.ord;
  this.epaisseur = epaisseur;
  this.opacite = opacite == null ? '60' : opacite;
  var op = parseFloat(this.opacite / 100);
  if (couleurFond == null) this.couleurFond = this.couleur;else this.couleurFond = couleurFond;
  this.style = 'stroke:' + couleur + ';stroke-width:' + epaisseur + ';fill:' + this.couleurFond + ';';
  this.style += 'fill-opacity:' + op + ';';
  this.objet = 'trait';
}

Polygone.prototype = new ObjetBase();
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */

Polygone.prototype.creeg = function () {
  var points, i;
  var p = document.createElementNS(kernel.svgsn, 'polygon');
  points = '';

  for (i = 0; i < this.abs.length; i++) {
    points += ' ' + this.abs[i] + ' ' + this.ord[i];
  }

  p.setAttribute('points', points);
  p.setAttribute('style', this.style);
  p.setAttribute('visibility', 'hidden'); // p.setAttribute("id",this.id);

  this.g = p;
};
/** @inheritDoc */


Polygone.prototype.creationAnimee = function () {
  return true;
};
/**
 * Fonction lançant l'animation de visualisation de la ligne continue
 * Utilise un timer et une fonction de callBack
 * Vitesse est le nombre de pixels à parcourir à chaque dixième de seconde
 * @param {type} vitesse
 */


Polygone.prototype.lanceAnimation = function (vitesse) {
  // Dans la version flash, la vitesse n'est pas le nombre de pixels par dixième de seconde
  // mais le nombre de pixlels par seconde semble le double
  this.pix = parseFloat(vitesse / 2);
  this.abs = [];
  this.abs[0] = this.sauveabs[0];
  this.ord = [];
  this.ord[0] = this.sauveord[0];
  this.ind = 0; // L'indice du sommet en cours dans le tableau des coordonnées

  this.n = 0; // L'indice du pas sur le segment en cours

  var cray = this.doc.crayon;
  var v = new Vect(parseFloat(this.sauveabs[0]), parseFloat(this.sauveord[0]), parseFloat(this.sauveabs[1]), parseFloat(this.sauveord[1]));
  this.longcote = v.norme(); // Longueur du côté en cours

  this.vect = v.vecteurColineaire(this.pix);
  cray.setPosition(parseFloat(this.abs[0]), parseFloat(this.ord[0]), cray.angle);
  var t = this;
  this.timer = setInterval(function () {
    t.actionPourAnimation();
  }, 25);
};
/**
 * Fonction de callBack appelée par un timer pour l'animation du tracé
 */


Polygone.prototype.actionPourAnimation = function () {
  var cray = this.doc.crayon;
  var ind = this.ind;
  var x = parseFloat(this.abs[ind]);
  var y = parseFloat(this.ord[ind]);
  this.n++;

  if (this.doc.animationEnCours) {
    if (this.n * this.pix <= this.longcote) {
      var x1 = x + this.n * this.vect.x;
      var y1 = y + this.n * this.vect.y;
      this.abs[ind + 1] = String(x1);
      this.ord[ind + 1] = String(y1);
      cray.translate(x1, y1);
      this.updateg();
    } else {
      this.ind++;
      ind++;

      if (ind === this.sauveabs.length - 1) {
        clearInterval(this.timer);
        this.finAction();
        this.doc.actionSuivante();
      } else {
        // On passe au côté suivant
        this.abs[ind] = this.sauveabs[ind];
        this.ord[ind] = this.sauveord[ind];
        cray.translate(parseFloat(this.abs[ind]), parseFloat(this.ord[ind]));
        var v = new Vect(parseFloat(this.sauveabs[ind]), parseFloat(this.sauveord[ind]), parseFloat(this.sauveabs[ind + 1]), parseFloat(this.sauveord[ind + 1]));
        this.longcote = v.norme(); // Longueur du côté en cours

        this.vect = v.vecteurColineaire(this.pix);
        this.n = 0;
      }
    }
  } else {
    clearInterval(this.timer);
    this.finAction();
    this.doc.actionSuivante();
  }
};
/**
 * extends iep.objetBase.prototype.finAction
 */


Polygone.prototype.finAction = function () {
  this.abs = this.sauveabs;
  this.ord = this.sauveord;
  var len = this.abs.length;
  this.updateg();
  this.doc.crayon.translate(parseFloat(this.abs[len - 1]), parseFloat(this.ord[len - 1]));
};

/***/ }),

/***/ "./sources_js/objets/quadrillage.js":
/*!******************************************!*\
  !*** ./sources_js/objets/quadrillage.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetBase = __webpack_require__(/*! ./objetBase */ "./sources_js/objets/objetBase.js");

module.exports = Quadrillage;
/**
 * Classe représentant un quadrillage de la figure
 * @extends iep.objetBase
 * @constructor
 * @param {iep.iepDoc} doc : Le document propriétaire
 * @param {string} type : Le type de quadrillage : "quadrillage","seyes","5x5","10x10","millimetre"
 * @param {string} hauteur : La hauteur du cadre en cm (1 cm = 30 pixels)
 * @param {string} largeur : La largeur du cadre en cm (1 cm = 30 pixels)
 * @param {string} haut : La position en ordonnées du cadre dans la fenêtre
 * @param {string} gauche : La position en abscisses du cadre dans la fenêtre
 * @param {type} couleur : La couleur du quadrillage
 * Attention : Un quadrillage n'a pas d'id et il ne peut y en avoir qu'un dans une figure.
 */

function Quadrillage(doc, type, hauteur, largeur, haut, gauche, couleur) {
  ObjetBase.call(this, doc, 'quadrillageIEP', couleur); // Le repère aura pour Id quadrillageIEP

  this.hauteur = parseFloat(hauteur);
  this.largeur = parseFloat(largeur);
  this.haut = haut == null ? 0 : parseFloat(haut);
  this.gauche = gauche == null ? 0 : parseFloat(gauche);
  this.type = type;
  this.cadre = {};
  this.cadre.gauche = this.gauche * 30; // 30 px pour 1 cm

  this.cadre.haut = this.haut * 30;
  this.cadre.droite = this.cadre.gauche + this.largeur * 30;
  this.cadre.bas = this.cadre.haut + this.hauteur * 30;
  this.objet = 'quadrillage';
}

Quadrillage.prototype = new ObjetBase();
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */

Quadrillage.prototype.creeg = function () {
  var gauche = this.cadre.gauche;
  var droite = this.cadre.droite;
  var haut = this.cadre.haut;
  var bas = this.cadre.bas;
  var couleur = this.couleur;
  this.g = document.createElementNS(kernel.svgsn, 'g'); // Un seul quadrillage sur une figure.

  var oldg = this.doc.svg.getElementById('quadrillageIEP');
  if (oldg != null) this.doc.svg.removeChild(oldg);

  switch (this.type) {
    case 'seyes':
      this.tracer_grille(couleur, 24, 6, gauche, haut, droite, bas, false, 1); // 1 est l'opacité

      this.tracer_grille(couleur, 24, 24, gauche, haut, droite, bas, false, 1);
      break;

    case 'millimetre':
      this.tracer_grille(couleur, 3, 3, gauche, haut, droite, bas, false, 0.6);
      this.tracer_grille(couleur, 30, 30, gauche, haut, droite, bas, false, 0.8);
      this.tracer_grille(couleur, 150, 150, gauche, haut, droite, bas, false, 1);
      break;

    case '10x10':
    case '10x':
      this.tracer_grille(couleur, 30, 30, gauche, haut, droite, bas, false, 1);
      break;

    case '5x5':
    case '5x':
    default:
      this.tracer_grille(couleur, 15, 15, gauche, haut, droite, bas, false, 1);
      break;
  }
};
/**
 * Fonction reprise à partir du code de la version Flash
 * @param {string} epaisseur
 * @param {string} couleur
 * @param {Float} ecart_x
 * @param {Float} ecart_y
 * @param {Float} debut_x
 * @param {Float} debut_y
 * @param {Float} fin_x
 * @param {Float} fin_y
 * @param {Float} pointille
 * @param {Float} alpha
 */


Quadrillage.prototype.tracer_grille = function (couleur, ecart_x, ecart_y, debut_x, debut_y, fin_x, fin_y, pointille, alpha) {
  var li, i;
  var style = 'stroke:' + couleur + ';stroke-width:0.5;' + 'stroke-opacity:' + alpha + ';';
  if (pointille) this.style += 'stroke-dasharray:2 2;'; // Pointillés

  var nb = Math.ceil(Math.abs(fin_x - debut_x) / ecart_x);

  for (i = 0; i < nb; i++) {
    li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('style', style);
    li.setAttribute('x1', debut_x + i * ecart_x);
    li.setAttribute('y1', debut_y);
    li.setAttribute('x2', debut_x + i * ecart_x);
    li.setAttribute('y2', fin_y);
    li.setAttribute('style', style);
    this.g.appendChild(li);
  }

  nb = Math.ceil(Math.abs(fin_y - debut_y) / ecart_y);

  for (i = 0; i < nb; i++) {
    li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('style', style);
    li.setAttribute('x1', debut_x);
    li.setAttribute('y1', debut_y + i * ecart_y);
    li.setAttribute('x2', fin_x);
    li.setAttribute('y2', debut_y + i * ecart_y);
    li.setAttribute('style', style);
    this.g.appendChild(li);
  }
};

/***/ }),

/***/ "./sources_js/objets/repere.js":
/*!*************************************!*\
  !*** ./sources_js/objets/repere.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetBase = __webpack_require__(/*! ./objetBase */ "./sources_js/objets/objetBase.js");

module.exports = Repere;
/**
 * Classe représentant un repère de la figure
 * @extends iep.objetBase
 * @constructor
 * @param {iep.iepDoc} doc : le docmument propriétaire
 * @param {string} hauteur : Hauteur du cadre contenant le repère, exprimées en centimètres
 * @param {string} largeur : Largeur du cadre contenant le repère, exprimées en centimètres
 * @param {string} haut : abscisse de ce cadre relativement au bord haut et au
 * bord gauche de la zone de dessin, en centimètres
 * @param {string} gauche : Ordonnée de ce cadre relativement au bord haut et
 * au bord gauche de la zone de dessin, en centimètres
 * @param {string} xgrad : donne les unités de graduations : si Xgrad est égal à 5,
 *  le repère va être gradué de 5 en 5
 * @param {string} ygrad : donne les unités de graduations : si Ygrad est égal à 5, le repère va être gradué de 5 en 5
 * @param {string} xmin : valeur mini des abscisses dans le repère
 * @param {string} xmax : valeur maxi des abscisses dans le repère
 * @param {string} ymin : valeur mini des ordonnées dans le repère
 * @param {string} ymax : valeur maxi des ordonnées dans le repère
 * @param {string} couleur : Couleur du tracé
 * @param {string} grille : "invisible” si on souhaite que le quadrillage soit masqué
 * @param {type} axes : “invisible” si on souhaite que les axes soient masqué
 * @param {type} etiquettes : “invisible” si on souhaite que les étiquettes des axes soient masquées
 */

function Repere(doc, hauteur, largeur, haut, gauche, xgrad, ygrad, xmin, xmax, ymin, ymax, couleur, grille, axes, etiquettes) {
  ObjetBase.call(this, doc, 'repereIEP', couleur); // Le repère aura pour Id repereIEP

  this.hauteur = hauteur;
  this.largeur = largeur;
  this.haut = haut == null ? 0 : parseFloat(haut);
  this.gauche = gauche == null ? 0 : parseFloat(gauche);
  this.xgrad = parseFloat(xgrad);
  this.ygrad = parseFloat(ygrad);
  this.xmin = parseFloat(xmin);
  this.xmax = parseFloat(xmax);
  this.ymin = parseFloat(ymin);
  this.ymax = parseFloat(ymax);
  this.grille = grille == null ? 'visible' : grille;
  this.axes = axes == null ? 'visible' : axes;
  this.etiquettes = etiquettes == null ? 'visible' : etiquettes;
  this.cadre = {};
  this.cadre.gauche = this.gauche * 30; // 30 px pour 1 cm

  this.cadre.haut = this.haut * 30;
  this.cadre.droite = this.cadre.gauche + this.largeur * 30;
  this.cadre.bas = this.cadre.haut + this.hauteur * 30;
}

Repere.prototype = new ObjetBase();
/**
 *
 * @param {type} nbr
 * @returns {Float}
 */

Repere.prototype.mettre_x_en_pixels = function (nbr) {
  return kernel.mettre_en_pixels(nbr, this.xmin, this.xmax, this.cadre.gauche, this.cadre.droite);
};
/**
 * Fonction utilisée dans l'objet repere. Repris du code Flash
 */


Repere.prototype.mettre_y_en_pixels = function (nbr) {
  return kernel.mettre_en_pixels(nbr, this.ymax, this.ymin, this.cadre.haut, this.cadre.bas);
};
/**
 *
 * @param {type} debut_trace_x
 * @param {type} unite_x
 * @param {type} nb_grad_x
 * @param {type} ordo_etiquettes
 * @param {type} haut
 * @param {type} bas
 */


Repere.prototype.tracer_abscisses = function (debut_trace_x, unite_x, nb_grad_x, ordo_etiquettes, haut, bas) {
  var li, txt, abscisse, i;
  var tailleEtiquettes = 12; // Taille de la police utilisée pour les étiquettes

  var style = 'stroke:black;stroke-width:0.5;';

  if (this.grille === 'invisible' && this.axes !== 'invisible') {
    li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('style', style);
    li.setAttribute('x1', this.cadre.gauche);
    li.setAttribute('y1', ordo_etiquettes);
    li.setAttribute('x2', this.cadre.droite);
    li.setAttribute('y2', ordo_etiquettes);
    this.g.appendChild(li);
  }

  for (i = 0; i <= nb_grad_x; i++) {
    li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('style', style);
    abscisse = this.mettre_x_en_pixels(debut_trace_x + i * unite_x);

    if (this.grille === 'invisible') {
      if (this.axes !== 'invisible') {
        li.setAttribute('x1', abscisse);
        li.setAttribute('y1', String(ordo_etiquettes - 5));
        li.setAttribute('x2', abscisse);
        li.setAttribute('y2', String(ordo_etiquettes + 5));
        this.g.appendChild(li);
      }
    } else {
      li.setAttribute('x1', abscisse);
      li.setAttribute('y1', haut);
      li.setAttribute('x2', abscisse);
      li.setAttribute('y2', bas);
      this.g.appendChild(li);
    }

    if (this.etiquettes !== 'invisible' && this.axes !== 'invisible') {
      txt = document.createElementNS(kernel.svgsn, 'text');
      txt.setAttribute('x', abscisse + 2);
      txt.setAttribute('y', ordo_etiquettes + tailleEtiquettes);
      var stylet = 'text-anchor:left;font-size:' + tailleEtiquettes + 'px;' + 'fill:' + this.couleur + ';';
      txt.setAttribute('style', stylet);
      txt.appendChild(document.createTextNode(String(debut_trace_x + i * unite_x)));
      this.g.appendChild(txt);
    }
  }
};
/**
 *
 * @param {type} debut_trace_y
 * @param {type} unite_y
 * @param {type} nb_grad_y
 * @param {type} abs_etiquettes
 * @param {type} gauche
 * @param {type} droite
 */


Repere.prototype.tracer_ordonnees = function (debut_trace_y, unite_y, nb_grad_y, abs_etiquettes, gauche, droite) {
  var li, txt, ordonnee, i;
  var tailleEtiquettes = 12; // Taille de la police utilisée pour les étiquettes

  var style = 'stroke:black;stroke-width:0.5;';

  if (this.grille === 'invisible' && this.axes !== 'invisible') {
    li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('style', style);
    li.setAttribute('x1', abs_etiquettes);
    li.setAttribute('y1', this.cadre.haut);
    li.setAttribute('x2', abs_etiquettes);
    li.setAttribute('y2', this.cadre.bas);
    this.g.appendChild(li);
  }

  for (i = 0; i <= nb_grad_y; i++) {
    li = document.createElementNS(kernel.svgsn, 'line');
    li.setAttribute('style', style);
    ordonnee = this.mettre_y_en_pixels(debut_trace_y + i * unite_y);

    if (this.grille === 'invisible') {
      if (this.axes !== 'invisible') {
        li.setAttribute('x1', String(abs_etiquettes - 5));
        li.setAttribute('y1', ordonnee);
        li.setAttribute('x2', String(abs_etiquettes + 5));
        li.setAttribute('y2', ordonnee);
        this.g.appendChild(li);
      }
    } else {
      li.setAttribute('x1', gauche);
      li.setAttribute('y1', ordonnee);
      li.setAttribute('x2', droite);
      li.setAttribute('y2', ordonnee);
      this.g.appendChild(li);
    }

    if (this.etiquettes !== 'invisible' && this.axes !== 'invisible') {
      txt = document.createElementNS(kernel.svgsn, 'text');
      txt.setAttribute('x', abs_etiquettes + 2);
      txt.setAttribute('y', ordonnee + tailleEtiquettes);
      var stylet = 'text-anchor:left;font-size:' + tailleEtiquettes + 'px;' + 'fill:' + this.couleur + ';';
      txt.setAttribute('style', stylet);
      txt.appendChild(document.createTextNode(String(debut_trace_y + i * unite_y)));
      this.g.appendChild(txt);
    }
  }
};
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */


Repere.prototype.creeg = function () {
  var width = this.cadre.droite - this.cadre.gauche;
  var height = this.cadre.bas - this.cadre.haut;
  this.g = document.createElementNS(kernel.svgsn, 'g');
  var defs = document.createElementNS(kernel.svgsn, 'defs');
  var clip = document.createElementNS(kernel.svgsn, 'clipPath');
  clip.setAttribute('id', 'clipRepere');
  var rect = document.createElementNS(kernel.svgsn, 'rect');
  rect.setAttribute('style', style);
  rect.setAttribute('x', this.cadre.gauche);
  rect.setAttribute('y', this.cadre.haut);
  rect.setAttribute('width', width);
  rect.setAttribute('height', height);
  clip.appendChild(rect);
  defs.appendChild(clip);
  this.g.appendChild(defs);
  this.g.setAttribute('style', 'clip-path:url(#clipRepere)'); // Si besoin, on trace des graduations pour les abscisses

  if (this.xmax - this.xmin > this.xgrad) {
    // nombre de graduations qui appraitront
    var nb_grad_x = Math.floor((this.xmax - this.xmin) / this.xgrad);
    /*
     determination de l'ordonnée des étiquettes pour les abscisses
     */

    var ordo_etiquettes;

    if (this.ymax * this.ymin < 0) {
      ordo_etiquettes = this.mettre_y_en_pixels(0);
    } else if (this.ymax < 0) {
      ordo_etiquettes = this.cadre.haut;
    } else {
      ordo_etiquettes = this.cadre.bas;
    }
    /*
     FIN ETIQUETTES
     */

    /*
     DETERMINATION ABSCISSES
     */


    var debut_trace_x = kernel.determiner_graduations(this.xmin, this.xmax, this.xgrad);
    this.tracer_abscisses(debut_trace_x, this.xgrad, nb_grad_x, ordo_etiquettes, this.cadre.haut, this.cadre.bas);
    /*
     FIN ABSCISSES
     */
  }

  if (this.ymax - this.ymin > this.ygrad) {
    var nb_grad_y = Math.floor((this.ymax - this.ymin) / this.ygrad);
    /*
     determination de l'abscisse des étiquettes pour les ordonnées
     */

    var abs_etiquettes;

    if (this.xmax * this.xmin < 0) {
      abs_etiquettes = this.mettre_x_en_pixels(0);
    } else if (this.xmax < 0) {
      abs_etiquettes = this.cadre.droite;
    } else {
      abs_etiquettes = this.cadre.gauche;
    }

    var debut_trace_y = kernel.determiner_graduations(this.ymin, this.ymax, this.ygrad);
    this.tracer_ordonnees(debut_trace_y, this.ygrad, nb_grad_y, abs_etiquettes, this.cadre.gauche, this.cadre.droite);
  } // tracer_les_fonctions();


  var rect2 = document.createElementNS(kernel.svgsn, 'rect');
  var style = 'stroke:' + this.couleur + ';stroke-width:1;fill:none;';
  rect2.setAttribute('style', style);
  rect2.setAttribute('x', this.cadre.gauche);
  rect2.setAttribute('y', this.cadre.haut);
  rect2.setAttribute('width', width);
  rect2.setAttribute('height', height);
  this.g.appendChild(rect2);
  this.g.setAttribute('visibility', 'hidden');
};

/***/ }),

/***/ "./sources_js/objets/segment.js":
/*!**************************************!*\
  !*** ./sources_js/objets/segment.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var DroiteAncetre = __webpack_require__(/*! ./droiteAncetre */ "./sources_js/objets/droiteAncetre.js");

var Vect = __webpack_require__(/*! ../types/vecteur */ "./sources_js/types/vecteur.js");

module.exports = Segment;
/**
 * Classe représentant un segment qui peut être affublé d'une flèche
 * @extends iep.objetBase
 * @constructor
 * @param {Integer} x1 : Abscisse de l'origine
 * @param {integre} y1 : Ordonnée de l'origine
 * @param {Integer} x2 : Abscisse de l'extrémité
 * @param {interger} y2 : Ordonnée de l'extrémité
 * @param {string} couleur : couleur
 * @param {Integer} epaisseur : épaiseur du trait
 * @param {string} opacite : transparence du trait (de 0 à 100)
 * @param {string} styleTrait : Si "tiret" pointillés sinon trait continu
 * @param {boolean} vecteur : Si true on rajoute une flcèce
 */

function Segment(doc, id, x1, y1, x2, y2, couleur, epaisseur, opacite, styleTrait, stylefleche) {
  DroiteAncetre.call(this, doc, id, x1, y1, x2, y2, couleur, epaisseur, opacite, styleTrait);
  this.stylefleche = stylefleche;
}

Segment.prototype = new DroiteAncetre();
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 * Si le segment est en fait un vecteur on crée d'abord le svg élément du segment
 * et on lui rajoute une flèche
 */

Segment.prototype.creeg = function () {
  DroiteAncetre.prototype.creeg.call(this);

  if (this.stylefleche === 'vecteur') {
    var longFleche = 12;
    var x1 = this.x1;
    var x2 = this.x2;
    var y1 = this.y1;
    var y2 = this.y2;
    var u0 = new Vect(x2, y2, x1, y1);
    var u1 = u0.vecteurColineaire(longFleche);
    var u2 = new Vect(u1.x * kernel.cos30 - u1.y * kernel.sin30, u1.x * kernel.sin30 + u1.y * kernel.cos30);
    var u3 = new Vect(u1.x * kernel.cos30 + u1.y * kernel.sin30, -u1.x * kernel.sin30 + u1.y * kernel.cos30);
    var points = String(x2 + u2.x) + ' ' + String(y2 + u2.y) + ',' + x2 + ' ' + y2 + ',' + String(x2 + u3.x) + ' ' + String(y2 + u3.y);
    var g = document.createElementNS(kernel.svgsn, 'polyline');
    g.setAttribute('points', points);
    var style = 'stroke:' + this.couleur + ';stroke-width:' + this.epaisseur + ';stroke-opacity:' + this.opacite + ';fill:none';
    g.setAttribute('style', style);
    this.g.appendChild(g);
  }
};

/***/ }),

/***/ "./sources_js/objets/texte.js":
/*!************************************!*\
  !*** ./sources_js/objets/texte.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/.registry.npmjs.org/core-js/3.2.1/node_modules/core-js/modules/es.parse-float.js");

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

var ObjetBase = __webpack_require__(/*! ./objetBase */ "./sources_js/objets/objetBase.js");

module.exports = Texte;
/**
 * Classe représentant un texte.
 * L'écriture dans le texte se fait via des actionEcrireTexte
 * @extends iep.objetBase
 * @constructor
 * @param {iep.iepDoc} doc : Le docmument propriétaire
 * @param {string} id : L'id du texte
 * @param {string} x : L'asbsisse d'affichage
 * @param {string} y : L'ordonnée d'affichage
 */

function Texte(doc, id, x, y) {
  ObjetBase.call(this, doc, id, 'black');
  this.x = parseFloat(x);
  this.y = parseFloat(y); // Il faut mémoriser la position initiale du texte car il peut avoir été traslaté ar l'animation
  // et quand on la relance il doit remprendre sa place initiale

  this.xinit = this.x;
  this.yinit = this.y;
  this.taille = 20;
  this.angle = 0; // Possibilité de tourner un etxte (pas donnée avec la version Flash)

  this.texte = '';
  this.objet = 'texte';
}

Texte.prototype = new ObjetBase(); // Attention : POur un affichage de texte, il faut décaler vers le bas de la hauteur de la police pour
// garder la compatibilité avec le flash

Texte.prototype.positionne = function () {
  // var y = this.y + parseFloat(this.taille);
  // this.g.setAttribute("transform","translate(" + this.x + "," + y + ")");
  this.setPosition(this.x, this.y, this.angle, this.zoomfactor);
};

Texte.prototype.translate = function (x, y) {
  this.x = x;
  this.y = y;
  this.positionne();
};
/** @inheritDoc */


Texte.prototype.updateg = function (g) {
  var oldg = this.g;
  this.doc.svg.replaceChild(g, oldg);
  this.g = g;
  g.setAttribute('visibility', 'visible');
};
/**
 * Fonction mettant dans this.g l'élément graphique représentant l'objet dans
 * le DOM du svg de la figure
 */


Texte.prototype.creeg = function () {
  this.g = document.createElementNS(kernel.svgsn, 'g');
};
/**
 * Fonction mettant le texte aux coordonnées (x,y) avec un angle angle et
 * un coefficient de zoom zoomfactor et modifiant la spoition du svg element qui
 * le représente dans le DOM du svg.
 * @param {float} x
 * @param {float} y
 * @param {float} angle
 * @param {integer} zoomfactor
 * @returns {undefined}
 */


Texte.prototype.setPosition = function (x, y, angle, zoomfactor) {
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.zoomfactor = zoomfactor;
  var y2 = y + parseFloat(this.taille);
  this.g.setAttribute('transform', 'scale(' + zoomfactor + ') translate(' + String(x / zoomfactor) + ',' + String(y2 / zoomfactor) + ') rotate(' + angle + ')');
};

/***/ }),

/***/ "./sources_js/types/vecteur.js":
/*!*************************************!*\
  !*** ./sources_js/types/vecteur.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Visualiseur InstrumenPoche en Javascript et SVG
 * @Author Yves Biton (yves.biton@sesamath.net)
 * @License: GNU AGPLv3 https://www.gnu.org/licenses/agpl-3.0.html
 */
var kernel = __webpack_require__(/*! ../global/global */ "./sources_js/global/global.js");

module.exports = Vect;
/**
 * Classe vecteur
 * Peut être initialisé par les coordonnées de l'origine et de l'extrémité ou
 * par deux coordonnées
 * @constructor
 * @param {type} x1 : Abscisse de l'origine ou première coordonnée si deux paramètres
 * @param {type} y1 : Ordonnée de l'origine ou première coordonnée si deux paramètres
 * @param {type} x2 : Abscisse de l'extrémité si quatre paramètres
 * @param {type} y2 : Ordonnée de l'extrémité si quatre paramètres
 */

function Vect(x1, y1, x2, y2) {
  if (arguments.length > 2) {
    this.x = x2 - x1;
    this.y = y2 - y1;
  } else {
    this.x = x1;
    this.y = y1;
  }
}
/**
 * Fonction renvoyant true si la norme du vecteur est inférieur oue égale à 10^-9
 * @returns {boolean}
 */


Vect.prototype.presqueNul = function () {
  return kernel.zero(this.x) && kernel.zero(this.y);
};
/**
 * Fonction renvoyant la norme du vecteur
 * @returns {Number}
 */


Vect.prototype.norme = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
/**
 * Renvoie un vecteur de norme norme, colinéaire à v et de même sens
 * @param {Float} normeSouhaitee :  la norme du vecteur renvoyé
 * @returns {Vect}
 */


Vect.prototype.vecteurColineaire = function (normeSouhaitee) {
  var norm = this.norme();
  return new Vect(this.x / norm * normeSouhaitee, this.y / norm * normeSouhaitee);
};
/**
 * Fonction faisiant tourner un vecteur de l'angle ang et renvoyant un nouveua vecteur
 * correspondant à cette transformation
 * @param {type} angle : L'ange de rotation en degrés
 * @param {type} v
 */


Vect.prototype.tourne = function (angle) {
  var kc = Math.cos(angle * kernel.convDegRad);
  var ks = Math.sin(angle * kernel.convDegRad);
  return new Vect(kc * this.x - ks * this.y, kc * this.y + ks * this.x);
};
/**
 * Renvoie la mesure en degrés de l'angle polaire d'un vecteur non nul
 * Le nombre renvoyé est entre 0 et 380 (exclu)
 * @returns {Number}
 */


Vect.prototype.angle = function () {
  var angle;
  if (this.x === 0 && this.y === 0) return 0;else {
    if (this.x === 0) {
      if (this.y > 0) {
        angle = 3 * Math.PI / 2;
      } else angle = Math.PI / 2;
    } else {
      if (this.x >= 0) {
        angle = Math.atan(-this.y / this.x);
      } else {
        angle = Math.PI - Math.atan(this.y / this.x);
      }

      if (angle < 0) angle = angle + 2 * Math.PI;
    }
  }
  return angle * kernel.convRadDeg;
};

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./sources_js/iep.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./sources_js/iep.js */"./sources_js/iep.js");


/***/ })

/******/ });
//# sourceMappingURL=iepjsmax.js.map