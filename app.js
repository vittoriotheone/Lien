const { useState, useEffect, useRef } = React;
function Icon({ size = 18, color, style, children }) {
    return (React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: Object.assign({ color: color || "currentColor", flexShrink: 0 }, style) }, children));
}
function Home(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5Z" })); }
function MessageCircle(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M21 12a8.5 8.5 0 0 1-8.5 8.5c-1.2 0-2.3-.25-3.3-.7L4 21l1.3-4.6A8.5 8.5 0 1 1 21 12Z" })); }
function Shuffle(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M3 6h3.5c2 0 3 1 4.5 3M3 18h3.5c2 0 3-1 4.5-3M15 6h6M15 18h6M18 3l3 3-3 3M18 15l3 3-3 3" })); }
function ImageIcon(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("rect", { x: "3", y: "4", width: "18", height: "16", rx: "2" }),
    React.createElement("circle", { cx: "8.5", cy: "9.5", r: "1.5" }),
    React.createElement("path", { d: "M21 15l-5-5-4 4-3-3-6 6" })); }
function Copy(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("rect", { x: "8", y: "8", width: "12", height: "12", rx: "2" }),
    React.createElement("path", { d: "M5 15V5a1 1 0 0 1 1-1h10" })); }
function Check(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M4 12l5 5L20 6" })); }
function RefreshCw(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M21 12a9 9 0 1 1-3-6.7M21 3v6h-6" })); }
function Sparkles(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3ZM19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" })); }
function Heart(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M12 21s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.4 12 21 12 21Z" })); }
function ArrowRight(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M4 12h16M14 6l6 6-6 6" })); }
function Users(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("circle", { cx: "9", cy: "8", r: "3" }),
    React.createElement("path", { d: "M2 20a7 7 0 0 1 14 0" }),
    React.createElement("circle", { cx: "17", cy: "9", r: "2.5" }),
    React.createElement("path", { d: "M16 20a5.5 5.5 0 0 1 6-5.2" })); }
function Send(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M22 2 11 13" }),
    React.createElement("path", { d: "M22 2 15 22l-4-9-9-4 20-7Z" })); }
function Plus(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M12 5v14M5 12h14" })); }
function X(p) { return React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M18 6 6 18M6 6l12 12" })); }
/* ------------------------------------------------------------------ */
/* Contenu                                                             */
/* ------------------------------------------------------------------ */
const DAYLINK_QUESTIONS = [
    "Quel est le moment de notre relation qui te fait le plus sourire quand tu y repenses ?",
    "Si on pouvait revivre une seule journée ensemble, laquelle choisirais-tu ?",
    "Qu'est-ce que j'ai fait récemment qui t'a fait te sentir aimé(e) ?",
    "Quelle habitude de l'autre t'attendrit le plus, même si tu ne le dis jamais ?",
    "À quoi ressemblerait notre journée parfaite, dans dix ans ?",
    "Quel est le petit geste du quotidien que tu préfères recevoir ?",
    "Qu'est-ce que tu as appris sur toi-même grâce à moi ?",
    "Quel souvenir d'enfance aimerais-tu me raconter, que je ne connais pas encore ?",
    "Qu'est-ce qui te fait te sentir en sécurité dans notre couple ?",
    "Si tu devais me décrire en trois mots aujourd'hui, lesquels choisirais-tu ?",
    "Quel est un rêve que tu n'as jamais osé me dire ?",
    "Qu'est-ce qu'on pourrait essayer ensemble cette année ?",
    "Quel est ton souvenir préféré de notre rencontre ?",
    "Qu'est-ce que je fais qui te donne envie de rire, même les mauvais jours ?",
    "Comment sais-tu que je pense à toi sans que je te le dise ?",
    "Quelle chanson te fait penser à nous ?",
    "Qu'est-ce que tu voudrais qu'on fasse plus souvent, tous les deux ?",
    "Quel est le compliment que tu aimerais entendre plus souvent ?",
    "Qu'est-ce qui te rassure le plus quand tu doutes de toi ?",
    "Si notre couple était un lieu, lequel serait-il et pourquoi ?",
    "Quelle petite victoire récente aimerais-tu que je célèbre avec toi ?",
    "Qu'est-ce que tu changerais dans notre quotidien si tu pouvais ?",
    "Quel est le trait de caractère que tu admires le plus chez moi ?",
    "À quel moment as-tu su que tu m'aimais ?",
    "Qu'est-ce qui te manque le plus quand on est loin l'un de l'autre ?",
    "Quelle tradition aimerais-tu qu'on invente, juste à nous deux ?",
    "Qu'est-ce que je pourrais faire pour te faciliter la vie cette semaine ?",
    "Quel est ton endroit préféré quand on est ensemble ?",
    "Qu'est-ce que tu voudrais qu'on se pardonne, toi et moi ?",
    "Si tu pouvais figer un instant de nous deux pour toujours, lequel serait-ce ?",
];
const QUI_DE_NOUS = [
  "Dit le plus souvent je t’aime ?",
  "Fait le plus souvent des massages ?",
  "Envoie le plus souvent des sms à l’autre ?",
  "Fait le plus de compliments à l’autre ?",
  "Fait le plus attention à son apparence ?",
  "Est le plus drôle ?",
  "Ronfle le plus la nuit ?",
  "Remplace toujours le rouleau de papier toilette ?",
  "A le plus le sens de l’orientation ?",
  "Sait le mieux garder les secrets ?",
  "Est le plus impulsif ?",
  "Est le plus bordélique ?",
  "Sort le plus avec ses amis ?",
  "Conduit le mieux ?",
  "A été le premier à avoir le béguin pour l’autre ?",
  "Est le plus maladroit ?",
  "Se regarde le plus dans le miroir ?",
  "A le plus souvent le dernier mot ?",
  "Se plaint le plus quand il est malade ?",
  "Est le plus têtu ?",
  "Prend le plus de temps pour se préparer ?",
  "Est toujours en retard ?",
  "Passe le plus souvent l’aspirateur ?",
  "Décide le plus des programmes TV ou des séries à regarder ?",
  "Prend le plus de place dans le lit ?",
  "Est le plus câlin ?",
  "Danse le mieux ?",
  "A le plus de grains de beauté ?",
  "Est le plus chatouilleux ?",
  "Passe le plus de temps sur les réseaux sociaux ?",
  "Mange le plus épicé ?",
  "A le plus de vêtements ?",
  "Chante le mieux",
  "Cuisine le mieux ?",
  "Est le plus maniaque ?",
  "Est le plus dépensier ?",
  "Parle le mieux l’anglais ?",
  "Serait capable de faire Koh Lanta ?",
  "N’appelle jamais ses parents ?",
  "A fait le premier pas ?",
  "A dit le premier je t’aime ?",
  "Fait les courses ?",
  "Fait la vaisselle ?",
  "Traine le dimanche en jogging ?",
  "Passe le plus de temps dans le bain ?",
  "Chante des chansons des années 80 ?",
  "Passe le plus de temps au téléphone ?",
  "Tient la télécommande devant la télé ?",
  "Fait la sieste le weekend ?",
  "A le plus mauvais caractère ?",
  "Est le plus jaloux ?",
  "Va vers l’autre après une dispute ?",
  "Est de mauvaise foi ?",
  "Est toujours dans le rouge sur son compte en banque ?",
  "A déjà oublié sa carte bleue au moment de payer l’addition ?",
  "Mange toujours le dernier chocolat dans la boîte ?",
  "Boit le plus de café ?",
  "Boit le plus d’alcool ?",
  "Va chercher les croissants le dimanche matin ?",
  "Prépare le petit déjeuner le dimanche matin ?",
  "A le plus de points restant sur son permis de conduire ?",
  "S’énerve en voiture ?",
  "A visité le plus de pays dans le monde ?",
  "A le meilleur niveau en ski ?",
  "Offre le plus de cadeaux ?",
  "Est le dernier à avoir dit “je t’aime” ?",
  "A enchainé le plus de conquêtes avant votre union ?",
  "Est le plus romantique ?",
  "Sort les poubelles ?",
  "S’endort le premier après l’amour ?",
  "Appelle l’autre le plus souvent ?",
  "Passe le plus de temps au téléphone avec ses parents ?",
  "Se lève le plus tôt ?",
  "Se couche le plus tard ?",
  "Aime le plus sortir au restaurant ?",
  "Est le plus attentif à la date d’anniversaire des parents et amis ?",
  "A la phobie des araignées ?",
  "A peur du noir ?",
  "Ne rebouche jamais le tube de dentifrice ?",
  "Boude le plus souvent ?",
  "Est le plus bavard de deux ?",
  "Est le plus geek des deux ?",
  "A le meilleur coup de fourchette ?",
  "Mange le plus de junkfood ?",
  "Dessine le mieux ?",
  "Fait peur à l’autre au volant ?",
  "Parle le plus souvent pour ne rien dire ?",
  "A le plus de défauts ?",
  "Fait le moins de fautes d’orthographe ?",
  "Assume le plus mal son second prénom ?",
  "A conservé son doudou ?",
  "Râle le plus ?",
  "Pleure le plus souvent ?",
  "Fait le plus de surprises à l’autre ?",
  "Ecrit le plus de mots d’amour ?",
  "Fait les meilleures blagues ?",
  "Pleure devant la TV ?",
  "A le plus peur de perdre l’autre ?",
  "Dit toute la vérité depuis le début ?",
  "A menti le plus à ce jeu ?"
];

const TU_PREFERES = [
  ["Tu préfères faire la vaisselle tous les soirs ou sortir les poubelles (même quand il pleut) ?", ""],
  ["Tu préfères te lever tôt ensemble le week-end pour profiter de la journée ou faire la grasse matinée jusqu'à midi ?", ""],
  ["Tu préfères laisser traîner tes chaussettes partout ou devoir ranger celles de l'autre ?", ""],
  ["Tu préfères cuisiner ensemble, même si c'est le chaos, ou que l'un cuisine pendant que l'autre se détend ?", ""],
  ["Tu préfères choisir le film/la série ce soir ou laisser l'autre décider ?", ""],
  ["Tu préfères avoir le contrôle total de la télécommande ou de la playlist Spotify ?", ""],
  ["Tu préfères un appart/une maison toujours nickel ou un joyeux bordel organisé ?", ""],
  ["Tu préfères partager absolument toute ta nourriture ou avoir ton assiette rien qu'à toi (pas touche !) ?", ""],
  ["Tu préfères faire les courses ensemble ou que l'un s'en charge pour les deux ?", ""],
  ["Tu préfères dormir avec la fenêtre ouverte (même en hiver) ou complètement fermée ?", ""],
  ["Tu préfères avoir chacun votre couette ou partager la même (et jouer à la guerre des couvertures) ?", ""],
  ["Tu préfères te préparer rapidement le matin ou prendre tout ton temps ?", ""],
  ["Tu préfères recevoir de l'aide pour une tâche sans demander ou qu'on te demande toujours avant d'intervenir ?", ""],
  ["Tu préfères un petit-déjeuner rapide en semaine ou un vrai brunch le dimanche ?", ""],
  ["Tu préfères gérer le budget à deux au centime près ou avoir une certaine indépendance financière ?", ""],
  ["Tu préfères une soirée ciné tranquille à la maison ou une sortie resto chic improvisée ?", ""],
  ["Tu préfères des vacances aventureuses sac au dos ou un séjour tout compris dans un hôtel de luxe ?", ""],
  ["Tu préfères un week-end surprise planifié par l'autre ou organiser ensemble votre prochaine escapade ?", ""],
  ["Tu préfères recevoir des cadeaux matériels ou des expériences à vivre à deux (concert, voyage...) ?", ""],
  ["Tu préfères une grosse fête d'anniversaire avec tous vos amis ou une célébration intime juste tous les deux ?", ""],
  ["Tu préfères explorer une nouvelle ville ensemble ou retourner dans un endroit que vous adorez déjà ?", ""],
  ["Tu préfères passer des heures à discuter dans un café ou faire une activité sportive ensemble ?", ""],
  ["Tu préfères une soirée jeux de société avec des amis ou une soirée romantique en tête-à-tête ?", ""],
  ["Tu préfères des petits mots doux laissés par surprise ou des grandes déclarations d'amour publiques ?", ""],
  ["Tu préfères aller voir un match de foot/rugby ou un ballet/opéra ? (Ou ni l'un ni l'autre !)", ""],
  ["Tu préfères une balade en nature (forêt, montagne) ou une journée shopping en ville ?", ""],
  ["Tu préfères essayer un nouveau restaurant super branché ou retourner dans votre cantine préférée ?", ""],
  ["Tu préfères un cadeau fait main avec amour ou un cadeau cher acheté en magasin ?", ""],
  ["Tu préfères partir en vacances avec d'autres couples d'amis ou juste tous les deux ?", ""],
  ["Tu préfères regarder le coucher de soleil en silence ou le lever de soleil après une nuit blanche ?", ""],
  ["Tu préfères régler un désaccord tout de suite, même à chaud, ou attendre d'être calmés pour en parler posément ?", ""],
  ["Tu préfères avoir besoin d'espace après une dispute ou avoir besoin d'un câlin de réconciliation immédiat ?", ""],
  ["Tu préfères dire franchement quand quelque chose te dérange ou prendre sur toi pour éviter un conflit ?", ""],
  ["Tu préfères recevoir des critiques constructives sur tes défauts ou qu'on ne te dise rien et qu'on te laisse faire ?", ""],
  ["Tu préfères parler de tes sentiments ouvertement ou les montrer par des actions ?", ""],
  ["Tu préfères avoir des discussions profondes sur vos émotions ou garder les conversations légères et fun ?", ""],
  ["Tu préfères qu'on te pose plein de questions quand ça ne va pas ou qu'on te laisse venir en parler quand tu es prêt(e) ?", ""],
  ["Tu préfères te confier à ton/ta partenaire en premier ou à tes amis/famille ?", ""],
  ["Tu préfères pardonner facilement une erreur ou avoir besoin de temps pour passer à autre chose ?", ""],
  ["Tu préfères qu'on devine ce dont tu as besoin ou devoir l'exprimer clairement ?", ""],
  ["Tu préfères aborder les sujets \"sérieux\" (argent, engagement) de manière planifiée ou quand ça vient naturellement ?", ""],
  ["Tu préfères rire ensemble de vos désaccords passés ou ne plus jamais en reparler ?", ""],
  ["Tu préfères utiliser des petits surnoms mignons en public ou garder ça pour vous ?", ""],
  ["Tu préfères recevoir un long message pour t'excuser ou une discussion en face à face ?", ""],
  ["Tu préfères que ton/ta partenaire te défende toujours (même si tu as tort) ou qu'il/elle reste objectif(ve) ?", ""],
  ["Tu préfères parler de vos projets d'avenir lointains (mariage, enfants, maison) ou profiter du moment présent sans trop planifier ?", ""],
  ["Tu préfères vivre en ville dans un petit appart ou à la campagne dans une grande maison ?", ""],
  ["Tu préfères avoir des enfants un jour ou voyager autour du monde ? (Et pourquoi pas les deux ?)", ""],
  ["Tu préfères un grand mariage avec toute la famille et les amis ou une cérémonie intime juste tous les deux (ou presque) ?", ""],
  ["Tu préfères adopter un chien, un chat, ou aucun animal de compagnie ?", ""],
  ["Tu préfères avoir des carrières très prenantes ou privilégier le temps passé ensemble ?", ""],
  ["Tu préfères rencontrer la belle-famille rapidement ou attendre que la relation soit bien installée ?", ""],
  ["Tu préfères passer Noël en famille chacun de votre côté ou trouver un compromis pour être ensemble ?", ""],
  ["Tu préfères économiser pour un gros projet commun ou dépenser pour des plaisirs immédiats ?", ""],
  ["Tu préfères vieillir ensemble dans votre ville actuelle ou déménager à l'étranger pour la retraite ?", ""],
  ["Tu préfères avoir des traditions de couple bien établies ou toujours improviser ?", ""],
  ["Tu préfères que vos amis respectifs s'entendent super bien ou garder vos cercles d'amis un peu séparés ?", ""],
  ["Tu préfères imaginer votre vie dans 5 ans ou dans 20 ans ?", ""],
  ["Tu préfères réussir professionnellement quitte à moins voir ton/ta partenaire ou l'inverse ?", ""],
  ["Tu préfères transmettre des valeurs communes à vos (éventuels) enfants ou leur laisser une totale liberté de choix ?", ""],
  ["Tu préfères porter des T-shirts assortis en public ou avoir la même sonnerie de téléphone kitsch ?", ""],
  ["Tu préfères que ton/ta partenaire te coupe les cheveux ou que tu lui coupes les siens ? (Risqué !)", ""],
  ["Tu préfères regarder une comédie romantique clichée ensemble ou un film d'horreur qui fait bien flipper ?", ""],
  ["Tu préfères partager votre compte Netflix/Spotify ou avoir chacun le vôtre ?", ""],
  ["Tu préfères chanter à tue-tête ensemble en voiture ou écouter la musique en silence ?", ""],
  ["Tu préfères que ton/ta partenaire voie ta tête du matin pas réveillé(e) ou t'entende ronfler ?", ""],
  ["Tu préfères avoir le même plat préféré ou des goûts culinaires complètement opposés ?", ""],
  ["Tu préfères réussir un plat compliqué pour l'autre ou qu'il/elle réussisse à monter un meuble IKEA sans s'énerver ?", ""],
  ["Tu préfères laisser l'autre choisir la déco ou imposer ton style ?", ""],
  ["Tu préfères que ton/ta partenaire connaisse ton mot de passe de téléphone ou pas du tout ?", ""],
  ["Tu préfères faire un karaoké en duo sur une chanson d'amour un peu nulle ou une chorégraphie TikTok ?", ""],
  ["Tu préfères avoir un fou rire incontrôlable dans un moment sérieux ou pleurer devant un film émouvant ?", ""],
  ["Tu préfères que ton/ta partenaire te choisisse tes vêtements pour une journée ou l'inverse ?", ""],
  ["Tu préfères avoir un secret rigolo juste tous les deux ou partager toutes vos anecdotes avec vos amis ?", ""],
  ["Tu préfères faire une sieste crapuleuse ou une bataille de polochons ?", ""],
  ["Tu préfères que ton/ta partenaire imite parfaitement ta voix ou tes mimiques ?", ""],
  ["Tu préfères aller à un mariage où vous ne connaissez personne ou à un dîner de famille un peu ennuyeux ?", ""],
  ["Tu préfères devoir supporter sa passion bizarre (collection de timbres, fan de K-Pop...) ou qu'il/elle supporte la tienne ?", ""],
  ["Tu préfères danser un slow ridicule en public ou chanter une sérénade (même faux) ?", ""],
  ["Tu préfères finir les phrases de l'autre ou avoir votre propre langage secret ?", ""],
  ["Tu préfères affronter une araignée pour l'autre ou qu'il/elle le fasse pour toi ?", ""],
  ["Tu préfères que ton/ta partenaire te raconte sa journée en détail ou juste les points importants ?", ""],
  ["Tu préfères avoir une photo dossier de l'autre ou qu'il/elle en ait une de toi ?", ""],
  ["Tu préfères faire semblant d'aimer un cadeau qu'il/elle t'a offert ou lui dire gentiment la vérité ?", ""],
  ["Tu préfères passer une journée entière sans téléphone juste tous les deux ou pouvoir communiquer même à distance ?", ""],
  ["Tu préfères re-regarder votre film/série préféré(e) pour la 10ème fois ou découvrir quelque chose de nouveau ensemble ?", ""],
  ["Tu préfères recevoir un long câlin ou un long message d’amour ?", ""],
  ["Tu préfères organiser une surprise pour l’autre ou recevoir une surprise ?", ""],
  ["Tu préfères danser lentement dans le salon ou chanter ensemble dans la voiture ?", ""],
  ["Tu préfères vous écrire des lettres ou vous laisser des petits mots surprises ?", ""],
  ["Tu préfères refaire votre premier rendez-vous ou inventer un nouveau rendez-vous ?", ""],
  ["Tu préfères regarder des photos de vous deux ou regarder vos premières conversations ?", ""],
  ["Tu préfères passer une journée entière à rire ensemble ou une journée entière à discuter ?", ""],
  ["Tu préfères recevoir un petit-déjeuner au lit ou préparer celui de l’autre ?", ""],
  ["Tu préfères découvrir un nouvel endroit ensemble ou revisiter votre endroit préféré ?", ""],
  ["Tu préfères recevoir un compliment inattendu ou en faire un inattendu ?", ""],
  ["Tu préfères planifier une journée parfaite ou tout improviser ?", ""],
  ["Tu préfères écrire votre meilleur souvenir ou le raconter à voix haute ?", ""],
  ["Tu préfères une soirée sans téléphone ou une journée sans réseaux sociaux ?", ""],
  ["Tu préfères créer une tradition annuelle ou une tradition hebdomadaire ?", ""],
  ["Tu préfères regarder le coucher du soleil ensemble ou vous réveiller pour voir le lever du soleil ?", ""]
];

const DEFIS_LIST = [
  "Se regarder dans les yeux pendant quatre minutes.",
  "Faire un compliment sur un vêtement, un parfum, un sourire, la douceur de la peau…",
  "Écrire chacun de son côté une liste de cinq choses que vous aimeriez faire ensemble.",
  "Se dire merci pour une action, une parole ou simplement pour le fait de partager sa vie.",
  "Parcourir ensemble des anciens albums photo.",
  "Faire une liste de cinq qualités que vous appréciez particulièrement chez votre partenaire. Glisser ensuite la liste sous son oreiller !",
  "Écrire un mot doux. Laisser ensuite le mot à un endroit où votre partenaire le trouvera : dans son sac, dans sa trousse à maquillage, sur le miroir de la salle de bain…",
  "Faire une liste de cinq raisons pour lesquelles vous aimez votre partenaire. L’écrire sur une belle feuille et la glisser dans son ordinateur portable ou dans le livre qu’il ou elle lit.",
  "Écrire une lettre d’amour. La mettre dans une belle enveloppe avant de la glisser dans la boîte aux lettres.",
  "Dire « Je t’aime ».",
  "Préparer le petit-déjeuner préféré de l’autre.",
  "Choisir une chanson qui représente votre duo et l’écouter ensemble.",
  "Écrire trois souvenirs qui vous font rire et les lire à voix haute.",
  "Créer une playlist de cinq chansons qui vous ressemblent.",
  "Faire une photo de vous deux qui représente votre journée.",
  "Écrire chacun une qualité de l’autre sur un petit papier et les mélanger avant de les lire.",
  "Préparer une surprise minuscule pour l’autre en moins de dix minutes.",
  "Raconter chacun votre première impression de l’autre.",
  "Inventer ensemble une tradition que vous pourriez refaire chaque mois.",
  "Écrire chacun une chose que vous aimeriez découvrir avec l’autre cette année.",
  "Faire un mini concours de compliments : chacun doit en trouver cinq sans se répéter.",
  "Rejouer votre première rencontre pendant deux minutes.",
  "Choisir un souvenir et raconter pourquoi il compte autant pour vous.",
  "Faire une promenade sans téléphone pendant vingt minutes.",
  "Écrire chacun une phrase qui résume votre duo."
];

const CATEGORIES = [];

const LEVELS = [
    { name: "Étincelle", min: 0 },
    { name: "Flamme", min: 20 },
    { name: "Brasier", min: 50 },
    { name: "Feu ardent", min: 100 },
    { name: "Flamme éternelle", min: 200 },
];
/* ------------------------------------------------------------------ */
/* Aides                                                                */
/* ------------------------------------------------------------------ */
function pad(n) { return String(n).padStart(2, "0"); }
function todayStr() {
    const d = new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
}
function yesterdayStr() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
}
function dayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    return Math.floor((now - start) / 86400000);
}
function pickUnusedIndex(len, used) {
    const usedSet = new Set(Array.isArray(used) ? used : []);
    if (usedSet.size >= len) return -1;
    let idx; do { idx = Math.floor(Math.random() * len); } while (usedSet.has(idx));
    return idx;
}
function levelForScore(score) {
    let current = LEVELS[0];
    let next = LEVELS[1] || null;
    for (let i = 0; i < LEVELS.length; i++) {
        if (score >= LEVELS[i].min) {
            current = LEVELS[i];
            next = LEVELS[i + 1] || null;
        }
    }
    return { current, next };
}
function touchActivity(d, points) {
    d.score = (d.score || 0) + points;
    const today = todayStr();
    const yest = yesterdayStr();
    if (d.lastActiveDate !== today) {
        d.streak = d.lastActiveDate === yest ? (d.streak || 0) + 1 : 1;
        d.lastActiveDate = today;
    }
    return d;
}

function normalizeGameText(v) { return String(v || "").trim(); }
function getCustomByType(data, type) {
  return (data && Array.isArray(data.customQuestions) ? data.customQuestions : [])
    .filter(q => q && q.type === type)
    .map(q => ({ key: "custom:" + q.id, text: q.text, custom: true }));
}
function getQuiPool(data) {
  return [...QUI_DE_NOUS.map((text,i)=>({key:"base:"+i,text})), ...getCustomByType(data,"qui")];
}
function getTuPool(data) {
  return [...TU_PREFERES.map((pair,i)=>({key:"base:"+i,text:pair[0], options:pair})), ...getCustomByType(data,"tu").map(q=>({key:q.key,text:q.text,options:[q.text,""]}))];
}
function getAvPool(data, type) {
  const base = ACTION_VERITE.filter(c => c.type === type).map((c,i)=>({key:"base:"+type+":"+i,text:c.text,type}));
  const custom = getCustomByType(data,"av").map(q=>({key:q.key,text:q.text,type}));
  return [...base, ...custom];
}
function pickUnusedItem(pool, used) {
  const usedSet = new Set(Array.isArray(used) ? used : []);
  const available = pool.filter(x => !usedSet.has(x.key));
  if (!available.length) return null;
  return available[Math.floor(Math.random() * available.length)];
}
function ensureQui(fresh) {
  const pool = getQuiPool(fresh);
  if (!fresh.qui || fresh.qui.version !== 3) {
    const item = pickUnusedItem(pool, []);
    fresh.qui = { version:3, currentKey:item ? item.key : null, used:item ? [item.key] : [], votes:{A:null,B:null}, roundScored:false, advance:{A:false,B:false} };
  } else if (!Array.isArray(fresh.qui.used)) {
    fresh.qui.used = fresh.qui.currentKey ? [fresh.qui.currentKey] : [];
    fresh.qui.advance = fresh.qui.advance || {A:false,B:false};
  }
  return fresh.qui;
}
function ensureTuPrefere(fresh) {
  const pool = getTuPool(fresh);
  if (!fresh.tuprefere || fresh.tuprefere.version !== 3) {
    const item = pickUnusedItem(pool, []);
    fresh.tuprefere = { version:3, currentKey:item ? item.key : null, used:item ? [item.key] : [], votes:{A:null,B:null}, roundScored:false, advance:{A:false,B:false} };
  } else if (!Array.isArray(fresh.tuprefere.used)) {
    fresh.tuprefere.used = fresh.tuprefere.currentKey ? [fresh.tuprefere.currentKey] : [];
    fresh.tuprefere.advance = fresh.tuprefere.advance || {A:false,B:false};
  }
  return fresh.tuprefere;
}
function ensureActionVerite(fresh) {
  if (!fresh.actionVerite || fresh.actionVerite.version !== 3) {
    fresh.actionVerite = { version:3, phase:"choose", currentKey:null, currentText:null, targetSlot:"A", usedKeys:[], typeHistory:[] };
  } else {
    fresh.actionVerite.usedKeys = Array.isArray(fresh.actionVerite.usedKeys) ? fresh.actionVerite.usedKeys : [];
    fresh.actionVerite.typeHistory = Array.isArray(fresh.actionVerite.typeHistory) ? fresh.actionVerite.typeHistory : [];
    fresh.actionVerite.phase = fresh.actionVerite.phase || "choose";
  }
  return fresh.actionVerite;
}
function ensureDefis(fresh) {
  if (!fresh.defis || !Array.isArray(fresh.defis.log) || !('current' in fresh.defis)) fresh.defis = { log: [], current: null };
  return fresh.defis;
}
const SUPABASE_URL = "https://clwjttcvslwrllwldfoq.supabase.co";
const SUPABASE_KEY = "sb_publishable_S-aRj1SFu4-6ZbE5dycRIQ_D7oim3bl";

async function supabaseRequest(path, options = {}) {
    const response = await fetch(SUPABASE_URL + "/rest/v1/" + path, {
        ...options,
        headers: {
            apikey: SUPABASE_KEY,
            Authorization: "Bearer " + SUPABASE_KEY,
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
    });
    if (!response.ok) {
        const detail = await response.text().catch(() => "");
        throw new Error("Supabase " + response.status + (detail ? ": " + detail : ""));
    }
    if (response.status === 204) return null;
    const text = await response.text();
    return text ? JSON.parse(text) : null;
}

async function getCouple(codeVal) {
    try {
        const rows = await supabaseRequest(
            "spaces?code=eq." + encodeURIComponent(codeVal) + "&select=code,data",
            { method: "GET" }
        );
        return rows && rows.length ? rows[0].data : null;
    }
    catch (e) {
        console.error("Impossible de lire l'espace:", e);
        throw e;
    }
}

async function setCouple(codeVal, obj) {
    const existing = await supabaseRequest(
        "spaces?code=eq." + encodeURIComponent(codeVal) + "&select=code",
        { method: "GET" }
    );
    if (existing && existing.length) {
        await supabaseRequest(
            "spaces?code=eq." + encodeURIComponent(codeVal),
            { method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ data: obj }) }
        );
    }
    else {
        await supabaseRequest(
            "spaces",
            { method: "POST", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ code: codeVal, data: obj }) }
        );
    }
    return { ok: true };
}
/* ------------------------------------------------------------------ */
/* Messagerie partagée                                                  */
/* ------------------------------------------------------------------ */
async function getMessages(spaceCode) {
    if (!spaceCode) return [];
    const rows = await supabaseRequest(
        "messages?space_code=eq." + encodeURIComponent(spaceCode) + "&select=id,sender_slot,sender_name,text,created_at&order=id.asc&limit=100",
        { method: "GET" }
    );
    return rows || [];
}
async function sendMessage(spaceCode, senderSlot, senderName, text) {
    return supabaseRequest("messages", {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify({ space_code: spaceCode, sender_slot: senderSlot, sender_name: senderName, text: text.trim() })
    });
}


const MAIN_SPACE_FALLBACK_CODE = "LIEN-MAIN";
const ALLOWED_PROFILES = ["Victor", "Marianne"];
const PROFILE_ALIASES = {
    Victor: ["victor", "vic", "ivctor"],
    Marianne: ["marianne", "mrianne", "mariou"]
};
function normalizeProfileInput(value) {
    return String(value || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function levenshtein(a, b) {
    const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
        let left = prev[0], diagonal = prev[0]; prev[0] = i;
        for (let j = 1; j <= b.length; j++) {
            const old = prev[j];
            prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diagonal + (a[i - 1] === b[j - 1] ? 0 : 1));
            diagonal = old;
        }
    }
    return prev[b.length];
}
function resolveProfile(value) {
    const input = normalizeProfileInput(value);
    if (!input) return null;
    for (const profile of ALLOWED_PROFILES) {
        const aliases = PROFILE_ALIASES[profile];
        if (aliases.includes(input)) return profile;
        // Petite tolérance aux fautes de frappe, sans accepter n'importe quel mot.
        if (aliases.some(alias => input.length >= 3 && Math.max(alias.length, input.length) - Math.min(alias.length, input.length) <= 2 && levenshtein(input, alias) <= (input.length <= 4 ? 1 : 2))) return profile;
    }
    return null;
}
async function getMainSpace() {
    const rows = await supabaseRequest("spaces?select=code,data&limit=1", { method: "GET" });
    if (rows && rows.length) return rows[0];
    const initial = { createdAt: Date.now(), members: { A: "Victor", B: "Marianne" }, score: 0, streak: 0, lastActiveDate: null, daylink: {}, qui: null, tuprefere: null, defis: { log: [], current: null }, souvenirs: [], customQuestions: [] };
    await setCouple(MAIN_SPACE_FALLBACK_CODE, initial);
    return { code: MAIN_SPACE_FALLBACK_CODE, data: initial };
}
function emptyMainData() {
    return { createdAt: Date.now(), members: { A: "Victor", B: "Marianne" }, score: 0, streak: 0, lastActiveDate: null, daylink: {}, qui: null, tuprefere: null, defis: { log: [], current: null }, souvenirs: [], customQuestions: [] };
}
/* ------------------------------------------------------------------ */
/* Petits composants visuels                                           */
/* ------------------------------------------------------------------ */
function ConnectionOrbit({ progress = 0, size = 72 }) {
    const p = Math.max(0, Math.min(1, progress));
    const offset = size * 0.32 * (1 - p);
    const c = size * 0.62;
    return (React.createElement("div", { style: { position: "relative", width: size, height: size, flexShrink: 0 } },
        React.createElement("div", { style: {
                position: "absolute", left: "50%", top: "50%", width: c, height: c,
                marginLeft: -c / 2 - offset / 2, marginTop: -c / 2,
                borderRadius: "9999px", background: "#F4C77B", mixBlendMode: "screen",
                animation: "duoFloat 6s ease-in-out infinite",
            } }),
        React.createElement("div", { style: {
                position: "absolute", left: "50%", top: "50%", width: c, height: c,
                marginLeft: -c / 2 + offset / 2, marginTop: -c / 2,
                borderRadius: "9999px", background: "#FF8B66", mixBlendMode: "screen",
                animation: "duoFloat 6s ease-in-out infinite 0.6s",
            } })));
}
function ThreadLink({ state }) {
    return (React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, width: "100%" } },
        React.createElement("div", { style: {
                width: 11, height: 11, borderRadius: "9999px", background: "#F4C77B", flexShrink: 0,
                boxShadow: state === "connected" ? "0 0 12px 3px rgba(244,199,123,0.55)" : "none",
                animation: state === "connected" ? "duoPulseGlow 2s ease-in-out infinite" : "none",
            } }),
        React.createElement("div", { style: {
                position: "relative", flex: 1, height: 2, borderRadius: 2, overflow: "hidden",
                background: state === "connected"
                    ? "linear-gradient(90deg,#F4C77B,#FF8B66)"
                    : "repeating-linear-gradient(90deg, rgba(167,155,192,0.5) 0 6px, transparent 6px 12px)",
            } }, state === "connected" && (React.createElement("div", { style: {
                position: "absolute", top: -3, width: 8, height: 8, borderRadius: "9999px",
                background: "#F5EFE6", boxShadow: "0 0 8px 2px rgba(245,239,230,0.8)",
                animation: "duoTravel 2.4s linear infinite",
            } }))),
        React.createElement("div", { style: {
                width: 11, height: 11, borderRadius: "9999px", background: "#FF8B66", flexShrink: 0,
                boxShadow: state === "connected" ? "0 0 12px 3px rgba(255,139,102,0.55)" : "none",
                animation: state === "connected" ? "duoPulseGlow 2s ease-in-out infinite 0.3s" : "none",
            } })));
}
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,500&family=Sora:wght@400;500;600;700&display=swap');
.duo-root { font-family: 'Sora', sans-serif; color: #F5EFE6; }
.duo-display { font-family: 'Fraunces', serif; }
.duo-card { background: #2A2140; border: 1px solid rgba(244,199,123,0.10); border-radius: 20px; }
.duo-input {
  background: rgba(245,239,230,0.06); border: 1px solid rgba(167,155,192,0.3);
  color: #F5EFE6; border-radius: 14px; padding: 12px 14px; font-family: 'Sora', sans-serif;
  font-size: 15px; width: 100%; outline: none;
}
.duo-input::placeholder { color: #A79BC0; }
.duo-input:focus { border-color: #F4C77B; }
.duo-btn-primary {
  background: linear-gradient(135deg, #FF8B66, #F4C77B); color: #1E1730; font-weight: 600;
  border-radius: 999px; border: none; padding: 13px 20px; font-family: 'Sora', sans-serif;
  cursor: pointer; transition: transform 0.15s ease, opacity 0.15s ease;
}
.duo-btn-primary:active { transform: scale(0.97); }
.duo-btn-primary:disabled { opacity: 0.4; cursor: not-allowed; }
.duo-btn-ghost {
  background: transparent; border: 1px solid rgba(167,155,192,0.4); color: #F5EFE6;
  border-radius: 999px; padding: 12px 20px; font-family: 'Sora', sans-serif; cursor: pointer;
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.duo-btn-ghost:active { transform: scale(0.97); }
.duo-nav-item { color: #A79BC0; display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer; }
.duo-nav-item.active { color: #FF8B66; }
.duo-pill { border-radius: 999px; padding: 7px 14px; font-size: 13px; cursor: pointer; border: 1px solid rgba(167,155,192,0.3); color: #A79BC0; }
.duo-pill.active { background: rgba(255,139,102,0.16); border-color: #FF8B66; color: #FF8B66; }
.duo-scroll::-webkit-scrollbar { width: 0; height: 0; }
@keyframes duoFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
@keyframes duoPulseGlow { 0%,100% { opacity: 0.65; } 50% { opacity: 1; } }
@keyframes duoTravel { 0% { left: 0; } 100% { left: calc(100% - 8px); } }
@keyframes duoFadeUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
`;
/* ------------------------------------------------------------------ */
/* App principale                                                       */
/* ------------------------------------------------------------------ */
function App() {
    const [phase, setPhase] = useState("landing");
    const [code, setCode] = useState("");
    const [myName, setMyName] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [mySlot, setMySlot] = useState(null);
    const [data, setData] = useState(null);
    const [tab, setTab] = useState("accueil");
    const [gameSub, setGameSub] = useState("qui");
    const [defiCat, setDefiCat] = useState("doux");
    const [loading, setLoading] = useState(false);
    const [syncing, setSyncing] = useState(false);
    const [error, setError] = useState("");
    const [daylinkText, setDaylinkText] = useState("");
    const [souvenirTitle, setSouvenirTitle] = useState("");
    const [souvenirNote, setSouvenirNote] = useState("");
    const [souvenirDate, setSouvenirDate] = useState("");
    const [souvenirCommentDrafts, setSouvenirCommentDrafts] = useState({});
    const [customText, setCustomText] = useState("");
    const [customType, setCustomType] = useState("qui");
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const [unreadMessages, setUnreadMessages] = useState(0);
    const [chatHeight, setChatHeight] = useState(62);
    const chatListRef = useRef(null);
    const chatSeenRef = useRef(0);
    const chatInitializedRef = useRef(false);
    const partnerName = data ? (mySlot === "A" ? data.members.B : data.members.A) : null;
    function startChatResize(e) {
        e.preventDefault();
        const root = document.querySelector(".duo-root");
        if (!root) return;
        const rect = root.getBoundingClientRect();
        const startY = e.clientY;
        const startHeight = rect.height * (chatHeight / 100);
        const onMove = (ev) => {
            const minHeight = 190;
            const maxHeight = rect.height * 0.82;
            const nextHeight = Math.max(minHeight, Math.min(maxHeight, startHeight + startY - ev.clientY));
            setChatHeight(Math.round((nextHeight / rect.height) * 100));
        };
        const onUp = () => {
            document.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerup", onUp);
        };
        document.addEventListener("pointermove", onMove);
        document.addEventListener("pointerup", onUp);
    }
    async function refresh() {
        if (!code) return;
        setSyncing(true);
        try {
            const fresh = await getCouple(code);
            if (!fresh) return;
            // Pendant qu'on affiche les résultats d'une partie, ne jamais remplacer
            // notre manche locale par une manche suivante venue de l'autre appareil.
            if (data && tab === "jeux" && gameSub === "qui" && data.qui && fresh.qui &&
                data.qui.currentKey !== fresh.qui.currentKey && data.qui.votes?.A && data.qui.votes?.B) {
                setData(prev => ({ ...fresh, qui: prev.qui }));
            } else if (data && tab === "jeux" && gameSub === "tu" && data.tuprefere && fresh.tuprefere &&
                data.tuprefere.currentKey !== fresh.tuprefere.currentKey &&
                (data.tuprefere.votes?.A === 0 || data.tuprefere.votes?.A === 1) &&
                (data.tuprefere.votes?.B === 0 || data.tuprefere.votes?.B === 1)) {
                setData(prev => ({ ...fresh, tuprefere: prev.tuprefere }));
            } else {
                setData(fresh);
            }
        } finally { setSyncing(false); }
    }
    async function mutate(fn) {
        setSyncing(true);
        setError("");
        try {
            const remote = await getCouple(code);
            const base = remote || JSON.parse(JSON.stringify(data));
            const updated = fn(base);
            updated.updatedAt = Date.now();
            await setCouple(code, updated);
            setData(updated);
        }
        catch (e) {
            setError("La sauvegarde a échoué, réessaie.");
        }
        finally {
            setSyncing(false);
        }
    }
    async function handleLogin(profileInput) {
        const profile = resolveProfile(profileInput);
        if (!profile) { setError("Écris Victor ou Marianne pour entrer."); return; }
        setLoading(true); setError("");
        try {
            const main = await getMainSpace();
            const found = main.data || emptyMainData();
            found.members = { A: "Victor", B: "Marianne" };
            const slot = profile === "Victor" ? "A" : "B";
            setCode(main.code); setMySlot(slot); setMyName(profile); setData(found);
            await setCouple(main.code, found);
            setPhase("app");
        } catch (e) { console.error(e); setError("Impossible de charger notre espace, réessaie."); }
        finally { setLoading(false); }
    }
    useEffect(() => {
        if (phase !== "app" || tab !== "daylink" || !data)
            return;
        const today = todayStr();
        const entry = data.daylink ? data.daylink[today] : null;
        const iAnswered = entry && entry.answers[mySlot];
        const bothAnswered = entry && entry.answers.A && entry.answers.B;
        if (iAnswered && !bothAnswered) {
            const id = setInterval(refresh, 5000);
            return () => clearInterval(id);
        }
    }, [phase, tab, data, mySlot, code]);
    // Synchronisation entre appareils : l'espace est stocké dans Supabase.
    // On récupère régulièrement la dernière version pour que les deux appareils
    // voient les réponses, jeux, souvenirs, etc. sans avoir à recharger la page.
    useEffect(() => {
        if (phase !== "app" || !code)
            return;
        const id = setInterval(() => {
            refresh();
        }, 3000);
        return () => clearInterval(id);
    }, [phase, code]);
    useEffect(() => {
        if (phase !== "app" || !code) return;
        let alive = true;
        async function pollMessages() {
            try {
                const fresh = await getMessages(code);
                if (!alive) return;
                setMessages(fresh);
                const newest = fresh.length ? Number(fresh[fresh.length - 1].id) : 0;
                if (!chatInitializedRef.current) {
                    chatSeenRef.current = newest;
                    chatInitializedRef.current = true;
                    return;
                }
                if (newest > chatSeenRef.current) {
                    const newOnes = fresh.filter(m => Number(m.id) > chatSeenRef.current && m.sender_slot !== mySlot);
                    if (newOnes.length && !chatOpen && typeof Notification !== "undefined") {
                        setUnreadMessages(n => n + newOnes.length);
                        if (Notification.permission === "granted") {
                            const last = newOnes[newOnes.length - 1];
                            try { new Notification(last.sender_name || "Nouveau message", { body: last.text, tag: "lien-message" }); } catch (_) {}
                        }
                    }
                    chatSeenRef.current = newest;
                }
            } catch (e) { console.warn("Messagerie indisponible:", e); }
        }
        pollMessages();
        const id = setInterval(pollMessages, 1000);
        return () => { alive = false; clearInterval(id); };
    }, [phase, code, mySlot, chatOpen]);
    useEffect(() => {
        if (!chatOpen || typeof Notification === "undefined") return;
        if (Notification.permission === "default") Notification.requestPermission().catch(() => {});
        setUnreadMessages(0);
        if (messages.length) chatSeenRef.current = Number(messages[messages.length - 1].id);
    }, [chatOpen]);
    useEffect(() => {
        if (!chatOpen) return;
        const el = chatListRef.current;
        if (!el) return;
        requestAnimationFrame(() => { el.scrollTop = el.scrollHeight; });
    }, [chatOpen]);
    useEffect(() => {
        if (!chatOpen) return;
        const el = chatListRef.current;
        if (!el) return;
        requestAnimationFrame(() => { el.scrollTop = el.scrollHeight; });
    }, [messages.length]);
    useEffect(() => {
        if (phase === "app" && tab === "jeux" && gameSub === "qui" && data && !data.qui) {
            mutate((fresh) => { ensureQui(fresh); return fresh; });
        }
    }, [phase, tab, gameSub, data]);
    useEffect(() => {
        if (phase === "app" && tab === "jeux" && gameSub === "tu" && data && !data.tuprefere) {
            mutate((fresh) => { ensureTuPrefere(fresh); return fresh; });
        }
    }, [phase, tab, gameSub, data]);
    useEffect(() => {
        if (phase === "app" && tab === "jeux" && gameSub === "av" && data && !data.actionVerite) {
            mutate((fresh) => { ensureActionVerite(fresh); return fresh; });
        }
    }, [phase, tab, gameSub, data]);
    
function chooseActionVerite(type) {
  mutate((fresh) => {
    const av = ensureActionVerite(fresh);
    const target = av.targetSlot || "A";
    const history = av.typeHistory || [];
    const recent2 = history.slice(-2);
    if (recent2.length >= 2 && recent2.every(t => t === type)) return fresh;
    const pool = getAvPool(fresh, type);
    const item = pickUnusedItem(pool, av.usedKeys || []);
    if (!item) return fresh;
    av.phase = "question";
    av.selectedType = type;
    av.currentKey = item.key;
    av.currentText = item.text;
    av.targetSlot = target;
    av.usedKeys = [...(av.usedKeys || []), item.key];
    av.typeHistory = [...history, type].slice(-100);
    return fresh;
  });
}
function nextActionVerite() {
  mutate((fresh) => {
    const av = ensureActionVerite(fresh);
    av.phase = "choose";
    av.currentKey = null;
    av.currentText = null;
    av.selectedType = null;
    const lastTarget = av.targetSlot || "B";
    av.targetSlot = lastTarget === "A" ? "B" : "A";
    return fresh;
  });
}
function renderActionVerite() {
  const av = ensureActionVerite(data);
  const targetName = av.targetSlot === "A" ? data.members.A : data.members.B;
  const lastTwo = (av.typeHistory || []).slice(-2);
  const blockAction = lastTwo.length >= 2 && lastTwo.every(t => t === "action");
  const blockVerite = lastTwo.length >= 2 && lastTwo.every(t => t === "vérité");
  if (av.phase === "choose") {
    return React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16,padding:"4px 4px 20px"}},
      React.createElement("div",{className:"duo-card",style:{padding:20,textAlign:"center"}},
        React.createElement("div",{style:{fontSize:11,color:"#A79BC0",marginBottom:8}},"À toi de jouer"),
        React.createElement("div",{className:"duo-display",style:{fontSize:22}} ,targetName || "Partenaire"),
        React.createElement("div",{style:{fontSize:12,color:"#A79BC0",marginTop:6}},"Choisis Action ou Vérité pour cette question.")),
      React.createElement("div",{style:{display:"flex",gap:10}},
        React.createElement("button",{className:"duo-btn-primary",disabled:blockAction,onClick:()=>chooseActionVerite("action"),style:{flex:1,opacity:blockAction?.45:1}},"ACTION"),
        React.createElement("button",{className:"duo-btn-ghost",disabled:blockVerite,onClick:()=>chooseActionVerite("vérité"),style:{flex:1,opacity:blockVerite?.45:1}},"VÉRITÉ")),
      React.createElement("div",{style:{fontSize:11,color:"#A79BC0",textAlign:"center"}},"Les mêmes choix ne peuvent pas être faits 3 fois de suite."));
  }
  return React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16,padding:"4px 4px 20px"}},
    React.createElement("div",{className:"duo-card",style:{padding:20,textAlign:"center"}},
      React.createElement("div",{style:{fontSize:11,color: av.selectedType==="action" ? "#FF8B66":"#F4C77B",marginBottom:8}},av.selectedType==="action"?"ACTION":"VÉRITÉ"),
      React.createElement("div",{style:{fontSize:12,color:"#A79BC0",marginBottom:10}},"Pour ",targetName || "Partenaire"),
      React.createElement("div",{className:"duo-display",style:{fontSize:18,lineHeight:1.45}},av.currentText)),
    React.createElement("button",{className:"duo-btn-primary",onClick:nextActionVerite},"Question suivante"));
}

function voteQui(choice) {
  mutate((fresh) => {
    const qui = ensureQui(fresh);
    qui.votes[mySlot] = choice;
    if (qui.votes.A && qui.votes.B && !qui.roundScored) {
      touchActivity(fresh, 3);
      qui.roundScored = true;
    }
    return fresh;
  });
}
function nextQui() {
  mutate((fresh) => {
    const qui = ensureQui(fresh);
    const bothVoted = !!qui.votes.A && !!qui.votes.B;
    if (!bothVoted) return fresh;
    qui.advance[mySlot] = true;
    if (qui.advance.A && qui.advance.B) {
      const item = pickUnusedItem(getQuiPool(fresh), qui.used || []);
      if (!item) return fresh;
      fresh.qui = { version:3, currentKey:item.key, used:[...(qui.used||[]),item.key], votes:{A:null,B:null}, roundScored:false, advance:{A:false,B:false} };
    }
    return fresh;
  });
}
function voteTuPrefere(choiceIdx) {
  mutate((fresh) => {
    const tp = ensureTuPrefere(fresh);
    tp.votes[mySlot] = choiceIdx;
    const bothVoted = (tp.votes.A === 0 || tp.votes.A === 1) && (tp.votes.B === 0 || tp.votes.B === 1);
    if (bothVoted && !tp.roundScored) {
      touchActivity(fresh, 2);
      tp.roundScored = true;
    }
    return fresh;
  });
}
function nextTuPrefere() {
  mutate((fresh) => {
    const tp = ensureTuPrefere(fresh);
    const bothVoted = (tp.votes.A === 0 || tp.votes.A === 1) && (tp.votes.B === 0 || tp.votes.B === 1);
    if (!bothVoted) return fresh;
    tp.advance[mySlot] = true;
    if (tp.advance.A && tp.advance.B) {
      const item = pickUnusedItem(getTuPool(fresh), tp.used || []);
      if (!item) return fresh;
      fresh.tuprefere = { version:3, currentKey:item.key, used:[...(tp.used||[]),item.key], votes:{A:null,B:null}, roundScored:false, advance:{A:false,B:false} };
    }
    return fresh;
  });
}

function drawDefi() {
  mutate((fresh)=>{
    const defis=ensureDefis(fresh);
    const pool=DEFIS_LIST;
    const used=new Set(defis.log.map(d=>d.text));
    const available=pool.filter(t=>!used.has(t));
    if(!available.length) return fresh;
    defis.current={text:available[Math.floor(Math.random()*available.length)],drawnBy:myName};
    return fresh;
  });
}
function completeDefi() {
        mutate((fresh) => {
            const defis = ensureDefis(fresh);
            if (!defis.current)
                return fresh;
            touchActivity(fresh, 8);
            defis.log = [...defis.log, Object.assign(Object.assign({}, defis.current), { completedAt: Date.now(), by: myName })].slice(-50);
            defis.current = null;
            return fresh;
        });
    }
    function skipDefi() {
        mutate((fresh) => { ensureDefis(fresh).current = null; return fresh; });
    }
    function submitDaylink() {
        if (!daylinkText.trim())
            return;
        const text = daylinkText.trim();
        mutate((fresh) => {
            const today = todayStr();
            const q = DAYLINK_QUESTIONS[Math.floor(Date.now() / 86400000) % DAYLINK_QUESTIONS.length];
            fresh.daylink = fresh.daylink || {};
            const entry = fresh.daylink[today] || { question: q, answers: { A: null, B: null }, scored: false };
            entry.answers[mySlot] = text;
            if (entry.answers.A && entry.answers.B && !entry.scored) {
                touchActivity(fresh, 5);
                entry.scored = true;
            }
            fresh.daylink[today] = entry;
            return fresh;
        });
        setDaylinkText("");
    }
    function addCustomQuestion() {
        if (mySlot !== "A") return;
        const text = customText.trim();
        if (!text) return;
        mutate((fresh) => {
            fresh.customQuestions = [...(fresh.customQuestions || []), {
                id: Date.now() + Math.random(),
                text,
                type: customType,
                addedBy: myName,
                createdAt: Date.now(),
            }];
            return fresh;
        });
        setCustomText("");
    }
    function deleteCustomQuestion(id) {
        if (mySlot !== "A") return;
        mutate((fresh) => {
            fresh.customQuestions = (fresh.customQuestions || []).filter(q => !(q.id === id && q.addedBy === myName));
            return fresh;
        });
    }
    function addSouvenir() {
        if (!souvenirTitle.trim())
            return;
        const title = souvenirTitle.trim();
        const note = souvenirNote.trim();
        const date = souvenirDate || todayStr();
        mutate((fresh) => {
            touchActivity(fresh, 3);
            fresh.souvenirs = [...(fresh.souvenirs || []), { id: Date.now(), title, note, date, addedBy: myName, comments: [] }];
            return fresh;
        });
        setSouvenirTitle("");
        setSouvenirNote("");
        setSouvenirDate("");
    }
    function addSouvenirComment(souvenirId) {
        const text = (souvenirCommentDrafts[souvenirId] || "").trim();
        if (!text) return;
        mutate((fresh) => {
            fresh.souvenirs = (fresh.souvenirs || []).map(s => s.id === souvenirId
                ? Object.assign({}, s, { comments: [...(s.comments || []), { id: Date.now() + Math.random(), text, addedBy: myName, createdAt: Date.now() }] })
                : s);
            return fresh;
        });
        setSouvenirCommentDrafts(prev => Object.assign({}, prev, { [souvenirId]: "" }));
    }
    /* ---------------- rendu ---------------- */
    function renderLanding() {
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: 46, gap: 18 } },
            React.createElement(ConnectionOrbit, { progress: 0.5, size: 64 }),
            React.createElement("div", null,
                React.createElement("div", { className: "duo-display", style: { fontSize: 34, fontWeight: 700 } }, "Lien"),
                React.createElement("div", { style: { color: "#A79BC0", fontSize: 14, marginTop: 4 } }, "Rapprochons-nous, un jour à la fois.")),
            React.createElement("div", { style: { color: "#A79BC0", fontSize: 13.5, lineHeight: 1.6, maxWidth: 280 } }, "Écris simplement ton prénom pour entrer dans notre espace."),
            React.createElement("form", { onSubmit: e => { e.preventDefault(); handleLogin(nameInput); }, style: { display: "flex", flexDirection: "column", gap: 10, width: "100%", marginTop: 10 } },
                React.createElement("input", { className: "duo-input", autoFocus: true, autoComplete: "name", value: nameInput, onChange: e => { setNameInput(e.target.value); if (error) setError(""); }, placeholder: "Victor ou Marianne", disabled: loading, style: { width: "100%", boxSizing: "border-box", textAlign: "center" } }),
                React.createElement("button", { type: "submit", className: "duo-btn-primary", disabled: loading || !nameInput.trim() }, loading ? "Connexion..." : "Entrer"),
                React.createElement("div", { style: { color: "#A79BC0", fontSize: 10.5, lineHeight: 1.5 } }, "Les petites fautes de frappe sont acceptées."),
                error && React.createElement("div", { style: { color: "#FF8B66", fontSize: 13 } }, error))));
    }
    function renderHeader() {
        return (React.createElement("div", { style: {
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "30px 20px 12px", flexShrink: 0,
            } },
            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, minWidth: 0 } },
                React.createElement(ConnectionOrbit, { progress: 0.5, size: 30 }),
                React.createElement("div", { style: { minWidth: 0 } },
                    React.createElement("div", { style: { fontSize: 13.5, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
                        myName,
                        " ",
                        partnerName ? "& " + partnerName : ""),
                    React.createElement("div", { style: { fontSize: 11, color: "#A79BC0" } },
                        partnerName ? "Nous sommes connectés" : "En attente de l'autre profil"))),
            React.createElement("button", { onClick: refresh, style: { background: "none", border: "none", cursor: "pointer", color: "#A79BC0", padding: 4 } },
                React.createElement(RefreshCw, { size: 17, style: { animation: syncing ? "duoFloat 0.6s linear infinite" : "none" } }))));
    }
    function renderNav() {
        const items = [
            { key: "accueil", label: "Accueil", icon: Home },
            { key: "daylink", label: "Lien du jour", icon: MessageCircle },
            { key: "jeux", label: "Jeux", icon: Shuffle },
            { key: "souvenirs", label: "Souvenirs", icon: ImageIcon },
        ];
        return (React.createElement("div", { style: {
                display: "flex", justifyContent: "space-around", padding: "12px 8px 18px",
                borderTop: "1px solid rgba(167,155,192,0.15)", flexShrink: 0,
            } }, items.map((it) => {
            const Icon = it.icon;
            const active = tab === it.key;
            return (React.createElement("div", { key: it.key, className: "duo-nav-item" + (active ? " active" : ""), onClick: () => setTab(it.key) },
                React.createElement(Icon, { size: 19 }),
                React.createElement("span", { style: { fontSize: 10 } }, it.label)));
        })));
    }
    function renderAccueil() {
        const lvl = levelForScore(data.score || 0);
        const progress = lvl.next ? (data.score - lvl.current.min) / (lvl.next.min - lvl.current.min) : 1;
        const today = todayStr();
        const entry = data.daylink ? data.daylink[today] : null;
        const bothAnswered = entry && entry.answers.A && entry.answers.B;
        const iAnswered = entry && entry.answers[mySlot];
        let daylinkStatus = "Répondez tous les deux à la question du jour.";
        if (bothAnswered) daylinkStatus = "Nous avons tous les deux répondu — découvrons nos réponses.";
        else if (iAnswered) daylinkStatus = "Réponse envoyée. En attente de " + (partnerName || "l'autre profil") + ".";
        const card = (title, subtitle, onClick, icon) => React.createElement("div", { className: "duo-card", style: { padding: 16, cursor: "pointer" }, onClick },
            React.createElement("div", { style: { fontSize: 13.5, fontWeight: 600, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 } }, icon, title),
            React.createElement("div", { style: { fontSize: 12.5, color: "#A79BC0" } }, subtitle));
        return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16, padding: "4px 20px 20px" } },
            React.createElement("div", { className: "duo-display", style: { fontSize: 21, fontWeight: 600 } }, "Salut ", myName, " 👋"),
            React.createElement("div", { className: "duo-card", style: { padding: 16, display: "flex", alignItems: "center", gap: 14 } },
                React.createElement(ConnectionOrbit, { progress, size: 54 }),
                React.createElement("div", { style: { flex: 1 } },
                    React.createElement("div", { style: { fontSize: 14, fontWeight: 600 } }, lvl.current.name),
                    React.createElement("div", { style: { fontSize: 12, color: "#A79BC0" } }, data.score || 0, " pts", data.streak > 0 ? " · 🔥 " + data.streak + " jour" + (data.streak > 1 ? "s" : "") + " de suite" : ""))),
            card("Lien du jour", daylinkStatus, () => setTab("daylink"), React.createElement(MessageCircle, { size: 15 })),
            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } },
                card("Qui de nous deux", "Une question au hasard", () => { setTab("jeux"); setGameSub("qui"); }),
                card("Tu préfères", "Choisissons entre deux options", () => { setTab("jeux"); setGameSub("tu"); }),
                card("Défis à deux", "Tirons un nouveau défi", () => { setTab("jeux"); setGameSub("defis"); }),
                card("Souvenirs", "Nos moments partagés", () => setTab("souvenirs"), React.createElement(ImageIcon, { size: 15 }))),
            React.createElement("div", { style: { textAlign: "center", color: "#A79BC0", fontSize: 11 } }, partnerName ? "Victor & Marianne" : "Choisis l'autre profil pour nous rejoindre."));
    }
    function renderDaylink() {
        const today = todayStr();
        const q = DAYLINK_QUESTIONS[Math.floor(Date.now() / 86400000) % DAYLINK_QUESTIONS.length];
        const entry = (data.daylink && data.daylink[today]) || { question: q, answers: { A: null, B: null } };
        const iAnswered = entry.answers[mySlot];
        const bothAnswered = entry.answers.A && entry.answers.B;
        const dateLabel = new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
        const pastDays = data.daylink
            ? Object.keys(data.daylink).filter((d) => d !== today && data.daylink[d].answers.A && data.daylink[d].answers.B).sort().reverse().slice(0, 5)
            : [];
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16, padding: "4px 20px 20px" } },
            React.createElement("div", null,
                React.createElement("div", { style: { fontSize: 12, color: "#A79BC0", textTransform: "capitalize" } }, dateLabel),
                React.createElement("div", { className: "duo-display", style: { fontSize: 20, fontStyle: "italic", marginTop: 4, lineHeight: 1.4 } }, entry.question)),
            !iAnswered && (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
                React.createElement("textarea", { className: "duo-input", placeholder: "Ta r\u00E9ponse...", rows: 4, value: daylinkText, onChange: (e) => setDaylinkText(e.target.value), style: { resize: "none" } }),
                React.createElement("button", { className: "duo-btn-primary", disabled: !daylinkText.trim(), onClick: submitDaylink, style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8 } },
                    React.createElement(Send, { size: 15 }),
                    " Envoyer ma r\u00E9ponse"))),
            iAnswered && !bothAnswered && (React.createElement("div", { className: "duo-card", style: { padding: 18, display: "flex", flexDirection: "column", gap: 14, alignItems: "center" } },
                React.createElement(ThreadLink, { state: "waiting" }),
                React.createElement("div", { style: { fontSize: 12.5, color: "#A79BC0", textAlign: "center" } },
                    "Ta r\u00E9ponse est enregistr\u00E9e. En attente de ",
                    partnerName || "ton/ta partenaire",
                    "..."))),
            bothAnswered && (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
                React.createElement(ThreadLink, { state: "connected" }),
                React.createElement("div", { className: "duo-card", style: { padding: 14 } },
                    React.createElement("div", { style: { fontSize: 11.5, color: "#F4C77B", fontWeight: 600, marginBottom: 4 } }, myName),
                    React.createElement("div", { style: { fontSize: 13.5, lineHeight: 1.5 } }, entry.answers[mySlot])),
                React.createElement("div", { className: "duo-card", style: { padding: 14 } },
                    React.createElement("div", { style: { fontSize: 11.5, color: "#FF8B66", fontWeight: 600, marginBottom: 4 } }, partnerName),
                    React.createElement("div", { style: { fontSize: 13.5, lineHeight: 1.5 } }, entry.answers[mySlot === "A" ? "B" : "A"])))),
            pastDays.length > 0 && (React.createElement("div", null,
                React.createElement("div", { style: { fontSize: 12.5, fontWeight: 600, color: "#A79BC0", margin: "6px 0 10px" } }, "Vos derniers liens"),
                React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, pastDays.map((d) => (React.createElement("div", { key: d, className: "duo-card", style: { padding: 12 } },
                    React.createElement("div", { style: { fontSize: 10.5, color: "#A79BC0", marginBottom: 3 } }, d),
                    React.createElement("div", { style: { fontSize: 12.5, marginBottom: 6, color: "#F5EFE6", opacity: 0.85 } }, data.daylink[d].question),
                    React.createElement("div", { style: { fontSize: 12, color: "#A79BC0" } },
                        myName,
                        " : ",
                        data.daylink[d].answers[mySlot]),
                    React.createElement("div", { style: { fontSize: 12, color: "#A79BC0" } },
                        partnerName,
                        " : ",
                        data.daylink[d].answers[mySlot === "A" ? "B" : "A"])))))))));
    }
    
function renderQui() {
  const qui = ensureQui(data);
  const pool = getQuiPool(data);
  const item = pool.find(x => x.key === qui.currentKey) || pool[0];
  const myVote = qui.votes[mySlot];
  const bothVoted = !!qui.votes.A && !!qui.votes.B;
  const readyNext = !!qui.advance[mySlot];
  return React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16,padding:"4px 4px 20px"}},
    React.createElement("div",{className:"duo-card",style:{padding:20,textAlign:"center"}},
      React.createElement("div",{style:{fontSize:11,color:"#A79BC0",marginBottom:8}},"Qui de nous deux…"),
      React.createElement("div",{className:"duo-display",style:{fontSize:19,lineHeight:1.4}},item ? item.text : "Plus de questions disponibles.")),
    !bothVoted ? React.createElement("div",{style:{display:"flex",gap:10}},
      React.createElement("button",{className:"duo-btn-ghost",disabled:!!myVote,onClick:()=>voteQui("A"),style:{flex:1,opacity:myVote?(myVote==="A"?1:.5):1}},data.members.A),
      React.createElement("button",{className:"duo-btn-ghost",disabled:!!myVote,onClick:()=>voteQui("B"),style:{flex:1,opacity:myVote?(myVote==="B"?1:.5):1}},data.members.B)
    ) :
    React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"center"}},
      React.createElement("div",{style:{fontSize:14,fontWeight:600}},qui.votes.A===qui.votes.B?"Vous êtes d'accord ❤️":"Avis partagés 👀"),
      React.createElement("div",{style:{fontSize:12.5,color:"#A79BC0"}},data.members.A+" a voté "+(qui.votes.A==="A"?data.members.A:data.members.B)+" · "+data.members.B+" a voté "+(qui.votes.B==="A"?data.members.A:data.members.B)),
      readyNext ? React.createElement("div",{style:{fontSize:12,color:"#A79BC0",textAlign:"center"}},"En attente de l'autre pour passer à la suivante…") :
        React.createElement("button",{className:"duo-btn-primary",onClick:nextQui},"Question suivante")
    ),
    myVote && !bothVoted && React.createElement("div",{style:{fontSize:12,color:"#A79BC0",textAlign:"center"}},"En attente de "+(partnerName||"ton/ta partenaire")+"…"));
}

function renderTuPrefere() {
  const tp=ensureTuPrefere(data);
  const pool=getTuPool(data);
  const item=pool.find(x=>x.key===tp.currentKey)||pool[0];
  const opts=(item&&item.options)||[item?item.text:"",""];
  const myVote=tp.votes[mySlot];
  const bothVoted=(tp.votes.A===0||tp.votes.A===1)&&(tp.votes.B===0||tp.votes.B===1);
  return React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:14,padding:"4px 4px 20px"}},
    React.createElement("div",{style:{fontSize:11,color:"#A79BC0",textAlign:"center"}},"Tu préfères…"),
    React.createElement("div",{className:"duo-card",style:{padding:18,textAlign:"center",fontSize:15,lineHeight:1.4}},item?item.text:"Plus de questions disponibles."),
    !bothVoted?React.createElement("div",{style:{display:"flex",gap:10}},
      React.createElement("button",{className:"duo-btn-ghost",disabled:myVote!==null&&myVote!==undefined,onClick:()=>voteTuPrefere(0),style:{flex:1,opacity:myVote===1?.5:1}},opts[0]||"Option A"),
      React.createElement("button",{className:"duo-btn-ghost",disabled:myVote!==null&&myVote!==undefined,onClick:()=>voteTuPrefere(1),style:{flex:1,opacity:myVote===0?.5:1}},opts[1]||"Option B")
    ):React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:10,alignItems:"center"}},
      React.createElement("div",{style:{fontSize:13.5,fontWeight:600}},tp.votes.A===tp.votes.B?"Même choix ❤️":"Vous êtes différents, et c'est ok 😄"),
      tp.advance[mySlot]?React.createElement("div",{style:{fontSize:12,color:"#A79BC0"}},"En attente de l'autre pour passer à la suivante…"):React.createElement("button",{className:"duo-btn-primary",onClick:nextTuPrefere},"Question suivante")
    ),
    (myVote===0||myVote===1)&&!bothVoted&&React.createElement("div",{style:{fontSize:12,color:"#A79BC0",textAlign:"center"}},"En attente de "+(partnerName||"ton/ta partenaire")+"…")
  );
}
function renderDefis() {
  const defis=data.defis||{log:[],current:null};
  const current=defis.current;
  const countDone=defis.log.length;
  if (!current) return React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:14,padding:"4px 4px 20px"}},
    React.createElement("button",{className:"duo-btn-primary",onClick:()=>drawDefi("all")},"Tirer un défi"),
    React.createElement("div",{style:{fontSize:12,color:"#A79BC0",textAlign:"center"}},"Défis relevés ensemble : "+countDone));
  return React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:14,padding:"4px 4px 20px"}},
    React.createElement("div",{className:"duo-card",style:{padding:20,display:"flex",flexDirection:"column",gap:14}},
      React.createElement("div",{style:{fontSize:11,color:"#A79BC0",textTransform:"uppercase",letterSpacing:1}},"Défi"),
      React.createElement("div",{className:"duo-display",style:{fontSize:17,lineHeight:1.5}},current.text),
      React.createElement("div",{style:{display:"flex",gap:10}},
        React.createElement("button",{className:"duo-btn-primary",style:{flex:1},onClick:completeDefi},React.createElement(Check,{size:15})," Terminé"),
        React.createElement("button",{className:"duo-btn-ghost",onClick:skipDefi},React.createElement(X,{size:15})))
    ));
}
function renderJeux() {
        if (mySlot !== "A" && gameSub === "custom") setGameSub("qui");
        const subs = [{ key: "qui", label: "Qui de nous deux" }, { key: "tu", label: "Tu préfères" }, { key: "av", label: "Action ou Vérité" }, { key: "defis", label: "Défis" }];
        if (mySlot === "A") subs.push({ key: "custom", label: "Nos questions" });
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14, padding: "4px 20px 0" } },
            React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", width: "100%", boxSizing: "border-box" } }, subs.map((s) => (React.createElement("div", { key: s.key, className: "duo-pill" + (gameSub === s.key ? " active" : ""), onClick: () => setGameSub(s.key) }, s.label)))),
            gameSub === "qui" && renderQui(),
            gameSub === "tu" && renderTuPrefere(),
            gameSub === "av" && renderActionVerite(),
            gameSub === "defis" && renderDefis(),
            gameSub === "custom" && mySlot === "A" && renderPersonnalise()));
    }
    function renderPersonnalise() {
        const list = [...(data.customQuestions || [])].sort((a,b) => (b.createdAt || 0) - (a.createdAt || 0));
        const labels = { day: "Question du jour", qui: "Qui de nous deux", tu: "Tu préfères", av: "Action ou Vérité", defi: "Défi" };
        return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14, padding: "4px 20px 20px" } },
            React.createElement("div", { className: "duo-card", style: { padding: 16, display: "flex", flexDirection: "column", gap: 10 } },
                React.createElement("div", { className: "duo-display", style: { fontSize: 18 } }, "Nos questions"),
                React.createElement("div", { style: { fontSize: 11.5, color: "#A79BC0", lineHeight: 1.5 } }, "Ajoute une question ou un défi à notre espace. Elle sera visible sur les deux appareils."),
                React.createElement("select", { className: "duo-input", value: customType, onChange: e => setCustomType(e.target.value), style: { appearance: "none" } },
                    React.createElement("option", { value: "day" }, "Question du jour"),
                    React.createElement("option", { value: "qui" }, "Qui de nous deux"),
                    React.createElement("option", { value: "tu" }, "Tu préfères"),
                    React.createElement("option", { value: "av" }, "Action ou Vérité"),
                    React.createElement("option", { value: "defi" }, "Défi")),
                React.createElement("textarea", { className: "duo-input", rows: 3, value: customText, onChange: e => setCustomText(e.target.value), placeholder: "Écris notre question...", style: { resize: "none" } }),
                React.createElement("button", { className: "duo-btn-primary", disabled: !customText.trim(), onClick: addCustomQuestion }, React.createElement(Plus, { size: 15 }), " Ajouter")
            ),
            React.createElement("div", { style: { fontSize: 12, color: "#A79BC0" } }, list.length + " question" + (list.length > 1 ? "s" : "") + " personnalisée" + (list.length > 1 ? "s" : "")),
            list.length === 0 ? React.createElement("div", { style: { textAlign: "center", color: "#A79BC0", fontSize: 12, padding: 18 } }, "Aucune question personnalisée pour le moment.") :
            list.map(q => React.createElement("div", { key: q.id, className: "duo-card", style: { padding: 14, display: "flex", gap: 10, alignItems: "flex-start" } },
                React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                    React.createElement("div", { style: { fontSize: 10, color: "#F4C77B", marginBottom: 5 } }, labels[q.type] || "Personnalisée"),
                    React.createElement("div", { style: { fontSize: 13, lineHeight: 1.45 } }, q.text),
                    React.createElement("div", { style: { fontSize: 9.5, color: "#A79BC0", marginTop: 6 } }, "ajoutée par ", q.addedBy)),
                q.addedBy === myName && React.createElement("button", { className: "duo-btn-ghost", onClick: () => deleteCustomQuestion(q.id), title: "Supprimer ma question", style: { padding: "8px 11px", color: "#FF8B66", flexShrink: 0 } }, React.createElement(X, { size: 14 }))
            ))
        );
    }
    function renderSouvenirs() {
        const list = [...(data.souvenirs || [])].sort((a, b) => (a.date < b.date ? 1 : -1));
        const cards = list.map((s, i) => {
            const comments = (s.comments || []).map(c => React.createElement("div", { key: c.id, style: { fontSize: 11.5, lineHeight: 1.4, marginBottom: 6, padding: "7px 9px", borderRadius: 10, background: "rgba(167,155,192,0.08)" } },
                React.createElement("span", { style: { fontWeight: 600 } }, c.addedBy + " : "), c.text));
            return React.createElement("div", { key: s.id, style: { display: "flex", gap: 12 } },
                React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" } },
                    React.createElement("div", { style: { width: 8, height: 8, borderRadius: "9999px", background: "#F4C77B", marginTop: 6, flexShrink: 0 } }),
                    i < list.length - 1 && React.createElement("div", { style: { width: 1, flex: 1, background: "rgba(167,155,192,0.25)" } })),
                React.createElement("div", { style: { paddingBottom: 18, minWidth: 0, flex: 1 } },
                    React.createElement("div", { style: { fontSize: 10.5, color: "#A79BC0" } }, s.date),
                    React.createElement("div", { style: { fontSize: 14, fontWeight: 600, margin: "2px 0 4px" } }, s.title),
                    s.note && React.createElement("div", { style: { fontSize: 12.5, color: "#F5EFE6", opacity: 0.85, lineHeight: 1.5 } }, s.note),
                    React.createElement("div", { style: { fontSize: 10.5, color: "#A79BC0", marginTop: 4 } }, "ajouté par ", s.addedBy),
                    React.createElement("div", { style: { marginTop: 10, paddingTop: 9, borderTop: "1px solid rgba(167,155,192,0.14)" } },
                        React.createElement("div", { style: { fontSize: 10.5, color: "#A79BC0", marginBottom: 6 } }, "Commentaires"),
                        comments,
                        React.createElement("div", { style: { display: "flex", gap: 7, marginTop: 6 } },
                            React.createElement("input", { className: "duo-input", value: souvenirCommentDrafts[s.id] || "", onChange: e => setSouvenirCommentDrafts(prev => Object.assign({}, prev, { [s.id]: e.target.value })), onKeyDown: e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); addSouvenirComment(s.id); } }, placeholder: "Ajouter un commentaire...", maxLength: 300, style: { flex: 1, minWidth: 0, padding: "8px 10px", fontSize: 11.5 } }),
                            React.createElement("button", { className: "duo-btn-primary", disabled: !(souvenirCommentDrafts[s.id] || "").trim(), onClick: () => addSouvenirComment(s.id), style: { padding: "8px 11px", flexShrink: 0 } }, "Ajouter")))));
        });
        return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16, padding: "4px 20px 20px" } },
            React.createElement("div", { className: "duo-card", style: { padding: 16, display: "flex", flexDirection: "column", gap: 10 } },
                React.createElement("input", { className: "duo-input", placeholder: "Titre du souvenir", value: souvenirTitle, onChange: e => setSouvenirTitle(e.target.value) }),
                React.createElement("input", { className: "duo-input", type: "date", value: souvenirDate, onChange: e => setSouvenirDate(e.target.value) }),
                React.createElement("textarea", { className: "duo-input", placeholder: "Racontez-le en quelques mots...", rows: 3, value: souvenirNote, onChange: e => setSouvenirNote(e.target.value), style: { resize: "none" } }),
                React.createElement("button", { className: "duo-btn-primary", disabled: !souvenirTitle.trim(), onClick: addSouvenir, style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8 } }, React.createElement(Plus, { size: 15 }), " Ajouter au journal")),
            list.length === 0 ? React.createElement("div", { style: { fontSize: 12.5, color: "#A79BC0", textAlign: "center", padding: "10px 20px" } }, "Votre histoire commence ici. Ajoutez votre premier souvenir.") : React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, cards));
    }
    async function handleSendMessage() {
        const text = messageInput.trim();
        if (!text || !code || !myName || !mySlot) return;
        setMessageInput("");
        try {
            await sendMessage(code, mySlot, myName, text);
            const fresh = await getMessages(code);
            setMessages(fresh);
            if (fresh.length) chatSeenRef.current = Number(fresh[fresh.length - 1].id);
        } catch (e) {
            setMessageInput(text);
            setError("Impossible d'envoyer le message.");
        }
    }
    function renderChat() {
        if (!chatOpen) return null;
        return React.createElement("div", { style: { position: "absolute", left: 12, right: 12, bottom: 78, height: chatHeight + "%", zIndex: 30, background: "rgba(24,16,40,0.98)", border: "1px solid rgba(244,199,123,0.2)", borderRadius: 24, boxShadow: "0 24px 60px rgba(0,0,0,.55)", display: "flex", flexDirection: "column", overflow: "hidden", backdropFilter: "blur(18px)", minHeight: 190 } },
            React.createElement("div", { onPointerDown: startChatResize, title: "Faire glisser pour redimensionner", style: { height: 16, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", cursor: "ns-resize", touchAction: "none" } },
                React.createElement("div", { style: { width: 46, height: 4, borderRadius: 999, background: "rgba(244,199,123,.35)" } })),
            React.createElement("div", { style: { padding: "6px 16px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(167,155,192,.18)" } },
                React.createElement("div", null,
                    React.createElement("div", { style: { fontWeight: 700, fontSize: 15 } }, "Messages"),
                    React.createElement("div", { style: { fontSize: 10.5, color: "#A79BC0", marginTop: 2 } }, partnerName ? "Avec " + partnerName : "En attente de notre deuxième personne...")),
                React.createElement("button", { className: "duo-btn-ghost", onClick: () => setChatOpen(false), style: { padding: "6px 10px", fontSize: 18, lineHeight: 1 } }, "×")),
            React.createElement("div", { ref: chatListRef, className: "duo-scroll", style: { flex: 1, minHeight: 0, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 8, overscrollBehavior: "contain" } },
                messages.length === 0 ? React.createElement("div", { style: { margin: "auto", textAlign: "center", color: "#A79BC0", fontSize: 12, maxWidth: 220, lineHeight: 1.5 } }, "Aucun message pour l'instant. Écrivez-nous quelque chose !") :
                messages.map(m => React.createElement("div", { key: m.id, style: { alignSelf: m.sender_slot === mySlot ? "flex-end" : "flex-start", maxWidth: "78%" } },
                    React.createElement("div", { style: { fontSize: 9.5, color: "#A79BC0", margin: "0 7px 3px", textAlign: m.sender_slot === mySlot ? "right" : "left" } }, m.sender_name),
                    React.createElement("div", { style: { background: m.sender_slot === mySlot ? "#FF8B66" : "rgba(167,155,192,.14)", color: m.sender_slot === mySlot ? "#1b1025" : "#F5EFE6", borderRadius: 16, padding: "9px 11px", fontSize: 12.5, lineHeight: 1.4, overflowWrap: "anywhere" } }, m.text))),
            React.createElement("div", { style: { flexShrink: 0, padding: 10, borderTop: "1px solid rgba(167,155,192,.18)", display: "flex", gap: 8, background: "rgba(24,16,40,0.99)", position: "relative", zIndex: 2 } },
                React.createElement("input", { className: "duo-input", value: messageInput, onChange: e => setMessageInput(e.target.value), onKeyDown: e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }, placeholder: "Écrire un message...", style: { flex: 1, minWidth: 0, padding: "10px 12px" }, maxLength: 500 }),
                React.createElement("button", { className: "duo-btn-primary", onClick: handleSendMessage, disabled: !messageInput.trim(), style: { padding: "10px 14px" } }, "Envoyer"))));
    }
    function renderAppContent() {
        if (tab === "accueil")
            return renderAccueil();
        if (tab === "daylink")
            return renderDaylink();
        if (tab === "jeux")
            return renderJeux();
        if (tab === "souvenirs")
            return renderSouvenirs();
        return null;
    }
    return (React.createElement("div", { style: {
            minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 12px",
            background: "radial-gradient(circle at 15% -10%, #352a5c 0%, #1E1730 40%, #140c22 100%)",
        } },
        React.createElement("style", null, CSS),
        React.createElement("div", { className: "duo-root", style: {
                width: "min(400px, 100%)", height: "min(820px, 92vh)", display: "flex", flexDirection: "column",
                borderRadius: "2.75rem", overflow: "hidden", position: "relative",
                border: "10px solid rgba(10,6,20,0.55)",
                boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(244,199,123,0.06)",
                background: "radial-gradient(circle at 20% -10%, #2c2250 0%, #1E1730 45%, #170f28 100%)",
            } },
            React.createElement("div", { style: { position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 70, height: 18, borderRadius: 999, background: "rgba(0,0,0,0.35)", zIndex: 5 } }),
            phase === "app" && renderHeader(),
            React.createElement("div", { className: "duo-scroll", key: phase + tab + gameSub, style: { flex: 1, overflowY: "auto", animation: "duoFadeUp 0.25s ease-out" } },
                phase === "landing" && React.createElement("div", { style: { padding: "0 20px" } }, renderLanding()),
                phase === "app" && data && renderAppContent()),
            phase === "app" && renderNav(),
            phase === "app" && React.createElement("button", { onClick: () => setChatOpen(v => !v), "aria-label": "Ouvrir les messages", style: { position: "absolute", right: 14, bottom: 88, zIndex: 31, width: 48, height: 48, borderRadius: 999, border: "1px solid rgba(244,199,123,.25)", background: "#24183b", color: "#F5EFE6", boxShadow: "0 10px 30px rgba(0,0,0,.35)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 } }, "💬", unreadMessages > 0 && React.createElement("span", { style: { position: "absolute", top: -2, right: -2, minWidth: 18, height: 18, borderRadius: 999, background: "#FF8B66", color: "#1b1025", fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px" } }, unreadMessages > 9 ? "9+" : unreadMessages)),
            phase === "app" && renderChat(),
            error && phase === "app" && (React.createElement("div", { style: { position: "absolute", bottom: 78, left: 16, right: 16, background: "rgba(255,139,102,0.15)", border: "1px solid #FF8B66", borderRadius: 12, padding: "8px 12px", fontSize: 12, textAlign: "center" } }, error)))));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
