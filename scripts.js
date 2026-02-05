<script>
    
/*
img src: '/ama/orig/operating_units/11' + path
let url = window.location.href;
let urlParams = new URLSearchParams(window.location.search);
*/

let skillIndex = 0;
let skills = [
  { name:'Standard User', class:'stand' }
  , { name:'Admin', class:'admin' }
  , { name:'Admin (Set Up LeagueLink)', class:'init' }
];

let resources = [
  { name:'Vendor Help Pages', desc:"Searchable help pages for forms, terminology, drop-downs and definitions", skill:[1,2], href:'https://leaguelink.assistanceleague.org/?nd=vms_zendesk_redirect&help_center=1'}
  , { name:'How-To Guides', desc:"Browse through a list of How-To's made by our Technology Task Force", skill:[1,2], href:'https://scribehow.com/page/LeagueLink_Admin_Resource_Library__w77y99v0Qpy_ZszOCBhqUg'}
  , { name:'Training Videos', desc:"Recorded Zoom calls of training and troubleshooting", skill:[0,1,2], href:'https://leaguelink.assistanceleague.org/?nd=vms_page&page_id=58'}
  , { name:'Bot', desc:"The AI-powered bot uses information from our training material to respond to your questions ", skill:[0,1,2], href:'https://leaguelink.assistanceleague.org/?nd=vms_registration_view&registration_type_id=7'}
  , { name:'Live Office Hours', desc:"Register for an upcoming office hours session (held twice a week)", skill:[0,1,2], href:'https://leaguelink.assistanceleague.org/?nd=vms_registration_view&registration_type_id=7'}
  , { name:'Submit a Question', desc:"Ask us! We usually respond within a few days", skill:[0,1,2], href:'https://leaguelink.assistanceleague.org/?nd=vms_page&page_id=382'}
];

let howtocats = [
  { title:'General', icon:'home'}
  , {title:'Calendar', icon:'calendar_month'}
  , {title:'Membership', icon:'id_card'}
  , {title:'Hours', icon:'schedule'}
];

