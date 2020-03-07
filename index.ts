function nodeCreator(nodeName: keyof HTMLElementTagNameMap): (attributes: object, ...children: Array<HTMLElement|string>) => HTMLElement {
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

export const a = nodeCreator("a");
export const abbr = nodeCreator("abbr");
export const address = nodeCreator("address");
export const applet = nodeCreator("applet");
export const area = nodeCreator("area");
export const article = nodeCreator("article");
export const aside = nodeCreator("aside");
export const audio = nodeCreator("audio");
export const b = nodeCreator("b");
export const base = nodeCreator("base");
export const basefont = nodeCreator("basefont");
export const bdi = nodeCreator("bdi");
export const bdo = nodeCreator("bdo");
export const blockquote = nodeCreator("blockquote");
export const body = nodeCreator("body");
export const br = nodeCreator("br");
export const button = nodeCreator("button");
export const canvas = nodeCreator("canvas");
export const caption = nodeCreator("caption");
export const cite = nodeCreator("cite");
export const code = nodeCreator("code");
export const col = nodeCreator("col");
export const colgroup = nodeCreator("colgroup");
export const data = nodeCreator("data");
export const datalist = nodeCreator("datalist");
export const dd = nodeCreator("dd");
export const del = nodeCreator("del");
export const details = nodeCreator("details");
export const dfn = nodeCreator("dfn");
export const dialog = nodeCreator("dialog");
export const dir = nodeCreator("dir");
export const div = nodeCreator("div");
export const dl = nodeCreator("dl");
export const dt = nodeCreator("dt");
export const em = nodeCreator("em");
export const embed = nodeCreator("embed");
export const fieldset = nodeCreator("fieldset");
export const figcaption = nodeCreator("figcaption");
export const figure = nodeCreator("figure");
export const font = nodeCreator("font");
export const footer = nodeCreator("footer");
export const form = nodeCreator("form");
export const frame = nodeCreator("frame");
export const frameset = nodeCreator("frameset");
export const h1 = nodeCreator("h1");
export const h2 = nodeCreator("h2");
export const h3 = nodeCreator("h3");
export const h4 = nodeCreator("h4");
export const h5 = nodeCreator("h5");
export const h6 = nodeCreator("h6");
export const head = nodeCreator("head");
export const header = nodeCreator("header");
export const hgroup = nodeCreator("hgroup");
export const hr = nodeCreator("hr");
export const html = nodeCreator("html");
export const i = nodeCreator("i");
export const img = nodeCreator("img");
export const input = nodeCreator("input");
export const ins = nodeCreator("ins");
export const kbd = nodeCreator("kbd");
export const label = nodeCreator("label");
export const legend = nodeCreator("legend");
export const li = nodeCreator("li");
export const link = nodeCreator("link");
export const main = nodeCreator("main");
export const map = nodeCreator("map");
export const mark = nodeCreator("mark");
export const marquee = nodeCreator("marquee");
export const menu = nodeCreator("menu");
export const meta = nodeCreator("meta");
export const meter = nodeCreator("meter");
export const nav = nodeCreator("nav");
export const noscript = nodeCreator("noscript");
export const object = nodeCreator("object");
export const ol = nodeCreator("ol");
export const optgroup = nodeCreator("optgroup");
export const option = nodeCreator("option");
export const output = nodeCreator("output");
export const p = nodeCreator("p");
export const param = nodeCreator("param");
export const picture = nodeCreator("picture");
export const pre = nodeCreator("pre");
export const progress = nodeCreator("progress");
export const q = nodeCreator("q");
export const rp = nodeCreator("rp");
export const rt = nodeCreator("rt");
export const ruby = nodeCreator("ruby");
export const s = nodeCreator("s");
export const samp = nodeCreator("samp");
export const script = nodeCreator("script");
export const section = nodeCreator("section");
export const select = nodeCreator("select");
export const slot = nodeCreator("slot");
export const small = nodeCreator("small");
export const source = nodeCreator("source");
export const span = nodeCreator("span");
export const strong = nodeCreator("strong");
export const style = nodeCreator("style");
export const sub = nodeCreator("sub");
export const summary = nodeCreator("summary");
export const sup = nodeCreator("sup");
export const table = nodeCreator("table");
export const tbody = nodeCreator("tbody");
export const td = nodeCreator("td");
export const template = nodeCreator("template");
export const textarea = nodeCreator("textarea");
export const tfoot = nodeCreator("tfoot");
export const th = nodeCreator("th");
export const thead = nodeCreator("thead");
export const time = nodeCreator("time");
export const title = nodeCreator("title");
export const tr = nodeCreator("tr");
export const track = nodeCreator("track");
export const u = nodeCreator("u");
export const ul = nodeCreator("ul");
export const varNode = nodeCreator("var");
export const video = nodeCreator("video");
export const wbr = nodeCreator("wbr");