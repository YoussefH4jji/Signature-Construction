(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/home/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Header() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleNavbar = ()=>setIsOpen(!isOpen);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            // Set GTranslate settings
            window.gtranslateSettings = {
                default_language: 'en',
                languages: [
                    'en',
                    'fr'
                ],
                wrapper_selector: '.gtranslate_wrapper',
                float_switcher_open_direction: 'bottom'
            };
            // Inject the script
            const script = document.createElement('script');
            script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
            script.defer = true;
            document.body.appendChild(script);
            return ({
                "Header.useEffect": ()=>{
                    document.body.removeChild(script);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "navbar navbar-expand-lg navbar-dark custom-navbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/logo_sc.png",
                            alt: "Logo",
                            className: "header-logo img-responsive"
                        }, void 0, false, {
                            fileName: "[project]/src/app/home/Header.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/Header.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "navbar-toggler",
                        type: "button",
                        onClick: toggleNavbar,
                        "aria-controls": "navbarCollapse",
                        "aria-expanded": isOpen,
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "navbar-toggler-icon"
                        }, void 0, false, {
                            fileName: "[project]/src/app/home/Header.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/Header.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "collapse navbar-collapse ".concat(isOpen ? 'show' : ''),
                        id: "navbarCollapse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "navbar-nav ms-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        className: "nav-link",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home/Header.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home/Header.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#services",
                                        className: "nav-link",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home/Header.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home/Header.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#projects",
                                        className: "nav-link",
                                        children: "Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home/Header.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home/Header.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        className: "nav-link",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home/Header.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home/Header.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home/Header.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/Header.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/Header.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gtranslate_wrapper"
            }, void 0, false, {
                fileName: "[project]/src/app/home/Header.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/home/Header.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Header, "vl0Rt3/A8evyRPW1OQ1AhRk4UhU=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/CoverFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$Draggable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/Draggable.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$Draggable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const COVERS = [
    "./img1.jpg",
    "./img2.jpg",
    "./img3.jpg",
    "./img4.jpg",
    "./img5.jpg",
    "./img6.jpg",
    "./img7.jpg",
    "./img8.jpg",
    "./img9.jpg",
    "./img10.jpg",
    "./img11.jpg",
    "./img12.jpg",
    "./img13.jpg",
    "./img14.jpg",
    "./img15.jpg",
    "./img16.jpg",
    "./img17.jpg",
    "./img18.jpg",
    "./img19.jpg",
    "./img21.jpg",
    "./img22.jpg",
    "./img23.jpg",
    "./img24.jpg",
    "./img25.jpg",
    "./img26.jpg",
    "./img27.jpg",
    "./img28.jpg",
    "./img29.jpg",
    "./img31.jpg",
    "./img32.jpg",
    "./img33.jpg",
    "./img34.jpg",
    "./img35.jpg",
    "./img36.jpg",
    "./img37.jpg",
    "./img38.jpg",
    "./img39.jpg",
    "./img41.jpg",
    "./img42.jpg",
    "./img43.jpg"
];
const Carousel = ()=>{
    _s();
    const boxesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            if (!boxesRef.current) return;
            const BOXES = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.box');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(BOXES, {
                yPercent: -50,
                display: 'block'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('button', {
                z: 200
            });
            const STAGGER = 0.1;
            const DURATION = 1;
            const OFFSET = 0;
            const LOOP = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                paused: true,
                repeat: -1,
                ease: 'none'
            });
            const SHIFTS = [
                ...BOXES,
                ...BOXES,
                ...BOXES
            ];
            // Setup animation timeline
            SHIFTS.forEach({
                "Carousel.useEffect": (BOX, index)=>{
                    const BOX_TL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline().set(BOX, {
                        xPercent: 250,
                        rotateY: -50,
                        opacity: 0,
                        scale: 0.5
                    }).to(BOX, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.1
                    }, 0).to(BOX, {
                        opacity: 0,
                        scale: 0.5,
                        duration: 0.1
                    }, 0.9).fromTo(BOX, {
                        xPercent: 250
                    }, {
                        xPercent: -350,
                        duration: 1,
                        immediateRender: false,
                        ease: 'power1.inOut'
                    }, 0).fromTo(BOX, {
                        rotateY: -50
                    }, {
                        rotateY: 50,
                        immediateRender: false,
                        duration: 1,
                        ease: 'power4.inOut'
                    }, 0).to(BOX, {
                        z: 100,
                        scale: 1.25,
                        duration: 0.1,
                        repeat: 1,
                        yoyo: true
                    }, 0.4).fromTo(BOX, {
                        zIndex: 1
                    }, {
                        zIndex: BOXES.length,
                        repeat: 1,
                        yoyo: true,
                        ease: 'none',
                        duration: 0.5,
                        immediateRender: false
                    }, 0);
                    LOOP.add(BOX_TL, index * STAGGER);
                }
            }["Carousel.useEffect"]);
            const CYCLE_DURATION = STAGGER * BOXES.length;
            const START_TIME = CYCLE_DURATION + DURATION * 0.5 + OFFSET;
            const LOOP_HEAD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(LOOP, {
                totalTime: START_TIME
            }, {
                totalTime: "+=".concat(CYCLE_DURATION),
                duration: 1,
                ease: 'none',
                repeat: -1,
                paused: true
            });
            const PLAYHEAD = {
                position: 0
            };
            const POSITION_WRAP = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.wrap(0, LOOP_HEAD.duration());
            const SCRUB = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(PLAYHEAD, {
                position: 0,
                onUpdate: {
                    "Carousel.useEffect.SCRUB": ()=>LOOP_HEAD.totalTime(POSITION_WRAP(PLAYHEAD.position))
                }["Carousel.useEffect.SCRUB"],
                paused: true,
                duration: 0.25,
                ease: 'power3'
            });
            // Wheel scrolling instead of ScrollTrigger
            const scrollSpeed = 0.09;
            const onWheel = {
                "Carousel.useEffect.onWheel": (e)=>{
                    e.preventDefault(); // prevent page scroll
                    const delta = e.deltaY;
                    const direction = delta > 0 ? 1 : -1;
                    SCRUB.vars.position += direction * (1 / BOXES.length) * scrollSpeed;
                    SCRUB.invalidate().restart();
                }
            }["Carousel.useEffect.onWheel"];
            const container = boxesRef.current;
            container.addEventListener('wheel', onWheel, {
                passive: false
            });
            // Keyboard navigation
            const NEXT = {
                "Carousel.useEffect.NEXT": ()=>{
                    SCRUB.vars.position -= 1 / BOXES.length;
                    SCRUB.invalidate().restart();
                }
            }["Carousel.useEffect.NEXT"];
            const PREV = {
                "Carousel.useEffect.PREV": ()=>{
                    SCRUB.vars.position += 1 / BOXES.length;
                    SCRUB.invalidate().restart();
                }
            }["Carousel.useEffect.PREV"];
            const handleKey = {
                "Carousel.useEffect.handleKey": (event)=>{
                    if (event.code === 'ArrowLeft' || event.code === 'KeyA') NEXT();
                    if (event.code === 'ArrowRight' || event.code === 'KeyD') PREV();
                }
            }["Carousel.useEffect.handleKey"];
            document.addEventListener('keydown', handleKey);
            // Buttons
            const nextBtn = container.querySelector('.next');
            const prevBtn = container.querySelector('.prev');
            nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', NEXT);
            prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', PREV);
            // Dragging
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$Draggable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create('.drag-proxy', {
                type: 'x',
                trigger: '.box',
                onPress () {
                    this.startOffset = SCRUB.vars.position;
                },
                onDrag () {
                    SCRUB.vars.position = this.startOffset + (this.startX - this.x) * 0.001;
                    SCRUB.invalidate().restart();
                },
                onDragEnd () {
                // nothing else needed
                }
            });
            return ({
                "Carousel.useEffect": ()=>{
                    container.removeEventListener('wheel', onWheel);
                    document.removeEventListener('keydown', handleKey);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(PLAYHEAD);
                }
            })["Carousel.useEffect"];
        }
    }["Carousel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "carousel-wrapper",
            ref: boxesRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "boxes",
                    children: COVERS.map((cover, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "box",
                            style: {
                                '--src': "url(".concat(cover, ")")
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/CoverFlow.tsx",
                                    lineNumber: 186,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: cover,
                                    alt: "Album ".concat(index + 1)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/CoverFlow.tsx",
                                    lineNumber: 187,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/CoverFlow.tsx",
                            lineNumber: 185,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/CoverFlow.tsx",
                    lineNumber: 183,
                    columnNumber: 3
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "scroll-icon",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "currentColor",
                        d: "M20 6H23L19 2L15 6H18V18H15L19 22L23 18H20V6M9 3.09C11.83 3.57 14 6.04 14 9H9V3.09M14 11V15C14 18.3 11.3 21 8 21S2 18.3 2 15V11H14M7 9H2C2 6.04 4.17 3.57 7 3.09V9Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/CoverFlow.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/CoverFlow.tsx",
                    lineNumber: 193,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "drag-proxy"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/CoverFlow.tsx",
                    lineNumber: 199,
                    columnNumber: 3
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/CoverFlow.tsx",
            lineNumber: 182,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(Carousel, "hqWDlNdayFh9S0pj0VJXYEOs4JM=");
_c = Carousel;
const __TURBOPACK__default__export__ = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/ScrollStack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollStackItem",
    ()=>ScrollStackItem,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ScrollStackItem = (param)=>{
    let { children, itemClassName = "" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scroll-stack-card ".concat(itemClassName).trim(),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/components/ScrollStack.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ScrollStackItem;
const ScrollStack = (param)=>{
    let { children, className = "", itemDistance = 300, itemScale = 0.03, itemStackDistance = 60, stackPosition = "20%", scaleEndPosition = "10%", baseScale = 0.85, scaleDuration = 0.5, rotationAmount = 0, blurAmount = 0, onStackComplete } = param;
    _s();
    const scrollerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stackCompletedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastTransformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const isUpdatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const calculateProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScrollStack.useCallback[calculateProgress]": (scrollTop, start, end)=>{
            if (scrollTop < start) return 0;
            if (scrollTop > end) return 1;
            return (scrollTop - start) / (end - start);
        }
    }["ScrollStack.useCallback[calculateProgress]"], []);
    const parsePercentage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScrollStack.useCallback[parsePercentage]": (value, containerHeight)=>{
            if (typeof value === 'string' && value.includes('%')) {
                return parseFloat(value) / 100 * containerHeight;
            }
            return parseFloat(value);
        }
    }["ScrollStack.useCallback[parsePercentage]"], []);
    const updateCardTransforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScrollStack.useCallback[updateCardTransforms]": ()=>{
            const scroller = scrollerRef.current;
            if (!scroller || !cardsRef.current.length || isUpdatingRef.current) return;
            isUpdatingRef.current = true;
            const scrollTop = scroller.scrollTop;
            const containerHeight = scroller.clientHeight;
            const stackPositionPx = parsePercentage(stackPosition, containerHeight);
            const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
            const endElement = scroller.querySelector('.scroll-stack-end');
            const endElementTop = endElement ? endElement.offsetTop : 0;
            cardsRef.current.forEach({
                "ScrollStack.useCallback[updateCardTransforms]": (card, i)=>{
                    if (!card) return;
                    const cardTop = card.offsetTop;
                    const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
                    const triggerEnd = cardTop - scaleEndPositionPx;
                    const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
                    const pinEnd = endElementTop - containerHeight / 2;
                    const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
                    const targetScale = baseScale + i * itemScale;
                    const scale = 1 - scaleProgress * (1 - targetScale);
                    const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;
                    let blur = 0;
                    if (blurAmount) {
                        let topCardIndex = 0;
                        for(let j = 0; j < cardsRef.current.length; j++){
                            const jCardTop = cardsRef.current[j].offsetTop;
                            const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
                            if (scrollTop >= jTriggerStart) {
                                topCardIndex = j;
                            }
                        }
                        if (i < topCardIndex) {
                            const depthInStack = topCardIndex - i;
                            blur = Math.max(0, depthInStack * blurAmount);
                        }
                    }
                    let translateY = 0;
                    const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
                    if (isPinned) {
                        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
                    } else if (scrollTop > pinEnd) {
                        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
                    }
                    const newTransform = {
                        translateY: Math.round(translateY * 100) / 100,
                        scale: Math.round(scale * 1000) / 1000,
                        rotation: Math.round(rotation * 100) / 100,
                        blur: Math.round(blur * 100) / 100
                    };
                    const lastTransform = lastTransformsRef.current.get(i);
                    const hasChanged = !lastTransform || Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 || Math.abs(lastTransform.scale - newTransform.scale) > 0.001 || Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 || Math.abs(lastTransform.blur - newTransform.blur) > 0.1;
                    if (hasChanged) {
                        const transform = "translate3d(0, ".concat(newTransform.translateY, "px, 0) scale(").concat(newTransform.scale, ") rotate(").concat(newTransform.rotation, "deg)");
                        const filter = newTransform.blur > 0 ? "blur(".concat(newTransform.blur, "px)") : '';
                        card.style.transform = transform;
                        card.style.filter = filter;
                        lastTransformsRef.current.set(i, newTransform);
                    }
                    if (i === cardsRef.current.length - 1) {
                        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
                        if (isInView && !stackCompletedRef.current) {
                            stackCompletedRef.current = true;
                            onStackComplete === null || onStackComplete === void 0 ? void 0 : onStackComplete();
                        } else if (!isInView && stackCompletedRef.current) {
                            stackCompletedRef.current = false;
                        }
                    }
                }
            }["ScrollStack.useCallback[updateCardTransforms]"]);
            isUpdatingRef.current = false;
        }
    }["ScrollStack.useCallback[updateCardTransforms]"], [
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        rotationAmount,
        blurAmount,
        onStackComplete,
        calculateProgress,
        parsePercentage
    ]);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScrollStack.useCallback[handleScroll]": ()=>{
            updateCardTransforms();
        }
    }["ScrollStack.useCallback[handleScroll]"], [
        updateCardTransforms
    ]);
    const setupLenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScrollStack.useCallback[setupLenis]": ()=>{
            const scroller = scrollerRef.current;
            if (!scroller) return;
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                wrapper: scroller,
                content: scroller.querySelector('.scroll-stack-inner'),
                duration: 1.2,
                easing: {
                    "ScrollStack.useCallback[setupLenis]": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["ScrollStack.useCallback[setupLenis]"],
                smoothWheel: true,
                touchMultiplier: 2,
                infinite: false,
                gestureOrientation: 'vertical',
                wheelMultiplier: 1,
                lerp: 0.1,
                syncTouch: true,
                syncTouchLerp: 0.075
            });
            lenis.on('scroll', handleScroll);
            const raf = {
                "ScrollStack.useCallback[setupLenis].raf": (time)=>{
                    lenis.raf(time);
                    animationFrameRef.current = requestAnimationFrame(raf);
                }
            }["ScrollStack.useCallback[setupLenis].raf"];
            animationFrameRef.current = requestAnimationFrame(raf);
            lenisRef.current = lenis;
            return lenis;
        }
    }["ScrollStack.useCallback[setupLenis]"], [
        handleScroll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ScrollStack.useLayoutEffect": ()=>{
            var _scrollerRef_current;
            const scroller = scrollerRef.current;
            if (!scroller) return;
            const cards = Array.from(scroller.querySelectorAll(".scroll-stack-card"));
            cardsRef.current = cards;
            const transformsCache = lastTransformsRef.current;
            cards.forEach({
                "ScrollStack.useLayoutEffect": (card, i)=>{
                    if (i < cards.length - 1) {
                        card.style.marginBottom = "".concat(itemDistance, "px");
                    }
                    card.style.willChange = 'transform, filter';
                    card.style.transformOrigin = 'top center';
                    card.style.backfaceVisibility = 'hidden';
                    card.style.transform = 'translateZ(0)';
                    card.style.webkitTransform = 'translateZ(0)';
                    card.style.perspective = '1000px';
                    card.style.webkitPerspective = '1000px';
                }
            }["ScrollStack.useLayoutEffect"]);
            (_scrollerRef_current = scrollerRef.current) === null || _scrollerRef_current === void 0 ? void 0 : _scrollerRef_current.addEventListener('scroll', handleScroll);
            setTimeout({
                "ScrollStack.useLayoutEffect": ()=>{
                    updateCardTransforms();
                }
            }["ScrollStack.useLayoutEffect"], 100);
            return ({
                "ScrollStack.useLayoutEffect": ()=>{
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                    if (lenisRef.current) {
                        lenisRef.current.destroy();
                    }
                    stackCompletedRef.current = false;
                    cardsRef.current = [];
                    transformsCache.clear();
                    isUpdatingRef.current = false;
                }
            })["ScrollStack.useLayoutEffect"];
        }
    }["ScrollStack.useLayoutEffect"], [
        itemDistance,
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        scaleDuration,
        rotationAmount,
        blurAmount,
        onStackComplete,
        setupLenis,
        updateCardTransforms
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scroll-stack-scroller ".concat(className).trim(),
        ref: scrollerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "scroll-stack-inner",
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scroll-stack-end"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ScrollStack.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ScrollStack.tsx",
            lineNumber: 265,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/ScrollStack.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScrollStack, "jQanoUh9Z32xcLUSw++jwwTDx3U=");