let howtos = [
  { cat:'General', title: 'View/Update My Profile', skill:[0], instr:[
    "In the top nav click 'My Profile'."
  ]}
  , { cat:'General', title: 'Member Management Definitions', skill:[1,2], href:'https://scribehow.com/page/Glossary_and_Setup_Screen__vcmqgTN1QwacaXj7e6PsXA?referrer=documents'}
  , { cat:'Calendar', title: 'Create an Event', skill:[1,2], instr:[
    "In the top nav click 'Calendar', then click the calendar you want."
    , "Click the grey button 'Manage', then click 'Add Event'."
  ]}
  , { cat:'Calendar', title: 'Edit/Manage an Event', skill:[1,2], instr:[
    "In the top nav click 'Calendar', then click the calendar you want."
    , "Click the grey button 'Manage', then click 'Calendar'. (NOTE: This webpage will look exactly like the same calendar but now when you click on an event, you can edit it). Alternatively, you can click 'Manage' > 'List' to see the calendar as a list"
    , "Find your event and click it."
  ]}
  , { cat:'Calendar', title: 'Delete an Event', skill:[1,2], instr:[
    "In the top nav click 'Calendar', then click the calendar you want."
    , "Click the grey button 'Manage', then click 'List'."
    , "Find your event and click the 'Delete' icon."
  ]}
  , { cat:'Calendar', title: 'Create Shifts for an Event', skill:[1], href:'https://scribehow.com/viewer/How_to_create_sub-registrations_in_an_event__P0MMDw5LQR-aAyXZIMzWZg'}
  , { cat:'Calendar', title: 'Sign Up for an Event', skill:[0], instr:[
    "In the top nav click 'Calendar', then click the calendar you want."
    , "Find the event you want and click it."
    , "Add any comments in the 'Comments' box. Then click 'Register'."
  ]}
  , { cat:'Calendar', title: 'Set Up Email Reminders for Events', skill:[1,2], instr:[
    "(This is a calendar feature and cannot be set per event)"
    , "In the top nav click 'Calendar', then click the calendar you want."
    , "Click the grey button 'Setup'."
    , "Scroll down and click on 'Reminder Emails'."
  ]}
  , { cat:'Calendar', title: 'Send Message to Participants', skill:[1,2], instr:[
    "See the how-to for 'Manage an Event'."
  ]}
  , { cat:'Membership', title: 'Set Up Dues', skill:[2], href:'https://scribehow.com/viewer/Set_Dues_Definitions__ksYc9xazR9qN-0Sy2DEO8g?referrer=knowledge-page' }
  , { cat:'Membership', title: 'Set Up Onboarding Process', skill:[2], href:'https://scribehow.com/page/Checklists_for_Onboarding_and_Renewal__tzs4Kgn7SHWO5yifG_5qeg?referrer=page&slug=/page/Member_and_Dues_Management__41AlR8ruRz64zD9x28H0Xg?referrer=documents' }
  , { cat:'Membership', title: 'Onboard New Member', skill:[1], href:'https://scribehow.com/viewer/Create_a_New_Member_in_League_Link__OqeTSgSWSOSb3uuzbwxICw?referrer=knowledge-page' }
  , { cat:'Membership', title: 'Renew My Membership', skill:[0], instr:[
    "An admin will assign your renewal. Once that happens, you'll see the checklist on your homepage in the box 'My Checklists'"
  ]}
  , { cat:'Membership', title: 'Set Multiple Member Statuses to Inactive', skill:[2], instr:[
    "In the top nav click 'Administration' then 'Member Management'."
    , "Scroll down and click 'Status Mass Assign'"
    , "Find the accounts you want to assign and fill out the rest of the form."
  ]}
  , { cat:'Membership', title: 'Set Up Leadership Positions', skill:[2], instr:[
    "In the top nav click 'Administration' then 'Member Management'"
    , "Scroll down and click 'Position Manager'."
  ] }
  , { cat:'Membership', title: 'Create a Group', skill:[1,2], href:'https://scribehow.com/page/Permissions_and_Access_GroupsGroupShare___qMB-xffSJiBEB5wGyLNaQ#heading-2' }
  , { cat:'Membership', title: 'Assign a Checklist, e.g. Renewal', skill:[1], instr:["In the top nav click 'Administration' then 'Member Management'.", "Click 'Checklist Queue", "Click the '+' sign", "Under 'Checklist' select 'Adult Membership Renewal'", "Under 'Account' search for the member name"
  ] }
  , { cat:'Hours', title: 'Log Hours', skill:[0], instr:[
    "On your homepage, look for the box title 'Enter Hours'."
    , "Click the button 'Add Hours'."
    , "Complete the form."
  ]}
  , { cat:'Hours', title: 'Log Hours for Someone Else', skill:[1], instr:[
    "In the top nav click 'Administration' then 'Member Management'."
    , "Click 'Hours Manager'."
    , "Click the blue button 'Add'."
  ]}
  , { cat:'Hours', title: 'Add Categories/Activities for Hours', skill:[1,2], href:'https://scribehow.com/viewer/How_To_Add_Hours_Categories_and_Activities_In_LeagueLink__TdTOdOl6RhijEfCXlLFEKg'}
  , { cat:'Membership', title: 'Edit Status/Date of a Member', skill:[1,2], instr:["Click 'Administration', then 'Member Search'.", 'Find the member.', "Scroll down about 1 page to 'Volunteer/Employee Status'.", "Click the Edit icon on the status you want to edit."]}
];


function popSkills() {
  skills.forEach((skill, x) => {
    let item = document.createElement('div');
    item.innerHTML = skill.name;
    item.classList.add('item');
    item.setAttribute('skill-index', x);
    document.getElementById('skill-menu').appendChild(item);
  });
}

