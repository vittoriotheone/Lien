const { useState, useEffect, useRef } = React;
function Icon({ size = 18, color, style, children }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ color: color || "currentColor", flexShrink: 0, ...style }}>
      {children}
    </svg>
  );
}
function Home(p) { return <Icon {...p}><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5Z" /></Icon>; }
function MessageCircle(p) { return <Icon {...p}><path d="M21 12a8.5 8.5 0 0 1-8.5 8.5c-1.2 0-2.3-.25-3.3-.7L4 21l1.3-4.6A8.5 8.5 0 1 1 21 12Z" /></Icon>; }
function Shuffle(p) { return <Icon {...p}><path d="M3 6h3.5c2 0 3 1 4.5 3M3 18h3.5c2 0 3-1 4.5-3M15 6h6M15 18h6M18 3l3 3-3 3M18 15l3 3-3 3" /></Icon>; }
function ImageIcon(p) { return <Icon {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9.5" r="1.5" /><path d="M21 15l-5-5-4 4-3-3-6 6" /></Icon>; }
function Copy(p) { return <Icon {...p}><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M5 15V5a1 1 0 0 1 1-1h10" /></Icon>; }
function Check(p) { return <Icon {...p}><path d="M4 12l5 5L20 6" /></Icon>; }
function RefreshCw(p) { return <Icon {...p}><path d="M21 12a9 9 0 1 1-3-6.7M21 3v6h-6" /></Icon>; }
function Sparkles(p) { return <Icon {...p}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3ZM19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" /></Icon>; }
function Heart(p) { return <Icon {...p}><path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.4 12 21 12 21Z" /></Icon>; }
function ArrowRight(p) { return <Icon {...p}><path d="M4 12h16M14 6l6 6-6 6" /></Icon>; }
function Users(p) { return <Icon {...p}><circle cx="9" cy="8" r="3" /><path d="M2 20a7 7 0 0 1 14 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 20a5.5 5.5 0 0 1 6-5.2" /></Icon>; }
function Send(p) { return <Icon {...p}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></Icon>; }
function Plus(p) { return <Icon {...p}><path d="M12 5v14M5 12h14" /></Icon>; }
function X(p) { return <Icon {...p}><path d="M18 6 6 18M6 6l12 12" /></Icon>; }

/* ------------------------------------------------------------------ */
/* Contenu                                                             */
/* ------------------------------------------------------------------ */

const DAYLINK_QUESTIONS = [
  "Quel est le moment de notre relation qui te fait le plus sourire quand tu y repenses ?",
  "Si on pouvait revivre une seule journÃ©e ensemble, laquelle choisirais-tu ?",
  "Qu'est-ce que j'ai fait rÃ©cemment qui t'a fait te sentir aimÃ©(e) ?",
  "Quelle habitude de l'autre t'attendrit le plus, mÃªme si tu ne le dis jamais ?",
  "Ã€ quoi ressemblerait notre journÃ©e parfaite, dans dix ans ?",
  "Quel est le petit geste du quotidien que tu prÃ©fÃ¨res recevoir ?",
  "Qu'est-ce que tu as appris sur toi-mÃªme grÃ¢ce Ã  moi ?",
  "Quel souvenir d'enfance aimerais-tu me raconter, que je ne connais pas encore ?",
  "Qu'est-ce qui te fait te sentir en sÃ©curitÃ© dans notre couple ?",
  "Si tu devais me dÃ©crire en trois mots aujourd'hui, lesquels choisirais-tu ?",
  "Quel est un rÃªve que tu n'as jamais osÃ© me dire ?",
  "Qu'est-ce qu'on pourrait essayer ensemble cette annÃ©e ?",
  "Quel est ton souvenir prÃ©fÃ©rÃ© de notre rencontre ?",
  "Qu'est-ce que je fais qui te donne envie de rire, mÃªme les mauvais jours ?",
  "Comment sais-tu que je pense Ã  toi sans que je te le dise ?",
  "Quelle chanson te fait penser Ã  nous ?",
  "Qu'est-ce que tu voudrais qu'on fasse plus souvent, tous les deux ?",
  "Quel est le compliment que tu aimerais entendre plus souvent ?",
  "Qu'est-ce qui te rassure le plus quand tu doutes de toi ?",
  "Si notre couple Ã©tait un lieu, lequel serait-il et pourquoi ?",
  "Quelle petite victoire rÃ©cente aimerais-tu que je cÃ©lÃ¨bre avec toi ?",
  "Qu'est-ce que tu changerais dans notre quotidien si tu pouvais ?",
  "Quel est le trait de caractÃ¨re que tu admires le plus chez moi ?",
  "Ã€ quel moment as-tu su que tu m'aimais ?",
  "Qu'est-ce qui te manque le plus quand on est loin l'un de l'autre ?",
  "Quelle tradition aimerais-tu qu'on invente, juste Ã  nous deux ?",
  "Qu'est-ce que je pourrais faire pour te faciliter la vie cette semaine ?",
  "Quel est ton endroit prÃ©fÃ©rÃ© quand on est ensemble ?",
  "Qu'est-ce que tu voudrais qu'on se pardonne, toi et moi ?",
  "Si tu pouvais figer un instant de nous deux pour toujours, lequel serait-ce ?",
];

const QUI_DE_NOUS = [
  "dit le plus souvent je t’aime ?",
  "fait le plus souvent des massages ?",
  "envoie le plus souvent des sms à l’autre ?",
  "fait le plus de compliments à l’autre ?",
  "fait le plus attention à son apparence ?",
  "est le plus drôle ?",
  "ronfle le plus la nuit ?",
  "remplace toujours le rouleau de papier toilette ?",
  "a le plus le sens de l’orientation ?",
  "sait le mieux garder les secrets ?",
  "est le plus impulsif ?",
  "est le plus bordélique ?",
  "sort le plus avec ses amis ?",
  "conduit le mieux ?",
  "a été le premier à avoir le béguin pour l’autre ?",
  "est le plus maladroit ?",
  "se regarde le plus dans le miroir ?",
  "a le plus souvent le dernier mot ?",
  "se plaint le plus quand il est malade ?",
  "est le plus têtu ?",
  "prend le plus de temps pour se préparer ?",
  "est toujours en retard ?",
  "passe le plus souvent l’aspirateur ?",
  "décide le plus des programmes TV ou des séries à regarder ?",
  "prend le plus de place dans le lit ?",
  "est le plus câlin ?",
  "danse le mieux ?",
  "a le plus de grains de beauté ?",
  "est le plus chatouilleux ?",
  "passe le plus de temps sur les réseaux sociaux ?",
  "mange le plus épicé ?",
  "a le plus de vêtements ?",
  "chante le mieux ?",
  "cuisine le mieux ?",
  "est le plus maniaque ?",
  "est le plus dépensier ?",
  "parle le mieux l’anglais ?",
  "serait capable de faire Koh Lanta ?",
  "n’appelle jamais ses parents ?",
  "a fait le premier pas ?",
  "a dit le premier je t’aime ?",
  "fait les courses ?",
  "fait la vaisselle ?",
  "traîne le dimanche en jogging ?",
  "passe le plus de temps dans le bain ?",
  "chante des chansons des années 80 ?",
  "passe le plus de temps au téléphone ?",
  "tient la télécommande devant la télé ?",
  "fait la sieste le weekend ?",
  "a le plus mauvais caractère ?",
  "est le plus jaloux ?",
  "va vers l’autre après une dispute ?",
  "est de mauvaise foi ?",
  "est toujours dans le rouge sur son compte en banque ?",
  "a déjà oublié sa carte bleue au moment de payer l’addition ?",
  "mange toujours le dernier chocolat dans la boîte ?",
  "boit le plus de café ?",
  "boit le plus d’alcool ?",
  "va chercher les croissants le dimanche matin ?",
  "prépare le petit déjeuner le dimanche matin ?",
  "a le plus de points restant sur son permis de conduire ?",
  "s’énerve en voiture ?",
  "a visité le plus de pays dans le monde ?",
  "a le meilleur niveau en ski ?",
  "offre le plus de cadeaux ?",
  "est le dernier à avoir dit “je t’aime” ?",
  "a enchaîné le plus de conquêtes avant votre union ?",
  "est le plus romantique ?",
  "sort les poubelles ?",
  "s’endort le premier après l’amour ?",
  "appelle l’autre le plus souvent ?",
  "passe le plus de temps au téléphone avec ses parents ?",
  "se lève le plus tôt ?",
  "se couche le plus tard ?",
  "aime le plus sortir au restaurant ?",
  "est le plus attentif à la date d’anniversaire des parents et amis ?",
  "a la phobie des araignées ?",
  "a peur du noir ?",
  "ne rebouche jamais le tube de dentifrice ?",
  "boude le plus souvent ?",
  "est le plus bavard des deux ?",
  "est le plus geek des deux ?",
  "a le meilleur coup de fourchette ?",
  "mange le plus de junkfood ?",
  "dessine le mieux ?",
  "fait peur à l’autre au volant ?",
  "parle le plus souvent pour ne rien dire ?",
  "a le plus de défauts ?",
  "fait le moins de fautes d’orthographe ?",
  "assume le plus mal son second prénom ?",
  "a conservé son doudou ?",
  "râle le plus ?",
  "pleure le plus souvent ?",
  "fait le plus de surprises à l’autre ?",
  "écrit le plus de mots d’amour ?",
  "fait les meilleures blagues ?",
  "pleure devant la TV ?",
  "a le plus peur de perdre l’autre ?",
  "dit toute la vérité depuis le début ?",
  "a menti le plus à ce jeu ?"
];

const TU_PREFERES = [
  [
    "faire la vaisselle tous les soirs",
    "sortir les poubelles (même quand il pleut)"
  ],
  [
    "te lever tôt ensemble le week-end pour profiter de la journée",
    "faire la grasse matinée jusqu’à midi"
  ],
  [
    "laisser traîner tes chaussettes partout",
    "devoir ranger celles de l’autre"
  ],
  [
    "cuisiner ensemble, même si c’est le chaos",
    "que l’un cuisine pendant que l’autre se détend"
  ],
  [
    "choisir le film/la série ce soir",
    "laisser l’autre décider"
  ],
  [
    "avoir le contrôle total de la télécommande",
    "avoir le contrôle total de la playlist Spotify"
  ],
  [
    "un appart/une maison toujours nickel",
    "un joyeux bordel organisé"
  ],
  [
    "partager absolument toute ta nourriture",
    "avoir ton assiette rien qu’à toi (pas touche !)"
  ],
  [
    "faire les courses ensemble",
    "que l’un s’en charge pour les deux"
  ],
  [
    "dormir avec la fenêtre ouverte (même en hiver)",
    "complètement fermée"
  ],
  [
    "avoir chacun votre couette",
    "partager la même (et jouer à la guerre des couvertures)"
  ],
  [
    "te préparer rapidement le matin",
    "prendre tout ton temps"
  ],
  [
    "recevoir de l’aide pour une tâche sans demander",
    "qu’on te demande toujours avant d’intervenir"
  ],
  [
    "un petit-déjeuner rapide en semaine",
    "un vrai brunch le dimanche"
  ],
  [
    "gérer le budget à deux au centime près",
    "avoir une certaine indépendance financière"
  ],
  [
    "une soirée ciné tranquille à la maison",
    "une sortie resto chic improvisée"
  ],
  [
    "des vacances aventureuses sac au dos",
    "un séjour tout compris dans un hôtel de luxe"
  ],
  [
    "un week-end surprise planifié par l’autre",
    "organiser ensemble votre prochaine escapade"
  ],
  [
    "recevoir des cadeaux matériels",
    "des expériences à vivre à deux (concert, voyage...)"
  ],
  [
    "une grosse fête d’anniversaire avec tous vos amis",
    "une célébration intime juste tous les deux"
  ],
  [
    "explorer une nouvelle ville ensemble",
    "retourner dans un endroit que vous adorez déjà"
  ],
  [
    "passer des heures à discuter dans un café",
    "faire une activité sportive ensemble"
  ],
  [
    "une soirée jeux de société avec des amis",
    "une soirée romantique en tête-à-tête"
  ],
  [
    "des petits mots doux laissés par surprise",
    "des grandes déclarations d’amour publiques"
  ],
  [
    "aller voir un match de foot/rugby",
    "un ballet/opéra (ou ni l’un ni l’autre !)"
  ],
  [
    "une balade en nature (forêt, montagne)",
    "une journée shopping en ville"
  ],
  [
    "essayer un nouveau restaurant super branché",
    "retourner dans votre cantine préférée"
  ],
  [
    "un cadeau fait main avec amour",
    "un cadeau cher acheté en magasin"
  ],
  [
    "partir en vacances avec d’autres couples d’amis",
    "juste tous les deux"
  ],
  [
    "regarder le coucher de soleil en silence",
    "le lever de soleil après une nuit blanche"
  ],
  [
    "régler un désaccord tout de suite, même à chaud",
    "attendre d’être calmés pour en parler posément"
  ],
  [
    "avoir besoin d’espace après une dispute",
    "avoir besoin d’un câlin de réconciliation immédiat"
  ],
  [
    "dire franchement quand quelque chose te dérange",
    "prendre sur toi pour éviter un conflit"
  ],
  [
    "recevoir des critiques constructives sur tes défauts",
    "qu’on ne te dise rien et qu’on te laisse faire"
  ],
  [
    "parler de tes sentiments ouvertement",
    "les montrer par des actions"
  ],
  [
    "avoir des discussions profondes sur vos émotions",
    "garder les conversations légères et fun"
  ],
  [
    "qu’on te pose plein de questions quand ça ne va pas",
    "qu’on te laisse venir en parler quand tu es prêt(e)"
  ],
  [
    "te confier à ton/ta partenaire en premier",
    "à tes amis/famille"
  ],
  [
    "pardonner facilement une erreur",
    "avoir besoin de temps pour passer à autre chose"
  ],
  [
    "qu’on devine ce dont tu as besoin",
    "devoir l’exprimer clairement"
  ],
  [
    "aborder les sujets sérieux (argent, engagement) de manière planifiée",
    "quand ça vient naturellement"
  ],
  [
    "rire ensemble de vos désaccords passés",
    "ne plus jamais en reparler"
  ],
  [
    "utiliser des petits surnoms mignons en public",
    "garder ça pour vous"
  ],
  [
    "recevoir un long message pour t’excuser",
    "une discussion en face à face"
  ],
  [
    "que ton/ta partenaire te défende toujours (même si tu as tort)",
    "qu’il/elle reste objectif(ve)"
  ],
  [
    "les longs câlins silencieux",
    "les discussions animées jusque tard dans la nuit"
  ],
  [
    "les préliminaires longs et sensuels",
    "aller plus directement au but"
  ],
  [
    "les baisers passionnés en public",
    "les gestes tendres discrets"
  ],
  [
    "recevoir un massage sensuel",
    "en donner un"
  ],
  [
    "essayer de nouvelles choses au lit",
    "refaire ce que vous savez qui marche bien"
  ],
  [
    "parler ouvertement de vos fantasmes",
    "garder une part de mystère"
  ],
  [
    "faire l’amour avec la lumière tamisée",
    "dans le noir complet"
  ],
  [
    "les mots doux chuchotés à l’oreille",
    "les compliments plus directs"
  ],
  [
    "une douche romantique à deux",
    "un bain romantique à deux"
  ],
  [
    "surprendre ton/ta partenaire avec de la lingerie/un geste sexy",
    "être surpris(e)"
  ],
  [
    "les câlins du matin au réveil",
    "ceux du soir avant de dormir"
  ],
  [
    "tenir la main en marchant dans la rue",
    "passer un bras autour de la taille/des épaules"
  ],
  [
    "les petits cadeaux coquins",
    "les expériences sensuelles partagées"
  ],
  [
    "te rappeler votre premier baiser",
    "votre premier “je t’aime”"
  ],
  [
    "l’imprévu et la spontanéité au lit",
    "une ambiance préparée (bougies, musique...)"
  ],
  [
    "parler de vos projets d’avenir lointains",
    "profiter du moment présent sans trop planifier"
  ],
  [
    "vivre en ville dans un petit appart",
    "à la campagne dans une grande maison"
  ],
  [
    "avoir des enfants un jour",
    "voyager autour du monde (et pourquoi pas les deux ?)"
  ],
  [
    "un grand mariage avec toute la famille et les amis",
    "une cérémonie intime juste tous les deux"
  ],
  [
    "adopter un chien",
    "adopter un chat"
  ],
  [
    "avoir des carrières très prenantes",
    "privilégier le temps passé ensemble"
  ],
  [
    "rencontrer la belle-famille rapidement",
    "attendre que la relation soit bien installée"
  ],
  [
    "passer Noël en famille chacun de votre côté",
    "trouver un compromis pour être ensemble"
  ],
  [
    "économiser pour un gros projet commun",
    "dépenser pour des plaisirs immédiats"
  ],
  [
    "vieillir ensemble dans votre ville actuelle",
    "déménager à l’étranger pour la retraite"
  ],
  [
    "avoir des traditions de couple bien établies",
    "toujours improviser"
  ],
  [
    "que vos amis respectifs s’entendent super bien",
    "garder vos cercles d’amis un peu séparés"
  ],
  [
    "imaginer votre vie dans 5 ans",
    "dans 20 ans"
  ],
  [
    "réussir professionnellement quitte à moins voir ton/ta partenaire",
    "l’inverse"
  ],
  [
    "transmettre des valeurs communes à vos (éventuels) enfants",
    "leur laisser une totale liberté de choix"
  ],
  [
    "porter des T-shirts assortis en public",
    "avoir la même sonnerie de téléphone kitsch"
  ],
  [
    "que ton/ta partenaire te coupe les cheveux",
    "que tu lui coupes les siens"
  ],
  [
    "regarder une comédie romantique clichée ensemble",
    "un film d’horreur qui fait bien flipper"
  ],
  [
    "partager votre compte Netflix/Spotify",
    "avoir chacun le vôtre"
  ],
  [
    "chanter à tue-tête ensemble en voiture",
    "écouter la musique en silence"
  ],
  [
    "que ton/ta partenaire voie ta tête du matin pas réveillé(e)",
    "qu’il/elle t’entende ronfler"
  ],
  [
    "avoir le même plat préféré",
    "des goûts culinaires complètement opposés"
  ],
  [
    "réussir un plat compliqué pour l’autre",
    "qu’il/elle réussisse à monter un meuble IKEA sans s’énerver"
  ],
  [
    "laisser l’autre choisir la déco",
    "imposer ton style"
  ],
  [
    "que ton/ta partenaire connaisse ton mot de passe de téléphone",
    "pas du tout"
  ],
  [
    "faire un karaoké en duo sur une chanson d’amour un peu nulle",
    "une chorégraphie TikTok"
  ],
  [
    "avoir un fou rire incontrôlable dans un moment sérieux",
    "pleurer devant un film émouvant"
  ],
  [
    "que ton/ta partenaire te choisisse tes vêtements pour une journée",
    "l’inverse"
  ],
  [
    "avoir un secret rigolo juste tous les deux",
    "partager toutes vos anecdotes avec vos amis"
  ],
  [
    "faire une sieste crapuleuse",
    "une bataille de polochons"
  ],
  [
    "que ton/ta partenaire imite parfaitement ta voix",
    "tes mimiques"
  ],
  [
    "aller à un mariage où vous ne connaissez personne",
    "un dîner de famille un peu ennuyeux"
  ],
  [
    "devoir supporter sa passion bizarre",
    "qu’il/elle supporte la tienne"
  ],
  [
    "danser un slow ridicule en public",
    "chanter une sérénade (même faux)"
  ],
  [
    "finir les phrases de l’autre",
    "avoir votre propre langage secret"
  ],
  [
    "affronter une araignée pour l’autre",
    "qu’il/elle le fasse pour toi"
  ],
  [
    "que ton/ta partenaire te raconte sa journée en détail",
    "juste les points importants"
  ],
  [
    "avoir une photo dossier de l’autre",
    "qu’il/elle en ait une de toi"
  ],
  [
    "faire semblant d’aimer un cadeau qu’il/elle t’a offert",
    "lui dire gentiment la vérité"
  ],
  [
    "passer une journée entière sans téléphone juste tous les deux",
    "pouvoir communiquer même à distance"
  ],
  [
    "re-regarder votre film/série préféré(e) pour la 10ème fois",
    "découvrir quelque chose de nouveau ensemble"
  ]
];

const DEFIS = [
  "Regardez-vous dans les yeux pendant quatre minutes.",
  "Faites un compliment sur un vêtement, un parfum, un sourire ou la douceur de la peau.",
  "Écrivez chacun de votre côté une liste de cinq choses que vous aimeriez faire ensemble.",
  "Dites-vous merci pour une action, une parole ou simplement pour le fait de partager votre vie.",
  "Parcourez ensemble d’anciens albums photo.",
  "Faites une liste de cinq qualités que vous appréciez particulièrement chez votre partenaire. Glissez ensuite la liste sous son oreiller !",
  "Écrivez un mot doux. Laissez ensuite le mot à un endroit où votre partenaire le trouvera : dans son sac, dans sa trousse à maquillage, sur le miroir de la salle de bain…",
  "Faites une liste de cinq raisons pour lesquelles vous aimez votre partenaire. Écrivez-la sur une belle feuille que vous glissez ensuite dans son ordinateur portable ou dans le livre qu’il ou elle lit.",
  "Écrivez une lettre d’amour. Mettez-la dans une belle enveloppe avant de la glisser dans la boîte aux lettres.",
  "Dites « Je t’aime ».",
  "Prenez votre partenaire dans vos bras et gardez ce câlin pendant une minute.",
  "Choisissez une chanson qui vous représente et écoutez-la ensemble sans regarder vos téléphones.",
  "Écrivez chacun trois souvenirs qui vous font sourire et racontez-les.",
  "Faites une photo ensemble que vous garderez comme souvenir de cette journée.",
  "Donnez à votre partenaire un compliment très précis qu’il ou elle n’entend pas souvent.",
  "Organisez une mini soirée surprise avec ce que vous avez déjà à la maison.",
  "Écrivez chacun une chose que vous voulez absolument vivre ensemble cette année.",
  "Faites rire votre partenaire sans utiliser votre voix.",
  "Préparez ensemble la boisson préférée de votre partenaire.",
  "Faites une mini balade ensemble sans regarder votre téléphone."
];

const CATEGORIES = [{ key: "tous", label: "Défis" }];

const LEVELS = [
  { name: "Ã‰tincelle", min: 0 },
  { name: "Flamme", min: 20 },
  { name: "Brasier", min: 50 },
  { name: "Feu ardent", min: 100 },
  { name: "Flamme Ã©ternelle", min: 200 },
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
function generateCode() {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 5; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}
function pickNextIndex(len, exclude) {
  if (len <= 1) return 0;
  let idx = Math.floor(Math.random() * len);
  while (idx === exclude) idx = Math.floor(Math.random() * len);
  return idx;
}
function levelForScore(score) {
  let current = LEVELS[0];
  let next = LEVELS[1] || null;
  for (let i = 0; i < LEVELS.length; i++) {
    if (score >= LEVELS[i].min) { current = LEVELS[i]; next = LEVELS[i + 1] || null; }
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
function ensureQui(fresh) {
  if (!fresh.qui) fresh.qui = { currentIndex: 0, used: [], votes: { A: null, B: null }, roundScored: false, history: [] };
  if (!Array.isArray(fresh.qui.used)) fresh.qui.used = [];
  return fresh.qui;
}
function ensureTuPrefere(fresh) {
  if (!fresh.tuprefere) fresh.tuprefere = { currentIndex: 0, used: [], votes: { A: null, B: null }, roundScored: false, history: [] };
  if (!Array.isArray(fresh.tuprefere.used)) fresh.tuprefere.used = [];
  return fresh.tuprefere;
}
function ensureDefis(fresh) {
  if (!fresh.defis) fresh.defis = { log: [], current: null };
  return fresh.defis;
}
const ACTIONS_VERITES = {
  action: ["Fais un compliment sincère à ton partenaire.","Donne un câlin de 30 secondes.","Écris un petit mot doux et cache-le.","Imite ton partenaire pendant 30 secondes.","Choisis une chanson et danse avec ton partenaire.","Raconte une anecdote drôle sur votre couple.","Prépare une surprise simple pour l’autre.","Regarde ton partenaire dans les yeux pendant une minute sans rire.","Fais trois compliments différents à ton partenaire.","Montre une photo qui te rappelle un beau souvenir à deux."],
  verite: ["Quel est ton souvenir préféré avec nous ?","Qu’est-ce qui te fait te sentir le plus aimé(e) ?","Quelle qualité admires-tu le plus chez ton partenaire ?","Quel moment de notre histoire voudrais-tu revivre ?","Quelle petite habitude de l’autre t’attendrit le plus ?","Quel est ton rêve préféré pour notre avenir ?","Qu’est-ce que tu aimerais qu’on fasse plus souvent ensemble ?","Quel a été ton premier vrai déclic pour nous ?","Quelle chanson te fait immédiatement penser à nous ?","Quel est le plus beau compliment que ton partenaire t’ait fait ?"]
};
function ensureActionVerite(fresh) { if(!fresh.actionVerite) fresh.actionVerite={current:null,used:{action:[],verite:[]},lastChoices:[]}; return fresh.actionVerite; }
function customPool(fresh, category) { return (fresh.customQuestions||[]).filter(q=>q.category===category).map(q=>q.text); }

const SUPABASE_URL = "https://clwjttcvslwrllwldfoq.supabase.co";
const SUPABASE_KEY = "sb_publishable_S-aRj1SFu4-6ZbE5dycRIQ_D7oim3bl";
async function supabaseRequest(path, options = {}) {
  const res = await fetch(SUPABASE_URL + "/rest/v1/" + path, {
    ...options,
    headers: { apikey: SUPABASE_KEY, Authorization: "Bearer " + SUPABASE_KEY, "Content-Type": "application/json", ...(options.headers || {}) },
  });
  if (!res.ok) throw new Error(await res.text());
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}
async function getCouple(codeVal) {
  try {
    const rows = await supabaseRequest("spaces?code=eq." + encodeURIComponent(codeVal) + "&select=code,data&limit=1");
    return rows && rows[0] ? rows[0].data : null;
  } catch { return null; }
}
async function setCouple(codeVal, obj) {
  await supabaseRequest("spaces", { method: "POST", headers: { Prefer: "resolution=merge-duplicates,return=minimal" }, body: JSON.stringify({ code: codeVal, data: obj }) });
  return { ok: true };
}
async function getMessages(spaceCode) {
  return await supabaseRequest("messages?space_code=eq." + encodeURIComponent(spaceCode) + "&select=id,sender_slot,sender_name,text,created_at&order=id.asc&limit=200") || [];
}
async function sendMessage(spaceCode, senderSlot, senderName, text) {
  return await supabaseRequest("messages", { method: "POST", headers: { Prefer: "return=representation" }, body: JSON.stringify({ space_code: spaceCode, sender_slot: senderSlot, sender_name: senderName, text }) });
}

/* ------------------------------------------------------------------ */
/* Petits composants visuels                                           */
/* ------------------------------------------------------------------ */

function ConnectionOrbit({ progress = 0, size = 72 }) {
  const p = Math.max(0, Math.min(1, progress));
  const offset = size * 0.32 * (1 - p);
  const c = size * 0.62;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <div style={{
        position: "absolute", left: "50%", top: "50%", width: c, height: c,
        marginLeft: -c / 2 - offset / 2, marginTop: -c / 2,
        borderRadius: "9999px", background: "#F4C77B", mixBlendMode: "screen",
        animation: "duoFloat 6s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", left: "50%", top: "50%", width: c, height: c,
        marginLeft: -c / 2 + offset / 2, marginTop: -c / 2,
        borderRadius: "9999px", background: "#FF8B66", mixBlendMode: "screen",
        animation: "duoFloat 6s ease-in-out infinite 0.6s",
      }} />
    </div>
  );
}

function ThreadLink({ state }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
      <div style={{
        width: 11, height: 11, borderRadius: "9999px", background: "#F4C77B", flexShrink: 0,
        boxShadow: state === "connected" ? "0 0 12px 3px rgba(244,199,123,0.55)" : "none",
        animation: state === "connected" ? "duoPulseGlow 2s ease-in-out infinite" : "none",
      }} />
      <div style={{
        position: "relative", flex: 1, height: 2, borderRadius: 2, overflow: "hidden",
        background: state === "connected"
          ? "linear-gradient(90deg,#F4C77B,#FF8B66)"
          : "repeating-linear-gradient(90deg, rgba(167,155,192,0.5) 0 6px, transparent 6px 12px)",
      }}>
        {state === "connected" && (
          <div style={{
            position: "absolute", top: -3, width: 8, height: 8, borderRadius: "9999px",
            background: "#F5EFE6", boxShadow: "0 0 8px 2px rgba(245,239,230,0.8)",
            animation: "duoTravel 2.4s linear infinite",
          }} />
        )}
      </div>
      <div style={{
        width: 11, height: 11, borderRadius: "9999px", background: "#FF8B66", flexShrink: 0,
        boxShadow: state === "connected" ? "0 0 12px 3px rgba(255,139,102,0.55)" : "none",
        animation: state === "connected" ? "duoPulseGlow 2s ease-in-out infinite 0.3s" : "none",
      }} />
    </div>
  );
}

const CSS = `
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
  const [mySlot, setMySlot] = useState(null);
  const [data, setData] = useState(null);
  const [tab, setTab] = useState("accueil");
  const [gameSub, setGameSub] = useState("qui");
  const [defiCat, setDefiCat] = useState("tous");
  const [customText, setCustomText] = useState("");
  const [customCat, setCustomCat] = useState("qui");

  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const [nameInput, setNameInput] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [joinName, setJoinName] = useState("");
  const [daylinkText, setDaylinkText] = useState("");
  const [souvenirTitle, setSouvenirTitle] = useState("");
  const [souvenirNote, setSouvenirNote] = useState("");
  const [souvenirDate, setSouvenirDate] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatHeight, setChatHeight] = useState(360);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [unreadMessages, setUnreadMessages] = useState(0);
  const chatScrollRef = useRef(null);
  const chatEndRef = useRef(null);
  const chatSeenRef = useRef(0);
  const chatInitializedRef = useRef(false);
  const wasChatOpenRef = useRef(false);

  const partnerName = data ? (mySlot === "A" ? data.members.B : data.members.A) : null;

  async function refresh() {
    if (!code) return;
    setSyncing(true);
    const fresh = await getCouple(code);
    if (fresh) setData(fresh);
    setSyncing(false);
  }

  useEffect(() => {
    if (phase !== "app" || !code) return;
    let alive = true;
    const poll = async () => {
      try {
        const fresh = await getMessages(code);
        if (!alive) return;
        setMessages(fresh);
        const newest = fresh.length ? Number(fresh[fresh.length - 1].id) : 0;
        if (!chatInitializedRef.current) { chatSeenRef.current = newest; chatInitializedRef.current = true; return; }
        if (newest > chatSeenRef.current) {
          const incoming = fresh.filter(m => Number(m.id) > chatSeenRef.current && m.sender_slot !== mySlot);
          if (incoming.length && !chatOpen) setUnreadMessages(n => n + incoming.length);
          chatSeenRef.current = newest;
        }
      } catch (_) {}
    };
    poll();
    const id = setInterval(poll, 1000);
    return () => { alive = false; clearInterval(id); };
  }, [phase, code, mySlot, chatOpen]);

  useEffect(() => {
    if (!chatOpen) return;
    setUnreadMessages(0);
    if (typeof window !== "undefined" && window.Notification && Notification.permission === "default") Notification.requestPermission().catch(() => {});
    requestAnimationFrame(() => { if (chatEndRef.current) chatEndRef.current.scrollIntoView({ block: "end" }); });
    wasChatOpenRef.current = true;
  }, [chatOpen]);

  useEffect(() => {
    if (!chatOpen || !chatScrollRef.current) return;
    const el = chatScrollRef.current;
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 140;
    if (nearBottom || !wasChatOpenRef.current) requestAnimationFrame(() => chatEndRef.current && chatEndRef.current.scrollIntoView({ block: "end" }));
  }, [messages.length, chatHeight]);

  async function handleSendMessage() {
    const text = messageInput.trim();
    if (!text || !code || !myName || !mySlot) return;
    setMessageInput("");
    try { await sendMessage(code, mySlot, myName, text); const fresh = await getMessages(code); setMessages(fresh); chatSeenRef.current = fresh.length ? Number(fresh[fresh.length - 1].id) : 0; requestAnimationFrame(() => chatEndRef.current && chatEndRef.current.scrollIntoView({ block: "end" })); }
    catch (_) { setMessageInput(text); setError("Impossible d'envoyer le message."); }
  }

  function renderChat() {
    if (!chatOpen) return null;
    return (
      <div style={{ position: "absolute", left: 12, right: 12, bottom: 78, height: chatHeight, minHeight: 230, maxHeight: "75%", zIndex: 40, background: "rgba(24,16,40,.98)", border: "1px solid rgba(244,199,123,.22)", borderRadius: 24, boxShadow: "0 24px 60px rgba(0,0,0,.55)", display: "flex", flexDirection: "column", overflow: "hidden", backdropFilter: "blur(18px)" }}>
        <div onPointerDown={(e) => { e.preventDefault(); const startY=e.clientY, startH=chatHeight; const move=(ev)=>setChatHeight(Math.max(230, Math.min(window.innerHeight*0.75, startH + startY - ev.clientY))); const up=()=>{window.removeEventListener("pointermove",move);window.removeEventListener("pointerup",up)}; window.addEventListener("pointermove",move); window.addEventListener("pointerup",up); }} style={{ height: 12, flexShrink: 0, cursor: "ns-resize", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 42, height: 4, borderRadius: 99, background: "rgba(245,239,230,.3)" }} />
        </div>
        <div style={{ padding: "4px 16px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(167,155,192,.18)" }}>
          <div><div style={{ fontWeight: 700, fontSize: 15 }}>Messages</div><div style={{ fontSize: 10.5, color: "#A79BC0", marginTop: 2 }}>{partnerName ? "Avec " + partnerName : "Notre espace"}</div></div>
          <button className="duo-btn-ghost" onClick={() => setChatOpen(false)} style={{ padding: "5px 10px", fontSize: 18, lineHeight: 1 }}>Ã—</button>
        </div>
        <div ref={chatScrollRef} className="duo-scroll" style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          {messages.length === 0 ? <div style={{ margin: "auto", textAlign: "center", color: "#A79BC0", fontSize: 12, lineHeight: 1.5 }}>Aucun message pour l'instant.</div> : messages.map(m => (
            <div key={m.id} style={{ alignSelf: m.sender_slot === mySlot ? "flex-end" : "flex-start", maxWidth: "78%" }}>
              <div style={{ fontSize: 9.5, color: "#A79BC0", margin: "0 7px 3px", textAlign: m.sender_slot === mySlot ? "right" : "left" }}>{m.sender_name}</div>
              <div style={{ background: m.sender_slot === mySlot ? "#FF8B66" : "rgba(167,155,192,.14)", color: m.sender_slot === mySlot ? "#1b1025" : "#F5EFE6", borderRadius: 16, padding: "9px 11px", fontSize: 12.5, lineHeight: 1.4, overflowWrap: "anywhere" }}>{m.text}</div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div style={{ padding: 10, borderTop: "1px solid rgba(167,155,192,.18)", display: "flex", gap: 8, flexShrink: 0, background: "rgba(24,16,40,.99)" }}>
          <input className="duo-input" value={messageInput} onChange={e=>setMessageInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();handleSendMessage();}}} placeholder="Ã‰crire un message..." style={{ flex: 1, minWidth: 0, padding: "10px 12px" }} maxLength={500} />
          <button className="duo-btn-primary" onClick={handleSendMessage} disabled={!messageInput.trim()} style={{ padding: "10px 14px", flexShrink: 0 }}><Send size={15}/></button>
        </div>
      </div>
    );
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
    } catch (e) {
      setError("La sauvegarde a Ã©chouÃ©, rÃ©essaie.");
    } finally {
      setSyncing(false);
    }
  }

  async function handleCreate() {
    const name = nameInput.trim();
    if (!name) return;
    setLoading(true); setError("");
    try {
      const newCode = generateCode();
      const initial = {
        createdAt: Date.now(), members: { A: name, B: null },
        score: 0, streak: 0, lastActiveDate: null,
        daylink: {}, qui: null, tuprefere: null, defis: { log: [], current: null }, souvenirs: [], customQuestions: [], actionVerite: null,
      };
      await setCouple(newCode, initial);
      setCode(newCode); setMyName(name); setMySlot("A"); setData(initial);
      setPhase("created-code");
    } catch (e) {
      setError("Impossible de crÃ©er votre espace, rÃ©essaie.");
    } finally {
      setLoading(false);
    }
  }

  async function handleJoin() {
    const codeVal = joinCode.trim().toUpperCase();
    const name = joinName.trim();
    if (!codeVal || !name) return;
    setLoading(true); setError("");
    try {
      const found = await getCouple(codeVal);
      if (!found) { setError("Code introuvable. VÃ©rifie et rÃ©essaie."); setLoading(false); return; }
      let slot = null;
      if (found.members.A && found.members.A.toLowerCase() === name.toLowerCase()) slot = "A";
      else if (found.members.B && found.members.B.toLowerCase() === name.toLowerCase()) slot = "B";
      else if (!found.members.B) { found.members.B = name; await setCouple(codeVal, found); slot = "B"; }
      else {
        setError("Les deux places sont dÃ©jÃ  prises par " + found.members.A + " et " + found.members.B + ".");
        setLoading(false); return;
      }
      setCode(codeVal); setMySlot(slot); setMyName(slot === "A" ? found.members.A : found.members.B);
      setData(found); setPhase("app");
    } catch (e) {
      setError("Un problÃ¨me est survenu, rÃ©essaie.");
    } finally {
      setLoading(false);
    }
  }

  function copyCode() {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* ignore */ }
  }

  useEffect(() => {
    if (phase !== "app" || tab !== "daylink" || !data) return;
    const today = todayStr();
    const entry = data.daylink ? data.daylink[today] : null;
    const iAnswered = entry && entry.answers[mySlot];
    const bothAnswered = entry && entry.answers.A && entry.answers.B;
    if (iAnswered && !bothAnswered) {
      const id = setInterval(refresh, 5000);
      return () => clearInterval(id);
    }
  }, [phase, tab, data, mySlot, code]);

  useEffect(() => {
    if (phase === "app" && tab === "jeux" && gameSub === "qui" && data && !data.qui) {
      mutate((fresh) => { const q=ensureQui(fresh); const pool=[...QUI_DE_NOUS,...customPool(fresh,"qui")]; const idx=Math.floor(Math.random()*pool.length); q.currentIndex=idx; q.used=[idx]; return fresh; });
    }
  }, [phase, tab, gameSub, data]);

  useEffect(() => {
    if (phase === "app" && tab === "jeux" && gameSub === "tu" && data && !data.tuprefere) {
      mutate((fresh) => { const q=ensureTuPrefere(fresh); const pool=[...TU_PREFERES,...customPool(fresh,"tu").map(x=>[x,"Passer"])]; const idx=Math.floor(Math.random()*pool.length); q.currentIndex=idx; q.used=[idx]; return fresh; });
    }
  }, [phase, tab, gameSub, data]);

  function voteQui(choice) {
    mutate((fresh) => {
      const qui = ensureQui(fresh);
      qui.votes[mySlot] = choice;
      if (qui.votes.A && qui.votes.B && !qui.roundScored) {
        touchActivity(fresh, 3);
        qui.roundScored = true;
        qui.history = [...(qui.history || []), { index: qui.currentIndex, votes: { ...qui.votes } }].slice(-20);
      }
      return fresh;
    });
  }
  function nextQui() {
    mutate(fresh => {
      const q=ensureQui(fresh);
      const pool=[...QUI_DE_NOUS,...customPool(fresh,"qui")];
      const used=new Set(q.used||[]);
      const available=pool.map((_,i)=>i).filter(i=>!used.has(i));
      if(!available.length){ q.used=[]; return fresh; }
      const idx=available[Math.floor(Math.random()*available.length)];
      q.used=[...(q.used||[]),idx]; q.currentIndex=idx; q.votes={A:null,B:null}; q.roundScored=false;
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
        tp.history = [...(tp.history || []), { index: tp.currentIndex, votes: { ...tp.votes } }].slice(-20);
      }
      return fresh;
    });
  }
  function nextTuPrefere() {
    mutate(fresh => {
      const tp=ensureTuPrefere(fresh);
      const pool=[...TU_PREFERES,...customPool(fresh,"tu").map(x=>[x,"Passer"])];
      const used=new Set(tp.used||[]); const available=pool.map((_,i)=>i).filter(i=>!used.has(i));
      if(!available.length){tp.used=[];return fresh;}
      const idx=available[Math.floor(Math.random()*available.length)];
      tp.used=[...(tp.used||[]),idx]; tp.currentIndex=idx; tp.votes={A:null,B:null}; tp.roundScored=false; return fresh;
    });
  }
  function drawDefi() { mutate(fresh => { const d=ensureDefis(fresh); const pool=[...DEFIS,...customPool(fresh,"defis")]; const done=new Set((d.log||[]).map(x=>x.text)); const avail=pool.filter(x=>!done.has(x)); if(!avail.length)return fresh; d.current={category:"tous",text:avail[Math.floor(Math.random()*avail.length)],drawnBy:myName}; return fresh; }); }
  function completeDefi() {
    mutate((fresh) => {
      const defis = ensureDefis(fresh);
      if (!defis.current) return fresh;
      touchActivity(fresh, 8);
      defis.log = [...defis.log, { ...defis.current, completedAt: Date.now(), by: myName }].slice(-50);
      defis.current = null;
      return fresh;
    });
  }
  function skipDefi() {
    mutate((fresh) => { ensureDefis(fresh).current = null; return fresh; });
  }
  function chooseActionVerite(choice) { mutate(fresh=>{ const av=ensureActionVerite(fresh); const pool=[...ACTIONS_VERITES[choice],...customPool(fresh,choice)]; const used=new Set(av.used[choice]||[]); const avail=pool.map((_,i)=>i).filter(i=>!used.has(i)); if(!avail.length)return fresh; const idx=avail[Math.floor(Math.random()*avail.length)]; av.used[choice]=[...(av.used[choice]||[]),idx]; av.lastChoices=[...(av.lastChoices||[]),choice].slice(-2); const previous=av.current?.player; const A=fresh.members?.A||"Victor"; const B=fresh.members?.B||"Marianne"; const player=previous===A?B:A; av.current={type:choice,text:pool[idx],player}; return fresh; }); }
  function clearActionVerite(){ mutate(fresh=>{ensureActionVerite(fresh).current=null;return fresh;}); }
  function addCustomQuestion(text,category){ const clean=text.trim(); if(!clean||mySlot!=="A")return; mutate(fresh=>{fresh.customQuestions=Array.isArray(fresh.customQuestions)?fresh.customQuestions:[]; if(!fresh.customQuestions.some(q=>q.text.toLowerCase()===clean.toLowerCase()&&q.category===category)) fresh.customQuestions.push({id:Date.now()+Math.random(),text:clean,category,addedBy:myName}); return fresh;}); }
  function deleteCustomQuestion(id){ if(mySlot!=="A")return; mutate(fresh=>{fresh.customQuestions=(fresh.customQuestions||[]).filter(q=>!(q.id===id&&q.addedBy===myName));return fresh;}); }

  function submitDaylink() {
    if (!daylinkText.trim()) return;
    const text = daylinkText.trim();
    mutate((fresh) => {
      const today = todayStr();
      const q = DAYLINK_QUESTIONS[dayOfYear() % DAYLINK_QUESTIONS.length];
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
  function addSouvenir() {
    if (!souvenirTitle.trim()) return;
    const title = souvenirTitle.trim();
    const note = souvenirNote.trim();
    const date = souvenirDate || todayStr();
    mutate((fresh) => {
      touchActivity(fresh, 3);
      fresh.souvenirs = [...(fresh.souvenirs || []), { id: Date.now(), title, note, date, addedBy: myName }];
      return fresh;
    });
    setSouvenirTitle(""); setSouvenirNote(""); setSouvenirDate("");
  }

  /* ---------------- rendu ---------------- */

  function renderLanding() {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: 46, gap: 18 }}>
        <ConnectionOrbit progress={0.5} size={64} />
        <div>
          <div className="duo-display" style={{ fontSize: 34, fontWeight: 700 }}>Lien</div>
          <div style={{ color: "#A79BC0", fontSize: 14, marginTop: 4 }}>Rapprochez-vous, un jour Ã  la fois.</div>
        </div>
        <div style={{ color: "#A79BC0", fontSize: 13.5, lineHeight: 1.6, maxWidth: 280 }}>
          Une alternative gratuite pour les couples : questions du jour, jeux Ã  deux, dÃ©fis et souvenirs partagÃ©s.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", marginTop: 10 }}>
          <button className="duo-btn-primary" onClick={() => setPhase("create-name")}>CrÃ©er notre espace</button>
          <button className="duo-btn-ghost" onClick={() => { setError(""); setPhase("join-form"); }}>Rejoindre avec un code</button>
        </div>
      </div>
    );
  }

  function renderCreateName() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 40 }}>
        <div className="duo-display" style={{ fontSize: 24, fontWeight: 600 }}>Comment tu t'appelles ?</div>
        <div style={{ color: "#A79BC0", fontSize: 13.5 }}>Ton prÃ©nom sera visible par ton/ta partenaire.</div>
        <input
          className="duo-input" placeholder="Ton prÃ©nom" value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCreate()}
        />
        {error && <div style={{ color: "#FF8B66", fontSize: 13 }}>{error}</div>}
        <button className="duo-btn-primary" disabled={!nameInput.trim() || loading} onClick={handleCreate}>
          {loading ? "CrÃ©ation..." : "CrÃ©er notre espace"}
        </button>
        <button className="duo-btn-ghost" onClick={() => setPhase("landing")}>Retour</button>
      </div>
    );
  }

  function renderCreatedCode() {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, paddingTop: 40 }}>
        <Sparkles size={30} color="#F4C77B" />
        <div className="duo-display" style={{ fontSize: 22, fontWeight: 600 }}>C'est prÃªt !</div>
        <div style={{ color: "#A79BC0", fontSize: 13.5, maxWidth: 260 }}>
          Partage ce code avec ton/ta partenaire pour qu'iel rejoigne votre espace.
        </div>
        <div className="duo-card" style={{ padding: "18px 26px", letterSpacing: 4, fontSize: 26, fontWeight: 700 }}>{code}</div>
        <button className="duo-btn-ghost" onClick={copyCode} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "CopiÃ© !" : "Copier le code"}
        </button>
        <button className="duo-btn-primary" style={{ width: "100%", marginTop: 8 }} onClick={() => setPhase("app")}>
          Continuer <ArrowRight size={15} style={{ display: "inline", marginLeft: 6, verticalAlign: "-2px" }} />
        </button>
      </div>
    );
  }

  function renderJoinForm() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 40 }}>
        <div className="duo-display" style={{ fontSize: 24, fontWeight: 600 }}>Rejoindre votre espace</div>
        <input
          className="duo-input" placeholder="Code (ex. K7XPN)" value={joinCode}
          onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
        />
        <input
          className="duo-input" placeholder="Ton prÃ©nom" value={joinName}
          onChange={(e) => setJoinName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleJoin()}
        />
        {error && <div style={{ color: "#FF8B66", fontSize: 13 }}>{error}</div>}
        <button className="duo-btn-primary" disabled={!joinCode.trim() || !joinName.trim() || loading} onClick={handleJoin}>
          {loading ? "Connexion..." : "Rejoindre"}
        </button>
        <button className="duo-btn-ghost" onClick={() => { setError(""); setPhase("landing"); }}>Retour</button>
      </div>
    );
  }

  function renderHeader() {
    return (
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "30px 20px 12px", flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <ConnectionOrbit progress={0.5} size={30} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {myName} {partnerName ? "& " + partnerName : ""}
            </div>
            <div onClick={copyCode} style={{ fontSize: 11, color: "#A79BC0", cursor: "pointer" }}>
              code {code} {copied ? "Â· copiÃ©" : ""}
            </div>
          </div>
        </div>
        <button onClick={refresh} style={{ background: "none", border: "none", cursor: "pointer", color: "#A79BC0", padding: 4 }}>
          <RefreshCw size={17} style={{ animation: syncing ? "duoFloat 0.6s linear infinite" : "none" }} />
        </button>
      </div>
    );
  }

  function renderNav() {
    const items = [
      { key: "accueil", label: "Accueil", icon: Home },
      { key: "daylink", label: "Lien du jour", icon: MessageCircle },
      { key: "jeux", label: "Jeux", icon: Shuffle },
      { key: "souvenirs", label: "Souvenirs", icon: ImageIcon },
    ];
    return (
      <div style={{
        display: "flex", justifyContent: "space-around", padding: "12px 8px 18px",
        borderTop: "1px solid rgba(167,155,192,0.15)", flexShrink: 0,
      }}>
        {items.map((it) => {
          const Icon = it.icon;
          const active = tab === it.key;
          return (
            <div key={it.key} className={"duo-nav-item" + (active ? " active" : "")} onClick={() => setTab(it.key)}>
              <Icon size={19} />
              <span style={{ fontSize: 10 }}>{it.label}</span>
            </div>
          );
        })}
      </div>
    );
  }

  function renderAccueil() {
    const lvl = levelForScore(data.score || 0);
    const progress = lvl.next ? (data.score - lvl.current.min) / (lvl.next.min - lvl.current.min) : 1;
    const today = todayStr();
    const entry = data.daylink ? data.daylink[today] : null;
    const bothAnswered = entry && entry.answers.A && entry.answers.B;
    const iAnswered = entry && entry.answers[mySlot];
    let daylinkStatus = "RÃ©pondez tous les deux Ã  la question du jour.";
    if (bothAnswered) daylinkStatus = "Vous avez tous les deux rÃ©pondu â€” dÃ©couvrez vos rÃ©ponses.";
    else if (iAnswered) daylinkStatus = "RÃ©ponse envoyÃ©e. En attente de " + (partnerName || "ton/ta partenaire") + ".";

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "4px 20px 20px" }}>
        <div className="duo-display" style={{ fontSize: 21, fontWeight: 600 }}>Salut {myName} ðŸ‘‹</div>

        <div className="duo-card" style={{ padding: 16, display: "flex", alignItems: "center", gap: 14 }}>
          <ConnectionOrbit progress={progress} size={54} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{lvl.current.name}</div>
            <div style={{ fontSize: 12, color: "#A79BC0" }}>
              {data.score || 0} pts{data.streak > 0 ? " Â· ðŸ”¥ " + data.streak + " jour" + (data.streak > 1 ? "s" : "") + " de suite" : ""}
            </div>
          </div>
        </div>

        {!data.members.B && (
          <div className="duo-card" style={{ padding: 16 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
              <Users size={15} /> Invite ton/ta partenaire
            </div>
            <div style={{ fontSize: 12.5, color: "#A79BC0", marginBottom: 10 }}>Partage ce code pour qu'iel rejoigne votre espace.</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 3 }}>{code}</div>
              <button className="duo-btn-ghost" style={{ padding: "6px 12px", fontSize: 12 }} onClick={copyCode}>
                {copied ? "CopiÃ© !" : "Copier"}
              </button>
            </div>
          </div>
        )}

        <div className="duo-card" style={{ padding: 16, cursor: "pointer" }} onClick={() => setTab("daylink")}>
          <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
            <MessageCircle size={15} /> Lien du jour
          </div>
          <div style={{ fontSize: 12.5, color: "#A79BC0" }}>{daylinkStatus}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div className="duo-card" style={{ padding: 14, cursor: "pointer" }} onClick={() => { setTab("jeux"); setGameSub("qui"); }}>
            <div style={{ fontSize: 12.5, fontWeight: 600 }}>Qui de nous deux</div>
          </div>
          <div className="duo-card" style={{ padding: 14, cursor: "pointer" }} onClick={() => { setTab("jeux"); setGameSub("tu"); }}>
            <div style={{ fontSize: 12.5, fontWeight: 600 }}>Tu prÃ©fÃ¨res</div>
          </div>
          <div className="duo-card" style={{ padding: 14, cursor: "pointer" }} onClick={() => { setTab("jeux"); setGameSub("defis"); }}>
            <div style={{ fontSize: 12.5, fontWeight: 600 }}>DÃ©fis Ã  deux</div>
          </div>
          <div className="duo-card" style={{ padding: 14, cursor: "pointer" }} onClick={() => setTab("souvenirs")}>
            <div style={{ fontSize: 12.5, fontWeight: 600 }}>Souvenirs</div>
          </div>
        </div>

        <div style={{ fontSize: 11, color: "#A79BC0", textAlign: "center", lineHeight: 1.5, marginTop: 4 }}>
          Vos rÃ©ponses sont sauvegardÃ©es automatiquement sur cet appareil, sous le code {code}.
        </div>
      </div>
    );
  }

  function renderDaylink() {
    const today = todayStr();
    const q = DAYLINK_QUESTIONS[dayOfYear() % DAYLINK_QUESTIONS.length];
    const entry = (data.daylink && data.daylink[today]) || { question: q, answers: { A: null, B: null } };
    const iAnswered = entry.answers[mySlot];
    const bothAnswered = entry.answers.A && entry.answers.B;
    const dateLabel = new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });

    const pastDays = data.daylink
      ? Object.keys(data.daylink).filter((d) => d !== today && data.daylink[d].answers.A && data.daylink[d].answers.B).sort().reverse().slice(0, 5)
      : [];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "4px 20px 20px" }}>
        <div>
          <div style={{ fontSize: 12, color: "#A79BC0", textTransform: "capitalize" }}>{dateLabel}</div>
          <div className="duo-display" style={{ fontSize: 20, fontStyle: "italic", marginTop: 4, lineHeight: 1.4 }}>{entry.question}</div>
        </div>

        {!iAnswered && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <textarea
              className="duo-input" placeholder="Ta rÃ©ponse..." rows={4} value={daylinkText}
              onChange={(e) => setDaylinkText(e.target.value)} style={{ resize: "none" }}
            />
            <button className="duo-btn-primary" disabled={!daylinkText.trim()} onClick={submitDaylink} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Send size={15} /> Envoyer ma rÃ©ponse
            </button>
          </div>
        )}

        {iAnswered && !bothAnswered && (
          <div className="duo-card" style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
            <ThreadLink state="waiting" />
            <div style={{ fontSize: 12.5, color: "#A79BC0", textAlign: "center" }}>
              Ta rÃ©ponse est enregistrÃ©e. En attente de {partnerName || "ton/ta partenaire"}...
            </div>
          </div>
        )}

        {bothAnswered && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ThreadLink state="connected" />
            <div className="duo-card" style={{ padding: 14 }}>
              <div style={{ fontSize: 11.5, color: "#F4C77B", fontWeight: 600, marginBottom: 4 }}>{myName}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{entry.answers[mySlot]}</div>
            </div>
            <div className="duo-card" style={{ padding: 14 }}>
              <div style={{ fontSize: 11.5, color: "#FF8B66", fontWeight: 600, marginBottom: 4 }}>{partnerName}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{entry.answers[mySlot === "A" ? "B" : "A"]}</div>
            </div>
          </div>
        )}

        {pastDays.length > 0 && (
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: "#A79BC0", margin: "6px 0 10px" }}>Vos derniers liens</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {pastDays.map((d) => (
                <div key={d} className="duo-card" style={{ padding: 12 }}>
                  <div style={{ fontSize: 10.5, color: "#A79BC0", marginBottom: 3 }}>{d}</div>
                  <div style={{ fontSize: 12.5, marginBottom: 6, color: "#F5EFE6", opacity: 0.85 }}>{data.daylink[d].question}</div>
                  <div style={{ fontSize: 12, color: "#A79BC0" }}>{myName} : {data.daylink[d].answers[mySlot]}</div>
                  <div style={{ fontSize: 12, color: "#A79BC0" }}>{partnerName} : {data.daylink[d].answers[mySlot === "A" ? "B" : "A"]}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  function renderQui() {
    const qui = data.qui;
    if (!qui) return <div style={{ padding: 20, color: "#A79BC0", fontSize: 13 }}>Chargement...</div>;
    const quiPool = [...QUI_DE_NOUS, ...customPool(data, "qui")];
    const prompt = quiPool[qui.currentIndex];
    const myVote = qui.votes[mySlot];
    const bothVoted = qui.votes.A && qui.votes.B;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "4px 4px 20px" }}>
        <div className="duo-card" style={{ padding: 20, textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#A79BC0", marginBottom: 8 }}>Qui de nous deuxâ€¦</div>
          <div className="duo-display" style={{ fontSize: 19, lineHeight: 1.4 }}>{prompt}</div>
        </div>
        {!bothVoted ? (
          <div style={{ display: "flex", gap: 10 }}>
            <button
              className="duo-btn-ghost" style={{ flex: 1, borderColor: myVote === "A" ? "#FF8B66" : undefined, opacity: myVote ? (myVote === "A" ? 1 : 0.5) : 1 }}
              disabled={!!myVote} onClick={() => voteQui("A")}
            >{mySlot === "A" ? myName : (partnerName || "Partenaire A")}</button>
            <button
              className="duo-btn-ghost" style={{ flex: 1, borderColor: myVote === "B" ? "#FF8B66" : undefined, opacity: myVote ? (myVote === "B" ? 1 : 0.5) : 1 }}
              disabled={!!myVote} onClick={() => voteQui("B")}
            >{mySlot === "B" ? myName : (partnerName || "Partenaire B")}</button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
              {qui.votes.A === qui.votes.B ? <><Heart size={16} color="#FF8B66" /> Vous Ãªtes d'accord</> : "Avis partagÃ©s ðŸ‘€"}
            </div>
            <div style={{ fontSize: 12.5, color: "#A79BC0" }}>
              {myName} a votÃ© {qui.votes[mySlot] === "A" ? "pour A" : "pour B"} Â· {partnerName} a votÃ© {qui.votes[mySlot === "A" ? "B" : "A"] === "A" ? "pour A" : "pour B"}
            </div>
            <button className="duo-btn-primary" onClick={nextQui}>Question suivante</button>
          </div>
        )}
        {myVote && !bothVoted && <div style={{ fontSize: 12, color: "#A79BC0", textAlign: "center" }}>En attente de {partnerName || "ton/ta partenaire"}...</div>}
      </div>
    );
  }

  function renderTuPrefere() {
    const tp = data.tuprefere;
    if (!tp) return <div style={{ padding: 20, color: "#A79BC0", fontSize: 13 }}>Chargement...</div>;
    const tpPool = [...TU_PREFERES, ...customPool(data, "tu").map(x => [x, "Passer"] )];
    const [optA, optB] = tpPool[tp.currentIndex];
    const myVote = tp.votes[mySlot];
    const bothVoted = (tp.votes.A === 0 || tp.votes.A === 1) && (tp.votes.B === 0 || tp.votes.B === 1);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "4px 4px 20px" }}>
        <div style={{ fontSize: 11, color: "#A79BC0", textAlign: "center" }}>Tu prÃ©fÃ¨res...</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            className="duo-card" onClick={() => !myVote && myVote !== 0 && voteTuPrefere(0)}
            style={{ padding: 18, textAlign: "center", cursor: myVote === undefined || myVote === null ? "pointer" : "default",
              borderColor: myVote === 0 ? "#FF8B66" : undefined, opacity: (myVote === 0 || myVote === null || myVote === undefined) ? 1 : 0.5 }}
          >{optA}</div>
          <div style={{ textAlign: "center", fontSize: 11, color: "#A79BC0" }}>OU</div>
          <div
            className="duo-card" onClick={() => !myVote && myVote !== 0 && voteTuPrefere(1)}
            style={{ padding: 18, textAlign: "center", cursor: myVote === undefined || myVote === null ? "pointer" : "default",
              borderColor: myVote === 1 ? "#FF8B66" : undefined, opacity: (myVote === 1 || myVote === null || myVote === undefined) ? 1 : 0.5 }}
          >{optB}</div>
        </div>
        {bothVoted && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center", marginTop: 4 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600 }}>
              {tp.votes.A === tp.votes.B ? "MÃªme choix â¤ï¸" : "Vous Ãªtes diffÃ©rents, et c'est ok ðŸ˜„"}
            </div>
            <button className="duo-btn-primary" onClick={nextTuPrefere}>Carte suivante</button>
          </div>
        )}
        {(myVote === 0 || myVote === 1) && !bothVoted && (
          <div style={{ fontSize: 12, color: "#A79BC0", textAlign: "center" }}>En attente de {partnerName || "ton/ta partenaire"}...</div>
        )}
      </div>
    );
  }

  function renderActionVerite(){ const av=data.actionVerite||{current:null,lastChoices:[]}; const last=av.lastChoices||[]; const blocked=last.length===2&&last[0]===last[1]?last[1]:null; return <div style={{display:"flex",flexDirection:"column",gap:14,padding:"4px 4px 20px"}}>{!av.current?<div className="duo-card" style={{padding:20,textAlign:"center"}}><div style={{fontSize:12,color:"#A79BC0",marginBottom:8}}>Au tour de</div><div style={{fontSize:20,fontWeight:700,marginBottom:16}}>Choisissez : Action ou Vérité ?</div><div style={{display:"flex",gap:10}}><button className="duo-btn-primary" disabled={blocked==="action"} onClick={()=>chooseActionVerite("action")} style={{flex:1}}>ACTION</button><button className="duo-btn-ghost" disabled={blocked==="verite"} onClick={()=>chooseActionVerite("verite")} style={{flex:1}}>VÉRITÉ</button></div>{blocked&&<div style={{fontSize:11,color:"#A79BC0",marginTop:10}}>Pas trois fois de suite : choisissez {blocked==="action"?"Vérité":"Action"}.</div>}</div>:<div className="duo-card" style={{padding:20,textAlign:"center",display:"flex",flexDirection:"column",gap:14}}><div style={{fontSize:11,color:"#F4C77B",textTransform:"uppercase"}}>{av.current.type==="action"?"Action":"Vérité"} · {av.current.player}</div><div className="duo-display" style={{fontSize:18,lineHeight:1.5}}>{av.current.text}</div><button className="duo-btn-primary" onClick={clearActionVerite}>Question suivante</button></div>}</div>; }
  function renderDefis(){const d=data.defis||{log:[],current:null};return <div style={{display:"flex",flexDirection:"column",gap:14,padding:"4px 4px 20px"}}>{!d.current&&<button className="duo-btn-primary" onClick={drawDefi}>Tirer un défi</button>}{d.current&&<div className="duo-card" style={{padding:20,display:"flex",flexDirection:"column",gap:14}}><div className="duo-display" style={{fontSize:17,lineHeight:1.5}}>{d.current.text}</div><div style={{display:"flex",gap:10}}><button className="duo-btn-primary" style={{flex:1}} onClick={completeDefi}><Check size={15}/> Terminé</button><button className="duo-btn-ghost" onClick={skipDefi}><X size={15}/></button></div></div>}<div style={{fontSize:12,color:"#A79BC0",textAlign:"center"}}>Défis relevés ensemble : {d.log.length}</div></div>; }

  function renderCustomQuestions(){if(mySlot!=="A")return null;const list=data.customQuestions||[];return <div style={{display:"flex",flexDirection:"column",gap:12,padding:"4px 4px 20px"}}><div className="duo-card" style={{padding:16}}><div style={{fontWeight:700,marginBottom:8}}>Mes questions</div><input className="duo-input" value={customText} onChange={e=>setCustomText(e.target.value)} placeholder="Écris ta question..."/><div style={{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"}}>{[["qui","Qui de nous deux"],["tu","Tu préfères"],["action","Action"],["verite","Vérité"],["defis","Défi"]].map(([c,l])=><div key={c} className={"duo-pill"+(customCat===c?" active":"")} onClick={()=>setCustomCat(c)}>{l}</div>)}</div><button className="duo-btn-primary" style={{marginTop:10,width:"100%"}} disabled={!customText.trim()} onClick={()=>{addCustomQuestion(customText,customCat);setCustomText("")}}>Ajouter</button></div>{list.map(q=><div key={q.id} className="duo-card" style={{padding:12,display:"flex",gap:8,alignItems:"center"}}><div style={{flex:1,fontSize:12}}>{q.text}<div style={{fontSize:10,color:"#A79BC0",marginTop:3}}>{q.category}</div></div><button className="duo-btn-ghost" onClick={()=>deleteCustomQuestion(q.id)}><X size={14}/></button></div>)}</div>;}
  function renderJeux(){let subs=[{key:"qui",label:"Qui de nous deux"},{key:"tu",label:"Tu préfères"},{key:"action",label:"Action ou Vérité"},{key:"defis",label:"Défis"}];if(mySlot==="A")subs.push({key:"custom",label:"Mes questions"});return <div style={{display:"flex",flexDirection:"column",gap:14,padding:"4px 20px 0"}}><div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>{subs.map(x=><div key={x.key} className={"duo-pill"+(gameSub===x.key?" active":"")} onClick={()=>setGameSub(x.key)}>{x.label}</div>)}</div>{gameSub==="qui"&&renderQui()}{gameSub==="tu"&&renderTuPrefere()}{gameSub==="action"&&renderActionVerite()}{gameSub==="defis"&&renderDefis()}{gameSub==="custom"&&renderCustomQuestions()}</div>;}

  function renderSouvenirs() {
    const list = [...(data.souvenirs || [])].sort((a, b) => (a.date < b.date ? 1 : -1));
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "4px 20px 20px" }}>
        <div className="duo-card" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          <input className="duo-input" placeholder="Titre du souvenir" value={souvenirTitle} onChange={(e) => setSouvenirTitle(e.target.value)} />
          <input className="duo-input" type="date" value={souvenirDate} onChange={(e) => setSouvenirDate(e.target.value)} />
          <textarea className="duo-input" placeholder="Racontez-le en quelques mots..." rows={3} value={souvenirNote} onChange={(e) => setSouvenirNote(e.target.value)} style={{ resize: "none" }} />
          <button className="duo-btn-primary" disabled={!souvenirTitle.trim()} onClick={addSouvenir} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <Plus size={15} /> Ajouter au journal
          </button>
        </div>
        {list.length === 0 ? (
          <div style={{ fontSize: 12.5, color: "#A79BC0", textAlign: "center", padding: "10px 20px" }}>
            Votre histoire commence ici. Ajoutez votre premier souvenir.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {list.map((s, i) => (
              <div key={s.id} style={{ display: "flex", gap: 12 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "9999px", background: "#F4C77B", marginTop: 6, flexShrink: 0 }} />
                  {i < list.length - 1 && <div style={{ width: 1, flex: 1, background: "rgba(167,155,192,0.25)" }} />}
                </div>
                <div style={{ paddingBottom: 18 }}>
                  <div style={{ fontSize: 10.5, color: "#A79BC0" }}>{s.date}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, margin: "2px 0 4px" }}>{s.title}</div>
                  {s.note && <div style={{ fontSize: 12.5, color: "#F5EFE6", opacity: 0.85, lineHeight: 1.5 }}>{s.note}</div>}
                  <div style={{ fontSize: 10.5, color: "#A79BC0", marginTop: 4 }}>ajoutÃ© par {s.addedBy}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  function renderAppContent() {
    if (tab === "accueil") return renderAccueil();
    if (tab === "daylink") return renderDaylink();
    if (tab === "jeux") return renderJeux();
    if (tab === "souvenirs") return renderSouvenirs();
    return null;
  }

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 12px",
      background: "radial-gradient(circle at 15% -10%, #352a5c 0%, #1E1730 40%, #140c22 100%)",
    }}>
      <style>{CSS}</style>
      <div className="duo-root" style={{
        width: "min(400px, 100%)", height: "min(820px, 92vh)", display: "flex", flexDirection: "column",
        borderRadius: "2.75rem", overflow: "hidden", position: "relative",
        border: "10px solid rgba(10,6,20,0.55)",
        boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(244,199,123,0.06)",
        background: "radial-gradient(circle at 20% -10%, #2c2250 0%, #1E1730 45%, #170f28 100%)",
      }}>
        <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 70, height: 18, borderRadius: 999, background: "rgba(0,0,0,0.35)", zIndex: 5 }} />

        {phase === "app" && renderHeader()}

        <div className="duo-scroll" key={phase + tab + gameSub} style={{ flex: 1, overflowY: "auto", animation: "duoFadeUp 0.25s ease-out" }}>
          {phase === "landing" && <div style={{ padding: "0 20px" }}>{renderLanding()}</div>}
          {phase === "create-name" && <div style={{ padding: "0 20px" }}>{renderCreateName()}</div>}
          {phase === "created-code" && <div style={{ padding: "0 20px" }}>{renderCreatedCode()}</div>}
          {phase === "join-form" && <div style={{ padding: "0 20px" }}>{renderJoinForm()}</div>}
          {phase === "app" && data && renderAppContent()}
        </div>

        {phase === "app" && renderNav()}
        {phase === "app" && (
          <button onClick={() => setChatOpen(v => !v)} aria-label="Ouvrir les messages" style={{ position: "absolute", right: 14, bottom: 88, zIndex: 41, width: 48, height: 48, borderRadius: 999, border: "1px solid rgba(244,199,123,.25)", background: "#24183b", color: "#F5EFE6", boxShadow: "0 10px 30px rgba(0,0,0,.35)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>ðŸ’¬{unreadMessages>0 && <span style={{position:"absolute",top:-2,right:-2,minWidth:18,height:18,borderRadius:99,background:"#FF8B66",color:"#1b1025",fontSize:10,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px"}}>{unreadMessages>9?"9+":unreadMessages}</span>}</button>
        )}
        {phase === "app" && renderChat()}

        {error && phase === "app" && (
          <div style={{ position: "absolute", bottom: 78, left: 16, right: 16, background: "rgba(255,139,102,0.15)", border: "1px solid #FF8B66", borderRadius: 12, padding: "8px 12px", fontSize: 12, textAlign: "center" }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