_c1 = ScrollStack;
const __TURBOPACK__default__export__ = ScrollStack;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollStackItem");
__turbopack_context__.k.register(_c1, "ScrollStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Contact = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        subject: '',
        msg: ''
    });
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formBody = new FormData();
        formBody.append('name', formData.name);
        formBody.append('email', formData.email);
        formBody.append('subject', formData.subject);
        formBody.append('msg', formData.msg);
        formBody.append('_captcha', 'false');
        try {
            const response = await fetch('https://formsubmit.co/ajax/hajji.youssef.contact@gmail.com', {
                method: 'POST',
                body: formBody,
                headers: {
                    'Accept': 'application/json'
                }
            });
            const result = await response.json();
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    title: 'Message Sent!',
                    text: 'Your message was sent successfully.',
                    icon: 'success'
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    msg: ''
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again.',
                    icon: 'error'
                });
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                title: 'Error!',
                text: 'Failed to send message.',
                icon: 'error'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "form-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "services-main-title",
                children: [
                    "Ready To Build Your  ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "orange",
                        children: "Dream Space"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Contact.tsx",
                        lineNumber: 65,
                        columnNumber: 66
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Contact.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/ctc-img.png",
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Contact.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Get In Touch With Us"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Contact.tsx",
                                lineNumber: 69,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "input-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "first-inp",
                                                type: "text",
                                                name: "name",
                                                placeholder: "Full Name",
                                                value: formData.name,
                                                onChange: handleChange
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Contact.tsx",
                                                lineNumber: 72,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                name: "email",
                                                placeholder: "Email",
                                                value: formData.email,
                                                onChange: handleChange
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Contact.tsx",
                                                lineNumber: 73,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Contact.tsx",
                                        lineNumber: 71,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "input-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                className: "first-inp",
                                                type: "text",
                                                name: "subject",
                                                placeholder: "Subject",
                                                value: formData.subject,
                                                onChange: handleChange
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Contact.tsx",
                                                lineNumber: 76,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "number",
                                                name: "number",
                                                placeholder: "+212 123456789"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Contact.tsx",
                                                lineNumber: 77,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Contact.tsx",
                                        lineNumber: 75,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        type: "hidden",
                                        name: "_captcha",
                                        value: "false"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Contact.tsx",
                                        lineNumber: 79,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        type: "hidden",
                                        name: "_template",
                                        value: "table"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Contact.tsx",
                                        lineNumber: 80,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        required: true,
                                        name: "msg",
                                        placeholder: "Message",
                                        value: formData.msg,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Contact.tsx",
                                        lineNumber: 81,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "btn-53 btn2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "original",
                                                children: "Submit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Contact.tsx",
                                                lineNumber: 83,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "letters",
                                                children: "Submit".split("").map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: char
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/components/Contact.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 52
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Contact.tsx",
                                                lineNumber: 84,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Contact.tsx",
                                        lineNumber: 82,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Contact.tsx",
                                lineNumber: 70,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Contact.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Contact.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Contact.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Contact, "XZYWfVcvcRrCaUm3kZU4vjamNLE=");
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_1267d2bd._.js.map