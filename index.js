function nodeBuilder(nodeName) {
  return function (attributes, ...children) {
      let el = document.createElement(nodeName);
      for (let attr of Object.keys(attributes)) {
        el.setAttribute(attr, attributes[attr]);
      }
      for (let child of children) {
        if (typeof child === "string") {
          el.appendChild(document.createTextNode(child))
        }
        else {
          el.appendChild(child);
        }
      }
      return el;
  }
}

module.exports.a = nodeBuilder("a");
exports.abbr = nodeBuilder("abbr");
exports.address = nodeBuilder("address");
exports.applet = nodeBuilder("applet");
exports.area = nodeBuilder("area");
exports.article = nodeBuilder("article");
exports.aside = nodeBuilder("aside");
exports.audio = nodeBuilder("audio");
exports.b = nodeBuilder("b");
exports.base = nodeBuilder("base");
exports.basefont = nodeBuilder("basefont");
exports.bdi = nodeBuilder("bdi");
exports.bdo = nodeBuilder("bdo");
exports.blockquote = nodeBuilder("blockquote");
exports.body = nodeBuilder("body");
exports.br = nodeBuilder("br");
exports.button = nodeBuilder("button");
exports.canvas = nodeBuilder("canvas");
exports.caption = nodeBuilder("caption");
exports.cite = nodeBuilder("cite");
exports.code = nodeBuilder("code");
exports.col = nodeBuilder("col");
exports.colgroup = nodeBuilder("colgroup");
exports.data = nodeBuilder("data");
exports.datalist = nodeBuilder("datalist");
exports.dd = nodeBuilder("dd");
exports.del = nodeBuilder("del");
exports.details = nodeBuilder("details");
exports.dfn = nodeBuilder("dfn");
exports.dialog = nodeBuilder("dialog");
exports.dir = nodeBuilder("dir");
exports.div = nodeBuilder("div");
exports.dl = nodeBuilder("dl");
exports.dt = nodeBuilder("dt");
exports.em = nodeBuilder("em");
exports.embed = nodeBuilder("embed");
exports.fieldset = nodeBuilder("fieldset");
exports.figcaption = nodeBuilder("figcaption");
exports.figure = nodeBuilder("figure");
exports.font = nodeBuilder("font");
exports.footer = nodeBuilder("footer");
exports.form = nodeBuilder("form");
exports.frame = nodeBuilder("frame");
exports.frameset = nodeBuilder("frameset");
exports.h1 = nodeBuilder("h1");
exports.h2 = nodeBuilder("h2");
exports.h3 = nodeBuilder("h3");
exports.h4 = nodeBuilder("h4");
exports.h5 = nodeBuilder("h5");
exports.h6 = nodeBuilder("h6");
exports.head = nodeBuilder("head");
exports.header = nodeBuilder("header");
exports.hgroup = nodeBuilder("hgroup");
exports.hr = nodeBuilder("hr");
exports.html = nodeBuilder("html");
exports.i = nodeBuilder("i");
exports.img = nodeBuilder("img");
exports.input = nodeBuilder("input");
exports.ins = nodeBuilder("ins");
exports.kbd = nodeBuilder("kbd");
exports.label = nodeBuilder("label");
exports.legend = nodeBuilder("legend");
exports.li = nodeBuilder("li");
exports.link = nodeBuilder("link");
exports.main = nodeBuilder("main");
exports.map = nodeBuilder("map");
exports.mark = nodeBuilder("mark");
exports.marquee = nodeBuilder("marquee");
exports.menu = nodeBuilder("menu");
exports.meta = nodeBuilder("meta");
exports.meter = nodeBuilder("meter");
exports.nav = nodeBuilder("nav");
exports.noscript = nodeBuilder("noscript");
exports.object = nodeBuilder("object");
exports.ol = nodeBuilder("ol");
exports.optgroup = nodeBuilder("optgroup");
exports.option = nodeBuilder("option");
exports.output = nodeBuilder("output");
exports.p = nodeBuilder("p");
exports.param = nodeBuilder("param");
exports.picture = nodeBuilder("picture");
exports.pre = nodeBuilder("pre");
exports.progress = nodeBuilder("progress");
exports.q = nodeBuilder("q");
exports.rp = nodeBuilder("rp");
exports.rt = nodeBuilder("rt");
exports.ruby = nodeBuilder("ruby");
exports.s = nodeBuilder("s");
exports.samp = nodeBuilder("samp");
exports.script = nodeBuilder("script");
exports.section = nodeBuilder("section");
exports.select = nodeBuilder("select");
exports.slot = nodeBuilder("slot");
exports.small = nodeBuilder("small");
exports.source = nodeBuilder("source");
exports.span = nodeBuilder("span");
exports.strong = nodeBuilder("strong");
exports.style = nodeBuilder("style");
exports.sub = nodeBuilder("sub");
exports.summary = nodeBuilder("summary");
exports.sup = nodeBuilder("sup");
exports.table = nodeBuilder("table");
exports.tbody = nodeBuilder("tbody");
exports.td = nodeBuilder("td");
exports.template = nodeBuilder("template");
exports.textarea = nodeBuilder("textarea");
exports.tfoot = nodeBuilder("tfoot");
exports.th = nodeBuilder("th");
exports.thead = nodeBuilder("thead");
exports.time = nodeBuilder("time");
exports.title = nodeBuilder("title");
exports.tr = nodeBuilder("tr");
exports.track = nodeBuilder("track");
exports.u = nodeBuilder("u");
exports.ul = nodeBuilder("ul");
exports.varNode = nodeBuilder("var");
exports.video = nodeBuilder("video");
exports.wbr = nodeBuilder("wbr");