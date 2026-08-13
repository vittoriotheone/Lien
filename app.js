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
    "est le plus romantique ?",
    "met le plus de temps à se préparer ?",
    "est le plus têtu(e) ?",
    "pleure le plus facilement devant un film ?",
    "prend les décisions les plus impulsives ?",
    "est le plus doué(e) en cuisine ?",
    "ronfle le plus fort ?",
    "dit « je t'aime » le plus souvent ?",
    "est le plus jaloux (ou jalouse) ?",
    "oublie le plus souvent les anniversaires ?",
    "est le plus drôle ?",
    "prend le plus de temps sous la douche ?",
    "est le plus dépensier (ou dépensière) ?",
    "a le plus peur des insectes ?",
    "est le plus rancunier (ou rancunière) ?",
    "sait le mieux s'excuser ?",
    "est le plus câlin(e) ?",
    "regarde le plus son téléphone au lit ?",
    "est le plus organisé(e) ?",
    "ferait le meilleur parent ?",
];
const TU_PREFERES = [
    ["Un week-end à la montagne", "Un week-end à la mer"],
    ["Une soirée film-plaid", "Une soirée resto-danse"],
    ["Recevoir des fleurs", "Recevoir un mot doux"],
    ["Voyager sans plan", "Voyager avec un itinéraire minuté"],
    ["Un massage surprise", "Un petit-déjeuner au lit"],
    ["Se disputer et en rire après", "Ne jamais se disputer"],
    ["Vivre en ville", "Vivre à la campagne"],
    ["Un cadeau fait main", "Un cadeau qui a coûté cher"],
    ["Danser devant tout le monde", "Chanter devant tout le monde"],
    ["Une soirée à ne rien faire ensemble", "Une soirée pleine d'activités"],
    ["Se réveiller tôt ensemble", "Faire la grasse matinée ensemble"],
    ["Un slow dans le salon", "Un baiser sous la pluie"],
    ["Se dire « je t'aime » en public", "Se le dire en privé, tout bas"],
    ["Une déclaration écrite", "Une déclaration improvisée"],
    ["Un road trip surprise", "Des vacances planifiées ensemble"],
];
const ACTION_VERITE = [
  {type:"vérité", text:"Quel est ton signal d’alarme le plus inattendu chez quelqu’un ?"},
  {type:"vérité", text:"Quelle chose fais-tu seulement quand tu es seul(e) ?"},
  {type:"vérité", text:"Quelle chose aimerais-tu que l’autre sache mieux sur toi ?"},
  {type:"vérité", text:"Quel est ton plus grand regret ?"},
  {type:"vérité", text:"Quel a été le plus beau jour de ta vie ?"},
  {type:"vérité", text:"Quel a été ton pire jour de ta vie ?"},
  {type:"vérité", text:"Pour quelle raison as-tu le plus peur d’être jugé(e) ?"},
  {type:"vérité", text:"Quel compliment préfères-tu recevoir ?"},
  {type:"vérité", text:"Qu’est-ce qui te fait dire « beurk » ?"},
  {type:"vérité", text:"Quelle est la dernière chose que tu as recherchée sur Google ?"},
  {type:"vérité", text:"Quel a été ton premier coup de cœur pour une célébrité ?"},
  {type:"vérité", text:"Quelle est la chose la plus originale que tu aies mangée ?"},
  {type:"vérité", text:"À quelle émission de télé-réalité participerais-tu ?"},
  {type:"vérité", text:"Quel a été ton pire premier rendez-vous ?"},
  {type:"vérité", text:"Quel animal ressemble le plus à l’autre selon toi ?"},
  {type:"vérité", text:"Quelle tendance de mode embarrassante as-tu suivie ?"},
  {type:"vérité", text:"Quel film embarrassant comptes-tu pourtant parmi tes préférés ?"},
  {type:"vérité", text:"Quelle chanson un peu honteuse aimais-tu beaucoup ?"},
  {type:"vérité", text:"Quel est le pire cadeau que tu aies reçu ?"},
  {type:"vérité", text:"Quel est le meilleur conseil que tu aies reçu ?"},
  {type:"vérité", text:"Quand as-tu pleuré pour la dernière fois ?"},
  {type:"vérité", text:"Si tu pouvais faire n’importe quel métier, lequel choisirais-tu ?"},
  {type:"vérité", text:"Si tu n’avais plus besoin de travailler, comment passerais-tu ton temps ?"},
  {type:"vérité", text:"Quelle est ta plus grande peur concernant notre avenir ?"},
  {type:"vérité", text:"Est-ce que l’autre t’a déjà rendu(e) jaloux(se) ?"},
  {type:"vérité", text:"Quel est ton souvenir d’enfance préféré ?"},
  {type:"vérité", text:"Quelle a été ta première impression de l’autre ?"},
  {type:"vérité", text:"Quel est ton souvenir préféré de nous deux ?"},
  {type:"vérité", text:"Qu’aimerais-tu que nous fassions plus souvent ensemble ?"},
  {type:"vérité", text:"Quelle chanson te fait penser à l’autre ?"},
  {type:"vérité", text:"Quelle chose pourrait améliorer notre relation ?"},
  {type:"vérité", text:"Qu’est-ce qui t’a attiré(e) chez l’autre en premier ?"},
  {type:"vérité", text:"Quelle scène de film aimerais-tu que nous recréions ?"},
  {type:"vérité", text:"Quel mot as-tu mal prononcé pendant des années ?"},
  {type:"vérité", text:"Quelle chose bizarre fais-tu uniquement quand tu es seul(e) chez toi ?"},
  {type:"vérité", text:"Quelle recherche Google récente te fait le plus rire ou honte ?"},
  {type:"vérité", text:"Quel souvenir d’enfance reflète le mieux la personne que tu es aujourd’hui ?"},
  {type:"vérité", text:"Raconte un moment où tu t’es senti(e) profondément incompris(e)."},
  {type:"vérité", text:"Quel conseil reçu de tes parents appliques-tu encore aujourd’hui ?"},
  {type:"vérité", text:"Quelle chose n’oses-tu jamais dire par peur de blesser l’autre ?"},
  {type:"vérité", text:"Quelle marque d’affection te fait te sentir le plus aimé(e) ?"},
  {type:"vérité", text:"À quoi ressemblerait notre année parfaite si tout était possible ?"},
  {type:"vérité", text:"Quel grand défi avons-nous surmonté ensemble ?"},
  {type:"vérité", text:"Quel comportement passé aimerais-tu éviter de reproduire ?"},
  {type:"vérité", text:"Écris sur un papier ce que tu admires le plus chez l’autre et donne-le-lui."},
  {type:"vérité", text:"Quel moment t’a fait te dire que nous formions vraiment un duo ?"},
  {type:"vérité", text:"Si l’autre organisait ta journée parfaite, que voudrais-tu y trouver ?"},
  {type:"vérité", text:"Quel projet fou ou romantique aimerais-tu réaliser ensemble ?"},
  {type:"vérité", text:"Quel secret mignon ou drôle n’as-tu jamais osé raconter ?"},
  {type:"action", text:"Échangez vos tenues pendant quelques minutes."},
  {type:"action", text:"Utilise tes pires phrases d’accroche pendant une minute."},
  {type:"action", text:"Fais un croquis de ton meilleur portrait de l’autre."},
  {type:"action", text:"Fais ta meilleure imitation de l’autre."},
  {type:"action", text:"Fais un massage de cinq minutes."},
  {type:"action", text:"Mets une chanson qui te fait penser à l’autre."},
  {type:"action", text:"Chante une chanson de ton choix comme une sérénade."},
  {type:"action", text:"Écris un petit poème en cinq minutes."},
  {type:"action", text:"Maintiens le contact visuel avec l’autre pendant deux minutes sans rire."},
  {type:"action", text:"Dessine un souvenir de votre premier rendez-vous ou de votre première rencontre."},
  {type:"action", text:"Dis trois qualités de l’autre sans réfléchir."},
  {type:"action", text:"Donne à l’autre un surnom mignon mais ridicule."},
  {type:"action", text:"Fais une déclaration d’amitié ou d’amour improvisée."},
  {type:"action", text:"Fais semblant de demander l’autre en mariage de façon très dramatique."},
  {type:"action", text:"Mange une cuillerée d’un condiment choisi ensemble."},
  {type:"action", text:"Parle avec un accent pendant cinq minutes."},
  {type:"action", text:"Imite une célébrité et laisse l’autre deviner laquelle."},
  {type:"action", text:"Laisse l’autre choisir ta coiffure pour le reste du jeu."},
  {type:"action", text:"Prenez un selfie ridicule ensemble."},
  {type:"action", text:"Faites une photo de profil amusante à deux."},
  {type:"action", text:"Prenez une douche habillé(e)."},
  {type:"action", text:"Mets un bandeau sur tes yeux et devine trois aliments."},
  {type:"action", text:"Chante très fort le refrain d’une chanson choisie par l’autre."},
  {type:"action", text:"Écris une chanson ou un petit texte sur votre duo."},
  {type:"action", text:"Fais un compliment précis à l’autre en moins de dix secondes."},
  {type:"action", text:"Recréez votre première rencontre pendant deux minutes."},
  {type:"action", text:"Regardez-vous dans les yeux pendant deux minutes sans parler."},
];

