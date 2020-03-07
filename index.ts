function nodeBuilder(nodeName: keyof HTMLElementTagNameMap): (attributes: object, ...children: Array<HTMLElement|string>) => HTMLElement {
  return function (attributes: object, ...children: Array<HTMLElement|string>) {
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

export const a = nodeBuilder("a");
export const abbr = nodeBuilder("abbr");
export const address = nodeBuilder("address");
export const applet = nodeBuilder("applet");
export const area = nodeBuilder("area");
export const article = nodeBuilder("article");
export const aside = nodeBuilder("aside");
export const audio = nodeBuilder("audio");
export const b = nodeBuilder("b");
export const base = nodeBuilder("base");
export const basefont = nodeBuilder("basefont");
export const bdi = nodeBuilder("bdi");
export const bdo = nodeBuilder("bdo");
export const blockquote = nodeBuilder("blockquote");
export const body = nodeBuilder("body");
export const br = nodeBuilder("br");
export const button = nodeBuilder("button");
export const canvas = nodeBuilder("canvas");
export const caption = nodeBuilder("caption");
export const cite = nodeBuilder("cite");
export const code = nodeBuilder("code");
export const col = nodeBuilder("col");
export const colgroup = nodeBuilder("colgroup");
export const data = nodeBuilder("data");
export const datalist = nodeBuilder("datalist");
export const dd = nodeBuilder("dd");
export const del = nodeBuilder("del");
export const details = nodeBuilder("details");
export const dfn = nodeBuilder("dfn");
export const dialog = nodeBuilder("dialog");
export const dir = nodeBuilder("dir");
export const div = nodeBuilder("div");
export const dl = nodeBuilder("dl");
export const dt = nodeBuilder("dt");
export const em = nodeBuilder("em");
export const embed = nodeBuilder("embed");
export const fieldset = nodeBuilder("fieldset");
export const figcaption = nodeBuilder("figcaption");
export const figure = nodeBuilder("figure");
export const font = nodeBuilder("font");
export const footer = nodeBuilder("footer");
export const form = nodeBuilder("form");
export const frame = nodeBuilder("frame");
export const frameset = nodeBuilder("frameset");
export const h1 = nodeBuilder("h1");
export const h2 = nodeBuilder("h2");
export const h3 = nodeBuilder("h3");
export const h4 = nodeBuilder("h4");
export const h5 = nodeBuilder("h5");
export const h6 = nodeBuilder("h6");
export const head = nodeBuilder("head");
export const header = nodeBuilder("header");
export const hgroup = nodeBuilder("hgroup");
export const hr = nodeBuilder("hr");
export const html = nodeBuilder("html");
export const i = nodeBuilder("i");
export const img = nodeBuilder("img");
export const input = nodeBuilder("input");
export const ins = nodeBuilder("ins");
export const kbd = nodeBuilder("kbd");
export const label = nodeBuilder("label");
export const legend = nodeBuilder("legend");
export const li = nodeBuilder("li");
export const link = nodeBuilder("link");
export const main = nodeBuilder("main");
export const map = nodeBuilder("map");
export const mark = nodeBuilder("mark");
export const marquee = nodeBuilder("marquee");
export const menu = nodeBuilder("menu");
export const meta = nodeBuilder("meta");
export const meter = nodeBuilder("meter");
export const nav = nodeBuilder("nav");
export const noscript = nodeBuilder("noscript");
export const object = nodeBuilder("object");
export const ol = nodeBuilder("ol");
export const optgroup = nodeBuilder("optgroup");
export const option = nodeBuilder("option");
export const output = nodeBuilder("output");
export const p = nodeBuilder("p");
export const param = nodeBuilder("param");
export const picture = nodeBuilder("picture");
export const pre = nodeBuilder("pre");
export const progress = nodeBuilder("progress");
export const q = nodeBuilder("q");
export const rp = nodeBuilder("rp");
export const rt = nodeBuilder("rt");
export const ruby = nodeBuilder("ruby");
export const s = nodeBuilder("s");
export const samp = nodeBuilder("samp");
export const script = nodeBuilder("script");
export const section = nodeBuilder("section");
export const select = nodeBuilder("select");
export const slot = nodeBuilder("slot");
export const small = nodeBuilder("small");
export const source = nodeBuilder("source");
export const span = nodeBuilder("span");
export const strong = nodeBuilder("strong");
export const style = nodeBuilder("style");
export const sub = nodeBuilder("sub");
export const summary = nodeBuilder("summary");
export const sup = nodeBuilder("sup");
export const table = nodeBuilder("table");
export const tbody = nodeBuilder("tbody");
export const td = nodeBuilder("td");
export const template = nodeBuilder("template");
export const textarea = nodeBuilder("textarea");
export const tfoot = nodeBuilder("tfoot");
export const th = nodeBuilder("th");
export const thead = nodeBuilder("thead");
export const time = nodeBuilder("time");
export const title = nodeBuilder("title");
export const tr = nodeBuilder("tr");
export const track = nodeBuilder("track");
export const u = nodeBuilder("u");
export const ul = nodeBuilder("ul");
export const varNode = nodeBuilder("var");
export const video = nodeBuilder("video");
export const wbr = nodeBuilder("wbr");