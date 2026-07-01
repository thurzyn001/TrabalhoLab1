// ============================================================
//  DADOS (COOKIE + SESSION)
// ============================================================
const DEFAULT_GAMES = [
{ id:1, name:"Cyberpunk 2077", image:"https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg", price:"149.90", category:"RPG", multiplayer:"nao", desc:"RPG futurista em Night City. Explore um mundo aberto cheio de possibilidades." },
{ id:2, name:"The Witcher 3", image:"https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg", price:"79.90", category:"RPG", multiplayer:"nao", desc:"Caçador de monstros em um mundo aberto fantástico." },
{ id:3, name:"Red Dead 2", image:"https://cdn2.steamgriddb.com/icon_thumb/2e65f2f2fdaf6c699b223c61b1b5ab89.png", price:"129.90", category:"Aventura", multiplayer:"nao", desc:"Velho oeste, história emocionante e liberdade." },
{ id:4, name:"God of War", image:"https://cdn2.steamgriddb.com/thumb/5855660034a74cfe0e5fc8d57d17f4ac.jpg", price:"99.90", category:"Ação", multiplayer:"nao", desc:"Deuses nórdicos e combate brutal em uma jornada épica." },
{ id:5, name:"Hollow Knight", image:"https://cdn2.steamgriddb.com/thumb/d18c832e8c956b4ef8b92862e6bf470d.jpg", price:"39.90", category:"Aventura", multiplayer:"nao", desc:"Metroidvania sombrio e desafiador." },
{ id:6, name:"Stardew Valley", image:"https://cdn2.steamgriddb.com/thumb/996e24639b91722571c81723760023e0.jpg", price:"24.90", category:"Estratégia", multiplayer:"sim", desc:"Fazenda relaxante com multiplayer." },
{ id:7, name:"Doom Eternal", image:"https://cdn.akamai.steamstatic.com/steam/apps/782330/header.jpg", price:"89.90", category:"FPS", multiplayer:"sim", desc:"FPS violento e acelerado." },
{ id:8, name:"Minecraft", image:"https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/NewKeyArt_Header.jpg", price:"29.90", category:"Aventura", multiplayer:"sim", desc:"Construa, explore, sobreviva." },
{ id:9, name:"Valorant", image:"https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-02-1920x1080-580683fffe0f.jpg", price:"0.00", category:"FPS", multiplayer:"sim", desc:"Tático 5x5 gratuito." },
{ id:10, name:"Fortnite", image:"https://cdn2.unrealengine.com/fnbr-41-00-c7s3-egs-launcher-blade-2560x1440-2560x1440-d28bd2419a4d.jpg", price:"0.00", category:"FPS", multiplayer:"sim", desc:"Battle Royale com construção." },
{ id:11, name:"Zelda Tears of the kingdom", image:"https://cdn.wikimg.net/en/zeldawiki/images/d/d7/TotK_Key_Artwork.jpg", price:"299.90", category:"Aventura", multiplayer:"nao", desc:"Aventura épica em Hyrule." },
{ id:12, name:"Elden Ring", image:"https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg", price:"199.90", category:"RPG", multiplayer:"sim", desc:"Soulslike com mundo aberto." },
{ id:13, name:"FIFA 26", image:"https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2025-09/eafc.jpg.webp?itok=9Je4dVS4", price:"149.90", category:"Esporte", multiplayer:"sim", desc:"Futebol realista." },
{ id:14, name:"Forza Horizon six seven", image:"https://store-images.s-microsoft.com/image/apps.24935.14202278764680089.8e4c786a-0a1c-4737-a244-0bdfa34aab7b.40c11e20-8ff6-4db3-9365-faad9fa06d1a?q=90&w=480&h=270", price:"99.90", category:"Corrida", multiplayer:"sim", desc:"Corrida em mundo aberto." },
{ id:15, name:"Assassin's Creed", image:"https://i.ytimg.com/vi/dEcEQ4VmvlE/maxresdefault.jpg", price:"79.90", category:"Ação", multiplayer:"nao", desc:"Qual?  Descubra." },
{ id:16, name:"GTA V", image:"https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg", price:"89.90", category:"Ação", multiplayer:"sim", desc:"Mundo aberto e caos." },
{ id:17, name:"Resident Evil 4", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBO1FAKDbusudF0_exVWK17Nnw-Jy0hVe5trTZnRrKdqHINeqvE-pTxzH&s=10", price:"109.90", category:"Ação", multiplayer:"nao", desc:"Survival horror clássico." },
{ id:18, name:"Super Mario Odyssey", image:"https://mario.wiki.gallery/images/d/d3/SMO_-_Key_art.jpg", price:"199.90", category:"Aventura", multiplayer:"nao", desc:"Plataforma 3D criativa." },
{ id:19, name:"Among Us", image:"https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg", price:"15.90", category:"Estratégia", multiplayer:"sim", desc:"Dedução social online." },
{ id:20, name:"Pokemon Scarlet/Violet", image:"https://upload.wikimedia.org/wikipedia/pt/8/89/Pok%C3%A9mon_Scarlet_Violet_artes.jpg", price:"199.90", category:"RPG", multiplayer:"sim", desc:"RPG de monstros em mundo aberto." }
];

// helpers cookie/session
function getCookie(n) { let v=document.cookie.match('(^|;) ?'+n+'=([^;]*)(;|$)'); return v?v[2]:null; }
function setCookie(n,v){ document.cookie=n+'='+v+';path=/;max-age=604800'; }
function getSession(k){ return sessionStorage.getItem(k); }
function setSession(k,v){ sessionStorage.setItem(k,v); }

let gamesData = [];
function loadGames() {
let stored = getCookie('gamesData');
if (stored) { try { gamesData = JSON.parse(stored); } catch(e){ gamesData = [...DEFAULT_GAMES]; } } 
else { gamesData = [...DEFAULT_GAMES]; }
gamesData.forEach(g=>{ if(!g.id) g.id=Date.now()+Math.random(); if(!g.category) g.category="Ação"; if(!g.multiplayer) g.multiplayer="nao"; });
saveGames();
}
function saveGames(){ setCookie('gamesData', JSON.stringify(gamesData)); }
loadGames();

// ============================================================
//  SISTEMA DE USUÁRIOS COM VALIDAÇÃO E BLOQUEIO
// ============================================================
let currentUser = null;
let currentUserRole = 'cliente';

// Sistema de bloqueio por tentativas
let loginAttempts = 0;
let lockUntil = 0;
let lockTimer = null;
const BASE_LOCK_TIME = 15000; // 15 segundos
const MAX_ATTEMPTS = 6;

function getLockTime() {
// Penalidade dobra a cada tentativa: 15s, 30s, 60s, 120s, 240s, 480s...
if (loginAttempts <= MAX_ATTEMPTS) {
    return BASE_LOCK_TIME * Math.pow(2, loginAttempts - 1);
}
return BASE_LOCK_TIME * Math.pow(2, MAX_ATTEMPTS - 1);
}

function isLocked() {
if (lockUntil > Date.now()) {
    return true;
}
return false;
}

function getRemainingLockTime() {
if (lockUntil > Date.now()) {
    return Math.ceil((lockUntil - Date.now()) / 1000);
}
return 0;
}

function resetLoginAttempts() {
loginAttempts = 0;
lockUntil = 0;
if (lockTimer) {
    clearInterval(lockTimer);
    lockTimer = null;
}
updateLockUI();
}

function incrementLoginAttempts() {
loginAttempts++;
if (loginAttempts >= MAX_ATTEMPTS) {
    // Bloqueio com penalidade progressiva
    const lockTime = getLockTime();
    lockUntil = Date.now() + lockTime;
    
    // Mostra mensagem de bloqueio
    const lockInfo = document.getElementById('loginLockInfo');
    lockInfo.classList.remove('hidden');
    lockInfo.innerHTML = `
    <i class="fas fa-lock"></i> 
    Conta bloqueada por ${Math.ceil(lockTime/1000)} segundos devido a múltiplas tentativas de login.
    `;
    
    // Inicia contador regressivo
    if (lockTimer) clearInterval(lockTimer);
    lockTimer = setInterval(() => {
    const remaining = getRemainingLockTime();
    if (remaining <= 0) {
        clearInterval(lockTimer);
        lockTimer = null;
        resetLoginAttempts();
        lockInfo.classList.add('hidden');
        document.getElementById('btnLoginSubmit').disabled = false;
        Toastify({ text:"Bloqueio removido! Você pode tentar novamente.", duration:3000, style:{background:"#238636"} }).showToast();
    } else {
        lockInfo.innerHTML = `
        <i class="fas fa-clock"></i> 
        Aguarde ${remaining} segundos para tentar novamente.
        `;
        document.getElementById('btnLoginSubmit').disabled = true;
    }
    }, 1000);
    
    Toastify({ text:`Muitas tentativas! Bloqueado por ${Math.ceil(lockTime/1000)} segundos.`, duration:3000, style:{background:"#f85149"} }).showToast();
} else {
    // Atualiza UI com tentativas restantes
    const remaining = MAX_ATTEMPTS - loginAttempts;
    Toastify({ 
    text:`Tentativa ${loginAttempts} de ${MAX_ATTEMPTS}. ${remaining} tentativas restantes.`, 
    duration:2000, 
    style:{background:"#f0883e"} 
    }).showToast();
}
updateLockUI();
}

function updateLockUI() {
const lockInfo = document.getElementById('loginLockInfo');
if (isLocked()) {
    const remaining = getRemainingLockTime();
    lockInfo.classList.remove('hidden');
    lockInfo.innerHTML = `
    <i class="fas fa-clock"></i> 
    Aguarde ${remaining} segundos para tentar novamente.
    `;
    document.getElementById('btnLoginSubmit').disabled = true;
} else {
    lockInfo.classList.add('hidden');
    document.getElementById('btnLoginSubmit').disabled = false;
}
}

// Validação de email
function isValidEmail(email) {
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(email);
}

// Validação de senha (mínimo 6 caracteres)
function isValidPassword(password) {
return password.length >= 6;
}

// Validação de usuário (mínimo 3 caracteres, apenas letras, números e underline)
function isValidUsername(username) {
const re = /^[a-zA-Z0-9_]{3,}$/;
return re.test(username);
}

function loadUsers() {
let users = JSON.parse(getCookie('users') || '[]');
users = users.map(u => {
    if (!u.role) u.role = 'cliente';
    if (!u.history) u.history = [];
    return u;
});
setCookie('users', JSON.stringify(users));
return users;
}

function saveUsers(users) {
setCookie('users', JSON.stringify(users));
}

function checkSession() {
const user = getSession('currentUser');
if (user) {
    const users = loadUsers();
    const found = users.find(u => u.user === user);
    if (found) {
    currentUser = user;
    currentUserRole = found.role || 'cliente';
    updateUIForUser();
    return true;
    }
}
return false;
}

function updateUIForUser() {
const adminLink = document.getElementById('adminNavLink');
if (currentUserRole === 'admin') {
    adminLink.classList.remove('hidden');
} else {
    adminLink.classList.add('hidden');
}

const navActions = document.getElementById('navActions');
const roleBadge = currentUserRole === 'admin' ? ' <span class="badge-admin">ADMIN</span>' : '';
navActions.innerHTML = `
    <span><i class="fas fa-user"></i> ${currentUser}${roleBadge}</span>
    <button id="btnLogoutNav" style="background:transparent; border:1px solid #f85149; color:#f85149; padding:4px 16px; border-radius:30px;"><i class="fas fa-sign-out-alt"></i> Sair</button>
`;
document.getElementById('btnLogoutNav').addEventListener('click', logout);

if (currentUserRole === 'admin') {
    renderAdminHistory();
    renderAdminRefunds();
} else {
    renderUserHistory();
}
}

function logout() {
currentUser = null;
currentUserRole = 'cliente';
sessionStorage.removeItem('currentUser');
resetLoginAttempts();
const navActions = document.getElementById('navActions');
navActions.innerHTML = `
    <button id="btnLoginNav" class="btn-primary"><i class="fas fa-sign-in-alt"></i> Login</button>
    <button id="btnRegisterNav"><i class="fas fa-user-plus"></i> Registro</button>
`;
document.getElementById('btnLoginNav').addEventListener('click', ()=>showPage('login'));
document.getElementById('btnRegisterNav').addEventListener('click', ()=>showPage('register'));
document.getElementById('adminNavLink').classList.add('hidden');
showPage('home');
Toastify({ text:"Deslogado", duration:1500, style:{background:"#8b949e"} }).showToast();
renderAll();
}

// ============================================================
//  HISTÓRICO DO USUÁRIO (com reembolso)
// ============================================================
function renderUserHistory() {
const container = document.getElementById('userHistory');
if (!currentUser) {
    container.innerHTML = '<p style="color:#8b949e;">Faça login para ver seus pedidos.</p>';
    return;
}

const users = loadUsers();
const user = users.find(u => u.user === currentUser);
if (!user || !user.history || user.history.length === 0) {
    container.innerHTML = '<p style="color:#8b949e;">Você ainda não fez nenhum pedido.</p>';
    return;
}

container.innerHTML = '';
user.history.forEach((order, index) => {
    const status = order.refundStatus || 'none';
    const statusText = status === 'none' ? 'Entregue' : 
                        status === 'pending' ? 'Reembolso solicitado' :
                        status === 'approved' ? 'Reembolsado ✓' : 'Reembolso negado ✗';
    const statusClass = status === 'none' ? 'status-none' :
                        status === 'pending' ? 'status-pending' :
                        status === 'approved' ? 'status-approved' : 'status-rejected';
    
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
    <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
        <strong><i class="fas fa-shopping-bag"></i> Pedido #${index + 1}</strong>
        <span class="date"><i class="far fa-calendar"></i> ${new Date(order.date).toLocaleString()}</span>
    </div>
    <div style="display:flex; justify-content:space-between; flex-wrap:wrap; margin:8px 0;">
        <span class="status ${statusClass}">${statusText}</span>
        <span class="total">Total: R$ ${order.total.toFixed(2)}</span>
    </div>
    <div class="games-list">
        ${order.items.map(item => `<span>${item.name} - R$ ${parseFloat(item.price).toFixed(2)}</span>`).join('')}
    </div>
    <div style="margin-top:8px; font-size:0.85rem; color:#58a6ff;">
        <i class="fas fa-ticket-alt"></i> Código: ${order.code}
    </div>
    ${status === 'none' ? `
        <div style="margin-top:12px;">
        <button class="btn-refund request-refund" data-index="${index}" style="padding:8px 20px; border-radius:30px; border:none; cursor:pointer;">
            <i class="fas fa-hand-holding-usd"></i> Solicitar Reembolso
        </button>
        </div>
    ` : status === 'pending' ? `
        <div style="margin-top:12px; color:#f0883e;">
        <i class="fas fa-clock"></i> Aguardando análise do administrador...
        </div>
    ` : status === 'approved' ? `
        <div style="margin-top:12px; color:#238636;">
        <i class="fas fa-check-circle"></i> Reembolso aprovado!
        </div>
    ` : `
        <div style="margin-top:12px; color:#f85149;">
        <i class="fas fa-times-circle"></i> Reembolso negado.
        </div>
    `}
    `;
    container.appendChild(div);
});

container.querySelectorAll('.request-refund').forEach(btn => {
    btn.addEventListener('click', function() {
    const index = parseInt(this.dataset.index);
    openRefundModal(index);
    });
});
}

// ============================================================
//  MODAL DE REEMBOLSO
// ============================================================
function openRefundModal(orderIndex) {
const users = loadUsers();
const user = users.find(u => u.user === currentUser);
if (!user || !user.history[orderIndex]) return;

const order = user.history[orderIndex];
document.getElementById('refundOrderCode').textContent = order.code;
document.getElementById('refundOrderItems').textContent = order.items.map(i => i.name).join(', ');
document.getElementById('refundOrderTotal').textContent = `R$ ${order.total.toFixed(2)}`;
document.getElementById('refundOrderIndex').value = orderIndex;
document.getElementById('refundModal').classList.remove('hidden');
}

document.getElementById('confirmRefundBtn').addEventListener('click', function() {
const index = parseInt(document.getElementById('refundOrderIndex').value);
const users = loadUsers();
const userIndex = users.findIndex(u => u.user === currentUser);
if (userIndex !== -1 && users[userIndex].history[index]) {
    users[userIndex].history[index].refundStatus = 'pending';
    saveUsers(users);
    document.getElementById('refundModal').classList.add('hidden');
    Toastify({ text:"Reembolso solicitado! Aguarde análise do admin.", duration:3000, style:{background:"#f0883e"} }).showToast();
    renderUserHistory();
    if (currentUserRole === 'admin') renderAdminRefunds();
}
});

document.getElementById('cancelRefundBtn').addEventListener('click', function() {
document.getElementById('refundModal').classList.add('hidden');
});
document.getElementById('refundModal').addEventListener('click', (e) => {
if (e.target === e.currentTarget) document.getElementById('refundModal').classList.add('hidden');
});

// ============================================================
//  ADMIN: GERENCIAR REEMBOLSOS
// ============================================================
function renderAdminRefunds() {
const container = document.getElementById('adminRefunds');
const users = loadUsers();
const pendingRefunds = [];

users.forEach(user => {
    if (user.history) {
    user.history.forEach((order, idx) => {
        if (order.refundStatus === 'pending') {
        pendingRefunds.push({
            user: user.user,
            orderIndex: idx,
            order: order
        });
        }
    });
    }
});

if (pendingRefunds.length === 0) {
    container.innerHTML = '<p style="color:#8b949e;">Nenhum reembolso pendente.</p>';
    return;
}

container.innerHTML = '';
pendingRefunds.forEach((refund, idx) => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
    <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
        <strong><i class="fas fa-user"></i> ${refund.user}</strong>
        <span class="date"><i class="far fa-calendar"></i> ${new Date(refund.order.date).toLocaleString()}</span>
    </div>
    <div class="games-list">
        ${refund.order.items.map(item => `<span>${item.name} - R$ ${parseFloat(item.price).toFixed(2)}</span>`).join('')}
    </div>
    <div class="total">Total: R$ ${refund.order.total.toFixed(2)}</div>
    <div style="margin-top:12px; display:flex; gap:12px; flex-wrap:wrap;">
        <button class="btn-buy approve-refund" data-user="${refund.user}" data-index="${refund.orderIndex}" style="padding:8px 24px; border-radius:30px; border:none; cursor:pointer;">
        <i class="fas fa-check"></i> Aprovar
        </button>
        <button class="btn-close-detail reject-refund" data-user="${refund.user}" data-index="${refund.orderIndex}" style="padding:8px 24px; border-radius:30px; border:none; cursor:pointer;">
        <i class="fas fa-times"></i> Rejeitar
        </button>
    </div>
    `;
    container.appendChild(div);
});

container.querySelectorAll('.approve-refund').forEach(btn => {
    btn.addEventListener('click', function() {
    const user = this.dataset.user;
    const index = parseInt(this.dataset.index);
    handleRefund(user, index, 'approved');
    });
});
container.querySelectorAll('.reject-refund').forEach(btn => {
    btn.addEventListener('click', function() {
    const user = this.dataset.user;
    const index = parseInt(this.dataset.index);
    handleRefund(user, index, 'rejected');
    });
});
}

function handleRefund(username, orderIndex, status) {
const users = loadUsers();
const userIndex = users.findIndex(u => u.user === username);
if (userIndex !== -1 && users[userIndex].history[orderIndex]) {
    users[userIndex].history[orderIndex].refundStatus = status;
    saveUsers(users);
    Toastify({ 
    text: `Reembolso ${status === 'approved' ? 'aprovado' : 'rejeitado'} para ${username}!`, 
    duration:3000, 
    style:{background: status === 'approved' ? '#238636' : '#f85149'} 
    }).showToast();
    renderAdminRefunds();
    renderAdminHistory();
    if (currentUser === username) renderUserHistory();
}
}

// ============================================================
//  ADMIN: HISTÓRICO DE COMPRAS
// ============================================================
function renderAdminHistory() {
const container = document.getElementById('adminHistory');
const users = loadUsers();
const allPurchases = [];

users.forEach(user => {
    if (user.history && user.history.length > 0) {
    user.history.forEach((purchase, idx) => {
        allPurchases.push({
        user: user.user,
        role: user.role,
        orderIndex: idx,
        ...purchase
        });
    });
    }
});

if (allPurchases.length === 0) {
    container.innerHTML = '<p style="color:#8b949e;">Nenhuma compra registrada ainda.</p>';
    return;
}

allPurchases.sort((a, b) => new Date(b.date) - new Date(a.date));

container.innerHTML = '';
allPurchases.forEach(purchase => {
    const status = purchase.refundStatus || 'none';
    const statusText = status === 'none' ? 'Entregue' : 
                        status === 'pending' ? 'Reembolso pendente' :
                        status === 'approved' ? 'Reembolsado' : 'Reembolso negado';
    const statusClass = status === 'none' ? 'status-none' :
                        status === 'pending' ? 'status-pending' :
                        status === 'approved' ? 'status-approved' : 'status-rejected';
    
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
    <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
        <strong><i class="fas fa-user"></i> ${purchase.user}</strong>
        <span class="date"><i class="far fa-calendar"></i> ${new Date(purchase.date).toLocaleString()}</span>
    </div>
    <div style="display:flex; gap:12px; flex-wrap:wrap; margin:8px 0;">
        <span class="status ${statusClass}">${statusText}</span>
        <span class="total">Total: R$ ${purchase.total.toFixed(2)}</span>
    </div>
    <div class="games-list">
        ${purchase.items.map(item => `<span>${item.name} - R$ ${parseFloat(item.price).toFixed(2)}</span>`).join('')}
    </div>
    <div style="margin-top:8px; font-size:0.85rem; color:#58a6ff;">
        <i class="fas fa-ticket-alt"></i> Código: ${purchase.code}
    </div>
    `;
    container.appendChild(div);
});
}

// ============================================================
//  RENDER - CLIENTE NÃO PODE VER BOTÕES DE EDIÇÃO
// ============================================================
function renderGrid(containerId, data, showActions = false) {
const container = document.getElementById(containerId);
if (!container) return;
container.innerHTML = '';

// APENAS ADMIN PODE VER AÇÕES DE EDIÇÃO
const isAdmin = currentUserRole === 'admin';
const shouldShowActions = showActions && isAdmin;

data.forEach((game, index) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.style.animationDelay = `${index * 0.05}s`;
    card.innerHTML = `
    <img src="${game.image || 'https://via.placeholder.com/400x200?text=Game'}" alt="${game.name}" loading="lazy">
    <h4>${game.name}</h4>
    <div class="meta"><span><i class="fas fa-tag"></i> ${game.category||'Genérico'}</span><span><i class="fas fa-${game.multiplayer==='sim'?'users':'user'}"></i> ${game.multiplayer==='sim'?'Multi':'Single'}</span></div>
    <div class="price">R$ ${parseFloat(game.price).toFixed(2)}</div>
    ${shouldShowActions ? `<div class="tags"><button class="edit-btn" data-id="${game.id}"><i class="fas fa-pen"></i></button><button class="delete-btn" data-id="${game.id}"><i class="fas fa-trash"></i></button></div>` : ''}
    `;
    card.addEventListener('click', (e) => {
    if (e.target.closest('button')) return;
    openDetail(game);
    });
    container.appendChild(card);
});

// Só adiciona eventos se for admin
if (shouldShowActions) {
    container.querySelectorAll('.edit-btn').forEach(btn => btn.addEventListener('click', (e) => { 
    e.stopPropagation(); 
    if (currentUserRole !== 'admin') {
        Toastify({ text:"Apenas administradores podem editar!", duration:2000, style:{background:"#f85149"} }).showToast();
        return;
    }
    const g=gamesData.find(x=>x.id==btn.dataset.id); 
    if(g) openModal(g); 
    }));
    container.querySelectorAll('.delete-btn').forEach(btn => btn.addEventListener('click', (e) => { 
    e.stopPropagation(); 
    if (currentUserRole !== 'admin') {
        Toastify({ text:"Apenas administradores podem excluir!", duration:2000, style:{background:"#f85149"} }).showToast();
        return;
    }
    if(confirm('Excluir?')){ 
        gamesData=gamesData.filter(x=>x.id!=btn.dataset.id); 
        saveGames(); 
        renderAll(); 
        Toastify({text:"Excluído!", duration:2000, style:{background:"#f85149"}}).showToast(); 
    } 
    }));
}
}

function renderAll() {
renderGrid('homeGrid', gamesData.slice(0,8), false);
renderGrid('catalogGrid', gamesData, true);
renderGrid('adminGrid', gamesData, true);
updateCartBadge();
if (currentUserRole === 'admin') {
    renderAdminHistory();
    renderAdminRefunds();
} else if (currentUser) {
    renderUserHistory();
}
}

// ============================================================
//  BUSCA + FILTROS
// ============================================================
const searchInput = document.getElementById('searchInput');
const autocompleteList = document.getElementById('autocompleteList');
searchInput.addEventListener('input', function() {
const val = this.value.toLowerCase().trim();
if (!val) { autocompleteList.style.display='none'; return; }
const filtered = gamesData.filter(g => g.name.toLowerCase().includes(val));
autocompleteList.innerHTML = '';
if (filtered.length === 0) { autocompleteList.style.display='none'; return; }
filtered.slice(0,8).forEach(g => {
    const div = document.createElement('div');
    div.textContent = g.name;
    div.addEventListener('click', ()=>{ searchInput.value=g.name; autocompleteList.style.display='none'; applyFilters(); });
    autocompleteList.appendChild(div);
});
autocompleteList.style.display='block';
});
document.addEventListener('click', (e) => { if(!e.target.closest('.search-box')) autocompleteList.style.display='none'; });

function applyFilters() {
const search = searchInput.value.toLowerCase().trim();
const cat = document.getElementById('filterCategory').value;
const multi = document.getElementById('filterMultiplayer').value;
let filtered = gamesData;
if (search) filtered = filtered.filter(g => g.name.toLowerCase().includes(search));
if (cat) filtered = filtered.filter(g => g.category === cat);
if (multi) filtered = filtered.filter(g => g.multiplayer === multi);
renderGrid('catalogGrid', filtered, true);
}
document.getElementById('filterCategory').addEventListener('change', applyFilters);
document.getElementById('filterMultiplayer').addEventListener('change', applyFilters);
document.getElementById('clearFilters').addEventListener('click', ()=>{ searchInput.value=''; document.getElementById('filterCategory').value=''; document.getElementById('filterMultiplayer').value=''; applyFilters(); });
searchInput.addEventListener('keydown', (e)=>{ if(e.key==='Enter') { autocompleteList.style.display='none'; applyFilters(); } });

// ============================================================
//  MODAL DETALHES
// ============================================================
let detailGame = null;
function openDetail(game) {
detailGame = game;
document.getElementById('detailImg').src = game.image || 'https://via.placeholder.com/400x200';
document.getElementById('detailName').textContent = game.name;
document.getElementById('detailCategory').textContent = game.category || 'Genérico';
document.getElementById('detailMultiplayer').textContent = game.multiplayer === 'sim' ? 'Multiplayer' : 'Singleplayer';
document.getElementById('detailDesc').textContent = game.desc || 'Descrição não disponível.';
document.getElementById('detailPrice').textContent = `R$ ${parseFloat(game.price).toFixed(2)}`;
document.getElementById('detailModal').classList.remove('hidden');
}
document.getElementById('detailCloseBtn').addEventListener('click', ()=> document.getElementById('detailModal').classList.add('hidden'));
document.getElementById('detailModal').addEventListener('click', (e)=> { if(e.target===e.currentTarget) document.getElementById('detailModal').classList.add('hidden'); });

// ============================================================
//  CARRINHO
// ============================================================
let cart = JSON.parse(getSession('cart') || '[]');
function saveCart(){ setSession('cart', JSON.stringify(cart)); updateCartBadge(); }
function updateCartBadge(){ document.getElementById('cartCount').textContent = cart.length; }

document.getElementById('detailAddToCart').addEventListener('click', function() {
if (!detailGame) return;
const exists = cart.find(item => item.id === detailGame.id);
if (exists) {
    Toastify({ text:`${detailGame.name} já está no carrinho!`, duration:2000, style:{background:"#f0883e"} }).showToast();
    return;
}
cart.push({ ...detailGame });
saveCart();
Toastify({ text:`${detailGame.name} adicionado ao carrinho!`, duration:2000, style:{background:"#238636"} }).showToast();
updateCartBadge();
document.getElementById('detailModal').classList.add('hidden');
});

function renderCart() {
const container = document.getElementById('cartItems');
const totalContainer = document.getElementById('cartTotal');

if (cart.length === 0) { 
    container.innerHTML = '<p style="color:#8b949e;">Carrinho vazio.</p>'; 
    totalContainer.textContent = '';
    return; 
}

let html = '';
let total = 0;
cart.forEach((item, idx) => {
    const price = parseFloat(item.price);
    total += price;
    html += `
    <div class="cart-item">
        <div class="cart-item-info">
        <img src="${item.image || 'https://via.placeholder.com/50x50'}" alt="${item.name}">
        <div>
            <strong>${item.name}</strong>
            <div style="color:#8b949e; font-size:0.85rem;">${item.category || 'Genérico'}</div>
        </div>
        </div>
        <div style="display:flex; align-items:center; gap:16px;">
        <span style="color:#f0883e; font-weight:600;">R$ ${price.toFixed(2)}</span>
        <button class="remove-cart" data-idx="${idx}" style="background:#f85149; border:none; color:white; padding:4px 14px; border-radius:30px; cursor:pointer;"><i class="fas fa-times"></i></button>
        </div>
    </div>
    `;
});
container.innerHTML = html;
totalContainer.textContent = `Total: R$ ${total.toFixed(2)}`;

container.querySelectorAll('.remove-cart').forEach(btn => {
    btn.addEventListener('click', function() {
    const idx = parseInt(this.dataset.idx);
    const removed = cart[idx];
    cart.splice(idx, 1);
    saveCart();
    renderCart();
    Toastify({ text:`${removed.name} removido do carrinho`, duration:1500, style:{background:"#f85149"} }).showToast();
    });
});
}

// ============================================================
//  FINALIZAR COMPRA
// ============================================================
document.getElementById('checkoutBtn').addEventListener('click', function() {
if (cart.length === 0) { 
    Toastify({ text:"Carrinho vazio!", duration:2000, style:{background:"#f85149"} }).showToast(); 
    return; 
}

if (!currentUser) {
    Toastify({ text:"Você precisa estar logado para comprar!", duration:2000, style:{background:"#f85149"} }).showToast();
    showPage('login');
    return;
}

const gameNames = cart.map(g => g.name.replace(/\s/g,'')).join('');
const code = `PARABENS{O${gameNames}COMPRADO}`;
const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

document.getElementById('checkoutCode').textContent = code;
const itemsContainer = document.getElementById('checkoutItems');
itemsContainer.innerHTML = cart.map(item => 
    `<div style="display:flex; justify-content:space-between; padding:4px 0; border-bottom:1px solid #282e38;">
    <span>${item.name}</span>
    <span>R$ ${parseFloat(item.price).toFixed(2)}</span>
    </div>`
).join('');
document.getElementById('checkoutTotal').textContent = `Total: R$ ${total.toFixed(2)}`;
document.getElementById('checkoutModal').classList.remove('hidden');

const users = loadUsers();
const userIndex = users.findIndex(u => u.user === currentUser);
if (userIndex !== -1) {
    if (!users[userIndex].history) users[userIndex].history = [];
    users[userIndex].history.push({
    date: new Date().toISOString(),
    items: [...cart],
    total: total,
    code: code,
    refundStatus: 'none'
    });
    saveUsers(users);
}

cart = [];
saveCart();
renderCart();
updateCartBadge();

if (currentUserRole === 'admin') {
    renderAdminHistory();
    renderAdminRefunds();
} else {
    renderUserHistory();
}
});

document.getElementById('checkoutCloseBtn').addEventListener('click', function() {
document.getElementById('checkoutModal').classList.add('hidden');
});
document.getElementById('checkoutModal').addEventListener('click', (e) => {
if (e.target === e.currentTarget) document.getElementById('checkoutModal').classList.add('hidden');
});

document.getElementById('copyCheckoutCode').addEventListener('click', function() {
const code = document.getElementById('checkoutCode').textContent;
navigator.clipboard?.writeText(code).then(() => {
    Toastify({ text:"Código copiado!", duration:1500, style:{background:"#58a6ff"} }).showToast();
}).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = code; 
    document.body.appendChild(ta); 
    ta.select(); 
    document.execCommand('copy'); 
    ta.remove();
    Toastify({ text:"Código copiado!", duration:1500, style:{background:"#58a6ff"} }).showToast();
});
});

// ============================================================
//  NAVEGAÇÃO
// ============================================================
function showPage(id) {
if (id === 'admin' && currentUserRole !== 'admin') {
    Toastify({ text:"Acesso negado! Apenas administradores.", duration:2500, style:{background:"#f85149"} }).showToast();
    return;
}
if (id === 'history' && !currentUser) {
    Toastify({ text:"Faça login para ver seus pedidos.", duration:2500, style:{background:"#f0883e"} }).showToast();
    showPage('login');
    return;
}
document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
const el = document.getElementById('page-'+id);
if (el) el.classList.remove('hidden');
if (id === 'cart') renderCart();
if (id === 'catalog') applyFilters();
if (id === 'home') renderAll();
if (id === 'history') renderUserHistory();
if (id === 'admin' && currentUserRole === 'admin') {
    renderAll();
    renderAdminHistory();
    renderAdminRefunds();
}
}

document.querySelectorAll('[data-page]').forEach(link => {
link.addEventListener('click', (e)=>{
    e.preventDefault();
    const page = link.dataset.page;
    showPage(page);
});
});

// ============================================================
//  AUTENTICAÇÃO COM VALIDAÇÃO ROBUSTA
// ============================================================
document.getElementById('switchToRegister').addEventListener('click', ()=>showPage('register'));
document.getElementById('switchToLogin').addEventListener('click', ()=>showPage('login'));

// LOGIN com sistema de bloqueio
document.getElementById('btnLoginSubmit').addEventListener('click', function() {
// Verifica se está bloqueado
if (isLocked()) {
    const remaining = getRemainingLockTime();
    Toastify({ 
    text: `Aguarde ${remaining} segundos para tentar novamente.`, 
    duration:3000, 
    style:{background:"#f85149"} 
    }).showToast();
    return;
}

const userInput = document.getElementById('loginUser').value.trim();
const pass = document.getElementById('loginPass').value.trim();

if (!userInput || !pass) {
    Toastify({ text:"Preencha todos os campos", duration:2000, style:{background:"#f85149"} }).showToast();
    return;
}

const users = loadUsers();
// Busca por usuário OU email
const found = users.find(u => 
    u.user === userInput || 
    (u.email && u.email.toLowerCase() === userInput.toLowerCase())
);

if (found && found.pass === pass) {
    // Login bem sucedido - resetar tentativas
    resetLoginAttempts();
    currentUser = found.user;
    currentUserRole = found.role || 'cliente';
    setSession('currentUser', currentUser);
    updateUIForUser();
    showPage('home');
    Toastify({ text:`Bem-vindo ${currentUser}!`, duration:1500, style:{background:"#238636"} }).showToast();
    renderAll();
    document.getElementById('loginUser').value = '';
    document.getElementById('loginPass').value = '';
} else {
    // Incrementa tentativas de login
    incrementLoginAttempts();
    Toastify({ 
    text: found ? "Senha incorreta!" : "Usuário ou email não encontrado!", 
    duration:2000, 
    style:{background:"#f85149"} 
    }).showToast();
    
    // Adiciona classe de erro nos campos
    document.getElementById('loginUser').classList.add('input-error');
    document.getElementById('loginPass').classList.add('input-error');
    setTimeout(() => {
    document.getElementById('loginUser').classList.remove('input-error');
    document.getElementById('loginPass').classList.remove('input-error');
    }, 500);
}
});

// REGISTRO com validação robusta
document.getElementById('btnRegisterSubmit').addEventListener('click', function() {
const user = document.getElementById('regUser').value.trim();
const email = document.getElementById('regEmail').value.trim();
const pass = document.getElementById('regPass').value.trim();
const passConfirm = document.getElementById('regPassConfirm').value.trim();
const voucher = document.getElementById('regVoucher').value.trim();

// Validações
let hasError = false;

// Validar usuário
if (!user || !isValidUsername(user)) {
    Toastify({ text:"Usuário inválido! Use 3+ caracteres (letras, números, _)", duration:3000, style:{background:"#f85149"} }).showToast();
    document.getElementById('regUser').classList.add('input-error');
    setTimeout(() => document.getElementById('regUser').classList.remove('input-error'), 500);
    hasError = true;
}

// Validar email
if (!email || !isValidEmail(email)) {
    Toastify({ text:"Email inválido! Use formato: usuario@email.com", duration:3000, style:{background:"#f85149"} }).showToast();
    document.getElementById('regEmail').classList.add('input-error');
    setTimeout(() => document.getElementById('regEmail').classList.remove('input-error'), 500);
    hasError = true;
}

// Validar senha
if (!pass || !isValidPassword(pass)) {
    Toastify({ text:"Senha inválida! Mínimo 6 caracteres.", duration:3000, style:{background:"#f85149"} }).showToast();
    document.getElementById('regPass').classList.add('input-error');
    setTimeout(() => document.getElementById('regPass').classList.remove('input-error'), 500);
    hasError = true;
}

// Confirmar senha
if (pass && passConfirm && pass !== passConfirm) {
    Toastify({ text:"As senhas não coincidem!", duration:3000, style:{background:"#f85149"} }).showToast();
    document.getElementById('regPassConfirm').classList.add('input-error');
    setTimeout(() => document.getElementById('regPassConfirm').classList.remove('input-error'), 500);
    hasError = true;
}

if (hasError) return;

let users = loadUsers();

// Verificar se usuário já existe (case insensitive)
if (users.find(u => u.user.toLowerCase() === user.toLowerCase())) {
    Toastify({ text:"Usuário já existe!", duration:2000, style:{background:"#f85149"} }).showToast();
    document.getElementById('regUser').classList.add('input-error');
    setTimeout(() => document.getElementById('regUser').classList.remove('input-error'), 500);
    return;
}

// Verificar se email já está em uso
if (users.find(u => u.email && u.email.toLowerCase() === email.toLowerCase())) {
    Toastify({ text:"Email já está em uso por outra conta!", duration:2000, style:{background:"#f85149"} }).showToast();
    document.getElementById('regEmail').classList.add('input-error');
    setTimeout(() => document.getElementById('regEmail').classList.remove('input-error'), 500);
    return;
}

let role = 'cliente';
if (voucher === '4321') {
    role = 'admin';
    Toastify({ text:"Voucher válido! Conta admin criada.", duration:2500, style:{background:"#a371f7"} }).showToast();
} else if (voucher !== '') {
    Toastify({ text:"Voucher inválido! Conta criada como cliente.", duration:2000, style:{background:"#f0883e"} }).showToast();
}

users.push({ 
    user: user, 
    email: email, 
    pass: pass, 
    role: role, 
    history: [] 
});
saveUsers(users);

Toastify({ text:`Conta criada com sucesso! (${role})`, duration:2000, style:{background:"#238636"} }).showToast();
showPage('login');
document.getElementById('regUser').value = '';
document.getElementById('regEmail').value = '';
document.getElementById('regPass').value = '';
document.getElementById('regPassConfirm').value = '';
document.getElementById('regVoucher').value = '';
});

// ============================================================
//  CRUD MODAL - APENAS ADMIN PODE ACESSAR
// ============================================================
const modalOverlay = document.getElementById('modalOverlay');
function openModal(game=null) {
if (currentUserRole !== 'admin') {
    Toastify({ text:"Apenas administradores podem gerenciar jogos!", duration:2000, style:{background:"#f85149"} }).showToast();
    return;
}
modalOverlay.classList.remove('hidden');
document.getElementById('modalTitle').innerHTML = game ? '<i class="fas fa-edit"></i> Editar Jogo' : '<i class="fas fa-plus"></i> Novo Jogo';
document.getElementById('modalGameId').value = game ? game.id : '';
document.getElementById('modalGameName').value = game ? game.name : '';
document.getElementById('modalGameImage').value = game ? game.image : '';
document.getElementById('modalGamePrice').value = game ? game.price : '';
document.getElementById('modalCategory').value = game ? game.category : 'Ação';
document.getElementById('modalMultiplayer').value = game ? game.multiplayer : 'nao';
document.getElementById('modalDesc').value = game ? game.desc : '';
}
document.getElementById('modalCancel').addEventListener('click', ()=>modalOverlay.classList.add('hidden'));
modalOverlay.addEventListener('click', (e)=>{ if(e.target===modalOverlay) modalOverlay.classList.add('hidden'); });
document.getElementById('btnAdminAdd').addEventListener('click', ()=>openModal(null));

document.getElementById('modalSave').addEventListener('click', function() {
if (currentUserRole !== 'admin') {
    Toastify({ text:"Apenas administradores podem salvar!", duration:2000, style:{background:"#f85149"} }).showToast();
    return;
}

const id = document.getElementById('modalGameId').value;
const name = document.getElementById('modalGameName').value.trim();
const image = document.getElementById('modalGameImage').value.trim();
const price = document.getElementById('modalGamePrice').value.trim().replace(',','.');
const category = document.getElementById('modalCategory').value;
const multiplayer = document.getElementById('modalMultiplayer').value;
const desc = document.getElementById('modalDesc').value.trim();

if (!name || name.length<2) { Toastify({ text:"Nome inválido", duration:2000, style:{background:"#f85149"} }).showToast(); return; }
if (isNaN(parseFloat(price)) || parseFloat(price)<0) { Toastify({ text:"Preço inválido", duration:2000, style:{background:"#f85149"} }).showToast(); return; }
if (image && !image.startsWith('http')) { Toastify({ text:"URL inválida", duration:2000, style:{background:"#f85149"} }).showToast(); return; }

if (id) {
    const idx = gamesData.findIndex(g => g.id == id);
    if (idx!==-1) gamesData[idx] = { ...gamesData[idx], name, image, price:parseFloat(price).toFixed(2), category, multiplayer, desc };
} else {
    gamesData.push({ id:Date.now()+Math.random(), name, image, price:parseFloat(price).toFixed(2), category, multiplayer, desc });
}
saveGames(); modalOverlay.classList.add('hidden');
Toastify({ text:"Salvo!", duration:1500, style:{background:"#238636"} }).showToast();
renderAll(); applyFilters();
});

// ============================================================
//  LOGO VOLTAR PARA HOME
// ============================================================
document.getElementById('logoLink').addEventListener('click', function(e) {
e.preventDefault(); // Previne o comportamento padrão do link
showPage('home');
window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
//  INICIALIZAÇÃO
// ============================================================
document.getElementById('btnAdminLogout').addEventListener('click', logout);

if (checkSession()) {
// já logado
} else {
document.getElementById('btnLoginNav').addEventListener('click', ()=>showPage('login'));
document.getElementById('btnRegisterNav').addEventListener('click', ()=>showPage('register'));
}

renderAll();
showPage('home');
updateCartBadge();

// Atualiza bloqueio a cada segundo
setInterval(() => {
if (isLocked()) {
    updateLockUI();
}
}, 1000);

const link = document.createElement('link');
link.rel = 'icon';
link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎮</text></svg>';
document.head.appendChild(link);
