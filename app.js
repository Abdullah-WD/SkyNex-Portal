const STORE_KEY = 'skynex_crm_db_v1';
const SEED_VERSION = 5;
const PAYMENT_METHODS = ['Cash','Bank Transfer','JazzCash','EasyPaisa','Cheque','Other'];
const CUR = 'Rs. ';

const ICONS = {
  dashboard:'<rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/>',
  box:'<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
  cart:'<circle cx="9" cy="21" r="1.4"/><circle cx="19" cy="21" r="1.4"/><path d="M2.5 3h2l2.7 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6"/>',
  file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>',
  wallet:'<path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3H5"/><path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H8"/><circle cx="17" cy="14" r="1.3"/>',
  alert:'<path d="M10.3 3.9 2.6 18a1.7 1.7 0 0 0 1.5 2.5h15.8a1.7 1.7 0 0 0 1.5-2.5L13.7 3.9a1.7 1.7 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  tag:'<path d="M20.6 12.6 12.7 20.5a1.9 1.9 0 0 1-2.7 0l-6.5-6.5a1.9 1.9 0 0 1 0-2.7L11.4 3.4A2 2 0 0 1 12.8 3H19a2 2 0 0 1 2 2v6.2a2 2 0 0 1-.4 1.4z"/><circle cx="15.5" cy="7.5" r="1.4"/>',
  tool:'<path d="M14.7 6.3a4 4 0 0 0-5.6 5L2 18.4 4.6 21l7-7.1a4 4 0 0 0 5-5.6l-3 3-2.6-.6-.6-2.6z"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
  chart:'<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12.5" y="8" width="3" height="10"/><rect x="18" y="5" width="3" height="13"/>',
  settings:'<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>',
  trash:'<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>',
  chev:'<path d="M6 9l6 6 6-6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  print:'<path d="M6 9V3h12v6"/><rect x="6" y="13" width="12" height="8"/><path d="M6 17H4a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a1 1 0 0 1-1 1h-2"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.9.6a2 2 0 0 1 1.8 2.1z"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff:'<path d="M17.9 17.9A10.5 10.5 0 0 1 12 20c-7 0-11-8-11-8a19.7 19.7 0 0 1 5-6.1M9.9 4.2A9.9 9.9 0 0 1 12 4c7 0 11 8 11 8a19.9 19.9 0 0 1-3.2 4.4"/><path d="M14.1 14.1a3 3 0 1 1-4.2-4.2"/><path d="M1 1l22 22"/>',
  shield:'<path d="M12 2 4 5v6c0 5.2 3.4 9.9 8 11 4.6-1.1 8-5.8 8-11V5z"/><path d="M9 12l2 2 4-4.5"/>',
  down:'<path d="M12 5v14M19 12l-7 7-7-7"/>',
  up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
  filter:'<path d="M4 5h16M7 12h10M10 19h4"/>',
  device:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>',
  camera:'<path d="M4 8h3l1.5-2h7L17 8h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z"/><circle cx="12" cy="13" r="3.5"/>',
  image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
  download:'<path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  upload:'<path d="M12 21V9m0 0-4.5 4.5M12 9l4.5 4.5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  signature:'<path d="M3 16c1.5-3.5 3-5.5 4.3-5.5 1.6 0 1.7 4.5 3.3 4.5 1.8 0 2.4-6.5 4.2-6.5 1.5 0 1.7 4 3 4.3.9.2 1.9-.7 3.2-2.3"/><path d="M3 20.5h18"/>',
  truck:'<rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 9h4l3 4v4h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="17.5" cy="19" r="2"/>',
  store:'<path d="M3 9l1.5-5h15L21 9"/><path d="M3 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0"/><path d="M5 9v10h14V9"/><path d="M9 19v-6h6v6"/>'
};
function icon(name, cls){ return `<svg class="icon ${cls||''}" viewBox="0 0 24 24">${ICONS[name]||''}</svg>`; }

const NAV = [
  {group:'Overview', items:[
    {id:'dashboard', label:'Dashboard', icon:'dashboard'},
  ]},
  {group:'Inventory', items:[
    {id:'products', label:'Stock Items', icon:'box'},
    {id:'categories', label:'Categories', icon:'tag'},
    {id:'lowstock', label:'Low Stock', icon:'alert', badgeKey:'lowStockCount'},
  ]},
  {group:'Purchasing', items:[
    {id:'suppliers', label:'Suppliers', icon:'truck'},
    {id:'ledger', label:'Supplier Ledger', icon:'file'},
  ]},
  {group:'Sales', items:[
    {id:'sales', label:'Sell Accessories', icon:'cart'},
    {id:'orders', label:'Repair', icon:'cart'},
    {id:'profitloss', label:'Profit/Loss', icon:'chart'},
    {id:'expenses', label:'Expense', icon:'wallet'},
  ]},
  {group:'Shop Ledger', items:[
    {id:'shops', label:'Shops', icon:'store'},
    {id:'shopledger', label:'Shop Ledger', icon:'file'},
  ]},
  {group:'Administration', items:[
    {id:'users', label:'Users', icon:'users', ownerOnly:true, badgeKey:'pendingRequestCount'},
    {id:'roles', label:'Roles', icon:'shield', ownerOnly:true},
    {id:'gallery', label:'Gallery', icon:'image', ownerOnly:true},
    {id:'history', label:'History', icon:'clock'},
    {id:'reports', label:'Report', icon:'chart'},
    {id:'settings', label:'Settings', icon:'settings'},
  ]},
];
const OWNER_ONLY_NAV = NAV.flatMap(g=>g.items).filter(it=>it.ownerOnly).map(it=>it.id);
const SELECTABLE_NAV = NAV.flatMap(g=>g.items).filter(it=>!it.ownerOnly).map(it=>it.id);
const ROLE_LEVELS = [
  {id:'admin', label:'Admin', hint:'Full access to every page, including Users, Roles, Import Backup and Erase All Data.'},
  {id:'subadmin', label:'Sub Admin', hint:'Full access to every page except Users, Roles, Import Backup and Erase All Data.'},
  {id:'manager', label:'Manager', hint:'Can view and edit only the pages ticked below.'},
  {id:'viewer', label:'Viewer', hint:'Can only view the pages ticked below — cannot add, edit or delete anything.'},
];
const PAGE_META = {
  dashboard:['Dashboard',"Welcome back — here's what's happening today."],
  products:['Stock Items','Manage the parts, accessories & devices you stock.'],
  categories:['Categories','Organize stock items and repair types into groups.'],
  lowstock:['Low Stock','Items that have fallen below their reorder threshold.'],
  suppliers:['Suppliers','Manage your supplier directory and contact details.'],
  ledger:['Supplier Ledger','Record purchases against a supplier, track payments and outstanding payables.'],
  shops:['Shops','Manage your shopkeeper directory and contact details.'],
  shopledger:['Shop Ledger','Record items/services given to a shopkeeper, track payments and outstanding receivables.'],
  sales:['Sell Accessories','Sell stock items & accessories directly to a walk-in or existing customer.'],
  orders:['Repair','Track repair jobs from intake to delivery.'],
  profitloss:['Profit/Loss','See how much you earned or lost on each repair, month by month.'],
  expenses:['Expense','Log workshop expenses and running costs.'],
  repairs:['Repair','Manage every repair job from intake to delivery.'],
  customers:['Customer Data','Your customer directory and service history.'],
  users:['Users','Staff accounts, roles and access.'],
  roles:['Roles','Define access levels and pick exactly what each role can see and edit.'],
  gallery:['Gallery','Every photo uploaded across the workshop — devices, signatures, staff & security photos. Admin only.'],
  history:['History','A running log of activity across the workshop.'],
  reports:['Report','Business performance at a glance.'],
  settings:['Settings','Business profile, preferences and data.'],
};

