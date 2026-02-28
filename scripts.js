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
  const a = faqs.filter(f => f.id == faqId).pop().a;

  //answer
  let A = document.createElement('div');
  A.classList.add('a');
  Faq.appendChild(A);
  
  let aArray = a.split('\n');
  if(aArray.length > 1) {
    A.innerHTML = '<ol>' + aArray.map(i => '<li>' + i + '</li>').join("\r\n") + '</ol>';
    A.classList.add('content');
  }
  else {
    const aString = aArray.pop();
    if (aString.startsWith('http')) {
      let iframe = document.createElement('iframe');
      iframe.setAttribute('src', aString);
      A.appendChild(iframe);
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
    const searchString = e.target.value.toLowerCase();
    faqs.forEach(faq => toggleFaq(faq.id, faq.q.toLowerCase().includes(searchString)
      || faq.a.toLowerCase().includes(searchString)
      || faq.tags.toLowerCase().includes(searchString)));
  };
});
