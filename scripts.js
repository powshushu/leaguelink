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
  
  let aArray = faq.a.split('\n');
  if(aArray.length > 1) {
    A.innerHTML = '<ol>' + aArray.map(i => '<li>' + i + '</li>').join("\r\n") + '</ol>';
    A.classList.add('content');
  }
  else {
    const aString = aArray.pop();
    if (aString.startsWith('http')) {
      
      let Aopts = document.createElement('div');
      Aopts.classList.add('a-opts');
      A.appendChild(Aopts);
      
      let NewWindow = document.createElement('a');
      NewWindow.setAttribute('href', aString);
      NewWindow.setAttribute('target', '_blank');
      NewWindow.classList.add('button');
      NewWindow.innerHTML = 'Open in New Window';
      Aopts.appendChild(NewWindow);

      let MoreHelp = document.createElement('a');
      MoreHelp.setAttribute('href', 'mailto:ps.carreon@gmail.com?subject=LeagueLink Help - FAQ # ' + faqId + '&subject=Hi I need more help with this. [ENTER QUESTION HERE]%0D%0A%0D%0AQuestion: ' + faq.q);
      MoreHelp.classList.add('more-help');
      MoreHelp.innerHTML = 'Need more help with this? Let us know.';
      Aopts.appendChild(MoreHelp);

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

function toggleFaq(faqId, show) {
  const Faq = document.querySelector('.faq[faq-id="' + faqId + '"]');
  if (show)
    Faq.classList.remove('hide');
  else
    Faq.classList.add('hide');
}

function hideAnswers() {
  document.querySelectorAll('.faq .a').forEach(a => a.remove());
}

document.addEventListener('DOMContentLoaded', function() {
  
  // populate questions
  faqs.forEach(popQuestion);

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

  // bind: search
  document.getElementById('search-box').oninput = e => {
    const arrayStrings = e.target.value.toLowerCase().split(' ');
    faqs.forEach(faq => toggleFaq(faq.id, arrayStrings.every(str =>
      faq.q.toLowerCase().includes(str)
      || faq.a.toLowerCase().includes(str)
      || faq.tags.toLowerCase().includes(str)
    )));
  };
});