const DEFIS = {
    doux: [
        "Écrivez chacun 3 raisons d'être fier de l'autre, et lisez-les à voix haute.",
        "Préparez le plat préféré de l'autre, ensemble, sans recette.",
        "Offrez-vous un compliment sincère que vous n'avez jamais dit.",
        "Listez chacun 5 souvenirs qui vous font sourire, puis comparez.",
        "Envoyez-vous un message comme si c'était votre premier rendez-vous.",
        "Dessinez le portrait de l'autre en 2 minutes, sans regarder la feuille.",
        "Racontez le moment où vous avez su que c'était la bonne personne.",
        "Prenez une photo qui représente votre couple aujourd'hui.",
    ],
    fun: [
        "Improvisez un mini spectacle d'une minute sur votre rencontre.",
        "Inventez un surnom ridicule pour l'autre et utilisez-le toute la soirée.",
        "Faites un karaoké avec la chanson préférée de l'autre.",
        "Jouez à « imite-moi » pendant 2 minutes.",
        "Créez un handshake secret à vous deux.",
        "Organisez un mini concours de la blague la plus nulle.",
        "Regardez une photo au hasard de votre pellicule et racontez le souvenir.",
        "Préparez un menu « resto » à la maison, avec un nom de plat inventé.",
    ],
    profond: [
        "Partagez une peur que vous n'avez jamais vraiment exprimée à l'autre.",
        "Parlez d'un moment où l'autre vous a aidé sans même s'en rendre compte.",
        "Discutez de ce que « réussir sa vie à deux » veut dire pour chacun.",
        "Racontez un souvenir d'enfance qui explique qui vous êtes aujourd'hui.",
        "Parlez d'une chose que vous aimeriez pardonner, ou vous faire pardonner.",
        "Échangez sur vos définitions respectives de l'amour.",
        "Discutez d'un rêve que vous avez mis de côté.",
        "Parlez de ce qui vous fait vous sentir seul(e), même à deux.",
    ],
    epice: [
        "Écrivez-vous un mot doux et glissez-le dans la poche de l'autre.",
        "Offrez un massage de 5 minutes, sans rien demander en retour.",
        "Complimentez 3 choses physiques que vous aimez chez l'autre.",
        "Planifiez un rendez-vous surprise pour la semaine prochaine.",
        "Chuchotez à l'oreille de l'autre ce que vous préférez chez lui/elle.",
        "Faites durer un câlin une minute complète, sans parler.",
        "Racontez votre souvenir le plus romantique à deux.",
        "Préparez une playlist de séduction pour votre prochain rendez-vous.",
    ],
};
// Grand catalogue : des milliers de formulations distinctes.
function uniquePush(target, value) { if (value && !target.includes(value)) target.push(value); }
(function expandQuestionCatalogues() {
    const moments = ["ce matin", "cette semaine", "pendant une journée tranquille", "lors d'un voyage", "un soir d'été", "un dimanche", "après une longue journée", "quand nous sommes loin", "quand nous sommes ensemble", "dans cinq ans", "dans dix ans", "pendant les vacances", "un jour de pluie", "à minuit", "au réveil", "avant de dormir", "pendant une fête", "dans une nouvelle ville", "sans téléphone", "avec nos proches", "quand nous sommes stressés", "quand nous avons envie de rire", "quand tout va très bien", "quand quelque chose ne se passe pas comme prévu"];
    const angles = ["un souvenir", "une habitude", "une qualité", "une petite attention", "un projet", "une peur", "un rêve", "une réussite", "une musique", "un endroit", "un objet", "une odeur", "une phrase", "une tradition", "une surprise", "une aventure", "une première fois", "une chose toute simple"];
    const dayTemplates = [
        "Quel {angle} de nous te revient le plus facilement {moment} ?",
        "Quelle {angle} aimerais-tu créer avec moi {moment} ?",
        "Quel {angle} voudrais-tu que nous gardions longtemps en mémoire {moment} ?",
        "Si nous pouvions transformer {angle} en souvenir parfait {moment}, que choisirais-tu ?",
        "Quelle {angle} de notre duo te donne le plus envie de sourire {moment} ?",
        "Quelle {angle} pourrait rendre notre quotidien encore plus chouette {moment} ?",
        "Quelle {angle} voudrais-tu découvrir davantage chez moi {moment} ?",
        "Quelle {angle} nous ressemble le plus {moment} ?",
        "Quelle {angle} aimerais-tu raconter à quelqu'un dans plusieurs années {moment} ?",
        "Quelle {angle} serait parfaite pour une nouvelle aventure à deux {moment} ?"
    ];
    for (const t of dayTemplates) for (const a of angles) for (const m of moments) uniquePush(DAYLINK_QUESTIONS, t.replace("{angle}", a).replace("{moment}", m));

    const predicates = ["garderait le mieux un secret", "répondrait le plus vite", "proposerait une aventure spontanée", "trouverait une solution en premier", "ferait rire l'autre dans une situation sérieuse", "remarquerait un petit détail", "ferait le meilleur cadeau surprise", "choisirait le meilleur restaurant", "oserait parler à un inconnu", "se lèverait le plus tôt", "resterait éveillé le plus tard", "prendrait le plus de photos", "se perdrait le moins facilement", "changerait de plan au dernier moment", "organiserait le meilleur voyage", "ferait le meilleur discours", "gagnerait à un quiz", "apprendrait une nouvelle compétence le plus vite", "trouverait le meilleur surnom", "ferait le plus facilement rire l'autre", "oserait tester quelque chose de nouveau", "se souviendrait du plus de détails", "serait le plus calme sous pression", "ferait le plus beau dessin", "écrirait le meilleur message", "aurait l'idée la plus originale", "finirait un jeu en premier", "ferait une sieste dès qu'il peut", "danserait sans se soucier des autres", "chanterait même sans connaître les paroles", "serait le plus généreux", "serait le plus diplomate", "serait le plus curieux", "serait le plus persévérant", "serait le plus nostalgique", "serait le plus aventureux", "serait le plus protecteur", "serait le plus patient", "serait le plus spontané", "serait le plus créatif", "serait le plus observateur", "serait le plus drôle", "serait le plus organisé", "serait le plus rêveur", "serait le plus compétitif", "serait le plus gourmand", "serait le plus bavard", "serait le plus discret", "serait le plus ponctuel", "serait le plus susceptible de lancer un projet", "serait le plus susceptible de devenir célèbre", "serait le plus susceptible de faire une blague", "serait le plus susceptible d'oublier où il a posé son téléphone", "serait le plus susceptible de faire une découverte improbable", "serait le plus susceptible de proposer un road trip", "serait le plus susceptible de commencer une nouvelle passion", "serait le plus susceptible de parler à un animal", "serait le plus susceptible de rire sans raison", "serait le plus susceptible de dire « j'ai une idée »" ];
    const contexts = ["aujourd'hui", "en vacances", "pendant un voyage", "à la maison", "dans une soirée entre amis", "dans une journée imprévue", "dans une nouvelle ville", "face à un défi", "pendant un week-end", "dans dix ans", "quand nous sommes fatigués", "quand nous avons beaucoup de temps", "quand nous devons improviser", "quand nous voulons faire rire l'autre", "quand nous préparons une surprise", "quand nous devons choisir rapidement", "pendant une journée sans téléphone", "quand nous découvrons quelque chose de nouveau"];
    for (const p of predicates) for (const c of contexts) uniquePush(QUI_DE_NOUS, p + " " + c + " ?");

    const left = ["une escapade improvisée", "un week-end calme", "un road trip", "une soirée jeux", "un dîner maison", "un concert", "une randonnée", "une journée plage", "une journée montagne", "un musée", "un parc d'attractions", "une nuit blanche", "une matinée tranquille", "une surprise totale", "un voyage sans téléphone", "une fête avec des amis", "un pique-nique", "une soirée cinéma", "un cours à deux", "une activité créative", "un hôtel insolite", "un voyage en train", "un voyage en voiture", "une journée à explorer une ville", "une journée à ne rien prévoir", "un défi sportif", "un atelier cuisine", "une soirée karaoké", "une séance photo", "un dimanche cocooning"];
    const right = ["un séjour luxueux", "une soirée très organisée", "un voyage avec planning", "une soirée discussion", "un restaurant chic", "un spectacle", "une balade nocturne", "une journée piscine", "une journée au bord d'un lac", "une expo", "un escape game", "une nuit à parler", "un petit-déjeuner tardif", "une surprise préparée à l'avance", "une journée sans réseaux", "une soirée tranquille à deux", "un brunch", "une soirée série", "un atelier musique", "un atelier dessin", "une cabane", "un trajet en avion", "un trajet en bateau", "une journée photo", "une journée totalement libre", "un défi créatif", "un atelier pâtisserie", "une soirée dansante", "une vidéo souvenir", "une soirée lecture"];
    for (let i=0;i<left.length;i++) for (let j=0;j<right.length;j++) if (i!==j) uniquePush(TU_PREFERES, [left[i], right[j]]);

    const challengeObjects = ["une chanson", "une photo", "un objet", "un souvenir", "un message", "un dessin", "une recette", "un film", "un mot", "une histoire", "un surnom", "une playlist", "un lieu", "une anecdote", "un mini spectacle", "un compliment", "un projet", "une blague", "une devinette", "une pose photo"];
    const challengeTemplates = {
      doux: ["Écrivez chacun trois phrases sur {obj} qui vous fait penser à l'autre.", "Trouvez ensemble une façon originale de partager {obj}.", "Transformez {obj} en petit souvenir à garder.", "Expliquez chacun pourquoi {obj} vous rappelle votre duo.", "Créez en cinq minutes une mini tradition autour de {obj}."],
      fun: ["Faites un mini défi de 60 secondes avec {obj}.", "Inventez une règle absurde autour de {obj} et respectez-la pendant cinq minutes.", "Faites deviner {obj} uniquement avec des gestes.", "Donnez à {obj} un nom complètement ridicule.", "Créez une histoire totalement improbable à partir de {obj}."],
      profond: ["Parlez pendant cinq minutes de ce que {obj} représente pour vous.", "Racontez un souvenir lié à {obj} que l'autre ne connaît pas.", "Expliquez comment {obj} pourrait symboliser votre duo.", "Imaginez votre vie dans dix ans en incluant {obj}.", "Dites chacun ce que {obj} vous apprend sur l'autre."],
      epice: ["Faites un compliment très précis à l'autre en utilisant {obj}.", "Inventez un rendez-vous surprise inspiré par {obj}.", "Écrivez un message mystérieux à propos de {obj} et faites-le deviner.", "Créez un petit défi de séduction autour de {obj}.", "Faites une photo originale avec {obj}." ]
    };
    for (const cat of Object.keys(challengeTemplates)) { for (const t of challengeTemplates[cat]) for (const o of challengeObjects) { const arr=DEFIS[cat]; for(let n=0;n<4;n++) uniquePush(arr, t.replace("{obj}",o)+" Variante " + (n+1) + "."); } }
})();
const CATEGORIES = [
    { key: "doux", label: "Doux" },
    { key: "fun", label: "Fun" },
    { key: "profond", label: "Profond" },
    { key: "epice", label: "Épicé" },
];
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
function ensureQui(fresh) {
    if (!fresh.qui) {
        const first = pickUnusedIndex(QUI_DE_NOUS.length, []);
        fresh.qui = { currentIndex: first, used: first >= 0 ? [first] : [], votes: { A: null, B: null }, roundScored: false, history: [] };
    } else if (!Array.isArray(fresh.qui.used)) {
        fresh.qui.used = fresh.qui.currentIndex >= 0 ? [fresh.qui.currentIndex] : [];
    }
    return fresh.qui;
}
function ensureTuPrefere(fresh) {
    if (!fresh.tuprefere) {
        const first = pickUnusedIndex(TU_PREFERES.length, []);
        fresh.tuprefere = { currentIndex: first, used: first >= 0 ? [first] : [], votes: { A: null, B: null }, roundScored: false, history: [] };
    } else if (!Array.isArray(fresh.tuprefere.used)) {
        fresh.tuprefere.used = fresh.tuprefere.currentIndex >= 0 ? [fresh.tuprefere.currentIndex] : [];
    }
    return fresh.tuprefere;
}
function ensureActionVerite(fresh) {
    if (!fresh.actionVerite) {
        const first = pickUnusedIndex(ACTION_VERITE.length, []);
        fresh.actionVerite = { currentIndex: first, used: first >= 0 ? [first] : [], history: [] };
    } else if (!Array.isArray(fresh.actionVerite.used)) {
        fresh.actionVerite.used = fresh.actionVerite.currentIndex >= 0 ? [fresh.actionVerite.currentIndex] : [];
    }
    return fresh.actionVerite;
}
function ensureDefis(fresh) {
    if (!fresh.defis)
        fresh.defis = { log: [], current: null };
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
        if (!code)
            return;
        setSyncing(true);
        const fresh = await getCouple(code);
        if (fresh)
            setData(fresh);
        setSyncing(false);
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
    function nextActionVerite() {
        mutate((fresh) => {
            const av = ensureActionVerite(fresh);
            const next = pickUnusedIndex(ACTION_VERITE.length, av.used || []);
            if (next < 0) return fresh;
            fresh.actionVerite = { currentIndex: next, used: [...(av.used || []), next], history: [...(av.history || []), av.currentIndex].slice(-100) };
            return fresh;
        });
    }
    function renderActionVerite() {
        const av = data.actionVerite;
        if (!av) return React.createElement("div", { style: { padding: 20, color: "#A79BC0", fontSize: 13 } }, "Chargement...");
        const card = ACTION_VERITE[av.currentIndex];
        return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14, padding: "4px 4px 20px" } },
            React.createElement("div", { className: "duo-card", style: { padding: 20, textAlign: "center" } },
                React.createElement("div", { style: { fontSize: 11, color: "#A79BC0", marginBottom: 8 } }, card.type === "action" ? "Action" : "Vérité"),
                React.createElement("div", { className: "duo-display", style: { fontSize: 18, lineHeight: 1.45 } }, card.text)),
            React.createElement("button", { className: "duo-btn-primary", onClick: nextActionVerite }, "Carte suivante"),
            React.createElement("div", { style: { fontSize: 11, color: "#A79BC0", textAlign: "center" } }, `${(av.used || []).length} cartes déjà tirées · aucune répétition`));
    }
    function voteQui(choice) {
        mutate((fresh) => {
            const qui = ensureQui(fresh);
            qui.votes[mySlot] = choice;
            if (qui.votes.A && qui.votes.B && !qui.roundScored) {
                touchActivity(fresh, 3);
                qui.roundScored = true;
                qui.history = [...(qui.history || []), { index: qui.currentIndex, votes: Object.assign({}, qui.votes) }].slice(-20);
            }
            return fresh;
        });
    }
    function nextQui() {
        mutate((fresh) => {
            const used = fresh.qui && Array.isArray(fresh.qui.used) ? fresh.qui.used : [];
            const next = pickUnusedIndex(QUI_DE_NOUS.length, used);
            if (next < 0) return fresh;
            fresh.qui = { currentIndex: next, used: [...used, next], votes: { A: null, B: null }, roundScored: false, history: fresh.qui ? fresh.qui.history : [] };
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
                tp.history = [...(tp.history || []), { index: tp.currentIndex, votes: Object.assign({}, tp.votes) }].slice(-20);
            }
            return fresh;
        });
    }
    function nextTuPrefere() {
        mutate((fresh) => {
            const used = fresh.tuprefere && Array.isArray(fresh.tuprefere.used) ? fresh.tuprefere.used : [];
            const next = pickUnusedIndex(TU_PREFERES.length, used);
            if (next < 0) return fresh;
            fresh.tuprefere = { currentIndex: next, used: [...used, next], votes: { A: null, B: null }, roundScored: false, history: fresh.tuprefere ? fresh.tuprefere.history : [] };
            return fresh;
        });
    }
    function drawDefi(category) {
        mutate((fresh) => {
            const defis = ensureDefis(fresh);
            const pool = DEFIS[category];
            const doneTexts = new Set(defis.log.filter((d) => d.category === category).map((d) => d.text));
            let available = pool.filter((t) => !doneTexts.has(t));
            if (available.length === 0) return fresh;
            const text = available[Math.floor(Math.random() * available.length)];
            defis.current = { category, text, drawnBy: myName };
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
        const qui = data.qui;
        if (!qui)
            return React.createElement("div", { style: { padding: 20, color: "#A79BC0", fontSize: 13 } }, "Chargement...");
        const prompt = QUI_DE_NOUS[qui.currentIndex];
        const myVote = qui.votes[mySlot];
        const bothVoted = qui.votes.A && qui.votes.B;
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16, padding: "4px 4px 20px" } },
            React.createElement("div", { className: "duo-card", style: { padding: 20, textAlign: "center" } },
                React.createElement("div", { style: { fontSize: 11, color: "#A79BC0", marginBottom: 8 } }, "Qui de nous deux\u2026"),
                React.createElement("div", { className: "duo-display", style: { fontSize: 19, lineHeight: 1.4 } }, prompt)),
            !bothVoted ? (React.createElement("div", { style: { display: "flex", gap: 10 } },
                React.createElement("button", { className: "duo-btn-ghost", style: { flex: 1, borderColor: myVote === "A" ? "#FF8B66" : undefined, opacity: myVote ? (myVote === "A" ? 1 : 0.5) : 1 }, disabled: !!myVote, onClick: () => voteQui("A") }, mySlot === "A" ? myName : (partnerName || "Partenaire A")),
                React.createElement("button", { className: "duo-btn-ghost", style: { flex: 1, borderColor: myVote === "B" ? "#FF8B66" : undefined, opacity: myVote ? (myVote === "B" ? 1 : 0.5) : 1 }, disabled: !!myVote, onClick: () => voteQui("B") }, mySlot === "B" ? myName : (partnerName || "Partenaire B")))) : (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12, alignItems: "center" } },
                React.createElement("div", { style: { fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 } }, qui.votes.A === qui.votes.B ? React.createElement(React.Fragment, null,
                    React.createElement(Heart, { size: 16, color: "#FF8B66" }),
                    " Vous \u00EAtes d'accord") : "Avis partagés 👀"),
                React.createElement("div", { style: { fontSize: 12.5, color: "#A79BC0" } },
                    myName,
                    " a vot\u00E9 ",
                    qui.votes[mySlot] === "A" ? "pour A" : "pour B",
                    " \u00B7 ",
                    partnerName,
                    " a vot\u00E9 ",
                    qui.votes[mySlot === "A" ? "B" : "A"] === "A" ? "pour A" : "pour B"),
                React.createElement("button", { className: "duo-btn-primary", onClick: nextQui }, "Question suivante"))),
            myVote && !bothVoted && React.createElement("div", { style: { fontSize: 12, color: "#A79BC0", textAlign: "center" } },
                "En attente de ",
                partnerName || "ton/ta partenaire",
                "...")));
    }
    function renderTuPrefere() {
        const tp = data.tuprefere;
        if (!tp)
            return React.createElement("div", { style: { padding: 20, color: "#A79BC0", fontSize: 13 } }, "Chargement...");
        const [optA, optB] = TU_PREFERES[tp.currentIndex];
        const myVote = tp.votes[mySlot];
        const bothVoted = (tp.votes.A === 0 || tp.votes.A === 1) && (tp.votes.B === 0 || tp.votes.B === 1);
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14, padding: "4px 4px 20px" } },
            React.createElement("div", { style: { fontSize: 11, color: "#A79BC0", textAlign: "center" } }, "Tu pr\u00E9f\u00E8res..."),
            React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
                React.createElement("div", { className: "duo-card", onClick: () => !myVote && myVote !== 0 && voteTuPrefere(0), style: { padding: 18, textAlign: "center", cursor: myVote === undefined || myVote === null ? "pointer" : "default",
                        borderColor: myVote === 0 ? "#FF8B66" : undefined, opacity: (myVote === 0 || myVote === null || myVote === undefined) ? 1 : 0.5 } }, optA),
                React.createElement("div", { style: { textAlign: "center", fontSize: 11, color: "#A79BC0" } }, "OU"),
                React.createElement("div", { className: "duo-card", onClick: () => !myVote && myVote !== 0 && voteTuPrefere(1), style: { padding: 18, textAlign: "center", cursor: myVote === undefined || myVote === null ? "pointer" : "default",
                        borderColor: myVote === 1 ? "#FF8B66" : undefined, opacity: (myVote === 1 || myVote === null || myVote === undefined) ? 1 : 0.5 } }, optB)),
            bothVoted && (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, alignItems: "center", marginTop: 4 } },
                React.createElement("div", { style: { fontSize: 13.5, fontWeight: 600 } }, tp.votes.A === tp.votes.B ? "Même choix ❤️" : "Vous êtes différents, et c'est ok 😄"),
                React.createElement("button", { className: "duo-btn-primary", onClick: nextTuPrefere }, "Carte suivante"))),
            (myVote === 0 || myVote === 1) && !bothVoted && (React.createElement("div", { style: { fontSize: 12, color: "#A79BC0", textAlign: "center" } },
                "En attente de ",
                partnerName || "ton/ta partenaire",
                "..."))));
    }
    function renderDefis() {
        const defis = data.defis || { log: [], current: null };
        const current = defis.current;
        const countDone = defis.log.length;
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14, padding: "4px 4px 20px" } },
            React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" } }, CATEGORIES.map((c) => (React.createElement("div", { key: c.key, className: "duo-pill" + (defiCat === c.key ? " active" : ""), onClick: () => setDefiCat(c.key) }, c.label)))),
            !current && (React.createElement("button", { className: "duo-btn-primary", onClick: () => drawDefi(defiCat) }, "Tirer un d\u00E9fi")),
            current && (React.createElement("div", { className: "duo-card", style: { padding: 20, display: "flex", flexDirection: "column", gap: 14 } },
                React.createElement("div", { style: { fontSize: 11, color: "#A79BC0", textTransform: "uppercase", letterSpacing: 1 } }, CATEGORIES.find((c) => c.key === current.category).label),
                React.createElement("div", { className: "duo-display", style: { fontSize: 17, lineHeight: 1.5 } }, current.text),
                React.createElement("div", { style: { display: "flex", gap: 10 } },
                    React.createElement("button", { className: "duo-btn-primary", style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }, onClick: completeDefi },
                        React.createElement(Check, { size: 15 }),
                        " Termin\u00E9"),
                    React.createElement("button", { className: "duo-btn-ghost", onClick: skipDefi },
                        React.createElement(X, { size: 15 }))))),
            React.createElement("div", { style: { fontSize: 12, color: "#A79BC0", textAlign: "center" } },
                "D\u00E9fis relev\u00E9s ensemble : ",
                countDone)));
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