function uid(p){ return p+'-'+Math.random().toString(36).slice(2,7).toUpperCase(); }
function genTrackingId(prefix){
  prefix = prefix || 'SKX';
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let code;
  do{
    code = prefix + '-' + Array.from({length:6}, ()=> chars[Math.floor(Math.random()*chars.length)]).join('');
  } while(
    (DB.orders||[]).some(o=>o.trackingId===code) ||
    (DB.invoices||[]).some(i=>i.trackingId===code) ||
    (DB.repairs||[]).some(r=>r.trackingId===code) ||
    (DB.sales||[]).some(s=>s.trackingId===code)
  );
  return code;
}
function fmtMoney(n){ n = Number(n)||0; return CUR + n.toLocaleString('en-PK',{maximumFractionDigits:0}); }
function fmtDate(d){ if(!d) return '—'; const dt = new Date(d); return dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}); }
function daysAgo(n){ const d = new Date(); d.setDate(d.getDate()-n); return d.toISOString().slice(0,10); }
function todayStr(){ return new Date().toISOString().slice(0,10); }
function nowTimeStr(){ const d = new Date(); return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'); }
function monthKey(dateStr){ return String(dateStr||todayStr()).slice(0,7); }
function currentMonthKey(){ return todayStr().slice(0,7); }
function monthLabel(key){
  if(!key) return '—';
  const [y,m] = key.split('-');
  const d = new Date(Number(y), Number(m)-1, 1);
  return d.toLocaleDateString('en-GB',{month:'long', year:'numeric'});
}
function initials(name){ return (name||'?').split(' ').filter(Boolean).slice(0,2).map(w=>w[0].toUpperCase()).join(''); }
function escapeHtml(s){ return String(s??'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
const PALETTE = ['#2E5EFF','#8B2FE0','#FF6A3D','#17B26A','#F5A623','#F04438','#0EA5E9','#D946EF'];

function seedData(){
  const categories = [
    {id:uid('CAT'), name:'Screens & Displays', type:'Product'},
    {id:uid('CAT'), name:'Batteries', type:'Product'},
    {id:uid('CAT'), name:'Charging Ports', type:'Product'},
    {id:uid('CAT'), name:'Back Covers', type:'Product'},
    {id:uid('CAT'), name:'Cables & Chargers', type:'Product'},
    {id:uid('CAT'), name:'Screen Repair', type:'Repair'},
    {id:uid('CAT'), name:'Water Damage', type:'Repair'},
    {id:uid('CAT'), name:'Software Issue', type:'Repair'},
  ];
  const products = [];
  const customers = [];
  const suppliers = [];
  const purchases = [];
  const shops = [];
  const shopSales = [];
  const users = [
    {id:uid('USR'), name:'Admin User', username:'admin', password:'admin123', role:'Administrator', email:'', phone:'', status:'Active'},
  ];
  const repairs = [];
  const orders = [];
  const invoices = [];
  const sales = [];
  const expenses = [];
  const history = [];
  return {
    settings:{businessName:'Sky Nex', tagline:'Mobile Repair Workshop & Institute', currency:'PKR', theme:'light',
      address:'', phone:'', email:'', trackingUrl:'', lowStockAlerts:true, emailNotify:true, morningDigestTime:'10:00', nightDigestTime:'22:00', currentUser:users[0].id},
    lists:{
      expenseCategories:['Rent','Utilities','Inventory','Tools','Salaries','Marketing','Other'],
      paidBy:['Admin User'],
      orderStatuses:['Pending','Processing','Completed','Cancelled'],
      invoiceStatuses:['Paid','Unpaid','Partial'],
      repairStatuses:['Received','Diagnosing','Repairing','Ready','Delivered'],
      userStatuses:['Active','Inactive'],
    },
    roles:[
      {id:uid('ROL'), name:'Administrator', level:'admin', modules:[]},
      {id:uid('ROL'), name:'Sub Admin', level:'subadmin', modules:[]},
      {id:uid('ROL'), name:'Manager', level:'manager', modules:['dashboard','sales','orders','customers']},
      {id:uid('ROL'), name:'Senior Technician', level:'manager', modules:['dashboard','sales','orders','products','categories','customers']},
      {id:uid('ROL'), name:'Technician', level:'manager', modules:['dashboard','orders']},
      {id:uid('ROL'), name:'Cashier', level:'manager', modules:['dashboard','sales','orders','expenses','customers']},
      {id:uid('ROL'), name:'Viewer', level:'viewer', modules:['dashboard','sales','orders','customers','reports']},
    ],
    categories, products, customers, suppliers, purchases, shops, shopSales, users, repairs, orders, sales, invoices, expenses, history, requests:[], schemaVersion:SEED_VERSION
  };
}
const memStore = {};
let storageIsLive = true;
try{
  const t = '__skynex_test__';
  window.localStorage.setItem(t, '1');
  window.localStorage.removeItem(t);
}catch(e){ storageIsLive = false; }
const safeStorage = {
  getItem(key){
    if(!storageIsLive) return Object.prototype.hasOwnProperty.call(memStore, key) ? memStore[key] : null;
    try{ return window.localStorage.getItem(key); }
    catch(e){ storageIsLive = false; return Object.prototype.hasOwnProperty.call(memStore, key) ? memStore[key] : null; }
  },
  setItem(key, value){
    if(!storageIsLive){ memStore[key] = value; return; }
    try{ window.localStorage.setItem(key, value); }
    catch(e){ storageIsLive = false; memStore[key] = value; }
  },
  removeItem(key){
    if(!storageIsLive){ delete memStore[key]; return; }
    try{ window.localStorage.removeItem(key); }
    catch(e){ storageIsLive = false; delete memStore[key]; }
  }
};
function slugUsername(name, existingUsers){
  const base = (name||'user').toLowerCase().trim().split(/\s+/)[0].replace(/[^a-z0-9]/g,'') || 'user';
  let candidate = base, n = 1;
  const taken = (u)=> (existingUsers||[]).some(x=>x.username && x.username.toLowerCase()===u.toLowerCase());
  while(taken(candidate)){ n++; candidate = base+n; }
  return candidate;
}
function emptyDB(){
  return {
    settings:{businessName:'Sky Nex', tagline:'Mobile Repair Workshop & Institute', currency:'PKR', theme:(safeStorage.getItem('skynex_theme_v1')||'light'),
      address:'', phone:'', email:'', trackingUrl:'', lowStockAlerts:true, emailNotify:true, morningDigestTime:'10:00', nightDigestTime:'22:00', currentUser:null},
    lists:{expenseCategories:[], paidBy:[], orderStatuses:[], invoiceStatuses:[], repairStatuses:[], userStatuses:[]},
    roles:[], categories:[], products:[], customers:[], suppliers:[], purchases:[], shops:[], shopSales:[],
    users:[], repairs:[], orders:[], sales:[], invoices:[], expenses:[], profitLoss:[], history:[], requests:[], schemaVersion:SEED_VERSION,
  };
}
let DB = emptyDB();
function save(){ safeStorage.setItem(STORE_KEY, JSON.stringify(DB)); }

async function fetchAllData(){
  const [categories, products, customers, suppliers, purchases, shops, shopSales,
         sales, orders, invoices, expenses, roles, requests, users, listsObj, settingsObj, history, profitLoss] = await Promise.all([
    Api.categories.list(), Api.products.list(), Api.customers.list(), Api.suppliers.list(), Api.purchases.list(),
    Api.shops.list(), Api.shopSales.list(), Api.sales.list(), Api.orders.list(), Api.invoices.list(),
    Api.expenses.list(), Api.roles.list(), Api.requests.list(), Api.users.list(),
    Api.lists.getAll(), Api.settings.get(), Api.history.list(200), Api.profitLoss.list(),
  ]);
  Object.assign(DB, {
    categories, products, customers, suppliers, purchases, shops, shopSales,
    sales, orders, invoices, expenses, roles, requests, users, history, profitLoss,
  });
  DB.repairs = DB.repairs || [];
  DB.profitLoss = DB.profitLoss || [];
  Object.keys(listsObj||{}).forEach(k=>{ if(Array.isArray(listsObj[k])) DB.lists[k] = listsObj[k]; });
  Object.assign(DB.settings, settingsObj||{});
  const cached = Api.Auth.cachedUser();
  DB.settings.currentUser = cached ? cached.id : null;
  DB.schemaVersion = SEED_VERSION;
  save();
}

const SESSION_KEY = 'skynex_crm_session_v1';
function currentUserObj(){ return DB.users.find(u=>u.id===DB.settings.currentUser) || null; }
function roleForUser(u){ return (u && DB.roles.find(r=>r.name===u.role)) || null; }
function currentRole(){ const u = currentUserObj(); return u ? roleForUser(u) : null; }
function roleLevel(){ const r = currentRole(); return r ? r.level : 'viewer'; }
function isAdmin(){ return roleLevel()==='admin'; }
function canEditData(){ return roleLevel()!=='viewer'; }
function hasModuleAccess(navId){
  const level = roleLevel();
  if(OWNER_ONLY_NAV.includes(navId)) return level==='admin';
  if(level==='admin' || level==='subadmin') return true;
  const r = currentRole();
  return !!(r && Array.isArray(r.modules) && r.modules.includes(navId));
}
function firstAccessibleRoute(){
  const flat = NAV.flatMap(g=>g.items);
  const hit = flat.find(it=>hasModuleAccess(it.id));
  return hit ? hit.id : 'dashboard';
}
function pendingRequestCount(){ return DB.requests.filter(r=>r.status==='Pending').length; }
function myPendingRequests(userId){ return DB.requests.filter(r=>r.userId===userId).slice().reverse(); }

async function attemptLogin(username, password){
  try{
    const user = await Api.Auth.login((username||'').trim(), password);
    DB.settings.currentUser = user.id;
    save();
    return {ok:true, user};
  }catch(e){
    return {ok:false, msg: e.message || 'Incorrect username or password.'};
  }
}
function doLogout(){
  Api.Auth.logout();
  DB = emptyDB();
  document.getElementById('app').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('loginPassword').value = '';
  document.getElementById('loginError').textContent = '';
  const u = document.getElementById('loginUsername'); if(u){ u.value=''; u.focus(); }
}
async function tryResumeSession(){
  if(!Api.Auth.isLoggedIn()) return false;
  try{
    const me = await Api.Auth.me();
    DB.settings.currentUser = me.id;
    return true;
  }catch(e){
    Api.Auth.logout();
    return false;
  }
}
async function showApp(){
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('app').style.display = 'flex';
  await fetchAllData();
  if(!location.hash) location.hash = '#dashboard';
  route();
}
Api.setUnauthorizedHandler(function(){
  if(document.getElementById('app').style.display !== 'none'){
    toast('Your session has expired — please log in again.', 'error');
  }
  doLogout();
});
document.getElementById('loginForm').addEventListener('submit', async function(e){
  e.preventDefault();
  const uEl = document.getElementById('loginUsername');
  const pEl = document.getElementById('loginPassword');
  const errEl = document.getElementById('loginError');
  const btn = e.target.querySelector('button[type="submit"]');
  errEl.textContent = '';
  if(btn){ btn.disabled = true; btn.dataset.origText = btn.dataset.origText || btn.textContent; btn.textContent = 'Signing in…'; }
  try{
    const res = await attemptLogin(uEl.value, pEl.value);
    if(!res.ok){ errEl.textContent = res.msg; return; }
    await showApp();
  } finally {
    if(btn){ btn.disabled = false; btn.textContent = btn.dataset.origText; }
  }
});
(function setupLoginPwdToggle(){
  const toggleBtn = document.getElementById('loginPwdToggle');
  const pwdInput = document.getElementById('loginPassword');
  const eyeIcon = document.getElementById('loginPwdEyeIcon');
  if(!toggleBtn || !pwdInput || !eyeIcon) return;
  toggleBtn.addEventListener('click', function(){
    const showing = pwdInput.type === 'text';
    pwdInput.type = showing ? 'password' : 'text';
    eyeIcon.innerHTML = showing ? ICONS.eye : ICONS.eyeOff;
    toggleBtn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
  });
})();
function log(text, type, meta){ const entry = {id:uid('LOG'), text, time:new Date().toISOString(), type:type||'general'}; if(meta) entry.meta = meta; DB.history.unshift(entry); if(DB.history.length>300) DB.history.length=300; save(); }
function toast(msg, type){
  const wrap = document.getElementById('toast-wrap');
  const el = document.createElement('div');
  el.className = 'toast '+(type||'success');
  el.innerHTML = icon(type==='error'?'x':'check') + '<span>'+escapeHtml(msg)+'</span>';
  wrap.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transform='translateX(20px)'; el.style.transition='.2s'; setTimeout(()=>el.remove(),200); }, 2600);
}

const custName = v => DB.customers.find(c=>c.id===v)?.name || v || '—';
const userName = id => DB.users.find(u=>u.id===id)?.name || '—';
const prodName = id => DB.products.find(p=>p.id===id)?.name || '—';
const catName = id => DB.categories.find(c=>c.id===id)?.name || '—';
const supplierName = id => DB.suppliers.find(s=>s.id===id)?.name || id || '—';
function lowStockItems(){ return DB.products.filter(p=>Number(p.stock) <= Number(p.threshold)); }
function purchaseBalance(p){ return Math.max(0, Number(p.total||0) - Number(p.paid||0)); }
function purchaseStatus(p){
  const bal = purchaseBalance(p);
  if(bal<=0 && Number(p.total||0)>0) return 'Paid';
  if(Number(p.paid||0)>0) return 'Partial';
  return 'Unpaid';
}
function totalPayableToSuppliers(){ return DB.purchases.reduce((sum,p)=> sum + purchaseBalance(p), 0) + DB.suppliers.reduce((sum,s)=> sum + Number(s.openingBalance||0), 0); }
function purchasesWithBalanceDueCount(){ return DB.purchases.filter(p=> purchaseBalance(p) > 0).length; }
function supplierPayable(id){
  const supplier = DB.suppliers.find(s=>s.id===id);
  const opening = Number(supplier?.openingBalance||0);
  return DB.purchases.filter(p=>p.supplier===id).reduce((sum,p)=> sum + purchaseBalance(p), 0) + opening;
}
function purchaseItemsSummary(p){
  const list = (p.items||[]).filter(it=>it.product || it.label);
  if(!list.length) return '—';
  const nameOf = it=> it.product ? prodName(it.product) : (it.label||'Service');
  const first = `${nameOf(list[0])} × ${Number(list[0].qty)||0}`;
  return list.length===1 ? escapeHtml(first) : `${escapeHtml(first)} <span class="cell-muted">+${list.length-1} more</span>`;
}
function purchaseComputedTotal(items){
  return (items||[]).reduce((s,it)=> s + (Number(it.qty)||0)*(Number(it.cost)||0), 0);
}
async function reconcilePurchaseStock(purchase, prevSnapshot){
  const touched = new Set();
  if(prevSnapshot && prevSnapshot._stockAdded){
    (prevSnapshot._addedItems||[]).forEach(it=>{
      const prod = DB.products.find(p=>p.id===it.product);
      if(prod){ prod.stock = Math.max(0, Number(prod.stock) - Number(it.qty)); touched.add(prod.id); }
    });
  }
  const items = (purchase.items||[]).filter(it=>it.product && Number(it.qty)>0);
  items.forEach(it=>{
    const prod = DB.products.find(p=>p.id===it.product);
    if(!prod) return;
    prod.stock = Number(prod.stock||0) + Number(it.qty);
    if(it.cost!=='' && it.cost!=null && !isNaN(Number(it.cost))) prod.cost = Number(it.cost);
    touched.add(prod.id);
  });
  purchase._stockAdded = true;
  purchase._addedItems = items.map(it=>({product:it.product, qty:Number(it.qty)}));
  await Promise.all(Array.from(touched).map(id=>{
    const prod = DB.products.find(p=>p.id===id);
    return Api.products.update(id, {stock: prod.stock, cost: prod.cost}).catch(()=>{});
  }));
  log(`Stock updated from purchase ${purchase.id}`, 'purchases', {kind:'stock-in'});
}
async function restorePurchaseStock(purchase){
  if(!purchase || !purchase._stockAdded) return;
  const touched = [];
  (purchase._addedItems||[]).forEach(it=>{
    const prod = DB.products.find(p=>p.id===it.product);
    if(prod){ prod.stock = Math.max(0, Number(prod.stock) - Number(it.qty)); touched.push(prod); }
  });
  await Promise.all(touched.map(prod=> Api.products.update(prod.id, {stock: prod.stock}).catch(()=>{})));
  log(`Stock reversed — purchase ${purchase.id} deleted`, 'purchases', {kind:'stock-out'});
}
function bindPurchaseLiveTotal(){
  const list = document.getElementById('f_items_list');
  const totalEl = document.getElementById('f_total');
  if(!list || !totalEl) return;
  function recalc(){
    const rows = Array.from(list.children).map(b=>({
      qty: Number((b.querySelector('[data-key="qty"]')||{}).value||0),
      cost: Number((b.querySelector('[data-key="cost"]')||{}).value||0),
    }));
    totalEl.value = purchaseComputedTotal(rows);
  }
  function bindRow(block){
    const prodSel = block.querySelector('[data-key="product"]');
    const costInput = block.querySelector('[data-key="cost"]');
    const qtyInput = block.querySelector('[data-key="qty"]');
    if(prodSel) prodSel.addEventListener('change', ()=>{
      const prod = DB.products.find(p=>p.id===prodSel.value);
      if(prod && costInput && !costInput.value) costInput.value = prod.cost;
      recalc();
    });
    if(costInput) costInput.addEventListener('input', recalc);
    if(qtyInput) qtyInput.addEventListener('input', recalc);
  }
  Array.from(list.children).forEach(bindRow);
  const addBtn = document.getElementById('f_items_addbtn');
  if(addBtn) addBtn.addEventListener('click', ()=> setTimeout(()=>{
    const last = list.children[list.children.length-1];
    if(last) bindRow(last);
    recalc();
  }, 0));
  list.querySelectorAll('.device-remove').forEach(btn=> btn.addEventListener('click', ()=> setTimeout(recalc, 0)));
  recalc();
}
const shopName = id => DB.shops.find(s=>s.id===id)?.name || id || '—';
function shopSaleBalance(s){ return Math.max(0, Number(s.total||0) - Number(s.paid||0)); }
function shopSaleStatus(s){
  const bal = shopSaleBalance(s);
  if(bal<=0 && Number(s.total||0)>0) return 'Paid';
  if(Number(s.paid||0)>0) return 'Partial';
  return 'Unpaid';
}
function totalReceivableFromShops(){ return DB.shopSales.reduce((sum,s)=> sum + shopSaleBalance(s), 0) + DB.shops.reduce((sum,s)=> sum + Number(s.openingBalance||0), 0); }
function shopSalesWithBalanceDueCount(){ return DB.shopSales.filter(s=> shopSaleBalance(s) > 0).length; }
function shopReceivable(id){
  const shop = DB.shops.find(s=>s.id===id);
  const opening = Number(shop?.openingBalance||0);
  return DB.shopSales.filter(s=>s.shop===id).reduce((sum,s)=> sum + shopSaleBalance(s), 0) + opening;
}
function shopSaleItemsSummary(s){
  const list = (s.items||[]).filter(it=>it.product || it.label);
  if(!list.length) return '—';
  const nameOf = it=> it.product ? prodName(it.product) : (it.label||'Service');
  const first = `${nameOf(list[0])} × ${Number(list[0].qty)||0}`;
  return list.length===1 ? escapeHtml(first) : `${escapeHtml(first)} <span class="cell-muted">+${list.length-1} more</span>`;
}
function shopSaleComputedTotal(items){
  return (items||[]).reduce((s,it)=> s + (Number(it.qty)||0)*(Number(it.price)||0), 0);
}
async function reconcileShopSaleStock(sale, prevSnapshot){
  const touched = new Set();
  if(prevSnapshot && prevSnapshot._stockDeducted){
    (prevSnapshot._deductedItems||[]).forEach(it=>{
      const prod = DB.products.find(p=>p.id===it.product);
      if(prod){ prod.stock = Number(prod.stock) + Number(it.qty); touched.add(prod.id); }
    });
  }
  const items = (sale.items||[]).filter(it=>it.product && Number(it.qty)>0);
  const short = [];
  items.forEach(it=>{
    const prod = DB.products.find(p=>p.id===it.product);
    if(!prod) return;
    const qty = Number(it.qty);
    if(Number(prod.stock) < qty) short.push(prod.name);
    prod.stock = Math.max(0, Number(prod.stock) - qty);
    touched.add(prod.id);
  });
  sale._stockDeducted = true;
  sale._deductedItems = items.map(it=>({product:it.product, qty:Number(it.qty)}));
  await Promise.all(Array.from(touched).map(id=>{
    const prod = DB.products.find(p=>p.id===id);
    return Api.products.update(id, {stock: prod.stock}).catch(()=>{});
  }));
  log(`Stock updated for shop transaction ${sale.id}`, 'shopsales', {kind:'stock-out'});
  if(short.length) toast(`Stock updated — insufficient stock for: ${short.join(', ')}`, 'error');
}
async function restoreShopSaleStock(sale){
  if(!sale || !sale._stockDeducted) return;
  const touched = [];
  (sale._deductedItems||[]).forEach(it=>{
    const prod = DB.products.find(p=>p.id===it.product);
    if(prod){ prod.stock = Number(prod.stock) + Number(it.qty); touched.push(prod); }
  });
  await Promise.all(touched.map(prod=> Api.products.update(prod.id, {stock: prod.stock}).catch(()=>{})));
  log(`Stock restored — shop transaction ${sale.id} deleted`, 'shopsales', {kind:'stock-in'});
}
function bindShopSaleLiveTotal(){
  const list = document.getElementById('f_items_list');
  const totalEl = document.getElementById('f_total');
  if(!list || !totalEl) return;
  function recalc(){
    const rows = Array.from(list.children).map(b=>({
      qty: Number((b.querySelector('[data-key="qty"]')||{}).value||0),
      price: Number((b.querySelector('[data-key="price"]')||{}).value||0),
    }));
    totalEl.value = shopSaleComputedTotal(rows);
  }
  function bindRow(block){
    const prodSel = block.querySelector('[data-key="product"]');
    const priceInput = block.querySelector('[data-key="price"]');
    const qtyInput = block.querySelector('[data-key="qty"]');
    if(prodSel) prodSel.addEventListener('change', ()=>{
      const prod = DB.products.find(p=>p.id===prodSel.value);
      if(prod && priceInput && !priceInput.value) priceInput.value = prod.price;
      recalc();
    });
    if(priceInput) priceInput.addEventListener('input', recalc);
    if(qtyInput) qtyInput.addEventListener('input', recalc);
  }
  Array.from(list.children).forEach(bindRow);
  const addBtn = document.getElementById('f_items_addbtn');
  if(addBtn) addBtn.addEventListener('click', ()=> setTimeout(()=>{
    const last = list.children[list.children.length-1];
    if(last) bindRow(last);
    recalc();
  }, 0));
  list.querySelectorAll('.device-remove').forEach(btn=> btn.addEventListener('click', ()=> setTimeout(recalc, 0)));
  recalc();
}
function activeRepairs(){ return DB.orders.filter(o=>o.status!=='Completed' && o.status!=='Cancelled'); }
function bindOrderLiveTotal(){
  const partsList = document.getElementById('f_partsUsed_list');
  const chargesList = document.getElementById('f_serviceCharges_list');
  const totalEl = document.getElementById('f_total');
  if(!totalEl || (!partsList && !chargesList)) return;
  function recalc(){
    let sum = 0;
    if(partsList) Array.from(partsList.children).forEach(b=>{
      const qty = Number((b.querySelector('[data-key="qty"]')||{}).value||0);
      const price = Number((b.querySelector('[data-key="price"]')||{}).value||0);
      sum += qty*price;
    });
    if(chargesList) Array.from(chargesList.children).forEach(b=>{
      sum += Number((b.querySelector('[data-key="amount"]')||{}).value||0);
    });
    totalEl.value = sum;
  }
  function bindPartRow(block){
    const prodSel = block.querySelector('[data-key="product"]');
    const priceInput = block.querySelector('[data-key="price"]');
    const qtyInput = block.querySelector('[data-key="qty"]');
    if(prodSel) prodSel.addEventListener('change', ()=>{
      const prod = DB.products.find(p=>p.id===prodSel.value);
      if(prod && priceInput && !priceInput.value) priceInput.value = prod.price;
      recalc();
    });
    if(priceInput) priceInput.addEventListener('input', recalc);
    if(qtyInput) qtyInput.addEventListener('input', recalc);
  }
  function bindChargeRow(block){
    const amountInput = block.querySelector('[data-key="amount"]');
    if(amountInput) amountInput.addEventListener('input', recalc);
  }
  if(partsList){
    Array.from(partsList.children).forEach(bindPartRow);
    const partsAddBtn = document.getElementById('f_partsUsed_addbtn');
    if(partsAddBtn) partsAddBtn.addEventListener('click', ()=> setTimeout(()=>{
      const last = partsList.children[partsList.children.length-1];
      if(last) bindPartRow(last);
      recalc();
    }, 0));
    partsList.querySelectorAll('.device-remove').forEach(btn=> btn.addEventListener('click', ()=> setTimeout(recalc, 0)));
  }
  if(chargesList){
    Array.from(chargesList.children).forEach(bindChargeRow);
    const chargesAddBtn = document.getElementById('f_serviceCharges_addbtn');
    if(chargesAddBtn) chargesAddBtn.addEventListener('click', ()=> setTimeout(()=>{
      const last = chargesList.children[chargesList.children.length-1];
      if(last) bindChargeRow(last);
      recalc();
    }, 0));
    chargesList.querySelectorAll('.device-remove').forEach(btn=> btn.addEventListener('click', ()=> setTimeout(recalc, 0)));
  }
  recalc();
}

let currentRoute = 'dashboard';
let ledgerTab = 'ledger';
let shopLedgerTab = 'ledger';
function route(){
  const hash = (location.hash||'#dashboard').replace('#','');
  let target = PAGE_META[hash] ? hash : 'dashboard';
  if(!hasModuleAccess(target)){
    toast('You don\'t have access to that page','error');
    target = firstAccessibleRoute();
    if('#'+target !== location.hash){ location.hash = '#'+target; return; }
  }
  currentRoute = target;
  renderSidebar();
  const [title,sub] = PAGE_META[currentRoute];
  document.getElementById('pageTitle').textContent = title;
  document.getElementById('pageSub').textContent = sub;
  const c = document.getElementById('content');
  c.innerHTML = '';
  RENDERERS[currentRoute](c);
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo(0,0);
}
window.addEventListener('hashchange', route);

function renderSidebar(){
  const wrap = document.getElementById('navScroll');
  wrap.innerHTML = NAV.map(g=>{
    const items = g.items.filter(it=> hasModuleAccess(it.id));
    if(!items.length) return '';
    return `
    <div class="nav-group">
      <div class="nav-group-label">${g.group}</div>
      ${items.map(it=>{
        const active = it.id===currentRoute ? 'active':'';
        let badge = '';
        if(it.badgeKey==='lowStockCount'){ const n = lowStockItems().length; if(n>0 && DB.settings.lowStockAlerts) badge = `<span class="nav-badge">${n}</span>`; }
        if(it.badgeKey==='activeRepairCount'){ const n = activeRepairs().length; if(n>0) badge = `<span class="nav-badge">${n}</span>`; }
        if(it.badgeKey==='pendingRequestCount'){ const n = pendingRequestCount(); if(n>0) badge = `<span class="nav-badge">${n}</span>`; }
        return `<a href="#${it.id}" class="nav-item ${active}">${icon(it.icon)}<span>${it.label}</span>${badge}</a>`;
      }).join('')}
    </div>`;
  }).join('');
  const u = DB.users.find(x=>x.id===DB.settings.currentUser) || DB.users[0] || {name:'Guest', role:'—', photo:''};
  const avHtml = u.photo ? `<img src="${u.photo}" alt="">` : initials(u.name);
  document.getElementById('sbUserAvatar').innerHTML = avHtml;
  document.getElementById('sbUserName').textContent = u.name;
  document.getElementById('sbUserRole').textContent = u.role;
  document.getElementById('topbarAvatar').innerHTML = avHtml;
}

function openModal(title, bodyHtml, footHtml, wide){
  document.getElementById('modalBox').className = 'modal'+(wide?' wide':'');
  document.getElementById('modalBox').innerHTML = `
    <div class="modal-head"><h3>${title}</h3><button class="modal-close" onclick="closeModal()" aria-label="Close dialog">${icon('x')}</button></div>
    <div class="modal-body">${bodyHtml}</div>
    ${footHtml? `<div class="modal-foot">${footHtml}</div>` : ''}
  `;
  document.getElementById('modalOverlay').classList.add('show');
}
function closeModal(){ document.getElementById('modalOverlay').classList.remove('show'); Object.keys(WEBCAM_STREAMS).forEach(stopWebcamStream); }
document.getElementById('modalOverlay').addEventListener('click', e=>{ if(e.target.id==='modalOverlay') closeModal(); });

function renderField(f, val){
  val = val ?? f.default ?? '';
  const id = 'f_'+f.key;
  if(f.type==='select'){
    const optsHtml = f.options.map(o=>`<option value="${o.value}" ${String(o.value)===String(val)?'selected':''}>${o.label}</option>`).join('');
    if(f.manageKey){
      return `<div class="field ${f.full?'full':''}" id="fw_${f.key}"><label>${f.label}</label>
        <div class="select-manage-row">
          <select id="${id}">${optsHtml}</select>
          <button type="button" class="select-manage-toggle" id="${id}_mgbtn" title="Add or remove options" aria-label="Add or remove options">${icon('plus')}</button>
        </div>
        <div class="select-manage-panel" id="${id}_mgpanel" style="display:none">
          <div class="taglist" id="${id}_mgtags"></div>
          <div class="manage-add-row">
            <input type="text" id="${id}_mginput" placeholder="Add new option...">
            <button type="button" class="btn btn-outline btn-sm" id="${id}_mgaddbtn">${icon('plus')} Add</button>
          </div>
        </div></div>`;
    }
    return `<div class="field ${f.full?'full':''}" id="fw_${f.key}"><label>${f.label}</label>
      <select id="${id}">${optsHtml}</select></div>`;
  }
  if(f.type==='lookup'){
    const display = f.matchCollection ? (DB[f.matchCollection].find(x=>x.id===val)?.name || '') : (val||'');
    return `<div class="field ${f.full?'full':''}" id="fw_${f.key}"><label>${f.label}</label>
      <input type="text" value="${escapeHtml(display)}" disabled>
      <input type="hidden" id="${id}" value="${escapeHtml(val||'')}"></div>`;
  }
  if(f.type==='combo'){
    const display = f.matchCollection ? (DB[f.matchCollection].find(x=>x.id===val)?.name ?? val) : val;
    return `<div class="field ${f.full?'full':''}" id="fw_${f.key}"><label>${f.label}</label>
      <input type="text" id="${id}" value="${escapeHtml(display)}" placeholder="${f.placeholder||'Type a name...'}" autocomplete="off">
      </div>`;
  }
  if(f.type==='textarea'){
    return `<div class="field full" id="fw_${f.key}"><label>${f.label}</label><textarea id="${id}">${escapeHtml(val)}</textarea></div>`;
  }
  if(f.type==='image'){
    return `<div class="field full" id="fw_${f.key}"><label>${f.label}</label>
      <input type="hidden" id="${id}_data" value="${escapeHtml(val)}">
      <div id="${id}_container">${renderImageInner(f, val, id)}</div></div>`;
  }
  if(f.type==='webcam'){
    return `<div class="field full" id="fw_${f.key}"><label>${f.label}${f.optional?' <span class="opt-tag">(Optional)</span>':''}</label>
      <input type="hidden" id="${id}_data" value="${escapeHtml(val)}">
      <div id="${id}_container">${renderWebcamInner(f, val, id, 'idle')}</div></div>`;
  }
  if(f.type==='repeater'){
    return `<div class="field full" id="fw_${f.key}"><label>${f.label}</label>
      <div id="${id}_list"></div>
      <button type="button" class="btn btn-outline btn-sm" id="${id}_addbtn">${icon('plus')} Add Another ${f.itemName||'Item'}</button></div>`;
  }
  if(f.type==='checklist'){
    const list = (Array.isArray(val) && val.length) ? val : checklistDefaultVal(f);
    return `<div class="field full" id="fw_${f.key}"><label>${f.label}</label>
      <input type="hidden" id="${id}_data" value="${escapeHtml(JSON.stringify(list))}">
      <div class="checklist-box" id="${id}_box"></div>
      <div class="checklist-add-row">
        <input type="text" id="${id}_newitem" placeholder="Add custom option...">
        <button type="button" class="btn btn-outline btn-sm" id="${id}_addbtn">${icon('plus')} Add</button>
      </div></div>`;
  }
  if(f.type==='passcode'){
    const isDenied = val === 'Denied';
    return `<div class="field ${f.full?'full':''}" id="fw_${f.key}"><label>${f.label}</label>
      <div class="passcode-row">
        <input type="text" id="${id}" value="${isDenied?'':escapeHtml(val)}" placeholder="${f.placeholder||''}" ${isDenied?'disabled':''}>
        <label class="passcode-denied-lbl"><input type="checkbox" id="${id}_denied" ${isDenied?'checked':''}> Customer Denied</label>
      </div></div>`;
  }
  if(f.type==='toggle'){
    const checked = val===true || val==='true';
    return `<div class="field full" id="fw_${f.key}">
      <label class="checklist-row" style="cursor:pointer">
        <input type="checkbox" id="${id}" ${checked?'checked':''}>
        <span>${f.label}</span>
      </label></div>`;
  }
  return `<div class="field ${f.full?'full':''}" id="fw_${f.key}"><label>${f.label}${f.adminOnly?' <span class="opt-tag" title="Only Admin can edit this field">(Admin Only)</span>':''}</label><input type="${f.type||'text'}" id="${id}" value="${escapeHtml(val)}" ${f.step?`step="${f.step}"`:''} placeholder="${f.placeholder||''}" ${f.readOnly?'readonly':''} ${(f.adminOnly && !isAdmin())?'disabled':''}></div>`;
}
function checklistDefaultVal(f){ return (f.options||[]).map(o=>({label:o, checked:false})); }
function readOnlyRow(label, html){
  return `<div class="ro-row"><div class="ro-label">${escapeHtml(label)}</div><div class="ro-val">${html}</div></div>`;
}
function renderReadOnlyField(f, val){
  val = val ?? f.default ?? '';
  if(f.type==='select'){
    const opt = (f.options||[]).find(o=>String(o.value)===String(val));
    return readOnlyRow(f.label, escapeHtml(opt?opt.label:(val||'—')));
  }
  if(f.type==='lookup' || f.type==='combo'){
    const display = f.matchCollection ? (DB[f.matchCollection].find(x=>x.id===val)?.name ?? val) : val;
    return readOnlyRow(f.label, escapeHtml(display||'—'));
  }
  if(f.type==='textarea'){
    return readOnlyRow(f.label, `<span style="white-space:pre-wrap">${escapeHtml(val||'—')}</span>`);
  }
  if(f.type==='image' || f.type==='webcam'){
    return readOnlyRow(f.label, val ? `<img src="${val}" style="max-width:160px;max-height:120px;border-radius:8px;border:1px solid var(--border)">` : '<span class="cell-muted">Not provided</span>');
  }
  if(f.type==='checklist'){
    const list = Array.isArray(val) ? val.filter(it=>it.checked) : [];
    return readOnlyRow(f.label, list.length
      ? `<div style="display:flex;flex-wrap:wrap;gap:6px">${list.map(it=>`<span class="badge green">${escapeHtml(it.label)}</span>`).join('')}</div>`
      : '<span class="cell-muted">None selected</span>');
  }
  if(f.type==='passcode'){
    return readOnlyRow(f.label, val==='Denied' ? '<span class="badge red">Customer Denied</span>' : escapeHtml(val||'—'));
  }
  if(f.type==='repeater'){
    const items = Array.isArray(val) ? val : [];
    if(!items.length) return readOnlyRow(f.label, `<span class="cell-muted">None added</span>`);
    return `<div class="field full"><label>${escapeHtml(f.label)}</label>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${items.map((it,i)=>`<div style="border:1px solid var(--border);border-radius:10px;padding:10px 12px">
          <div style="font-weight:700;font-size:12px;margin-bottom:6px;color:var(--text-muted)">${escapeHtml(f.itemName||'Item')} ${i+1}</div>
          <div class="ro-grid">${(f.subFields||[]).map(sf=>renderReadOnlyField(sf, it[sf.key])).join('')}</div>
        </div>`).join('')}
      </div></div>`;
  }
  if(f.type==='toggle'){
    return readOnlyRow(f.label, val ? '<span class="badge green">Yes</span>' : '<span class="badge">No</span>');
  }
  if(f.type==='password') return '';
  return readOnlyRow(f.label, escapeHtml(val===''||val==null?'—':val));
}
function openDetailView(opts, item){
  const body = `<div class="ro-grid">${opts.fields.map(f=>renderReadOnlyField(f, item[f.key])).join('')}</div>`;
  openModal((opts.singular||'Record')+' Details', body,
    `<button class="btn btn-outline" onclick="closeModal()">Close</button>`, opts.wideForm);
}
function bindChecklistField(f){
  const id = 'f_'+f.key;
  const dataInput = document.getElementById(id+'_data');
  const box = document.getElementById(id+'_box');
  const newItemInput = document.getElementById(id+'_newitem');
  const addBtn = document.getElementById(id+'_addbtn');
  if(!dataInput || !box) return;
  let list = [];
  try{ list = JSON.parse(dataInput.value||'[]'); }catch(e){ list = []; }
  function sync(){ dataInput.value = JSON.stringify(list); if(f.onChange) f.onChange(); }
  function renderRows(){
    box.innerHTML = list.length ? list.map((item,i)=>`
      <label class="checklist-row">
        <input type="checkbox" data-idx="${i}" ${item.checked?'checked':''}>
        <span>${escapeHtml(item.label)}</span>
        <button type="button" class="checklist-row-x" data-idx="${i}" title="Remove option">${icon('x')}</button>
      </label>`).join('') : `<span class="checklist-empty">No options yet — add one below.</span>`;
    box.querySelectorAll('input[type=checkbox]').forEach(cb=>{
      cb.onchange = ()=>{ list[+cb.dataset.idx].checked = cb.checked; sync(); };
    });
    box.querySelectorAll('.checklist-row-x').forEach(btn=>{
      btn.onclick = ()=>{ list.splice(+btn.dataset.idx,1); sync(); renderRows(); };
    });
  }
  renderRows();
  sync();
  if(addBtn) addBtn.onclick = ()=>{
    const v = (newItemInput.value||'').trim();
    if(!v) return;
    list.push({label:v, checked:true});
    newItemInput.value = '';
    sync(); renderRows();
  };
  if(newItemInput) newItemInput.onkeydown = e=>{ if(e.key==='Enter'){ e.preventDefault(); addBtn.click(); } };
}
function bindPasscodeField(f){
  const id = 'f_'+f.key;
  const textEl = document.getElementById(id);
  const deniedEl = document.getElementById(id+'_denied');
  if(!textEl || !deniedEl) return;
  function apply(){
    textEl.disabled = deniedEl.checked;
    if(deniedEl.checked) textEl.value = '';
    if(f.onChange) f.onChange();
  }
  deniedEl.onchange = apply;
  apply();
}
function renderDeviceSubField(sf, val){
  val = val ?? sf.default ?? '';
  if(sf.type==='select'){
    return `<div class="field ${sf.full?'full':''}"><label>${sf.label}</label>
      <select data-key="${sf.key}">${sf.options.map(o=>`<option value="${o.value}" ${String(o.value)===String(val)?'selected':''}>${o.label}</option>`).join('')}</select></div>`;
  }
  if(sf.type==='textarea'){
    return `<div class="field full"><label>${sf.label}</label><textarea data-key="${sf.key}">${escapeHtml(val)}</textarea></div>`;
  }
  return `<div class="field ${sf.full?'full':''}"><label>${sf.label}</label><input type="${sf.type||'text'}" data-key="${sf.key}" value="${escapeHtml(val)}" placeholder="${sf.placeholder||''}"></div>`;
}
function bindRepeaterField(f, val){
  const id = 'f_'+f.key;
  const list = document.getElementById(id+'_list');
  const addBtn = document.getElementById(id+'_addbtn');
  if(!list) return;
  function renumber(){
    Array.from(list.children).forEach((block,i)=>{
      const title = block.querySelector('.device-block-title');
      if(title) title.textContent = (f.itemName||'Item')+' '+(i+1);
      const rm = block.querySelector('.device-remove');
      if(rm) rm.style.display = list.children.length>1 ? '' : 'none';
    });
  }
  function addBlock(data){
    const idx = list.children.length;
    const div = document.createElement('div');
    div.className = 'device-block';
    div.style.cssText = 'border:1px solid var(--border);border-radius:10px;padding:12px;margin-bottom:10px';
    div.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <strong class="device-block-title" style="font-size:13px">${(f.itemName||'Item')+' '+(idx+1)}</strong>
        <button type="button" class="btn btn-outline btn-sm device-remove" style="color:var(--red);border-color:var(--red)">${icon('trash')} Remove</button>
      </div>
      <div class="form-grid">${(f.subFields||[]).map(sf=>renderDeviceSubField(sf, data?data[sf.key]:undefined)).join('')}</div>`;
    div.querySelector('.device-remove').onclick = ()=>{ div.remove(); renumber(); };
    list.appendChild(div);
    renumber();
  }
  list.innerHTML = '';
  const initial = (val && val.length) ? val : [{}];
  initial.forEach(d=> addBlock(d));
  if(addBtn) addBtn.onclick = ()=> addBlock({});
}
function formatPkPhone(v){
  const digits = (v||'').replace(/\D/g,'').slice(0,11);
  return digits.length > 4 ? digits.slice(0,4)+'-'+digits.slice(4) : digits;
}
function isValidEmail(v){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v||'').trim());
}
function bindPhoneMask(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.setAttribute('inputmode','numeric');
  el.setAttribute('maxlength','12');
  if(!el.placeholder) el.placeholder = '0300-0000000';
  el.value = formatPkPhone(el.value);
  el.oninput = function(){
    const pos = this.selectionStart;
    const before = this.value.length;
    this.value = formatPkPhone(this.value);
    const after = this.value.length;
    const newPos = Math.max(0, pos + (after - before));
    this.setSelectionRange(newPos, newPos);
  };
}
function renderImageInner(f, val, id){
  return `<div class="img-field">
      <div class="img-preview">${val ? `<img src="${val}" alt="">` : `<div class="img-empty">${icon('image')}<span>No photo yet</span></div>`}</div>
      <div class="img-actions">
        <input type="file" accept="image/*" ${f.capture?`capture="${f.capture}"`:''} id="${id}_file" style="display:none">
        <button type="button" class="btn btn-outline btn-sm" data-imgpick="${id}">${icon('camera')} ${val?'Change Photo':'Add Photo'}</button>
        ${val?`<button type="button" class="btn btn-outline btn-sm" data-imgclear="${id}">${icon('trash')} Remove</button>`:''}
      </div>
    </div>`;
}
function bindImageField(f){
  const id = 'f_'+f.key;
  const container = document.getElementById(id+'_container');
  if(!container) return;
  const pickBtn = container.querySelector(`[data-imgpick="${id}"]`);
  const fileInput = document.getElementById(id+'_file');
  const clearBtn = container.querySelector(`[data-imgclear="${id}"]`);
  if(pickBtn) pickBtn.onclick = ()=> fileInput.click();
  if(fileInput) fileInput.onchange = e=>{
    const file = e.target.files[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = ()=>{
      document.getElementById(id+'_data').value = reader.result;
      container.innerHTML = renderImageInner(f, reader.result, id);
      bindImageField(f);
    };
    reader.readAsDataURL(file);
  };
  if(clearBtn) clearBtn.onclick = ()=>{
    document.getElementById(id+'_data').value = '';
    container.innerHTML = renderImageInner(f, '', id);
    bindImageField(f);
  };
}

const WEBCAM_STREAMS = {};
function renderWebcamInner(f, val, id, mode){
  if(mode==='live'){
    return `<div class="webcam-field">
      <div class="webcam-live-wrap">
        <video id="${id}_video" autoplay playsinline muted></video>
      </div>
      <div class="img-actions">
        <button type="button" class="btn btn-primary btn-sm" data-webcamshot="${id}">${icon('camera')} Capture</button>
        <button type="button" class="btn btn-outline btn-sm" data-webcamcancel="${id}">${icon('x')} Cancel</button>
      </div>
    </div>`;
  }
  return `<div class="webcam-field">
      <div class="img-preview">${val ? `<img src="${val}" alt="">` : `<div class="img-empty">${icon('camera')}<span>No photo yet</span></div>`}</div>
      <div class="img-actions">
        <button type="button" class="btn btn-outline btn-sm" data-webcamopen="${id}">${icon('camera')} ${val?'Retake Photo':'Open Camera'}</button>
        ${val?`<button type="button" class="btn btn-outline btn-sm" data-webcamclear="${id}">${icon('trash')} Remove</button>`:''}
      </div>
      <div class="webcam-hint">Uses your PC/webcam camera only — cannot be uploaded from gallery.</div>
    </div>`;
}
function stopWebcamStream(id){
  const s = WEBCAM_STREAMS[id];
  if(s){ s.getTracks().forEach(t=>t.stop()); delete WEBCAM_STREAMS[id]; }
}
function bindWebcamField(f){
  const id = 'f_'+f.key;
  const container = document.getElementById(id+'_container');
  if(!container) return;
  const openBtn = container.querySelector(`[data-webcamopen="${id}"]`);
  const clearBtn = container.querySelector(`[data-webcamclear="${id}"]`);
  const shotBtn = container.querySelector(`[data-webcamshot="${id}"]`);
  const cancelBtn = container.querySelector(`[data-webcamcancel="${id}"]`);

  if(openBtn) openBtn.onclick = async ()=>{
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
      toast('Camera not supported in this browser','error'); return;
    }
    container.innerHTML = renderWebcamInner(f, document.getElementById(id+'_data').value, id, 'live');
    bindWebcamField(f);
    try{
      const stream = await navigator.mediaDevices.getUserMedia({video:true});
      WEBCAM_STREAMS[id] = stream;
      const video = document.getElementById(id+'_video');
      if(video) video.srcObject = stream;
    }catch(err){
      toast('Camera access denied or unavailable','error');
      container.innerHTML = renderWebcamInner(f, document.getElementById(id+'_data').value, id, 'idle');
      bindWebcamField(f);
    }
  };
  if(shotBtn) shotBtn.onclick = ()=>{
    const video = document.getElementById(id+'_video');
    if(!video || !video.videoWidth){ toast('Camera still starting, try again','error'); return; }
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth; canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    stopWebcamStream(id);
    document.getElementById(id+'_data').value = dataUrl;
    container.innerHTML = renderWebcamInner(f, dataUrl, id, 'idle');
    bindWebcamField(f);
  };
  if(cancelBtn) cancelBtn.onclick = ()=>{
    stopWebcamStream(id);
    container.innerHTML = renderWebcamInner(f, document.getElementById(id+'_data').value, id, 'idle');
    bindWebcamField(f);
  };
  if(clearBtn) clearBtn.onclick = ()=>{
    document.getElementById(id+'_data').value = '';
    container.innerHTML = renderWebcamInner(f, '', id, 'idle');
    bindWebcamField(f);
  };
}
function printAreaWhenReady(){
  const area = document.getElementById('printArea');
  const imgs = Array.from(area.querySelectorAll('img'));
  const pending = imgs.filter(img => !img.complete || img.naturalWidth === 0);
  if(!pending.length){ window.print(); return; }
  let remaining = pending.length;
  const proceed = ()=>{ remaining--; if(remaining<=0) window.print(); };
  pending.forEach(img=>{
    img.addEventListener('load', proceed, {once:true});
    img.addEventListener('error', proceed, {once:true});
  });
  setTimeout(()=>{ if(remaining>0){ remaining = 0; window.print(); } }, 1200);
}

function setupSignatureCanvas(canvas, existingDataUrl){
  const ratio = Math.max(window.devicePixelRatio || 1, 1);
  const rect = canvas.getBoundingClientRect();
  const cssW = rect.width || 500, cssH = rect.height || 190;
  canvas.width = Math.round(cssW * ratio);
  canvas.height = Math.round(cssH * ratio);
  const ctx = canvas.getContext('2d');
  ctx.scale(ratio, ratio);
  ctx.lineWidth = 2.4; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = '#1a1a2e';
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cssW, cssH);
  let hasStroke = false;
  if(existingDataUrl){
    const img = new Image();
    img.onload = ()=> ctx.drawImage(img, 0, 0, cssW, cssH);
    img.src = existingDataUrl;
  }
  let drawing = false, lastX = 0, lastY = 0;
  function posOf(e){
    const r = canvas.getBoundingClientRect();
    const t = e.touches && e.touches[0];
    return { x: (t ? t.clientX : e.clientX) - r.left, y: (t ? t.clientY : e.clientY) - r.top };
  }
  function start(e){ e.preventDefault(); drawing = true; const p = posOf(e); lastX = p.x; lastY = p.y; }
  function move(e){
    if(!drawing) return;
    e.preventDefault();
    const p = posOf(e);
    ctx.beginPath(); ctx.moveTo(lastX, lastY); ctx.lineTo(p.x, p.y); ctx.stroke();
    lastX = p.x; lastY = p.y; hasStroke = true;
  }
  function stop(){ drawing = false; }
  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mousemove', move);
  canvas.addEventListener('mouseup', stop);
  canvas.addEventListener('mouseleave', stop);
  canvas.addEventListener('touchstart', start, {passive:false});
  canvas.addEventListener('touchmove', move, {passive:false});
  canvas.addEventListener('touchend', stop);
  return {
    clear(){ ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cssW, cssH); hasStroke = false; },
    isEmpty(){ return !hasStroke && !existingDataUrl; },
    toDataURL(){ return canvas.toDataURL('image/png'); }
  };
}
function openSignatureModal(item, label, onSaved, collection){
  openModal(
    (item.signature ? 'Update' : 'Capture') + ' Customer Signature',
    `<p style="font-size:12.5px;color:var(--text-muted);margin-bottom:10px">Hand the device to <b style="color:var(--text)">${escapeHtml(label||item.id)}</b> and ask them to sign below to acknowledge this ${item.total!==undefined?'sale':(item.faultReported!==undefined||item.notes!==undefined?'repair/invoice':'record')}.</p>
     <div style="border:1.5px dashed var(--border);border-radius:10px;overflow:hidden;background:#fff">
       <canvas id="sigPadCanvas" style="width:100%;height:190px;display:block;touch-action:none;cursor:crosshair"></canvas>
     </div>
     <div style="display:flex;justify-content:space-between;align-items:center;margin-top:9px">
       <span style="font-size:11px;color:var(--text-muted)">${item.signature ? 'Currently signed'+(item.signatureDate?' on '+fmtDate(item.signatureDate):'') : 'No signature on file yet'}</span>
       <button type="button" class="btn btn-outline btn-sm" id="sigClearBtn">${icon('trash')} Clear</button>
     </div>`,
    `<button class="btn btn-outline" onclick="closeModal()">Cancel</button>
     <button class="btn btn-primary" id="sigSaveBtn">${icon('check')} Save Signature</button>`
  );
  const canvas = document.getElementById('sigPadCanvas');
  const pad = setupSignatureCanvas(canvas, item.signature || '');
  document.getElementById('sigClearBtn').onclick = ()=> pad.clear();
  const saveBtn = document.getElementById('sigSaveBtn');
  saveBtn.onclick = async ()=>{
    if(pad.isEmpty()){ toast('Please sign in the box before saving', 'error'); return; }
    saveBtn.disabled = true; saveBtn.textContent = 'Saving…';
    const dataUrl = pad.toDataURL();
    const oldSignature = item.signature;
    let uploadedUrl = null;
    try{
      const file = Api.dataUrlToFile(dataUrl, 'signature');
      uploadedUrl = await Api.Uploads.upload(file, 'signatures');
      const api = collection && Api[collection];
      if(api) await api.update(item.id, {signature: uploadedUrl, signatureDate: todayStr()});
      item.signature = uploadedUrl;
      item.signatureDate = todayStr();
      if(Api.isUploadedFileUrl(oldSignature) && oldSignature !== uploadedUrl) Api.Uploads.remove(oldSignature);
      save();
      log(`Customer signature captured for ${item.id}`, 'signature');
      closeModal();
      toast('Signature saved');
      if(onSaved) onSaved(item);
    }catch(e){
      if(uploadedUrl) Api.Uploads.remove(uploadedUrl);
      toast(e.message||'Could not save signature','error');
      saveBtn.disabled = false; saveBtn.textContent = icon('check')+' Save Signature';
    }
  };
}
function invSignatureBox(item){
  return `<div style="border:1px solid #E7E5F3;border-radius:8px;padding:8px 12px;margin-top:9px;display:flex;align-items:center;gap:12px">
    <div style="flex:1">
      <div style="font-size:7.6px;font-weight:800;color:#8B2FE0;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Customer Signature</div>
      ${item.signature
        ? `<img src="${item.signature}" alt="Customer signature" style="height:34px;max-width:100%;object-fit:contain">`
        : `<div style="height:1px;background:#1a1a2e;margin-top:22px;max-width:210px"></div>`}
    </div>
    <div style="text-align:right">
      <div style="font-size:7.6px;font-weight:800;color:#8B2FE0;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Date</div>
      <div style="font-size:10px;font-weight:700;min-width:60px">${item.signature && item.signatureDate ? fmtDate(item.signatureDate) : '—'}</div>
    </div>
  </div>`;
}
function collectFields(fields){
  const out = {};
  fields.forEach(f=>{
    if(f.type==='image' || f.type==='webcam'){ const el = document.getElementById('f_'+f.key+'_data'); out[f.key] = el?el.value:''; return; }
    if(f.type==='repeater'){
      const list = document.getElementById('f_'+f.key+'_list');
      const blocks = list ? Array.from(list.children) : [];
      out[f.key] = blocks.map(b=>{
        const obj = {};
        (f.subFields||[]).forEach(sf=>{
          const el = b.querySelector(`[data-key="${sf.key}"]`);
          obj[sf.key] = sf.type==='number' ? Number((el&&el.value)||0) : (el?el.value:'');
        });
        return obj;
      });
      return;
    }
    if(f.type==='checklist'){
      const el = document.getElementById('f_'+f.key+'_data');
      try{ out[f.key] = el ? JSON.parse(el.value||'[]') : []; }catch(e){ out[f.key] = []; }
      return;
    }
    if(f.type==='passcode'){
      const deniedEl = document.getElementById('f_'+f.key+'_denied');
      const textEl = document.getElementById('f_'+f.key);
      out[f.key] = (deniedEl && deniedEl.checked) ? 'Denied' : (textEl?textEl.value:'');
      return;
    }
    if(f.type==='toggle'){ const el = document.getElementById('f_'+f.key); out[f.key] = !!(el && el.checked); return; }
    const el = document.getElementById('f_'+f.key);
    out[f.key] = f.type==='number' ? Number(el.value||0) : el.value;
  });
  return out;
}

function excelValueForField(f, item){
  const raw = item[f.key];
  if(f.type==='password') return '';
  if(f.type==='toggle') return raw ? 'Yes' : 'No';
  if(f.type==='checklist') return (Array.isArray(raw)?raw:[]).filter(i=>i.checked).map(i=>i.label).join(', ');
  if(f.type==='select' && f.options){
    const opt = f.options.find(o=>String(o.value)===String(raw));
    return opt ? opt.label : (raw ?? '');
  }
  if(f.type==='combo' && f.matchCollection){
    const hit = DB[f.matchCollection].find(x=>x.id===raw);
    return hit ? hit.name : (raw ?? '');
  }
  return raw ?? '';
}
function excelParseFieldValue(f, raw){
  let v = (raw===undefined || raw===null) ? '' : String(raw).trim();
  if(f.type==='toggle') return /^(yes|true|1)$/i.test(v);
  if(f.type==='select' && f.options){
    const opt = f.options.find(o=> String(o.label).toLowerCase()===v.toLowerCase() || String(o.value).toLowerCase()===v.toLowerCase());
    return opt ? opt.value : v;
  }
  if(f.type==='combo' && f.matchCollection){
    const hit = DB[f.matchCollection].find(x=> (x.name||'').toLowerCase()===v.toLowerCase());
    return hit ? hit.id : '';
  }
  if(f.type==='number') return v===''? '' : Number(v);
  return v;
}
function exportCrudExcel(opts){
  if(typeof XLSX==='undefined'){ toast('Excel library failed to load — check your internet connection','error'); return; }
  const fields = opts.fields.filter(f=> f.type!=='image' && f.type!=='webcam' && f.type!=='repeater');
  const rows = DB[opts.collection].map(item=>{
    const obj = {'ID': item.id};
    fields.forEach(f=>{ obj[f.label] = excelValueForField(f, item); });
    return obj;
  });
  const ws = XLSX.utils.json_to_sheet(rows.length ? rows : [Object.assign({ID:''}, Object.fromEntries(fields.map(f=>[f.label,''])))]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, (opts.title||'Data').slice(0,28));
  XLSX.writeFile(wb, `${opts.collection}-export-${todayStr()}.xlsx`);
  toast('Exported to Excel');
}
function importCrudExcel(opts, file){
  if(typeof XLSX==='undefined'){ toast('Excel library failed to load — check your internet connection','error'); return; }
  const reader = new FileReader();
  reader.onload = async (e)=>{
    let wb;
    try{ wb = XLSX.read(e.target.result, {type:'array'}); }
    catch(err){ toast('Could not read file — make sure it is a valid Excel/CSV file','error'); return; }
    const sheet = wb.Sheets[wb.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, {defval:''});
    if(!rows.length){ toast('No rows found in the file','error'); return; }
    const fields = opts.fields.filter(f=> f.type!=='image' && f.type!=='webcam' && f.type!=='repeater' && f.type!=='checklist');
    let added=0, failed=0; const errors=[];
    const api = Api[opts.collection];
    for(let idx=0; idx<rows.length; idx++){
      const row = rows[idx];
      const data = {};
      fields.forEach(f=>{
        const raw = row[f.label] !== undefined ? row[f.label] : row[f.key];
        data[f.key] = excelParseFieldValue(f, raw);
      });
      if(opts.validate){ const err = opts.validate(data, null); if(err){ failed++; errors.push(`Row ${idx+2}: ${err}`); continue; } }
      const extra = opts.onCreateExtra?opts.onCreateExtra(data):{};
      try{
        const created = api ? await api.create(Object.assign({}, data, extra)) : Object.assign({id:uid(opts.prefix)}, data, extra);
        const newItem = Object.assign({id: created.id || uid(opts.prefix)}, data, extra, created);
        DB[opts.collection].push(newItem);
        added++;
      }catch(err){
        failed++; errors.push(`Row ${idx+2}: ${err.message||'Could not save'}`);
      }
    }
    if(added){ save(); log(`${added} ${(opts.title||'record').toLowerCase()} imported from Excel`, opts.collection); }
    openModal('Import Result', `<p style="font-size:13.5px">${added} record(s) imported successfully.${failed? ` ${failed} row(s) skipped due to errors:`:''}</p>
      ${failed? `<div style="max-height:200px;overflow:auto;font-size:12px;color:var(--red);margin-top:8px">${errors.map(er=>`<div>${escapeHtml(er)}</div>`).join('')}</div>` : ''}`,
      `<button class="btn btn-primary" onclick="closeModal()">Close</button>`);
    route(); renderSidebar();
  };
  reader.onerror = ()=> toast('Could not read the selected file','error');
  reader.readAsArrayBuffer(file);
}

function crudPage(container, opts){
  let searchVal = '';
  let filterVals = {};
  (opts.filters||[]).forEach(f=> filterVals[f.key]='');
  const readOnly = !canEditData();

  function getRows(){
    let rows = DB[opts.collection].slice().reverse();
    if(searchVal){
      const s = searchVal.toLowerCase();
      rows = rows.filter(r => opts.searchKeys.some(k => String(opts.getSearchVal ? opts.getSearchVal(r,k) : r[k]||'').toLowerCase().includes(s)));
    }
    (opts.filters||[]).forEach(f=>{
      if(filterVals[f.key]) rows = rows.filter(r => String(r[f.key])===filterVals[f.key]);
    });
    if(opts.rowFilter) rows = rows.filter(opts.rowFilter);
    if(opts.statusOrder){
      const rank = s => { const i = opts.statusOrder.indexOf(s); return i===-1 ? opts.statusOrder.length : i; };
      rows = rows.slice().sort((a,b)=> rank(a.status)-rank(b.status));
    }
    return rows;
  }

  function renderTableInner(rows){
    return rows.length===0 ? emptyState(opts.title) : `
      <table>
        <thead><tr>${opts.columns.map(c=>`<th>${c.label}</th>`).join('')}${(opts.viewFn||opts.labelFn||opts.enableViewDetail||opts.enableSignature||!readOnly)?'<th style="text-align:right">Actions</th>':''}</tr></thead>
        <tbody>${rows.map(r=>{
          const delAllowed = !opts.canDelete || opts.canDelete(r);
          return `<tr>${opts.columns.map(c=>`<td>${c.render(r)}</td>`).join('')}
          ${(opts.viewFn||opts.labelFn||opts.enableViewDetail||opts.enableSignature||!readOnly)?`<td><div class="row-actions">
            ${opts.enableViewDetail?`<button class="mini-btn" data-detail="${r.id}" title="View" aria-label="View record details">${icon('eye')}</button>`:''}
            ${opts.viewFn?`<button class="mini-btn${opts.viewLabel?' mini-btn-text':''}" data-view="${r.id}" title="${escapeHtml(opts.viewLabel||'View')}" aria-label="${escapeHtml(opts.viewLabel||'View record')}">${opts.viewLabel?escapeHtml(opts.viewLabel):icon('file')}</button>`:''}
            ${opts.labelFn?`<button class="mini-btn${opts.labelLabel?' mini-btn-text':''}" data-label="${r.id}" title="${escapeHtml(opts.labelLabel||'Sticker')}" aria-label="${escapeHtml(opts.labelLabel||'Print device sticker')}">${opts.labelLabel?escapeHtml(opts.labelLabel):icon('tag')}</button>`:''}
            ${opts.enableSignature?`<button class="mini-btn${r.signature?' signed':''}" data-sign="${r.id}" title="${r.signature?'Customer signed — view/update':'Capture customer signature'}" aria-label="Customer signature">${icon('signature')}</button>`:''}
            ${readOnly?'':`<button class="mini-btn" data-edit="${r.id}" title="Edit" aria-label="Edit record">${icon('edit')}</button>
            ${delAllowed?`<button class="mini-btn danger" data-del="${r.id}" title="Delete" aria-label="Delete record">${icon('trash')}</button>`:`<button class="mini-btn danger" disabled title="${opts.canDeleteMsg||'Cannot delete this record'}" aria-label="Delete disabled: ${escapeHtml(opts.canDeleteMsg||'Cannot delete this record')}" style="opacity:.35;cursor:not-allowed">${icon('trash')}</button>`}`}
          </div></td>`:''}</tr>`;
        }).join('')}</tbody>
      </table>`;
  }

  function updateRows(){
    const rows = getRows();
    const sub = container.querySelector('.section-head .sub');
    if(sub) sub.textContent = `${rows.length} of ${DB[opts.collection].length} ${opts.title.toLowerCase()}`;
    if(opts.summaryFn){
      const sc = container.querySelector('#crudSummaryCard');
      if(sc) sc.innerHTML = opts.summaryFn(rows);
    }
    const card = container.querySelector('#crudTableCard');
    if(!card) return;
    card.innerHTML = renderTableInner(rows);
    if(!readOnly){
      card.querySelectorAll('[data-edit]').forEach(b=> b.onclick = ()=> openForm(DB[opts.collection].find(x=>x.id===b.dataset.edit)));
      card.querySelectorAll('[data-del]').forEach(b=> b.onclick = ()=> confirmDelete(b.dataset.del));
    }
    if(opts.viewFn) card.querySelectorAll('[data-view]').forEach(b=> b.onclick = ()=> opts.viewFn(DB[opts.collection].find(x=>x.id===b.dataset.view)));
    if(opts.labelFn) card.querySelectorAll('[data-label]').forEach(b=> b.onclick = ()=> opts.labelFn(DB[opts.collection].find(x=>x.id===b.dataset.label)));
    if(opts.enableViewDetail) card.querySelectorAll('[data-detail]').forEach(b=> b.onclick = ()=> openDetailView(opts, DB[opts.collection].find(x=>x.id===b.dataset.detail)));
    if(opts.enableSignature) card.querySelectorAll('[data-sign]').forEach(b=> b.onclick = ()=>{
      const item = DB[opts.collection].find(x=>x.id===b.dataset.sign);
      if(item) openSignatureModal(item, opts.itemLabel ? opts.itemLabel(item) : item.id, ()=> updateRows(), opts.collection);
    });
  }

  function draw(){
    const rows = getRows();
    container.innerHTML = `
      <div class="section-head">
        <div><h2>${opts.title}</h2><div class="sub">${rows.length} of ${DB[opts.collection].length} ${opts.title.toLowerCase()}</div></div>
        <div class="head-actions">
          ${opts.extraActionsHtml||''}
          ${opts.enableExcel ? `<button class="btn btn-outline" id="exportExcelBtn">${icon('download')} Export Excel</button>` : ''}
          ${opts.enableExcel && !readOnly ? `<input type="file" accept=".xlsx,.xls,.csv" id="importExcelFile" style="display:none">
          <button class="btn btn-outline" id="importExcelBtn">${icon('upload')} Import Excel</button>` : ''}
          ${readOnly?'':`<button class="btn btn-primary" id="addNewBtn">${icon('plus')} ${opts.newLabel||'Add New'}</button>`}
        </div>
      </div>
      <div class="toolbar">
        <div class="tb-search">${icon('search')}<input type="text" id="searchInput" placeholder="Search ${opts.title.toLowerCase()}..." value="${escapeHtml(searchVal)}"></div>
        ${(opts.filters||[]).map(f=>{
          const optSrc = f.manageKey ? manageListItems(MANAGE_LIST_BLOCKS_BY_KEY[f.manageKey]).map(it=>({value:it.id,label:it.label})) : f.options;
          return `
          <select class="tb-filter" data-fk="${f.key}" ${f.manageKey?`data-managekey="${f.manageKey}"`:''}>
            <option value="">${f.label}: All</option>
            ${optSrc.map(o=>{
              const val = (o && typeof o==='object') ? o.value : o;
              const lbl = (o && typeof o==='object') ? o.label : o;
              return `<option value="${escapeHtml(String(val))}" ${filterVals[f.key]===String(val)?'selected':''}>${escapeHtml(String(lbl))}</option>`;
            }).join('')}
          </select>`;
        }).join('')}
      </div>
      ${opts.summaryFn ? `<div class="table-card" id="crudSummaryCard" style="margin-bottom:14px">${opts.summaryFn(rows)}</div>` : ''}
      <div class="table-card" id="crudTableCard">
        ${renderTableInner(rows)}
      </div>
    `;
    if(!readOnly){ const addBtn = container.querySelector('#addNewBtn'); if(addBtn) addBtn.onclick = ()=> openForm(null); }
    if(opts.enableExcel){
      const expBtn = container.querySelector('#exportExcelBtn');
      if(expBtn) expBtn.onclick = ()=> exportCrudExcel(opts);
      if(!readOnly){
        const impBtn = container.querySelector('#importExcelBtn');
        const impFile = container.querySelector('#importExcelFile');
        if(impBtn && impFile){
          impBtn.onclick = ()=> impFile.click();
          impFile.onchange = e=>{ const file = e.target.files[0]; if(file) importCrudExcel(opts, file); e.target.value=''; };
        }
      }
    }
    const si = container.querySelector('#searchInput');
    if(si) si.oninput = e=>{ searchVal = e.target.value; updateRows(); };
    container.querySelectorAll('.tb-filter').forEach(sel=>{
      sel.onchange = e=>{ filterVals[sel.dataset.fk] = e.target.value; updateRows(); };
    });
    updateRows();
  }

  function confirmDelete(id){
    if(readOnly) return;
    const item = DB[opts.collection].find(x=>x.id===id);
    if(opts.canDelete && item && !opts.canDelete(item)){ toast(opts.canDeleteMsg||'Cannot delete this record','error'); return; }
    openModal('Delete '+opts.singular, `<p style="font-size:13.5px;color:var(--text-muted)">Are you sure you want to delete this ${opts.singular.toLowerCase()}? This action cannot be undone.</p>`,
      `<button class="btn btn-outline" onclick="closeModal()">Cancel</button>
       <button class="btn" style="background:var(--red);color:#fff" id="confirmDelBtn">${icon('trash')} Delete</button>`);
    const delBtn = document.getElementById('confirmDelBtn');
    delBtn.onclick = async ()=>{
      delBtn.disabled = true; delBtn.textContent = 'Deleting…';
      const idx = DB[opts.collection].findIndex(x=>x.id===id);
      const item = DB[opts.collection][idx];
      try{
        const api = Api[opts.collection];
        if(api) await api.remove(id);
        if(opts.onDelete) await opts.onDelete(item);
        (opts.fields||[]).filter(f=>f.type==='image'||f.type==='webcam').forEach(f=>{
          if(Api.isUploadedFileUrl(item[f.key])) Api.Uploads.remove(item[f.key]);
        });
        if(item.signature && Api.isUploadedFileUrl(item.signature)) Api.Uploads.remove(item.signature);
        DB[opts.collection].splice(idx,1);
        save(); log(`${opts.singular} deleted: ${opts.itemLabel ? opts.itemLabel(item) : id}`, opts.collection);
        closeModal(); toast(opts.singular+' deleted'); draw(); renderSidebar();
      }catch(e){
        toast(e.message || 'Could not delete — please try again', 'error');
        delBtn.disabled = false; delBtn.textContent = 'Delete';
      }
    };
  }

  async function uploadImageFields(data, existingItem){
    const imageFields = (opts.fields||[]).filter(f=>f.type==='image'||f.type==='webcam');
    const newlyUploaded = [];
    const toRemoveOnSuccess = [];
    for(const f of imageFields){
      const val = data[f.key];
      const oldVal = existingItem ? existingItem[f.key] : undefined;
      if(Api.isDataUrl(val)){
        const file = Api.dataUrlToFile(val, f.key);
        if(file){
          data[f.key] = await Api.Uploads.upload(file, opts.collection);
          newlyUploaded.push(data[f.key]);
          if(Api.isUploadedFileUrl(oldVal) && oldVal !== data[f.key]) toRemoveOnSuccess.push(oldVal);
        }
      } else if(existingItem && val === '' && Api.isUploadedFileUrl(oldVal)){
        toRemoveOnSuccess.push(oldVal);
      }
    }
    return { newlyUploaded, toRemoveOnSuccess };
  }

  function openForm(item){
    if(readOnly) return;
    const isEdit = !!item;
    const prevSnapshot = item ? Object.assign({}, item) : null;
    openModal((isEdit?'Edit ':'Add New ')+opts.singular,
      `<div class="form-grid">${opts.fields.map(f=>renderField(f, item?item[f.key]:undefined)).join('')}</div>`,
      `<button class="btn btn-outline" onclick="closeModal()">Cancel</button>
       <button class="btn btn-primary" id="saveBtn">${icon('check')} ${isEdit?'Save Changes':'Add '+opts.singular}</button>`, opts.wideForm);
    opts.fields.filter(f=>f.type==='image').forEach(bindImageField);
    opts.fields.filter(f=>f.type==='webcam').forEach(bindWebcamField);
    opts.fields.filter(f=>f.type==='repeater').forEach(f=> bindRepeaterField(f, item?item[f.key]:undefined));
    opts.fields.filter(f=>f.type==='checklist').forEach(f=> bindChecklistField(f));
    opts.fields.filter(f=>f.type==='passcode').forEach(f=> bindPasscodeField(f));
    opts.fields.filter(f=>f.type==='select' && f.manageKey).forEach(bindManageSelectField);
    if(opts.afterRender) opts.afterRender(item);
    const saveBtn = document.getElementById('saveBtn');
    saveBtn.onclick = async ()=>{
      const data = collectFields(opts.fields);
      for(const f of opts.fields){
        if(f.type==='combo' && f.matchCollection && data[f.key]){
          const typed = String(data[f.key]).trim();
          const hit = DB[f.matchCollection].find(x=> (x.name||'').toLowerCase() === typed.toLowerCase());
          if(hit){
            data[f.key] = hit.id;
          } else if(typed){
            const newRecData = { name: typed };
            if(f.matchCollection==='customers'){
              newRecData.phone = data.customerPhone || '';
              newRecData.address = data.address || '';
              newRecData.joined = todayStr();
            }
            let newRec;
            try{
              newRec = await Api[f.matchCollection].create(newRecData);
            }catch(e){
              toast(`Could not create ${f.matchCollection.slice(0,-1)} "${typed}": ${e.message}`, 'error');
              return;
            }
            DB[f.matchCollection].push(newRec);
            data[f.key] = newRec.id;
          }
        }
      }
      opts.fields.forEach(f=>{
        if(f.type==='password' && isEdit && !data[f.key]) delete data[f.key];
      });
      if(opts.validate){ const err = opts.validate(data, item); if(err){ toast(err,'error'); return; } }

      saveBtn.disabled = true; saveBtn.textContent = 'Saving…';
      let imgResult = null;
      try{
        imgResult = await uploadImageFields(data, item);
        const api = Api[opts.collection];
        let savedItem;
        if(isEdit){
          const merged = api ? await api.update(item.id, data) : Object.assign({}, item, data);
          Object.assign(item, merged);
          savedItem = item;
          log(`${opts.singular} updated: ${opts.itemLabel?opts.itemLabel(item):item.id}`, opts.collection);
          toast(opts.singular+' updated');
        } else {
          const extra = opts.onCreateExtra?opts.onCreateExtra(data):{};
          const created = api ? await api.create(Object.assign({}, data, extra)) : Object.assign({id:uid(opts.prefix)}, data, extra);
          const newItem = Object.assign({id: created.id || uid(opts.prefix)}, data, extra, created);
          DB[opts.collection].push(newItem);
          savedItem = newItem;
          const meta = (opts.collection==='products' && Number(newItem.stock)>0) ? {kind:'stock-in', qty:Number(newItem.stock)} : undefined;
          log(`${opts.singular} added: ${opts.itemLabel?opts.itemLabel(newItem):newItem.id}`, opts.collection, meta);
          toast(opts.singular+' added');
        }
        if(opts.onSaved) await opts.onSaved(savedItem, isEdit, prevSnapshot);
        if(imgResult) imgResult.toRemoveOnSuccess.forEach(u=> Api.Uploads.remove(u));
        save(); closeModal(); draw(); renderSidebar();
      }catch(e){
        if(imgResult) imgResult.newlyUploaded.forEach(u=> Api.Uploads.remove(u));
        toast(e.message || 'Could not save — please try again', 'error');
        saveBtn.disabled = false; saveBtn.textContent = isEdit?'Save Changes':'Add '+opts.singular;
      }
    };
  }
  draw();
}
function emptyState(title){
  return `<div class="empty-state"><div class="icon-wrap">${icon('box')}</div><h4>No ${title.toLowerCase()} found</h4><p>Try adjusting your search or filters, or add a new record to get started.</p></div>`;
}
function statusBadge(status){
  const map = {
    'Completed':'green','Paid':'green','Delivered':'green','Active':'green','Ready':'blue',
    'Pending':'yellow','Processing':'yellow','Diagnosing':'yellow','Partial':'yellow','Received':'purple',
    'Cancelled':'red','Unpaid':'red','Inactive':'red','Repairing':'orange','Approved':'green','Rejected':'red'
  };
  return `<span class="badge ${map[status]||'gray'}">${status}</span>`;
}

const RENDERERS = {};

RENDERERS.dashboard = function(c){
  const totalRevenue = DB.invoices.filter(i=>i.status==='Paid').reduce((s,i)=>s+Number(i.amount),0)
    + DB.orders.filter(o=>o.status==='Completed').reduce((s,o)=>s+Number(o.total),0)
    + DB.sales.filter(s=>s.status==='Paid').reduce((s,sale)=>s+Number(sale.total),0);
  const totalExpense = DB.expenses.reduce((s,e)=>s+Number(e.amount),0);
  const plRows = DB.profitLoss.filter(r=>monthKey(r.date)===currentMonthKey());
  const profit = plRows.reduce((s,r)=> s + (r.profit!==undefined && r.profit!==null && r.profit!=='' ? Number(r.profit) : (Number(r.paymentReceived||0)-Number(r.expense||0))), 0);
  const activeRep = activeRepairs().length;
  const lowStock = lowStockItems().length;
  const unpaidInv = DB.invoices.filter(i=>i.status!=='Paid').reduce((s,i)=>s+Number(i.amount),0);

  c.innerHTML = `
    <div class="kpi-grid">
      ${kpiCard('wallet','var(--green)', fmtMoney(totalRevenue), 'Total Income','','up')}
      ${kpiCard('wallet','var(--red)', fmtMoney(totalExpense), 'Total Expense','','down')}
      ${kpiCard('chart', profit>=0?'var(--blue)':'var(--red)', fmtMoney(profit), 'Profit/Loss','This month', profit>=0?'up':'down')}
      ${kpiCard('tool', 'var(--orange)', activeRep, 'Repair (In Queue)', activeRep>0?activeRep+' in queue':'All clear','up')}
      ${kpiCard('alert', 'var(--red)', lowStock, 'Low Stock', lowStock>0?'Needs reorder':'Stock healthy', lowStock>0?'down':'up')}
      ${kpiCard('file', 'var(--purple)', fmtMoney(unpaidInv), 'Pending Invoice', DB.invoices.filter(i=>i.status!=='Paid').length+' unpaid','down')}
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-head"><div><h3>Revenue — Last 7 Days</h3><div class="sub">Orders + repair invoices combined</div></div>
        <button class="link-btn" onclick="location.hash='#reports'">Full report</button></div>
        <div class="card-body"><canvas id="revChart" height="200"></canvas></div>
      </div>
      <div class="card">
        <div class="card-head"><div><h3>Repair Status</h3><div class="sub">${DB.orders.length} total jobs</div></div></div>
        <div class="card-body">
          <div class="chart-wrap" style="display:flex;justify-content:center"><canvas id="statusDonut" width="180" height="180"></canvas></div>
          <div class="legend" id="statusLegend"></div>
        </div>
      </div>
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-head"><div><h3>Recent Repair Jobs</h3><div class="sub">Latest intakes and their status</div></div>
        <button class="link-btn" onclick="location.hash='#orders'">View all</button></div>
        <div class="table-card" style="border:none;border-radius:0">
          <table><tbody>
          ${DB.orders.length ? DB.orders.slice(-5).reverse().map(o=>`
            <tr><td><div class="name-cell"><div class="avatar-sm">${initials(custName(o.customer))}</div>
              <div><div class="cell-strong">${custName(o.customer)}</div><div class="cell-muted">${escapeHtml((o.devices||[]).map(d=>d.device).filter(Boolean).join(', ') || '—')}</div></div></div></td>
              <td>${statusBadge(o.status)}</td><td class="cell-muted" style="text-align:right">${fmtDate(o.date)}</td></tr>`).join('') : '<tr><td colspan="3" class="cell-muted" style="padding:16px 4px">No repair jobs yet.</td></tr>'}
          </tbody></table>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><div><h3>Stock Alerts</h3><div class="sub">Items at or below reorder level</div></div>
        <button class="link-btn" onclick="location.hash='#lowstock'">View all</button></div>
        <div class="card-body">
          ${lowStockItems().length===0 ? `<p style="font-size:12.8px;color:var(--text-muted)">Nothing to reorder right now — stock levels are healthy.</p>` :
          `<div style="display:flex;flex-direction:column;gap:12px">
          ${lowStockItems().slice(0,5).map(p=>`
            <div style="display:flex;align-items:center;gap:12px">
              <div class="avatar-sm" style="background:linear-gradient(135deg,#FF6A3D,#F04438)">${icon('box')}</div>
              <div style="flex:1;min-width:0"><div class="cell-strong" style="font-size:13px">${escapeHtml(p.name)}</div>
              <div class="cell-muted">${escapeHtml(catName(p.category))}</div></div>
              <span class="badge red">${p.stock} left</span>
            </div>`).join('')}</div>`}
        </div>
      </div>
    </div>
  `;
  drawRevenueChart();
  drawStatusDonut();
};
function kpiCard(iconName, color, value, label, trend, dir){
  return `<div class="kpi-card">
    <div class="top"><div class="kpi-icon" style="background:${color}">${icon(iconName)}</div>
    <div class="kpi-trend ${dir}">${icon(dir==='up'?'up':'down')} ${trend}</div></div>
    <div class="kpi-value">${value}</div><div class="kpi-label">${label}</div></div>`;
}
function drawRevenueChart(){
  const cv = document.getElementById('revChart'); if(!cv) return;
  const ctx = cv.getContext('2d');
  const dpr = window.devicePixelRatio||1;
  const w = cv.clientWidth||500, h=200;
  cv.width = w*dpr; cv.height = h*dpr; ctx.scale(dpr,dpr);
  const days = [...Array(7)].map((_,i)=>daysAgo(6-i));
  const vals = days.map(d=>{
    const o = DB.orders.filter(x=>x.date===d && x.status==='Completed').reduce((s,x)=>s+Number(x.total),0);
    const inv = DB.invoices.filter(x=>x.date===d && x.status==='Paid').reduce((s,x)=>s+Number(x.amount),0);
    return o+inv;
  });
  const max = Math.max(...vals, 1000);
  const padL=10, padB=24, padT=14, chartW = w-padL-14, chartH = h-padB-padT;
  ctx.strokeStyle = 'rgba(120,125,150,.15)'; ctx.lineWidth=1;
  for(let i=0;i<=3;i++){ const y = padT + chartH/3*i; ctx.beginPath(); ctx.moveTo(padL,y); ctx.lineTo(w-14,y); ctx.stroke(); }
  const stepX = chartW/(vals.length-1);
  const pts = vals.map((v,i)=>[padL+i*stepX, padT+chartH-(v/max)*chartH]);
  const grad = ctx.createLinearGradient(0,padT,0,padT+chartH);
  grad.addColorStop(0,'rgba(46,94,255,.35)'); grad.addColorStop(1,'rgba(139,47,224,.02)');
  ctx.beginPath(); ctx.moveTo(pts[0][0],padT+chartH);
  pts.forEach(p=>ctx.lineTo(p[0],p[1])); ctx.lineTo(pts[pts.length-1][0],padT+chartH); ctx.closePath();
  ctx.fillStyle = grad; ctx.fill();
  const lgrad = ctx.createLinearGradient(0,0,w,0); lgrad.addColorStop(0,'#2E5EFF'); lgrad.addColorStop(1,'#8B2FE0');
  ctx.beginPath(); pts.forEach((p,i)=> i===0?ctx.moveTo(p[0],p[1]):ctx.lineTo(p[0],p[1]));
  ctx.strokeStyle = lgrad; ctx.lineWidth=2.6; ctx.lineJoin='round'; ctx.stroke();
  pts.forEach(p=>{ ctx.beginPath(); ctx.arc(p[0],p[1],3.4,0,7); ctx.fillStyle='#fff'; ctx.fill(); ctx.lineWidth=2; ctx.strokeStyle='#2E5EFF'; ctx.stroke(); });
  ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-faint')||'#9AA0AE';
  ctx.font = '10.5px Inter'; ctx.textAlign='center';
  days.forEach((d,i)=>{ ctx.fillText(new Date(d).toLocaleDateString('en-GB',{weekday:'short'}), padL+i*stepX, h-6); });
}
function drawStatusDonut(){
  const cv = document.getElementById('statusDonut'); if(!cv) return;
  const ctx = cv.getContext('2d');
  const statuses = DB.lists.orderStatuses;
  const colorPalette = ['#8B2FE0','#F5A623','#FF6A3D','#2E5EFF','#17B26A','#0EA5E9','#D946EF','#F04438'];
  const colors = {}; statuses.forEach((s,i)=> colors[s] = colorPalette[i % colorPalette.length]);
  const counts = statuses.map(s=>DB.orders.filter(o=>o.status===s).length);
  const total = counts.reduce((a,b)=>a+b,0) || 1;
  let start = -Math.PI/2;
  const cx=90, cy=90, rOuter=78, rInner=50;
  ctx.clearRect(0,0,180,180);
  statuses.forEach((s,i)=>{
    const val = counts[i]; if(val===0) return;
    const angle = (val/total)*Math.PI*2;
    ctx.beginPath(); ctx.arc(cx,cy,rOuter,start,start+angle); ctx.arc(cx,cy,rInner,start+angle,start,true); ctx.closePath();
    ctx.fillStyle = colors[s]; ctx.fill();
    start += angle;
  });
  document.getElementById('statusLegend').innerHTML = statuses.map(s=>{
    const n = DB.orders.filter(o=>o.status===s).length;
    return `<div class="legend-item"><span class="legend-dot" style="background:${colors[s]}"></span>${s} (${n})</div>`;
  }).join('');
}

RENDERERS.products = function(c){
  crudPage(c, {
    collection:'products', title:'Stock Items', singular:'Stock Item', prefix:'PRD', newLabel:'Add Stock Item', enableExcel:true,
    searchKeys:['name'],
    filters:[{key:'category', label:'Category', manageKey:'itemcats', options:DB.categories.filter(x=>x.type==='Product').map(x=>({value:x.id,label:x.name}))}],
    itemLabel:p=>p.name,
    columns:[
      {label:'Item', render:p=>`<div class="name-cell"><div class="avatar-sm">${icon('box')}</div><div><div class="cell-strong">${escapeHtml(p.name)}</div></div></div>`},
      {label:'Category', render:p=>`<span class="badge purple">${escapeHtml(catName(p.category))}</span>`},
      {label:'Price', render:p=>`<span class="cell-strong">${fmtMoney(p.price)}</span>`},
      {label:'Cost', render:p=>`<span class="cell-muted">${fmtMoney(p.cost)}</span>`},
      {label:'Stock', render:p=>`<span class="badge ${Number(p.stock)<=Number(p.threshold)?'red':'green'}">${p.stock} pcs</span>`},
    ],
    fields:[
      {key:'name', label:'Item Name', full:true},
      {key:'category', label:'Category', type:'select', manageKey:'itemcats', options:DB.categories.filter(x=>x.type==='Product').map(x=>({value:x.id,label:x.name}))},
      {key:'price', label:'Sale Price (Rs.)', type:'number'},
      {key:'cost', label:'Cost Price (Rs.)', type:'number'},
      {key:'stock', label:'Current Stock', type:'number'},
      {key:'threshold', label:'Low Stock Threshold', type:'number'},
    ],
    validate:d=> !d.name ? 'Item name is required' : null,
  });
};

RENDERERS.suppliers = function(c){
  function draw(){
    try{
      if(!Array.isArray(DB.suppliers)) DB.suppliers = [];
      if(!Array.isArray(DB.purchases)) DB.purchases = [];
      DB.suppliers = DB.suppliers.filter(s=>s && s.id);
      DB.purchases = DB.purchases.filter(p=>p && p.id).map(p=>{ if(!Array.isArray(p.items)) p.items = []; return p; });
      renderSuppliersListTab(c);
    }catch(err){
      console.error('Suppliers page failed to render:', err);
      c.innerHTML = `<div class="empty-state">
        <div class="icon-wrap">${icon('alert')}</div>
        <h4>This page didn't load correctly</h4>
        <p>Please reload the page (Ctrl/Cmd+Shift+R for a hard refresh). If it keeps happening, contact your administrator.</p>
        <button class="btn btn-outline" onclick="location.reload()">${icon('clock')} Reload Page</button>
      </div>`;
    }
  }
  draw();
};

RENDERERS.ledger = function(c){
  function draw(){
    try{
      if(!Array.isArray(DB.suppliers)) DB.suppliers = [];
      if(!Array.isArray(DB.purchases)) DB.purchases = [];
      DB.suppliers = DB.suppliers.filter(s=>s && s.id);
      DB.purchases = DB.purchases.filter(p=>p && p.id).map(p=>{ if(!Array.isArray(p.items)) p.items = []; return p; });
      const payable = totalPayableToSuppliers();
      const dueCount = purchasesWithBalanceDueCount();
      c.innerHTML = `
        <div class="kpi-grid" style="grid-template-columns:repeat(2,1fr)">
          ${kpiCard('wallet','var(--red)', fmtMoney(payable), 'Total Payable to Suppliers', DB.suppliers.length+' supplier(s)', payable>0?'down':'up')}
          ${kpiCard('alert','var(--orange)', dueCount, 'Purchases With Balance Due', dueCount>0?'Needs settlement':'All settled', dueCount>0?'down':'up')}
        </div>
        <div class="subtabs" id="ledgerSubtabs">
          <button type="button" class="subtab-btn ${ledgerTab==='ledger'?'active':''}" data-tab="ledger">${icon('file')} Supplier Ledger (Purchases)</button>
          <button type="button" class="subtab-btn ${ledgerTab==='newpurchase'?'active':''}" data-tab="newpurchase">${icon('cart')} New Purchase (Cart)</button>
        </div>
        <div id="ledgerTabBody"></div>
      `;
      c.querySelectorAll('.subtab-btn').forEach(b=>{ b.onclick = ()=>{ ledgerTab = b.dataset.tab; draw(); }; });
      const body = c.querySelector('#ledgerTabBody');
      if(ledgerTab==='newpurchase') renderNewPurchaseTab(body);
      else renderSupplierLedgerTab(body);
    }catch(err){
      console.error('Ledger page failed to render:', err);
      c.innerHTML = `<div class="empty-state">
        <div class="icon-wrap">${icon('alert')}</div>
        <h4>This page didn't load correctly</h4>
        <p>Please reload the page (Ctrl/Cmd+Shift+R for a hard refresh). If it keeps happening, contact your administrator.</p>
        <button class="btn btn-outline" onclick="location.reload()">${icon('clock')} Reload Page</button>
      </div>`;
    }
  }
  draw();
};

function renderSuppliersListTab(container){
  crudPage(container, {
    collection:'suppliers', title:'Suppliers', singular:'Supplier', prefix:'SUP', newLabel:'Add Supplier', enableExcel:true,
    searchKeys:['name','company','phone','city'],
    itemLabel:s=>s.name,
    columns:[
      {label:'Name', render:s=>`<div class="name-cell"><div class="avatar-sm">${initials(s.name)}</div><div class="cell-strong">${escapeHtml(s.name)}</div></div>`},
      {label:'Company', render:s=>escapeHtml(s.company||'—')},
      {label:'Phone', render:s=>escapeHtml(s.phone||'—')},
      {label:'CNIC', render:s=>escapeHtml(s.cnic||'—')},
      {label:'City', render:s=>escapeHtml(s.city||'—')},
      {label:'Contact Person', render:s=>escapeHtml(s.contactPerson||'—')},
      {label:'Payable', render:s=>{ const bal = supplierPayable(s.id); return `<span class="cell-strong" style="${bal>0?'color:var(--red)':''}">${fmtMoney(bal)}</span>`; }},
    ],
    fields:[
      {key:'name', label:'Supplier Name', full:true},
      {key:'company', label:'Company Name'},
      {key:'contactPerson', label:'Contact Person'},
      {key:'phone', label:'Phone', placeholder:'03XX-XXXXXXX'},
      {key:'whatsapp', label:'WhatsApp Number (optional)', placeholder:'03XX-XXXXXXX'},
      {key:'cnic', label:'CNIC / ID Card No. (optional)', placeholder:'XXXXX-XXXXXXX-X'},
      {key:'city', label:'City'},
      {key:'address', label:'Address', full:true},
      {key:'openingBalance', label:'Opening Balance (Rs.) — previous due before using this system', type:'number', placeholder:'0'},
      {key:'notes', label:'Notes', type:'textarea', full:true},
    ],
    validate:d=>{
      if(!String(d.name||'').trim()) return 'Supplier name is required';
      if(String(d.phone||'').trim() && !pkPhoneValid(d.phone)) return 'Enter a valid phone number as 0300-1234567 (4 digits, dash, 7 digits)';
      if(String(d.whatsapp||'').trim() && !pkPhoneValid(d.whatsapp)) return 'Enter a valid WhatsApp number as 0300-1234567 (4 digits, dash, 7 digits)';
      return null;
    },
    afterRender:()=> { bindPhoneMask('f_phone'); bindPhoneMask('f_whatsapp'); },
    canDelete:s=> !DB.purchases.some(p=>p.supplier===s.id),
    canDeleteMsg:'Cannot delete a supplier with purchase records — remove their ledger entries first.',
  });
}

function renderSupplierLedgerTab(container){
  crudPage(container, {
    collection:'purchases', title:'Supplier Ledger', singular:'Purchase', prefix:'PUR', newLabel:'Record Purchase', enableExcel:true, enableViewDetail:true,
    searchKeys:['id'], getSearchVal:(r,k)=> k==='id' ? supplierName(r.supplier)+' '+r.id : r[k],
    filters:[{key:'status', label:'Status', options:['Paid','Partial','Unpaid']}],
    itemLabel:p=>supplierName(p.supplier)+' — '+p.id,
    columns:[
      {label:'Purchase ID', render:p=>`<span class="cell-mono">${p.id}</span>`},
      {label:'Ref / Invoice #', render:p=>escapeHtml(p.invoiceNo||'—')},
      {label:'Supplier', render:p=>`<div class="name-cell"><div class="avatar-sm">${initials(supplierName(p.supplier))}</div><span class="cell-strong">${escapeHtml(supplierName(p.supplier))}</span></div>`},
      {label:'Items', render:p=>purchaseItemsSummary(p)},
      {label:'Total', render:p=>`<span class="cell-strong">${fmtMoney(p.total)}</span>`},
      {label:'Paid', render:p=>`<span class="cell-muted">${fmtMoney(p.paid)}</span>`},
      {label:'Balance', render:p=>{ const bal = purchaseBalance(p); return `<span class="${bal>0?'cell-strong':'cell-muted'}" style="${bal>0?'color:var(--red)':''}">${fmtMoney(bal)}</span>`; }},
      {label:'Payment Method', render:p=>escapeHtml(p.paymentMethod||'—')},
      {label:'Status', render:p=>statusBadge(p.status)},
      {label:'Date', render:p=>`<span class="cell-muted">${fmtDate(p.date)}</span>`},
      {label:'Due Date', render:p=>p.dueDate?`<span class="cell-muted">${fmtDate(p.dueDate)}</span>`:'—'},
    ],
    fields:[
      {key:'supplier', label:'Supplier Name', type:'combo', matchCollection:'suppliers', placeholder:'Type or select supplier name', options:DB.suppliers.map(x=>({value:x.id,label:x.name}))},
      {key:'invoiceNo', label:'Invoice / Bill # (optional)', placeholder:'e.g. INV-2451'},
      {key:'items', label:'Products Purchased', type:'repeater', itemName:'Item', subFields:[
        {key:'product', label:'Stock Item (leave blank for a service/custom charge)', type:'select', options:[{value:'',label:'— Service / Custom Charge —'}].concat(DB.products.map(p=>({value:p.id, label:`${p.name} (current stock: ${p.stock})`})))},
        {key:'label', label:'Description (for a service/custom charge)', placeholder:'e.g. Delivery / freight charge'},
        {key:'qty', label:'Quantity', type:'number', placeholder:'1'},
        {key:'cost', label:'Buying Price / Unit (Rs.)', type:'number', placeholder:'0'},
      ]},
      {key:'total', label:'Total Bill Amount (Rs.)', type:'number'},
      {key:'paid', label:'Amount Paid (Rs.)', type:'number', placeholder:'0'},
      {key:'paymentMethod', label:'Payment Method (optional)', type:'select', options:[{value:'',label:'— Select —'}].concat(PAYMENT_METHODS.map(m=>({value:m,label:m})))},
      {key:'date', label:'Purchase Date', type:'date', default:todayStr()},
      {key:'dueDate', label:'Due Date (optional)', type:'date'},
      {key:'notes', label:'Notes', type:'textarea'},
    ],
    validate:d=>{
      if(!String(d.supplier||'').trim()) return 'Supplier name is required';
      const items = (d.items||[]).filter(it=>(it.product || String(it.label||'').trim()) && Number(it.qty)>0);
      if(!items.length) return 'Add at least one item or service/custom charge to this purchase';
      return null;
    },
    afterRender:()=> bindPurchaseLiveTotal(),
    wideForm:true,
    onSaved: async (purchase, isEdit, prevSnapshot)=>{ await reconcilePurchaseStock(purchase, prevSnapshot); purchase.status = purchaseStatus(purchase); },
    onDelete: async (purchase)=>{ await restorePurchaseStock(purchase); },
  });
}

function renderNewPurchaseTab(container){
  let cart = [];
  function cartTotal(){ return cart.reduce((s,it)=> s + Number(it.qty)*Number(it.cost), 0); }
  function draw(){
    const total = cartTotal();
    container.innerHTML = `
      <div class="section-head"><div><h2>New Purchase</h2><div class="sub">Add stock items to the cart, then record the bill against a supplier.</div></div></div>
      <div class="table-card" style="padding:20px">
        <div class="form-grid">
          <div class="field"><label>Supplier</label>
            <input type="text" id="npSupplier" list="npSupplierList" placeholder="Type or select supplier name" autocomplete="off">
            <datalist id="npSupplierList">${DB.suppliers.map(s=>`<option value="${escapeHtml(s.name)}">`).join('')}</datalist>
          </div>
          <div class="field"><label>Invoice / Bill # (optional)</label><input type="text" id="npInvoiceNo" placeholder="e.g. INV-2451"></div>
          <div class="field"><label>Purchase Date</label><input type="date" id="npDate" value="${todayStr()}"></div>
        </div>
        <div class="cart-add-row" style="margin-top:6px">
          <div class="field"><label>Stock Item</label><select id="npProduct">
            <option value="">— Select Stock Item —</option>
            ${DB.products.map(p=>`<option value="${p.id}" data-cost="${p.cost||0}">${escapeHtml(p.name)} (stock: ${p.stock})</option>`).join('')}
          </select></div>
          <div class="field"><label>Quantity</label><input type="number" id="npQty" value="1" min="1"></div>
          <div class="field"><label>Buying Price / Unit</label><input type="number" id="npCost" placeholder="0"></div>
          <button class="btn btn-primary" id="npAddBtn" type="button">${icon('plus')} Add to Cart</button>
        </div>
        <div class="cart-add-row" style="margin-top:10px">
          <div class="field"><label>Service / Custom Charge</label><input type="text" id="npServiceLabel" placeholder="e.g. Delivery / freight charge"></div>
          <div class="field"><label>Quantity</label><input type="number" id="npServiceQty" value="1" min="1"></div>
          <div class="field"><label>Price</label><input type="number" id="npServicePrice" placeholder="0"></div>
          <button class="btn btn-outline" id="npAddServiceBtn" type="button">${icon('plus')} Add Charge</button>
        </div>
        <div style="margin-top:20px">
          ${cart.length===0 ? `<div class="empty-state"><div class="icon-wrap">${icon('cart')}</div><h4>Cart is empty</h4><p>Add stock items or services/charges above to start a new purchase.</p></div>` : `
          <table><thead><tr><th>Item / Service</th><th>Qty</th><th>Buying Price</th><th>Subtotal</th><th></th></tr></thead>
          <tbody>${cart.map((it,i)=>`<tr>
            <td class="cell-strong">${escapeHtml(it.product ? prodName(it.product) : (it.label||'Service'))}</td>
            <td>${it.qty}</td><td>${fmtMoney(it.cost)}</td>
            <td class="cell-strong">${fmtMoney(Number(it.qty)*Number(it.cost))}</td>
            <td style="text-align:right"><button class="mini-btn danger" data-rm="${i}" title="Remove" aria-label="Remove item">${icon('trash')}</button></td>
          </tr>`).join('')}</tbody></table>`}
        </div>
        ${cart.length>0 ? `
        <div class="form-grid" style="margin-top:20px;border-top:1px solid var(--border);padding-top:18px">
          <div class="field"><label>Total Bill Amount</label><input type="text" value="${fmtMoney(total)}" disabled></div>
          <div class="field"><label>Amount Paid (Rs.)</label><input type="number" id="npPaid" placeholder="0" value="0"></div>
          <div class="field"><label>Payment Method (optional)</label><select id="npPaymentMethod"><option value="">— Select —</option>${PAYMENT_METHODS.map(m=>`<option value="${m}">${m}</option>`).join('')}</select></div>
          <div class="field"><label>Due Date (optional)</label><input type="date" id="npDueDate"></div>
          <div class="field full"><label>Notes</label><textarea id="npNotes" placeholder="Optional notes about this purchase"></textarea></div>
        </div>
        <div class="head-actions" style="justify-content:flex-end;margin-top:14px">
          <button class="btn btn-outline" id="npClearBtn" type="button">${icon('x')} Clear Cart</button>
          <button class="btn btn-primary" id="npSaveBtn" type="button">${icon('check')} Save Purchase</button>
        </div>` : ''}
      </div>
    `;
    const prodSel = container.querySelector('#npProduct');
    const costInput = container.querySelector('#npCost');
    if(prodSel) prodSel.onchange = ()=>{
      const opt = prodSel.selectedOptions[0];
      if(opt && costInput) costInput.value = opt.dataset.cost || '';
    };
    const addBtn = container.querySelector('#npAddBtn');
    if(addBtn) addBtn.onclick = ()=>{
      const pid = prodSel.value;
      const qty = Number(container.querySelector('#npQty').value)||0;
      const cost = Number(costInput.value)||0;
      if(!pid){ toast('Select a stock item','error'); return; }
      if(qty<=0){ toast('Enter a valid quantity','error'); return; }
      const existing = cart.find(it=>it.product===pid);
      if(existing){ existing.qty = Number(existing.qty)+qty; existing.cost = cost; }
      else cart.push({product:pid, qty, cost});
      draw();
    };
    const addServiceBtn = container.querySelector('#npAddServiceBtn');
    if(addServiceBtn) addServiceBtn.onclick = ()=>{
      const label = (container.querySelector('#npServiceLabel').value||'').trim();
      const qty = Number(container.querySelector('#npServiceQty').value)||0;
      const cost = Number(container.querySelector('#npServicePrice').value)||0;
      if(!label){ toast('Enter a description for the service/charge','error'); return; }
      if(qty<=0){ toast('Enter a valid quantity','error'); return; }
      cart.push({product:'', label, qty, cost});
      draw();
    };
    container.querySelectorAll('[data-rm]').forEach(b=>{ b.onclick = ()=>{ cart.splice(+b.dataset.rm,1); draw(); }; });
    const clearBtn = container.querySelector('#npClearBtn');
    if(clearBtn) clearBtn.onclick = ()=>{ cart = []; draw(); };
    const saveBtn = container.querySelector('#npSaveBtn');
    if(saveBtn) saveBtn.onclick = async ()=>{
      const supplierInput = container.querySelector('#npSupplier');
      const typed = (supplierInput.value||'').trim();
      if(!typed){ toast('Supplier name is required','error'); return; }
      if(!cart.length){ toast('Add at least one item to the cart','error'); return; }
      saveBtn.disabled = true; saveBtn.textContent = 'Saving…';
      try{
        let supplier = DB.suppliers.find(s=>s.name.toLowerCase()===typed.toLowerCase());
        if(!supplier){ supplier = await Api.suppliers.create({name:typed}); DB.suppliers.push(supplier); }
        const paid = Number(container.querySelector('#npPaid').value)||0;
        const notes = container.querySelector('#npNotes').value||'';
        const date = container.querySelector('#npDate').value || todayStr();
        const invoiceNo = container.querySelector('#npInvoiceNo').value||'';
        const dueDate = container.querySelector('#npDueDate').value||'';
        const paymentMethod = container.querySelector('#npPaymentMethod').value||'';
        const payload = {supplier:supplier.id, invoiceNo, items:cart.map(it=>({product:it.product||'', label:it.label||'', qty:Number(it.qty), cost:Number(it.cost)})), total:cartTotal(), paid, paymentMethod, date, dueDate, notes};
        const purchase = await Api.purchases.create(payload);
        purchase.status = purchaseStatus(purchase);
        DB.purchases.push(purchase);
        await reconcilePurchaseStock(purchase, null);
        log(`Purchase recorded: ${supplier.name} — ${purchase.id}`, 'purchases');
        save();
        toast('Purchase recorded successfully');
        cart = [];
        ledgerTab = 'ledger';
        RENDERERS.ledger(document.getElementById('content'));
      }catch(e){
        toast(e.message||'Could not save purchase','error');
        saveBtn.disabled = false; saveBtn.textContent = icon('check')+' Save Purchase';
      }
    };
  }
  draw();
}

RENDERERS.shops = function(c){
  function draw(){
    try{
      if(!Array.isArray(DB.shops)) DB.shops = [];
      if(!Array.isArray(DB.shopSales)) DB.shopSales = [];
      DB.shops = DB.shops.filter(s=>s && s.id);
      DB.shopSales = DB.shopSales.filter(s=>s && s.id).map(s=>{ if(!Array.isArray(s.items)) s.items = []; return s; });
      renderShopsListTab(c);
    }catch(err){
      console.error('Shops page failed to render:', err);
      c.innerHTML = `<div class="empty-state">
        <div class="icon-wrap">${icon('alert')}</div>
        <h4>This page didn't load correctly</h4>
        <p>Please reload the page (Ctrl/Cmd+Shift+R for a hard refresh). If it keeps happening, contact your administrator.</p>
        <button class="btn btn-outline" onclick="location.reload()">${icon('clock')} Reload Page</button>
      </div>`;
    }
  }
  draw();
};

RENDERERS.shopledger = function(c){
  function draw(){
    try{
      if(!Array.isArray(DB.shops)) DB.shops = [];
      if(!Array.isArray(DB.shopSales)) DB.shopSales = [];
      DB.shops = DB.shops.filter(s=>s && s.id);
      DB.shopSales = DB.shopSales.filter(s=>s && s.id).map(s=>{ if(!Array.isArray(s.items)) s.items = []; return s; });
      const receivable = totalReceivableFromShops();
      const dueCount = shopSalesWithBalanceDueCount();
      c.innerHTML = `
        <div class="kpi-grid" style="grid-template-columns:repeat(2,1fr)">
          ${kpiCard('wallet','var(--green)', fmtMoney(receivable), 'Total Receivable from Shops', DB.shops.length+' shop(s)', receivable>0?'up':'down')}
          ${kpiCard('alert','var(--orange)', dueCount, 'Transactions With Balance Due', dueCount>0?'Needs collection':'All settled', dueCount>0?'down':'up')}
        </div>
        <div class="subtabs" id="shopLedgerSubtabs">
          <button type="button" class="subtab-btn ${shopLedgerTab==='ledger'?'active':''}" data-tab="ledger">${icon('file')} Shop Ledger</button>
          <button type="button" class="subtab-btn ${shopLedgerTab==='newtxn'?'active':''}" data-tab="newtxn">${icon('cart')} New Transaction (Cart)</button>
        </div>
        <div id="shopLedgerTabBody"></div>
      `;
      c.querySelectorAll('.subtab-btn').forEach(b=>{ b.onclick = ()=>{ shopLedgerTab = b.dataset.tab; draw(); }; });
      const body = c.querySelector('#shopLedgerTabBody');
      if(shopLedgerTab==='newtxn') renderNewShopTransactionTab(body);
      else renderShopLedgerTab(body);
    }catch(err){
      console.error('Shop Ledger page failed to render:', err);
      c.innerHTML = `<div class="empty-state">
        <div class="icon-wrap">${icon('alert')}</div>
        <h4>This page didn't load correctly</h4>
        <p>Please reload the page (Ctrl/Cmd+Shift+R for a hard refresh). If it keeps happening, contact your administrator.</p>
        <button class="btn btn-outline" onclick="location.reload()">${icon('clock')} Reload Page</button>
      </div>`;
    }
  }
  draw();
};

function renderShopsListTab(container){
  crudPage(container, {
    collection:'shops', title:'Shops', singular:'Shop', prefix:'SHP', newLabel:'Add Shop', enableExcel:true,
    searchKeys:['name','ownerName','phone','city'],
    itemLabel:s=>s.name,
    columns:[
      {label:'Shop Name', render:s=>`<div class="name-cell"><div class="avatar-sm">${initials(s.name)}</div><div class="cell-strong">${escapeHtml(s.name)}</div></div>`},
      {label:'Owner / Contact', render:s=>escapeHtml(s.ownerName||'—')},
      {label:'Phone', render:s=>escapeHtml(s.phone||'—')},
      {label:'CNIC', render:s=>escapeHtml(s.cnic||'—')},
      {label:'City', render:s=>escapeHtml(s.city||'—')},
      {label:'Receivable', render:s=>{ const bal = shopReceivable(s.id); return `<span class="cell-strong" style="${bal>0?'color:var(--red)':''}">${fmtMoney(bal)}</span>`; }},
    ],
    fields:[
      {key:'name', label:'Shop Name', full:true},
      {key:'ownerName', label:'Owner / Contact Person'},
      {key:'phone', label:'Phone', placeholder:'03XX-XXXXXXX'},
      {key:'whatsapp', label:'WhatsApp Number (optional)', placeholder:'03XX-XXXXXXX'},
      {key:'cnic', label:'CNIC / ID Card No. (optional)', placeholder:'XXXXX-XXXXXXX-X'},
      {key:'city', label:'City'},
      {key:'address', label:'Address', full:true},
      {key:'openingBalance', label:'Opening Balance (Rs.) — previous due before using this system', type:'number', placeholder:'0'},
      {key:'notes', label:'Notes', type:'textarea', full:true},
    ],
    validate:d=>{
      if(!String(d.name||'').trim()) return 'Shop name is required';
      if(String(d.phone||'').trim() && !pkPhoneValid(d.phone)) return 'Enter a valid phone number as 0300-1234567 (4 digits, dash, 7 digits)';
      if(String(d.whatsapp||'').trim() && !pkPhoneValid(d.whatsapp)) return 'Enter a valid WhatsApp number as 0300-1234567 (4 digits, dash, 7 digits)';
      return null;
    },
    afterRender:()=> { bindPhoneMask('f_phone'); bindPhoneMask('f_whatsapp'); },
    canDelete:s=> !DB.shopSales.some(x=>x.shop===s.id),
    canDeleteMsg:'Cannot delete a shop with ledger records — remove their transactions first.',
  });
}

function renderShopLedgerTab(container){
  crudPage(container, {
    collection:'shopSales', title:'Shop Ledger', singular:'Transaction', prefix:'SHS', newLabel:'Record Transaction', enableExcel:true, enableViewDetail:true,
    searchKeys:['id'], getSearchVal:(r,k)=> k==='id' ? shopName(r.shop)+' '+r.id : r[k],
    filters:[{key:'status', label:'Status', options:['Paid','Partial','Unpaid']}],
    itemLabel:s=>shopName(s.shop)+' — '+s.id,
    columns:[
      {label:'Transaction ID', render:s=>`<span class="cell-mono">${s.id}</span>`},
      {label:'Ref / Invoice #', render:s=>escapeHtml(s.invoiceNo||'—')},
      {label:'Shop', render:s=>`<div class="name-cell"><div class="avatar-sm">${initials(shopName(s.shop))}</div><span class="cell-strong">${escapeHtml(shopName(s.shop))}</span></div>`},
      {label:'Items / Services', render:s=>shopSaleItemsSummary(s)},
      {label:'Total', render:s=>`<span class="cell-strong">${fmtMoney(s.total)}</span>`},
      {label:'Paid', render:s=>`<span class="cell-muted">${fmtMoney(s.paid)}</span>`},
      {label:'Balance', render:s=>{ const bal = shopSaleBalance(s); return `<span class="${bal>0?'cell-strong':'cell-muted'}" style="${bal>0?'color:var(--red)':''}">${fmtMoney(bal)}</span>`; }},
      {label:'Payment Method', render:s=>escapeHtml(s.paymentMethod||'—')},
      {label:'Status', render:s=>statusBadge(s.status)},
      {label:'Date', render:s=>`<span class="cell-muted">${fmtDate(s.date)}</span>`},
      {label:'Due Date', render:s=>s.dueDate?`<span class="cell-muted">${fmtDate(s.dueDate)}</span>`:'—'},
    ],
    fields:[
      {key:'shop', label:'Shop Name', type:'combo', matchCollection:'shops', placeholder:'Type or select shop name', options:DB.shops.map(x=>({value:x.id,label:x.name}))},
      {key:'invoiceNo', label:'Invoice / Bill # (optional)', placeholder:'e.g. INV-2451'},
      {key:'items', label:'Items / Services Given', type:'repeater', itemName:'Item', subFields:[
        {key:'product', label:'Stock Item (leave blank for a service/custom charge)', type:'select', options:[{value:'',label:'— Service / Custom Charge —'}].concat(DB.products.map(p=>({value:p.id, label:`${p.name} (current stock: ${p.stock})`})))},
        {key:'label', label:'Description (for a service/custom charge)', placeholder:'e.g. Screen replacement service'},
        {key:'qty', label:'Quantity', type:'number', placeholder:'1'},
        {key:'price', label:'Price / Unit (Rs.)', type:'number', placeholder:'0'},
      ]},
      {key:'total', label:'Total Bill Amount (Rs.)', type:'number'},
      {key:'paid', label:'Amount Paid (Rs.)', type:'number', placeholder:'0'},
      {key:'paymentMethod', label:'Payment Method (optional)', type:'select', options:[{value:'',label:'— Select —'}].concat(PAYMENT_METHODS.map(m=>({value:m,label:m})))},
      {key:'date', label:'Transaction Date', type:'date', default:todayStr()},
      {key:'dueDate', label:'Due Date (optional)', type:'date'},
      {key:'notes', label:'Notes', type:'textarea'},
    ],
    validate:d=>{
      if(!String(d.shop||'').trim()) return 'Shop name is required';
      const items = (d.items||[]).filter(it=>(it.product || String(it.label||'').trim()) && Number(it.qty)>0);
      if(!items.length) return 'Add at least one item or service to this transaction';
      return null;
    },
    afterRender:()=> bindShopSaleLiveTotal(),
    wideForm:true,
    onSaved: async (sale, isEdit, prevSnapshot)=>{ await reconcileShopSaleStock(sale, prevSnapshot); sale.status = shopSaleStatus(sale); },
    onDelete: async (sale)=>{ await restoreShopSaleStock(sale); },
  });
}

function renderNewShopTransactionTab(container){
  let cart = [];
  function cartTotal(){ return cart.reduce((s,it)=> s + Number(it.qty)*Number(it.price), 0); }
  function draw(){
    const total = cartTotal();
    container.innerHTML = `
      <div class="section-head"><div><h2>New Transaction</h2><div class="sub">Add stock items or services to the cart, then record the bill against a shopkeeper.</div></div></div>
      <div class="table-card" style="padding:20px">
        <div class="form-grid">
          <div class="field"><label>Shop</label>
            <input type="text" id="nsShop" list="nsShopList" placeholder="Type or select shop name" autocomplete="off">
            <datalist id="nsShopList">${DB.shops.map(s=>`<option value="${escapeHtml(s.name)}">`).join('')}</datalist>
          </div>
          <div class="field"><label>Invoice / Bill # (optional)</label><input type="text" id="nsInvoiceNo" placeholder="e.g. INV-2451"></div>
          <div class="field"><label>Transaction Date</label><input type="date" id="nsDate" value="${todayStr()}"></div>
        </div>
        <div class="cart-add-row" style="margin-top:6px">
          <div class="field"><label>Stock Item</label><select id="nsProduct">
            <option value="">— Select Stock Item —</option>
            ${DB.products.map(p=>`<option value="${p.id}" data-price="${p.price||0}">${escapeHtml(p.name)} (stock: ${p.stock})</option>`).join('')}
          </select></div>
          <div class="field"><label>Quantity</label><input type="number" id="nsQty" value="1" min="1"></div>
          <div class="field"><label>Price / Unit</label><input type="number" id="nsPrice" placeholder="0"></div>
          <button class="btn btn-primary" id="nsAddBtn" type="button">${icon('plus')} Add to Cart</button>
        </div>
        <div class="cart-add-row" style="margin-top:10px">
          <div class="field"><label>Service / Custom Charge</label><input type="text" id="nsServiceLabel" placeholder="e.g. Screen replacement service"></div>
          <div class="field"><label>Quantity</label><input type="number" id="nsServiceQty" value="1" min="1"></div>
          <div class="field"><label>Price</label><input type="number" id="nsServicePrice" placeholder="0"></div>
          <button class="btn btn-outline" id="nsAddServiceBtn" type="button">${icon('plus')} Add Charge</button>
        </div>
        <div style="margin-top:20px">
          ${cart.length===0 ? `<div class="empty-state"><div class="icon-wrap">${icon('cart')}</div><h4>Cart is empty</h4><p>Add stock items or services above to start a new transaction.</p></div>` : `
          <table><thead><tr><th>Item / Service</th><th>Qty</th><th>Price</th><th>Subtotal</th><th></th></tr></thead>
          <tbody>${cart.map((it,i)=>`<tr>
            <td class="cell-strong">${escapeHtml(it.product ? prodName(it.product) : (it.label||'Service'))}</td>
            <td>${it.qty}</td><td>${fmtMoney(it.price)}</td>
            <td class="cell-strong">${fmtMoney(Number(it.qty)*Number(it.price))}</td>
            <td style="text-align:right"><button class="mini-btn danger" data-rm="${i}" title="Remove" aria-label="Remove item">${icon('trash')}</button></td>
          </tr>`).join('')}</tbody></table>`}
        </div>
        ${cart.length>0 ? `
        <div class="form-grid" style="margin-top:20px;border-top:1px solid var(--border);padding-top:18px">
          <div class="field"><label>Total Bill Amount</label><input type="text" value="${fmtMoney(total)}" disabled></div>
          <div class="field"><label>Amount Paid (Rs.)</label><input type="number" id="nsPaid" placeholder="0" value="0"></div>
          <div class="field"><label>Payment Method (optional)</label><select id="nsPaymentMethod"><option value="">— Select —</option>${PAYMENT_METHODS.map(m=>`<option value="${m}">${m}</option>`).join('')}</select></div>
          <div class="field"><label>Due Date (optional)</label><input type="date" id="nsDueDate"></div>
          <div class="field full"><label>Notes</label><textarea id="nsNotes" placeholder="Optional notes about this transaction"></textarea></div>
        </div>
        <div class="head-actions" style="justify-content:flex-end;margin-top:14px">
          <button class="btn btn-outline" id="nsClearBtn" type="button">${icon('x')} Clear Cart</button>
          <button class="btn btn-primary" id="nsSaveBtn" type="button">${icon('check')} Save Transaction</button>
        </div>` : ''}
      </div>
    `;
    const prodSel = container.querySelector('#nsProduct');
    const priceInput = container.querySelector('#nsPrice');
    if(prodSel) prodSel.onchange = ()=>{
      const opt = prodSel.selectedOptions[0];
      if(opt && priceInput) priceInput.value = opt.dataset.price || '';
    };
    const addBtn = container.querySelector('#nsAddBtn');
    if(addBtn) addBtn.onclick = ()=>{
      const pid = prodSel.value;
      const qty = Number(container.querySelector('#nsQty').value)||0;
      const price = Number(priceInput.value)||0;
      if(!pid){ toast('Select a stock item','error'); return; }
      if(qty<=0){ toast('Enter a valid quantity','error'); return; }
      const existing = cart.find(it=>it.product===pid);
      if(existing){ existing.qty = Number(existing.qty)+qty; existing.price = price; }
      else cart.push({product:pid, qty, price});
      draw();
    };
    const addServiceBtn = container.querySelector('#nsAddServiceBtn');
    if(addServiceBtn) addServiceBtn.onclick = ()=>{
      const label = (container.querySelector('#nsServiceLabel').value||'').trim();
      const qty = Number(container.querySelector('#nsServiceQty').value)||0;
      const price = Number(container.querySelector('#nsServicePrice').value)||0;
      if(!label){ toast('Enter a description for the service/charge','error'); return; }
      if(qty<=0){ toast('Enter a valid quantity','error'); return; }
      cart.push({product:'', label, qty, price});
      draw();
    };
    container.querySelectorAll('[data-rm]').forEach(b=>{ b.onclick = ()=>{ cart.splice(+b.dataset.rm,1); draw(); }; });
    const clearBtn = container.querySelector('#nsClearBtn');
    if(clearBtn) clearBtn.onclick = ()=>{ cart = []; draw(); };
    const saveBtn = container.querySelector('#nsSaveBtn');
    if(saveBtn) saveBtn.onclick = async ()=>{
      const shopInput = container.querySelector('#nsShop');
      const typed = (shopInput.value||'').trim();
      if(!typed){ toast('Shop name is required','error'); return; }
      if(!cart.length){ toast('Add at least one item or service to the cart','error'); return; }
      saveBtn.disabled = true; saveBtn.textContent = 'Saving…';
      try{
        let shop = DB.shops.find(s=>s.name.toLowerCase()===typed.toLowerCase());
        if(!shop){ shop = await Api.shops.create({name:typed}); DB.shops.push(shop); }
        const paid = Number(container.querySelector('#nsPaid').value)||0;
        const notes = container.querySelector('#nsNotes').value||'';
        const date = container.querySelector('#nsDate').value || todayStr();
        const invoiceNo = container.querySelector('#nsInvoiceNo').value||'';
        const dueDate = container.querySelector('#nsDueDate').value||'';
        const paymentMethod = container.querySelector('#nsPaymentMethod').value||'';
        const payload = {shop:shop.id, invoiceNo, items:cart.map(it=>({product:it.product||'', label:it.label||'', qty:Number(it.qty), price:Number(it.price)})), total:cartTotal(), paid, paymentMethod, date, dueDate, notes};
        const sale = await Api.shopSales.create(payload);
        sale.status = shopSaleStatus(sale);
        DB.shopSales.push(sale);
        await reconcileShopSaleStock(sale, null);
        log(`Shop transaction recorded: ${shop.name} — ${sale.id}`, 'shopsales');
        save();
        toast('Transaction recorded successfully');
        cart = [];
        shopLedgerTab = 'ledger';
        RENDERERS.shopledger(document.getElementById('content'));
      }catch(e){
        toast(e.message||'Could not save transaction','error');
        saveBtn.disabled = false; saveBtn.textContent = icon('check')+' Save Transaction';
      }
    };
  }
  draw();
}

RENDERERS.categories = function(c){
  crudPage(c, {
    collection:'categories', title:'Categories', singular:'Category', prefix:'CAT', newLabel:'Add Category', enableExcel:true,
    searchKeys:['name'],
    filters:[{key:'type', label:'Type', options:['Product','Repair']}],
    itemLabel:x=>x.name,
    columns:[
      {label:'Category', render:x=>`<div class="name-cell"><div class="avatar-sm" style="background:linear-gradient(135deg,#8B2FE0,#2E5EFF)">${icon('tag')}</div><div class="cell-strong">${escapeHtml(x.name)}</div></div>`},
      {label:'Type', render:x=>`<span class="badge ${x.type==='Product'?'blue':'orange'}">${x.type}</span>`},
      {label:'Items Linked', render:x=> x.type==='Product' ? DB.products.filter(p=>p.category===x.id).length : DB.orders.filter(o=>o.category===x.id).length},
    ],
    fields:[
      {key:'name', label:'Category Name', full:true},
      {key:'type', label:'Applies To', type:'select', options:[{value:'Product',label:'Stock / Product'},{value:'Repair',label:'Repair Type'}]},
    ],
    validate:(d, item)=>{
      if(!d.name) return 'Category name is required';
      const dup = DB.categories.some(x=> x.id!==(item&&item.id) && x.type===d.type && x.name.trim().toLowerCase()===String(d.name).trim().toLowerCase());
      if(dup) return 'A category with this name already exists for this type';
      return null;
    },
  });
};

RENDERERS.lowstock = function(c){
  const items = lowStockItems();
  c.innerHTML = `
    <div class="section-head"><div><h2>Low Stock</h2><div class="sub">${items.length} item(s) at or below their reorder threshold</div></div>
    <div class="head-actions"><button class="btn btn-outline" onclick="location.hash='#products'">${icon('box')} Go to Stock Items</button></div></div>
    <div class="table-card">
      ${items.length===0 ? `<div class="empty-state"><div class="icon-wrap">${icon('check')}</div><h4>Stock levels are healthy</h4><p>No items currently need reordering.</p></div>` : `
      <table><thead><tr><th>Item</th><th>Category</th><th>Current Stock</th><th>Threshold</th><th>Status</th><th style="text-align:right">Restock</th></tr></thead>
      <tbody>${items.map(p=>`
        <tr><td><div class="name-cell"><div class="avatar-sm" style="background:linear-gradient(135deg,#FF6A3D,#F04438)">${icon('alert')}</div>
          <div><div class="cell-strong">${escapeHtml(p.name)}</div></div></div></td>
          <td><span class="badge purple">${escapeHtml(catName(p.category))}</span></td>
          <td class="cell-strong">${p.stock} pcs</td><td class="cell-muted">${p.threshold} pcs</td>
          <td><span class="badge ${p.stock===0?'red':'yellow'}">${p.stock===0?'Out of Stock':'Low Stock'}</span></td>
          <td style="text-align:right"><button class="btn btn-sm btn-primary" data-restock="${p.id}">${icon('plus')} Restock</button></td>
        </tr>`).join('')}</tbody></table>`}
    </div>`;
  c.querySelectorAll('[data-restock]').forEach(b=>{
    b.onclick = ()=>{
      const p = DB.products.find(x=>x.id===b.dataset.restock);
      openModal('Restock — '+p.name, `
        <div class="form-grid">
          <div class="field full"><label>Add Quantity</label><input type="number" id="restockQty" value="20" min="1"></div>
        </div>`,
        `<button class="btn btn-outline" onclick="closeModal()">Cancel</button>
         <button class="btn btn-primary" id="doRestock">${icon('check')} Add to Stock</button>`);
      document.getElementById('doRestock').onclick = async ()=>{
        const q = Number(document.getElementById('restockQty').value||0);
        const btn = document.getElementById('doRestock');
        btn.disabled = true; btn.textContent = 'Saving…';
        try{
          const newStock = Number(p.stock)+q;
          const updated = await Api.products.update(p.id, {stock: newStock});
          Object.assign(p, updated);
          save(); log(`Restocked ${q} pcs of ${p.name}`, 'products', {kind:'stock-in', qty:q});
          closeModal(); toast('Stock updated'); route();
        }catch(e){
          toast(e.message||'Could not update stock','error');
          btn.disabled = false; btn.textContent = icon('check')+' Add to Stock';
        }
      };
    };
  });
};

function saleItemsSummary(s){
  const list = (s.items||[]).filter(it=>it.product);
  if(!list.length) return '—';
  const name = pid=> (DB.products.find(p=>p.id===pid)||{}).name || 'Unknown Item';
  const first = `${name(list[0].product)} × ${Number(list[0].qty)||0}`;
  return list.length===1 ? escapeHtml(first) : `${escapeHtml(first)} <span class="cell-muted">+${list.length-1} more</span>`;
}
function saleComputedTotal(items, discount){
  const sub = (items||[]).reduce((s,it)=> s + (Number(it.qty)||0)*(Number(it.price)||0), 0);
  return Math.max(0, sub - (Number(discount)||0));
}
function bindSaleLiveTotal(){
  const list = document.getElementById('f_items_list');
  const discountEl = document.getElementById('f_discount');
  const totalEl = document.getElementById('f_total');
  if(!list || !totalEl) return;
  function recalc(){
    const rows = Array.from(list.children).map(b=>({
      qty: Number((b.querySelector('[data-key="qty"]')||{}).value||0),
      price: Number((b.querySelector('[data-key="price"]')||{}).value||0),
    }));
    totalEl.value = saleComputedTotal(rows, discountEl?discountEl.value:0);
  }
  function bindRow(block){
    const prodSel = block.querySelector('[data-key="product"]');
    const priceInput = block.querySelector('[data-key="price"]');
    const qtyInput = block.querySelector('[data-key="qty"]');
    if(prodSel) prodSel.addEventListener('change', ()=>{
      const prod = DB.products.find(p=>p.id===prodSel.value);
      if(prod && priceInput && !priceInput.value) priceInput.value = prod.price;
      recalc();
    });
    if(priceInput) priceInput.addEventListener('input', recalc);
    if(qtyInput) qtyInput.addEventListener('input', recalc);
  }
  Array.from(list.children).forEach(bindRow);
  const addBtn = document.getElementById('f_items_addbtn');
  if(addBtn) addBtn.addEventListener('click', ()=> setTimeout(()=>{
    const last = list.children[list.children.length-1];
    if(last) bindRow(last);
    recalc();
  }, 0));
  list.querySelectorAll('.device-remove').forEach(btn=> btn.addEventListener('click', ()=> setTimeout(recalc, 0)));
  if(discountEl) discountEl.addEventListener('input', recalc);
  recalc();
}
function saleQtyByProduct(items){
  const map = {};
  (items||[]).forEach(it=>{
    const q = Number(it.qty)||0;
    if(it.product && q>0) map[it.product] = (map[it.product]||0) + q;
  });
  return map;
}
function saleStockOptions(){
  return [{value:'',label:'— Select Stock Item —'}].concat(DB.products.map(p=>({value:p.id, label:`${p.name} (${p.stock} in stock) — ${fmtMoney(p.price)}`})));
}
// Deducts sold quantities from Stock Items. On edit, only the difference vs the
// previously deducted quantities is applied, so stock never gets deducted twice.
async function reconcileSaleStock(sale, prevSnapshot){
  const cachedStock = {};
  DB.products.forEach(p=>{ cachedStock[p.id] = Number(p.stock)||0; });
  let fresh = null;
  try{ fresh = await Api.products.list(); }catch(e){}
  if(fresh) DB.products = fresh;

  const prevWasDeducted = !!(prevSnapshot && prevSnapshot._stockDeducted);
  const prevQty = prevWasDeducted ? saleQtyByProduct(prevSnapshot._deductedItems) : {};
  const newQty = saleQtyByProduct(sale.items);
  const ids = new Set(Object.keys(prevQty).concat(Object.keys(newQty)));
  const touched = [], short = [];
  let backendHandled = false;

  ids.forEach(id=>{
    const prod = DB.products.find(p=>p.id===id);
    if(!prod) return;
    const delta = (newQty[id]||0) - (prevQty[id]||0);   // > 0 : more sold, < 0 : less sold
    if(!delta) return;
    // If the server already deducted this sale on its own, don't deduct again.
    if(!prevWasDeducted && fresh && (id in cachedStock) && Number(prod.stock) <= cachedStock[id] - delta){
      backendHandled = true; return;
    }
    const before = Number(prod.stock)||0;
    if(delta>0 && before < delta) short.push(prod.name);
    prod.stock = Math.max(0, before - delta);
    touched.push(prod);
  });

  if(!backendHandled){
    sale._stockDeducted = true;
    sale._deductedItems = Object.keys(newQty).map(id=>({product:id, qty:newQty[id]}));
    Api.sales.update(sale.id, {_stockDeducted:true, _deductedItems:sale._deductedItems}).catch(()=>{});
  }
  await Promise.all(touched.map(prod=> Api.products.update(prod.id, {stock: prod.stock}).catch(()=>{})));
  if(touched.length){
    log(`Stock updated for accessory sale ${sale.id}`, 'products', {kind:'stock-out'});
    toast(short.length ? `Stock updated — insufficient stock for: ${short.join(', ')}` : 'Stock Items updated automatically', short.length?'error':undefined);
  }
}
async function restoreSaleStock(sale){
  if(!sale || !sale._stockDeducted) return;
  try{ DB.products = await Api.products.list(); }catch(e){}
  const touched = [];
  (sale._deductedItems||[]).forEach(it=>{
    const prod = DB.products.find(p=>p.id===it.product);
    if(prod){ prod.stock = Number(prod.stock||0) + Number(it.qty); touched.push(prod); }
  });
  await Promise.all(touched.map(prod=> Api.products.update(prod.id, {stock: prod.stock}).catch(()=>{})));
  if(touched.length) log(`Stock restored — accessory sale ${sale.id} deleted`, 'products', {kind:'stock-in'});
}
async function ensureInvoiceForSale(sale){
  const cust = DB.customers.find(x=>x.id===sale.customer) || {};
  const existing = DB.invoices.find(i=>i.ref===sale.id);
  if(!sale.trackingId) sale.trackingId = (existing && existing.trackingId) || genTrackingId('ACC');
  const itemsDesc = (sale.items||[]).filter(it=>it.product).map(it=>{
    const prod = DB.products.find(p=>p.id===it.product);
    return `${prod?prod.name:'Item'} × ${Number(it.qty)||0}`;
  }).join(', ');
  const payload = {
    customer: sale.customer,
    ref: sale.id,
    trackingId: sale.trackingId,
    contact: sale.customerPhone || cust.phone || '',
    phoneModel: 'Accessory Sale',
    imei: '',
    deviceCode: '',
    faultReported: 'Accessory / Stock Item Sale',
    deviceCondition: '—',
    accessories: itemsDesc || '—',
    notes: sale.notes || (sale.discount ? `Discount applied: ${fmtMoney(sale.discount)}` : ''),
    amount: sale.total,
    status: sale.status || (existing? existing.status : 'Unpaid'),
    date: existing? existing.date : sale.date || todayStr(),
    due: existing? existing.due : sale.date || todayStr(),
  };
  try{
    if(existing){
      const updated = await Api.invoices.update(existing.id, payload);
      Object.assign(existing, updated);
      log(`Invoice ${existing.id} updated from Sale ${sale.id}`, 'invoice');
    } else {
      const inv = await Api.invoices.create(payload);
      DB.invoices.push(inv);
      log(`Invoice ${inv.id} auto-generated from Sale ${sale.id}`, 'invoice');
    }
  }catch(e){ toast('Sale saved, but the linked invoice could not be updated: '+e.message, 'error'); }
}
function printSaleReceipt(sale){
  const cust = DB.customers.find(x=>x.id===sale.customer) || {};
  const st = invStatusStyle(sale.status);
  const rows = (sale.items||[]).filter(it=>it.product).map(it=>{
    const prod = DB.products.find(p=>p.id===it.product) || {};
    const qty = Number(it.qty)||0, price = Number(it.price)||0;
    return `<tr>
      <td style="padding:6px 8px;border-bottom:1px solid #F0EFF7;font-size:10px;color:#1a1a2e">${escapeHtml(prod.name||'—')}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #F0EFF7;font-size:10px;text-align:center">${qty}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #F0EFF7;font-size:10px;text-align:right">${fmtMoney(price)}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #F0EFF7;font-size:10px;text-align:right;font-weight:700">${fmtMoney(qty*price)}</td>
    </tr>`;
  }).join('');
  const trackUrl = (DB.settings.trackingUrl||'').trim();
  document.getElementById('printArea').innerHTML = `
    <div class="inv-sheet" style="font-family:'Segoe UI',Arial,Helvetica,sans-serif;width:100%;box-sizing:border-box;color:#1a1a2e">

      <div style="height:5px;border-radius:0 0 3px 3px;background:linear-gradient(90deg,#2E5EFF 0%,#8B2FE0 55%,#FF6A3D 100%);margin-bottom:9px"></div>

      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
        <img src="logo.png" style="height:44px;width:auto" alt="Sky Nex">
        <div style="text-align:right">
          <div style="font-size:12px;font-weight:800;letter-spacing:.3px">${escapeHtml(DB.settings.businessName||'Sky Nex').toUpperCase()}</div>
          <div style="font-size:8px;font-weight:700;color:#8B2FE0;letter-spacing:.2px">${escapeHtml(DB.settings.tagline||'Mobile Repair Workshop & Institute')}</div>
          <div style="font-size:8px;color:#666;margin-top:3px">${escapeHtml(DB.settings.phone)}${DB.settings.phone&&DB.settings.email?' &nbsp;•&nbsp; ':''}${escapeHtml(DB.settings.email)}</div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div>
          <div style="font-size:21px;font-weight:800;letter-spacing:.4px;color:#1a1a2e">SALE INVOICE</div>
          <div style="font-size:9px;color:#666;margin-top:1px">No. <b style="color:#1a1a2e;font-family:monospace">${sale.id}</b></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px">
          <div style="text-align:right">
            <div style="font-size:7.5px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:.4px">Sale Date</div>
            <div style="font-size:10px;font-weight:700">${fmtDate(sale.date)}</div>
          </div>
          <div style="padding:5px 13px;border-radius:20px;background:${st.bg};color:${st.fg};font-size:10px;font-weight:800;letter-spacing:.3px">${escapeHtml(sale.status||'—')}</div>
        </div>
      </div>

      <div style="display:flex;gap:9px">
        <div style="flex:1.65;display:flex;flex-direction:column;gap:8px;min-width:0">
          <div style="border:1px solid #E7E5F3;border-radius:8px;overflow:hidden">
            <div style="display:flex">
              ${invField('Customer Name', custName(sale.customer))}
              ${invField('Contact No', sale.customerPhone||cust.phone, true)}
            </div>
          </div>
          <div style="border:1px solid #E7E5F3;border-radius:8px;overflow:hidden;flex:1">
            <div style="font-size:7.6px;font-weight:800;color:#8B2FE0;text-transform:uppercase;letter-spacing:.5px;padding:8px 12px 4px">Items Purchased</div>
            <table style="width:100%;border-collapse:collapse">
              <thead><tr style="background:#FAFAFE">
                <th style="padding:6px 8px;text-align:left;font-size:7.6px;text-transform:uppercase;color:#999;border-top:1px solid #E7E5F3;border-bottom:1px solid #E7E5F3">Item</th>
                <th style="padding:6px 8px;text-align:center;font-size:7.6px;text-transform:uppercase;color:#999;border-top:1px solid #E7E5F3;border-bottom:1px solid #E7E5F3">Qty</th>
                <th style="padding:6px 8px;text-align:right;font-size:7.6px;text-transform:uppercase;color:#999;border-top:1px solid #E7E5F3;border-bottom:1px solid #E7E5F3">Price</th>
                <th style="padding:6px 8px;text-align:right;font-size:7.6px;text-transform:uppercase;color:#999;border-top:1px solid #E7E5F3;border-bottom:1px solid #E7E5F3">Amount</th>
              </tr></thead>
              <tbody>${rows}</tbody>
            </table>
            ${sale.notes?`<div style="padding:8px 12px;font-size:9px;color:#666;white-space:pre-wrap;line-height:1.4">${escapeHtml(sale.notes)}</div>`:''}
          </div>
        </div>

        <div style="flex:1;display:flex;flex-direction:column;gap:8px;min-width:0">
          <div style="border-radius:8px;padding:12px 14px;background:linear-gradient(135deg,#2E5EFF 0%,#8B2FE0 100%);color:#fff">
            <div style="font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;opacity:.85;margin-bottom:4px">Total Amount</div>
            <div style="font-size:22px;font-weight:800;letter-spacing:.2px">${fmtMoney(sale.total)}</div>
            ${sale.discount?`<div style="font-size:8px;font-weight:600;opacity:.9;margin-top:4px">Discount Applied: -${fmtMoney(sale.discount)}</div>`:''}
          </div>
          <div style="border-radius:8px;padding:11px 13px;background:#FFF7ED;border:1.5px dashed #FF6A3D;text-align:center">
            <div style="font-size:7.6px;font-weight:800;color:#C24F1E;text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Track Your Order</div>
            <div style="font-size:15px;font-weight:800;font-family:'Courier New',monospace;letter-spacing:1.5px;color:#1a1a2e;background:#fff;border-radius:5px;padding:5px 4px;border:1px solid #FFD9C2">${escapeHtml(sale.trackingId||'—')}</div>
            <div style="font-size:7.3px;color:#946043;margin-top:5px;line-height:1.35">
              ${trackUrl
                ? `Visit <b style="color:#C24F1E">${escapeHtml(trackUrl.replace(/^https?:\/\//,''))}</b> and enter this ID for order status`
                : `Keep this ID safe — enter it on our website to check your order`}
            </div>
          </div>
        </div>
      </div>

      ${invReleaseNotice('Items will not be returned or exchanged/replaced without this invoice.')}
      ${invSignatureBox(sale)}

      <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #E7E5F3;margin-top:10px;padding-top:8px;font-size:7.6px;color:#777">
        <span style="display:flex;align-items:center;gap:4px">${invIcon('mail','#8B2FE0')} ${escapeHtml(DB.settings.email)}</span>
        <span style="display:flex;align-items:center;gap:4px">${invIcon('pin','#8B2FE0')} ${escapeHtml(DB.settings.address)}</span>
        <span style="display:flex;align-items:center;gap:4px">${invIcon('phone','#8B2FE0')} ${escapeHtml(DB.settings.phone)}</span>
        <span style="font-weight:700;color:#B4B4C4;letter-spacing:.4px">SKY NEX • MOBILE REPAIR WORKSHOP &amp; INSTITUTE</span>
      </div>
    </div>`;
  printAreaWhenReady();
}
function printRepairReceipt(order){
  const cust = DB.customers.find(x=>x.id===order.customer) || {};
  const devices = order.devices||[];
  const st = invStatusStyle(order.status);
  const trackUrl = (DB.settings.trackingUrl||'').trim();
  document.getElementById('printArea').innerHTML = `
    <div class="inv-sheet" style="font-family:'Segoe UI',Arial,Helvetica,sans-serif;width:100%;box-sizing:border-box;color:#1a1a2e">

      <div style="height:5px;border-radius:0 0 3px 3px;background:linear-gradient(90deg,#2E5EFF 0%,#8B2FE0 55%,#FF6A3D 100%);margin-bottom:9px"></div>

      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
        <img src="logo.png" style="height:44px;width:auto" alt="Sky Nex">
        <div style="text-align:right">
          <div style="font-size:12px;font-weight:800;letter-spacing:.3px">${escapeHtml(DB.settings.businessName||'Sky Nex').toUpperCase()}</div>
          <div style="font-size:8px;font-weight:700;color:#8B2FE0;letter-spacing:.2px">${escapeHtml(DB.settings.tagline||'Mobile Repair Workshop & Institute')}</div>
          <div style="font-size:8px;color:#666;margin-top:3px">${escapeHtml(DB.settings.phone)}${DB.settings.phone&&DB.settings.email?' &nbsp;•&nbsp; ':''}${escapeHtml(DB.settings.email)}</div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div>
          <div style="font-size:21px;font-weight:800;letter-spacing:.4px;color:#1a1a2e">INVOICE</div>
          <div style="font-size:9px;color:#666;margin-top:1px">No. <b style="color:#1a1a2e;font-family:monospace">${order.id}</b></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px">
          <div style="text-align:right">
            <div style="font-size:7.5px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:.4px">Received Date</div>
            <div style="font-size:10px;font-weight:700">${fmtDate(order.date)}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:7.5px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:.4px">Delivery Date</div>
            <div style="font-size:10px;font-weight:700">${order.deliveryDate?fmtDate(order.deliveryDate):'—'}</div>
          </div>
          <div style="padding:5px 13px;border-radius:20px;background:${st.bg};color:${st.fg};font-size:10px;font-weight:800;letter-spacing:.3px">${escapeHtml(order.status||'—')}</div>
        </div>
      </div>

      <div style="display:flex;gap:9px">
        <div style="flex:1.65;display:flex;flex-direction:column;gap:8px;min-width:0">
          <div style="border:1px solid #E7E5F3;border-radius:8px;overflow:hidden">
            <div style="display:flex;border-bottom:1px solid #E7E5F3;background:#FAFAFE">
              ${invField('Customer Name', custName(order.customer))}
              ${invField('Contact No', order.customerPhone||cust.phone, true)}
            </div>
            <div style="display:flex;border-bottom:1px solid #E7E5F3">
              ${invField('Phone Model', joinDeviceField(devices,'device'))}
              ${invField('IMEI / Serial No', joinDeviceField(devices,'imei'), true)}
            </div>
            <div style="display:flex">
              ${invField('Fault Reported', joinDeviceField(devices,'issue'))}
              ${invFieldStatus('Device Code', order.deviceCode, true)}
            </div>
          </div>
          <div style="border:1px solid #E7E5F3;border-radius:8px;padding:8px 12px;flex:1">
            <div style="font-size:7.6px;font-weight:800;color:#8B2FE0;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Technician Diagnosis / Notes</div>
            <div style="font-size:10px;color:#333;white-space:pre-wrap;line-height:1.45">${escapeHtml(order.notes||'—')}</div>
          </div>
        </div>

        <div style="flex:1;display:flex;flex-direction:column;gap:8px;min-width:0">
          <div style="border-radius:8px;padding:12px 14px;background:linear-gradient(135deg,#2E5EFF 0%,#8B2FE0 100%);color:#fff">
            <div style="font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;opacity:.85;margin-bottom:4px">Amount Due</div>
            <div style="font-size:22px;font-weight:800;letter-spacing:.2px">${fmtMoney(order.total)}</div>
            ${order.advance?`<div style="font-size:8px;font-weight:600;opacity:.9;margin-top:4px">Advance Received: ${fmtMoney(order.advance)}</div>`:''}
          </div>
          <div style="border-radius:8px;padding:11px 13px;background:#FFF7ED;border:1.5px dashed #FF6A3D;text-align:center">
            <div style="font-size:7.6px;font-weight:800;color:#C24F1E;text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Track Your Repair</div>
            <div style="font-size:15px;font-weight:800;font-family:'Courier New',monospace;letter-spacing:1.5px;color:#1a1a2e;background:#fff;border-radius:5px;padding:5px 4px;border:1px solid #FFD9C2">${escapeHtml(order.trackingId||'—')}</div>
            <div style="font-size:7.3px;color:#946043;margin-top:5px;line-height:1.35">
              ${trackUrl
                ? `Visit <b style="color:#C24F1E">${escapeHtml(trackUrl.replace(/^https?:\/\//,''))}</b> and enter this ID for live status`
                : `Keep this ID safe — enter it on our website to check live repair status`}
            </div>
          </div>
        </div>
      </div>

      ${invReleaseNotice('Phone will not be returned without this invoice.')}
      ${invSignatureBox(order)}

      <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #E7E5F3;margin-top:10px;padding-top:8px;font-size:7.6px;color:#777">
        <span style="display:flex;align-items:center;gap:4px">${invIcon('mail','#8B2FE0')} ${escapeHtml(DB.settings.email)}</span>
        <span style="display:flex;align-items:center;gap:4px">${invIcon('pin','#8B2FE0')} ${escapeHtml(DB.settings.address)}</span>
        <span style="display:flex;align-items:center;gap:4px">${invIcon('phone','#8B2FE0')} ${escapeHtml(DB.settings.phone)}</span>
        <span style="font-weight:700;color:#B4B4C4;letter-spacing:.4px">SKY NEX • MOBILE REPAIR WORKSHOP &amp; INSTITUTE</span>
      </div>
    </div>`;
  printAreaWhenReady();
}
function printDeviceLabel(order){
  const LABEL_SIZE_IN = { width: 3, height: 2 };
  const ROTATE_LABEL = false;
  const cust = DB.customers.find(x=>x.id===order.customer) || {};
  const name = custName(order.customer) || 'Walk-in Customer';
  const track = order.trackingId || '—';
  const phone = order.customerPhone || cust.phone || '';
  const fault = joinDeviceField(order.devices||[], 'issue');
  const dateStr = order.date ? fmtDate(order.date) : '';
  document.getElementById('printLabelArea').innerHTML = `
    <div class="label-sheet" style="width:${LABEL_SIZE_IN.width}in;height:${LABEL_SIZE_IN.height}in;${ROTATE_LABEL?'transform:rotate(90deg);':''}">
      <div class="lbl-row"><span class="lbl-key">Tracking #</span><span class="lbl-val lbl-track">${escapeHtml(track)}</span></div>
      <div class="lbl-row"><span class="lbl-key">Name</span><span class="lbl-val">${escapeHtml(name)}</span></div>
      ${phone ? `<div class="lbl-row"><span class="lbl-key">Number</span><span class="lbl-val">${escapeHtml(phone)}</span></div>` : ''}
      <div class="lbl-row lbl-row-fault"><span class="lbl-key">Fault</span><span class="lbl-val">${escapeHtml(fault||'—')}</span></div>
      ${dateStr ? `<div class="lbl-row"><span class="lbl-key">Date</span><span class="lbl-val">${escapeHtml(dateStr)}</span></div>` : ''}
      <div class="lbl-biz">${escapeHtml(DB.settings.businessName||'Sky Nex')}</div>
    </div>`;
  const pageStyle = document.createElement('style');
  pageStyle.id = 'labelPageStyle';
  pageStyle.textContent = `@page{ size:${LABEL_SIZE_IN.width}in ${LABEL_SIZE_IN.height}in landscape; margin:0; }`;
  document.head.appendChild(pageStyle);
  document.body.classList.add('printing-label');
  const cleanup = ()=>{
    document.body.classList.remove('printing-label');
    pageStyle.remove();
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);
  setTimeout(cleanup, 4000);
  window.print();
}
RENDERERS.sales = function(c){
  // keep the "(N in stock)" labels in the item dropdown current after every sale
  const refreshSaleStockOptions = ()=>{
    const f = saleFields.find(x=>x.key==='items');
    if(f) f.subFields[0].options = saleStockOptions();
  };
  let saleFields = [];
  crudPage(c, {
    collection:'sales', title:'Sell Accessories', singular:'Sale', prefix:'SAL', newLabel:'New Sale', enableExcel:true, enableViewDetail:true, enableSignature:true,
    searchKeys:['id'], getSearchVal:(r,k)=> k==='id' ? custName(r.customer)+' '+r.id+' '+(r.trackingId||'') : r[k],
    filters:[{key:'status', label:'Status', options:DB.lists.invoiceStatuses}],
    itemLabel:s=>custName(s.customer)+' — '+s.id,
    viewFn:printSaleReceipt, viewLabel:'Print',
    columns:[
      {label:'Sale ID', render:s=>`<span class="cell-mono">${s.id}</span>`},
      {label:'Tracking ID', render:s=>trackingCell(s.trackingId)},
      {label:'Customer', render:s=>`<div class="name-cell"><div class="avatar-sm">${initials(custName(s.customer))}</div><span class="cell-strong">${custName(s.customer)}</span></div>`},
      {label:'Items', render:s=>saleItemsSummary(s)},
      {label:'Total', render:s=>`<span class="cell-strong">${fmtMoney(s.total)}</span>`},
      {label:'Status', render:s=>statusBadge(s.status)},
      {label:'Date', render:s=>`<span class="cell-muted">${fmtDate(s.date)}</span>`},
    ],
    fields:saleFields = [
      {key:'customer', label:'Customer Name', type:'combo', matchCollection:'customers', placeholder:'Type "Walk-in Customer" or an existing name', options:DB.customers.map(x=>({value:x.id,label:x.name}))},
      {key:'customerPhone', label:'Customer Phone (optional)', placeholder:'03XX-XXXXXXX'},
      {key:'items', label:'Accessories / Stock Items', type:'repeater', itemName:'Item', subFields:[
        {key:'product', label:'Item', type:'select', options:saleStockOptions()},
        {key:'qty', label:'Quantity', type:'number', placeholder:'1'},
        {key:'price', label:'Unit Price (Rs.)', type:'number', placeholder:'0'},
      ]},
      {key:'discount', label:'Discount (Rs.)', type:'number', placeholder:'0'},
      {key:'total', label:'Total Amount (Rs.)', type:'number'},
      {key:'status', label:'Payment Status', type:'select', options:DB.lists.invoiceStatuses.map(s=>({value:s,label:s}))},
      {key:'date', label:'Sale Date', type:'date', default:todayStr()},
      {key:'notes', label:'Notes', type:'textarea'},
    ],
    validate:(d, item)=>{
      if(!String(d.customer||'').trim()) return 'Customer name is required (type "Walk-in Customer" if unknown)';
      const items = (d.items||[]).filter(it=>it.product && Number(it.qty)>0);
      if(!items.length) return 'Add at least one item to sell';
      const need = saleQtyByProduct(items);
      // when editing, quantities already deducted by this sale are available again
      const prevQty = (item && item._stockDeducted) ? saleQtyByProduct(item._deductedItems) : {};
      for(const id of Object.keys(need)){
        const prod = DB.products.find(p=>p.id===id);
        if(!prod) continue;
        const available = Number(prod.stock) + (prevQty[id]||0);
        if(need[id] > available) return `Not enough stock for ${prod.name} — only ${available} left`;
      }
      return null;
    },
    afterRender:()=>{ bindPhoneMask('f_customerPhone'); bindSaleLiveTotal(); },
    wideForm:true,
    onCreateExtra:()=>({trackingId: genTrackingId('ACC')}),
    onSaved: async (sale, isEdit, prevSnapshot)=>{ await reconcileSaleStock(sale, prevSnapshot); await ensureInvoiceForSale(sale); refreshSaleStockOptions(); },
    onDelete: async (sale)=>{
      await restoreSaleStock(sale);
      refreshSaleStockOptions();
      const inv = DB.invoices.find(i=>i.ref===sale.id);
      if(inv) DB.invoices.splice(DB.invoices.indexOf(inv),1);
    },
  });
};

const REPORTED_ISSUE_OPTS = ['No Power / Dead','Not Charging','Fast Battery Drain','Heating','Restarting / Boot Loop','Stuck on Apple/Logo','Software/Restore Issue','Network/Signal Issue','Wi-Fi/Bluetooth Issue','Camera Issue','Face ID / Touch ID Issue','Display/Touch Issue','Back Glass/Frame Damage','Speaker/Mic Issue','Vibration Issue','Water/Liquid Damage'];
const PHYSICAL_CONDITION_OPTS = ['Screen cracked','Back glass cracked','Frame bent/damaged','Camera glass damaged','Missing screws/parts','Previous repair/opened','Signs of liquid damage','Heavy scratches/dents'];
const FUNCTION_TEST_OPTS = ['Display','Touch','Charging','Battery health','Front camera','Rear cameras','Flash','Ear speaker','Loud speaker','Microphone','Wi-Fi','Bluetooth','Mobile network','SIM','Face ID/Touch ID','Proximity sensor','Vibration','Power/volume buttons'];
const DEVICE_SUBFIELDS = [
  {key:'device', label:'Device / Phone Model', placeholder:'e.g. iPhone 13 Pro'},
  {key:'imei', label:'IMEI / Serial No'},
  {key:'color', label:'Color'},
  {key:'storage', label:'Storage', type:'select', options:['','32GB','64GB','128GB','256GB','512GB','1TB','2TB'].map(s=>({value:s,label:s||'Select Storage'}))},
  {key:'displayPanel', label:'Display Panel', type:'select', options:['','Original','Original (Used)','Copy / Aftermarket','Not Checked'].map(s=>({value:s,label:s||'Select Display Panel'}))},
  {key:'issue', label:'Problem Description', type:'textarea'},
  {key:'deviceRegistration', label:'Device Registration', type:'select', options:['','Registered (PTA)','Not Registered','Not Applicable'].map(s=>({value:s,label:s||'Select Device Registration'}))},
  {key:'batteryHealth', label:'Battery Health (%)'},
  {key:'accessories', label:'Accessories Received'},
  {key:'cost', label:'Estimated Cost (for this device) (Rs.)', type:'number'},
];
function pkPhoneValid(v){ return /^\d{4}-\d{7}$/.test(String(v||'').trim()); }
function orderDeviceSummary(o){
  const list = (o.devices||[]).map(d=>d.device).filter(Boolean);
  if(!list.length) return '—';
  return list.length===1 ? escapeHtml(list[0]) : `${escapeHtml(list[0])} <span class="cell-muted">+${list.length-1} more</span>`;
}
RENDERERS.orders = function(c){
  crudPage(c, {
    collection:'orders', title:'Repair', singular:'Repair Job', prefix:'REP', newLabel:'New Repair', enableExcel:true, enableViewDetail:true, enableSignature:true,
    searchKeys:['id'], getSearchVal:(r,k)=> k==='id' ? custName(r.customer)+' '+r.id+' '+(r.trackingId||'')+' '+(r.devices||[]).map(d=>d.device).join(' ') : r[k],
    filters:[
      {key:'status', label:'Status', manageKey:'orderstatus', options:DB.lists.orderStatuses},
      {key:'category', label:'Repair Type', manageKey:'repaircats', options:DB.categories.filter(x=>x.type==='Repair').map(x=>({value:x.id,label:x.name}))},
    ],
    statusOrder:['Pending','Processing','Completed','Cancelled'],
    itemLabel:o=>custName(o.customer),
    viewFn:printRepairReceipt, viewLabel:'Print',
    labelFn:printDeviceLabel, labelLabel:'Sticker',
    columns:[
      {label:'Repair ID', render:o=>`<span class="cell-mono">${o.id}</span>`},
      {label:'Tracking ID', render:o=>trackingCell(o.trackingId)},
      {label:'Customer', render:o=>`<div class="name-cell"><div class="avatar-sm">${initials(custName(o.customer))}</div><span class="cell-strong">${custName(o.customer)}</span></div>`},
      {label:'Device(s)', render:o=>orderDeviceSummary(o)},
      {label:'Technician', render:o=>`<span class="cell-muted">${escapeHtml(o.technician||'—')}</span>`},
      {label:'Total', render:o=>`<span class="cell-strong">${fmtMoney(o.total)}</span>`},
      {label:'Status', render:o=>statusBadge(o.status)},
      {label:'Date', render:o=>`<span class="cell-muted">${fmtDate(o.date)}${o.time?' '+o.time:''}</span>`},
    ],
    fields:[
      {key:'customer', label:'Customer Name', type:'combo', matchCollection:'customers', placeholder:'Type or pick a customer name', options:DB.customers.map(x=>({value:x.id,label:x.name}))},
      {key:'customerPhone', label:'Customer Phone Number', placeholder:'03XX-XXXXXXX'},
      {key:'bookedBy', label:'Booked By', placeholder:'Enter staff name'},
      {key:'deviceCode', label:'Password / Passcode', type:'passcode', placeholder:'Enter device password / passcode', onChange:()=>updateRepairChecklistVisibility()},
      {key:'fault', label:'Fault', type:'textarea', placeholder:'Describe the fault / issue with the device'},
      {key:'phoneModel', label:'Phone Model', placeholder:'e.g. iPhone 13 Pro'},
      {key:'total', label:'Estimated Cost (Rs.)', type:'number'},
      {key:'advance', label:'Advance Payment (Rs.)', type:'number'},
      {key:'status', label:'Status', type:'select', manageKey:'orderstatus', options:DB.lists.orderStatuses.map(s=>({value:s,label:s}))},
      {key:'devicePhoto', label:'Image', type:'image', capture:'environment'},
      {key:'extraFeaturesNotes', label:'Notes', type:'textarea', placeholder:'Any extra notes / special features about this device or job...'},
      {key:'showMore', label:'Show More', type:'toggle'},
      {key:'extraInfoToggle', label:'Extra Information / Features', type:'toggle'},
      {key:'address', label:'Address (optional)', full:true},
      {key:'technician', label:'Technician', placeholder:'Enter technician name'},
      {key:'customerPhoto', label:'Customer Picture (Security Photo)', type:'webcam', optional:true},
      {key:'category', label:'Repair Type', type:'select', manageKey:'repaircats', options:DB.categories.filter(x=>x.type==='Repair').map(x=>({value:x.id,label:x.name}))},
      {key:'devices', label:'Devices', type:'repeater', itemName:'Device', subFields:DEVICE_SUBFIELDS},
      {key:'reportedIssues', label:'Reported Issue', type:'checklist', options:REPORTED_ISSUE_OPTS, onChange:()=>updateRepairChecklistVisibility()},
      {key:'physicalCondition', label:'Physical Condition — Check Before Opening', type:'checklist', options:PHYSICAL_CONDITION_OPTS},
      {key:'functionTest', label:'Function Test (if the phone powers on)', type:'checklist', options:FUNCTION_TEST_OPTS},
      {key:'serviceCharges', label:'Service Charges (Labor, Diagnostic Fee, etc.)', type:'repeater', itemName:'Charge', subFields:[
        {key:'label', label:'Description', placeholder:'e.g. Labor / Service Charge'},
        {key:'amount', label:'Amount (Rs.)', type:'number', placeholder:'0'},
      ]},
      {key:'deliveryDate', label:'Estimated Delivery Date', type:'date'},
      {key:'repairedBy', label:'Repaired By', placeholder:'Enter name (Admin only)', adminOnly:true},
      {key:'date', label:'Received Date', type:'date', default:todayStr()},
      {key:'time', label:'Received Time', type:'time', default:nowTimeStr()},
    ],
    validate:d=>{
      if(!String(d.customer||'').trim()) return 'Customer name is required';
      if(!pkPhoneValid(d.customerPhone)) return 'Enter a valid phone number as 0300-1234567 (4 digits, dash, 7 digits)';
      const hasDeviceRow = d.devices && d.devices.some(dv=>dv.device && dv.device.trim());
      if(!hasDeviceRow){
        if(!String(d.phoneModel||'').trim()) return 'Phone Model is required';
        d.devices = [{device:d.phoneModel, issue:d.fault||'', cost:d.total||0}];
      }
      return null;
    },
    afterRender:()=>{
      bindPhoneMask('f_customerPhone');
      const extraToggle = document.getElementById('f_extraInfoToggle');
      if(extraToggle && !extraToggle.checked){
        const hasExistingChecklistData = ['f_reportedIssues_data','f_physicalCondition_data','f_functionTest_data'].some(id=>{
          const el = document.getElementById(id);
          if(!el) return false;
          try{ return (JSON.parse(el.value||'[]')).some(it=>it.checked); }catch(e){ return false; }
        });
        if(hasExistingChecklistData) extraToggle.checked = true;
      }
      updateRepairChecklistVisibility();
      bindOrderLiveTotal();
      if(extraToggle) extraToggle.onchange = updateRepairChecklistVisibility;
      const showMoreToggle = document.getElementById('f_showMore');
      updateShowMoreVisibility();
      if(showMoreToggle) showMoreToggle.onchange = updateShowMoreVisibility;
    },
    wideForm:true,
    onCreateExtra:()=>({trackingId: genTrackingId('REP')}),
    onSaved: async (order, isEdit, prevSnapshot)=>{ await ensureInvoiceForOrder(order); await reconcilePartsStock(order, prevSnapshot?prevSnapshot.status:null); await ensureProfitLossForOrder(order, isEdit); },
  });
};
function trackingCell(code){
  if(!code) return '<span class="cell-muted">—</span>';
  return `<span class="tracking-chip" title="Click to copy" onclick="copyTrackingId(event,'${code}')">${code}</span>`;
}
function copyTrackingId(ev, code){
  ev.stopPropagation();
  const done = ()=> toast('Tracking ID copied: '+code);
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(code).then(done).catch(done);
  } else {
    done();
  }
}
const SHOW_MORE_KEYS = ['address','technician','customerPhoto','category','devices','serviceCharges','deliveryDate','repairedBy','date','time'];
function updateShowMoreVisibility(){
  const toggleEl = document.getElementById('f_showMore');
  const show = !!(toggleEl && toggleEl.checked);
  SHOW_MORE_KEYS.forEach(key=>{
    const el = document.getElementById('fw_'+key);
    if(el) el.style.display = show ? '' : 'none';
  });
}
function updateRepairChecklistVisibility(){
  const toggleEl = document.getElementById('f_extraInfoToggle');
  const showExtra = !!(toggleEl && toggleEl.checked);
  ['fw_reportedIssues','fw_physicalCondition','fw_functionTest'].forEach(wid=>{
    const el = document.getElementById(wid);
    if(el) el.style.display = showExtra ? '' : 'none';
  });
  if(!showExtra) return;
  const ftWrap = document.getElementById('fw_functionTest');
  if(!ftWrap) return;
  const deniedEl = document.getElementById('f_deviceCode_denied');
  const denied = !!(deniedEl && deniedEl.checked);
  let noPower = false;
  const reportedDataEl = document.getElementById('f_reportedIssues_data');
  if(reportedDataEl){
    try{
      const list = JSON.parse(reportedDataEl.value||'[]');
      noPower = list.some(i=> i.checked && /no power\s*\/\s*dead/i.test(i.label));
    }catch(e){}
  }
  ftWrap.style.display = (denied || noPower) ? 'none' : '';
}

async function reconcilePartsStock(order, prevStatus){
  const wasCompleted = prevStatus === 'Completed';
  const isCompleted = order.status === 'Completed';
  const touched = new Set();
  if(isCompleted && !order._stockDeducted){
    const parts = (order.partsUsed||[]).filter(p=>p.product && Number(p.qty)>0);
    if(parts.length){
      const short = [];
      parts.forEach(p=>{
        const prod = DB.products.find(x=>x.id===p.product);
        if(!prod) return;
        const qty = Number(p.qty);
        if(Number(prod.stock) < qty) short.push(prod.name);
        prod.stock = Math.max(0, Number(prod.stock) - qty);
        touched.add(prod.id);
      });
      order._stockDeducted = true;
      order._deductedParts = parts.map(p=>({product:p.product, qty:Number(p.qty)}));
      await Promise.all(Array.from(touched).map(id=>{
        const prod = DB.products.find(p=>p.id===id);
        return Api.products.update(id, {stock: prod.stock}).catch(()=>{});
      }));
      log(`Parts stock reduced for completed repair ${order.id}`, 'products', {kind:'stock-out'});
      toast(short.length ? `Stock updated — insufficient stock for: ${short.join(', ')}` : 'Parts stock updated for completed repair');
    }
  } else if(!isCompleted && wasCompleted && order._stockDeducted){
    (order._deductedParts||[]).forEach(p=>{
      const prod = DB.products.find(x=>x.id===p.product);
      if(prod){ prod.stock = Number(prod.stock) + Number(p.qty); touched.add(prod.id); }
    });
    await Promise.all(Array.from(touched).map(id=>{
      const prod = DB.products.find(p=>p.id===id);
      return Api.products.update(id, {stock: prod.stock}).catch(()=>{});
    }));
    log(`Parts stock restored — repair ${order.id} moved out of Completed`, 'products', {kind:'stock-in'});
    order._stockDeducted = false;
    order._deductedParts = [];
  }
}

async function ensureProfitLossForOrder(order, isEdit){
  const phoneModel = order.phoneModel || (order.devices && order.devices[0] && order.devices[0].device) || '';
  const dateVal = order.date || todayStr();
  let pl = DB.profitLoss.find(p=>p.repairId===order.id);
  if(!pl){
    const totalPayment = Number(order.total||0);
    const advancePayment = Number(order.advance||0);
    const data = {
      repairId: order.id, customer: order.customer, phoneModel,
      date: dateVal, month: monthKey(dateVal),
      totalPayment, advancePayment, pendingPayment: Math.max(0, totalPayment-advancePayment),
      expense: 0, profit: totalPayment, notes:'',
    };
    try{
      const created = await Api.profitLoss.create(data);
      const newItem = Object.assign({id: created.id || uid('PL')}, data, created);
      DB.profitLoss.push(newItem);
      save();
      log(`Profit/Loss entry auto-created for Repair ${order.id}`, 'profitLoss');
    }catch(e){ /* offline preview — non-fatal */ }
  } else if(isEdit){
    pl.customer = order.customer; pl.phoneModel = phoneModel; pl.date = dateVal; pl.month = monthKey(dateVal);
    try{ await Api.profitLoss.update(pl.id, {customer:pl.customer, phoneModel:pl.phoneModel, date:pl.date, month:pl.month}); save(); }catch(e){}
  }
}

function joinDeviceField(devices, key){
  return (devices||[]).map(d=>d[key]).filter(Boolean).join(' | ');
}
async function ensureInvoiceForOrder(order){
  const cust = DB.customers.find(x=>x.id===order.customer) || {};
  const existing = DB.invoices.find(i=>i.ref===order.id);
  if(!order.trackingId) order.trackingId = (existing && existing.trackingId) || genTrackingId('REP');
  const devices = order.devices||[];
  const payload = {
    customer: order.customer,
    ref: order.id,
    trackingId: order.trackingId || (existing && existing.trackingId) || genTrackingId('REP'),
    contact: order.customerPhone || cust.phone || '',
    phoneModel: joinDeviceField(devices,'device') || '—',
    imei: joinDeviceField(devices,'imei'),
    deviceCode: order.deviceCode || '',
    faultReported: joinDeviceField(devices,'issue') || 'Repair Job',
    deviceCondition: joinDeviceField(devices,'bodyCondition') || '—',
    accessories: joinDeviceField(devices,'accessories') || '—',
    notes: order.notes || `Auto-generated on repair confirmation (${devices.length} device(s))`,
    amount: order.total,
    status: existing? existing.status : 'Unpaid',
    date: existing? existing.date : todayStr(),
    due: existing? existing.due : todayStr(),
  };
  try{
    if(existing){
      const updated = await Api.invoices.update(existing.id, payload);
      Object.assign(existing, updated);
      log(`Invoice ${existing.id} updated from Repair ${order.id}`, 'invoice');
    } else {
      const inv = await Api.invoices.create(payload);
      DB.invoices.push(inv);
      log(`Invoice ${inv.id} auto-generated from Repair ${order.id}`, 'invoice');
      toast('Invoice auto-generated for this repair');
    }
  }catch(e){ toast('Repair saved, but the linked invoice could not be updated: '+e.message, 'error'); }
}
function ensureInvoiceForRepair(repair){
  const cust = DB.customers.find(x=>x.id===repair.customer) || {};
  const existing = DB.invoices.find(i=>i.ref===repair.id);
  if(!repair.trackingId) repair.trackingId = (existing && existing.trackingId) || genTrackingId('REP');
  const payload = {
    customer: repair.customer,
    ref: repair.id,
    trackingId: repair.trackingId,
    contact: cust.phone||'',
    phoneModel: repair.device||'',
    imei: repair.imei||'',
    deviceCode: repair.deviceCode||'',
    faultReported: repair.issue||'',
    deviceCondition: repair.condition||'',
    accessories: repair.accessories||'',
    notes: repair.notes||'',
    amount: repair.cost,
    status: existing? existing.status : 'Unpaid',
    date: existing? existing.date : todayStr(),
    due: existing? existing.due : todayStr(),
  };
  if(existing){
    Object.assign(existing, payload);
    log(`Invoice ${existing.id} updated from Repair ${repair.id}`, 'invoice');
  } else {
    const inv = Object.assign({id:uid('INV')}, payload);
    DB.invoices.push(inv);
    log(`Invoice ${inv.id} auto-generated from Repair ${repair.id}`, 'invoice');
    toast('Invoice auto-generated for this repair job');
  }
}

function plBadge(r){
  const total = Number(r.totalPayment!=null && r.totalPayment!=='' ? r.totalPayment : r.paymentReceived||0);
  const p = (r.profit!==undefined && r.profit!==null && r.profit!=='') ? Number(r.profit) : (total - Number(r.expense||0));
  const cls = p>0 ? 'green' : (p<0 ? 'red' : 'gray');
  const txt = p>0 ? `Profit ${fmtMoney(p)}` : (p<0 ? `Loss ${fmtMoney(Math.abs(p))}` : 'Break-even');
  return `<span class="badge ${cls}">${txt}</span>`;
}
function bindProfitLossLiveCalc(){
  const totalEl = document.getElementById('f_totalPayment');
  const advEl = document.getElementById('f_advancePayment');
  const pendEl = document.getElementById('f_pendingPayment');
  if(!totalEl || !advEl || !pendEl) return;
  function recalc(){
    const total = Number(totalEl.value||0);
    const adv = Number(advEl.value||0);
    pendEl.value = Math.max(0, total-adv);
  }
  totalEl.addEventListener('input', recalc);
  advEl.addEventListener('input', recalc);
  recalc();
}
RENDERERS.profitloss = function(c){
  crudPage(c, {
    collection:'profitLoss', title:'Profit/Loss', singular:'Profit/Loss Entry', prefix:'PL', newLabel:'Add Entry', enableExcel:true,
    searchKeys:['repairId','phoneModel'], getSearchVal:(r,k)=> k==='repairId' ? custName(r.customer)+' '+(r.repairId||'')+' '+(r.phoneModel||'') : r[k],
    itemLabel:r=>custName(r.customer)+' — '+(r.repairId||r.id),
    rowFilter: r=> monthKey(r.date) === currentMonthKey(),
    afterRender:()=> bindProfitLossLiveCalc(),
    summaryFn: rows=>{
      const totalPay = rows.reduce((s,r)=>s+Number(r.totalPayment!=null && r.totalPayment!=='' ? r.totalPayment : r.paymentReceived||0),0);
      const totalExp = rows.reduce((s,r)=>s+Number(r.expense||0),0);
      const net = totalPay - totalExp;
      const netCls = net>0?'green':(net<0?'red':'gray');
      const netTxt = net>0?`Profit ${fmtMoney(net)}`:(net<0?`Loss ${fmtMoney(Math.abs(net))}`:'Break-even');
      return `<div style="display:flex;gap:28px;flex-wrap:wrap;padding:14px 16px">
        <div><div class="cell-muted" style="font-size:12px">${escapeHtml(monthLabel(currentMonthKey()))}</div><div class="cell-strong" style="font-size:13px">This Month</div></div>
        <div><div class="cell-muted" style="font-size:12px">Total Payment</div><div class="cell-strong">${fmtMoney(totalPay)}</div></div>
        <div><div class="cell-muted" style="font-size:12px">Total Expense</div><div class="cell-strong">${fmtMoney(totalExp)}</div></div>
        <div><div class="cell-muted" style="font-size:12px">Net Result</div><span class="badge ${netCls}">${netTxt}</span></div>
      </div>`;
    },
    fields:[
      {key:'repairId', label:'Repair ID', placeholder:'e.g. REP-XXXXX (leave blank for a manual entry)'},
      {key:'customer', label:'Customer Name', type:'combo', matchCollection:'customers', placeholder:'Type or pick a customer name', options:DB.customers.map(x=>({value:x.id,label:x.name}))},
      {key:'phoneModel', label:'Phone Model'},
      {key:'date', label:'Date', type:'date', default:todayStr()},
      {key:'totalPayment', label:'Total Payment (Rs.)', type:'number'},
      {key:'advancePayment', label:'Advance Payment (Rs.)', type:'number'},
      {key:'pendingPayment', label:'Pending Payment (Rs.)', type:'number', readOnly:true},
      {key:'expense', label:'Expense / Cost (Rs.)', type:'number'},
      {key:'notes', label:'Notes', type:'textarea'},
    ],
    validate:d=>{
      d.date = d.date || todayStr();
      d.month = monthKey(d.date);
      d.totalPayment = Number(d.totalPayment||0);
      d.advancePayment = Number(d.advancePayment||0);
      d.pendingPayment = Math.max(0, d.totalPayment - d.advancePayment);
      d.expense = Number(d.expense||0);
      d.profit = d.totalPayment - d.expense;
      return null;
    },
    columns:[
      {label:'Date', render:r=> escapeHtml(r.date||'—')},
      {label:'Repair ID', render:r=> `<span class="cell-mono">${escapeHtml(r.repairId||'—')}</span>`},
      {label:'Customer', render:r=>`<div class="name-cell"><div class="avatar-sm">${initials(custName(r.customer))}</div><span class="cell-strong">${custName(r.customer)}</span></div>`},
      {label:'Phone Model', render:r=> escapeHtml(r.phoneModel||'—')},
      {label:'Total Payment', render:r=> fmtMoney(r.totalPayment!=null && r.totalPayment!=='' ? r.totalPayment : r.paymentReceived||0)},
      {label:'Advance Payment', render:r=> fmtMoney(r.advancePayment||0)},
      {label:'Pending Payment', render:r=> fmtMoney(r.pendingPayment!=null && r.pendingPayment!=='' ? r.pendingPayment : Math.max(0,Number(r.totalPayment||0)-Number(r.advancePayment||0)))},
      {label:'Expense', render:r=> fmtMoney(r.expense||0)},
      {label:'Profit / Loss', render:r=> plBadge(r)},
    ],
  });
};

RENDERERS.invoices = function(c){
  crudPage(c, {
    collection:'invoices', title:'Invoice', singular:'Invoice', prefix:'INV', newLabel:'New Invoice', enableExcel:true, enableSignature:true,
    searchKeys:['id'], getSearchVal:(r)=> custName(r.customer)+' '+r.id+' '+(r.trackingId||''),
    filters:[{key:'status', label:'Status', manageKey:'invoicestatus', options:DB.lists.invoiceStatuses}],
    itemLabel:i=>i.id,
    viewFn:printInvoice,
    onCreateExtra:()=>({trackingId: genTrackingId()}),
    columns:[
      {label:'Invoice #', render:i=>`<span class="cell-mono">${i.id}</span>`},
      {label:'Tracking ID', render:i=>trackingCell(i.trackingId)},
      {label:'Customer', render:i=>`<div class="name-cell"><div class="avatar-sm">${initials(custName(i.customer))}</div><span class="cell-strong">${custName(i.customer)}</span></div>`},
      {label:'Phone Model', render:i=>`<span class="cell-muted">${escapeHtml(i.phoneModel||'—')}</span>`},
      {label:'Amount', render:i=>`<span class="cell-strong">${fmtMoney(i.amount)}</span>`},
      {label:'Due', render:i=>`<span class="cell-muted">${fmtDate(i.due)}</span>`},
      {label:'Status', render:i=>statusBadge(i.status)},
    ],
    fields:[
      {key:'customer', label:'Customer Name', type:'combo', matchCollection:'customers'},
      {key:'contact', label:'Contact No'},
      {key:'phoneModel', label:'Phone Model'},
      {key:'imei', label:'IMEI / Serial No'},
      {key:'faultReported', label:'Fault Reported'},
      {key:'deviceCode', label:'Device Code'},
      {key:'deviceCondition', label:'Device Condition'},
      {key:'accessories', label:'Accessories Received'},
      {key:'notes', label:'Technician Diagnosis / Notes', type:'textarea'},
      {key:'amount', label:'Quoted Price (Rs.)', type:'number'},
      {key:'ref', label:'Reference (Order / Repair ID)', placeholder:'e.g. RPR-XXXXX'},
      {key:'status', label:'Status', type:'select', manageKey:'invoicestatus', options:DB.lists.invoiceStatuses.map(s=>({value:s,label:s}))},
      {key:'date', label:'Issue Date', type:'date', default:todayStr()},
      {key:'due', label:'Due Date', type:'date', default:todayStr()},
    ],
    wideForm:true,
  });
};
function invIcon(name, color){ return `<svg style="width:10px;height:10px;stroke:${color||'currentColor'};fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0" viewBox="0 0 24 24">${ICONS[name]||''}</svg>`; }
function invField(label, value, last){
  return `<div style="flex:1;padding:7px 12px;${last?'':'border-right:1px solid #E7E5F3;'}min-width:0">
    <div style="font-size:7.6px;font-weight:800;color:#8B2FE0;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">${label}</div>
    <div style="font-size:10.5px;color:#1a1a2e;font-weight:600;min-height:13px;word-break:break-word">${escapeHtml(value||'—')}</div>
  </div>`;
}
function invFieldStatus(label, value, last){
  const isDenied = value === 'Denied';
  const isGranted = value && !isDenied;
  const color = isDenied ? '#D62E22' : (isGranted ? '#17914F' : '#1a1a2e');
  const text = isDenied ? 'Denied' : (isGranted ? 'Granted' : '—');
  return `<div style="flex:1;padding:7px 12px;${last?'':'border-right:1px solid #E7E5F3;'}min-width:0">
    <div style="font-size:7.6px;font-weight:800;color:#8B2FE0;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">${label}</div>
    <div style="font-size:10.5px;color:${color};font-weight:800;min-height:13px;word-break:break-word">${text}</div>
  </div>`;
}
function invReleaseNotice(text){
  return `<div style="text-align:center;background:#FDE8E7;border:1.3px solid #F6B7B1;border-radius:8px;padding:8px 10px;margin-top:9px">
    <span style="font-size:9.6px;font-weight:800;color:#D62E22;letter-spacing:.2px">⚠ ${escapeHtml(text)}</span>
  </div>`;
}
function invStatusStyle(status){
  const map = {
    Paid:       {bg:'#E4F8EE', fg:'#17914F'},
    Partial:    {bg:'#FFF3DE', fg:'#B4780C'},
    Unpaid:     {bg:'#FDE8E7', fg:'#D62E22'},
    Completed:  {bg:'#E4F8EE', fg:'#17914F'},
    Processing: {bg:'#E9F1FF', fg:'#2E5EFF'},
    Pending:    {bg:'#FFF3DE', fg:'#B4780C'},
    Cancelled:  {bg:'#FDE8E7', fg:'#D62E22'},
  };
  return map[status] || {bg:'#EFEAFB', fg:'#6C2BD9'};
}
function printInvoice(inv){
  const cust = DB.customers.find(x=>x.id===inv.customer) || {};
  const st = invStatusStyle(inv.status);
  const trackUrl = (DB.settings.trackingUrl||'').trim();
  const trackFullUrl = trackUrl ? (trackUrl.replace(/\/$/,'') + (trackUrl.includes('?') ? '&' : '?') + 'id=' + encodeURIComponent(inv.trackingId||'')) : '';
  document.getElementById('printArea').innerHTML = `
    <div class="inv-sheet" style="font-family:'Segoe UI',Arial,Helvetica,sans-serif;width:100%;box-sizing:border-box;color:#1a1a2e">

      <div style="height:5px;border-radius:0 0 3px 3px;background:linear-gradient(90deg,#2E5EFF 0%,#8B2FE0 55%,#FF6A3D 100%);margin-bottom:9px"></div>

      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
        <img src="logo.png" style="height:44px;width:auto" alt="Sky Nex">
        <div style="text-align:right">
          <div style="font-size:12px;font-weight:800;letter-spacing:.3px">${escapeHtml(DB.settings.businessName||'Sky Nex').toUpperCase()}</div>
          <div style="font-size:8px;font-weight:700;color:#8B2FE0;letter-spacing:.2px">${escapeHtml(DB.settings.tagline||'Mobile Repair Workshop & Institute')}</div>
          <div style="font-size:8px;color:#666;margin-top:3px">${escapeHtml(DB.settings.phone)}${DB.settings.phone&&DB.settings.email?' &nbsp;•&nbsp; ':''}${escapeHtml(DB.settings.email)}</div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div>
          <div style="font-size:21px;font-weight:800;letter-spacing:.4px;color:#1a1a2e">INVOICE</div>
          <div style="font-size:9px;color:#666;margin-top:1px">No. <b style="color:#1a1a2e;font-family:monospace">${inv.id}</b></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px">
          <div style="text-align:right">
            <div style="font-size:7.5px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:.4px">Issue Date</div>
            <div style="font-size:10px;font-weight:700">${fmtDate(inv.date)}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:7.5px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:.4px">Due Date</div>
            <div style="font-size:10px;font-weight:700">${fmtDate(inv.due)}</div>
          </div>
          <div style="padding:5px 13px;border-radius:20px;background:${st.bg};color:${st.fg};font-size:10px;font-weight:800;letter-spacing:.3px">${escapeHtml(inv.status)}</div>
        </div>
      </div>

      <div style="display:flex;gap:9px">
        <div style="flex:1.65;display:flex;flex-direction:column;gap:8px;min-width:0">
          <div style="border:1px solid #E7E5F3;border-radius:8px;overflow:hidden">
            <div style="display:flex;border-bottom:1px solid #E7E5F3;background:#FAFAFE">
              ${invField('Customer Name', cust.name)}
              ${invField('Contact No', inv.contact||cust.phone, true)}
            </div>
            <div style="display:flex;border-bottom:1px solid #E7E5F3">
              ${invField('Phone Model', inv.phoneModel)}
              ${invField('IMEI / Serial No', inv.imei, true)}
            </div>
            <div style="display:flex">
              ${invField('Fault Reported', inv.faultReported)}
              ${invFieldStatus('Device Code', inv.deviceCode, true)}
            </div>
          </div>
          <div style="border:1px solid #E7E5F3;border-radius:8px;padding:8px 12px;flex:1">
            <div style="font-size:7.6px;font-weight:800;color:#8B2FE0;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Technician Diagnosis / Notes</div>
            <div style="font-size:10px;color:#333;white-space:pre-wrap;line-height:1.45">${escapeHtml(inv.notes||'—')}</div>
          </div>
        </div>

        <div style="flex:1;display:flex;flex-direction:column;gap:8px;min-width:0">
          <div style="border-radius:8px;padding:12px 14px;background:linear-gradient(135deg,#2E5EFF 0%,#8B2FE0 100%);color:#fff">
            <div style="font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;opacity:.85;margin-bottom:4px">Amount Due</div>
            <div style="font-size:22px;font-weight:800;letter-spacing:.2px">${fmtMoney(inv.amount)}</div>
          </div>
          <div style="border-radius:8px;padding:11px 13px;background:#FFF7ED;border:1.5px dashed #FF6A3D;text-align:center">
            <div style="font-size:7.6px;font-weight:800;color:#C24F1E;text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Track Your Repair</div>
            <div style="font-size:15px;font-weight:800;font-family:'Courier New',monospace;letter-spacing:1.5px;color:#1a1a2e;background:#fff;border-radius:5px;padding:5px 4px;border:1px solid #FFD9C2">${escapeHtml(inv.trackingId||'—')}</div>
            <div style="font-size:7.3px;color:#946043;margin-top:5px;line-height:1.35">
              ${trackUrl
                ? `Visit <b style="color:#C24F1E">${escapeHtml(trackUrl.replace(/^https?:\/\//,''))}</b> and enter this ID for live status`
                : `Keep this ID safe — enter it on our website to check live repair status`}
            </div>
          </div>
          <div style="border:1px solid #E7E5F3;border-radius:8px;padding:9px 13px">
            <div style="font-size:7.6px;font-weight:800;color:#999;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Reference</div>
            <div style="font-size:9.5px;font-weight:700;font-family:monospace">${escapeHtml(inv.ref||'—')}</div>
          </div>
        </div>
      </div>

      ${invReleaseNotice(inv.phoneModel==='Accessory Sale' ? 'Items will not be returned or exchanged/replaced without this invoice.' : 'Phone will not be returned without this invoice.')}
      ${invSignatureBox(inv)}

      <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #E7E5F3;margin-top:10px;padding-top:8px;font-size:7.6px;color:#777">
        <span style="display:flex;align-items:center;gap:4px">${invIcon('mail','#8B2FE0')} ${escapeHtml(DB.settings.email)}</span>
        <span style="display:flex;align-items:center;gap:4px">${invIcon('pin','#8B2FE0')} ${escapeHtml(DB.settings.address)}</span>
        <span style="display:flex;align-items:center;gap:4px">${invIcon('phone','#8B2FE0')} ${escapeHtml(DB.settings.phone)}</span>
        <span style="font-weight:700;color:#B4B4C4;letter-spacing:.4px">SKY NEX • MOBILE REPAIR WORKSHOP &amp; INSTITUTE</span>
      </div>
    </div>`;
  printAreaWhenReady();
}

RENDERERS.expenses = function(c){
  crudPage(c, {
    collection:'expenses', title:'Expense', singular:'Expense', prefix:'EXP', newLabel:'Add Expense', enableExcel:true,
    searchKeys:['title','category','paidBy'],
    filters:[
      {key:'category', label:'Category', manageKey:'expensecats', options:DB.lists.expenseCategories},
      {key:'paidBy', label:'Paid By', manageKey:'paidby', options:DB.lists.paidBy},
    ],
    itemLabel:e=>e.title,
    columns:[
      {label:'Expense', render:e=>`<span class="cell-strong">${escapeHtml(e.title)}</span>`},
      {label:'Category', render:e=>`<span class="badge orange">${escapeHtml(e.category)}</span>`},
      {label:'Amount', render:e=>`<span class="cell-strong">${fmtMoney(e.amount)}</span>`},
      {label:'Paid By', render:e=>`<span class="cell-muted">${escapeHtml(e.paidBy)}</span>`},
      {label:'Date', render:e=>`<span class="cell-muted">${fmtDate(e.date)}</span>`},
    ],
    fields:[
      {key:'title', label:'Expense Title', full:true},
      {key:'category', label:'Category', type:'select', manageKey:'expensecats', options:DB.lists.expenseCategories.map(s=>({value:s,label:s}))},
      {key:'amount', label:'Amount (Rs.)', type:'number'},
      {key:'paidBy', label:'Paid By', type:'select', manageKey:'paidby', options:DB.lists.paidBy.map(s=>({value:s,label:s}))},
      {key:'date', label:'Date', type:'date', default:todayStr()},
    ],
    validate:d=> !d.title ? 'Expense title is required' : null,
  });
};

RENDERERS.repairs = function(c){
  crudPage(c, {
    collection:'repairs', title:'Repair', singular:'Repair Job', prefix:'RPR', newLabel:'New Repair Job', enableExcel:true,
    searchKeys:['device','issue'], getSearchVal:(r,k)=> k==='device' ? custName(r.customer)+' '+r.device : r[k],
    filters:[{key:'status', label:'Status', options:DB.lists.repairStatuses}],
    itemLabel:r=>r.device+' — '+custName(r.customer),
    columns:[
      {label:'Customer', render:r=>`<div class="name-cell"><div class="avatar-sm">${initials(custName(r.customer))}</div><span class="cell-strong">${custName(r.customer)}</span></div>`},
      {label:'Device', render:r=>`<div><div>${escapeHtml(r.device)}</div><div class="cell-muted">${escapeHtml(r.issue)}</div></div>`},
      {label:'Technician', render:r=>`<span class="cell-muted">${escapeHtml(r.technician||'—')}</span>`},
      {label:'Cost', render:r=>`<span class="cell-strong">${fmtMoney(r.cost)}</span>`},
      {label:'Status', render:r=>statusBadge(r.status)},
      {label:'Date', render:r=>`<span class="cell-muted">${fmtDate(r.date)}</span>`},
    ],
    fields:[
      {key:'customer', label:'Customer', type:'select', options:DB.customers.map(x=>({value:x.id,label:x.name}))},
      {key:'device', label:'Phone Model / Device'},
      {key:'imei', label:'IMEI / Serial No'},
      {key:'issue', label:'Fault Reported'},
      {key:'deviceCode', label:'Device Code / Passcode'},
      {key:'condition', label:'Device Condition'},
      {key:'accessories', label:'Accessories Received'},
      {key:'category', label:'Repair Type', type:'select', options:DB.categories.filter(x=>x.type==='Repair').map(x=>({value:x.id,label:x.name}))},
      {key:'technician', label:'Assigned Technician'},
      {key:'notes', label:'Technician Diagnosis / Notes', type:'textarea'},
      {key:'cost', label:'Quoted / Estimated Cost (Rs.)', type:'number'},
      {key:'status', label:'Status', type:'select', options:DB.lists.repairStatuses.map(s=>({value:s,label:s}))},
      {key:'date', label:'Intake Date', type:'date', default:todayStr()},
    ],
    validate:d=> !d.device ? 'Device is required' : null,
    wideForm:true,
    onSaved:(repair)=>{ if(repair.status==='Delivered') ensureInvoiceForRepair(repair); },
  });
};

RENDERERS.customers = function(c){
  crudPage(c, {
    collection:'customers', title:'Customer Data', singular:'Customer', prefix:'CUS', newLabel:'Add Customer',
    searchKeys:['name','phone','email'],
    filters:[],
    itemLabel:x=>x.name,
    viewFn:viewCustomer,
    columns:[
      {label:'Customer', render:x=>`<div class="name-cell"><div class="avatar-sm">${initials(x.name)}</div><div><div class="cell-strong">${escapeHtml(x.name)}</div><div class="cell-muted">${escapeHtml(x.address||'')}</div></div></div>`},
      {label:'Phone', render:x=>`<span class="cell-mono">${escapeHtml(x.phone)}</span>`},
      {label:'Email', render:x=>`<span class="cell-muted">${escapeHtml(x.email||'—')}</span>`},
      {label:'Repairs', render:x=> DB.orders.filter(o=>o.customer===x.id).length},
      {label:'Total Spent', render:x=>{
        const s = DB.orders.filter(o=>o.customer===x.id && o.status==='Completed').reduce((a,b)=>a+Number(b.total),0)
          + DB.invoices.filter(i=>i.customer===x.id && i.status==='Paid').reduce((a,b)=>a+Number(b.amount),0);
        return `<span class="cell-strong">${fmtMoney(s)}</span>`;
      }},
    ],
    fields:[
      {key:'name', label:'Full Name', full:true},
      {key:'phone', label:'Phone Number'},
      {key:'email', label:'Email Address', type:'email'},
      {key:'address', label:'Address', full:true},
    ],
    onCreateExtra:()=>({joined:todayStr()}),
    validate:d=> !d.name ? 'Customer name is required' : (!d.phone ? 'Phone number is required' : (d.email && !isValidEmail(d.email) ? 'Enter a valid email address' : null)),
  });
};
function viewCustomer(cust){
  const ords = DB.orders.filter(o=>o.customer===cust.id);
  openModal('Customer Profile', `
    <div style="display:flex;gap:14px;align-items:center;margin-bottom:18px">
      <div class="avatar-sm" style="width:52px;height:52px;font-size:16px;border-radius:14px">${initials(cust.name)}</div>
      <div><div style="font-weight:700;font-size:16px">${escapeHtml(cust.name)}</div>
      <div class="cell-muted">${escapeHtml(cust.phone)} • ${escapeHtml(cust.email||'')}</div>
      <div class="cell-muted">Customer since ${fmtDate(cust.joined)}</div></div>
    </div>
    <h4 style="font-size:13px;margin-bottom:8px">Repair History (${ords.length})</h4>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${ords.length? ords.map(o=>`<div style="display:flex;justify-content:space-between;font-size:12.8px;padding:8px 10px;background:var(--surface-2);border-radius:8px">
        <span>${orderDeviceSummary(o)}</span>${statusBadge(o.status)}</div>`).join('') : '<p class="cell-muted" style="font-size:12.5px">No repair bookings yet.</p>'}
    </div>
  `, `<button class="btn btn-outline" onclick="closeModal()">Close</button>`, true);
}

RENDERERS.users = function(c){
  if(!isAdmin()){
    c.innerHTML = `<div class="empty-state"><div class="icon-wrap">${icon('users')}</div><h4>Admin access required</h4><p>Only an administrator can view and manage staff accounts, usernames and passwords.</p></div>`;
    return;
  }
  const pending = DB.requests.filter(r=>r.status==='Pending');
  crudPage(c, {
    collection:'users', title:'Users', singular:'User', prefix:'USR', newLabel:'Add User', enableExcel:true,
    searchKeys:['name','email','role','username'],
    filters:[{key:'status', label:'Status', manageKey:'userstatus', options:DB.lists.userStatuses}],
    itemLabel:u=>u.name,
    canDelete:u=> u.id !== DB.settings.currentUser,
    canDeleteMsg:'You cannot delete your own account while logged in as it.',
    extraActionsHtml: pending.length ? `<a href="#settings" class="btn btn-outline">${icon('alert')} ${pending.length} Pending Request${pending.length>1?'s':''}</a>` : '',
    columns:[
      {label:'Name', render:u=>`<div class="name-cell"><div class="avatar-sm">${u.photo?`<img src="${u.photo}" style="width:100%;height:100%;object-fit:cover">`:initials(u.name)}</div><span class="cell-strong">${escapeHtml(u.name)}</span></div>`},
      {label:'Username', render:u=>`<span class="cell-mono">${escapeHtml(u.username||'—')}</span>`},
      {label:'Role', render:u=>`<span class="badge blue">${escapeHtml(u.role)}</span>`},
      {label:'Email', render:u=>`<span class="cell-muted">${escapeHtml(u.email)}</span>`},
      {label:'Phone', render:u=>`<span class="cell-mono">${escapeHtml(u.phone)}</span>`},
      {label:'Status', render:u=>statusBadge(u.status)},
    ],
    fields:[
      {key:'name', label:'Full Name', full:true},
      {key:'username', label:'Username (for login)'},
      {key:'password', label:'Password (required for new user, blank = keep current on edit)', type:'password'},
      {key:'role', label:'Role', type:'select', options:DB.roles.map(r=>({value:r.name,label:r.name}))},
      {key:'email', label:'Email', type:'email'},
      {key:'phone', label:'Phone'},
      {key:'status', label:'Status', type:'select', manageKey:'userstatus', options:DB.lists.userStatuses.map(s=>({value:s,label:s}))},
    ],
    validate:(d,item)=>{
      if(!d.name) return 'Name is required';
      if(!d.username) return 'Username is required';
      if(!/^[a-zA-Z0-9_.]+$/.test(d.username)) return 'Username can only contain letters, numbers, dot and underscore';
      const clash = DB.users.some(u=> u.username && u.username.toLowerCase()===d.username.toLowerCase() && (!item || u.id!==item.id));
      if(clash) return 'That username is already taken';
      if(!item && !d.password) return 'Password is required for a new user';
      if(d.email && !isValidEmail(d.email)) return 'Enter a valid email address';
      return null;
    },
    onSaved:(savedUser)=>{
      if(savedUser.id===DB.settings.currentUser) renderSidebar();
    },
  });
};

RENDERERS.roles = function(c){
  if(!isAdmin()){
    c.innerHTML = `<div class="empty-state"><div class="icon-wrap">${icon('shield')}</div><h4>Admin access required</h4><p>Only an administrator can view and manage roles and permissions.</p></div>`;
    return;
  }
  function moduleChecklistHtml(selected, namePrefix){
    return `<div class="role-modules-grid">${NAV.flatMap(g=>g.items).filter(it=>SELECTABLE_NAV.includes(it.id)).map(it=>`
      <label class="role-module-check">
        <input type="checkbox" data-mod="${it.id}" data-prefix="${namePrefix}" ${selected.includes(it.id)?'checked':''}>
        ${escapeHtml(it.label)}
      </label>`).join('')}</div>`;
  }
  function roleCardHtml(r){
    const usersOnRole = DB.users.filter(u=>u.role===r.name).length;
    const showModules = r.level==='manager' || r.level==='viewer';
    const hint = (ROLE_LEVELS.find(l=>l.id===r.level)||{}).hint || '';
    return `
    <div class="role-card" data-role="${r.id}">
      <div class="role-card-head">
        <h4>${escapeHtml(r.name)}<span class="cnt">${usersOnRole} user${usersOnRole===1?'':'s'}</span></h4>
        <button class="mini-btn danger" data-delrole="${r.id}" title="Delete role">${icon('trash')}</button>
      </div>
      <div class="role-level-pills">
        ${ROLE_LEVELS.map(l=>`<button type="button" class="role-level-pill" data-setlevel="${r.id}" data-level="${l.id}" data-active="${r.level===l.id?'1':'0'}">${l.label}</button>`).join('')}
      </div>
      <div class="role-level-hint" data-hint="${r.id}">${hint}</div>
      <div data-moduleswrap="${r.id}">${showModules?moduleChecklistHtml(r.modules||[], r.id):''}</div>
    </div>`;
  }

  function draw(){
    c.innerHTML = `
      <div class="section-head">
        <div><h2>Roles</h2><div class="sub">${DB.roles.length} role${DB.roles.length===1?'':'s'} configured</div></div>
      </div>
      <div class="card">
        <div class="card-body settings-card">
          <p style="font-size:12.3px;color:var(--text-muted);margin-bottom:16px">
            <b>Admin</b> gets everything, incl. Users, Roles, Import Backup and Erase All Data. <b>Sub Admin</b> gets everything except those owner-only pages. <b>Manager</b> and <b>Viewer</b> only get the pages ticked below — Manager can edit them, Viewer can only look.
          </p>
          <div id="rolesList">${DB.roles.map(roleCardHtml).join('')}</div>
        </div>
      </div>
      <div class="card" style="margin-top:18px">
        <div class="card-head"><h3>Add New Role</h3></div>
        <div class="card-body settings-card">
          <div class="role-new-form">
            <input type="text" class="role-new-name" id="newRoleName" placeholder="Role name — e.g. Front Desk">
            <div class="role-level-pills" id="newRoleLevelPills">
              ${ROLE_LEVELS.map((l,i)=>`<button type="button" class="role-level-pill" data-newlevel="${l.id}" data-active="${i===2?'1':'0'}">${l.label}</button>`).join('')}
            </div>
            <div id="newRoleModulesWrap">${moduleChecklistHtml([], 'new')}</div>
            <div style="text-align:right"><button class="btn btn-primary" id="addRoleBtn">${icon('plus')} Add Role</button></div>
          </div>
        </div>
      </div>
    `;
    bindEvents();
  }

  function bindEvents(){
    c.querySelectorAll('[data-setlevel]').forEach(btn=>{
      btn.onclick = async ()=>{
        const r = DB.roles.find(x=>x.id===btn.dataset.setlevel);
        if(!r) return;
        if(r.level==='admin' && btn.dataset.level!=='admin' && DB.roles.filter(x=>x.level==='admin').length<=1){
          toast('At least one Admin-level role must remain','error'); return;
        }
        const prevLevel = r.level;
        r.level = btn.dataset.level;
        try{ await Api.roles.update(r.id, {level:r.level}); save(); draw(); }
        catch(e){ r.level = prevLevel; toast(e.message||'Could not update role','error'); draw(); }
      };
    });
    c.querySelectorAll('[data-moduleswrap] input[data-mod]').forEach(cb=>{
      cb.onchange = async ()=>{
        const roleId = cb.dataset.prefix;
        const r = DB.roles.find(x=>x.id===roleId);
        if(!r) return;
        r.modules = r.modules||[];
        if(cb.checked){ if(!r.modules.includes(cb.dataset.mod)) r.modules.push(cb.dataset.mod); }
        else { r.modules = r.modules.filter(m=>m!==cb.dataset.mod); }
        try{ await Api.roles.update(r.id, {modules:r.modules}); save(); renderSidebar(); }
        catch(e){ toast(e.message||'Could not update role','error'); }
      };
    });
    c.querySelectorAll('[data-delrole]').forEach(btn=>{
      btn.onclick = ()=>{
        const r = DB.roles.find(x=>x.id===btn.dataset.delrole);
        if(!r) return;
        if(DB.users.some(u=>u.role===r.name)){ toast('Cannot delete — this role is assigned to one or more users','error'); return; }
        if(r.level==='admin' && DB.roles.filter(x=>x.level==='admin').length<=1){ toast('At least one Admin-level role must remain','error'); return; }
        openModal('Delete Role', `<p style="font-size:13.5px;color:var(--text-muted)">Delete the "${escapeHtml(r.name)}" role? This cannot be undone.</p>`,
          `<button class="btn btn-outline" onclick="closeModal()">Cancel</button><button class="btn" style="background:var(--red);color:#fff" id="confirmDelRoleBtn">${icon('trash')} Delete</button>`);
        document.getElementById('confirmDelRoleBtn').onclick = async ()=>{
          try{
            await Api.roles.remove(r.id);
            DB.roles = DB.roles.filter(x=>x.id!==r.id);
            save(); closeModal(); toast('Role deleted'); draw();
          }catch(e){ toast(e.message||'Could not delete role','error'); }
        };
      };
    });
    let newLevel = ROLE_LEVELS[2].id;
    const newModulesWrap = document.getElementById('newRoleModulesWrap');
    function refreshNewModulesVisibility(){
      newModulesWrap.innerHTML = (newLevel==='manager'||newLevel==='viewer') ? moduleChecklistHtml([], 'new') : '';
    }
    c.querySelectorAll('[data-newlevel]').forEach(btn=>{
      btn.onclick = ()=>{
        newLevel = btn.dataset.newlevel;
        c.querySelectorAll('[data-newlevel]').forEach(b2=> b2.dataset.active = (b2.dataset.newlevel===newLevel)?'1':'0');
        refreshNewModulesVisibility();
      };
    });
    document.getElementById('addRoleBtn').onclick = async ()=>{
      const nameInput = document.getElementById('newRoleName');
      const name = nameInput.value.trim();
      if(!name){ toast('Enter a role name first','error'); return; }
      if(DB.roles.some(r=>r.name.toLowerCase()===name.toLowerCase())){ toast('A role with that name already exists','error'); return; }
      const modules = Array.from(c.querySelectorAll('#newRoleModulesWrap input[data-mod]:checked')).map(cb=>cb.dataset.mod);
      const addBtn = document.getElementById('addRoleBtn');
      addBtn.disabled = true;
      try{
        const created = await Api.roles.create({name, level:newLevel, modules});
        DB.roles.push(created);
        save(); toast('Role added'); draw();
      }catch(e){ toast(e.message||'Could not add role','error'); addBtn.disabled = false; }
    };
  }

  draw();
};


RENDERERS.history = function(c){
  const typeIcon = {repair:'tool', invoice:'file', product:'box', order:'cart', sale:'cart', sales:'cart', expense:'wallet', customer:'user', category:'tag', user:'users', signature:'edit', general:'info', purchases:'truck', shopsales:'store'};
  const typeColor = {repair:'#FF6A3D', invoice:'#8B2FE0', product:'#2E5EFF', order:'#17B26A', sale:'#17B26A', sales:'#17B26A', expense:'#F5A623', customer:'#0EA5E9', category:'#D946EF', user:'#2E5EFF', signature:'#17914F', general:'#9AA0AE', purchases:'#FF6A3D', shopsales:'#17B26A'};
  c.innerHTML = `
    <div class="section-head"><div><h2>History</h2><div class="sub">${DB.history.length} recorded activities</div></div>
    <div class="head-actions"></div></div>
    <div class="card"><div class="card-body">
      <div style="display:flex;flex-direction:column;gap:0">
        ${DB.history.length===0 ? emptyState('History') : DB.history.map((h,i)=>`
        <div style="display:flex;gap:14px;padding:14px 0;${i<DB.history.length-1?'border-bottom:1px solid var(--border)':''}">
          <div class="avatar-sm" style="background:${typeColor[h.type]||'#9AA0AE'};border-radius:10px">${icon(typeIcon[h.type]||'info')}</div>
          <div style="flex:1"><div style="font-size:13.3px">${escapeHtml(h.text)}</div>
          <div class="cell-muted" style="margin-top:2px">${new Date(h.time).toLocaleString('en-GB',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})}</div></div>
        </div>`).join('')}
      </div>
    </div></div>`;
};

RENDERERS.gallery = function(c){
  const CATEGORY_LABELS = {users:'Staff Photos', products:'Stock Items', orders:'Repairs & Devices', sales:'Sales', invoices:'Invoices', signatures:'Signatures', general:'General'};
  let items = [];
  let activeCategory = 'all';
  let query = '';

  function fmtSize(bytes){
    if(bytes < 1024) return bytes+' B';
    if(bytes < 1024*1024) return (bytes/1024).toFixed(1)+' KB';
    return (bytes/1024/1024).toFixed(1)+' MB';
  }

  function draw(){
    const filtered = items.filter(it=>
      (activeCategory==='all' || it.category===activeCategory) &&
      (!query || it.filename.toLowerCase().includes(query.toLowerCase()))
    );
    const chips = ['all', ...Object.keys(CATEGORY_LABELS)].map(cat=>{
      const count = cat==='all' ? items.length : items.filter(it=>it.category===cat).length;
      const active = cat===activeCategory ? 'active' : '';
      return `<button type="button" class="chip-filter ${active}" data-cat="${cat}" style="border:1px solid var(--border);background:${cat===activeCategory?'var(--accent)':'var(--card)'};color:${cat===activeCategory?'#fff':'var(--text)'};padding:6px 14px;border-radius:20px;font-size:12.5px;font-weight:600;cursor:pointer;white-space:nowrap">${cat==='all'?'All':CATEGORY_LABELS[cat]} (${count})</button>`;
    }).join('');

    c.innerHTML = `
      <div class="section-head"><div><h2>Gallery</h2><div class="sub">${items.length} image(s) uploaded across the workshop — visible to the Administrator only</div></div>
      <div class="head-actions"><input type="text" id="gallerySearch" placeholder="Search filename…" value="${escapeHtml(query)}" style="padding:9px 14px;border-radius:10px;border:1px solid var(--border);background:var(--card);font-size:13px;min-width:180px"></div></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">${chips}</div>
      <div class="card"><div class="card-body">
        ${filtered.length===0 ? emptyState('Gallery') : `
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:14px">
          ${filtered.map(it=>`
            <a href="${it.url}" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;border:1px solid var(--border);border-radius:12px;overflow:hidden;display:block;background:var(--card)">
              <div style="aspect-ratio:1/1;background:#F2F3F8;display:flex;align-items:center;justify-content:center;overflow:hidden">
                <img src="${it.url}" alt="${escapeHtml(it.filename)}" loading="lazy" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.innerHTML='<div style=&quot;color:#9AA0AE&quot;>${icon('image')}</div>'">
              </div>
              <div style="padding:8px 10px">
                <div style="font-size:11.5px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.03em">${CATEGORY_LABELS[it.category]||it.category}</div>
                <div class="cell-muted" style="font-size:11.5px;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${escapeHtml(it.filename)}">${escapeHtml(it.filename)}</div>
                <div class="cell-muted" style="font-size:11px;margin-top:2px">${fmtSize(it.size)} · ${new Date(it.uploadedAt).toLocaleDateString('en-GB',{day:'2-digit',month:'short'})}</div>
              </div>
            </a>`).join('')}
        </div>`}
      </div></div>`;

    c.querySelectorAll('.chip-filter').forEach(btn=>{
      btn.onclick = ()=>{ activeCategory = btn.dataset.cat; draw(); };
    });
    const searchInput = document.getElementById('gallerySearch');
    if(searchInput) searchInput.oninput = ()=>{ query = searchInput.value; draw(); };
  }

  c.innerHTML = `<div class="card"><div class="card-body"><div class="cell-muted">Loading gallery…</div></div></div>`;
  Api.gallery.list().then(res=>{
    items = res.data;
    draw();
  }).catch(e=>{
    c.innerHTML = `<div class="card"><div class="card-body"><div class="cell-muted">${escapeHtml(e.message||'Could not load gallery')}</div></div></div>`;
  });
};

RENDERERS.reports = function(c){
  const monthly = computeMonthlyStats();
  const canExport = canEditData();

  c.innerHTML = `
    <div class="card">
      <div class="card-head"><div><h3>Summary</h3><div class="sub">Month-wise snapshot across all workshop records — Jan–Dec ${new Date().getFullYear()}</div></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${canExport?`<button class="btn btn-outline btn-sm" id="exportExcelBtn">${icon('download')} Export to Excel</button>`:''}
        </div>
      </div>
      <div class="table-card" style="border:none;border-radius:0">
        <table>
          <thead><tr><th>Month</th><th>Customers</th><th>Repairs</th><th>Orders</th><th>Invoices</th><th>Revenue</th><th>Expenses</th><th>Stock In/Out</th></tr></thead>
          <tbody>
            ${monthly.length===0 ? `<tr><td colspan="8" style="text-align:center;color:var(--text-muted);padding:22px">No records yet</td></tr>` :
              monthly.map(m=>`<tr>
                <td class="cell-strong">${monthLabel(m.key)}</td>
                <td>${m.customers}</td>
                <td>${m.repairs}</td>
                <td>${m.orders}</td>
                <td>${m.invoices}</td>
                <td class="cell-strong" style="color:var(--green)">${fmtMoney(m.revenue)}</td>
                <td class="cell-strong" style="color:var(--red)">${fmtMoney(m.expenses)}</td>
                <td><span style="color:var(--green)">↑ ${m.stockIn}</span> <span class="cell-muted">/</span> <span style="color:var(--red)">↓ ${m.stockOut}</span></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="custom-report-block">
        <h4>Download Custom Reports</h4>
        <p class="manage-hint">${canExport ? 'Export a single month or any date range to Excel' : 'Viewing only — exporting reports requires an editing role.'}</p>
        ${canExport ? `
        <div class="custom-report-row">
          <label>By Month</label>
          <input type="month" id="customMonthInput">
          <button class="btn btn-outline btn-sm" id="downloadMonthBtn">${icon('download')} Download Month</button>
        </div>
        <div class="custom-report-row">
          <label>By Date Range</label>
          <input type="date" id="rangeFromInput">
          <span class="to-label">to</span>
          <input type="date" id="rangeToInput">
          <button class="btn btn-outline btn-sm" id="downloadRangeBtn">${icon('download')} Download Range</button>
        </div>` : ''}
      </div>
    </div>
  `;
  if(!canExport) return;
  document.getElementById('exportExcelBtn').onclick = ()=>{
    const headers = ['Month','Customers','Repairs','Orders','Invoices','Revenue (Rs.)','Expenses (Rs.)','Stock In (pcs)','Stock Out (pcs)'];
    const rows = monthly.map(m=>[monthLabel(m.key), m.customers, m.repairs, m.orders, m.invoices, m.revenue, m.expenses, m.stockIn, m.stockOut]);
    const csv = [headers, ...rows].map(r=> r.map(v=> `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\r\n');
    const blob = new Blob(['\ufeff'+csv], {type:'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `skynex-report-summary-${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast('Report exported');
  };
  document.getElementById('downloadMonthBtn').onclick = ()=>{
    const val = document.getElementById('customMonthInput').value;
    if(!val){ toast('Pick a month first','error'); return; }
    const [y,m] = val.split('-').map(Number);
    const from = new Date(y, m-1, 1, 0,0,0);
    const to = new Date(y, m, 0, 23,59,59);
    const label = from.toLocaleDateString('en-GB',{month:'long', year:'numeric'});
    downloadRangeReport(from, to, label, `skynex-report-${val}.csv`);
  };
  document.getElementById('downloadRangeBtn').onclick = ()=>{
    const fv = document.getElementById('rangeFromInput').value;
    const tv = document.getElementById('rangeToInput').value;
    if(!fv || !tv){ toast('Pick both start and end dates','error'); return; }
    const from = new Date(fv+'T00:00:00');
    const to = new Date(tv+'T23:59:59');
    if(from>to){ toast('Start date must be before end date','error'); return; }
    const label = `${fmtDate(fv)} – ${fmtDate(tv)}`;
    downloadRangeReport(from, to, label, `skynex-report-${fv}_to_${tv}.csv`);
  };
};
function computeMonthlyStats(year){
  year = year || new Date().getFullYear();
  const map = {};
  for(let m=1; m<=12; m++){
    const key = year+'-'+String(m).padStart(2,'0');
    map[key] = {key, customers:0, repairs:0, orders:0, invoices:0, revenue:0, expenses:0, stockIn:0, stockOut:0};
  }
  function bucket(dateStr){
    if(!dateStr) return null;
    const d = new Date(dateStr);
    if(isNaN(d) || d.getFullYear()!==year) return null;
    const key = d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
    return map[key] || null;
  }
  DB.customers.forEach(cu=>{ const b=bucket(cu.joined); if(b) b.customers++; });
  DB.orders.forEach(o=>{ const b=bucket(o.date); if(b){ b.repairs++; b.orders++; if(o.status==='Completed'){ b.revenue += Number(o.total)||0; b.stockOut += Number(o.qty)||0; } } });
  DB.invoices.forEach(i=>{ const b=bucket(i.date); if(b){ b.invoices++; if(i.status==='Paid') b.revenue += Number(i.amount)||0; } });
  DB.sales.forEach(sl=>{ const b=bucket(sl.date); if(b){ if(sl.status==='Paid') b.revenue += Number(sl.total)||0; b.stockOut += (sl.items||[]).reduce((s,it)=>s+(Number(it.qty)||0),0); } });
  DB.expenses.forEach(e=>{ const b=bucket(e.date); if(b) b.expenses += Number(e.amount)||0; });
  DB.history.forEach(h=>{ if(h.type==='products' && h.meta && h.meta.kind==='stock-in'){ const b=bucket(h.time); if(b) b.stockIn += Number(h.meta.qty)||0; } });
  return Object.values(map).sort((a,b)=> a.key<b.key?-1:1);
}
function monthLabel(key){
  const [y,m] = key.split('-').map(Number);
  return new Date(y, m-1, 1).toLocaleDateString('en-GB',{month:'long', year:'numeric'});
}
function computeRangeStats(from, to){
  const stats = {customers:0, repairs:0, orders:0, invoices:0, revenue:0, expenses:0, stockIn:0, stockOut:0};
  const inRange = d=>{ if(!d) return false; const dt = new Date(d); if(isNaN(dt)) return false; return dt>=from && dt<=to; };
  DB.customers.forEach(cu=>{ if(inRange(cu.joined)) stats.customers++; });
  DB.orders.forEach(o=>{ if(inRange(o.date)){ stats.repairs++; stats.orders++; if(o.status==='Completed'){ stats.revenue += Number(o.total)||0; stats.stockOut += Number(o.qty)||0; } } });
  DB.invoices.forEach(i=>{ if(inRange(i.date)){ stats.invoices++; if(i.status==='Paid') stats.revenue += Number(i.amount)||0; } });
  DB.sales.forEach(sl=>{ if(inRange(sl.date)){ if(sl.status==='Paid') stats.revenue += Number(sl.total)||0; stats.stockOut += (sl.items||[]).reduce((s,it)=>s+(Number(it.qty)||0),0); } });
  DB.expenses.forEach(e=>{ if(inRange(e.date)) stats.expenses += Number(e.amount)||0; });
  DB.history.forEach(h=>{ if(h.type==='products' && h.meta && h.meta.kind==='stock-in' && inRange(h.time)) stats.stockIn += Number(h.meta.qty)||0; });
  return stats;
}
function downloadRangeReport(from, to, periodLabel, filename){
  const s = computeRangeStats(from, to);
  const headers = ['Period','Customers','Repairs','Orders','Invoices','Revenue (Rs.)','Expenses (Rs.)','Stock In (pcs)','Stock Out (pcs)'];
  const row = [periodLabel, s.customers, s.repairs, s.orders, s.invoices, s.revenue, s.expenses, s.stockIn, s.stockOut];
  const csv = [headers, row].map(r=> r.map(v=> `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\r\n');
  const blob = new Blob(['\ufeff'+csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Report exported');
}

RENDERERS.settings = function(c){
  const s = DB.settings;
  const curUser = currentUserObj();
  const admin = isAdmin();

  function accountCardHtml(){
    if(!curUser) return `<p style="font-size:13px;color:var(--text-muted)">No user account found.</p>`;
    if(admin){
      return `
        <div class="account-avatar-row">
          <div class="account-avatar" id="acctAvatarPreview">${curUser.photo ? `<img src="${curUser.photo}" alt="">` : `<span>${initials(curUser.name)}</span>`}</div>
          <div class="img-actions">
            <input type="file" accept="image/*" id="acctPhotoFile" style="display:none">
            <button type="button" class="btn btn-outline btn-sm" id="acctUploadBtn">${icon('camera')} Upload Photo</button>
            <button type="button" class="btn btn-outline btn-sm" id="acctRemoveBtn">${icon('trash')} Remove</button>
          </div>
        </div>
        <div class="form-grid" style="margin-top:18px">
          ${renderField({key:'acctName', label:'Display Name', full:true}, curUser.name)}
          ${renderField({key:'acctUsername', label:'Username (for login)', full:true}, curUser.username)}
          ${renderField({key:'acctPassword', label:'New Password (leave blank to keep current)', type:'password', full:true}, '')}
        </div>
        <div style="margin-top:16px;text-align:right"><button class="btn btn-primary" id="saveAccountBtn">${icon('check')} Save Changes</button></div>`;
    }
    const myReqs = myPendingRequests(curUser.id);
    const pendingPwd = myReqs.find(r=>r.type==='password' && r.status==='Pending');
    const pendingPhoto = myReqs.find(r=>r.type==='photo' && r.status==='Pending');
    return `
      <div class="account-avatar-row">
        <div class="account-avatar" id="acctAvatarPreview">${curUser.photo ? `<img src="${curUser.photo}" alt="">` : `<span>${initials(curUser.name)}</span>`}</div>
        <div class="img-actions">
          <input type="file" accept="image/*" id="acctPhotoFile" style="display:none">
          <button type="button" class="btn btn-outline btn-sm" id="acctRequestPhotoBtn" ${pendingPhoto?'disabled':''}>${icon('camera')} ${pendingPhoto?'Photo Request Pending':'Request Photo Change'}</button>
        </div>
      </div>
      <div class="form-grid" style="margin-top:18px">
        <div class="field full"><label>Display Name</label><input type="text" value="${escapeHtml(curUser.name)}" disabled></div>
        <div class="field full"><label>Username</label><input type="text" value="${escapeHtml(curUser.username||'')}" disabled></div>
      </div>
      <p class="field-locked-note">Your name, username and password can only be changed by an administrator.</p>
      <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border)">
        <div class="settings-row" style="padding-top:0">
          <div class="l"><h4>Password</h4><p>${pendingPwd ? 'Your password change request is pending admin approval.' : 'Ask the admin to set a new password for you.'}</p></div>
          <button type="button" class="btn btn-outline btn-sm" id="acctRequestPwdBtn" ${pendingPwd?'disabled':''}>${icon('edit')} ${pendingPwd?'Request Pending':'Request Password Change'}</button>
        </div>
      </div>
      ${myReqs.length ? `
      <div style="margin-top:8px">
        <h4 style="font-size:13px;margin-bottom:8px">My Requests</h4>
        ${myReqs.slice(0,5).map(r=>`
          <div class="request-row">
            <div class="l"><div class="t">${r.type==='password'?'Password change':'Profile photo change'}</div><div class="d">${fmtDate(r.date)}</div></div>
            ${statusBadge(r.status)}
          </div>`).join('')}
      </div>` : ''}
    `;
  }

  function requestsCardHtml(){
    const pending = DB.requests.filter(r=>r.status==='Pending').slice().reverse();
    if(!pending.length) return `<p style="font-size:13px;color:var(--text-muted)">No pending requests from staff right now.</p>`;
    return pending.map(r=>{
      const u = DB.users.find(x=>x.id===r.userId);
      return `<div class="request-row">
        <div class="l" style="display:flex;align-items:center;gap:10px">
          ${r.type==='photo' ? `<div class="request-photo-preview">${r.payload.photo?`<img src="${r.payload.photo}" alt="">`:''}</div>` : `<div class="avatar-sm">${icon('edit')}</div>`}
          <div>
            <div class="t">${escapeHtml(u?u.name:'Unknown user')} — ${r.type==='password'?'Password change':'Profile photo change'}</div>
            <div class="d">Requested ${fmtDate(r.date)}</div>
          </div>
        </div>
        <div class="acts">
          <button class="btn btn-outline btn-sm" data-reqreject="${r.id}">${icon('x')} Reject</button>
          <button class="btn btn-primary btn-sm" data-reqapprove="${r.id}">${icon('check')} Approve</button>
        </div>
      </div>`;
    }).join('');
  }

  c.innerHTML = `
    <div class="grid-2" style="grid-template-columns:1fr 1fr">
      <div class="card">
        <div class="card-head"><div><h3>My Account</h3><div class="sub">${admin?'Update your username, password and profile photo':'View your profile — request changes via admin'}</div></div></div>
        <div class="card-body settings-card">${accountCardHtml()}</div>
      </div>
      ${admin ? `
      <div class="card">
        <div class="card-head"><div><h3>Account Requests</h3><div class="sub">Approve or reject staff requests to change password / photo</div></div></div>
        <div class="card-body settings-card">${requestsCardHtml()}</div>
      </div>` : `
      <div class="card">
        <div class="card-head"><h3>Preferences</h3></div>
        <div class="card-body settings-card">
          <div class="settings-row"><div class="l"><h4>Dark Mode</h4><p>Switch the portal to a dark theme.</p></div>
            <div class="switch ${document.documentElement.dataset.theme==='dark'?'on':''}" id="darkSwitch"></div></div>
          <div class="settings-row"><div class="l"><h4>Low Stock Alerts</h4><p>Show a badge in the sidebar when stock runs low.</p></div>
            <div class="switch ${s.lowStockAlerts?'on':''}" id="lowStockSwitch"></div></div>
          <div class="settings-row"><div class="l"><h4>Email Notifications</h4><p>Get notified about new orders and invoices.</p></div>
            <div class="switch ${s.emailNotify?'on':''}" id="emailSwitch"></div></div>
        </div>
      </div>`}
    </div>
    ${admin ? `
    <div class="grid-2" style="grid-template-columns:1fr 1fr">
      <div class="card">
        <div class="card-head"><h3>Business Profile</h3></div>
        <div class="card-body settings-card">
          <div class="form-grid">
            ${renderField({key:'businessName',label:'Business Name',full:true}, s.businessName)}
            ${renderField({key:'tagline',label:'Tagline',full:true}, s.tagline)}
            ${renderField({key:'address',label:'Address',full:true}, s.address)}
            ${renderField({key:'phone',label:'Phone'}, s.phone)}
            ${renderField({key:'email',label:'Email',type:'email'}, s.email)}
            ${renderField({key:'trackingUrl',label:'Order Tracking Page URL (shown on invoices, once your website is live)',full:true,placeholder:'e.g. https://skynex.pk/track'}, s.trackingUrl)}
          </div>
          <div style="margin-top:16px;text-align:right"><button class="btn btn-primary" id="saveProfileBtn">${icon('check')} Save Profile</button></div>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3>Preferences</h3></div>
        <div class="card-body settings-card">
          <div class="settings-row"><div class="l"><h4>Dark Mode</h4><p>Switch the portal to a dark theme.</p></div>
            <div class="switch ${document.documentElement.dataset.theme==='dark'?'on':''}" id="darkSwitch"></div></div>
          <div class="settings-row"><div class="l"><h4>Low Stock Alerts</h4><p>Show a badge in the sidebar when stock runs low.</p></div>
            <div class="switch ${s.lowStockAlerts?'on':''}" id="lowStockSwitch"></div></div>
          <div class="settings-row"><div class="l"><h4>Email Notifications</h4><p>Get notified about new orders and invoices.</p></div>
            <div class="switch ${s.emailNotify?'on':''}" id="emailSwitch"></div></div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><div><h3>Digest Email Times</h3><div class="sub">When the pending-work (AM) and end-of-day summary (PM) emails go out. Administrator only.</div></div></div>
      <div class="card-body settings-card">
        <div class="form-grid">
          <div class="field"><label>Morning Digest (Pending Work)</label><input type="time" id="f_morningDigestTime" value="${escapeHtml(s.morningDigestTime||'10:00')}"></div>
          <div class="field"><label>Night Digest (Day's Summary)</label><input type="time" id="f_nightDigestTime" value="${escapeHtml(s.nightDigestTime||'22:00')}"></div>
        </div>
        <div style="margin-top:16px;text-align:right"><button class="btn btn-primary" id="saveDigestTimesBtn">${icon('check')} Save Times</button></div>
      </div>
    </div>
    <div class="grid-2" style="grid-template-columns:1fr 1fr">
      <div class="card">
        <div class="card-head"><div><h3>Data Backup</h3><div class="sub">Your data lives only in this browser</div></div></div>
        <div class="card-body settings-card">
          <div class="two-col-list" style="grid-template-columns:1fr">
            <button type="button" class="btn btn-outline" style="justify-content:center" id="exportBackupBtn">${icon('download')} Export Backup (.json)</button>
            <input type="file" accept="application/json" id="importBackupFile" style="display:none">
            <button type="button" class="btn btn-outline" style="justify-content:center" id="importBackupBtn">${icon('upload')} Import Backup</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3 style="color:var(--red)">Danger Zone</h3></div>
        <div class="card-body settings-card">
          <div class="settings-row"><div class="l"><h4>Reset Data</h4><p>Permanently delete every record in this app — stock, customers, repairs, orders, invoices, expenses, categories, users and history. This cannot be undone.</p></div>
            <button class="btn btn-danger-ghost btn-sm" id="resetBtn">${icon('trash')} Reset Data</button></div>
        </div>
      </div>
    </div>` : ''}
  `;

  if(curUser && admin){
    let acctPhotoDraft = curUser.photo || '';
    let acctPhotoIsNewUpload = false;
    const refreshAcctAvatar = ()=>{
      document.getElementById('acctAvatarPreview').innerHTML = acctPhotoDraft ? `<img src="${acctPhotoDraft}" alt="">` : `<span>${initials(document.getElementById('f_acctName').value || curUser.name)}</span>`;
    };
    document.getElementById('acctUploadBtn').onclick = ()=> document.getElementById('acctPhotoFile').click();
    document.getElementById('acctPhotoFile').onchange = e=>{
      const file = e.target.files[0]; if(!file) return;
      const reader = new FileReader();
      reader.onload = ()=>{ acctPhotoDraft = reader.result; acctPhotoIsNewUpload = true; refreshAcctAvatar(); };
      reader.readAsDataURL(file);
      e.target.value = '';
    };
    document.getElementById('acctRemoveBtn').onclick = ()=>{ acctPhotoDraft = ''; acctPhotoIsNewUpload = false; refreshAcctAvatar(); };
    document.getElementById('saveAccountBtn').onclick = async ()=>{
      const dname = document.getElementById('f_acctName').value.trim();
      const uname = document.getElementById('f_acctUsername').value.trim();
      if(!dname){ toast('Display name is required','error'); return; }
      if(!uname){ toast('Username is required','error'); return; }
      const clash = DB.users.some(u=> u.id!==curUser.id && u.username && u.username.toLowerCase()===uname.toLowerCase());
      if(clash){ toast('That username is already taken','error'); return; }
      const btn = document.getElementById('saveAccountBtn');
      btn.disabled = true; btn.textContent = 'Saving…';
      let photoUrl = acctPhotoDraft;
      let uploadedNewPhoto = false;
      const oldPhoto = curUser.photo;
      const clearingPhoto = !acctPhotoDraft && Api.isUploadedFileUrl(oldPhoto);
      try{
        if(acctPhotoIsNewUpload && Api.isDataUrl(acctPhotoDraft)){
          const file = Api.dataUrlToFile(acctPhotoDraft, 'avatar');
          photoUrl = await Api.Uploads.upload(file, 'users');
          uploadedNewPhoto = true;
        }
        const payload = {name:dname, username:uname, photo: photoUrl || null};
        const pwd = document.getElementById('f_acctPassword').value;
        if(pwd) payload.password = pwd;
        const updated = await Api.users.update(curUser.id, payload);
        Object.assign(curUser, updated);
        if(uploadedNewPhoto && Api.isUploadedFileUrl(oldPhoto) && oldPhoto !== photoUrl) Api.Uploads.remove(oldPhoto);
        else if(clearingPhoto) Api.Uploads.remove(oldPhoto);
        save(); toast('Account updated'); log('Account profile updated','user'); renderSidebar();
        document.getElementById('f_acctPassword').value = '';
      }catch(e){
        if(uploadedNewPhoto && photoUrl) Api.Uploads.remove(photoUrl);
        toast(e.message||'Could not save account','error');
      }finally{
        btn.disabled = false; btn.textContent = 'Save Changes';
      }
    };
  } else if(curUser){
    const reqPhotoBtn = document.getElementById('acctRequestPhotoBtn');
    if(reqPhotoBtn && !reqPhotoBtn.disabled){
      reqPhotoBtn.onclick = ()=> document.getElementById('acctPhotoFile').click();
      document.getElementById('acctPhotoFile').onchange = async e=>{
        const file = e.target.files[0]; if(!file) return;
        e.target.value = '';
        reqPhotoBtn.disabled = true; reqPhotoBtn.textContent = 'Uploading…';
        let uploadedUrl = null;
        try{
          uploadedUrl = await Api.Uploads.upload(file, 'users');
          const created = await Api.requests.create({type:'photo', payload:{photo:uploadedUrl}});
          DB.requests.push(created);
          save(); toast('Photo change request sent to admin'); log('Profile photo change requested','user'); route();
        }catch(err){
          if(uploadedUrl) Api.Uploads.remove(uploadedUrl);
          toast(err.message||'Could not send request','error');
          reqPhotoBtn.disabled = false; reqPhotoBtn.textContent = icon('camera')+' Request Photo Change';
        }
      };
    }
    const reqPwdBtn = document.getElementById('acctRequestPwdBtn');
    if(reqPwdBtn && !reqPwdBtn.disabled){
      reqPwdBtn.onclick = ()=>{
        openModal('Request Password Change', `
          <div class="form-grid">
            <div class="field full"><label>New Password</label><input type="password" id="reqNewPwd" placeholder="Enter desired new password"></div>
            <div class="field full"><label>Confirm Password</label><input type="password" id="reqNewPwd2" placeholder="Re-enter new password"></div>
          </div>
          <p class="field-locked-note" style="margin-top:10px">This will be sent to your administrator for approval — it will not take effect until approved.</p>
        `, `<button class="btn btn-outline" onclick="closeModal()">Cancel</button><button class="btn btn-primary" id="submitReqPwdBtn">${icon('check')} Send Request</button>`);
        document.getElementById('submitReqPwdBtn').onclick = async ()=>{
          const p1 = document.getElementById('reqNewPwd').value;
          const p2 = document.getElementById('reqNewPwd2').value;
          if(!p1 || p1.length<4){ toast('Password should be at least 4 characters','error'); return; }
          if(p1!==p2){ toast('Passwords do not match','error'); return; }
          const btn = document.getElementById('submitReqPwdBtn');
          btn.disabled = true;
          try{
            const created = await Api.requests.create({type:'password', payload:{newPassword:p1}});
            DB.requests.push(created);
            save(); closeModal(); toast('Password change request sent to admin'); log('Password change requested','user'); route();
          }catch(e){ toast(e.message||'Could not send request','error'); btn.disabled = false; }
        };
      };
    }
  }

  if(admin){
    c.querySelectorAll('[data-reqapprove]').forEach(btn=>{
      btn.onclick = async ()=>{
        const req = DB.requests.find(r=>r.id===btn.dataset.reqapprove);
        if(!req) return;
        btn.disabled = true;
        try{
          const updated = await Api.requests.update(req.id, {status:'Approved'});
          Object.assign(req, updated);
          const target = DB.users.find(u=>u.id===req.userId);
          if(target){
            if(req.type==='photo') target.photo = req.payload.photo;
            const fresh = await Api.users.get(req.userId).catch(()=>null);
            if(fresh) Object.assign(target, fresh);
          }
          save(); toast('Request approved'); log(`${req.type==='password'?'Password':'Photo'} change approved for ${target?target.name:'user'}`, 'user'); route(); renderSidebar();
        }catch(e){ toast(e.message||'Could not approve request','error'); btn.disabled = false; }
      };
    });
    c.querySelectorAll('[data-reqreject]').forEach(btn=>{
      btn.onclick = async ()=>{
        const req = DB.requests.find(r=>r.id===btn.dataset.reqreject);
        if(!req) return;
        btn.disabled = true;
        try{
          const updated = await Api.requests.update(req.id, {status:'Rejected'});
          Object.assign(req, updated);
          save(); toast('Request rejected'); route();
        }catch(e){ toast(e.message||'Could not reject request','error'); btn.disabled = false; }
      };
    });
  }

  if(admin){
    document.getElementById('exportBackupBtn').onclick = ()=>{
      const blob = new Blob([JSON.stringify(DB, null, 2)], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `skynex-backup-${new Date().toISOString().slice(0,10)}.json`;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast('Backup exported (a snapshot for your records — data itself now lives in MySQL, not this file)');
    };
    const importBtn = document.getElementById('importBackupBtn');
    if(importBtn){
      importBtn.disabled = true;
      importBtn.title = 'Disabled — data now lives in a shared MySQL database. Restore via a database backup instead.';
    }
    bindPhoneMask('f_phone');
    document.getElementById('saveProfileBtn').onclick = async ()=>{
      const emailVal = document.getElementById('f_email').value.trim();
      if(emailVal && !isValidEmail(emailVal)){ toast('Enter a valid business email address','error'); return; }
      const payload = {};
      ['businessName','tagline','address','phone','email','trackingUrl'].forEach(k=>{ payload[k] = document.getElementById('f_'+k).value; });
      const btn = document.getElementById('saveProfileBtn');
      btn.disabled = true;
      try{
        const updated = await Api.settings.update(payload);
        Object.assign(s, updated);
        save(); toast('Business profile saved'); log('Business profile updated','general');
      }catch(e){ toast(e.message||'Could not save settings','error'); }
      finally{ btn.disabled = false; }
    };
    document.getElementById('saveDigestTimesBtn').onclick = async ()=>{
      const morningVal = document.getElementById('f_morningDigestTime').value;
      const nightVal = document.getElementById('f_nightDigestTime').value;
      if(!morningVal || !nightVal){ toast('Set both a morning and night time', 'error'); return; }
      const btn = document.getElementById('saveDigestTimesBtn');
      btn.disabled = true;
      try{
        const updated = await Api.settings.update({morningDigestTime: morningVal, nightDigestTime: nightVal});
        Object.assign(s, updated);
        save(); toast('Digest email times saved'); log('Digest email times updated','general');
      }catch(e){ toast(e.message||'Could not save digest times','error'); }
      finally{ btn.disabled = false; }
    };
    document.getElementById('resetBtn').onclick = confirmWipeAllData;
  }

  document.getElementById('darkSwitch').onclick = async function(){
    const dark = document.documentElement.dataset.theme==='dark';
    document.documentElement.dataset.theme = dark ? 'light':'dark';
    s.theme = document.documentElement.dataset.theme; save();
    this.classList.toggle('on');
    try{ await Api.settings.update({theme:s.theme}); }catch(e){}
  };
  document.getElementById('lowStockSwitch').onclick = async function(){
    s.lowStockAlerts = !s.lowStockAlerts; save(); this.classList.toggle('on'); renderSidebar();
    try{ await Api.settings.update({lowStockAlerts:s.lowStockAlerts}); }catch(e){}
  };
  document.getElementById('emailSwitch').onclick = async function(){
    s.emailNotify = !s.emailNotify; save(); this.classList.toggle('on');
    try{ await Api.settings.update({emailNotify:s.emailNotify}); }catch(e){}
  };
};

function confirmWipeAllData(){
  openModal('Reset Data', `
    <p style="font-size:13.5px;color:var(--text-muted)">Data now lives in a shared MySQL database used by everyone logged into this system, not just this browser — so a one-click "erase everything" button here is too risky to leave enabled.</p>
    <p style="font-size:13.5px;color:var(--text-muted);margin-top:10px">To reset the database, run this on the server (from the <code>backend/</code> folder), which drops and recreates every table from <code>schema.sql</code>:</p>
    <pre style="font-size:12px;background:var(--surface-2);padding:10px;border-radius:8px;margin-top:8px;white-space:pre-wrap">mysql -u root -p -e "DROP DATABASE skynex; CREATE DATABASE skynex;"
mysql -u root -p skynex &lt; schema.sql
npm run seed</pre>`,
    `<button class="btn btn-primary" onclick="closeModal()">Got it</button>`);
}


const MANAGE_LIST_BLOCKS = [
  {key:'itemcats', label:'Item Categories', hint:'Used as the Category field on Stock Items.',
    collection:'categories', filter:x=>x.type==='Product', extra:{type:'Product'}, prefix:'CAT',
    inUse:id=>DB.products.some(p=>p.category===id)},
  {key:'orderstatus', label:'Repair Status', hint:'Used as the Status field on the Repair page.',
    listKey:'orderStatuses', inUse:name=>DB.orders.some(o=>o.status===name)},
  {key:'invoicestatus', label:'Invoice Status', hint:'Used as the Status field on Invoices.',
    listKey:'invoiceStatuses', inUse:name=>DB.invoices.some(i=>i.status===name)},
  {key:'expensecats', label:'Category', hint:'Used as the Category field on Expenses.',
    listKey:'expenseCategories', inUse:name=>DB.expenses.some(e=>e.category===name)},
  {key:'paidby', label:'Paid By', hint:'Used as the Paid By field on Expenses.',
    listKey:'paidBy', inUse:name=>DB.expenses.some(e=>e.paidBy===name)},
  {key:'repaircats', label:'Repair Type', hint:'Used as the Category field on Repair jobs.',
    collection:'categories', filter:x=>x.type==='Repair', extra:{type:'Repair'}, prefix:'CAT',
    inUse:id=>DB.orders.some(o=>o.category===id)},
  {key:'userstatus', label:'Status', hint:'Used as the Status field on Users.',
    listKey:'userStatuses', inUse:name=>DB.users.some(u=>u.status===name)},
];
const MANAGE_LIST_BLOCKS_BY_KEY = Object.fromEntries(MANAGE_LIST_BLOCKS.map(b=>[b.key,b]));
function manageListItems(b){
  if(b.collection) return DB[b.collection].filter(x=> b.filter ? b.filter(x) : true).map(x=>({id:x.id, label:x.name}));
  return DB.lists[b.listKey].map(name=>({id:name, label:name}));
}
function manageListChipsHtml(b){
  const items = manageListItems(b);
  return items.length ? items.map(it=>`<span class="tagchip">${escapeHtml(it.label)}<button type="button" class="tagchip-x" data-mgrm="${escapeHtml(it.id)}" title="Remove">${icon('x')}</button></span>`).join('')
    : `<span class="manage-empty">No options yet — add one below.</span>`;
}
function refreshManagedFilterSelects(){
  document.querySelectorAll('.tb-filter[data-managekey]').forEach(sel=>{
    const b = MANAGE_LIST_BLOCKS_BY_KEY[sel.dataset.managekey];
    if(!b || !sel.options.length) return;
    const current = sel.value;
    const items = manageListItems(b);
    const allOptHtml = sel.options[0].outerHTML;
    sel.innerHTML = allOptHtml + items.map(it=>`<option value="${escapeHtml(String(it.id))}" ${current===String(it.id)?'selected':''}>${escapeHtml(it.label)}</option>`).join('');
  });
}
function bindManageSelectField(f){
  const b = MANAGE_LIST_BLOCKS_BY_KEY[f.manageKey];
  const id = 'f_'+f.key;
  const select = document.getElementById(id);
  const toggleBtn = document.getElementById(id+'_mgbtn');
  const panel = document.getElementById(id+'_mgpanel');
  const tagsEl = document.getElementById(id+'_mgtags');
  const input = document.getElementById(id+'_mginput');
  const addBtn = document.getElementById(id+'_mgaddbtn');
  if(!b || !select || !toggleBtn) return;

  function syncFieldOptions(){
    f.options = manageListItems(b).map(it=>({value:it.id, label:it.label}));
  }
  function refreshSelect(preferId){
    const items = manageListItems(b);
    const current = select.value;
    select.innerHTML = items.length ? items.map(it=>`<option value="${escapeHtml(it.id)}">${escapeHtml(it.label)}</option>`).join('') : `<option value="">— None yet —</option>`;
    if(preferId!==undefined && items.some(it=>String(it.id)===String(preferId))) select.value = preferId;
    else if(items.some(it=>String(it.id)===String(current))) select.value = current;
  }
  function refreshTags(){
    tagsEl.innerHTML = manageListChipsHtml(b);
    tagsEl.querySelectorAll('[data-mgrm]').forEach(btn=>{
      btn.onclick = async ()=>{
        const val = btn.dataset.mgrm;
        if(b.inUse(val)){ toast('Cannot remove — still in use by existing records','error'); return; }
        btn.disabled = true;
        try{
          if(b.collection){
            await Api[b.collection].remove(val);
            const idx = DB[b.collection].findIndex(x=>x.id===val);
            if(idx>-1) DB[b.collection].splice(idx,1);
          } else {
            const next = DB.lists[b.listKey].filter(x=>x!==val);
            await Api.lists.set(b.listKey, next);
            DB.lists[b.listKey] = next;
          }
          save(); syncFieldOptions(); refreshTags(); refreshSelect(); refreshManagedFilterSelects(); toast('Removed'); renderSidebar();
        }catch(e){ toast(e.message||'Could not remove','error'); btn.disabled = false; }
      };
    });
  }
  const doAdd = async ()=>{
    const name = input.value.trim();
    if(!name){ toast('Enter a name first','error'); return; }
    addBtn.disabled = true;
    try{
      let newId;
      if(b.collection){
        if(DB[b.collection].some(x=> (b.filter?b.filter(x):true) && x.name.toLowerCase()===name.toLowerCase())){ toast('Already exists','error'); addBtn.disabled=false; return; }
        const created = await Api[b.collection].create(Object.assign({name}, b.extra||{}));
        DB[b.collection].push(created);
        newId = created.id;
      } else {
        if(DB.lists[b.listKey].some(x=>x.toLowerCase()===name.toLowerCase())){ toast('Already exists','error'); addBtn.disabled=false; return; }
        const next = [...DB.lists[b.listKey], name];
        await Api.lists.set(b.listKey, next);
        DB.lists[b.listKey] = next;
        newId = name;
      }
      save(); syncFieldOptions(); input.value=''; refreshTags(); refreshSelect(newId); refreshManagedFilterSelects(); toast('Added'); renderSidebar();
    }catch(e){ toast(e.message||'Could not add','error'); }
    finally{ addBtn.disabled = false; }
  };
  addBtn.onclick = doAdd;
  input.onkeydown = e=>{ if(e.key==='Enter'){ e.preventDefault(); doAdd(); } };
  toggleBtn.onclick = ()=>{
    const opening = panel.style.display==='none';
    panel.style.display = opening ? 'block' : 'none';
    toggleBtn.classList.toggle('open', opening);
    toggleBtn.innerHTML = opening ? icon('x') : icon('plus');
    if(opening){ refreshTags(); input.focus(); }
  };
}

document.getElementById('menuToggle').addEventListener('click', ()=> document.getElementById('sidebar').classList.toggle('open'));
document.getElementById('themeToggleBtn').addEventListener('click', async ()=>{
  const dark = document.documentElement.dataset.theme==='dark';
  document.documentElement.dataset.theme = dark?'light':'dark';
  DB.settings.theme = document.documentElement.dataset.theme; save();
  if(Api.Auth.isLoggedIn()){ try{ await Api.settings.update({theme: DB.settings.theme}); }catch(e){} }
});
document.getElementById('notifBtn').addEventListener('click', ()=>{
  const n = lowStockItems().length + DB.invoices.filter(i=>i.status!=='Paid').length;
  openModal('Notifications', `
    <div style="display:flex;flex-direction:column;gap:10px">
      ${lowStockItems().length? `<div style="padding:12px;background:rgba(240,68,56,.08);border-radius:10px;font-size:13px">${icon('alert')} ${lowStockItems().length} item(s) low on stock</div>`:''}
      ${DB.invoices.filter(i=>i.status!=='Paid').length? `<div style="padding:12px;background:rgba(245,166,35,.1);border-radius:10px;font-size:13px">${icon('file')} ${DB.invoices.filter(i=>i.status!=='Paid').length} unpaid invoice(s)</div>`:''}
      ${activeRepairs().length? `<div style="padding:12px;background:rgba(46,94,255,.08);border-radius:10px;font-size:13px">${icon('tool')} ${activeRepairs().length} repair job(s) in progress</div>`:''}
      ${n===0?'<p style="font-size:12.8px;color:var(--text-muted)">You are all caught up.</p>':''}
    </div>`, `<button class="btn btn-outline" onclick="closeModal()">Close</button>`);
});

document.getElementById('logoutBtn').addEventListener('click', doLogout);

document.documentElement.dataset.theme = DB.settings.theme || 'light';
(async function boot(){
  if(await tryResumeSession()){
    try{
      await showApp();
    }catch(e){
      console.error(e);
      toast('Could not load data from the server. Check your connection and reload.', 'error');
    }
  } else {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('app').style.display = 'none';
    const u = document.getElementById('loginUsername'); if(u) u.focus();
  }
})();
