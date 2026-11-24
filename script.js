/* Pão Caseiro da Claudia - Catalog & Order */
(function () {
  'use strict';

  const WHATSAPP_NUMBER = '5527988953205';
  const PRODUCTS = [{"id": "pao-tradicional", "name": "Pão tradicional", "category": "paes", "categoryLabel": "Pães caseiros", "desc": "Massa macia, casquinha dourada e aquele sabor de casa que abraça.", "price": 20.0, "unit": "unidade", "badge": "Tradicional", "icon": "🥖", "tone": "#F3E2C7"}, {"id": "pao-batata", "name": "Pão de batata", "category": "paes", "categoryLabel": "Pães caseiros", "desc": "Massa fofinha com batata, assada até ficar douradinha por fora.", "price": 25.0, "unit": "unidade", "badge": "Macio e fofinho", "icon": "🥔", "tone": "#F5E6CC"}, {"id": "pao-farofa", "name": "Pão de farofa", "category": "paes", "categoryLabel": "Pães caseiros", "desc": "Pão caseiro com cobertura crocante de farofa douradinha.", "price": 25.0, "unit": "unidade", "badge": "Especial da casa", "icon": "✨", "tone": "#EFE0C5"}, {"id": "pao-cenoura", "name": "Pão de cenoura", "category": "paes", "categoryLabel": "Pães caseiros", "desc": "Massa macia preparada com cenoura, de miolo dourado e delicado.", "price": 25.0, "unit": "unidade", "badge": "Feito em casa", "icon": "🥕", "tone": "#F4DFC0"}, {"id": "pao-calabresa", "name": "Pão recheado de calabresa", "category": "paes", "categoryLabel": "Pães caseiros", "desc": "Recheio caprichado de calabresa, queijo e Catupiry cremoso.", "price": 40.0, "unit": "unidade", "badge": "Bem recheado", "icon": "🧀", "tone": "#F1DCC3"}, {"id": "pao-presunto-queijo", "name": "Pão recheado de presunto e queijo", "category": "paes", "categoryLabel": "Pães caseiros", "desc": "Presunto, queijo derretido e Catupiry em uma massa douradinha.", "price": 40.0, "unit": "unidade", "badge": "Bem recheado", "icon": "🥪", "tone": "#F3E3CB"}, {"id": "pao-alho-poro", "name": "Pão de alho-poró", "category": "paes", "categoryLabel": "Pães caseiros", "desc": "Alho-poró com queijo e Catupiry, envoltos em pão macio e dourado.", "price": 45.0, "unit": "unidade", "badge": "Sabor especial", "icon": "🌿", "tone": "#EADFCB"}, {"id": "bolo-cenoura", "name": "Bolo caseiro de cenoura", "category": "bolos", "categoryLabel": "Bolos caseiros", "desc": "Bolo fofinho de cenoura, com opção de cobertura de chocolate 100% cacau.", "unit": "unidade", "badge": "Clássico da casa", "icon": "🥕", "tone": "#F5DFC0", "variants": [{"label": "Sem cobertura", "price": 25.0}, {"label": "Com cobertura de chocolate 100% cacau", "price": 30.0}]}, {"id": "bolo-chocolate", "name": "Bolo caseiro de chocolate", "category": "bolos", "categoryLabel": "Bolos caseiros", "desc": "Massa de chocolate macia e irresistível, com opção de cobertura de chocolate.", "unit": "unidade", "badge": "Chocolatudo", "icon": "🍫", "tone": "#E8D6C8", "variants": [{"label": "Sem cobertura", "price": 25.0}, {"label": "Com cobertura de chocolate", "price": 30.0}]}, {"id": "bolo-laranja", "name": "Bolo caseiro de laranja", "category": "bolos", "categoryLabel": "Bolos caseiros", "desc": "Bolo cítrico e macio, com opção de mousse de laranja.", "unit": "unidade", "badge": "Cítrico e leve", "icon": "🍊", "tone": "#F6E2C2", "variants": [{"label": "Sem cobertura", "price": 25.0}, {"label": "Com mousse de laranja", "price": 30.0}]}, {"id": "bolo-limao", "name": "Bolo caseiro de limão", "category": "bolos", "categoryLabel": "Bolos caseiros", "desc": "Massa leve de limão, com opção de mousse feita com a fruta.", "unit": "unidade", "badge": "Receita cítrica", "icon": "🍋", "tone": "#F2ECCC", "variants": [{"label": "Sem cobertura", "price": 25.0}, {"label": "Com mousse de limão", "price": 30.0}]}, {"id": "bolo-chocolate-cafe", "name": "Bolo de chocolate com café", "category": "bolos", "categoryLabel": "Bolos caseiros", "desc": "A combinação perfeita de chocolate com café, para quem ama um sabor marcante.", "unit": "unidade", "badge": "Chocolate & café", "icon": "☕", "tone": "#E7D4C5", "variants": [{"label": "Sem cobertura", "price": 25.0}, {"label": "Com café", "price": 35.0}]}, {"id": "bolo-formigueiro", "name": "Bolo formigueiro", "category": "bolos", "categoryLabel": "Bolos caseiros", "desc": "Bolo fofinho com granulado de chocolate, com opção de cobertura.", "unit": "unidade", "badge": "Queridinho", "icon": "🎂", "tone": "#EFE0D0", "variants": [{"label": "Sem cobertura", "price": 25.0}, {"label": "Com cobertura de chocolate", "price": 30.0}]}, {"id": "torta-frango", "name": "Torta de pão de forma com frango", "category": "tortas", "categoryLabel": "Tortas caseiras", "desc": "Torta caseira de pão de forma com recheio de frango e geleia de morango. Uma combinação especial da casa.", "price": 55.0, "unit": "unidade", "badge": "Receita especial", "icon": "🥧", "tone": "#F1E1CE"}, {"id": "cento-salgados", "name": "Cento de salgados de festa", "category": "salgados", "categoryLabel": "Salgados da casa", "desc": "Coxinha de frango, pastel de queijo e presunto, bolinha de queijo, croquete de milho, kibe, enroladinho de salsicha e coxinha de calabresa com queijo.", "unit": "cento", "badge": "Para compartilhar", "icon": "🥟", "tone": "#F3E4CF", "variants": [{"label": "Cento frito", "price": 70.0}, {"label": "Cento sem fritar", "price": 60.0}]}, {"id": "empadinha-frango", "name": "Empadinha de frango", "category": "salgados", "categoryLabel": "Salgados da casa", "desc": "Empadinha de frango com massa delicada e douradinha.", "price": 4.99, "unit": "unidade", "badge": "Feita em casa", "icon": "🥧", "tone": "#F4E5D0"}, {"id": "quiche-media", "name": "Quiche média", "category": "salgados", "categoryLabel": "Salgados da casa", "desc": "Quiche média caseira, assada até ficar douradinha.", "price": 30.0, "unit": "unidade", "badge": "Receita especial", "icon": "🍽️", "tone": "#EEE1CF"}];

  const state = {
    filter: 'todos',
    search: '',
    cart: [],
    qtySelections: {}
  };

  // --- Helpers ---
  const fmtBRL = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const normalize = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const uid = () => Math.random().toString(36).slice(2, 9);

  function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
  function getSelectedVariant(product) {
    if (!product.variants) return null;
    const sel = document.querySelector('[data-variant-for="' + product.id + '"]');
    const idx = sel ? parseInt(sel.value, 10) : 0;
    return { index: idx, ...product.variants[idx] };
  }
  function getProductPrice(product) {
    if (product.variants) return product.variants[0].price;
    return product.price;
  }
  function getDisplayPrice(product) {
    if (product.variants) {
      const sel = document.querySelector('[data-variant-for="' + product.id + '"]');
      const idx = sel ? parseInt(sel.value, 10) : 0;
      return product.variants[idx].price;
    }
    return product.price;
  }
  function getMinPrice(product) {
    if (!product.variants) return product.price;
    return Math.min(...product.variants.map(v => v.price));
  }
  function getMaxPrice(product) {
    if (!product.variants) return product.price;
    return Math.max(...product.variants.map(v => v.price));
  }

  // --- DOM refs ---
  const grid = $('#product-grid');
  const empty = $('#catalog-empty');
  const resultsLabel = $('#catalog-results');
  const searchInput = $('#search-input');
  const clearSearchBtn = $('#clear-search');
  const cartFab = $('#cart-fab');
  const cartCount = $('#cart-count');
  const cartOverlay = $('#cart-overlay');
  const cartDrawer = $('#cart-drawer');
  const cartClose = $('#cart-close');
  const cartBody = $('#cart-body');
  const cartItems = $('#cart-items');
  const cartEmpty = $('#cart-empty');
  const cartTotal = $('#cart-total');
  const cartSend = $('#cart-send');
  const cartClear = $('#cart-clear');
  const toast = $('#toast');

  // --- Init ---
  function init() {
    $('#footer-year').textContent = new Date().getFullYear();
    setupNav();
    renderFiltersCounts();
    renderProducts();
    setupFilters();
    setupSearch();
    setupCart();
    setupReveal();
  }

  // --- Nav ---
  function setupNav() {
    const header = $('#site-header');
    const toggle = $('#nav-toggle');
    const menu = $('#nav-menu');

    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('open', !open);
    });

    $$('.nav-link', menu).forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
      }
    });
  }

  // --- Filters & counts ---
  function renderFiltersCounts() {
    const counts = { todos: PRODUCTS.length, paes: 0, bolos: 0, tortas: 0, salgados: 0 };
    PRODUCTS.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
    Object.keys(counts).forEach(k => {
      const el = $('#count-' + k);
      if (el) el.textContent = counts[k];
    });
  }

  function setupFilters() {
    $$('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.filter = btn.dataset.filter;
        renderProducts();
      });
    });
  }

  function setupSearch() {
    let t;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(t);
      t = setTimeout(() => {
        state.search = e.target.value.trim();
        renderProducts();
      }, 150);
    });
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.search = '';
      state.filter = 'todos';
      $$('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === 'todos'));
      renderProducts();
      searchInput.focus();
    });
  }

  function filteredProducts() {
    const q = normalize(state.search);
    return PRODUCTS.filter(p => {
      const matchCat = state.filter === 'todos' || p.category === state.filter;
      const hay = normalize(p.name + ' ' + p.desc + ' ' + p.categoryLabel + ' ' + (p.badge || ''));
      const matchQ = !q || hay.includes(q);
      return matchCat && matchQ;
    });
  }

  // --- Render products ---
  function renderProducts() {
    const list = filteredProducts();
    resultsLabel.textContent = list.length === PRODUCTS.length
      ? `${PRODUCTS.length} delícias no cardápio`
      : `${list.length} ${list.length === 1 ? 'produto encontrado' : 'produtos encontrados'}`;

    if (list.length === 0) {
      grid.innerHTML = '';
      empty.hidden = false;
      return;
    }
    empty.hidden = true;
    grid.innerHTML = list.map(renderCard).join('');
    bindCardEvents();
  }

  function renderCard(p) {
    const hasVariants = Array.isArray(p.variants) && p.variants.length > 0;
    const min = getMinPrice(p);
    const max = getMaxPrice(p);
    const priceDisplay = hasVariants && min !== max
      ? `<span class="price-prefix">A partir de</span>${fmtBRL(min)}`
      : fmtBRL(min);
    const variantHtml = hasVariants ? `
      <div class="product-variants">
        <label class="variant-label" for="variant-${p.id}">Escolha uma opção</label>
        <select class="variant-select" id="variant-${p.id}" data-variant-for="${p.id}">
          ${p.variants.map((v, i) => `<option value="${i}">${escapeHtml(v.label)} — ${fmtBRL(v.price)}</option>`).join('')}
        </select>
      </div>` : '';

    const initialQty = state.qtySelections[p.id] || 1;

    return `
      <article class="product-card reveal" data-product-id="${p.id}">
        <div class="product-media">
          <div class="product-media-fallback" style="background: linear-gradient(160deg, ${p.tone} 0%, #FDF8F1 100%);">
            <div class="fallback-inner">
              <div class="fallback-icon">${p.icon}</div>
              <div class="fallback-label">${escapeHtml(p.name)}</div>
            </div>
          </div>
          ${p.badge ? `<span class="product-badge">${escapeHtml(p.badge)}</span>` : ''}
        </div>
        <div class="product-body">
          <p class="product-cat">${escapeHtml(p.categoryLabel)}</p>
          <h3 class="product-name">${escapeHtml(p.name)}</h3>
          <p class="product-desc">${escapeHtml(p.desc)}</p>
          ${variantHtml}
          <div class="product-footer">
            <div class="product-price-row">
              <div class="product-price" data-price-for="${p.id}">${priceDisplay}</div>
              <span class="product-unit">${escapeHtml(p.unit)}</span>
            </div>
            <div class="product-actions">
              <div class="qty-control" aria-label="Quantidade de ${escapeHtml(p.name)}">
                <button class="qty-btn" data-qty-minus="${p.id}" aria-label="Diminuir quantidade">−</button>
                <span class="qty-val" data-qty-for="${p.id}" aria-live="polite">${initialQty}</span>
                <button class="qty-btn" data-qty-plus="${p.id}" aria-label="Aumentar quantidade">+</button>
              </div>
              <button class="add-btn" data-add="${p.id}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </article>`;
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function bindCardEvents() {
    // variant changes
    $$('[data-variant-for]').forEach(sel => {
      sel.addEventListener('change', () => {
        const pid = sel.dataset.variantFor;
        const p = getProduct(pid);
        const idx = parseInt(sel.value, 10);
        const priceEl = document.querySelector('[data-price-for="' + pid + '"]');
        if (priceEl && p && p.variants[idx]) {
          priceEl.textContent = fmtBRL(p.variants[idx].price);
        }
      });
    });

    // qty controls
    $$('[data-qty-minus]').forEach(btn => {
      btn.addEventListener('click', () => changeQty(btn.dataset.qtyMinus, -1));
    });
    $$('[data-qty-plus]').forEach(btn => {
      btn.addEventListener('click', () => changeQty(btn.dataset.qtyPlus, 1));
    });

    // add to cart
    $$('[data-add]').forEach(btn => {
      btn.addEventListener('click', () => addToCart(btn.dataset.add, btn));
    });

    // re-observe reveals
    observeReveals();
  }

  function changeQty(pid, delta) {
    const el = document.querySelector('[data-qty-for="' + pid + '"]');
    if (!el) return;
    let v = parseInt(el.textContent, 10) || 1;
    v = Math.max(1, Math.min(99, v + delta));
    el.textContent = v;
    state.qtySelections[pid] = v;
  }

  // --- Cart ---
  function setupCart() {
    loadCart();
    cartFab.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    cartSend.addEventListener('click', sendOrder);
    cartClear.addEventListener('click', clearCart);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && cartDrawer.classList.contains('open')) closeCart();
    });
    renderCart();
  }

  function loadCart() {
    try {
      const raw = localStorage.getItem('claudia_cart');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) state.cart = parsed;
      }
    } catch (_) { state.cart = []; }
  }
  function saveCart() {
    try { localStorage.setItem('claudia_cart', JSON.stringify(state.cart)); } catch (_) {}
  }

  function addToCart(pid, btnEl) {
    const p = getProduct(pid);
    if (!p) return;
    const qtyEl = document.querySelector('[data-qty-for="' + pid + '"]');
    const qty = Math.max(1, parseInt(qtyEl ? qtyEl.textContent : '1', 10) || 1);
    let variantIndex = null;
    let variantLabel = null;
    let price = p.price;
    if (p.variants) {
      const sel = document.querySelector('[data-variant-for="' + pid + '"]');
      variantIndex = sel ? parseInt(sel.value, 10) : 0;
      variantLabel = p.variants[variantIndex].label;
      price = p.variants[variantIndex].price;
    }

    const key = pid + '::' + (variantIndex === null ? 'base' : variantIndex);
    const existing = state.cart.find(i => i.key === key);
    if (existing) {
      existing.qty = Math.min(99, existing.qty + qty);
    } else {
      state.cart.push({
        key, pid, name: p.name, variantIndex, variantLabel, price, unit: p.unit, qty
      });
    }
    saveCart();
    renderCart();
    pulseCart();
    showToast(`${p.name} adicionado ao pedido!`);

    if (btnEl) {
      btnEl.classList.add('added');
      const original = btnEl.innerHTML;
      btnEl.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg> Adicionado';
      setTimeout(() => { btnEl.classList.remove('added'); btnEl.innerHTML = original; }, 1200);
    }
  }

  function removeFromCart(key) {
    state.cart = state.cart.filter(i => i.key !== key);
    saveCart();
    renderCart();
  }

  function setCartQty(key, delta) {
    const item = state.cart.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, Math.min(99, item.qty + delta));
    saveCart();
    renderCart();
  }

  function clearCart() {
    if (state.cart.length === 0) return;
    state.cart = [];
    saveCart();
    renderCart();
    showToast('Pedido limpo.');
  }

  function cartTotals() {
    const count = state.cart.reduce((s, i) => s + i.qty, 0);
    const total = state.cart.reduce((s, i) => s + i.qty * i.price, 0);
    return { count, total };
  }

  function renderCart() {
    const { count, total } = cartTotals();
    cartCount.textContent = count;
    cartTotal.textContent = fmtBRL(total);
    cartSend.disabled = count === 0;
    cartClear.disabled = count === 0;
    cartFab.classList.toggle('has-items', count > 0);

    if (count === 0) {
      cartEmpty.style.display = 'block';
      cartItems.innerHTML = '';
      return;
    }
    cartEmpty.style.display = 'none';
    cartItems.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${escapeHtml(item.name)}</div>
          ${item.variantLabel ? `<div class="cart-item-variant">${escapeHtml(item.variantLabel)}</div>` : ''}
          <div class="cart-item-price">${fmtBRL(item.price)} <span style="color:var(--text-light); font-weight:400">/ ${escapeHtml(item.unit)}</span></div>
        </div>
        <div class="cart-item-controls">
          <div class="cart-qty" aria-label="Quantidade">
            <button data-cart-dec="${escapeHtml(item.key)}" aria-label="Diminuir">−</button>
            <span>${item.qty}</span>
            <button data-cart-inc="${escapeHtml(item.key)}" aria-label="Aumentar">+</button>
          </div>
          <button class="cart-remove" data-cart-remove="${escapeHtml(item.key)}">Remover</button>
        </div>
      </div>
    `).join('');

    $$('[data-cart-dec]').forEach(b => b.addEventListener('click', () => setCartQty(b.dataset.cartDec, -1)));
    $$('[data-cart-inc]').forEach(b => b.addEventListener('click', () => setCartQty(b.dataset.cartInc, 1)));
    $$('[data-cart-remove]').forEach(b => b.addEventListener('click', () => removeFromCart(b.dataset.cartRemove)));
  }

  function openCart() {
    cartOverlay.hidden = false;
    // force reflow for transition
    cartOverlay.offsetHeight; // eslint-disable-line no-unused-expressions
    cartOverlay.classList.add('open');
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    cartFab.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    cartClose.focus({ preventScroll: true });
  }
  function closeCart() {
    cartOverlay.classList.remove('open');
    cartDrawer.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    cartFab.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => { if (!cartDrawer.classList.contains('open')) cartOverlay.hidden = true; }, 300);
  }

  function pulseCart() {
    cartFab.classList.remove('bump');
    void cartFab.offsetWidth; // reflow
    cartFab.classList.add('bump');
  }

  function sendOrder() {
    if (state.cart.length === 0) return;
    const { total } = cartTotals();
    const lines = [];
    lines.push('Olá, Claudia! Gostaria de fazer uma encomenda:');
    lines.push('');
    state.cart.forEach((item, idx) => {
      let line = `${idx + 1}. ${item.qty}x ${item.name}`;
      if (item.variantLabel) line += ` (${item.variantLabel})`;
      line += ` — ${fmtBRL(item.price * item.qty)}`;
      lines.push(line);
    });
    lines.push('');
    lines.push(`*Total estimado: ${fmtBRL(total)}*`);
    lines.push('');
    lines.push('Por favor, pode me confirmar disponibilidade e forma de pagamento/entrega?');
    const msg = lines.join('\n');
    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
    window.open(url, '_blank', 'noopener');
  }

  // --- Toast ---
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  // --- Reveal on scroll ---
  let revealObserver;
  function setupReveal() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    observeReveals();
  }
  function observeReveals() {
    if (!revealObserver) {
      $$('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
      return;
    }
    $$('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
  }

  // --- Boot ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
