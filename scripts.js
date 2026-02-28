const faqs = [

{id:1, q:"How do I view/update my Profile?", a:"In the top nav click 'My Profile'.", tags:"General,Standard User"}
, {id:2, q:"On the Member Management page, what do all the boxes mean?", a:"https://scribehow.com/page/Glossary_and_Setup_Screen__vcmqgTN1QwacaXj7e6PsXA?referrer=documents", tags:"General,Admin,Admin (LL Initial Setup)"}
, {id:3, q:"How do I create an event in the calendar?", a:"In the top nav click 'Calendar', then click the calendar you want.\nClick the grey button 'Manage', then click 'Add Event'.", tags:"Calendar,Admin,Admin (LL Initial Setup)"}
, {id:4, q:"How do I edit/manage an event?", a:" the top nav click 'Calendar', then click the calendar you want.\nClick the grey button 'Manage', then click 'Calendar'. (NOTE: This webpage will look exactly like the same calendar but now when you click on an event, you can edit it). Alternatively, you can click 'Manage' > 'List' to see the calendar as a list.\nFind your event and click it.", tags:"Calendar,Admin,Admin (LL Initial Setup)"}
, {id:5, q:"How do I delete an event?", a:"In the top nav click 'Calendar', then click the calendar you want.\nClick the grey button 'Manage', then click 'List'.\nFind your event and click the 'Delete' icon.", tags:"Calendar,Admin,Admin (LL Initial Setup)"}
, {id:6, q:"How do I create shifts for an event?", a:"https://scribehow.com/viewer/How_to_create_sub-registrations_in_an_event__P0MMDw5LQR-aAyXZIMzWZg", tags:"Calendar,Admin"}
, {id:7, q:"How do I sign up for an event?", a:"In the top nav click 'Calendar', then click the calendar you want.\nFind the event you want and click it.\nAdd any comments in the 'Comments' box. Then click 'Register'.", tags:"Calendar,Standard User"}
, {id:8, q:"How do I set up email reminders for events?", a:"(This is a calendar feature and cannot be set per event)\nIn the top nav click 'Calendar', then click the calendar you want.\nClick the grey button 'Setup'.\nScroll down and click on 'Reminder Emails'.", tags:"Calendar,Admin,Admin (LL Initial Setup)"}
, {id:9, q:"How do I send a message to participants who are registered for an event?", a:"See the how-to for 'Manage an Event'.", tags:"Calendar,Admin"}
, {id:10, q:"How do I set up membership dues?", a:"https://scribehow.com/viewer/Set_Dues_Definitions__ksYc9xazR9qN-0Sy2DEO8g?referrer=knowledge-page", tags:"Membership,Admin (LL Initial Setup)"}
, {id:11, q:"How do I set up the onboarding process for new members?", a:"https://scribehow.com/page/Checklists_for_Onboarding_and_Renewal__tzs4Kgn7SHWO5yifG_5qeg?referrer=page&slug=/page/Member_and_Dues_Management__41AlR8ruRz64zD9x28H0Xg?referrer=documents", tags:"Membership,Admin (LL Initial Setup)"}
, {id:12, q:"How do I onboard a new member?", a:"https://scribehow.com/viewer/Create_a_New_Member_in_League_Link__OqeTSgSWSOSb3uuzbwxICw?referrer=knowledge-page", tags:"Membership,Admin"}
, {id:13, q:"How do I renew my membership?", a:"An admin will assign your renewal. Once that happens, you'll see the checklist on your homepage in the box 'My Checklists'.", tags:"Membership,Standard User"}
, {id:14, q:"How do I set multiple members to \"Inactive\"?", a:"In the top nav click 'Administration' then 'Member Management'.\nScroll down and click 'Status Mass Assign\nFind the accounts you want to assign and fill out the rest of the form.", tags:"Membership,Admin,Admin (LL Initial Setup)"}
, {id:15, q:"How do I set up leadership positions?", a:"In the top nav click 'Administration' then 'Member Management'.\nScroll down and click 'Position Manager'.", tags:"Membership,Admin (LL Initial Setup)"}
, {id:16, q:"How do I create a group?", a:"https://scribehow.com/page/Permissions_and_Access_GroupsGroupShare___qMB-xffSJiBEB5wGyLNaQ#heading-2", tags:"Membership,Admin,Admin (LL Initial Setup)"}
, {id:17, q:"How do I assign the renewal process to a member?", a:"\"In the top nav click 'Administration' then 'Member Management'.\nClick 'Checklist Queue'.\nClick the '+' sign.\nUnder 'Checklist' select 'Adult Membership Renewal'.\nUnder 'Account' search for the member name.", tags:"Membership,Admin"}
, {id:18, q:"How do I log hours for an event that I volunteered for?", a:"On your homepage, look for the box title 'Enter Hours'.\nClick the button 'Add Hours'.\nComplete the form. If you don't see your event, let your event coordinator know to add the event in the calendar.", tags:"Hours,Standard User"}
, {id:19, q:"How do I log hours for someone else?", a:"In the top nav click 'Administration' then 'Member Management'.\nClick 'Hours Manager'.\nClick the blue button 'Add'.", tags:"Hours,Admin"}
, {id:20, q:"How do I add categories/activites for hours?", a:"https://scribehow.com/viewer/How_To_Add_Hours_Categories_and_Activities_In_LeagueLink__TdTOdOl6RhijEfCXlLFEKg", tags:"Hours,Admin,Admin (LL Initial Setup)"}
, {id:21, q:"How do I edit the status and/or status date of a member?", a:"Click 'Administration', then 'Member Search'.\nFind the member.\nScroll down about 1 page to 'Volunteer/Employee Status'.\nClick the Edit icon on the status you want to edit.", tags:"Membership,Admin,Admin (LL Initial Setup)"}
, {id:22, q:"When editing a step in a checklist, what does \"Step Type\" mean?", a:"https://digitalcheetah.zendesk.com/hc/en-us/articles/6667809864987-What-are-the-Step-Options-for-a-Checklist", tags:"Checklist,Admin,Admin (LL Initial Setup)"}
, {id:23, q:"When editing a step in a checklist, what do all the options mean?", a:"https://digitalcheetah.zendesk.com/hc/en-us/articles/6667805675419-How-to-Add-a-Step-to-a-Checklist", tags:"Checklist,Admin,Admin (LL Initial Setup)"}
, {id:24, q:"I tried including the step \"Parent/Guardian Consent Request\" in my Assisteens Intake checklist but it doesn't do anything. What am I doing wrong?", a:"In the step set up, ensure that the field \"End User Link\" is populate with the following value: /?nd=vms_minor_consent", tags:"Membership,Checklist,Assisteens,Admin,Admin (LL Initial Setup)"}
, {id:25, q:"I tried deleting a status and it won't work. What's going on?", a:"Statuses can only be deleted if they aren't assigned to anyone, which includes both past and present statuses. You'll have to use the Query Tool to find everyone taht is assigned a specific status.", tags:"Admin (LL Initial Setup)"}
, {id:26, q:"In Access Manager, when assigning someone access, the dropdown box \"Access Levels\" has so many options. What do they mean?", a:"https://digitalcheetah.zendesk.com/hc/en-us/articles/360001294933-Administrative-Access-Level-Descriptions-L\nhttps://filemanager.digitalcheetah.com/249/11/file_manager/#/file/10630/947140/1398870", tags:"Admin (LL Initial Setup)"}
, {id:27, q:"How do I create a group, aka GroupShare, to collaborate with certain people?", a:"https://scribehow.com/viewer/How_to_Create_an_Access_Group_and_add_Members_for_a_Committee_or_other_Group__2up5yxzKTCyRUFkwC6bKlA?referrer=knowledge-page", tags:"Groups,Admin,Admin (LL Initial Setup)"}
, {id:28, q:"How do I delete a group, aka GroupShare?", a:"Deleting an Access Group will also delete its GroupShare. Wait overnight to take effect or click \"Refresh GroupShare\" on the bottom of the Access Group Manager page.", tags:"Groups,Admin,Admin (LL Initial Setup)"}
, {id:29, q:"What do prospective Assisteens see when they get to the Parent/Guardian Consent Step?", a:"https://scribehow.com/viewer/Assisteen_Guardian_Consent_Process__3eF6euorRbqp7Xy0CcYIcQ", tags:"Membership,Checklist,Assisteens,Admin,Admin (LL Initial Setup)"}
, {id:30, q:"How do I delete/remove a member?", a:"https://digitalcheetah.zendesk.com/hc/en-us/articles/38789154154779-How-to-Delete-an-Account", tags:"Accounts,Admin,Admin (LL Initial Setup)"}
, {id:31, q:"How do I use the Parent/Guardian Consent Step for the Assisteen Intake Checklist?", a:"Ensure you add two steps in your Assisteen Intake checklist:\n1. Parent/Guardian Consent Request - This step prompts the Assisteen to enter their parent/guardian information.\n2. Parent/Guardian Consent Completed - This step sends an email to the parent/guardian. Once the parent/guardian responds, the step will be completed.", tags:"Membership,Checklist,Assisteens,Admin,Admin (LL Initial Setup)"}

];

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
