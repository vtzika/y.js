(function(y, l, d, r) {
  y['YieldrTrackingObject'] = r;
  y[r] = y[r] || {
    data: {},
    set: function(name, value) {
      this.data[name] = value;
    }
  };
  if (!y[r].loaded) {
    var s = l.createElement("script");
    s.async = true;
    s.src = d;
    l.getElementsByTagName("head")[0].appendChild(s);
    y[r].loaded = true;
  }
})(window, document, "//cdn.254a.com/static/y.js", "y");
