(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const store = {
    get(k, d) {
      try {
        const v = localStorage.getItem(k);
        return v === null ? d : JSON.parse(v);
      } catch (e) {
        return d;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem(k, JSON.stringify(v));
      } catch (e) {}
    }
  };

  const CATS = ["Казахстан", "Уральск", "Экономика", "Общество", "Образование", "Спорт", "Культура"];


  const PHOTOS = {
    "uralsk-station": ["Kazakhstan Uralsk railway station.jpg", "CC BY-SA 4.0"],
    "uralsk-airport": ["Uralsk Airport.jpg", "CC BY-SA 4.0"],
    "ural-fog": ["Fog in the Ural river valley.jpg", "CC BY-SA 4.0"],
    "uralsk-museum": ["Краеведческий музей - panoramio (8).jpg", "CC BY 3.0"],
    "astana-river": ["Astana-Ishim-River-embankment-7797.jpg", "CC BY-SA 3.0"],
    "astana-view": ["View from Bayterek tower.jpg", "CC BY 2.0"],
    "almaty-medeu": ["Алматы, Малая Алматинка у Медео зимой.jpg", "CC BY-SA 4.0"],
    "wheat": ["Жалпаксай, поле.jpg", "CC BY-SA 4.0"],
    "atyrau": ["Ural river Atyrau.jpg", "CC BY-SA 4.0"],
    "football": ["Kazakhstan v.s. Denmark UEFA Euro 2024 qualifying (2023-03-26).jpg", "CC BY-SA 4.0"],
    "edrey": ["Edrey Mountains, Karaganda region, Kazakhstan. May 2025 01.jpg", "CC BY-SA 4.0"]
  };

  const A = [
    {
      id: 1, cat: "Уральск", img: "uralsk-station", pos: "50% 60%", ago: 12, views: 6240, min: 4,
      title: "Вокзал Уральска получит новый зал ожидания и бесплатный Wi-Fi уже к лету",
      lead: "Площадь перед вокзалом благоустроят, а внутри появятся зоны для работы, камеры хранения и детская комната.",
      body: [
        "В Уральске стартует масштабная реконструкция железнодорожного вокзала. По словам представителей проекта, пассажиров ждёт современный зал ожидания с розетками, зонами для работы и бесплатным интернетом.",
        "Отдельное внимание уделят доступной среде: появятся пандусы, тактильная навигация и подъёмники. Привокзальную площадь озеленят и оборудуют новыми остановками.",
        "«Хотим, чтобы вокзал был первым, что приезжий видит в городе, и этим можно гордиться», — рассказал один из участников рабочей группы.",
        "Работы будут вести поэтапно, чтобы не останавливать движение поездов. Завершить основную часть планируют до начала летнего сезона."
      ]
    },
    {
      id: 2, cat: "Уральск", img: "uralsk-airport", pos: "50% 50%", ago: 41, views: 5120, min: 3,
      title: "Аэропорт Уральска запускает ночные рейсы в столицу: билеты от 19 тысяч тенге",
      lead: "Новый рейс позволит успеть на утренние встречи в Астане. Первые вылеты — со следующего месяца.",
      body: [
        "Авиакомпания объявила о расширении расписания: из Уральска в столицу будет добавлен вечерний рейс с возвращением на следующий день. Ожидается, что направление заинтересует деловых путешественников и студентов.",
        "В аэропорту сообщили, что готовы к увеличению пассажиропотока: усилены смены, обновлена система регистрации.",
        "Билеты уже доступны в приложении перевозчика и на кассах."
      ]
    },
    {
      id: 3, cat: "Образование", img: "astana-view", pos: "50% 40%", ago: 78, views: 4880, min: 4,
      title: "ВИТК запускает стажировки в IT-компаниях столицы для студентов старших курсов",
      lead: "Программа рассчитана на 40 человек. Участники получат наставника и шанс остаться в команде после завершения.",
      body: [
        "Университет заключил соглашения с рядом технологических компаний. Студенты будут работать над реальными задачами: от разработки интерфейсов до анализа данных.",
        "Отбор проходит в два этапа: тестовое задание и собеседование. Лучшим участникам предложат оплачиваемые позиции.",
        "«Для нас важно, чтобы выпускник приходил на рынок уже с опытом», — отметили в учебной части.",
        "Заявки принимаются до конца месяца в приёмной комиссии."
      ]
    },
    {
      id: 4, cat: "Казахстан", img: "almaty-medeu", pos: "50% 50%", ago: 110, views: 5560, min: 3,
      title: "Синоптики: в страну пришла настоящая зима — ожидаются метели и до −25°",
      lead: "Коммунальные службы переведены на усиленный режим. На трассах возможны ограничения движения.",
      body: [
        "Резкое похолодание затронет большую часть регионов. Метеорологи прогнозируют снег, порывистый ветер и ухудшение видимости на дорогах.",
        "Водителям советуют проверять состояние трассы перед выездом и брать в дорогу тёплые вещи. Школьникам младших классов в ряде городов могут перевести обучение на дистанционный формат.",
        "Мы будем обновлять материал по мере поступления новых данных."
      ]
    },
    {
      id: 5, cat: "Спорт", img: "football", pos: "50% 55%", ago: 150, views: 3980, min: 3,
      title: "Сборная сыграла вничью в напряжённом матче и сохранила шансы на выход",
      lead: "Матч прошёл при полных трибунах. Болельщики отметили вдохновенную игру обороны и яркий финиш.",
      body: [
        "Встреча получилась зрелищной: команды обменялись острыми моментами, а решающие эпизоды случились на последних минутах.",
        "Тренер отметил, что доволен характером игроков, но видит над чем работать: качество передач в центре поля и реализацию стандартов.",
        "Следующий матч состоится через две недели."
      ]
    },
    {
      id: 6, cat: "Экономика", img: "wheat", pos: "50% 70%", ago: 210, views: 4310, min: 4,
      title: "Урожай зерновых в Западном Казахстане может превзойти прошлогодние показатели",
      lead: "Хорошая влагозарядка и своевременный сев дают аграриям повод для оптимизма. Эксперты осторожны в прогнозах.",
      body: [
        "Хозяйства региона заканчивают подготовку к уборочной кампании. Техника отремонтирована, склады подготовлены.",
        "По оценкам аналитиков, при благоприятной погоде урожайность окажется выше средней за последние пять лет.",
        "Государственные программы поддержки помогают фермерам обновлять парк техники на льготных условиях."
      ]
    },
    {
      id: 7, cat: "Культура", img: "uralsk-museum", pos: "50% 50%", ago: 280, views: 3150, min: 3,
      title: "«Ночь музеев» в Уральске: экскурсии при свечах и концерт во дворе краеведческого музея",
      lead: "Вход свободный. Для гостей подготовили квесты, мастер-классы и программу живой музыки.",
      body: [
        "Организаторы приглашают горожан увидеть знакомые залы в необычном формате. Программа начнётся вечером и продлится до полуночи.",
        "Для детей подготовлены тематические квесты, а для взрослых — лекции об истории края и встречи с краеведами.",
        "«Хотим показать, что музей — это живое место, где всегда есть чему удивиться», — сказали организаторы."
      ]
    },
    {
      id: 8, cat: "Общество", img: "ural-fog", pos: "50% 60%", ago: 350, views: 2870, min: 3,
      title: "Волонтёры очистили берег Урала: за один день собрали более 3 тонн мусора",
      lead: "В акции приняли участие студенты, школьники и жители города. Организаторы планируют сделать её ежегодной.",
      body: [
        "С раннего утра на берегу работали десятки добровольцев. Участники разделились на команды и прошли по заранее намеченным участкам.",
        "Собранный мусор вывезли на переработку. Часть пластика отправят на вторичное использование.",
        "Присоединиться к следующей акции можно через страницы организаторов в социальных сетях."
      ]
    },
    {
      id: 9, cat: "Казахстан", img: "astana-river", pos: "50% 60%", ago: 430, views: 3640, min: 3,
      title: "Столица введёт единый студенческий проездной на весь общественный транспорт",
      lead: "Скидка составит до 50% от стоимости обычной поездки. Оформить карту можно будет онлайн.",
      body: [
        "Проект рассчитан на студентов очной формы обучения. Карта будет действовать на автобусах и других видах городского транспорта.",
        "Власти рассчитывают, что инициатива снизит транспортные расходы молодёжи и разгрузит дороги в часы пик.",
        "Подробные условия получения опубликуют в ближайшее время."
      ]
    },
    {
      id: 10, cat: "Экономика", img: "atyrau", pos: "50% 50%", ago: 520, views: 2540, min: 4,
      title: "Речной туризм на Урале: предприниматели планируют запустить прогулочные маршруты",
      lead: "Бизнес готов вложиться в причалы, катера и сопутствующую инфраструктуру. Нужна поддержка местных властей.",
      body: [
        "Идея включает несколько маршрутов разной продолжительности — от часовых прогулок до двухдневных сплавов.",
        "Эксперты считают, что проект может стать заметной точкой притяжения для туристов и создать новые рабочие места.",
        "Обсуждение с представителями администрации назначено на ближайшие недели."
      ]
    },
    {
      id: 11, cat: "Казахстан", img: "edrey", pos: "50% 50%", ago: 610, views: 2960, min: 3,
      title: "Новый экомаршрут по степным каньонам откроют для туристов весной",
      lead: "Тропа протяжённостью 14 километров пройдёт через смотровые площадки и живописные скалы.",
      body: [
        "Маршрут рассчитан на подготовленных и начинающих путешественников. Вдоль тропы установят указатели и информационные стенды.",
        "Организаторы напоминают о бережном отношении к природе: мусор необходимо забирать с собой, а костры разводить только в специально отведённых местах.",
        "Запись на первые группы откроется в ближайшие недели."
      ]
    }
  ];

  const SCHED = [
    { t: "08:00", h: "Утренний выпуск", p: "Главное за ночь и планы на день" },
    { t: "10:30", h: "Город и люди", p: "Репортажи из Уральска" },
    { t: "13:00", h: "Экономика региона", p: "Бизнес, рынок, цены" },
    { t: "16:00", h: "Кампус", p: "Жизнь университета и студентов" },
    { t: "19:00", h: "Итоговый выпуск", p: "Новости дня, комментарии экспертов" }
  ];

  const FX = [
    { c: "USD", v: 521.4, d: 0.32 },
    { c: "EUR", v: 563.8, d: -0.18 },
    { c: "RUB", v: 5.62, d: 0.05 },
    { c: "CNY", v: 71.9, d: -0.11 }
  ];

  const POLL = ["Короткие заметки", "Подробные статьи", "Видеорепортажи", "Подкасты"];
  const POLL_BASE = [412, 336, 508, 144];

  const INFO = {
    editorial: {
      h: "О редакции",
      html: '<p>ВИТК NEWS создаётся студентами и преподавателями Западно-Казахстанского инновационно-технологического университета в Уральске. Мы работаем по принципам проверки фактов, независимости и уважения к читателю.</p><ul><li><span>Главный редактор</span><b>Редакционный совет</b></li><li><span>Формат</span><b>Новости, репортажи, эфир</b></li><li><span>Языки</span><b>Русский, қазақша</b></li></ul><p>Хотите стать частью команды? Присылайте заявку на почту редакции.</p>'
    },
    contacts: {
      h: "Контакты",
      html: '<p>Мы на связи в будние дни с 9:00 до 18:00 по времени Уральска.</p><ul><li><span>Адрес</span><b>г. Уральск, Казахстан</b></li><li><span>E-mail</span><b>news@vitk.example</b></li><li><span>Телефон</span><b>+7 (7112) 00-00-00</b></li></ul><button class="btn btn-gold" data-copy="news@vitk.example">Скопировать e-mail</button>'
    },
    ads: {
      h: "Реклама",
      html: '<p>Размещение рекламы и партнёрских материалов возможно в нескольких форматах. Все рекламные материалы маркируются.</p><ul><li><span>Баннер на главной</span><b>по запросу</b></li><li><span>Партнёрский материал</span><b>по запросу</b></li><li><span>Спецпроект</span><b>индивидуально</b></li></ul><button class="btn btn-gold" data-copy="ads@vitk.example">Скопировать e-mail</button>'
    },
    photos: {
      h: "Источники фото",
      html: '<p>Фотографии взяты с Wikimedia Commons и используются на условиях указанных лицензий. Имена авторов указаны на страницах файлов.</p><ul>' + Object.keys(PHOTOS).map(function (k) { return '<li><a href="https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(PHOTOS[k][0].replace(/ /g, "_")) + '" target="_blank" rel="noopener"><span>' + PHOTOS[k][0].slice(0, 38) + '</span></a><b>' + PHOTOS[k][1] + '</b></li>'; }).join("") + '</ul><p>Все новости на сайте вымышленные и созданы в учебных целях.</p>'
    },
    privacy: {
      h: "Конфиденциальность",
      html: '<p>Мы бережно относимся к вашим данным. Закладки, настройки и ваш голос в опросе хранятся только в вашем браузере и не передаются третьим лицам.</p><p>Адрес электронной почты, оставленный для рассылки, используется исключительно для отправки выпусков. Отписаться можно в любой момент.</p>'
    }
  };

  const state = { cat: "Все", sort: "new", shown: 5, saved: store.get("saved", []), q: "" };

  const pad = (n) => String(n).padStart(2, "0");
  const timeOf = (m) => {
    const d = new Date(Date.now() - m * 60000);
    return pad(d.getHours()) + ":" + pad(d.getMinutes());
  };
  const agoText = (m) => {
    if (m < 60) return m + " мин назад";
    const h = Math.floor(m / 60);
    if (h < 24) return h + " ч назад";
    return Math.floor(h / 24) + " д назад";
  };
  const fmtViews = (n) => (n >= 1000 ? (n / 1000).toFixed(1).replace(".0", "") + "K" : String(n));
  const find = (id) => A.find((a) => a.id === Number(id));
  const cover = (a) =>
    '<img class="cover" src="img/' + a.img + '.jpg" alt="" loading="lazy" decoding="async" style="object-position:' + (a.pos || "50% 50%") + '">';
  const mark = (s, q) => {
    if (!q) return s;
    const i = s.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return s;
    return s.slice(0, i) + "<mark>" + s.slice(i, i + q.length) + "</mark>" + s.slice(i + q.length);
  };

  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
  }

  function copy(text, msg) {
    const done = () => toast(msg || "Скопировано");
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, done);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch (e) {}
      ta.remove();
      done();
    }
  }

  const openStack = [];
  function openOv(el) {
    el.classList.add("open");
    el.setAttribute("aria-hidden", "false");
    document.body.classList.add("lock");
    if (!openStack.includes(el)) openStack.push(el);
  }
  function closeOv(el) {
    el.classList.remove("open");
    el.setAttribute("aria-hidden", "true");
    const i = openStack.indexOf(el);
    if (i >= 0) openStack.splice(i, 1);
    if (!openStack.length) document.body.classList.remove("lock");
  }

  function goto(sel) {
    closeMenu();
    const el = $(sel);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderTicker() {
    const items = A.slice(0, 8)
      .map((a) => '<button class="ticker-item" data-open="' + a.id + '"><time>' + timeOf(a.ago) + "</time>" + a.title + "</button>")
      .join("");
    $("#tickerTrack").innerHTML = items + items;
  }

  function renderHero() {
    const a = A[0];
    const h = $("#heroMain");
    h.dataset.open = a.id;
    h.innerHTML =
      cover(a) +
      '<div class="hero-txt"><div class="meta"><span class="tag">' + a.cat + "</span><span>" + agoText(a.ago) + "</span><span>" + a.min + ' мин чтения</span></div><h1>' +
      a.title + "</h1><p>" + a.lead +
      '</p><span class="hero-cta">Читать материал <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>';
    $("#sideList").innerHTML = A.slice(1, 5)
      .map((s) => '<button class="side-item" data-open="' + s.id + '"><time>' + timeOf(s.ago) + " · " + s.cat + "</time><h3>" + s.title + "</h3></button>")
      .join("");
  }

  function renderTabs() {
    const all = ["Все"].concat(CATS);
    $("#tabs").innerHTML = all
      .map((c) => {
        const n = c === "Все" ? A.length : A.filter((a) => a.cat === c).length;
        return '<button class="tab' + (state.cat === c ? " active" : "") + '" data-tab="' + c + '">' + (c === "Все" ? "Все новости" : c) + "<i>" + n + "</i></button>";
      })
      .join("");
  }

  function listFiltered() {
    let l = state.cat === "Все" ? A.slice() : A.filter((a) => a.cat === state.cat);
    l.sort(state.sort === "new" ? (a, b) => a.ago - b.ago : (a, b) => b.views - a.views);
    return l;
  }

  function cardHtml(a, i, wide) {
    const on = state.saved.includes(a.id);
    return (
      '<article class="card-news' + (wide ? " wide" : "") + '" data-open="' + a.id + '" style="animation-delay:' + i * 70 + 'ms">' +
      '<div class="thumb">' + cover(a) + '<span class="tag">' + a.cat + '</span><button class="save' + (on ? " on" : "") + '" data-save="' + a.id + '" aria-label="В закладки"><svg viewBox="0 0 24 24"><path d="M6 4h12v17l-6-4-6 4z"/></svg></button></div>' +
      '<div class="card-body"><h3>' + a.title + "</h3><p>" + a.lead + '</p><div class="meta"><span>' + agoText(a.ago) + '</span><span class="sep"></span><span>' + fmtViews(a.views) + " просмотров</span></div></div></article>"
    );
  }

  function renderGrid() {
    const l = listFiltered();
    const part = l.slice(0, state.shown);
    $("#newsTitle").textContent = state.cat === "Все" ? "Все новости" : state.cat;
    $("#grid").innerHTML = part.length
      ? part.map((a, i) => cardHtml(a, i % 6, i % 7 === 0 && part.length > 2 && i === 0)).join("")
      : '<div class="empty">В этом разделе пока нет материалов</div>';
    $("#moreBtn").parentElement.hidden = l.length <= state.shown;
  }

  function setCat(c, scroll) {
    state.cat = c;
    state.shown = 5;
    $$(".nav-link[data-cat]").forEach((b) => b.classList.toggle("active", b.dataset.cat === c));
    $$("#mnav button[data-cat]").forEach((b) => b.classList.toggle("active", b.dataset.cat === c));
    renderTabs();
    renderGrid();
    if (scroll) goto("#news");
  }

  function renderWidgets() {
    $("#fxList").innerHTML = FX.map(
      (f) => "<li><span>" + f.c + "</span><b>" + f.v.toFixed(2) + '<em class="' + (f.d >= 0 ? "up" : "down") + '" style="font-style:normal">' + (f.d >= 0 ? "▲ " : "▼ ") + Math.abs(f.d).toFixed(2) + "</em></b></li>"
    ).join("");
    $("#usdChip").textContent = FX[0].v.toFixed(2) + " ₸";
    const top = A.slice().sort((a, b) => b.views - a.views).slice(0, 5);
    $("#topList").innerHTML = top
      .map((a) => '<li data-open="' + a.id + '"><div><h4>' + a.title + "</h4><p>" + a.cat + " · " + fmtViews(a.views) + "</p></div></li>")
      .join("");
  }

  const WX = [
    { t: 12, d: "Переменная облачность", w: 4, h: 58, p: 752 },
    { t: 9, d: "Небольшой дождь", w: 6, h: 72, p: 748 },
    { t: 15, d: "Ясно", w: 3, h: 44, p: 756 },
    { t: 7, d: "Облачно, порывистый ветер", w: 9, h: 66, p: 745 }
  ];
  let wxIdx = 0;
  function renderWx() {
    const w = WX[wxIdx];
    const sign = (n) => (n > 0 ? "+" : n < 0 ? "−" : "") + Math.abs(n) + "°";
    $("#wxBig").textContent = sign(w.t);
    $("#wxTemp").textContent = sign(w.t);
    $("#wxDesc").textContent = w.d;
    $("#wxWind").textContent = w.w + " м/с";
    $("#wxHum").textContent = w.h + "%";
    $("#wxPr").textContent = w.p;
    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const today = new Date().getDay();
    $("#wxDays").innerHTML = [1, 2, 3, 4]
      .map((i) => {
        const dt = w.t + ((i * 3 + wxIdx * 2) % 7) - 3;
        return '<div class="wx-day"><span>' + days[(today + i + 6) % 7] + "</span><b>" + sign(dt) + "</b></div>";
      })
      .join("");
  }

  function spin(btn) {
    btn.classList.remove("spin");
    void btn.offsetWidth;
    btn.classList.add("spin");
    setTimeout(() => btn.classList.remove("spin"), 700);
  }

  function renderPoll() {
    const vote = store.get("vote", null);
    const counts = POLL_BASE.slice();
    if (vote !== null) counts[vote] += 1;
    const total = counts.reduce((a, b) => a + b, 0);
    const box = $("#poll");
    box.classList.toggle("done", vote !== null);
    box.innerHTML = POLL.map((o, i) => {
      const pct = Math.round((counts[i] / total) * 100);
      return '<button class="opt' + (vote === i ? " mine" : "") + '" data-vote="' + i + '"><i class="bar" data-w="' + (vote !== null ? pct : 0) + '"></i><span>' + o + "</span><span>" + (vote !== null ? pct + "%" : "") + "</span></button>";
    }).join("");
    requestAnimationFrame(() => requestAnimationFrame(() => $$(".bar", box).forEach((b) => (b.style.width = b.dataset.w + "%"))));
    $("#pollNote").textContent = vote !== null ? "Спасибо! Всего голосов: " + total : "Выберите вариант, чтобы увидеть результаты";
  }

  function renderSched() {
    const now = new Date();
    const mins = now.getHours() * 60 + now.getMinutes();
    let cur = 0;
    SCHED.forEach((s, i) => {
      const [h, m] = s.t.split(":").map(Number);
      if (h * 60 + m <= mins) cur = i;
    });
    const rem = store.get("remind", []);
    $("#sched").innerHTML = SCHED.map(
      (s, i) =>
        '<li class="' + (i === cur ? "now" : "") + '"><time>' + s.t + '</time><div class="grow"><h4>' + s.h + "</h4><p>" + s.p + '</p></div><button class="remind' + (rem.includes(i) ? " on" : "") + '" data-remind="' + i + '">' + (rem.includes(i) ? "Напомним" : "Напомнить") + "</button></li>"
    ).join("");
    $("#nowTitle").textContent = SCHED[cur].h + " ВИТК NEWS";
  }

  let playing = false;
  let secs = 0;
  let playTimer;
  function setPlay(on) {
    playing = on;
    $("#player").classList.toggle("playing", on);
    $("#playState").textContent = on ? "В эфире" : "Эфир на паузе";
    $("#bigIcon").innerHTML = on ? '<path d="M7 5h4v14H7zM13 5h4v14h-4z"/>' : '<path d="M8 5v14l11-7z"/>';
    $("#bigPlay").setAttribute("aria-label", on ? "Пауза" : "Воспроизвести");
    clearInterval(playTimer);
    if (on) {
      playTimer = setInterval(() => {
        secs++;
        $("#playTime").textContent = pad(Math.floor(secs / 3600)) + ":" + pad(Math.floor((secs % 3600) / 60)) + ":" + pad(secs % 60);
      }, 1000);
    }
  }

  let muted = false;
  function renderMute() {
    const v = Number($("#vol").value);
    const off = muted || v === 0;
    $("#muteIcon").innerHTML = off
      ? '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="m17 9 4 6M21 9l-4 6"/>'
      : '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>';
    $("#vol").style.setProperty("--v", (off ? 0 : v) + "%");
    $("#volVal").textContent = (off ? 0 : v) + "%";
  }

  function tickClock() {
    const d = new Date();
    const opt = { timeZone: "Asia/Oral" };
    $("#dateNow").textContent = d.toLocaleDateString("ru-RU", { ...opt, weekday: "long", day: "numeric", month: "long" });
    $("#timeNow").textContent = d.toLocaleTimeString("ru-RU", { ...opt, hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }

  function updateSaved() {
    const b = $("#savedCount");
    b.hidden = !state.saved.length;
    b.textContent = state.saved.length;
    b.classList.remove("pop");
    void b.offsetWidth;
    b.classList.add("pop");
    store.set("saved", state.saved);
    $$("[data-save]").forEach((el) => el.classList.toggle("on", state.saved.includes(Number(el.dataset.save))));
    if (currentId) $("#artSave").classList.toggle("on", state.saved.includes(currentId));
    renderSavedList();
  }

  function toggleSave(id) {
    const i = state.saved.indexOf(id);
    if (i >= 0) {
      state.saved.splice(i, 1);
      toast("Удалено из закладок");
    } else {
      state.saved.push(id);
      toast("Добавлено в закладки");
    }
    updateSaved();
  }

  function renderSavedList() {
    const box = $("#savedList");
    const items = state.saved.map(find).filter(Boolean);
    $("#clearSaved").parentElement.style.display = items.length ? "" : "none";
    if (!items.length) {
      box.innerHTML = '<div class="empty-s"><b>Пока пусто</b>Нажмите на значок закладки у новости, чтобы сохранить её на потом.</div>';
      return;
    }
    box.innerHTML = items
      .map(
        (a, i) =>
          '<div class="saved-it" style="animation-delay:' + i * 50 + 'ms"><button class="res" data-open="' + a.id + '"><span class="mini">' + cover(a) + '</span><span><h4>' + a.title + "</h4><p>" + a.cat + " · " + agoText(a.ago) +
          '</p></span></button><button class="icon-btn sm" data-save="' + a.id + '" aria-label="Удалить"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>'
      )
      .join("");
  }

  let currentId = null;
  let fontSize = store.get("fs", 18);
  function applyFont() {
    $("#artText").style.setProperty("--fs", fontSize + "px");
    $(".art-text").style.fontSize = fontSize + "px";
  }

  function openArticle(id, push) {
    const a = find(id);
    if (!a) return;
    currentId = a.id;
    $("#artCover").innerHTML = cover(a);
    $("#artMeta").innerHTML = '<span class="tag">' + a.cat + "</span><span>" + agoText(a.ago) + "</span><span>" + a.min + " мин чтения</span><span>" + fmtViews(a.views) + " просмотров</span>";
    $("#artCredit").textContent = "Фото: Wikimedia Commons, " + PHOTOS[a.img][1];
    $("#artTitle").textContent = a.title;
    $("#artLead").textContent = a.lead;
    $("#artText").innerHTML = a.body
      .map((p) => (p.startsWith("«") ? "<blockquote>" + p + "</blockquote>" : "<p>" + p + "</p>"))
      .join("");
    const rel = A.filter((x) => x.id !== a.id && x.cat === a.cat).concat(A.filter((x) => x.id !== a.id && x.cat !== a.cat)).slice(0, 2);
    $("#artRel").innerHTML = rel.map((r) => '<button data-open="' + r.id + '"><span class="tag">' + r.cat + "</span><h4>" + r.title + "</h4></button>").join("");
    const rx = store.get("rx" + a.id, null);
    const base = { like: 24 + (a.id % 7) * 3, fire: 9 + (a.id % 5) * 2, think: 4 + (a.id % 4) };
    $$("#reaction button").forEach((b) => {
      const k = b.dataset.r;
      b.classList.toggle("on", rx === k);
      $("span", b).textContent = base[k] + (rx === k ? 1 : 0);
    });
    $("#artSave").classList.toggle("on", state.saved.includes(a.id));
    applyFont();
    a.views++;
    $("#artScroll").scrollTop = 0;
    $("#artProg").style.width = "0";
    openOv($("#articleOv"));
    if (push) history.replaceState(null, "", "#news-" + a.id);
  }

  function closeArticle() {
    closeOv($("#articleOv"));
    currentId = null;
    if (location.hash.startsWith("#news-")) history.replaceState(null, "", location.pathname + location.search);
  }

  function openSearch() {
    openOv($("#searchOv"));
    $("#searchInput").value = "";
    renderSearch("");
    setTimeout(() => $("#searchInput").focus(), 200);
  }

  function renderSearch(q) {
    const box = $("#searchRes");
    q = q.trim();
    if (!q) {
      box.innerHTML = '<p class="hint">Популярные запросы</p><div class="sugg">' + ["Уральск", "ВИТК", "студенты", "погода", "экономика", "спорт"].map((s) => '<button data-sugg="' + s + '">' + s + "</button>").join("") + "</div>";
      return;
    }
    const l = A.filter((a) => (a.title + " " + a.lead + " " + a.cat + " " + a.body.join(" ")).toLowerCase().includes(q.toLowerCase()));
    box.innerHTML = l.length
      ? l.map((a) => '<button class="res" data-open="' + a.id + '"><span class="mini">' + cover(a) + "</span><span><h4>" + mark(a.title, q) + "</h4><p>" + a.cat + " · " + agoText(a.ago) + "</p></span></button>").join("")
      : '<p class="hint">Ничего не найдено по запросу «' + q.replace(/[<>&]/g, "") + "»</p>";
  }

  function openInfo(k) {
    const i = INFO[k];
    if (!i) return;
    $("#infoBody").innerHTML = "<h2>" + i.h + "</h2>" + i.html;
    openOv($("#infoOv"));
  }

  function buildMobileNav() {
    const m = $("#mnav");
    m.innerHTML =
      '<button data-cat="Все" class="active">Главное</button>' +
      CATS.map((c) => '<button data-cat="' + c + '">' + c + "</button>").join("") +
      '<button data-goto="#live">Прямой эфир</button><button data-goto="#subscribe">Подписаться</button>';
  }

  function toggleMenu(force) {
    const b = $("#burger");
    const m = $("#mnav");
    const on = typeof force === "boolean" ? force : !m.classList.contains("open");
    m.classList.toggle("open", on);
    m.setAttribute("aria-hidden", String(!on));
    b.classList.toggle("open", on);
    b.setAttribute("aria-expanded", String(on));
    document.body.classList.toggle("lock", on || openStack.length > 0);
  }
  function closeMenu() {
    toggleMenu(false);
  }

  function countUp(el) {
    const end = Number(el.dataset.count);
    const t0 = performance.now();
    const dur = 1800;
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(end * e).toLocaleString("ru-RU");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  document.addEventListener("click", (e) => {
    const t = e.target;
    const c = (s) => t.closest(s);

    let el;
    if ((el = c("[data-save]"))) {
      e.stopPropagation();
      toggleSave(Number(el.dataset.save));
      return;
    }
    if ((el = c("[data-open]"))) {
      if (openStack.includes($("#searchOv"))) closeOv($("#searchOv"));
      if (openStack.includes($("#savedOv"))) closeOv($("#savedOv"));
      openArticle(el.dataset.open, true);
      return;
    }
    if ((el = c("[data-tab]"))) return setCat(el.dataset.tab, false);
    if ((el = c(".nav-link[data-cat], #mnav [data-cat], .foot-col [data-cat]"))) return setCat(el.dataset.cat, true);
    if ((el = c("[data-goto]"))) return goto(el.dataset.goto);
    if ((el = c("[data-top]"))) {
      e.preventDefault();
      closeMenu();
      return window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if ((el = c("[data-info]"))) return openInfo(el.dataset.info);
    if ((el = c("[data-copy]"))) return copy(el.dataset.copy, "E-mail скопирован");
    if ((el = c("[data-share]"))) return copy(location.href.split("#")[0], "Ссылка скопирована — поделитесь в " + el.dataset.share);
    if ((el = c("[data-sugg]"))) {
      $("#searchInput").value = el.dataset.sugg;
      renderSearch(el.dataset.sugg);
      return;
    }
    if ((el = c("[data-vote]"))) {
      if (store.get("vote", null) === null) {
        store.set("vote", Number(el.dataset.vote));
        renderPoll();
        toast("Ваш голос учтён");
      }
      return;
    }
    if ((el = c("[data-remind]"))) {
      const i = Number(el.dataset.remind);
      const r = store.get("remind", []);
      const k = r.indexOf(i);
      if (k >= 0) r.splice(k, 1);
      else r.push(i);
      store.set("remind", r);
      renderSched();
      toast(k >= 0 ? "Напоминание отключено" : "Напомним о выпуске в " + SCHED[i].t);
      return;
    }
    if ((el = c("[data-sort]"))) {
      state.sort = el.dataset.sort;
      state.shown = 5;
      $$(".seg-btn").forEach((b) => b.classList.toggle("active", b === el));
      return renderGrid();
    }
    if ((el = c("[data-r]"))) {
      if (!currentId) return;
      const cur = store.get("rx" + currentId, null);
      const k = el.dataset.r;
      store.set("rx" + currentId, cur === k ? null : k);
      const a = find(currentId);
      const base = { like: 24 + (a.id % 7) * 3, fire: 9 + (a.id % 5) * 2, think: 4 + (a.id % 4) };
      const now = store.get("rx" + currentId, null);
      $$("#reaction button").forEach((b) => {
        b.classList.toggle("on", now === b.dataset.r);
        $("span", b).textContent = base[b.dataset.r] + (now === b.dataset.r ? 1 : 0);
      });
      return;
    }
    if (c("[data-close]")) {
      const ov = c(".overlay");
      return ov === $("#articleOv") ? closeArticle() : closeOv(ov);
    }
    if (t.classList && t.classList.contains("overlay")) {
      return t === $("#articleOv") ? closeArticle() : closeOv(t);
    }
  });

  $("#heroMain").addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openArticle(A[0].id, true);
    }
  });

  $("#moreBtn").addEventListener("click", () => {
    state.shown += 3;
    renderGrid();
  });
  $("#openSearch").addEventListener("click", openSearch);
  $("#openSaved").addEventListener("click", () => {
    renderSavedList();
    openOv($("#savedOv"));
  });
  $("#clearSaved").addEventListener("click", () => {
    state.saved = [];
    updateSaved();
    toast("Закладки очищены");
  });
  $("#burger").addEventListener("click", () => toggleMenu());
  $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  $("#searchInput").addEventListener("input", (e) => renderSearch(e.target.value));
  $("#searchInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const f = $("#searchRes [data-open]");
      if (f) f.click();
    }
  });

  $("#fontPlus").addEventListener("click", () => {
    fontSize = Math.min(24, fontSize + 2);
    store.set("fs", fontSize);
    applyFont();
  });
  $("#fontMinus").addEventListener("click", () => {
    fontSize = Math.max(14, fontSize - 2);
    store.set("fs", fontSize);
    applyFont();
  });
  $("#artSave").addEventListener("click", () => currentId && toggleSave(currentId));
  $("#artShare").addEventListener("click", () => {
    const url = location.href.split("#")[0] + "#news-" + currentId;
    if (navigator.share) {
      navigator.share({ title: find(currentId).title, url }).catch(() => {});
    } else {
      copy(url, "Ссылка на статью скопирована");
    }
  });
  $("#artScroll").addEventListener("scroll", (e) => {
    const s = e.target;
    const p = s.scrollTop / Math.max(1, s.scrollHeight - s.clientHeight);
    $("#artProg").style.width = p * 100 + "%";
  });

  $("#wxRefresh").addEventListener("click", (e) => {
    wxIdx = (wxIdx + 1) % WX.length;
    renderWx();
    spin(e.currentTarget);
    toast("Погода обновлена");
  });
  $("#fxRefresh").addEventListener("click", (e) => {
    FX.forEach((f) => {
      const d = (Math.random() - 0.45) * f.v * 0.006;
      f.v = Math.max(0.01, f.v + d);
      f.d = d;
    });
    renderWidgets();
    spin(e.currentTarget);
    toast("Курсы обновлены");
  });

  $("#bigPlay").addEventListener("click", () => setPlay(!playing));
  $("#screen").addEventListener("dblclick", () => $("#fsBtn").click());
  $("#muteBtn").addEventListener("click", () => {
    muted = !muted;
    renderMute();
  });
  $("#vol").addEventListener("input", () => {
    muted = false;
    renderMute();
  });
  $("#fsBtn").addEventListener("click", () => {
    const s = $("#screen");
    if (document.fullscreenElement) document.exitFullscreen();
    else if (s.requestFullscreen) s.requestFullscreen().catch(() => toast("Полноэкранный режим недоступен"));
    else toast("Полноэкранный режим недоступен");
  });

  $("#subForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const em = $("#subEmail").value.trim();
    const msg = $("#subMsg");
    const f = $(".field");
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em);
    msg.className = "form-msg";
    f.classList.remove("err");
    if (!ok) {
      void f.offsetWidth;
      f.classList.add("err");
      msg.classList.add("bad");
      msg.textContent = "Введите корректный адрес электронной почты";
      return;
    }
    if (!$("#subAgree").checked) {
      msg.classList.add("bad");
      msg.textContent = "Подтвердите согласие на рассылку";
      return;
    }
    store.set("sub", em);
    msg.classList.add("ok");
    msg.textContent = "Готово! Первый выпуск придёт на " + em;
    $("#subEmail").value = "";
    $("#subAgree").checked = false;
    toast("Вы подписались на рассылку");
  });
  $("#subEmail").addEventListener("input", () => {
    $(".field").classList.remove("err");
    $("#subMsg").textContent = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const top = openStack[openStack.length - 1];
      if (top) return top === $("#articleOv") ? closeArticle() : closeOv(top);
      if ($("#mnav").classList.contains("open")) closeMenu();
    }
    if ((e.key === "/" || (e.key === "k" && (e.ctrlKey || e.metaKey))) && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });

  const header = $("#header");
  const prog = $("#progress");
  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("stuck", window.scrollY > 10);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
    },
    { passive: true }
  );

  const io = new IntersectionObserver(
    (en) =>
      en.forEach((x) => {
        if (!x.isIntersecting) return;
        x.target.classList.add("in");
        $$("[data-count]", x.target).forEach(countUp);
        io.unobserve(x.target);
      }),
    { threshold: 0.12 }
  );

  buildMobileNav();
  renderTicker();
  renderHero();
  renderTabs();
  renderGrid();
  renderWidgets();
  renderWx();
  renderPoll();
  renderSched();
  renderMute();
  renderSavedList();
  tickClock();
  setInterval(tickClock, 1000);
  $("#year").textContent = new Date().getFullYear();
  const sc = $("#savedCount");
  sc.hidden = !state.saved.length;
  sc.textContent = state.saved.length;
  $$(".reveal").forEach((r) => io.observe(r));

  const m = location.hash.match(/^#news-(\d+)$/);
  if (m) openArticle(m[1], false);
})();
