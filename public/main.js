// Page-by-Page View Switcher Logic

function switchView(viewName) {
  const pages = [
    'page-1',
    'page-2',
    'page-3',
    'page-4',
    'page-5',
    'page-6',
    'pricing',
    'page-7',
    'page-8'
  ];

  const allBtn = document.getElementById('btn-all');
  const buttons = {
    'all': allBtn,
    'page-1': document.getElementById('btn-page-1'),
    'page-2': document.getElementById('btn-page-2'),
    'page-3': document.getElementById('btn-page-3'),
    'page-4': document.getElementById('btn-page-4'),
    'page-5': document.getElementById('btn-page-5'),
    'page-6': document.getElementById('btn-page-6'),
    'pricing': document.getElementById('btn-pricing'),
    'page-7': document.getElementById('btn-page-7'),
    'page-8': document.getElementById('btn-page-8')
  };

  // Reset all button styles
  Object.values(buttons).forEach(btn => {
    if (btn) {
      btn.classList.remove('active-tab');
      btn.classList.remove('active');
    }
  });

  // Activate chosen button
  if (buttons[viewName]) {
    buttons[viewName].classList.add('active-tab');
    buttons[viewName].classList.add('active');
  }

  function getElement(name) {
    if (name === 'pricing') {
      return document.getElementById('pricing') || document.getElementById('view-pricing');
    }
    return document.getElementById(`view-${name}`) || document.getElementById(name);
  }

  if (viewName === 'all') {
    // Show all pages in order
    pages.forEach(p => {
      const el = getElement(p);
      if (el) el.classList.remove('hidden-view');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Show only the selected page
    pages.forEach(p => {
      const el = getElement(p);
      if (el) {
        if (p === viewName) {
          el.classList.remove('hidden-view');
        } else {
          el.classList.add('hidden-view');
        }
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// What People Say - Format Switcher
function switchTestimonialFormat(format) {
  const elIndex = document.getElementById('testimonials-index-cards');
  const elLedger = document.getElementById('testimonials-proof-ledger');
  const elDesk = document.getElementById('testimonials-review-desk');
  const elBento = document.getElementById('testimonials-swiss-bento');

  const btnIndex = document.getElementById('fmt-btn-index');
  const btnLedger = document.getElementById('fmt-btn-ledger');
  const btnDesk = document.getElementById('fmt-btn-desk');
  const btnBento = document.getElementById('fmt-btn-bento');

  [btnIndex, btnLedger, btnDesk, btnBento].forEach(b => {
    if (b) b.classList.remove('active');
  });

  if (elIndex) elIndex.classList.add('hidden');
  if (elLedger) elLedger.classList.add('hidden');
  if (elDesk) elDesk.classList.add('hidden');
  if (elBento) elBento.classList.add('hidden');

  if (format === 'index-cards') {
    if (elIndex) elIndex.classList.remove('hidden');
    if (btnIndex) btnIndex.classList.add('active');
  } else if (format === 'proof-ledger') {
    if (elLedger) elLedger.classList.remove('hidden');
    if (btnLedger) btnLedger.classList.add('active');
  } else if (format === 'review-desk') {
    if (elDesk) elDesk.classList.remove('hidden');
    if (btnDesk) btnDesk.classList.add('active');
  } else if (format === 'swiss-bento') {
    if (elBento) elBento.classList.remove('hidden');
    if (btnBento) btnBento.classList.add('active');
  }
}

// Interactive Review Desk Logic
const deskQuotes = {
  1: {
    ref: "INDEX #01 • B2B SAAS FEEDBACK",
    quote: "“The audit surfaced three template-level problems we had been shipping for two years. The drafts were almost a side benefit.”",
    author: "— HEAD OF CONTENT, B2B SAAS"
  },
  2: {
    ref: "INDEX #02 • SITE CONTEXT INGESTION",
    quote: "“It is the first tool that did not need me to explain what the company does. It had already read the site.”",
    author: "— MARKETING"
  },
  3: {
    ref: "INDEX #03 • CRITIC STAGE VERDICT",
    quote: "“The critic stage is the difference. We were getting confident nonsense from everything else we tried.”",
    author: "— EDITOR"
  }
};

function selectDeskQuote(id) {
  [1, 2, 3].forEach(i => {
    const tab = document.getElementById(`desk-tab-${i}`);
    if (tab) tab.classList.remove('active-desk');
  });

  const activeTab = document.getElementById(`desk-tab-${id}`);
  if (activeTab) activeTab.classList.add('active-desk');

  const data = deskQuotes[id];
  if (data) {
    const refEl = document.getElementById('desk-ref-tag');
    const quoteEl = document.getElementById('desk-quote-text');
    const authorEl = document.getElementById('desk-author-sign');

    if (refEl) refEl.innerText = data.ref;
    if (quoteEl) quoteEl.innerText = data.quote;
    if (authorEl) authorEl.innerText = data.author;
  }
}

// Page 7: FAQ Format Switcher
function switchFaqFormat(format) {
  const elSplit = document.getElementById('faq-format-split');
  const elAcc = document.getElementById('faq-format-accordion');
  const elMatrix = document.getElementById('faq-format-matrix');

  const btnSplit = document.getElementById('faq-btn-split');
  const btnAcc = document.getElementById('faq-btn-acc');
  const btnMatrix = document.getElementById('faq-btn-matrix');

  [btnSplit, btnAcc, btnMatrix].forEach(b => {
    if (b) b.classList.remove('active');
  });

  if (elSplit) elSplit.classList.add('hidden');
  if (elAcc) elAcc.classList.add('hidden');
  if (elMatrix) elMatrix.classList.add('hidden');

  if (format === 'split-cards') {
    if (elSplit) elSplit.classList.remove('hidden');
    if (btnSplit) btnSplit.classList.add('active');
  } else if (format === 'accordion') {
    if (elAcc) elAcc.classList.remove('hidden');
    if (btnAcc) btnAcc.classList.add('active');
  } else if (format === 'matrix') {
    if (elMatrix) elMatrix.classList.remove('hidden');
    if (btnMatrix) btnMatrix.classList.add('active');
  }
}

// Page 8: CTA & Footer Format Switcher
function switchCtaFormat(format) {
  const elStudio = document.getElementById('cta-format-studio');
  const elSplit = document.getElementById('cta-format-split');
  const elMinimal = document.getElementById('cta-format-minimal');

  const btnStudio = document.getElementById('cta-btn-studio');
  const btnSplit = document.getElementById('cta-btn-split');
  const btnMinimal = document.getElementById('cta-btn-minimal');

  [btnStudio, btnSplit, btnMinimal].forEach(b => {
    if (b) b.classList.remove('active');
  });

  if (elStudio) elStudio.classList.add('hidden');
  if (elSplit) elSplit.classList.add('hidden');
  if (elMinimal) elMinimal.classList.add('hidden');

  if (format === 'studio-master') {
    if (elStudio) elStudio.classList.remove('hidden');
    if (btnStudio) btnStudio.classList.add('active');
  } else if (format === 'split-broad') {
    if (elSplit) elSplit.classList.remove('hidden');
    if (btnSplit) btnSplit.classList.add('active');
  } else if (format === 'minimal-sheet') {
    if (elMinimal) elMinimal.classList.remove('hidden');
    if (btnMinimal) btnMinimal.classList.add('active');
  }
}

// Make functions globally accessible
window.switchView = switchView;
window.switchTestimonialFormat = switchTestimonialFormat;
window.selectDeskQuote = selectDeskQuote;
window.switchFaqFormat = switchFaqFormat;
window.switchCtaFormat = switchCtaFormat;


// Initialize active sub-formats on page load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof switchTestimonialFormat === 'function') switchTestimonialFormat('index-cards');
  if (typeof switchFaqFormat === 'function') switchFaqFormat('split-cards');
  if (typeof switchCtaFormat === 'function') switchCtaFormat('studio-master');
});
