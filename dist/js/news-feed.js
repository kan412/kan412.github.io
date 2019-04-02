(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["core-js/modules/es6.function.name"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("core-js/modules/es6.function.name"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.es6Function);
    global.newsFeed = mod.exports;
  }
})(this, function (_es6Function) {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var Newsfeed =
  /*#__PURE__*/
  function () {
    function Newsfeed(key) {
      _classCallCheck(this, Newsfeed);

      this.key = key;
      this.sourcesAPI = 'https://newsapi.org/v1/sources';
    }

    _createClass(Newsfeed, [{
      key: "load",
      value: function load() {
        this.renderNewsChannels();
        this.handleEvents();
      }
    }, {
      key: "renderNewsChannels",
      value: function renderNewsChannels() {
        var _this = this;

        return fetch(this.sourcesAPI).then(function (response) {
          return response.json();
        }).then(function (data) {
          return _this.generateNewsChannelSelectElement(data);
        }).catch(function (error) {
          return console.log(error);
        });
      }
    }, {
      key: "generateNewsChannelSelectElement",
      value: function generateNewsChannelSelectElement(data) {
        var selectElement = document.getElementById('channelFilter');
        var selectElementOptions = '<option value="select-channel">Select Channel</option>';
        data.sources.map(function (_ref) {
          var id = _ref.id,
              name = _ref.name;
          selectElementOptions += "<option value='".concat(id, "'>").concat(name, "</option>");
        });
        selectElement.innerHTML = selectElementOptions;
      } // To Handle 'change' event

    }, {
      key: "handleEvents",
      value: function handleEvents() {
        var _this2 = this;

        var channelFilter = document.getElementById('channelFilter');
        channelFilter.addEventListener('change', function (_ref2) {
          var target = _ref2.target;

          if (target.tagName === 'SELECT') {
            _this2.getNewsByChannel(target.value);
          }
        });
      }
    }, {
      key: "getNewsByChannel",
      value: function getNewsByChannel(channelID) {
        var _this3 = this;

        var channelAPI = "https://newsapi.org/v1/articles?source=".concat(channelID, "&apiKey=").concat(this.key);
        return fetch(channelAPI).then(function (response) {
          return response.json();
        }).then(function (data) {
          return _this3.renderNews(data);
        }).catch(function (error) {
          return console.log(error);
        });
      }
    }, {
      key: "renderNews",
      value: function renderNews(data) {
        var _this4 = this;

        var newsContainer = document.getElementById('app-main__news');
        var newsContent = "<h1 tabindex=\"0\" class=\"app-main__news__title\">".concat(data.source, "</h1>");
        data.articles.map(function (news) {
          newsContent += _this4.generateNewsHTML(news.author, news.title, news.description, news.urlToImage, news.url, news.publishedAt);
        });
        newsContainer.innerHTML = newsContent;
        newsContainer.classList = "app-main__news";
        newsContainer.focus();
      }
    }, {
      key: "generateNewsHTML",
      value: function generateNewsHTML(author, title, content, image, url, publishedOn) {
        return "<article class=\"news\">\n                    <div class=\"news__image\">\n                        <img src=\"".concat(image, "\" alt=\"").concat(title, "\" />\n                    </div>\n                    <div class=\"news__body\">\n                        <h3 class=\"news__title\"><a href=\"").concat(url, "\" target=\"_blank\">").concat(title, "</a></h3>\n                        \n                        <div class=\"news__meta\">\n                            <p>Author: <b><em class=\"news__meta__author\">").concat(author, "</em></b> // Published on <b>").concat(this.formateDate(publishedOn), "</b></p>\n                        </div>\n                        \n                        <div class=\"news__content\">\n                            <p>").concat(content, "</p>\n                        </div>\n\n                        <a class=\"news__readmore\" target=\"_blank\" href=\"").concat(url, "\">Continue Reading</a>\n                    </div>\n                </article>");
      } // helper 

    }, {
      key: "formateDate",
      value: function formateDate(dateString) {
        var date = new Date(dateString);
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var modifiedDate = "".concat(day, "/").concat(month, "/").concat(year);
        return modifiedDate;
      }
    }]);

    return Newsfeed;
  }();

  var news = new Newsfeed('6df77133a743489a965dd29e31343e75');
  news.load();
});
