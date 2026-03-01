const helpEmail = 'ps.carreon@gmail.com';
const userTypes = ['Standard User', 'Admin', 'Admin (LL Initial Setup)'];
const faqFilters = {
  search:''
  , 'user-types':''
  , tags:''
};

function popQuestion(faq) {

  let Faq = document.createElement('div');
  Faq.classList.add('faq');
  Faq.setAttribute('faq-id', faq.id);
  document.querySelector('.faq-box').appendChild(Faq);

  let qRow = document.createElement('div');
  qRow.classList.add('q-row');
  Faq.appendChild(qRow);

  //question
  let q = document.createElement('div');
  q.classList.add('q');
  q.innerHTML = faq.q;
  qRow.appendChild(q);

  //tags
  faq.tags.split(',').forEach(tag => {
    let t = document.createElement('div');
    t.classList.add('tag');
    t.innerHTML = tag;
    qRow.appendChild(t);
  });

}

function popAnswer(Faq) {
  const faqId = Faq.getAttribute('faq-id');
  const faq = faqs.filter(f => f.id == faqId).pop();

  //answer
  let A = document.createElement('div');
  A.classList.add('a');
  Faq.appendChild(A);

  let Aopts = document.createElement('div');
  Aopts.classList.add('a-opts');
  A.appendChild(Aopts);
  
  let MoreHelp = document.createElement('a');
  MoreHelp.setAttribute('href', 'mailto:' + helpEmail + '?subject=LeagueLink Help - FAQ # ' + faqId + '&body=Hi! I need more help with this.%0D%0A%0D%0A[ENTER QUESTION HERE]%0D%0A%0D%0AQuestion: ' + faq.q);
  MoreHelp.classList.add('more-help');
  MoreHelp.innerHTML = 'Need more help with this? Let us know.';
  Aopts.appendChild(MoreHelp);

  let aArray = faq.a.split('\n');
  if(aArray.length > 1) {
    A.innerHTML = '<ol>' + aArray.map(i => '<li>' + i + '</li>').join("\r\n") + '</ol>';
    A.classList.add('content');
  }
  else {
    const aString = aArray.pop();
    if (aString.startsWith('http')) {
      
      let NewWindow = document.createElement('a');
      NewWindow.setAttribute('href', aString);
      NewWindow.setAttribute('target', '_blank');
      NewWindow.classList.add('button');
      NewWindow.innerHTML = 'Open in New Window';
      Aopts.appendChild(NewWindow);

      let iframe = document.createElement('iframe');
      iframe.setAttribute('src', aString);
      A.appendChild(iframe);

      // delete header of scribe
      if (aString.startsWith('https://scribehow.com')) {
        const iHeader = iframe.querySelector('header');
        iHeader.parentElement.style('margin-top', '0');
        iHeader.remove();
      }
    }
    else {
      A.innerHTML = aString;
      A.classList.add('content');
    }
  }
}

function setFaqFilter(prop, value) {
  faqFilter[prop] = value;
}

function toggleFaqs(filterProp) {
  faqs.forEach(faq => {

    let showCount = 0; //Object.assign({}, faqFilters);
    
    Object.keys(faqFilters).forEach (prop => {
      if (prop == 'search') {
        const arrayStrings = faqFilters[search].toLowerCase().split(' ');
        if (arrayStrings.every(str => [faq.q, faq.a, faq.tags].join('|').toLowerCase.includes(str))) showCount++;
      }
      else
        if(faq.tags.contains(faqFilters[prop])) showCount++;
    });

    const Faq = document.querySelector('.faq[faq-id="' + faqId + '"]');
    if (show)
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
  [...userTypes, ...[...new Set(...faqs
    .map(faq => faq.tags)
    .filter(tag => !userTypes.contains(tag))
    .sort((a, b) => a < b)
  )]].forEach(tag => {
    let Tag = document.createElement('div');
    Tag.classList.add('opt');
    Tag.innerHTML = tag;
    if (userTypes.contains(tag))
      document.getElementById('user-types').appendChild(Tag);
    else
      document.getElementById('tags').appendChild(Tag);
  })


  // populate questions
  faqs.forEach(popQuestion);

  // bind: search
  document.getElementById('search-box').oninput = e => {
    faqFilters[search] = e.target.value;
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

  // bind: click filter menu
  document.getElementById('filter-menu').onclick = e => {
    if (e.target.hasClass('opt')) {
      const groupId = e.target.closest('[id]').getAttribute('id');
      faqFilter[prop] = value;
      toggleFaqs(prop);
    }
  };

});
