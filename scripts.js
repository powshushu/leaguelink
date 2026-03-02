const helpEmail = 'ps.carreon@gmail.com';
const userTypes = ['Standard User', 'Admin'];
const faqFilters = {
  search:''
  , 'user-types':''
  , categories:''
};

function createElem(elemType, className, appendTo) {
  let elem = document.createElement(elemType);
  if (Array.isArray(className))
    elem.classList.add(...className);
  else if (className)
    elem.classList.add(className);
  appendTo.appendChild(elem);
  return elem;
}

function popQuestion(faq) {

  
  let Faq = createElem('div', 'faq', document.querySelector('.faq-box'));
  Faq.setAttribute('faq-id', faq.id);

  let qRow = createElem('div', 'q-row', Faq);

  //question
  let q = createElem('div', 'q', qRow);
  q.innerHTML = faq.q;

  //tags
  faq.tags.split(',').forEach(tag => {
    let t = createElem('div', 'tag', qRow);
    t.innerHTML = tag;
  });

}

function popAnswer(Faq) {
  const faqId = Faq.getAttribute('faq-id');
  const faq = faqs.filter(f => f.id == faqId).pop();

  //answer
  let A = createElem('div', 'a', Faq);

  let Aopts = createElem('div', 'a-opts', A);
  
  let MoreHelp = createElem('a', 'more-help', Aopts);
  MoreHelp.setAttribute('href', 'mailto:' + helpEmail + '?subject=LeagueLink Help - FAQ # ' + faqId + '&body=Hi! I need more help with this.%0D%0A%0D%0A[ENTER QUESTION HERE]%0D%0A%0D%0AQuestion: ' + encodeURIComponent(faq.q));
  MoreHelp.innerHTML = 'Need more help with this? Let us know.';

  let aArray = faq.a.split('\n');
  if(aArray.length > 1) {
    let Acontent = createElem('div', 'content', A);
    Acontent.innerHTML = '<ol>' + aArray.map(i => '<li>' + i + '</li>').join("\r\n") + '</ol>';
  }
  else {
    const aString = aArray.pop();
    if (aString.startsWith('http')) {
      
      let NewWindow = createElem('a', 'button', Aopts);
      NewWindow.setAttribute('href', aString);
      NewWindow.setAttribute('target', '_blank');
      NewWindow.innerHTML = 'Open in New Window';

      let iframe = createElem('iframe', null, A);
      iframe.setAttribute('src', aString);

    }
    else {
      let Acontent = createElem('div', 'content', A);
      Acontent.innerHTML = aString;
    }
  }
}

function setFaqFilter(prop, value) {
  faqFilter[prop] = value;
}

function toggleFaqs(filterProp) {
  faqs.forEach(faq => {

    let hide = false; //Object.assign({}, faqFilters);
    
    Object.keys(faqFilters).forEach(prop => {
      if (prop == 'search') {
        const arrayStrings = faqFilters[prop].toLowerCase().split(' ');
        hide = hide || (faqFilters.search && !arrayStrings.every(str => [faq.q, faq.a, faq.tags].join('|').toLowerCase().includes(str)));
      }
      else
        hide = hide || (faqFilters[prop] && !faq.tags.includes(faqFilters[prop]));
    });

    const Faq = document.querySelector('.faq[faq-id="' + faq.id + '"]');
    if (!hide)
      Faq.classList.remove('hide');
    else
      Faq.classList.add('hide');

  });
}

function hideAnswers() {
  document.querySelectorAll('.faq .a').forEach(a => a.remove());
}

document.addEventListener('DOMContentLoaded', function() {
  
  // populate filter menu
  [...userTypes, ...[...new Set(faqs.map(faq => faq.tags.split(',')).flat())]
    .filter(tag => !userTypes.includes(tag))
    .sort()
  ].forEach(tag => {
    let Tag = document.createElement('option');
    Tag.innerHTML = tag;
    Tag.setAttribute('value', tag);
    if (userTypes.includes(tag))
      document.getElementById('user-types').appendChild(Tag);
    else
      document.getElementById('categories').appendChild(Tag);
  });

  // populate questions
  faqs.forEach(popQuestion);

  // bind: search
  document.getElementById('search-box').oninput = e => {
    faqFilters.search = e.target.value;
    toggleFaqs('search');
  };

  // bind: show one answer
  document.querySelectorAll('.faq-box').forEach(qrow => {
    qrow.onclick = e => {
      const Faq = e.target.closest('.faq');
      const hasAnswer = Faq.querySelector('.a') !== null;
      hideAnswers();
      if (!hasAnswer)
        popAnswer(Faq);
    };
  });

  // bind: show filter menu
  document.getElementById('filter-icon').onclick = e => {
    const filterMenu = document.getElementById('filter-menu');
    if (filterMenu.classList.contains('hide')) {
      filterMenu.classList.remove('hide');
      e.target.classList.add('open');
    }
    else {
      filterMenu.classList.add('hide');
      e.target.classList.remove('open');
    }
  };

  // bind: change filter menu dropdowns
  document.querySelectorAll('#filter-menu select').forEach(select => select.onchange = e => {
    // toggle FAQs
    const groupId = e.target.getAttribute('id');
    faqFilters[groupId] = e.target.value;
    toggleFaqs(groupId);

    // repopulate categories
    if (groupId == 'user-types') {
      let SelectCat = document.getElementById('categories');
      SelectCat.querySelectorAll('option:not(:first-child)').forEach(el => el.remove());

      let filteredCats = [...new Set(faqs
        .filter(faq => faq.tags.includes(e.target.value))
        .map(faq => faq.tags.split(',')).flat())
      ];
      
      console.log(filteredCats);
      filteredCats.filter(tag => !userTypes.includes(tag))
      .sort()
      .forEach(tag => {
        let Tag = document.createElement('option');
        Tag.innerHTML = tag;
        Tag.setAttribute('value', tag);
        SelectCat.appendChild(Tag);
      });
      
      if (faqFilters.categories) {
        if (filteredCats.includes(faqFilters.categories))
          SelectCat.value = faqFilters.categories;
        else
          faqFilters.categories = '';
        toggleFaqs();
      }
    }
  });

  // bind: reset filters button
  document.querySelector('#reset-filters').onclick = e => {
    // reset values
    faqFilters['user-types'] = '';
    faqFilters['categories'] = '';

    // reset dom
    document.querySelectorAll('#filter-menu select').forEach(el => el.value = '');

    toggleFaqs();
  };

  // bind: ask us
  document.querySelector('#ask-us').onclick = e => {
    window.open('mailto:' + helpEmail + '?subject=LeagueLink - New Question&body=' + encodeURIComponent('Hi!\n\nI have a new question about using LeagueLink:\n[ENTER QUESTION HERE]'), '_blank');
  };

});
