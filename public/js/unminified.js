/* eslint-disable */
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).mobiscroll = {}));
})(this, function (e) {
    "use strict";
    var t = { apiKey: "18854942", apiUrl: "https://trial.mobiscroll.com/" },
        a = function (e, t) {
            return (a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                })(e, t);
        };
    function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e;
        }
        a(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    }
    var s = function () {
        return (s =
            Object.assign ||
            function (e) {
                for (var t, a = 1, n = arguments.length; a < n; a++) for (var s in (t = arguments[a])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                return e;
            }).apply(this, arguments);
    };
    function i(e, t) {
        var a = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (a[n[s]] = e[n[s]]);
        }
        return a;
    }
    var r,
        o,
        l,
        c,
        h = (function () {
            function e() {
                (this.nr = 0), (this.keys = 1), (this.subscribers = {});
            }
            return (
                (e.prototype.subscribe = function (e) {
                    var t = this.keys++;
                    return (this.subscribers[t] = e), this.nr++, t;
                }),
                (e.prototype.unsubscribe = function (e) {
                    this.nr--, delete this.subscribers[e];
                }),
                (e.prototype.next = function (e) {
                    var t = this.subscribers;
                    for (var a in t) t.hasOwnProperty(a) && t[a](e);
                }),
                e
            );
        })(),
        d = [],
        u = !1,
        m = "undefined" != typeof window,
        _ = m && window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)"),
        p = m ? navigator.userAgent : "",
        v = m ? navigator.platform : "",
        f = m ? navigator.maxTouchPoints : 0,
        g = p && p.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
        b = p && /Safari/.test(p);
    /Android/i.test(g)
        ? ((r = "android"), (o = p.match(/Android\s+([\d\.]+)/i)), (u = !0), o && (d = o[0].replace("Android ", "").split(".")))
        : /iPhone|iPad|iPod/i.test(g) || /iPhone|iPad|iPod/i.test(v) || ("MacIntel" === v && f > 1)
        ? ((r = "ios"), (o = p.match(/OS\s+([\d\_]+)/i)), (u = !0), o && (d = o[0].replace(/_/g, ".").replace("OS ", "").split(".")))
        : /Windows Phone/i.test(g)
        ? ((r = "wp"), (u = !0))
        : /Windows|MSIE/i.test(g) && (r = "windows"),
        (l = +d[0]),
        (c = +d[1]);
    var y = {},
        x = {},
        D = {},
        T = {},
        C = new h();
    function S() {
        var e = "",
            t = "",
            a = "";
        for (var n in ((t = "android" === r ? "material" : "wp" === r || "windows" === r ? "windows" : "ios"), D)) {
            if (D[n].baseTheme === t && !1 !== D[n].auto && n !== t + "-dark") {
                e = n;
                break;
            }
            n === t ? (e = n) : a || (a = n);
        }
        return e || a;
    }
    function w(e, t, a) {
        var n = D[t];
        (D[e] = s({}, n, { auto: a, baseTheme: t })), (T.theme = S());
    }
    var k = { majorVersion: l, minorVersion: c, name: r },
        M =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>',
        E =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg>',
        N =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>',
        L =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"/></svg>',
        I = { labelStyle: "inline" };
    (D.ios = {
        Calendar: { nextIconH: N, nextIconV: E, prevIconH: M, prevIconV: L },
        Checkbox: { position: "end" },
        Datepicker: {
            clearIcon:
                '<svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 0a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm3.364 5.005a.7.7 0 00-.99 0l-2.44 2.44-2.439-2.44-.087-.074a.7.7 0 00-.903 1.064l2.44 2.439-2.44 2.44-.074.087a.7.7 0 001.064.903l2.439-2.441 2.44 2.441.087.074a.7.7 0 00.903-1.064l-2.441-2.44 2.441-2.439.074-.087a.7.7 0 00-.074-.903z" fill="currentColor" fill-rule="evenodd"/></svg>',
            display: "bottom",
        },
        Dropdown: I,
        Eventcalendar: { nextIconH: N, nextIconV: E, prevIconH: M, prevIconV: L },
        Input: I,
        Radio: { position: "end" },
        Scroller: { display: "bottom", itemHeight: 34, minWheelWidth: 55, rows: 5, scroll3d: !0 },
        SegmentedGroup: { drag: !0 },
        Textarea: I,
    }),
        w("ios-dark", "ios");
    var H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        V = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M23.12 11.12L21 9l-9 9 9 9 2.12-2.12L16.24 18z"/></svg>',
        Y = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M15 9l-2.12 2.12L19.76 18l-6.88 6.88L15 27l9-9z"/></svg>',
        P = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>',
        F = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        R = { dropdownIcon: H, inputStyle: "box", labelStyle: "floating", notch: !0, ripple: !0 };
    (D.material = {
        Button: { ripple: !0 },
        Calendar: { downIcon: H, nextIconH: Y, nextIconV: P, prevIconH: V, prevIconV: F, upIcon: O },
        Datepicker: {
            clearIcon:
                '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>',
            display: "center",
        },
        Dropdown: R,
        Eventcalendar: { colorEventList: !0, downIcon: H, nextIconH: Y, nextIconV: P, prevIconH: V, prevIconV: F, upIcon: O },
        Input: R,
        ListItem: { ripple: !0 },
        Scroller: { display: "center", rows: 3 },
        Select: { rows: 3 },
        Textarea: R,
    }),
        w("material-dark", "material");
    var A = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.22 10.78l-1.44 1.44 12.5 12.5.72.686.72-.687 12.5-12.5-1.44-1.44L16 22.564 4.22 10.78z"/></svg>',
        z = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.03 4.28l-11 11-.686.72.687.72 11 11 1.44-1.44L10.187 16l10.28-10.28-1.437-1.44z"/></svg>',
        W = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12.97 4.28l-1.44 1.44L21.814 16 11.53 26.28l1.44 1.44 11-11 .686-.72-.687-.72-11-11z"/></svg>',
        U = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 6.594l-.72.687-12.5 12.5 1.44 1.44L16 9.437l11.78 11.78 1.44-1.437-12.5-12.5-.72-.686z"/></svg>';
    (D.mobiscroll = { Calendar: { nextIconH: W, nextIconV: A, prevIconH: z, prevIconV: U }, Eventcalendar: { nextIconH: W, nextIconV: A, prevIconH: z, prevIconV: U }, Input: { notch: !0, ripple: !0 } }), w("mobiscroll-dark", "mobiscroll");
    var B = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M15 4v20.063L8.22 17.28l-1.44 1.44 8.5 8.5.72.686.72-.687 8.5-8.5-1.44-1.44L17 24.063V4h-2z"/></svg>',
        j = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 4.094l-.72.687-8.5 8.5 1.44 1.44L15 7.936V28h2V7.937l6.78 6.782 1.44-1.44-8.5-8.5-.72-.686z"/></svg>',
        K = { inputStyle: "box", labelStyle: "stacked" };
    (D.windows = {
        Calendar: { nextIconH: W, nextIconV: B, prevIconH: z, prevIconV: j },
        Checkbox: { position: "start" },
        Datepicker: {
            clearIcon:
                '<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/></svg>',
            display: "center",
        },
        Dropdown: K,
        Eventcalendar: { nextIconH: W, nextIconV: B, prevIconH: z, prevIconV: j },
        Input: K,
        Scroller: { display: "center", itemHeight: 44, minWheelWidth: 88, rows: 6 },
        Select: { rows: 6 },
        Textarea: K,
    }),
        w("windows-dark", "windows"),
        (T.theme = S());
    var J = {
            rtl: !0,
            setText: "تعيين",
            cancelText: "إلغاء",
            clearText: "مسح",
            closeText: "إغلاق",
            selectedText: "{count} المحدد",
            dateFormat: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            monthNames: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthNamesShort: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            amText: "ص",
            pmText: "م",
            timeFormat: "hh:mm A",
            nowText: "الآن",
            firstDay: 0,
            dateText: "تاريخ",
            timeText: "وقت",
            todayText: "اليوم",
            prevMonthText: "الشهر السابق",
            nextMonthText: "الشهر القادم",
            prevYearText: "السنه السابقة",
            nextYearText: "العام القادم",
            allDayText: "اليوم كله",
            noEventsText: "لا توجد احداث",
            eventText: "الحدث",
            eventsText: "أحداث",
            moreEventsText: "واحد آخر",
            moreEventsPluralText: "اثنان آخران {count}",
            rangeEndHelp: "أختر",
            rangeEndLabel: "ينتهي",
            rangeStartHelp: "أختر",
            rangeStartLabel: "يبدا",
        },
        X = {
            setText: "Задаване",
            cancelText: "Отмяна",
            clearText: "Изчистване",
            closeText: "затвори",
            selectedText: "{count} подбран",
            dateFormat: "DD.MM.YYYY",
            dateWheelFormat: "|DDD MM.DD|",
            dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
            dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
            dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
            monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
            monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
            timeFormat: "H:mm",
            nowText: "Сега",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Дата",
            timeText: "път",
            todayText: "днес",
            prevMonthText: "Предишния месец",
            nextMonthText: "Следващият месец",
            prevYearText: "Предходната година",
            nextYearText: "Следващата година",
            eventText: "Събитие",
            eventsText: "Събития",
            allDayText: "Цял ден",
            noEventsText: "Няма събития",
            moreEventsText: "Още {count}",
            rangeStartLabel: "ОТ",
            rangeEndLabel: "ДО",
            rangeStartHelp: "Избирам",
            rangeEndHelp: "Избирам",
        },
        q = {
            setText: "Acceptar",
            cancelText: "Cancel·lar",
            clearText: "Esborrar",
            closeText: "Tancar",
            selectedText: "{count} seleccionat",
            selectedPluralText: "{count} seleccionats",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
            dayNamesShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            monthNames: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
            timeFormat: "H:mm",
            nowText: "Ara",
            pmText: "pm",
            amText: "am",
            todayText: "Avui",
            firstDay: 1,
            dateText: "Data",
            timeText: "Temps",
            allDayText: "Tot el dia",
            noEventsText: "Cap esdeveniment",
            eventText: "Esdeveniments",
            eventsText: "Esdeveniments",
            moreEventsText: "{count} més",
            rangeStartLabel: "Iniciar",
            rangeEndLabel: "Final",
            rangeStartHelp: "Seleccionar",
            rangeEndHelp: "Seleccionar",
        },
        G = {
            setText: "Zadej",
            cancelText: "Storno",
            clearText: "Vymazat",
            closeText: "Zavřít",
            selectedText: "Označený: {count}",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D.M.YYYY",
            dateWheelFormat: "|DDD D. M.|",
            dayNames: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
            dayNamesShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            dayNamesMin: ["N", "P", "Ú", "S", "Č", "P", "S"],
            monthNames: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
            monthNamesShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Spr", "Zář", "Říj", "Lis", "Pro"],
            timeFormat: "H:mm",
            nowText: "Teď",
            amText: "am",
            pmText: "pm",
            todayText: "Dnes",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Čas",
            allDayText: "Celý den",
            noEventsText: "Žádné události",
            eventText: "Událostí",
            eventsText: "Události",
            moreEventsText: "{count} další",
            rangeStartLabel: "Začátek",
            rangeEndLabel: "Konec",
            rangeStartHelp: "Vybrat",
            rangeEndHelp: "Vybrat",
        },
        Z = {
            setText: "Sæt",
            cancelText: "Annuller",
            clearText: "Ryd",
            closeText: "Luk",
            selectedText: "{count} valgt",
            selectedPluralText: "{count} valgt",
            dateFormat: "DD/MM/YYY",
            dateFormatLong: "DDD. D. MMM. YYYY.",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            amText: "am",
            pmText: "pm",
            timeFormat: "HH.mm",
            nowText: "Nu",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Dato",
            timeText: "Tid",
            allDayText: "Hele dagen",
            noEventsText: "Ingen begivenheder",
            eventText: "Begivenheder",
            eventsText: "Begivenheder",
            moreEventsText: "{count} mere",
            rangeStartLabel: "Start",
            rangeEndLabel: "Slut",
            rangeStartHelp: "Vælg",
            rangeEndHelp: "Vælg",
        },
        $ = {
            setText: "OK",
            cancelText: "Abbrechen",
            clearText: "Löschen",
            closeText: "Schließen",
            selectedText: "{count} ausgewählt",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD. D. MMM. YYYY.",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["S", "M", "D", "M", "D", "F", "S"],
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            timeFormat: "HH:mm",
            nowText: "Jetzt",
            pmText: "pm",
            amText: "am",
            todayText: "Heute",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Zeit",
            allDayText: "Ganztägig",
            noEventsText: "Keine Ereignisse",
            eventText: "Ereignis",
            eventsText: "Ereignisse",
            moreEventsText: "{count} weiteres Element",
            moreEventsPluralText: "{count} weitere Elemente",
            rangeStartLabel: "Von",
            rangeEndLabel: "Bis",
            rangeStartHelp: "Auswählen",
            rangeEndHelp: "Auswählen",
        },
        Q = {
            setText: "Ορισμος",
            cancelText: "Ακυρωση",
            clearText: "Διαγραφη",
            closeText: "Κλείσιμο",
            selectedText: "{count} επιλεγμένα",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
            dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
            monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
            monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
            timeFormat: "H:mm",
            nowText: "τώρα",
            pmText: "μμ",
            amText: "πμ",
            firstDay: 1,
            dateText: "Ημερομηνία",
            timeText: "φορά",
            todayText: "Σήμερα",
            prevMonthText: "Προηγούμενο μήνα",
            nextMonthText: "Επόμενο μήνα",
            prevYearText: "Προηγούμενο έτος",
            nextYearText: "Επόμενο έτος",
            eventText: "Γεγονότα",
            eventsText: "Γεγονότα",
            allDayText: "Ολοήμερο",
            noEventsText: "Δεν υπάρχουν γεγονότα",
            moreEventsText: "{count} ακόμη",
            rangeStartLabel: "Αρχή",
            rangeEndLabel: "Τέλος",
            rangeStartHelp: "Επιλογή",
            rangeEndHelp: "Επιλογή",
        },
        ee = { dateFormat: "DD/MM/YYYY", dateWheelFormat: "|DDD D MMM|", timeFormat: "H:mm" },
        te = {
            setText: "Aceptar",
            cancelText: "Cancelar",
            clearText: "Borrar",
            closeText: "Cerrar",
            selectedText: "{count} seleccionado",
            selectedPluralText: "{count} seleccionados",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, MMM. D. YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            timeFormat: "H:mm",
            nowText: "Ahora",
            pmText: "pm",
            amText: "am",
            todayText: "Hoy",
            firstDay: 1,
            dateText: "Fecha",
            timeText: "Tiempo",
            allDayText: "Todo el día",
            noEventsText: "No hay eventos",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "{count} más",
            rangeStartLabel: "Iniciar",
            rangeEndLabel: "Final",
            rangeStartHelp: "Seleccionar",
            rangeEndHelp: "Seleccionar",
        },
        ae = void 0,
        ne = de(3),
        se = de(4),
        ie = de(7);
    function re(e, t, a) {
        return Math.max(t, Math.min(e, a));
    }
    function oe(e) {
        return Array.isArray(e);
    }
    function le(e) {
        return "string" == typeof e;
    }
    function ce(e) {
        return e === ae || null === e || "" === e;
    }
    function he(e) {
        return null !== e && e !== ae && "" + e != "false";
    }
    function de(e) {
        return Array.apply(0, Array(Math.max(0, e)));
    }
    function ue(e) {
        return e !== ae ? e + ((t = e) - parseFloat(t) >= 0 ? "px" : "") : "";
        var t;
    }
    function me() {}
    function _e(e, t) {
        void 0 === t && (t = 2);
        for (var a = e + ""; a.length < t; ) a = "0" + e;
        return a;
    }
    function pe(e) {
        return Math.round(e);
    }
    function ve(e, t) {
        return fe(e / t) * t;
    }
    function fe(e) {
        return Math.floor(e);
    }
    function ge(e, t) {
        var a, n;
        return (
            void 0 === t && (t = 100),
            function () {
                for (var s = [], i = 0; i < arguments.length; i++) s[i] = arguments[i];
                var r = +new Date();
                a && r < a + t
                    ? (clearTimeout(n),
                      (n = setTimeout(function () {
                          (a = r), e.apply(void 0, s);
                      }, t)))
                    : ((a = r), e.apply(void 0, s));
            }
        );
    }
    function be(e, t) {
        var a;
        return (
            void 0 === t && (t = 100),
            function () {
                for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
                clearTimeout(a),
                    (a = setTimeout(function () {
                        e.apply(void 0, n);
                    }, t));
            }
        );
    }
    function ye(e, t) {
        if (e === t) return !0;
        if ((e && !t) || (t && !e)) return !1;
        if (e.length !== t.length) return !1;
        for (var a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
        return !0;
    }
    de(24);
    var xe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        De = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    function Te(e, t, a) {
        var n,
            s = e - 1600,
            i = t - 1,
            r = a - 1,
            o = 365 * s + fe((s + 3) / 4) - fe((s + 99) / 100) + fe((s + 399) / 400);
        for (n = 0; n < i; ++n) o += xe[n];
        i > 1 && ((s % 4 == 0 && s % 100 != 0) || s % 400 == 0) && ++o;
        var l = (o += r) - 79,
            c = 979 + 33 * fe(l / 12053) + 4 * fe((l %= 12053) / 1461);
        for ((l %= 1461) >= 366 && ((c += fe((l - 1) / 365)), (l = (l - 1) % 365)), n = 0; n < 11 && l >= De[n]; ++n) l -= De[n];
        return [c, n + 1, l + 1];
    }
    var Ce = {
            getYear: function (e) {
                return Te(e.getFullYear(), e.getMonth() + 1, e.getDate())[0];
            },
            getMonth: function (e) {
                return --Te(e.getFullYear(), e.getMonth() + 1, e.getDate())[1];
            },
            getDay: function (e) {
                return Te(e.getFullYear(), e.getMonth() + 1, e.getDate())[2];
            },
            getDate: function (e, t, a, n, s, i, r) {
                t < 0 && ((e += fe(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += fe(t / 12)), (t %= 12));
                var o = (function (e, t, a) {
                    var n,
                        s = e - 979,
                        i = t - 1,
                        r = a - 1,
                        o = 365 * s + 8 * fe(s / 33) + fe(((s % 33) + 3) / 4);
                    for (n = 0; n < i; ++n) o += De[n];
                    var l = (o += r) + 79,
                        c = 1600 + 400 * fe(l / 146097),
                        h = !0;
                    for (
                        (l %= 146097) >= 36525 && ((c += 100 * fe(--l / 36524)), (l %= 36524) >= 365 ? l++ : (h = !1)), c += 4 * fe(l / 1461), (l %= 1461) >= 366 && ((h = !1), (c += fe(--l / 365)), (l %= 365)), n = 0;
                        l >= xe[n] + (1 === n && h ? 1 : 0);
                        n++
                    )
                        l -= xe[n] + (1 === n && h ? 1 : 0);
                    return [c, n + 1, l + 1];
                })(e, +t + 1, a);
                return new Date(o[0], o[1] - 1, o[2], n || 0, s || 0, i || 0, r || 0);
            },
            getMaxDayOfMonth: function (e, t) {
                var a,
                    n,
                    s,
                    i = 31;
                for (
                    t < 0 && ((e += fe(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += fe(t / 12)), (t %= 12));
                    !1 == ((n = t + 1), (s = i), !((a = e) < 0 || a > 32767 || n < 1 || n > 12 || s < 1 || s > De[n - 1] + (12 === n && ((a - 979) % 33) % 4 == 0 ? 1 : 0)));

                )
                    i--;
                return i;
            },
        },
        Se = {
            setText: "تاييد",
            cancelText: "انصراف",
            clearText: "واضح ",
            closeText: "نزدیک",
            selectedText: "{count} منتخب",
            rtl: !0,
            calendarSystem: Ce,
            dateFormat: "YYYY/MM/DD",
            dateWheelFormat: "|DDDD MMM D|",
            dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
            dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            monthNames: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            monthNamesShort: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            timeFormat: "HH:mm",
            timeWheels: "mmHH",
            nowText: "اکنون",
            amText: "ب",
            pmText: "ص",
            todayText: "امروز",
            firstDay: 6,
            dateText: "تاریخ ",
            timeText: "زمان ",
            allDayText: "تمام روز",
            noEventsText: "هیچ رویداد",
            eventText: "رویداد",
            eventsText: "رویدادها",
            moreEventsText: "{count} مورد دیگر",
            rangeStartLabel: "شروع ",
            rangeEndLabel: "پایان",
            rangeStartHelp: "انتخاب کنید",
            rangeEndHelp: "انتخاب کنید",
        },
        we = {
            setText: "Aseta",
            cancelText: "Peruuta",
            clearText: "Tyhjennä",
            closeText: "Sulje",
            selectedText: "{count} valita",
            dateFormat: "D. MMMM YYYY",
            dateFormatLong: "DDD, D. MMMM, YYYY",
            dateWheelFormat: "|DDD D. M.|",
            dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviiko", "Torstai", "Perjantai", "Lauantai"],
            dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            dayNamesMin: ["S", "M", "T", "K", "T", "P", "L"],
            monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
            monthNamesShort: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
            timeFormat: "H:mm",
            nowText: "Nyt",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Päiväys",
            timeText: "Aika",
            todayText: "Tänään",
            prevMonthText: "Edellinen kuukausi",
            nextMonthText: "Ensi kuussa",
            prevYearText: "Edellinen vuosi",
            nextYearText: "Ensi vuosi",
            eventText: "Tapahtumia",
            eventsText: "Tapahtumia",
            allDayText: "Koko päivä",
            noEventsText: "Ei tapahtumia",
            moreEventsText: "{count} muu",
            moreEventsPluralText: "{count} muuta",
            rangeStartLabel: "Alkaa",
            rangeEndLabel: "Päättyy",
            rangeStartHelp: "Valitse",
            rangeEndHelp: "Valitse",
        },
        ke = {
            setText: "Terminer",
            cancelText: "Annuler",
            clearText: "Effacer",
            closeText: "Fermer",
            selectedText: "{count} sélectionné",
            selectedPluralText: "{count} sélectionnés",
            dateFormat: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
            timeFormat: "HH:mm",
            nowText: "Maintenant",
            pmText: "pm",
            amText: "am",
            todayText: "Aujourd'hui",
            firstDay: 1,
            dateText: "Date",
            timeText: "Heure",
            allDayText: "Toute la journée",
            noEventsText: "Aucun événement",
            eventText: "Événement",
            eventsText: "Événements",
            moreEventsText: "{count} autre",
            moreEventsPluralText: "{count} autres",
            rangeStartLabel: "Démarrer",
            rangeEndLabel: "Fin",
            rangeStartHelp: "Choisir",
            rangeEndHelp: "Choisir",
        },
        Me = {
            rtl: !0,
            setText: "שמירה",
            cancelText: "ביטול",
            clearText: "נקה",
            closeText: "סגירה",
            selectedText: "{count} נבחר",
            selectedPluralText: "{count} נבחרו",
            dateFormat: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
            dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
            dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
            monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
            monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
            amText: "am",
            pmText: "pm",
            timeFormat: "H:mm",
            timeWheels: "mmH",
            nowText: "עכשיו",
            firstDay: 0,
            dateText: "תאריך",
            timeText: "זמן",
            todayText: "היום",
            allDayText: "כל היום",
            noEventsText: "אין אירועים",
            eventText: "מִקרֶה",
            eventsText: "מִקרֶה",
            moreEventsText: "אירוע אחד נוסף",
            moreEventsPluralText: "{count} אירועים נוספים",
            rangeStartLabel: "התחלה",
            rangeEndLabel: "סיום",
            rangeStartHelp: "בחר",
            rangeEndHelp: "בחר",
        },
        Ee = {
            setText: "सैट करें",
            cancelText: "रद्द करें",
            clearText: "साफ़ को",
            closeText: "बंद",
            selectedText: "{count} चयनित",
            dateFormat: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
            dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
            monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
            timeFormat: "H:mm",
            nowText: "अब",
            pmText: "अपराह्न",
            amText: "पूर्वाह्न",
            firstDay: 1,
            dateText: "तिथि",
            timeText: "समय",
            todayText: "आज",
            prevMonthText: "पिछ्ला महिना",
            nextMonthText: "अगले महीने",
            prevYearText: "पिछला साल",
            nextYearText: "अगले वर्ष",
            eventText: "इवेट३",
            eventsText: "इवेट३",
            allDayText: "पूरे दिन",
            noEventsText: "Ei tapahtumia",
            moreEventsText: "{count} और",
            rangeStartLabel: "से",
            rangeEndLabel: "तक",
            rangeStartHelp: "चुनें",
            rangeEndHelp: "चुनें",
        },
        Ne = {
            setText: "Postavi",
            cancelText: "Izlaz",
            clearText: "Izbriši",
            closeText: "Zatvori",
            selectedText: "{count} odabran",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D. MMM. YYYY.",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
            monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
            timeFormat: "H:mm",
            nowText: "Sada",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Vrijeme",
            todayText: "Danas",
            prevMonthText: "Prethodni mjesec",
            nextMonthText: "Sljedeći mjesec",
            prevYearText: "Prethodni godina",
            nextYearText: "Slijedeće godine",
            eventText: "Događaj",
            eventsText: "događaja",
            allDayText: "Cijeli dan",
            noEventsText: "Bez događaja",
            moreEventsText: "Još {count}",
            rangeStartLabel: "Počinje",
            rangeEndLabel: "Završava",
            rangeStartHelp: "Odaberite",
            rangeEndHelp: "Odaberite",
        },
        Le = {
            setText: "OK",
            cancelText: "Mégse",
            clearText: "Törlés",
            closeText: "Bezár",
            selectedText: "{count} kiválasztva",
            dateFormat: "YYYY.MM.DD.",
            dateFormatLong: "YYYY. MMM. D., DDD",
            dateWheelFormat: "|MMM. D. DDD|",
            dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
            dayNamesShort: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"],
            dayNamesMin: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
            monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            timeFormat: "H:mm",
            nowText: "Most",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Dátum",
            timeText: "Idő",
            todayText: "Ma",
            prevMonthText: "Előző hónap",
            nextMonthText: "Következő hónap",
            prevYearText: "Előző év",
            nextYearText: "Következő év",
            eventText: "esemény",
            eventsText: "esemény",
            allDayText: "Egész nap",
            noEventsText: "Nincs esemény",
            moreEventsText: "{count} további",
            rangeStartLabel: "Eleje",
            rangeEndLabel: "Vége",
            rangeStartHelp: "Válasszon",
            rangeEndHelp: "Válasszon",
        },
        Ie = {
            setText: "OK",
            cancelText: "Annulla",
            clearText: "Chiarire",
            closeText: "Chiudere",
            selectedText: "{count} selezionato",
            selectedPluralText: "{count} selezionati",
            dateFormat: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
            dayNamesShort: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
            dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
            monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            timeFormat: "HH:mm",
            nowText: "Ora",
            pmText: "pm",
            amText: "am",
            todayText: "Oggi",
            firstDay: 1,
            dateText: "Data",
            timeText: "Volta",
            allDayText: "Tutto il giorno",
            noEventsText: "Nessun evento",
            eventText: "Evento",
            eventsText: "Eventi",
            moreEventsText: "{count} altro",
            moreEventsPluralText: "altri {count}",
            rangeStartLabel: "Inizio",
            rangeEndLabel: "Fine",
            rangeStartHelp: "Scegli",
            rangeEndHelp: "Scegli",
        },
        He = {
            setText: "セット",
            cancelText: "キャンセル",
            clearText: "クリア",
            closeText: "クローズ",
            selectedText: "{count} 選択",
            dateFormat: "YYYY年MM月DD日",
            dateWheelFormat: "|M月D日 DDD|",
            dayNames: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            timeFormat: "H:mm",
            nowText: "今",
            pmText: "午後",
            amText: "午前",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            todayText: "今日",
            dateText: "日付",
            timeText: "時間",
            allDayText: "終日",
            noEventsText: "イベントはありません",
            eventText: "イベント",
            eventsText: "イベント",
            moreEventsText: "他 {count} 件",
            rangeStartLabel: "開始",
            rangeEndLabel: "終わり",
            rangeStartHelp: "選択",
            rangeEndHelp: "選択",
        },
        Oe = {
            setText: "설정",
            cancelText: "취소",
            clearText: "삭제",
            closeText: "닫기",
            selectedText: "{count} 선택된",
            dateFormat: "YYYY년MM월DD일",
            dateWheelFormat: "|M월 D일 DDD|",
            dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            timeFormat: "H:mm",
            nowText: "지금",
            pmText: "오후",
            amText: "오전",
            yearSuffix: "년",
            monthSuffix: "월",
            daySuffix: "일",
            firstDay: 0,
            dateText: "날짜",
            timeText: "시간",
            todayText: "오늘",
            prevMonthText: "이전 달",
            nextMonthText: "다음 달",
            prevYearText: "이전 년",
            nextYearText: "다음 년",
            eventText: "이벤트",
            eventsText: "이벤트",
            allDayText: "종일",
            noEventsText: "이벤트 없음",
            moreEventsText: "{count}개 더보기",
            rangeStartLabel: "시작",
            rangeEndLabel: "종료",
            rangeStartHelp: "선택",
            rangeEndHelp: "선택",
        },
        Ve = {
            setText: "OK",
            cancelText: "Atšaukti",
            clearText: "Išvalyti",
            closeText: "Uždaryti",
            selectedText: "Pasirinktas {count}",
            selectedPluralText: "Pasirinkti {count}",
            dateFormat: "YYYY-MM-DD",
            dateWheelFormat: "|MM-DD DDD|",
            dayNames: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
            dayNamesShort: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
            dayNamesMin: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
            monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
            monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gruo"],
            amText: "am",
            pmText: "pm",
            timeFormat: "HH:mm",
            nowText: "Dabar",
            todayText: "Šiandien",
            firstDay: 1,
            dateText: "Data",
            timeText: "Laikas",
            allDayText: "Visą dieną",
            noEventsText: "Nėra įvykių",
            eventText: "Įvykių",
            eventsText: "Įvykiai",
            moreEventsText: "Dar {count}",
            rangeStartLabel: "Nuo",
            rangeEndLabel: "Iki",
            rangeStartHelp: "Pasirinkti",
            rangeEndHelp: "Pasirinkti",
        },
        Ye = {
            setText: "Instellen",
            cancelText: "Annuleren",
            clearText: "Leegmaken",
            closeText: "Sluiten",
            selectedText: "{count} gekozen",
            dateFormat: "DD-MM-YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
            dayNamesShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            dayNamesMin: ["z", "m", "d", "w", "d", "v", "z"],
            monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            timeFormat: "HH:mm",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            todayText: "Vandaag",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Tijd",
            allDayText: "Hele dag",
            noEventsText: "Geen activiteiten",
            eventText: "Activiteit",
            eventsText: "Activiteiten",
            moreEventsText: "nog {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Einde",
            rangeStartHelp: "Kies",
            rangeEndHelp: "Kies",
        },
        Pe = {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Tømme",
            closeText: "Lukk",
            selectedText: "{count} valgt",
            dateFormat: "DD.MM.YYY",
            dateFormatLong: "DDD. D. MMM. YYYY",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
            timeFormat: "HH:mm",
            nowText: "Nå",
            pmText: "pm",
            amText: "am",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Dato",
            timeText: "Tid",
            allDayText: "Hele dagen",
            noEventsText: "Ingen hendelser",
            eventText: "Hendelse",
            eventsText: "Hendelser",
            moreEventsText: "{count} mere",
            rangeStartLabel: "Start",
            rangeEndLabel: "End",
            rangeStartHelp: "Velg",
            rangeEndHelp: "Velg",
        },
        Fe = {
            setText: "Zestaw",
            cancelText: "Anuluj",
            clearText: "Oczyścić",
            closeText: "Zakończenie",
            selectedText: "Wybór: {count}",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "DDD, D.MM.YYYY",
            dateWheelFormat: "|DDD D.MM|",
            dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            dayNamesShort: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
            dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
            monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
            monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
            timeFormat: "HH:mm",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            todayText: "Dzisiaj",
            firstDay: 1,
            dateText: "Data",
            timeText: "Czas",
            allDayText: "Cały dzień",
            noEventsText: "Brak wydarzeń",
            eventText: "Wydarzeń",
            eventsText: "Wydarzenia",
            moreEventsText: "Jeszcze {count}",
            rangeStartLabel: "Rozpoczęcie",
            rangeEndLabel: "Koniec",
            rangeStartHelp: "Wybierz",
            rangeEndHelp: "Wybierz",
        },
        Re = {
            setText: "Seleccionar",
            cancelText: "Cancelar",
            clearText: "Claro",
            closeText: "Fechar",
            selectedText: "{count} selecionado",
            selectedPluralText: "{count} selecionados",
            dateFormat: "DD-MM-YYYY",
            dateFormatLong: "DDD, D MMM, YYYY",
            dateWheelFormat: "|DDD D de MMM|",
            dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            timeFormat: "HH:mm",
            nowText: "Actualizar",
            pmText: "pm",
            amText: "am",
            todayText: "Hoy",
            firstDay: 1,
            dateText: "Data",
            timeText: "Tempo",
            allDayText: "Todo o dia",
            noEventsText: "Nenhum evento",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "Mais {count}",
            rangeStartLabel: "Início",
            rangeEndLabel: "Fim",
            rangeStartHelp: "Escolha",
            rangeEndHelp: "Escolha",
        },
        Ae = s({}, Re, { setText: "Selecionar", dateFormat: "DD/MM/YYYY", nowText: "Agora", todayText: "Hoje", allDayText: "Dia inteiro" }),
        ze = {
            setText: "Setare",
            cancelText: "Anulare",
            clearText: "Ştergere",
            closeText: "Închidere",
            selectedText: "{count} selectat",
            selectedPluralText: "{count} selectate",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD., D MMM YYYY",
            dateWheelFormat: "|DDD. D MMM|",
            dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
            dayNamesShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
            monthNamesShort: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iun.", "Iul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
            timeFormat: "HH:mm",
            nowText: "Acum",
            amText: "am",
            pmText: "pm",
            todayText: "Astăzi",
            prevMonthText: "Luna anterioară",
            nextMonthText: "Luna următoare",
            prevYearText: "Anul anterior",
            nextYearText: "Anul următor",
            eventText: "Eveniment",
            eventsText: "Evenimente",
            allDayText: "Toată ziua",
            noEventsText: "Niciun eveniment",
            moreEventsText: "Încă unul",
            moreEventsPluralText: "Încă {count}",
            firstDay: 1,
            dateText: "Data",
            timeText: "Ora",
            rangeStartLabel: "Start",
            rangeEndLabel: "Final",
            rangeStartHelp: "Selectare",
            rangeEndHelp: "Selectare",
        },
        We = {
            setText: "Установить",
            cancelText: "Отмена",
            clearText: "Очистить",
            closeText: "Закрыть",
            selectedText: "{count} Выбрать",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            timeFormat: "HH:mm",
            nowText: "Сейчас",
            amText: "am",
            pmText: "pm",
            todayText: "Cегодня",
            firstDay: 1,
            dateText: "Дата",
            timeText: "Время",
            allDayText: "Весь день",
            noEventsText: "Нет событий",
            eventText: "Мероприятия",
            eventsText: "Мероприятия",
            moreEventsText: "Ещё {count}",
            rangeStartLabel: "Начало",
            rangeEndLabel: "Конец",
            rangeStartHelp: "выбирать",
            rangeEndHelp: "выбирать",
        },
        Ue = s({}, We, { cancelText: "Отменить", clearText: "Очиститьr", selectedText: "{count} Вібрать", monthNamesShort: ["Янв.", "Февр.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."] }),
        Be = {
            setText: "Zadaj",
            cancelText: "Zrušiť",
            clearText: "Vymazať",
            closeText: "Zavrieť",
            selectedText: "Označený: {count}",
            dateFormat: "D.M.YYYY",
            dateFormatLong: "DDD D. MMM YYYY",
            dateWheelFormat: "|DDD D. MMM|",
            dayNames: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
            dayNamesShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
            dayNamesMin: ["N", "P", "U", "S", "Š", "P", "S"],
            monthNames: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "H:mm",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            todayText: "Dnes",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Čas",
            allDayText: "Celý deň",
            noEventsText: "Žiadne udalosti",
            eventText: "Udalostí",
            eventsText: "Udalosti",
            moreEventsText: "{count} ďalšia",
            moreEventsPluralText: "{count} ďalšie",
            rangeStartLabel: "Začiatok",
            rangeEndLabel: "Koniec",
            rangeStartHelp: "Vybrať",
            rangeEndHelp: "Vybrať",
        },
        je = {
            setText: "Постави",
            cancelText: "Откажи",
            clearText: "Обриши",
            selectedText: "{count} изабрана",
            dateFormat: "DD.MM.YYYY",
            dateWheelFormat: "|DDD D. MMM|",
            dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
            dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
            dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
            monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
            monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
            timeFormat: "HH:mm",
            nowText: "сада",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Датум",
            timeText: "време",
            todayText: "Данас",
            prevMonthText: "Претходни мјесец",
            nextMonthText: "Следећег месеца",
            prevYearText: "Претходна године",
            nextYearText: "Следеће године",
            closeText: "Затвори",
            eventText: "Догађај",
            eventsText: "Догађаји",
            allDayText: "Цео дан",
            noEventsText: "Нема догађаја",
            moreEventsText: "Још {count}",
            rangeStartLabel: "Од",
            rangeEndLabel: "До",
            rangeStartHelp: "Изаберите",
            rangeEndHelp: "Изаберите",
        },
        Ke = {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Klara",
            closeText: "Stäng",
            selectedText: "{count} vald",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "DDD D MMM. YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
            dayNamesShort: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "HH:mm",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Tid",
            allDayText: "Heldag",
            noEventsText: "Inga aktiviteter",
            eventText: "Händelse",
            eventsText: "Händelser",
            moreEventsText: "{count} till",
            rangeStartLabel: "Start",
            rangeEndLabel: "Slut",
            rangeStartHelp: "Välj",
            rangeEndHelp: "Välj",
        },
        Je = {
            setText: "ตั้งค่า",
            cancelText: "ยกเลิก",
            clearText: "ล้าง",
            closeText: "ปิด",
            selectedText: "{count} เลือก",
            dateFormat: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
            dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
            monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
            timeFormat: "HH:mm",
            nowText: "ตอนนี้",
            pmText: "pm",
            amText: "am",
            firstDay: 0,
            dateText: "วัน",
            timeText: "เวลา",
            todayText: "วันนี้",
            prevMonthText: "เดือนก่อนหน้า",
            nextMonthText: "เดือนถัดไป",
            prevYearText: "ปีก่อนหน้า",
            nextYearText: "ปีถัดไป",
            eventText: "เหตุการณ์",
            eventsText: "เหตุการณ์",
            allDayText: "ตลอดวัน",
            noEventsText: "ไม่มีกิจกรรม",
            moreEventsText: "อีก {count} กิจกรรม",
            rangeStartLabel: "จาก",
            rangeEndLabel: "ถึง",
            rangeStartHelp: "เลือก",
            rangeEndHelp: "เลือก",
        },
        Xe = {
            setText: "Seç",
            cancelText: "İptal",
            clearText: "Temizleyin",
            closeText: "Kapatmak",
            selectedText: "{count} seçilmiş",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "D MMMM DDD, YYYY",
            dateWheelFormat: "|D MMM DDD|",
            dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
            dayNamesMin: ["P", "P", "S", "Ç", "P", "C", "C"],
            monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
            monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            timeFormat: "HH:mm",
            nowText: "Şimdi",
            pmText: "pm",
            amText: "am",
            todayText: "Bugün",
            firstDay: 1,
            dateText: "Tarih",
            timeText: "Zaman",
            allDayText: "Tüm gün",
            noEventsText: "Etkinlik Yok",
            eventText: "Etkinlik",
            eventsText: "Etkinlikler",
            moreEventsText: "{count} tane daha",
            rangeStartLabel: "Başla",
            rangeEndLabel: "Son",
            rangeStartHelp: "Seç",
            rangeEndHelp: "Seç",
        },
        qe = {
            setText: "встановити",
            cancelText: "відміна",
            clearText: "очистити",
            closeText: "Закрити",
            selectedText: "{count} вибрані",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D MMM. YYYY",
            dateWheelFormat: "|DDD D MMM.|",
            dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
            dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
            timeFormat: "H:mm",
            nowText: "Зараз",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "дата",
            timeText: "Час",
            todayText: "Сьогодні",
            prevMonthText: "Попередній місяць",
            nextMonthText: "Наступного місяця",
            prevYearText: "Попередній рік",
            nextYearText: "Наступного року",
            eventText: "подія",
            eventsText: "події",
            allDayText: "Увесь день",
            noEventsText: "Жодної події",
            moreEventsText: "та ще {count}",
            rangeStartLabel: "від",
            rangeEndLabel: "кінець",
            rangeEndHelp: "Обрати",
            rangeStartHelp: "Обрати",
        },
        Ge = {
            setText: "Đặt",
            cancelText: "Hủy bò",
            clearText: "Xóa",
            closeText: "Đóng",
            selectedText: "{count} chọn",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD D, MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
            dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
            monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            timeFormat: "H:mm",
            nowText: "Bây giờ",
            pmText: "pm",
            amText: "am",
            firstDay: 0,
            dateText: "Ngày",
            timeText: "Hồi",
            todayText: "Hôm nay",
            prevMonthText: "Tháng trước",
            nextMonthText: "Tháng tới",
            prevYearText: "Măm trước",
            nextYearText: "Năm tới",
            eventText: "Sự kiện",
            eventsText: "Sự kiện",
            allDayText: "Cả ngày",
            noEventsText: "Không có sự kiện",
            moreEventsText: "{count} thẻ khác",
            rangeStartLabel: "Từ",
            rangeEndLabel: "Tới",
            rangeStartHelp: "Chọn",
            rangeEndHelp: "Chọn",
        },
        Ze = {
            setText: "确定",
            cancelText: "取消",
            clearText: "明确",
            closeText: "关闭",
            selectedText: "{count} 选",
            dateFormat: "YYYY年M月D日",
            dateWheelFormat: "|M月D日 DDD|",
            dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            timeFormat: "H:mm",
            nowText: "当前",
            pmText: "下午",
            amText: "上午",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            todayText: "今天",
            dateText: "日",
            timeText: "时间",
            allDayText: "全天",
            noEventsText: "无事件",
            eventText: "活动",
            eventsText: "活动",
            moreEventsText: "他 {count} 件",
            rangeStartLabel: "开始时间",
            rangeEndLabel: "结束时间",
            rangeStartHelp: "选取",
            rangeEndHelp: "选取",
        };
    function $e(e) {
        return e < -1e-7 ? Math.ceil(e - 1e-7) : Math.floor(e + 1e-7);
    }
    function Qe(e, t, a) {
        var n,
            s,
            i,
            r,
            o = new Array(0, 0, 0);
        return (
            (n =
                e > 1582 || (1582 === e && t > 10) || (1582 === e && 10 === t && a > 14)
                    ? $e((1461 * (e + 4800 + $e((t - 14) / 12))) / 4) + $e((367 * (t - 2 - 12 * $e((t - 14) / 12))) / 12) - $e((3 * $e((e + 4900 + $e((t - 14) / 12)) / 100)) / 4) + a - 32075
                    : 367 * e - $e((7 * (e + 5001 + $e((t - 9) / 7))) / 4) + $e((275 * t) / 9) + a + 1729777),
            (r = $e(((s = n - 1948440 + 10632) - 1) / 10631)),
            (i = $e((10985 - (s = s - 10631 * r + 354)) / 5316) * $e((50 * s) / 17719) + $e(s / 5670) * $e((43 * s) / 15238)),
            (s = s - $e((30 - i) / 15) * $e((17719 * i) / 50) - $e(i / 16) * $e((15238 * i) / 43) + 29),
            (t = $e((24 * s) / 709)),
            (a = s - $e((709 * t) / 24)),
            (e = 30 * r + i - 30),
            (o[2] = a),
            (o[1] = t),
            (o[0] = e),
            o
        );
    }
    var et = {
            getYear: function (e) {
                return Qe(e.getFullYear(), e.getMonth() + 1, e.getDate())[0];
            },
            getMonth: function (e) {
                return --Qe(e.getFullYear(), e.getMonth() + 1, e.getDate())[1];
            },
            getDay: function (e) {
                return Qe(e.getFullYear(), e.getMonth() + 1, e.getDate())[2];
            },
            getDate: function (e, t, a, n, s, i, r) {
                t < 0 && ((e += Math.floor(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Math.floor(t / 12)), (t %= 12));
                var o = (function (e, t, a) {
                    var n,
                        s,
                        i,
                        r,
                        o,
                        l = new Array(3),
                        c = $e((11 * e + 3) / 30) + 354 * e + 30 * t - $e((t - 1) / 2) + a + 1948440 - 385;
                    return (
                        c > 2299160
                            ? ((i = $e((4 * (n = c + 68569)) / 146097)),
                              (n -= $e((146097 * i + 3) / 4)),
                              (r = $e((4e3 * (n + 1)) / 1461001)),
                              (n = n - $e((1461 * r) / 4) + 31),
                              (s = $e((80 * n) / 2447)),
                              (a = n - $e((2447 * s) / 80)),
                              (t = s + 2 - 12 * (n = $e(s / 11))),
                              (e = 100 * (i - 49) + r + n))
                            : ((o = $e(((s = c + 1402) - 1) / 1461)),
                              (i = $e(((n = s - 1461 * o) - 1) / 365) - $e(n / 1461)),
                              (s = $e((80 * (r = n - 365 * i + 30)) / 2447)),
                              (a = r - $e((2447 * s) / 80)),
                              (t = s + 2 - 12 * (r = $e(s / 11))),
                              (e = 4 * o + i + r - 4716)),
                        (l[2] = a),
                        (l[1] = t),
                        (l[0] = e),
                        l
                    );
                })(e, +t + 1, a);
                return new Date(o[0], o[1] - 1, o[2], n || 0, s || 0, i || 0, r || 0);
            },
            getMaxDayOfMonth: function (e, t) {
                t < 0 && ((e += Math.floor(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Math.floor(t / 12)), (t %= 12));
                return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29][t] + (11 === t && (11 * e + 14) % 30 < 11 ? 1 : 0);
            },
        },
        tt = {},
        at = {
            ar: J,
            bg: X,
            ca: q,
            cs: G,
            da: Z,
            de: $,
            el: Q,
            en: tt,
            "en-GB": ee,
            es: te,
            fa: Se,
            fi: we,
            fr: ke,
            he: Me,
            hi: Ee,
            hr: Ne,
            hu: Le,
            it: Ie,
            ja: He,
            ko: Oe,
            lt: Ve,
            nl: Ye,
            no: Pe,
            pl: Fe,
            "pt-BR": Ae,
            "pt-PT": Re,
            ro: ze,
            ru: We,
            "ru-UA": Ue,
            sk: Be,
            sr: je,
            sv: Ke,
            th: Je,
            tr: Xe,
            ua: qe,
            vi: Ge,
            zh: Ze,
        },
        nt = m ? document : ae,
        st = m ? window : ae,
        it = ["Webkit", "Moz"],
        rt = nt && nt.createElement("div").style,
        ot = nt && nt.createElement("canvas"),
        lt = ot && ot.getContext("2d"),
        ct = st && st.CSS,
        ht = {},
        dt =
            (st && st.requestAnimationFrame) ||
            function (e) {
                return setTimeout(e, 20);
            },
        ut =
            (st && st.cancelAnimationFrame) ||
            function (e) {
                clearTimeout(e);
            },
        mt = rt && rt.animationName !== ae,
        _t = "ios" === r && !b,
        pt = _t && st && st.webkit && st.webkit.messageHandlers,
        vt = (rt && rt.touchAction === ae) || (_t && !pt),
        ft = (function () {
            if (!rt || rt.transform !== ae) return "";
            for (var e = 0, t = it; e < t.length; e++) {
                var a = t[e];
                if (rt[a + "Transform"] !== ae) return a;
            }
            return "";
        })(),
        gt = ft ? "-" + ft.toLowerCase() + "-" : "",
        bt = ct && ct.supports && ct.supports("(transform-style: preserve-3d)");
    function yt(e, t, a, n) {
        e && e.addEventListener(t, a, n);
    }
    function xt(e, t, a, n) {
        e && e.removeEventListener(t, a, n);
    }
    function Dt(e) {
        return m ? (e && e.ownerDocument ? e.ownerDocument : nt) : ae;
    }
    function Tt(e, t) {
        return parseFloat(getComputedStyle(e)[t] || "0");
    }
    function Ct(e) {
        return e.scrollLeft !== ae ? e.scrollLeft : e.pageXOffset;
    }
    function St(e) {
        return e.scrollTop !== ae ? e.scrollTop : e.pageYOffset;
    }
    function wt(e) {
        return m ? (e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : st) : ae;
    }
    function kt(e, t) {
        var a = getComputedStyle(e),
            n = (ft ? a[ft + "Transform"] : a.transform).split(")")[0].split(", ");
        return +(t ? n[13] || n[5] : n[12] || n[4]) || 0;
    }
    function Mt(e) {
        if (ht[e]) return ht[e];
        if (!lt) return "#fff";
        (lt.fillStyle = e), lt.fillRect(0, 0, 1, 1);
        var t = lt.getImageData(0, 0, 1, 1).data,
            a = 0.299 * +t[0] + 0.587 * +t[1] + 0.114 * +t[2] < 130 ? "#fff" : "#000";
        return (ht[e] = a), a;
    }
    function Et(e, t, a, n, s) {
        var i = Math.min(1, (+new Date() - t) / 468),
            r = 0.5 * (1 - Math.cos(Math.PI * i)),
            o = pe(a + (n - a) * r);
        (e.scrollTop = o),
            o !== n
                ? dt(function () {
                      Et(e, t, a, n, s);
                  })
                : s && s();
    }
    function Nt(e, t, a, n) {
        (t = Math.max(0, pe(t))), a ? Et(e, +new Date(), e.scrollTop, t, n) : ((e.scrollTop = t), n && n());
    }
    function Lt(e) {
        if (nt && e) {
            var t = nt.createElement("div");
            return (t.innerHTML = e), t.textContent.trim();
        }
        return e || "";
    }
    function It(e) {
        var t = e.getBoundingClientRect(),
            a = { left: t.left, top: t.top },
            n = wt(e);
        return n !== ae && ((a.top += St(n)), (a.left += Ct(n))), a;
    }
    function Ht(e, t) {
        return e && e.matches && e.matches(t);
    }
    function Ot(e, t, a) {
        for (; e && !Ht(e, t); ) {
            if (e === a || e.nodeType === e.DOCUMENT_NODE) return null;
            e = e.parentNode;
        }
        return e;
    }
    function Vt(e, t, a) {
        var n;
        try {
            n = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: a });
        } catch (e) {
            (n = document.createEvent("Event")).initEvent(t, !0, !0), (n.detail = a);
        }
        e.dispatchEvent(n);
    }
    function Yt(e, t) {
        for (var a = 0; a < e.length; a++) t(e[a], a);
    }
    const Pt = {},
        Ft = [],
        Rt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function At(e, t) {
        for (let a in t) e[a] = t[a];
        return e;
    }
    function zt(e) {
        let t = e.parentNode;
        t && t.removeChild(e);
    }
    const Wt = {
        _catchError: function (e, t) {
            let a, n, s;
            for (; (t = t._parent); )
                if ((a = t._component) && !a._processingException)
                    try {
                        if (((n = a.constructor), n && null != n.getDerivedStateFromError && (a.setState(n.getDerivedStateFromError(e)), (s = a._dirty)), null != a.componentDidCatch && (a.componentDidCatch(e), (s = a._dirty)), s))
                            return (a._pendingError = a);
                    } catch (t) {
                        e = t;
                    }
            throw e;
        },
        _vnodeId: 0,
    };
    function Ut(e, t, a) {
        let n,
            s,
            i,
            r = {};
        for (i in t) "key" == i ? (n = t[i]) : "ref" == i ? (s = t[i]) : (r[i] = t[i]);
        if (arguments.length > 3) for (a = [a], i = 3; i < arguments.length; i++) a.push(arguments[i]);
        if ((null != a && (r.children = a), "function" == typeof e && null != e.defaultProps)) for (i in e.defaultProps) void 0 === r[i] && (r[i] = e.defaultProps[i]);
        return Bt(e, r, n, s, null);
    }
    function Bt(e, t, a, n, s) {
        const i = { type: e, props: t, key: a, ref: n, _children: null, _parent: null, _depth: 0, _dom: null, _nextDom: void 0, _component: null, _hydrating: null, constructor: void 0, _original: null == s ? ++Wt._vnodeId : s };
        return null != Wt.vnode && Wt.vnode(i), i;
    }
    function jt(e) {
        return e.children;
    }
    function Kt(e, t) {
        (this.props = e), (this.context = t);
    }
    function Jt(e, t) {
        if (null == t) return e._parent ? Jt(e._parent, e._parent._children.indexOf(e) + 1) : null;
        let a;
        for (; t < e._children.length; t++) if (((a = e._children[t]), null != a && null != a._dom)) return a._dom;
        return "function" == typeof e.type ? Jt(e) : null;
    }
    function Xt(e) {
        let t = e._vnode,
            a = t._dom,
            n = e._parentDom;
        if (n) {
            let s = [];
            const i = At({}, t);
            (i._original = t._original + 1), la(n, t, i, e._globalContext, void 0 !== n.ownerSVGElement, null != t._hydrating ? [a] : null, s, null == a ? Jt(t) : a, t._hydrating), ca(s, t), t._dom != a && qt(t);
        }
    }
    function qt(e) {
        if (null != (e = e._parent) && null != e._component) {
            e._dom = e._component.base = null;
            for (let t = 0; t < e._children.length; t++) {
                let a = e._children[t];
                if (null != a && null != a._dom) {
                    e._dom = e._component.base = a._dom;
                    break;
                }
            }
            return qt(e);
        }
    }
    (Kt.prototype.setState = function (e, t) {
        let a;
        (a = null != this._nextState && this._nextState !== this.state ? this._nextState : (this._nextState = At({}, this.state))),
            "function" == typeof e && (e = e(At({}, a), this.props)),
            e && At(a, e),
            null != e && this._vnode && (t && this._renderCallbacks.push(t), Qt(this));
    }),
        (Kt.prototype.forceUpdate = function (e) {
            this._vnode && ((this._force = !0), e && this._renderCallbacks.push(e), Qt(this));
        }),
        (Kt.prototype.render = jt);
    let Gt = [];
    const Zt = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
    let $t;
    function Qt(e) {
        ((!e._dirty && (e._dirty = !0) && Gt.push(e) && !ea._rerenderCount++) || $t !== Wt.debounceRendering) && (($t = Wt.debounceRendering), ($t || Zt)(ea));
    }
    function ea() {
        let e;
        for (; (ea._rerenderCount = Gt.length); )
            (e = Gt.sort((e, t) => e._vnode._depth - t._vnode._depth)),
                (Gt = []),
                e.some((e) => {
                    e._dirty && Xt(e);
                });
    }
    function ta(e, t, a, n, s, i, r, o, l, c) {
        let h,
            d,
            u,
            m,
            _,
            p,
            v,
            f = (n && n._children) || Ft,
            g = f.length;
        for (a._children = [], h = 0; h < t.length; h++)
            if (
                ((m = t[h]),
                (m =
                    null == m || "boolean" == typeof m
                        ? (a._children[h] = null)
                        : "string" == typeof m || "number" == typeof m || "bigint" == typeof m
                        ? (a._children[h] = Bt(null, m, null, null, m))
                        : Array.isArray(m)
                        ? (a._children[h] = Bt(jt, { children: m }, null, null, null))
                        : m._depth > 0
                        ? (a._children[h] = Bt(m.type, m.props, m.key, null, m._original))
                        : (a._children[h] = m)),
                null != m)
            ) {
                if (((m._parent = a), (m._depth = a._depth + 1), (u = f[h]), null === u || (u && m.key == u.key && m.type === u.type))) f[h] = void 0;
                else
                    for (d = 0; d < g; d++) {
                        if (((u = f[d]), u && m.key == u.key && m.type === u.type)) {
                            f[d] = void 0;
                            break;
                        }
                        u = null;
                    }
                (u = u || Pt),
                    la(e, m, u, s, i, r, o, l, c),
                    (_ = m._dom),
                    (d = m.ref) && u.ref != d && (v || (v = []), u.ref && v.push(u.ref, null, m), v.push(d, m._component || _, m)),
                    null != _
                        ? (null == p && (p = _),
                          "function" == typeof m.type && null != m._children && m._children === u._children ? (m._nextDom = l = aa(m, l, e)) : (l = na(e, m, u, f, _, l)),
                          c || "option" !== a.type ? "function" == typeof a.type && (a._nextDom = l) : (e.value = ""))
                        : l && u._dom == l && l.parentNode != e && (l = Jt(u));
            }
        for (a._dom = p, h = g; h--; ) null != f[h] && ("function" == typeof a.type && null != f[h]._dom && f[h]._dom == a._nextDom && (a._nextDom = Jt(n, h + 1)), da(f[h], f[h]));
        if (v) for (h = 0; h < v.length; h++) ha(v[h], v[++h], v[++h]);
    }
    function aa(e, t, a) {
        for (let n = 0; n < e._children.length; n++) {
            let s = e._children[n];
            s && ((s._parent = e), (t = "function" == typeof s.type ? aa(s, t, a) : na(a, s, s, e._children, s._dom, t)));
        }
        return t;
    }
    function na(e, t, a, n, s, i) {
        let r;
        if (void 0 !== t._nextDom) (r = t._nextDom), (t._nextDom = void 0);
        else if (null == a || s != i || null == s.parentNode)
            e: if (null == i || i.parentNode !== e) e.appendChild(s), (r = null);
            else {
                for (let e = i, t = 0; (e = e.nextSibling) && t < n.length; t += 2) if (e == s) break e;
                e.insertBefore(s, i), (r = i);
            }
        return (i = void 0 !== r ? r : s.nextSibling);
    }
    function sa(e, t, a) {
        "-" === t[0] ? e.setProperty(t, a) : null == a ? (e[t] = "") : "number" != typeof a || Rt.test(t) ? (e[t] = a) : (e[t] = a + "px");
    }
    function ia(e, t, a, n, s) {
        let i;
        e: if ("style" === t)
            if ("string" == typeof a) e.style.cssText = a;
            else {
                if (("string" == typeof n && (e.style.cssText = n = ""), n)) for (t in n) (a && t in a) || sa(e.style, t, "");
                if (a) for (t in a) (n && a[t] === n[t]) || sa(e.style, t, a[t]);
            }
        else if ("o" === t[0] && "n" === t[1])
            if (((i = t !== (t = t.replace(/Capture$/, ""))), (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)), e._listeners || (e._listeners = {}), (e._listeners[t + i] = a), a)) {
                if (!n) {
                    const a = i ? oa : ra;
                    e.addEventListener(t, a, i);
                }
            } else {
                const a = i ? oa : ra;
                e.removeEventListener(t, a, i);
            }
        else if ("dangerouslySetInnerHTML" !== t) {
            if (s) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e)
                try {
                    e[t] = null == a ? "" : a;
                    break e;
                } catch (e) {}
            "function" == typeof a || (null != a && (!1 !== a || ("a" === t[0] && "r" === t[1])) ? e.setAttribute(t, a) : e.removeAttribute(t));
        }
    }
    function ra(e) {
        this._listeners[e.type + !1](Wt.event ? Wt.event(e) : e);
    }
    function oa(e) {
        this._listeners[e.type + !0](Wt.event ? Wt.event(e) : e);
    }
    function la(e, t, a, n, s, i, r, o, l) {
        let c,
            h = t.type;
        if (void 0 !== t.constructor) return null;
        null != a._hydrating && ((l = a._hydrating), (o = t._dom = a._dom), (t._hydrating = null), (i = [o])), (c = Wt._diff) && c(t);
        try {
            e: if ("function" == typeof h) {
                let d,
                    u,
                    m,
                    _,
                    p,
                    v,
                    f = t.props;
                c = h.contextType;
                let g = c && n[c._id],
                    b = c ? (g ? g.props.value : c._defaultValue) : n;
                if (
                    (a._component
                        ? ((d = t._component = a._component), (v = d._processingException = d._pendingError))
                        : ("prototype" in h && h.prototype.render ? (t._component = d = new h(f, b)) : ((t._component = d = new Kt(f, b)), (d.constructor = h), (d.render = ua)),
                          g && g.sub(d),
                          (d.props = f),
                          d.state || (d.state = {}),
                          (d.context = b),
                          (d._globalContext = n),
                          (u = d._dirty = !0),
                          (d._renderCallbacks = [])),
                    null == d._nextState && (d._nextState = d.state),
                    null != h.getDerivedStateFromProps && (d._nextState == d.state && (d._nextState = At({}, d._nextState)), At(d._nextState, h.getDerivedStateFromProps(f, d._nextState))),
                    (m = d.props),
                    (_ = d.state),
                    u)
                )
                    null == h.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d._renderCallbacks.push(d.componentDidMount);
                else {
                    if (
                        (null == h.getDerivedStateFromProps && f !== m && null != d.componentWillReceiveProps && d.componentWillReceiveProps(f, b),
                        (!d._force && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(f, d._nextState, b)) || t._original === a._original)
                    ) {
                        (d.props = f),
                            (d.state = d._nextState),
                            t._original !== a._original && (d._dirty = !1),
                            (d._vnode = t),
                            (t._dom = a._dom),
                            (t._children = a._children),
                            t._children.forEach((e) => {
                                e && (e._parent = t);
                            }),
                            d._renderCallbacks.length && r.push(d);
                        break e;
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(f, d._nextState, b),
                        null != d.componentDidUpdate &&
                            d._renderCallbacks.push(() => {
                                d.componentDidUpdate(m, _, p);
                            });
                }
                (d.context = b),
                    (d.props = f),
                    (d.state = d._nextState),
                    (c = Wt._render) && c(t),
                    (d._dirty = !1),
                    (d._vnode = t),
                    (d._parentDom = e),
                    (c = d.render(d.props, d.state, d.context)),
                    (d.state = d._nextState),
                    null != d.getChildContext && (n = At(At({}, n), d.getChildContext())),
                    u || null == d.getSnapshotBeforeUpdate || (p = d.getSnapshotBeforeUpdate(m, _));
                let y = null != c && c.type === jt && null == c.key ? c.props.children : c;
                ta(e, Array.isArray(y) ? y : [y], t, a, n, s, i, r, o, l), (d.base = t._dom), (t._hydrating = null), d._renderCallbacks.length && r.push(d), v && (d._pendingError = d._processingException = null), (d._force = !1);
            } else
                null == i && t._original === a._original
                    ? ((t._children = a._children), (t._dom = a._dom))
                    : (t._dom = (function (e, t, a, n, s, i, r, o) {
                          let l = a.props,
                              c = t.props,
                              h = t.type,
                              d = 0;
                          "svg" === h && (s = !0);
                          if (null != i)
                              for (; d < i.length; d++) {
                                  const t = i[d];
                                  if (t && (t === e || (h ? t.localName == h : 3 == t.nodeType))) {
                                      (e = t), (i[d] = null);
                                      break;
                                  }
                              }
                          if (null == e) {
                              if (null === h) return document.createTextNode(c);
                              (e = s ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, c.is && c)), (i = null), (o = !1);
                          }
                          if (null === h) l === c || (o && e.data === c) || (e.data = c);
                          else {
                              (i = i && Ft.slice.call(e.childNodes)), (l = a.props || Pt);
                              let u = l.dangerouslySetInnerHTML,
                                  m = c.dangerouslySetInnerHTML;
                              if (!o) {
                                  if (null != i) {
                                      l = {};
                                      for (let t = 0; t < e.attributes.length; t++) l[e.attributes[t].name] = e.attributes[t].value;
                                  }
                                  (m || u) && ((m && ((u && m.__html == u.__html) || m.__html === e.innerHTML)) || (e.innerHTML = (m && m.__html) || ""));
                              }
                              if (
                                  ((function (e, t, a, n, s) {
                                      let i;
                                      for (i in a) "children" === i || "key" === i || i in t || ia(e, i, null, a[i], n);
                                      for (i in t) (s && "function" != typeof t[i]) || "children" === i || "key" === i || "value" === i || "checked" === i || a[i] === t[i] || ia(e, i, t[i], a[i], n);
                                  })(e, c, l, s, o),
                                  m)
                              )
                                  t._children = [];
                              else if (((d = t.props.children), ta(e, Array.isArray(d) ? d : [d], t, a, n, s && "foreignObject" !== h, i, r, e.firstChild, o), null != i)) for (d = i.length; d--; ) null != i[d] && zt(i[d]);
                              o ||
                                  ("value" in c && void 0 !== (d = c.value) && (d !== e.value || ("progress" === h && !d)) && ia(e, "value", d, l.value, !1),
                                  "checked" in c && void 0 !== (d = c.checked) && d !== e.checked && ia(e, "checked", d, l.checked, !1));
                          }
                          return e;
                      })(a._dom, t, a, n, s, i, r, l));
            (c = Wt.diffed) && c(t);
        } catch (e) {
            (t._original = null), (l || null != i) && ((t._dom = o), (t._hydrating = !!l), (i[i.indexOf(o)] = null)), Wt._catchError(e, t, a);
        }
    }
    function ca(e, t) {
        Wt._commit && Wt._commit(t, e),
            e.some((t) => {
                try {
                    (e = t._renderCallbacks),
                        (t._renderCallbacks = []),
                        e.some((e) => {
                            e.call(t);
                        });
                } catch (e) {
                    Wt._catchError(e, t._vnode);
                }
            });
    }
    function ha(e, t, a) {
        try {
            "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
            Wt._catchError(e, a);
        }
    }
    function da(e, t, a) {
        let n, s;
        if ((Wt.unmount && Wt.unmount(e), (n = e.ref) && ((n.current && n.current !== e._dom) || ha(n, null, t)), a || "function" == typeof e.type || (a = null != (s = e._dom)), (e._dom = e._nextDom = void 0), null != (n = e._component))) {
            if (n.componentWillUnmount)
                try {
                    n.componentWillUnmount();
                } catch (e) {
                    Wt._catchError(e, t);
                }
            n.base = n._parentDom = null;
        }
        if ((n = e._children)) for (let e = 0; e < n.length; e++) n[e] && da(n[e], t, a);
        null != s && zt(s);
    }
    function ua(e, t, a) {
        return this.constructor(e, a);
    }
    function ma(e, t, a) {
        Wt._root && Wt._root(e, t);
        let n = "function" == typeof a,
            s = n ? null : (a && a._children) || t._children,
            i = [];
        la(t, (e = ((!n && a) || t)._children = Ut(jt, null, [e])), s || Pt, Pt, void 0 !== t.ownerSVGElement, !n && a ? [a] : s ? null : t.firstChild ? Ft.slice.call(t.childNodes) : null, i, !n && a ? a : s ? s._dom : t.firstChild, n),
            ca(i, e);
    }
    ea._rerenderCount = 0;
    let _a = 0;
    function pa(e, t) {
        const a = {
            _id: (t = "__cC" + _a++),
            _defaultValue: e,
            Consumer: (e, t) => e.children(t),
            Provider(e) {
                if (!this.getChildContext) {
                    let e = [],
                        a = {};
                    (a[t] = this),
                        (this.getChildContext = () => a),
                        (this.shouldComponentUpdate = function (t) {
                            this.props.value !== t.value && e.some(Qt);
                        }),
                        (this.sub = (t) => {
                            e.push(t);
                            let a = t.componentWillUnmount;
                            t.componentWillUnmount = () => {
                                e.splice(e.indexOf(t), 1), a && a.call(t);
                            };
                        });
                }
                return e.children;
            },
        };
        return (a.Provider._contextRef = a.Consumer.contextType = a);
    }
    var va = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {}),
            (t.prototype.shouldComponentUpdate = function (e, t) {
                return fa(e, this.props) || fa(t, this.state);
            }),
            t
        );
    })(Kt);
    function fa(e, t) {
        for (var a in e) if (e[a] !== t[a]) return !0;
        for (var a in t) if (!(a in e)) return !0;
        return !1;
    }
    var ga = Ut;
    Wt.vnode = function (e) {
        var t = e.props;
        if (le(e.type)) for (var a in t) /^onAni/.test(a) && ((t[a.toLowerCase()] = t[a]), delete t[a]);
    };
    var ba = "attributes";
    var ya = {},
        xa = 0;
    function Da(e, t, a, n, s) {
        Ht(e, t)
            ? e.__mbscFormInst || Ta(a, e, s, n, !0)
            : Yt(e.querySelectorAll(t), function (e) {
                  e.__mbscFormInst || Ta(a, e, s, n, !0);
              });
    }
    function Ta(e, t, a, n, i) {
        var r,
            o,
            l = [],
            c = [],
            h = {},
            d = n || {},
            u = d.renderToParent ? t.parentNode : t,
            m = u.parentNode,
            _ = d.useOwnChildren ? t : u,
            p = t.getAttribute("class"),
            v = t.value,
            f = s({ className: u.getAttribute("class") }, t.dataset, a, {
                ref: function (e) {
                    o = e;
                },
            });
        d.readProps &&
            d.readProps.forEach(function (e) {
                var a = t[e];
                a !== ae && (f[e] = a);
            }),
            d.readAttrs &&
                d.readAttrs.forEach(function (e) {
                    var a = t.getAttribute(e);
                    null !== a && (f[e] = a);
                });
        var g = d.slots;
        if (g)
            for (var b in g)
                if (g.hasOwnProperty(b)) {
                    var y = g[b],
                        x = u.querySelector("[mbsc-" + y + "]");
                    x && ((h[b] = x), x.parentNode.removeChild(x), (f[b] = ga("span", { className: "mbsc-slot-" + y })));
                }
        if (
            (d.hasChildren &&
                (Yt(_.childNodes, function (e) {
                    e !== t && 8 !== e.nodeType && (3 !== e.nodeType || (3 === e.nodeType && /\S/.test(e.nodeValue))) && l.push(e), c.push(e);
                }),
                Yt(l, function (e) {
                    _.removeChild(e);
                }),
                l.length && (f.hasChildren = !0)),
            t.id || (t.id = "mbsc-control-" + xa++),
            d.before && d.before(t, f, l),
            (function (e, t, a) {
                var n = Element.prototype,
                    s = Object.getOwnPropertyDescriptor(n, ba),
                    i = s.get;
                (s.get = function () {
                    return [];
                }),
                    Object.defineProperty(n, ba, s),
                    ma(e, t, a),
                    (s.get = i),
                    Object.defineProperty(n, ba, s);
            })(ga(e, f), m, u),
            p &&
                d.renderToParent &&
                (r = t.classList).add.apply(
                    r,
                    p
                        .replace(/^\s+|\s+$/g, "")
                        .replace(/\s+|^\s|\s$/g, " ")
                        .split(" ")
                ),
            d.hasChildren)
        ) {
            var D = "." + d.parentClass,
                T = Ht(u, D) ? u : u.querySelector(D);
            T &&
                Yt(l, function (e) {
                    T.appendChild(e);
                });
        }
        if ((d.hasValue && (t.value = v), g)) {
            var C = function (e) {
                if (h.hasOwnProperty(e)) {
                    var t = g[e],
                        a = h[e];
                    Yt(u.querySelectorAll(".mbsc-slot-" + t), function (e, t) {
                        var n = t > 0 ? a.cloneNode(!0) : a;
                        e.appendChild(n);
                    });
                }
            };
            for (var b in h) C(b);
        }
        return (
            (o.destroy = function () {
                var e = u.parentNode,
                    a = nt.createComment("");
                e.insertBefore(a, u),
                    ma(null, u),
                    delete t.__mbscInst,
                    delete t.__mbscFormInst,
                    (u.innerHTML = ""),
                    u.setAttribute("class", f.className),
                    e.replaceChild(u, a),
                    d.hasChildren &&
                        Yt(c, function (e) {
                            _.appendChild(e);
                        }),
                    d.renderToParent && t.setAttribute("class", p);
            }),
            i ? (t.__mbscInst || (t.__mbscInst = o), (t.__mbscFormInst = o)) : (t.__mbscInst = o),
            o
        );
    }
    function Ca(e) {
        ya[e._name] = e;
    }
    function Sa(e, t) {
        if (e)
            for (var a in ya)
                if (ya.hasOwnProperty(a)) {
                    var n = ya[a];
                    Da(e, n._selector, n, n._renderOpt, t);
                }
    }
    var wa,
        ka = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._newProps = {}),
                    (t._setEl = function (e) {
                        t._el = e ? e._el || e : null;
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.componentDidMount = function () {
                    this.__init(), this._init(), this._mounted(), this._updated();
                }),
                (t.prototype.componentDidUpdate = function () {
                    this._updated();
                }),
                (t.prototype.componentWillUnmount = function () {
                    this._destroy(), this.__destroy();
                }),
                (t.prototype.render = function () {
                    return this._willUpdate(), this._template(this.s, this.state);
                }),
                (t.prototype.getInst = function () {
                    return this;
                }),
                (t.prototype.setOptions = function (e) {
                    (this._newProps = s({}, this._newProps, e)), this.forceUpdate();
                }),
                (t.prototype._safeHtml = function (e) {
                    return { __html: e };
                }),
                (t.prototype._init = function () {}),
                (t.prototype.__init = function () {}),
                (t.prototype._emit = function (e, t) {}),
                (t.prototype._template = function (e, t) {}),
                (t.prototype._mounted = function () {}),
                (t.prototype._updated = function () {}),
                (t.prototype._destroy = function () {}),
                (t.prototype.__destroy = function () {}),
                (t.prototype._willUpdate = function () {}),
                t
            );
        })(va),
        Ma = "5.5.1",
        Ea = 0,
        Na = {},
        La = new Function(
            "textParam,p",
            (function () {
                var e,
                    t = (function (e, t) {
                        var a,
                            n = (function (e) {
                                var t,
                                    a = e[0];
                                for (t = 0; t < 16; ++t) if ((a * t) % 16 == 1) return [t, e[1]];
                            })(t),
                            s = (function (e, t, a, n) {
                                var s,
                                    i = "0123456789abcdef",
                                    r = "",
                                    o = t.length;
                                for (s = 0; s < o; ++s) r += e ? i[(a * i.indexOf(t[s]) + n) % 16] : i[(((a * i.indexOf(t[s]) - a * n) % 16) + 16) % 16];
                                return r;
                            })(0, e, n[0], n[1]),
                            i = s.length,
                            r = [];
                        for (a = 0; a < i; a += 2) r.push(s[a] + s[a + 1]);
                        return r;
                    })(
                        "3836353738a13c3814ad36ada9623aada0f9fdf736a1383136a26c89ad38ac6236ada2a8aba96c65f089ad38ac62a9ad3c6cf462f4fa603465fb63f0a8a53a643f3835a0a1f9666367aa31a2af38a5aba26ca165373aad366438f9a162a0a1a2a338ac60a26036f733aca5a0a16cf46df9f938653736f989ad38ac62aaa0abab366c89ad38ac6236ada2a8aba96c656e3865f73869f9fdf7a2f9a1173819f7a1173819f9a1173619f7a1173619f9a23936a1383136a264a1396c176334aba5a238a13669a13aa1a2383ffea2aba2a1636063a8a53f34a0ad35fea6a0abafa76da5a934ab3638ada23863606334ab3fa538a5aba2feada63faba03138a16da5a934ab3638ada23863606338ab34fef46da5a934ab3638ada238636063a0a1aa38fef46da5a934ab3638ada238636063a6ab3838aba9fef46da5a934ab3638ada23863606336a5a3ac38fef46da5a934ab3638ada238636063a9ad36a3a5a2fef46da5a934ab3638ada23863606334ada8a8a5a2a3fef46da5a934ab3638ada238636063aaaba238693fa53ea1fefc343c6da5a934ab3638ada238636063a0a5a2a169aca1a5a3ac38fefdf6343c63606338a13c3869ada0a5a3a2feafa1a238a136636063ab34adafa53835fe63676c89ad38ac62aaa0abab366c89ad38ac6236ada2a8aba96c656ef6f4656bfdf4f467f462fc6567636da5a934ab3638ada23863196562aeaba5a26c63f76365676366f21031f4f4f1f81031f4f4f1f61031f4f4f8f51031f4f4f8fd1031f4f4f8aff06ba8a53af263fe63636539afad38afac6ca1653736a1383136a264636339e",
                        [9, 4]
                    ),
                    a = "",
                    n = t.length;
                for (e = 0; e < n; e++) a += String.fromCharCode(parseInt(t[e], 16));
                return a;
            })()
        ),
        Ia = { large: 992, medium: 768, small: 576, xlarge: 1200, xsmall: 0 };
    _ &&
        ((wa = _.matches),
        _.addListener(function (e) {
            (wa = e.matches), C.next();
        }));
    var Ha,
        Oa,
        Va = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.s = {}), (t.state = {}), (t._mbsc = !0), (t._v = { version: "5.5.1" }), (t._uid = ++Ea), (t.__getText = La), t;
            }
            return (
                n(t, e),
                Object.defineProperty(t.prototype, "nativeElement", {
                    get: function () {
                        return this._el;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "__getTextParam", {
                    get: function () {
                        return Na.val;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "textParam", {
                    get: function () {
                        return void 0 === this._textParam && (this._textParam = this.__getText(Na, 0.15)), this._safeHtml(this._textParam);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.destroy = function () {}),
                (t.prototype._hook = function (e, t) {
                    var a = this.s;
                    if (((t.inst = this), (t.type = e), this._emit(e, t), a[e])) return a[e](t, this);
                }),
                (t.prototype.__init = function () {
                    var e = this;
                    this.constructor.defaults &&
                        (this._optChange = C.subscribe(function () {
                            e.forceUpdate();
                        })),
                        this._hook("onInit", {});
                }),
                (t.prototype.__destroy = function () {
                    this._optChange !== ae && C.unsubscribe(this._optChange), this._hook("onDestroy", {});
                }),
                (t.prototype._render = function (e, t) {}),
                (t.prototype._willUpdate = function () {
                    this._merge(), this._render(this.s, this.state);
                }),
                (t.prototype._resp = function (e) {
                    var t,
                        a = e.responsive,
                        n = -1,
                        s = this.state.width;
                    if ((s === ae && (s = st ? st.innerWidth : 375), a && s))
                        for (var i in a)
                            if (a.hasOwnProperty(i)) {
                                var r = a[i],
                                    o = r.breakpoint || Ia[i];
                                s >= o && o > n && ((t = r), (n = o));
                            }
                    return t;
                }),
                (t.prototype._merge = function () {
                    var e,
                        t,
                        a,
                        n = this.constructor,
                        i = n.defaults,
                        o = this._opt || {},
                        l = {};
                    if (((this._prevS = this.s || {}), i)) {
                        for (var c in this.props) this.props[c] !== ae && (l[c] = this.props[c]);
                        if (this._newProps) for (var c in this._newProps) this._newProps[c] !== ae && (l[c] = this._newProps[c]);
                        var h = l.locale || o.locale || y.locale || {},
                            d = l.calendarSystem || h.calendarSystem || o.calendarSystem || y.calendarSystem,
                            m = l.theme || o.theme || y.theme,
                            _ = l.themeVariant || o.themeVariant || y.themeVariant;
                        ("auto" !== m && m) || (m = T.theme), ("dark" !== _ && (!wa || ("auto" !== _ && _))) || !D[m + "-dark"] || (m += "-dark"), (l.theme = m);
                        var p = (a = D[m]) && D[m][n._name];
                        t = s({}, i, y, p, h, o, d, l);
                        var v = this._resp(t);
                        (this._respProps = v), v && (t = s({}, t, v));
                    } else (t = s({}, this.props)), (a = D[t.theme]);
                    (e = a && a.baseTheme),
                        (t.baseTheme = e),
                        (this.s = t),
                        (this._className = t.cssClass || t.class || t.className || ""),
                        (this._rtl = " mbsc-" + (t.rtl ? "rtl" : "ltr")),
                        (this._theme = " mbsc-" + t.theme + (e ? " mbsc-" + e : "")),
                        (this._touchUi = "auto" === t.touchUi || t.touchUi === ae ? u : t.touchUi),
                        (this._hb = "ios" !== r || ("ios" !== t.theme && "ios" !== e) ? "" : " mbsc-hb");
                }),
                (t.defaults = ae),
                (t._name = ""),
                t
            );
        })(ka),
        Ya = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    return ga("span", { onClick: e.onClick, className: this._cssClass, dangerouslySetInnerHTML: this._svg }, this._hasChildren && e.name);
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    n(t, e),
                    (t.prototype._render = function (e) {
                        (this._hasChildren = "string" != typeof e.name),
                            (this._cssClass = this._className + " mbsc-icon" + this._theme + (e.name && !this._hasChildren ? (-1 !== e.name.indexOf(" ") ? " " + e.name : " mbsc-font-icon mbsc-icon-" + e.name) : "")),
                            (this._svg = e.svg ? this._safeHtml(e.svg) : ae);
                    }),
                    t
                );
            })(Va)
        ),
        Pa = "animationstart",
        Fa = "blur",
        Ra = "change",
        Aa = "click",
        za = "contextmenu",
        Wa = "dblclick",
        Ua = "focus",
        Ba = "focusin",
        ja = "input",
        Ka = "keydown",
        Ja = "mousedown",
        Xa = "mousemove",
        qa = "mouseup",
        Ga = "mouseenter",
        Za = "mouseleave",
        $a = "mousewheel",
        Qa = "resize",
        en = "scroll",
        tn = "touchstart",
        an = "touchmove",
        nn = "touchend",
        sn = "touchcancel",
        rn = "wheel",
        on = 0;
    function ln(e, t, a) {
        var n = (a ? "page" : "client") + t;
        return e.targetTouches && e.targetTouches[0] ? e.targetTouches[0][n] : e.changedTouches && e.changedTouches[0] ? e.changedTouches[0][n] : e[n];
    }
    function cn(e, t) {
        if (!t.mbscClick) {
            var a = (e.originalEvent || e).changedTouches[0],
                n = document.createEvent("MouseEvents");
            n.initMouseEvent("click", !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null),
                (n.isMbscTap = !0),
                (n.isIonicTap = !0),
                (Ha = !0),
                (t.mbscChange = !0),
                (t.mbscClick = !0),
                t.dispatchEvent(n),
                (Ha = !1),
                on++,
                setTimeout(function () {
                    on--;
                }, 500),
                setTimeout(function () {
                    delete t.mbscClick;
                });
        }
    }
    function hn(e) {
        !on || Ha || e.isMbscTap || ("TEXTAREA" === e.target.nodeName && e.type === Ja) || (e.stopPropagation(), e.preventDefault());
    }
    function dn(e) {
        wt(e.target).__mbscFocusVisible = !1;
    }
    function un(e) {
        wt(e.target).__mbscFocusVisible = !0;
    }
    function mn(e) {
        Dt(e.target).__mbscMoveObs.next(e);
    }
    function _n(e) {
        e &&
            setTimeout(function () {
                (e.style.opacity = "0"),
                    (e.style.transition = "opacity linear .4s"),
                    setTimeout(function () {
                        e && e.parentNode && e.parentNode.removeChild(e);
                    }, 400);
            }, 200);
    }
    function pn(e, t) {
        var a,
            n,
            s,
            i,
            r,
            o,
            l,
            c,
            d,
            u,
            m,
            _,
            p,
            v,
            f,
            g,
            b = {},
            y = wt(e),
            x = Dt(e);
        function D(e) {
            if (e.type === tn) Oa = !0;
            else if (Oa) return e.type === Ja && (Oa = !1), !0;
            return !1;
        }
        function T() {
            l &&
                (_n(i),
                (i = (function (e, t, a) {
                    var n = e.getBoundingClientRect(),
                        s = t - n.left,
                        i = a - n.top,
                        r = Math.max(s, e.offsetWidth - s),
                        o = Math.max(i, e.offsetHeight - i),
                        l = 2 * Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2)),
                        c = nt.createElement("span");
                    c.classList.add("mbsc-ripple");
                    var h = c.style;
                    return (
                        (h.backgroundColor = getComputedStyle(e).color),
                        (h.width = l + "px"),
                        (h.height = l + "px"),
                        (h.top = a - n.top - l / 2 + "px"),
                        (h.left = t - n.left - l / 2 + "px"),
                        e.appendChild(c),
                        setTimeout(function () {
                            (h.opacity = ".2"), (h.transform = "scale(1)"), (h.transition = "opacity linear .1s, transform cubic-bezier(0, 0, 0.2, 1) .4s");
                        }, 30),
                        c
                    );
                })(e, _, p))),
                t.onPress(),
                (a = !0);
        }
        function C(e, i) {
            (n = !1),
                _n(e),
                clearTimeout(s),
                (s = setTimeout(function () {
                    a && (t.onRelease(), (a = !1));
                }, i));
        }
        function S(e) {
            if (!D(e) && (e.type !== Ja || (0 === e.button && !e.ctrlKey))) {
                if (
                    ((u = ln(e, "X")),
                    (m = ln(e, "Y")),
                    (_ = u),
                    (p = m),
                    (a = !1),
                    (n = !1),
                    (c = !1),
                    (g = !0),
                    (b.moved = c),
                    (b.startX = u),
                    (b.startY = m),
                    (b.endX = _),
                    (b.endY = p),
                    (b.deltaX = 0),
                    (b.deltaY = 0),
                    (b.domEvent = e),
                    (b.isTouch = Oa),
                    _n(i),
                    t.onStart)
                ) {
                    var r = t.onStart(b);
                    l = r && r.ripple;
                }
                t.onPress && ((n = !0), clearTimeout(s), (s = setTimeout(T, 50))), e.type === Ja && (yt(x, Xa, w), yt(x, qa, k)), yt(x, za, V);
            }
        }
        function w(e) {
            g &&
                ((_ = ln(e, "X")),
                (p = ln(e, "Y")),
                (v = _ - u),
                (f = p - m),
                !c && (Math.abs(v) > 9 || Math.abs(f) > 9) && ((c = !0), C(i)),
                (b.moved = c),
                (b.endX = _),
                (b.endY = p),
                (b.deltaX = v),
                (b.deltaY = f),
                (b.domEvent = e),
                (b.isTouch = e.type === an),
                t.onMove && t.onMove(b));
        }
        function k(e) {
            g &&
                (n && !a && (clearTimeout(s), T()),
                (b.domEvent = e),
                (b.isTouch = e.type === nn),
                t.onEnd && t.onEnd(b),
                C(i, 75),
                (g = !1),
                e.type === nn && t.click && vt && !c && cn(e, e.target),
                e.type === qa && (xt(x, Xa, w), xt(x, qa, k)),
                xt(x, za, V));
        }
        function M(e) {
            D(e) || ((o = !0), t.onHoverIn(e));
        }
        function E(e) {
            o && t.onHoverOut(e), (o = !1);
        }
        function N(e) {
            t.onKeyDown(e);
        }
        function L(e) {
            (t.keepFocus || y.__mbscFocusVisible) && ((r = !0), t.onFocus(e));
        }
        function I(e) {
            r && t.onBlur(e), (r = !1);
        }
        function H(e) {
            t.onChange(e);
        }
        function O(e) {
            (b.domEvent = e), Oa || t.onDoubleClick(b);
        }
        function V(e) {
            Oa && e.preventDefault();
        }
        if ((yt(e, tn, S, { passive: !0 }), yt(e, Ja, S), yt(e, nn, k), yt(e, sn, k), x)) {
            var Y = x.__mbscMoveCount || 0,
                P = x.__mbscMoveObs || new h();
            0 === Y && yt(x, an, mn, { passive: !1 }), (x.__mbscMoveObs = P), (x.__mbscMoveCount = ++Y), (d = P.subscribe(w));
        }
        if ((t.onChange && yt(e, Ra, H), t.onHoverIn && yt(e, Ga, M), t.onHoverOut && yt(e, Za, E), t.onKeyDown && yt(e, Ka, N), t.onFocus && y && (yt(e, Ua, L), !t.keepFocus))) {
            var F = y.__mbscFocusCount || 0;
            0 === F && (yt(y, Ja, dn, !0), yt(y, Ka, un, !0)), (y.__mbscFocusCount = ++F);
        }
        return (
            t.onBlur && yt(e, Fa, I),
            t.onDoubleClick && yt(e, Wa, O),
            function () {
                if ((clearTimeout(s), t.onFocus && y && !t.keepFocus)) {
                    var a = y.__mbscFocusCount || 0;
                    (y.__mbscFocusCount = --a), a <= 0 && (xt(y, Ja, dn), xt(y, Ka, un));
                }
                if (x) {
                    var n = x.__mbscMoveCount || 0;
                    (x.__mbscMoveCount = --n), x.__mbscMoveObs && x.__mbscMoveObs.unsubscribe(d), n <= 0 && (delete x.__mbscMoveCount, delete x.__mbscMoveObs, xt(x, an, mn, { passive: !1 }));
                }
                xt(e, Ja, S, { passive: !0 }), xt(e, nn, k), xt(e, sn, k), xt(x, Xa, w), xt(x, qa, k), xt(x, za, V), xt(e, Ra, H), xt(e, Ga, M), xt(e, Za, E), xt(e, Ka, N), xt(e, tn, S), xt(e, Ua, L), xt(e, Fa, I), xt(e, Wa, O);
            }
        );
    }
    m &&
        (["mousedown", Ga, Ja, qa, Aa].forEach(function (e) {
            nt.addEventListener(e, hn, !0);
        }),
        "android" === r &&
            l < 5 &&
            nt.addEventListener(
                Ra,
                function (e) {
                    var t = e.target;
                    on && "checkbox" === t.type && !t.mbscChange && (e.stopPropagation(), e.preventDefault()), delete t.mbscChange;
                },
                !0
            ));
    var vn,
        fn = new h(),
        gn = 0;
    function bn() {
        clearTimeout(vn),
            (vn = setTimeout(function () {
                fn.next();
            }, 100));
    }
    function yn(e) {
        try {
            return Ht(e, "*:-webkit-autofill");
        } catch (e) {
            return !1;
        }
    }
    var xn = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            n(t, e),
            Object.defineProperty(t.prototype, "value", {
                get: function () {
                    return this._el && this._el.value;
                },
                set: function (e) {
                    (this._el.value = e), this._checkFloating();
                },
                enumerable: !0,
                configurable: !0,
            }),
            (t.prototype._template = function (e, t) {
                var a = this.props,
                    n = a.children,
                    r = a.dropdown;
                a.dropdownIcon, a.endIcon, a.endIconSrc, a.endIconSvg, a.error;
                var o = a.errorMessage,
                    l = a.hasChildren;
                a.hideIcon,
                    a.hideIconSvg,
                    a.inputClass,
                    a.inputStyle,
                    a.label,
                    a.labelStyle,
                    a.notch,
                    a.passwordToggle,
                    a.ripple,
                    a.rows,
                    a.rtl,
                    a.showIcon,
                    a.showIconSvg,
                    a.startIcon,
                    a.startIconSrc,
                    a.startIconSvg,
                    a.theme,
                    a.themeVariant;
                var c = a.type,
                    h = i(a, [
                        "children",
                        "dropdown",
                        "dropdownIcon",
                        "endIcon",
                        "endIconSrc",
                        "endIconSvg",
                        "error",
                        "errorMessage",
                        "hasChildren",
                        "hideIcon",
                        "hideIconSvg",
                        "inputClass",
                        "inputStyle",
                        "label",
                        "labelStyle",
                        "notch",
                        "passwordToggle",
                        "ripple",
                        "rows",
                        "rtl",
                        "showIcon",
                        "showIconSvg",
                        "startIcon",
                        "startIconSrc",
                        "startIconSvg",
                        "theme",
                        "themeVariant",
                        "type",
                    ]),
                    d = e.label;
                return ga(
                    "label",
                    { className: this._cssClass },
                    (d || l) && ga("span", { className: this._labelClass }, l ? "" : d),
                    ga(
                        "span",
                        { className: this._innerClass },
                        "input" === this._tag && ga("input", s({}, h, { ref: this._setEl, className: this._nativeElmClass, disabled: this._disabled, type: e.passwordToggle ? (this._hidePass ? "password" : "text") : c })),
                        "file" === c && ga("input", { className: this._dummyElmClass, disabled: this._disabled, placeholder: e.placeholder, readOnly: !0, type: "text", value: t.files || "" }),
                        "select" === this._tag && ga("select", s({}, h, { ref: this._setEl, className: "mbsc-select" + this._nativeElmClass, disabled: this._disabled }), n),
                        "textarea" === this._tag && ga("textarea", s({}, h, { ref: this._setEl, className: this._nativeElmClass, disabled: this._disabled })),
                        ("select" === this._tag || r) && ga(Ya, { className: this._selectIconClass, svg: e.dropdownIcon, theme: e.theme }),
                        this._hasStartIcon && ga(Ya, { className: this._startIconClass, name: e.startIcon, svg: e.startIconSvg, theme: e.theme }),
                        this._hasEndIcon && !e.passwordToggle && ga(Ya, { className: this._endIconClass, name: e.endIcon, svg: e.endIconSvg, theme: e.theme }),
                        e.passwordToggle && ga(Ya, { onClick: this._onClick, className: this._passIconClass, name: this._hidePass ? e.showIcon : e.hideIcon, svg: this._hidePass ? e.showIconSvg : e.hideIconSvg, theme: e.theme }),
                        this._hasError && ga("span", { className: this._errorClass }, o),
                        e.notch && "outline" === e.inputStyle && ga("fieldset", { "aria-hidden": "true", className: this._fieldSetClass }, ga("legend", { className: this._legendClass }, d && "inline" !== e.labelStyle ? d : "&nbsp;")),
                        e.ripple && "outline" !== e.inputStyle && ga("span", { className: this._rippleClass })
                    )
                );
            }),
            t
        );
    })(
        (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._tag = "input"),
                    (t._onClick = function () {
                        t._hidePass = !t._hidePass;
                    }),
                    (t._onAutoFill = function () {
                        "floating" === t.s.labelStyle && yn(t._el) && t.setState({ isFloatingActive: !0 });
                    }),
                    (t._sizeTextArea = function () {
                        var e,
                            a,
                            n,
                            s = t._el,
                            i = t.s.rows;
                        s.offsetHeight &&
                            ((s.style.height = ""),
                            (n = s.scrollHeight - s.offsetHeight),
                            (e = s.offsetHeight + (n > 0 ? n : 0)),
                            (a = Math.round(e / 24)) > i ? ((e = 24 * i + (e - 24 * a)), (s.style.overflow = "auto")) : (s.style.overflow = ""),
                            e && (s.style.height = e + "px"));
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._checkFloating = function () {
                    var e = this._el,
                        t = this.s,
                        a = yn(e),
                        n = this.state.hasFocus || a || this.value;
                    if (e && "floating" === t.labelStyle) {
                        if ("select" === this._tag) {
                            var s = e,
                                i = s.options[0];
                            n = !!(n || s.multiple || s.value || (s.selectedIndex > -1 && i && i.label));
                        } else {
                            n = !(!n && !e.value);
                        }
                        (this._valueChecked = !0), this.setState({ isFloatingActive: n });
                    }
                }),
                (t.prototype._mounted = function () {
                    var e,
                        t = this,
                        a = this.s,
                        n = this._el;
                    yt(n, Pa, this._onAutoFill),
                        "textarea" === this._tag && (yt(n, ja, this._sizeTextArea), (this._unsubscribe = ((e = this._sizeTextArea), gn || yt(st, Qa, bn), gn++, fn.subscribe(e)))),
                        (this._unlisten = pn(n, {
                            keepFocus: !0,
                            onBlur: function () {
                                t.setState({ hasFocus: !1, isFloatingActive: !!n.value });
                            },
                            onChange: function (e) {
                                if ("file" === a.type) {
                                    for (var n = [], s = 0, i = e.target.files; s < i.length; s++) {
                                        var r = i[s];
                                        n.push(r.name);
                                    }
                                    t.setState({ files: n.join(", ") });
                                }
                                t._checkFloating(), t._emit("onChange", e);
                            },
                            onFocus: function () {
                                t.setState({ hasFocus: !0, isFloatingActive: !0 });
                            },
                            onHoverIn: function () {
                                t._disabled || t.setState({ hasHover: !0 });
                            },
                            onHoverOut: function () {
                                t.setState({ hasHover: !1 });
                            },
                        }));
                }),
                (t.prototype._render = function (e, t) {
                    var a = !(!e.endIconSvg && !e.endIcon),
                        n = !(!e.startIconSvg && !e.startIcon),
                        s = e.label !== ae || e.hasChildren,
                        i = e.error,
                        r = e.rtl ? "right" : "left",
                        o = e.rtl ? "left" : "right",
                        l = e.inputStyle,
                        c = e.labelStyle,
                        h = "floating" === c,
                        d = !(!h || !s || (!t.isFloatingActive && !e.value)),
                        u = e.disabled === ae ? t.disabled : e.disabled,
                        m = this._prevS,
                        _ = this._theme + this._rtl + (i ? " mbsc-error" : "") + (u ? " mbsc-disabled" : "") + (t.hasHover ? " mbsc-hover" : "") + (t.hasFocus && !u ? " mbsc-focus" : "");
                    if (
                        ("file" !== e.type ||
                            a ||
                            ((e.endIconSvg =
                                '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>'),
                            (a = !0)),
                        (this._hasStartIcon = n),
                        (this._hasEndIcon = a),
                        (this._hasError = i),
                        (this._disabled = u),
                        (this._cssClass =
                            this._className +
                            this._hb +
                            _ +
                            " mbsc-form-control-wrapper mbsc-textfield-wrapper mbsc-font mbsc-textfield-wrapper-" +
                            l +
                            (u ? " mbsc-disabled" : "") +
                            (s ? " mbsc-textfield-wrapper-" + c : "") +
                            (n ? " mbsc-textfield-wrapper-has-icon-" + r + " " : "") +
                            (a ? " mbsc-textfield-wrapper-has-icon-" + o + " " : "")),
                        s &&
                            (this._labelClass =
                                _ +
                                " mbsc-label mbsc-label-" +
                                c +
                                " mbsc-label-" +
                                l +
                                "-" +
                                c +
                                (n ? " mbsc-label-" + l + "-" + c + "-has-icon-" + r + " " : "") +
                                (a ? " mbsc-label-" + l + "-" + c + "-has-icon-" + o + " " : "") +
                                (h && this._animateFloating ? " mbsc-label-floating-animate" : "") +
                                (d ? " mbsc-label-floating-active" : "")),
                        (this._innerClass = _ + " mbsc-textfield-inner mbsc-textfield-inner-" + l + (s ? " mbsc-textfield-inner-" + c : "")),
                        n && (this._startIconClass = _ + " mbsc-textfield-icon mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + r + " mbsc-textfield-icon-" + l + "-" + r + (s ? " mbsc-textfield-icon-" + c : "")),
                        a && (this._endIconClass = _ + " mbsc-textfield-icon mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + o + " mbsc-textfield-icon-" + l + "-" + o + (s ? " mbsc-textfield-icon-" + c : "")),
                        e.passwordToggle &&
                            ((this._passIconClass = _ + " mbsc-toggle-icon mbsc-textfield-icon mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + o + " mbsc-textfield-icon-" + l + "-" + o + (s ? " mbsc-textfield-icon-" + c : "")),
                            (this._hidePass = this._hidePass === ae ? "password" === this.s.type : this._hidePass)),
                        (this._nativeElmClass =
                            _ +
                            " " +
                            (e.inputClass || "") +
                            " mbsc-textfield mbsc-textfield-" +
                            l +
                            (e.dropdown ? " mbsc-select" : "") +
                            (s ? " mbsc-textfield-" + c + " mbsc-textfield-" + l + "-" + c : "") +
                            (d ? " mbsc-textfield-floating-active" : "") +
                            (n ? " mbsc-textfield-has-icon-" + r + " mbsc-textfield-" + l + "-has-icon-" + r + (s ? " mbsc-textfield-" + l + "-" + c + "-has-icon-" + r : "") : "") +
                            (a ? " mbsc-textfield-has-icon-" + o + " mbsc-textfield-" + l + "-has-icon-" + o + (s ? " mbsc-textfield-" + l + "-" + c + "-has-icon-" + o : "") : "")),
                        ("select" === this._tag || e.dropdown) &&
                            (this._selectIconClass = "mbsc-select-icon mbsc-select-icon-" + l + this._rtl + this._theme + (s ? " mbsc-select-icon-" + c : "") + (n ? " mbsc-select-icon-" + r : "") + (a ? " mbsc-select-icon-" + o : "")),
                        "textarea" === this._tag)
                    ) {
                        (this._cssClass += " mbsc-textarea-wrapper"), (this._innerClass += " mbsc-textarea-inner"), (this._nativeElmClass += " mbsc-textarea");
                        var p = e.value || e.defaultValue,
                            v = m.value || m.defaultValue;
                        "textarea" !== this._tag || (p === v && e.inputStyle === m.inputStyle && e.labelStyle === m.labelStyle && e.rows === m.rows && e.theme === m.theme) || (this._shouldSize = !0);
                    }
                    "file" === e.type && ((this._dummyElmClass = this._nativeElmClass), (this._nativeElmClass += " mbsc-textfield-file")),
                        (this._errorClass =
                            this._theme + this._rtl + " mbsc-error-message mbsc-error-message-" + l + (s ? " mbsc-error-message-" + c : "") + (n ? " mbsc-error-message-has-icon-" + r : "") + (a ? " mbsc-error-message-has-icon-" + o : "")),
                        e.notch &&
                            "outline" === l &&
                            ((this._fieldSetClass = "mbsc-textfield-fieldset" + _ + (n ? " mbsc-textfield-fieldset-has-icon-" + r : "") + (a ? " mbsc-textfield-fieldset-has-icon-" + o : "")),
                            (this._legendClass = "mbsc-textfield-legend" + this._theme + (d || (s && "stacked" === c) ? " mbsc-textfield-legend-active" : ""))),
                        e.ripple && "outline" !== e.inputStyle && (this._rippleClass = "mbsc-textfield-ripple" + this._theme + (i ? " mbsc-error" : "") + (t.hasFocus ? " mbsc-textfield-ripple-active" : "")),
                        this._valueChecked && (this._animateFloating = !0);
                }),
                (t.prototype._updated = function () {
                    this._shouldSize && ((this._shouldSize = !1), this._sizeTextArea()), this._checkFloating();
                }),
                (t.prototype._destroy = function () {
                    xt(this._el, Pa, this._onAutoFill),
                        xt(this._el, ja, this._sizeTextArea),
                        (function (e) {
                            gn--, fn.unsubscribe(e), gn || xt(st, Qa, bn);
                        })(this._unsubscribe),
                        this._unlisten();
                }),
                (t.defaults = { dropdown: !1, dropdownIcon: E, hideIcon: "eye-blocked", inputStyle: "underline", labelStyle: "stacked", placeholder: "", ripple: !1, rows: 6, showIcon: "eye", type: "text" }),
                (t._name = "Input"),
                t
            );
        })(Va)
    );
    function Dn(e) {
        return (this.getChildContext = () => e.context), e.children;
    }
    function Tn(e) {
        const t = this;
        let a = e._container;
        (t.componentWillUnmount = function () {
            ma(null, t._temp), (t._temp = null), (t._container = null);
        }),
            t._container && t._container !== a && t.componentWillUnmount(),
            e._vnode
                ? (t._temp ||
                      ((t._container = a),
                      (t._temp = {
                          nodeType: 1,
                          parentNode: a,
                          childNodes: [],
                          appendChild(e) {
                              this.childNodes.push(e), t._container.appendChild(e);
                          },
                          insertBefore(e, a) {
                              this.childNodes.push(e), t._container.appendChild(e);
                          },
                          removeChild(e) {
                              this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t._container.removeChild(e);
                          },
                      })),
                  ma(Ut(Dn, { context: t.context }, e._vnode), t._temp))
                : t._temp && t.componentWillUnmount();
    }
    function Cn(e, t) {
        return Ut(Tn, { _vnode: e, _container: t });
    }
    var Sn,
        wn,
        kn = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props.context;
                    return e ? Cn(this.props.children, e) : null;
                }),
                t
            );
        })(Kt),
        Mn = 13,
        En = 32,
        Nn = 33,
        Ln = 34,
        In = 35,
        Hn = 36,
        On = 37,
        Vn = 38,
        Yn = 39,
        Pn = 40,
        Fn = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    var t = this.props,
                        a = t.ariaLabel,
                        n = t.children;
                    t.className, t.color;
                    var r = t.endIcon;
                    t.endIconSrc;
                    var o = t.endIconSvg,
                        l = t.icon;
                    t.iconSrc;
                    var c = t.iconSvg;
                    t.ripple, t.rtl;
                    var h = t.startIcon;
                    t.startIconSrc;
                    var d = t.startIconSvg;
                    t.tag, t.theme, t.themeVariant, t.variant;
                    var u = i(t, [
                            "ariaLabel",
                            "children",
                            "className",
                            "color",
                            "endIcon",
                            "endIconSrc",
                            "endIconSvg",
                            "icon",
                            "iconSrc",
                            "iconSvg",
                            "ripple",
                            "rtl",
                            "startIcon",
                            "startIconSrc",
                            "startIconSvg",
                            "tag",
                            "theme",
                            "themeVariant",
                            "variant",
                        ]),
                        m = s({ "aria-label": a, className: this._cssClass, ref: this._setEl }, u),
                        _ = ga(
                            jt,
                            null,
                            this._isIconOnly && ga(Ya, { className: this._iconClass, name: l, svg: c, theme: e.theme }),
                            this._hasStartIcon && ga(Ya, { className: this._startIconClass, name: h, svg: d, theme: e.theme }),
                            n,
                            this._hasEndIcon && ga(Ya, { className: this._endIconClass, name: r, svg: o, theme: e.theme })
                        );
                    return "span" === e.tag ? ga("span", s({ role: "button", tabIndex: this._tabIndex }, m), _) : "a" === e.tag ? ga("a", s({}, m), _) : ga("button", s({}, m), _);
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    n(t, e),
                    (t.prototype._mounted = function () {
                        var e = this;
                        this._unlisten = pn(this._el, {
                            click: !0,
                            onBlur: function () {
                                e.setState({ hasFocus: !1 });
                            },
                            onFocus: function () {
                                e.setState({ hasFocus: !0 });
                            },
                            onHoverIn: function () {
                                e.s.disabled || e.setState({ hasHover: !0 });
                            },
                            onHoverOut: function () {
                                e.setState({ hasHover: !1 });
                            },
                            onKeyDown: function (t) {
                                switch (t.keyCode) {
                                    case Mn:
                                    case En:
                                        e._el.click(), t.preventDefault();
                                }
                            },
                            onPress: function () {
                                e.setState({ isActive: !0 });
                            },
                            onRelease: function () {
                                e.setState({ isActive: !1 });
                            },
                            onStart: function () {
                                return { ripple: e.s.ripple && !e.s.disabled };
                            },
                        });
                    }),
                    (t.prototype._render = function (e, t) {
                        var a = this,
                            n = e.disabled;
                        (this._isIconOnly = !(!e.icon && !e.iconSvg)),
                            (this._hasStartIcon = !(!e.startIcon && !e.startIconSvg)),
                            (this._hasEndIcon = !(!e.endIcon && !e.endIconSvg)),
                            (this._tabIndex = n ? ae : e.tabIndex || 0),
                            (this._cssClass =
                                this._className +
                                " mbsc-reset mbsc-font mbsc-button" +
                                this._theme +
                                this._rtl +
                                " mbsc-button-" +
                                e.variant +
                                (this._isIconOnly ? " mbsc-icon-button" : "") +
                                (n ? " mbsc-disabled" : "") +
                                (e.color ? " mbsc-button-" + e.color : "") +
                                (t.hasFocus && !n ? " mbsc-focus" : "") +
                                (t.isActive && !n ? " mbsc-active" : "") +
                                (t.hasHover && !n ? " mbsc-hover" : "")),
                            (this._iconClass = "mbsc-button-icon" + this._rtl),
                            (this._startIconClass = this._iconClass + " mbsc-button-icon-start"),
                            (this._endIconClass = this._iconClass + " mbsc-button-icon-end"),
                            e.disabled &&
                                t.hasHover &&
                                setTimeout(function () {
                                    a.setState({ hasHover: !1 });
                                });
                    }),
                    (t.prototype._destroy = function () {
                        this._unlisten();
                    }),
                    (t.defaults = { ripple: !1, tag: "button", variant: "standard" }),
                    (t._name = "Button"),
                    t
                );
            })(Va)
        ),
        Rn = 0;
    function An(e, t, a) {
        var n,
            s,
            i,
            r,
            o,
            l,
            c,
            h = 0;
        function d() {
            (s.style.width = "100000px"), (s.style.height = "100000px"), (n.scrollLeft = 1e5), (n.scrollTop = 1e5), (l.scrollLeft = 1e5), (l.scrollTop = 1e5);
        }
        function u() {
            var e = +new Date();
            (r = 0), c || (e - h > 200 && !n.scrollTop && !n.scrollLeft && ((h = e), d()), r || (r = dt(u)));
        }
        function m() {
            o || (o = dt(_));
        }
        function _() {
            (o = 0), d(), t();
        }
        return (
            st && st.ResizeObserver
                ? (Sn ||
                      (Sn = new st.ResizeObserver(function (e) {
                          for (var t = 0, a = e; t < a.length; t++) {
                              var n = a[t];
                              n.target.__mbscResize && n.target.__mbscResize();
                          }
                      })),
                  Rn++,
                  (e.__mbscResize = function () {
                      a ? a.run(t) : t();
                  }),
                  Sn.observe(e))
                : (i = nt && nt.createElement("div")),
            i &&
                ((i.innerHTML = '<div class="mbsc-resize"><div class="mbsc-resize-i mbsc-resize-x"></div></div><div class="mbsc-resize"><div class="mbsc-resize-i mbsc-resize-y"></div></div>'),
                (i.dir = "ltr"),
                (l = i.childNodes[1]),
                (n = i.childNodes[0]),
                (s = n.childNodes[0]),
                e.appendChild(i),
                yt(n, "scroll", m),
                yt(l, "scroll", m),
                a
                    ? a.runOutsideAngular(function () {
                          dt(u);
                      })
                    : dt(u)),
            {
                detach: function () {
                    Sn ? (Rn--, delete e.__mbscResize, Sn.unobserve(e), Rn || (Sn = ae)) : (i && (xt(n, "scroll", m), xt(l, "scroll", m), e.removeChild(i), ut(o), (i = ae)), (c = !0));
                },
            }
        );
    }
    var zn = "input,select,textarea,button",
        Wn = 'textarea,button,input[type="button"],input[type="submit"]',
        Un = zn + ',[tabindex="0"]',
        Bn = { enter: Mn, esc: 27, space: En },
        jn = m && /(iphone|ipod)/i.test(p) && l >= 7;
    function Kn(e, t) {
        var a = e.s,
            n = [],
            s = {
                cancel: { cssClass: "mbsc-popup-button-close", name: "cancel", text: a.cancelText },
                close: { cssClass: "mbsc-popup-button-close", name: "close", text: a.closeText },
                ok: { cssClass: "mbsc-popup-button-primary", keyCode: Mn, name: "ok", text: a.okText },
                set: { cssClass: "mbsc-popup-button-primary", keyCode: Mn, name: "set", text: a.setText },
            };
        if (t && t.length)
            return (
                t.forEach(function (t) {
                    var a = le(t) ? s[t] || { text: t } : t;
                    (a.handler && !le(a.handler)) ||
                        (le(a.handler) && (a.name = a.handler),
                        (a.handler = function (t) {
                            e._onButtonClick({ domEvent: t, button: a });
                        })),
                        n.push(a);
                }),
                n
            );
    }
    var Jn = kn,
        Xn = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._setActive = function (e) {
                        t._active = e;
                    }),
                    (t._setContent = function (e) {
                        t._content = e;
                    }),
                    (t._setLimitator = function (e) {
                        t._limitator = e;
                    }),
                    (t._setPopup = function (e) {
                        t._popup = e;
                    }),
                    (t._setWrapper = function (e) {
                        t._wrapper = e;
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._template = function (e, t) {
                    var a = this;
                    return this._isModal
                        ? this._isVisible
                            ? ga(
                                  Jn,
                                  { context: this._ctx },
                                  ga(
                                      "div",
                                      {
                                          className:
                                              "mbsc-font mbsc-popup-wrapper mbsc-popup-wrapper-" +
                                              e.display +
                                              this._theme +
                                              this._rtl +
                                              " " +
                                              this._className +
                                              (e.fullScreen ? " mbsc-popup-wrapper-" + e.display + "-full" : "") +
                                              (this._touchUi ? "" : " mbsc-popup-pointer") +
                                              (this._round ? " mbsc-popup-round" : "") +
                                              (this._hasContext ? " mbsc-popup-wrapper-ctx" : "") +
                                              (t.isReady ? "" : " mbsc-popup-hidden"),
                                          ref: this._setWrapper,
                                          onKeyDown: this._onKeyDown,
                                      },
                                      e.showOverlay &&
                                          ga("div", {
                                              className:
                                                  "mbsc-popup-overlay mbsc-popup-overlay-" + e.display + this._theme + (this._isClosing ? " mbsc-popup-overlay-out" : "") + (this._isOpening && t.isReady ? " mbsc-popup-overlay-in" : ""),
                                              onClick: this._onOverlayClick,
                                          }),
                                      ga("div", { className: "mbsc-popup-limits mbsc-popup-limits-" + e.display, ref: this._setLimitator, style: this._limits }),
                                      ga(
                                          "div",
                                          {
                                              className:
                                                  "mbsc-popup " +
                                                  this._theme +
                                                  this._hb +
                                                  " mbsc-popup-" +
                                                  e.display +
                                                  (e.fullScreen ? "-full" : "") +
                                                  (t.bubblePos && t.showArrow && "anchored" === e.display ? " mbsc-popup-anchored-" + t.bubblePos : "") +
                                                  (this._isClosing ? " mbsc-popup-" + this._animation + "-out" : "") +
                                                  (this._isOpening && t.isReady ? " mbsc-popup-" + this._animation + "-in" : ""),
                                              role: "dialog",
                                              ref: this._setPopup,
                                              style: this._style,
                                              onClick: this._onPopupClick,
                                              onAnimationEnd: this._onAnimationEnd,
                                          },
                                          "anchored" === e.display &&
                                              t.showArrow &&
                                              ga(
                                                  "div",
                                                  { className: "mbsc-popup-arrow-wrapper mbsc-popup-arrow-wrapper-" + t.bubblePos + this._theme },
                                                  ga("div", { className: "mbsc-popup-arrow mbsc-popup-arrow-" + t.bubblePos + this._theme, style: t.arrowPos })
                                              ),
                                          ga("div", { className: "mbsc-popup-focus", tabIndex: -1, ref: this._setActive }),
                                          ga(
                                              "div",
                                              {
                                                  className:
                                                      "mbsc-popup-body mbsc-popup-body-" + e.display + this._theme + this._hb + (e.fullScreen ? " mbsc-popup-body-" + e.display + "-full" : "") + (this._round ? " mbsc-popup-body-round" : ""),
                                              },
                                              this._headerText &&
                                                  ga("div", {
                                                      className: "mbsc-popup-header mbsc-popup-header-" + e.display + this._theme + this._hb + (this._buttons ? "" : " mbsc-popup-header-no-buttons"),
                                                      dangerouslySetInnerHTML: this._headerText,
                                                  }),
                                              ga("div", { className: "mbsc-popup-content" + (e.contentPadding ? " mbsc-popup-padding" : ""), ref: this._setContent }, e.children),
                                              this._buttons &&
                                                  ga(
                                                      "div",
                                                      {
                                                          className:
                                                              "mbsc-popup-buttons mbsc-popup-buttons-" +
                                                              e.display +
                                                              this._theme +
                                                              this._rtl +
                                                              this._hb +
                                                              (this._flexButtons ? " mbsc-popup-buttons-flex" : "") +
                                                              (e.fullScreen ? " mbsc-popup-buttons-" + e.display + "-full" : ""),
                                                      },
                                                      this._buttons.map(function (t, n) {
                                                          return ga(
                                                              Fn,
                                                              {
                                                                  color: t.color,
                                                                  className: "mbsc-popup-button mbsc-popup-button-" + e.display + a._rtl + a._hb + (a._flexButtons ? " mbsc-popup-button-flex" : "") + " " + (t.cssClass || ""),
                                                                  icon: t.icon,
                                                                  disabled: t.disabled,
                                                                  key: n,
                                                                  theme: e.theme,
                                                                  themeVariant: e.themeVariant,
                                                                  variant: t.variant || e.buttonVariant,
                                                                  onClick: t.handler,
                                                              },
                                                              t.text
                                                          );
                                                      })
                                                  )
                                          )
                                      )
                                  )
                              )
                            : null
                        : ga(jt, null, e.children);
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._lastFocus = +new Date()),
                        (t._onOverlayClick = function () {
                            t._isOpen && t.s.closeOnOverlayClick && !t._preventClose && t._close("overlay"), (t._preventClose = !1);
                        }),
                        (t._onDocClick = function () {
                            t.s.showOverlay || wn !== t || t._onOverlayClick();
                        }),
                        (t._onMouseDown = function (e) {
                            t.s.showOverlay || (t._target = e.target);
                        }),
                        (t._onMouseUp = function (e) {
                            t._target && t._popup && t._popup.contains(t._target) && !t._popup.contains(e.target) && (t._preventClose = !0), (t._target = !1);
                        }),
                        (t._onPopupClick = function () {
                            t.s.showOverlay || (t._preventClose = !0);
                        }),
                        (t._onAnimationEnd = function (e) {
                            e.target === t._popup && (t._isClosing && (t._onClosed(), (t._isClosing = !1), t.setState({ isReady: !1 })), t._isOpening && (t._onOpened(), (t._isOpening = !1), t.forceUpdate()));
                        }),
                        (t._onButtonClick = function (e) {
                            var a = e.domEvent,
                                n = e.button;
                            t._hook("onButtonClick", { domEvent: a, button: n }), /cancel|close|ok|set/.test(n.name) && t._close(n.name);
                        }),
                        (t._onFocus = function (e) {
                            var a = +new Date();
                            wn === t && e.target.nodeType && t._ctx.contains(e.target) && !t._popup.contains(e.target) && a - t._lastFocus > 100 && ((t._lastFocus = a), t._active.focus());
                        }),
                        (t._onKeyDown = function (e) {
                            var a = t.s,
                                n = e.keyCode;
                            if ((((n === En && !Ht(e.target, zn)) || (t._lock && (n === Vn || n === Pn))) && e.preventDefault(), a.focusTrap && 9 === n)) {
                                var s = t._popup.querySelectorAll(Un),
                                    i = [],
                                    r = -1,
                                    o = 0,
                                    l = -1;
                                Yt(s, function (e) {
                                    e.disabled || (!e.offsetHeight && !e.offsetWidth) || (i.push(e), r++, e === t._doc.activeElement && (l = r));
                                }),
                                    e.shiftKey && ((o = r), (r = 0)),
                                    l === r && (i[o].focus(), e.preventDefault());
                            }
                        }),
                        (t._onContentScroll = function (e) {
                            !t._lock || (e.type === an && "stylus" === e.touches[0].touchType) || e.preventDefault();
                        }),
                        (t._onScroll = function (e) {
                            var a = t.s;
                            a.closeOnScroll ? t._close("scroll") : (t._hasContext || "anchored" === a.display) && t.position();
                        }),
                        (t._onWndKeyDown = function (e) {
                            var a = t.s,
                                n = e.keyCode;
                            if (wn === t) {
                                if ((t._hook("onKeyDown", { keyCode: n }), a.closeOnEsc && 27 === n && t._close("esc"), n === Mn && Ht(e.target, Wn) && !e.shiftKey)) return;
                                if (t._buttons)
                                    for (var s = 0, i = t._buttons; s < i.length; s++)
                                        for (var r = i[s], o = 0, l = oe(r.keyCode) ? r.keyCode : [r.keyCode]; o < l.length; o++) {
                                            var c = l[o];
                                            if (!r.disabled && c !== ae && (c === n || Bn[c] === n)) return void r.handler(e);
                                        }
                            }
                        }),
                        (t._onResize = function () {
                            var e = t._wrapper,
                                a = t._hasContext;
                            (t._vpWidth = Math.min(e.clientWidth, a ? 1 / 0 : t._win.innerWidth)),
                                (t._vpHeight = Math.min(e.clientHeight, a ? 1 / 0 : t._win.innerHeight)),
                                (t._maxWidth = t._limitator.offsetWidth),
                                (t._maxHeight = t.s.maxHeight !== ae || t._vpWidth < 768 || t._vpHeight < 650 ? t._limitator.offsetHeight : 600),
                                (t._round = !1 === t.s.touchUi || (t._popup.offsetWidth < t._vpWidth && t._vpWidth > t._maxWidth));
                            var n = { isLarge: t._round, maxPopupHeight: t._maxHeight, maxPopupWidth: t._maxWidth, target: t._wrapper, windowHeight: t._vpHeight, windowWidth: t._vpWidth };
                            !1 === t._hook("onResize", n) || n.cancel || t.position();
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    (t.prototype.open = function () {
                        this._isOpen || this.setState({ isOpen: !0 });
                    }),
                    (t.prototype.close = function () {
                        this._close();
                    }),
                    (t.prototype.isVisible = function () {
                        return !!this._isOpen;
                    }),
                    (t.prototype.position = function () {
                        if (this._isOpen) {
                            var e = this.s,
                                t = this.state,
                                a = this._wrapper,
                                n = this._popup,
                                s = this._hasContext,
                                i = e.anchor,
                                r = e.anchorAlign,
                                o = e.rtl,
                                l = St(this._scrollCont),
                                c = Ct(this._scrollCont),
                                h = this._vpWidth,
                                d = this._vpHeight,
                                u = this._maxWidth,
                                m = this._maxHeight,
                                _ = Math.min(n.offsetWidth, u),
                                p = Math.min(n.offsetHeight, m),
                                v = e.showArrow;
                            (this._lock = e.scrollLock && this._content.scrollHeight <= this._content.clientHeight), s && ((a.style.top = l + "px"), (a.style.left = c + "px"));
                            var f = !1 === this._hook("onPosition", { isLarge: this._round, maxPopupHeight: m, maxPopupWidth: u, target: this._wrapper, windowHeight: d, windowWidth: h });
                            if ("anchored" !== e.display || f) this.setState({ height: d, isReady: !0, showArrow: v, width: h });
                            else {
                                var g = 0,
                                    b = 0,
                                    y = re(t.modalLeft || 0, 8, h - _ - 8),
                                    x = t.modalTop || 8,
                                    D = "bottom",
                                    T = {},
                                    C = v ? 16 : 4,
                                    S = (a.offsetWidth - h) / 2,
                                    w = (a.offsetHeight - d) / 2;
                                if (s) {
                                    var k = this._ctx.getBoundingClientRect();
                                    (b = k.top), (g = k.left);
                                }
                                if (i && this._ctx.contains(i)) {
                                    var M = i.getBoundingClientRect(),
                                        E = M.top - b,
                                        N = M.left - g,
                                        L = i.offsetWidth,
                                        I = i.offsetHeight;
                                    if (
                                        ((y = re((y = ("start" === r && !o) || ("end" === r && o) ? N : ("end" === r && !o) || ("start" === r && o) ? N + L - _ : N - (_ - L) / 2), 8, h - _ - 8)),
                                        (x = E + I + C),
                                        (T = { left: re(N + L / 2 - y - S, 30, _ - 30) + "px" }),
                                        x + p + C > d)
                                    )
                                        if (E - p - C > 0) (D = "top"), (x = E - p - C);
                                        else if (!e.disableLeftRight) {
                                            var H = N - _ - 8 > 0;
                                            (H || N + L + _ + 8 <= h) &&
                                                ((x = re(E - (p - I) / 2, 8, d - p - 8)) + p + 8 > d && (x = Math.max(d - p - 8, 0)),
                                                (T = { top: re(E + I / 2 - x - w, 30, p - 30) + "px" }),
                                                (D = H ? "left" : "right"),
                                                (y = H ? N - _ : N + L));
                                        }
                                }
                                ("top" !== D && "bottom" !== D) || (x + p + C > d && ((x = Math.max(d - p - C, 0)), (v = !1))),
                                    this.setState({ arrowPos: T, bubblePos: D, height: d, isReady: !0, modalLeft: y, modalTop: x, showArrow: v, width: h });
                            }
                        }
                    }),
                    (t.prototype._render = function (e, t) {
                        "bubble" === e.display && (e.display = "anchored");
                        var a = e.display,
                            n = this._prevS,
                            s = "anchored" === a,
                            i = "inline" !== a,
                            r = e.fullScreen && i,
                            o = !!i && (e.isOpen === ae ? t.isOpen : e.isOpen);
                        if (
                            (o && (e.windowWidth !== n.windowWidth || e.display !== n.display || e.showArrow !== n.showArrow || (e.anchor !== n.anchor && "anchored" === e.display)) && (this._shouldPosition = !0),
                            (this._limits = { maxHeight: ue(e.maxHeight), maxWidth: ue(e.maxWidth) }),
                            (this._style = {
                                height: r ? "100%" : ue(e.height),
                                left: s && t.modalLeft ? t.modalLeft + "px" : "",
                                maxHeight: ue(this._maxHeight || e.maxHeight),
                                maxWidth: ue(this._maxWidth || e.maxWidth),
                                top: s && t.modalTop ? t.modalTop + "px" : "",
                                width: r ? "100%" : ue(e.width),
                            }),
                            (this._hasContext = "body" !== e.context && e.context !== ae),
                            (this._needsLock = jn && !this._hasContext && "anchored" !== a && e.scrollLock),
                            (this._isModal = i),
                            (this._flexButtons = "center" === a || (!this._touchUi && !r && ("top" === a || "bottom" === a))),
                            e.animation)
                        )
                            this._animation = e.animation;
                        else
                            switch (a) {
                                case "bottom":
                                    this._animation = "slide-up";
                                    break;
                                case "top":
                                    this._animation = "slide-down";
                                    break;
                                default:
                                    this._animation = "pop";
                            }
                        e.buttons ? e.buttons !== n.buttons && (this._buttons = Kn(this, e.buttons)) : (this._buttons = ae),
                            e.headerText !== n.headerText && (this._headerText = e.headerText ? this._safeHtml(e.headerText) : ae),
                            o && !this._isOpen && this._onOpen(),
                            !o && this._isOpen && this._onClose(),
                            (this._isOpen = o),
                            (this._isVisible = o || this._isClosing);
                    }),
                    (t.prototype._updated = function () {
                        var e = this,
                            t = this.s;
                        if (
                            nt &&
                            (t.context !== this._prevS.context || !this._ctx) &&
                            ((a = le(t.context) ? nt.querySelector(t.context) : t.context) || (a = nt.body),
                            (a.__mbscLock = a.__mbscLock || 0),
                            (a.__mbscIOSLock = a.__mbscIOSLock || 0),
                            (a.__mbscModals = a.__mbscModals || 0),
                            (this._ctx = a),
                            this._justOpened)
                        )
                            return void setTimeout(function () {
                                e.forceUpdate();
                            });
                        if (this._justOpened) {
                            var a = this._ctx,
                                n = this._wrapper,
                                s = this._hasContext,
                                i = (this._doc = Dt(n)),
                                r = (this._win = wt(n));
                            if (!this._hasWidth && t.responsive) {
                                var o = Math.min(n.clientWidth, s ? 1 / 0 : r.innerWidth),
                                    l = Math.min(n.clientHeight, s ? 1 / 0 : r.innerHeight);
                                if (((this._hasWidth = !0), o !== this.state.width || l !== this.state.height))
                                    return void setTimeout(function () {
                                        e.setState({ height: l, width: o });
                                    });
                            }
                            if (
                                ((this._scrollCont = s ? a : r),
                                (this._observer = An(n, this._onResize, this._zone)),
                                (this._prevFocus = t.focusElm || i.activeElement),
                                a.__mbscModals++,
                                t.focusOnOpen &&
                                    i.activeElement &&
                                    setTimeout(function () {
                                        i.activeElement.blur();
                                    }),
                                this._needsLock)
                            ) {
                                if (!a.__mbscIOSLock) {
                                    var c = St(this._scrollCont),
                                        h = Ct(this._scrollCont);
                                    (a.style.left = -h + "px"), (a.style.top = -c + "px"), (a.__mbscScrollLeft = h), (a.__mbscScrollTop = c), a.classList.add("mbsc-popup-open-ios"), a.parentNode.classList.add("mbsc-popup-open-ios");
                                }
                                a.__mbscIOSLock++;
                            }
                            s && a.classList.add("mbsc-popup-ctx"),
                                t.focusTrap && yt(r, Ba, this._onFocus),
                                yt(this._scrollCont, an, this._onContentScroll, { passive: !1 }),
                                yt(this._scrollCont, rn, this._onContentScroll, { passive: !1 }),
                                yt(this._scrollCont, $a, this._onContentScroll, { passive: !1 }),
                                setTimeout(function () {
                                    yt(i, Ja, e._onMouseDown), yt(i, qa, e._onMouseUp), yt(i, Aa, e._onDocClick);
                                }),
                                this._hook("onOpen", { target: this._wrapper });
                        }
                        this._shouldPosition &&
                            setTimeout(function () {
                                e._onResize();
                            }),
                            (this._justOpened = !1),
                            (this._justClosed = !1),
                            (this._shouldPosition = !1);
                    }),
                    (t.prototype._destroy = function () {
                        this._isOpen && (this._onClosed(), this._unlisten(), wn === this && (wn = this._prevModal));
                    }),
                    (t.prototype._onOpen = function () {
                        var e = this;
                        mt ? ((this._isOpening = !0), (this._isClosing = !1)) : this._onOpened(),
                            (this._justOpened = !0),
                            (this._preventClose = !1),
                            setTimeout(function () {
                                (e._prevModal = wn), (wn = e);
                            });
                    }),
                    (t.prototype._onClose = function () {
                        mt ? ((this._isClosing = !0), (this._isOpening = !1)) : (this._onClosed(), this.setState({ isReady: !1 })), (this._hasWidth = !1), this._unlisten();
                    }),
                    (t.prototype._onOpened = function () {
                        var e = this.s;
                        if (e.focusOnOpen) {
                            var t = e.activeElm,
                                a = t ? (le(t) ? this._popup.querySelector(t) : t) : this._active;
                            a && a.focus && a.focus();
                        }
                        yt(this._win, Ka, this._onWndKeyDown), yt(this._scrollCont, en, this._onScroll);
                    }),
                    (t.prototype._onClosed = function () {
                        var e = this,
                            t = this._ctx,
                            a = this._prevFocus && this._prevFocus.focus && this.s.focusOnClose;
                        t.mbscModals--,
                            (this._justClosed = !0),
                            this._needsLock &&
                                (t.__mbscIOSLock--,
                                t.__mbscIOSLock ||
                                    (t.classList.remove("mbsc-popup-open-ios"),
                                    t.parentNode.classList.remove("mbsc-popup-open-ios"),
                                    (t.style.left = ""),
                                    (t.style.top = ""),
                                    (function (e, t) {
                                        e.scrollTo ? e.scrollTo(t, e.scrollY) : (e.scrollLeft = t);
                                    })(this._scrollCont, t.__mbscScrollLeft),
                                    (function (e, t) {
                                        e.scrollTo ? e.scrollTo(e.scrollX, t) : (e.scrollTop = t);
                                    })(this._scrollCont, t.__mbscScrollTop))),
                            this._hasContext && !t.mbscModals && t.classList.remove("mbsc-popup-ctx"),
                            this._hook("onClosed", { focus: a }),
                            a && this._prevFocus.focus(),
                            setTimeout(function () {
                                wn === e && (wn = e._prevModal);
                            });
                    }),
                    (t.prototype._unlisten = function () {
                        xt(this._win, Ka, this._onWndKeyDown),
                            xt(this._scrollCont, en, this._onScroll),
                            xt(this._scrollCont, an, this._onContentScroll, { passive: !1 }),
                            xt(this._scrollCont, rn, this._onContentScroll, { passive: !1 }),
                            xt(this._scrollCont, $a, this._onContentScroll, { passive: !1 }),
                            xt(this._doc, Ja, this._onMouseDown),
                            xt(this._doc, qa, this._onMouseUp),
                            xt(this._doc, Aa, this._onDocClick),
                            this.s.focusTrap && xt(this._win, Ba, this._onFocus),
                            this._observer && (this._observer.detach(), (this._observer = null));
                    }),
                    (t.prototype._close = function (e) {
                        this._isOpen && (this.s.isOpen === ae && this.setState({ isOpen: !1 }), this._hook("onClose", { source: e }));
                    }),
                    (t.defaults = {
                        buttonVariant: "flat",
                        cancelText: "Cancel",
                        closeOnEsc: !0,
                        closeOnOverlayClick: !0,
                        closeText: "Close",
                        contentPadding: !0,
                        display: "center",
                        focusOnClose: !0,
                        focusOnOpen: !0,
                        focusTrap: !0,
                        maxWidth: 600,
                        okText: "Ok",
                        scrollLock: !0,
                        setText: "Set",
                        showArrow: !0,
                        showOverlay: !0,
                    }),
                    t
                );
            })(Va)
        );
    function qn(e, t, a) {
        var n = t.inputComponent,
            i = s({ defaultValue: (e._value && e._valueText) || "", ref: e._setInput }, t.inputProps);
        t.inputComponent ||
            ((n = xn),
            (i = s(
                {
                    disabled: t.disabled,
                    dropdown: t.dropdown,
                    endIcon: t.endIcon,
                    endIconSrc: t.endIconSrc,
                    endIconSvg: t.endIconSvg,
                    error: t.error,
                    errorMessage: t.errorMessage,
                    inputStyle: t.inputStyle,
                    label: t.label,
                    labelStyle: t.labelStyle,
                    name: t.name,
                    placeholder: t.placeholder,
                    rtl: t.rtl,
                    startIcon: t.startIcon,
                    startIconSrc: t.startIconSrc,
                    startIconSvg: t.startIconSvg,
                    theme: t.theme,
                    themeVariant: t.themeVariant,
                },
                i
            )));
        var r = ga(n, i);
        return ga(
            jt,
            null,
            e._showInput && r,
            ga(
                Xn,
                {
                    anchor: e._anchor,
                    anchorAlign: e._anchorAlign,
                    animation: t.animation,
                    buttons: e._buttons,
                    cancelText: t.cancelText,
                    closeOnEsc: t.closeOnEsc,
                    closeOnOverlayClick: t.closeOnOverlayClick,
                    closeOnScroll: t.closeOnScroll,
                    closeText: t.closeText,
                    contentPadding: !1,
                    context: t.context,
                    cssClass: e._cssClass,
                    disableLeftRight: !0,
                    display: t.display,
                    focusElm: e._focusElm,
                    focusOnClose: t.focusOnClose,
                    focusTrap: t.focusTrap,
                    fullScreen: t.fullScreen,
                    headerText: e._headerText,
                    height: t.height,
                    isOpen: e._isOpen,
                    maxHeight: t.maxHeight,
                    maxWidth: e._maxWidth,
                    onClose: e._onPopupClose,
                    onClosed: e._onPopupClosed,
                    onKeyDown: e._onPopupKey,
                    onOpen: e._onPopupOpen,
                    onResize: e._onResize,
                    setText: t.setText,
                    showArrow: t.showArrow,
                    showOverlay: t.showOverlay,
                    ref: e._setPopup,
                    rtl: t.rtl,
                    scrollLock: t.scrollLock,
                    theme: t.theme,
                    themeVariant: t.themeVariant,
                    touchUi: e._touchUi,
                    windowWidth: e.state.width,
                    width: t.width,
                },
                a
            )
        );
    }
    var Gn = 6e4,
        Zn = 36e5,
        $n = 864e5,
        Qn = {
            amText: "am",
            dateFormat: "MM/DD/YYYY",
            dateFormatLong: "D DDD MMM YYYY",
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daySuffix: "",
            firstDay: 0,
            fromText: "Start",
            getDate: ds,
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthSuffix: "",
            pmText: "pm",
            separator: " ",
            shortYearCutoff: "+10",
            timeFormat: "h:mm A",
            toText: "End",
            todayText: "Today",
            yearSuffix: "",
            getMonth: function (e) {
                return e.getMonth();
            },
            getDay: function (e) {
                return e.getDate();
            },
            getYear: function (e) {
                return e.getFullYear();
            },
            getMaxDayOfMonth: function (e, t) {
                return 32 - new Date(e, t, 32, 12).getDate();
            },
            getWeekNumber: function (e) {
                var t = new Date(+e);
                t.setHours(0, 0, 0), t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                var a = new Date(t.getFullYear(), 0, 1);
                return Math.ceil(((t - a) / 864e5 + 1) / 7);
            },
        },
        es = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?((Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/,
        ts = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
    function as(e, t, a) {
        var n,
            s,
            i = { y: 1, m: 2, d: 3, h: 4, i: 5, s: 6, u: 7, tz: 8 };
        if (a) for (n in i) i.hasOwnProperty(n) && (s = e[i[n] - t]) && (a[n] = "tz" === n ? s : 1);
    }
    function ns(e) {
        return +new Date(1970, 0, 1, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()) - +new Date(1970, 0, 1);
    }
    function ss(e, t, a, n) {
        return (e <= a && a < t) || (e < n && n <= t) || (a < e && t < n);
    }
    function is(e) {
        return ds(e.getFullYear(), e.getMonth(), e.getDate());
    }
    function rs(e) {
        return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
    }
    function os(e, t) {
        return pe((rs(t) - rs(e)) / $n);
    }
    function ls(e, t, a) {
        var n = e.getFullYear(),
            s = e.getMonth(),
            i = e.getDay(),
            r = a === ae ? t.firstDay : a;
        return new Date(n, s, r - (r - i > 0 ? 7 : 0) - i + e.getDate());
    }
    function cs(e, t) {
        return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
    }
    function hs(e, t, a) {
        return a.getYear(e) === a.getYear(t) && a.getMonth(e) === a.getMonth(t);
    }
    function ds(e, t, a, n, s, i, r) {
        var o = new Date(e, t, a, n || 0, s || 0, i || 0, r || 0);
        return 23 === o.getHours() && 0 === (n || 0) && o.setHours(o.getHours() + 2), o;
    }
    function us(e) {
        return e.getTime;
    }
    function ms(e, t, a, n) {
        var s;
        return e
            ? us(e)
                ? e
                : e._isAMomentObject
                ? e.toDate()
                : (le(e) && (e = e.trim()),
                  (s = ts.exec(e))
                      ? (as(s, 2, n), new Date(1970, 0, 1, s[2] ? +s[2] : 0, s[3] ? +s[3] : 0, s[4] ? +s[4] : 0, s[5] ? +s[5] : 0))
                      : (s || (s = es.exec(e)), s ? (as(s, 0, n), new Date(s[1] ? +s[1] : 1970, s[2] ? s[2] - 1 : 0, s[3] ? +s[3] : 1, s[4] ? +s[4] : 0, s[5] ? +s[5] : 0, s[6] ? +s[6] : 0, s[7] ? +s[7] : 0)) : vs(t, e, a)))
            : null;
    }
    function _s(e, t, a, n) {
        var s = (m && window.moment) || t.moment,
            i = t.returnFormat;
        if (e) {
            if ("moment" === i && s) return s(e);
            if ("locale" === i) return ps(a, e, t);
            if ("iso8601" === i)
                return (function (e, t) {
                    var a = "",
                        n = "";
                    return (
                        e &&
                            (t.h && ((n += _e(e.getHours()) + ":" + _e(e.getMinutes())), t.s && (n += ":" + _e(e.getSeconds())), t.u && (n += "." + _e(e.getMilliseconds(), 3)), t.tz && (n += t.tz)),
                            t.y ? ((a += e.getFullYear()), t.m && ((a += "-" + _e(e.getMonth() + 1)), t.d && (a += "-" + _e(e.getDate())), t.h && (a += "T" + n))) : t.h && (a = n)),
                        a
                    );
                })(e, n);
        }
        return e;
    }
    function ps(e, t, a) {
        var n,
            i,
            r = "",
            o = !1,
            l = s({}, Qn, a),
            c = function (t) {
                for (var a = 0, s = n; s + 1 < e.length && e.charAt(s + 1) === t; ) a++, s++;
                return a;
            },
            h = function (e) {
                var t = c(e);
                return (n += t), t;
            },
            d = function (e, t, a) {
                var n = "" + t;
                if (h(e)) for (; n.length < a; ) n = "0" + n;
                return n;
            },
            u = function (e, t, a, n) {
                return 3 === h(e) ? n[t] : a[t];
            };
        for (n = 0; n < e.length; n++)
            if (o) "'" !== e.charAt(n) || h("'") ? (r += e.charAt(n)) : (o = !1);
            else
                switch (e.charAt(n)) {
                    case "D":
                        r += c("D") > 1 ? u("D", t.getDay(), l.dayNamesShort, l.dayNames) : d("D", l.getDay(t), 2);
                        break;
                    case "M":
                        r += c("M") > 1 ? u("M", l.getMonth(t), l.monthNamesShort, l.monthNames) : d("M", l.getMonth(t) + 1, 2);
                        break;
                    case "Y":
                        (i = l.getYear(t)), (r += 3 === h("Y") ? i : (i % 100 < 10 ? "0" : "") + (i % 100));
                        break;
                    case "h":
                        var m = t.getHours();
                        r += d("h", m > 12 ? m - 12 : 0 === m ? 12 : m, 2);
                        break;
                    case "H":
                        r += d("H", t.getHours(), 2);
                        break;
                    case "m":
                        r += d("m", t.getMinutes(), 2);
                        break;
                    case "s":
                        r += d("s", t.getSeconds(), 2);
                        break;
                    case "a":
                        r += t.getHours() > 11 ? l.pmText : l.amText;
                        break;
                    case "A":
                        r += t.getHours() > 11 ? l.pmText.toUpperCase() : l.amText.toUpperCase();
                        break;
                    case "'":
                        h("'") ? (r += "'") : (o = !0);
                        break;
                    default:
                        r += e.charAt(n);
                }
        return r;
    }
    function vs(e, t, a) {
        var n = s({}, Qn, a),
            i = ms(n.defaultValue || new Date());
        if (!t) return i;
        e || (e = n.dateFormat + n.separator + n.timeFormat);
        var r,
            o = n.shortYearCutoff,
            l = n.getYear(i),
            c = n.getMonth(i) + 1,
            h = n.getDay(i),
            d = i.getHours(),
            u = i.getMinutes(),
            m = 0,
            _ = -1,
            p = !1,
            v = 0,
            f = function (t) {
                for (var a = 0, n = r; n + 1 < e.length && e.charAt(n + 1) === t; ) a++, n++;
                return a;
            },
            g = function (e) {
                var t = f(e);
                return (r += t), t;
            },
            b = function (e) {
                var a = g(e),
                    n = new RegExp("^\\d{1," + (a >= 2 ? 4 : 2) + "}"),
                    s = t.substr(v).match(n);
                return s ? ((v += s[0].length), parseInt(s[0], 10)) : 0;
            },
            y = function (e, a, n) {
                for (var s = 3 === g(e) ? n : a, i = 0; i < s.length; i++) if (t.substr(v, s[i].length).toLowerCase() === s[i].toLowerCase()) return (v += s[i].length), i + 1;
                return 0;
            },
            x = function () {
                v++;
            };
        for (r = 0; r < e.length; r++)
            if (p) "'" !== e.charAt(r) || g("'") ? x() : (p = !1);
            else
                switch (e.charAt(r)) {
                    case "Y":
                        l = b("Y");
                        break;
                    case "M":
                        c = f("M") < 2 ? b("M") : y("M", n.monthNamesShort, n.monthNames);
                        break;
                    case "D":
                        f("D") < 2 ? (h = b("D")) : y("D", n.dayNamesShort, n.dayNames);
                        break;
                    case "H":
                        d = b("H");
                        break;
                    case "h":
                        d = b("h");
                        break;
                    case "m":
                        u = b("m");
                        break;
                    case "s":
                        m = b("s");
                        break;
                    case "a":
                        _ = y("a", [n.amText, n.pmText], [n.amText, n.pmText]) - 1;
                        break;
                    case "A":
                        _ = y("A", [n.amText, n.pmText], [n.amText, n.pmText]) - 1;
                        break;
                    case "'":
                        g("'") ? x() : (p = !0);
                        break;
                    default:
                        x();
                }
        if (l < 100) {
            var D = void 0;
            (D = l <= ("string" != typeof o ? +o : (new Date().getFullYear() % 100) + parseInt(o, 10)) ? 0 : -100), (l += new Date().getFullYear() - (new Date().getFullYear() % 100) + D);
        }
        d = -1 === _ ? d : _ && d < 12 ? d + 12 : _ || 12 !== d ? d : 0;
        var T = n.getDate(l, c - 1, h, d, u, m);
        return n.getYear(T) !== l || n.getMonth(T) + 1 !== c || n.getDay(T) !== h ? i : T;
    }
    function fs(e, t, a) {
        if (e === t) return !0;
        if ((oe(e) && !e.length && null === t) || (oe(t) && !t.length && null === e)) return !0;
        if (null === e || null === t || e === ae || t === ae) return !1;
        if (le(e) && le(t)) return e === t;
        var n = a && a.dateFormat;
        if (oe(e) || oe(t)) {
            if (e.length !== t.length) return !1;
            for (var s = 0; s < e.length; s++) {
                var i = e[s],
                    r = t[s];
                if (!(le(i) && le(r) ? i === r : +ms(i, n, a) == +ms(r, n, a))) return !1;
            }
            return !0;
        }
        return +ms(e, n, a) == +ms(t, n, a);
    }
    function gs(e, t) {
        var a = new Date(+e);
        return a.setDate(a.getDate() + t), a;
    }
    function bs(e, t) {
        var a = 6e4 * t;
        return new Date(Math.round(e.getTime() / a) * a);
    }
    x.datetime = { formatDate: ps, parseDate: vs };
    var ys = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 },
        xs = { byday: "weekDays", bymonth: "month", bymonthday: "day", dtstart: "from", freq: "repeat" };
    function Ds(e, t, a, n) {
        (t.start = ms(t.start, n, a)), (t.end = ms(t.end, n, a));
        for (var s = is(t.start), i = is(t.end); s <= i; ) Ts(e, s, t), (s = a.getDate(a.getYear(s), a.getMonth(s), a.getDay(s) + 1));
    }
    function Ts(e, t, a) {
        (e[+t] = e[+t] || []), e[+t].push(a);
    }
    function Cs(e, t, a, n, s, i) {
        var r = {};
        if (s)
            for (var o = 0, l = ks(s); o < l.length; o++) {
                r[+is(ms(l[o]))] = !0;
            }
        if (i)
            for (var c = 0, h = Ms(i, e, t, a, n); c < h.length; c++) {
                r[+h[c].d] = !0;
            }
        return r;
    }
    function Ss(e) {
        for (var t = {}, a = 0, n = e.split(";"); a < n.length; a++) {
            var s = n[a].split("="),
                i = s[0].trim().toLowerCase(),
                r = s[1].trim();
            t[xs[i] || i] = r;
        }
        return t;
    }
    function ws(e, t, a, n) {
        for (
            var s = a.getYear,
                i = a.getMonth,
                r = a.getDay,
                o = a.getDate,
                l = a.getMaxDayOfMonth,
                c = 0,
                h = null,
                d = function () {
                    var d = e[c],
                        u = le(d) || d.getTime || d.toDate;
                    if (u || (d.date && !d.recurring)) {
                        var m = ms(u ? d : d.date, n, a);
                        m > t && (null === h || m < h) && (h = m);
                    } else if (d.recurring) {
                        var _ = d.recurring;
                        le(_) && (_ = Ss(_));
                        var p = (_.repeat || "").toLowerCase(),
                            v = _.interval || 1,
                            f = _.count,
                            g = _.from ? ms(_.from) : ms(d.start || d.date) || (1 !== v || f !== ae ? new Date() : t),
                            b = _.until ? ms(_.until) : 1 / 0,
                            y = g < t,
                            x = y ? t : is(g),
                            D = b,
                            T = f === ae ? 1 / 0 : f,
                            C = (_.weekDays || "").split(","),
                            S = +(_.day || r(g)),
                            w = +(_.month || i(g)),
                            k = d.recurringException,
                            M = d.recurringExceptionRule,
                            E = void 0,
                            N = void 0,
                            L = !0,
                            I = 0,
                            H = 0,
                            O = void 0,
                            V = void 0;
                        switch (p) {
                            case "daily":
                                for (H = f && y ? fe(os(g, t) / v) : 0; L; ) (V = Cs((N = o(s(g), i(g), r(g) + H * v)), N, gs(N, 1), a, k, M)), N < D && H < T ? (N >= t && !V[+N] && ((h = h && h < N ? h : N), (L = !1)), H++) : (L = !1);
                                break;
                            case "weekly":
                                for (var Y = {}, P = [], F = g.getDay(), R = 0, A = C; R < A.length; R++) {
                                    var z = A[R];
                                    P.push(ys[z.toUpperCase()]);
                                }
                                if (
                                    (P.sort(function (e, t) {
                                        return (e = (e -= F) < 0 ? e + 7 : e) - (t = (t -= F) < 0 ? t + 7 : t);
                                    }),
                                    y && f === ae)
                                )
                                    for (var W = fe(os(ls(g, a), ls(t, a))), U = 0, B = P; U < B.length; U++) {
                                        z = B[U];
                                        var j = fe(W / (7 * v));
                                        z < g.getDay() && j--, z < t.getDay() && j++, (Y[z] = j), (H += j);
                                    }
                                for (; L; ) {
                                    for (var K = 0, J = P; K < J.length; K++) {
                                        z = J[K];
                                        (O = (E = ls(g, a, z)) < g ? 1 : 0),
                                            (V = Cs((N = o(s(E), i(E), r(E) + 7 * ((Y[z] || 0) + I + O) * v)), N, gs(N, 1), a, k, M)),
                                            N < D && H < T ? (N >= t && !V[+N] && ((h = h && h < N ? h : N), (L = !1)), H++) : (L = !1);
                                    }
                                    I++;
                                }
                                break;
                            case "monthly":
                                for (; L; ) {
                                    var X = l(s(g), i(g) + I * v);
                                    (V = Cs((N = o(s(g), i(g) + I * v, S < 0 ? X + S + 1 : S)), N, gs(N, 1), a, k, M)), N < D && H < T ? X >= S && (N >= x && N >= t && !V[+N] && ((h = h && h < N ? h : N), (L = !1)), H++) : (L = !1), I++;
                                }
                                break;
                            case "yearly":
                                for (; L; ) {
                                    X = l(s(g) + I * v, w - 1);
                                    (V = Cs((N = o(s(g) + I * v, w - 1, S < 0 ? X + S + 1 : S)), N, gs(N, 1), a, k, M)), N < D && H < T ? X >= S && (N >= x && N >= t && !V[+N] && ((h = h && h < N ? h : N), (L = !1)), H++) : (L = !1), I++;
                                }
                        }
                    } else if (d.start && d.end) {
                        var q = ms(d.start, n, a);
                        ms(d.end, n, a) > t && (h = q <= t ? t : h && h < q ? h : q);
                    }
                    c++;
                };
            c < e.length;

        )
            d();
        return h;
    }
    function ks(e) {
        return e ? (oe(e) ? e : le(e) ? e.split(",") : [e]) : [];
    }
    function Ms(e, t, a, n, s, i, r) {
        le(e) && (e = Ss(e));
        var o,
            l,
            c,
            h = s.getYear,
            d = s.getMonth,
            u = s.getDay,
            m = s.getDate,
            _ = s.getMaxDayOfMonth,
            p = (e.repeat || "").toLowerCase(),
            v = e.interval || 1,
            f = e.count,
            g = [],
            b = e.from ? ms(e.from) : t || (1 !== v || f !== ae ? new Date() : a),
            y = e.until ? ms(e.until) : 1 / 0,
            x = b < a,
            D = x ? a : is(b),
            T = y < n ? y : n,
            C = f === ae ? 1 / 0 : f,
            S = (e.weekDays || "").split(","),
            w = +(e.day || u(b)),
            k = +(e.month || d(b)),
            M = Cs(t, a, n, s, i, r),
            E = !0,
            N = 0,
            L = 0;
        switch (p) {
            case "daily":
                for (L = f && x ? fe(os(b, a) / v) : 0; E; ) (l = m(h(b), d(b), u(b) + L * v)) < T && L < C ? (M[+l] || g.push({ d: l, i: L }), L++) : (E = !1);
                break;
            case "weekly":
                for (var I = {}, H = [], O = b.getDay(), V = 0, Y = S; V < Y.length; V++) {
                    var P = Y[V];
                    H.push(ys[P.trim().toUpperCase()]);
                }
                if (
                    (H.sort(function (e, t) {
                        return (e = (e -= O) < 0 ? e + 7 : e) - (t = (t -= O) < 0 ? t + 7 : t);
                    }),
                    x && f === ae)
                )
                    for (var F = fe(os(ls(b, s), ls(a, s))), R = 0, A = H; R < A.length; R++) {
                        P = A[R];
                        var z = fe(F / (7 * v));
                        P < b.getDay() && z--, P < a.getDay() && z++, (I[P] = z), (L += z);
                    }
                for (; E; ) {
                    for (var W = 0, U = H; W < U.length; W++) {
                        (c = (o = ls(b, s, (P = U[W]))) < is(b) ? 1 : 0), (l = m(h(o), d(o), u(o) + 7 * ((I[P] || 0) + N + c) * v)) < T && L < C ? (M[+l] || g.push({ d: l, i: L }), L++) : (E = !1);
                    }
                    N++;
                }
                break;
            case "monthly":
                for (; E; ) {
                    var B = _(h(b), d(b) + N * v);
                    (l = m(h(b), d(b) + N * v, w < 0 ? B + w + 1 : w)) < T && L < C ? B >= w && (l >= D && !M[+l] && g.push({ d: l, i: L }), L++) : (E = !1), N++;
                }
                break;
            case "yearly":
                for (; E; ) {
                    B = _(h(b) + N * v, k - 1);
                    (l = m(h(b) + N * v, k - 1, w < 0 ? B + w + 1 : w)) < T && L < C ? B >= w && (l >= D && !M[+l] && g.push({ d: l, i: L }), L++) : (E = !1), N++;
                }
        }
        return g;
    }
    function Es(e, t, a, n, i) {
        var r,
            o,
            l = n.getYear,
            c = n.getMonth,
            h = n.getDay,
            d = n.getDate,
            u = {};
        if (e) {
            for (var m = 0, _ = e; m < _.length; m++) {
                var p = _[m],
                    v = le(p) || p.getTime || p.toDate ? p : p.start || p.date,
                    f = ms(v, i, n);
                if (p.recurring)
                    for (var g = ts.test(v) ? null : f, b = 0, y = Ms(p.recurring, g, t, a, n, p.recurringException, p.recurringExceptionRule); b < y.length; b++) {
                        var x = y[b],
                            D = x.d,
                            T = s({}, p);
                        p.start ? ((o = ms(p.start)), (T.start = d(l(D), c(D), h(D), o.getHours(), o.getMinutes(), o.getSeconds()))) : ((o = new Date(D)), (T.start = o)),
                            p.end && ((r = ms(p.end)), (T.end = d(l(D), c(D), h(D) + (p.start ? os(o, r) : 0), r.getHours(), r.getMinutes(), r.getSeconds()))),
                            (T.nr = x.i),
                            (T.original = p),
                            T.start && T.end ? Ds(u, T, n, i) : Ts(u, D, T);
                    }
                else p.start && p.end ? Ds(u, p, n, i) : f && Ts(u, is(f), p);
            }
            return u;
        }
    }
    var Ns = new Date(1970, 0, 1),
        Ls = "month",
        Is = "year",
        Hs = "multi-year",
        Os = 1,
        Vs = s({}, Qn, { dateText: "Date", eventText: "event", eventsText: "events", moreEventsText: "{count} more", nextText: "Next", prevText: "Previous", showToday: !0, timeText: "Time" });
    function Ys(e, t) {
        var a = t.eventRangeSize || 1,
            n = "month" === t.calendarType,
            s = t.showCalendar,
            i = t.getDate,
            r = (s && n) || (!s && "week" !== t.eventRange) ? Ns : ls(Ns, t),
            o = t.getYear(r),
            l = t.getMonth(r),
            c = t.getDay(r);
        if (s) return n ? i(o, l + e, 1) : i(o, l, c + 7 * t.weeks * e);
        switch (t.eventRange) {
            case "year":
                return i(o + e * a, l, 1);
            case "week":
                return i(o, l, c + 7 * a * e);
            case "day":
                return i(o, l, c + a * e);
            default:
                return i(o, l + e * a, 1);
        }
    }
    function Ps(e, t) {
        var a,
            n = t.getYear,
            s = t.getMonth,
            i = "month" === t.calendarType,
            r = t.eventRangeSize || 1;
        if (t.showCalendar) return i ? s(e) - s(Ns) + 12 * (n(e) - n(Ns)) : fe(os(ls(Ns, t), ls(e, t)) / (7 * t.weeks));
        switch (t.eventRange) {
            case "year":
                a = n(e) - n(Ns);
                break;
            case "week":
                a = os(ls(Ns, t), ls(e, t)) / 7;
                break;
            case "day":
                a = os(Ns, e);
                break;
            case "month":
                a = s(e) - s(Ns) + 12 * (n(e) - n(Ns));
                break;
            default:
                return;
        }
        return fe(a / r);
    }
    function Fs(e, t) {
        return fe((t.getYear(e) - t.getYear(Ns)) / 12);
    }
    function Rs(e, t) {
        return t.getYear(e) - t.getYear(Ns);
    }
    function As(e, t) {
        var a = ms(e.start),
            n = ms(t.start),
            s = e.title || e.text,
            i = t.title || t.text,
            r = a ? (e.allDay ? 1 : +a) : 0,
            o = n ? (t.allDay ? 1 : +n) : 0;
        return r === o ? (s > i ? 1 : -1) : r - o;
    }
    function zs(e, t) {
        return "auto" === e ? Math.max(1, Math.min(3, Math.floor(t ? t / 296 : 1))) : e ? +e : 1;
    }
    function Ws(e, t, a, n, s, i, r, o, l, c, h) {
        for (
            var d = {},
                u = cs(t, new Date(+a - 1)),
                m = {},
                _ = t,
                p = 0,
                v = function () {
                    _.getDay() === r && (m = {});
                    var t,
                        a,
                        v = Us(e[+_] || [], o),
                        f = 0,
                        g = 0,
                        b = 0,
                        y = void 0;
                    i &&
                        ((v = v.filter(function (e) {
                            return e.allDay;
                        })),
                        (n = Math.max(n, v.length + 1)));
                    var x = v.length,
                        D = [];
                    l && (D.push({ id: "count_" + +_, count: x, placeholder: 0 === x }), (f = n));
                    for (
                        var T = function () {
                            if (
                                ((t = null),
                                v.forEach(function (e, n) {
                                    m[f] === e && ((t = e), (a = n));
                                }),
                                f === n - 1 && (g < x - 1 || (b === x && !t)))
                            ) {
                                var e = x - g,
                                    i = c || "",
                                    o = ((e > 1 && h) || i).replace(/{count}/, e);
                                e && D.push({ id: "more_" + ++p, more: o }),
                                    t &&
                                        ((m[f] = null),
                                        t._days.forEach(function (e) {
                                            d[+e].data[f] = { id: "more_" + ++p, more: i.replace(/{count}/, "1") };
                                        })),
                                    g++,
                                    f++;
                            } else if (t) a === b && b++, cs(_, ms(t.end)) && (m[f] = null), D.push({ id: t.id + (t.recurring ? "_" + t.nr : ""), event: t }), f++, g++, t._days.push(_);
                            else if (b < x) {
                                var l = v[b],
                                    T = l.start && ms(l.start),
                                    C = l.end && ms(l.end),
                                    S = _.getDay(),
                                    w = r - S > 0 ? 7 : 0,
                                    k = C && !cs(T, C);
                                (!T || cs(_, T) || u || S === r) &&
                                    (l.id === ae && (l.id = "mbsc_" + Os++),
                                    k && (m[f] = l),
                                    (l._days = [_]),
                                    (y = k && !u ? 100 * Math.min(os(_, C) + 1, s + r - S - w) : 100),
                                    D.push({ id: l.id + (l.recurring ? "_" + l.nr : ""), event: l, multiDay: k, width: y, showText: !0 }),
                                    f++,
                                    g++),
                                    b++;
                            } else g < x && D.push({ id: "ph_" + ++p, placeholder: !0 }), f++;
                        };
                        x && f < n;

                    )
                        T();
                    (d[+_] = { data: D, events: v }), (_ = is(gs(_, 1)));
                };
            _ < a;

        )
            v();
        return d;
    }
    function Us(e, t) {
        return e && e.slice(0).sort(t || As);
    }
    var Bs = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.state = { height: "sm", maxLabels: 0, pageSize: 0, pickerSize: 0, view: Ls, width: "sm" }),
                    (t._dim = {}),
                    (t._months = [1, 2, 3]),
                    (t._title = []),
                    (t.MONTH_VIEW = Ls),
                    (t.YEAR_VIEW = Is),
                    (t.MULTI_YEAR_VIEW = Hs),
                    (t.nextPage = function () {
                        switch ((t._prevDocClick(), t.state.view)) {
                            case Hs:
                                t._activeYearsChange(1);
                                break;
                            case Is:
                                t._activeYearChange(1);
                                break;
                            default:
                                t._activeChange(1);
                        }
                    }),
                    (t.prevPage = function () {
                        switch ((t._prevDocClick(), t.state.view)) {
                            case Hs:
                                t._activeYearsChange(-1);
                                break;
                            case Is:
                                t._activeYearChange(-1);
                                break;
                            default:
                                t._activeChange(-1);
                        }
                    }),
                    (t._changeView = function (e) {
                        var a = t.state.view,
                            n = t._hasPicker;
                        if (!e)
                            switch (a) {
                                case Ls:
                                    e = Hs;
                                    break;
                                case Hs:
                                    e = Is;
                                    break;
                                default:
                                    e = n ? Hs : Ls;
                            }
                        var s = n && e === Ls;
                        t.setState({ view: e, viewClosing: s ? ae : a, viewOpening: s ? ae : e });
                    }),
                    (t._onDayHoverIn = function (e) {
                        t._disableHover ||
                            (t._hook("onDayHoverIn", e),
                            (t._hoverTimer = setTimeout(function () {
                                t._labels && (e.labels = t._labels[+e.date]), t._marked && (e.marked = t._marked[+e.date]), (t._isHover = !0), t._hook("onCellHoverIn", e);
                            }, 150)));
                    }),
                    (t._onDayHoverOut = function (e) {
                        t._disableHover ||
                            (t._hook("onDayHoverOut", e),
                            clearTimeout(t._hoverTimer),
                            t._isHover && (t._labels && (e.labels = t._labels[+e.date]), t._marked && (e.marked = t._marked[+e.date]), (t._isHover = !1), t._hook("onCellHoverOut", e)));
                    }),
                    (t._onLabelClick = function (e) {
                        (t._isLabelClick = !0), t._hook("onLabelClick", e);
                    }),
                    (t._onDayClick = function (e) {
                        (t._shouldFocus = !t._isLabelClick), (t._prevAnim = !1), (t._prevPageChange = t.s.noOuterChange), (t._isLabelClick = !1), t._hook("onDayClick", e);
                    }),
                    (t._onTodayClick = function (e) {
                        (t._prevAnim = !1), t._hook("onActiveChange", { date: +new Date(), today: !0 }), t._hook("onTodayClick", {});
                    }),
                    (t._onMonthClick = function (e) {
                        var a = e.date,
                            n = Ps(a, t.s) - t._offset;
                        t._changeView(Ls), (t._shouldFocus = !0), (t._prevAnim = !t._hasPicker), t._hook("onActiveChange", { date: +a, pageChange: n !== t._pageIndex });
                    }),
                    (t._onYearClick = function (e) {
                        (t._shouldFocus = !0), (t._activeMonth = +e.date), t._changeView();
                    }),
                    (t._onPageChange = function (e) {
                        (t._isSwipeChange = !0), t._activeChange(e.diff);
                    }),
                    (t._onYearPageChange = function (e) {
                        t._activeYearChange(e.diff);
                    }),
                    (t._onYearsPageChange = function (e) {
                        t._activeYearsChange(e.diff);
                    }),
                    (t._onAnimationEnd = function (e) {
                        (t._disableHover = !1), t._isIndexChange && (t._pageLoaded(), (t._isIndexChange = !1));
                    }),
                    (t._onStart = function () {
                        clearTimeout(t._hoverTimer);
                    }),
                    (t._onGestureStart = function (e) {
                        (t._disableHover = !0), t._hook("onGestureStart", e);
                    }),
                    (t._onGestureEnd = function (e) {
                        t._prevDocClick();
                    }),
                    (t._onPickerClose = function () {
                        t.setState({ view: Ls });
                    }),
                    (t._onPickerOpen = function () {
                        var e = t._pickerCont.clientHeight,
                            a = t._pickerCont.clientWidth;
                        t.setState({ pickerSize: t._isVertical ? e : a });
                    }),
                    (t._onPickerBtnClick = function (e) {
                        t.state.view === Ls && (t._pickerBtn = e.currentTarget), t._prevDocClick(), t._changeView();
                    }),
                    (t._onDocClick = function (e) {
                        t._prevClick || t._hasPicker || t.state.view === Ls || !t._pickerCont || t._pickerCont.contains(e.target) || t._changeView(Ls);
                    }),
                    (t._onViewAnimationEnd = function () {
                        t.state.viewOpening === ae ? t.setState({ viewClosing: ae }) : t.setState({ viewOpening: ae });
                    }),
                    (t._onResize = function () {
                        if (t._body && m) {
                            var e = t.state,
                                a = t.s.showCalendar,
                                n = a && t.__getTextParam ? t._body.querySelector(".mbsc-calendar-body-inner") : t._body,
                                s = t._el.offsetHeight,
                                i = n.clientHeight,
                                r = n.clientWidth,
                                o = t._isVertical ? i : r,
                                l = t._hasPicker ? e.pickerSize : o,
                                c = "sm",
                                h = "sm",
                                d = 0;
                            if ((t.s.responsiveStyle && (i > 300 && (h = "md"), r > 767 && (c = "md")), c !== e.width || h !== e.height)) (t._shouldCheckSize = !0), t.setState({ width: c, height: h });
                            else {
                                var u = [];
                                if (t._labels && a && t.__getTextParam) {
                                    var _ = n.querySelector(".mbsc-calendar-text"),
                                        p = n.querySelector(".mbsc-calendar-day-inner"),
                                        v = p.querySelector(".mbsc-calendar-day-text"),
                                        f = Tt(v, "marginTop"),
                                        g = Tt(v, "marginBottom"),
                                        b = _ ? Tt(_, "marginBottom") : 2,
                                        y = _ ? _.offsetHeight : 18,
                                        x = p.clientHeight - v.offsetHeight - f - g;
                                    d = Math.max(1, fe(x / (y + b)));
                                    for (var D = n.querySelector(".mbsc-calendar-row").querySelectorAll(".mbsc-calendar-cell"), T = 0; T < D.length; T++)
                                        if (T || !t.s.showWeekNumbers) {
                                            var C = D[T].getBoundingClientRect().width;
                                            u.push(C);
                                        }
                                }
                                t._hook("onResize", { height: s, target: t._el, width: r }), t.setState({ cellSizes: u, pageSize: o, pickerSize: l, maxLabels: d });
                            }
                        }
                    }),
                    (t._onKeyDown = function (e) {
                        var a,
                            n = t.s,
                            s = t.state.view,
                            i = s === Ls ? t._active : t._activeMonth,
                            r = new Date(i),
                            o = n.getYear(r),
                            l = n.getMonth(r),
                            c = n.getDay(r),
                            h = n.getDate,
                            d = n.weeks,
                            u = "month" === n.calendarType;
                        if (s === Hs) {
                            var m = void 0;
                            switch (e.keyCode) {
                                case On:
                                    m = o - 1 * t._rtlNr;
                                    break;
                                case Yn:
                                    m = o + 1 * t._rtlNr;
                                    break;
                                case Vn:
                                    m = o - 3;
                                    break;
                                case Pn:
                                    m = o + 3;
                                    break;
                                case Hn:
                                    m = t._getPageYears(t._yearsIndex);
                                    break;
                                case In:
                                    m = t._getPageYears(t._yearsIndex) + 11;
                                    break;
                                case Nn:
                                    m = o - 12;
                                    break;
                                case Ln:
                                    m = o + 12;
                            }
                            m && t._minYears <= m && t._maxYears >= m && (e.preventDefault(), (t._shouldFocus = !0), (t._prevAnim = !1), (t._activeMonth = +h(m, 0, 1)), t.forceUpdate());
                        } else if (s === Is) {
                            switch (e.keyCode) {
                                case On:
                                    a = h(o, l - 1 * t._rtlNr, 1);
                                    break;
                                case Yn:
                                    a = h(o, l + 1 * t._rtlNr, 1);
                                    break;
                                case Vn:
                                    a = h(o, l - 3, 1);
                                    break;
                                case Pn:
                                    a = h(o, l + 3, 1);
                                    break;
                                case Hn:
                                    a = h(o, 0, 1);
                                    break;
                                case In:
                                    a = h(o, 11, 1);
                                    break;
                                case Nn:
                                    a = h(o - 1, l, 1);
                                    break;
                                case Ln:
                                    a = h(o + 1, l, 1);
                            }
                            a && t._minYear <= a && t._maxYear >= a && (e.preventDefault(), (t._shouldFocus = !0), (t._prevAnim = !1), (t._activeMonth = +a), t.forceUpdate());
                        } else if (s === Ls) {
                            switch (e.keyCode) {
                                case On:
                                    a = h(o, l, c - 1 * t._rtlNr);
                                    break;
                                case Yn:
                                    a = h(o, l, c + 1 * t._rtlNr);
                                    break;
                                case Vn:
                                    a = h(o, l, c - 7);
                                    break;
                                case Pn:
                                    a = h(o, l, c + 7);
                                    break;
                                case Hn:
                                    a = h(o, l, 1);
                                    break;
                                case In:
                                    a = h(o, l + 1, 0);
                                    break;
                                case Nn:
                                    a = e.altKey ? h(o - 1, l, c) : u ? h(o, l - 1, c) : h(o, l, c - 7 * d);
                                    break;
                                case Ln:
                                    a = e.altKey ? h(o + 1, l, c) : u ? h(o, l + 1, c) : h(o, l, c + 7 * d);
                            }
                            if (a && t._minDate <= a && t._maxDate >= a) {
                                e.preventDefault();
                                var _ = Ps(a, n) - t._offset;
                                (t._shouldFocus = !0), (t._prevAnim = !1), (t._pageChange = n.noOuterChange && _ !== t._pageIndex), t._hook("onActiveChange", { date: +a, pageChange: t._pageChange });
                            }
                        }
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._getPageDay = function (e) {
                    return +Ys(e + this._offset, this.s);
                }),
                (t.prototype._getPageStyle = function (e, t, a) {
                    var n;
                    return ((n = {})[(ft ? ft + "T" : "t") + "ransform"] = "translate" + this._axis + "(" + 100 * (e - t) * this._rtlNr + "%)"), (n.width = 100 / (a || 1) + "%"), n;
                }),
                (t.prototype._getPageYear = function (e) {
                    return this.s.getYear(Ns) + e + this._yearOffset;
                }),
                (t.prototype._getPageYears = function (e) {
                    return this.s.getYear(Ns) + 12 * (e + this._yearsOffset);
                }),
                (t.prototype._getPickerClass = function (e) {
                    var t,
                        a = "",
                        n = "mbsc-calendar-picker",
                        s = this._hasPicker,
                        i = this.state,
                        r = i.viewClosing,
                        o = i.viewOpening;
                    switch (e) {
                        case Ls:
                            (a = " mbsc-calendar-picker-main"), (t = s ? "" : (o === Ls ? "in-down" : "") + (r === Ls ? "out-down" : ""));
                            break;
                        case Hs:
                            t = s && r === Ls ? "" : (o === Hs ? "in-up" : "") + (r === Hs ? "out-up" : "");
                            break;
                        default:
                            t = s && o === Ls ? "" : (o === Is ? (r === Hs ? "in-down" : "in-up") : "") + (r === Is ? (o === Hs ? "out-down" : "out-up") : "");
                    }
                    return n + a + (mt && t ? " " + n + "-" + t : "");
                }),
                (t.prototype._isNextDisabled = function (e) {
                    if (!this._hasPicker || e) {
                        var t = this.state.view;
                        if (t === Hs) return this._yearsIndex + 1 > this._maxYearsIndex;
                        if (t === Is) return this._yearIndex + 1 > this._maxYearIndex;
                    }
                    return this._pageIndex + 1 > this._maxIndex;
                }),
                (t.prototype._isPrevDisabled = function (e) {
                    if (!this._hasPicker || e) {
                        var t = this.state.view;
                        if (t === Hs) return this._yearsIndex - 1 < this._minYearsIndex;
                        if (t === Is) return this._yearIndex - 1 < this._minYearIndex;
                    }
                    return this._pageIndex - 1 < this._minIndex;
                }),
                (t.prototype._render = function (e, t) {
                    var a = e.getDate,
                        n = e.getYear,
                        s = e.getMonth,
                        i = e.showCalendar,
                        r = "month" === e.calendarType,
                        o = i ? (r ? 6 : e.weeks) : 0,
                        l = e.activeDate || this._active || +new Date(),
                        c = l !== this._active,
                        h = new Date(l),
                        d = this._prevS,
                        u = e.dateFormat,
                        m = e.monthNames,
                        _ = e.yearSuffix,
                        p = e.calendarType !== d.calendarType || e.eventRange !== d.eventRange || e.eventRangeSize !== d.eventRangeSize || e.showCalendar !== d.showCalendar || e.weeks !== d.weeks,
                        v = this._pageChange || this._pageIndex === ae || p || (!this._prevPageChange && c && (l < +this._firstDay || l >= +this._lastDay)) ? Ps(h, e) : this._pageIndex + this._offset;
                    (o === this._weeks && this._pageIndex !== ae) || (this._offset = v), c && (this._activeMonth = l);
                    var f = Fs(new Date(this._activeMonth), e),
                        g = Rs(new Date(this._activeMonth), e);
                    if ((c && ((this._yearsOffset = f), (this._yearOffset = g)), (this._yearsIndex = f - this._yearsOffset), (this._yearIndex = g - this._yearOffset), t.view === Is))
                        this._viewTitle = this._getPageYear(this._yearIndex) + "";
                    else if (t.view === Hs) {
                        var b = this._getPageYears(this._yearsIndex);
                        this._viewTitle = b + " - " + (b + 12);
                    }
                    var y = zs(e.pages, t.pageSize),
                        x = "vertical" === e.calendarScroll && "auto" !== e.pages && (e.pages === ae || 1 === e.pages),
                        D = e.showOuterDays !== ae ? e.showOuterDays : !x && y < 2,
                        T = Ys(v, e),
                        C = Ys(v + y, e),
                        S = i && D ? ls(T, e) : T,
                        w = Ys(v + y - 1, e),
                        k = i && D ? gs(ls(w, e), 7 * o) : C,
                        M = i ? ls(Ys(v - 0 - 1, e), e) : T,
                        E = i ? ls(Ys(v - 0 + y + 1 - 1, e), e) : C,
                        N = i ? gs(E, 7 * o) : C,
                        L = u.search(/m/i),
                        I = u.search(/y/i);
                    if (ce(e.min)) (this._minDate = -1 / 0), (this._minIndex = -1 / 0), (this._minYears = -1 / 0), (this._minYearsIndex = -1 / 0), (this._minYear = -1 / 0), (this._minYearIndex = -1 / 0);
                    else {
                        if (d.min !== e.min || e.getDate !== d.getDate) {
                            var H = ms(e.min);
                            (this._minDate = is(H)), (this._minYear = a(n(H), s(H), 1)), (this._minYears = n(H));
                        }
                        (this._minIndex = Ps(this._minDate, e) - this._offset), (this._minYearIndex = Rs(this._minDate, e) - this._yearOffset), (this._minYearsIndex = Fs(this._minDate, e) - this._yearsOffset);
                    }
                    if (ce(e.max)) (this._maxDate = 1 / 0), (this._maxIndex = 1 / 0), (this._maxYears = 1 / 0), (this._maxYearsIndex = 1 / 0), (this._maxYear = 1 / 0), (this._maxYearIndex = 1 / 0);
                    else {
                        if (d.max !== e.max || e.getDate !== d.getDate) {
                            var O = ms(e.max);
                            (this._maxDate = O), (this._maxYear = a(n(O), s(O) + 1, 1)), (this._maxYears = n(this._maxDate));
                        }
                        (this._maxIndex = Ps(this._maxDate, e) - this._offset), (this._maxYearIndex = Rs(this._maxDate, e) - this._yearOffset), (this._maxYearsIndex = Fs(this._maxDate, e) - this._yearsOffset);
                    }
                    (e.theme === d.theme && e.calendarScroll === d.calendarScroll && e.calendarType === d.calendarType && e.hasContent === d.hasContent && e.showWeekNumbers === d.showWeekNumbers && e.weeks === d.weeks) ||
                        (this._shouldCheckSize = !0),
                        (d.width === e.width && d.height === e.height) || (this._dim = { height: ue(e.height), width: ue(e.width) }),
                        "sm" === t.width ? (this._dayNames = e.dayNamesMin) : (this._dayNames = e.dayNamesShort),
                        (this._cssClass = "mbsc-calendar mbsc-font" + this._theme + this._rtl + (t.pageSize ? "" : " mbsc-calendar-hidden") + " mbsc-calendar-height-" + t.height + " mbsc-calendar-width-" + t.width + " " + e.cssClass),
                        (this._isSwipeChange = !1),
                        (this._firstDay = T),
                        (this._firstPageDay = S),
                        (this._lastDay = C),
                        (this._lastPageDay = k),
                        (this._yearFirst = I < L),
                        (this._pageNr = y);
                    var V = e.pageLoad !== d.pageLoad,
                        Y = +M != +this._viewStart || +N != +this._viewEnd;
                    if (
                        (this._pageIndex !== ae && Y && ((this._isIndexChange = !this._isSwipeChange && !p), this._hook("onPageChange", { firstDay: S, lastDay: k, month: r ? T : ae, viewEnd: N, viewStart: M })),
                        v !== ae && (this._pageIndex = v - this._offset),
                        v !== ae && (e.marked !== d.marked || e.colors !== d.colors || e.labels !== d.labels || e.invalid !== d.invalid || e.valid !== d.valid || t.maxLabels !== this._maxLabels || Y || V))
                    ) {
                        (Y || V) && ((this._marksMap = ae), (this._labelsMap = ae), this._hook("onPageLoading", { firstDay: S, lastDay: k, month: r ? T : ae, viewChanged: Y, viewEnd: N, viewStart: M })),
                            (this._maxLabels = t.maxLabels),
                            (this._viewStart = M),
                            (this._viewEnd = N);
                        var P = this._labelsMap || Es(e.labels, M, N, e),
                            F = P && Ws(P, M, N, t.maxLabels, 7, !1, e.firstDay, e.eventOrder, e.showLabelCount, e.moreEventsText, e.moreEventsPluralText);
                        F && !this._labels && (this._shouldCheckSize = !0),
                            ((F && t.maxLabels) || !F) && (this._shouldPageLoad = !this._isIndexChange || this._prevAnim || !i || V),
                            (this._labelsLayout = F),
                            (this._labels = P),
                            (this._marked = !P && (this._marksMap || Es(e.marked, M, N, e))),
                            (this._colors = Es(e.colors, M, N, e)),
                            (this._valid = Es(e.valid, M, N, e)),
                            (this._invalid = Es(e.invalid, M, N, e));
                    }
                    if (Y || c || e.monthNames !== d.monthNames) {
                        this._title = [];
                        var R = e.showSchedule && !e.showCalendar && e.viewStartDay !== ae && "week" === e.eventRange ? ls(T, e, e.viewStartDay) : T,
                            A = gs(C, -1),
                            z = v === ae ? h : R;
                        if ("week" === e.calendarType)
                            for (var W = 0, U = Object.keys(e.selectedDates); W < U.length; W++) {
                                var B = U[W];
                                if (+B >= +T && +B < +C) {
                                    z = new Date(+B);
                                    break;
                                }
                            }
                        if (this._pageNr > 1)
                            for (var j = 0; j < y; j++) {
                                var K = a(n(T), s(T) + j, 1),
                                    J = n(K) + _,
                                    X = m[s(K)];
                                this._title.push({ yearTitle: J, monthTitle: X });
                            }
                        else {
                            var q = { yearTitle: n(z) + _, monthTitle: m[s(z)] },
                                G = e.showSchedule ? "month" : i ? e.calendarType : e.eventRange,
                                Z = e.eventRange && !e.showSchedule && !i,
                                $ = +(e.eventRangeSize || 1);
                            switch (G) {
                                case "year":
                                    (q.title = n(T) + _), $ > 1 && (q.title += " - " + (n(A) + _));
                                    break;
                                case "month":
                                    if ($ > 1 && !i) {
                                        var Q = m[s(T)],
                                            ee = n(T) + _,
                                            te = this._yearFirst ? ee + " " + Q : Q + " " + ee,
                                            ne = m[s(A)],
                                            se = n(A) + _,
                                            ie = this._yearFirst ? se + " " + ne : ne + " " + se;
                                        q.title = te + " - " + ie;
                                    }
                                    break;
                                case "week":
                                    if (Z) {
                                        var oe = u.search(/d/i) < L ? "D MMM" : "MMM D";
                                        q.title = ps(oe, T, e) + " - " + ps(oe, A, e);
                                    }
                                    break;
                                case "day":
                                    Z && ((q.title = ps(u, T, e)), $ > 1 && (q.title += " - " + ps(u, A, e)));
                            }
                            this._title.push(q);
                        }
                    }
                    if (((this._headerHTML = this._headerContent = ae), e.renderHeader)) {
                        var he = e.renderHeader();
                        le(he) ? (he !== this._headerLastHTML && ((this._headerLastHTML = he), (this._shouldEnhanceHeader = !0)), (this._headerHTML = this._safeHtml(he))) : (this._headerContent = he);
                    } else this._renderHeader && (this._headerContent = this._renderHeader(e, t));
                    (this._active = l),
                        (this._activeMonth = re(this._activeMonth, +this._minDate, +this._maxDate)),
                        (this._hasPicker = e.hasPicker || !r || !i || ("md" === t.width && !1 !== e.hasPicker)),
                        (this._axis = x ? "Y" : "X"),
                        (this._rtlNr = !x && e.rtl ? -1 : 1),
                        (this._weeks = o),
                        (this._nextIcon = x ? e.nextIconV : e.rtl ? e.prevIconH : e.nextIconH),
                        (this._prevIcon = x ? e.prevIconV : e.rtl ? e.nextIconH : e.prevIconH),
                        (this._mousewheel = e.mousewheel === ae ? x : e.mousewheel),
                        (this._isVertical = x),
                        (this._showOuter = D);
                }),
                (t.prototype._mounted = function () {
                    (this._observer = An(this._el, this._onResize, this._zone)), (this._doc = Dt(this._el)), yt(this._doc, Aa, this._onDocClick);
                }),
                (t.prototype._updated = function () {
                    var e = this;
                    this._shouldCheckSize
                        ? (setTimeout(function () {
                              e._onResize();
                          }),
                          (this._shouldCheckSize = !1))
                        : this._shouldPageLoad && (this._pageLoaded(), (this._shouldPageLoad = !1)),
                        this._shouldFocus &&
                            setTimeout(function () {
                                e._focusActive(), (e._shouldFocus = !1);
                            }),
                        this.s.instanceService !== ae && this.s.instanceService.onComponentChange.next({}),
                        (this._pageChange = !1),
                        (this._prevPageChange = !1);
                }),
                (t.prototype._destroy = function () {
                    this._observer && this._observer.detach(), xt(this._doc, Aa, this._onDocClick), clearTimeout(this._hoverTimer);
                }),
                (t.prototype._getActiveCell = function () {
                    var e = this.state.view,
                        t = e === Ls ? this._body : this._pickerCont,
                        a = e === Hs ? "year" : e === Is ? "month" : "cell";
                    return t && t.querySelector(".mbsc-calendar-" + a + '[tabindex="0"]');
                }),
                (t.prototype._focusActive = function () {
                    var e = this._getActiveCell();
                    e && e.focus();
                }),
                (t.prototype._pageLoaded = function () {
                    this._hook("onPageLoaded", {
                        activeElm: this._getActiveCell(),
                        firstDay: this._firstPageDay,
                        lastDay: this._lastPageDay,
                        month: "month" === this.s.calendarType ? this._firstDay : ae,
                        viewEnd: this._viewEnd,
                        viewStart: this._viewStart,
                    });
                }),
                (t.prototype._activeChange = function (e) {
                    var t = this._pageIndex + e;
                    this._minIndex <= t && this._maxIndex >= t && this.__getTextParam && ((this._prevAnim = !1), (this._pageChange = !0), this._hook("onActiveChange", { date: this._getPageDay(t), pageChange: !0 }));
                }),
                (t.prototype._activeYearsChange = function (e) {
                    var t = this._yearsIndex + e;
                    if (this._minYearsIndex <= t && this._maxYearsIndex >= t) {
                        var a = this._getPageYears(t);
                        (this._prevAnim = !1), (this._activeMonth = +this.s.getDate(a, 0, 1)), this.forceUpdate();
                    }
                }),
                (t.prototype._activeYearChange = function (e) {
                    var t = this._yearIndex + e;
                    if (this._minYearIndex <= t && this._maxYearIndex >= t) {
                        var a = this._getPageYear(t);
                        (this._prevAnim = !1), (this._activeMonth = +this.s.getDate(a, 0, 1)), this.forceUpdate();
                    }
                }),
                (t.prototype._prevDocClick = function () {
                    var e = this;
                    (this._prevClick = !0),
                        setTimeout(function () {
                            e._prevClick = !1;
                        });
                }),
                t
            );
        })(Va),
        js = pa({}),
        Ks = (function (e) {
            function t(t) {
                return e.call(this, t) || this;
            }
            return (
                n(t, e),
                (t.prototype.componentDidMount = function () {
                    this.setupService();
                }),
                (t.prototype.componentDidUpdate = function () {
                    this.setupService();
                }),
                (t.prototype.componentWillUnmount = function () {
                    var e = this.props.host || this.contextHost;
                    e && this.handler !== ae && e._instanceService.onComponentChange.unsubscribe(this.handler);
                }),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        a = t.host,
                        n = t.component,
                        r = i(t, ["host", "component"]);
                    return ga(js.Consumer, null, function (t) {
                        var i = t.instance;
                        e.contextHost = i;
                        var o = a || i;
                        if (!o || !o._calendarView) return null;
                        var l = o._calendarView;
                        return ga(n, s({ inst: l }, r));
                    });
                }),
                (t.prototype.setupService = function () {
                    var e = this,
                        t = this.props.host || this.contextHost;
                    t &&
                        this.handler === ae &&
                        (this.handler = t._instanceService.onComponentChange.subscribe(function () {
                            e.forceUpdate();
                        }));
                }),
                t
            );
        })(va),
        Js = function (e) {
            var t = e.inst,
                a = e.className;
            return ga(Fn, {
                ariaLabel: t.s.prevText,
                className: "mbsc-calendar-button " + (a || ""),
                disabled: t._isPrevDisabled(),
                iconSvg: t._prevIcon,
                onClick: t.prevPage,
                theme: t.s.theme,
                themeVariant: t.s.themeVariant,
                type: "button",
                variant: "flat",
            });
        },
        Xs = function (e) {
            var t = e.inst,
                a = e.className;
            return ga(Fn, {
                ariaLabel: t.s.nextText,
                disabled: t._isNextDisabled(),
                className: "mbsc-calendar-button " + (a || ""),
                iconSvg: t._nextIcon,
                onClick: t.nextPage,
                theme: t.s.theme,
                themeVariant: t.s.themeVariant,
                type: "button",
                variant: "flat",
            });
        },
        qs = function (e) {
            var t = e.inst,
                a = e.className;
            return ga(Fn, { className: "mbsc-calendar-button mbsc-calendar-button-today " + (a || ""), onClick: t._onTodayClick, theme: t.s.theme, themeVariant: t.s.themeVariant, type: "button", variant: "flat" }, t.s.todayText);
        },
        Gs = function (e) {
            var t = e.inst,
                a = e.className;
            return ga(
                "div",
                { className: (a || "") + t._theme },
                t._title.length > 0 &&
                    t._title.map(function (e, a) {
                        if (!(t._pageNr > 1 && a > 0) || t._hasPicker || t.state.view === Ls)
                            return ga(
                                Fn,
                                { className: "mbsc-calendar-button", "data-index": a, onClick: t._onPickerBtnClick, key: a, theme: t.s.theme, themeVariant: t.s.themeVariant, type: "button", variant: "flat" },
                                (t._hasPicker || t.state.view === Ls) &&
                                    (e.title
                                        ? ga("span", { className: "mbsc-calendar-title" + t._theme }, e.title)
                                        : ga(
                                              jt,
                                              null,
                                              t._yearFirst && ga("span", { className: "mbsc-calendar-title mbsc-calendar-year" + t._theme }, e.yearTitle),
                                              ga("span", { className: "mbsc-calendar-title mbsc-calendar-month" + t._theme }, e.monthTitle),
                                              !t._yearFirst && ga("span", { className: "mbsc-calendar-title mbsc-calendar-year" + t._theme }, e.yearTitle)
                                          )),
                                !t._hasPicker && t.state.view !== Ls && ga("span", { className: "mbsc-calendar-title" + t._theme }, t._viewTitle),
                                t.s.downIcon && 1 === t._pageNr ? ga(Ya, { svg: t.state.view === Ls ? t.s.downIcon : t.s.upIcon, theme: t.s.theme }) : null
                            );
                    })
            );
        },
        Zs = function (e) {
            var t = e.calendar,
                a = i(e, ["calendar"]);
            return ga(Ks, s({ component: Js, host: t }, a));
        };
    Zs._name = "CalendarPrev";
    var $s = function (e) {
        var t = e.calendar,
            a = i(e, ["calendar"]);
        return ga(Ks, s({ component: Xs, host: t }, a));
    };
    $s._name = "CalendarNext";
    var Qs = function (e) {
        var t = e.calendar,
            a = i(e, ["calendar"]);
        return ga(Ks, s({ component: qs, host: t }, a));
    };
    Qs._name = "CalendarToday";
    var ei = function (e) {
        var t = e.calendar,
            a = i(e, ["calendar"]);
        return ga(Ks, s({ component: Gs, host: t }, a));
    };
    function ti(e, t, a, n) {
        var s;
        if (!(t < a || t > n)) {
            if (oe(e)) {
                var i = e.length,
                    r = t % i;
                s = e[r >= 0 ? r : r + i];
            } else s = e(t);
            return s;
        }
    }
    ei._name = "CalendarNav";
    var ai = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._setInnerEl = function (e) {
                    t._innerEl = e;
                }),
                (t._setScrollEl = function (e) {
                    t._scrollEl = e;
                }),
                (t._setScrollEl3d = function (e) {
                    t._scrollEl3d = e;
                }),
                (t._setScrollbarEl = function (e) {
                    t._scrollbarEl = e;
                }),
                (t._setScrollbarContEl = function (e) {
                    t._scrollbarContEl = e;
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype._template = function (e) {
                var t,
                    a = this,
                    n = e.children;
                return (
                    e.itemRenderer &&
                        ((n = this.visibleItems.map(function (t) {
                            return e.itemRenderer(t, a._offset);
                        })),
                        e.scroll3d &&
                            (t = this.visible3dItems.map(function (t) {
                                return e.itemRenderer(t, a._offset, !0);
                            }))),
                    ga(
                        "div",
                        { ref: this._setEl, className: this._cssClass, style: e.styles },
                        ga("div", { ref: this._setInnerEl, className: e.innerClass, style: e.innerStyles }, ga("div", { ref: this._setScrollEl, className: this._rtl }, n)),
                        e.scroll3d && ga("div", { ref: this._setScrollEl3d, style: { height: e.itemSize + "px" }, className: "mbsc-scroller-items-3d" }, t),
                        ga(
                            "div",
                            {
                                ref: this._setScrollbarContEl,
                                className: "mbsc-scroller-bar-cont " + this._rtl + (e.scrollBar && this._barSize !== this._barContSize ? "" : " mbsc-scroller-bar-hidden") + (this._started ? " mbsc-scroller-bar-started" : ""),
                            },
                            ga("div", { className: "mbsc-scroller-bar" + this._theme, ref: this._setScrollbarEl, style: { height: this._barSize + "px" } })
                        )
                    )
                );
            }),
            t
        );
    })(
        (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._currPos = 0),
                    (t._delta = 0),
                    (t._endPos = 0),
                    (t._lastRaf = 0),
                    (t._maxSnapScroll = 0),
                    (t._margin = 0),
                    (t._scrollEnd = be(function () {
                        ut(t._raf), (t._raf = !1), t._onEnd(), (t._hasScrolled = !1);
                    }, 200)),
                    (t._onStart = function (e) {
                        var a = t.s;
                        t._hook("onStart", {}),
                            (a.changeOnEnd && t._isScrolling) ||
                                (!a.mouseSwipe && !e.isTouch) ||
                                !a.swipe ||
                                ((t._started = !0),
                                (t._hasScrolled = t._isScrolling),
                                (t._currX = e.startX),
                                (t._currY = e.startY),
                                (t._delta = 0),
                                (t._velocityX = 0),
                                (t._velocityY = 0),
                                (t._startPos = kt(t._scrollEl, t._isVertical)),
                                (t._timestamp = +new Date()),
                                t._isScrolling && (ut(t._raf), (t._raf = !1), t._scroll(t._startPos)));
                    }),
                    (t._onMove = function (e) {
                        var a = e.domEvent,
                            n = t.s;
                        t._isVertical || n.scrollLock || t._hasScrolled ? a.cancelable && a.preventDefault() : a.type === an && (Math.abs(e.deltaY) > 7 || !n.swipe) && (t._started = !1),
                            t._started &&
                                ((t._delta = t._isVertical ? e.deltaY : e.deltaX),
                                (t._hasScrolled || Math.abs(t._delta) > t._threshold) &&
                                    (t._hasScrolled || t._hook("onGestureStart", {}),
                                    (t._hasScrolled = !0),
                                    (t._isScrolling = !0),
                                    t._raf ||
                                        (t._raf = dt(function () {
                                            return t._move(e);
                                        }))));
                    }),
                    (t._onEnd = function () {
                        if (((t._started = !1), t._hasScrolled)) {
                            var e,
                                a = t.s,
                                n = 17 * (t._isVertical ? t._velocityY : t._velocityX),
                                s = t._maxSnapScroll,
                                i = t._delta;
                            (i += n * n * 0.5 * (n < 0 ? -1 : 1)), s && (i = re(i, -t._round * s, t._round * s));
                            var r = re(pe((t._startPos + i) / t._round) * t._round, t._min, t._max),
                                o = pe((-r * t._rtlNr) / a.itemSize) + t._offset,
                                l = i > 0 ? (t._isVertical ? 270 : 360) : t._isVertical ? 90 : 180,
                                c = o - a.selectedIndex;
                            (e = a.time || Math.max(1e3, 3 * Math.abs(r - t._currPos))),
                                t._hook("onGestureEnd", { direction: l, index: o }),
                                (t._delta = 0),
                                t._scroll(r, e),
                                c && !a.changeOnEnd && (t._hook("onIndexChange", { index: o, diff: c }), a.selectedIndex === t._prevIndex && a.selectedIndex !== o && t.forceUpdate());
                        }
                    }),
                    (t._onClick = function (e) {
                        t._hasScrolled && ((t._hasScrolled = !1), e.stopPropagation(), e.preventDefault());
                    }),
                    (t._onScroll = function (e) {
                        (e.target.scrollTop = 0), (e.target.scrollLeft = 0);
                    }),
                    (t._onMouseWheel = function (e) {
                        var a = t._isVertical ? (e.deltaY === ae ? e.wheelDelta || e.detail : e.deltaY) : e.deltaX;
                        if (t._el.contains(e.target) && a && t.s.mousewheel) {
                            if (
                                (e.preventDefault(),
                                t._hook("onStart", {}),
                                t._started || ((t._delta = 0), (t._velocityX = 0), (t._velocityY = 0), (t._startPos = t._currPos), t._hook("onGestureStart", {})),
                                e.deltaMode && 1 === e.deltaMode && (a *= 15),
                                (a = re(-a, -t._scrollSnap, t._scrollSnap)),
                                (t._delta += a),
                                t._maxSnapScroll && Math.abs(t._delta) > t._round * t._maxSnapScroll && (a = 0),
                                t._startPos + t._delta < t._min && ((t._startPos = t._min), (t._delta = 0), (a = 0)),
                                t._startPos + t._delta > t._max && ((t._startPos = t._max), (t._delta = 0), (a = 0)),
                                t._raf ||
                                    (t._raf = dt(function () {
                                        return t._move();
                                    })),
                                !a && t._started)
                            )
                                return;
                            (t._hasScrolled = !0), (t._isScrolling = !0), (t._started = !0), t._scrollEnd();
                        }
                    }),
                    (t._onTrackStart = function (e) {
                        e.stopPropagation();
                        var a = { domEvent: e, isTouch: e.type === tn, startX: ln(e, "X", !0), startY: ln(e, "Y", !0) };
                        t._onStart(a), (t._trackStartX = a.startX), (t._trackStartY = a.startY), e.target === t._scrollbarEl ? (yt(t._doc, qa, t._onTrackEnd), yt(t._doc, Xa, t._onTrackMove)) : t._onTrackPoint(e);
                    }),
                    (t._onTrackClick = function (e) {
                        e.stopPropagation();
                    }),
                    (t._onTrackPoint = function (e) {
                        var a = t._isVertical ? t._trackStartY : t._trackStartX,
                            n = It(t._scrollbarContEl).top;
                        if (t._isInfinite) {
                            var s = (n + t._barContSize / 2 - a + t._barSize / 2) / (t._barContSize - t._barSize),
                                i = t._maxSnapScroll * t._round * 2 * s;
                            t._delta = i;
                        } else {
                            var r = re((s = (a - n - t._barSize / 2) / (t._barContSize - t._barSize)), 0, 1),
                                o = t._max - (t._max - t._min) * r;
                            t._delta = o - t._startPos;
                        }
                        (t._hasScrolled = Math.abs(t._delta) > t._threshold), (t._velocityX = 0), (t._velocityY = 0), t._onEnd();
                    }),
                    (t._onTrackEnd = function () {
                        t._onEnd(), xt(t._doc, qa, t._onTrackEnd), xt(t._doc, Xa, t._onTrackMove);
                    }),
                    (t._onTrackMove = function (e) {
                        var a = ln(e, "X", !0),
                            n = ln(e, "Y", !0),
                            s = (t._isVertical ? t._trackStartY - n : t._trackStartX - a) / (t._barContSize - t._barSize);
                        if (t._isInfinite) {
                            var i = t._maxSnapScroll * t._round * 2 * s;
                            t._delta = i;
                        } else {
                            i = -(t._min - t._max) * s;
                            t._delta = i;
                        }
                        (t._hasScrolled || Math.abs(t._delta) > t._threshold) &&
                            (t._hasScrolled || t._hook("onGestureStart", {}),
                            (t._hasScrolled = !0),
                            (t._isScrolling = !0),
                            t._raf ||
                                (t._raf = dt(function () {
                                    return t._move({ endX: a, endY: n });
                                })));
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._render = function (e, t) {
                    var a = e.batchSize,
                        n = e.batchSize3d,
                        s = e.itemNr || 1,
                        i = e.itemSize,
                        r = e.selectedIndex,
                        o = this._prevS.selectedIndex,
                        l = t.index === ae ? r : t.index,
                        c = [],
                        h = [],
                        d = r - o,
                        u = l - this._currIndex,
                        m = e.minIndex,
                        _ = e.maxIndex,
                        p = e.items;
                    (this._currIndex = l), (this._isVertical = "Y" === e.axis), (this._threshold = this._isVertical ? e.thresholdY : e.thresholdX), (this._rtlNr = !this._isVertical && e.rtl ? -1 : 1), (this._round = e.snap ? i : 1);
                    for (var v = this._round; v > 44; ) v /= 2;
                    if (((this._scrollSnap = pe(44 / v) * v), p)) {
                        for (var f = l - a; f < l + s + a; f++) c.push({ key: f, data: ti(p, f, m, _) });
                        if (e.scroll3d) for (f = l - n; f < l + s + n; f++) h.push({ key: f, data: ti(p, f, m, _) });
                        (this.visibleItems = c), (this.visible3dItems = h), (this._maxSnapScroll = a), (this._isInfinite = "function" == typeof e.items);
                    }
                    if ((this._offset === ae && (this._offset = r), Math.abs(d) > a)) {
                        var g = d + a * (d > 0 ? -1 : 1);
                        (this._offset += g), (this._margin -= g);
                    }
                    if (
                        (e.offset && e.offset !== this._prevS.offset && ((this._offset += e.offset), (this._margin -= e.offset)),
                        u && (this._margin += u),
                        (this._max = m !== ae ? -(m - this._offset) * i * this._rtlNr : 1 / 0),
                        (this._min = _ !== ae ? -(_ - this._offset - (e.spaceAround ? 0 : s - 1)) * i * this._rtlNr : -1 / 0),
                        -1 === this._rtlNr)
                    ) {
                        var b = this._min;
                        (this._min = this._max), (this._max = b);
                    }
                    var y = e.visibleSize !== this._prevS.visibleSize || e.itemSize !== this._prevS.itemSize;
                    if ((y && (this._barContSize = e.visibleSize * e.itemSize), y || e.items.length !== this._prevS.items.length)) {
                        var x = !this._isInfinite && e.visibleSize <= e.items.length ? e.visibleSize : 1;
                        this._barSize = this._isInfinite ? 20 : (x * this._barContSize) / e.items.length;
                    }
                    this._cssClass = this._className + " mbsc-ltr" + (e.scrollBar && this._barSize !== this._barContSize ? "" : " mbsc-scroller-bar-none");
                }),
                (t.prototype._mounted = function () {
                    (this._doc = Dt(this._el)),
                        yt(this._el, Aa, this._onClick, !0),
                        yt(this.s.scroll3d ? this._innerEl : this._el, en, this._onScroll),
                        yt(this._doc, $a, this._onMouseWheel, { passive: !1, capture: !0 }),
                        yt(this._doc, rn, this._onMouseWheel, { passive: !1, capture: !0 }),
                        yt(this._scrollbarContEl, Ja, this._onTrackStart),
                        yt(this._scrollbarContEl, Aa, this._onTrackClick),
                        (this._unlisten = pn(this._el, { onEnd: this._onEnd, onMove: this._onMove, onStart: this._onStart, prevDef: !0 }));
                }),
                (t.prototype._updated = function () {
                    var e = this.s,
                        t = e.batchSize,
                        a = e.itemSize,
                        n = e.selectedIndex,
                        s = this._prevIndex,
                        i = !e.prevAnim && ((s !== ae && s !== n) || this._isAnimating),
                        r = -(n - this._offset) * a * this._rtlNr;
                    e.margin && (this._scrollEl.style.marginTop = this._isVertical ? (this._margin - t) * a + "px" : ""), this._started || this._scroll(r, i ? this._isAnimating || e.time || 1e3 : 0), (this._prevIndex = n);
                }),
                (t.prototype._destroy = function () {
                    xt(this._el, Aa, this._onClick, !0),
                        xt(this.s.scroll3d ? this._innerEl : this._el, en, this._onScroll),
                        xt(this._doc, $a, this._onMouseWheel, { passive: !1, capture: !0 }),
                        xt(this._doc, rn, this._onMouseWheel, { passive: !1, capture: !0 }),
                        xt(this._scrollbarContEl, Ja, this._onTrackStart),
                        xt(this._scrollbarContEl, Aa, this._onTrackClick),
                        ut(this._raf),
                        (this._raf = !1),
                        this._scroll(0),
                        this._unlisten();
                }),
                (t.prototype._anim = function () {
                    var e = this;
                    return (this._raf = dt(function () {
                        var t = e.s,
                            a = +new Date();
                        if (e._raf) {
                            if (Math.abs(e._currPos - e._endPos) < 2)
                                return (
                                    (e._currPos = e._endPos),
                                    (e._raf = !1),
                                    (e._isAnimating = 0),
                                    (e._isScrolling = !1),
                                    e._infinite(e._currPos),
                                    e._hook("onAnimationEnd", {}),
                                    void e._scrollbarContEl.classList.remove("mbsc-scroller-bar-started")
                                );
                            a - e._lastRaf > 100 && ((e._lastRaf = a), (e._currPos = kt(e._scrollEl, e._isVertical)), t.changeOnEnd || e._infinite(e._currPos)), (e._raf = e._anim());
                        }
                    }));
                }),
                (t.prototype._infinite = function (e) {
                    var t = this.s;
                    if (t.itemSize) {
                        var a = pe((-e * this._rtlNr) / t.itemSize) + this._offset,
                            n = a - this._currIndex;
                        n && (t.changeOnEnd ? this._hook("onIndexChange", { index: a, diff: n }) : this.setState({ index: a }));
                    }
                }),
                (t.prototype._scroll = function (e, t) {
                    var a = this.s,
                        n = this._scrollEl.style,
                        s = ft ? ft + "T" : "t",
                        i = t ? gt + "transform " + pe(t) + "ms " + a.easing : "";
                    if (((n[s + "ransform"] = "translate3d(" + (this._isVertical ? "0," + e + "px," : e + "px,0,") + "0)"), (n[s + "ransition"] = i), (this._endPos = e), a.scroll3d)) {
                        var r = this._scrollEl3d.style,
                            o = 360 / (2 * a.batchSize3d);
                        (r[s + "ransform"] = "translateY(-50%) rotateX(" + (-e / a.itemSize) * o + "deg)"), (r[s + "ransition"] = i);
                    }
                    if (this._scrollbarEl) {
                        var l = this._scrollbarEl.style,
                            c = this._isInfinite ? (this._maxSnapScroll * this._round - this._delta) / (this._maxSnapScroll * this._round * 2) : (e - this._max) / (this._min - this._max),
                            h = re((this._barContSize - this._barSize) * c, 0, this._barContSize - this._barSize);
                        (l[s + "ransform"] = "translate3d(" + (this._isVertical ? "0," + h + "px," : h + "px,0,") + "0)"), (l[s + "ransition"] = i);
                    }
                    t ? (ut(this._raf), (this._isAnimating = t), this._scrollbarContEl.classList.add("mbsc-scroller-bar-started"), (this._raf = this._anim())) : ((this._currPos = e), a.changeOnEnd || this._infinite(e));
                }),
                (t.prototype._move = function (e) {
                    var t = this._currX,
                        a = this._currY,
                        n = this._timestamp,
                        s = this._maxSnapScroll;
                    if (e) {
                        (this._currX = e.endX), (this._currY = e.endY), (this._timestamp = +new Date());
                        var i = this._timestamp - n;
                        if (i > 0 && i < 100) {
                            var r = (this._currX - t) / i,
                                o = (this._currY - a) / i;
                            (this._velocityX = 0.7 * r + 0.3 * this._velocityX), (this._velocityY = 0.7 * o + 0.3 * this._velocityY);
                        }
                    }
                    s && (this._delta = re(this._delta, -this._round * s, this._round * s)), this._scroll(re(this._startPos + this._delta, this._min - this.s.itemSize, this._max + this.s.itemSize)), (this._raf = !1);
                }),
                (t.defaults = {
                    axis: "Y",
                    batchSize: 40,
                    easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                    mouseSwipe: !0,
                    mousewheel: !0,
                    prevDef: !0,
                    scrollBar: !1,
                    selectedIndex: 0,
                    spaceAround: !0,
                    stopProp: !0,
                    swipe: !0,
                    thresholdX: 10,
                    thresholdY: 5,
                }),
                t
            );
        })(Va)
    );
    var ni = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        var a = t.s;
                        !a.disabled && a.display && t._hook("onDayClick", { date: new Date(a.date), domEvent: e, outer: a.outer, selected: a.selected, source: "calendar", target: t._el });
                    }),
                    (t._onRightClick = function (e) {
                        var a = t.s;
                        !a.disabled && a.display && t._hook("onDayRightClick", { date: new Date(a.date), domEvent: e, outer: a.outer, selected: a.selected, source: "calendar", target: t._el });
                    }),
                    (t._onLabelClick = function (e) {
                        var a = t.s;
                        (e.date = new Date(a.date)), (e.labels = a.labels.events), t._hook("onLabelClick", e);
                    }),
                    (t._onLabelDoubleClick = function (e) {
                        var a = t.s;
                        (e.date = new Date(a.date)), (e.labels = a.labels.events), t._hook("onLabelDoubleClick", e);
                    }),
                    (t._onLabelRightClick = function (e) {
                        var a = t.s;
                        (e.date = new Date(a.date)), (e.labels = a.labels.events), t._hook("onLabelRightClick", e);
                    }),
                    (t._width = function (e) {
                        var a = t.s;
                        if ((e === ae && (e = 100), a.dayWidths === ae || a.dayIndex === ae)) return e + "%";
                        for (var n = e / 100, s = -3, i = a.dayIndex; i < a.dayIndex + n; i++) s += a.dayWidths[i];
                        return s + "px";
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        a,
                        n = this;
                    this._unlisten = pn(this._el, {
                        click: !0,
                        onBlur: function () {
                            n.setState({ hasFocus: !1 });
                        },
                        onDoubleClick: function (e) {
                            var t = n.s;
                            t.clickToCreate &&
                                "single" !== t.clickToCreate &&
                                t.labels &&
                                !t.disabled &&
                                t.display &&
                                ((e.create = !0),
                                n._hook("onLabelUpdateStart", e),
                                n._hook("onLabelUpdateEnd", e),
                                n._hook("onDayDoubleClick", { date: new Date(t.date), domEvent: e.domEvent, outer: t.outer, selected: t.selected, source: "calendar", target: n._el }));
                        },
                        onEnd: function (s) {
                            e && (s.domEvent.preventDefault(), (s.create = !0), n._hook("onLabelUpdateEnd", s), (e = !1)), clearTimeout(a), (e = !1), (t = !1);
                        },
                        onFocus: function () {
                            n.setState({ hasFocus: !0 });
                        },
                        onHoverIn: function (e) {
                            var t = n.s;
                            t.disabled || n.setState({ hasHover: !0 }), n._hook("onHoverIn", { date: new Date(t.date), domEvent: e, hidden: !t.display, outer: t.outer, target: n._el });
                        },
                        onHoverOut: function (e) {
                            var t = n.s;
                            n.setState({ hasHover: !1 }), n._hook("onHoverOut", { date: new Date(t.date), domEvent: e, hidden: !t.display, outer: t.outer, target: n._el });
                        },
                        onKeyDown: function (e) {
                            switch (e.keyCode) {
                                case Mn:
                                case En:
                                    e.preventDefault(), n._onClick(e);
                            }
                        },
                        onMove: function (s) {
                            (s.create = !0),
                                e && n.s.dragToCreate
                                    ? (s.domEvent.preventDefault(), n._hook("onLabelUpdateMove", s))
                                    : t && n.s.dragToCreate && (Math.abs(s.deltaX) > 7 || Math.abs(s.deltaY) > 7)
                                    ? ((e = !s.isTouch), n._hook("onLabelUpdateStart", s))
                                    : clearTimeout(a);
                        },
                        onStart: function (s) {
                            var i = n.s;
                            i.disabled ||
                                (!i.dragToCreate && !i.clickToCreate) ||
                                !i.labels ||
                                e ||
                                Ot(s.domEvent.target, ".mbsc-calendar-text", n._el) ||
                                ((s.create = !0),
                                s.isTouch && i.dragToCreate
                                    ? (a = setTimeout(function () {
                                          n._hook("onLabelUpdateStart", s), n._hook("onLabelUpdateModeOn", s), (e = !0);
                                      }, 350))
                                    : "single" === i.clickToCreate
                                    ? (n._hook("onLabelUpdateStart", s), (e = !0))
                                    : (t = !s.isTouch));
                        },
                    });
                }),
                (t.prototype._render = function (e, t) {
                    var a = new Date(),
                        n = e.date,
                        s = e.dragData,
                        i = cs(a, new Date(n)),
                        r = e.colors && e.colors[0],
                        o = "";
                    (this._draggedLabel = s && s.draggedDates && s.draggedDates[n]),
                        (this._draggedLabelOrig = s && s.originDates && s.originDates[n]),
                        (this._todayClass = i ? " mbsc-calendar-today" : ""),
                        (this._cellStyles = r ? { backgroundColor: r.background, color: r.background ? Mt(r.background) : ae } : ae),
                        (this._circleStyles = r ? { backgroundColor: r.highlight, color: r.highlight ? Mt(r.highlight) : ae } : ae),
                        (this._ariaLabel = "day" === e.type ? (i ? e.todayText + ", " : "") + e.day + ", " + e.month + " " + e.text : "month" === e.type ? e.month : "");
                    var l = "";
                    if (e.display) {
                        var c = e.hoverEnd,
                            h = e.hoverStart,
                            d = e.rangeEnd,
                            u = e.rangeStart;
                        u && n >= u && n <= (d || u) && (l = " mbsc-range-day" + (n === u ? " mbsc-range-day-start" : "") + (n === (d || u) ? " mbsc-range-day-end" : "")),
                            u && c && n >= (d || u) && n <= c && (l += " mbsc-range-hover" + (n === (d || u) ? " mbsc-range-hover-start" : "") + (n === c ? " mbsc-range-hover-end" : "")),
                            u && d && h && n <= u && n >= h && (l += " mbsc-range-hover" + (n === h ? " mbsc-range-hover-start" : "") + (n === u ? " mbsc-range-hover-end" : ""));
                    }
                    e.marks &&
                        e.marks.forEach(function (e) {
                            o += e.cellCssClass ? " " + e.cellCssClass : "";
                        }),
                        e.colors &&
                            e.colors.forEach(function (e) {
                                o += e.cellCssClass ? " " + e.cellCssClass : "";
                            }),
                        e.labels &&
                            e.labels.events &&
                            e.labels.events.forEach(function (e) {
                                o += e.cellCssClass ? " " + e.cellCssClass : "";
                            }),
                        (this._cssClass =
                            "mbsc-calendar-cell mbsc-calendar-" +
                            e.type +
                            this._theme +
                            this._rtl +
                            this._hb +
                            o +
                            (e.outer ? " mbsc-calendar-day-outer" : "") +
                            (e.dragData &&
                            e.dragData.moving &&
                            (function (e, t) {
                                return t >= +is(e.start) && t <= +is(e.end);
                            })(e.dragData.draggedEvent, n)
                                ? " mbsc-calendar-day-highlight"
                                : "") +
                            (e.labels ? " mbsc-calendar-day-labels" : "") +
                            (e.colors ? " mbsc-calendar-day-colors" : "") +
                            (e.hasMarks ? " mbsc-calendar-day-marked" : "") +
                            (e.disabled ? " mbsc-disabled" : "") +
                            (e.display ? "" : " mbsc-calendar-day-empty") +
                            (e.selected ? " mbsc-selected" : "") +
                            (t.hasFocus ? " mbsc-focus" : "") +
                            (t.hasHover ? " mbsc-hover" : "") +
                            l);
                }),
                (t.prototype._destroy = function () {
                    this._unlisten();
                }),
                t
            );
        })(Va),
        si = {},
        ii = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    var t = e.event && !1 !== e.event.editable;
                    return ga(
                        "div",
                        {
                            className: this._cssClass,
                            ref: this._setEl,
                            title: this._title,
                            style: { color: this._color },
                            onClick: this._onClick,
                            onContextMenu: this._onRightClick,
                            "data-id": e.showText && e.event ? e.event.id : null,
                            tabIndex: this._tabIndex,
                        },
                        this._hasResizeStart && t && ga("div", { className: "mbsc-calendar-label-resize mbsc-calendar-label-resize-start" + this._rtl + (e.isUpdate ? " mbsc-calendar-label-resize-start-touch" : "") }),
                        this._hasResizeEnd && t && ga("div", { className: "mbsc-calendar-label-resize mbsc-calendar-label-resize-end" + this._rtl + (e.isUpdate ? " mbsc-calendar-label-resize-end-touch" : "") }),
                        e.showText && !e.more && !e.render && ga("div", { className: "mbsc-calendar-label-background" + this._theme }),
                        e.showText && !e.more && e.render
                            ? this._html
                                ? ga("div", { dangerouslySetInnerHTML: this._html })
                                : this._content
                            : ga(
                                  "div",
                                  { className: "mbsc-calendar-label-inner" + this._theme, style: { color: this._textColor } },
                                  ga("div", { className: "mbsc-calendar-label-text" + this._theme, dangerouslySetInnerHTML: this._html, style: { color: e.event && e.event.textColor } }, this._content)
                              )
                    );
                }),
                (t.prototype._updated = function () {
                    e.prototype._updated.call(this), this._shouldEnhance && Sa && (Sa(this._el), (this._shouldEnhance = !1));
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._onClick = function (e) {
                            t._isDrag ? e.stopPropagation() : t._hook("onClick", { domEvent: e, label: t.s.event, target: t._el });
                        }),
                        (t._onRightClick = function (e) {
                            t._hook("onRightClick", { domEvent: e, label: t.s.event, target: t._el });
                        }),
                        (t._onDocTouch = function (e) {
                            xt(t._doc, tn, t._onDocTouch), xt(t._doc, Ja, t._onDocTouch), (t._isDrag = !1), t._hook("onDragModeOff", { data: t.s.event });
                        }),
                        (t._updateState = function (e) {
                            t.s.showText && t.setState(e);
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    (t.prototype._mounted = function () {
                        var e,
                            t = this,
                            a = this.s,
                            n = a.event,
                            i = n ? n.id + (n.nr ? "_" + n.nr : "") : a.id,
                            r = a.isPicker,
                            o = si[i];
                        o || ((o = new h()), (si[i] = o)),
                            (this._unsubscribe = o.subscribe(this._updateState)),
                            (this._doc = Dt(this._el)),
                            (this._unlisten = pn(this._el, {
                                keepFocus: !0,
                                onBlur: function () {
                                    r || o.next({ hasFocus: !1 });
                                },
                                onDoubleClick: function (e) {
                                    e.domEvent.stopPropagation(), t._hook("onDoubleClick", { domEvent: e.domEvent, label: t.s.event, target: t._el });
                                },
                                onEnd: function (a) {
                                    if (t._isDrag) {
                                        var n = t.s,
                                            i = s({}, a);
                                        i.domEvent.preventDefault(), (i.data = n.event), n.resize && e ? ((i.resize = !0), (i.direction = e)) : n.drag && (i.drag = !0), t._hook("onDragEnd", i), n.isUpdate || (t._isDrag = !1);
                                    }
                                    clearTimeout(t._touchTimer), (e = ae);
                                },
                                onFocus: function () {
                                    r || o.next({ hasFocus: !0 });
                                },
                                onHoverIn: function () {
                                    t._isDrag || r || o.next({ hasHover: !0 });
                                },
                                onHoverOut: function () {
                                    o.next({ hasHover: !1 });
                                },
                                onKeyDown: function (e) {
                                    var a = t.s.event;
                                    switch (e.keyCode) {
                                        case Mn:
                                        case En:
                                            t._el.click(), e.preventDefault();
                                            break;
                                        case 8:
                                        case 46:
                                            a && !1 !== a.editable && t._hook("onDelete", { domEvent: e.domEvent, event: a, source: "calendar" });
                                    }
                                },
                                onMove: function (a) {
                                    var n = t.s,
                                        i = s({}, a);
                                    if (((i.data = n.event), e)) (i.resize = !0), (i.direction = e);
                                    else {
                                        if (!n.drag) return;
                                        i.drag = !0;
                                    }
                                    n.event &&
                                        !1 !== n.event.editable &&
                                        (t._isDrag
                                            ? (i.domEvent.preventDefault(), t._hook("onDragMove", i))
                                            : (Math.abs(i.deltaX) > 7 || Math.abs(i.deltaY) > 7) && (clearTimeout(t._touchTimer), i.isTouch || ((t._isDrag = !0), t._hook("onDragStart", i))));
                                },
                                onStart: function (a) {
                                    var n = t.s,
                                        i = s({}, a),
                                        r = i.domEvent.target;
                                    if (((i.data = n.event), n.resize && r.classList.contains("mbsc-calendar-label-resize")))
                                        (e = r.classList.contains("mbsc-calendar-label-resize-start") ? "start" : "end"), (i.resize = !0), (i.direction = e);
                                    else {
                                        if (!n.drag) return;
                                        i.drag = !0;
                                    }
                                    n.event &&
                                        !1 !== n.event.editable &&
                                        ((!t._isDrag && i.isTouch) || i.domEvent.stopPropagation(),
                                        t._isDrag
                                            ? t._hook("onDragStart", i)
                                            : i.isTouch &&
                                              (t._touchTimer = setTimeout(function () {
                                                  t._hook("onDragModeOn", i), t._hook("onDragStart", i), (t._isDrag = !0);
                                              }, 350)));
                                },
                            })),
                            this._isDrag && (yt(this._doc, tn, this._onDocTouch), yt(this._doc, Ja, this._onDocTouch));
                    }),
                    (t.prototype._destroy = function () {
                        if (this._unsubscribe) {
                            var e = this.s,
                                t = e.event,
                                a = t ? t.id + (t.nr ? "_" + t.nr : "") : e.id,
                                n = si[a];
                            n.unsubscribe(this._unsubscribe), n.nr || delete si[a];
                        }
                        xt(this._doc, tn, this._onDocTouch), xt(this._doc, Ja, this._onDocTouch), this._unlisten && this._unlisten();
                    }),
                    (t.prototype._render = function (e, t) {
                        var a,
                            n,
                            s,
                            i,
                            r = e.event,
                            o = new Date(e.date),
                            l = e.render || e.renderContent,
                            c = !1;
                        if (
                            ((this._isDrag = this._isDrag || e.isUpdate),
                            (this._html = this._content = ae),
                            (this._title = e.more || e.count ? ae : Lt(r.title || r.text)),
                            (this._tabIndex = !e.showText || e.count || e.isPicker ? -1 : 0),
                            r)
                        ) {
                            (a = r.start ? ms(r.start) : null), (n = r.end ? ms(r.end) : null), (s = !(c = a && n && !cs(a, n)) || (a && cs(a, o))), (i = !c || (n && cs(n, o)));
                            var h = ls(o, e),
                                d = new Date(h.getFullYear(), h.getMonth(), h.getDate() + 7);
                            (this._hasResizeStart = e.resize && s), (this._hasResizeEnd = e.resize && (!c || (e.showText ? n < d : i)));
                            var u = r.color;
                            if (!u && r.resource && e.resourcesMap) {
                                var m = e.resourcesMap[oe(r.resource) ? r.resource[0] : r.resource];
                                u = m && m.color;
                            }
                            e.showText && (this._textColor = u ? Mt(u) : ae), (this._color = e.render || e.template ? ae : r.textColor && !u ? "transparent" : u);
                        }
                        if (r && e.showText && (l || e.contentTemplate || e.template)) {
                            var _ = r.allDay || !a || (c && !s && !i);
                            if (((this._data = { end: !_ && i && n ? ps(e.timeFormat, n, e) : "", id: r.id, isMultiDay: c, original: r, start: !_ && s && a ? ps(e.timeFormat, a, e) : "", title: this._title }), l)) {
                                var p = l(this._data);
                                le(p) ? ((this._html = this._safeHtml(p)), (this._shouldEnhance = !0)) : (this._content = p);
                            }
                        } else this._html = this._safeHtml(e.more || e.count || (e.showText ? r.title || r.text : ""));
                        this._cssClass =
                            "mbsc-calendar-text" +
                            this._theme +
                            this._rtl +
                            (t.hasFocus && !e.inactive ? " mbsc-calendar-label-active " : "") +
                            (!t.hasHover || e.inactive || this._isDrag ? "" : " mbsc-calendar-label-hover") +
                            (e.more ? " mbsc-calendar-text-more" : e.render || e.template ? " mbsc-calendar-custom-label" : " mbsc-calendar-label") +
                            (e.inactive ? " mbsc-calendar-label-inactive" : "") +
                            (e.isUpdate ? " mbsc-calendar-label-dragging" : "") +
                            (e.hidden ? " mbsc-calendar-label-hidden" : "");
                    }),
                    t
                );
            })(Va)
        ),
        ri = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._renderEvent = function (e, t, a, n, s, i) {
                    return ga(ii, {
                        key: i,
                        count: t.count ? t.count + " " + (t.count > 1 ? e.eventsText : e.eventText) : ae,
                        date: e.date,
                        drag: e.dragToMove,
                        resize: e.dragToResize,
                        event: t.event,
                        firstDay: e.firstDay,
                        hidden: n,
                        id: t.id,
                        inactive: !s && t.event && e.dragData && e.dragData.draggedEvent && t.event.id === e.dragData.draggedEvent.id,
                        isPicker: e.isPicker,
                        isUpdate: s,
                        more: t.more,
                        resourcesMap: e.resourcesMap,
                        rtl: e.rtl,
                        showText: a,
                        theme: e.theme,
                        timeFormat: e.timeFormat,
                        render: e.renderLabel,
                        renderContent: e.renderLabelContent,
                        onClick: this._onLabelClick,
                        onDoubleClick: this._onLabelDoubleClick,
                        onRightClick: this._onLabelRightClick,
                        onDelete: e.onLabelDelete,
                        onDragStart: e.onLabelUpdateStart,
                        onDragMove: e.onLabelUpdateMove,
                        onDragEnd: e.onLabelUpdateEnd,
                        onDragModeOn: e.onLabelUpdateModeOn,
                        onDragModeOff: e.onLabelUpdateModeOff,
                    });
                }),
                (t.prototype._renderLabel = function (e, t) {
                    var a = t.id;
                    return t.placeholder
                        ? ga("div", { className: "mbsc-calendar-text mbsc-calendar-text-placeholder", key: a })
                        : t.more || t.count
                        ? this._renderEvent(e, t, !0, !1, !1, a)
                        : t.multiDay
                        ? [ga("div", { className: "mbsc-calendar-label-wrapper", style: { width: this._width(t.width) }, key: a }, this._renderEvent(e, t, !0)), this._renderEvent(e, t, !1, !1, !1, "-" + a)]
                        : this._renderEvent(e, t, t.showText, !1, !1, a);
                }),
                (t.prototype._template = function (e) {
                    var t = this;
                    return ga(
                        "div",
                        {
                            role: "gridcell",
                            "aria-label": this._ariaLabel,
                            ref: this._setEl,
                            className: this._cssClass,
                            tabIndex: e.disabled ? ae : e.active ? 0 : -1,
                            onClick: this._onClick,
                            onContextMenu: this._onRightClick,
                            style: this._cellStyles,
                        },
                        ga("div", { dangerouslySetInnerHTML: this.textParam }),
                        ga(
                            "div",
                            { className: "mbsc-calendar-cell-inner mbsc-calendar-" + e.type + "-inner" + this._theme + ("day" === e.type ? "" : this._hb) + (e.display ? "" : " mbsc-calendar-day-hidden") },
                            ga("div", { className: "mbsc-calendar-cell-text mbsc-calendar-" + e.type + "-text" + this._theme + this._todayClass, style: this._circleStyles }, e.text),
                            e.labels &&
                                ga(
                                    "div",
                                    null,
                                    this._draggedLabelOrig &&
                                        ga(
                                            "div",
                                            { className: "mbsc-calendar-labels mbsc-calendar-labels-dragging" },
                                            ga("div", { style: { width: this._width(this._draggedLabelOrig.width || 100) } }, this._renderEvent(e, { id: 0, event: this._draggedLabelOrig.event }, !0, e.dragData.moving, !0))
                                        ),
                                    this._draggedLabel &&
                                        ga(
                                            "div",
                                            { className: "mbsc-calendar-labels mbsc-calendar-labels-dragging" },
                                            ga(
                                                "div",
                                                { className: "mbsc-calendar-label-wrapper", style: { width: this._width(this._draggedLabel.width || 100) } },
                                                this._renderEvent(e, { id: 0, event: this._draggedLabel.event }, !0, !1, !0)
                                            )
                                        ),
                                    ga(
                                        "div",
                                        { className: "mbsc-calendar-labels" },
                                        e.labels.data.map(function (a) {
                                            return t._renderLabel(e, a);
                                        })
                                    ),
                                    ga("div", { className: "mbsc-calendar-text mbsc-calendar-text-placeholder" })
                                ),
                            e.marks &&
                                ga(
                                    "div",
                                    null,
                                    ga(
                                        "div",
                                        { className: "mbsc-calendar-marks" + this._theme + this._rtl },
                                        e.marks.map(function (e, a) {
                                            return ga("div", { className: "mbsc-calendar-mark " + (e.markCssClass || "") + t._theme, key: a, style: { background: e.color } });
                                        })
                                    )
                                )
                        )
                    );
                }),
                t
            );
        })(ni),
        oi = function (e) {
            var t = e.dayNames,
                a = e.firstDay,
                n = e.hidden,
                s = e.rtl,
                i = e.theme,
                r = e.dayNamesShort,
                o = e.showWeekNumbers;
            return ga(
                "div",
                { className: "mbsc-calendar-week-days" + (n ? " mbsc-hidden" : "") },
                o && ga("div", { className: "mbsc-calendar-week-day mbsc-calendar-week-nr" + i + s }),
                ie.map(function (e, n) {
                    return ga("div", { "aria-label": t[(n + a) % 7], className: "mbsc-calendar-week-day" + i + s, key: n }, r[(n + a) % 7]);
                })
            );
        };
    function li(e, t, a, n, s) {
        return !ci(e, t, a, n, s);
    }
    function ci(e, t, a, n, s) {
        var i = +is(e);
        if ((n && +e < n) || (s && +e > s)) return !0;
        if (a && a[i]) return !1;
        var r = t && t[i];
        if (r)
            for (var o = 0, l = r; o < l.length; o++) {
                var c = l[o];
                if (!(c.start && c.end && cs(c.start, c.end))) return c;
            }
        return !1;
    }
    function hi(e, t, a, n, s, i, r) {
        var o,
            l,
            c = !1,
            h = !1,
            d = 0,
            u = 0;
        if ((+e < a && (e = new Date(a)), +e > n && (e = new Date(n)), !s)) {
            var m = t.getYear(e),
                _ = t.getMonth(e),
                p = t.getDate(m, _ - 1, 1),
                v = t.getDate(m, _ + 2, 1);
            (i = Es(t.valid, p, v, t)), (s = Es(t.invalid, p, v, t));
        }
        if (li(e, s, i, a, n)) return e;
        if (((o = e), (l = e), -1 !== r)) for (c = li(o, s, i); !c && +o < n && d < 100; ) (c = li((o = gs(o, 1)), s, i)), d++;
        if (1 !== r) for (h = li(l, s, i); !h && +l > a && u < 100; ) (h = li((l = gs(l, -1)), s, i)), u++;
        return 1 === r && c ? o : -1 === r && h ? l : hs(e, o, t) ? o : hs(e, l, t) ? l : u >= d && c ? o : l;
    }
    var di = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    var t = this,
                        a = e.showWeekDays ? ga(oi, { dayNames: e.dayNames, dayNamesShort: e.dayNamesShort, firstDay: e.firstDay, rtl: this._rtl, showWeekNumbers: e.showWeekNumbers, theme: this._theme }) : null;
                    return ga(
                        "div",
                        { role: "grid", className: "mbsc-calendar-table" + (e.isActive ? " mbsc-calendar-table-active" : "") },
                        a,
                        this._rows.map(function (a, n) {
                            return ga(
                                "div",
                                { role: "row", className: "mbsc-calendar-row", key: n },
                                e.showWeekNumbers && ga("div", { role: "gridcell", className: "mbsc-calendar-cell mbsc-calendar-day mbsc-calendar-week-nr" + t._theme }, t._getWeekNr(e, a[0].date)),
                                a.map(function (a, n) {
                                    return ga(ri, {
                                        active: a.display && t._isActive(a.date),
                                        clickToCreate: e.clickToCreate,
                                        colors: a.colors,
                                        date: a.date,
                                        day: a.day,
                                        dayIndex: n,
                                        dayWidths: e.cellSizes,
                                        disabled: !t._isValid(a.date),
                                        display: a.display,
                                        dragToCreate: e.dragToCreate,
                                        dragToResize: e.dragToResize,
                                        dragToMove: e.dragToMove,
                                        eventText: e.eventText,
                                        eventsText: e.eventsText,
                                        firstDay: e.firstDay,
                                        hasMarks: e.hasMarks,
                                        hoverEnd: e.hoverEnd,
                                        hoverStart: e.hoverStart,
                                        isPicker: e.isPicker,
                                        key: a.date,
                                        labels: a.labels,
                                        dragData: e.dragData,
                                        marks: a.marks,
                                        month: a.month,
                                        onDayClick: e.onDayClick,
                                        onDayDoubleClick: e.onDayDoubleClick,
                                        onDayRightClick: e.onDayRightClick,
                                        onLabelClick: e.onLabelClick,
                                        onLabelDoubleClick: e.onLabelDoubleClick,
                                        onLabelRightClick: e.onLabelRightClick,
                                        onLabelDelete: e.onLabelDelete,
                                        onLabelUpdateStart: e.onLabelUpdateStart,
                                        onLabelUpdateMove: e.onLabelUpdateMove,
                                        onLabelUpdateEnd: e.onLabelUpdateEnd,
                                        onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                                        onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                                        outer: a.outer,
                                        renderLabel: e.renderLabel,
                                        renderLabelContent: e.renderLabelContent,
                                        rangeEnd: e.rangeEnd,
                                        rangeStart: e.rangeStart,
                                        resourcesMap: e.resourcesMap,
                                        rtl: e.rtl,
                                        selected: t._isSelected(a.date),
                                        text: a.text,
                                        theme: e.theme,
                                        timeFormat: e.timeFormat,
                                        todayText: e.todayText,
                                        type: "day",
                                        onHoverIn: e.onDayHoverIn,
                                        onHoverOut: e.onDayHoverOut,
                                    });
                                })
                            );
                        })
                    );
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    n(t, e),
                    (t.prototype._isActive = function (e) {
                        return this.s.isActive && e === this.s.activeDate;
                    }),
                    (t.prototype._isValid = function (e) {
                        var t = this.s;
                        return li(new Date(e), t.invalid, t.valid, +t.min, +t.max);
                    }),
                    (t.prototype._isSelected = function (e) {
                        return !!this.s.selectedDates[+e];
                    }),
                    (t.prototype._getWeekNr = function (e, t) {
                        var a = new Date(t);
                        return e.getWeekNumber(e.getDate(a.getFullYear(), a.getMonth(), a.getDate() + ((7 - e.firstDay + 1) % 7)));
                    }),
                    (t.prototype._render = function (e) {
                        var t = [],
                            a = e.weeks,
                            n = e.firstDay,
                            s = new Date(e.firstPageDay),
                            i = e.getYear(s),
                            r = e.getMonth(s),
                            o = e.getDay(s),
                            l = e.getDate(i, r, o).getDay(),
                            c = n - l > 0 ? 7 : 0;
                        (this._rows = []), (this._days = Array.apply(0, Array(7)));
                        for (var h = 0; h < 7 * a; h++) {
                            h % 7 == 0 && (t = []);
                            var d = e.getDate(i, r, h + n - c - l + o),
                                u = e.getMonth(d),
                                m = u !== r && "month" === e.calendarType,
                                _ = e.marked && e.marked[+d],
                                p = _ ? (e.showSingleMark ? [{}] : _) : null;
                            t.push({ colors: e.colors && e.colors[+d], date: +d, day: e.dayNames[d.getDay()], display: !m || e.showOuter, labels: e.labels && e.labels[+d], marks: p, month: e.monthNames[u], outer: m, text: e.getDay(d) }),
                                h % 7 == 0 && this._rows.push(t);
                        }
                    }),
                    t
                );
            })(Va)
        ),
        ui = 0,
        mi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._setHeader = function (e) {
                        t._headerElement = e;
                    }),
                    (t._setBody = function (e) {
                        t._body = e;
                    }),
                    (t._setPickerCont = function (e) {
                        t._pickerCont = e;
                    }),
                    (t._renderMonth = function (e, a) {
                        var n = t.s;
                        return ga(
                            "div",
                            { className: "mbsc-calendar-slide" + t._theme + t._rtl, key: e.key, style: t._getPageStyle(e.key, a, t._pageNr) },
                            ga(di, {
                                activeDate: t._active,
                                calendarType: n.calendarType,
                                cellSizes: t.state.cellSizes,
                                clickToCreate: n.clickToCreate,
                                colors: t._colors,
                                dayNames: n.dayNames,
                                dayNamesShort: t._dayNames,
                                dragToCreate: n.dragToCreate,
                                dragToResize: n.dragToResize,
                                dragToMove: n.dragToMove,
                                eventText: n.eventText,
                                eventsText: n.eventsText,
                                firstDay: n.firstDay,
                                firstPageDay: t._getPageDay(e.key),
                                getDate: n.getDate,
                                getDay: n.getDay,
                                getMonth: n.getMonth,
                                getWeekNumber: n.getWeekNumber,
                                getYear: n.getYear,
                                hasMarks: !!t._marked,
                                hoverEnd: n.hoverEnd,
                                hoverStart: n.hoverStart,
                                isActive: e.key >= t._pageIndex && e.key < t._pageIndex + t._pageNr && t.state.view === Ls,
                                isPicker: n.isPicker,
                                invalid: t._invalid,
                                labels: t._labelsLayout,
                                dragData: n.dragData,
                                marked: t._marked,
                                max: t._maxDate,
                                min: t._minDate,
                                monthNames: n.monthNames,
                                onDayClick: t._onDayClick,
                                onDayDoubleClick: n.onDayDoubleClick,
                                onDayRightClick: n.onDayRightClick,
                                onDayHoverIn: t._onDayHoverIn,
                                onDayHoverOut: t._onDayHoverOut,
                                onLabelClick: t._onLabelClick,
                                onLabelDoubleClick: n.onLabelDoubleClick,
                                onLabelRightClick: n.onLabelRightClick,
                                onLabelDelete: n.onLabelDelete,
                                onLabelUpdateStart: n.onLabelUpdateStart,
                                onLabelUpdateMove: n.onLabelUpdateMove,
                                onLabelUpdateEnd: n.onLabelUpdateEnd,
                                onLabelUpdateModeOn: n.onLabelUpdateModeOn,
                                onLabelUpdateModeOff: n.onLabelUpdateModeOff,
                                rangeEnd: n.rangeEnd,
                                rangeStart: n.rangeStart,
                                resourcesMap: n.resourcesMap,
                                rtl: n.rtl,
                                selectedDates: n.selectedDates,
                                showOuter: t._showOuter,
                                showWeekDays: !t._isVertical,
                                showWeekNumbers: n.showWeekNumbers,
                                showSingleMark: !!t._marksMap,
                                todayText: n.todayText,
                                theme: n.theme,
                                timeFormat: n.timeFormat,
                                valid: t._valid,
                                weeks: t._weeks,
                                renderLabel: n.renderLabel,
                                renderLabelContent: n.renderLabelContent,
                            })
                        );
                    }),
                    (t._renderYears = function (e, a) {
                        var n = t.s,
                            s = e.key,
                            i = t._getPageYears(s),
                            r = n.getYear(new Date(t._active)),
                            o = n.getYear(new Date(t._activeMonth));
                        return ga(
                            "div",
                            { className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + t._theme + t._rtl, key: s, style: t._getPageStyle(s, a) },
                            ga(
                                "div",
                                { role: "grid", className: "mbsc-calendar-table" },
                                se.map(function (e, a) {
                                    return ga(
                                        "div",
                                        { role: "row", className: "mbsc-calendar-row", key: a },
                                        ne.map(function (e, s) {
                                            var l = i + 3 * a + s,
                                                c = +n.getDate(l, 0, 1);
                                            return ga(ri, {
                                                active: l === o,
                                                date: c,
                                                display: !0,
                                                selected: l === r,
                                                disabled: l < t._minYears || l > t._maxYears,
                                                rtl: n.rtl,
                                                text: l + n.yearSuffix,
                                                theme: n.theme,
                                                type: "year",
                                                onDayClick: t._onYearClick,
                                                key: l,
                                            });
                                        })
                                    );
                                })
                            )
                        );
                    }),
                    (t._renderYear = function (e, a) {
                        var n = t.s,
                            s = e.key,
                            i = t._getPageYear(s),
                            r = new Date(t._activeMonth),
                            o = n.getYear(r),
                            l = n.getMonth(r),
                            c = new Date(t._active),
                            h = n.getYear(c),
                            d = n.getMonth(c);
                        return ga(
                            "div",
                            { className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + t._theme + t._rtl, key: s, style: t._getPageStyle(s, a) },
                            ga(
                                "div",
                                { role: "grid", className: "mbsc-calendar-table" },
                                se.map(function (e, a) {
                                    return ga(
                                        "div",
                                        { role: "row", className: "mbsc-calendar-row", key: a },
                                        ne.map(function (e, s) {
                                            var r = n.getDate(i, 3 * a + s, 1),
                                                c = n.getYear(r),
                                                u = n.getMonth(r);
                                            return ga(ri, {
                                                active: c === o && u === l,
                                                date: +r,
                                                display: !0,
                                                selected: c === h && u === d,
                                                disabled: r < t._minYear || r >= t._maxYear,
                                                month: n.monthNames[u],
                                                rtl: n.rtl,
                                                text: n.monthNamesShort[u],
                                                theme: n.theme,
                                                type: "month",
                                                onDayClick: t._onMonthClick,
                                                key: +r,
                                            });
                                        })
                                    );
                                })
                            )
                        );
                    }),
                    (t._renderHeader = function (e, a) {
                        var n = t._pageNr > 1;
                        return ga(
                            jt,
                            null,
                            ga(ei, { className: "mbsc-calendar-title-wrapper" + (n ? " mbsc-calendar-title-wrapper-multi" : "") }),
                            ga(Zs, { className: "mbsc-calendar-button-prev" + (n ? " mbsc-calendar-button-prev-multi" : "") }),
                            e.showToday && ga(Qs, { className: "mbsc-calendar-header-today" }),
                            ga($s, { className: "mbsc-calendar-button-next" + (n ? " mbsc-calendar-button-next-multi" : "") })
                        );
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._template = function (e, t) {
                    var a = this;
                    ui++;
                    var n =
                            this._isVertical && e.showCalendar
                                ? ga(oi, { dayNames: e.dayNames, dayNamesShort: this._dayNames, rtl: this._rtl, theme: this._theme, firstDay: e.firstDay, hidden: t.view !== Ls && !this._hasPicker, showWeekNumbers: e.showWeekNumbers })
                                : null,
                        i = {
                            axis: this._axis,
                            batchSize: 1,
                            changeOnEnd: !0,
                            className: "mbsc-calendar-scroll-wrapper" + this._theme,
                            data: ui,
                            easing: "ease-out",
                            itemSize: t.pickerSize,
                            items: this._months,
                            mousewheel: this._mousewheel,
                            prevAnim: this._prevAnim,
                            rtl: e.rtl,
                            snap: !0,
                            time: 200,
                        },
                        r = ga(
                            "div",
                            { ref: this._setPickerCont, className: this._hasPicker ? "mbsc-calendar-picker-wrapper" : "" },
                            (t.view === Hs || t.viewClosing === Hs) &&
                                ga(
                                    "div",
                                    { onAnimationEnd: this._onViewAnimationEnd, className: this._getPickerClass(Hs) },
                                    ga(
                                        ai,
                                        s(
                                            {
                                                key: "years",
                                                itemRenderer: this._renderYears,
                                                maxIndex: this._maxYearsIndex,
                                                minIndex: this._minYearsIndex,
                                                onGestureEnd: this._onGestureEnd,
                                                onIndexChange: this._onYearsPageChange,
                                                selectedIndex: this._yearsIndex,
                                            },
                                            i
                                        )
                                    )
                                ),
                            (t.view === Is || t.viewClosing === Is) &&
                                ga(
                                    "div",
                                    { onAnimationEnd: this._onViewAnimationEnd, className: this._getPickerClass(Is) },
                                    ga(
                                        ai,
                                        s(
                                            {
                                                key: "year",
                                                itemRenderer: this._renderYear,
                                                maxIndex: this._maxYearIndex,
                                                minIndex: this._minYearIndex,
                                                onGestureEnd: this._onGestureEnd,
                                                onIndexChange: this._onYearPageChange,
                                                selectedIndex: this._yearIndex,
                                            },
                                            i
                                        )
                                    )
                                )
                        ),
                        o = ga(
                            "div",
                            { className: this._cssClass, ref: this._setEl, style: this._dim, onClick: me },
                            ga(
                                "div",
                                { className: "mbsc-calendar-wrapper" + this._theme + this._hb + (e.hasContent || !e.showCalendar ? " mbsc-calendar-wrapper-fixed" : "") },
                                ga(
                                    "div",
                                    { className: "mbsc-calendar-header" + this._theme + this._hb + (this._isVertical ? " mbsc-calendar-header-vertical" : ""), ref: this._setHeader },
                                    e.showControls && ga("div", { className: "mbsc-calendar-controls" + this._theme, dangerouslySetInnerHTML: this._headerHTML }, this._headerContent),
                                    n
                                ),
                                ga(
                                    "div",
                                    { className: "mbsc-calendar-body" + this._theme, ref: this._setBody, onKeyDown: this._onKeyDown },
                                    e.showCalendar &&
                                        ga(
                                            "div",
                                            { className: "mbsc-calendar-body-inner" },
                                            ga(
                                                "div",
                                                { className: this._getPickerClass(Ls), onAnimationEnd: this._onViewAnimationEnd },
                                                ga(
                                                    ai,
                                                    s({}, i, {
                                                        itemNr: this._pageNr,
                                                        itemSize: t.pageSize / this._pageNr,
                                                        itemRenderer: this._renderMonth,
                                                        maxIndex: this._maxIndex,
                                                        minIndex: this._minIndex,
                                                        mouseSwipe: e.mouseSwipe,
                                                        onAnimationEnd: this._onAnimationEnd,
                                                        onGestureStart: this._onGestureStart,
                                                        onIndexChange: this._onPageChange,
                                                        onStart: this._onStart,
                                                        selectedIndex: this._pageIndex,
                                                        swipe: e.swipe,
                                                    })
                                                )
                                            ),
                                            !this._hasPicker && r
                                        )
                                )
                            ),
                            this.props.children,
                            this._hasPicker &&
                                ga(
                                    Xn,
                                    {
                                        anchor: this._pickerBtn,
                                        closeOnScroll: !0,
                                        contentPadding: !1,
                                        context: e.context,
                                        cssClass: "mbsc-calendar-popup",
                                        display: "anchored",
                                        isOpen: t.view !== Ls,
                                        locale: e.locale,
                                        onClose: this._onPickerClose,
                                        onOpen: this._onPickerOpen,
                                        rtl: e.rtl,
                                        scrollLock: !1,
                                        showOverlay: !1,
                                        theme: e.theme,
                                        themeVariant: e.themeVariant,
                                    },
                                    ga(
                                        "div",
                                        { onKeyDown: this._onKeyDown },
                                        ga(
                                            "div",
                                            { className: "mbsc-calendar-controls" + this._theme },
                                            ga(
                                                "div",
                                                { className: "mbsc-calendar-picker-button-wrapper mbsc-calendar-title-wrapper" + this._theme },
                                                ga(
                                                    Fn,
                                                    { className: "mbsc-calendar-button", onClick: this._onPickerBtnClick, theme: e.theme, themeVariant: e.themeVariant, type: "button", variant: "flat" },
                                                    this._viewTitle,
                                                    e.downIcon && ga(Ya, { svg: t.view === Hs ? e.downIcon : e.upIcon, theme: e.theme })
                                                )
                                            ),
                                            ga(Fn, {
                                                className: "mbsc-calendar-button",
                                                ariaLabel: e.prevText,
                                                disabled: this._isPrevDisabled(!0),
                                                iconSvg: this._prevIcon,
                                                onClick: this.prevPage,
                                                theme: e.theme,
                                                themeVariant: e.themeVariant,
                                                type: "button",
                                                variant: "flat",
                                            }),
                                            ga(Fn, {
                                                className: "mbsc-calendar-button",
                                                ariaLabel: e.nextText,
                                                disabled: this._isNextDisabled(!0),
                                                iconSvg: this._nextIcon,
                                                onClick: this.nextPage,
                                                theme: e.theme,
                                                themeVariant: e.themeVariant,
                                                type: "button",
                                                variant: "flat",
                                            })
                                        ),
                                        r
                                    )
                                )
                        );
                    return ga(js.Consumer, null, function (e) {
                        var t = e.instance;
                        return (a._calendarHost = t), o;
                    });
                }),
                (t.prototype._updated = function () {
                    e.prototype._updated.call(this), this._shouldEnhanceHeader && (Sa(this._headerElement, { calendar: this._calendarHost }), (this._shouldEnhanceHeader = !1));
                }),
                t
            );
        })(Bs),
        _i = (function () {
            function e() {
                (this.onInstanceReady = new h()), (this.onComponentChange = new h());
            }
            return (
                Object.defineProperty(e.prototype, "instance", {
                    get: function () {
                        return this.inst;
                    },
                    set: function (e) {
                        (this.inst = e), this.onInstanceReady.next(e);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                e
            );
        })(),
        pi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._nullSupport = !0),
                    (t._onInputClick = function (e) {
                        t.s.disabled || ((t._focusElm = e.target), (t._anchor = t.s.anchor || t._focusElm), t.open());
                    }),
                    (t._onInputFocus = function (e) {
                        t._preventShow ? (t._preventShow = !1) : t._onInputClick(e);
                    }),
                    (t._onInputMouseDown = function (e) {
                        e.preventDefault();
                    }),
                    (t._onInputKey = function (e) {
                        (e.keyCode !== En && e.keyCode !== Mn) || (e.preventDefault(), t._onInputClick(e));
                    }),
                    (t._onInputChange = function (e, a) {
                        var n = a !== ae ? a : e.target.value;
                        n === t._tempValueText || t._preventChange || (t._readValue(n), (t._valueTextChange = n !== t._tempValueText), t._change(ce(n) ? null : t._get(t._tempValueRep))), (t._preventChange = !1);
                    }),
                    (t._onResize = function (e) {
                        t._hook("onResize", e);
                    }),
                    (t._onWrapperResize = function () {
                        t._wrapper && t._onResize({ windowWidth: t._wrapper.offsetWidth });
                    }),
                    (t._onPopupClose = function (e) {
                        /cancel|esc|overlay|scroll/.test(e.source) && t._hook("onCancel", { value: t.value, valueText: t._valueText }), t.close();
                    }),
                    (t._onPopupClosed = function (e) {
                        e.focus && (t._preventShow = !0), t._hook("onClosed", e), t._onClosed();
                    }),
                    (t._onPopupKey = function (e) {
                        13 === e.keyCode && t._onEnterKey(e);
                    }),
                    (t._onPopupOpen = function (e) {
                        (e.value = t.value), (e.valueText = t._valueText), t._hook("onOpen", e);
                    }),
                    (t._onWinFocus = function () {
                        t._win.document.activeElement === t._focusElm && (t._preventShow = !0);
                    }),
                    (t._onButtonClick = function (e) {
                        var a = e.domEvent,
                            n = e.button;
                        "set" === n.name && t.set(), t._popup && t._popup._onButtonClick({ domEvent: a, button: n });
                    }),
                    (t._setInput = function (e) {
                        (t._el = e && e.nativeElement ? e.nativeElement : e), (t._isMbsc = !!e && e._mbsc);
                    }),
                    (t._setPopup = function (e) {
                        t._popup = e;
                    }),
                    (t._setWrapper = function (e) {
                        t._wrapper = e;
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.open = function () {
                    this._inst ? this._inst.open() : this.s.isOpen === ae && this.setState({ isOpen: !0 });
                }),
                (t.prototype.close = function () {
                    if (this._inst) this._inst.close();
                    else {
                        var e = { value: this.value, valueText: this._valueText };
                        this.s.isOpen === ae && this.setState({ isOpen: !1 }), this._hook("onClose", e);
                    }
                }),
                (t.prototype.set = function () {
                    (this._valueRep = this._copy(this._tempValueRep)), (this._valueText = this._tempValueText), (this._value = this.value = this._get(this._valueRep)), this._change(this.value);
                }),
                (t.prototype.position = function () {
                    this._inst ? this._inst.position() : this._popup && this._popup.position();
                }),
                (t.prototype.isVisible = function () {
                    return this._inst ? this._inst.isVisible() : !!this._popup && this._popup.isVisible();
                }),
                (t.prototype.getVal = function () {
                    return this._get(this._valueRep);
                }),
                (t.prototype.setVal = function (e) {
                    (this.value = e), this.setState({ value: e });
                }),
                (t.prototype.getTempVal = function () {
                    return this._get(this._tempValueRep);
                }),
                (t.prototype.setTempVal = function (e) {
                    (this._tempValueSet = !0), (this._tempValueRep = this._parse(e)), this._setOrUpdate(!0);
                }),
                (t.prototype._shouldValidate = function (e, t) {
                    return !1;
                }),
                (t.prototype._valueEquals = function (e, t) {
                    return e === t;
                }),
                (t.prototype._render = function (e, t) {
                    var a = this,
                        n = this.props || {},
                        s = this._respProps || {},
                        i = this._prevS;
                    this._touchUi || ((e.display = s.display || n.display || "anchored"), (e.showArrow = s.showArrow || n.showArrow || !1)), "bubble" === e.display && (e.display = "anchored");
                    var r = e.isOpen !== ae ? e.isOpen : t.isOpen,
                        o = e.value !== ae ? e.value : t.value === ae ? e.defaultValue : t.value;
                    if (
                        ((this._showInput = e.showInput !== ae ? e.showInput : "inline" !== e.display && e.element === ae),
                        (!this._buttons || e.buttons !== i.buttons || e.display !== i.display || e.setText !== i.setText || e.cancelText !== i.cancelText || e.closeText !== i.closeText || e.touchUi !== i.touchUi) &&
                            ((this._buttons = Kn(this, e.buttons || ("inline" === e.display || ("anchored" === e.display && !this._touchUi) ? [] : ["cancel", "set"]))), (this._live = !0), this._buttons && this._buttons.length))
                    )
                        for (var l = 0, c = this._buttons; l < c.length; l++) {
                            var h = c[l];
                            ("ok" !== h.name && "set" !== h.name) || (this._live = !1);
                        }
                    if (!this._valueEquals(o, this._value) || this._tempValueRep === ae || this._shouldValidate(e, i) || e.defaultSelection !== i.defaultSelection || e.invalid !== i.invalid || e.valid !== i.valid) {
                        this._readValue(o), (this._valueRep = this._copy(this._tempValueRep)), (this._valueText = ce(o) ? "" : this._tempValueText);
                        var d = this._get(this._tempValueRep),
                            u = !this._valueEquals(o, d) && (!this._nullSupport || (this._nullSupport && o));
                        this._setHeader(),
                            clearTimeout(this._handler),
                            (this._handler = setTimeout(function () {
                                (a.value = o), u && a._change(d), a._valueEquals(a._tempValue, d) || a._inst !== ae || a._hook("onTempChange", { value: d });
                            }));
                    }
                    if ((e.headerText !== i.headerText && this._setHeader(), r && !this._isOpen)) {
                        if (!this._tempValueSet || this._live) {
                            var m = this._get(this._tempValueRep),
                                _ = this._get(this._valueRep);
                            (this._tempValueRep = this._copy(this._valueRep)),
                                (this._tempValueText = this._format(this._tempValueRep)),
                                (this._tempValue = m),
                                this._setHeader(),
                                this._valueEquals(m, _) ||
                                    setTimeout(function () {
                                        a._hook("onTempChange", { value: _ });
                                    });
                        }
                        this._onOpen();
                    }
                    (this._anchorAlign = e.anchorAlign || (this._touchUi ? "center" : "start")),
                        (this._cssClass = "mbsc-picker " + (e.cssClass || "")),
                        (this._isOpen = r),
                        (this._maxWidth = e.maxWidth),
                        (this._valueTextChange = this._valueTextChange || this._oldValueText !== this._valueText),
                        (this._oldValueText = this._valueText),
                        (this._value = o),
                        (this._shouldInitInput = this._shouldInitInput || e.display !== i.display || e.element !== i.element || e.showOnFocus !== i.showOnFocus || e.showOnClick !== i.showOnClick);
                }),
                (t.prototype._updated = function () {
                    var e = this,
                        t = this.s,
                        a = this._input;
                    (this._shouldInitInput &&
                        !this._inst &&
                        (this._resetEl(this._prevS.display),
                        clearTimeout(this._inputTimeout),
                        (this._inputTimeout = setTimeout(function () {
                            e._shouldInitInput = !1;
                            var a = t.element || e._el;
                            a &&
                                (a.getInputElement
                                    ? a.getInputElement().then(function (t) {
                                          (e._el = t), e._initEl();
                                      })
                                    : a.vInput
                                    ? (e._el = a.vInput.nativeElement)
                                    : (e._el = a)),
                                e._initEl();
                        }))),
                    this._valueTextChange && a) &&
                        this._writeValue(a, this._valueText || "") &&
                        ((this._preventChange = !0), Vt(a, Ra));
                    (this._valueTextChange = !1), (this._anchor = t.anchor || this._focusElm || t.element || this._el);
                }),
                (t.prototype._writeValue = function (e, t) {
                    var a = e.value;
                    return (e.value = t), a !== t;
                }),
                (t.prototype._destroy = function () {
                    this._resetEl(this.s.display);
                }),
                (t.prototype._setHeader = function () {
                    var e = this.s.headerText;
                    this._headerText = e ? e.replace(/\{value\}/i, this._tempValueText || "&nbsp;") : ae;
                }),
                (t.prototype._setOrUpdate = function (e) {
                    var t = this._get(this._tempValueRep);
                    (this._tempValue = t), (this._tempValueText = this._format(this._tempValueRep)), this._setHeader(), e || this._hook("onTempChange", { value: t }), this._live ? this.set() : this.forceUpdate();
                }),
                (t.prototype._copy = function (e) {
                    return e;
                }),
                (t.prototype._format = function (e) {
                    return e;
                }),
                (t.prototype._get = function (e) {
                    return e;
                }),
                (t.prototype._parse = function (e) {
                    return e;
                }),
                (t.prototype._validate = function () {}),
                (t.prototype._onClosed = function () {}),
                (t.prototype._onOpen = function () {}),
                (t.prototype._onParse = function () {}),
                (t.prototype._onEnterKey = function (e) {
                    this.set(), this.close();
                }),
                (t.prototype._change = function (e) {
                    this.s.value === ae && this.setState({ value: e }), this._hook("onChange", { value: e, valueText: this._tempValueText });
                }),
                (t.prototype._readValue = function (e) {
                    (this._tempValueRep = this._parse(e)), this._onParse(), this._validate(), (this._tempValueText = this._format(this._tempValueRep));
                }),
                (t.prototype._initEl = function () {
                    var e = this.s,
                        t = this._el;
                    if ((this._wrapper && "inline" === e.display && (this._observer = An(this._wrapper, this._onWrapperResize, this._zone)), t && 1 === t.nodeType)) {
                        if (((this._win = wt(t)), Ht(t, "input,select"))) {
                            var a = (this._input = t);
                            (this._readOnly = a.readOnly), this._writeValue(a, this._valueText || "") && Vt(a, Ra);
                        }
                        "inline" !== e.display &&
                            (this._isMbsc || (this._unlisten = pn(t, { click: !0 })),
                            (e.showOnClick || e.showOnFocus) && this._input && (this._input.readOnly = !0),
                            e.showOnClick && (yt(t, Aa, this._onInputClick), yt(t, Ja, this._onInputMouseDown), yt(t, Ka, this._onInputKey)),
                            e.showOnFocus && (yt(this._win, Ua, this._onWinFocus), yt(t, Ua, this._onInputFocus)),
                            yt(t, Ra, this._onInputChange));
                    }
                }),
                (t.prototype._resetEl = function (e) {
                    if ("inline" !== e) {
                        this._input && (this._input.readOnly = this._readOnly), this._unlisten && this._unlisten();
                        var t = this._el;
                        t && (xt(t, Aa, this._onInputClick), xt(t, Ja, this._onInputMouseDown), xt(t, Ka, this._onInputKey), xt(t, Ua, this._onInputFocus), xt(t, Ra, this._onInputChange), xt(this._win, Ua, this._onWinFocus));
                    }
                    this._observer && (this._observer.detach(), (this._observer = null));
                }),
                (t.defaults = { cancelText: "Cancel", closeText: "Close", okText: "Ok", setText: "Set" }),
                t
            );
        })(Va),
        vi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._instanceService = new _i()),
                    (t._setCal = function (e) {
                        (t._calendarView = e), (t._instanceService.instance = t);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    var t = ga(mi, {
                            ref: this._setCal,
                            activeDate: e.active,
                            cssClass: this._className + " mbsc-calendar-" + e.display,
                            calendarScroll: e.calendarScroll,
                            calendarType: e.calendarType,
                            colors: e.colors,
                            context: e.context,
                            downIcon: e.downIcon,
                            hoverEnd: e.hoverEnd,
                            hoverStart: e.hoverStart,
                            invalid: e.invalid,
                            instanceService: this._instanceService,
                            isPicker: !0,
                            labels: e.labels,
                            marked: e.marked,
                            max: e.max,
                            min: e.min,
                            mousewheel: e.mousewheel,
                            nextIconH: e.nextIconH,
                            nextIconV: e.nextIconV,
                            noOuterChange: e.selectRange,
                            onActiveChange: e.onActiveChange,
                            onCellHoverIn: e.onCellHoverIn,
                            onCellHoverOut: e.onCellHoverOut,
                            onDayClick: this._onDayClick,
                            onDayHoverIn: e.onDayHoverIn,
                            onDayHoverOut: e.onDayHoverOut,
                            onLabelClick: e.onLabelClick,
                            onPageChange: e.onPageChange,
                            onPageLoaded: e.onPageLoaded,
                            onPageLoading: e.onPageLoading,
                            onTodayClick: this._onTodayClick,
                            pages: e.pages,
                            prevIconH: e.prevIconH,
                            prevIconV: e.prevIconV,
                            renderHeader: e.renderCalendarHeader,
                            rangeEnd: e.rangeEnd,
                            rangeStart: e.rangeStart,
                            rtl: e.rtl,
                            selectedDates: this._tempValueRep,
                            showCalendar: !0,
                            showControls: e.showControls,
                            showOuterDays: e.showOuterDays,
                            showToday: !1,
                            showWeekNumbers: e.showWeekNumbers,
                            theme: e.theme,
                            themeVariant: e.themeVariant,
                            upIcon: e.upIcon,
                            valid: e.valid,
                            weeks: e.weeks,
                            width: e.width,
                            getDate: e.getDate,
                            getDay: e.getDay,
                            getMaxDayOfMonth: e.getMaxDayOfMonth,
                            getMonth: e.getMonth,
                            getWeekNumber: e.getWeekNumber,
                            getYear: e.getYear,
                            dateFormat: e.dateFormat,
                            dayNames: e.dayNames,
                            dayNamesMin: e.dayNamesMin,
                            dayNamesShort: e.dayNamesShort,
                            eventText: e.eventText,
                            eventsText: e.eventsText,
                            firstDay: e.firstDay,
                            monthNames: e.monthNames,
                            monthNamesShort: e.monthNamesShort,
                            moreEventsPluralText: e.moreEventsPluralText,
                            moreEventsText: e.moreEventsText,
                            todayText: e.todayText,
                            yearSuffix: e.yearSuffix,
                        }),
                        a = { instance: this };
                    return ga(js.Provider, { children: t, value: a });
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._onDayClick = function (e) {
                            var a = t.s,
                                n = e.date,
                                i = +n;
                            if (a.selectMultiple) {
                                var r = t._tempValueRep;
                                r[i] ? delete r[i] : (a.selectMax === ae || Object.keys(r).length < a.selectMax) && (r[i] = n), (t._tempValueRep = s({}, r));
                            } else a.selectRange || (t._tempValueRep = {}), (t._tempValueRep[i] = n);
                            t._hook("onCellClick", e), t._setOrUpdate();
                        }),
                        (t._onTodayClick = function () {
                            var e = new Date(),
                                a = +e;
                            t.s.selectRange || t.s.selectMultiple || ((t._tempValueRep = {}), (t._tempValueRep[a] = e), t._setOrUpdate());
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    (t.prototype._valueEquals = function (e, t) {
                        return fs(e, t, this.s);
                    }),
                    (t.prototype._copy = function (e) {
                        return s({}, e);
                    }),
                    (t.prototype._format = function (e) {
                        var t = this.s,
                            a = [];
                        for (var n in e) e[n] !== ae && null !== e[n] && a.push(ps(t.dateFormat, new Date(+e[n]), t));
                        return t.selectMultiple || t.selectRange ? a.join(", ") : a[0];
                    }),
                    (t.prototype._parse = function (e) {
                        var t = this.s,
                            a = t.selectRange,
                            n = {},
                            s = [];
                        le(e) ? (s = e.split(",")) : oe(e) ? (s = e) : e && !oe(e) && (s = [e]);
                        for (var i = 0, r = s; i < r.length; i++) {
                            var o = r[i];
                            if (null !== o) {
                                var l = ms(o, t.dateFormat, t);
                                n[a ? +l : +is(l)] = l;
                            }
                        }
                        return n;
                    }),
                    (t.prototype._get = function (e) {
                        var t = this.s.selectRange;
                        if (this.s.selectMultiple || t) {
                            for (var a = [], n = 0, s = Object.keys(e); n < s.length; n++) {
                                var i = s[n];
                                a.push(new Date(+e[i]));
                            }
                            return a;
                        }
                        var r = Object.keys(e || {});
                        return r.length ? new Date(e[r[0]]) : null;
                    }),
                    (t.defaults = s({}, Vs, { calendarScroll: "horizontal", calendarType: "month", selectedText: "{count} selected", showControls: !0, showOnClick: !0, weeks: 1 })),
                    (t._name = "Calendar"),
                    t
                );
            })(pi)
        ),
        fi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onIndexChange = function (e) {
                        (e.wheel = t.s.wheel), t._hook("onIndexChange", e);
                    }),
                    (t._onItemClick = function (e) {
                        t._hook("onIndexChange", { click: !0, index: e.index, wheel: t.s.wheel, selected: e.selected });
                    }),
                    (t._onKeyDown = function (e) {
                        var a = 0;
                        e.keyCode === Vn ? (a = -1) : e.keyCode === Pn && (a = 1);
                        var n = t.s,
                            s = n.selectedIndex + a;
                        a && (e.preventDefault(), s < n.minIndex || s > n.maxIndex || ((t._shouldFocus = !0), t._hook("onIndexChange", { index: s, wheel: n.wheel })));
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._getText = function (e) {
                    return e !== ae ? (e.display !== ae ? e.display : e) : ae;
                }),
                (t.prototype._getValue = function (e) {
                    return e ? (e.value !== ae ? e.value : e.display !== ae ? e.display : e) : e;
                }),
                (t.prototype._isSelected = function (e) {
                    var t = this.s,
                        a = t.selectedValues,
                        n = this._getValue(e.data);
                    return t.multiple ? !(!a || !a.indexOf) && a.indexOf(n) >= 0 : t.selectOnScroll ? e.key === t.selectedIndex : n !== ae && n === a;
                }),
                (t.prototype._isDisabled = function (e) {
                    var t = this.s.disabled,
                        a = e && e.disabled,
                        n = this._getValue(e);
                    return !!(a || (t && t.get(n)));
                }),
                (t.prototype._render = function (e) {
                    var t = e.rows;
                    this._items = e.wheel.getItem || e.wheel.data || [];
                    var a = e.itemHeight,
                        n = 2 * pe((a - 0.03 * ((a * t) / 2 + 3)) / 2);
                    (this._batchSize3d = pe(1.8 * t)),
                        (this._angle3d = 360 / (2 * this._batchSize3d)),
                        (this._style = { height: 2 * pe((t * a * (e.scroll3d ? 1.1 : 1)) / 2) }),
                        (this._itemNr = e.wheel.spaceAround ? 1 : t),
                        (this._innerStyle = { height: (e.scroll3d ? n : e.wheel.spaceAround ? a : a * t) + "px" }),
                        (this._wheelStyle = e.wheelWidth
                            ? { width: e.wheelWidth[e.key] || e.wheelWidth }
                            : { maxWidth: oe(e.maxWheelWidth) ? e.maxWheelWidth[e.key] : e.maxWheelWidth, minWidth: oe(e.minWheelWidth) ? e.minWheelWidth[e.key] : e.minWheelWidth }),
                        e.scroll3d && (this._innerStyle[gt + "transform"] = "translateY(-50%) translateZ(" + ((a * t) / 2 + 3) + "px");
                }),
                (t.prototype._updated = function () {
                    if (this._shouldFocus) {
                        var e = this._el.querySelector('.mbsc-scroller-wheel-item[tabindex="0"]');
                        e && e.focus(), (this._shouldFocus = !1);
                    }
                }),
                t
            );
        })(Va),
        gi = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    return ga(
                        "div",
                        { ref: this._setEl, tabIndex: (e.multiple || e.selected) && e.text && !e.is3d ? 0 : -1, className: this._cssClass, role: "option", style: this._style, onClick: this._onClick },
                        ga("div", { dangerouslySetInnerHTML: this.textParam }),
                        e.checkmark && ga("span", { className: this._checkmarkClass }),
                        e.text
                    );
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._onClick = function () {
                            t.s.text !== ae && t._hook("onClick", { index: t.s.index, selected: t.s.selected, disabled: t.s.disabled });
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    (t.prototype._mounted = function () {
                        var e = this;
                        this._unlisten = pn(this._el, {
                            click: !0,
                            keepFocus: !1,
                            onBlur: function () {
                                e.setState({ hasFocus: !1 });
                            },
                            onFocus: function () {
                                e.setState({ hasFocus: !0 });
                            },
                            onHoverIn: function () {
                                e.s.text !== ae && e.setState({ hasHover: !0 });
                            },
                            onHoverOut: function () {
                                e.s.text !== ae && e.setState({ hasHover: !1 });
                            },
                            onPress: function () {
                                e.s.text !== ae && e.setState({ isActive: !0 });
                            },
                            onRelease: function () {
                                e.s.text !== ae && e.setState({ isActive: !1 });
                            },
                        });
                    }),
                    (t.prototype._destroy = function () {
                        this._unlisten();
                    }),
                    (t.prototype._render = function (e, t) {
                        var a = e.height;
                        (this._cssClass =
                            "mbsc-scroller-wheel-item" +
                            this._theme +
                            this._rtl +
                            (e.checkmark ? " mbsc-wheel-item-checkmark" : "") +
                            (e.is3d ? " mbsc-scroller-wheel-item-3d" : "") +
                            (e.scroll3d && !e.is3d ? " mbsc-scroller-wheel-item-2d" : "") +
                            (e.selected && !e.is3d ? " mbsc-selected" : "") +
                            (e.selected && e.is3d ? " mbsc-selected-3d" : "") +
                            (e.disabled ? " mbsc-disabled" : "") +
                            (e.multiple ? " mbsc-wheel-item-multi" : "") +
                            (t.hasHover ? " mbsc-hover" : "") +
                            (t.hasFocus ? " mbsc-focus" : "") +
                            (t.isActive ? " mbsc-active" : "")),
                            (this._style = { height: a, lineHeight: a + "px" }),
                            (this._checkmarkClass = this._theme + this._rtl + " mbsc-wheel-checkmark" + (e.selected ? " mbsc-selected" : "")),
                            e.is3d && ((this._transform = "rotateX(" + (((e.offset - e.index) * e.angle3d) % 360) + "deg) translateZ(" + (a * e.rows) / 2 + "px)"), (this._style[gt + "transform"] = this._transform));
                    }),
                    t
                );
            })(Va)
        ),
        bi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.renderer = function (e, a, n) {
                        var s = t.s;
                        return e !== ae
                            ? ga(gi, {
                                  angle3d: t._angle3d,
                                  disabled: t._isDisabled(e.data),
                                  height: s.itemHeight,
                                  index: e.key,
                                  is3d: n,
                                  key: e.key,
                                  multiple: s.multiple,
                                  onClick: t._onItemClick,
                                  offset: a,
                                  checkmark: s.wheel.checkmark,
                                  rows: s.rows,
                                  rtl: s.rtl,
                                  scroll3d: s.scroll3d,
                                  selected: t._isSelected(e),
                                  text: t._getText(e.data),
                                  theme: s.theme,
                              })
                            : null;
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._template = function (e, t) {
                    return ga(
                        "div",
                        {
                            className: "mbsc-scroller-wheel-wrapper mbsc-scroller-wheel-wrapper-" + e.wheel._key + " " + (e.wheel.cssClass || "") + this._theme + this._rtl,
                            onKeyDown: this._onKeyDown,
                            ref: this._setEl,
                            style: this._wheelStyle,
                        },
                        ga(ai, {
                            batchSize3d: this._batchSize3d,
                            className: "mbsc-scroller-wheel" + (e.scroll3d ? " mbsc-scroller-wheel-3d" : "") + this._theme,
                            innerClass:
                                "mbsc-scroller-wheel-cont mbsc-scroller-wheel-cont-" +
                                e.display +
                                (e.scroll3d ? " mbsc-scroller-wheel-cont-3d" : "") +
                                (e.multiple ? " mbsc-scroller-wheel-multi" : " mbsc-scroller-wheel-single") +
                                this._theme,
                            innerStyles: this._innerStyle,
                            items: this._items,
                            itemSize: e.itemHeight,
                            itemRenderer: this.renderer,
                            itemNr: this._itemNr,
                            margin: !0,
                            maxIndex: e.maxIndex,
                            minIndex: e.minIndex,
                            onIndexChange: this._onIndexChange,
                            offset: e.wheel._offset,
                            rtl: e.rtl,
                            scroll3d: e.scroll3d,
                            scrollBar: !this._touchUi,
                            selectedIndex: e.selectedIndex,
                            snap: !0,
                            spaceAround: e.wheel.spaceAround,
                            styles: this._style,
                            visibleSize: e.rows,
                        })
                    );
                }),
                t
            );
        })(fi);
    function yi(e, t, a, n) {
        var s,
            i = e.min === ae ? -1 / 0 : e.min,
            r = e.max === ae ? 1 / 0 : e.max,
            o = Di(e, t),
            l = Ti(e, o),
            c = l,
            h = l,
            d = 0,
            u = 0;
        if (a && a.get(l)) {
            for (s = 0; o - d >= i && a.get(c) && s < 100; ) s++, (c = Ti(e, o - ++d));
            for (s = 0; o + u < r && a.get(h) && s < 100; ) s++, (h = Ti(e, o + ++u));
            l = ((u < d && u && -1 !== n) || !d || o - d < 0 || 1 === n) && !a.get(h) ? h : c;
        }
        return l;
    }
    function xi(e) {
        return e !== ae ? (e.value !== ae ? e.value : e.display !== ae ? e.display : e) : e;
    }
    function Di(e, t) {
        var a = e.multiple ? (t && t.length && t[0]) || ae : t;
        return (e.getIndex ? +e.getIndex(t) : e._map.get(a)) || 0;
    }
    function Ti(e, t) {
        return xi(
            (function (e, t) {
                if (e.getItem) return e.getItem(t);
                var a = e.data || [],
                    n = a.length,
                    s = t % n;
                return e._circular ? a[s >= 0 ? s : s + n] : a[re(t, 0, n - 1)];
            })(e, t)
        );
    }
    var Ci = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    var t = this,
                        a = ga(
                            "div",
                            {
                                className:
                                    "mbsc-scroller mbsc-scroller-" +
                                    this._displayStyle +
                                    this._theme +
                                    this._rtl +
                                    (this._touchUi ? " mbsc-scroller-touch" : " mbsc-scroller-pointer") +
                                    ("inline" === e.display ? " mbsc-font " : " ") +
                                    this._className,
                            },
                            this._wheels.map(function (a, n) {
                                return ga(
                                    "div",
                                    { key: n, className: "mbsc-scroller-wheel-group-cont" + (e.scroll3d ? " mbsc-scroller-wheel-group-cont-3d" : "") + (1 === a.length ? " mbsc-wheel-group-cont-single" : "") + t._theme },
                                    !t._isAnyMulti &&
                                        ga("div", { className: "mbsc-scroller-wheel-line mbsc-scroller-wheel-line-" + t._displayStyle + (1 === a.length ? " mbsc-scroller-wheel-line-single" : "") + t._theme, style: t._lineStyle }),
                                    ga(
                                        "div",
                                        { className: "mbsc-scroller-wheel-group" + (e.scroll3d ? " mbsc-scroller-wheel-group-3d" : "") + t._theme },
                                        ga("div", { className: "mbsc-scroller-wheel-overlay mbsc-scroller-wheel-overlay-" + t._displayStyle + t._theme, style: t._overlayStyle }),
                                        a.map(function (a, n) {
                                            return ga(bi, {
                                                disabled: t._disabled && t._disabled[a._key],
                                                display: t._displayStyle,
                                                key: n,
                                                itemHeight: e.itemHeight,
                                                onIndexChange: t._onWheelIndexChange,
                                                maxIndex: a.max,
                                                maxWheelWidth: e.maxWheelWidth,
                                                minIndex: a.min,
                                                minWheelWidth: e.minWheelWidth,
                                                multiple: a.multiple,
                                                rows: t._rows,
                                                scroll3d: t._scroll3d,
                                                selectedIndex: t._indexes[a._key],
                                                selectedValues: t._tempValueRep[a._key],
                                                selectOnScroll: e.selectOnScroll,
                                                theme: e.theme,
                                                touchUi: e.touchUi,
                                                rtl: e.rtl,
                                                wheel: a,
                                                wheelWidth: e.wheelWidth,
                                            });
                                        })
                                    )
                                );
                            })
                        );
                    return qn(this, e, a);
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._wheels = []),
                        (t._batches = []),
                        (t._lastIndexes = []),
                        (t._onWheelIndexChange = function (e) {
                            var a = t.s,
                                n = e.wheel,
                                s = n._key,
                                i = n.multiple,
                                r = Ti(n, e.index),
                                o = t._disabled && t._disabled[s] && t._disabled[s].get(r),
                                l = [],
                                c = a.selectOnScroll,
                                h = c || !e.click;
                            h && (t._lastIndexes[s] = t._indexes[s] = e.index);
                            var d = t._get(t._tempValueRep);
                            if (i || t._tempValueRep[s] !== r) {
                                if (i) {
                                    if (e.click) {
                                        var u = (t._tempValueRep[s] || []).slice();
                                        !1 === e.selected ? u.push(r) : !0 === e.selected && u.splice(u.indexOf(r), 1), (t._tempValueRep[s] = u);
                                    }
                                } else (c || (e.click && !o)) && (t._tempValueRep[s] = r);
                                h &&
                                    t._indexes.forEach(function (e, a) {
                                        var n = t._wheelMap[a],
                                            s = n.data ? n.data.length : 0;
                                        (t._batches[a] = s ? fe(e / s) : 0), (l[a] = s);
                                    }),
                                    t._validate(s, e.diff > 0 ? 1 : -1),
                                    !i &&
                                        c &&
                                        t._tempValueRep.forEach(function (e, a) {
                                            var n = t._wheelMap[a],
                                                s = n.data ? n.data.length : 0,
                                                i = t._indexes[a],
                                                r = Di(n, e) + t._batches[a] * s;
                                            (t._lastIndexes[a] = t._indexes[a] = r), (n._offset = s !== l[a] ? r - i : 0);
                                        });
                                var m = t._get(t._tempValueRep),
                                    _ = !t._valueEquals(d, m);
                                ((!i && c) || _) && t._setOrUpdate(), (!i && c) || _ || t.forceUpdate();
                            } else e.click && t._live && !t._valueEquals(t.value, d) ? t.set() : t.forceUpdate();
                            t._live && !i && !o && e.click && t.close();
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    (t.prototype._initWheels = function () {
                        var e = this,
                            t = 0,
                            a = this.s.wheels || [];
                        (this._isAnyMulti = !1),
                            (this._wheelMap = []),
                            a.forEach(function (a) {
                                a.forEach(function (a) {
                                    e._initWheel(a, t), (e._wheelMap[t] = a), t++;
                                });
                            }),
                            (this._wheels = a);
                    }),
                    (t.prototype._shouldValidate = function (e, t) {
                        return (e.shouldValidate && e.shouldValidate(e, t)) || e.wheels !== t.wheels;
                    }),
                    (t.prototype._valueEquals = function (e, t) {
                        return this.s.valueEquality ? this.s.valueEquality(e, t) : e === t;
                    }),
                    (t.prototype._render = function (t, a) {
                        var n = this.props || {},
                            s = this._respProps || {},
                            i = this._prevS,
                            r = !!this._touchUi && t.circular,
                            o = this._touchUi ? t.rows : s.rows || n.rows || 7;
                        if (
                            ((this._displayStyle = t.displayStyle || t.display),
                            (this._scroll3d = t.scroll3d && this._touchUi && bt),
                            (t.itemHeight !== i.itemHeight || o !== this._rows) && ((this._rows = o), (this._lineStyle = { height: t.itemHeight + "px" }), this._scroll3d))
                        ) {
                            var l = "translateZ(" + ((t.itemHeight * o) / 2 + 3) + "px";
                            (this._overlayStyle = {}), (this._overlayStyle[gt + "transform"] = l), (this._lineStyle[gt + "transform"] = "translateY(-50%) " + l);
                        }
                        (t.wheels === i.wheels && r === this._circular) || ((this._batches = []), (this._shouldSetIndex = !0), (this._circular = r), this._initWheels()),
                            e.prototype._render.call(this, t, a),
                            this._shouldSetIndex && (this._setIndexes(), (this._shouldSetIndex = this._indexFromValue = !1));
                    }),
                    (t.prototype._writeValue = function (t, a) {
                        return this.s.writeValue ? this.s.writeValue(t, a) : e.prototype._writeValue.call(this, t, a);
                    }),
                    (t.prototype._copy = function (e) {
                        return e.slice(0);
                    }),
                    (t.prototype._format = function (e) {
                        return this.s.formatValue ? this.s.formatValue(e) : e.join(" ");
                    }),
                    (t.prototype._get = function (e) {
                        return this.s.getValue ? this.s.getValue(e) : e;
                    }),
                    (t.prototype._parse = function (e) {
                        if (this.s.parseValue) return this.s.parseValue(e);
                        var t = [],
                            a = [],
                            n = 0;
                        return (
                            null !== e && e !== ae && (a = (e + "").split(" ")),
                            this._wheels.forEach(function (e) {
                                e.forEach(function (e) {
                                    for (var s = e.data || [], i = s.length, r = xi(s[0]), o = 0; r != a[n] && o < i; ) (r = xi(s[o])), o++;
                                    t.push(r), n++;
                                });
                            }),
                            t
                        );
                    }),
                    (t.prototype._validate = function (e, t) {
                        var a = this;
                        if (this.s.validate) {
                            var n = this.s.validate.call(this._el, { direction: t, index: e, values: this._tempValueRep.slice(0), wheels: this._wheelMap });
                            (this._disabled = n.disabled),
                                n.valid
                                    ? (this._tempValueRep = n.valid.slice(0))
                                    : this._wheelMap.forEach(function (e, n) {
                                          a._tempValueRep[n] = yi(e, a._tempValueRep[n], a._disabled && a._disabled[n], t);
                                      });
                        }
                    }),
                    (t.prototype._onOpen = function () {
                        (this._batches = []), (this._shouldSetIndex = !0), (this._indexFromValue = !0);
                    }),
                    (t.prototype._onParse = function () {
                        this._shouldSetIndex = !0;
                    }),
                    (t.prototype._initWheel = function (e, t) {
                        var a = this._circular;
                        (e._key = t),
                            (e._map = new Map()),
                            (e._circular = a === ae ? (e.circular === ae ? e.data && e.data.length > this._rows : e.circular) : oe(a) ? a[t] : a),
                            e.data &&
                                ((e.min = e._circular ? ae : 0),
                                (e.max = e._circular ? ae : e.data.length - 1),
                                e.data.forEach(function (t, a) {
                                    e._map.set(xi(t), a);
                                })),
                            e.multiple && (this._isAnyMulti = !0);
                    }),
                    (t.prototype._setIndexes = function () {
                        var e = this,
                            t = this._indexes || [];
                        (this._indexes = []),
                            this._tempValueRep.forEach(function (a, n) {
                                var s = e._wheelMap[n],
                                    i = s.data ? s.data.length : 0,
                                    r = Di(s, a);
                                if (!s.spaceAround || s.multiple) {
                                    var o = r;
                                    e._indexFromValue ||
                                        ((o = t[n]) !== ae &&
                                            (o =
                                                (function (e, t) {
                                                    if (e.getItem && e.getIndex) return e.getIndex(xi(e.getItem(t)));
                                                    var a = (e.data || []).length,
                                                        n = t % a;
                                                    return n >= 0 ? n : n + a;
                                                })(s, o) +
                                                (e._batches[n] || 0) * i)),
                                        o !== ae && s.data ? ((o = re(o, 0, Math.max(s.data.length - e._rows, 0))), (e._indexes[n] = o)) : (e._indexes[n] = e._lastIndexes[n] || 0);
                                } else e._indexes[n] = r + (e._batches[n] || 0) * i;
                            });
                    }),
                    (t.defaults = { itemHeight: 40, rows: 5, selectOnScroll: !0, showOnClick: !0 }),
                    (t._name = "Scroller"),
                    t
                );
            })(pi)
        ),
        Si = { ios: 50, material: 46, windows: 50 };
    function wi(e, t) {
        var a = new Date(e);
        return t ? fe(+a / 864e5) : a.getMonth() + 12 * (a.getFullYear() - 1970);
    }
    function ki(e) {
        return e.getFullYear() + "-" + _e(e.getMonth() + 1) + "-" + _e(e.getDate());
    }
    function Mi(e) {
        return e.getMilliseconds();
    }
    function Ei(e) {
        return e.getHours() > 11 ? 1 : 0;
    }
    function Ni(e, t, a) {
        return fe((a - t) / e) * e + t;
    }
    var Li = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._preset = "datetime"), t;
            }
            return n(t, e), t;
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._setScroller = function (e) {
                            t._scroller = e;
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    (t.prototype._template = function (e, t) {
                        return ga(
                            Ci,
                            s({}, e, {
                                formatValue: this._formatDate,
                                getValue: this._getDate,
                                minWheelWidth: this._minWheelWidth,
                                parseValue: this._parseDate,
                                ref: this._setScroller,
                                shouldValidate: this._shouldValidate,
                                validate: this._validate,
                                value: this._value,
                                valueEquality: this._valueEquals,
                                wheels: this._wheels,
                                onChange: this._onChange,
                            }),
                            e.children
                        );
                    }),
                    t
                );
            })(
                (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t._preset = "date"),
                            (t._innerValues = {}),
                            (t._onChange = function (e) {
                                t.s.value === ae && t.setState({ value: e.value }), t._hook("onChange", e);
                            }),
                            (t._parseDate = function (e) {
                                var a = t.s;
                                return e || (t._innerValues = {}), t._getArray(ms(e || a.defaultSelection || new Date(), t._format, a), !!e);
                            }),
                            (t._formatDate = function (e) {
                                var a = t._getDate(e);
                                return a ? ps(t._format, a, t.s) : "";
                            }),
                            (t._getDate = function (e) {
                                var a,
                                    n,
                                    s = t.s,
                                    i = t._getArrayPart,
                                    r = t._wheelOrder,
                                    o = new Date(new Date().setHours(0, 0, 0, 0));
                                if (null === e || e === ae) return null;
                                if (r.dd !== ae) {
                                    var l = e[r.dd].split("-");
                                    a = new Date(l[0], l[1] - 1, l[2]);
                                }
                                r.tt !== ae && ((n = a || o), (n = new Date(n.getTime() + (e[r.tt] % 86400) * 1e3)));
                                var c = i(e, "y", a, o),
                                    h = i(e, "m", a, o),
                                    d = Math.min(i(e, "d", a, o), s.getMaxDayOfMonth(c, h)),
                                    u = i(e, "h", n, o);
                                return s.getDate(c, h, d, t._hasAmPm && i(e, "a", n, o) ? u + 12 : u, i(e, "i", n, o), i(e, "s", n, o), i(e, "u", n, o));
                            }),
                            (t._validate = function (e) {
                                var a = e.direction,
                                    n = e.index,
                                    i = e.values,
                                    r = e.wheels,
                                    o = [],
                                    l = t.s,
                                    c = l.stepHour,
                                    h = l.stepMinute,
                                    d = l.stepSecond,
                                    u = l.mode || t._preset,
                                    m = t._wheelOrder,
                                    _ = t._getDatePart,
                                    p = t._max,
                                    v = t._min,
                                    f = v ? v.getHours() % c : 0,
                                    g = v ? v.getMinutes() % h : 0,
                                    b = v ? v.getSeconds() % d : 0,
                                    y = t._getDate(i),
                                    x = l.getYear(y),
                                    D = l.getMonth(y),
                                    T = l.getDate(x, D - 1, 1),
                                    C = l.getDate(x, D + 2, 1);
                                (n !== m.y && n !== m.m && n !== m.d && n !== ae) || ((t._valids = Es(l.valid, T, C, l)), (t._invalids = Es(l.invalid, T, C, l)));
                                var S = t._valids,
                                    w = t._invalids,
                                    k = hi(y, l, v ? +v : -1 / 0, p ? +p : 1 / 0, w, S, a),
                                    M = t._getArray(k),
                                    E = t._wheels && t._wheels[0][m.d],
                                    N = _.y(k),
                                    L = _.m(k),
                                    I = l.getMaxDayOfMonth(N, L),
                                    H = { y: v ? v.getFullYear() : -1 / 0, m: 0, d: 1, h: f, i: g, s: b, a: 0, tt: 0 },
                                    O = { y: p ? p.getFullYear() : 1 / 0, m: 11, d: 31, h: Ni(c, f, t._hasAmPm ? 11 : 23), i: Ni(h, g, 59), s: Ni(d, b, 59), a: 1, tt: 86400 },
                                    V = { y: 1, m: 1, d: 1, h: c, i: h, s: d, a: 1, tt: t._timeStep },
                                    Y = !0,
                                    P = !0;
                                ["dd", "y", "m", "d", "tt", "a", "h", "i", "s"].forEach(function (e) {
                                    var t = H[e],
                                        a = O[e],
                                        n = _[e](k),
                                        s = m[e];
                                    if ((Y && v && (t = _[e](v)), P && p && (a = _[e](p)), n < t && (n = t), n > a && (n = a), "dd" !== e && "tt" !== e && (Y && (Y = n === t), P && (P = n === a)), s !== ae)) {
                                        if (((o[s] = new Map()), "y" !== e && "dd" !== e)) for (var i = H[e]; i <= O[e]; i += V[e]) (i < t || i > a) && o[s].set(i, !0);
                                        if ("d" === e && w)
                                            for (var r in w)
                                                if (!S || !S[r]) {
                                                    var c = new Date(+r),
                                                        h = l.getYear(c),
                                                        d = l.getMonth(c);
                                                    h === N && d === L && ci(c, w, S) && o[s].set(l.getDay(c), !0);
                                                }
                                    }
                                });
                                var F = w && w[+is(k)];
                                if (/time/i.test(u) && F)
                                    for (
                                        var R = function (e) {
                                                if (e.start && e.end) {
                                                    var t = e.start,
                                                        n = e.end,
                                                        s = ["a", "h", "i", "s", "tt"],
                                                        i = !0,
                                                        l = !0;
                                                    s.forEach(function (e, c) {
                                                        var h = m[e];
                                                        if (h !== ae) {
                                                            var d = _[e](t),
                                                                u = _[e](n),
                                                                p = _[e](k),
                                                                v = 0,
                                                                f = 0;
                                                            if ("tt" !== e) {
                                                                i || (d = 0), l || (u = O[e]);
                                                                for (var g = c + 1; g < 4; g++) {
                                                                    var b = s[g];
                                                                    m[b] !== ae && (_[b](t) > 0 && i && (v = V[e]), _[b](n) < O[b] && l && (f = V[e]));
                                                                }
                                                            }
                                                            if (i || l) {
                                                                for (g = d + v; g <= u - f; g += V[e]) o[h].set(g, !0);
                                                                (p = yi(r[h], p, o[h], a)), (M[h] = p);
                                                            }
                                                            p !== d && (i = !1), p !== u && (l = !1);
                                                        }
                                                    });
                                                }
                                            },
                                            A = 0,
                                            z = F;
                                        A < z.length;
                                        A++
                                    ) {
                                        R(z[A]);
                                    }
                                var W = t._dateDisplay;
                                if (E && (E.data.length !== I || /DDD/.test(W))) {
                                    for (var U = [], B = 1; B <= I; B++) {
                                        var j = l.getDate(N, L, B).getDay(),
                                            K = W.replace(/[my|]/gi, "")
                                                .replace(/DDDD/, l.dayNames[j])
                                                .replace(/DDD/, l.dayNamesShort[j])
                                                .replace(/DD/, _e(B) + l.daySuffix)
                                                .replace(/D/, B + l.daySuffix);
                                        U.push({ display: K, value: B });
                                    }
                                    (E.data = U), (t._wheels[0][m.d] = s({}, E)), t._scroller && t._scroller._initWheels();
                                }
                                return { disabled: o, valid: M };
                            }),
                            (t._shouldValidate = function (e, t) {
                                return !!((e.min && +e.min != +t.min) || (e.max && +e.max != +t.max));
                            }),
                            (t._getYearValue = function (e) {
                                return { display: (/yy/i.test(t._dateDisplay) ? e : (e + "").substr(2, 2)) + t.s.yearSuffix, value: e };
                            }),
                            (t._getYearIndex = function (e) {
                                return +e;
                            }),
                            (t._getDateIndex = function (e) {
                                return wi(e, t._hasDay);
                            }),
                            (t._getDateItem = function (e) {
                                var a = t.s,
                                    n = t._hasDay,
                                    s = new Date(new Date().setHours(0, 0, 0, 0)),
                                    i = n ? new Date(864e5 * e) : new Date(1970, e, 1);
                                return (
                                    n && (i = new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate())),
                                    { disabled: n && ci(i, t._invalids, t._valids), display: s.getTime() === i.getTime() ? a.todayText : ps(t._dateTemplate, i, a), value: ki(i) }
                                );
                            }),
                            (t._getArrayPart = function (e, a, n, s) {
                                var i;
                                return t._wheelOrder[a] === ae || ((i = +e[t._wheelOrder[a]]), isNaN(i)) ? (n ? t._getDatePart[a](n) : t._innerValues[a] !== ae ? t._innerValues[a] : t._getDatePart[a](s)) : i;
                            }),
                            (t._getHours = function (e) {
                                var a = e.getHours();
                                return ve((a = t._hasAmPm && a >= 12 ? a - 12 : a), t.s.stepHour);
                            }),
                            (t._getMinutes = function (e) {
                                return ve(e.getMinutes(), t.s.stepMinute);
                            }),
                            (t._getSeconds = function (e) {
                                return ve(e.getSeconds(), t.s.stepSecond);
                            }),
                            (t._getFullTime = function (e) {
                                return ve(pe((e.getTime() - new Date(e).setHours(0, 0, 0, 0)) / 1e3), t._timeStep || 1);
                            }),
                            t
                        );
                    }
                    return (
                        n(t, e),
                        (t.prototype.getVal = function () {
                            return this._value;
                        }),
                        (t.prototype.setVal = function (e) {
                            (this._value = e), this.setState({ value: e });
                        }),
                        (t.prototype.position = function () {
                            this._scroller && this._scroller.position();
                        }),
                        (t.prototype.isVisible = function () {
                            return this._scroller && this._scroller.isVisible();
                        }),
                        (t.prototype._valueEquals = function (e, t) {
                            return fs(e, t, this.s);
                        }),
                        (t.prototype._render = function (e, t) {
                            var a = !1,
                                n = this._prevS,
                                s = e.dateFormat,
                                i = e.timeFormat,
                                r = e.mode || this._preset,
                                o = "datetime" === r ? s + e.separator + i : "time" === r ? i : s;
                            (this._value = e.value === ae ? t.value : e.value),
                                (this._minWheelWidth = e.minWheelWidth || ("datetime" === r ? Si[e.baseTheme || e.theme] : ae)),
                                (this._dateWheels = e.dateWheels || ("datetime" === r ? e.dateWheelFormat : s)),
                                (this._dateDisplay = e.dateWheels || e.dateDisplay),
                                (this._timeWheels = e.timeWheels || i),
                                (this._timeDisplay = this._timeWheels),
                                (this._format = o),
                                (this._hasAmPm = /h/.test(this._timeDisplay)),
                                (this._getDatePart = { y: e.getYear, m: e.getMonth, d: e.getDay, h: this._getHours, i: this._getMinutes, s: this._getSeconds, u: Mi, a: Ei, dd: ki, tt: this._getFullTime }),
                                +ms(n.min) != +ms(e.min) && ((a = !0), (this._min = ce(e.min) ? ae : ms(e.min, o, e))),
                                +ms(n.max) != +ms(e.max) && ((a = !0), (this._max = ce(e.max) ? ae : ms(e.max, o, e))),
                                (e.theme !== n.theme || e.mode !== n.mode || e.locale !== n.locale || e.dateWheels !== n.dateWheels || e.timeWheels !== n.timeWheels || a) && (this._wheels = this._getWheels());
                        }),
                        (t.prototype._getWheels = function () {
                            this._wheelOrder = {};
                            var e,
                                t = this.s,
                                a = t.mode || this._preset,
                                n = this._hasAmPm,
                                s = this._dateDisplay.replace(/MMMM/, "XXXX").replace(/MMM/, "ZZZ").replace(/MM/, "mm").replace(/M/, "m").replace(/XXXX/, "MM").replace(/ZZZ/, "M"),
                                i = this._timeDisplay,
                                r = this._wheelOrder,
                                o = [],
                                l = [],
                                c = [],
                                h = 0;
                            if (/date/i.test(a)) {
                                for (var d = 0, u = this._dateWheels.split(/\|/.test(this._dateWheels) ? "|" : ""); d < u.length; d++) {
                                    var m = 0;
                                    if ((g = u[d]).length)
                                        if ((/y/i.test(g) && m++, /m/i.test(g) && m++, /d/i.test(g) && m++, m > 1 && r.dd === ae)) (r.dd = h), h++, l.push(this._getDateWheel(g)), (c = l);
                                        else if (/y/i.test(g) && r.y === ae)
                                            (r.y = h),
                                                h++,
                                                l.push({
                                                    cssClass: "mbsc-datetime-year-wheel",
                                                    getIndex: this._getYearIndex,
                                                    getItem: this._getYearValue,
                                                    max: this._max ? t.getYear(this._max) : ae,
                                                    min: this._min ? t.getYear(this._min) : ae,
                                                    spaceAround: !0,
                                                });
                                        else if (/m/i.test(g) && r.m === ae) {
                                            (r.m = h), (e = []), h++;
                                            for (var _ = 0; _ < 12; _++) {
                                                var p = s
                                                    .replace(/[dy|]/gi, "")
                                                    .replace(/mm/, _e(_ + 1) + (t.monthSuffix || ""))
                                                    .replace(/m/, _ + 1 + (t.monthSuffix || ""));
                                                e.push({ display: /MM/.test(p) ? p.replace(/MM/, t.monthNames[_]) : p.replace(/M/, t.monthNamesShort[_]), value: _ });
                                            }
                                            l.push({ cssClass: "mbsc-datetime-month-wheel", data: e, spaceAround: !0 });
                                        } else if (/d/i.test(g) && r.d === ae) {
                                            (r.d = h), (e = []), h++;
                                            for (_ = 1; _ < 32; _++) e.push({ display: (/dd/i.test(s) ? _e(_) : _) + t.daySuffix, value: _ });
                                            l.push({ cssClass: "mbsc-datetime-day-wheel", data: e, spaceAround: !0 });
                                        }
                                }
                                o.push(l);
                            }
                            if (/time/i.test(a)) {
                                for (var v = 0, f = this._timeWheels.split(/\|/.test(this._timeWheels) ? "|" : ""); v < f.length; v++) {
                                    var g;
                                    m = 0;
                                    if (((g = f[v]).length && (/h/i.test(g) && m++, /m/i.test(g) && m++, /s/i.test(g) && m++, /a/i.test(g) && m++), m > 1 && r.tt === ae)) (r.tt = h), h++, c.push(this._getTimeWheel(g));
                                    else if (/h/i.test(g) && r.h === ae) {
                                        (e = []), (r.h = h), h++;
                                        for (_ = 0; _ < (n ? 12 : 24); _ += t.stepHour) e.push({ display: n && 0 === _ ? 12 : /hh/i.test(i) ? _e(_) : _, value: _ });
                                        c.push({ cssClass: "mbsc-datetime-hour-wheel", data: e, spaceAround: !0 });
                                    } else if (/m/i.test(g) && r.i === ae) {
                                        (e = []), (r.i = h), h++;
                                        for (_ = 0; _ < 60; _ += t.stepMinute) e.push({ display: /mm/i.test(i) ? _e(_) : _, value: _ });
                                        c.push({ cssClass: "mbsc-datetime-minute-wheel", data: e, spaceAround: !0 });
                                    } else if (/s/i.test(g) && r.s === ae) {
                                        (e = []), (r.s = h), h++;
                                        for (_ = 0; _ < 60; _ += t.stepSecond) e.push({ display: /ss/i.test(i) ? _e(_) : _, value: _ });
                                        c.push({ cssClass: "mbsc-datetime-second-wheel", data: e, spaceAround: !0 });
                                    } else
                                        /a/i.test(g) &&
                                            r.a === ae &&
                                            ((r.a = h),
                                            h++,
                                            c.push({
                                                cssClass: "mbsc-dt-whl-a",
                                                data: /A/.test(g)
                                                    ? [
                                                          { display: t.amText.toUpperCase(), value: 0 },
                                                          { display: t.pmText.toUpperCase(), value: 1 },
                                                      ]
                                                    : [
                                                          { display: t.amText, value: 0 },
                                                          { display: t.pmText, value: 1 },
                                                      ],
                                                spaceAround: !0,
                                            }));
                                }
                                c !== l && o.push(c);
                            }
                            return o;
                        }),
                        (t.prototype._getDateWheel = function (e) {
                            var t = /d/i.test(e);
                            return (
                                (this._hasDay = t),
                                (this._dateTemplate = e),
                                {
                                    cssClass: "mbsc-datetime-date-wheel",
                                    getIndex: this._getDateIndex,
                                    getItem: this._getDateItem,
                                    label: "",
                                    max: this._max ? wi(ki(this._max), t) : ae,
                                    min: this._min ? wi(ki(this._min), t) : ae,
                                    spaceAround: !0,
                                }
                            );
                        }),
                        (t.prototype._getTimeWheel = function (e) {
                            var t = this.s,
                                a = [],
                                n = 1;
                            /s/i.test(e) ? (n = t.stepSecond) : /m/i.test(e) ? (n = 60 * t.stepMinute) : /h/i.test(e) && (n = 3600 * t.stepHour), (this._timeStep = n);
                            for (var s = 0; s < 86400; s += n) {
                                var i = new Date(new Date().setHours(0, 0, 0, 0) + 1e3 * s);
                                a.push({ display: ps(e, i, t), value: s });
                            }
                            return { cssClass: "mbsc-dt-whl-time", data: a, label: "", spaceAround: !0 };
                        }),
                        (t.prototype._getArray = function (e, t) {
                            var a = [],
                                n = this._wheelOrder;
                            if (null === e || e === ae) return a;
                            for (var s = 0, i = ["y", "m", "d", "a", "h", "i", "s", "u", "dd", "tt"]; s < i.length; s++) {
                                var r = i[s],
                                    o = this._getDatePart[r](e);
                                n[r] !== ae && (a[n[r]] = o), t && (this._innerValues[r] = o);
                            }
                            return a;
                        }),
                        (t.defaults = s({}, Qn, { dateDisplay: "MMMMDDYYYY", dateWheelFormat: "|DDD MMM D|", stepHour: 1, stepMinute: 1, stepSecond: 1 })),
                        (t._name = "Datetime"),
                        t
                    );
                })(Va)
            )
        ),
        Ii = pa({}),
        Hi = {};
    function Oi(e, t) {
        return Hi[e] || (Hi[e] = { change: new h(), selectedIndex: -1 }), Hi[e].change.subscribe(t);
    }
    function Vi(e, t) {
        var a = Hi[e];
        a && (a.change.unsubscribe(t), a.change.nr || delete Hi[e]);
    }
    function Yi(e, t, a) {
        var n = Hi[e];
        n && (a !== ae && (n.selectedIndex = a), t !== ae && (n.value = t), n.change.next(n.value));
    }
    function Pi(e) {
        return Hi[e] && Hi[e].selectedIndex;
    }
    var Fi,
        Ri,
        Ai = 1,
        zi = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    var t = { color: e.color, disabled: e.disabled, name: this._name, onChange: this._onChange, select: e.select, value: e.value },
                        a = ga("div", { className: this._groupClass, ref: this._setEl }, e.children);
                    return ga(Ii.Provider, { children: a, value: t });
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._id = "mbsc-segmented-group" + Ai++),
                        (t._onChange = function (e, a) {
                            var n = t.s,
                                s = t.value;
                            if ("multiple" === n.select) {
                                if (s !== ae) {
                                    var i = (s = s || []).indexOf(a);
                                    -1 !== i ? s.splice(i, 1) : s.push(a), (t.value = s.slice());
                                }
                            } else t.value = a;
                            n.onChange && n.onChange(e);
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    (t.prototype._setupDrag = function () {
                        var e,
                            t,
                            a,
                            n,
                            s,
                            i,
                            r = this,
                            o = [],
                            l = [];
                        this._unlisten = pn(this._el, {
                            onEnd: function () {
                                a && n !== s && !o[n] && r._el.querySelectorAll(".mbsc-segmented-input")[n].click();
                                (a = !1), r.setState({ dragging: !1 });
                            },
                            onMove: function (s) {
                                if (a) {
                                    for (var c = Math.min(Math.max(s.endX - t, 0), e), h = 0, d = l[0]; c > d && l.length > h + 1; ) h++, (d += l[h]);
                                    (h = r.s.rtl ? l.length - 1 - h : h) === n || o[h] || Yi(i, ae, (n = h));
                                }
                            },
                            onStart: function (c) {
                                var h = Ot(c.domEvent.target, ".mbsc-segmented-item", r._el);
                                if (h) {
                                    var d = h.querySelector(".mbsc-segmented-input");
                                    if (d.classList.contains("mbsc-selected")) {
                                        (o = []),
                                            Yt(r._el.querySelectorAll(".mbsc-segmented-button"), function (e) {
                                                o.push(e.classList.contains("mbsc-disabled"));
                                            }),
                                            (l = []),
                                            Yt(r._el.querySelectorAll(".mbsc-segmented-item"), function (e) {
                                                l.push(e.clientWidth);
                                            });
                                        (e = r._el.clientWidth - 30), (t = It(r._el).left + 15), (i = d.name), (n = Pi(i)), (s = n), l.length && "radio" === d.type && ((a = !0), r.setState({ dragging: !0 }));
                                    }
                                }
                            },
                        });
                    }),
                    (t.prototype._cleanupDrag = function () {
                        this._unlisten && (this._unlisten(), (this._unlisten = null));
                    }),
                    (t.prototype._render = function (e) {
                        (this._name = e.name === ae ? this._id : e.name),
                            (this._groupClass = "mbsc-segmented" + this._theme + this._rtl + (e.color ? " mbsc-segmented-" + e.color : "") + (this.state.dragging ? " mbsc-segmented-dragging" : ""));
                    }),
                    (t.prototype._updated = function () {
                        this.s.drag && "multiple" !== this.s.select ? this._unlisten || this._setupDrag() : this._cleanupDrag();
                    }),
                    (t.prototype._destroy = function () {
                        this._cleanupDrag();
                    }),
                    (t.defaults = { select: "single" }),
                    (t._name = "SegmentedGroup"),
                    t
                );
            })(Va)
        ),
        Wi = 1,
        Ui = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._setBox = function (e) {
                        t._box = e;
                    }),
                    t
                );
            }
            return (
                n(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        this._toggle(e);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e, t) {
                    var a = this;
                    return ga(Ii.Consumer, null, function (n) {
                        return (
                            a._groupOptions(n),
                            ga(
                                "label",
                                { className: a._cssClass },
                                ga("input", {
                                    ref: a._setEl,
                                    checked: a._checked,
                                    className: "mbsc-segmented-input mbsc-reset " + (e.inputClass || "") + a._theme + (a._checked ? " mbsc-selected" : ""),
                                    disabled: a._disabled,
                                    name: a._isMultiple ? e.name : a._name,
                                    onChange: me,
                                    type: a._isMultiple ? "checkbox" : "radio",
                                    value: a._value,
                                }),
                                ga(
                                    "div",
                                    { ref: a._setBox, className: "mbsc-segmented-selectbox" + a._theme + (a._animate ? " mbsc-segmented-selectbox-animate" : "") + (a._checked ? " mbsc-selected" : "") },
                                    ga("div", {
                                        className: "mbsc-segmented-selectbox-inner" + a._theme + (a._index === a._selectedIndex || a._checked ? " mbsc-segmented-selectbox-inner-visible" : "") + (a._checked ? " mbsc-selected" : ""),
                                    })
                                ),
                                ga(
                                    Fn,
                                    {
                                        className: "mbsc-segmented-button" + (a._checked ? " mbsc-selected" : "") + (t.hasFocus ? " mbsc-focus" : ""),
                                        color: a._color,
                                        disabled: a._disabled,
                                        endIcon: e.endIcon,
                                        endIconSrc: e.endIconSrc,
                                        endIconSvg: e.endIconSvg,
                                        icon: e.icon,
                                        iconSrc: e.iconSrc,
                                        iconSvg: e.iconSvg,
                                        ripple: e.ripple,
                                        rtl: e.rtl,
                                        startIcon: e.startIcon,
                                        startIconSrc: e.startIconSrc,
                                        startIconSvg: e.startIconSvg,
                                        tag: "span",
                                        tabIndex: -1,
                                        theme: e.theme,
                                        themeVariant: e.themeVariant,
                                    },
                                    e.children
                                )
                            )
                        );
                    });
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._id = "mbsc-segmented-" + Wi++),
                        (t._onChange = function (e) {
                            var a = t.s,
                                n = e.target.checked;
                            n !== t._checked && (t._change(n), t._onGroupChange && t._onGroupChange(e, t._value), t._toggle(n), a.onChange && a.onChange(e));
                        }),
                        (t._onValueChange = function (e) {
                            var a = t.s,
                                n = t._isMultiple ? e && -1 !== e.indexOf(t._value) : e === t._value;
                            a.checked === ae && n !== t.state.selected ? t.setState({ selected: n }) : t.forceUpdate(), t._change(n);
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    (t.prototype._change = function (e) {}),
                    (t.prototype._toggle = function (e) {
                        this.s.checked === ae && this.setState({ selected: e });
                    }),
                    (t.prototype._groupOptions = function (e) {
                        var t = this,
                            a = e.color,
                            n = e.disabled,
                            s = e.name,
                            i = e.onChange,
                            r = e.select,
                            o = e.value,
                            l = this.s,
                            c = this.state,
                            h = this._checked,
                            d = l.checked !== ae ? he(l.checked) : c.selected === ae ? he(l.defaultChecked) : c.selected;
                        (this._value = l.value === ae ? this._id : l.value),
                            (this._onGroupChange = i),
                            (this._isMultiple = "multiple" === (r || l.select)),
                            (this._name = s === ae ? l.name : s),
                            (this._disabled = n === ae ? (l.disabled === ae ? c.disabled : he(l.disabled)) : he(n)),
                            (this._color = a === ae ? l.color : a),
                            (this._checked = o === ae ? d : this._isMultiple ? o && -1 !== o.indexOf(this._value) : o === this._value),
                            this._name && !this._unsubscribe && (this._unsubscribe = Oi(this._name, this._onValueChange)),
                            this._isMultiple ||
                                h ||
                                !this._checked ||
                                setTimeout(function () {
                                    t._checked && Yi(t._name, t._value, t._index);
                                }),
                            (this._selectedIndex = Pi(this._name)),
                            (this._cssClass =
                                "mbsc-segmented-item " +
                                this._className +
                                this._theme +
                                this._rtl +
                                (this._checked ? " mbsc-segmented-item-checked" : "") +
                                (c.hasFocus ? " mbsc-focus" : "") +
                                (this._index === this._selectedIndex || (this._index === ae && this._checked) || (this._isMultiple && this._checked) ? " mbsc-segmented-item-selected" : ""));
                    }),
                    (t.prototype._mounted = function () {
                        var e = this;
                        yt(this._el, Aa, this._onChange),
                            (this._unlisten = pn(this._el, {
                                onBlur: function () {
                                    e.setState({ hasFocus: !1 });
                                },
                                onFocus: function () {
                                    e.setState({ hasFocus: !0 });
                                },
                            }));
                    }),
                    (t.prototype._updated = function () {
                        if (!this._isMultiple) {
                            var e = Ot(this._el, ".mbsc-segmented"),
                                t = -1,
                                a = -1;
                            if (e) for (var n = e.querySelectorAll('.mbsc-segmented-input[name="' + this._name + '"]'), s = 0; s < n.length; s++) n[s] === this._el && (t = s), n[s].checked && (a = s);
                            this._index !== t &&
                                -1 !== a &&
                                (function (e, t) {
                                    Hi[e] && (Hi[e].selectedIndex = t);
                                })(this._name, a),
                                -1 !== this._selectedIndex && ((this._box.style.transform = "translateX(" + (this.s.rtl ? -1 : 1) * (this._selectedIndex - t) * 100 + "%)"), (this._animate = !0)),
                                -1 !== t && (this._index = t);
                        }
                    }),
                    (t.prototype._destroy = function () {
                        Vi(this._name, this._unsubscribe), xt(this._el, Aa, this._onChange), this._unlisten();
                    }),
                    (t.defaults = { select: "single" }),
                    (t._name = "Segmented"),
                    t
                );
            })(Va)
        ),
        Bi = st,
        ji = +new Date(),
        Ki = {};
    function Ji(e) {
        e._logged ||
            "mbscdemo" === t.apiKey ||
            ((e._logged = !0),
            (Ki.components = Ki.components || []),
            Ki.components.push(e.constructor._name.toLowerCase()),
            clearTimeout(Ri),
            (Ri = setTimeout(function () {
                if (!t.fwv) {
                    var a = void 0;
                    switch (t.fw) {
                        case "angular":
                            var n = nt.querySelector("[ng-version]");
                            a = n ? n.getAttribute("ng-version") : "N/A";
                            break;
                        case "jquery":
                            a = Bi.$.fn && Bi.$.fn.jquery;
                    }
                    t.fwv = a || "N/A";
                }
                (Ki.demo = !!Bi.isMbscDemo),
                    (Ki.fw = t.fw),
                    (Ki.fwv = t.fwv),
                    (Ki.theme = e.s.theme),
                    (Ki.trialCode = t.apiKey),
                    (Ki.v = e._v.version),
                    qi("log", null, Ki, function () {
                        Ki = {};
                    });
            }, 5e3)));
    }
    function Xi(e) {
        if (e && document && !document.getElementById("trial-message")) {
            var t = document.createElement("div");
            t.setAttribute("id", "trial-message"), t.setAttribute("style", "position: absolute;width: 100%; bottom: 0;left: 0; padding: 10px;box-sizing: border-box;"), t.setAttribute("class", "mbsc-font");
            var a = document.createElement("div");
            a.setAttribute("style", "padding: 15px 25px; max-width: 400px; margin: 0 auto 10px auto; border-radius: 16px; line-height: 25px; background: #cacaca59; font-size: 15px; color: #151515;"), (a.innerHTML = e.message + " ");
            var n = document.createElement("a");
            (n.innerHTML = e.button.text),
                n.setAttribute("style", "color: #FF4080;font-weight: 600;"),
                n.setAttribute("href", "https://mobiscroll.com/pricing?ref=trialapp"),
                a.appendChild(n),
                t.appendChild(a),
                document.body.appendChild(t),
                setTimeout(function () {
                    document.body.removeChild(t);
                }, 6e3);
        }
    }
    function qi(e, a, n, s, i, r) {
        var o,
            l = nt.createElement("script"),
            c = "mbsc_jsonp_" + (i || ++ji);
        c = st[c] ? "mbsc_jsonp_" + ++ji : c;
        var h = r || 1;
        function d() {
            st[c] && st[c](), "remote" === e && (h < 4 ? qi(e, a, n, s, i, h + 1) : Fi || ((Fi = !0), Gi()));
        }
        (st[c] = function (e) {
            clearTimeout(o),
                l.parentNode.removeChild(l),
                delete st[c],
                s(
                    e
                        ? JSON.parse(e, function (e, t) {
                              return "string" != typeof t ? t : "function_" === t.substring(0, 9) && a ? a[t.replace("function_", "")] : t.match(es) ? ms(t) : t;
                          })
                        : {}
                );
        }),
            (o = setTimeout(d, 6e3)),
            (l.onerror = d),
            (l.src = t.apiUrl + t.apiKey + "/" + e + "?callback=" + c + "&data=" + encodeURIComponent(JSON.stringify(n))),
            nt.body.appendChild(l);
    }
    function Gi() {
        var e = document.cookie.replace(/(?:(?:^|.*;\s*)ASP.NET_SessionId\s*=\s*([^;]*).*$)|^.*$/, "$1");
        nt.cookie = "mobiscrollClientError=1; expires=" + new Date(new Date().getTime() + 864e5).toUTCString() + "; path=/";
        try {
            st.name = (st.name || "") + ";mobiscrollClientError";
        } catch (e) {}
        qi("error", null, { sessionID: e, trialCode: t.apiKey }, function () {
            nt.cookie = "mobiscrollClientError=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            try {
                st.name = (st.name || "").replace(/;mobiscrollClientError/g, "");
            } catch (e) {}
        });
    }
    m && (nt.cookie.replace(/(?:(?:^|.*;\s*)mobiscrollClientError\s*=\s*([^;]*).*$)|^.*$/, "$1") || /mobiscrollClientError/.test(st.name || "")) && Gi();
    var Zi = {},
        $i = " - ",
        Qi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._iso = {}),
                    (t._remote = 0),
                    (t._onActiveChange = function (e) {
                        (t._active = e.date), t.forceUpdate();
                    }),
                    (t._onResize = function (e) {
                        var a = e.windowWidth;
                        (e.cancel = t.state.width !== a), t.setState({ isLarge: e.isLarge, maxPopupWidth: e.maxPopupWidth, width: a, widthType: a > 600 ? "md" : "sm" });
                    }),
                    (t._onDayHoverIn = function (e) {
                        var a = e.date,
                            n = e.hidden;
                        t.setState({ hoverDate: n ? ae : +a });
                    }),
                    (t._onDayHoverOut = function (e) {
                        var a = e.date;
                        t.state.hoverDate === +a && t.setState({ hoverDate: ae });
                    }),
                    (t._onCellClick = function (e) {
                        (t._lastSelected = new Date(e.date)), (e.active = t._activeSelect), t._hook("onCellClick", e);
                    }),
                    (t._onCalendarChange = function (e) {
                        t._tempValueSet = !1;
                        var a = e.value,
                            n = "range" === t.s.select,
                            s = n && t._newSelection;
                        if (t._hasTime && t._selectedTime && !n)
                            if (t.s.selectMultiple) {
                                var i = a[a.length - 1];
                                i && i.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes());
                            } else a.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes());
                        if (n) {
                            var r = !t._hasTime,
                                o = "cycle" === t._rangeSelectMode && t._renderControls,
                                l = t._activeSelect,
                                c = "start" === t._activeSelect ? "end" : "start",
                                h = t._getDate(t._tempValueRep).filter(function (e) {
                                    return null !== e;
                                }),
                                d = h.map(function (e) {
                                    return +e;
                                }),
                                u = h.map(function (e) {
                                    return +is(e);
                                }),
                                m = a.filter(function (e) {
                                    return u.indexOf(+e) < 0;
                                })[0];
                            if (m) {
                                switch ((t._hasTime && t._selectedTime && m.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()), d.length)) {
                                    case 0:
                                        (t._tempValueRep = {}), (t._tempValueRep[l] = +m);
                                        break;
                                    case 1:
                                        if (o) {
                                            t._tempValueRep[l] = +m;
                                            break;
                                        }
                                        d[0] > +m || "start" === t._activeSelect ? (t._hasTime ? (t._tempValueRep[l] = +m) : ((t._tempValueRep = { start: +m }), (r = !1))) : (t._tempValueRep.end = +m);
                                        break;
                                    case 2:
                                        if (o) {
                                            t._tempValueRep[l] = +m;
                                            break;
                                        }
                                        d[0] > +m || "start" === t._activeSelect
                                            ? t._hasTime
                                                ? (t._tempValueRep[l] = +m)
                                                : ((t._tempValueRep = { start: +m }), "end" === t._activeSelect && (r = !1))
                                            : "end" === t._activeSelect && (t._tempValueRep.end = +m);
                                }
                                o && t._tempValueRep.start && t._tempValueRep.end && t._tempValueRep.start > t._tempValueRep.end && ((t._tempValueRep = { start: +m }), (t._activeSelect = "end"));
                            } else {
                                var _ = void 0;
                                (_ = 1 === d.length ? new Date(d[0]) : t._lastSelected),
                                    t._hasTime && t._selectedTime
                                        ? _.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds())
                                        : "end" === t._activeSelect && _.setHours(23, 59, 59, 999),
                                    o || t._hasTime ? (t._tempValueRep[l] = +_) : "start" === t._activeSelect ? (t._tempValueRep = { start: +_ }) : (t._tempValueRep.end = +_);
                            }
                            if (t._tempValueRep.start && t._tempValueRep.end) {
                                var p = t.s,
                                    v = p.minRange && !t._hasTime ? 24 * (p.minRange - 1) * 60 * 60 * 1e3 - 1 : p.minRange || 0,
                                    f = t._tempValueRep.end - t._tempValueRep.start;
                                if (
                                    (f < v && (!t._hasTime || "start" === l) && (t._tempValueRep.end = ae),
                                    f > (p.maxRange && !t._hasTime ? 24 * p.maxRange * 60 * 60 * 1e3 - 1 : p.maxRange || 1 / 0) && (!t._hasTime || "start" === l) && (t._tempValueRep.end = ae),
                                    t._tempValueRep.end && "start" === l && !p.inRangeInvalid && p.invalid !== ae)
                                ) {
                                    var g = ws(p.invalid, new Date(t._tempValueRep.start), p);
                                    null !== g && +g < t._tempValueRep.end && (t._tempValueRep.end = ae);
                                }
                            }
                            r && (t._newSelection || !t._renderControls || (t._newSelection === ae && "inline" === t.s.display)) && ((t._activeSelect = c), (t._newSelection = !1));
                        } else if (((t._tempValueRep = { date: {} }), t.s.selectMultiple))
                            for (var b = 0, y = a; b < y.length; b++) {
                                var x = y[b];
                                t._tempValueRep.date[+x] = x;
                            }
                        else {
                            if (t._hasTime) {
                                var D = t._selectedTime || new Date();
                                a.setHours(D.getHours(), D.getMinutes(), D.getSeconds(), D.getMilliseconds());
                            }
                            t._tempValueRep.date[+a] = a;
                        }
                        t._setOrUpdate(), !t._live || (t.s.selectMultiple && !n) || t._hasTime || (n && (!t._tempValueRep.start || !t._tempValueRep.end || s)) || t.close();
                    }),
                    (t._onDatetimeChange = function (e) {
                        t._tempValueSet = !1;
                        var a = "range" === t.s.select,
                            n = t._hasTime ? e.value : is(e.value),
                            s = +n;
                        if (a)
                            if ("start" === t._activeSelect) {
                                if (
                                    (t._hasTime && t._selectedTime && n.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()),
                                    (t._tempValueRep.start = s),
                                    t._tempValueRep.end)
                                ) {
                                    var i = t.s,
                                        r = i.minRange && !t._hasTime ? 24 * (i.minRange - 1) * 60 * 60 * 1e3 - 1 : i.minRange || 0;
                                    t._tempValueRep.end - t._tempValueRep.start < r && (t._tempValueRep.end = ae);
                                }
                            } else
                                t._hasTime
                                    ? t._selectedTime && n.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds())
                                    : t._tempValueRep.start === +is(n) && n.setHours(23, 59, 59, 999),
                                    (t._tempValueRep.end = +n);
                        else {
                            if (t._hasTime && t._hasDate && t.s.controls.indexOf("datetime") < 0) {
                                var o = t._selectedTime || new Date();
                                n.setHours(o.getHours(), o.getMinutes(), o.getSeconds(), o.getMilliseconds());
                            } else t._selectedTime = new Date(n);
                            (t._tempValueRep = { date: {} }), (t._tempValueRep.date[+n] = n);
                        }
                        t._setOrUpdate();
                    }),
                    (t._onTimePartChange = function (e) {
                        t._tempValueSet = !1;
                        var a = "range" === t.s.select,
                            n = e.value;
                        if (((t._selectedTime = n), a)) {
                            var s = t._getDate(t._tempValueRep),
                                i = "start" === t._activeSelect ? 0 : 1;
                            if (s[i])
                                (r = new Date(s[i])).setHours(n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()), (s[i] = r), "start" === t._activeSelect && +r >= +s[1] && (s.length = 1), (t._tempValueRep = t._parse(s));
                            else t._selectedTime.setHours(n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds());
                        } else if (!t.s.selectMultiple) {
                            var r;
                            (r = t._getDate(t._tempValueRep))
                                ? (r.setHours(n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()), (t._tempValueRep = { date: {} }), (t._tempValueRep.date[+r] = r))
                                : t._selectedTime.setHours(n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds());
                        }
                        t._setOrUpdate();
                    }),
                    (t._changeActiveTab = function (e) {
                        t.setState({ activeTab: e.target.value });
                    }),
                    (t._changeActiveSelect = function (e) {
                        t.setActiveDate(e.target.value);
                    }),
                    (t._onInputClickRange = function (e) {
                        t._activateBasedOnInput(e.target), t._onInputClick(e);
                    }),
                    (t._onInputKeyRange = function (e) {
                        t._activateBasedOnInput(e.target), t._onInputKey(e);
                    }),
                    (t._onInputFocusRange = function (e) {
                        t._activateBasedOnInput(e.target), t._onInputFocus(e);
                    }),
                    (t._onInputChangeRange = function (e) {
                        var a = t._startInput,
                            n = t._endInput,
                            s = (a ? a.value : "") + (n && n.value ? $i + n.value : "");
                        t._onInputChange(e, s);
                    }),
                    (t._clearEnd = function () {
                        (t._tempValueRep.end = ae), t._setOrUpdate();
                    }),
                    (t._clearStart = function () {
                        (t._tempValueRep = {}), (t._newSelection = !0), t._setOrUpdate();
                    }),
                    (t._activateBasedOnInput = function (e) {
                        var a = e === t._startInput || t._renderControls ? "start" : "end";
                        t._activeSelect = a;
                    }),
                    (t._proxy = function (e) {
                        t._hook(e.type, e);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.setActiveDate = function (e) {
                    var t = "start" === e ? "end" : "start";
                    (this._activeSelect = e),
                        (this._tempValueRep.start && this._tempValueRep.end) || (!this._tempValueRep[e] && this._tempValueRep[t]) ? (this._newSelection = !1) : this._tempValueRep[e] && !this._tempValueRep[t] && (this._newSelection = !0),
                        (this._active = this._tempValueRep[e]),
                        this.forceUpdate();
                }),
                (t.prototype.getTempVal = function () {
                    return e.prototype.getTempVal.call(this);
                }),
                (t.prototype.setTempVal = function (t) {
                    e.prototype.setTempVal.call(this, t);
                }),
                (t.prototype.navigate = function (e) {
                    (this._active = +ms(e)), this.forceUpdate();
                }),
                (t.prototype._shouldValidate = function (e, t) {
                    return e.controls !== t.controls || e.dateFormat !== t.dateFormat || e.timeFormat !== t.timeFormat || e.locale !== t.locale || e.min !== t.min || e.max !== t.max || this._shouldParse;
                }),
                (t.prototype._valueEquals = function (e, t) {
                    var a = (oe(e) && 0 === e.length) || e === ae || null === e,
                        n = (oe(t) && 0 === t.length) || t === ae || null === t;
                    return (a && a === n) || fs(e, t, this.s);
                }),
                (t.prototype._init = function () {
                    this.props.modules &&
                        this.props.modules.forEach(function (e) {
                            Zi[e._name] = e;
                        });
                }),
                (t.prototype._render = function (t, a) {
                    var n = this,
                        r = this._prevS;
                    t.buttons, t.children, t.className;
                    var o = t.controls;
                    t.cssClass, t.element, t.onDestroy, t.onInit, t.onTempChange, t.responsive;
                    var l = t.selectMultiple,
                        c = t.tabs,
                        h = i(t, ["buttons", "children", "className", "controls", "cssClass", "element", "onDestroy", "onInit", "onTempChange", "responsive", "selectMultiple", "tabs"]);
                    this._rangeSelectMode = "inline" === t.display ? "cycle" : t.rangeSelectMode;
                    var d = a.widthType || "sm",
                        u = o.indexOf("calendar") >= 0,
                        m = "range" === t.select,
                        _ = "wizard" === this._rangeSelectMode;
                    if (((this._renderTabs = o.length > 1 && ("auto" === c ? "sm" === d : c)), t.select !== r.select && this._tempValueRep))
                        if (m && this._tempValueRep.date) {
                            var p = Object.keys(this._tempValueRep.date)
                                    .map(function (e) {
                                        return +e;
                                    })
                                    .sort(),
                                v = p[0],
                                f = p[1];
                            (this._tempValueRep.start = v),
                                (this._tempValueRep.end = f),
                                (this._tempValueRep.date = ae),
                                (this._tempValueText = this._format(this._tempValueRep)),
                                setTimeout(function () {
                                    n.set();
                                });
                        } else if (!m && (this._tempValueRep.start || this._tempValueRep.end)) {
                            this._tempValueRep.date || (this._tempValueRep.date = {});
                            var g = this._tempValueRep.start || this._tempValueRep.end;
                            this._tempValueRep.date[g] = new Date(g);
                            var b = this._tempValueRep.end || this._tempValueRep.start;
                            b !== g && t.selectMultiple && (this._tempValueRep.date[b] = new Date(b)),
                                (this._tempValueRep.start = ae),
                                (this._tempValueRep.end = ae),
                                (this._tempValueText = this._format(this._tempValueRep)),
                                setTimeout(function () {
                                    n.set();
                                });
                        }
                    t.min !== r.min && (this._min = ce(t.min) ? ae : ms(t.min, t.dateFormat, t)), t.max !== r.max && (this._max = ce(t.max) ? ae : ms(t.max, t.dateFormat, t));
                    var y = JSON.stringify(o) !== JSON.stringify(r.controls);
                    if (y || t.dateFormat !== r.dateFormat || t.timeFormat !== r.timeFormat) {
                        y && (this._controls = []), this._valueFormat === ae && (this._valueFormat = ""), (this._controlsClass = "");
                        var x = { c: "datepicker", controls: o, dateFormat: t.dateFormat, dateText: t.dateText, separator: t.separator, timeFormat: t.timeFormat, timeText: t.timeText, v: Ma };
                        this._remote++,
                            Ji(this),
                            qi(
                                "remote",
                                this,
                                x,
                                function (e) {
                                    if ((n._remote--, !n._remote)) {
                                        for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                                        for (var a = 0, s = n._controls; a < s.length; a++) {
                                            var i = s[a];
                                            (i.Component = Zi["calendar" === i.name ? "Calendar" : "Datetime"]), (n._controlsClass += " mbsc-datepicker-control-" + i.name);
                                        }
                                        Xi(e.notification), (n._shouldParse = !0), n.forceUpdate();
                                    }
                                },
                                "comp_" + this._uid
                            );
                    }
                    var D = this._valueFormat;
                    if (
                        ((this._renderControls = m && (t.showRangeLabels !== ae ? t.showRangeLabels : "cycle" === this._rangeSelectMode)),
                        (this._nullSupport = "inline" !== t.display || "date" !== t.select || !0 === t.selectMultiple),
                        (this._activeTab = a.activeTab || t.controls[0]),
                        t.rangeSelectMode !== r.rangeSelectMode && (this._buttons = ae),
                        e.prototype._render.call(this, t, a),
                        (t.headerText === r.headerText && t.selectCounter === r.selectCounter && t.selectMultiple === r.selectMultiple) || this._setHeader(),
                        (this._showInput = t.showInput !== ae ? t.showInput : this._showInput && (!m || (!t.startInput && !t.endInput))),
                        (this._shouldInitInputs = this._shouldInitInputs || t.select !== r.select || t.startInput !== r.startInput || t.endInput !== r.endInput),
                        (this._shouldInitInput = this._shouldInitInput || this._shouldInitInputs),
                        o !== r.controls || t.dateWheels !== r.dateWheels || t.timeWheels !== r.timeWheels || t.dateFormat !== r.dateFormat || t.timeFormat !== r.timeFormat || this._shouldParse)
                    ) {
                        var T = t.dateWheels || t.dateFormat,
                            C = t.timeWheels || t.timeFormat,
                            S = (this._iso = {});
                        this._hasDate && (/y/i.test(T) && (S.y = 1), /M/.test(T) && ((S.y = 1), (S.m = 1)), /d/i.test(T) && ((S.y = 1), (S.m = 1), (S.d = 1))),
                            this._hasTime && (/h/i.test(C) && (S.h = 1), /m/.test(C) && (S.i = 1), /s/i.test(C) && (S.s = 1));
                    }
                    this._shouldParse = !1;
                    var w = Object.keys(this._tempValueRep.date || {});
                    if (m) {
                        if ((this._activeSelect === ae && (this._activeSelect = "start"), _ && t.buttons === ae && "inline" !== t.display && ("anchored" !== t.display || this._touchUi))) {
                            var k =
                                "start" === this._activeSelect
                                    ? {
                                          disabled: !this._tempValueRep.start,
                                          handler: function () {
                                              n.setActiveDate("end");
                                          },
                                          text: t.setText + " " + t.rangeStartLabel,
                                      }
                                    : { handler: "set", text: t.setText + " " + t.rangeEndLabel };
                            this._buttons = Kn(this, [k, "cancel"]);
                        }
                        var M = this._selectionNotReady();
                        if (this._buttons)
                            (k = this._buttons.find(function (e) {
                                return "set" === e.name;
                            })) && (k.disabled = M);
                    } else {
                        if (((this._activeSelect = ae), this._buttons))
                            (k = this._buttons.find(function (e) {
                                return "set" === e.name;
                            })) && (k.disabled = !1);
                    }
                    this._needsWidth = ("anchored" === t.display || "center" === t.display || ("inline" !== t.display && a.isLarge) || (o.length > 1 && !c)) && t.width === ae;
                    var E = t.max !== ae ? ms(t.max, D, t) : ae,
                        N = t.min !== ae ? ms(t.min, D, t) : ae;
                    if (((this._maxLimited = E), (this._minLimited = N), "end" === this._activeSelect && this._tempValueRep.start)) {
                        if (!t.inRangeInvalid && t.invalid !== ae) {
                            var L = new Date(this._tempValueRep.start),
                                I = ws(t.invalid, L, t);
                            null !== I && (this._maxLimited = new Date(+I - 1));
                        }
                        (!u || this._hasTime || _) && (!this._minLimited || ms(this._minLimited, D, t) < new Date(this._tempValueRep.start)) && (this._minLimited = new Date(this._tempValueRep.start));
                    }
                    if (((this._minTimeLimited = this._minLimited), m && "end" === this._activeSelect && this._tempValueRep.start)) {
                        if (t.minRange) {
                            var H = this._tempValueRep.start + (this._hasTime ? t.minRange : 24 * t.minRange * 60 * 60 * 1e3 - 1);
                            (!this._minLimited || +ms(this._minLimited, D, t) < H) && ((this._minLimited = new Date(H)), (this._minTimeLimited = this._minLimited));
                        }
                        if ((this._minTimeLimited === ae && this._tempValueRep.start && this._tempValueRep.end && (this._minTimeLimited = new Date(+this._tempValueRep.start)), t.maxRange !== ae)) {
                            var O = this._tempValueRep.start + (this._hasTime ? t.maxRange : 24 * t.maxRange * 60 * 60 * 1e3 - 1);
                            (!this._maxLimited || +ms(this._maxLimited, D, t) > O) && (this._maxLimited = new Date(O));
                        }
                    }
                    for (var V = 0, Y = this._controls; V < Y.length; V++) {
                        var P = Y[V],
                            F = s({}, h, { display: "inline", max: this._maxLimited, min: this._minLimited });
                        if ("calendar" === P.name) {
                            (F.min = this._minLimited ? is(this._minLimited) : ae), (F.max = this._maxLimited ? is(this._maxLimited) : ae), (F.selectRange = m), (F.width = this._needsWidth ? 296 * zs(t.pages, a.maxPopupWidth) : ae);
                            var R = "auto" === t.pages ? 3 : t.pages || 1;
                            if (((this._maxWidth = t.maxWidth || (R > 2 ? 296 * R : ae)), m)) {
                                var A = this._getDate(this._tempValueRep),
                                    z = A.filter(function (e) {
                                        return null !== e;
                                    })
                                        .map(function (e) {
                                            return +is(e);
                                        })
                                        .filter(function (e, t, a) {
                                            return a.indexOf(e) === t;
                                        })
                                        .map(function (e) {
                                            return new Date(e);
                                        });
                                (F.value = z),
                                    t.rangeHighlight &&
                                        ((F.rangeStart = A[0] && +is(A[0])),
                                        (F.rangeEnd = A[1] && +is(A[1])),
                                        (F.onDayHoverIn = this._onDayHoverIn),
                                        (F.onDayHoverOut = this._onDayHoverOut),
                                        "end" === this._activeSelect && A[0] && (F.hoverEnd = a.hoverDate),
                                        "start" === this._activeSelect && A[1] && this._renderControls && (F.hoverStart = a.hoverDate));
                            } else (F.selectMultiple = l), (F.value = this._getDate(this._tempValueRep));
                            for (var W = oe(F.value) ? F.value : [F.value], U = F.min ? +F.min : -1 / 0, B = F.max ? +F.max : 1 / 0, j = void 0, K = 0, J = W; K < J.length; K++) {
                                var X = J[K];
                                !j && X >= U && X <= B && (j = +X);
                            }
                            (j === this._selectedDate && this._active !== ae) || ((this._selectedDate = j), (this._active = re(j ? +is(new Date(j)) : this._active || +is(new Date()), U, B))),
                                (F.active = this._active),
                                (F.onActiveChange = this._onActiveChange),
                                (F.onChange = this._onCalendarChange),
                                (F.onCellClick = this._onCellClick),
                                (F.onCellHoverIn = this._proxy),
                                (F.onCellHoverOut = this._proxy),
                                (F.onLabelClick = this._proxy),
                                (F.onPageChange = this._proxy),
                                (F.onPageLoaded = this._proxy),
                                (F.onPageLoading = this._proxy);
                        } else if (((F.displayStyle = ("bottom" !== t.display && "top" !== t.display) || (!u && !this._renderTabs) ? t.display : "center"), (F.mode = P.name), "time" === P.name && this._hasDate)) {
                            if (((F.onChange = this._onTimePartChange), m)) {
                                var q = this._tempValueRep[this._activeSelect],
                                    G = void 0;
                                this._selectedTime &&
                                    (!this._minTimeLimited || this._selectedTime > this._minTimeLimited
                                        ? (G = this._selectedTime)
                                        : (G = new Date(this._minTimeLimited)).setHours(this._selectedTime.getHours(), this._selectedTime.getMinutes(), this._selectedTime.getSeconds(), this._selectedTime.getMilliseconds())),
                                    (this._selectedTime = q ? new Date(q) : G || new Date()),
                                    (F.value = this._selectedTime);
                            } else if (!t.selectMultiple) {
                                var Z = (this._tempValueRep.date && this._tempValueRep.date[w[0]]) || this._selectedTime || null;
                                F.value = Z;
                            }
                            (F.min = this._minTimeLimited), (F.max = this._maxLimited);
                        } else if (((F.onChange = this._onDatetimeChange), m)) {
                            var $ = this._tempValueRep[this._activeSelect];
                            F.value = $ ? new Date($) : null;
                        } else {
                            var Q = this._tempValueRep.date && this._tempValueRep.date[w[0]],
                                ee = Q;
                            Q && (this._hasTime || (ee = is(Q))), (F.value = ee || null);
                        }
                        P.options = F;
                    }
                }),
                (t.prototype._updated = function () {
                    var t = this,
                        a = this.s;
                    this._shouldInitInputs &&
                        (this._clearInputHandlers(this._startInput, this._startInputReadOnly),
                        this._clearInputHandlers(this._endInput, this._endInputReadOnly),
                        clearTimeout(this._startEndTimeout),
                        (this._startEndTimeout = setTimeout(function () {
                            if ("range" === a.select) {
                                var e = a.startInput;
                                e && t._setupInput("start", e);
                                var n = a.endInput;
                                n && t._setupInput("end", n), !a.element || (t._startInput !== a.element && t._endInput !== a.element) || ((t._shouldInitInput = !1), clearTimeout(t._inputTimeout));
                            }
                        })),
                        (this._shouldInitInputs = !1));
                    var n = this._valueTextChange;
                    e.prototype._updated.call(this),
                        "range" === a.select &&
                            (this._startInput && n && ((this._startInput.value = this._getValueText("start")), (this._preventChange = !0), Vt(this._startInput, Ra)),
                            this._endInput && n && ((this._endInput.value = this._getValueText("end")), (this._preventChange = !0), Vt(this._endInput, Ra)));
                }),
                (t.prototype._onEnterKey = function (t) {
                    this._selectionNotReady() || e.prototype._onEnterKey.call(this, t);
                }),
                (t.prototype._setupInput = function (e, t) {
                    var a = this,
                        n = function (t) {
                            a._win || (a._win = wt(t)),
                                (t.value = a._getValueText(e)),
                                Vt(t, Ra),
                                a._setupInputHandlers(t),
                                "start" === e ? ((a._startInput = t), (a._startInputReadOnly = t.readOnly)) : ((a._endInput = t), (a._endInputReadOnly = t.readOnly)),
                                (a.s.showOnClick || a.s.showOnFocus) && (t.readOnly = !0);
                        };
                    if (t)
                        if (t.getInputElement) t.getInputElement().then(n);
                        else if (t._el) n(t._el);
                        else if (1 === t.nodeType) n(t);
                        else if (le(t)) {
                            var s = nt.querySelector(t);
                            s && n(s);
                        }
                }),
                (t.prototype._destroy = function () {
                    this._clearInputHandlers(this._startInput, this._startInputReadOnly), this._clearInputHandlers(this._endInput, this._endInputReadOnly);
                }),
                (t.prototype._setupInputHandlers = function (e) {
                    this.s.showOnClick && (yt(e, Aa, this._onInputClickRange), yt(e, Ja, this._onInputMouseDown), yt(e, Ka, this._onInputKeyRange)),
                        this.s.showOnFocus && (yt(e, Ua, this._onInputFocusRange), yt(wt(e), Ua, this._onWinFocus)),
                        yt(e, Ra, this._onInputChangeRange);
                }),
                (t.prototype._clearInputHandlers = function (e, t) {
                    e &&
                        ((e.readOnly = t),
                        xt(e, Aa, this._onInputClickRange),
                        xt(e, Ja, this._onInputMouseDown),
                        xt(e, Ka, this._onInputKeyRange),
                        xt(e, Ua, this._onInputFocusRange),
                        xt(e, Ra, this._onInputChangeRange),
                        xt(wt(e), Ua, this._onWinFocus));
                }),
                (t.prototype._setHeader = function () {
                    var t = this.s;
                    if (t.selectCounter && t.selectMultiple) {
                        var a = Object.keys((this._tempValueRep && this._tempValueRep.date) || {}).length;
                        this._headerText = ((a > 1 && t.selectedPluralText) || t.selectedText).replace(/{count}/, "" + a);
                    } else e.prototype._setHeader.call(this);
                }),
                (t.prototype._validate = function () {
                    if (!(this._max <= this._min)) {
                        var e = this.s,
                            t = this._min ? +this._min : -1 / 0,
                            a = this._max ? +this._max : 1 / 0;
                        if ("date" === e.select) {
                            var n = this._tempValueRep.date;
                            if (!e.selectMultiple)
                                for (var s = 0, i = Object.keys(n); s < i.length; s++) {
                                    var r = i[s],
                                        o = n[r],
                                        l = hi(o, e, t, a);
                                    +l != +o && (delete n[r], (n[+is(l)] = l));
                                }
                        } else {
                            var c = this._getDate(this._tempValueRep),
                                h = c[0],
                                d = c[1];
                            h && (h = hi(h, e, t, a)), d && (d = hi(d, e, t, a)), h && d && h > d && ("end" === this._activeSelect ? (h = d) : (d = h)), h && (this._tempValueRep.start = +h), d && (this._tempValueRep.end = +d);
                        }
                    }
                }),
                (t.prototype._copy = function (e) {
                    return s({}, e);
                }),
                (t.prototype._format = function (e) {
                    var t = this.s,
                        a = [];
                    if (!t) return "";
                    if ("date" === t.select) {
                        var n = e.date;
                        for (var s in n) n[s] !== ae && null !== n[s] && a.push(ps(this._valueFormat, n[s], t));
                        return t.selectMultiple ? a.join(", ") : a[0];
                    }
                    return (
                        e.start && a.push(ps(this._valueFormat, new Date(e.start), t)),
                        e.end && (a.length || a.push(""), a.push(ps(this._valueFormat, new Date(e.end), t))),
                        (this._tempStartText = a[0] || ""),
                        (this._tempEndText = a[1] || ""),
                        a.join($i)
                    );
                }),
                (t.prototype._parse = function (e) {
                    var t = this.s,
                        a = {},
                        n = "range" === t.select,
                        s = t.selectMultiple,
                        i = [];
                    if (ce(e)) {
                        var r = t.defaultSelection;
                        e = s || n ? r : null === r || (this._live && "inline" !== t.display) ? null : r || new Date();
                    }
                    if ((le(e) && (n || s) ? (i = e.split(n ? $i : ",")) : oe(e) ? (i = e) : e && !oe(e) && (i = [e]), n)) {
                        var o = i[0],
                            l = i[1],
                            c = ms(o, this._valueFormat, t, this._iso),
                            h = ms(l, this._valueFormat, t, this._iso);
                        (a.start = c ? +c : ae), (a.end = h ? +h : ae);
                    } else {
                        a.date = {};
                        for (var d = 0, u = i; d < u.length; d++) {
                            var m = u[d];
                            if (null !== m && "" !== m) {
                                var _ = ms(m, this._valueFormat, t, this._iso),
                                    p = +is(_);
                                (a.date[p] = _), this._selectedTime === ae && (this._selectedTime = new Date(_));
                            }
                        }
                    }
                    return a;
                }),
                (t.prototype._getDate = function (e) {
                    var t = this.s;
                    if ("range" === t.select) {
                        var a = e.start ? new Date(e.start) : null,
                            n = e.end ? new Date(e.end) : null;
                        return a || n ? [a, n] : [];
                    }
                    if (t.selectMultiple) {
                        var s = [],
                            i = e.date;
                        if (i)
                            for (var r = 0, o = Object.keys(i); r < o.length; r++) {
                                var l = o[r];
                                s.push(new Date(+l));
                            }
                        return s;
                    }
                    var c = Object.keys(e.date || {});
                    return c.length ? new Date(e.date[c[0]]) : null;
                }),
                (t.prototype._get = function (e) {
                    var t = this.s,
                        a = this._valueFormat,
                        n = this._iso,
                        s = this._getDate(e);
                    return oe(s)
                        ? s.map(function (e) {
                              return e ? _s(e, t, a, n) : null;
                          })
                        : null === s
                        ? null
                        : _s(s, t, a, n);
                }),
                (t.prototype._onClosed = function () {
                    this._active = this._activeSelect = ae;
                }),
                (t.prototype._onOpen = function () {
                    this._newSelection = !0;
                }),
                (t.prototype._getValueText = function (e) {
                    return this._valueText.split($i)["start" === e ? 0 : 1] || "";
                }),
                (t.prototype._selectionNotReady = function () {
                    var e = this.s.controls.indexOf("calendar") >= 0,
                        t = !1;
                    if ("range" === this.s.select) {
                        var a = (this._get(this._tempValueRep || {}) || []).filter(function (e) {
                            return e;
                        });
                        (t = !a.length) || (t = e || this._renderControls ? a.length < 2 : !this._tempValueRep[this._activeSelect]);
                    }
                    return t;
                }),
                (t.defaults = s({}, Qn, pi.defaults, {
                    controls: ["calendar"],
                    dateText: "Date",
                    inRangeInvalid: !1,
                    rangeEndHelp: "Please select",
                    rangeEndLabel: "End",
                    rangeHighlight: !0,
                    rangeSelectMode: "cycle",
                    rangeStartHelp: "Please select",
                    rangeStartLabel: "Start",
                    select: "date",
                    selectedText: "{count} selected",
                    showOnClick: !0,
                    timeText: "Time",
                })),
                (t._name = "Datepicker"),
                t
            );
        })(pi);
    (Zi.Datetime = Li), (Zi.Calendar = vi);
    var er = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    var t = this,
                        a = this._renderTabs,
                        n = this._controls,
                        i = ga(
                            "div",
                            { className: "mbsc-datepicker mbsc-datepicker-" + e.display + this._theme + ("inline" === e.display ? " " + this._className : "") + this._controlsClass },
                            this._headerText && "inline" === e.display && ga("div", { className: "mbsc-picker-header" + this._theme + this._hb }, this._headerText),
                            a &&
                                ga(
                                    zi,
                                    { rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: this._activeTab, onChange: this._changeActiveTab },
                                    n.map(function (t, a) {
                                        return ga(Ui, { key: a, rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: t.name }, t.title);
                                    })
                                ),
                            this._renderControls &&
                                ga(
                                    "div",
                                    { className: "mbsc-range-control-wrapper" + this._theme },
                                    ga(
                                        zi,
                                        { theme: e.theme, themeVariant: e.themeVariant, rtl: e.rtl, value: this._activeSelect, onChange: this._changeActiveSelect },
                                        ga(
                                            Ui,
                                            { rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: "start", className: "mbsc-range-start" + (this._tempStartText ? " mbsc-range-value-nonempty" : "") },
                                            ga("div", { className: "mbsc-range-control-label" + this._theme + this._rtl + ("start" === this._activeSelect ? " active" : "") }, e.rangeStartLabel),
                                            ga(
                                                "div",
                                                { className: "mbsc-range-control-value" + this._theme + this._rtl + ("start" === this._activeSelect ? " active" : "") + (this._tempStartText ? "" : " mbsc-range-control-text-empty") },
                                                this._tempStartText || e.rangeStartHelp
                                            ),
                                            ga(Ya, {
                                                className: "mbsc-range-label-clear" + this._rtl + ("start" === this._activeSelect ? " active" : "") + (this._tempStartText ? "" : " mbsc-range-value-empty"),
                                                onClick: this._clearStart,
                                                svg: e.clearIcon,
                                                theme: e.theme,
                                            })
                                        ),
                                        ga(
                                            Ui,
                                            { rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: "end", className: "mbsc-range-end" + (this._tempEndText ? " mbsc-range-value-nonempty" : "") },
                                            ga("div", { className: "mbsc-range-control-label" + this._theme + this._rtl + ("end" === this._activeSelect ? " active" : "") }, e.rangeEndLabel),
                                            ga(
                                                "div",
                                                { className: "mbsc-range-control-value" + this._theme + this._rtl + ("end" === this._activeSelect ? " active" : "") + (this._tempEndText ? "" : " mbsc-range-control-text-empty") },
                                                this._tempEndText || e.rangeEndHelp
                                            ),
                                            ga(Ya, {
                                                className: "mbsc-range-label-clear" + this._rtl + ("end" === this._activeSelect ? " active" : "") + (this._tempEndText ? "" : " mbsc-range-value-empty"),
                                                onClick: this._clearEnd,
                                                svg: e.clearIcon,
                                                theme: e.theme,
                                            })
                                        )
                                    )
                                ),
                            ga(
                                "div",
                                { className: "mbsc-datepicker-tab-wrapper" + this._theme, ref: this._setWrapper },
                                n.map(function (e, i) {
                                    return ga(
                                        "div",
                                        {
                                            key: i,
                                            className:
                                                "mbsc-datepicker-tab mbsc-datepicker-tab-" +
                                                e.name +
                                                t._theme +
                                                ((a && e.name === t._activeTab) || !a ? " mbsc-datepicker-tab-active" : "") +
                                                (a && "time" === e.name ? " mbsc-datepicker-time-modal" : "") +
                                                (a || 1 === n.length ? " mbsc-datepicker-tab-expand" : ""),
                                        },
                                        ga(e.Component, s({}, e.options))
                                    );
                                })
                            )
                        );
                    return qn(this, e, i);
                }),
                t
            );
        })(Qi),
        tr = {
            before: function (e, t) {
                (t.defaultValue = e.value), (t.element = e);
            },
        };
    function ar(e, t) {
        return function (a, n) {
            var s = {};
            if (le(a)) {
                var i,
                    r = nt.querySelectorAll(a);
                return (
                    Yt(r, function (a) {
                        var r = Ta(e, a, n, t);
                        (s[a.id] = r), i || (i = r);
                    }),
                    1 === r.length ? i : s
                );
            }
            return Ta(e, a, n, t);
        };
    }
    m &&
        (nt.addEventListener("DOMContentLoaded", function () {
            Sa(nt);
        }),
        nt.addEventListener("mbsc-enhance", function (e) {
            Sa(e.target);
        }));
    var nr = 0;
    function sr(e, t, a) {
        "jsonp" === a
            ? (function (e, t) {
                  if (st) {
                      var a = nt.createElement("script"),
                          n = "mbscjsonp" + ++nr;
                      (st[n] = function (e) {
                          a.parentNode.removeChild(a), delete st[n], e && t(e);
                      }),
                          (a.src = e + (e.indexOf("?") >= 0 ? "&" : "?") + "callback=" + n),
                          nt.body.appendChild(a);
                  }
              })(e, t)
            : (function (e, t) {
                  var a = new XMLHttpRequest();
                  a.open("GET", e, !0),
                      (a.onload = function () {
                          a.status >= 200 && a.status < 400 && t(JSON.parse(a.response));
                      }),
                      (a.onerror = function () {}),
                      a.send();
              })(e, t);
    }
    var ir = { getJson: sr };
    x.http = ir;
    var rr = ar(er, tr),
        or = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._setScroller = function (e) {
                        t._scroller = e;
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    var t = e.cssClass;
                    e.responsive, e.selectMultiple;
                    var a = i(e, ["cssClass", "responsive", "selectMultiple"]);
                    return ga(
                        Ci,
                        s({}, a, {
                            className: (t || "") + " mbsc-select-scroller mbsc-select-scroller-" + e.display,
                            dropdown: !0,
                            formatValue: this._format,
                            parseValue: this._parse,
                            getValue: this._get,
                            valueEquality: this._valueEquals,
                            validate: this._validate,
                            shouldValidate: this._shouldValidate,
                            writeValue: this._writeValue,
                            ref: this._setScroller,
                            wheels: this._wheels,
                            rows: this._rows,
                            selectOnScroll: this._selectOnScroll,
                            onResize: this._onResize,
                        }),
                        e.children
                    );
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._preset = "select"),
                        (t._optionList = []),
                        (t._disabled = new Map()),
                        (t._shouldValidate = function (e, a) {
                            return t.s.selectMultiple !== t._prevS.selectMultiple;
                        }),
                        (t._writeValue = function (e, a) {
                            if (t._isSelect) {
                                var n = t.s.selectElement,
                                    s = t._optionList.findIndex(function (e) {
                                        return e.label === a;
                                    }),
                                    i = n.selectedIndex;
                                return (n.selectedIndex = s), (e.value = a), i !== s;
                            }
                            var r = e.value;
                            return (e.value = a), r !== a;
                        }),
                        (t._onResize = function (e) {
                            t.setState({ width: e.windowWidth });
                        }),
                        (t._format = function (e) {
                            var a = t.s.selectMultiple ? e[0] : e;
                            return (
                                (a.map &&
                                    a.map(function (e) {
                                        if (t._optionList) {
                                            var a = t._optionList.find(function (t) {
                                                return t.value === e;
                                            });
                                            return a && a.label;
                                        }
                                        return ae;
                                    })) ||
                                []
                            ).join(", ");
                        }),
                        (t._parse = function (e) {
                            var a = t.s.defaultSelection,
                                n = t.s.selectMultiple ? (a ? (a.length !== ae ? a : a.slice()) : []) : a !== ae ? a : null;
                            if (t._optionList) {
                                if (t.s.selectMultiple && null != e) {
                                    var s = [];
                                    if (void 0 === e.length) s.push(e);
                                    else
                                        for (
                                            var i = function (e) {
                                                    var a = t._optionList.find(function (t) {
                                                        return t.value === e;
                                                    });
                                                    a && s.push(a.value);
                                                },
                                                r = 0,
                                                o = e;
                                            r < o.length;
                                            r++
                                        ) {
                                            i(o[r]);
                                        }
                                    return [s];
                                }
                                var l = t._optionList.find(function (t) {
                                    return t.value === e;
                                });
                                if (l) return [l.value];
                            }
                            return [n];
                        }),
                        (t._get = function (e) {
                            var a = t.s.selectMultiple ? e[0] || [] : e;
                            return t.s.selectMultiple ? a : a[0];
                        }),
                        (t._valueEquals = function (e, a) {
                            return t.s.selectMultiple ? ye(e || [], a || []) : e === a;
                        }),
                        (t._validate = function (e) {
                            var a = e.values,
                                n = t._disabled,
                                s = { disabled: [n] };
                            if (t.s.selectMultiple) {
                                var i = t._get(a),
                                    r = [];
                                i.forEach(function (e) {
                                    n.get(e) || r.push(e);
                                }),
                                    (s.valid = t._parse(r));
                            }
                            return s;
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    (t.prototype.reloadOptionElements = function () {
                        var e = this;
                        (this._optionDataReloaded = !0),
                            this._setOptionsFromElm(),
                            (this._wheels = this._createWheels(this._optionList, this._spaceAround)),
                            setTimeout(function () {
                                e._updateRows(), e.forceUpdate();
                            });
                    }),
                    (t.prototype.setVal = function (e) {
                        this._proxyCall("setVal", [e]);
                    }),
                    (t.prototype.getVal = function () {
                        return this._proxyCall("getVal");
                    }),
                    (t.prototype.setTempVal = function (e) {
                        this._proxyCall("setTempVal", [e]);
                    }),
                    (t.prototype.getTempVal = function () {
                        return this._proxyCall("getTempVal");
                    }),
                    (t.prototype.open = function () {
                        this._proxyCall("open");
                    }),
                    (t.prototype.close = function () {
                        this._proxyCall("close");
                    }),
                    (t.prototype._render = function (e, t) {
                        var a = e.element !== this._prevS.element || e.selectElement !== this._prevS.selectElement;
                        a && ((this._isSelect = e.selectElement !== ae), this._isSelect ? this._setOptionsFromElm() : e.element || ((this._optionList = []), (this._disabled = this._createDisabledMap([], e.invalid))));
                        var n = e.data !== this._prevS.data;
                        n
                            ? ((this._optionList = this._createOptionList(e.data)), (this._disabled = this._createDisabledMap(this._optionList, e.invalid)))
                            : e.invalid !== this._prevS.invalid && (this._disabled = this._createDisabledMap(this._optionList, e.invalid)),
                            (e.touchUi !== this._prevS.touchUi || e.rows !== this._prevS.rows || n || this._rows === ae || this._optionDataReloaded) && this._updateRows();
                        var s = this._touchUi && (!e.selectMultiple || "ios" === (e.baseTheme || e.theme));
                        (this._wheels === ae || n || this._optionDataReloaded || a || s !== this._spaceAround) && (this._wheels = this._createWheels(this._optionList || [], s)),
                            (this._spaceAround = s),
                            (this._selectOnScroll = this._touchUi && !e.selectMultiple),
                            (this._optionDataReloaded = !1);
                    }),
                    (t.prototype._updateRows = function () {
                        var e = this._touchUi ? this.s.rows : Math.min((this._respProps || {}).rows || this.props.rows || 7, this._optionList.length || 1 / 0);
                        this._rows = this.props.rows || e;
                    }),
                    (t.prototype._getDataFromElm = function (e) {
                        for (var t = [], a = 0, n = e.children; a < n.length; a++) {
                            var s = n[a];
                            "option" === s.tagName.toLowerCase() && t.push({ disabled: s.disabled, text: s.textContent || "", value: s.value });
                        }
                        return t;
                    }),
                    (t.prototype._createWheels = function (e, t) {
                        var a = { checkmark: !0, circular: !1, data: [], multiple: this.s.selectMultiple, spaceAround: t };
                        return (
                            e.forEach(function (e) {
                                a.data.push({ display: e.label, value: e.value });
                            }),
                            [[a]]
                        );
                    }),
                    (t.prototype._createDisabledMap = function (e, t) {
                        var a = new Map();
                        return (
                            e &&
                                e.forEach(function (e) {
                                    e.disabled && a.set(e.value, !0);
                                }),
                            t &&
                                t.forEach(function (e) {
                                    a.set(e, !0);
                                }),
                            a
                        );
                    }),
                    (t.prototype._createOptionList = function (e) {
                        var t = [];
                        return (
                            e.forEach(function (e) {
                                "string" == typeof e ? t.push({ label: e, value: e }) : "object" == typeof e && t.push({ disabled: e.disabled, label: e.text, value: e.value });
                            }),
                            t
                        );
                    }),
                    (t.prototype._setOptionsFromElm = function () {
                        var e = this._getDataFromElm(this.s.selectElement);
                        (this._optionList = this._createOptionList(e)), (this._disabled = this._createDisabledMap(this._optionList, this.s.invalid));
                    }),
                    (t.prototype._proxyCall = function (e, t) {
                        return this._inst ? this._inst[e].apply(this._inst, t) : this._scroller ? this._scroller[e].apply(this._scroller, t) : void 0;
                    }),
                    (t.defaults = s({}, Va.defaults, { cancelText: "Cancel", closeText: "Close", okText: "Ok", rows: 5, selectMultiple: !1, setText: "Set", showOnClick: !0, showOnFocus: !0 })),
                    (t._name = "Select"),
                    t
                );
            })(Va)
        ),
        lr = ar(or, {
            before: function (e, t) {
                ((t.defaultValue = e.value), "select" === e.nodeName.toLowerCase())
                    ? ((e.style.display = "none"),
                      t.inputElement || "inline" === t.display ? (t.element = t.inputElement) : ((t.inputComponent = "input"), (t.showInput = !0)),
                      (t.selectElement = e),
                      null != e.getAttribute("multiple") && (t.selectMultiple = !0))
                    : (t.element = e);
            },
        }),
        cr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    return ga("div", { ref: this._setEl, className: this._cssClass }, e.children);
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    n(t, e),
                    (t.prototype._render = function (e) {
                        this._cssClass = this._className + " mbsc-list-header" + this._theme + this._hb;
                    }),
                    t
                );
            })(Va)
        ),
        hr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    var t = this.props;
                    t.actionable;
                    var a = t.children;
                    t.className, t.data, t.drag, t.ripple, t.rtl, t.theme, t.themeVariant, t.onDragEnd, t.onDragMove, t.onDragStart, t.onDragModeOn, t.onDragModeOff;
                    var n = i(t, ["actionable", "children", "className", "data", "drag", "ripple", "rtl", "theme", "themeVariant", "onDragEnd", "onDragMove", "onDragStart", "onDragModeOn", "onDragModeOff"]);
                    return ga("div", s({ tabIndex: 0, ref: this._setEl, className: this._cssClass }, n), ga("div", { dangerouslySetInnerHTML: this.textParam }), a);
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    n(t, e),
                    (t.prototype._mounted = function () {
                        var e,
                            t,
                            a = this;
                        this._unlisten = pn(this._el, {
                            click: !0,
                            onBlur: function () {
                                a.setState({ hasFocus: !1 });
                            },
                            onEnd: function (n) {
                                if (e) {
                                    var i = s({}, n);
                                    i.domEvent.preventDefault(), (i.data = a.s.data), (i.drag = !0), a._hook("onDragEnd", i), (e = !1);
                                }
                                clearTimeout(t);
                            },
                            onFocus: function () {
                                a.setState({ hasFocus: !0 });
                            },
                            onHoverIn: function () {
                                a.s.actionable && a.setState({ hasHover: !0 });
                            },
                            onHoverOut: function () {
                                a.setState({ hasHover: !1 });
                            },
                            onKeyDown: function (e) {
                                switch (e.keyCode) {
                                    case Mn:
                                    case En:
                                        a._el.click(), e.preventDefault();
                                }
                            },
                            onMove: function (n) {
                                var i = a.s,
                                    r = s({}, n);
                                (r.data = i.data),
                                    (r.drag = !0),
                                    (r.isExternal = !0),
                                    (!e && r.isTouch) || r.domEvent.preventDefault(),
                                    e ? a._hook("onDragMove", r) : (Math.abs(r.deltaX) > 7 || Math.abs(r.deltaY) > 7) && (clearTimeout(t), !r.isTouch && i.drag && !1 !== i.data.editable && ((e = !0), a._hook("onDragStart", r)));
                            },
                            onPress: function () {
                                a.s.actionable && a.setState({ isActive: !0 });
                            },
                            onRelease: function () {
                                a.setState({ isActive: !1 });
                            },
                            onStart: function (n) {
                                var i = a.s;
                                return (
                                    n.isTouch &&
                                        i.drag &&
                                        !1 !== i.data.editable &&
                                        !e &&
                                        (t = setTimeout(function () {
                                            var t = s({}, n);
                                            (t.data = i.data), (t.drag = !0), a._hook("onDragModeOn", t), a._hook("onDragStart", t), (e = !0);
                                        }, 350)),
                                    { ripple: i.actionable && i.ripple }
                                );
                            },
                        });
                    }),
                    (t.prototype._render = function (e, t) {
                        this._cssClass =
                            this._className +
                            " mbsc-list-item" +
                            this._theme +
                            this._hb +
                            this._rtl +
                            (e.actionable ? " mbsc-list-item-actionable" : "") +
                            (t.hasFocus ? " mbsc-focus" : "") +
                            (t.hasHover ? " mbsc-hover" : "") +
                            (t.isActive ? " mbsc-active" : "");
                    }),
                    (t.prototype._destroy = function () {
                        this._unlisten();
                    }),
                    (t.defaults = { actionable: !0, ripple: !1 }),
                    (t._name = "ListItem"),
                    t
                );
            })(Va)
        ),
        dr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    return ga("div", { ref: this._setEl, className: this._cssClass }, e.children);
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    n(t, e),
                    (t.prototype._render = function (e) {
                        this._cssClass = this._className + this._rtl + " mbsc-font mbsc-list" + this._theme;
                    }),
                    t
                );
            })(Va)
        ),
        ur = new h();
    function mr(e) {
        return ur.subscribe(e);
    }
    function _r(e) {
        ur.unsubscribe(e);
    }
    var pr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._render = function (e) {
                    e.dragData !== this._prevS.dragData && (this._dragData = le(e.dragData) ? JSON.parse(e.dragData.toString()) : e.dragData);
                }),
                (t.prototype._updated = function () {
                    var e = this,
                        t = this.s.element || this._el;
                    if (this._unlisten === ae && t) {
                        var a, n, i;
                        t.classList.add("mbsc-draggable");
                        var r = Dt(t).body,
                            o = function (e) {
                                (a.style.left = e.endX + "px"), (a.style.top = e.endY + "px");
                            };
                        this._unlisten = pn(t, {
                            onEnd: function (t) {
                                if (n) {
                                    var o = s({}, t);
                                    o.domEvent.preventDefault(), (o.action = "externalDrop"), (o.event = e._dragData), (o.create = !0), (o.eventName = "onDragEnd"), ur.next(o), (n = !1), r.removeChild(a);
                                }
                                clearTimeout(i);
                            },
                            onMove: function (t) {
                                var l = s({}, t);
                                (l.event = e._dragData),
                                    (l.clone = a),
                                    (l.create = !0),
                                    (l.isExternal = !0),
                                    (!n && l.isTouch) || l.domEvent.preventDefault(),
                                    n
                                        ? (o(t), (l.eventName = "onDragMove"), ur.next(l))
                                        : (Math.abs(l.deltaX) > 7 || Math.abs(l.deltaY) > 7) && (clearTimeout(i), l.isTouch || (o(t), r.appendChild(a), (l.eventName = "onDragStart"), ur.next(l), (n = !0)));
                            },
                            onStart: function (l) {
                                var c = s({}, l);
                                n ||
                                    ((a = t.cloneNode(!0)).classList.add("mbsc-drag-clone"),
                                    (c.event = e._dragData),
                                    (c.create = !0),
                                    (c.isExternal = !0),
                                    c.isTouch &&
                                        (i = setTimeout(function () {
                                            o(l), r.appendChild(a), (c.clone = a), (c.eventName = "onDragModeOn"), ur.next(c), (c.eventName = "onDragStart"), ur.next(c), (n = !0);
                                        }, 350)));
                            },
                        });
                    }
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && this._unlisten();
                }),
                t
            );
        })(Va),
        vr = 1;
    function fr() {
        return "mbsc_" + vr++;
    }
    function gr(e, t, a, n, s, i, r) {
        var o = e.color || (r && r.color),
            l = new Date(t),
            c = e.start || e.date,
            h = c ? ms(c) : null,
            d = e.end ? ms(e.end) : null,
            u = h && d && !cs(h, d),
            m = !u || cs(h, l),
            _ = !u || cs(d, l),
            p = e.allDay || !e.start || (u && !m && !_),
            v = e.title || e.text,
            f = Lt(v || "");
        return {
            allDay: e.allDay || !e.start,
            allDayText: p ? s : "",
            color: o,
            end: !p && _ && d && d.getTime ? ps(n, d) : "",
            endDate: d || (h ? new Date(h) : null),
            html: v,
            id: e.id,
            isMultiDay: u,
            lastDay: !p && u && _ ? i : "",
            original: e,
            position: {},
            resource: e.resource,
            start: !p && m && h && h.getTime ? ps(n, h) : "",
            startDate: h,
            style: { background: o, color: a && o ? Mt(o) : "" },
            title: f,
            uid: e.id + (e.recurring ? "_" + e.nr : ""),
        };
    }
    function br(e) {
        var t = [];
        if (e)
            for (var a = 0, n = e; a < n.length; a++) {
                var s = n[a];
                s.id === ae && (s.id = fr()), t.push(s);
            }
        return t;
    }
    function yr(e, t, a, n, s, i, r) {
        if ("start-end" === r) {
            var o = ci(a, e, t, s, i),
                l = ci(n, e, t, s, i);
            if (o) return o;
            if (l) return l;
        } else
            for (var c = is(gs(n, 1)), h = is(a); h < c; h.setDate(h.getDate() + 1)) {
                var d = ci(h, e, t, s, i);
                if (d) return d;
            }
        return !1;
    }
    var xr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.state = { activeDate: ae, eventList: [], popoverList: [], selectedDate: ae }),
                    (t._pageLoad = 0),
                    (t._selectedDates = {}),
                    (t._onScroll = ge(function () {
                        if (!t._isListScrolling)
                            for (var e in t._listDays)
                                if (t._listDays[e]) {
                                    var a = t._listDays[e];
                                    if (a.offsetTop + a.offsetHeight - t._list.scrollTop > 0) {
                                        +e !== t._selected && ((t._shouldSkipScroll = !0), t.setState({ selectedDate: +e }), t._selectedChange(new Date(+e)));
                                        break;
                                    }
                                }
                    })),
                    (t._isListScrolling = 0),
                    (t._remote = 0),
                    (t._onWeekDayClick = function (e) {
                        e !== t._selected && ((t._skipScheduleScroll = !0), t.setState({ selectedDate: e }), t._selectedChange(new Date(e)));
                    }),
                    (t._onDayClick = function (e) {
                        var a = +e.date,
                            n = t.state,
                            s = Us(t._eventMap[a], t.s.eventOrder),
                            i = t._showEventPopover,
                            r = i === ae ? !t._showEventLabels && !t._showEventList && !t._showSchedule : i,
                            o = !1 !== i && t._moreLabelClicked,
                            l = (r || o) && (!n.showPopover || (n.showPopover && a !== n.popoverDate)) && s && s.length > 0,
                            c = { selectedDate: a };
                        (e.events = s),
                            t.setState(c),
                            t._hook("onCellClick", e),
                            (t._moreLabelClicked = !1),
                            a !== t._selected && ((t._skipScheduleScroll = !0), t._selectedChange(e.date)),
                            l &&
                                setTimeout(function () {
                                    (t._anchor = e.target),
                                        (t._popoverClass = t._popoverClass.replace(" mbsc-popover-hidden", "")),
                                        t.setState({
                                            popoverDate: a,
                                            popoverList: s.map(function (e) {
                                                return t._getEventData(e, a);
                                            }),
                                            showPopover: !0,
                                        });
                                });
                    }),
                    (t._onActiveChange = function (e) {
                        var a = e.date,
                            n = { activeDate: a };
                        (t._active = a), (t._skipScheduleScroll = e.pageChange), (e.pageChange || e.today) && ((n.selectedDate = a), t._selectedChange(new Date(a))), t.setState(n);
                    }),
                    (t._onGestureStart = function (e) {
                        t._hidePopover();
                    }),
                    (t._onDayDoubleClick = function (e) {
                        t._dayClick("onCellDoubleClick", e);
                    }),
                    (t._onDayRightClick = function (e) {
                        t._dayClick("onCellRightClick", e);
                    }),
                    (t._onCellHoverIn = function (e) {
                        (e.events = t._eventMap[+e.date]), t._hook("onCellHoverIn", e);
                    }),
                    (t._onCellHoverOut = function (e) {
                        (e.events = t._eventMap[+e.date]), t._hook("onCellHoverOut", e);
                    }),
                    (t._onEventClick = function (e) {
                        !1 !== t._eventClick("onEventClick", e) && t._hidePopover();
                    }),
                    (t._onEventDoubleClick = function (e) {
                        t._eventClick("onEventDoubleClick", e);
                    }),
                    (t._onEventRightClick = function (e) {
                        t._eventClick("onEventRightClick", e);
                    }),
                    (t._onLabelClick = function (e) {
                        t._hook("onLabelClick", e), t._labelClick("onEventClick", e), e.label || (t._moreLabelClicked = !0);
                    }),
                    (t._onLabelDoubleClick = function (e) {
                        t._labelClick("onEventDoubleClick", e);
                    }),
                    (t._onLabelRightClick = function (e) {
                        t._labelClick("onEventRightClick", e);
                    }),
                    (t._onCellClick = function (e) {
                        t._cellClick("onCellClick", e);
                    }),
                    (t._onCellDoubleClick = function (e) {
                        t._cellClick("onCellDoubleClick", e);
                    }),
                    (t._onCellRightClick = function (e) {
                        t._cellClick("onCellRightClick", e);
                    }),
                    (t._onPageChange = function (e) {
                        setTimeout(function () {
                            t._hidePopover();
                        }),
                            (t._isPageChange = !0),
                            t._hook("onPageChange", e);
                    }),
                    (t._onPageLoading = function (e) {
                        var a = t.s,
                            n = Es(t._events, e.viewStart, e.viewEnd, a);
                        (t._colorsMap = Es(a.colors, e.viewStart, e.viewEnd, a)),
                            (t._invalidsMap = Es(a.invalid, e.viewStart, e.viewEnd, a)),
                            (t._validsMap = Es(a.valid, e.viewStart, e.viewEnd, a)),
                            (t._eventMap = n),
                            (t._firstDay = ls(e.firstDay, a)),
                            (t._lastDay = e.lastDay),
                            a.labels || (!t._showEventLabels && !t._showEventCount) ? a.marked || (e.inst._marksMap = n) : (e.inst._labelsMap = n),
                            e.viewChanged && t._hook("onPageLoading", e);
                    }),
                    (t._onPageLoaded = function (e) {
                        (t._shouldAnimateScroll = t._isPageChange), (t._isPageChange = !1);
                        var a = t._showEventList || t._showSchedule,
                            n = t._showSchedule ? t._scheduleType : t._eventListType;
                        if (a && (!t._showCalendar || "day" !== n)) {
                            var s = t.s,
                                i = e.month,
                                r = t._showEventList && i && "month" === n,
                                o = r ? i : e.firstDay,
                                l = r ? s.getDate(s.getYear(i), s.getMonth(i) + t._eventListSize, 1) : e.lastDay;
                            t._setEventList(o, l);
                        }
                        t._hook("onPageLoaded", e);
                    }),
                    (t._onPopoverClose = function () {
                        t._hidePopover();
                    }),
                    (t._onResize = function (e) {
                        var a;
                        if (t._showEventList && m) {
                            var n = e.target,
                                s = n.offsetHeight,
                                i = n.getBoundingClientRect().top;
                            a = s - t._list.getBoundingClientRect().top + i > 170;
                        }
                        t.setState({ height: e.height, isListScrollable: a, width: e.width });
                    }),
                    (t._getDragDates = function (e, a, n) {
                        for (var s = {}, i = t.s.firstDay, r = is(gs(a, 1)), o = is(e); o < r; o.setDate(o.getDate() + 1)) {
                            var l = o.getDay(),
                                c = i - l > 0 ? 7 : 0;
                            (cs(e, o) || l === i) && (s[+is(o)] = { event: n, width: 100 * Math.min(os(o, a) + 1, 7 + i - l - c) });
                        }
                        return s;
                    }),
                    (t._onLabelUpdateModeOn = function (e) {
                        var a = e.create ? t._tempEvent : e.data;
                        if (a) {
                            var n = ms(a.start),
                                s = ms(a.end || n);
                            t.setState({ isTouchDrag: !0, labelDragData: { draggedEvent: a, originDates: e.isExternal ? ae : t._getDragDates(n, s, a) } });
                        }
                    }),
                    (t._onLabelUpdateModeOff = function (e) {
                        t.setState({ isTouchDrag: !1, labelDragData: ae });
                    }),
                    (t._onLabelUpdateStart = function (e) {
                        var a = t.s,
                            n = t._el,
                            i = t._showWeekNumbers ? n.querySelector(".mbsc-calendar-week-nr").getBoundingClientRect().width : 0,
                            r = n.querySelectorAll(".mbsc-calendar-slide")[1].getBoundingClientRect(),
                            o = n.querySelector(".mbsc-calendar-week-days").getBoundingClientRect();
                        (t._areaTop = o.top + o.height),
                            (t._areaLeft = r.left + (a.rtl ? 0 : i)),
                            (t._areaBottom = r.top + r.height),
                            (t._areaRight = t._areaLeft + r.width - (a.rtl ? i : 0)),
                            (t._calCellHeight = (t._areaBottom - t._areaTop) / ("month" === t._calendarType ? 6 : t._calendarSize)),
                            (t._calCellWidth = (t._areaRight - t._areaLeft) / 7);
                        var l = fe((a.rtl ? t._areaRight - e.endX : e.endX - t._areaLeft) / t._calCellWidth),
                            c = fe((e.endY - t._areaTop) / t._calCellHeight),
                            h = gs(t._firstDay, 7 * c + l);
                        if (e.create) {
                            var d = a.extendDefaultEvent ? a.extendDefaultEvent({ start: h }) : ae;
                            t._tempEvent = s({ allDay: !0, end: new Date(+h + Zn), id: fr(), start: h, title: a.newEventText }, e.event, d);
                        }
                    }),
                    (t._onLabelUpdateMove = function (e) {
                        var a = t.s,
                            n = e.create ? t._tempEvent : e.data;
                        if (e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight) {
                            var i = t.state.labelDragData,
                                r = fe((a.rtl ? t._areaRight - e.endX : e.endX - t._areaLeft) / t._calCellWidth),
                                o = fe((a.rtl ? t._areaRight - e.startX : e.startX - t._areaLeft) / t._calCellWidth),
                                l = fe((e.endY - t._areaTop) / t._calCellHeight),
                                c = fe((e.startY - t._areaTop) / t._calCellHeight),
                                h = 7 * (l - c) + (r - o);
                            if (r !== t._tempDay || l !== t._tempWeek) {
                                var d = ms(n.start),
                                    u = ms(n.end) || d,
                                    m = s({}, n),
                                    _ = d,
                                    p = u;
                                if (e.isExternal) {
                                    var v = ns(d),
                                        f = +u - +d;
                                    (_ = new Date(+gs(t._firstDay, 7 * l + r) + v)), (p = new Date(+_ + f));
                                } else if (e.drag) (_ = gs(d, h)), (p = gs(u, h));
                                else {
                                    var g = a.rtl ? -1 : 1,
                                        b = e.create ? (l === c ? e.deltaX * g > 0 : h > 0) : "end" === e.direction,
                                        y = os(d, u);
                                    b ? (p = gs(u, Math.max(-y, h))) : (_ = gs(d, Math.min(y, h))), p < _ && (b ? (p = new Date(_)) : (_ = new Date(p)));
                                }
                                (m.start = _),
                                    (m.end = p),
                                    /mbsc-popover-hidden/.test(t._popoverClass) || (t._popoverClass = t._popoverClass + " mbsc-popover-hidden"),
                                    t.setState({ labelDragData: { draggedDates: t._getDragDates(_, p, m), draggedEvent: m, moving: !0, originDates: i && i.originDates } }),
                                    (t._tempDay = r),
                                    (t._tempWeek = l);
                            }
                        }
                    }),
                    (t._onLabelUpdateEnd = function (e) {
                        var a = t.state,
                            n = e.create,
                            s = a.labelDragData || {},
                            i = n ? t._tempEvent : e.data,
                            r = s.draggedEvent || i,
                            o = ms(i.start),
                            l = ms(i.end),
                            c = ms(r.start),
                            h = ms(r.end),
                            d = n || +o != +c || +l != +h,
                            u = { allDay: i.allDay, endDate: h, original: i, startDate: c },
                            m =
                                !d ||
                                t._onEventDragEnd({
                                    action: e.action || (a.labelDragData ? "drag" : "click"),
                                    collision: yr(t._invalidsMap, t._validsMap, c, h, t._minDate, t._maxDate, t.s.invalidateEvent),
                                    create: n,
                                    domEvent: e.domEvent,
                                    event: u,
                                    source: "calendar",
                                }),
                            _ = a.isTouchDrag && (!n || m);
                        t.setState({ isTouchDrag: _, labelDragData: _ ? { draggedEvent: r, originDates: m ? t._getDragDates(c, h, u.original) : s.originDates } : {} }), e.drag && t._hidePopover(), (t._tempWeek = -1), (t._tempDay = -1);
                    }),
                    (t._onEventDragEnd = function (e) {
                        var a = e.action,
                            n = e.resource,
                            i = e.collision,
                            r = e.create,
                            o = e.source,
                            l = e.event,
                            c = l.original,
                            h = c.recurring ? c.original : c,
                            d = s({}, h),
                            u = s({}, h),
                            m = l.startDate,
                            _ = l.endDate,
                            p = l.allDay,
                            v = u.recurring;
                        v ? (u.recurringException = ks(u.recurringException).concat([c.start])) : ((u.allDay = p), (u.start = m), (u.end = _), n !== ae && (u.resource = n));
                        var f = !1,
                            g = v ? s({}, h) : h;
                        if (
                            ((r || v) &&
                                (v && delete g.recurring,
                                (v || g.id === ae) && (g.id = fr()),
                                n !== ae && (g.resource = n),
                                (g.start = m),
                                (g.end = _),
                                (g.allDay = p),
                                (f = !1 !== t._hook("onEventCreate", { action: a, domEvent: e.domEvent, event: g, source: o })),
                                !1 !== i && ((f = !1), t._hook("onEventCreateFailed", { action: a, event: g, invalid: i, source: o }))),
                            (r && !v) ||
                                ((f = !1 !== t._hook("onEventUpdate", { domEvent: e.domEvent, event: u, oldEvent: d, source: o })), !1 !== i && ((f = !1), t._hook("onEventUpdateFailed", { event: u, invalid: i, oldEvent: d, source: o }))),
                            f &&
                                ((r || v) && (t._events.push(g), (t._triggerCreated = { action: a, event: g, source: o })),
                                (r && !v) ||
                                    (v ? ((l.id = g.id), (l.original = g), (h.recurringException = u.recurringException)) : ((h.start = m), (h.end = _), (h.allDay = p), n !== ae && (h.resource = n)),
                                    (t._triggerUpdated = { event: h, oldEvent: d, source: o })),
                                (t._refresh = !0),
                                "schedule" === o))
                        ) {
                            var b = void 0,
                                y = void 0;
                            t._showCalendar && "day" === t._scheduleType ? (y = is(gs((b = new Date(t._selected)), 1))) : ((b = t._firstDay), (y = t._lastDay)), (t._eventMap = Es(t._events, b, y, t.s)), t.forceUpdate();
                        }
                        return f;
                    }),
                    (t._onExternalDrag = function (e) {
                        if (t.s.externalDrop && t._showCalendar)
                            switch (e.eventName) {
                                case "onDragModeOff":
                                    t._onLabelUpdateModeOff(e);
                                    break;
                                case "onDragModeOn":
                                    t._onLabelUpdateModeOn(e);
                                    break;
                                case "onDragStart":
                                    t._onLabelUpdateStart(e);
                                    break;
                                case "onDragMove":
                                    var a = e.clone;
                                    e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight
                                        ? ((a.style.display = "none"), t._onLabelUpdateMove(e), (t._onCalendar = !0))
                                        : t._onCalendar && ((a.style.display = "table"), t.setState({ labelDragData: {} }), (t._tempWeek = -1), (t._tempDay = -1), (t._onCalendar = !1));
                                    break;
                                case "onDragEnd":
                                    e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight ? t._onLabelUpdateEnd(e) : t.setState({ labelDragData: ae });
                            }
                    }),
                    (t._onEventDelete = function (e) {
                        var a = e.event;
                        if (t.s.dragToCreate || t.s.clickToCreate)
                            if (a.recurring) {
                                var n = a.original,
                                    i = s({}, n),
                                    r = s({}, n);
                                (r.recurringException = ks(r.recurringException).concat([a.start])),
                                    !1 !== t._hook("onEventUpdate", { domEvent: e.domEvent, event: r, oldEvent: i }) && ((n.recurringException = r.recurringException), (t._triggerUpdated = { event: n, oldEvent: i, source: e.source })),
                                    t.refresh();
                            } else {
                                !1 !== t._hook("onEventDelete", { domEvent: e.domEvent, event: a }) &&
                                    ((t._events = t._events.filter(function (e) {
                                        return e.id !== a.id;
                                    })),
                                    (t._triggerDeleted = { event: a, source: e.source }),
                                    t.refresh());
                            }
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.addEvent = function (e) {
                    for (var t = [], a = 0, n = br(oe(e) ? e : [e]); a < n.length; a++) {
                        var s = n[a];
                        t.push("" + s.id), this._events.push(s);
                    }
                    return this.refresh(), t;
                }),
                (t.prototype.getEvents = function () {
                    return this._events.slice();
                }),
                (t.prototype.setEvents = function (e) {
                    for (var t = [], a = br(e), n = 0, s = a; n < s.length; n++) {
                        var i = s[n];
                        t.push("" + i.id);
                    }
                    return (this._events = a), this.refresh(), t;
                }),
                (t.prototype.removeEvent = function (e) {
                    for (var t = oe(e) ? e : [e], a = this._events, n = a.length, s = 0, i = t; s < i.length; s++)
                        for (var r = i[s], o = !1, l = 0; !o && l < n; ) {
                            var c = a[l];
                            (c.id !== r && c.id !== r.id) || ((o = !0), a.splice(l, 1)), l++;
                        }
                    this.refresh();
                }),
                (t.prototype.navigate = function (e, t) {
                    var a = +ms(e);
                    a !== this._selected && ((this._shouldAnimateScroll = !!t), this.s.selectedDate === ae ? this.setState({ selectedDate: a }) : this._selectedChange(e));
                }),
                (t.prototype.updateEvent = function (e) {
                    for (var t = oe(e) ? e : [e], a = this._events, n = a.length, s = 0, i = t; s < i.length; s++)
                        for (var r = i[s], o = !1, l = 0; !o && l < n; ) {
                            a[l].id === r.id && ((o = !0), a.splice(l, 1, r)), l++;
                        }
                    this.refresh();
                }),
                (t.prototype.refresh = function () {
                    (this._refresh = !0), this.forceUpdate();
                }),
                (t.prototype._isToday = function (e) {
                    return cs(new Date(e), new Date());
                }),
                (t.prototype._formatScheduleTime = function (e) {
                    var t = this.s,
                        a = t.timeFormat;
                    return ps(null !== a.match(/a/i) ? a.replace(/.[m]+/i, "") : a, new Date(0, 0, 1, e, 0), t);
                }),
                (t.prototype._render = function (e, t) {
                    var a,
                        n,
                        s = this,
                        i = this._prevS,
                        r = this._showDate,
                        o = !1;
                    if (
                        ((this._colorEventList = e.eventTemplate === ae && e.renderEvent === ae && e.colorEventList),
                        ce(e.min) ? (this._minDate = -1 / 0) : i.min !== e.min && (this._minDate = +ms(e.min)),
                        ce(e.max) ? (this._maxDate = 1 / 0) : i.max !== e.max && (this._maxDate = +ms(e.max)),
                        e.selectedDate !== ae ? (n = +ms(e.selectedDate)) : (this._defaultDate || (this._defaultDate = +(e.defaultSelectedDate !== ae ? ms(e.defaultSelectedDate) : new Date())), (n = t.selectedDate || this._defaultDate)),
                        (this.eventList = t.eventList),
                        e.data !== i.data && ((this._events = br(e.data)), (this._refresh = !0)),
                        e.invalid !== i.invalid && (this._refresh = !0),
                        JSON.stringify(e.view) !== JSON.stringify(i.view))
                    ) {
                        var l = {
                            c: "eventcalendar",
                            eventListSize: this._eventListSize,
                            eventListType: this._eventListType,
                            firstDay: e.firstDay,
                            resourcesLength: e.resources ? e.resources.length : 0,
                            scheduleEndDay: this._scheduleEndDay,
                            scheduleEndTime: this._scheduleEndTime,
                            scheduleStartDay: this._scheduleStartDay,
                            scheduleStartTime: this._scheduleStartTime,
                            scheduleTimeCellStep: this._scheduleTimeCellStep,
                            scheduleTimeLabelStep: this._scheduleTimeLabelStep,
                            scheduleType: this._scheduleType,
                            showCalendar: this._showCalendar,
                            showEventCount: this._showEventCount,
                            showEventLabels: this._showEventLabels,
                            showEventList: this._showEventList,
                            showMarked: !!e.marked,
                            showSchedule: this._showSchedule,
                            showScheduleDays: this._showScheduleDays,
                            v: Ma,
                            view: e.view,
                        };
                        this._remote++,
                            Ji(this),
                            qi(
                                "remote",
                                this,
                                l,
                                function (e) {
                                    if ((s._remote--, !s._remote)) {
                                        for (var t in e) e.hasOwnProperty(t) && (s[t] = e[t]);
                                        Xi(e.notification), s.forceUpdate();
                                    }
                                },
                                "comp_" + this._uid
                            );
                    }
                    if (
                        ((this._showDate = (this._showSchedule && "day" === this._scheduleType) || (this._showEventList && "day" === this._eventListType)),
                        (this._refresh || e.locale !== i.locale || e.theme !== i.theme) && ((o = !0), this._pageLoad++),
                        e.resources !== i.resources &&
                            (this._resourcesMap = (e.resources || []).reduce(function (e, t) {
                                return (e[t.id] = t), e;
                            }, {})),
                        n !== this._selectedDateTime)
                    ) {
                        var c = this._showCalendar ? +hi(new Date(n), e, this._minDate, this._maxDate, ae, ae, 1) : re(n, this._minDate, this._maxDate);
                        n !== c &&
                            ((n = c),
                            setTimeout(function () {
                                s._selectedChange(new Date(n));
                            })),
                            (this._selectedDateTime = n),
                            (this._shouldScrollSchedule = !this._skipScheduleScroll);
                    }
                    ((a = +is(new Date(n))) === this._selected && r === this._showDate && e.locale === i.locale && i.dateFormatLong === e.dateFormatLong) ||
                        (this._selectedDateHeader = this._showDate ? ps(e.dateFormatLong, new Date(a), e) : ""),
                        a !== this._selected &&
                            ((this._shouldScroll = !this._isPageChange && !this._shouldSkipScroll),
                            (this._shouldAnimateScroll = this._shouldAnimateScroll !== ae ? this._shouldAnimateScroll : this._selected !== ae),
                            (this._selected = a),
                            (this._selectedDates = {}),
                            (this._selectedDates[a] = !0),
                            (this._active = a),
                            (o = !0)),
                        o && this._showCalendar && ("day" === this._eventListType || "day" === this._scheduleType) && this._setEventList(new Date(a), is(new Date(a + $n))),
                        (this._refresh = !1),
                        (this._cssClass = this._className + " mbsc-eventcalendar" + (this._showEventList ? " mbsc-eventcalendar-agenda" : "") + (this._showSchedule ? " mbsc-eventcalendar-schedule" : ""));
                }),
                (t.prototype._mounted = function () {
                    this._unsubscribe = mr(this._onExternalDrag);
                }),
                (t.prototype._updated = function () {
                    var e = this;
                    if (
                        (this._shouldScroll && this.state.isListScrollable && (this._scrollToDay(), (this._shouldScroll = !1), (this._shouldAnimateScroll = ae)),
                        this._shouldLoadDays &&
                            ((this._shouldLoadDays = !1),
                            Yt(this._list.querySelectorAll("[mbsc-timestamp]"), function (t) {
                                e._listDays[t.getAttribute("mbsc-timestamp")] = t;
                            })),
                        this._triggerCreated)
                    ) {
                        var t = this._triggerCreated,
                            a =
                                "schedule" === t.source
                                    ? this._el.querySelector('.mbsc-schedule-event[data-id="' + t.event.id + '"]')
                                    : this._calendarView._body.querySelector('.mbsc-calendar-table-active .mbsc-calendar-label[data-id="' + t.event.id + '"]');
                        this._hook("onEventCreated", s({}, this._triggerCreated, { target: a })), (this._triggerCreated = null);
                    }
                    if (this._triggerUpdated) {
                        var n = this._triggerUpdated;
                        a =
                            "schedule" === n.source
                                ? this._el.querySelector('.mbsc-schedule-event[data-id="' + n.event.id + '"]')
                                : this._calendarView._body.querySelector('.mbsc-calendar-table-active .mbsc-calendar-label[data-id="' + n.event.id + '"]');
                        this._hook("onEventUpdated", s({}, this._triggerUpdated, { target: a })), (this._triggerUpdated = null);
                    }
                    this._triggerDeleted && (this._hook("onEventDeleted", s({}, this._triggerDeleted)), (this._triggerDeleted = null)),
                        (this._shouldSkipScroll = !1),
                        this._showSchedule && ((this._shouldScrollSchedule = !1), (this._skipScheduleScroll = !1));
                }),
                (t.prototype._destroy = function () {
                    _r(this._unsubscribe);
                }),
                (t.prototype._getAgendaEvents = function (e, t, a) {
                    var n = this,
                        s = [],
                        i = this.s;
                    if (a && this._showEventList)
                        for (
                            var r = function (e) {
                                    var t = a[+is(e)];
                                    if (t && t.length) {
                                        var r = Us(t, i.eventOrder);
                                        s.push({
                                            date: ps(i.dateFormatLong || i.dateFormat, e, i),
                                            events: r.map(function (t) {
                                                return n._getEventData(t, +e);
                                            }),
                                            timestamp: +e,
                                        });
                                    }
                                },
                                o = is(e);
                            o < t;
                            o.setDate(o.getDate() + 1)
                        )
                            r(o);
                    return s;
                }),
                (t.prototype._getEventData = function (e, t) {
                    var a,
                        n = this.s;
                    if (!e.color && e.resource) {
                        var s = oe(e.resource) ? e.resource : [e.resource];
                        a = (this._resourcesMap || {})[s[0]];
                    }
                    var i = gr(e, t, this._colorEventList, n.timeFormat, n.allDayText, n.toText, a);
                    return (i.html = this._safeHtml(i.html)), i;
                }),
                (t.prototype._setEventList = function (e, t) {
                    var a = this;
                    setTimeout(function () {
                        (a._eventListHTML = ae), (a._shouldScroll = !0), (a._listDays = null), a._scrollToDay(0), a.setState({ eventList: a._getAgendaEvents(e, t, a._eventMap) });
                    });
                }),
                (t.prototype._hidePopover = function () {
                    this.setState({ showPopover: !1 });
                }),
                (t.prototype._scrollToDay = function (e) {
                    var t = this;
                    if (this._list) {
                        var a = e,
                            n = void 0;
                        if (e === ae && this._listDays) {
                            var s = this._listDays[this._selected];
                            s && ((a = s.offsetTop), (n = this._shouldAnimateScroll));
                        }
                        a !== ae &&
                            (this._isListScrolling++,
                            Nt(this._list, a, n, function () {
                                setTimeout(function () {
                                    t._isListScrolling--;
                                }, 150);
                            }));
                    }
                }),
                (t.prototype._selectedChange = function (e) {
                    this._emit("selectedDateChange", e), this._hook("onSelectedDateChange", { date: e });
                }),
                (t.prototype._cellClick = function (e, t) {
                    this._hook(e, s({ source: "schedule", target: t.domEvent.currentTarget }, t));
                }),
                (t.prototype._dayClick = function (e, t) {
                    var a = +t.date,
                        n = Us(this._eventMap[a], this.s.eventOrder);
                    (t.events = n), this._hook(e, t);
                }),
                (t.prototype._labelClick = function (e, t) {
                    t.label && this._hook(e, { date: t.date, domEvent: t.domEvent, event: t.label, source: "calendar" });
                }),
                (t.prototype._eventClick = function (e, t) {
                    return (t.date = new Date(t.date)), this._hook(e, t);
                }),
                (t.defaults = s({}, Vs, { actionableEvents: !0, allDayText: "All-day", data: [], dragTimeStep: 15, newEventText: "New event", noEventsText: "No events", showControls: !0, view: { calendar: { type: "month" } } })),
                (t._name = "Eventcalendar"),
                t
            );
        })(Va),
        Dr = {},
        Tr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    var t = e.event,
                        a = t.allDay,
                        n = this._theme,
                        s = e.resize && !1 !== t.original.editable;
                    return ga(
                        "div",
                        {
                            tabIndex: 0,
                            className: this._cssClass,
                            "data-id": t.id,
                            style: this._style,
                            ref: this._setEl,
                            title: t.title + " " + (t.allDayText ? "" : t.start + " - " + t.end),
                            onClick: this._onClick,
                            onContextMenu: this._onRightClick,
                        },
                        this._isStart && s && ga("div", { className: "mbsc-schedule-event-resize mbsc-schedule-event-resize-start" + this._rtl + (e.isDrag ? " mbsc-schedule-event-resize-start-touch" : "") }),
                        this._isEnd && s && ga("div", { className: "mbsc-schedule-event-resize mbsc-schedule-event-resize-end" + this._rtl + (e.isDrag ? " mbsc-schedule-event-resize-end-touch" : "") }),
                        e.render
                            ? this._content
                                ? this._content
                                : ga("div", { style: { height: "100%" }, dangerouslySetInnerHTML: this._html })
                            : ga(
                                  jt,
                                  null,
                                  !a && ga("div", { className: "mbsc-schedule-event-bar" + n + this._rtl }),
                                  ga("div", { className: "mbsc-schedule-event-background" + (a ? " mbsc-schedule-event-all-day-background" : "") + n, style: { background: t.style.background } }),
                                  ga(
                                      "div",
                                      { className: "mbsc-schedule-event-inner" + n + (a ? " mbsc-schedule-event-all-day-inner" : "") + (t.cssClass || ""), style: { color: t.style.color } },
                                      ga("div", { className: "mbsc-schedule-event-title" + (a ? " mbsc-schedule-event-all-day-title" : "") + n, dangerouslySetInnerHTML: this._html }, this._content),
                                      !a && ga("div", { className: "mbsc-schedule-event-range" + n }, this._rangeText)
                                  )
                              ),
                        ga("div", { dangerouslySetInnerHTML: this.textParam })
                    );
                }),
                (t.prototype._updated = function () {
                    e.prototype._updated.call(this), this._shouldEnhance && Sa && (Sa(this._el), (this._shouldEnhance = !1));
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._onClick = function (e) {
                            t._triggerClick("onClick", e);
                        }),
                        (t._onRightClick = function (e) {
                            t._triggerClick("onRightClick", e);
                        }),
                        (t._onDocTouch = function (e) {
                            xt(t._doc, tn, t._onDocTouch), xt(t._doc, Ja, t._onDocTouch), (t._isDrag = !1), t._hook("onDragModeOff", { event: t.s.event });
                        }),
                        (t._updateState = function (e) {
                            t.setState(e);
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    (t.prototype._mounted = function () {
                        var e,
                            t,
                            a = this,
                            n = this.s.event.uid,
                            i = Dr[n];
                        i || ((i = new h()), (Dr[n] = i)),
                            (this._unsubscribe = i.subscribe(this._updateState)),
                            (this._doc = Dt(this._el)),
                            (this._unlisten = pn(this._el, {
                                keepFocus: !0,
                                onBlur: function () {
                                    i.next({ hasFocus: !1 });
                                },
                                onDoubleClick: function (e) {
                                    e.domEvent.stopPropagation(), a._triggerClick("onDoubleClick", e.domEvent);
                                },
                                onEnd: function (n) {
                                    if (a._isDrag) {
                                        var i = a.s,
                                            r = s({}, n);
                                        r.domEvent.preventDefault(),
                                            (r.event = i.event),
                                            (r.resource = i.resource),
                                            i.resize && e ? ((r.resize = !0), (r.direction = e)) : i.drag && (r.drag = !0),
                                            a._hook("onDragEnd", r),
                                            i.isDrag || (a._isDrag = !1),
                                            a._el && r.moved && a._el.blur();
                                    }
                                    clearTimeout(t), (e = ae);
                                },
                                onFocus: function () {
                                    i.next({ hasFocus: !0 });
                                },
                                onHoverIn: function () {
                                    i.next({ hasHover: !0 });
                                },
                                onHoverOut: function () {
                                    i.next({ hasHover: !1 });
                                },
                                onKeyDown: function (e) {
                                    var t = a.s.event.original;
                                    switch (e.keyCode) {
                                        case Mn:
                                        case En:
                                            a._el.click(), e.preventDefault();
                                            break;
                                        case 8:
                                        case 46:
                                            a.state.hasFocus && !1 !== t.editable && a._hook("onDelete", { domEvent: e.domEvent, event: t, source: "schedule" });
                                    }
                                },
                                onMove: function (n) {
                                    var i = a.s,
                                        r = s({}, n);
                                    if (((r.event = i.event), (r.resource = i.resource), e)) (r.resize = !0), (r.direction = e);
                                    else {
                                        if (!i.drag) return;
                                        r.drag = !0;
                                    }
                                    !1 !== i.event.original.editable &&
                                        ((!a._isDrag && r.isTouch) || r.domEvent.preventDefault(),
                                        a._isDrag ? a._hook("onDragMove", r) : (Math.abs(r.deltaX) > 7 || Math.abs(r.deltaY) > 7) && (clearTimeout(t), r.isTouch || ((a._isDrag = !0), a._hook("onDragStart", r))));
                                },
                                onStart: function (n) {
                                    var i = a.s,
                                        r = s({}, n),
                                        o = r.domEvent.target;
                                    if (((r.event = i.event), (r.resource = i.resource), i.resize && o.classList.contains("mbsc-schedule-event-resize")))
                                        (e = o.classList.contains("mbsc-schedule-event-resize-start") ? "start" : "end"), (r.resize = !0), (r.direction = e);
                                    else {
                                        if (!i.drag) return;
                                        r.drag = !0;
                                    }
                                    !1 !== i.event.original.editable &&
                                        (a._isDrag
                                            ? (r.domEvent.stopPropagation(), a._hook("onDragStart", r))
                                            : r.isTouch &&
                                              (t = setTimeout(function () {
                                                  a._hook("onDragModeOn", r), a._hook("onDragStart", r), (a._isDrag = !0);
                                              }, 350)));
                                },
                            })),
                            this._isDrag && (yt(this._doc, tn, this._onDocTouch), yt(this._doc, Ja, this._onDocTouch));
                    }),
                    (t.prototype._destroy = function () {
                        if ((this._el && this._el.blur(), this._unsubscribe)) {
                            var e = this.s.event.uid,
                                t = Dr[e];
                            t.unsubscribe(this._unsubscribe), t.nr || delete Dr[e];
                        }
                        this._unlisten && this._unlisten(), xt(this._doc, tn, this._onDocTouch), xt(this._doc, Ja, this._onDocTouch);
                    }),
                    (t.prototype._render = function (e, t) {
                        var a = new Date(e.timestamp),
                            n = e.event,
                            i = n.allDay,
                            r = !cs(n.startDate, n.endDate),
                            o = r && cs(n.startDate, a),
                            l = r && cs(n.endDate, a);
                        (this._isStart = !r || o),
                            (this._isEnd = !r || (i ? n.endDate < e.lastDay : l)),
                            !i && e.gridStartTime > ns(n.startDate) && (this._isStart = !1),
                            !i && e.gridEndTime + 1 < ns(n.endDate) && (this._isEnd = !1),
                            (this._html = this._content = ae),
                            (this._isDrag = this._isDrag || e.isDrag),
                            (this._rangeText = n.start + " - " + n.end),
                            (i || (r && !o && !l)) && (this._rangeText = n.allDayText),
                            (this._cssClass =
                                "mbsc-schedule-event" +
                                this._theme +
                                this._rtl +
                                (this._isStart ? " mbsc-schedule-event-start" : "") +
                                (this._isEnd ? " mbsc-schedule-event-end" : "") +
                                (i ? " mbsc-schedule-event-all-day" : "") +
                                (t.hasFocus && !e.inactive ? " mbsc-schedule-event-active" : "") +
                                (!t.hasHover || e.inactive || this._isDrag ? "" : " mbsc-schedule-event-hover") +
                                (e.isDrag ? " mbsc-schedule-event-dragging" : "") +
                                (e.hidden ? " mbsc-schedule-event-hidden" : "") +
                                (e.inactive ? " mbsc-schedule-event-inactive" : "")),
                            (this._style = s({}, n.position, { color: n.color }));
                        var c = e.render || e.renderContent;
                        if (c) {
                            var h = c(n);
                            le(h) ? ((this._html = this._safeHtml(h)), (this._shouldEnhance = !0)) : (this._content = h);
                        } else e.contentTemplate || (this._html = n.html);
                    }),
                    (t.prototype._triggerClick = function (e, t) {
                        var a = this.s;
                        this._hook(e, { date: a.timestamp, domEvent: t, event: a.event.original, resource: a.resource, source: "schedule" });
                    }),
                    t
                );
            })(Va)
        );
    function Cr(e, t, a, n, s) {
        for (var i = "start-end" === s, r = is(gs(a, 1)), o = 0, l = Object.keys(e); o < l.length; o++)
            for (var c = e[l[o]], h = is(t); h < r; h.setDate(h.getDate() + 1)) {
                var d = c[+is(h)];
                if (d) {
                    if (d.allDay && (!i || cs(h, t) || cs(h, a))) return d.allDay;
                    if (!n)
                        for (var u = 0, m = d.invalids; u < m.length; u++) {
                            var _ = m[u];
                            if (i) {
                                if (ss(_.startDate, _.endDate, t, t)) return _.original;
                                if (ss(_.startDate, _.endDate, a, a)) return _.original;
                            } else if (ss(_.startDate, _.endDate, t, a)) return _.original;
                        }
                }
            }
        return !1;
    }
    function Sr(e, t, a) {
        var n = ns(e);
        return t > n && (n = t), (100 * (n - t)) / a;
    }
    function wr(e, t) {
        e = e || {};
        var a = Object.keys(e),
            n = {},
            s = (t && 0 !== t.length ? t : [{ id: "mbsc-def" }]).map(function (e) {
                return e.id;
            });
        s.forEach(function (e) {
            n[e] = {};
        });
        for (
            var i = function (a) {
                    for (
                        var i = function (e) {
                                var i = e.resource;
                                (i !== ae && t ? (oe(i) ? i : [i]) : s).forEach(function (t) {
                                    var s = n[t];
                                    s && (s[a] || (s[a] = []), s[a].push(e));
                                });
                            },
                            r = 0,
                            o = e[a];
                        r < o.length;
                        r++
                    ) {
                        i(o[r]);
                    }
                },
                r = 0,
                o = a;
            r < o.length;
            r++
        ) {
            i(o[r]);
        }
        return n;
    }
    function kr(e) {
        return (e = Math.abs(pe(e))) > 60
            ? 60 * pe(e / 60)
            : 60 % e == 0
            ? e
            : [6, 10, 12, 15, 20, 30].reduce(function (t, a) {
                  return Math.abs(a - e) < Math.abs(t - e) ? a : t;
              });
    }
    var Mr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._invalids = {}),
                    (t._onScroll = function () {
                        var e = t._scrollCont;
                        if (e) {
                            var a = e.scrollTop,
                                n = "translateX(" + -e.scrollLeft + "px)",
                                s = t._timeCont,
                                i = t._allDayCont,
                                r = t._headerCont,
                                o = (ft ? ft + "T" : "t") + "ransform";
                            i && (i.style[o] = n), s && (s.style.marginTop = -a + "px"), r && (r.style[o] = n), 0 === a ? t.setState({ showShadow: !1 }) : t.state.showShadow || t.setState({ showShadow: !0 });
                        }
                    }),
                    (t._onEventDragModeOn = function (e) {
                        var a = e.create ? t._tempEvent : e.event,
                            n = e.create ? t._tempResource : e.resource;
                        t.setState({ dragData: { draggedEvent: a, originDates: e.isExternal ? ae : t._getDragDates(a, n), resource: n }, isTouchDrag: !0 });
                    }),
                    (t._onEventDragModeOff = function () {
                        t.setState({ dragData: ae, isTouchDrag: !1 });
                    }),
                    (t._onEventDragStart = function (e) {
                        var a = t.s,
                            n = t._resources,
                            i = t._days * n.length,
                            r = t._scrollCont,
                            o = t._time,
                            l = a.dragTimeStep,
                            c = t._el.querySelector(".mbsc-schedule-grid").getBoundingClientRect(),
                            h = t._el.querySelector(".mbsc-schedule-all-day-wrapper"),
                            d = h && h.getBoundingClientRect(),
                            u = r.getBoundingClientRect();
                        (t._gridLeft = c.left),
                            (t._gridTop = u.top),
                            (t._gridBottom = t._gridTop + u.height),
                            (t._gridRight = t._gridLeft + r.scrollWidth),
                            (t._allDayTop = d ? d.top : t._gridTop),
                            (t._allDayBottom = t._allDayTop + (d ? d.height : 0)),
                            (t._colWidth = (t._gridRight - t._gridLeft) / i),
                            (t._colHeight = c.height),
                            (t._colTop = c.top);
                        var m = e.startX,
                            _ = e.startY,
                            p = t._groupByResource,
                            v = p ? t._days : n.length,
                            f = fe((a.rtl ? t._gridRight - m : m - t._gridLeft) / t._colWidth),
                            g = p ? f % v : fe(f / v),
                            b = p ? fe(f / v) : f % v;
                        if (e.create) {
                            var y = fe((o * Math.max(0, _ - t._colTop)) / t._colHeight),
                                x = gs(t._firstDay, g),
                                D = new Date(+new Date(1970, 0, 1) + t._startTime + y),
                                T = bs(new Date(x.getFullYear(), x.getMonth(), x.getDate(), D.getHours(), D.getMinutes()), l),
                                C = bs(new Date(+T + t._stepCell), l),
                                S = n[b],
                                w = S ? S.id : ae,
                                k = a.extendDefaultEvent ? a.extendDefaultEvent({ resource: w, start: T }) : ae,
                                M = s({ end: C, id: fr(), start: T, title: a.newEventText }, e.event, k);
                            S && "mbsc-def" !== w && (M.resource = w), a.showAllDay && e.endY < t._allDayBottom && (M.allDay = !0);
                            var E = t._getEventData(M, +x, S);
                            if (e.event) {
                                var N = +E.endDate - +E.startDate;
                                (E.startDate = x), (E.endDate = new Date(+x + N)), (E.allDay = !0);
                            }
                            (t._tempEvent = E), (t._tempResource = w);
                        }
                    }),
                    (t._onEventDragMove = function (e) {
                        var a,
                            n = t.s,
                            i = t.state.dragData,
                            r = n.dragTimeStep,
                            o = n.timeFormat,
                            l = Math.max(t._colTop, t._gridTop),
                            c = Math.min(t._colTop + t._colHeight, t._gridBottom),
                            h = re(e.endX, t._gridLeft, t._gridRight - 1),
                            d = re(e.endY, l, c - 1),
                            u = t._groupByResource,
                            m = u ? t._days : t._resources.length,
                            _ = d - e.startY,
                            p = fe((n.rtl ? t._gridRight - e.startX : e.startX - t._gridLeft) / t._colWidth),
                            v = fe((n.rtl ? t._gridRight - h : h - t._gridLeft) / t._colWidth),
                            f = u ? p % m : fe(p / m),
                            g = u ? v % m : fe(v / m),
                            b = u ? fe(v / m) : v % m,
                            y = e.create ? t._tempEvent : e.event,
                            x = y.startDate,
                            D = y.endDate,
                            T = n.showAllDay && e.endY < t._allDayBottom,
                            C = t._time,
                            S = fe((C * _) / t._colHeight),
                            w = t._resources[b].id,
                            k = y.allDay,
                            M = +D - +x,
                            E = x,
                            N = D,
                            L = g - f;
                        if (e.drag || e.isExternal) {
                            if (((k = T), y.allDay && !T)) {
                                var I = fe((C * (d - t._colTop)) / t._colHeight),
                                    H = is(gs(x, L)),
                                    O = new Date(+new Date(1970, 0, 1) + t._startTime + I);
                                E = bs(new Date(H.getFullYear(), H.getMonth(), H.getDate(), O.getHours(), O.getMinutes()), r);
                            } else E = bs(new Date(+gs(x, L) + (k ? 0 : S)), r);
                            999 === D.getMilliseconds() && (M += 1), (N = new Date(+E + M));
                        } else {
                            var V = v - p,
                                Y = e.create ? (0 === V ? _ > 0 : V > 0) : "end" === e.direction,
                                P = os(x, D),
                                F = e.resource || (i && i.resource) || w;
                            F !== w && i && i.draggedEvent && (L = os(i.draggedEvent.startDate, i.draggedEvent.endDate) * (Y ? 1 : -1)),
                                Y
                                    ? ((a = gs(D, Math.max(-P, L))), (N = bs(new Date(+a + (k ? 0 : S)), r)), !k && (ns(N) > t._endTime + 1 || N >= gs(is(a), 1)) && (N = new Date(+is(a) + t._endTime + 1)))
                                    : ((a = gs(x, Math.min(P, L))), (E = bs(new Date(+a + (k ? 0 : S)), r)), !k && (ns(E) < t._startTime || E < is(a)) && (E = new Date(+is(a) + t._startTime))),
                                (w = F),
                                k && N < E && (Y ? (N = new Date(E)) : (E = new Date(N))),
                                !k && (N < E || Math.abs(+N - +E) < 9e5) && (Y ? (N = new Date(+E + 9e5)) : (E = new Date(+N - 9e5)));
                        }
                        if ((ns(N) || (N = new Date(+N - 1)), t._tempStart !== +E || t._tempEnd !== +N || t._tempAllDay !== k || t._tempResource !== w)) {
                            var R = s({}, y);
                            (R.startDate = E),
                                (R.endDate = N),
                                (R.start = ps(o, E)),
                                (R.end = ps(o, N)),
                                (R.allDay = k),
                                (t._tempStart = +E),
                                (t._tempEnd = +N),
                                (t._tempAllDay = k),
                                (t._tempResource = w),
                                t.setState({ dragData: { draggedDates: t._getDragDates(R, w), draggedEvent: R, originDates: i && i.originDates, resource: w } });
                        }
                    }),
                    (t._onEventDragEnd = function (e) {
                        var a = t.s,
                            n = e.create,
                            s = t.state,
                            i = s.dragData;
                        if ((n && !i && ((i = {}).draggedEvent = t._tempEvent), i && i.draggedEvent)) {
                            var r = e.event,
                                o = i.draggedEvent,
                                l = o.startDate,
                                c = o.endDate,
                                h = o.allDay,
                                d = o.original,
                                u = d.resource,
                                m = e.resource,
                                _ = i.resource,
                                p = n || +l != +r.startDate || +c != +r.endDate || h !== r.allDay || m !== _,
                                v = u,
                                f = {};
                            if (m !== _ && !t._isSingleResource)
                                if (oe(u) && u.length && _) {
                                    var g = u.indexOf(m);
                                    -1 === u.indexOf(_) && (v = u.slice()).splice(g, 1, _);
                                } else v = _;
                            if (o.resource && a.resources)
                                if (oe(v))
                                    for (var b = 0, y = v; b < y.length; b++) {
                                        var x = y[b];
                                        t._invalids[x] && (f[x] = t._invalids[x]);
                                    }
                                else t._invalids[_] && (f[_] = t._invalids[_] || {});
                            else f = t._invalids;
                            var D = !p || a.onEventDragEnd({ action: e.action || (s.dragData ? "drag" : "click"), collision: Cr(f, l, c, h, a.invalidateEvent), create: n, domEvent: e.domEvent, event: o, resource: v, source: "schedule" }),
                                T = s.isTouchDrag && (!n || D);
                            if (D && T && m !== _ && !d.color) {
                                var C = t._resources.find(function (e) {
                                        return e.id === _;
                                    }),
                                    S = C && C.color;
                                S && ((o.style.background = S), (o.style.color = Mt(S)));
                            }
                            t.setState({ dragData: T ? { draggedEvent: o, originDates: D ? t._getDragDates(o, _) : i.originDates } : ae, isTouchDrag: T }), (t._tempStart = 0), (t._tempEnd = 0), (t._tempAllDay = ae);
                        }
                    }),
                    (t._onExternalDrag = function (e) {
                        if (t.s.externalDrop)
                            switch (e.eventName) {
                                case "onDragModeOff":
                                    t._onEventDragModeOff();
                                    break;
                                case "onDragModeOn":
                                    t._onEventDragModeOn(e);
                                    break;
                                case "onDragStart":
                                    t._onEventDragStart(e);
                                    break;
                                case "onDragMove":
                                    var a = e.clone;
                                    e.endY < t._gridBottom && e.endY > t._allDayTop && e.endX > t._gridLeft && e.endX < t._gridRight
                                        ? ((a.style.display = "none"), t._onEventDragMove(e), (t._onCalendar = !0))
                                        : t._onCalendar && ((a.style.display = "table"), t.setState({ dragData: {} }), (t._tempStart = 0), (t._tempEnd = 0), (t._tempAllDay = ae), (t._onCalendar = !1));
                                    break;
                                case "onDragEnd":
                                    e.endY < t._gridBottom && e.endY > t._allDayTop && e.endX > t._gridLeft && e.endX < t._gridRight ? t._onEventDragEnd(e) : t.setState({ dragData: ae, isTouchDrag: !1 });
                            }
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._isToday = function (e) {
                    return cs(new Date(e), new Date());
                }),
                (t.prototype._formatTime = function (e) {
                    var t = this.s.timeFormat;
                    return ps(/a/i.test(t) && this._stepLabel === Zn && e % Zn == 0 ? t.replace(/.[m]+/i, "") : t, new Date(+new Date(0, 0, 1) + e));
                }),
                (t.prototype._getLastDay = function (e) {
                    return this._groupByResource ? this._lastDay : gs(new Date(e), 1);
                }),
                (t.prototype._render = function (e, t) {
                    var a = this._prevS,
                        n = new Date(e.selected),
                        s = kr(e.timeLabelStep),
                        i = kr(e.timeCellStep),
                        r = e.groupBy !== a.groupBy || e.resources !== a.resources,
                        o = r,
                        l = this._startTime,
                        c = this._endTime;
                    if (e.startTime !== a.startTime || e.endTime !== a.endTime || e.timeLabelStep !== a.timeLabelStep || e.timeCellStep !== a.timeCellStep || this._startTime === ae || this._endTime === ae) {
                        var h = ms(e.startTime || "00:00"),
                            d = new Date(+ms(e.endTime || "00:00") - 1);
                        (this._startTime = l = ns(h)), (this._endTime = c = ns(d)), (this._time = c - l + 1), (this._timesBetween = de(fe(i / s) - 1)), (this._times = []);
                        for (var u = i * Gn, _ = fe(l / u) * u; _ <= c; _ += u) this._times.push(_);
                        o = !0;
                    }
                    var p = fe(l / Gn) % i,
                        v = (fe(c / Gn) % i) + 1,
                        f = e.startDay,
                        g = e.endDay;
                    if (e.selected !== a.selected || e.showDays !== a.showDays || e.type !== a.type || e.firstDay !== a.firstDay || e.getDay !== a.getDay || f !== a.startDay || g !== a.endDay || r) {
                        var b = "day" === e.type,
                            y = ls(n, e, f),
                            x = gs(y, g - f + 1 + (g < f ? 7 : 0)),
                            D = b ? is(n) : y,
                            T = b ? gs(D, 1) : x;
                        if (
                            ((this._resources = e.resources && 0 !== e.resources.length ? e.resources : [{ id: "mbsc-def" }]),
                            (this._isSingleResource = 1 === this._resources.length),
                            (this._groupByResource = ("date" !== e.groupBy && !b) || this._isSingleResource),
                            (this._days = os(D, T)),
                            (this._firstDay = D),
                            (this._lastDay = T),
                            (this._selectedDay = +is(n)),
                            (this._showTimeIndicator = b ? cs(new Date(), n) : D <= new Date() && T >= new Date()),
                            (this._shouldScroll = e.scroll),
                            (this._shouldAnimateScroll = a.selected !== ae),
                            e.showDays)
                        ) {
                            this._weekDays = [];
                            for (_ = is(y); _ < is(x); _.setDate(_.getDate() + 1)) this._weekDays.push({ day: e.getDay(_), timestamp: +is(_) });
                        }
                        o = !0;
                    }
                    (e.colorsMap !== a.colorsMap || o) && (this._colors = this._getColors(this._firstDay, this._lastDay, e.colorsMap)),
                        (e.eventMap === a.eventMap && !o && this._events) || (this._events = this._getEvents(this._firstDay, this._lastDay, e.eventMap)),
                        (e.invalidsMap !== a.invalidsMap || o) && (this._invalids = this._getInvalids(this._firstDay, this._lastDay, e.invalidsMap)),
                        (e.height !== a.height || e.width !== a.width || e.type !== a.type || o) && (this._shouldCheckSize = m && !!e.height && !!e.width),
                        (this._startCellStyle = p % i != 0 ? { height: (t.cellHeight || 50) * (((i - p) % i) / i) + "px" } : ae),
                        (this._endCellStyle = v % i != 0 ? { height: ((t.cellHeight || 50) * (v % i)) / i + "px" } : ae),
                        (this._stepCell = i * Gn),
                        (this._stepLabel = s * Gn),
                        (this._largeDayNames = t.dayNameWidth > 99),
                        (this._dayNames = t.dayNameWidth > 49 ? e.dayNamesShort : e.dayNamesMin);
                }),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        a,
                        n = this;
                    (this._unlisten = pn(this._el, {
                        onDoubleClick: function (e) {
                            var t = n.s;
                            a && t.clickToCreate && "single" !== t.clickToCreate && ((e.create = !0), n._onEventDragStart(e), n._onEventDragEnd(e));
                        },
                        onEnd: function (a) {
                            e && (a.domEvent.preventDefault(), (a.create = !0), n._onEventDragEnd(a)), clearTimeout(n._touchTimer), (e = !1), (t = !1);
                        },
                        onMove: function (a) {
                            var s = n.s;
                            (a.create = !0),
                                e && s.dragToCreate
                                    ? (a.domEvent.preventDefault(), n._onEventDragMove(a))
                                    : t && s.dragToCreate && (Math.abs(a.deltaX) > 7 || Math.abs(a.deltaY) > 7)
                                    ? ((e = !0), n._onEventDragStart(a))
                                    : clearTimeout(n._touchTimer);
                        },
                        onStart: function (s) {
                            var i = n.s;
                            if (!e && (i.dragToCreate || i.clickToCreate)) {
                                var r = (s.domEvent.target && s.domEvent.target.classList) || [];
                                (a = r.contains("mbsc-schedule-item") || r.contains("mbsc-schedule-all-day-item")) &&
                                    ((s.create = !0),
                                    s.isTouch && i.dragToCreate
                                        ? (n._touchTimer = setTimeout(function () {
                                              n._onEventDragStart(s), n._onEventDragModeOn(s), (e = !0);
                                          }, 350))
                                        : "single" === i.clickToCreate
                                        ? ((e = !0), n._onEventDragStart(s))
                                        : (t = !s.isTouch));
                            }
                        },
                    })),
                        (this._unsubscribe = mr(this._onExternalDrag));
                }),
                (t.prototype._updated = function () {
                    var e = this;
                    if (
                        (this._shouldScroll &&
                            (setTimeout(function () {
                                e._scrollToTime(e._shouldAnimateScroll);
                            }),
                            (this._shouldScroll = !1)),
                        this._shouldCheckSize)
                    ) {
                        this._shouldCheckSize = !1;
                        var t = this._el.querySelector(".mbsc-schedule-column-inner"),
                            a = (this._stepCell * t.offsetHeight) / this._time,
                            n = this._el.querySelector(".mbsc-schedule-header-item"),
                            s = n ? n.offsetWidth : 0,
                            i = this._scrollCont;
                        setTimeout(function () {
                            e.setState({ cellHeight: a, dayNameWidth: s, hasScrollX: !!i && i.scrollWidth > i.clientWidth });
                        });
                    }
                }),
                (t.prototype._destroy = function () {
                    this._unlisten(), _r(this._unsubscribe);
                }),
                (t.prototype._getEvents = function (e, t, a) {
                    for (
                        var n = this,
                            s = this.s,
                            i = [],
                            r = {},
                            o = wr(a, s.resources),
                            l = {},
                            c = [],
                            h = function (a) {
                                var h = a.id;
                                d._groupByResource && ((c = []), i.push(c), (l = Ws(o[h], e, t, 0, d._days, !0, s.startDay)));
                                for (
                                    var u = function (e) {
                                            var t = +is(e);
                                            d._groupByResource || (r[t] ? (c = r[t]) : ((c = []), (r[t] = c), i.push(c)), (l = Ws(o[h], e, gs(e, 1), 0, d._days, !0, s.startDay, s.eventOrder)));
                                            var u = Us(o[h][t]) || [],
                                                m = { allDay: [], day: s.getDay(e), events: [], resource: h, timestamp: t };
                                            l[t].data.forEach(function (e) {
                                                var i = e.event,
                                                    r = e.showText,
                                                    o = e.width;
                                                if (i) {
                                                    var l = n._getEventData(i, t, a);
                                                    (l.position = { paddingLeft: s.rtl ? o / 100 - 1 : "", paddingRight: s.rtl ? "" : o / 100 - 1, width: o + "%" }), m.allDay.push({ event: l, showText: r });
                                                }
                                            });
                                            for (var _ = [], p = {}, v = 0, f = u; v < f.length; v++) {
                                                var g = f[v];
                                                if (!g.allDay) {
                                                    var b = d._getEventData(g, t, a),
                                                        y = d._getEventPos(b, e);
                                                    if (y) {
                                                        (b.cssClass = y.cssClass), (b.position = y.position);
                                                        for (var x = !1, D = 0, T = _; D < T.length; D++) {
                                                            for (var C = 0, S = !1, w = void 0, k = 0, M = (P = T[D]); k < M.length; k++) {
                                                                for (var E = M[k], N = !1, L = 0, I = E; L < I.length; L++) {
                                                                    var H = I[L];
                                                                    ss(H.startDate, H.endDate, y.startDate, y.endDate) && ((N = !0), (S = !0), w ? (p[b.id] = p[b.id] || C) : (p[H.id] = C + 1));
                                                                }
                                                                N || w || (w = E), C++;
                                                            }
                                                            S && (w ? w.push(b) : P.push([b]), (x = !0));
                                                        }
                                                        x || ((p[b.id] = 0), _.push([[b]])), m.events.push(b);
                                                    }
                                                }
                                            }
                                            for (
                                                var O = function (e) {
                                                        var t = e.length;
                                                        e.forEach(function (e, a) {
                                                            for (var n = 0, i = e; n < i.length; n++) {
                                                                var r = i[n],
                                                                    o = (((p[r.id] || t) - a) / t) * 100;
                                                                (r.position.width = o + "%"), (r.position[s.rtl ? "right" : "left"] = (100 * a) / t + "%"), (r.position[s.rtl ? "left" : "right"] = "auto");
                                                            }
                                                        });
                                                    },
                                                    V = 0,
                                                    Y = _;
                                                V < Y.length;
                                                V++
                                            ) {
                                                var P;
                                                O((P = Y[V]));
                                            }
                                            c.push(m);
                                        },
                                        m = is(e);
                                    m < t;
                                    m.setDate(m.getDate() + 1)
                                )
                                    u(m);
                            },
                            d = this,
                            u = 0,
                            m = this._resources;
                        u < m.length;
                        u++
                    ) {
                        h(m[u]);
                    }
                    return i;
                }),
                (t.prototype._getColors = function (e, t, a) {
                    for (var n = {}, s = wr(a, this.s.resources), i = 0, r = this._resources; i < r.length; i++)
                        for (var o = r[i], l = o.id, c = is(e); c < t; c.setDate(c.getDate() + 1)) {
                            for (var h = +is(c), d = { colors: [] }, u = 0, m = s[l][h] || []; u < m.length; u++) {
                                var _ = m[u],
                                    p = this._getEventData(_, h, o);
                                if (p.allDay) d.allDay = p;
                                else {
                                    var v = this._getEventPos(p, c);
                                    v &&
                                        ((p.position = v.position),
                                        (p.cssClass = ""),
                                        ns(v.startDate) <= this._startTime && (p.cssClass += " mbsc-schedule-color-start"),
                                        ns(v.endDate) >= this._endTime && (p.cssClass += " mbsc-schedule-color-end"),
                                        d.colors.push(p));
                                }
                                p.position.background = _.background;
                            }
                            n[l] || (n[l] = {}), (n[l][h] = d);
                        }
                    return n;
                }),
                (t.prototype._getInvalids = function (e, t, a) {
                    for (var n = this.s, s = {}, i = wr(a, n.resources), r = 0, o = this._resources; r < o.length; r++)
                        for (var l = o[r], c = l.id, h = is(e); h < t; h.setDate(h.getDate() + 1)) {
                            var d = +is(h),
                                u = i[c][d] || [],
                                m = { invalids: [] };
                            (+h < n.minDate || +h > n.maxDate) && ((m.allDay = { allDay: !0, endDate: new Date(h), startDate: new Date(h) }), m.invalids.push(m.allDay));
                            for (var _ = 0, p = u; _ < p.length; _++) {
                                var v = p[_];
                                if (le(v) || us(v)) {
                                    var f = ms(v);
                                    v = { allDay: !0, end: new Date(f), start: f };
                                }
                                var g = this._getEventData(v, +h, l);
                                if (((g.cssClass = ""), !g.allDay)) {
                                    var b = this._getEventPos(g, h);
                                    b &&
                                        (0 === ns(b.startDate) && new Date(+b.endDate + 1) >= gs(h, 1)
                                            ? (g.allDay = !0)
                                            : ((g.position = b.position),
                                              ns(b.startDate) <= this._startTime && (g.cssClass += " mbsc-schedule-invalid-start"),
                                              ns(b.endDate) >= this._endTime && (g.cssClass += " mbsc-schedule-invalid-end"),
                                              m.invalids.push(g)));
                                }
                                if (g.allDay) {
                                    (m.allDay = g), (m.invalids = [g]);
                                    break;
                                }
                            }
                            s[c] || (s[c] = {}), (s[c][d] = m);
                        }
                    return s;
                }),
                (t.prototype._getDragDates = function (e, t) {
                    for (var a, n = {}, i = e.startDate, r = is(gs(e.endDate, 1)), o = is(i); o < r; o.setDate(o.getDate() + 1)) {
                        var l = s({}, e),
                            c = this._getEventPos(e, o);
                        c && ((l.cssClass = c.cssClass), (l.start = c.start), (l.end = c.end), (l.position = c.position), (n[+is(o)] = l));
                    }
                    return ((a = {})[t] = n), a;
                }),
                (t.prototype._getEventPos = function (e, t) {
                    var a = is(t),
                        n = "week" === this.s.type,
                        s = e.start,
                        i = e.startDate,
                        r = e.end,
                        o = e.endDate;
                    if (e.allDay) {
                        if (cs(a, i) || cs(a, this._firstDay)) {
                            var l = this.s.startDay,
                                c = a.getDay(),
                                h = l - c > 0 ? 7 : 0;
                            return { endDate: o, position: { width: (!cs(i, o) && n ? 100 * Math.min(os(a, o) + 1, this._days + l - c - h) : 100) + "%" }, startDate: i };
                        }
                    } else if ((i < a && ((s = ""), (i = new Date(a))), o >= is(gs(a, 1)) && ((r = ""), (o = new Date(new Date(a).setHours(23, 59, 59, 999)))), ns(i) < this._endTime && ns(o) > this._startTime)) {
                        var d = (function (e, t, a, n, s) {
                            var i = ns(e),
                                r = ns(t);
                            return n > i && (i = n), s < r && (r = s), (100 * (r - i)) / a;
                        })(i, o, this._time, this._startTime, this._endTime);
                        return { cssClass: d < 2 ? " mbsc-schedule-event-small-height" : "", end: r, endDate: o, position: { height: d + "%", top: Sr(i, this._startTime, this._time) + "%", width: "100%" }, start: s, startDate: i };
                    }
                }),
                (t.prototype._getEventData = function (e, t, a) {
                    var n = this.s,
                        s = gr(e, t, !0, n.timeFormat, n.allDayText, "", a);
                    return (s.html = this._safeHtml(s.html)), 0 === ns(s.endDate) && s.endDate.setHours(23, 59, 59, 999), 59 === s.endDate.getMinutes() && (s.endDate.setSeconds(59), s.endDate.setMilliseconds(999)), s;
                }),
                (t.prototype._scrollToTime = function (e) {
                    var t = this._scrollCont;
                    if (t) {
                        var a = new Date(this.s.selected);
                        a.setHours(a.getHours(), 0);
                        var n = Sr(a, this._startTime, this._time),
                            s = t.querySelector(".mbsc-schedule-column-inner");
                        Nt(t, (s.offsetHeight * n) / 100, e);
                    }
                }),
                t
            );
        })(Va),
        Er = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e) {
                    return ga(
                        "div",
                        { className: this._cssClass, style: { top: this._pos.top } },
                        ga("div", { className: "mbsc-schedule-time-indicator-time" + this._theme + this._rtl }, this._time),
                        e.showDayIndicator &&
                            ga("div", { className: "mbsc-schedule-time-indicator mbsc-schedule-time-indicator-" + e.scheduleType + this._theme, style: { left: this._pos.left, right: this._pos.right, width: this._pos.width } })
                    );
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    n(t, e),
                    (t.prototype._mounted = function () {
                        var e = this;
                        clearInterval(this._timer),
                            (this._timer = setInterval(function () {
                                e._zone
                                    ? e._zone.runOutsideAngular(function () {
                                          e.forceUpdate();
                                      })
                                    : e.forceUpdate();
                            }, 1e4));
                    }),
                    (t.prototype._destroy = function () {
                        clearInterval(this._timer);
                    }),
                    (t.prototype._render = function (e) {
                        var t = "day" === e.scheduleType,
                            a = t ? 0 : (100 * (new Date().getDay() - e.startDay)) / (e.displayedDays || 7) + "%",
                            n = ns(new Date());
                        (this._cssClass = "mbsc-schedule-time-indicator-cont" + this._theme + this._rtl + (n < e.startTime || n > e.startTime + e.displayedTime ? " mbsc-hidden" : "")),
                            (this._time = ps(e.timeFormat, new Date(), e)),
                            (this._pos = { left: e.rtl ? "" : a, right: e.rtl ? a : "", top: (100 * (n - e.startTime)) / e.displayedTime + "%", width: t ? "100%" : 100 / e.displayedDays + "%" });
                    }),
                    t
                );
            })(Va)
        ),
        Nr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype._template = function (e, t) {
                    return ga(
                        "div",
                        { ref: this._setEl, className: this._cssClass, onClick: this._onClick },
                        ga("div", { className: "mbsc-schedule-header-dayname" + this._theme + (e.selected ? " mbsc-selected" : "") + (e.isToday ? " mbsc-schedule-header-dayname-curr" : "") }, e.dayNames[(e.index + e.firstDay) % 7]),
                        ga("div", { className: "mbsc-schedule-header-day" + this._theme + this._rtl + (e.selected ? " mbsc-selected" : "") + (e.isToday ? " mbsc-schedule-header-day-today" : "") + (t.hasHover ? " mbsc-hover" : "") }, e.day)
                    );
                }),
                t
            );
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._onClick = function () {
                            var e = t.s;
                            e.selectable && e.onClick(e.timestamp);
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    (t.prototype._mounted = function () {
                        var e = this;
                        this._unlisten = pn(this._el, {
                            onHoverIn: function () {
                                e.s.selectable && e.setState({ hasHover: !0 });
                            },
                            onHoverOut: function () {
                                e.s.selectable && e.setState({ hasHover: !1 });
                            },
                        });
                    }),
                    (t.prototype._destroy = function () {
                        this._unlisten && this._unlisten();
                    }),
                    (t.prototype._render = function (e, t) {
                        this._cssClass = "mbsc-schedule-header-item" + this._theme + this._rtl + this._hb + (e.largeNames ? " mbsc-schedule-header-item-large" : "") + (t.hasHover ? " mbsc-hover" : "");
                    }),
                    t
                );
            })(Va)
        ),
        Lr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._setCont = function (e) {
                        t._scrollCont = e;
                    }),
                    (t._setTimeCont = function (e) {
                        t._timeCont = e;
                    }),
                    (t._setAllDayCont = function (e) {
                        t._allDayCont = e;
                    }),
                    (t._setHeaderCont = function (e) {
                        t._headerCont = e;
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._template = function (e, t) {
                    var a = this,
                        n = this._colors,
                        s = t.dragData,
                        i = s && s.draggedEvent && s.draggedEvent.id,
                        r = this._invalids,
                        o = this._hb,
                        l = this._rtl,
                        c = this._times,
                        h = this._startTime,
                        d = this._endTime,
                        u = this._startCellStyle,
                        m = this._endCellStyle,
                        _ = this._stepLabel,
                        p = this._theme,
                        v = this._isSingleResource,
                        f = e.resources,
                        g = " mbsc-flex-1-1 mbsc-schedule-resource-group" + p + l,
                        b = function (t) {
                            var n,
                                s = t.name;
                            return (
                                e.renderResource && le((s = e.renderResource(t))) && ((n = a._safeHtml(s)), (a._shouldEnhance = !0)),
                                s && ga("div", { key: t.id, dangerouslySetInnerHTML: n, className: "mbsc-schedule-resource-title mbsc-schedule-resource-title-date" + p + l + o }, s)
                            );
                        };
                    return ga(
                        "div",
                        { ref: this._setEl, className: "mbsc-flex-col mbsc-schedule-wrapper" + p },
                        ga(
                            "div",
                            { className: "mbsc-flex mbsc-schedule-header" + p + l + o },
                            ga("div", { className: "mbsc-schedule-time-col mbsc-schedule-time-col-empty" + p + l + o }),
                            ga(
                                "div",
                                { className: "mbsc-schedule-header-wrapper" },
                                ga(
                                    "div",
                                    { ref: this._setHeaderCont, className: "mbsc-flex" },
                                    "day" === e.type
                                        ? ga(
                                              "div",
                                              { className: g },
                                              ga(
                                                  "div",
                                                  { className: "mbsc-flex" },
                                                  e.showDays &&
                                                      this._weekDays.map(function (t, n) {
                                                          var s = t.timestamp;
                                                          return ga(Nr, {
                                                              key: s,
                                                              day: t.day,
                                                              dayNames: a._dayNames,
                                                              firstDay: e.startDay,
                                                              index: n,
                                                              isToday: a._isToday(s),
                                                              largeNames: a._largeDayNames,
                                                              onClick: e.onWeekDayClick,
                                                              rtl: e.rtl,
                                                              selectable: !0,
                                                              selected: a._selectedDay === s,
                                                              theme: e.theme,
                                                              timestamp: s,
                                                          });
                                                      })
                                              ),
                                              f &&
                                                  ga(
                                                      "div",
                                                      { className: "mbsc-flex" },
                                                      f.map(function (e) {
                                                          return b(e);
                                                      })
                                                  )
                                          )
                                        : this._events.map(function (t, n) {
                                              return ga(
                                                  "div",
                                                  { className: g, key: n },
                                                  a._groupByResource
                                                      ? ga(
                                                            jt,
                                                            null,
                                                            b(a._resources[n]),
                                                            ga(
                                                                "div",
                                                                { className: "mbsc-flex" },
                                                                e.showDays &&
                                                                    a._weekDays.map(function (t, n) {
                                                                        var s = t.timestamp;
                                                                        return ga(Nr, {
                                                                            key: s,
                                                                            day: t.day,
                                                                            dayNames: a._dayNames,
                                                                            firstDay: e.startDay,
                                                                            index: n,
                                                                            isToday: v && a._isToday(s),
                                                                            largeNames: a._largeDayNames,
                                                                            onClick: e.onWeekDayClick,
                                                                            rtl: e.rtl,
                                                                            selectable: !1,
                                                                            selected: v && a._isToday(s),
                                                                            theme: e.theme,
                                                                            timestamp: s,
                                                                        });
                                                                    })
                                                            )
                                                        )
                                                      : ga(
                                                            jt,
                                                            null,
                                                            e.showDays &&
                                                                ga(Nr, {
                                                                    key: t[0].timestamp,
                                                                    day: t[0].day,
                                                                    dayNames: a._dayNames,
                                                                    firstDay: e.startDay,
                                                                    index: n,
                                                                    isToday: v && a._isToday(t[0].timestamp),
                                                                    largeNames: a._largeDayNames,
                                                                    onClick: e.onWeekDayClick,
                                                                    rtl: e.rtl,
                                                                    selectable: !1,
                                                                    selected: a._isToday(t[0].timestamp),
                                                                    theme: e.theme,
                                                                    timestamp: t[0].timestamp,
                                                                }),
                                                            f &&
                                                                ga(
                                                                    "div",
                                                                    { className: "mbsc-flex" },
                                                                    f.map(function (e) {
                                                                        return b(e);
                                                                    })
                                                                )
                                                        )
                                              );
                                          })
                                )
                            ),
                            ga("div", { className: "mbsc-schedule-fake-scroll-y" })
                        ),
                        ga(
                            "div",
                            { className: (t.showShadow ? "mbsc-schedule-all-day-wrapper-shadow" : "") + p },
                            e.showAllDay &&
                                ga(
                                    "div",
                                    { className: "mbsc-schedule-all-day-wrapper" + p + o },
                                    ga(
                                        "div",
                                        { className: "mbsc-flex mbsc-schedule-all-day" + p },
                                        ga("div", { className: "mbsc-schedule-time-col" + p + l }, ga("div", { className: "mbsc-schedule-all-day-text" + p }, e.allDayText)),
                                        ga(
                                            "div",
                                            { className: "mbsc-schedule-all-day-group-wrapper" },
                                            ga(
                                                "div",
                                                { ref: this._setAllDayCont, className: "mbsc-flex" },
                                                this._events.map(function (t, c) {
                                                    return ga(
                                                        "div",
                                                        { className: "mbsc-flex" + g, key: c },
                                                        t.map(function (t, c) {
                                                            var u = t.resource,
                                                                m = t.timestamp;
                                                            return ga(
                                                                "div",
                                                                { key: c + "-" + m, className: "mbsc-schedule-all-day-item" + p + l + o },
                                                                t.allDay &&
                                                                    t.allDay.map(function (t) {
                                                                        var n = t.event;
                                                                        return t.showText
                                                                            ? ga(Tr, {
                                                                                  drag: e.dragToMove,
                                                                                  event: n,
                                                                                  gridEndTime: d,
                                                                                  gridStartTime: h,
                                                                                  key: n.uid,
                                                                                  inactive: i === n.id,
                                                                                  lastDay: a._getLastDay(m),
                                                                                  onClick: e.onEventClick,
                                                                                  onDoubleClick: e.onEventDoubleClick,
                                                                                  onRightClick: e.onEventRightClick,
                                                                                  onDelete: e.onEventDelete,
                                                                                  onDragStart: a._onEventDragStart,
                                                                                  onDragMove: a._onEventDragMove,
                                                                                  onDragEnd: a._onEventDragEnd,
                                                                                  onDragModeOn: a._onEventDragModeOn,
                                                                                  onDragModeOff: a._onEventDragModeOff,
                                                                                  render: e.renderEvent,
                                                                                  renderContent: e.renderEventContent,
                                                                                  resize: e.dragToResize,
                                                                                  resource: u,
                                                                                  rtl: e.rtl,
                                                                                  theme: e.theme,
                                                                                  timestamp: m,
                                                                              })
                                                                            : ga(
                                                                                  "div",
                                                                                  { key: n.uid, className: "mbsc-schedule-event mbsc-schedule-event-all-day mbsc-schedule-event-all-day-placeholder" },
                                                                                  ga("div", { className: "mbsc-schedule-event-all-day-inner" + p })
                                                                              );
                                                                    }),
                                                                s &&
                                                                    s.originDates &&
                                                                    s.originDates[u] &&
                                                                    s.originDates[u][m] &&
                                                                    s.originDates[u][m].allDay &&
                                                                    ga(Tr, {
                                                                        drag: e.dragToMove,
                                                                        event: s.originDates[u][m],
                                                                        gridEndTime: d,
                                                                        gridStartTime: h,
                                                                        hidden: s && !!s.draggedDates,
                                                                        isDrag: !0,
                                                                        lastDay: a._lastDay,
                                                                        onDragStart: a._onEventDragStart,
                                                                        onDragMove: a._onEventDragMove,
                                                                        onDragEnd: a._onEventDragEnd,
                                                                        onDragModeOff: a._onEventDragModeOff,
                                                                        render: e.renderEvent,
                                                                        renderContent: e.renderEventContent,
                                                                        resize: e.dragToResize,
                                                                        resource: u,
                                                                        rtl: e.rtl,
                                                                        theme: e.theme,
                                                                        timestamp: m,
                                                                    }),
                                                                s &&
                                                                    s.draggedDates &&
                                                                    s.draggedDates[u] &&
                                                                    s.draggedDates[u][m] &&
                                                                    s.draggedDates[u][m].allDay &&
                                                                    ga(Tr, {
                                                                        drag: e.dragToMove,
                                                                        event: s.draggedDates[u][m],
                                                                        gridEndTime: d,
                                                                        gridStartTime: h,
                                                                        isDrag: !0,
                                                                        lastDay: a._lastDay,
                                                                        render: e.renderEvent,
                                                                        renderContent: e.renderEventContent,
                                                                        resize: e.dragToResize,
                                                                        resource: u,
                                                                        rtl: e.rtl,
                                                                        theme: e.theme,
                                                                        timestamp: m,
                                                                    }),
                                                                r &&
                                                                    r[u] &&
                                                                    r[u][m] &&
                                                                    r[u][m].allDay &&
                                                                    ga("div", { className: "mbsc-schedule-invalid mbsc-schedule-invalid-all-day" + p }, ga("div", { className: "mbsc-schedule-invalid-text" }, r[u][m].allDay.title)),
                                                                n && n[u] && n[u][m] && n[u][m].allDay && ga("div", { className: "mbsc-schedule-invalid mbsc-schedule-invalid-allday" + p, style: n[u][m].allDay.position })
                                                            );
                                                        })
                                                    );
                                                })
                                            )
                                        )
                                    )
                                )
                        ),
                        ga(
                            "div",
                            { className: "mbsc-flex mbsc-schedule-grid-wrapper" + p },
                            ga("div", { dangerouslySetInnerHTML: this.textParam }),
                            ga(
                                "div",
                                { className: "mbsc-flex-col mbsc-schedule-time-col mbsc-schedule-time-cont" + p + l, ref: this._setTimeCont },
                                ga(
                                    "div",
                                    { className: "mbsc-flex mbsc-schedule-time-cont-inner" },
                                    ga(
                                        "div",
                                        { className: "mbsc-flex-col mbsc-flex-1-1" },
                                        ga(
                                            "div",
                                            { className: "mbsc-flex-col mbsc-schedule-time-cont-pos" },
                                            c.map(function (e, t) {
                                                var n = c.length - 1;
                                                return ga(
                                                    "div",
                                                    {
                                                        key: t,
                                                        className:
                                                            "mbsc-flex-col mbsc-schedule-time-wrapper" + p + l + (t === n ? " mbsc-schedule-time-wrapper-end" : "") + ((0 === t && u) || (t === n && m) ? " mbsc-schedule-item-fixed" : ""),
                                                        style: 0 === t ? u : t === n ? m : {},
                                                    },
                                                    ga("div", { className: "mbsc-flex-1-1 mbsc-schedule-time" + p + l }, 0 === t || e % _ == 0 ? a._formatTime(0 === t ? h : e) : ""),
                                                    a._timesBetween.map(function (t, n) {
                                                        var s = e + (n + 1) * _;
                                                        return s > h && s < d && ga("div", { key: n, className: "mbsc-flex-1-1 mbsc-schedule-time" + p + l }, a._formatTime(s));
                                                    }),
                                                    t === n && ga("div", { className: "mbsc-schedule-time mbsc-schedule-time-end" + p + l }, a._formatTime(d + 1))
                                                );
                                            }),
                                            this._showTimeIndicator &&
                                                ga(Er, {
                                                    displayedTime: this._time,
                                                    displayedDays: this._days,
                                                    rtl: e.rtl,
                                                    scheduleType: e.type,
                                                    showDayIndicator: v,
                                                    startDay: e.startDay,
                                                    startTime: h,
                                                    theme: e.theme,
                                                    timeFormat: e.timeFormat,
                                                })
                                        ),
                                        t.hasScrollX && ga("div", { className: "mbsc-schedule-fake-scroll-x" })
                                    ),
                                    ga("div", { className: "mbsc-schedule-fake-scroll-y" })
                                )
                            ),
                            ga(
                                "div",
                                { ref: this._setCont, className: "mbsc-flex-col mbsc-schedule-grid-scroll" + p, onScroll: this._onScroll },
                                ga(
                                    "div",
                                    { className: "mbsc-flex mbsc-schedule-grid" },
                                    this._events.map(function (t, _) {
                                        return ga(
                                            "div",
                                            { className: "mbsc-flex" + g, key: _ },
                                            t.map(function (t, _) {
                                                var v = t.timestamp,
                                                    f = t.resource;
                                                return ga(
                                                    "div",
                                                    { key: _ + "-" + v, className: "mbsc-flex-col mbsc-schedule-column" + p + l + o },
                                                    ga(
                                                        "div",
                                                        { className: "mbsc-flex-col mbsc-schedule-column-inner" + p + l + o },
                                                        t.events &&
                                                            t.events.map(function (t) {
                                                                return ga(Tr, {
                                                                    drag: e.dragToMove,
                                                                    event: t,
                                                                    inactive: i === t.id,
                                                                    key: t.uid,
                                                                    gridEndTime: d,
                                                                    gridStartTime: h,
                                                                    onClick: e.onEventClick,
                                                                    onDoubleClick: e.onEventDoubleClick,
                                                                    onRightClick: e.onEventRightClick,
                                                                    onDelete: e.onEventDelete,
                                                                    onDragStart: a._onEventDragStart,
                                                                    onDragMove: a._onEventDragMove,
                                                                    onDragEnd: a._onEventDragEnd,
                                                                    onDragModeOn: a._onEventDragModeOn,
                                                                    onDragModeOff: a._onEventDragModeOff,
                                                                    render: e.renderEvent,
                                                                    renderContent: e.renderEventContent,
                                                                    resize: e.dragToResize,
                                                                    resource: f,
                                                                    rtl: e.rtl,
                                                                    theme: e.theme,
                                                                    timestamp: v,
                                                                });
                                                            }),
                                                        s &&
                                                            s.originDates &&
                                                            s.originDates[f] &&
                                                            s.originDates[f][v] &&
                                                            !s.originDates[f][v].allDay &&
                                                            ga(Tr, {
                                                                drag: e.dragToMove,
                                                                event: s.originDates[f][v],
                                                                gridEndTime: d,
                                                                gridStartTime: h,
                                                                hidden: s && !!s.draggedDates,
                                                                isDrag: !0,
                                                                onDragStart: a._onEventDragStart,
                                                                onDragMove: a._onEventDragMove,
                                                                onDragEnd: a._onEventDragEnd,
                                                                onDragModeOff: a._onEventDragModeOff,
                                                                render: e.renderEvent,
                                                                renderContent: e.renderEventContent,
                                                                resize: e.dragToResize,
                                                                resource: f,
                                                                rtl: e.rtl,
                                                                theme: e.theme,
                                                                timestamp: v,
                                                            }),
                                                        s &&
                                                            s.draggedDates &&
                                                            s.draggedDates[f] &&
                                                            s.draggedDates[f][v] &&
                                                            !s.draggedDates[f][v].allDay &&
                                                            ga(Tr, {
                                                                drag: e.dragToMove,
                                                                gridEndTime: d,
                                                                gridStartTime: h,
                                                                event: s.draggedDates[f][v],
                                                                isDrag: !0,
                                                                render: e.renderEvent,
                                                                renderContent: e.renderEventContent,
                                                                resize: e.dragToResize,
                                                                resource: f,
                                                                rtl: e.rtl,
                                                                theme: e.theme,
                                                                timestamp: v,
                                                            }),
                                                        r &&
                                                            r[f] &&
                                                            r[f][v] &&
                                                            r[f][v].invalids.map(function (e, t) {
                                                                return ga(
                                                                    "div",
                                                                    { key: t, className: "mbsc-schedule-invalid" + e.cssClass + p, style: e.position },
                                                                    ga("div", { className: "mbsc-schedule-invalid-text" }, r[f][v].allDay ? "" : e.title || "")
                                                                );
                                                            }),
                                                        n &&
                                                            n[f] &&
                                                            n[f][v] &&
                                                            n[f][v].colors.map(function (e, t) {
                                                                return ga("div", { key: t, className: "mbsc-schedule-color" + e.cssClass + p, style: e.position });
                                                            }),
                                                        c.map(function (t, a) {
                                                            var n = (function (e, t) {
                                                                return new Date(+new Date(e) + t);
                                                            })(v, t);
                                                            return ga("div", {
                                                                key: a,
                                                                className:
                                                                    "mbsc-schedule-item" + p + o + (a === c.length - 1 ? " mbsc-schedule-item-last" : "") + ((0 === a && u) || (a === c.length - 1 && m) ? " mbsc-schedule-item-fixed" : ""),
                                                                onClick: function (t) {
                                                                    return e.onCellClick({ date: n, domEvent: t, resource: f });
                                                                },
                                                                onDoubleClick: function (t) {
                                                                    return e.onCellDoubleClick({ date: n, domEvent: t, resource: f });
                                                                },
                                                                onContextMenu: function (t) {
                                                                    return e.onCellRightClick({ date: n, domEvent: t, resource: f });
                                                                },
                                                                style: 0 === a ? u : c.length - 1 === a ? m : {},
                                                            });
                                                        })
                                                    )
                                                );
                                            })
                                        );
                                    })
                                )
                            )
                        ),
                        s && !t.isTouchDrag && ga("div", { className: "mbsc-calendar-dragging" })
                    );
                }),
                (t.prototype._updated = function () {
                    e.prototype._updated.call(this), this._shouldEnhance && Sa && (Sa(this._el), (this._shouldEnhance = !1));
                }),
                t
            );
        })(Mr),
        Ir = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._instanceService = new _i()),
                    (t._setList = function (e) {
                        t._list = e;
                    }),
                    (t._setPopoverList = function (e) {
                        t._popoverList = e && e._el;
                    }),
                    (t._setEl = function (e) {
                        (t._el = e ? e._el || e : null), (t._calendarView = e), (t._instanceService.instance = t);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype._eventRenderer = function (e, t, a, n, s) {
                    var i,
                        r = this,
                        o = !this._colorEventList,
                        l = s ? "popover" : "agenda",
                        c = n.renderEventContent ? n.renderEventContent(e) : ga("div", { className: "mbsc-event-text" + this._theme, title: e.title, dangerouslySetInnerHTML: e.html });
                    if (le(c)) {
                        var h = { __html: c };
                        (c = ga("div", { className: "mbsc-event-content" + this._theme, dangerouslySetInnerHTML: h })), (this._shouldEnhance = !0);
                    } else c = ga("div", { className: "mbsc-event-content" + this._theme }, c);
                    var d = n.renderEvent
                        ? n.renderEvent(e)
                        : ga(
                              jt,
                              null,
                              o && ga("div", { className: "mbsc-event-color" + this._theme + this._rtl, style: e.style }),
                              c,
                              ga(
                                  "div",
                                  { className: "mbsc-event-time" + this._theme + this._rtl },
                                  e.allDayText && ga("div", { className: "mbsc-event-all-day" + this._theme }, e.allDayText),
                                  e.lastDay && ga("div", { className: "mbsc-event-until" + this._theme }, e.lastDay),
                                  e.start && ga("div", { className: "mbsc-event-start" + this._theme }, e.start),
                                  e.start && e.end && ga("div", { className: "mbsc-event-sep" + this._theme }, "-"),
                                  e.end && ga("div", { className: "mbsc-event-end" + this._theme }, e.end)
                              )
                          );
                    return (
                        le(d) && ((i = { __html: d }), (d = ae), (this._shouldEnhance = !0)),
                        ga(
                            hr,
                            {
                                className: "mbsc-event" + (o ? "" : " mbsc-colored-event"),
                                key: t,
                                actionable: n.actionableEvents,
                                dangerouslySetInnerHTML: i,
                                data: e.original,
                                drag: s && this._showEventLabels && n.dragToMove,
                                rtl: n.rtl,
                                style: o ? ae : e.style,
                                theme: n.theme,
                                themeVariant: n.themeVariant,
                                onClick: function (t) {
                                    return r._onEventClick({ date: a, domEvent: t, event: e.original, source: l });
                                },
                                onDoubleClick: function (t) {
                                    return r._onEventDoubleClick({ date: a, domEvent: t, event: e.original, source: l });
                                },
                                onContextMenu: function (t) {
                                    return r._onEventRightClick({ date: a, domEvent: t, event: e.original, source: l });
                                },
                                onDragEnd: this._onLabelUpdateEnd,
                                onDragModeOff: this._onLabelUpdateModeOff,
                                onDragModeOn: this._onLabelUpdateModeOn,
                                onDragMove: this._onLabelUpdateMove,
                                onDragStart: this._onLabelUpdateStart,
                            },
                            d
                        )
                    );
                }),
                (t.prototype._listRenderer = function () {
                    var e = this,
                        t = this.s,
                        a = t.theme,
                        n = this._listDays,
                        s = this.state.eventList;
                    return t.renderAgenda
                        ? this._eventListHTML === ae
                            ? t.renderAgenda(s, t, n)
                            : void 0
                        : ga(
                              dr,
                              { theme: a, themeVariant: t.themeVariant, rtl: t.rtl },
                              !s.length && ga("div", { className: "mbsc-event-list-empty" + this._theme }, t.noEventsText),
                              s.map(function (s, i) {
                                  return ga(
                                      "div",
                                      {
                                          className: "mbsc-event-group" + e._theme,
                                          key: i,
                                          ref: function (e) {
                                              return (n[s.timestamp] = e);
                                          },
                                      },
                                      ("day" !== e._eventListType || e._eventListSize > 1) && ga(cr, { theme: a, themeVariant: t.themeVariant, className: "mbsc-event-day" }, s.date),
                                      s.events.map(function (a, n) {
                                          return e._eventRenderer(a, n, s.timestamp, t);
                                      })
                                  );
                              })
                          );
                }),
                (t.prototype._template = function (e, t) {
                    var a,
                        n = this;
                    this._listDays || (this._listDays = {}), this._showEventList && le((a = this._listRenderer())) && ((this._eventListHTML = { __html: a }), (this._shouldLoadDays = !0), (this._shouldEnhance = !0), (a = ae));
                    var s = { instance: this },
                        i = ga(
                            mi,
                            {
                                ref: this._setEl,
                                activeDate: this._active,
                                cssClass: this._cssClass,
                                calendarScroll: this._calendarScroll,
                                calendarType: this._calendarType,
                                clickToCreate: e.clickToCreate,
                                colors: e.colors,
                                context: e.context,
                                downIcon: e.downIcon,
                                dragToCreate: e.dragToCreate,
                                dragToMove: e.dragToMove,
                                dragToResize: e.dragToResize,
                                eventOrder: e.eventOrder,
                                eventRange: this._showSchedule ? this._scheduleType : this._eventListType,
                                eventRangeSize: this._eventListSize,
                                hasContent: this._showEventList || this._showSchedule,
                                hasPicker: !0,
                                height: e.height,
                                invalid: e.invalid,
                                instanceService: this._instanceService,
                                labels: e.labels,
                                dragData: t.labelDragData,
                                marked: e.marked,
                                max: e.max,
                                min: e.min,
                                mouseSwipe: (!e.dragToCreate && "single" !== e.clickToCreate) || (!this._showEventLabels && !this._showEventCount),
                                mousewheel: e.mousewheel,
                                nextIconH: e.nextIconH,
                                nextIconV: e.nextIconV,
                                noOuterChange: !this._showEventList,
                                onActiveChange: this._onActiveChange,
                                onCellHoverIn: this._onCellHoverIn,
                                onCellHoverOut: this._onCellHoverOut,
                                onDayClick: this._onDayClick,
                                onDayDoubleClick: this._onDayDoubleClick,
                                onDayRightClick: this._onDayRightClick,
                                onGestureStart: this._onGestureStart,
                                onLabelClick: this._onLabelClick,
                                onLabelDoubleClick: this._onLabelDoubleClick,
                                onLabelRightClick: this._onLabelRightClick,
                                onLabelDelete: this._onEventDelete,
                                onLabelUpdateStart: this._onLabelUpdateStart,
                                onLabelUpdateMove: this._onLabelUpdateMove,
                                onLabelUpdateEnd: this._onLabelUpdateEnd,
                                onLabelUpdateModeOn: this._onLabelUpdateModeOn,
                                onLabelUpdateModeOff: this._onLabelUpdateModeOff,
                                onPageChange: this._onPageChange,
                                onPageLoading: this._onPageLoading,
                                onPageLoaded: this._onPageLoaded,
                                onResize: this._onResize,
                                pageLoad: this._pageLoad,
                                prevIconH: e.prevIconH,
                                prevIconV: e.prevIconV,
                                resourcesMap: this._resourcesMap,
                                responsiveStyle: !0,
                                rtl: e.rtl,
                                renderHeader: e.renderHeader,
                                renderLabel: e.renderLabel,
                                renderLabelContent: e.renderLabelContent,
                                selectedDates: this._selectedDates,
                                showCalendar: this._showCalendar,
                                showControls: e.showControls,
                                showSchedule: this._showSchedule,
                                showLabelCount: this._showEventCount,
                                showOuterDays: this._showOuterDays,
                                showToday: e.showToday,
                                showWeekNumbers: this._showWeekNumbers,
                                swipe: !t.isTouchDrag,
                                theme: e.theme,
                                themeVariant: e.themeVariant,
                                timeFormat: e.timeFormat,
                                upIcon: e.upIcon,
                                valid: e.valid,
                                viewStartDay: this._scheduleStartDay,
                                weeks: this._calendarSize,
                                width: e.width,
                                getDate: e.getDate,
                                getDay: e.getDay,
                                getMaxDayOfMonth: e.getMaxDayOfMonth,
                                getMonth: e.getMonth,
                                getWeekNumber: e.getWeekNumber,
                                getYear: e.getYear,
                                dateFormat: e.dateFormat,
                                dayNames: e.dayNames,
                                dayNamesMin: e.dayNamesMin,
                                dayNamesShort: e.dayNamesShort,
                                eventText: e.eventText,
                                eventsText: e.eventsText,
                                firstDay: e.firstDay,
                                monthNames: e.monthNames,
                                monthNamesShort: e.monthNamesShort,
                                moreEventsPluralText: e.moreEventsPluralText,
                                moreEventsText: e.moreEventsText,
                                todayText: e.todayText,
                                yearSuffix: e.yearSuffix,
                            },
                            this._showDate &&
                                !this._showScheduleDays &&
                                ga(
                                    "div",
                                    { className: "mbsc-schedule-date-header mbsc-flex" + this._theme + this._hb },
                                    this._showSchedule && !this._showCalendar && e.resources && ga("div", { className: "mbsc-schedule-time-col" }),
                                    ga("div", { className: "mbsc-schedule-date-header-text mbsc-flex-1-1" + this._theme }, this._selectedDateHeader),
                                    this._showSchedule && !this._showCalendar && e.resources && ga("div", { className: "mbsc-schedule-fake-scroll-y" })
                                ),
                            this._showEventList &&
                                ga("div", { className: "mbsc-event-list" + (t.isListScrollable ? " mbsc-event-list-scroll" : ""), dangerouslySetInnerHTML: this._eventListHTML, onScroll: this._onScroll, ref: this._setList }, a),
                            this._showSchedule &&
                                ga(Lr, {
                                    allDayText: e.allDayText,
                                    clickToCreate: e.clickToCreate,
                                    colorsMap: this._colorsMap,
                                    dayNamesMin: e.dayNamesMin,
                                    dayNamesShort: e.dayNamesShort,
                                    dateFormat: e.dateFormat,
                                    dateFormatLong: e.dateFormatLong,
                                    dragTimeStep: e.dragTimeStep,
                                    dragToCreate: e.dragToCreate,
                                    dragToMove: e.dragToMove,
                                    dragToResize: e.dragToResize,
                                    endDay: this._scheduleEndDay,
                                    endTime: this._scheduleEndTime,
                                    eventMap: this._eventMap,
                                    eventOrder: e.eventOrder,
                                    extendDefaultEvent: e.extendDefaultEvent,
                                    externalDrop: e.externalDrop,
                                    firstDay: e.firstDay,
                                    getDay: e.getDay,
                                    groupBy: e.groupBy,
                                    height: t.height,
                                    invalidateEvent: e.invalidateEvent,
                                    invalidsMap: this._invalidsMap,
                                    maxDate: this._maxDate,
                                    minDate: this._minDate,
                                    newEventText: e.newEventText,
                                    renderEventContent: e.renderScheduleEventContent,
                                    renderEvent: e.renderScheduleEvent,
                                    renderResource: e.renderResource,
                                    resources: e.resources,
                                    rtl: e.rtl,
                                    scroll: this._shouldScrollSchedule,
                                    selected: this._selectedDateTime,
                                    showAllDay: this._showScheduleAllDay,
                                    showDays: this._showScheduleDays,
                                    startDay: this._scheduleStartDay,
                                    startTime: this._scheduleStartTime,
                                    timeCellStep: this._scheduleTimeCellStep,
                                    timeFormat: e.timeFormat,
                                    timeLabelStep: this._scheduleTimeLabelStep,
                                    theme: e.theme,
                                    themeVariant: e.themeVariant,
                                    type: this._scheduleType,
                                    width: t.width,
                                    onCellClick: this._onCellClick,
                                    onCellDoubleClick: this._onCellDoubleClick,
                                    onCellRightClick: this._onCellRightClick,
                                    onEventClick: this._onEventClick,
                                    onEventDoubleClick: this._onEventDoubleClick,
                                    onEventRightClick: this._onEventRightClick,
                                    onEventDelete: this._onEventDelete,
                                    onEventDragEnd: this._onEventDragEnd,
                                    onWeekDayClick: this._onWeekDayClick,
                                }),
                            ga(
                                Xn,
                                {
                                    anchor: this._anchor,
                                    closeOnScroll: !0,
                                    contentPadding: !1,
                                    context: e.context,
                                    cssClass: "mbsc-calendar-popup " + this._popoverClass,
                                    display: "anchored",
                                    isOpen: t.showPopover,
                                    locale: e.locale,
                                    maxHeight: "24em",
                                    onClose: this._onPopoverClose,
                                    rtl: e.rtl,
                                    scrollLock: !1,
                                    showOverlay: !1,
                                    theme: e.theme,
                                    themeVariant: e.themeVariant,
                                },
                                t.popoverList &&
                                    ga(
                                        dr,
                                        { ref: this._setPopoverList, theme: e.theme, themeVariant: e.themeVariant, rtl: e.rtl, className: "mbsc-popover-list" },
                                        t.popoverList.map(function (a, s) {
                                            return n._eventRenderer(a, s, t.popoverDate, e, !0);
                                        })
                                    )
                            ),
                            t.labelDragData && t.labelDragData.draggedEvent && !t.isTouchDrag && ga("div", { className: "mbsc-calendar-dragging" })
                        );
                    return ga(js.Provider, { children: i, value: s });
                }),
                (t.prototype._updated = function () {
                    this._shouldEnhance && (Sa && (Sa(this._list), Sa(this._popoverList)), (this._shouldEnhance = !1)), e.prototype._updated.call(this);
                }),
                t
            );
        })(xr),
        Hr = {
            before: function (e, t) {
                t.selectedDate && ((t.defaultSelectedDate = t.selectedDate), delete t.selectedDate);
            },
        },
        Or = (($s._selector = "[mbsc-calendar-next]"), ei),
        Vr = ((Zs._selector = "[mbsc-calendar-prev]"), $s),
        Yr = ((Qs._selector = "[mbsc-calendar-today]"), Zs),
        Pr = ((ei._selector = "[mbsc-calendar-nav]"), Qs),
        Fr = ar(Vr),
        Rr = ar(Yr),
        Ar = ar(Pr),
        zr = ar(Or),
        Wr = {
            before: function (e, t) {
                t.element = e;
            },
        },
        Ur = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), (t._selector = "[mbsc-draggable]"), (t._renderOpt = Wr), t;
        })(
            (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    n(t, e),
                    (t.prototype._template = function (e) {
                        return e.children || "";
                    }),
                    t
                );
            })(pr)
        ),
        Br = ar(Ur, Wr),
        jr = ar(Ir, Hr),
        Kr = { hasChildren: !0, parentClass: "mbsc-button", readProps: ["disabled"], slots: { endIcon: "end-icon", icon: "icon", startIcon: "start-icon" } },
        Jr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), (t._selector = "[mbsc-button]"), (t._renderOpt = Kr), t;
        })(Fn),
        Xr = ar(Jr, Kr),
        qr = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readProps: ["disabled"],
            renderToParent: !0,
            before: function (e, t) {
                t.defaultChecked = e.checked;
            },
        },
        Gr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), (t._selector = "[mbsc-checkbox]"), (t._renderOpt = qr), t;
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._setInput = function (e) {
                            t._input = e;
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    Object.defineProperty(t.prototype, "checked", {
                        get: function () {
                            return this._checked;
                        },
                        set: function (e) {
                            (this._checked = e), this.setState({ checked: e });
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype._template = function (e) {
                        var t = this.props,
                            a = t.children;
                        t.className, t.color, t.defaultChecked;
                        var n = t.description;
                        t.inputStyle;
                        var r = t.label;
                        t.onChange, t.position, t.rtl, t.theme, t.themeVariant;
                        var o = i(t, ["children", "className", "color", "defaultChecked", "description", "inputStyle", "label", "onChange", "position", "rtl", "theme", "themeVariant"]);
                        return ga(
                            "label",
                            { className: this._cssClass },
                            ga("input", s({ type: "checkbox", className: "mbsc-form-control-input mbsc-reset", onChange: this._onChange, disabled: this._disabled, checked: this._checked, ref: this._setInput }, o)),
                            ga("span", { className: this._boxClass }),
                            (r || e.hasChildren) && ga("span", { className: "mbsc-form-control-label" + this._theme + (this._disabled ? " mbsc-disabled" : "") }, r),
                            n && ga("span", { className: "mbsc-description" + this._theme + (this._disabled ? " mbsc-disabled" : "") }, n),
                            a
                        );
                    }),
                    t
                );
            })(
                (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t._onChange = function (e) {
                                var a = t.s,
                                    n = e.target.checked;
                                a.checked === ae && t.setState({ checked: n }), t._change(n), a.onChange && a.onChange(e);
                            }),
                            t
                        );
                    }
                    return (
                        n(t, e),
                        (t.prototype._mounted = function () {
                            var e = this;
                            this._unlisten = pn(this._input, {
                                click: !0,
                                onBlur: function () {
                                    e.setState({ hasFocus: !1 });
                                },
                                onFocus: function () {
                                    e.setState({ hasFocus: !0 });
                                },
                                onPress: function () {
                                    e.setState({ isActive: !0 });
                                },
                                onRelease: function () {
                                    e.setState({ isActive: !1 });
                                },
                            });
                        }),
                        (t.prototype._change = function (e) {}),
                        (t.prototype._render = function (e, t) {
                            var a = e.disabled === ae ? t.disabled : he(e.disabled),
                                n = "start" === e.position ? (e.rtl ? "right" : "left") : e.rtl ? "left" : "right";
                            (this._disabled = a),
                                (this._checked = e.checked !== ae ? he(e.checked) : t.checked === ae ? he(e.defaultChecked) : t.checked),
                                (this._cssClass = "mbsc-checkbox mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-checkbox-" + n + (a ? " mbsc-disabled" : "")),
                                (this._boxClass =
                                    "mbsc-checkbox-box" +
                                    this._theme +
                                    " mbsc-checkbox-box-" +
                                    n +
                                    (t.hasFocus && !a ? " mbsc-focus" : "") +
                                    (t.isActive && !a ? " mbsc-active" : "") +
                                    (e.color ? " mbsc-checkbox-box-" + e.color : "") +
                                    (a ? " mbsc-disabled" : "") +
                                    (this._checked ? " mbsc-checked" : ""));
                        }),
                        (t.prototype._destroy = function () {
                            this._unlisten();
                        }),
                        (t.defaults = { position: "start" }),
                        (t._name = "Checkbox"),
                        t
                    );
                })(Va)
            )
        ),
        Zr = ar(Gr, qr),
        $r = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._tag = "select"), t;
            }
            return n(t, e), (t._name = "Dropdown"), t;
        })(xn),
        Qr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._tag = "textarea"), t;
            }
            return n(t, e), (t._name = "Textarea"), t;
        })(xn),
        eo = {
            hasChildren: !0,
            parentClass: "mbsc-label",
            readAttrs: ["rows"],
            readProps: ["disabled", "type"],
            renderToParent: !0,
            slots: { endIcon: "end-icon", label: "label", startIcon: "start-icon" },
            before: function (e, t, a) {
                var n = e.parentNode,
                    s = nt.createElement("span");
                if ((n.insertBefore(s, e), s.appendChild(e), (t.inputClass = e.getAttribute("class")), "SELECT" === e.nodeName && delete t.hasChildren, !t.label && t.hasChildren && (t.label = a[0].textContent), t.label)) {
                    var i = nt.createElement("span");
                    n.insertBefore(i, s);
                }
            },
        },
        to = s({}, eo, { hasValue: !0, parentClass: "mbsc-select", useOwnChildren: !0 }),
        ao = s({}, eo, { hasValue: !0 }),
        no = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), (t._selector = "[mbsc-input]"), (t._renderOpt = eo), t;
        })(xn),
        so = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), (t._selector = "[mbsc-dropdown]"), (t._renderOpt = to), t;
        })($r),
        io = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), (t._selector = "[mbsc-textarea]"), (t._renderOpt = ao), t;
        })(Qr),
        ro = ar(no, eo),
        oo = ar(so, to),
        lo = ar(io, eo),
        co = [],
        ho = [],
        uo = m && !!st.Promise;
    function mo(e, t, a, n, i) {
        return s(
            {
                closeOnOverlayClick: !1,
                context: t.context,
                cssClass: "mbsc-alert",
                display: t.display || "center",
                onClose: function () {
                    e.shift();
                },
                onClosed: function () {
                    po(t, n, i);
                },
                theme: t.theme,
                themeVariant: t.themeVariant,
            },
            a
        );
    }
    function _o(e, t, a, n) {
        return mo(
            ho,
            e,
            {
                animation: e.animation || (n ? "pop" : ae),
                buttons: [],
                closeOnOverlayClick: !1,
                contentPadding: n,
                cssClass: "mbsc-" + (n ? "toast" : "snackbar") + " mbsc-" + (e.color ? e.color : "color-none") + " " + (e.cssClass || ""),
                display: e.display || "bottom",
                focusOnClose: !1,
                focusOnOpen: !1,
                focusTrap: !1,
                onOpen: function (t, a) {
                    !(function (e, t) {
                        !1 !== e.duration &&
                            setTimeout(function () {
                                t.close();
                            }, e.duration || 3e3);
                    })(e, a);
                },
                scrollLock: !1,
                showOverlay: !1,
                touchUi: !0,
            },
            t,
            a
        );
    }
    function po(e, t, a, n) {
        a(n), e.callback && e.callback(n), co.length ? co[0].open() : ho.length && ho[0].open(), t();
    }
    function vo(e, t, a) {
        return _o(e, t, a, !0);
    }
    function fo(e, t, a) {
        return _o(e, t, a, !1);
    }
    function go(e, t, a) {
        return mo(co, e, { buttons: ["ok"], cssClass: "mbsc-alert " + (e.cssClass || ""), okText: e.okText || "OK" }, t, a);
    }
    function bo(e, t, a) {
        var n = !1;
        return mo(
            co,
            e,
            {
                buttons: ["cancel", "ok"],
                cancelText: e.cancelText || "Cancel",
                cssClass: "mbsc-confirm " + (e.cssClass || ""),
                okText: e.okText || "OK",
                onButtonClick: function (e) {
                    "ok" === e.button.name && (n = !0);
                },
                onClosed: function () {
                    po(e, t, a, n);
                },
            },
            t,
            a
        );
    }
    function yo(e, t, a, n) {
        var s;
        return mo(
            co,
            e,
            {
                activeElm: "input",
                buttons: ["cancel", "ok"],
                cancelText: e.cancelText || "Cancel",
                cssClass: "mbsc-prompt " + (e.cssClass || ""),
                okText: e.okText || "OK",
                onButtonClick: function (e) {
                    "ok" === e.button.name && (s = !0);
                },
                onClosed: function () {
                    po(e, t, a, s ? n() : null);
                },
            },
            t,
            a
        );
    }
    function xo(e) {
        co.length || e.open(), co.push(e);
    }
    function Do(e) {
        var t = ho[0];
        ho.push(e), co.length || (t ? t.close() : e.open());
    }
    function To(e, t) {
        var a;
        return (
            uo
                ? (a = new Promise(function (a) {
                      e(t, a);
                  }))
                : e(t, me),
            a
        );
    }
    function Co(e) {
        return ga("div", { className: "mbsc-alert-content" }, e.title && ga("h2", { className: "mbsc-alert-title" }, e.title), ga("p", { className: "mbsc-alert-message" }, " ", e.message || "", " "));
    }
    function So(e, t, a, n, i, r) {
        if (nt) {
            var o,
                l = nt.createElement("div"),
                c = a(
                    t,
                    function () {
                        setTimeout(function () {
                            var e;
                            (e = l)._children && ma(null, e);
                        });
                    },
                    i,
                    r
                );
            return (
                ma(
                    ga(
                        Xn,
                        s(
                            {
                                ref: function (e) {
                                    o = e;
                                },
                            },
                            c
                        ),
                        e
                    ),
                    l
                ),
                n(o),
                o
            );
        }
    }
    function wo(e, t) {
        So(ga("div", { className: "mbsc-toast-background mbsc-toast-message" }, e.message || ""), e, vo, Do, t);
    }
    function ko(e, t) {
        var a,
            n = ga(
                "div",
                { className: "mbsc-toast-background mbsc-snackbar-cont" },
                ga("div", { className: "mbsc-snackbar-message" }, e.message || ""),
                e.button &&
                    ga(
                        Fn,
                        {
                            className: "mbsc-snackbar-button",
                            icon: e.button.icon,
                            onClick: function () {
                                a && (a.close(), e.button && e.button.action && e.button.action());
                            },
                            theme: e.theme,
                            themeVariant: e.themeVariant,
                            variant: "flat",
                        },
                        e.button.text
                    )
            );
        a = So(n, e, fo, Do, t);
    }
    function Mo(e, t) {
        So(Co(e), e, go, xo, t);
    }
    function Eo(e, t) {
        So(Co(e), e, bo, xo, t);
    }
    function No(e, t) {
        var a = "";
        So(
            ga(
                "div",
                { className: "mbsc-alert-content" },
                e.title && ga("h2", { className: "mbsc-alert-title" }, e.title),
                ga("p", { className: "mbsc-alert-message" }, " ", e.message || ""),
                ga(xn, {
                    className: "mbsc-prompt-input",
                    label: e.label,
                    onChange: function (e) {
                        a = e.target.value;
                    },
                    placeholder: e.placeholder || "",
                    type: e.inputType,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                })
            ),
            e,
            yo,
            xo,
            t,
            function () {
                return a;
            }
        );
    }
    var Lo = {
            hasChildren: !0,
            parentClass: "mbsc-page",
            before: function (e, t) {
                t.tag = e.nodeName.toLowerCase();
            },
        },
        Io = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), (t._selector = "[mbsc-page]"), (t._renderOpt = Lo), t;
        })(
            (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    n(t, e),
                    (t.prototype._template = function (e) {
                        return ga(e.tag || "div", { className: this._cssClass, ref: this._setEl }, e.children);
                    }),
                    t
                );
            })(
                (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        (t.prototype._render = function (e) {
                            this._cssClass = "mbsc-page mbsc-font " + this._className + this._theme + this._rtl;
                        }),
                        (t.defaults = {}),
                        (t._name = "Page"),
                        t
                    );
                })(Va)
            )
        ),
        Ho = ar(Io, Lo),
        Oo = 1,
        Vo = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readAttrs: ["value"],
            readProps: ["disabled", "name"],
            renderToParent: !0,
            before: function (e, t) {
                t.defaultChecked = e.checked;
            },
        },
        Yo = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), (t._selector = "[mbsc-radio]"), (t._renderOpt = Vo), t;
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._setInput = function (e) {
                            t._input = e;
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    Object.defineProperty(t.prototype, "checked", {
                        get: function () {
                            return this._checked;
                        },
                        set: function (e) {
                            (this._checked = e), this._toggle(e);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype._template = function (e, t) {
                        var a = this,
                            n = this.props,
                            r = n.children;
                        n.className, n.color, n.defaultChecked;
                        var o = n.description,
                            l = n.label;
                        n.onChange, n.position, n.rtl, n.theme, n.themeVariant;
                        var c = i(n, ["children", "className", "color", "defaultChecked", "description", "label", "onChange", "position", "rtl", "theme", "themeVariant"]);
                        return ga(Ii.Consumer, null, function (t) {
                            return (
                                a._groupOptions(t),
                                ga(
                                    "label",
                                    { className: a._cssClass },
                                    ga("input", s({ checked: a._checked, className: "mbsc-form-control-input mbsc-reset", disabled: a._disabled, name: a._name, onChange: a._onChange, type: "radio", value: a._value, ref: a._setInput }, c)),
                                    ga("span", { className: a._boxClass }),
                                    (l || e.hasChildren) && ga("span", { className: "mbsc-form-control-label" + a._theme + (a._disabled ? " mbsc-disabled" : "") }, l),
                                    o && ga("span", { className: "mbsc-description" + a._theme + (a._disabled ? " mbsc-disabled" : "") }, o),
                                    r
                                )
                            );
                        });
                    }),
                    t
                );
            })(
                (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t._id = "mbsc-radio-" + Oo++),
                            (t._onChange = function (e) {
                                var a = t.s,
                                    n = e.target.checked;
                                t._change(n), t._onGroupChange && t._onGroupChange(e, t._value), t._toggle(n), a.onChange && a.onChange(e);
                            }),
                            (t._onValueChange = function (e) {
                                var a = t.s,
                                    n = e === t._value;
                                a.checked === ae && t.setState({ checked: n }), t._change(n);
                            }),
                            t
                        );
                    }
                    return (
                        n(t, e),
                        (t.prototype._mounted = function () {
                            var e = this;
                            this._unlisten = pn(this._input, {
                                click: !0,
                                onBlur: function () {
                                    e.setState({ hasFocus: !1 });
                                },
                                onFocus: function () {
                                    e.setState({ hasFocus: !0 });
                                },
                                onPress: function () {
                                    e.setState({ isActive: !0 });
                                },
                                onRelease: function () {
                                    e.setState({ isActive: !1 });
                                },
                            });
                        }),
                        (t.prototype._change = function (e) {}),
                        (t.prototype._toggle = function (e) {
                            this.s.checked === ae && this.setState({ checked: e }), Yi(this._name, this._value);
                        }),
                        (t.prototype._groupOptions = function (e) {
                            var t = e.color,
                                a = e.disabled,
                                n = e.name,
                                s = e.onChange,
                                i = e.position,
                                r = e.rtl,
                                o = e.value,
                                l = this.s,
                                c = this.state,
                                h = r === ae ? l.rtl : r,
                                d = t === ae ? l.color : t,
                                u = "start" === (i === ae ? l.position : i) ? (l.rtl ? "right" : "left") : l.rtl ? "left" : "right",
                                m = a === ae ? (l.disabled === ae ? c.disabled : he(l.disabled)) : he(a),
                                _ = l.checked !== ae ? he(l.checked) : c.checked === ae ? he(l.defaultChecked) : c.checked;
                            (this._value = l.value === ae ? this._id : l.value),
                                (this._onGroupChange = s),
                                (this._name = n === ae ? l.name : n),
                                (this._rtl = h ? " mbsc-rtl" : " mbsc-ltr"),
                                (this._checked = o === ae ? _ : o === this._value),
                                (this._disabled = m),
                                (this._cssClass = "mbsc-radio mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-radio-" + u + (m ? " mbsc-disabled" : "")),
                                (this._boxClass =
                                    "mbsc-radio-box" +
                                    this._theme +
                                    " mbsc-radio-box-" +
                                    u +
                                    (c.hasFocus && !m ? " mbsc-focus" : "") +
                                    (c.isActive && !m ? " mbsc-active" : "") +
                                    (d ? " mbsc-radio-box-" + d : "") +
                                    (m ? " mbsc-disabled" : "") +
                                    (this._checked ? " mbsc-checked" : ""));
                        }),
                        (t.prototype._updated = function () {
                            this._name && !this._unsubscribe && (this._unsubscribe = Oi(this._name, this._onValueChange));
                        }),
                        (t.prototype._destroy = function () {
                            Vi(this._name, this._unsubscribe), this._unlisten();
                        }),
                        (t.defaults = { position: "start" }),
                        (t._name = "Radio"),
                        t
                    );
                })(Va)
            )
        ),
        Po = ar(Yo, Vo),
        Fo = {
            hasChildren: !0,
            parentClass: "mbsc-segmented-button",
            readAttrs: ["value"],
            readProps: ["disabled", "name"],
            renderToParent: !0,
            before: function (e, t) {
                (t.select = "checkbox" === e.type ? "multiple" : "single"), (t.defaultChecked = e.checked), (t.inputClass = e.getAttribute("class"));
                var a = e.parentNode,
                    n = a.parentNode;
                if (null === n.getAttribute("mbsc-segmented-group")) {
                    var s = nt.createElement("div");
                    s.setAttribute("mbsc-segmented-group", ""),
                        n.insertBefore(s, a),
                        s.appendChild(a),
                        Yt(n.querySelectorAll('input[name="' + e.name + '"]'), function (e) {
                            s.appendChild(e.parentNode);
                        });
                }
            },
        },
        Ro = { hasChildren: !0, parentClass: "mbsc-segmented" },
        Ao = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), (t._selector = "[mbsc-segmented]"), (t._renderOpt = Fo), t;
        })(Ui),
        zo = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), (t._selector = "[mbsc-segmented-group]"), (t._renderOpt = Ro), t;
        })(zi),
        Wo = ar(Ao, Fo),
        Uo = {
            readProps: ["disabled", "type", "min", "max", "step"],
            renderToParent: !0,
            before: function (e, t) {
                var a = e.parentNode,
                    n = nt.createElement("div");
                a.insertBefore(n, e), n.appendChild(e), (t.defaultValue = +e.value), (t.inputClass = e.getAttribute("class"));
                var s = nt.createElement("div");
                a.insertBefore(s, n);
            },
        },
        Bo = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), (t._selector = "[mbsc-stepper]"), (t._renderOpt = Uo), t;
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._onLabelClick = function (e) {
                            e.preventDefault();
                        }),
                        (t._setInput = function (e) {
                            t._input = e;
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    Object.defineProperty(t.prototype, "value", {
                        get: function () {
                            return this._value;
                        },
                        set: function (e) {
                            (this._value = e), this.setState({ value: e });
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype._template = function (e) {
                        var t = this.props;
                        t.children, t.className, t.color, t.defaultValue;
                        var a = t.description;
                        t.inputClass, t.inputPosition;
                        var n = t.label;
                        t.onChange, t.rtl, t.theme, t.themeVariant, t.value;
                        var r = i(t, ["children", "className", "color", "defaultValue", "description", "inputClass", "inputPosition", "label", "onChange", "rtl", "theme", "themeVariant", "value"]),
                            o = this._theme;
                        return ga(
                            "label",
                            { className: this._cssClass, onClick: this._onLabelClick },
                            ga(
                                "div",
                                { className: "mbsc-stepper-content" },
                                n && ga("span", { className: "mbsc-stepper-label" + o + (this._disabled ? " mbsc-disabled" : "") }, n),
                                a && ga("span", { className: "mbsc-description" + o + (this._disabled ? " mbsc-disabled" : "") }, a)
                            ),
                            ga(
                                "div",
                                { className: "mbsc-stepper-control" + o + this._rtl },
                                ga(
                                    Fn,
                                    { className: "mbsc-stepper-minus mbsc-stepper-button", disabled: this._disabledMinus, onClick: this._onMinusClick, theme: e.theme, themeVariant: e.themeVariant },
                                    ga("span", { className: "mbsc-stepper-inner" + o }, "–")
                                ),
                                ga(
                                    "input",
                                    s(
                                        {
                                            className: "mbsc-stepper-input" + (this._disabled ? " mbsc-disabled" : "") + " " + (e.inputClass || "") + o,
                                            disabled: this._disabled,
                                            max: this._max,
                                            min: this._min,
                                            ref: this._setInput,
                                            step: this._step,
                                            type: "number",
                                        },
                                        r
                                    )
                                ),
                                ga(
                                    Fn,
                                    { className: "mbsc-stepper-plus mbsc-stepper-button", disabled: this._disabledPlus, onClick: this._onPlusClick, theme: e.theme, themeVariant: e.themeVariant },
                                    ga("span", { className: "mbsc-stepper-inner" + o }, "+")
                                )
                            )
                        );
                    }),
                    t
                );
            })(
                (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t._onChange = function (e) {
                                var a = t.s,
                                    n = t._round(+e.target.value);
                                (e.target.value = n + ""), a.value === ae && t.setState({ value: n }), t._change(n), a.onChange && a.onChange(e);
                            }),
                            (t._onMinusClick = function () {
                                t._setValue(t._value - t._step);
                            }),
                            (t._onPlusClick = function () {
                                t._setValue(t._value + t._step);
                            }),
                            t
                        );
                    }
                    return (
                        n(t, e),
                        (t.prototype._change = function (e) {}),
                        (t.prototype._mounted = function () {
                            yt(this._input, Ra, this._onChange);
                        }),
                        (t.prototype._render = function (e, t) {
                            (this._max = ce(e.max) ? 100 : +e.max), (this._min = ce(e.min) ? 0 : +e.min), (this._step = ce(e.step) ? 1 : +e.step);
                            var a = e.disabled === ae ? t.disabled : he(e.disabled),
                                n = e.defaultValue !== ae ? e.defaultValue : this._min || 0,
                                s = e.value !== ae ? e.value : t.value !== ae ? t.value : n;
                            (this._value = this._round(s)),
                                (this._changed = this._value !== +s),
                                (this._disabled = a),
                                (this._disabledMinus = this._value === this._min || a),
                                (this._disabledPlus = this._value === this._max || a),
                                (this._cssClass = "mbsc-stepper mbsc-form-control-wrapper mbsc-font mbsc-" + (e.color || "color-none") + this._theme + this._rtl + this._hb + " mbsc-stepper-" + e.inputPosition + (a ? " mbsc-disabled" : ""));
                        }),
                        (t.prototype._updated = function () {
                            (this._input.value = this._value + ""), this._changed && (Vt(this._input, Ra), (this._changed = !1));
                        }),
                        (t.prototype._destroy = function () {
                            xt(this._input, Ra, this._onChange);
                        }),
                        (t.prototype._round = function (e) {
                            var t = this._step,
                                a = Math.abs(t) < 1 ? (t + "").split(".")[1].length : 0;
                            return +Math.min(this._max, Math.max(Math.round(e / t) * t, this._min)).toFixed(a);
                        }),
                        (t.prototype._setValue = function (e) {
                            var t = +this._input.value,
                                a = this._round(e);
                            t !== a && ((this._input.value = a + ""), Vt(this._input, Ra));
                        }),
                        (t.defaults = { inputPosition: "center" }),
                        (t._name = "Stepper"),
                        t
                    );
                })(Va)
            )
        ),
        jo = ar(Bo, Uo),
        Ko = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readProps: ["disabled"],
            renderToParent: !0,
            before: function (e, t) {
                t.defaultChecked = e.checked;
            },
        },
        Jo = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), (t._selector = "[mbsc-switch]"), (t._renderOpt = Ko), t;
        })(
            (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (t._setInput = function (e) {
                            t._input = e;
                        }),
                        (t._setHandleCont = function (e) {
                            t._handleCont = e;
                        }),
                        (t._setHandle = function (e) {
                            t._handle = e;
                        }),
                        t
                    );
                }
                return (
                    n(t, e),
                    Object.defineProperty(t.prototype, "checked", {
                        get: function () {
                            return this._checked;
                        },
                        set: function (e) {
                            (this._checked = e), this.setState({ checked: e });
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype._template = function (e) {
                        var t = this.props,
                            a = t.children;
                        t.className, t.color, t.defaultChecked;
                        var n = t.description;
                        t.inputStyle;
                        var r = t.label;
                        t.onChange, t.position, t.rtl, t.theme, t.themeVariant;
                        var o = i(t, ["children", "className", "color", "defaultChecked", "description", "inputStyle", "label", "onChange", "position", "rtl", "theme", "themeVariant"]);
                        return ga(
                            "label",
                            { className: this._cssClass, ref: this._setEl, onClick: this._onLabelClick },
                            ga("input", s({ type: "checkbox", className: "mbsc-form-control-input mbsc-reset", onChange: me, disabled: this._disabled, checked: this._checked, ref: this._setInput }, o)),
                            ga("span", { className: this._handleContClass, ref: this._setHandleCont }, ga("span", { className: this._handleClass, ref: this._setHandle })),
                            (r || e.hasChildren) && ga("span", { className: "mbsc-form-control-label" + this._theme + (this._disabled ? " mbsc-disabled" : "") }, r),
                            n && ga("span", { className: "mbsc-description" + this._theme + (this._disabled ? " mbsc-disabled" : "") }, n),
                            a
                        );
                    }),
                    t
                );
            })(
                (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t._onChange = function (e) {
                                var a = t.s,
                                    n = e.target.checked;
                                e.stopPropagation(), a.checked === ae && t.setState({ checked: n }), t._change(n), a.onChange && a.onChange(e);
                            }),
                            (t._onLabelClick = function (e) {
                                e.preventDefault();
                            }),
                            t
                        );
                    }
                    return (
                        n(t, e),
                        (t.prototype._change = function (e) {}),
                        (t.prototype._setHandleLeft = function (e) {
                            this._handle.style.left = e + "%";
                        }),
                        (t.prototype._mounted = function () {
                            var e,
                                t,
                                a,
                                n,
                                s,
                                i = this;
                            yt(this._input, Aa, this._onChange),
                                (this._inputUnlisten = pn(this._input, {
                                    onBlur: function () {
                                        i.setState({ hasFocus: !1 });
                                    },
                                    onFocus: function () {
                                        i._disabled || i.setState({ hasFocus: !0 });
                                    },
                                })),
                                (this._unlisten = pn(this._el, {
                                    click: !1,
                                    onEnd: function (e) {
                                        if (!i._disabled && !s) {
                                            if (n) {
                                                var t = Math.abs(e.deltaX) < 3 && Math.abs(e.deltaY) < 3,
                                                    r = +new Date() - a > 300,
                                                    o = t && !r ? !i._checked : i._handleLeft >= 50;
                                                o !== i._checked && (i._input.click(), i._change(o)), (n = !1);
                                            }
                                            i.setState({ dragging: !1, isActive: !1 });
                                        }
                                    },
                                    onMove: function (a) {
                                        var r = a.domEvent,
                                            o = i.state.dragging;
                                        if (!i._disabled && !s && n && e && (Math.abs(a.deltaX) > 5 && ((o = !0), i.setState({ dragging: !0 })), o)) {
                                            r.cancelable && r.preventDefault();
                                            var l = ((a.startX - t) / e) * 100,
                                                c = Math.max(Math.min(l, 100), 0) + (a.deltaX / e) * 100,
                                                h = Math.max(Math.min(c, 100), 0);
                                            (i._handleLeft = h), i._setHandleLeft(h);
                                        }
                                        !o && !s && Math.abs(a.deltaY) > 7 && r.type === an && ((s = !0), i.setState({ isActive: !1 }));
                                    },
                                    onStart: function (r) {
                                        i._disabled ||
                                            ((s = !1),
                                            (e = i._handleCont.clientWidth),
                                            (t = It(i._handleCont).left),
                                            (a = +new Date()),
                                            (r.domEvent.target === i._handleCont || i._handleCont.contains(r.domEvent.target)) && (n = !0),
                                            i.setState({ isActive: !0 }));
                                    },
                                })),
                                this._setHandleLeft(this._handleLeft);
                        }),
                        (t.prototype._render = function (e, t) {
                            var a = e.disabled === ae ? t.disabled : he(e.disabled),
                                n = "start" === e.position ? (e.rtl ? "right" : "left") : e.rtl ? "left" : "right",
                                s = e.color !== ae ? " mbsc-switch-" + e.color : "";
                            if (
                                ((this._disabled = a),
                                (this._checked = e.checked !== ae ? he(e.checked) : t.checked !== ae ? t.checked : he(e.defaultChecked)),
                                (this._cssClass = "mbsc-switch mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-switch-" + n + (a ? " mbsc-disabled" : "")),
                                !t.dragging)
                            ) {
                                var i = this._checked ? 100 : 0;
                                i !== this._handleLeft && this._handle && this._setHandleLeft(i), (this._handleLeft = i);
                            }
                            (this._handleContClass =
                                "mbsc-switch-track mbsc-switch-track-" + n + this._theme + s + (this._checked ? " mbsc-checked" : "") + (a ? " mbsc-disabled" : "") + (t.hasFocus ? " mbsc-focus" : "") + (t.isActive ? " mbsc-active" : "")),
                                (this._handleClass =
                                    "mbsc-switch-handle" +
                                    this._theme +
                                    s +
                                    (t.dragging ? "" : " mbsc-switch-handle-animate") +
                                    (this._checked ? " mbsc-checked" : "") +
                                    (this.state.isActive ? " mbsc-active" : "") +
                                    (a ? " mbsc-disabled" : "") +
                                    (this.state.hasFocus ? " mbsc-focus" : ""));
                        }),
                        (t.prototype._destroy = function () {
                            this._unlisten(), this._inputUnlisten(), xt(this._input, Aa, this._onChange);
                        }),
                        (t.defaults = { position: "end" }),
                        (t._name = "Switch"),
                        t
                    );
                })(Va)
            )
        ),
        Xo = ar(Jo, Ko),
        qo = ar(Xn, {
            before: function (e, t) {
                var a,
                    n,
                    s = this;
                t.onOpen && (a = t.onOpen), t.onClosed && (n = t.onClosed);
                var i = Dt(e),
                    r = i && i.createComment("popup");
                r && e.parentNode && e.parentNode.insertBefore(r, e),
                    (e.style.display = "none"),
                    (t.onOpen = function (t, n) {
                        (e.style.display = ""), t.target.querySelector(".mbsc-popup-content").appendChild(e), a && a.call(s, t, n);
                    }),
                    (t.onClosed = function (t, a) {
                        (e.style.display = "none"), r && r.parentNode && r.parentNode.insertBefore(e, r), n && n.call(s, t, a);
                    });
            },
        });
    Ca(Jr),
        Ca(Gr),
        Ca(no),
        Ca(so),
        Ca(Ur),
        Ca(io),
        Ca(Io),
        Ca(Yo),
        Ca(Ao),
        Ca(zo),
        Ca(Bo),
        Ca(Jo),
        Ca(Vr),
        Ca(Yr),
        Ca(Pr),
        Ca(Or),
        (t.fw = "javascript"),
        (e.Button = Jr),
        (e.CalendarNav = Or),
        (e.CalendarNext = Vr),
        (e.CalendarPrev = Yr),
        (e.CalendarToday = Pr),
        (e.Checkbox = Gr),
        (e.Datepicker = er),
        (e.Draggable = Ur),
        (e.Dropdown = so),
        (e.Eventcalendar = Ir),
        (e.Input = no),
        (e.Page = Io),
        (e.Popup = Xn),
        (e.Radio = Yo),
        (e.Segmented = Ao),
        (e.SegmentedGroup = zo),
        (e.Select = or),
        (e.Stepper = Bo),
        (e.Switch = Jo),
        (e.Textarea = io),
        (e.alert = function (e) {
            return To(Mo, e);
        }),
        (e.autoDetect = T),
        (e.button = Xr),
        (e.calendarNav = zr),
        (e.calendarNext = Fr),
        (e.calendarPrev = Rr),
        (e.calendarToday = Ar),
        (e.checkbox = Zr),
        (e.confirm = function (e) {
            return To(Eo, e);
        }),
        (e.createCustomTheme = w),
        (e.datepicker = rr),
        (e.draggable = Br),
        (e.dropdown = oo),
        (e.enhance = Sa),
        (e.eventcalendar = jr),
        (e.formSwitch = Xo),
        (e.formatDate = ps),
        (e.getAutoTheme = S),
        (e.getInst = function (e, t) {
            return t ? e.__mbscFormInst : e.__mbscInst;
        }),
        (e.getJson = sr),
        (e.globalChanges = C),
        (e.hijriCalendar = et),
        (e.input = ro),
        (e.jalaliCalendar = Ce),
        (e.locale = at),
        (e.localeAr = J),
        (e.localeBg = X),
        (e.localeCa = q),
        (e.localeCs = G),
        (e.localeDa = Z),
        (e.localeDe = $),
        (e.localeEl = Q),
        (e.localeEn = tt),
        (e.localeEnGB = ee),
        (e.localeEs = te),
        (e.localeFa = Se),
        (e.localeFi = we),
        (e.localeFr = ke),
        (e.localeHe = Me),
        (e.localeHi = Ee),
        (e.localeHr = Ne),
        (e.localeHu = Le),
        (e.localeIt = Ie),
        (e.localeJa = He),
        (e.localeKo = Oe),
        (e.localeLt = Ve),
        (e.localeNl = Ye),
        (e.localeNo = Pe),
        (e.localePl = Fe),
        (e.localePtBR = Ae),
        (e.localePtPT = Re),
        (e.localeRo = ze),
        (e.localeRu = We),
        (e.localeRuUA = Ue),
        (e.localeSk = Be),
        (e.localeSr = je),
        (e.localeSv = Ke),
        (e.localeTh = Je),
        (e.localeTr = Xe),
        (e.localeUa = qe),
        (e.localeVi = Ge),
        (e.localeZh = Ze),
        (e.options = y),
        (e.page = Ho),
        (e.parseDate = vs),
        (e.platform = k),
        (e.popup = qo),
        (e.prompt = function (e) {
            return To(No, e);
        }),
        (e.radio = Po),
        (e.registerComponent = Ca),
        (e.remote = t),
        (e.segmented = Wo),
        (e.select = lr),
        (e.setOptions = function (e) {
            for (var t in e) e.hasOwnProperty(t) && (y[t] = e[t]);
            C.next(y);
        }),
        (e.snackbar = function (e) {
            return To(ko, e);
        }),
        (e.stepper = jo),
        (e.textarea = lo),
        (e.themes = D),
        (e.toast = function (e) {
            return To(wo, e);
        }),
        (e.util = x),
        Object.defineProperty(e, "__esModule", { value: !0 });
});
