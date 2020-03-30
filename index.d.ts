declare namespace lib {
  interface Observable<T> {
    subscribe(handler: (newVal: T) => any): void;
  }
  class SimpleObservable<T> implements Observable<T> {
    constructor(initialVal: T);
    set(newVal: T): void;
    subscribe(handler: (newVal: T) => any): void;
    value: T;
  }
  class TeardownableHTMLElement extends HTMLElement {
    teardown: () => void;
  }
  interface Thenable<T> {
    then(handler: (val: T) => any): void;
  }
  type Child = HTMLElement|string|Observable<HTMLElement|string>|Thenable<HTMLElement|string>
  function nodeCreator(nodeName: keyof HTMLElementTagNameMap): (attributes?: object|Child, ...children: Array<Child>) => TeardownableHTMLElement;
  function a(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function abbr(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function address(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function applet(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function area(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function article(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function aside(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function audio(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function b(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function base(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function basefont(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function bdi(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function bdo(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function blockquote(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function body(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function br(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function button(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function canvas(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function caption(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function cite(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function code(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function col(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function colgroup(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function data(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function datalist(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function dd(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function del(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function details(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function dfn(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function dialog(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function dir(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function div(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function dl(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function dt(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function em(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function embed(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function fieldset(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function figcaption(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function figure(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function font(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function footer(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function form(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function frame(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function frameset(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function h1(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function h2(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function h3(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function h4(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function h5(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function h6(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function head(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function header(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function hgroup(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function hr(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function html(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function i(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function img(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function input(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function ins(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function kbd(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function label(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function legend(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function li(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function link(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function main(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function map(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function mark(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function marquee(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function menu(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function meta(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function meter(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function nav(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function noscript(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function object(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function ol(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function optgroup(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function option(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function output(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function p(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function param(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function picture(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function pre(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function progress(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function q(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function rp(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function rt(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function ruby(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function s(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function samp(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function script(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function section(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function select(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function slot(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function small(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function source(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function span(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function strong(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function style(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function sub(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function summary(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function sup(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function table(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function tbody(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function td(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function template(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function textarea(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function tfoot(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function th(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function thead(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function time(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function title(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function tr(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function track(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function u(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function ul(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function varNode(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function video(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
  function wbr(attributes?: object|Child, ...children: Array<Child>): TeardownableHTMLElement;
}

export = lib