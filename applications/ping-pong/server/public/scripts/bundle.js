/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/scripts/Ball.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Ball)\n/* harmony export */ });\n/* harmony import */ var _Mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mobile.js */ "./src/scripts/Mobile.js");\n\r\n\r\n// default values for a Ball : image and shifts\r\nconst BALL_IMAGE_SRC = "./images/balle24.png"\r\nconst SHIFT_X = -8\r\nconst SHIFT_Y = 0\r\nconst SPEED = 8\r\n\r\n/**\r\n * a Ball is a mobile with a ball as image and that bounces in a Game (inside the game\'s canvas)\r\n */\r\nclass Ball extends _Mobile_js__WEBPACK_IMPORTED_MODULE_0__["default"] {\r\n  /**  build a ball\r\n   *\r\n   * @param  {number} x       the x coordinate\r\n   * @param  {number} y       the y coordinate\r\n   * @param  {Game} theGame   the Game this ball belongs to\r\n   */\r\n  constructor(x, y, theGame) {\r\n    super(x, y, BALL_IMAGE_SRC, SHIFT_X, SHIFT_Y)\r\n    this.theGame = theGame\r\n    this.moving = true\r\n  }\r\n\r\n  /**\r\n   * when moving a ball bounces inside the limit of its game\'s canvas\r\n   */\r\n  move() {\r\n    if (this.y <= 0 || this.y + this.height >= this.theGame.canvas.height) {\r\n      // rebond en haut ou en bas\r\n      this.shiftY = -this.shiftY\r\n    } else if (\r\n      this.theGame.rPaddle.box(this.x + this.width, this.y) ||\r\n      this.theGame.rPaddle.box(this.x + this.width, this.y + this.height)\r\n    ) {\r\n      this.x = this.theGame.rPaddle.x - (this.width + 1)\r\n\r\n      // rebound on the right paddle\r\n      this.segmentCollision(this.theGame.rPaddle)\r\n    } else if (\r\n      this.theGame.lPaddle.box(this.x, this.y) ||\r\n      this.theGame.lPaddle.box(this.x, this.y + this.height)\r\n    ) {\r\n      this.x = this.theGame.lPaddle.x + (this.width + 1)\r\n      // rebound on the left paddle\r\n      this.segmentCollision(this.theGame.lPaddle)\r\n    } else if (\r\n      this.x <= 0 ||\r\n      this.x + this.width >= this.theGame.canvas.width\r\n    ) {\r\n      if (this.x <= 0 && this.moving) {\r\n        this.theGame.rScore += 1\r\n      } else if (this.x > 0 && this.moving) {\r\n        this.theGame.lScore += 1\r\n      }\r\n      this.theGame.stop()\r\n      this.moving = false\r\n    }\r\n    super.move()\r\n  }\r\n\r\n  /** ball movement dependinng on the segment of the paddle */\r\n  segmentCollision(paddle) {\r\n    const segment = paddle.segmentPaddleCollision(this.y)\r\n    if (this.shiftX < 0) {\r\n      this.shiftX = SPEED - segment\r\n    } else {\r\n      this.shiftX = -(SPEED - segment)\r\n    }\r\n\r\n    if (this.shiftY < 0) {\r\n      this.shiftY = -(SPEED - Math.abs(this.shiftX))\r\n    } else {\r\n      this.shiftY = SPEED - Math.abs(this.shiftX)\r\n    }\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9CYWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsbUJBQW1CLGtEQUFNO0FBQ3hDO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvc2NyaXB0cy9CYWxsLmpzPzNhNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vYmlsZSBmcm9tIFwiLi9Nb2JpbGUuanNcIlxyXG5cclxuLy8gZGVmYXVsdCB2YWx1ZXMgZm9yIGEgQmFsbCA6IGltYWdlIGFuZCBzaGlmdHNcclxuY29uc3QgQkFMTF9JTUFHRV9TUkMgPSBcIi4vaW1hZ2VzL2JhbGxlMjQucG5nXCJcclxuY29uc3QgU0hJRlRfWCA9IC04XHJcbmNvbnN0IFNISUZUX1kgPSAwXHJcbmNvbnN0IFNQRUVEID0gOFxyXG5cclxuLyoqXHJcbiAqIGEgQmFsbCBpcyBhIG1vYmlsZSB3aXRoIGEgYmFsbCBhcyBpbWFnZSBhbmQgdGhhdCBib3VuY2VzIGluIGEgR2FtZSAoaW5zaWRlIHRoZSBnYW1lJ3MgY2FudmFzKVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIE1vYmlsZSB7XHJcbiAgLyoqICBidWlsZCBhIGJhbGxcclxuICAgKlxyXG4gICAqIEBwYXJhbSAge251bWJlcn0geCAgICAgICB0aGUgeCBjb29yZGluYXRlXHJcbiAgICogQHBhcmFtICB7bnVtYmVyfSB5ICAgICAgIHRoZSB5IGNvb3JkaW5hdGVcclxuICAgKiBAcGFyYW0gIHtHYW1lfSB0aGVHYW1lICAgdGhlIEdhbWUgdGhpcyBiYWxsIGJlbG9uZ3MgdG9cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih4LCB5LCB0aGVHYW1lKSB7XHJcbiAgICBzdXBlcih4LCB5LCBCQUxMX0lNQUdFX1NSQywgU0hJRlRfWCwgU0hJRlRfWSlcclxuICAgIHRoaXMudGhlR2FtZSA9IHRoZUdhbWVcclxuICAgIHRoaXMubW92aW5nID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogd2hlbiBtb3ZpbmcgYSBiYWxsIGJvdW5jZXMgaW5zaWRlIHRoZSBsaW1pdCBvZiBpdHMgZ2FtZSdzIGNhbnZhc1xyXG4gICAqL1xyXG4gIG1vdmUoKSB7XHJcbiAgICBpZiAodGhpcy55IDw9IDAgfHwgdGhpcy55ICsgdGhpcy5oZWlnaHQgPj0gdGhpcy50aGVHYW1lLmNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgLy8gcmVib25kIGVuIGhhdXQgb3UgZW4gYmFzXHJcbiAgICAgIHRoaXMuc2hpZnRZID0gLXRoaXMuc2hpZnRZXHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0aGlzLnRoZUdhbWUuclBhZGRsZS5ib3godGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy55KSB8fFxyXG4gICAgICB0aGlzLnRoZUdhbWUuclBhZGRsZS5ib3godGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy55ICsgdGhpcy5oZWlnaHQpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy54ID0gdGhpcy50aGVHYW1lLnJQYWRkbGUueCAtICh0aGlzLndpZHRoICsgMSlcclxuXHJcbiAgICAgIC8vIHJlYm91bmQgb24gdGhlIHJpZ2h0IHBhZGRsZVxyXG4gICAgICB0aGlzLnNlZ21lbnRDb2xsaXNpb24odGhpcy50aGVHYW1lLnJQYWRkbGUpXHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0aGlzLnRoZUdhbWUubFBhZGRsZS5ib3godGhpcy54LCB0aGlzLnkpIHx8XHJcbiAgICAgIHRoaXMudGhlR2FtZS5sUGFkZGxlLmJveCh0aGlzLngsIHRoaXMueSArIHRoaXMuaGVpZ2h0KVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMueCA9IHRoaXMudGhlR2FtZS5sUGFkZGxlLnggKyAodGhpcy53aWR0aCArIDEpXHJcbiAgICAgIC8vIHJlYm91bmQgb24gdGhlIGxlZnQgcGFkZGxlXHJcbiAgICAgIHRoaXMuc2VnbWVudENvbGxpc2lvbih0aGlzLnRoZUdhbWUubFBhZGRsZSlcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMueCA8PSAwIHx8XHJcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPj0gdGhpcy50aGVHYW1lLmNhbnZhcy53aWR0aFxyXG4gICAgKSB7XHJcbiAgICAgIGlmICh0aGlzLnggPD0gMCAmJiB0aGlzLm1vdmluZykge1xyXG4gICAgICAgIHRoaXMudGhlR2FtZS5yU2NvcmUgKz0gMVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMueCA+IDAgJiYgdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICB0aGlzLnRoZUdhbWUubFNjb3JlICs9IDFcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRoZUdhbWUuc3RvcCgpXHJcbiAgICAgIHRoaXMubW92aW5nID0gZmFsc2VcclxuICAgIH1cclxuICAgIHN1cGVyLm1vdmUoKVxyXG4gIH1cclxuXHJcbiAgLyoqIGJhbGwgbW92ZW1lbnQgZGVwZW5kaW5uZyBvbiB0aGUgc2VnbWVudCBvZiB0aGUgcGFkZGxlICovXHJcbiAgc2VnbWVudENvbGxpc2lvbihwYWRkbGUpIHtcclxuICAgIGNvbnN0IHNlZ21lbnQgPSBwYWRkbGUuc2VnbWVudFBhZGRsZUNvbGxpc2lvbih0aGlzLnkpXHJcbiAgICBpZiAodGhpcy5zaGlmdFggPCAwKSB7XHJcbiAgICAgIHRoaXMuc2hpZnRYID0gU1BFRUQgLSBzZWdtZW50XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNoaWZ0WCA9IC0oU1BFRUQgLSBzZWdtZW50KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNoaWZ0WSA8IDApIHtcclxuICAgICAgdGhpcy5zaGlmdFkgPSAtKFNQRUVEIC0gTWF0aC5hYnModGhpcy5zaGlmdFgpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaGlmdFkgPSBTUEVFRCAtIE1hdGguYWJzKHRoaXMuc2hpZnRYKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/Ball.js\n')},"./src/scripts/Game.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball.js */ "./src/scripts/Ball.js");\n/* harmony import */ var _Paddle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paddle.js */ "./src/scripts/Paddle.js");\n\r\n\r\n\r\n/**\r\n * a Game animates a ball bouncing in a canvas\r\n */\r\nclass Game {\r\n  /**\r\n   * build a Game\r\n   *\r\n   * @param  {Canvas} canvas the canvas of the game\r\n   */\r\n\r\n  constructor(canvas) {\r\n    this.raf = null\r\n    this.socket = io()\r\n    this.canvas = canvas\r\n    this.lScore = 0\r\n    this.rScore = 0\r\n    this.initBall()\r\n    this.lPaddle = new _Paddle_js__WEBPACK_IMPORTED_MODULE_1__["default"](\r\n      this.canvas.width / 16,\r\n      this.canvas.height / 2,\r\n      this\r\n    )\r\n    this.rPaddle = new _Paddle_js__WEBPACK_IMPORTED_MODULE_1__["default"](\r\n      this.canvas.width - this.canvas.width / 16 - 30,\r\n      this.canvas.height / 2,\r\n      this\r\n    )\r\n    this.keyDownActionHandler()\r\n    this.keyUpActionHandler()\r\n    this.receivedData()\r\n    this.socketControl()\r\n  }\r\n\r\n  socketControl() {\r\n    this.socket.on("p1", function () {\r\n      console.log("connection player ONE with server establised")\r\n      document.getElementById("player").innerHTML = `Player 1`\r\n      document.getElementById("score").innerHTML = `Waiting for player 2 ...`\r\n    })\r\n    this.socket.on("p2", function () {\r\n      console.log("connection player TWO with server establised")\r\n      document.getElementById("player").innerHTML = `Player 2`\r\n    })\r\n\r\n    this.socket.on("error", function () {\r\n      console.log("connection player with server error, LIMIT player : 2")\r\n      console.log("disconnected from the server automatically")\r\n      document.getElementById("player").innerHTML = `Connection Error`\r\n    })\r\n  }\r\n\r\n  receivedData() {\r\n    this.socket.on("recvScores", (left, right) => {\r\n      this.lScore = left\r\n      this.rScore = right\r\n      this.displayScores()\r\n    })\r\n\r\n    this.socket.on("recvBall", (x, y) => {\r\n      this.initBall()\r\n      this.animate()\r\n    })\r\n\r\n    this.socket.on("UpL", (paddle) => {\r\n      this.lPaddle.y = paddle\r\n      this.lPaddle.up()\r\n    })\r\n\r\n    this.socket.on("DownL", (paddle) => {\r\n      this.lPaddle.y = paddle\r\n      this.lPaddle.down()\r\n    })\r\n\r\n    this.socket.on("UpR", (paddle) => {\r\n      this.rPaddle.y = paddle\r\n      this.rPaddle.up()\r\n    })\r\n\r\n    this.socket.on("DownR", (paddle) => {\r\n      this.rPaddle.y = paddle\r\n      this.rPaddle.down()\r\n    })\r\n\r\n    this.socket.on("StopL", (paddle) => {\r\n      this.lPaddle.y = paddle\r\n      this.lPaddle.stopMoving()\r\n    })\r\n\r\n    this.socket.on("StopR", (paddle) => {\r\n      this.rPaddle.y = paddle\r\n      this.rPaddle.stopMoving()\r\n    })\r\n  }\r\n\r\n  initBall() {\r\n    this.ball = new _Ball_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas.width / 2, this.canvas.height / 2, this)\r\n  }\r\n\r\n  init() {\r\n    this.socket.emit("newPlayer")\r\n  }\r\n  /** start the animation and make the ball move */\r\n  start() {\r\n    this.animate()\r\n  }\r\n\r\n  /** stop the ball move */\r\n  stop() {\r\n    window.cancelAnimationFrame(this.raf)\r\n    this.ball.stopMoving()\r\n    this.socket.emit("sendScores", this.lScore, this.rScore)\r\n  }\r\n\r\n  restart() {\r\n    this.socket.emit("ball", this.ball.x, this.ball.y)\r\n  }\r\n\r\n  /** draw the paddle and ball */\r\n  animate() {\r\n    this.moveAndDraw()\r\n    this.raf = window.requestAnimationFrame(this.animate.bind(this))\r\n  }\r\n\r\n  /** move and draw components */\r\n  moveAndDraw() {\r\n    const ctxt = this.canvas.getContext("2d")\r\n    ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height)\r\n    this.ball.move()\r\n\r\n    this.ball.draw(ctxt)\r\n\r\n    this.lPaddle.draw(ctxt)\r\n    this.lPaddle.move(this.canvas)\r\n\r\n    this.rPaddle.draw(ctxt)\r\n    this.rPaddle.move(this.canvas)\r\n  }\r\n\r\n  /** displays the score of the players */\r\n  displayScores() {\r\n    document.getElementById(\r\n      "score"\r\n    ).innerHTML = `Score => P1 : ${this.lScore} - P2 : ${this.rScore}`\r\n  }\r\n\r\n  /** keyup event listener */\r\n  keyUpActionHandler() {\r\n    window.addEventListener("keyup", (event) => {\r\n      event.preventDefault()\r\n      switch (event.key) {\r\n        case "ArrowUp":\r\n        case "ArrowDown":\r\n          this.rPaddle.stopMoving()\r\n          this.socket.emit("stopr", this.rPaddle.y)\r\n          break\r\n        case "w":\r\n        case "s":\r\n          this.lPaddle.stopMoving()\r\n          this.socket.emit("stopl", this.lPaddle.y)\r\n          break\r\n        default:\r\n          return\r\n      }\r\n    })\r\n  }\r\n\r\n  /** keydown event listener */\r\n  keyDownActionHandler() {\r\n    window.addEventListener("keydown", (event) => {\r\n      event.preventDefault()\r\n      switch (event.key) {\r\n        case "ArrowUp":\r\n          this.rPaddle.up()\r\n          this.socket.emit("upr", this.rPaddle.y)\r\n          break\r\n        case "ArrowDown":\r\n          this.rPaddle.down()\r\n          this.socket.emit("downr", this.rPaddle.y)\r\n          break\r\n        case "w":\r\n        case "z":\r\n          this.lPaddle.up()\r\n          this.socket.emit("upl", this.lPaddle.y)\r\n          break\r\n        case "s":\r\n          this.lPaddle.down()\r\n          this.socket.emit("downl", this.lPaddle.y)\r\n          break\r\n        case " ":\r\n          if (!this.ball.moving) {\r\n            this.initBall()\r\n          }\r\n          break\r\n        default:\r\n          return\r\n      }\r\n    })\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9HYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUNJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0RBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsYUFBYSxTQUFTLFlBQVk7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvc2NyaXB0cy9HYW1lLmpzPzk3NzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGwgZnJvbSBcIi4vQmFsbC5qc1wiXHJcbmltcG9ydCBQYWRkbGUgZnJvbSBcIi4vUGFkZGxlLmpzXCJcclxuXHJcbi8qKlxyXG4gKiBhIEdhbWUgYW5pbWF0ZXMgYSBiYWxsIGJvdW5jaW5nIGluIGEgY2FudmFzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAvKipcclxuICAgKiBidWlsZCBhIEdhbWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSAge0NhbnZhc30gY2FudmFzIHRoZSBjYW52YXMgb2YgdGhlIGdhbWVcclxuICAgKi9cclxuXHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICB0aGlzLnJhZiA9IG51bGxcclxuICAgIHRoaXMuc29ja2V0ID0gaW8oKVxyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcclxuICAgIHRoaXMubFNjb3JlID0gMFxyXG4gICAgdGhpcy5yU2NvcmUgPSAwXHJcbiAgICB0aGlzLmluaXRCYWxsKClcclxuICAgIHRoaXMubFBhZGRsZSA9IG5ldyBQYWRkbGUoXHJcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMTYsXHJcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgIHRoaXNcclxuICAgIClcclxuICAgIHRoaXMuclBhZGRsZSA9IG5ldyBQYWRkbGUoXHJcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy5jYW52YXMud2lkdGggLyAxNiAtIDMwLFxyXG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICB0aGlzXHJcbiAgICApXHJcbiAgICB0aGlzLmtleURvd25BY3Rpb25IYW5kbGVyKClcclxuICAgIHRoaXMua2V5VXBBY3Rpb25IYW5kbGVyKClcclxuICAgIHRoaXMucmVjZWl2ZWREYXRhKClcclxuICAgIHRoaXMuc29ja2V0Q29udHJvbCgpXHJcbiAgfVxyXG5cclxuICBzb2NrZXRDb250cm9sKCkge1xyXG4gICAgdGhpcy5zb2NrZXQub24oXCJwMVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbiBwbGF5ZXIgT05FIHdpdGggc2VydmVyIGVzdGFibGlzZWRcIilcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJcIikuaW5uZXJIVE1MID0gYFBsYXllciAxYFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpLmlubmVySFRNTCA9IGBXYWl0aW5nIGZvciBwbGF5ZXIgMiAuLi5gXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zb2NrZXQub24oXCJwMlwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbiBwbGF5ZXIgVFdPIHdpdGggc2VydmVyIGVzdGFibGlzZWRcIilcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJcIikuaW5uZXJIVE1MID0gYFBsYXllciAyYFxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnNvY2tldC5vbihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJjb25uZWN0aW9uIHBsYXllciB3aXRoIHNlcnZlciBlcnJvciwgTElNSVQgcGxheWVyIDogMlwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImRpc2Nvbm5lY3RlZCBmcm9tIHRoZSBzZXJ2ZXIgYXV0b21hdGljYWxseVwiKVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllclwiKS5pbm5lckhUTUwgPSBgQ29ubmVjdGlvbiBFcnJvcmBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZWNlaXZlZERhdGEoKSB7XHJcbiAgICB0aGlzLnNvY2tldC5vbihcInJlY3ZTY29yZXNcIiwgKGxlZnQsIHJpZ2h0KSA9PiB7XHJcbiAgICAgIHRoaXMubFNjb3JlID0gbGVmdFxyXG4gICAgICB0aGlzLnJTY29yZSA9IHJpZ2h0XHJcbiAgICAgIHRoaXMuZGlzcGxheVNjb3JlcygpXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuc29ja2V0Lm9uKFwicmVjdkJhbGxcIiwgKHgsIHkpID0+IHtcclxuICAgICAgdGhpcy5pbml0QmFsbCgpXHJcbiAgICAgIHRoaXMuYW5pbWF0ZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuc29ja2V0Lm9uKFwiVXBMXCIsIChwYWRkbGUpID0+IHtcclxuICAgICAgdGhpcy5sUGFkZGxlLnkgPSBwYWRkbGVcclxuICAgICAgdGhpcy5sUGFkZGxlLnVwKClcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5zb2NrZXQub24oXCJEb3duTFwiLCAocGFkZGxlKSA9PiB7XHJcbiAgICAgIHRoaXMubFBhZGRsZS55ID0gcGFkZGxlXHJcbiAgICAgIHRoaXMubFBhZGRsZS5kb3duKClcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5zb2NrZXQub24oXCJVcFJcIiwgKHBhZGRsZSkgPT4ge1xyXG4gICAgICB0aGlzLnJQYWRkbGUueSA9IHBhZGRsZVxyXG4gICAgICB0aGlzLnJQYWRkbGUudXAoKVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnNvY2tldC5vbihcIkRvd25SXCIsIChwYWRkbGUpID0+IHtcclxuICAgICAgdGhpcy5yUGFkZGxlLnkgPSBwYWRkbGVcclxuICAgICAgdGhpcy5yUGFkZGxlLmRvd24oKVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnNvY2tldC5vbihcIlN0b3BMXCIsIChwYWRkbGUpID0+IHtcclxuICAgICAgdGhpcy5sUGFkZGxlLnkgPSBwYWRkbGVcclxuICAgICAgdGhpcy5sUGFkZGxlLnN0b3BNb3ZpbmcoKVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnNvY2tldC5vbihcIlN0b3BSXCIsIChwYWRkbGUpID0+IHtcclxuICAgICAgdGhpcy5yUGFkZGxlLnkgPSBwYWRkbGVcclxuICAgICAgdGhpcy5yUGFkZGxlLnN0b3BNb3ZpbmcoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGluaXRCYWxsKCkge1xyXG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzKVxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuc29ja2V0LmVtaXQoXCJuZXdQbGF5ZXJcIilcclxuICB9XHJcbiAgLyoqIHN0YXJ0IHRoZSBhbmltYXRpb24gYW5kIG1ha2UgdGhlIGJhbGwgbW92ZSAqL1xyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5hbmltYXRlKClcclxuICB9XHJcblxyXG4gIC8qKiBzdG9wIHRoZSBiYWxsIG1vdmUgKi9cclxuICBzdG9wKCkge1xyXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmKVxyXG4gICAgdGhpcy5iYWxsLnN0b3BNb3ZpbmcoKVxyXG4gICAgdGhpcy5zb2NrZXQuZW1pdChcInNlbmRTY29yZXNcIiwgdGhpcy5sU2NvcmUsIHRoaXMuclNjb3JlKVxyXG4gIH1cclxuXHJcbiAgcmVzdGFydCgpIHtcclxuICAgIHRoaXMuc29ja2V0LmVtaXQoXCJiYWxsXCIsIHRoaXMuYmFsbC54LCB0aGlzLmJhbGwueSlcclxuICB9XHJcblxyXG4gIC8qKiBkcmF3IHRoZSBwYWRkbGUgYW5kIGJhbGwgKi9cclxuICBhbmltYXRlKCkge1xyXG4gICAgdGhpcy5tb3ZlQW5kRHJhdygpXHJcbiAgICB0aGlzLnJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpXHJcbiAgfVxyXG5cclxuICAvKiogbW92ZSBhbmQgZHJhdyBjb21wb25lbnRzICovXHJcbiAgbW92ZUFuZERyYXcoKSB7XHJcbiAgICBjb25zdCBjdHh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXHJcbiAgICBjdHh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxyXG4gICAgdGhpcy5iYWxsLm1vdmUoKVxyXG5cclxuICAgIHRoaXMuYmFsbC5kcmF3KGN0eHQpXHJcblxyXG4gICAgdGhpcy5sUGFkZGxlLmRyYXcoY3R4dClcclxuICAgIHRoaXMubFBhZGRsZS5tb3ZlKHRoaXMuY2FudmFzKVxyXG5cclxuICAgIHRoaXMuclBhZGRsZS5kcmF3KGN0eHQpXHJcbiAgICB0aGlzLnJQYWRkbGUubW92ZSh0aGlzLmNhbnZhcylcclxuICB9XHJcblxyXG4gIC8qKiBkaXNwbGF5cyB0aGUgc2NvcmUgb2YgdGhlIHBsYXllcnMgKi9cclxuICBkaXNwbGF5U2NvcmVzKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwic2NvcmVcIlxyXG4gICAgKS5pbm5lckhUTUwgPSBgU2NvcmUgPT4gUDEgOiAke3RoaXMubFNjb3JlfSAtIFAyIDogJHt0aGlzLnJTY29yZX1gXHJcbiAgfVxyXG5cclxuICAvKioga2V5dXAgZXZlbnQgbGlzdGVuZXIgKi9cclxuICBrZXlVcEFjdGlvbkhhbmRsZXIoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICB0aGlzLnJQYWRkbGUuc3RvcE1vdmluZygpXHJcbiAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KFwic3RvcHJcIiwgdGhpcy5yUGFkZGxlLnkpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgXCJ3XCI6XHJcbiAgICAgICAgY2FzZSBcInNcIjpcclxuICAgICAgICAgIHRoaXMubFBhZGRsZS5zdG9wTW92aW5nKClcclxuICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJzdG9wbFwiLCB0aGlzLmxQYWRkbGUueSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqIGtleWRvd24gZXZlbnQgbGlzdGVuZXIgKi9cclxuICBrZXlEb3duQWN0aW9uSGFuZGxlcigpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICB0aGlzLnJQYWRkbGUudXAoKVxyXG4gICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcInVwclwiLCB0aGlzLnJQYWRkbGUueSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgdGhpcy5yUGFkZGxlLmRvd24oKVxyXG4gICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcImRvd25yXCIsIHRoaXMuclBhZGRsZS55KVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIFwid1wiOlxyXG4gICAgICAgIGNhc2UgXCJ6XCI6XHJcbiAgICAgICAgICB0aGlzLmxQYWRkbGUudXAoKVxyXG4gICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcInVwbFwiLCB0aGlzLmxQYWRkbGUueSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBcInNcIjpcclxuICAgICAgICAgIHRoaXMubFBhZGRsZS5kb3duKClcclxuICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJkb3dubFwiLCB0aGlzLmxQYWRkbGUueSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBcIiBcIjpcclxuICAgICAgICAgIGlmICghdGhpcy5iYWxsLm1vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRCYWxsKClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/Game.js\n')},"./src/scripts/Mobile.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Mobile)\n/* harmony export */ });\n/**\r\n  A mobile is defined by its coordinates, an image and a "speed" defined by horizontal and vertical shift values\r\n*/\r\nclass Mobile {\r\n  /**\r\n   * buils a Mobile\r\n   *\r\n   * @param  {number} x          the x coordinate of this mobile\r\n   * @param  {number} y          the y coordinate of this mobile\r\n   * @param  {string} imgSrc     this mobile\'s image src\r\n   * @param  {number} shiftX = 0 the horizontal shift "speed"\r\n   * @param  {number} shiftY = 0 the vertical shift "speed"\r\n   */\r\n  constructor(x, y, imgSrc, shiftX = 0, shiftY = 0) {\r\n    this.y = y\r\n    this.x = x\r\n    this.img = new Image()\r\n    this.img.src = imgSrc\r\n    this.shiftX = shiftX\r\n    this.shiftY = shiftY\r\n  }\r\n\r\n  /** @return {number} the width of the mobile, ie. its images\'s width */\r\n  get width() {\r\n    return this.img.width\r\n  }\r\n\r\n  /** @return {number} the width of the mobile, ie. its images\'s height */\r\n  get height() {\r\n    return this.img.height\r\n  }\r\n\r\n  /** this mobile moves : horizontal and vertical shifts are added to coordinates */\r\n  move() {\r\n    this.x = this.x + this.shiftX\r\n    this.y = this.y + this.shiftY\r\n  }\r\n\r\n  /** draw this mobile\'s image at its coordinates in the given context\r\n   * @param {CanvasRenderingContext2D} ctxt - the drawing context\r\n   */\r\n  draw(ctxt) {\r\n    ctxt.drawImage(this.img, this.x, this.y)\r\n  }\r\n  /** this mobile stops moving : speed becomes 0 */\r\n  stopMoving() {\r\n    this.shiftX = 0\r\n    this.shiftY = 0\r\n  }\r\n\r\n  /** check if the ball still in the box or not */\r\n  box(abs, ord) {\r\n    return (\r\n      abs > this.x &&\r\n      abs < this.x + this.width &&\r\n      ord > this.y &&\r\n      ord < this.y + this.height\r\n    )\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9Nb2JpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9zY3JpcHRzL01vYmlsZS5qcz9mZThkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gIEEgbW9iaWxlIGlzIGRlZmluZWQgYnkgaXRzIGNvb3JkaW5hdGVzLCBhbiBpbWFnZSBhbmQgYSBcInNwZWVkXCIgZGVmaW5lZCBieSBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBzaGlmdCB2YWx1ZXNcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlIHtcclxuICAvKipcclxuICAgKiBidWlscyBhIE1vYmlsZVxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7bnVtYmVyfSB4ICAgICAgICAgIHRoZSB4IGNvb3JkaW5hdGUgb2YgdGhpcyBtb2JpbGVcclxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHkgICAgICAgICAgdGhlIHkgY29vcmRpbmF0ZSBvZiB0aGlzIG1vYmlsZVxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaW1nU3JjICAgICB0aGlzIG1vYmlsZSdzIGltYWdlIHNyY1xyXG4gICAqIEBwYXJhbSAge251bWJlcn0gc2hpZnRYID0gMCB0aGUgaG9yaXpvbnRhbCBzaGlmdCBcInNwZWVkXCJcclxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHNoaWZ0WSA9IDAgdGhlIHZlcnRpY2FsIHNoaWZ0IFwic3BlZWRcIlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIGltZ1NyYywgc2hpZnRYID0gMCwgc2hpZnRZID0gMCkge1xyXG4gICAgdGhpcy55ID0geVxyXG4gICAgdGhpcy54ID0geFxyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgdGhpcy5pbWcuc3JjID0gaW1nU3JjXHJcbiAgICB0aGlzLnNoaWZ0WCA9IHNoaWZ0WFxyXG4gICAgdGhpcy5zaGlmdFkgPSBzaGlmdFlcclxuICB9XHJcblxyXG4gIC8qKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSB3aWR0aCBvZiB0aGUgbW9iaWxlLCBpZS4gaXRzIGltYWdlcydzIHdpZHRoICovXHJcbiAgZ2V0IHdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW1nLndpZHRoXHJcbiAgfVxyXG5cclxuICAvKiogQHJldHVybiB7bnVtYmVyfSB0aGUgd2lkdGggb2YgdGhlIG1vYmlsZSwgaWUuIGl0cyBpbWFnZXMncyBoZWlnaHQgKi9cclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW1nLmhlaWdodFxyXG4gIH1cclxuXHJcbiAgLyoqIHRoaXMgbW9iaWxlIG1vdmVzIDogaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgc2hpZnRzIGFyZSBhZGRlZCB0byBjb29yZGluYXRlcyAqL1xyXG4gIG1vdmUoKSB7XHJcbiAgICB0aGlzLnggPSB0aGlzLnggKyB0aGlzLnNoaWZ0WFxyXG4gICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5zaGlmdFlcclxuICB9XHJcblxyXG4gIC8qKiBkcmF3IHRoaXMgbW9iaWxlJ3MgaW1hZ2UgYXQgaXRzIGNvb3JkaW5hdGVzIGluIHRoZSBnaXZlbiBjb250ZXh0XHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eHQgLSB0aGUgZHJhd2luZyBjb250ZXh0XHJcbiAgICovXHJcbiAgZHJhdyhjdHh0KSB7XHJcbiAgICBjdHh0LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnkpXHJcbiAgfVxyXG4gIC8qKiB0aGlzIG1vYmlsZSBzdG9wcyBtb3ZpbmcgOiBzcGVlZCBiZWNvbWVzIDAgKi9cclxuICBzdG9wTW92aW5nKCkge1xyXG4gICAgdGhpcy5zaGlmdFggPSAwXHJcbiAgICB0aGlzLnNoaWZ0WSA9IDBcclxuICB9XHJcblxyXG4gIC8qKiBjaGVjayBpZiB0aGUgYmFsbCBzdGlsbCBpbiB0aGUgYm94IG9yIG5vdCAqL1xyXG4gIGJveChhYnMsIG9yZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgYWJzID4gdGhpcy54ICYmXHJcbiAgICAgIGFicyA8IHRoaXMueCArIHRoaXMud2lkdGggJiZcclxuICAgICAgb3JkID4gdGhpcy55ICYmXHJcbiAgICAgIG9yZCA8IHRoaXMueSArIHRoaXMuaGVpZ2h0XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/Mobile.js\n')},"./src/scripts/Paddle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Paddle)\n/* harmony export */ });\n/* harmony import */ var _Mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mobile.js */ "./src/scripts/Mobile.js");\n\r\n\r\n// default values for a Paddle : image and shifts\r\nconst PADDLE_IMAGE_SRC = "./images/paddle.png"\r\nconst UP = Symbol("up")\r\nconst DOWN = Symbol("down")\r\nconst NONE = Symbol("none")\r\nconst SPEED = 10\r\nconst NB_SEGMENTS = 5\r\n\r\n/**\r\n * a Paddle is a mobile that can make the ball rebound depending on the side where the ball hits\r\n */\r\nclass Paddle extends _Mobile_js__WEBPACK_IMPORTED_MODULE_0__["default"] {\r\n  static get UP() {\r\n    return UP\r\n  }\r\n  static get DOWN() {\r\n    return DOWN\r\n  }\r\n  static get NONE() {\r\n    return NONE\r\n  }\r\n\r\n  /**  build a Paddle\r\n   *\r\n   * @param  {number} x       the x coordinate\r\n   * @param  {number} y       the y coordinate\r\n   * @param  {Game} theGame   the Game this ball belongs to\r\n   */\r\n  constructor(x, y, theGame) {\r\n    super(x, y, PADDLE_IMAGE_SRC, 0, SPEED)\r\n    this.theGame = theGame\r\n  }\r\n\r\n  up() {\r\n    this.steps = -SPEED\r\n    this.moving = Paddle.DOWN\r\n  }\r\n\r\n  down() {\r\n    this.steps = SPEED\r\n    this.moving = Paddle.UP\r\n  }\r\n\r\n  move(boxs) {\r\n    if (this.moving === Paddle.DOWN) {\r\n      this.y = Math.max(0, this.y + this.steps)\r\n    }\r\n    if (this.moving === Paddle.UP) {\r\n      this.y = Math.min(boxs.height - 80, this.y + this.steps)\r\n    }\r\n  }\r\n\r\n  stopMoving() {\r\n    this.moving = Paddle.NONE\r\n  }\r\n\r\n  segmentPaddleCollision(ord) {\r\n    const middle = this.y + this.height / 2\r\n    const segment = this.height / 2 / NB_SEGMENTS\r\n    return Math.round(Math.abs((ord - middle) / segment))\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9QYWRkbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UscUJBQXFCLGtEQUFNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvc2NyaXB0cy9QYWRkbGUuanM/ZWU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9iaWxlIGZyb20gXCIuL01vYmlsZS5qc1wiXHJcblxyXG4vLyBkZWZhdWx0IHZhbHVlcyBmb3IgYSBQYWRkbGUgOiBpbWFnZSBhbmQgc2hpZnRzXHJcbmNvbnN0IFBBRERMRV9JTUFHRV9TUkMgPSBcIi4vaW1hZ2VzL3BhZGRsZS5wbmdcIlxyXG5jb25zdCBVUCA9IFN5bWJvbChcInVwXCIpXHJcbmNvbnN0IERPV04gPSBTeW1ib2woXCJkb3duXCIpXHJcbmNvbnN0IE5PTkUgPSBTeW1ib2woXCJub25lXCIpXHJcbmNvbnN0IFNQRUVEID0gMTBcclxuY29uc3QgTkJfU0VHTUVOVFMgPSA1XHJcblxyXG4vKipcclxuICogYSBQYWRkbGUgaXMgYSBtb2JpbGUgdGhhdCBjYW4gbWFrZSB0aGUgYmFsbCByZWJvdW5kIGRlcGVuZGluZyBvbiB0aGUgc2lkZSB3aGVyZSB0aGUgYmFsbCBoaXRzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWRkbGUgZXh0ZW5kcyBNb2JpbGUge1xyXG4gIHN0YXRpYyBnZXQgVVAoKSB7XHJcbiAgICByZXR1cm4gVVBcclxuICB9XHJcbiAgc3RhdGljIGdldCBET1dOKCkge1xyXG4gICAgcmV0dXJuIERPV05cclxuICB9XHJcbiAgc3RhdGljIGdldCBOT05FKCkge1xyXG4gICAgcmV0dXJuIE5PTkVcclxuICB9XHJcblxyXG4gIC8qKiAgYnVpbGQgYSBQYWRkbGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSAge251bWJlcn0geCAgICAgICB0aGUgeCBjb29yZGluYXRlXHJcbiAgICogQHBhcmFtICB7bnVtYmVyfSB5ICAgICAgIHRoZSB5IGNvb3JkaW5hdGVcclxuICAgKiBAcGFyYW0gIHtHYW1lfSB0aGVHYW1lICAgdGhlIEdhbWUgdGhpcyBiYWxsIGJlbG9uZ3MgdG9cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih4LCB5LCB0aGVHYW1lKSB7XHJcbiAgICBzdXBlcih4LCB5LCBQQURETEVfSU1BR0VfU1JDLCAwLCBTUEVFRClcclxuICAgIHRoaXMudGhlR2FtZSA9IHRoZUdhbWVcclxuICB9XHJcblxyXG4gIHVwKCkge1xyXG4gICAgdGhpcy5zdGVwcyA9IC1TUEVFRFxyXG4gICAgdGhpcy5tb3ZpbmcgPSBQYWRkbGUuRE9XTlxyXG4gIH1cclxuXHJcbiAgZG93bigpIHtcclxuICAgIHRoaXMuc3RlcHMgPSBTUEVFRFxyXG4gICAgdGhpcy5tb3ZpbmcgPSBQYWRkbGUuVVBcclxuICB9XHJcblxyXG4gIG1vdmUoYm94cykge1xyXG4gICAgaWYgKHRoaXMubW92aW5nID09PSBQYWRkbGUuRE9XTikge1xyXG4gICAgICB0aGlzLnkgPSBNYXRoLm1heCgwLCB0aGlzLnkgKyB0aGlzLnN0ZXBzKVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubW92aW5nID09PSBQYWRkbGUuVVApIHtcclxuICAgICAgdGhpcy55ID0gTWF0aC5taW4oYm94cy5oZWlnaHQgLSA4MCwgdGhpcy55ICsgdGhpcy5zdGVwcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BNb3ZpbmcoKSB7XHJcbiAgICB0aGlzLm1vdmluZyA9IFBhZGRsZS5OT05FXHJcbiAgfVxyXG5cclxuICBzZWdtZW50UGFkZGxlQ29sbGlzaW9uKG9yZCkge1xyXG4gICAgY29uc3QgbWlkZGxlID0gdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyXHJcbiAgICBjb25zdCBzZWdtZW50ID0gdGhpcy5oZWlnaHQgLyAyIC8gTkJfU0VHTUVOVFNcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGguYWJzKChvcmQgLSBtaWRkbGUpIC8gc2VnbWVudCkpXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/Paddle.js\n')},"./src/scripts/pong.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ "./src/scripts/Game.js");\n\r\n\r\n;\r\nconst delay = (ms) => new Promise((res) => setTimeout(res, ms))\r\n\r\nconst init = () => {\r\n  const theField = document.getElementById("field")\r\n  const theGame = new _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"](theField)\r\n  document\r\n    .getElementById("start")\r\n    .addEventListener("click", () => startGame(theGame))\r\n\r\n  document\r\n    .getElementById("restart")\r\n    .addEventListener("click", () => location.reload())\r\n\r\n  // document\r\n  //   .getElementById("restart")\r\n  //   .addEventListener("click", () => theGame.restart())\r\n}\r\n\r\nwindow.addEventListener("load", init)\r\n\r\n// true iff game is started\r\nlet started = false\r\n/** start and stop a game\r\n * @param {Game} theGame - the game to start and stop\r\n */\r\nconst startGame = (theGame) => {\r\n  if (!started) {\r\n    theGame.socket.on("startGame", function () {\r\n      const delayFct = async () => {\r\n        document.getElementById("score").innerHTML = `READY ??`\r\n        await delay(1000)\r\n        document.getElementById("score").innerHTML = `GO !!`\r\n        await delay(1000)\r\n        theGame.start()\r\n      }\r\n      delayFct()\r\n    })\r\n    theGame.init()\r\n    document.getElementById("start").value = "STOP"\r\n  } else {\r\n    document.getElementById("start").value = "JOUER"\r\n    theGame.stop()\r\n  }\r\n  started = !started\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wb25nLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQVk7QUFDWjtBQUNBLENBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3NjcmlwdHMvcG9uZy5qcz81M2QyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lLmpzXCJcclxuY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCBtcykpXHJcblxyXG5jb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRoZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZFwiKVxyXG4gIGNvbnN0IHRoZUdhbWUgPSBuZXcgR2FtZSh0aGVGaWVsZClcclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc3RhcnRHYW1lKHRoZUdhbWUpKVxyXG5cclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKFwicmVzdGFydFwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSlcclxuXHJcbiAgLy8gZG9jdW1lbnRcclxuICAvLyAgIC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIilcclxuICAvLyAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhlR2FtZS5yZXN0YXJ0KCkpXHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0KVxyXG5cclxuLy8gdHJ1ZSBpZmYgZ2FtZSBpcyBzdGFydGVkXHJcbmxldCBzdGFydGVkID0gZmFsc2VcclxuLyoqIHN0YXJ0IGFuZCBzdG9wIGEgZ2FtZVxyXG4gKiBAcGFyYW0ge0dhbWV9IHRoZUdhbWUgLSB0aGUgZ2FtZSB0byBzdGFydCBhbmQgc3RvcFxyXG4gKi9cclxuY29uc3Qgc3RhcnRHYW1lID0gKHRoZUdhbWUpID0+IHtcclxuICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgIHRoZUdhbWUuc29ja2V0Lm9uKFwic3RhcnRHYW1lXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgZGVsYXlGY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKS5pbm5lckhUTUwgPSBgUkVBRFkgPz9gXHJcbiAgICAgICAgYXdhaXQgZGVsYXkoMTAwMClcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpLmlubmVySFRNTCA9IGBHTyAhIWBcclxuICAgICAgICBhd2FpdCBkZWxheSgxMDAwKVxyXG4gICAgICAgIHRoZUdhbWUuc3RhcnQoKVxyXG4gICAgICB9XHJcbiAgICAgIGRlbGF5RmN0KClcclxuICAgIH0pXHJcbiAgICB0aGVHYW1lLmluaXQoKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKS52YWx1ZSA9IFwiU1RPUFwiXHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIikudmFsdWUgPSBcIkpPVUVSXCJcclxuICAgIHRoZUdhbWUuc3RvcCgpXHJcbiAgfVxyXG4gIHN0YXJ0ZWQgPSAhc3RhcnRlZFxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/pong.js\n')}},__webpack_module_cache__={};function __webpack_require__(c){var n=__webpack_module_cache__[c];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[c]={exports:{}};return __webpack_modules__[c](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(c,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(c,t)&&Object.defineProperty(c,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=(c,n)=>Object.prototype.hasOwnProperty.call(c,n),__webpack_require__.r=c=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/scripts/pong.js")})();