/* ============================================================
   ABDULLAH ALSHEHRI — PORTFOLIO
   Vanilla JS. No dependencies.
   ============================================================ */
(function () {
    'use strict';

    var root = document.documentElement;
    var body = document.body;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
    var lerp = function (a, b, t) { return a + (b - a) * t; };

    /* ========================================================
       1. I18N
       ======================================================== */
    var DICT = {
        en: {
            'loader.tag': 'Portfolio — 2026',
            'nav.home': 'Home', 'nav.about': 'About', 'nav.work': 'Work',
            'nav.path': 'Path', 'nav.contact': 'Contact',

            'hero.status': 'Open to opportunities',
            'hero.first': 'Abdullah',
            'hero.last': 'Alshehri',
            'hero.role': 'Full-Stack Developer',
            'hero.bio': 'I build web applications with React and Laravel. I spent my co-op at Saudi Arabia Railways building internal tools and dashboards for train operations, and I hold a BSc in Computer Science from Jubail Industrial College.',
            'hero.cta1': 'Get in touch',
            'hero.cta2': 'Resume',
            'hero.scroll': 'Scroll',

            'about.label': 'About',
            'about.statement': 'I turn business requirements into software people actually use — from <em>train operations dashboards</em> at Saudi Arabia Railways to a <em>machine-learning model</em> that reads retinal scans.',
            'about.p1': 'I am a Computer Science graduate from Jubail Industrial College, based in Jubail, Saudi Arabia. Most of my work sits where the frontend meets real operational data — forms people fill in every day, workflows that have to be right, and dashboards someone actually makes decisions from.',
            'about.p2': 'I like the part of the job where a vague requirement becomes a screen that works. React and Laravel are my daily tools; Python and SQL are where I go when the problem is data.',
            'about.stat1': 'Place — CPC 2024',
            'about.stat2': 'Projects shipped',
            'about.stat3': 'BSc Computer Science',
            'about.front': 'Frontend', 'about.back': 'Backend', 'about.tools': 'Tools',

            'work.label': 'Selected work',
            'work.title': "Things I've built",
            'work.featured': 'Featured',
            'work.open': 'Open',
            'work.comp': 'Competition',
            'work.p1.name': 'Train Operations App',
            'work.p1.desc': 'Full-stack app for tracking train trips, wagons and cargo — data entry workflows plus KPI dashboards. Built during my co-op at SAR.',
            'work.p2.name': 'Diabetic Retinopathy Detection',
            'work.p2.desc': 'A machine-learning model that analyses retinal images to flag early signs of diabetic retinopathy. My capstone project.',
            'work.p3.name': 'Portfolio UI Design',
            'work.p3.desc': 'The Figma prototype I designed before building this site — my first end-to-end design-to-code project.',
            'work.p4.name': 'Plant Watering System',
            'work.p4.desc': 'Mobile UI for an IoT plant monitor — soil-moisture tracking and watering alerts. Built for my HCI course.',
            'work.p5.name': 'Wikipedia Redesign',
            'work.p5.desc': "A UI/UX competition entry modernising Wikipedia's interface, focused on readability and navigation.",
            'work.p6.name': 'Portfolio v1',
            'work.p6.desc': 'My first portfolio, built with vanilla HTML and CSS. Where it all started.',

            'path.label': 'Path',
            'path.title': 'Experience & education',
            'path.k1': 'Co-op',
            'path.org1': 'Saudi Arabia Railways (SAR)',
            'path.r1': 'Co-op Trainee',
            'path.d1': 'Jan 2025 — May 2026',
            'path.b1': 'Built a full-stack web app for tracking train trips, wagons and cargo',
            'path.b2': 'Created data entry forms and automated daily operational workflows',
            'path.b3': 'Designed KPI dashboards for monitoring operational performance',
            'path.b4': 'Worked with the team to turn business requirements into shipped features',
            'path.k2': 'Education',
            'path.o2': 'BSc Computer Science',
            'path.col': 'Jubail Industrial College',
            'path.loc': 'Jubail, Saudi Arabia',
            'path.awards': 'Achievements & certificates',
            'path.a1': '1st Place — Programming Contest (CPC)',
            'path.a1s': 'Computer Club · 2024',
            'path.a2': 'Certificate of Appreciation — Co-op Training',

            'contact.label': 'Contact',
            'contact.title': "Let's talk",
            'contact.sub': 'Have a role, a project, or just want to say hi? My inbox is open.',
            'contact.phone': 'Phone', 'contact.loc': 'Location', 'contact.local': 'Local time',

            'form.name': 'Name', 'form.email': 'Email', 'form.subject': 'Subject',
            'form.message': 'Message', 'form.send': 'Send message',

            'foot.top': 'Back to top ↑',
            'foot.mark': 'ALSHEHRI',
            'foot.built': 'Built from scratch — HTML, CSS, WebGL'
        },
        ar: {
            'loader.tag': 'معرض الأعمال — 2026',
            'nav.home': 'الرئيسية', 'nav.about': 'نبذة', 'nav.work': 'الأعمال',
            'nav.path': 'المسار', 'nav.contact': 'تواصل',

            'hero.status': 'متاح للفرص',
            'hero.first': 'عبدالله',
            'hero.last': 'الشهري',
            'hero.role': 'مطوّر ويب متكامل',
            'hero.bio': 'أبني تطبيقات ويب باستخدام React و Laravel. قضيت فترة تدريبي التعاوني في الخطوط الحديدية السعودية (سار) في بناء أدوات ولوحات مؤشرات داخلية لعمليات القطارات، وأحمل بكالوريوس علوم الحاسب من الكلية الصناعية بالجبيل.',
            'hero.cta1': 'تواصل معي',
            'hero.cta2': 'السيرة الذاتية',
            'hero.scroll': 'مرّر',

            'about.label': 'نبذة',
            'about.statement': 'أحوّل متطلبات العمل إلى برمجيات يستخدمها الناس فعلًا — من <em>لوحات مؤشرات عمليات القطارات</em> في الخطوط الحديدية السعودية إلى <em>نموذج تعلّم آلي</em> يقرأ صور الشبكية.',
            'about.p1': 'خريج علوم حاسب من الكلية الصناعية بالجبيل، ومقيم في الجبيل بالمنطقة الشرقية. معظم عملي يقع عند التقاء الواجهة الأمامية ببيانات التشغيل الحقيقية — نماذج يعبّئها الموظفون كل يوم، وإجراءات لا تحتمل الخطأ، ولوحات مؤشرات يُبنى عليها قرار فعلي.',
            'about.p2': 'أحبّ الجزء الذي يتحوّل فيه متطلب غامض إلى شاشة تشتغل. React و Laravel أدواتي اليومية، وأتّجه إلى Python و SQL حين تكون المشكلة في البيانات.',
            'about.stat1': 'المركز الأول — مسابقة البرمجة 2024',
            'about.stat2': 'مشاريع منجزة',
            'about.stat3': 'بكالوريوس علوم الحاسب',
            'about.front': 'الواجهة', 'about.back': 'الخلفية', 'about.tools': 'الأدوات',

            'work.label': 'أعمال مختارة',
            'work.title': 'أشياء بنيتها',
            'work.featured': 'مميّز',
            'work.open': 'فتح',
            'work.comp': 'مسابقة',
            'work.p1.name': 'تطبيق عمليات القطارات',
            'work.p1.desc': 'تطبيق متكامل لتتبّع رحلات القطارات والعربات والشحنات — إجراءات إدخال بيانات ولوحات مؤشرات أداء. بُني خلال تدريبي في سار.',
            'work.p2.name': 'الكشف عن اعتلال الشبكية السكري',
            'work.p2.desc': 'نموذج تعلّم آلي يحلّل صور الشبكية لرصد العلامات المبكرة لاعتلال الشبكية السكري. مشروع التخرّج.',
            'work.p3.name': 'تصميم واجهة البورتفوليو',
            'work.p3.desc': 'النموذج الأولي في Figma الذي صمّمته قبل بناء هذا الموقع — أول مشروع لي من التصميم حتى الكود.',
            'work.p4.name': 'نظام ري النباتات',
            'work.p4.desc': 'واجهة جوال لنظام إنترنت أشياء لمراقبة النبات — تتبّع رطوبة التربة وتنبيهات الري. لمقرر تفاعل الإنسان والحاسب.',
            'work.p5.name': 'إعادة تصميم ويكيبيديا',
            'work.p5.desc': 'مشاركة في مسابقة تصميم واجهات لتحديث واجهة ويكيبيديا، بتركيز على سهولة القراءة والتنقّل.',
            'work.p6.name': 'البورتفوليو — الإصدار الأول',
            'work.p6.desc': 'أول بورتفوليو لي، مبني بـ HTML و CSS خام. من هنا بدأت الحكاية.',

            'path.label': 'المسار',
            'path.title': 'الخبرة والتعليم',
            'path.k1': 'تدريب تعاوني',
            'path.org1': 'الخطوط الحديدية السعودية (سار)',
            'path.r1': 'متدرّب تعاوني',
            'path.d1': 'يناير 2025 — مايو 2026',
            'path.b1': 'بنيت تطبيق ويب متكامل لتتبّع رحلات القطارات والعربات والشحنات',
            'path.b2': 'أنشأت نماذج إدخال بيانات وأتمتة لإجراءات التشغيل اليومية',
            'path.b3': 'صمّمت لوحات مؤشرات أداء لمتابعة الأداء التشغيلي',
            'path.b4': 'عملت مع الفريق على تحويل متطلبات العمل إلى مزايا جاهزة',
            'path.k2': 'تعليم',
            'path.o2': 'بكالوريوس علوم الحاسب',
            'path.col': 'الكلية الصناعية بالجبيل',
            'path.loc': 'الجبيل، السعودية',
            'path.awards': 'الإنجازات والشهادات',
            'path.a1': 'المركز الأول — مسابقة البرمجة (CPC)',
            'path.a1s': 'نادي الحاسب · 2024',
            'path.a2': 'شهادة شكر وتقدير — التدريب التعاوني',

            'contact.label': 'تواصل',
            'contact.title': 'لنتحدث',
            'contact.sub': 'عندك وظيفة أو مشروع أو ودّك تسلّم؟ بريدي مفتوح دائمًا.',
            'contact.phone': 'الجوال', 'contact.loc': 'الموقع', 'contact.local': 'التوقيت المحلي',

            'form.name': 'الاسم', 'form.email': 'البريد', 'form.subject': 'الموضوع',
            'form.message': 'الرسالة', 'form.send': 'إرسال الرسالة',

            'foot.top': 'أعلى الصفحة ↑',
            'foot.mark': 'الشهري',
            'foot.built': 'مبني من الصفر — HTML و CSS و WebGL'
        }
    };

    var lang = 'en';
    try { lang = localStorage.getItem('aa-lang') || 'en'; } catch (e) { }
    if (lang !== 'ar') lang = 'en';

    function applyLang(next, animate) {
        lang = next;
        var d = DICT[lang];

        root.lang = lang;
        root.dir = lang === 'ar' ? 'rtl' : 'ltr';
        try { localStorage.setItem('aa-lang', lang); } catch (e) { }

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var v = d[el.getAttribute('data-i18n')];
            if (v == null) return;
            el.textContent = v;
            // buildSplits() restores from data-origin — refresh it or the split undoes this
            if (el.hasAttribute('data-split')) el.dataset.origin = el.innerHTML;
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var v = d[el.getAttribute('data-i18n-html')];
            if (v == null) return;
            el.innerHTML = v;
            if (el.hasAttribute('data-split')) el.dataset.origin = el.innerHTML;
        });

        document.querySelectorAll('.lang-opt').forEach(function (o) {
            o.classList.toggle('is-on', o.dataset.lang === lang);
        });

        // rebuild letter/word splits for the new script
        buildSplits(!!animate);
        if (animate) {
            // re-show only what the reader has already scrolled past;
            // sections still below the fold keep their entrance animation
            document.querySelectorAll('[data-split]').forEach(function (el) {
                if (pending.indexOf(el) === -1) el.classList.add('is-shown');
            });
            litWords();
            checkReveal();
        }
        setTicker();
    }

    /* ========================================================
       2. SPLIT TEXT  (Arabic never splits per letter — it joins)
       ======================================================== */
    function splitNode(rootEl, mode) {
        var made = [];
        var perLetter = mode === 'chars' && lang !== 'ar';

        (function walk(node) {
            Array.prototype.slice.call(node.childNodes).forEach(function (child) {
                if (child.nodeType === 3) {
                    var txt = child.textContent;
                    if (!txt.trim()) return;
                    var frag = document.createDocumentFragment();
                    txt.split(/(\s+)/).forEach(function (part) {
                        if (!part) return;
                        if (/^\s+$/.test(part)) {
                            frag.appendChild(document.createTextNode(part));
                            return;
                        }
                        if (perLetter) {
                            var wrap = document.createElement('span');
                            wrap.className = 'wdw';
                            part.split('').forEach(function (c) {
                                var s = document.createElement('span');
                                s.className = 'ch';
                                s.textContent = c;
                                made.push(s);
                                wrap.appendChild(s);
                            });
                            frag.appendChild(wrap);
                        } else {
                            var s2 = document.createElement('span');
                            s2.className = mode === 'chars' ? 'ch' : 'wd';
                            s2.textContent = part;
                            made.push(s2);
                            frag.appendChild(s2);
                        }
                    });
                    child.parentNode.replaceChild(frag, child);
                } else if (child.nodeType === 1) {
                    walk(child);
                }
            });
        })(rootEl);

        return made;
    }

    function buildSplits(skipStagger) {
        document.querySelectorAll('[data-split]').forEach(function (el) {
            if (el.dataset.origin == null) el.dataset.origin = el.innerHTML;
            else el.innerHTML = el.dataset.origin;

            var mode = el.getAttribute('data-split');
            // a11y: read the whole phrase, not one letter at a time
            var plain = el.textContent.replace(/\s+/g, ' ').trim();
            var parts = splitNode(el, mode);

            el.setAttribute('aria-label', plain);
            Array.prototype.forEach.call(el.children, function (c) {
                c.setAttribute('aria-hidden', 'true');
            });

            if (mode === 'chars' && !skipStagger) {
                parts.forEach(function (p, i) {
                    p.style.transitionDelay = (i * 0.026).toFixed(3) + 's';
                });
            }
        });
    }

    /* ========================================================
       3. WEBGL ATMOSPHERE
       ======================================================== */
    var VERT = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
    var FRAG = [
        'precision mediump float;',
        'uniform vec2 u_res;uniform float u_time;uniform vec2 u_mouse;uniform float u_scroll;',
        'float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}',
        'float noise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);',
        'return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);}',
        'float fbm(vec2 p){float v=0.,a=.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);',
        'for(int i=0;i<4;i++){v+=a*noise(p);p=m*p;a*=.5;}return v;}',
        'void main(){',
        ' vec2 uv=gl_FragCoord.xy/u_res;',
        ' float ar=u_res.x/u_res.y;',
        ' vec2 p=uv; p.x*=ar;',
        ' float t=u_time*0.042;',
        ' p+=(u_mouse-0.5)*0.30;',
        ' p.y+=u_scroll*0.60;',
        ' vec2 q=vec2(fbm(p*1.55+vec2(0.,t)),fbm(p*1.55+vec2(5.2,1.3)-t*0.6));',
        ' vec2 r=vec2(fbm(p*1.55+3.*q+vec2(1.7,9.2)+t*1.15),fbm(p*1.55+3.*q+vec2(8.3,2.8)+t*0.85));',
        ' float f=fbm(p*1.55+2.4*r);',
        ' vec3 VOID=vec3(.024,.024,.039);',
        ' vec3 PLASMA=vec3(.486,.361,1.);',
        ' vec3 ION=vec3(.208,.878,.816);',
        ' vec3 FLARE=vec3(1.,.353,.122);',
        ' vec3 col=VOID;',
        ' col=mix(col,PLASMA,clamp(f*f*2.6,0.,1.));',
        ' col=mix(col,ION,clamp(length(q)*.70,0.,1.));',
        ' col=mix(col,FLARE,clamp(r.x*r.x*1.15,0.,1.));',
        ' col*=0.42;',
        ' col=mix(VOID,col,smoothstep(0.,.6,f+.22));',
        ' vec2 mp=vec2(u_mouse.x*ar,u_mouse.y);',
        ' float d=distance(vec2(uv.x*ar,uv.y),mp);',
        ' col+=FLARE*.05*exp(-d*3.4);',
        ' col*=1.-.28*smoothstep(.35,1.,uv.y);',
        ' gl_FragColor=vec4(col,1.);',
        '}'
    ].join('\n');

    var glState = null;

    function initGL() {
        if (reduce) return false;
        var cv = document.getElementById('gl');
        if (!cv) return false;

        var gl = cv.getContext('webgl', { alpha: false, antialias: false, depth: false, powerPreference: 'low-power' })
            || cv.getContext('experimental-webgl');
        if (!gl) return false;

        function shader(type, src) {
            var s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) return null;
            return s;
        }

        var vs = shader(gl.VERTEX_SHADER, VERT);
        var fs = shader(gl.FRAGMENT_SHADER, FRAG);
        if (!vs || !fs) return false;

        var prog = gl.createProgram();
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return false;
        gl.useProgram(prog);

        var buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        var loc = gl.getAttribLocation(prog, 'a');
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

        glState = {
            gl: gl, cv: cv,
            u_res: gl.getUniformLocation(prog, 'u_res'),
            u_time: gl.getUniformLocation(prog, 'u_time'),
            u_mouse: gl.getUniformLocation(prog, 'u_mouse'),
            u_scroll: gl.getUniformLocation(prog, 'u_scroll'),
            mx: 0.5, my: 0.5, tx: 0.5, ty: 0.5, scroll: 0
        };

        sizeGL();
        window.addEventListener('resize', sizeGL, { passive: true });
        body.classList.add('gl-on');
        return true;
    }

    function sizeGL() {
        if (!glState) return;
        var scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.55;
        var w = Math.max(1, Math.round(window.innerWidth * scale));
        var h = Math.max(1, Math.round(window.innerHeight * scale));
        glState.cssW = window.innerWidth;
        glState.cssH = window.innerHeight;
        glState.cv.width = w;
        glState.cv.height = h;
        glState.gl.viewport(0, 0, w, h);
        glState.gl.uniform2f(glState.u_res, w, h);
    }

    /* ========================================================
       4. CURSOR
       ======================================================== */
    var cur = { x: innerWidth / 2, y: innerHeight / 2, rx: innerWidth / 2, ry: innerHeight / 2 };
    var dotEl = document.getElementById('cursorDot');
    var ringEl = document.getElementById('cursorRing');
    var labelEl = document.getElementById('cursorLabel');

    function initCursor() {
        if (!fine || reduce) return;
        body.classList.add('cursor-on');

        document.addEventListener('mouseover', function (e) {
            var t = e.target.closest ? e.target.closest('[data-cursor]') : null;
            ringEl.classList.remove('is-link', 'is-view', 'is-text');
            if (!t) { labelEl.textContent = ''; return; }
            var kind = t.getAttribute('data-cursor');
            ringEl.classList.add('is-' + kind);
            labelEl.textContent = kind === 'view' ? (DICT[lang]['work.open'] || 'Open') : '';
        });

        document.addEventListener('mouseleave', function () { ringEl.style.opacity = 0; });
        document.addEventListener('mouseenter', function () { ringEl.style.opacity = ''; });
    }

    document.addEventListener('mousemove', function (e) {
        cur.x = e.clientX; cur.y = e.clientY;
        if (glState) {
            glState.tx = e.clientX / innerWidth;
            glState.ty = 1 - e.clientY / innerHeight;
        }
    }, { passive: true });

    /* ========================================================
       5. MAGNETIC BUTTONS
       ======================================================== */
    function initMagnetic() {
        if (!fine || reduce) return;
        document.querySelectorAll('[data-magnetic]').forEach(function (el) {
            el.addEventListener('mousemove', function (e) {
                var r = el.getBoundingClientRect();
                var dx = e.clientX - (r.left + r.width / 2);
                var dy = e.clientY - (r.top + r.height / 2);
                el.style.transform = 'translate(' + dx * 0.22 + 'px,' + dy * 0.32 + 'px)';
            });
            el.addEventListener('mouseleave', function () {
                el.style.transition = 'transform .55s cubic-bezier(.22,1,.36,1)';
                el.style.transform = '';
                setTimeout(function () { el.style.transition = ''; }, 560);
            });
        });
    }

    /* ========================================================
       6. REVEAL
       ======================================================== */
    // Geometry-driven, not IntersectionObserver: content starts at opacity 0,
    // so a missed callback would leave the page blank. This can't miss.
    var pending = [];

    function initReveal() {
        pending = Array.prototype.slice
            .call(document.querySelectorAll('[data-reveal], [data-split]'))
            .filter(function (el) { return !el.closest('.hero'); }); // hero is driven by the loader
    }

    function checkReveal() {
        var vh = window.innerHeight;
        for (var i = pending.length - 1; i >= 0; i--) {
            var r = pending[i].getBoundingClientRect();
            if (r.top < vh * 0.92 && r.bottom > 0) {
                pending[i].classList.add('is-shown');
                pending.splice(i, 1);
            }
        }
        if (!termStarted) {
            var t = document.querySelector('.about-terminal');
            if (t && t.getBoundingClientRect().top < vh * 0.85) {
                termStarted = true;
                typeTerm();
            }
        }
    }

    // words light up progressively as the block scrolls through
    function litWords() {
        document.querySelectorAll('[data-split="words"]').forEach(function (block) {
            var r = block.getBoundingClientRect();
            var start = innerHeight * 0.88;
            var end = innerHeight * 0.32;
            var prog = clamp((start - r.top) / (start - end), 0, 1);
            var words = block.querySelectorAll('.wd');
            var upTo = Math.round(prog * words.length);
            for (var i = 0; i < words.length; i++) {
                words[i].classList.toggle('is-lit', i < upTo);
            }
        });
    }

    /* ========================================================
       7. NAV / PROGRESS / ACTIVE LINK
       ======================================================== */
    var nav = document.getElementById('nav');
    var progressBar = document.getElementById('progressBar');
    var navLinks = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('main section[id]');
    var lastY = 0;

    function onScroll() {
        var y = window.scrollY || window.pageYOffset;
        var max = document.documentElement.scrollHeight - innerHeight;
        var p = max > 0 ? y / max : 0;

        nav.classList.toggle('is-stuck', y > 40);
        nav.classList.toggle('is-hidden', y > 420 && y > lastY && !menuOpen);
        lastY = y;

        if (progressBar) progressBar.style.width = (p * 100).toFixed(2) + '%';
        if (glState) glState.scroll = p;

        var active = '';
        sections.forEach(function (s) {
            if (y + innerHeight * 0.32 >= s.offsetTop) active = s.id;
        });
        navLinks.forEach(function (l) {
            l.classList.toggle('is-active', l.getAttribute('href') === '#' + active);
        });

        checkReveal();
        if (!reduce) litWords();
    }

    /* ========================================================
       8. MOBILE MENU
       ======================================================== */
    var menuOpen = false;
    var burger = document.getElementById('burger');
    var menu = document.getElementById('menu');

    function setMenu(open) {
        menuOpen = open;
        burger.classList.toggle('is-open', open);
        burger.setAttribute('aria-expanded', String(open));
        menu.classList.toggle('is-open', open);
        body.classList.toggle('is-locked', open);
    }

    /* ========================================================
       9. TICKER
       ======================================================== */
    var track = document.getElementById('tickerTrack');
    var tickerX = 0, tickerVel = 0, setW = 0;

    function setTicker() {
        if (!track) return;
        var first = track.querySelector('.ticker-set');
        if (!first) return;
        while (track.children.length > 1) track.removeChild(track.lastChild);
        setW = first.getBoundingClientRect().width;
        var need = Math.ceil((innerWidth * 2) / Math.max(setW, 1)) + 1;
        for (var i = 0; i < need; i++) track.appendChild(first.cloneNode(true));
        tickerX = 0;
    }

    /* ========================================================
       10. TERMINAL TYPING
       ======================================================== */
    var TERM = [
        ['{', 'pun'],
        ['  "name": "Abdullah Alshehri",', 'line'],
        ['  "role": "Full-Stack Developer",', 'line'],
        ['  "stack": ["React", "Laravel", "Python"],', 'line'],
        ['  "degree": "BSc Computer Science",', 'line'],
        ['  "based": "Jubail, Saudi Arabia",', 'line'],
        ['  "open_to_work": true', 'line'],
        ['}', 'pun']
    ];

    function paint(raw) {
        return raw
            .replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/"([^"]*)":/g, '<span class="t-key">"$1"</span><span class="t-pun">:</span>')
            .replace(/: "([^"]*)"/g, ': <span class="t-str">"$1"</span>')
            .replace(/"([A-Za-z][^"]*)"(?=[,\]])/g, '<span class="t-str">"$1"</span>')
            .replace(/\btrue\b/g, '<span class="t-bool">true</span>');
    }

    function typeTerm() {
        var el = document.getElementById('termCode');
        if (!el) return;
        var full = TERM.map(function (l) { return l[0]; });

        if (reduce) {
            el.innerHTML = full.map(paint).join('\n');
            return;
        }

        var li = 0, ci = 0;
        (function step() {
            if (li >= full.length) {
                el.innerHTML = full.map(paint).join('\n') + '<span class="caret"></span>';
                return;
            }
            var line = full[li];
            if (ci <= line.length) {
                var done = full.slice(0, li).map(paint).join('\n');
                var now = paint(line.slice(0, ci));
                el.innerHTML = (li ? done + '\n' : '') + now + '<span class="caret"></span>';
                ci++;
                setTimeout(step, line[ci - 1] === ' ' ? 8 : 20);
            } else {
                li++; ci = 0;
                setTimeout(step, 60);
            }
        })();
    }

    var termStarted = false;

    /* ========================================================
       11. CLOCK (Riyadh)
       ======================================================== */
    function tickClock() {
        var el = document.getElementById('clock');
        if (!el) return;
        try {
            el.textContent = new Intl.DateTimeFormat(lang === 'ar' ? 'ar-SA' : 'en-GB', {
                hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Riyadh'
            }).format(new Date()) + (lang === 'ar' ? ' — الرياض' : ' — GMT+3');
        } catch (e) {
            el.textContent = 'GMT+3';
        }
    }

    /* ========================================================
       12. PRELOADER
       ======================================================== */
    function runLoader(done) {
        var el = document.getElementById('loader');
        if (!el || reduce) {
            if (el) el.classList.add('is-gone');
            done();
            return;
        }

        var num = document.getElementById('loaderNum');
        var bar = document.getElementById('loaderBar');
        var val = 0;
        var started = performance.now();
        var finished = false;

        function finish() {
            if (finished) return;
            finished = true;
            num.textContent = '100';
            bar.style.width = '100%';
            el.classList.add('is-done');
            done();
            setTimeout(function () { el.classList.add('is-gone'); }, 1200);
        }

        // rAF is paused in background tabs — never let the curtain get stuck.
        setTimeout(finish, 3000);

        (function tick() {
            if (finished) return;
            var elapsed = performance.now() - started;
            var target = Math.min(100, (elapsed / 1500) * 100);
            val = lerp(val, target, 0.14);
            if (target >= 100 && val > 99.4) val = 100;
            num.textContent = Math.round(val);
            bar.style.width = val + '%';

            if (val < 100) { requestAnimationFrame(tick); return; }
            finish();
        })();
    }

    /* ========================================================
       13. MAIN LOOP
       ======================================================== */
    var last = performance.now();

    function loop(now) {
        var dt = Math.min((now - last) / 1000, 0.05);
        last = now;

        // cursor
        if (fine && !reduce && dotEl) {
            cur.rx = lerp(cur.rx, cur.x, 0.16);
            cur.ry = lerp(cur.ry, cur.y, 0.16);
            dotEl.style.transform = 'translate(' + cur.x + 'px,' + cur.y + 'px)';
            ringEl.style.transform = 'translate(' + cur.rx + 'px,' + cur.ry + 'px)';
        }

        // ticker: base drift + scroll velocity
        if (track && setW > 0 && !reduce) {
            var dir = root.dir === 'rtl' ? -1 : 1;
            tickerVel = lerp(tickerVel, 0, 0.06);
            tickerX -= (28 * dt * dir) + tickerVel * dir;
            if (dir > 0) { if (tickerX <= -setW) tickerX += setW; if (tickerX > 0) tickerX -= setW; }
            else { if (tickerX >= setW) tickerX -= setW; if (tickerX < 0) tickerX += setW; }
            track.style.transform = 'translateX(' + tickerX.toFixed(2) + 'px)';
        }

        // webgl
        if (glState && !document.hidden) {
            // viewport can report 0 before first paint (or in a hidden pane)
            if (glState.cssW !== window.innerWidth || glState.cssH !== window.innerHeight) sizeGL();
            glState.mx = lerp(glState.mx, glState.tx, 0.05);
            glState.my = lerp(glState.my, glState.ty, 0.05);
            var g = glState.gl;
            g.uniform1f(glState.u_time, now / 1000);
            g.uniform2f(glState.u_mouse, glState.mx, glState.my);
            g.uniform1f(glState.u_scroll, glState.scroll);
            g.drawArrays(g.TRIANGLES, 0, 3);
        }

        requestAnimationFrame(loop);
    }

    /* ========================================================
       14. BOOT
       ======================================================== */
    function boot() {
        applyLang(lang, false);

        initGL();
        initCursor();
        initMagnetic();
        initReveal();
        setTicker();
        tickClock();
        setInterval(tickClock, 20000);

        // language toggle
        var lt = document.getElementById('langToggle');
        if (lt) lt.addEventListener('click', function () {
            applyLang(lang === 'en' ? 'ar' : 'en', true);
            tickClock();
        });

        // menu
        burger.addEventListener('click', function () { setMenu(!menuOpen); });
        document.querySelectorAll('.menu-item').forEach(function (a) {
            a.addEventListener('click', function () { setMenu(false); });
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && menuOpen) setMenu(false);
        });

        // scroll velocity feeds the ticker
        var prevY = window.scrollY;
        window.addEventListener('scroll', function () {
            var y = window.scrollY;
            tickerVel = clamp(tickerVel + (y - prevY) * 0.35, -60, 60);
            prevY = y;
            onScroll();
        }, { passive: true });

        window.addEventListener('resize', function () { setTicker(); checkReveal(); }, { passive: true });
        // webfonts change the measured width of the ticker set — re-measure once loaded
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(setTicker).catch(function () { });
        window.addEventListener('load', setTicker);
        onScroll();
        requestAnimationFrame(loop);

        runLoader(function () {
            document.querySelectorAll('.hero [data-reveal], .hero [data-split]').forEach(function (el, i) {
                setTimeout(function () { el.classList.add('is-shown'); }, 90 + i * 70);
            });
            if (!reduce) setTimeout(litWords, 400);
        });
    }

    root.classList.remove('no-js');
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