function setSkill(x) {

  hideBubbles();

  // skill menu
  let skill = skills[x];
  document.querySelectorAll('#skill-menu .item').forEach(item => {
    item.classList.remove('selected');
    if (+item.getAttribute('skill-index') == x)
      item.classList.add('selected');
  });

  // skill title
  document.querySelector('#skill-title').innerHTML = skill.name;

  // skill show/hide
  [...skills.keys()].sort((a, b) => (a == x? 1 : -1)).forEach(s => {
    document.querySelectorAll('.' + skills[s].class).forEach(el => {
      el.style.display = (s == x? '' : 'none');
    })
  });
}

function popHowtos() {

  let idHowtos = document.getElementById('howtos');
  idHowtos.innerHTML = '';
  howtocats.forEach(howtocat => {
  
    let group = document.createElement('div');
    group.classList.add('group');
    idHowtos.appendChild(group);

    let titling = document.createElement('div');
    titling.classList.add('titling');
    group.appendChild(titling);

    let icon = document.createElement('span');
    icon.classList.add('material-symbols-outlined');
    icon.innerHTML = howtocat.icon;
    titling.appendChild(icon);

    let text = document.createElement('div');
    text.classList.add('text');
    text.innerHTML = howtocat.title;
    titling.appendChild(text);
    
    let body = document.createElement('div');
    body.classList.add('body');
    group.appendChild(body);
    
    // each how-to
    howtos.filter(h => h.cat == howtocat.title).forEach(howto => {
      let a = document.createElement('a');
      a.innerHTML = howto.title;
      body.appendChild(a);

      //set class
      howto.skill.forEach(s => a.classList.add(skills[s].class));

      if (howto.hasOwnProperty('href')) {
        a.setAttribute('href', howto.href);
        a.setAttribute('target', '_blank');

        let icon = document.createElement('span');
        icon.classList.add('material-symbols-outlined');
        icon.innerHTML = 'open_in_new';
        a.appendChild(icon);
      }
      else if (howto.hasOwnProperty('instr')) {
        //a.setAttribute('href', '#');

        let instr = document.createElement('div');
        instr.classList.add('instr');
        instr.classList.add('bubble');
        instr.classList.add('filled');
        instr.innerHTML = '<ol>' + howto.instr.map(i => '<li>' + i + '</li>').join("\r\n") + '</ol>';
        body.appendChild(instr);
      }
    });
  });
}

function popResources() {

  let idReso = document.getElementById('resources');
  resources.forEach(reso => {

    let resoLi = document.createElement('li');
    idReso.appendChild(resoLi);
    let a = document.createElement('a');
    resoLi.appendChild(a);
    a.setAttribute('href', reso.href);
    a.setAttribute('target', '_BLANK');
    
    // class
    a.classList.add('filled');
    reso.skill.forEach(s => a.classList.add(skills[s].class));

    ['name', 'desc'].forEach(word => {
      let div = document.createElement('div');
      div.classList.add(word);
      div.innerHTML = reso[word];
      a.appendChild(div);
    });
    
  });
}

function hideBubbles() {
  document.querySelectorAll('.bubble').forEach(el => el.classList.remove('show'));
}

document.addEventListener('DOMContentLoaded', function() {
  popSkills();
  popHowtos();
  popResources();
  setSkill(0);

  // bind skill selection
  document.querySelectorAll('#skill-menu .item').forEach(item => {
    item.onclick = e => {
      let skillIndex = +e.target.getAttribute('skill-index');
      setSkill(skillIndex);
      console.log(skillIndex);
    };
  });

  // bind howto selection
  document.querySelectorAll('#howtos a').forEach(item => {
    item.onclick = e => {
      const isVisible = e.target.nextElementSibling.classList.contains('show');
      hideBubbles();
      if (!isVisible)
        e.target.nextElementSibling.classList.add('show');
      console.log('click');
    };
  });

});

</script>