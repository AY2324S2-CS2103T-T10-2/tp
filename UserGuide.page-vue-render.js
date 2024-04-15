
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("RapidTracer")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/index.html"}},[_v("Home")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/AY2324S2-CS2103T-T10-2/tp","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Site Map")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/index.html"}},[_v("Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")]),_v(" "),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/UserGuide.html#quick-start-and-installation"}},[_v("Quick Start")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/UserGuide.html#using-rapidtracer"}},[_v("Using RapidTracer")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/UserGuide.html#faq"}},[_v("FAQ")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/UserGuide.html#command-summary"}},[_v("Command Summary")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")]),_v(" "),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#acknowledgements"}},[_v("Acknowledgements")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#setting-up-getting-started"}},[_v("Setting Up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#design"}},[_v("Design")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#implementation"}},[_v("Implementation")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#documentation-logging-testing-configuration-dev-ops"}},[_v("Documentation, logging, testing, configuration, dev-ops")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#appendix-requirements"}},[_v("Appendix: Requirements")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#appendix-instructions-for-manual-testing"}},[_v("Appendix: Instructions for manual testing")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Tutorials\n\n"),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/tutorials/TracingCode.html"}},[_v("Tracing code")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/tutorials/AddRemark.html"}},[_v("Adding a command")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/tutorials/RemovingFields.html"}},[_v("Removing Fields")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])])])])],1)],1)]),_v(" "),_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p',[_v("RapidTracer offers a fast-paced user interface (UI) for clinic managers to handle contacts and appointments. It combines:")]),_v(" "),_m(1),_v(" "),_c('p',[_v("This guide provides a walkthrough on how to use RapidTracer to assist you in your clinical workflows, starting from patient in-processing.")]),_v(" "),_c('hr'),_v(" "),_m(2),_v(" "),_c('p',[_v("This section covers the download and installation process for RapidTracer.")]),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('hr'),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_c('p',[_v("The table below lists all input parameters and their possible values.")]),_v(" "),_m(8),_c('box',{attrs:{"type":"info","seamless":""}},[_c('b',[_v("Remark:")]),_v(" Parameters that appear in square brackets ("),_c('code',{pre:true},[_v("[]")]),_v(") subsequently are optional parameters.\n")]),_v(" "),_m(9),_v(" "),_c('p',[_v("There are three ways you can register new patients and schedule new appointments.")]),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v("\nYou can schedule appointments for existing patients using the `addappt` command."),_c('p'),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('b',[_v("Remark:")]),_v(" The "),_c('code',{pre:true},[_v("addappt")]),_v(" command allows the addition of appointments with date/time in the past. This functionality allows you to add an appointment for record purposes if you forget to add the appointment when the patient visits the clinic.\n")]),_v(" "),_m(20),_v(" "),_c('p',[_v("For walk-in appointments, you can also create a new contact and add an appointment with a single command. This command automatically creates an appointment linked to the patient which is being added.")]),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('b',[_v("Remark:")]),_v(" This "),_c('code',{pre:true},[_v("add")]),_v(" command is the same as the one above, but with an extra field (the `DATE_TIME`).\n")]),_v(" "),_m(23),_v(" "),_c('p',[_v("RapidTracer offers search functions for both patient and appointment data. Beyond searching for specific patients and appointments, RapidTracer offers a list view to see all patient and appointment records. To reset the list view in both patient and appointment records, simply press the \"Reset\" button next to the search bar.")]),_v(" "),_c('img',{staticStyle:{"width":"50%"},attrs:{"src":"/tp/images/userguide/reset.png"}}),_v(" "),_c('p'),_v(" "),_m(24),_v(" "),_c('p',[_v("Shows a list of contacts in RapidTracer matching the keywords provided. The contact only needs to partially match any of the keywords provided.")]),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_c('p',[_v("Shows a list of appointments in RapidTracer matching the keywords provided. The appointment only needs to partially match any of the keywords provided.")]),_v(" "),_m(29),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_c('p'),_v(" "),_c('p',[_v("Alternatively, simply double click any patient card to show the appointments associated with the patient.")]),_v(" "),_m(32),_v(" "),_c('p',[_v("Shows a list of all patients in RapidTracer.")]),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_m(35),_v(" "),_c('p',[_v("Shows a list of all appointments in RapidTracer.")]),_v(" "),_m(36),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_c('p',[_v("Performs contact tracing on the selected appointment.\nThis shows a list of appointments that overlap with the selected appointment.\nThis shows a list of patients that attended those appointments.")]),_v(" "),_m(39),_v(" "),_m(40),_v(" "),_m(41),_v(" "),_c('p'),_v(" "),_c('p',[_v("Alternatively, simply double click any appointment card to trace all close contacts.")]),_v(" "),_m(42),_v(" "),_c('p',[_v("In the event that patients update their contact details or reschedule an appointment, their details can be updated accordingly. RapidTracer also allows you to cancel appointments and delete patient records.")]),_v(" "),_m(43),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_m(46),_v(" "),_m(47),_v(" "),_m(48),_v(" "),_m(49),_v(" "),_m(50),_v(" "),_m(51),_v(" "),_m(52),_v(" "),_m(53),_v(" "),_m(54),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_m(57),_v(" "),_m(58),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_m(61),_v(" "),_m(62),_v(" "),_m(63),_v(" "),_m(64),_v(" "),_c('p',[_v("You can import patient data from a csv file.")]),_v(" "),_m(65),_v(" "),_m(66),_v(" "),_m(67),_v(" "),_m(68),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('b',[_v("Remark:")]),_v(" You should avoid empty lines in the csv file you want to import.\nPre-existing patients (identified by similar names and phone numbers) in the records will not be imported again.\n")]),_v(" "),_m(69),_v(" "),_c('p',[_v("You can export existing patient data to a csv file stored in a specific location.")]),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_m(72),_v(" "),_m(73),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('b',[_v("Remark:")]),_v(" If you execute the export command without creating the data directory and PatientData.csv file, the directory and file will be automatically generated in the folder where RapidTracer is launched.\n")]),_v(" "),_m(74),_v(" "),_m(75),_v(" "),_m(76),_v(" "),_m(77),_v(" "),_m(78),_v(" "),_m(79),_v(" "),_m(80),_v(" "),_m(81),_v(" "),_m(82),_v(" "),_m(83),_v(" "),_m(84),_v(" "),_m(85),_v(" "),_c('hr'),_v(" "),_m(86),_v(" "),_m(87),_v(" "),_m(88),_v(" "),_m(89),_v(" "),_m(90),_v(" "),_c('hr'),_v(" "),_m(91),_v(" "),_m(92),_v(" "),_c('hr'),_v(" "),_m(93),_v(" "),_m(94)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#rapidtracer"}},[_v("RapidTracer‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#quick-start-and-installation"}},[_v("Quick start and installation‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-rapidtracer"}},[_v("Using RapidTracer‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#inputs"}},[_v("\n  1. Input parameters\n‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#patient-in-processing"}},[_v("\n  2. Registering patients and appointments\n‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#searching-records"}},[_v("\n  3. Searching existing records\n‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#trace"}},[_v("\n  4. Tracing close contacts\n‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#editing-records"}},[_v("\n  5. Editing and deleting records\n‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#import-export-data"}},[_v("\n    6. Importing and exporting patient records\n‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#clear"}},[_v("\n  7. Clearing data\n‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#general-help"}},[_v("\n  8. General help\n‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#faq"}},[_v("FAQ‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#known-issues"}},[_v("Known issues‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-summary"}},[_v("Command summary‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(95)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"rapidtracer"}},[_v("RapidTracer"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#rapidtracer","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("a simple and intuitive UI;")]),_v(" "),_c('li',[_v("swift navigation through complex patient data and contact histories;")]),_v(" "),_c('li',[_v("the ability to load and store large datasets; and is")]),_v(" "),_c('li',[_v("quick to use for fast typers!")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"quick-start-and-installation"}},[_v("Quick start and installation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quick-start-and-installation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Ensure you have Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(" or above installed on your computer.")]),_v(" "),_c('li',[_v("Download the latest version of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("RapidTracer.jar")]),_v(" "),_c('a',{attrs:{"href":"https://github.com/AY2324S2-CS2103T-T10-2/tp/releases/tag/v1.2"}},[_v("here")]),_v(".")]),_v(" "),_c('li',[_v("Copy the file to the folder you want to store all RapidTracer data in.")]),_v(" "),_c('li',[_v("Open a command terminal and navigate to the folder where "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("RapidTracer.jar")]),_v(" is located using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd FOLDER_NAME")]),_v(" command. Use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar RapidTracer.jar")]),_v(" command to start running RapidTracer.\n"),_c('img',{staticStyle:{"width":"100%"},attrs:{"src":"/tp/images/userguide/rapidtracerquickstart.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("If you encounter any issues running RapidTracer, you may refer to the detailed bug fixing "),_c('a',{attrs:{"href":"https://nus-cs2103-ay2324s2.github.io/website/admin/programmingLanguages.html"}},[_v("here")]),_v(". Note that RapidTracer is intended to be used in fullscreen and some text may not show if the display window is re-sized to the minimum size.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"using-rapidtracer"}},[_v("Using RapidTracer"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-rapidtracer","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('a',{attrs:{"href":"#inputs"}},[_v("Input parameters")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#patient-in-processing"}},[_v("Registering patients and appointments")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#searching-records"}},[_v("Searching existing records")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#trace"}},[_v("Tracing close contacts")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#editing-records"}},[_v("Editing and deleting records")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#import-export-data"}},[_v("Importing and exporting patient records")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#clear"}},[_v("Clear")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#general-help"}},[_v("General help")])])])}
},function anonymous(
) {
with(this){return _c('h3',{staticStyle:{"color":"#088F8F"},attrs:{"id":"inputs"}},[_v("\n  1. Input parameters\n"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#inputs","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Parameter")]),_v(" "),_c('th',[_v("Max Length")]),_v(" "),_c('th',[_v("Min Length")]),_v(" "),_c('th',[_v("Remarks")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PATIENT_INDEX")])]),_v(" "),_c('td',[_v("N.A.")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("Positive integer displayed at the top-left of a "),_c('strong',[_v("patient")]),_v(" card.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("APPT_INDEX")])]),_v(" "),_c('td',[_v("N.A.")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("Positive integer displayed at the top-left of an "),_c('strong',[_v("appointment")]),_v(" card.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("KEYWORD")]),_v(","),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MORE KEYWORDS")])]),_v(" "),_c('td',[_v("N.A.")]),_v(" "),_c('td',[_v("N.A.")]),_v(" "),_c('td',[_v("Alphanumeric characters only.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("d/DATE_TIME")])]),_v(" "),_c('td',[_v("N.A.")]),_v(" "),_c('td',[_v("N.A.")]),_v(" "),_c('td',[_v("Limited to between 6 Feb 1819 and 1 Jan 2101. "),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DATE_TIME")]),_v(" format is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dd/MM/yyyy [x]am-[y]pm")]),_v(". "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dd/MM/yyyy")]),_v(" can be specified as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tdy")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("today")]),_v(" for today's date.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/NAME")])]),_v(" "),_c('td',[_v("50")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("Alphanumeric characters only.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p/PHONE_NUMBER")])]),_v(" "),_c('td',[_v("20")]),_v(" "),_c('td',[_v("3")]),_v(" "),_c('td',[_v("Numeric characters only. No whitespace allowed between characters.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a/ADDRESS")])]),_v(" "),_c('td',[_v("50")]),_v(" "),_c('td',[_v("3")]),_v(" "),_c('td',[_v("Alphanumeric characters only.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/TAG")])]),_v(" "),_c('td',[_v("20")]),_v(" "),_c('td',[_v("1")]),_v(" "),_c('td',[_v("Alphanumeric characters only. No whitespace allowed between characters.")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{staticStyle:{"color":"#088F8F"},attrs:{"id":"patient-in-processing"}},[_v("\n  2. Registering patients and appointments\n"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#patient-in-processing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("1.")]),_v(" Use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command to register a new patient."),_c('br'),_v(" "),_c('b',[_v("2.")]),_v(" Use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addappt")]),_v(" command to schedule a new appointment for an existing patient."),_c('br'),_v(" "),_c('b',[_v("3.")]),_v(" Use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command to register a new patient and schedule an appointment immediately.")])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"add"}},[_v("\n  2.1. Use the "),_c('code',{pre:true},[_v("add")]),_v(" command to register a new patient\n"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#add","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("You can add new patients to our database with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command. Each patient must minimally have a name and a phone number for administrative purposes.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME p/PHONE_NUMBER [a/ADDRESS] [t/TAG]")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Min Rei p/87654321")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Min Rei p/87654321 a/UTown")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Min Rei p/87654321 t/COVID")]),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Min Rei p/87654321 t/COVID")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-7.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-7.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Parameters may be typed in any order.")]),_v(" "),_c('li',[_v("If you want to add multiple tags, please use multiple "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[t/TAG]")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3","margin-bottom":"0px"},attrs:{"id":"addappt"}},[_v("\n  2.2. Use the "),_c('code',{pre:true},[_v("addappt")]),_v(" command to schedule a new appointment for an existing patient\n"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#addappt","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addappt PATIENT_INDEX d/DATE_TIME")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addappt 1 d/today 3pm-4pm")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addappt 1 d/16/10/2024 3pm-4pm")]),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addappt 1 d/16/10/2024 3pm-4pm")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-8.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-8.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Adds an appointment to the patient at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PATIENT_INDEX")]),_v(".")]),_v(" "),_c('li',[_v("Examples of accepted "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DATE_TIME")]),_v(":\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("24/03/2024 10am-2pm")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("24/03/2024 10AM-2PM")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("24/03/2024 10am - 2pm")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("today 10am-2pm")]),_v(" (this will create an appointment from 10am to 2pm with today's date)")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tdy 10am-2pm")]),_v(" (this will create an appointment from 10am to 2pm with today's date)")])])])])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"add-with-appt"}},[_v("\n  2.3. Use the "),_c('code',{pre:true},[_v("add")]),_v(" command to register a new patient and schedule an appointment immediately\n"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#add-with-appt","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME p/PHONE_NUMBER [a/ADDRESS] [t/TAG] [d/DATE_TIME]")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Boyd Anderson p/87654321 d/tdy 11am-12pm")]),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Boyd Anderson p/87654321 d/tdy 11am-12pm")]),_v(":")]),_v(" "),_c('a',{attrs:{"href":"/tp/image-9.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-9.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Parameters may be typed in any order.")]),_v(" "),_c('li',[_v("If you want to add multiple tags, please use multiple "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/")]),_v(".")]),_v(" "),_c('li',[_v("Appointments cannot end on a different day from when they start.")]),_v(" "),_c('li',[_v("If you try to add multiple appointments by using multiple "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("d/")]),_v(" in one single "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command, only the appointment with the last specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DATE_TIME")]),_v(" will be registered.")]),_v(" "),_c('li',[_v("Examples of accepted "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DATE_TIME")]),_v(":\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("24/03/2024 10am-2pm")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("24/03/2024 10AM-2PM")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("24/03/2024 10am - 2pm")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("today 10am-2pm")]),_v(" (this will create an appointment from 10am to 2pm with today's date)")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tdy 10am-2pm")]),_v(" (this will create an appointment from 10am to 2pm with today's date)")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{staticStyle:{"color":"#088F8F"},attrs:{"id":"searching-records"}},[_v("\n  3. Searching existing records\n"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#searching-records","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"find"}},[_v("\n  Searching for contacts: "),_c('code',{pre:true},[_v("find")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#find","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find KEYWORD [MORE_KEYWORDS]")]),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find min rei")]),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find min rei")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-10.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-10.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("KEYWORD")]),_v(" search is case-insensitive.")]),_v(" "),_c('li',[_v("Searches for the following patient information:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PHONE_NUMBER")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ADDRESS")])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"findappt"}},[_v("\n  Finding appointment: "),_c('code',{pre:true},[_v("findappt")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#findappt","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("findappt KEYWORD [MORE_KEYWORDS]")]),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("findappt min rei")]),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("findappt min rei")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-11.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-11.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("KEYWORD")]),_v(" search is case-insensitive.")]),_v(" "),_c('li',[_v("Order of keywords does not matter.")]),_v(" "),_c('li',[_v("Searches for the following appointment information:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" of patient")])])])])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"list"}},[_v("\n  Listing contacts: "),_c('code',{pre:true},[_v("list")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-12.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-12.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"listappt"}},[_v("\n  Listing appointments: "),_c('code',{pre:true},[_v("listappt")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listappt","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("listappt")]),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("listappt")]),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("listappt")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-13.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-13.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('h3',{staticStyle:{"color":"#088F8F"},attrs:{"id":"trace"}},[_v("\n  4. Tracing close contacts\n"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#trace","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("trace APPT_INDEX")]),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("trace 1")]),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("trace 1")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-14.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-14.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Traces the appointment at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("APPT_INDEX")]),_v(".")]),_v(" "),_c('li',[_v("2 Appointments are also considered overlapping if one appointment start at the same time\nas the other one ends.")])])}
},function anonymous(
) {
with(this){return _c('h3',{staticStyle:{"color":"#088F8F"},attrs:{"id":"editing-records"}},[_v("\n  5. Editing and deleting records\n"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-records","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"edit"}},[_v("\n  Editing contacts: "),_c('code',{pre:true},[_v("edit")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#edit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("An existing patient's details can be updated in RapidTracer using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command. Note that only patient details are changed. Their corresponding appointments will also be updated.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit PATIENT_INDEX [n/NAME] [p/PHONE_NUMBER] [a/ADDRESS] [t/TAG]")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 p/12345678")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 a/NUS UTown")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 a/NUS UTown")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-16.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-16.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Edits the patient's details at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PATIENT_INDEX")]),_v(".")]),_v(" "),_c('li',[_v("Only one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PATIENT_INDEX")]),_v(" can be specified at a time.")]),_v(" "),_c('li',[_v("At least one of the optional fields must be provided.")]),_v(" "),_c('li',[_v("Existing values will be updated to input values.")])])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"editappt"}},[_v("\n  Editing appointment: "),_c('code',{pre:true},[_v("editappt")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editappt","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("An appointment can be rescheduled with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editappt")]),_v(" command to change the date and time of the appointment.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editappt APPT_INDEX d/DATE_TIME")]),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editappt 1 d/tdy 5pm-6pm")]),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editappt 1 d/tdy 5pm-6pm")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-19.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-19.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Edits the appointment's details at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("APPT_INDEX")]),_v(".")]),_v(" "),_c('li',[_v("Only one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("APPT_INDEX")]),_v(" can be specified at a time.")]),_v(" "),_c('li',[_v("Existing values will be updated to input values.")]),_v(" "),_c('li',[_v("The format of \"DATE_TIME\" is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dd/mm/yyyy [x]am-[y]pm")]),_v(". Examples of accepted \"DATE_TIME\":\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("24/03/2024 10am-2pm")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("24/03/2024 10AM-2PM")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("24/03/2024 10am - 2pm")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("today 10am-2pm")]),_v(" (this will create an appointment from 10am to 2pm with today's date)")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tdy 10am-2pm")]),_v(" (this will create an appointment from 10am to 2pm with today's date)")])])])])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"delete"}},[_v("\n  Deleting patients: "),_c('code',{pre:true},[_v("delete")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#delete","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("In the event that a patient requests for their data to be deleted, you can use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(" command to remove their patient information.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete PATIENT_INDEX")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 2")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 2")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-21.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-21.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the patient at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PATIENT_INDEX")]),_v(".")]),_v(" "),_c('li',[_v("Only one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PATIENT_INDEX")]),_v(" can be specified at a time.")])])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"deleteappt"}},[_v("\n  Deleting appointments: "),_c('code',{pre:true},[_v("deleteappt")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleteappt","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("In the event that an appointment is cancelled, you can delete it using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteappt")]),_v(" command.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteappt APPT_INDEX")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteappt 1")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteappt 1")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-22.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-22.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the appointment at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("APPT_INDEX")]),_v(".")]),_v(" "),_c('li',[_v("Only one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("APPT_INDEX")]),_v(" can be specified at a time.")])])}
},function anonymous(
) {
with(this){return _c('h3',{staticStyle:{"color":"#088F8F"},attrs:{"id":"import-export-data"}},[_v("\n    6. Importing and exporting patient records\n"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#import-export-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"import"}},[_v("\n  Importing patient records: "),_c('code',{pre:true},[_v("import")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#import","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import i/./data/FILENAME.csv")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import i/./data/FILENAME.csv")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import i/./data/PatientData.csv")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Patient Data file:\n"),_c('a',{attrs:{"href":"/tp/image-26.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-26.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Import command executed:\n"),_c('a',{attrs:{"href":"/tp/image-25.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-25.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The csv file should be formatted in a way that it only contains 4 columns with specific headings as shown above. If the patient does not have an address or a tag, please insert \"NIL\" before importing.")]),_v(" "),_c('li',[_v("If you want to add multiple tags for the same patient, please use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(";")]),_v(" to separate the tags.")]),_v(" "),_c('li',[_v("Please save your patient data file under the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data")]),_v(" directory created when you launch RapidTracer in an empty file.")]),_v(" "),_c('li',[_v("Enter the command stated above with \"FILENAME\" replaced by the name of csv file you have, e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import i/./data/sample.csv")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"export"}},[_v("\n  Exporting patient records: "),_c('code',{pre:true},[_v("export")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#export","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Export command executed:\n"),_c('a',{attrs:{"href":"/tp/image-23.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-23.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("After export:\n"),_c('a',{attrs:{"href":"/tp/image-27.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-27.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Create a directory named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data")]),_v(" (if it doesn't exist) in the directory RapidTracer launched from.")]),_v(" "),_c('li',[_v("Create a new csv file named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PatientData.csv")]),_v(" in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data")]),_v(" directory.")]),_v(" "),_c('li',[_v("The pre-existing data in the csv file will be overwritten once you perform the export action.")])])}
},function anonymous(
) {
with(this){return _c('h3',{staticStyle:{"color":"#088F8F"},attrs:{"id":"clear"}},[_v("\n  7. Clearing data\n"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clear","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"help"}},[_v("\n  Clearing all records: "),_c('code',{pre:true},[_v("clear")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-20.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-20.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('h3',{staticStyle:{"color":"#088F8F"},attrs:{"id":"general-help"}},[_v("\n  8. General help\n"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#general-help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"help"}},[_v("\n  Viewing help: "),_c('code',{pre:true},[_v("help")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("For general help, click the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Help")]),_v(" option in the top left corner and click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Help")]),_v(" again, or type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" to open the help window. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" window contains a link that directs "),_c('a',{attrs:{"href":"https://ay2324s2-cs2103t-t10-2.github.io/tp/UserGuide.html"}},[_v("to this current User Guide")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Result of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/image-18.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/image-18.png","alt":"alt text"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{staticStyle:{"color":"#7393B3"},attrs:{"id":"exit"}},[_v("\n  Exiting/closing RapidTracer: "),_c('code',{pre:true},[_v("exit")]),_v(" "),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("To properly exit RapidTracer, click the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" option in the top left corner and click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Exit")]),_v(", or type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(". This will ensure that the data is saved properly.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('b',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" "),_c('br'),_v(" "),_c('b',[_v("Example(s):")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" "),_c('br')])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I upload records into RapidTracer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v(" command!")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I download all my records from RapidTracer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")]),_v(" command!")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": A command is not working, what am I doing wrong?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": You can refer to the user guide above. If you're still having issues, please drop us an email at "),_c('a',{attrs:{"href":"mailto:minrei.seah@u.nus.edu"}},[_v("minrei.seah@u.nus.edu")]),_v(" to let us know what's wrong.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": I still have an unanswered question!"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Please drop us an email at "),_c('a',{attrs:{"href":"mailto:minrei.seah@u.nus.edu"}},[_v("minrei.seah@u.nus.edu")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"known-issues"}},[_v("Known issues"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#known-issues","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("When using multiple screens")]),_v(", if you move the application to a secondary screen, and later switch to using only the primary screen, the app will open off-screen. The remedy is to delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferences.json")]),_v(" file created by the application before running the application again.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Overlapping appointments between different patients")]),_v(" is allowed currently because we are working with the assumption that there are multiple doctors at the clinic to attend to different patients.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Reset button")]),_v(" currently does not remove the focus on Patient and Appointment cards.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"command-summary"}},[_v("Command summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Format")]),_v(" "),_c('th',[_v("Examples")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("Add patient")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME p/PHONE_NUMBER [a/ADDRESS] [t/TAG] [d/DATE_TIME]")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Min Rei p/86615076")]),_v(","),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Min Rei p/86615076 a/UTown RC4 t/CEO")]),_v(","),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Min Rei p/86615076 d/27/03/2024 2pm-3pm")])])]),_v(" "),_c('tr',[_c('td',[_v("Add appointment")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addappt PATIENT_INDEX d/DATE_TIME")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addappt 1 d/27/03/2024 9am-10am")]),_v(","),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addappt 1 d/today 9am-10am")]),_v(","),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addappt 1 d/tdy 9am-10am")])])]),_v(" "),_c('tr',[_c('td',[_v("Find patients")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find KEYWORD [MORE_KEYWORDS]")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find Min Rei")]),_v(","),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find rc4")])])]),_v(" "),_c('tr',[_c('td',[_v("Find appointments")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("findappt KEYWORD [MORE_KEYWORDS]")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("findappt Min Rei")])])]),_v(" "),_c('tr',[_c('td',[_v("List all patients")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("List all appointments")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("listappt")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("Trace patients")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("trace PATIENT_INDEX")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("trace 1")])])]),_v(" "),_c('tr',[_c('td',[_v("Editing patient")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit PATIENT_INDEX [n/NAME] [p/PHONE_NUMBER] [a/ADDRESS] [t/TAG]")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 n/Seah Min Rei")])])]),_v(" "),_c('tr',[_c('td',[_v("Editing appointment")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editappt APPPT_INDEX d/DATE_TIME")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editappt 1 d/30/12/2024 8am-9am")])])]),_v(" "),_c('tr',[_c('td',[_v("Import patient records")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import i/./data/FILENAME.csv")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import i/./data/sample.csv")])])]),_v(" "),_c('tr',[_c('td',[_v("Export patient records")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("Help")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("Clear data")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("Exit application")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])]),_v(" "),_c('td')])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")]),_v(", generated on Mon, 15 Apr 2024, 22:42:33 GMT+8]")])])])}
}];
  