(function (_, Kotlin, $module$kotlin_react_dom, $module$kotlin_react, $module$kotlinx_html_js, $module$kotlin_react_router_dom, $module$kotlin_react_redux, $module$kotlin_extensions, $module$kotlin_redux, $module$redux) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var functionalComponent = $module$kotlin_react.react.functionalComponent_1klik0$;
  var child = $module$kotlin_react.react.child_9r8yuv$;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var LI_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var H3_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var UL_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var navLink = $module$kotlin_react_router_dom.react.router.dom.navLink_bcialx$;
  var SPAN_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var TD_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
  var TR_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
  var H2_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  var TABLE_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
  var route = $module$kotlin_react_router_dom.react.router.dom.route_9tkfd6$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var route_0 = $module$kotlin_react_router_dom.react.router.dom.route_oxctnt$;
  var switch_0 = $module$kotlin_react_router_dom.react.router.dom.switch_jg12zk$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var NAV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NAV;
  var HEADER_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEADER;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var set_defaultValue = $module$kotlin_react_dom.react.dom.set_defaultValue_q3v29f$;
  var throwCCE = Kotlin.throwCCE;
  var enumEncode = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var BUTTON_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_8bz2yq$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_react.react.RComponent;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var rConnect = $module$kotlin_react_redux.react.redux.rConnect_aavpjk$;
  var getCallableRef = Kotlin.getCallableRef;
  var invoke = $module$kotlin_react.react.invoke_adv8my$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var rConnect_0 = $module$kotlin_react_redux.react.redux.rConnect_hfg8n2$;
  var rConnect_1 = $module$kotlin_react_redux.react.redux.rConnect_yelmmk$;
  var getKClass = Kotlin.getKClass;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var get_rClass = $module$kotlin_react.react.get_rClass_zdekks$;
  var rEnhancer = $module$kotlin_redux.redux.rEnhancer_287e2$;
  var compose = $module$redux.compose;
  var createStore = $module$redux.createStore;
  var hashRouter = $module$kotlin_react_router_dom.react.router.dom.hashRouter_jg12zk$;
  var provider = $module$kotlin_react_redux.react.redux.provider_6c40e8$;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var RAction = $module$kotlin_redux.redux.RAction;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var plus = Kotlin.kotlin.collections.plus_e8164j$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var minus = Kotlin.kotlin.collections.minus_4pa84t$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  Link.prototype = Object.create(RComponent.prototype);
  Link.prototype.constructor = Link;
  VisibilityFilter.prototype = Object.create(Enum.prototype);
  VisibilityFilter.prototype.constructor = VisibilityFilter;
  function li$lambda(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function ul$lambda(closure$classes) {
    return function (it) {
      return new UL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function AnyFullProps() {
  }
  AnyFullProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyFullProps',
    interfaces: []
  };
  function fAnyFull$lambda(closure$rComponent) {
    return function ($receiver, props) {
      var $receiver_0 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0.unaryPlus_pdl1vz$(toString(props.obj.second));
      $receiver.child_2usv9w$($receiver_0.create());
      footer($receiver);
      var $receiver_0_0 = new RDOMBuilder_init(ul$lambda(null));
      var closure$rComponent_0 = closure$rComponent;
      var $receiver_1 = props.subobjs;
      var destination = ArrayList_init($receiver_1.size);
      var tmp$;
      tmp$ = $receiver_1.entries.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var tmp$_1, tmp$_2;
        var present = (tmp$_2 = (tmp$_1 = props.presents) != null ? tmp$_1.get_11rb$(item.key) : null) != null ? tmp$_2 : false;
        var cssClass = present ? 'present' : 'absent';
        var $receiver_0_1 = new RDOMBuilder_init(li$lambda(null));
        closure$rComponent_0($receiver_0_1, item.value, cssClass, props.onClick(item.key));
        tmp$_0.call(destination, $receiver_0_0.child_2usv9w$($receiver_0_1.create()));
      }
      $receiver.child_2usv9w$($receiver_0_0.create());
      return Unit;
    };
  }
  function fAnyFull(rComponent) {
    return functionalComponent(fAnyFull$lambda(rComponent));
  }
  function anyFull$lambda(closure$obj, closure$subobjs, closure$presents, closure$onClick) {
    return function ($receiver) {
      $receiver.attrs.obj = closure$obj;
      $receiver.attrs.subobjs = closure$subobjs;
      $receiver.attrs.presents = closure$presents;
      $receiver.attrs.onClick = closure$onClick;
      return Unit;
    };
  }
  function anyFull($receiver, rComponent, obj, subobjs, presents, onClick) {
    return child($receiver, withDisplayName_0('Full', fAnyFull(rComponent)), void 0, anyFull$lambda(obj, subobjs, presents, onClick));
  }
  function span$lambda(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function td$lambda(closure$classes) {
    return function (it) {
      return new TD_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function tr$lambda(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h2$lambda(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function table$lambda(closure$classes) {
    return function (it) {
      return new TABLE_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function AnyListProps() {
  }
  AnyListProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyListProps',
    interfaces: []
  };
  function fAnyList$lambda$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    return Unit;
  }
  function fAnyList$lambda$lambda$lambda$lambda$lambda$lambda(closure$rObj, closure$obj) {
    return function ($receiver) {
      closure$rObj($receiver, closure$obj.value, 'normal', fAnyList$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function fAnyList$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$(' Edit ');
    return Unit;
  }
  function fAnyList$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$props, closure$obj) {
    return function (it) {
      closure$props.remove(closure$obj.key);
      return Unit;
    };
  }
  function fAnyList$lambda(closure$name, closure$path, closure$rObj) {
    return function ($receiver, props) {
      var $receiver_0 = new RDOMBuilder_init(h2$lambda(null));
      $receiver_0.unaryPlus_pdl1vz$(closure$name);
      $receiver.child_2usv9w$($receiver_0.create());
      var $receiver_0_0 = new RDOMBuilder_init(span$lambda('fakeLink'));
      $receiver_0_0.unaryPlus_pdl1vz$('Add');
      set_onClickFunction($receiver_0_0.attrs, props.add);
      $receiver.child_2usv9w$($receiver_0_0.create());
      var $receiver_0_1 = new RDOMBuilder_init(table$lambda(null));
      var closure$path_0 = closure$path;
      var closure$rObj_0 = closure$rObj;
      var $receiver_1 = props.objs;
      var destination = ArrayList_init($receiver_1.size);
      var tmp$;
      tmp$ = $receiver_1.entries.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var $receiver_0_2 = new RDOMBuilder_init(tr$lambda(null));
        var $receiver_0_3 = new RDOMBuilder_init(td$lambda(null));
        navLink($receiver_0_3, closure$path_0 + '/' + item.key, void 0, void 0, void 0, void 0, void 0, void 0, fAnyList$lambda$lambda$lambda$lambda$lambda$lambda(closure$rObj_0, item));
        $receiver_0_2.child_2usv9w$($receiver_0_3.create());
        var $receiver_0_4 = new RDOMBuilder_init(td$lambda(null));
        navLink($receiver_0_4, closure$path_0 + '/' + item.key + '/edit', void 0, void 0, void 0, void 0, void 0, void 0, fAnyList$lambda$lambda$lambda$lambda$lambda$lambda_0);
        $receiver_0_2.child_2usv9w$($receiver_0_4.create());
        var $receiver_0_5 = new RDOMBuilder_init(td$lambda(null));
        var $receiver_0_6 = new RDOMBuilder_init(span$lambda('fakeLink'));
        $receiver_0_6.unaryPlus_pdl1vz$(' Delete');
        set_onClickFunction($receiver_0_6.attrs, fAnyList$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(props, item));
        $receiver_0_5.child_2usv9w$($receiver_0_6.create());
        $receiver_0_2.child_2usv9w$($receiver_0_5.create());
        tmp$_0.call(destination, $receiver_0_1.child_2usv9w$($receiver_0_2.create()));
      }
      $receiver.child_2usv9w$($receiver_0_1.create());
      return Unit;
    };
  }
  function fAnyList(name, path, rObj) {
    return functionalComponent(fAnyList$lambda(name, path, rObj));
  }
  function li$lambda_0(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function ul$lambda_0(closure$classes) {
    return function (it) {
      return new UL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function nav$lambda(closure$classes) {
    return function (it) {
      return new NAV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function header$lambda(closure$classes) {
    return function (it) {
      return new HEADER_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function AppProps() {
  }
  AppProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AppProps',
    interfaces: []
  };
  function RouteNumberResult() {
  }
  RouteNumberResult.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RouteNumberResult',
    interfaces: []
  };
  function fApp$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Lessons');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Students');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda(this$) {
    return function () {
      return this$.invoke_eb8iu4$(lessonListContainer, fApp$lambda$lambda$lambda$lambda);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda_0(this$) {
    return function () {
      return this$.invoke_eb8iu4$(studentListContainer, fApp$lambda$lambda$lambda$lambda_0);
    };
  }
  function fApp$lambda$lambda$lambda_1(closure$props) {
    return function (it) {
      return closure$props.lessons.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_1(closure$index, closure$lesson) {
    return function ($receiver) {
      $receiver.attrs.obj = to(closure$index, closure$lesson);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_2(this$) {
    return function (index, lesson) {
      return this$.invoke_eb8iu4$(lessonFullContainer, fApp$lambda$lambda$lambda$lambda_1(index, lesson));
    };
  }
  function fApp$lambda$lambda$lambda_3(closure$props) {
    return function (it) {
      return closure$props.students.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_2(closure$index, closure$student) {
    return function ($receiver) {
      $receiver.attrs.obj = to(closure$index, closure$student);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_4(this$) {
    return function (index, student) {
      return this$.invoke_eb8iu4$(studentFullContainer, fApp$lambda$lambda$lambda$lambda_2(index, student));
    };
  }
  function fApp$lambda$lambda$lambda_5(closure$props) {
    return function (it) {
      return closure$props.lessons.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_3(closure$index, closure$lesson) {
    return function ($receiver) {
      $receiver.attrs.lesson = to(closure$index, closure$lesson);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_6(this$) {
    return function (index, lesson) {
      return this$.invoke_eb8iu4$(lessonEditContainer, fApp$lambda$lambda$lambda$lambda_3(index, lesson));
    };
  }
  function fApp$lambda$lambda$lambda_7(closure$props) {
    return function (it) {
      return closure$props.students.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_4(closure$index, closure$student) {
    return function ($receiver) {
      $receiver.attrs.student = to(closure$index, closure$student);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_8(this$) {
    return function (index, student) {
      return this$.invoke_eb8iu4$(studentEditContainer, fApp$lambda$lambda$lambda$lambda_4(index, student));
    };
  }
  function fApp$lambda$lambda(closure$props) {
    return function ($receiver) {
      route($receiver, '/lessons', true, void 0, fApp$lambda$lambda$lambda($receiver));
      route($receiver, '/students', true, void 0, fApp$lambda$lambda$lambda_0($receiver));
      route_0($receiver, '/lessons/:number', true, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_1(closure$props), fApp$lambda$lambda$lambda_2($receiver)));
      route_0($receiver, '/students/:number', true, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_3(closure$props), fApp$lambda$lambda$lambda_4($receiver)));
      route_0($receiver, '/lessons/:number/edit', void 0, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_5(closure$props), fApp$lambda$lambda$lambda_6($receiver)));
      route_0($receiver, '/students/:number/edit', void 0, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_7(closure$props), fApp$lambda$lambda$lambda_8($receiver)));
      return Unit;
    };
  }
  function fApp$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(header$lambda(null));
    var $receiver_0_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('App');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(nav$lambda(null));
    var $receiver_0_2 = new RDOMBuilder_init(ul$lambda_0(null));
    var $receiver_0_3 = new RDOMBuilder_init(li$lambda_0(null));
    navLink($receiver_0_3, '/lessons', void 0, void 0, void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda$lambda$lambda$lambda);
    $receiver_0_2.child_2usv9w$($receiver_0_3.create());
    var $receiver_0_4 = new RDOMBuilder_init(li$lambda_0(null));
    navLink($receiver_0_4, '/students', void 0, void 0, void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda$lambda$lambda$lambda_0);
    $receiver_0_2.child_2usv9w$($receiver_0_4.create());
    $receiver_0_1.child_2usv9w$($receiver_0_2.create());
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    $receiver.child_2usv9w$($receiver_0.create());
    switch_0($receiver, fApp$lambda$lambda(props));
    return Unit;
  }
  function fApp() {
    return functionalComponent(fApp$lambda);
  }
  function renderObject$lambda(closure$selector, closure$rElement, this$renderObject) {
    return function (route_props) {
      var tmp$;
      var num = (tmp$ = toIntOrNull(route_props.match.params.number)) != null ? tmp$ : -1;
      var obj = closure$selector(num);
      var tmp$_0;
      if (obj != null)
        tmp$_0 = closure$rElement(num, obj);
      else {
        var $receiver = this$renderObject;
        var $receiver_0 = new RDOMBuilder_init(p$lambda(null));
        $receiver_0.unaryPlus_pdl1vz$('Object not found');
        tmp$_0 = $receiver.child_2usv9w$($receiver_0.create());
      }
      return tmp$_0;
    };
  }
  function renderObject($receiver, selector, rElement) {
    return renderObject$lambda(selector, rElement, $receiver);
  }
  function span$lambda_0(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function footer$lambda$lambda($receiver) {
    $receiver.attrs.filter = VisibilityFilter$SHOW_ALL_getInstance();
    $receiver.unaryPlus_pdl1vz$('All');
    return Unit;
  }
  function footer$lambda$lambda_0($receiver) {
    $receiver.attrs.filter = VisibilityFilter$SHOW_PRESENCE_getInstance();
    $receiver.unaryPlus_pdl1vz$('Presence');
    return Unit;
  }
  function footer$lambda$lambda_1($receiver) {
    $receiver.attrs.filter = VisibilityFilter$SHOW_ABSENCE_getInstance();
    $receiver.unaryPlus_pdl1vz$('Absence');
    return Unit;
  }
  function footer($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_0 = new RDOMBuilder_init(span$lambda_0(null));
    $receiver_0_0.unaryPlus_pdl1vz$('Show: ');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    $receiver_0.invoke_eb8iu4$(filterLink, footer$lambda$lambda);
    $receiver_0.invoke_eb8iu4$(filterLink, footer$lambda$lambda_0);
    $receiver_0.invoke_eb8iu4$(filterLink, footer$lambda$lambda_1);
    return $receiver.child_2usv9w$($receiver_0.create());
  }
  function span$lambda_1(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function LessonProps() {
  }
  LessonProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LessonProps',
    interfaces: []
  };
  function fLesson$lambda($receiver, it) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda_1(it.cssClass));
    $receiver_0.unaryPlus_pdl1vz$(it.lesson.name);
    set_onClickFunction($receiver_0.attrs, it.onClick);
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fLesson;
  function lesson$lambda(closure$lesson, closure$cssClass, closure$onClick) {
    return function ($receiver) {
      $receiver.attrs.lesson = closure$lesson;
      $receiver.attrs.cssClass = closure$cssClass;
      $receiver.attrs.onClick = closure$onClick;
      return Unit;
    };
  }
  function lesson($receiver, lesson, cssClass, onClick) {
    return child($receiver, withDisplayName_0('Lesson', fLesson), void 0, lesson$lambda(lesson, cssClass, onClick));
  }
  function LessonEditProps() {
  }
  LessonEditProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LessonEditProps',
    interfaces: []
  };
  function fLessonEdit$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      var tmp$;
      var inputElement = Kotlin.isType(tmp$ = document.getElementById('lessonEdit' + closure$props.lesson.first), HTMLInputElement) ? tmp$ : throwCCE();
      closure$props.onClick(new Lesson(inputElement.value));
      window.history.back();
      return Unit;
    };
  }
  function fLessonEdit$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda_1(null));
    var $receiver_0_0 = new RDOMBuilder_init(input$lambda(null, null, null, null, null));
    set_id($receiver_0_0.attrs, 'lessonEdit' + props.lesson.first);
    set_defaultValue($receiver_0_0.attrs, props.lesson.second.name);
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(button$lambda(null, null, null, null));
    $receiver_0_1.unaryPlus_pdl1vz$('Save');
    set_onClickFunction($receiver_0_1.attrs, fLessonEdit$lambda$lambda$lambda$lambda(props));
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fLessonEdit;
  function button$lambda_0(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function LinkProps() {
  }
  LinkProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinkProps',
    interfaces: []
  };
  function Link(props) {
    RComponent_init(props, this);
  }
  function Link$render$lambda$lambda(this$Link) {
    return function (it) {
      this$Link.props.onClick();
      return Unit;
    };
  }
  Link.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(button$lambda_0(null, null, null, null));
    set_onClickFunction($receiver_0.attrs, Link$render$lambda$lambda(this));
    this.children_ss14n$($receiver_0);
    $receiver.child_2usv9w$($receiver_0.create());
  };
  Link.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Link',
    interfaces: [RComponent]
  };
  function span$lambda_2(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda_0(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function button$lambda_1(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function StudentProps() {
  }
  StudentProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StudentProps',
    interfaces: []
  };
  function fStudent$lambda($receiver, it) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda_2(it.cssClass));
    $receiver_0.unaryPlus_pdl1vz$(it.student.firstname + ' ' + it.student.surname);
    set_onClickFunction($receiver_0.attrs, it.onClick);
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fStudent;
  function student$lambda(closure$student, closure$cssClass, closure$onClick) {
    return function ($receiver) {
      $receiver.attrs.student = closure$student;
      $receiver.attrs.cssClass = closure$cssClass;
      $receiver.attrs.onClick = closure$onClick;
      return Unit;
    };
  }
  function student($receiver, student, cssClass, onClick) {
    return child($receiver, withDisplayName_0('Student', fStudent), void 0, student$lambda(student, cssClass, onClick));
  }
  function StudentEditProps() {
  }
  StudentEditProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StudentEditProps',
    interfaces: []
  };
  function fStudentEdit$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      var tmp$, tmp$_0;
      var firstname = Kotlin.isType(tmp$ = document.getElementById('firstname' + closure$props.student.first), HTMLInputElement) ? tmp$ : throwCCE();
      var surname = Kotlin.isType(tmp$_0 = document.getElementById('surname' + closure$props.student.first), HTMLInputElement) ? tmp$_0 : throwCCE();
      closure$props.onClick(new Student(firstname.value, surname.value));
      window.history.back();
      return Unit;
    };
  }
  function fStudentEdit$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda_2(null));
    var $receiver_0_0 = new RDOMBuilder_init(input$lambda_0(null, null, null, null, null));
    set_id($receiver_0_0.attrs, 'firstname' + props.student.first);
    set_defaultValue($receiver_0_0.attrs, props.student.second.firstname);
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(input$lambda_0(null, null, null, null, null));
    set_id($receiver_0_1.attrs, 'surname' + props.student.first);
    set_defaultValue($receiver_0_1.attrs, props.student.second.surname);
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_2 = new RDOMBuilder_init(button$lambda_1(null, null, null, null));
    $receiver_0_2.unaryPlus_pdl1vz$('Save');
    set_onClickFunction($receiver_0_2.attrs, fStudentEdit$lambda$lambda$lambda$lambda(props));
    $receiver_0.child_2usv9w$($receiver_0_2.create());
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fStudentEdit;
  function AnyFullDispatchProps() {
  }
  AnyFullDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyFullDispatchProps',
    interfaces: []
  };
  function AnyFullStateProps() {
  }
  AnyFullStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyFullStateProps',
    interfaces: []
  };
  function AnyFullOwnProps() {
  }
  AnyFullOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyFullOwnProps',
    interfaces: []
  };
  function getVisibleObjects(objects, presents, filter) {
    switch (filter.name) {
      case 'SHOW_ALL':
        return objects;
      case 'SHOW_ABSENCE':
        var absentObj = toMutableMap(objects);
        absentObj.clear();
        if (presents != null) {
          var destination = LinkedHashMap_init();
          var tmp$;
          tmp$ = presents.entries.iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            if (!element.value) {
              destination.put_xwzc9p$(element.key, element.value);
            }
          }
          var destination_0 = ArrayList_init(destination.size);
          var tmp$_0;
          tmp$_0 = destination.entries.iterator();
          while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            var tmp$_1 = destination_0.add_11rb$;
            var key = item.key;
            var value = getValue(objects, item.key);
            absentObj.put_xwzc9p$(key, value);
            tmp$_1.call(destination_0, Unit);
          }
        }

        return absentObj;
      case 'SHOW_PRESENCE':
        var presentObj = toMutableMap(objects);
        presentObj.clear();
        if (presents != null) {
          var destination_1 = LinkedHashMap_init();
          var tmp$_2;
          tmp$_2 = presents.entries.iterator();
          while (tmp$_2.hasNext()) {
            var element_0 = tmp$_2.next();
            if (element_0.value) {
              destination_1.put_xwzc9p$(element_0.key, element_0.value);
            }
          }
          var destination_2 = ArrayList_init(destination_1.size);
          var tmp$_3;
          tmp$_3 = destination_1.entries.iterator();
          while (tmp$_3.hasNext()) {
            var item_0 = tmp$_3.next();
            var tmp$_4 = destination_2.add_11rb$;
            var key_0 = item_0.key;
            var value_0 = getValue(objects, item_0.key);
            presentObj.put_xwzc9p$(key_0, value_0);
            tmp$_4.call(destination_2, Unit);
          }
        }

        return presentObj;
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function lessonFullContainer$lambda($receiver, state, ownProps) {
    $receiver.presents = state.presents.get_11rb$(ownProps.obj.first);
    $receiver.subobjs = getVisibleObjects(state.students, $receiver.presents, state.visibilityFilter);
    return Unit;
  }
  function lessonFullContainer$lambda$lambda$lambda(closure$dispatch, closure$ownProps, closure$index) {
    return function (it) {
      closure$dispatch(new ChangePresent(closure$ownProps.obj.first, closure$index));
      return Unit;
    };
  }
  function lessonFullContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (index) {
      return lessonFullContainer$lambda$lambda$lambda(closure$dispatch, closure$ownProps, index);
    };
  }
  function lessonFullContainer$lambda_0($receiver, dispatch, ownProps) {
    $receiver.onClick = lessonFullContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var lessonFullContainer;
  function studentFullContainer$lambda($receiver, state, ownProps) {
    $receiver.subobjs = getVisibleObjects(state.lessons, presentsStudent(state, ownProps.obj.first), state.visibilityFilter);
    $receiver.presents = presentsStudent(state, ownProps.obj.first);
    return Unit;
  }
  function studentFullContainer$lambda$lambda$lambda(closure$dispatch, closure$index, closure$ownProps) {
    return function (it) {
      closure$dispatch(new ChangePresent(closure$index, closure$ownProps.obj.first));
      return Unit;
    };
  }
  function studentFullContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (index) {
      return studentFullContainer$lambda$lambda$lambda(closure$dispatch, index, closure$ownProps);
    };
  }
  function studentFullContainer$lambda_0($receiver, dispatch, ownProps) {
    $receiver.onClick = studentFullContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var studentFullContainer;
  function AnyListDispatchProps() {
  }
  AnyListDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyListDispatchProps',
    interfaces: []
  };
  function AnyListStateProps() {
  }
  AnyListStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyListStateProps',
    interfaces: []
  };
  function studentListHOC$lambda($receiver, state, f) {
    $receiver.objs = state.students;
    return Unit;
  }
  function studentListHOC$lambda$lambda(closure$dispatch) {
    return function (it) {
      closure$dispatch(new AddStudent(new Student('new', 'student')));
      return Unit;
    };
  }
  function studentListHOC$lambda$lambda_0(closure$dispatch) {
    return function (it) {
      closure$dispatch(new RemoveStudent(it));
      return Unit;
    };
  }
  function studentListHOC$lambda_0($receiver, dispatch, f) {
    $receiver.add = studentListHOC$lambda$lambda(dispatch);
    $receiver.remove = studentListHOC$lambda$lambda_0(dispatch);
    return Unit;
  }
  var studentListHOC;
  var studentListRClass;
  var studentListContainer;
  function lessonListContainer$lambda($receiver, state, f) {
    $receiver.objs = state.lessons;
    return Unit;
  }
  function lessonListContainer$lambda$lambda(closure$dispatch) {
    return function (it) {
      closure$dispatch(new AddLesson(new Lesson('new lesson')));
      return Unit;
    };
  }
  function lessonListContainer$lambda$lambda_0(closure$dispatch) {
    return function (it) {
      closure$dispatch(new RemoveLesson(it));
      return Unit;
    };
  }
  function lessonListContainer$lambda_0($receiver, dispatch, f) {
    $receiver.add = lessonListContainer$lambda$lambda(dispatch);
    $receiver.remove = lessonListContainer$lambda$lambda_0(dispatch);
    return Unit;
  }
  var lessonListContainer;
  function appContainer$lambda($receiver, state, f) {
    $receiver.lessons = state.lessons;
    $receiver.students = state.students;
    return Unit;
  }
  function appContainer$lambda_0($receiver) {
    $receiver.pure = false;
    return Unit;
  }
  var appContainer;
  function LessonEditOwnProps() {
  }
  LessonEditOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LessonEditOwnProps',
    interfaces: []
  };
  function lessonEditContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (it) {
      closure$dispatch(new ChangeLesson(closure$ownProps.lesson.first, it));
      return Unit;
    };
  }
  function lessonEditContainer$lambda($receiver, dispatch, ownProps) {
    $receiver.onClick = lessonEditContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var lessonEditContainer;
  function StudentEditOwnProps() {
  }
  StudentEditOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StudentEditOwnProps',
    interfaces: []
  };
  function studentEditContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (it) {
      closure$dispatch(new ChangeStudent(closure$ownProps.student.first, it));
      return Unit;
    };
  }
  function studentEditContainer$lambda($receiver, dispatch, ownProps) {
    $receiver.onClick = studentEditContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var studentEditContainer;
  function FilterLinkProps() {
  }
  FilterLinkProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FilterLinkProps',
    interfaces: []
  };
  function LinkStateProps() {
  }
  LinkStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinkStateProps',
    interfaces: []
  };
  function LinkDispatchProps() {
  }
  LinkDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinkDispatchProps',
    interfaces: []
  };
  function filterLink$lambda($receiver, state, ownProps) {
    $receiver.present = state.visibilityFilter === ownProps.filter;
    return Unit;
  }
  function filterLink$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function () {
      closure$dispatch(new SetVisibilityFilter(closure$ownProps.filter));
      return Unit;
    };
  }
  function filterLink$lambda_0($receiver, dispatch, ownProps) {
    $receiver.onClick = filterLink$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var filterLink;
  function Lesson(name) {
    this.name = name;
  }
  Lesson.prototype.toString = function () {
    return this.name;
  };
  Lesson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lesson',
    interfaces: []
  };
  Lesson.prototype.component1 = function () {
    return this.name;
  };
  Lesson.prototype.copy_61zpoe$ = function (name) {
    return new Lesson(name === void 0 ? this.name : name);
  };
  Lesson.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Lesson.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function lessonsList() {
    return [new Lesson('Lecture'), new Lesson('Practice'), new Lesson('Exam')];
  }
  function State(lessons, students, presents, visibilityFilter) {
    this.lessons = lessons;
    this.students = students;
    this.presents = presents;
    this.visibilityFilter = visibilityFilter;
  }
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function newId($receiver) {
    var tmp$, tmp$_0;
    var $receiver_0 = $receiver.entries;
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver_0.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      if (!iterator.hasNext()) {
        maxBy$result = maxElem;
        break maxBy$break;
      }
      var maxValue = maxElem.key;
      do {
        var e = iterator.next();
        var v = e.key;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.hasNext());
      maxBy$result = maxElem;
    }
     while (false);
    return ((tmp$_0 = (tmp$ = maxBy$result) != null ? tmp$.key : null) != null ? tmp$_0 : 0) + 1 | 0;
  }
  function presentsStudent($receiver, idStudent) {
    var $receiver_0 = $receiver.presents;
    var destination = ArrayList_init($receiver_0.size);
    var tmp$;
    tmp$ = $receiver_0.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(to(item.key, (tmp$_0 = item.value.get_11rb$(idStudent)) != null ? tmp$_0 : false));
    }
    return toMap(destination);
  }
  function initialState() {
    var $receiver = lessonsList();
    var destination = ArrayList_init($receiver.length);
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item));
    }
    var tmp$_1 = toMap(destination);
    var $receiver_0 = studentList();
    var destination_0 = ArrayList_init($receiver_0.length);
    var tmp$_2, tmp$_0_0;
    var index_0 = 0;
    for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
      var item_0 = $receiver_0[tmp$_2];
      destination_0.add_11rb$(to((tmp$_0_0 = index_0, index_0 = tmp$_0_0 + 1 | 0, tmp$_0_0), item_0));
    }
    var tmp$_3 = toMap(destination_0);
    var $receiver_1 = lessonsList();
    var destination_1 = ArrayList_init($receiver_1.length);
    var tmp$_4, tmp$_0_1;
    var index_1 = 0;
    for (tmp$_4 = 0; tmp$_4 !== $receiver_1.length; ++tmp$_4) {
      var item_1 = $receiver_1[tmp$_4];
      var tmp$_5 = destination_1.add_11rb$;
      var idLesson = (tmp$_0_1 = index_1, index_1 = tmp$_0_1 + 1 | 0, tmp$_0_1);
      var $receiver_2 = studentList();
      var destination_2 = ArrayList_init($receiver_2.length);
      var tmp$_6, tmp$_0_2;
      var index_2 = 0;
      for (tmp$_6 = 0; tmp$_6 !== $receiver_2.length; ++tmp$_6) {
        var item_2 = $receiver_2[tmp$_6];
        destination_2.add_11rb$(to((tmp$_0_2 = index_2, index_2 = tmp$_0_2 + 1 | 0, tmp$_0_2), false));
      }
      tmp$_5.call(destination_1, to(idLesson, toMap(destination_2)));
    }
    return new State(tmp$_1, tmp$_3, toMap(destination_1), VisibilityFilter$SHOW_ALL_getInstance());
  }
  function Student(firstname, surname) {
    this.firstname = firstname;
    this.surname = surname;
  }
  Student.prototype.toString = function () {
    return this.firstname + ' ' + this.surname;
  };
  Student.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Student',
    interfaces: []
  };
  Student.prototype.component1 = function () {
    return this.firstname;
  };
  Student.prototype.component2 = function () {
    return this.surname;
  };
  Student.prototype.copy_puj7f4$ = function (firstname, surname) {
    return new Student(firstname === void 0 ? this.firstname : firstname, surname === void 0 ? this.surname : surname);
  };
  Student.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.firstname) | 0;
    result = result * 31 + Kotlin.hashCode(this.surname) | 0;
    return result;
  };
  Student.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.firstname, other.firstname) && Kotlin.equals(this.surname, other.surname)))));
  };
  function studentList() {
    return [new Student('Sheldon', 'Cooper'), new Student('Leonard', 'Hofstadter'), new Student('Howard', 'Wolowitz')];
  }
  function VisibilityFilter(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function VisibilityFilter_initFields() {
    VisibilityFilter_initFields = function () {
    };
    VisibilityFilter$SHOW_ALL_instance = new VisibilityFilter('SHOW_ALL', 0);
    VisibilityFilter$SHOW_PRESENCE_instance = new VisibilityFilter('SHOW_PRESENCE', 1);
    VisibilityFilter$SHOW_ABSENCE_instance = new VisibilityFilter('SHOW_ABSENCE', 2);
  }
  var VisibilityFilter$SHOW_ALL_instance;
  function VisibilityFilter$SHOW_ALL_getInstance() {
    VisibilityFilter_initFields();
    return VisibilityFilter$SHOW_ALL_instance;
  }
  var VisibilityFilter$SHOW_PRESENCE_instance;
  function VisibilityFilter$SHOW_PRESENCE_getInstance() {
    VisibilityFilter_initFields();
    return VisibilityFilter$SHOW_PRESENCE_instance;
  }
  var VisibilityFilter$SHOW_ABSENCE_instance;
  function VisibilityFilter$SHOW_ABSENCE_getInstance() {
    VisibilityFilter_initFields();
    return VisibilityFilter$SHOW_ABSENCE_instance;
  }
  VisibilityFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VisibilityFilter',
    interfaces: [Enum]
  };
  function VisibilityFilter$values() {
    return [VisibilityFilter$SHOW_ALL_getInstance(), VisibilityFilter$SHOW_PRESENCE_getInstance(), VisibilityFilter$SHOW_ABSENCE_getInstance()];
  }
  VisibilityFilter.values = VisibilityFilter$values;
  function VisibilityFilter$valueOf(name) {
    switch (name) {
      case 'SHOW_ALL':
        return VisibilityFilter$SHOW_ALL_getInstance();
      case 'SHOW_PRESENCE':
        return VisibilityFilter$SHOW_PRESENCE_getInstance();
      case 'SHOW_ABSENCE':
        return VisibilityFilter$SHOW_ABSENCE_getInstance();
      default:throwISE('No enum constant enums.VisibilityFilter.' + name);
    }
  }
  VisibilityFilter.valueOf_61zpoe$ = VisibilityFilter$valueOf;
  function withDisplayName(name, kClass) {
    get_rClass(kClass).displayName = name;
    return kClass;
  }
  function withDisplayName_0(name, fComp) {
    var obj = {};
    obj.displayName = name;
    return Object.assign(fComp, obj);
  }
  var store;
  function main$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.invoke_eb8iu4$(appContainer, main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    hashRouter($receiver, main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda($receiver) {
    provider($receiver, store, main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function ChangePresent(lessonID, studentID) {
    this.lessonID = lessonID;
    this.studentID = studentID;
  }
  ChangePresent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangePresent',
    interfaces: [RAction]
  };
  function AddStudent(student) {
    this.student = student;
  }
  AddStudent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddStudent',
    interfaces: [RAction]
  };
  function RemoveStudent(id) {
    this.id = id;
  }
  RemoveStudent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RemoveStudent',
    interfaces: [RAction]
  };
  function ChangeStudent(id, newStudent) {
    this.id = id;
    this.newStudent = newStudent;
  }
  ChangeStudent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeStudent',
    interfaces: [RAction]
  };
  function AddLesson(lesson) {
    this.lesson = lesson;
  }
  AddLesson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddLesson',
    interfaces: [RAction]
  };
  function RemoveLesson(id) {
    this.id = id;
  }
  RemoveLesson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RemoveLesson',
    interfaces: [RAction]
  };
  function ChangeLesson(id, newLesson) {
    this.id = id;
    this.newLesson = newLesson;
  }
  ChangeLesson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeLesson',
    interfaces: [RAction]
  };
  function SetVisibilityFilter(filter) {
    this.filter = filter;
  }
  SetVisibilityFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SetVisibilityFilter',
    interfaces: [RAction]
  };
  function presentsReducer(state, action, id) {
    if (id === void 0)
      id = -1;
    if (Kotlin.isType(action, ChangePresent)) {
      var $receiver = toMutableMap(state);
      var tmp$;
      if ((tmp$ = $receiver.get_11rb$(action.lessonID)) != null) {
        var tmp$_0, tmp$_1;
        var old = (tmp$_0 = tmp$.get_11rb$(action.studentID)) != null ? tmp$_0 : false;
        var $receiver_0 = Kotlin.isType(tmp$_1 = tmp$, MutableMap) ? tmp$_1 : throwCCE();
        var key = action.studentID;
        var value = !old;
        $receiver_0.put_xwzc9p$(key, value);
      }
      return $receiver;
    }
     else if (Kotlin.isType(action, AddLesson)) {
      var $receiver_1 = first(state.values).keys;
      var result = LinkedHashMap_init_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_1, 10)), 16));
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        result.put_xwzc9p$(element, false);
      }
      return plus(state, to(id, result));
    }
     else if (Kotlin.isType(action, AddStudent)) {
      var $receiver_2 = toMutableMap(HashMap_init());
      var destination = ArrayList_init(state.size);
      var tmp$_3;
      tmp$_3 = state.entries.iterator();
      while (tmp$_3.hasNext()) {
        var item = tmp$_3.next();
        destination.add_11rb$($receiver_2.put_xwzc9p$(item.key, plus(item.value, to(id, false))));
      }
      return $receiver_2;
    }
     else if (Kotlin.isType(action, RemoveLesson))
      return minus(state, action.id);
    else if (Kotlin.isType(action, RemoveStudent)) {
      var $receiver_3 = toMutableMap(HashMap_init());
      var destination_0 = ArrayList_init(state.size);
      var tmp$_4;
      tmp$_4 = state.entries.iterator();
      while (tmp$_4.hasNext()) {
        var item_0 = tmp$_4.next();
        destination_0.add_11rb$($receiver_3.put_xwzc9p$(item_0.key, minus(item_0.value, action.id)));
      }
      return $receiver_3;
    }
     else
      return state;
  }
  function lessonsReducer(state, action, newId) {
    if (newId === void 0)
      newId = -1;
    if (Kotlin.isType(action, AddLesson))
      return plus(state, to(newId, action.lesson));
    else if (Kotlin.isType(action, RemoveLesson))
      return minus(state, action.id);
    else if (Kotlin.isType(action, ChangeLesson)) {
      var $receiver = toMutableMap(state);
      var key = action.id;
      var value = action.newLesson;
      $receiver.put_xwzc9p$(key, value);
      return $receiver;
    }
     else
      return state;
  }
  function studentsReducer(state, action, newId) {
    if (newId === void 0)
      newId = -1;
    if (Kotlin.isType(action, AddStudent))
      return plus(state, to(newId, action.student));
    else if (Kotlin.isType(action, RemoveStudent))
      return minus(state, action.id);
    else if (Kotlin.isType(action, ChangeStudent)) {
      var $receiver = toMutableMap(state);
      var key = action.id;
      var value = action.newStudent;
      $receiver.put_xwzc9p$(key, value);
      return $receiver;
    }
     else
      return state;
  }
  function rootReducer(state, action) {
    if (Kotlin.isType(action, AddLesson)) {
      var id = newId(state.lessons);
      return new State(lessonsReducer(state.lessons, action, id), studentsReducer(state.students, action), presentsReducer(state.presents, action, id), visibilityReducer(state.visibilityFilter, action));
    }
     else if (Kotlin.isType(action, AddStudent)) {
      var id_0 = newId(state.students);
      return new State(lessonsReducer(state.lessons, action), studentsReducer(state.students, action, id_0), presentsReducer(state.presents, action, id_0), visibilityReducer(state.visibilityFilter, action));
    }
     else
      return new State(lessonsReducer(state.lessons, action), studentsReducer(state.students, action), presentsReducer(state.presents, action), visibilityReducer(state.visibilityFilter, action));
  }
  function visibilityReducer(state, action) {
    if (Kotlin.isType(action, SetVisibilityFilter))
      return action.filter;
    else
      return state;
  }
  var package$component = _.component || (_.component = {});
  package$component.AnyFullProps = AnyFullProps;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  package$component.fAnyFull_ii9zx$ = fAnyFull;
  package$component.anyFull_8cpqxx$ = anyFull;
  package$component.AnyListProps = AnyListProps;
  package$component.fAnyList_fkdnln$ = fAnyList;
  package$component.AppProps = AppProps;
  package$component.RouteNumberResult = RouteNumberResult;
  package$component.fApp = fApp;
  package$component.renderObject_q6otrr$ = renderObject;
  package$component.footer_ss14n$ = footer;
  package$component.LessonProps = LessonProps;
  Object.defineProperty(package$component, 'fLesson', {
    get: function () {
      return fLesson;
    }
  });
  package$component.lesson_1srtds$ = lesson;
  package$component.LessonEditProps = LessonEditProps;
  Object.defineProperty(package$component, 'fLessonEdit', {
    get: function () {
      return fLessonEdit;
    }
  });
  package$component.LinkProps = LinkProps;
  package$component.Link = Link;
  package$component.StudentProps = StudentProps;
  Object.defineProperty(package$component, 'fStudent', {
    get: function () {
      return fStudent;
    }
  });
  package$component.student_ec9eax$ = student;
  package$component.StudentEditProps = StudentEditProps;
  Object.defineProperty(package$component, 'fStudentEdit', {
    get: function () {
      return fStudentEdit;
    }
  });
  var package$container = _.container || (_.container = {});
  package$container.AnyFullDispatchProps = AnyFullDispatchProps;
  package$container.AnyFullStateProps = AnyFullStateProps;
  package$container.AnyFullOwnProps = AnyFullOwnProps;
  Object.defineProperty(package$container, 'lessonFullContainer', {
    get: function () {
      return lessonFullContainer;
    }
  });
  Object.defineProperty(package$container, 'studentFullContainer', {
    get: function () {
      return studentFullContainer;
    }
  });
  package$container.AnyListDispatchProps = AnyListDispatchProps;
  package$container.AnyListStateProps = AnyListStateProps;
  Object.defineProperty(package$container, 'studentListHOC', {
    get: function () {
      return studentListHOC;
    }
  });
  Object.defineProperty(package$container, 'studentListRClass', {
    get: function () {
      return studentListRClass;
    }
  });
  Object.defineProperty(package$container, 'studentListContainer', {
    get: function () {
      return studentListContainer;
    }
  });
  Object.defineProperty(package$container, 'lessonListContainer', {
    get: function () {
      return lessonListContainer;
    }
  });
  Object.defineProperty(package$container, 'appContainer', {
    get: function () {
      return appContainer;
    }
  });
  package$container.LessonEditOwnProps = LessonEditOwnProps;
  Object.defineProperty(package$container, 'lessonEditContainer', {
    get: function () {
      return lessonEditContainer;
    }
  });
  package$container.StudentEditOwnProps = StudentEditOwnProps;
  Object.defineProperty(package$container, 'studentEditContainer', {
    get: function () {
      return studentEditContainer;
    }
  });
  package$container.FilterLinkProps = FilterLinkProps;
  Object.defineProperty(package$container, 'filterLink', {
    get: function () {
      return filterLink;
    }
  });
  var package$data = _.data || (_.data = {});
  package$data.Lesson = Lesson;
  package$data.lessonsList = lessonsList;
  package$data.State = State;
  package$data.newId_hx7udi$ = newId;
  package$data.presentsStudent_gyhnk4$ = presentsStudent;
  package$data.initialState = initialState;
  package$data.Student = Student;
  package$data.studentList = studentList;
  Object.defineProperty(VisibilityFilter, 'SHOW_ALL', {
    get: VisibilityFilter$SHOW_ALL_getInstance
  });
  Object.defineProperty(VisibilityFilter, 'SHOW_PRESENCE', {
    get: VisibilityFilter$SHOW_PRESENCE_getInstance
  });
  Object.defineProperty(VisibilityFilter, 'SHOW_ABSENCE', {
    get: VisibilityFilter$SHOW_ABSENCE_getInstance
  });
  var package$enums = _.enums || (_.enums = {});
  package$enums.VisibilityFilter = VisibilityFilter;
  var package$hoc = _.hoc || (_.hoc = {});
  package$hoc.withDisplayName_7s1bg$ = withDisplayName;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$hoc.withDisplayName_yqt66y$ = withDisplayName_0;
  Object.defineProperty(_, 'store', {
    get: function () {
      return store;
    }
  });
  _.main = main;
  var package$redux = _.redux || (_.redux = {});
  package$redux.ChangePresent = ChangePresent;
  package$redux.AddStudent = AddStudent;
  package$redux.RemoveStudent = RemoveStudent;
  package$redux.ChangeStudent = ChangeStudent;
  package$redux.AddLesson = AddLesson;
  package$redux.RemoveLesson = RemoveLesson;
  package$redux.ChangeLesson = ChangeLesson;
  package$redux.SetVisibilityFilter = SetVisibilityFilter;
  package$redux.presentsReducer_60zrld$ = presentsReducer;
  package$redux.lessonsReducer_rkfmcj$ = lessonsReducer;
  package$redux.studentsReducer_tcx6vg$ = studentsReducer;
  package$redux.rootReducer_mybawf$ = rootReducer;
  package$redux.visibilityReducer_uipuxk$ = visibilityReducer;
  fLesson = functionalComponent(fLesson$lambda);
  fLessonEdit = functionalComponent(fLessonEdit$lambda);
  fStudent = functionalComponent(fStudent$lambda);
  fStudentEdit = functionalComponent(fStudentEdit$lambda);
  lessonFullContainer = invoke(rConnect(lessonFullContainer$lambda, lessonFullContainer$lambda_0), withDisplayName_0('LessonFull', fAnyFull(getCallableRef('student', function ($receiver, student_0, cssClass, onClick) {
    return student($receiver, student_0, cssClass, onClick);
  }))));
  studentFullContainer = invoke(rConnect(studentFullContainer$lambda, studentFullContainer$lambda_0), withDisplayName_0('StudentFull', fAnyFull(getCallableRef('lesson', function ($receiver, lesson_0, cssClass, onClick) {
    return lesson($receiver, lesson_0, cssClass, onClick);
  }))));
  studentListHOC = rConnect(studentListHOC$lambda, studentListHOC$lambda_0);
  studentListRClass = withDisplayName_0('StudentList', fAnyList('Student', '/students', getCallableRef('student', function ($receiver, student_0, cssClass, onClick) {
    return student($receiver, student_0, cssClass, onClick);
  })));
  studentListContainer = invoke(studentListHOC, studentListRClass);
  lessonListContainer = invoke(rConnect(lessonListContainer$lambda, lessonListContainer$lambda_0), withDisplayName_0('LessonList', fAnyList('Lesson', '/lessons', getCallableRef('lesson', function ($receiver, lesson_0, cssClass, onClick) {
    return lesson($receiver, lesson_0, cssClass, onClick);
  }))));
  appContainer = invoke(rConnect_0(appContainer$lambda, appContainer$lambda_0), withDisplayName_0('MyApp', fApp()));
  lessonEditContainer = invoke(rConnect_1(lessonEditContainer$lambda), withDisplayName_0('LessonEdit', fLessonEdit));
  studentEditContainer = invoke(rConnect_1(studentEditContainer$lambda), withDisplayName_0('StudentEdit', fStudentEdit));
  filterLink = invoke(rConnect(filterLink$lambda, filterLink$lambda_0), get_js(getKClass(Link)));
  var tmp$, tmp$_0, tmp$_1, tmp$_2;
  tmp$ = getCallableRef('rootReducer', function (state, action) {
    return rootReducer(state, action);
  });
  tmp$_0 = initialState();
  tmp$_1 = rEnhancer();
  if (window.__REDUX_DEVTOOLS_EXTENSION__)
    tmp$_2 = window.__REDUX_DEVTOOLS_EXTENSION__();
  else
    tmp$_2 = function (f) {
      return f;
    };
  store = createStore(tmp$, tmp$_0, compose(tmp$_1, tmp$_2));
  main();
  Kotlin.defineModule('kotlinjs', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-react-dom'), require('kotlin-react'), require('kotlinx-html-js'), require('kotlin-react-router-dom'), require('kotlin-react-redux'), require('kotlin-extensions'), require('kotlin-redux'), require('redux')));

//# sourceMappingURL=kotlinjs.js.map
