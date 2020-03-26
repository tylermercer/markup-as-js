import { Observable } from './observable';

interface Attributes {
  [index: string]: string|Function|Observable<string>
}

function isStringObservable(thing: Observable<string> | any): thing is Observable<string> {
  return (<Observable<string>>thing).subscribe !== undefined;
}

function isHTMLElementObservable(thing: Observable<HTMLElement> | any): thing is Observable<HTMLElement> {
  return (<Observable<HTMLElement>>thing).subscribe !== undefined;
}

function nodeCreator(nodeName: string) {
  return function (attributes: Attributes|HTMLElement|Observable<string|HTMLElement>|string, ...children: Array<HTMLElement|string|Observable<string|HTMLElement>>) : HTMLElement {
      let el = document.createElement(nodeName);

      let allChildren: Array<HTMLElement|string|Observable<string|HTMLElement>>;
      if (!(
        typeof attributes === 'string' || 
        attributes instanceof HTMLElement || 
        isStringObservable(attributes) || 
        isHTMLElementObservable(attributes)
        )) {
        let _attributes = attributes as Attributes;
        Object.keys(_attributes).forEach((key:string) => {
          let value = _attributes[key];
          if (typeof value === "function") {
            //TODO: Implement
          }
          else if (isStringObservable(value)) {
            value.subscribe((newValue: string) => el.setAttribute(key, newValue));
          }
          else if (typeof value === 'string') {
            el.setAttribute(key, value);
          }
        })
        allChildren = children;
      } else {
        allChildren = [attributes, ...children];
      }
      for (let child of allChildren) {
        if (typeof child === "string") {
          el.appendChild(document.createTextNode(child))
        }
        else if (child instanceof HTMLElement) {
          el.appendChild(child);
        }
        else {
          if (isHTMLElementObservable(child)) {
            let childNode: HTMLElement|Text = document.createTextNode("");
            child.subscribe((newValue: HTMLElement) => {
              el.replaceChild(newValue, childNode);
              childNode = newValue;
            });
          }
          else if (isStringObservable(child)) {
            let childNode: Text = document.createTextNode("");
            child.subscribe((newValue: string) => childNode.nodeValue = newValue);
          }
        }
      }
      return el;
  }
}

module.exports = {
  nodeCreator,
  a: nodeCreator("a"),
  abbr: nodeCreator("abbr"),
  address: nodeCreator("address"),
  applet: nodeCreator("applet"),
  area: nodeCreator("area"),
  article: nodeCreator("article"),
  aside: nodeCreator("aside"),
  audio: nodeCreator("audio"),
  b: nodeCreator("b"),
  base: nodeCreator("base"),
  basefont: nodeCreator("basefont"),
  bdi: nodeCreator("bdi"),
  bdo: nodeCreator("bdo"),
  blockquote: nodeCreator("blockquote"),
  body: nodeCreator("body"),
  br: nodeCreator("br"),
  button: nodeCreator("button"),
  canvas: nodeCreator("canvas"),
  caption: nodeCreator("caption"),
  cite: nodeCreator("cite"),
  code: nodeCreator("code"),
  col: nodeCreator("col"),
  colgroup: nodeCreator("colgroup"),
  data: nodeCreator("data"),
  datalist: nodeCreator("datalist"),
  dd: nodeCreator("dd"),
  del: nodeCreator("del"),
  details: nodeCreator("details"),
  dfn: nodeCreator("dfn"),
  dialog: nodeCreator("dialog"),
  dir: nodeCreator("dir"),
  div: nodeCreator("div"),
  dl: nodeCreator("dl"),
  dt: nodeCreator("dt"),
  em: nodeCreator("em"),
  embed: nodeCreator("embed"),
  fieldset: nodeCreator("fieldset"),
  figcaption: nodeCreator("figcaption"),
  figure: nodeCreator("figure"),
  font: nodeCreator("font"),
  footer: nodeCreator("footer"),
  form: nodeCreator("form"),
  frame: nodeCreator("frame"),
  frameset: nodeCreator("frameset"),
  h1: nodeCreator("h1"),
  h2: nodeCreator("h2"),
  h3: nodeCreator("h3"),
  h4: nodeCreator("h4"),
  h5: nodeCreator("h5"),
  h6: nodeCreator("h6"),
  head: nodeCreator("head"),
  header: nodeCreator("header"),
  hgroup: nodeCreator("hgroup"),
  hr: nodeCreator("hr"),
  html: nodeCreator("html"),
  i: nodeCreator("i"),
  img: nodeCreator("img"),
  input: nodeCreator("input"),
  ins: nodeCreator("ins"),
  kbd: nodeCreator("kbd"),
  label: nodeCreator("label"),
  legend: nodeCreator("legend"),
  li: nodeCreator("li"),
  link: nodeCreator("link"),
  main: nodeCreator("main"),
  map: nodeCreator("map"),
  mark: nodeCreator("mark"),
  marquee: nodeCreator("marquee"),
  menu: nodeCreator("menu"),
  meta: nodeCreator("meta"),
  meter: nodeCreator("meter"),
  nav: nodeCreator("nav"),
  noscript: nodeCreator("noscript"),
  object: nodeCreator("object"),
  ol: nodeCreator("ol"),
  optgroup: nodeCreator("optgroup"),
  option: nodeCreator("option"),
  output: nodeCreator("output"),
  p: nodeCreator("p"),
  param: nodeCreator("param"),
  picture: nodeCreator("picture"),
  pre: nodeCreator("pre"),
  progress: nodeCreator("progress"),
  q: nodeCreator("q"),
  rp: nodeCreator("rp"),
  rt: nodeCreator("rt"),
  ruby: nodeCreator("ruby"),
  s: nodeCreator("s"),
  samp: nodeCreator("samp"),
  script: nodeCreator("script"),
  section: nodeCreator("section"),
  select: nodeCreator("select"),
  slot: nodeCreator("slot"),
  small: nodeCreator("small"),
  source: nodeCreator("source"),
  span: nodeCreator("span"),
  strong: nodeCreator("strong"),
  style: nodeCreator("style"),
  sub: nodeCreator("sub"),
  summary: nodeCreator("summary"),
  sup: nodeCreator("sup"),
  table: nodeCreator("table"),
  tbody: nodeCreator("tbody"),
  td: nodeCreator("td"),
  template: nodeCreator("template"),
  textarea: nodeCreator("textarea"),
  tfoot: nodeCreator("tfoot"),
  th: nodeCreator("th"),
  thead: nodeCreator("thead"),
  time: nodeCreator("time"),
  title: nodeCreator("title"),
  tr: nodeCreator("tr"),
  track: nodeCreator("track"),
  u: nodeCreator("u"),
  ul: nodeCreator("ul"),
  varNode: nodeCreator("var"),
  video: nodeCreator("video"),
  wbr: nodeCreator("wbr"),
}

