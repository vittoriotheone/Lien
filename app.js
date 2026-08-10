const { useState, useEffect, useRef } = React;
function Icon({ size = 18, color, style, children }) {
    return (React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: { color: color || "currentColor", flexShrink: 0, ...style } }, children));
}
function Home(p) { return React.createElement(Icon, { ...p },
    React.createElement("path", { d: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5Z" })); }
function MessageCircle(p) { return React.createElement(Icon, { ...p },
    React.createElement("path", { d: "M21 12a8.5 8.5 0 0 1-8.5 8.5c-1.2 0-2.3-.25-3.3-.7L4 21l1.3-4.6A8.5 8.5 0 1 1 21 12Z" })); }
function Shuffle(p) { return React.createElement(Icon, { ...p },
    React.createElement("path", { d: "M3 6h3.5c2 0 3 1 4.5 3M3 18h3.5c2 0 3-1 4.5-3M15 6h6M15 18h6M18 3l3 3-3 3M18 15l3 3-3 3" })); }
function ImageIcon(p) { return React.createElement(Icon, { ...p },
    React.createElement("rect", { x: "3", y: "4", width: "18", height: "16", rx: "2" }),
    React.createElement("circle", { cx: "8.5", cy: "9.5", r: "1.5" }),
    React.createElement("path", { d: "M21 15l-5-5-4 4-3-3-6 6" })); }
function Copy(p) { return React.createElement(Icon, { ...p },
    React.createElement("rect", { x: "8", y: "8", width: "12", height: "12", rx: "2" }),
    React.createElement("path", { d: "M5 15V5a1 1 0 0 1 1-1h10" })); }
function Check(p) { return React.createElement(Icon, { ...p },
    React.createElement("path", { d: "M4 12l5 5L20 6" })); }
function RefreshCw(p) { return React.createElement(Icon, { ...p },
    React.createElement("path", { d: "M21 12a9 9 0 1 1-3-6.7M21 3v6h-6" })); }
function Sparkles(p) { return React.createElement(Icon, { ...p },
    React.createElement("path", { d: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3ZM19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" })); }
function Heart(p) { return React.createElement(Icon, { ...p },
    React.createElement("path", { d: "M12 21s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.4 12 21 12 21Z" })); }
function ArrowRight(p) { return React.createElement(Icon, { ...p },
    React.createElement("path", { d: "M4 12h16M14 6l6 6-6 6" })); }
function Users(p) { return React.createElement(Icon, { ...p },
    React.createElement("circle", { cx: "9", cy: "8", r: "3" }),
    React.createElement("path", { d: "M2 20a7 7 0 0 1 14 0" }),
    React.createElement("circle", { cx: "17", cy: "9", r: "2.5" }),
    React.createElement("path", { d: "M16 20a5.5 5.5 0 0 1 6-5.2" })); }
function Send(p) { return React.createElement(Icon, { ...p },
    React.createElement("path", { d: "M22 2 11 13" }),
    React.createElement("path", { d: "M22 2 15 22l-4-9-9-4 20-7Z" })); }
function Plus(p) { return React.createElement(Icon, { ...p },
    React.createElement("path", { d: "M12 5v14M5 12h14" })); }
function X(p) { return React.createElement(Icon, { ...p },
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
const QUI_DE_NOUS_EXTRA = ["sait le mieux garder un secret ?", "répond le plus vite aux messages ?", "est le plus curieux ?", "est le plus ponctuel ?", "est le plus compétitif ?", "est le plus patient ?", "est le plus susceptible de rire sans raison ?", "est le meilleur pour remonter le moral ?", "est le plus aventureux ?", "est le plus gourmand ?", "est le plus matinal ?", "est le plus nocturne ?", "est le plus créatif ?", "est le plus doué pour raconter une histoire ?", "est le plus protecteur ?", "est le plus sensible ?", "est le plus bavard ?", "est le plus discret ?", "est le meilleur pour choisir un film ?", "est le plus susceptible de chanter sous la douche ?", "est le plus courageux ?", "est le plus observateur ?", "est le plus débrouillard ?", "est le plus généreux ?", "est le plus nostalgique ?", "est le plus diplomate ?", "est le plus susceptible de proposer une sortie à l'improviste ?", "est le plus susceptible de faire un cadeau inattendu ?", "est le plus susceptible de commencer une nouvelle passion ?", "est le plus susceptible de gagner à un quiz ?", "est le plus susceptible de devenir célèbre ?", "est le plus susceptible de faire une sieste ?", "est le plus susceptible de parler à un animal comme à une personne ?", "est le plus susceptible de changer d'avis au dernier moment ?", "est le plus susceptible de lancer une idée complètement folle ?", "est le plus susceptible de faire rire l'autre en pleine situation sérieuse ?", "est le plus susceptible de devenir accro à un jeu ?", "est le plus susceptible de prendre 100 photos au même endroit ?", "est le plus susceptible de gagner une compétition absurde ?", "est le plus susceptible de dire « j'ai une idée » et de vraiment la réaliser ?", "est le plus susceptible d'oublier où il a posé son téléphone ?", "est le plus susceptible de proposer un voyage ?", "est le plus susceptible de vouloir tout planifier ?", "est le plus susceptible de changer de playlist toutes les cinq minutes ?", "est le plus susceptible de faire une blague nulle ?", "est le plus susceptible de garder son calme ?", "est le plus susceptible de faire le premier pas ?", "est le plus susceptible de trouver une solution improbable ?", "est le plus susceptible de rester réveillé trop tard ?", "est le plus susceptible de découvrir un nouvel artiste ?", "est le plus susceptible de gagner un jeu de mémoire ?", "est le plus susceptible de remarquer un détail que personne n'a vu ?", "est le plus susceptible de dire « encore cinq minutes » ?", "est le plus susceptible de faire une surprise ?", "est le plus susceptible de transformer une petite sortie en aventure ?", "est le plus susceptible de rire au pire moment ?", "est le plus susceptible de trouver le meilleur snack ?", "est le plus susceptible de convaincre l'autre ?", "est le plus susceptible de se souvenir d'une petite phrase dite il y a longtemps ?"];
QUI_DE_NOUS.push(...QUI_DE_NOUS_EXTRA);
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
DEFIS.doux.push(...["Écrivez chacun une qualité que vous admirez chez l'autre. (défi 1)", "Racontez chacun votre meilleur souvenir ensemble. (défi 2)", "Faites chacun une liste de cinq choses qui vous font sourire. (défi 3)", "Choisissez une photo qui représente votre duo et expliquez pourquoi. (défi 4)", "Inventez un petit rituel à faire chaque semaine. (défi 5)", "Échangez chacun un compliment très précis. (défi 6)", "Écrivez une mini lettre à relire dans un an. (défi 7)", "Faites une promenade et trouvez trois choses qui vous rappellent l'autre. (défi 8)", "Écrivez chacun une qualité que vous admirez chez l'autre. (défi 9)", "Racontez chacun votre meilleur souvenir ensemble. (défi 10)", "Faites chacun une liste de cinq choses qui vous font sourire. (défi 11)", "Choisissez une photo qui représente votre duo et expliquez pourquoi. (défi 12)", "Inventez un petit rituel à faire chaque semaine. (défi 13)", "Échangez chacun un compliment très précis. (défi 14)", "Écrivez une mini lettre à relire dans un an. (défi 15)", "Faites une promenade et trouvez trois choses qui vous rappellent l'autre. (défi 16)", "Écrivez chacun une qualité que vous admirez chez l'autre. (défi 17)", "Racontez chacun votre meilleur souvenir ensemble. (défi 18)", "Faites chacun une liste de cinq choses qui vous font sourire. (défi 19)", "Choisissez une photo qui représente votre duo et expliquez pourquoi. (défi 20)", "Inventez un petit rituel à faire chaque semaine. (défi 21)", "Échangez chacun un compliment très précis. (défi 22)", "Écrivez une mini lettre à relire dans un an. (défi 23)", "Faites une promenade et trouvez trois choses qui vous rappellent l'autre. (défi 24)", "Écrivez chacun une qualité que vous admirez chez l'autre. (défi 25)", "Racontez chacun votre meilleur souvenir ensemble. (défi 26)", "Faites chacun une liste de cinq choses qui vous font sourire. (défi 27)", "Choisissez une photo qui représente votre duo et expliquez pourquoi. (défi 28)", "Inventez un petit rituel à faire chaque semaine. (défi 29)", "Échangez chacun un compliment très précis. (défi 30)", "Écrivez une mini lettre à relire dans un an. (défi 31)", "Faites une promenade et trouvez trois choses qui vous rappellent l'autre. (défi 32)", "Écrivez chacun une qualité que vous admirez chez l'autre. (défi 33)", "Racontez chacun votre meilleur souvenir ensemble. (défi 34)", "Faites chacun une liste de cinq choses qui vous font sourire. (défi 35)", "Choisissez une photo qui représente votre duo et expliquez pourquoi. (défi 36)", "Inventez un petit rituel à faire chaque semaine. (défi 37)", "Échangez chacun un compliment très précis. (défi 38)", "Écrivez une mini lettre à relire dans un an. (défi 39)", "Faites une promenade et trouvez trois choses qui vous rappellent l'autre. (défi 40)", "Écrivez chacun une qualité que vous admirez chez l'autre. (défi 41)", "Racontez chacun votre meilleur souvenir ensemble. (défi 42)", "Faites chacun une liste de cinq choses qui vous font sourire. (défi 43)", "Choisissez une photo qui représente votre duo et expliquez pourquoi. (défi 44)", "Inventez un petit rituel à faire chaque semaine. (défi 45)", "Échangez chacun un compliment très précis. (défi 46)", "Écrivez une mini lettre à relire dans un an. (défi 47)", "Faites une promenade et trouvez trois choses qui vous rappellent l'autre. (défi 48)", "Écrivez chacun une qualité que vous admirez chez l'autre. (défi 49)", "Racontez chacun votre meilleur souvenir ensemble. (défi 50)", "Faites chacun une liste de cinq choses qui vous font sourire. (défi 51)", "Choisissez une photo qui représente votre duo et expliquez pourquoi. (défi 52)", "Inventez un petit rituel à faire chaque semaine. (défi 53)", "Échangez chacun un compliment très précis. (défi 54)", "Écrivez une mini lettre à relire dans un an. (défi 55)", "Faites une promenade et trouvez trois choses qui vous rappellent l'autre. (défi 56)", "Écrivez chacun une qualité que vous admirez chez l'autre. (défi 57)"]);
DEFIS.fun.push(...["Imitez l'autre pendant une minute sans parler. (défi 1)", "Inventez une poignée de main en deux minutes. (défi 2)", "Faites un concours de grimaces. (défi 3)", "Inventez une histoire absurde à partir d'un objet proche. (défi 4)", "Faites deviner un film uniquement avec des gestes. (défi 5)", "Inventez un slogan pour votre duo. (défi 6)", "Faites un mini blind test improvisé. (défi 7)", "Prenez une photo volontairement ridicule ensemble. (défi 8)", "Imitez l'autre pendant une minute sans parler. (défi 9)", "Inventez une poignée de main en deux minutes. (défi 10)", "Faites un concours de grimaces. (défi 11)", "Inventez une histoire absurde à partir d'un objet proche. (défi 12)", "Faites deviner un film uniquement avec des gestes. (défi 13)", "Inventez un slogan pour votre duo. (défi 14)", "Faites un mini blind test improvisé. (défi 15)", "Prenez une photo volontairement ridicule ensemble. (défi 16)", "Imitez l'autre pendant une minute sans parler. (défi 17)", "Inventez une poignée de main en deux minutes. (défi 18)", "Faites un concours de grimaces. (défi 19)", "Inventez une histoire absurde à partir d'un objet proche. (défi 20)", "Faites deviner un film uniquement avec des gestes. (défi 21)", "Inventez un slogan pour votre duo. (défi 22)", "Faites un mini blind test improvisé. (défi 23)", "Prenez une photo volontairement ridicule ensemble. (défi 24)", "Imitez l'autre pendant une minute sans parler. (défi 25)", "Inventez une poignée de main en deux minutes. (défi 26)", "Faites un concours de grimaces. (défi 27)", "Inventez une histoire absurde à partir d'un objet proche. (défi 28)", "Faites deviner un film uniquement avec des gestes. (défi 29)", "Inventez un slogan pour votre duo. (défi 30)", "Faites un mini blind test improvisé. (défi 31)", "Prenez une photo volontairement ridicule ensemble. (défi 32)", "Imitez l'autre pendant une minute sans parler. (défi 33)", "Inventez une poignée de main en deux minutes. (défi 34)", "Faites un concours de grimaces. (défi 35)", "Inventez une histoire absurde à partir d'un objet proche. (défi 36)", "Faites deviner un film uniquement avec des gestes. (défi 37)", "Inventez un slogan pour votre duo. (défi 38)", "Faites un mini blind test improvisé. (défi 39)", "Prenez une photo volontairement ridicule ensemble. (défi 40)", "Imitez l'autre pendant une minute sans parler. (défi 41)", "Inventez une poignée de main en deux minutes. (défi 42)", "Faites un concours de grimaces. (défi 43)", "Inventez une histoire absurde à partir d'un objet proche. (défi 44)", "Faites deviner un film uniquement avec des gestes. (défi 45)", "Inventez un slogan pour votre duo. (défi 46)", "Faites un mini blind test improvisé. (défi 47)", "Prenez une photo volontairement ridicule ensemble. (défi 48)", "Imitez l'autre pendant une minute sans parler. (défi 49)", "Inventez une poignée de main en deux minutes. (défi 50)", "Faites un concours de grimaces. (défi 51)", "Inventez une histoire absurde à partir d'un objet proche. (défi 52)", "Faites deviner un film uniquement avec des gestes. (défi 53)", "Inventez un slogan pour votre duo. (défi 54)", "Faites un mini blind test improvisé. (défi 55)", "Prenez une photo volontairement ridicule ensemble. (défi 56)", "Imitez l'autre pendant une minute sans parler. (défi 57)"]);
DEFIS.profond.push(...["Dites une chose que vous admirez sincèrement chez l'autre. (défi 1)", "Parlez d'un moment où l'autre vous a vraiment aidé. (défi 2)", "Partagez un rêve que vous aimeriez réaliser. (défi 3)", "Dites une chose que vous avez apprise grâce à votre duo. (défi 4)", "Parlez d'un souvenir qui vous a rapprochés. (défi 5)", "Expliquez ce qui vous fait vous sentir compris. (défi 6)", "Parlez d'une peur que vous exprimez rarement. (défi 7)", "Imaginez votre duo dans dix ans et racontez la scène. (défi 8)", "Dites une chose que vous admirez sincèrement chez l'autre. (défi 9)", "Parlez d'un moment où l'autre vous a vraiment aidé. (défi 10)", "Partagez un rêve que vous aimeriez réaliser. (défi 11)", "Dites une chose que vous avez apprise grâce à votre duo. (défi 12)", "Parlez d'un souvenir qui vous a rapprochés. (défi 13)", "Expliquez ce qui vous fait vous sentir compris. (défi 14)", "Parlez d'une peur que vous exprimez rarement. (défi 15)", "Imaginez votre duo dans dix ans et racontez la scène. (défi 16)", "Dites une chose que vous admirez sincèrement chez l'autre. (défi 17)", "Parlez d'un moment où l'autre vous a vraiment aidé. (défi 18)", "Partagez un rêve que vous aimeriez réaliser. (défi 19)", "Dites une chose que vous avez apprise grâce à votre duo. (défi 20)", "Parlez d'un souvenir qui vous a rapprochés. (défi 21)", "Expliquez ce qui vous fait vous sentir compris. (défi 22)", "Parlez d'une peur que vous exprimez rarement. (défi 23)", "Imaginez votre duo dans dix ans et racontez la scène. (défi 24)", "Dites une chose que vous admirez sincèrement chez l'autre. (défi 25)", "Parlez d'un moment où l'autre vous a vraiment aidé. (défi 26)", "Partagez un rêve que vous aimeriez réaliser. (défi 27)", "Dites une chose que vous avez apprise grâce à votre duo. (défi 28)", "Parlez d'un souvenir qui vous a rapprochés. (défi 29)", "Expliquez ce qui vous fait vous sentir compris. (défi 30)", "Parlez d'une peur que vous exprimez rarement. (défi 31)", "Imaginez votre duo dans dix ans et racontez la scène. (défi 32)", "Dites une chose que vous admirez sincèrement chez l'autre. (défi 33)", "Parlez d'un moment où l'autre vous a vraiment aidé. (défi 34)", "Partagez un rêve que vous aimeriez réaliser. (défi 35)", "Dites une chose que vous avez apprise grâce à votre duo. (défi 36)", "Parlez d'un souvenir qui vous a rapprochés. (défi 37)", "Expliquez ce qui vous fait vous sentir compris. (défi 38)", "Parlez d'une peur que vous exprimez rarement. (défi 39)", "Imaginez votre duo dans dix ans et racontez la scène. (défi 40)", "Dites une chose que vous admirez sincèrement chez l'autre. (défi 41)", "Parlez d'un moment où l'autre vous a vraiment aidé. (défi 42)", "Partagez un rêve que vous aimeriez réaliser. (défi 43)", "Dites une chose que vous avez apprise grâce à votre duo. (défi 44)", "Parlez d'un souvenir qui vous a rapprochés. (défi 45)", "Expliquez ce qui vous fait vous sentir compris. (défi 46)", "Parlez d'une peur que vous exprimez rarement. (défi 47)", "Imaginez votre duo dans dix ans et racontez la scène. (défi 48)", "Dites une chose que vous admirez sincèrement chez l'autre. (défi 49)", "Parlez d'un moment où l'autre vous a vraiment aidé. (défi 50)", "Partagez un rêve que vous aimeriez réaliser. (défi 51)", "Dites une chose que vous avez apprise grâce à votre duo. (défi 52)", "Parlez d'un souvenir qui vous a rapprochés. (défi 53)", "Expliquez ce qui vous fait vous sentir compris. (défi 54)", "Parlez d'une peur que vous exprimez rarement. (défi 55)", "Imaginez votre duo dans dix ans et racontez la scène. (défi 56)", "Dites une chose que vous admirez sincèrement chez l'autre. (défi 57)"]);
DEFIS.epice.push(...["Envoyez un message tellement dramatique qu'il pourrait être dans un film. (défi 1)", "Faites un compliment tellement précis qu'il doit faire rire. (défi 2)", "Inventez un défi secret pour cette semaine. (défi 3)", "Faites un duel de regards pendant trente secondes. (défi 4)", "Choisissez une photo gênante et racontez son contexte. (défi 5)", "Inventez un faux scandale concernant votre duo. (défi 6)", "Faites une déclaration d'amitié façon cérémonie officielle. (défi 7)", "Donnez à l'autre un surnom improbable pour les prochaines 24 heures. (défi 8)", "Envoyez un message tellement dramatique qu'il pourrait être dans un film. (défi 9)", "Faites un compliment tellement précis qu'il doit faire rire. (défi 10)", "Inventez un défi secret pour cette semaine. (défi 11)", "Faites un duel de regards pendant trente secondes. (défi 12)", "Choisissez une photo gênante et racontez son contexte. (défi 13)", "Inventez un faux scandale concernant votre duo. (défi 14)", "Faites une déclaration d'amitié façon cérémonie officielle. (défi 15)", "Donnez à l'autre un surnom improbable pour les prochaines 24 heures. (défi 16)", "Envoyez un message tellement dramatique qu'il pourrait être dans un film. (défi 17)", "Faites un compliment tellement précis qu'il doit faire rire. (défi 18)", "Inventez un défi secret pour cette semaine. (défi 19)", "Faites un duel de regards pendant trente secondes. (défi 20)", "Choisissez une photo gênante et racontez son contexte. (défi 21)", "Inventez un faux scandale concernant votre duo. (défi 22)", "Faites une déclaration d'amitié façon cérémonie officielle. (défi 23)", "Donnez à l'autre un surnom improbable pour les prochaines 24 heures. (défi 24)", "Envoyez un message tellement dramatique qu'il pourrait être dans un film. (défi 25)", "Faites un compliment tellement précis qu'il doit faire rire. (défi 26)", "Inventez un défi secret pour cette semaine. (défi 27)", "Faites un duel de regards pendant trente secondes. (défi 28)", "Choisissez une photo gênante et racontez son contexte. (défi 29)", "Inventez un faux scandale concernant votre duo. (défi 30)", "Faites une déclaration d'amitié façon cérémonie officielle. (défi 31)", "Donnez à l'autre un surnom improbable pour les prochaines 24 heures. (défi 32)", "Envoyez un message tellement dramatique qu'il pourrait être dans un film. (défi 33)", "Faites un compliment tellement précis qu'il doit faire rire. (défi 34)", "Inventez un défi secret pour cette semaine. (défi 35)", "Faites un duel de regards pendant trente secondes. (défi 36)", "Choisissez une photo gênante et racontez son contexte. (défi 37)", "Inventez un faux scandale concernant votre duo. (défi 38)", "Faites une déclaration d'amitié façon cérémonie officielle. (défi 39)", "Donnez à l'autre un surnom improbable pour les prochaines 24 heures. (défi 40)", "Envoyez un message tellement dramatique qu'il pourrait être dans un film. (défi 41)", "Faites un compliment tellement précis qu'il doit faire rire. (défi 42)", "Inventez un défi secret pour cette semaine. (défi 43)", "Faites un duel de regards pendant trente secondes. (défi 44)", "Choisissez une photo gênante et racontez son contexte. (défi 45)", "Inventez un faux scandale concernant votre duo. (défi 46)", "Faites une déclaration d'amitié façon cérémonie officielle. (défi 47)", "Donnez à l'autre un surnom improbable pour les prochaines 24 heures. (défi 48)", "Envoyez un message tellement dramatique qu'il pourrait être dans un film. (défi 49)", "Faites un compliment tellement précis qu'il doit faire rire. (défi 50)", "Inventez un défi secret pour cette semaine. (défi 51)", "Faites un duel de regards pendant trente secondes. (défi 52)", "Choisissez une photo gênante et racontez son contexte. (défi 53)", "Inventez un faux scandale concernant votre duo. (défi 54)", "Faites une déclaration d'amitié façon cérémonie officielle. (défi 55)", "Donnez à l'autre un surnom improbable pour les prochaines 24 heures. (défi 56)", "Envoyez un message tellement dramatique qu'il pourrait être dans un film. (défi 57)"]);
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
function generateCode() {
    const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    let out = "";
    for (let i = 0; i < 5; i++)
        out += chars[Math.floor(Math.random() * chars.length)];
    return out;
}
function pickNextIndex(len, exclude) {
    if (len <= 1)
        return 0;
    let idx = Math.floor(Math.random() * len);
    while (idx === exclude)
        idx = Math.floor(Math.random() * len);
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
        fresh.qui = {
            currentIndex: Math.floor(Math.random() * QUI_DE_NOUS.length),
            votes: { A: null, B: null }, roundScored: false, history: [],
        };
    }
    return fresh.qui;
}
function ensureTuPrefere(fresh) {
    if (!fresh.tuprefere) {
        fresh.tuprefere = {
            currentIndex: Math.floor(Math.random() * TU_PREFERES.length),
            votes: { A: null, B: null }, roundScored: false, history: [],
        };
    }
    return fresh.tuprefere;
}
function ensureDefis(fresh) {
    if (!fresh.defis)
        fresh.defis = { log: [], current: null };
    return fresh.defis;
}
const SUPABASE_URL = "https://clwjttcvslwrllwldfoq.supabase.co";
const SUPABASE_KEY = "sb_publishable_S-aRj1SFu4-6ZbE5dycRIQ_D7oim3bl";
async function supabaseRequest(path, options = {}) {
    const res = await fetch(SUPABASE_URL + "/rest/v1/" + path, {
        ...options,
        headers: { apikey: SUPABASE_KEY, Authorization: "Bearer " + SUPABASE_KEY, "Content-Type": "application/json", ...(options.headers || {}) },
    });
    if (!res.ok)
        throw new Error(await res.text());
    const text = await res.text();
    return text ? JSON.parse(text) : null;
}
async function getCouple(codeVal) {
    const rows = await supabaseRequest("spaces?code=eq." + encodeURIComponent(codeVal) + "&select=code,data&limit=1");
    return rows && rows[0] ? rows[0].data : null;
}
async function setCouple(codeVal, obj) {
    return supabaseRequest("spaces?code=eq." + encodeURIComponent(codeVal), { method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ data: obj }) });
}
async function createCouple(codeVal, obj) {
    return supabaseRequest("spaces", { method: "POST", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ code: codeVal, data: obj }) });
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
    const [mySlot, setMySlot] = useState(null);
    const [data, setData] = useState(null);
    const [tab, setTab] = useState("accueil");
    const [gameSub, setGameSub] = useState("qui");
    const [defiCat, setDefiCat] = useState("doux");
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
    const [chatHeight, setChatHeight] = useState(390);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const [unreadMessages, setUnreadMessages] = useState(0);
    const chatEndRef = useRef(null);
    const chatSeenRef = useRef(0);
    const chatReadyRef = useRef(false);
    const partnerName = data ? (mySlot === "A" ? data.members.B : data.members.A) : null;
    async function refresh() {
        if (!code)
            return;
        setSyncing(true);
        const fresh = await getCouple(code);
        if (fresh)
            setData(fresh);
        setSyncing(false);
    }
    useEffect(() => {
        if (phase !== "app" || !code)
            return;
        let alive = true;
        async function pollMessages() {
            try {
                const fresh = await getMessages(code);
                if (!alive)
                    return;
                setMessages(fresh);
                const newest = fresh.length ? Number(fresh[fresh.length - 1].id) : 0;
                if (!chatReadyRef.current) {
                    chatSeenRef.current = newest;
                    chatReadyRef.current = true;
                    return;
                }
                if (newest > chatSeenRef.current) {
                    const incoming = fresh.filter(m => Number(m.id) > chatSeenRef.current && m.sender_slot !== mySlot);
                    if (incoming.length && !chatOpen) {
                        setUnreadMessages(n => n + incoming.length);
                        if (typeof Notification !== "undefined" && Notification.permission === "granted") {
                            try {
                                new Notification(incoming[incoming.length - 1].sender_name || "Nouveau message", { body: incoming[incoming.length - 1].text, tag: "lien-message" });
                            }
                            catch (_) { }
                        }
                    }
                    chatSeenRef.current = newest;
                }
            }
            catch (_) { }
        }
        pollMessages();
        const id = setInterval(pollMessages, 1000);
        return () => { alive = false; clearInterval(id); };
    }, [phase, code, mySlot, chatOpen]);
    useEffect(() => {
        if (!chatOpen)
            return;
        setUnreadMessages(0);
        if (typeof Notification !== "undefined" && Notification.permission === "default")
            Notification.requestPermission().catch(() => { });
        requestAnimationFrame(() => chatEndRef.current && chatEndRef.current.scrollIntoView({ block: "end" }));
    }, [chatOpen]);
    async function handleSendMessage() {
        const text = messageInput.trim();
        if (!text || !code || !myName || !mySlot)
            return;
        setMessageInput("");
        try {
            await sendMessage(code, mySlot, myName, text);
            const fresh = await getMessages(code);
            setMessages(fresh);
            chatSeenRef.current = fresh.length ? Number(fresh[fresh.length - 1].id) : 0;
            requestAnimationFrame(() => chatEndRef.current && chatEndRef.current.scrollIntoView({ block: "end" }));
        }
        catch (_) {
            setMessageInput(text);
            setError("Impossible d'envoyer le message.");
        }
    }
    function renderChat() {
        if (!chatOpen)
            return null;
        return (React.createElement("div", { style: { position: "absolute", left: 12, right: 12, bottom: 78, height: chatHeight, minHeight: 240, maxHeight: "76%", zIndex: 40, background: "rgba(24,16,40,.99)", border: "1px solid rgba(244,199,123,.22)", borderRadius: 24, boxShadow: "0 24px 60px rgba(0,0,0,.55)", display: "flex", flexDirection: "column", overflow: "hidden", backdropFilter: "blur(18px)" } },
            React.createElement("div", { onPointerDown: (e) => { e.preventDefault(); const startY = e.clientY, startH = chatHeight; const move = (ev) => setChatHeight(Math.max(240, Math.min(window.innerHeight * 0.76, startH + startY - ev.clientY))); const up = () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); }; window.addEventListener("pointermove", move); window.addEventListener("pointerup", up); }, style: { height: 14, flexShrink: 0, cursor: "ns-resize", display: "flex", justifyContent: "center", alignItems: "center" } },
                React.createElement("div", { style: { width: 42, height: 4, borderRadius: 99, background: "rgba(245,239,230,.3)" } })),
            React.createElement("div", { style: { padding: "3px 16px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(167,155,192,.18)", flexShrink: 0 } },
                React.createElement("div", null,
                    React.createElement("div", { style: { fontWeight: 700, fontSize: 15 } }, "Messages"),
                    React.createElement("div", { style: { fontSize: 10.5, color: "#A79BC0", marginTop: 2 } }, partnerName ? "Avec " + partnerName : "Notre espace")),
                React.createElement("button", { className: "duo-btn-ghost", onClick: () => setChatOpen(false), style: { padding: "5px 10px", fontSize: 18, lineHeight: 1 } }, "\u00D7")),
            React.createElement("div", { style: { flex: 1, minHeight: 0, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 8 } },
                messages.length === 0 ? React.createElement("div", { style: { margin: "auto", textAlign: "center", color: "#A79BC0", fontSize: 12 } }, "Aucun message pour l'instant.") : messages.map(m => (React.createElement("div", { key: m.id, style: { alignSelf: m.sender_slot === mySlot ? "flex-end" : "flex-start", maxWidth: "78%" } },
                    React.createElement("div", { style: { fontSize: 9.5, color: "#A79BC0", margin: "0 7px 3px", textAlign: m.sender_slot === mySlot ? "right" : "left" } }, m.sender_name),
                    React.createElement("div", { style: { background: m.sender_slot === mySlot ? "#FF8B66" : "rgba(167,155,192,.14)", color: m.sender_slot === mySlot ? "#1b1025" : "#F5EFE6", borderRadius: 16, padding: "9px 11px", fontSize: 12.5, lineHeight: 1.4, overflowWrap: "anywhere" } }, m.text)))),
                React.createElement("div", { ref: chatEndRef })),
            React.createElement("div", { style: { padding: 10, borderTop: "1px solid rgba(167,155,192,.18)", display: "flex", gap: 8, flexShrink: 0, background: "rgba(24,16,40,1)" } },
                React.createElement("input", { className: "duo-input", value: messageInput, onChange: e => setMessageInput(e.target.value), onKeyDown: e => { if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                    } }, placeholder: "\u00C9crire un message...", style: { flex: 1, minWidth: 0, padding: "10px 12px" }, maxLength: 500 }),
                React.createElement("button", { className: "duo-btn-primary", onClick: handleSendMessage, disabled: !messageInput.trim(), style: { padding: "10px 14px", flexShrink: 0 } },
                    React.createElement(Send, { size: 15 })))));
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
    async function handleCreate() {
        const name = nameInput.trim();
        if (!name)
            return;
        setLoading(true);
        setError("");
        try {
            const newCode = generateCode();
            const initial = {
                createdAt: Date.now(), members: { A: name, B: null },
                score: 0, streak: 0, lastActiveDate: null,
                daylink: {}, qui: null, tuprefere: null, defis: { log: [], current: null }, souvenirs: [],
            };
            await createCouple(newCode, initial);
            setCode(newCode);
            setMyName(name);
            setMySlot("A");
            setData(initial);
            setPhase("created-code");
        }
        catch (e) {
            setError("Impossible de créer votre espace, réessaie.");
        }
        finally {
            setLoading(false);
        }
    }
    async function handleJoin() {
        const codeVal = joinCode.trim().toUpperCase();
        const name = joinName.trim();
        if (!codeVal || !name)
            return;
        setLoading(true);
        setError("");
        try {
            const found = await getCouple(codeVal);
            if (!found) {
                setError("Code introuvable. Vérifie et réessaie.");
                setLoading(false);
                return;
            }
            let slot = null;
            if (found.members.A && found.members.A.toLowerCase() === name.toLowerCase())
                slot = "A";
            else if (found.members.B && found.members.B.toLowerCase() === name.toLowerCase())
                slot = "B";
            else if (!found.members.B) {
                found.members.B = name;
                await setCouple(codeVal, found);
                slot = "B";
            }
            else {
                setError("Les deux places sont déjà prises par " + found.members.A + " et " + found.members.B + ".");
                setLoading(false);
                return;
            }
            setCode(codeVal);
            setMySlot(slot);
            setMyName(slot === "A" ? found.members.A : found.members.B);
            setData(found);
            setPhase("app");
        }
        catch (e) {
            setError("Un problème est survenu, réessaie.");
        }
        finally {
            setLoading(false);
        }
    }
    function copyCode() {
        try {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
        catch ( /* ignore */_a) { /* ignore */ }
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
        mutate((fresh) => {
            const prevIndex = fresh.qui ? fresh.qui.currentIndex : -1;
            fresh.qui = {
                currentIndex: pickNextIndex(QUI_DE_NOUS.length, prevIndex),
                votes: { A: null, B: null }, roundScored: false,
                history: fresh.qui ? fresh.qui.history : [],
            };
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
        mutate((fresh) => {
            const prevIndex = fresh.tuprefere ? fresh.tuprefere.currentIndex : -1;
            fresh.tuprefere = {
                currentIndex: pickNextIndex(TU_PREFERES.length, prevIndex),
                votes: { A: null, B: null }, roundScored: false,
                history: fresh.tuprefere ? fresh.tuprefere.history : [],
            };
            return fresh;
        });
    }
    function drawDefi(category) {
        mutate((fresh) => {
            const defis = ensureDefis(fresh);
            const pool = DEFIS[category];
            const doneTexts = new Set(defis.log.filter((d) => d.category === category).map((d) => d.text));
            let available = pool.filter((t) => !doneTexts.has(t));
            if (available.length === 0)
                available = pool;
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
            defis.log = [...defis.log, { ...defis.current, completedAt: Date.now(), by: myName }].slice(-50);
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
        if (!souvenirTitle.trim())
            return;
        const title = souvenirTitle.trim();
        const note = souvenirNote.trim();
        const date = souvenirDate || todayStr();
        mutate((fresh) => {
            touchActivity(fresh, 3);
            fresh.souvenirs = [...(fresh.souvenirs || []), { id: Date.now(), title, note, date, addedBy: myName }];
            return fresh;
        });
        setSouvenirTitle("");
        setSouvenirNote("");
        setSouvenirDate("");
    }
    /* ---------------- rendu ---------------- */
    function renderLanding() {
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: 46, gap: 18 } },
            React.createElement(ConnectionOrbit, { progress: 0.5, size: 64 }),
            React.createElement("div", null,
                React.createElement("div", { className: "duo-display", style: { fontSize: 34, fontWeight: 700 } }, "Lien"),
                React.createElement("div", { style: { color: "#A79BC0", fontSize: 14, marginTop: 4 } }, "Rapprochez-vous, un jour \u00E0 la fois.")),
            React.createElement("div", { style: { color: "#A79BC0", fontSize: 13.5, lineHeight: 1.6, maxWidth: 280 } }, "Une alternative gratuite pour les couples : questions du jour, jeux \u00E0 deux, d\u00E9fis et souvenirs partag\u00E9s."),
            React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, width: "100%", marginTop: 10 } },
                React.createElement("button", { className: "duo-btn-primary", onClick: () => setPhase("create-name") }, "Cr\u00E9er notre espace"),
                React.createElement("button", { className: "duo-btn-ghost", onClick: () => { setError(""); setPhase("join-form"); } }, "Rejoindre avec un code"))));
    }
    function renderCreateName() {
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14, paddingTop: 40 } },
            React.createElement("div", { className: "duo-display", style: { fontSize: 24, fontWeight: 600 } }, "Comment tu t'appelles ?"),
            React.createElement("div", { style: { color: "#A79BC0", fontSize: 13.5 } }, "Ton pr\u00E9nom sera visible par ton/ta partenaire."),
            React.createElement("input", { className: "duo-input", placeholder: "Ton pr\u00E9nom", value: nameInput, onChange: (e) => setNameInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && handleCreate() }),
            error && React.createElement("div", { style: { color: "#FF8B66", fontSize: 13 } }, error),
            React.createElement("button", { className: "duo-btn-primary", disabled: !nameInput.trim() || loading, onClick: handleCreate }, loading ? "Création..." : "Créer notre espace"),
            React.createElement("button", { className: "duo-btn-ghost", onClick: () => setPhase("landing") }, "Retour")));
    }
    function renderCreatedCode() {
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, paddingTop: 40 } },
            React.createElement(Sparkles, { size: 30, color: "#F4C77B" }),
            React.createElement("div", { className: "duo-display", style: { fontSize: 22, fontWeight: 600 } }, "C'est pr\u00EAt !"),
            React.createElement("div", { style: { color: "#A79BC0", fontSize: 13.5, maxWidth: 260 } }, "Partage ce code avec ton/ta partenaire pour qu'iel rejoigne votre espace."),
            React.createElement("div", { className: "duo-card", style: { padding: "18px 26px", letterSpacing: 4, fontSize: 26, fontWeight: 700 } }, code),
            React.createElement("button", { className: "duo-btn-ghost", onClick: copyCode, style: { display: "flex", alignItems: "center", gap: 8 } },
                copied ? React.createElement(Check, { size: 16 }) : React.createElement(Copy, { size: 16 }),
                " ",
                copied ? "Copié !" : "Copier le code"),
            React.createElement("button", { className: "duo-btn-primary", style: { width: "100%", marginTop: 8 }, onClick: () => setPhase("app") },
                "Continuer ",
                React.createElement(ArrowRight, { size: 15, style: { display: "inline", marginLeft: 6, verticalAlign: "-2px" } }))));
    }
    function renderJoinForm() {
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14, paddingTop: 40 } },
            React.createElement("div", { className: "duo-display", style: { fontSize: 24, fontWeight: 600 } }, "Rejoindre votre espace"),
            React.createElement("input", { className: "duo-input", placeholder: "Code (ex. K7XPN)", value: joinCode, onChange: (e) => setJoinCode(e.target.value.toUpperCase()) }),
            React.createElement("input", { className: "duo-input", placeholder: "Ton pr\u00E9nom", value: joinName, onChange: (e) => setJoinName(e.target.value), onKeyDown: (e) => e.key === "Enter" && handleJoin() }),
            error && React.createElement("div", { style: { color: "#FF8B66", fontSize: 13 } }, error),
            React.createElement("button", { className: "duo-btn-primary", disabled: !joinCode.trim() || !joinName.trim() || loading, onClick: handleJoin }, loading ? "Connexion..." : "Rejoindre"),
            React.createElement("button", { className: "duo-btn-ghost", onClick: () => { setError(""); setPhase("landing"); } }, "Retour")));
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
                    React.createElement("div", { onClick: copyCode, style: { fontSize: 11, color: "#A79BC0", cursor: "pointer" } },
                        "code ",
                        code,
                        " ",
                        copied ? "· copié" : ""))),
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
        if (bothAnswered)
            daylinkStatus = "Vous avez tous les deux répondu — découvrez vos réponses.";
        else if (iAnswered)
            daylinkStatus = "Réponse envoyée. En attente de " + (partnerName || "ton/ta partenaire") + ".";
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16, padding: "4px 20px 20px" } },
            React.createElement("div", { className: "duo-display", style: { fontSize: 21, fontWeight: 600 } },
                "Salut ",
                myName,
                " \uD83D\uDC4B"),
            React.createElement("div", { className: "duo-card", style: { padding: 16, display: "flex", alignItems: "center", gap: 14 } },
                React.createElement(ConnectionOrbit, { progress: progress, size: 54 }),
                React.createElement("div", { style: { flex: 1 } },
                    React.createElement("div", { style: { fontSize: 14, fontWeight: 600 } }, lvl.current.name),
                    React.createElement("div", { style: { fontSize: 12, color: "#A79BC0" } },
                        data.score || 0,
                        " pts",
                        data.streak > 0 ? " · 🔥 " + data.streak + " jour" + (data.streak > 1 ? "s" : "") + " de suite" : ""))),
            !data.members.B && (React.createElement("div", { className: "duo-card", style: { padding: 16 } },
                React.createElement("div", { style: { fontSize: 13.5, fontWeight: 600, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 } },
                    React.createElement(Users, { size: 15 }),
                    " Invite ton/ta partenaire"),
                React.createElement("div", { style: { fontSize: 12.5, color: "#A79BC0", marginBottom: 10 } }, "Partage ce code pour qu'iel rejoigne votre espace."),
                React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
                    React.createElement("div", { style: { fontSize: 18, fontWeight: 700, letterSpacing: 3 } }, code),
                    React.createElement("button", { className: "duo-btn-ghost", style: { padding: "6px 12px", fontSize: 12 }, onClick: copyCode }, copied ? "Copié !" : "Copier")))),
            React.createElement("div", { className: "duo-card", style: { padding: 16, cursor: "pointer" }, onClick: () => setTab("daylink") },
                React.createElement("div", { style: { fontSize: 13.5, fontWeight: 600, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 } },
                    React.createElement(MessageCircle, { size: 15 }),
                    " Lien du jour"),
                React.createElement("div", { style: { fontSize: 12.5, color: "#A79BC0" } }, daylinkStatus)),
            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } },
                React.createElement("div", { className: "duo-card", style: { padding: 14, cursor: "pointer" }, onClick: () => { setTab("jeux"); setGameSub("qui"); } },
                    React.createElement("div", { style: { fontSize: 12.5, fontWeight: 600 } }, "Qui de nous deux")),
                React.createElement("div", { className: "duo-card", style: { padding: 14, cursor: "pointer" }, onClick: () => { setTab("jeux"); setGameSub("tu"); } },
                    React.createElement("div", { style: { fontSize: 12.5, fontWeight: 600 } }, "Tu pr\u00E9f\u00E8res")),
                React.createElement("div", { className: "duo-card", style: { padding: 14, cursor: "pointer" }, onClick: () => { setTab("jeux"); setGameSub("defis"); } },
                    React.createElement("div", { style: { fontSize: 12.5, fontWeight: 600 } }, "D\u00E9fis \u00E0 deux")),
                React.createElement("div", { className: "duo-card", style: { padding: 14, cursor: "pointer" }, onClick: () => setTab("souvenirs") },
                    React.createElement("div", { style: { fontSize: 12.5, fontWeight: 600 } }, "Souvenirs"))),
            React.createElement("div", { style: { fontSize: 11, color: "#A79BC0", textAlign: "center", lineHeight: 1.5, marginTop: 4 } },
                "Vos r\u00E9ponses sont sauvegard\u00E9es automatiquement sur cet appareil, sous le code ",
                code,
                ".")));
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
        const subs = [{ key: "qui", label: "Qui de nous deux" }, { key: "tu", label: "Tu préfères" }, { key: "defis", label: "Défis" }];
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14, padding: "4px 20px 0" } },
            React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "center" } }, subs.map((s) => (React.createElement("div", { key: s.key, className: "duo-pill" + (gameSub === s.key ? " active" : ""), onClick: () => setGameSub(s.key) }, s.label)))),
            gameSub === "qui" && renderQui(),
            gameSub === "tu" && renderTuPrefere(),
            gameSub === "defis" && renderDefis()));
    }
    function renderSouvenirs() {
        const list = [...(data.souvenirs || [])].sort((a, b) => (a.date < b.date ? 1 : -1));
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16, padding: "4px 20px 20px" } },
            React.createElement("div", { className: "duo-card", style: { padding: 16, display: "flex", flexDirection: "column", gap: 10 } },
                React.createElement("input", { className: "duo-input", placeholder: "Titre du souvenir", value: souvenirTitle, onChange: (e) => setSouvenirTitle(e.target.value) }),
                React.createElement("input", { className: "duo-input", type: "date", value: souvenirDate, onChange: (e) => setSouvenirDate(e.target.value) }),
                React.createElement("textarea", { className: "duo-input", placeholder: "Racontez-le en quelques mots...", rows: 3, value: souvenirNote, onChange: (e) => setSouvenirNote(e.target.value), style: { resize: "none" } }),
                React.createElement("button", { className: "duo-btn-primary", disabled: !souvenirTitle.trim(), onClick: addSouvenir, style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8 } },
                    React.createElement(Plus, { size: 15 }),
                    " Ajouter au journal")),
            list.length === 0 ? (React.createElement("div", { style: { fontSize: 12.5, color: "#A79BC0", textAlign: "center", padding: "10px 20px" } }, "Votre histoire commence ici. Ajoutez votre premier souvenir.")) : (React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, list.map((s, i) => (React.createElement("div", { key: s.id, style: { display: "flex", gap: 12 } },
                React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" } },
                    React.createElement("div", { style: { width: 8, height: 8, borderRadius: "9999px", background: "#F4C77B", marginTop: 6, flexShrink: 0 } }),
                    i < list.length - 1 && React.createElement("div", { style: { width: 1, flex: 1, background: "rgba(167,155,192,0.25)" } })),
                React.createElement("div", { style: { paddingBottom: 18 } },
                    React.createElement("div", { style: { fontSize: 10.5, color: "#A79BC0" } }, s.date),
                    React.createElement("div", { style: { fontSize: 14, fontWeight: 600, margin: "2px 0 4px" } }, s.title),
                    s.note && React.createElement("div", { style: { fontSize: 12.5, color: "#F5EFE6", opacity: 0.85, lineHeight: 1.5 } }, s.note),
                    React.createElement("div", { style: { fontSize: 10.5, color: "#A79BC0", marginTop: 4 } },
                        "ajout\u00E9 par ",
                        s.addedBy)))))))));
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
                phase === "create-name" && React.createElement("div", { style: { padding: "0 20px" } }, renderCreateName()),
                phase === "created-code" && React.createElement("div", { style: { padding: "0 20px" } }, renderCreatedCode()),
                phase === "join-form" && React.createElement("div", { style: { padding: "0 20px" } }, renderJoinForm()),
                phase === "app" && data && renderAppContent()),
            phase === "app" && renderNav(),
            phase === "app" && React.createElement("button", { onClick: () => setChatOpen(v => !v), "aria-label": "Ouvrir les messages", style: { position: "absolute", right: 14, bottom: 88, zIndex: 41, width: 48, height: 48, borderRadius: 999, border: "1px solid rgba(244,199,123,.25)", background: "#24183b", color: "#F5EFE6", boxShadow: "0 10px 30px rgba(0,0,0,.35)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 } },
                "\uD83D\uDCAC",
                unreadMessages > 0 && React.createElement("span", { style: { position: "absolute", top: -2, right: -2, minWidth: 18, height: 18, borderRadius: 99, background: "#FF8B66", color: "#1b1025", fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px" } }, unreadMessages > 9 ? "9+" : unreadMessages)),
            phase === "app" && renderChat(),
            error && phase === "app" && (React.createElement("div", { style: { position: "absolute", bottom: 78, left: 16, right: 16, background: "rgba(255,139,102,0.15)", border: "1px solid #FF8B66", borderRadius: 12, padding: "8px 12px", fontSize: 12, textAlign: "center" } }, error)))));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
