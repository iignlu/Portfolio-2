/* ============================================================
   ABDULLAH ALSHEHRI — PORTFOLIO
   Vanilla JS, no dependencies. i18n + nav + reveal. That's it.
   ============================================================ */
(function () {
    'use strict';

    var root = document.documentElement;
    var body = document.body;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------------- i18n ---------------- */
    var DICT = {
        en: {
            'nav.about': 'About', 'nav.work': 'Work',
            'nav.path': 'Experience', 'nav.contact': 'Contact',

            'hero.status': 'Available for work',
            'hero.title': 'Abdullah Alshehri',
            'hero.role': 'Full-Stack Developer',
            'hero.bio': 'I build web applications with React and Laravel. I spent my co-op at Saudi Arabia Railways building internal tools and dashboards for train operations, and I hold a BSc in Computer Science from Jubail Industrial College.',
            'hero.cta1': 'Get in touch',
            'hero.cta2': 'Resume',

            'about.label': 'About',
            'about.lead': 'I turn business requirements into software people actually use.',
            'about.p1': 'Most of my work sits where the frontend meets real operational data — forms people fill in every day, workflows that have to be right, and dashboards someone actually makes decisions from.',
            'about.p2': 'React and Laravel are my daily tools; Python and SQL are where I go when the problem is data.',
            'about.front': 'Frontend', 'about.back': 'Backend', 'about.tools': 'Tools',

            'work.label': 'Selected work',
            'work.title': "Things I've built",
            'work.featured': 'Featured',
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

            'path.label': 'Experience',
            'path.title': "Where I've been",
            'path.org1': 'Saudi Arabia Railways (SAR)',
            'path.r1': 'Co-op Trainee',
            'path.d1': 'Jan 2026 — May 2026',
            'path.b1': 'Built a full-stack web app for tracking train trips, wagons and cargo',
            'path.b2': 'Created data entry forms and automated daily operational workflows',
            'path.b3': 'Designed KPI dashboards for monitoring operational performance',
            'path.b4': 'Turned business requirements into shipped features with the team',
            'path.o2': 'BSc Computer Science',
            'path.col': 'Jubail Industrial College',
            'path.loc': 'Abha, Saudi Arabia',
            'path.awards': 'Achievements & certificates',
            'path.a1': '1st Place — Programming Contest (CPC)',
            'path.a1s': 'Computer Club · 2024',
            'path.a2': 'Certificate of Appreciation — Co-op Training',

            'contact.label': 'Contact',
            'contact.title': "Let's talk",
            'contact.sub': 'Have a role, a project, or just want to say hi?',

            'form.name': 'Name', 'form.email': 'Email',
            'form.message': 'Message', 'form.send': 'Send message'
        },
        ar: {
            'nav.about': 'نبذة', 'nav.work': 'الأعمال',
            'nav.path': 'الخبرة', 'nav.contact': 'تواصل',

            'hero.status': 'متاح للعمل',
            'hero.title': 'عبدالله الشهري',
            'hero.role': 'مطوّر ويب متكامل',
            'hero.bio': 'أبني تطبيقات ويب باستخدام React و Laravel. قضيت تدريبي التعاوني في الخطوط الحديدية السعودية (سار) في بناء أدوات ولوحات مؤشرات داخلية لعمليات القطارات، وأحمل بكالوريوس علوم الحاسب من الكلية الصناعية بالجبيل.',
            'hero.cta1': 'تواصل معي',
            'hero.cta2': 'السيرة الذاتية',

            'about.label': 'نبذة',
            'about.lead': 'أحوّل متطلبات العمل إلى برمجيات يستخدمها الناس فعلًا.',
            'about.p1': 'معظم عملي يقع عند التقاء الواجهة الأمامية ببيانات التشغيل الحقيقية — نماذج يعبّئها الموظفون كل يوم، وإجراءات لا تحتمل الخطأ، ولوحات مؤشرات يُبنى عليها قرار فعلي.',
            'about.p2': 'React و Laravel أدواتي اليومية، وأتّجه إلى Python و SQL حين تكون المشكلة في البيانات.',
            'about.front': 'الواجهة', 'about.back': 'الخلفية', 'about.tools': 'الأدوات',

            'work.label': 'أعمال مختارة',
            'work.title': 'أشياء بنيتها',
            'work.featured': 'مميّز',
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

            'path.label': 'الخبرة',
            'path.title': 'أين كنت',
            'path.org1': 'الخطوط الحديدية السعودية (سار)',
            'path.r1': 'متدرّب تعاوني',
            'path.d1': 'يناير 2026 — مايو 2026',
            'path.b1': 'بنيت تطبيق ويب متكامل لتتبّع رحلات القطارات والعربات والشحنات',
            'path.b2': 'أنشأت نماذج إدخال بيانات وأتمتة لإجراءات التشغيل اليومية',
            'path.b3': 'صمّمت لوحات مؤشرات أداء لمتابعة الأداء التشغيلي',
            'path.b4': 'حوّلت متطلبات العمل إلى مزايا جاهزة بالعمل مع الفريق',
            'path.o2': 'بكالوريوس علوم الحاسب',
            'path.col': 'الكلية الصناعية بالجبيل',
            'path.loc': 'أبها، السعودية',
            'path.awards': 'الإنجازات والشهادات',
            'path.a1': 'المركز الأول — مسابقة البرمجة (CPC)',
            'path.a1s': 'نادي الحاسب · 2024',
            'path.a2': 'شهادة شكر وتقدير — التدريب التعاوني',

            'contact.label': 'تواصل',
            'contact.title': 'لنتحدث',
            'contact.sub': 'عندك وظيفة أو مشروع أو ودّك تسلّم؟',

            'form.name': 'الاسم', 'form.email': 'البريد',
            'form.message': 'الرسالة', 'form.send': 'إرسال الرسالة'
        }
    };

    var lang = 'en';
    try { lang = localStorage.getItem('aa-lang') === 'ar' ? 'ar' : 'en'; } catch (e) { }

    function applyLang(next) {
        lang = next;
        var d = DICT[lang];

        root.lang = lang;
        root.dir = lang === 'ar' ? 'rtl' : 'ltr';
        try { localStorage.setItem('aa-lang', lang); } catch (e) { }

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var v = d[el.getAttribute('data-i18n')];
            if (v != null) el.textContent = v;
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var v = d[el.getAttribute('data-i18n-html')];
            if (v != null) el.innerHTML = v;
        });

        var lbl = document.getElementById('langLabel');
        if (lbl) lbl.textContent = lang === 'en' ? 'عربي' : 'English';
    }

    /* ---------------- reveal ----------------
       Geometry-based rather than IntersectionObserver: elements start at
       opacity 0, so a callback that never lands would leave the page blank. */
    var pending = [];

    function initReveal() {
        pending = Array.prototype.slice.call(document.querySelectorAll('.r'));
        if (reduce) {
            pending.forEach(function (el) { el.classList.add('in'); });
            pending = [];
            return;
        }
        // stagger items that share a row/grid so they cascade rather than pop
        pending.forEach(function (el, i) {
            el.style.transitionDelay = ((i % 6) * 0.05).toFixed(2) + 's';
        });
    }

    function checkReveal() {
        if (!pending.length) return;
        var vh = window.innerHeight;
        for (var i = pending.length - 1; i >= 0; i--) {
            var r = pending[i].getBoundingClientRect();
            if (r.top < vh * 0.9 && r.bottom > 0) {
                pending[i].classList.add('in');
                pending.splice(i, 1);
            }
        }
    }

    /* ---------------- nav ---------------- */
    var nav = document.getElementById('nav');
    var navLinks = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('main section[id]');

    function onScroll() {
        var y = window.scrollY || window.pageYOffset;
        nav.classList.toggle('stuck', y > 20);

        var active = '';
        sections.forEach(function (s) {
            if (y + window.innerHeight * 0.35 >= s.offsetTop) active = s.id;
        });
        navLinks.forEach(function (l) {
            l.classList.toggle('on', l.getAttribute('href') === '#' + active);
        });

        checkReveal();
    }

    /* ---------------- menu ---------------- */
    var menuOpen = false;
    var burger = document.getElementById('burger');
    var menu = document.getElementById('menu');

    function setMenu(open) {
        menuOpen = open;
        burger.classList.toggle('on', open);
        burger.setAttribute('aria-expanded', String(open));
        menu.classList.toggle('on', open);
        body.classList.toggle('locked', open);
    }

    /* ---------------- boot ---------------- */
    function boot() {
        applyLang(lang);
        initReveal();

        document.getElementById('langToggle').addEventListener('click', function () {
            applyLang(lang === 'en' ? 'ar' : 'en');
            checkReveal();
        });

        burger.addEventListener('click', function () { setMenu(!menuOpen); });
        document.querySelectorAll('.menu-link').forEach(function (a) {
            a.addEventListener('click', function () { setMenu(false); });
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && menuOpen) setMenu(false);
        });

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', function () { checkReveal(); }, { passive: true });
        window.addEventListener('load', checkReveal);

        onScroll();
        // first paint: let the hero settle in rather than appear mid-transition
        requestAnimationFrame(function () { requestAnimationFrame(checkReveal); });
        setTimeout(checkReveal, 300);
    }

    root.classList.remove('no-js');
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
