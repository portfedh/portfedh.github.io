if (window.sendOwl) {
  // Already loaded - do nothing
} else {
  sendOwl = {
    cartModifyCallback: null,
    abandonCallback: null,
    sendOwlCartWidget: null,
    captureLinks: function() {
      var aTags = document.getElementsByTagName("a");
      for (i = 0; i < aTags.length; i++) {
        var tag = aTags[i];
        var link = tag.getAttribute("href");
        if (link && link.indexOf("sendowl.com") != -1) {
          if (link.indexOf("/purchase") != -1 || 
              link.indexOf("/add_to_cart") != -1 ||
              link.indexOf("/cart?merchant_id=") != -1 ||
              link.indexOf("/view") != -1) {
            if (this.inIframe()) {
              tag.setAttribute("target", "_blank");
              var newHref = this.appendBackUrl(tag.getAttribute("href"), this.getLocationUrl());
              tag.setAttribute("href", newHref);
            } else {
              this.addClickHandler(tag, this.purchaseHandler);
            }
          }
        }
      }
    },
    captureForms: function() {
      var formTags = document.getElementsByTagName("form");
      for (i = 0; i < formTags.length; i++) {
        var tag = formTags[i];
        var link = tag.getAttribute("action");
        if (link && link.indexOf("sendowl.com") != -1 && 
            (link.indexOf("/purchase") != -1 || link.indexOf("/add_to_cart") != -1)) {
          if (this.inIframe()) {
            tag.setAttribute("target", "_top");
            var newHref = this.appendBackUrl(tag.getAttribute("action"), this.getLocationUrl);
            tag.setAttribute("action", newHref);
          } else {
            this.addSubmitHandler(tag, this.purchaseHandler);
          }
        }
      }
    },
    cartWidget: function(options) {
      this.sendOwlCartWidget = true;
      var viewCartUrl    = 'https://transactions.sendowl.com/cart?merchant_id=' + options["merchantID"];
      var cartPhrase     = options["cartPhrase"] || "Cart:";
      var variant        = options["variant"] || "dark";
      var size           = options["size"] || "medium";
      var useCartImage   = options["useCartImage"];
      var cartImageUrl   = options["cartImageUrl"] || "https://transactions.sendowl.com/assets/external/sendowl-js-cart-" + size + "-" + variant + ".png";
      var useCustomStyle = options["customStyle"];
      var colour         = "#000000";
      var fontSize       = "20px";
      if (useCartImage == null) {useCartImage = true}
      if (useCustomStyle == null) {useCustomStyle = false}
      if (variant == "light")   {colour = "#FFFFFF";}
      if (size == "small")      {fontSize = "15px";}
      if (size == "large")      {fontSize = "26px";}
      if (options["urlAppend"]) {viewCartUrl = viewCartUrl+= "&" + options["urlAppend"]}
      
      var cartDiv = document.createElement("div");
      cartDiv.setAttribute("id", "sendowl-cart-widget");
      cartDiv.setAttribute("data-url", viewCartUrl);
      this.addClickHandler(cartDiv, this.purchaseHandler);
      if (!useCustomStyle) {cartDiv.setAttribute("style", "cursor: pointer; display: inline-block; font-family: Helvetica,Arial,sans-serif; font-size: " + fontSize + "; color: " + colour + ";");}
      if (useCartImage) {
        var cartIcon = document.createElement("img");
        cartIcon.setAttribute("src", cartImageUrl);
        cartIcon.setAttribute("class", "cart-icon");
        if (!useCustomStyle) {cartIcon.setAttribute("style", "vertical-align: middle;");}
      }
      var cartNameSpan = document.createElement("span");
      cartNameSpan.setAttribute("class", "cart-name");
      cartNameSpan.innerHTML = cartPhrase;
      if (!useCustomStyle) {cartNameSpan.setAttribute("style", "vertical-align: middle; margin-left: 5px;");}
      var cartCountSpan = document.createElement("span");
      cartCountSpan.setAttribute("id", "sendowl-cart-count");
      cartCountSpan.setAttribute("class", "cart-count");
      if (!useCustomStyle) {cartCountSpan.setAttribute("style", "vertical-align: middle; margin-left: 2px;");}
      if (useCartImage) {cartDiv.appendChild(cartIcon);}
      cartDiv.appendChild(cartNameSpan);
      cartDiv.appendChild(cartCountSpan);
      options["parent"].appendChild(cartDiv);
      
      var cartItemCount = sendOwl.cartItemCount();
      if (cartItemCount == null) {cartItemCount = 0};
      sendOwl.updateSendOwlWidgetCartCount(cartItemCount);
    },
    cartItemCount: function() {
      var value = sendOwl.readCookie("_sendowl_cart_count");
      if (value == null) {
        return null;
      } else {
        return parseInt(value);
      }
    },
    emptyCart: function(merchantId, callback) {
      var emptyURL = "https://transactions.sendowl.com/cart/empty.json?merchant_id=" + merchantId;
      sendOwl.performSafeJSONPRequest(emptyURL, callback);
    },
    addProductToCart: function(productID, productKey, callback) {
      // NOTE Using product_add_to_cart_url hard-coded here as ID not available until JS runtime
      var addUrl = "https://transactions.sendowl.com/products/" + productID + "/" + productKey + "/add_to_cart.json";
      sendOwl.performSafeJSONPRequest(addUrl, callback);
    },
    addBundleToCart: function(bundleID, bundleKey, callback) {
      // NOTE Using package_add_to_cart_url hard-coded here as ID not available until JS runtime
      var addUrl = "https://transactions.sendowl.com/packages/" + bundleID + "/" + bundleKey + "/add_to_cart.json";
      sendOwl.performSafeJSONPRequest(addUrl, callback);
    },
    addPackageToCart: function(packageID, packageKey, callback) {
      sendOwl.addBundleToCart(packageID, packageKey, callback);
    },
    performJSONPRequest: function(url, callback) {
      this.cartModifyCallback = callback;
      var requestId = Math.floor(Math.random()*999999).toString();
      if (url.indexOf("?") > -1) {
        url = url + "&";
      } else {
        url = url + "?";
      }
      url = url + "callback=sendOwl.asyncJSONRequestComplete&requestid=" + requestId;
      if (sendOwl.isSafariBrowser()) {
        url += "&" + sendOwl.readCookie("_sendowl_cart");;
      }

      var tempscript = document.createElement("script");
      tempscript.type = "text/javascript";
      tempscript.id = "tempscript";
      tempscript.src = url;
      document.body.appendChild(tempscript);
    },
    performSafeJSONPRequest: function(url, callback) {
      if (sendOwl.isSafariBrowser()) {
        var cartString = sendOwl.readCookie("_sendowl_cart");
        xmlhttp = sendOwl.getXMLHttp();
        xmlhttp.open("GET","https://transactions.sendowl.com/carts/cookie_set?" + (cartString || "cart_id=&cart_hash=") + "&url=" + url,true);
        xmlhttp.onload = function(e) {
          sendOwl.createCookie("_sendowl_cart", this.responseText, 30);
          sendOwl.performJSONPRequest(url, callback);
        }
        xmlhttp.send();
      } else {
        sendOwl.performJSONPRequest(url, callback);
      }
    },
    asyncJSONRequestComplete: function(data) {
      if (data["cart_item_count"]) {sendOwl.updateCartCount(data["cart_item_count"])};
      if (sendOwl.cartModifyCallback) {sendOwl.cartModifyCallback(data)};
    },
    updateCartCount: function(value) {
      sendOwl.createCookie("_sendowl_cart_count", value, 30);
      if (this.sendOwlCartWidget) {sendOwl.updateSendOwlWidgetCartCount(value)};
    },
    updateSendOwlWidgetCartCount: function(value) {
      var cartElement = document.getElementById("sendowl-cart-count");
      if(parseInt(value) === 0) {
        cartElement.className = cartElement.className + " cart-empty";
      } else {
        cartElement.className = cartElement.className.replace('cart-empty', '');
      }
      cartElement.innerHTML = "" + value;
    },
    purchaseHandler: function(e) {
      e = e || window.event;
      var iframeSrc = null;
      var cartWidget = sendOwl.getAncestorWithId(e.target || e.srcElement, "sendowl-cart-widget");
      var linkParent = sendOwl.getAncestor(e.target || e.srcElement, "a");
      var formParent = sendOwl.getAncestor(e.target || e.srcElement, "form");
      if (cartWidget) {
        iframeSrc = cartWidget.getAttribute("data-url");
      } else if (linkParent && linkParent.getAttribute("href").indexOf("sendowl.com") != -1) {
        iframeSrc = linkParent.getAttribute("href");
      } else if (formParent && formParent.getAttribute("action").indexOf("sendowl.com") != -1) {
        iframeSrc = formParent.getAttribute("action");
      }
      iframeSrc = sendOwl.appendGoogleAnalyticsTracking(iframeSrc);
      if (iframeSrc) {
        // Safari iframe don't allow storing of cookies from new domains so do a request
        // to the server to get cart details and store locally (for add to or view cart)
        var safariCartAction = sendOwl.isSafariBrowser() && (iframeSrc.indexOf("add_to_cart") >= 0 || iframeSrc.indexOf("cart") >= 0);
        if (safariCartAction) {
          sendOwl.addLoadingImage();
          
          var cartString = sendOwl.readCookie("_sendowl_cart");
          xmlhttp = sendOwl.getXMLHttp();
          xmlhttp.open("GET","https://transactions.sendowl.com/carts/cookie_set?" + (cartString || "cart_id=&cart_hash=") + "&url=" + iframeSrc,true);
          xmlhttp.onload = function(e) {
            sendOwl.createCookie("_sendowl_cart", this.responseText, 30);
            sendOwl.continuePurchaseHandler(iframeSrc, safariCartAction);
          }
          xmlhttp.send();
        } else {
          sendOwl.continuePurchaseHandler(iframeSrc, safariCartAction);
        }
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
      }
    },
    continuePurchaseHandler: function(iframeSrc, safariCartAction) {        
      // Determine if the checkout can be shown in a lightbox
      var lightBoxCheckoutAllowed = false;
      var urlPath = iframeSrc.replace("https://transactions.sendowl.com", "");
      if (urlPath.match(/cart\?merchant_id/)) {
        urlPath = urlPath.replace("?", "/")
      } else {
        urlPath = urlPath.split("?")[0];
      }
      if (!safariCartAction) {
        sendOwl.addLoadingImage();
      }
      xmlhttp = sendOwl.getXMLHttp();
      xmlhttp.open("GET","https://transactions.sendowl.com/carts/check_capability?path=" + urlPath, true);
      xmlhttp.onload = function(e) {
        if (this.responseText.match(/lightbox=1/)) {
          lightBoxCheckoutAllowed = true;
        }
        sendOwl.showCheckout(iframeSrc, safariCartAction, lightBoxCheckoutAllowed);
      }
      xmlhttp.send();
    },
    showCheckout: function(iframeSrc, safariCartAction, lightBoxCheckoutAllowed) {
      var w = window;
      var d  = document
      var f = d.documentElement;
      var g = d.getElementsByTagName('body')[0];
      var x = w.innerWidth||f.clientWidth||g.clientWidth;
      var y = w.innerHeight||f.clientHeight||g.clientHeight;
      var mobile = x <= 479;
      if (window["postMessage"] && lightBoxCheckoutAllowed && !mobile) {
        // We can open as an iFrame as the browser supports iframes
        if (safariCartAction) {
          var queryStringIdentifier = iframeSrc.match(/\?/) ? "&" : "?"
          iframeSrc = iframeSrc + queryStringIdentifier + sendOwl.readCookie("_sendowl_cart");
        }
        sendOwl.loadIframe(iframeSrc);
      } else {
        // No support so open the checkout page
        window.location.href = sendOwl.appendBackUrl(iframeSrc, location.href.split("#")[0]);
        // When the buyer clicks back on their browser on mobiles, it can keep the loading image there.
        sendOwl.removeLoadingImage()
      }
    },
    addLoadingImage: function() {
      var imageContainer = document.createElement("div");
      imageContainer.setAttribute("id", "sendowl-loading");
      imageContainer.style.cssText="position: fixed; z-index: 999998; top: 50%; left: 50%; margin: -20px; width: 40px; height: 40px; border-radius: 8px; background: #636363; padding: 2px; overflow: hidden; box-sizing: content-box;";
      var image = document.createElement("img");
      image.setAttribute("src", "https://transactions.sendowl.com/assets/buyer/iframe_loading.gif");
      image.setAttribute("height", "40");
      image.setAttribute("width", "40");
      imageContainer.appendChild(image);
      document.body.insertBefore(imageContainer, document.body.firstChild);
    },
    removeLoadingImage: function() {
      var imageContainer = document.getElementById("sendowl-loading");
      if (imageContainer) { imageContainer.remove(); }
    },
    isSafariBrowser: function() {
      return navigator.userAgent.indexOf("Safari") >= 0 && navigator.userAgent.indexOf("Chrome") < 0;
    },
    appendGoogleAnalyticsTracking: function(url) {
      if (typeof _gat != "undefined" && typeof _gat != null) {
        var revisedUrl = _gat._getTrackerByName()._getLinkerUrl(url);
        if (typeof revisedUrl == "string") {url = revisedUrl;}
      } else if (typeof ga != "undefined" && typeof ga != null) {
        // Important this is in an else as Async analytics defines a ga object
        ga(function(tracker) {
          var revisedUrl = new window.gaplugins.Linker(tracker).decorate(url);
          if (typeof revisedUrl == "string") {url = revisedUrl;}
        });
      }
      return url;
    },
    getXMLHttp: function() {
      if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
      } else {
        return new ActiveXObject("Microsoft.XMLHTTP");
      }
    },
    getLocationUrl: function() {
      try {
        // We want to get the ultimate page url so we call parent.location which if
        // we're in an iframe will get the parent url.  If we're not in an iframe 
        // it'll get the current url.  However we may not be able to access the 
        // parent due to the iframe being on a different domain and the browser
        // policy on that, so we'll rescue that and fallback to the iframe location
        // which is better than nothing (for known sites we filter this out in our
        // checkout javascript)
        parent.location;
        return parent.location.href.split("#")[0];
      } catch(e){
        return location.href.split("#")[0];
      }
    },
    appendBackUrl: function(url, backUrl) {
      if (url.match(/\?/)) {
        url += "&back=" + encodeURIComponent(backUrl)
      } else {
        url += "?back=" + encodeURIComponent(backUrl)
      }
      return url;
    },
    inIframe: function() {
      return window.top !== window.self;
    },
    loadIframe: function(iframeSrc) {
      iframe = document.createElement("iframe");
      iframe.setAttribute("id", "sendowl-checkout");
      iframe.setAttribute("frameBorder","0");
      iframe.setAttribute("allowtransparency","true");
      iframe.setAttribute("allowPaymentRequest","true");
      iframe.setAttribute("sandbox","allow-scripts allow-same-origin allow-top-navigation allow-forms allow-popups allow-downloads");
      iframe.style.cssText="display: block; background: transparent; border: 0px none transparent; overflow-x: hidden; overflow-y: auto; visibility: visible; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 999999;";
      iframe.setAttribute("src", iframeSrc);
      document.body.insertBefore(iframe, document.body.firstChild);
      document.getElementById("sendowl-checkout").focus();
    },
    handleMessage: function(e) {
      if (e.origin.match("http://dashboard.sendowl.com") || e.origin.match("https://dashboard.sendowl.com") || e.origin.match("http://transactions.sendowl.com") ||  e.origin.match("https://transactions.sendowl.com")) {
        if (e.data == "sendowl:abandoned") {
          sendOwl.removeIframe();
          if (sendOwl.abandonCallback) {sendOwl.abandonCallback()};
        } else if (e.data == "sendowl:close") {
          sendOwl.removeIframe();
        } else if (e.data == "sendowl:loaded") {
          if (document.getElementById("sendowl-loading")) {
            document.body.removeChild(document.getElementById("sendowl-loading"));
          }
        } else if (e.data == "sendowl:iframe:absolute") {
          var checkoutElement = document.getElementById("sendowl-checkout");
          checkoutElement.style.display = "none";
          checkoutElement.style.position = "absolute";
          checkoutElement.style.top = window.scrollY + "px";
          checkoutElement.style.display = "block";
        } else if (e.data == "sendowl:iframe:fixed") {
          var checkoutElement = document.getElementById("sendowl-checkout");
          checkoutElement.style.display = "none";
          checkoutElement.style.position = "fixed";
          checkoutElement.style.top = "0";
          checkoutElement.style.display = "block";
        } else if (e.data.indexOf("sendowl:redirect") > -1) {
          var redirectUrl = e.data.replace("sendowl:redirect:", "");
          window.location.href = redirectUrl;
        } else if (e.data.indexOf("sendowl:cartItemCount") > -1) {
          var cartItemCount = e.data.split(":")[2];
          sendOwl.updateCartCount(cartItemCount);
        } else if (e.data == "sendowl:hide") {
          var _this = this;
          var iframe = document.getElementById("sendowl-checkout");
          if (iframe) {
            iframe.style.position = "absolute";
            iframe.style.top = "0";
            iframe.style.left = "0";
            iframe.style.width = "1px";
            iframe.style.height = "1px";

            window.setTimeout(function() {
              var iframe = document.getElementById("sendowl-checkout");
              // If it's not still 1px, cancel the removal - it's been reopened
              if (iframe.style.width == "1px") {
                sendOwl.removeIframe();
              }
            }, 2500);
          }
        }
      }
    },
    removeIframe: function() {
      var ele = document.getElementById("sendowl-checkout");
      if (ele && ele.parentNode) {
        ele.parentNode.removeChild(ele);
      }
    },
    addClickHandler: function(element, fn) {
      document.addEventListener ? element.addEventListener('click', fn, false) : element.attachEvent('onclick', fn);
    },
    addSubmitHandler: function(element, fn) {
      document.addEventListener ? element.addEventListener('submit', fn, false) : element.attachEvent('onsubmit', fn);
    },
    createCookie: function(name, value, days) {
    	if (days) {
    		var date = new Date();
    		date.setTime(date.getTime()+(days*24*60*60*1000));
    		var expires = "; expires="+date.toGMTString();
    	}
    	else var expires = "";
    	document.cookie = name+"="+value+expires+"; path=/; SameSite=None; Secure";
    },
    readCookie: function(name) {
    	var nameEQ = name + "=";
    	var ca = document.cookie.split(';');
    	for(var i=0;i < ca.length;i++) {
    		var c = ca[i];
    		while (c.charAt(0)==' ') c = c.substring(1,c.length);
    		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    	}
    	return null;
    },
    getAncestor: function(node, tagName) {
      tagName = tagName.toUpperCase();
      while (node) {
        if (node.nodeType == 1 && node.nodeName.toUpperCase() == tagName) {
          return node;
        }
        node = node.parentNode;
      }
      return null;
    },
    getAncestorWithId: function(node, id) {
      while (node) {
        if (node.nodeType == 1 && node.id == id) {
          return node;
        }
        node = node.parentNode;
      }
      return null;
    }
  }
  function viewCart(merchantID) {
    return true; // Legacy method
  };
  function addProductToCart(productID, key) {
    return true; // Legacy method
  };
  function addPackageToCart(packageID, key) {
    return true; // Legacy method
  };
  function addLoadEvent(func) { 
    var oldonload = window.onload; 
    if (typeof window.onload != 'function') { 
      window.onload = func; 
    } else { 
      window.onload = function() { 
        if (oldonload) {oldonload();} 
        func(); 
      }
    }
  }

  document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == 27) {
      sendOwl.removeIframe();
    }
  }
  addLoadEvent(function() {
    sendOwl.captureLinks();
    sendOwl.captureForms();
  });
  window.addEventListener ? window.addEventListener("message", sendOwl.handleMessage, false) : window.attachEvent("onmessage", sendOwl.handleMessage);
}
;
