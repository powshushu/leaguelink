var showIds = [];

function popFaq(faq) {

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

  //answer
  let a = document.createElement('div');
  a.classList.add('a');
  Faq.appendChild(a);
  
  let aArray = faq.a.split('\n');
  if(aArray.length > 1) {
    a.innerHTML = '<ol>' + aArray.map(i => '<li>' + i + '</li>').join("\r\n") + '</ol>';
    a.classList.add('content');
  }
  else {
    const aString = aArray.pop();
    if (aString.startsWith('http')) {
      let iframe = document.createElement('iframe');
      iframe.setAttribute('src', aString);
      a.appendChild(iframe);
    }
    else {
      a.innerHTML = aString;
      a.classList.add('content');
    }
  }

}

function toggleFaq(faqId, show) {
  const Faq = document.querySelector('.faq[faq-id=' & faqId & ']');
  if (show)
    Faq.classList.remove('hide');
  else
    Faq.classList.add('hide');
}

function hideAnswers() {
  document.querySelectorAll('.faq-box .a').forEach(el => el.classList.add('hide'));
}

document.addEventListener('DOMContentLoaded', function() {
  faqs.forEach(popFaq);
  hideAnswers();

  // show answer
  document.querySelectorAll('.faq-box .q-row').forEach(qrow => {
    qrow.onclick = e => {
      const a = e.target.closest('.faq').querySelector('.a');
      const isHidden = a.classList.contains('hide');
      hideAnswers();
      if (isHidden)
        a.classList.remove('hide');
    };
  });

  // show filter menu
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

  // search
  document.getElementById('search-box').oninput = e => {
    const searchString = e.target.value.toLowerCase();
    faqs.forEach(faq => toggleFaq(faq.id, faq.q.toLowerCase().includes(searchString)
      || faq.a.toLowerCase().includes(searchString)
      || faq.tags.toLowerCase().includes(searchString);
    ));
  };
});
