// js/stories.js – 24 festliche Geschichten & Gedichte
const STORIES = [
  {
    title: "Der erste Schnee",
    text: "In der Stille der Nacht fiel der erste Schnee des Jahres. Leise, fast zögerlich, als würde er fragen, ob er willkommen sei. Die Dächer wurden weiß, die Äste silbern. Ein Kind drückte sein Gesicht ans kalte Fenster und flüsterte: „Er ist da." Und mit dem Schnee kam das Gefühl, das kein Wort ganz fassen kann – das Gefühl, dass die schönste Zeit des Jahres begonnen hat."
  },
  {
    title: "Das Licht in der Dunkelheit",
    text: "Großmutter zündete immer als erste Kerze eine für die Hoffnung an. „Das Licht erinnert uns daran", sagte sie, während die kleine Flamme tanzend erwachte, „dass Dunkelheit nie das letzte Wort hat." Die Familie saß im Schein dieser einen Kerze, und obwohl draußen der Wind pfiff und die Nacht früh kam, war der Raum warm – nicht durch das Feuer allein, sondern durch das Zusammensein."
  },
  {
    title: "Zimtduft",
    text: "Es gibt einen Duft, der keine Erklärung braucht. Zimt und Butter und etwas Warmes aus dem Ofen – und plötzlich bist du wieder Kind, stehst auf Zehenspitzen an der Küchentheke und wartest darauf, dass die Plätzchen endlich kühl genug sind. Manche Erinnerungen reisen nicht durch Bilder oder Worte. Sie reisen durch Düfte. Und in der Adventszeit öffnen sie alle Türen auf einmal."
  },
  {
    title: "Der alte Tannenbaum",
    text: "Der Baum auf dem Dorfplatz war älter als die meisten Häuser um ihn herum. Jedes Jahr wurde er festlich geschmückt, und jedes Jahr versammelten sich die Menschen darunter. Kinder, die einst selbst als Kinder dabei gewesen waren, brachten nun ihre eigenen Kinder mit. Der Baum kannte sie alle. Er rauschte leise im Winterwind, als würde er sagen: „Willkommen zurück. Ich hab' auf euch gewartet.""
  },
  {
    title: "Brief an den Nikolaus",
    text: "Sie hatte den Brief schon dreimal neu geschrieben. Zu viele Wünsche, dann zu wenige, dann zu ordentliche Handschrift – das wirkte unecht. Schließlich schrieb sie einfach: „Lieber Nikolaus, dieses Jahr wünsche ich mir, dass alle, die ich liebe, gesund bleiben. Alles andere ist Zugabe." Sie faltete den Brief sorgfältig und legte ihn auf die Fensterbank. Draußen begann es zu schneien."
  },
  {
    title: "Die Strickjacke",
    text: "Oma strickte immer im Advent. Das Klappern der Nadeln war der Soundtrack der Dezembernachmittage. Jeder Masche ein Gedanke an die Person, für die das Stück bestimmt war. Wärme, eingewoben in Wolle. Wenn man die Jacke anzog, spürte man es irgendwie – dieses sorgfältige Denken an einen. Vielleicht ist das der eigentliche Sinn von Geschenken: nicht der Gegenstand, sondern die Zeit, die jemand für dich aufgewendet hat."
  },
  {
    title: "Sternengucker",
    text: "In klaren Dezembernächten sind die Sterne anders. Schärfer, näher, fast zudringlich hell. Der Junge lag auf dem Rücken im frischen Schnee und zählte sie. Bei siebenundzwanzig hörte er auf – nicht weil es keine mehr gab, sondern weil er einfach aufhörte zu zählen und anfing, nur noch zu staunen. Manchmal ist Staunen genug. Manchmal ist es alles."
  },
  {
    title: "Heiße Schokolade",
    text: "Es gibt eine Kunst, heiße Schokolade richtig zu machen. Nicht aus einem Päckchen, sondern langsam, mit echter Kuvertüre und warmer Milch, unter ständigem Rühren. Das Ergebnis ist dunkel, samtig, fast zu gut. Man hält die Tasse mit beiden Händen. Man trinkt langsam. Draußen schneit es vielleicht, oder es ist einfach kalt und grau – aber die Tasse macht einen eigenen kleinen Frieden."
  },
  {
    title: "Das Konzert",
    text: "Die Kinder sangen leise falsch, und es war das Schönste, was man sich vorstellen konnte. Ihre Stimmen zitterten ein bisschen vor Aufregung, die Texte kamen nicht ganz zusammen, und einer hatte seinen Einsatz verschlafen. Aber die Eltern in den Reihen davor hörten nicht die falschen Töne. Sie hörten ihre Kinder. Und in diesem Moment war die kleine Schulbühne der bedeutendste Konzertsaal der Welt."
  },
  {
    title: "Schneeball",
    text: "Es begann harmlos mit einem einzigen Schneeball. Wer ihn geworfen hatte, war hinterher nicht mehr festzustellen – alle beschuldigten alle, niemand bedauerte etwas. Die halbe Nachbarschaft stand draußen, Erwachsene warfen auf Kinder, Kinder auf Erwachsene, jemand traf aus Versehen den Hund, der daraufhin freudig mitmachte. Als es dunkel wurde, gingen alle lachend und durchgefroren nach Hause. Abendessen schmeckte an dem Abend besonders gut."
  },
  {
    title: "Adventskranz",
    text: "Sie hatten ihn wieder zusammen gebastelt – ungleichmäßig, mit zu viel Draht und einem Schleifenknoten, der schief saß. Aber er stand auf dem Tisch wie jedes Jahr, und die erste Kerze brannte ruhig und gleichmäßig. Vier Sonntage, vier Lichter. Ein alter Rhythmus, der zuverlässiger kam als jeder Kalender. Manche Traditionen sind nicht wegen ihrer Schönheit wertvoll, sondern wegen ihrer Beständigkeit."
  },
  {
    title: "Der Postbote im Dezember",
    text: "Im Dezember hat der Postbote es schwerer als im Rest des Jahres. Mehr Pakete, mehr Wege, mehr Klingeln, die nicht aufgemacht werden. Aber manchmal steht jemand an der Tür mit einem Lächeln und einem Stück selbstgebackenem Kuchen. „Für Sie, für die vielen Wege." Der Postbote nimmt es an, ein bisschen überrascht, ein bisschen gerührt. So reist ein kleines Stück Wärme durch die ganze Stadt."
  },
  {
    title: "Stille Nacht",
    text: "Es gibt eine Stunde kurz nach Mitternacht im Dezember, in der alles still ist. Die Stadt hat aufgehört zu reden. Der Schnee dämpft jeden Ton. Man steht am Fenster und sieht in die leere Straße, die im Lampenlicht golden schimmert, und spürt etwas, das schwer zu benennen ist – eine Vollständigkeit, als wäre dieser Moment genau richtig so. Nichts fehlt. Nichts ist zu viel. Nur Stille und Licht."
  },
  {
    title: "Das vergessene Geschenk",
    text: "Es lag ganz hinten im Schrank, hinter dem Wintermantel und einem Karton mit alten Fotos. Ein Päckchen in Geschenkpapier, von Hand beschriftet, undatiert. Er konnte sich nicht erinnern, wann er es eingepackt hatte oder für wen. Er öffnete es vorsichtig. Drinnen: ein Buch, das er einmal verschenken wollte und vergessen hatte. Er schlug die erste Seite auf und fing zu lesen an. Manchmal findet man Geschenke, die für einen selbst waren."
  },
  {
    title: "Fensterlichter",
    text: "In jedem Fenster der Straße brannte ein Licht. Unterschiedliche Formen – Sterne, Kerzen, bunte Ketten –, aber alle mit demselben Gedanken: dass man von draußen sehen soll, dass hier drinnen jemand ist. Dass die Dunkelheit nicht ganz dunkel ist. Die Frau, die spät von der Arbeit nach Hause ging, verlangsamte ihren Schritt und betrachtete jedes einzelne Fenster. Sie kam zehn Minuten später an als üblich. Es war das Beste, was sie an diesem Tag erlebt hatte."
  },
  {
    title: "Glühwein",
    text: "Er war zu heiß, wie immer. Man musste warten, die Tasse hin und her wechseln, dabei durch den Dampf die Lichter des Weihnachtsmarkts anschauen. Irgendwann konnte man trinken – würzig, süß, wärmend von innen. Um einen herum sprachen fremde Menschen, und es störte nicht. Im Gegenteil: Es gehörte dazu. Diese besondere Erlaubnis im Dezember, nah beieinander zu stehen, obwohl man sich nicht kennt."
  },
  {
    title: "Der Wunschzettel",
    text: "Das Mädchen hatte einen sehr langen Wunschzettel geschrieben. Auf der letzten Zeile, nach all den Spielsachen und Büchern, stand in kleiner Schrift: „und dass Papa nicht mehr so viel arbeitet." Ihre Mutter las den Zettel heimlich durch. Sie legte ihn sorgfältig zusammen und legte ihn zurück. Dann rief sie ihren Mann an. Er kam an dem Abend früher nach Hause als seit Monaten. Sie fragte nicht, warum. Sie wusste es."
  },
  {
    title: "Weihnachtsbäckerei",
    text: "Das Rezept war auf einem zerfledderten Zettel, die Schrift kaum noch lesbar. Aber sie kannte es auswendig – hatte es oft genug gemacht, immer dieselbe Reihenfolge, immer dieselbe Menge, immer dasselbe Ergebnis. Die Plätzchen sahen jedes Jahr gleich aus. Das war kein Zufall. Das war Absicht. Manche Dinge sollen sich nicht verändern. Manche Dinge sollen einfach sein wie sie immer waren."
  },
  {
    title: "Der Schneemann",
    text: "Er stand nicht gerade, sein Schal saß schief, und die Nase – eigentlich eine Karotte – war etwas zu weit rechts geraten. Aber er stand. Die Kinder betrachteten ihr Werk mit dem Ernst von Künstlern vor einer Vernissage. „Er ist gut geworden", sagte die Ältere schließlich. „Er ist der Beste", bestätigte der Kleine. Sie hatten recht. Er war der beste Schneemann, den es je gegeben hatte."
  },
  {
    title: "Heiligabend",
    text: "Die Stunden vor dem Abend haben eine eigene Qualität. Alles ist halbfertig, irgendjemand sucht die Schere, der Baum ist noch nicht geschmückt, in der Küche riecht es nach fast fertigem Essen. Und doch liegt etwas in der Luft, das man nicht erzeugen kann – eine Art gespannte Freude, ein Halten des Atems. Als würde man gemeinsam auf etwas warten, das man schon kennt und trotzdem jedes Mal neu entdeckt."
  },
  {
    title: "Das Geschenk ohne Schleife",
    text: "Es war nicht eingepackt. Kein Papier, keine Schleife, nicht mal ein Zettel dran. Einfach ein Buch auf dem Tisch, mit einem Lesezeichen drin. Er schlug es auf: Es war das Buch, über das er vor Wochen zufällig gesprochen hatte, beiläufig, kaum der Rede wert. Jemand hatte zugehört. Das war das eigentliche Geschenk – nicht das Buch, sondern dass jemand in dem Moment wirklich da gewesen war."
  },
  {
    title: "Der letzte Tag vor Weihnachten",
    text: "Alle waren ein bisschen müde und ein bisschen aufgeregt. Der Supermarkt war chaotisch, die Straßen voll, die To-do-Liste noch nicht fertig. Aber dann, auf dem Heimweg, lag Schnee – dicker, echter, neuer Schnee – und plötzlich war alles halb so schlimm. Man blieb kurz stehen, ließ eine Schneeflocke auf die Hand fallen, sah ihr beim Schmelzen zu. Manchmal braucht es nicht mehr als das."
  },
  {
    title: "Erster Weihnachtstag",
    text: "Das Haus war ruhiger als am Abend zuvor. Die Geschenke lagen geöffnet, der Baum brannte noch. Jemand schlief auf der Couch, jemand anderes las. In der Küche stand jemand und machte Kaffee, langsam, ohne Eile. Kein Plan, kein Muss. Nur dieser Tag, und die Menschen darin, und das Licht, das durch die Vorhänge fiel. Manchmal ist das Beste am Fest der Tag danach."
  },
  {
    title: "Bis nächstes Jahr",
    text: "Der Adventkalender war geleert, alle vierundzwanzig Türchen offen. Sie betrachtete ihn noch einen Moment, bevor sie ihn sorgsam zusammenfaltete und in die Schachtel legte – für nächstes Jahr. Nicht weggeworfen, nicht vergessen. Aufgehoben. Weil das Schöne daran nicht das Öffnen allein ist, sondern das Wissen: Es kommt wieder. Jedes Jahr. Verlässlich wie der erste Schnee, warm wie eine Kerze in der Dunkelheit."
  }
];
