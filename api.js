/*
  OFFLINE PREVIEW MOCK — replaces the real backend-connected api.js.
  Purpose: let you open index.html (e.g. via VS Code Live Server) and see/use
  the full frontend UI with ZERO backend server running. All data lives in
  your browser's localStorage — nothing is sent over the network.

  This is for VISUAL/UI PREVIEW ONLY. It is not a real database and is not
  meant for production use. When you're ready to connect the real backend,
  restore the original api.js (the one that calls your Express API).
*/
(function(){
  const STORE_KEY = 'skynex_offline_mock_db_v1';
  const TOKEN_KEY = 'skynex_token_v1';
  const USER_KEY  = 'skynex_authuser_v1';

  function uid(prefix){ return (prefix||'ID')+'_'+Math.random().toString(36).slice(2,8)+Date.now().toString(36).slice(-4); }
  function delay(value, ms){ return new Promise(resolve=> setTimeout(()=> resolve(value), ms||70)); }

  class ApiClientError extends Error {
    constructor(message, status){ super(message); this.status = status; }
  }

  function seedMockData(){
    const today = new Date().toISOString().slice(0,10);
    const roleId = uid('ROL');
    const userId = uid('USR');
    const custId = uid('CUS');
    const catRepair = uid('CAT');
    const catAccessory = uid('CAT');
    const prod1 = uid('PRD');
    const prod2 = uid('PRD');

    return {
      roles: [
        { id: roleId, name:'Administrator', level:'admin', modules:[] },
      ],
      users: [
        { id:userId, name:'Admin User', username:'admin', password:'admin123', role:'Administrator', email:'admin@skynex.local', phone:'0300-1234567', status:'Active', photo:'' },
      ],
      categories: [
        { id:catRepair, name:'Screen Repair', type:'Repair' },
        { id:catAccessory, name:'Accessories', type:'Product' },
      ],
      products: [
        { id:prod1, name:'Type-C Charger', category:catAccessory, price:800, cost:500, stock:20, threshold:5 },
        { id:prod2, name:'Samsung Battery', category:catAccessory, price:1500, cost:900, stock:8, threshold:5 },
      ],
      customers: [
        { id:custId, name:'Ali Raza', phone:'0301-2345678', email:'', address:'', joined: today },
      ],
      suppliers: [], purchases: [], shops: [], shopSales: [], sales: [],
      orders: [
        {
          id: uid('REP'), customer:custId, customerPhone:'0301-2345678', address:'', technician:'Admin User',
          bookedBy:'Front Desk Staff', extraFeaturesNotes:'', category:catRepair,
          phoneHistory:'', checkedElsewhere:'No',
          devices:[{ device:'iPhone 13', imei:'', color:'Black', storage:'128GB', displayPanel:'Original', issue:'Cracked screen', deviceRegistration:'', batteryHealth:'', accessories:'', cost:5000 }],
          deviceCode:'', extraInfoToggle:false,
          reportedIssues:[], physicalCondition:[], functionTest:[], customerConfirmation:[],
          partsUsed:[], serviceCharges:[], total:5000, advance:0, deliveryDate:'', status:'Pending',
          date: today, time:'10:00', notes:'', devicePhoto:'', customerPhoto:'', repairedBy:'',
          trackingId:'TRK-DEMO1',
        },
      ],
      invoices: [], expenses: [], profitLoss: [], history: [], requests: [],
      settings: {
        business_name:'Sky Nex', tagline:'Mobile Repair Workshop & Institute', currency:'PKR', theme:'light',
        address:'Main Boulevard, Lahore', phone:'0300-1234567', email:'info@skynex.local', tracking_url:'',
        low_stock_alerts:true, email_notify:true, morning_digest_time:'10:00:00', night_digest_time:'22:00:00',
      },
      lists: {
        expenseCategories:['Rent','Utilities','Salary','Misc'],
        paidBy:['Cash','Bank'],
        orderStatuses:['Pending','Processing','Completed','Cancelled'],
        invoiceStatuses:['Paid','Unpaid','Partial'],
        repairStatuses:['Pending','Processing','Completed','Cancelled'],
        userStatuses:['Active','Inactive'],
      },
    };
  }

  function loadMock(){
    try{
      const raw = localStorage.getItem(STORE_KEY);
      if(raw) return JSON.parse(raw);
    }catch(e){}
    const fresh = seedMockData();
    persistMock(fresh);
    return fresh;
  }
  function persistMock(db){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(db)); }catch(e){} }
  let MOCK = loadMock();

  // Exposed so you can reset the demo data from the browser console if needed:
  // __SKYNEX_RESET_MOCK__()
  window.__SKYNEX_RESET_MOCK__ = function(){
    try{ localStorage.removeItem(STORE_KEY); localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(USER_KEY); }catch(e){}
    location.reload();
  };
  window.__SKYNEX_OFFLINE_MOCK__ = true;

  let onUnauthorized = null;
  function setUnauthorizedHandler(fn){ onUnauthorized = fn; }
  async function request(){
    // Nothing in this offline build should call the raw request() directly,
    // but keep it safe rather than silently doing nothing.
    throw new ApiClientError('Offline preview mode — no backend is connected.', 0);
  }

  const Auth = {
    async login(username, password){
      let user = MOCK.users.find(u=> u.username === String(username||'').trim());
      // Frictionless offline preview: whatever you type, you get signed in as
      // the demo admin so you can see every screen without hunting for exact
      // credentials. (Real backend requires the real username/password.)
      if(!user) user = MOCK.users[0];
      const safeUser = Object.assign({}, user); delete safeUser.password;
      try{
        localStorage.setItem(TOKEN_KEY, 'offline-mock-token');
        localStorage.setItem(USER_KEY, JSON.stringify(safeUser));
      }catch(e){}
      return delay(safeUser);
    },
    async me(){
      let raw = null;
      try{ raw = localStorage.getItem(USER_KEY); }catch(e){}
      if(!raw) throw new ApiClientError('Not logged in', 401);
      return delay(JSON.parse(raw));
    },
    async changePassword(){ return delay({ ok:true }); },
    logout(){ try{ localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(USER_KEY); }catch(e){} },
    isLoggedIn(){ try{ return !!localStorage.getItem(TOKEN_KEY); }catch(e){ return false; } },
    cachedUser(){ try{ const r = localStorage.getItem(USER_KEY); return r ? JSON.parse(r) : null; }catch(e){ return null; } },
  };

  const Uploads = {
    async upload(file){
      // No server to upload to — just re-encode the file as a data URL so
      // images/signatures still render immediately in the UI.
      return new Promise((resolve)=>{
        try{
          const reader = new FileReader();
          reader.onload = ()=> resolve(reader.result || '');
          reader.onerror = ()=> resolve('');
          reader.readAsDataURL(file);
        }catch(e){ resolve(''); }
      });
    },
    async remove(){ /* no-op in offline preview */ },
  };

  function dataUrlToFile(dataUrl, filename){
    const m = /^data:(.+?);base64,(.*)$/.exec(dataUrl || '');
    if(!m) return null;
    const mime = m[1];
    const bin = atob(m[2]);
    const arr = new Uint8Array(bin.length);
    for(let i=0;i<bin.length;i++) arr[i] = bin.charCodeAt(i);
    const ext = (mime.split('/')[1] || 'jpg').replace('jpeg','jpg');
    return new File([arr], (filename||'upload')+'.'+ext, {type: mime});
  }
  function isDataUrl(v){ return typeof v === 'string' && v.slice(0,5) === 'data:'; }
  function isUploadedFileUrl(v){ return typeof v === 'string' && v.slice(0,9) === '/uploads/'; }

  function makeEntityApi(collection){
    return {
      async list(){
        MOCK[collection] = MOCK[collection] || [];
        return delay(MOCK[collection].slice());
      },
      async get(id){
        MOCK[collection] = MOCK[collection] || [];
        const row = MOCK[collection].find(x=>x.id===id) || null;
        return delay(row);
      },
      async create(data){
        MOCK[collection] = MOCK[collection] || [];
        const row = Object.assign({}, data, { id: data.id || uid(collection.slice(0,3).toUpperCase()) });
        MOCK[collection].push(row);
        persistMock(MOCK);
        return delay(row);
      },
      async update(id, data){
        MOCK[collection] = MOCK[collection] || [];
        const idx = MOCK[collection].findIndex(x=>x.id===id);
        if(idx===-1) throw new ApiClientError('Record not found (offline preview)', 404);
        MOCK[collection][idx] = Object.assign({}, MOCK[collection][idx], data);
        persistMock(MOCK);
        return delay(MOCK[collection][idx]);
      },
      async remove(id){
        MOCK[collection] = (MOCK[collection]||[]).filter(x=>x.id!==id);
        persistMock(MOCK);
        return delay(undefined);
      },
    };
  }

  const ENTITY_NAMES = ['categories','products','customers','suppliers','purchases','shops','shopSales','sales','orders','invoices','expenses','profitLoss','users','roles','requests'];

  const Api = { request, Auth, Uploads, dataUrlToFile, isDataUrl, isUploadedFileUrl, setUnauthorizedHandler, ApiClientError };
  ENTITY_NAMES.forEach(name=>{ Api[name] = makeEntityApi(name); });

  Api.settings = {
    async get(){
      const row = MOCK.settings || {};
      return delay({
        businessName: row.business_name, tagline: row.tagline, currency: row.currency, theme: row.theme,
        address: row.address, phone: row.phone, email: row.email, trackingUrl: row.tracking_url,
        lowStockAlerts: !!row.low_stock_alerts, emailNotify: !!row.email_notify,
        morningDigestTime: (row.morning_digest_time||'10:00:00').slice(0,5),
        nightDigestTime: (row.night_digest_time||'22:00:00').slice(0,5),
      });
    },
    async update(data){
      const map = { businessName:'business_name', tagline:'tagline', currency:'currency', theme:'theme',
        address:'address', phone:'phone', email:'email', trackingUrl:'tracking_url',
        lowStockAlerts:'low_stock_alerts', emailNotify:'email_notify',
        morningDigestTime:'morning_digest_time', nightDigestTime:'night_digest_time' };
      MOCK.settings = MOCK.settings || {};
      Object.keys(data||{}).forEach(k=>{ if(map[k]) MOCK.settings[map[k]] = data[k]; });
      persistMock(MOCK);
      return Api.settings.get();
    },
  };

  Api.lists = {
    async getAll(){ return delay(Object.assign({}, MOCK.lists)); },
    async set(name, valueArray){
      MOCK.lists = MOCK.lists || {};
      MOCK.lists[name] = valueArray;
      persistMock(MOCK);
      return delay(valueArray);
    },
  };

  Api.history = { async list(){ return delay((MOCK.history||[]).slice()); } };
  Api.gallery = { async list(){ return delay({ data:[], counts:{} }); } };

  window.Api = Api;
})();
