/* ═══════════════════════════════════════════════════════════
   BALL KNOWLEDGE — GAME ENGINE
   Stages: Quiz (4) → Guess the Player (3) → Higher/Lower (3rounds→4players)
   Total players unlocked: 11
═══════════════════════════════════════════════════════════ */

'use strict';

// ══════════════════════════════════════════════
// QUESTION BANK
// ══════════════════════════════════════════════
const QUESTIONS = [
  // EASY
  { d:'E', q:'Which country won the 2022 FIFA World Cup?', opts:['France','Argentina','Brazil','Portugal'], ans:1 },
  { d:'E', q:'Which player has won the most Ballon d\'Or awards in history?', opts:['Cristiano Ronaldo','Lionel Messi','Johan Cruyff','Michel Platini'], ans:1 },
  { d:'E', q:'Which club is known as \'The Red Devils\'?', opts:['AC Milan','Bayern Munich','Manchester United','Liverpool'], ans:2 },
  { d:'E', q:'Who is the all-time top scorer in the UEFA Champions League?', opts:['Lionel Messi','Robert Lewandowski','Raul','Cristiano Ronaldo'], ans:3 },
  { d:'E', q:'Which country has won the most FIFA World Cups?', opts:['Germany','Italy','Brazil','Argentina'], ans:2 },
  { d:'E', q:'What is the name of Barcelona\'s home stadium?', opts:['Santiago Bernabeu','Camp Nou','Old Trafford','San Siro'], ans:1 },
  { d:'E', q:'How many players are on the field for one team in a standard football match?', opts:['10','11','12','9'], ans:1 },
  { d:'E', q:'Which club did Sir Alex Ferguson manage for 26 years?', opts:['Aberdeen','Arsenal','Manchester United','Chelsea'], ans:2 },
  { d:'E', q:'What colors do Real Madrid typically wear at home?', opts:['Red and Black','All White','Blue and Red','Yellow and Green'], ans:1 },
  { d:'E', q:'Which country hosted the 2014 FIFA World Cup?', opts:['South Africa','Brazil','Russia','Germany'], ans:1 },
  { d:'E', q:'Who is known as \'The Special One\'?', opts:['Pep Guardiola','Jurgen Klopp','Jose Mourinho','Carlo Ancelotti'], ans:2 },
  { d:'E', q:'Which player is famously known as \'CR7\'?', opts:['Christian Pulisic','Cristiano Ronaldo','Cristopher Nkunku','Cesc Fabregas'], ans:1 },
  { d:'E', q:'What is the standard length of a professional football match (excluding injury time)?', opts:['80 minutes','90 minutes','100 minutes','120 minutes'], ans:1 },
  { d:'E', q:'Which league is considered the top tier of English football?', opts:['La Liga','Serie A','Premier League','Ligue 1'], ans:2 },
  { d:'E', q:'Who won the Premier League with an \'Invincible\' season in 2003-04?', opts:['Manchester United','Chelsea','Arsenal','Manchester City'], ans:2 },
  { d:'E', q:'Which French player transferred to Real Madrid in the summer of 2024?', opts:['Antoine Griezmann','Kylian Mbappe','Ousmane Dembele','Paul Pogba'], ans:1 },
  { d:'E', q:'Which country is Diego Maradona from?', opts:['Brazil','Spain','Uruguay','Argentina'], ans:3 },
  { d:'E', q:'What is a \'Hat-trick\' in football?', opts:['3 assists in a game','3 goals in a game by one player','Winning 3 trophies in a season','Saving 3 penalties'], ans:1 },
  { d:'E', q:'Which club does Erling Haaland currently play for (as of 2024)?', opts:['Borussia Dortmund','Real Madrid','Manchester City','Bayern Munich'], ans:2 },
  { d:'E', q:'What does VAR stand for?', opts:['Video Assistant Referee','Virtual Action Replay','Visual Assistant Referee','Video Analysis Room'], ans:0 },
  // MODERATE
  { d:'M', q:'Which player scored the infamous \'Hand of God\' goal?', opts:['Pele','Diego Maradona','Lionel Messi','Johan Cruyff'], ans:1 },
  { d:'M', q:'Who was the first team to win the UEFA Champions League three times in a row in the modern era?', opts:['Bayern Munich','Barcelona','Real Madrid','AC Milan'], ans:2 },
  { d:'M', q:'Which club did Thierry Henry play for before joining Arsenal?', opts:['Monaco','Juventus','Barcelona','PSG'], ans:1 },
  { d:'M', q:'Which country won the first ever FIFA World Cup in 1930?', opts:['Brazil','Argentina','Uruguay','Italy'], ans:2 },
  { d:'M', q:'Who holds the record for the most goals in a single Premier League season (38 games)?', opts:['Alan Shearer','Mohamed Salah','Erling Haaland','Cristiano Ronaldo'], ans:2 },
  { d:'M', q:'Which manager won the Treble with Inter Milan in 2010?', opts:['Carlo Ancelotti','Roberto Mancini','Jose Mourinho','Antonio Conte'], ans:2 },
  { d:'M', q:'Which stadium is known as \'The Theatre of Dreams\'?', opts:['Anfield','Old Trafford','Stamford Bridge','Emirates Stadium'], ans:1 },
  { d:'M', q:'In what year did Leicester City miraculously win the Premier League?', opts:['2014-15','2015-16','2016-17','2017-18'], ans:1 },
  { d:'M', q:'Who is the all-time top goalscorer for the French national team?', opts:['Thierry Henry','Michel Platini','Olivier Giroud','Kylian Mbappe'], ans:2 },
  { d:'M', q:'Which club has won the most Serie A titles?', opts:['AC Milan','Inter Milan','Juventus','Napoli'], ans:2 },
  { d:'M', q:'Which African nation was the first to reach a World Cup semi-final?', opts:['Senegal','Ghana','Nigeria','Morocco'], ans:3 },
  { d:'M', q:'What is the nickname of the Italian national football team?', opts:['La Roja','Les Bleus','Die Mannschaft','Gli Azzurri'], ans:3 },
  { d:'M', q:'Who scored the winning goal for Germany in the 2014 World Cup Final?', opts:['Thomas Muller','Mario Gotze','Andre Schurrle','Toni Kroos'], ans:1 },
  { d:'M', q:'Which player won the World Cup Best Young Player award in 2018?', opts:['Jude Bellingham','Kylian Mbappe','Marcus Rashford','Vinicius Junior'], ans:1 },
  { d:'M', q:'Who was the most expensive football transfer of all time as of 2024?', opts:['Kylian Mbappe','Neymar','Philippe Coutinho','Joao Felix'], ans:1 },
  { d:'M', q:'Which club did Pep Guardiola manage immediately before joining Manchester City?', opts:['Barcelona','Bayern Munich','PSG','Juventus'], ans:1 },
  { d:'M', q:'Who holds the record for the most assists in Premier League history?', opts:['Cesc Fabregas','Kevin De Bruyne','Ryan Giggs','Frank Lampard'], ans:2 },
  { d:'M', q:'Who was the top scorer of the 2010 FIFA World Cup?', opts:['David Villa','Wesley Sneijder','Thomas Muller','Diego Forlan'], ans:2 },
  { d:'M', q:'Which club plays their home games at the Signal Iduna Park?', opts:['Bayern Munich','Schalke 04','Borussia Dortmund','Bayer Leverkusen'], ans:2 },
  { d:'M', q:'Which player is the all-time top scorer in World Cup history?', opts:['Pele','Ronaldo Nazario','Miroslav Klose','Just Fontaine'], ans:2 },
  { d:'M', q:'Which club famously came back from 4-0 down to beat PSG 6-1 in 2017?', opts:['Real Madrid','Barcelona','Bayern Munich','Liverpool'], ans:1 },
  { d:'M', q:'Who is the only goalkeeper to win the Ballon d\'Or?', opts:['Gianluigi Buffon','Manuel Neuer','Lev Yashin','Iker Casillas'], ans:2 },
  { d:'M', q:'Which city hosts the derby between Boca Juniors and River Plate?', opts:['Sao Paulo','Montevideo','Buenos Aires','Rio de Janeiro'], ans:2 },
  { d:'M', q:'What year was the Premier League founded?', opts:['1990','1992','1994','1988'], ans:1 },
  { d:'M', q:'Which player famously bit Giorgio Chiellini during the 2014 World Cup?', opts:['Diego Costa','Luis Suarez','Pepe','Sergio Ramos'], ans:1 },
  { d:'M', q:'Which team won the 2021 UEFA Champions League Final?', opts:['Manchester City','Chelsea','Bayern Munich','Real Madrid'], ans:1 },
  { d:'M', q:'Which player won the Ballon d\'Or in 2018, breaking the Messi-Ronaldo dominance?', opts:['Antoine Griezmann','Virgil van Dijk','Luka Modric','Robert Lewandowski'], ans:2 },
  { d:'M', q:'Which manager has won the most UEFA Champions League titles?', opts:['Zinedine Zidane','Pep Guardiola','Sir Alex Ferguson','Carlo Ancelotti'], ans:3 },
  { d:'M', q:'Which club won the first ever European Cup in 1956?', opts:['Real Madrid','AC Milan','Benfica','Celtic'], ans:0 },
  { d:'M', q:'Who was the all-time top scorer for Brazil (as of late 2023)?', opts:['Pele','Neymar','Ronaldo','Romario'], ans:1 },
  { d:'M', q:'Which country won Euro 2004 in a massive upset?', opts:['Denmark','Greece','Czech Republic','Turkey'], ans:1 },
  { d:'M', q:'Which team is known as \'The Old Lady\'?', opts:['Inter Milan','AS Roma','Juventus','Lazio'], ans:2 },
  // TOUGH
  { d:'T', q:'Who is the only player to have won the UEFA Champions League with three different clubs?', opts:['Cristiano Ronaldo','Clarence Seedorf','Zlatan Ibrahimovic','Samuel Eto\'o'], ans:1 },
  { d:'T', q:'Which player holds the record for goals in a single World Cup tournament?', opts:['Gerd Muller','Pele','Just Fontaine','Sandor Kocsis'], ans:2 },
  { d:'T', q:'What was the original name of the UEFA Champions League before 1992?', opts:['European Fairs Cup','European Cup Winners\' Cup','European Champion Clubs\' Cup','UEFA Super Cup'], ans:2 },
  { d:'T', q:'Who scored the fastest goal in UEFA Champions League history?', opts:['Roy Makaay','Paolo Maldini','Gilberto Silva','Jonas'], ans:0 },
  { d:'T', q:'Which player has scored the most direct free-kick goals in football history?', opts:['David Beckham','Juninho Pernambucano','Lionel Messi','Ronaldinho'], ans:1 },
  { d:'T', q:'Who was the first ever winner of the Ballon d\'Or in 1956?', opts:['Alfredo Di Stefano','Ferenc Puskas','Stanley Matthews','Raymond Kopa'], ans:2 },
  { d:'T', q:'Which player is the all-time top scorer of the Copa Libertadores?', opts:['Pele','Alberto Spencer','Fernando Morena','Juan Roman Riquelme'], ans:1 },
  { d:'T', q:'Who was the top scorer in the inaugural Premier League season (1992-93)?', opts:['Alan Shearer','Teddy Sheringham','Andy Cole','Les Ferdinand'], ans:1 },
  { d:'T', q:'What is the name of the stadium that hosted the 1950 World Cup Final?', opts:['Estadio Azteca','Wembley Stadium','Maracana','Estadio Centenario'], ans:2 },
  { d:'T', q:'Who is the only defender to win the FIFA World Player of the Year award?', opts:['Franz Beckenbauer','Fabio Cannavaro','Paolo Maldini','Lothar Matthaus'], ans:1 },
  { d:'T', q:'Which player holds the record for the most goals in a single calendar year (91 goals in 2012)?', opts:['Gerd Muller','Cristiano Ronaldo','Lionel Messi','Pele'], ans:2 },
  { d:'T', q:'Who was the first African player to win the Ballon d\'Or?', opts:['Didier Drogba','Samuel Eto\'o','George Weah','Roger Milla'], ans:2 },
  { d:'T', q:'Who holds the record for the most clean sheets in Premier League history?', opts:['Petr Cech','David James','Mark Schwarzer','David Seaman'], ans:0 },
  { d:'T', q:'Which manager led Nottingham Forest to back-to-back European Cups in 1979 and 1980?', opts:['Don Revie','Brian Clough','Bill Shankly','Bob Paisley'], ans:1 },
  { d:'T', q:'Who is the highest-scoring midfielder in Premier League history?', opts:['Steven Gerrard','Paul Scholes','Frank Lampard','Ryan Giggs'], ans:2 },
  { d:'T', q:'Who was the youngest player to ever appear in a World Cup match?', opts:['Pele','Norman Whiteside','Samuel Eto\'o','Femi Opabunmi'], ans:1 },
  { d:'T', q:'Which club has won the most UEFA Europa League titles?', opts:['Inter Milan','Liverpool','Sevilla','Juventus'], ans:2 },
  { d:'T', q:'Who was the first player to cost over £50 million in a transfer?', opts:['Zinedine Zidane','Kaka','Fernando Torres','Luis Figo'], ans:1 },
  { d:'T', q:'Which player scored five goals in nine minutes for Bayern Munich against Wolfsburg in 2015?', opts:['Thomas Muller','Arjen Robben','Robert Lewandowski','Mario Gomez'], ans:2 },
  { d:'T', q:'Who is the all-time top scorer of the UEFA European Championship?', opts:['Michel Platini','Cristiano Ronaldo','Alan Shearer','Antoine Griezmann'], ans:1 },
  { d:'T', q:'What was the name of the official match ball for the 2010 World Cup?', opts:['Teamgeist','Fevernova','Jabulani','Brazuca'], ans:2 },
  { d:'T', q:'Which player holds the record for the most red cards in La Liga history?', opts:['Pepe','Sergio Ramos','Fernando Hierro','Diego Simeone'], ans:1 },
  { d:'T', q:'Who won the Golden Ball at the 2002 FIFA World Cup?', opts:['Ronaldo','Rivaldo','Oliver Kahn','Ronaldinho'], ans:2 },
  { d:'T', q:'Which small European nation reached the quarter-finals of Euro 2016?', opts:['Wales','Iceland','Northern Ireland','Albania'], ans:1 },
  { d:'T', q:'Who holds the record for the most consecutive appearances in the Premier League?', opts:['Frank Lampard','Brad Friedel','David James','Wayne Bridge'], ans:1 },
  { d:'T', q:'Which Italian club is known as \'I Giallorossi\'?', opts:['Fiorentina','Napoli','AS Roma','AC Milan'], ans:2 },
  { d:'T', q:'Who holds the record for the fastest hat-trick in Premier League history?', opts:['Robbie Fowler','Sadio Mane','Sergio Aguero','Thierry Henry'], ans:1 },
  { d:'T', q:'Which player won the first ever Puskas Award in 2009?', opts:['Neymar','Zlatan Ibrahimovic','Cristiano Ronaldo','Wayne Rooney'], ans:2 },
];

// ══════════════════════════════════════════════
// FORMATION LAYOUTS
// slot: { label, row, col, type }
// ══════════════════════════════════════════════
const FORMATIONS = {
  '4-3-3':   { name:'4-3-3 (Holding)', tactic:'positional',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'LB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'RB',t:'DEF'}]}, {slots:[{l:'CM',t:'MID'},{l:'CDM',t:'MID'},{l:'CM',t:'MID'}]}, {slots:[{l:'LW',t:'ATT'},{l:'ST',t:'ATT'},{l:'RW',t:'ATT'}]} ] },
  '4-2-3-1': { name:'4-2-3-1 (Wide)', tactic:'gegenpressing',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'LB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'RB',t:'DEF'}]}, {slots:[{l:'CDM',t:'MID'},{l:'CDM',t:'MID'}]}, {slots:[{l:'LAM',t:'MID'},{l:'CAM',t:'MID'},{l:'RAM',t:'MID'}]}, {slots:[{l:'ST',t:'ATT'}]} ] },
  '4-4-2':   { name:'4-4-2 (Classic)', tactic:'counter',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'LB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'RB',t:'DEF'}]}, {slots:[{l:'LM',t:'MID'},{l:'CM',t:'MID'},{l:'CM',t:'MID'},{l:'RM',t:'MID'}]}, {slots:[{l:'ST',t:'ATT'},{l:'ST',t:'ATT'}]} ] },
  '4-4-2d':  { name:'4-4-2 (Diamond)', tactic:'vertical',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'LB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'RB',t:'DEF'}]}, {slots:[{l:'CDM',t:'MID'}]}, {slots:[{l:'LM',t:'MID'},{l:'RM',t:'MID'}]}, {slots:[{l:'CAM',t:'MID'}]}, {slots:[{l:'ST',t:'ATT'},{l:'ST',t:'ATT'}]} ] },
  '4-3-2-1': { name:'4-3-2-1 (Xmas Tree)', tactic:'vertical',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'LB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'RB',t:'DEF'}]}, {slots:[{l:'CM',t:'MID'},{l:'CM',t:'MID'},{l:'CM',t:'MID'}]}, {slots:[{l:'CAM',t:'MID'},{l:'CAM',t:'MID'}]}, {slots:[{l:'ST',t:'ATT'}]} ] },
  '4-5-1':   { name:'4-5-1 (Flat)', tactic:'counter',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'LB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'RB',t:'DEF'}]}, {slots:[{l:'LM',t:'MID'},{l:'CM',t:'MID'},{l:'CDM',t:'MID'},{l:'CM',t:'MID'},{l:'RM',t:'MID'}]}, {slots:[{l:'ST',t:'ATT'}]} ] },
  '4-2-3-1n':{ name:'4-2-3-1 (Narrow)', tactic:'positional',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'LB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'RB',t:'DEF'}]}, {slots:[{l:'CDM',t:'MID'},{l:'CDM',t:'MID'}]}, {slots:[{l:'CAM',t:'MID'},{l:'CAM',t:'MID'},{l:'CAM',t:'MID'}]}, {slots:[{l:'ST',t:'ATT'}]} ] },
  '4-3-3a':  { name:'4-3-3 (Attacking)', tactic:'overload',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'LB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'RB',t:'DEF'}]}, {slots:[{l:'CM',t:'MID'},{l:'CAM',t:'MID'},{l:'CM',t:'MID'}]}, {slots:[{l:'LW',t:'ATT'},{l:'ST',t:'ATT'},{l:'RW',t:'ATT'}]} ] },
  '3-4-2-1': { name:'3-4-2-1 (Double 10s)', tactic:'gegenpressing',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'}]}, {slots:[{l:'LM',t:'MID'},{l:'CM',t:'MID'},{l:'CM',t:'MID'},{l:'RM',t:'MID'}]}, {slots:[{l:'CAM',t:'MID'},{l:'CAM',t:'MID'}]}, {slots:[{l:'ST',t:'ATT'}]} ] },
  '3-5-2':   { name:'3-5-2 (With CDM)', tactic:'vertical',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'}]}, {slots:[{l:'LWB',t:'DEF'},{l:'CM',t:'MID'},{l:'CDM',t:'MID'},{l:'CM',t:'MID'},{l:'RWB',t:'DEF'}]}, {slots:[{l:'ST',t:'ATT'},{l:'ST',t:'ATT'}]} ] },
  '3-4-3':   { name:'3-4-3 (Flat)', tactic:'overload',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'}]}, {slots:[{l:'LM',t:'MID'},{l:'CM',t:'MID'},{l:'CM',t:'MID'},{l:'RM',t:'MID'}]}, {slots:[{l:'LW',t:'ATT'},{l:'ST',t:'ATT'},{l:'RW',t:'ATT'}]} ] },
  '3-5-2f':  { name:'3-5-2 (Flat Mid)', tactic:'counter',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'}]}, {slots:[{l:'LWB',t:'DEF'},{l:'CM',t:'MID'},{l:'CM',t:'MID'},{l:'CM',t:'MID'},{l:'RWB',t:'DEF'}]}, {slots:[{l:'ST',t:'ATT'},{l:'ST',t:'ATT'}]} ] },
  '5-3-2':   { name:'5-3-2', tactic:'counter',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'LWB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'RWB',t:'DEF'}]}, {slots:[{l:'CM',t:'MID'},{l:'CDM',t:'MID'},{l:'CM',t:'MID'}]}, {slots:[{l:'ST',t:'ATT'},{l:'ST',t:'ATT'}]} ] },
  '5-4-1':   { name:'5-4-1', tactic:'counter',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'LWB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'RWB',t:'DEF'}]}, {slots:[{l:'LM',t:'MID'},{l:'CM',t:'MID'},{l:'CM',t:'MID'},{l:'RM',t:'MID'}]}, {slots:[{l:'ST',t:'ATT'}]} ] },
  '3-4-3d':  { name:'3-4-3 (Diamond)', tactic:'positional',
    rows:[ {slots:[{l:'GK',t:'GK'}]}, {slots:[{l:'CB',t:'DEF'},{l:'CB',t:'DEF'},{l:'CB',t:'DEF'}]}, {slots:[{l:'CDM',t:'MID'}]}, {slots:[{l:'LM',t:'MID'},{l:'RM',t:'MID'}]}, {slots:[{l:'CAM',t:'MID'}]}, {slots:[{l:'LW',t:'ATT'},{l:'ST',t:'ATT'},{l:'RW',t:'ATT'}]} ] },
};

// ══════════════════════════════════════════════
// TACTICAL SYNERGY MAP
// ══════════════════════════════════════════════
const SYNERGY = {
  positional: {
    bonus: ['Advanced Playmaker','Sweeper Keeper','Ball-Playing Defender','Inverted Full-back','Deep Playmaker','Wide Playmaker','False 9','Ball-Playing Keeper','Wingback Creator'],
    penalty: ['Traditional Keeper','Shot Stopper','Target Man','Ball-Winning Midfielder','Aggressive Stopper']
  },
  gegenpressing: {
    bonus: ['Box-to-Box Engine','Aggressive Stopper','Inside Forward','Attacking Wingback','Ball-Winning Midfielder','False 9','Ball-Playing Keeper'],
    penalty: ['Deep Playmaker','Traditional Keeper','Shot Stopper','Deep-Lying Anchor']
  },
  counter: {
    bonus: ['Stopper','Target Man','Winger','Attacking Wingback','Ball-Winning Midfielder','Defensive Full-back','Shot Stopper'],
    penalty: ['Sweeper Keeper','Inverted Full-back','Advanced Playmaker','Ball-Playing Defender']
  },
  vertical: {
    bonus: ['Advanced Playmaker','Deep Playmaker','False 9','Inside Forward','Wingback Creator','Wide Playmaker','Ball-Playing Defender'],
    penalty: ['Traditional Keeper','Target Man','Ball-Winning Midfielder','Stopper']
  },
  overload: {
    bonus: ['Inside Forward','Winger','Wide Playmaker','Attacking Wingback','Wingback Creator','Box-to-Box Engine','Ball-Playing Keeper'],
    penalty: ['Target Man','Stopper','Deep-Lying Anchor','Defensive Full-back']
  }
};

// ══════════════════════════════════════════════
// FORMATION COMPATIBILITY
// ══════════════════════════════════════════════
const FORMATION_GROUPS = {
  '4-3-3':   ['4-3-3','4-3-3a','4-2-3-1','4-2-3-1n'],
  '4-2-3-1': ['4-2-3-1','4-2-3-1n','4-3-3','4-5-1'],
  '4-4-2':   ['4-4-2','4-4-2d','4-5-1','4-3-2-1'],
  '4-4-2d':  ['4-4-2d','4-4-2','4-3-2-1'],
  '4-3-2-1': ['4-3-2-1','4-4-2d','4-2-3-1'],
  '4-5-1':   ['4-5-1','4-4-2','4-2-3-1'],
  '4-2-3-1n':['4-2-3-1n','4-2-3-1','4-3-3'],
  '4-3-3a':  ['4-3-3a','4-3-3','3-4-3'],
  '3-4-2-1': ['3-4-2-1','3-4-3','3-5-2'],
  '3-5-2':   ['3-5-2','3-5-2f','5-3-2','3-4-2-1'],
  '3-4-3':   ['3-4-3','3-4-3d','3-4-2-1','4-3-3a'],
  '3-5-2f':  ['3-5-2f','3-5-2','5-4-1','5-3-2'],
  '5-3-2':   ['5-3-2','5-4-1','3-5-2f'],
  '5-4-1':   ['5-4-1','5-3-2','3-5-2f'],
  '3-4-3d':  ['3-4-3d','3-4-3','4-3-3'],
};

// ══════════════════════════════════════════════
// GAME STATE
// ══════════════════════════════════════════════
let state = {
  squad: [],           // 11 unlocked players
  usedPlayerNames: new Set(), // track all players ever assigned to avoid repeats
  stage: 0,           // 0=quiz,1=guess,2=hol
  // Quiz
  quizQPool: [],
  quizQNum: 0,        // 0-3
  quizLastCorrect: false,
  // Guess
  guessRound: 0,      // 0-2
  // HoL
  holRound: 0,        // 0-3  (4 rounds, each gives 1 player)
  holStreak: 0,
  holInRound: 0,      // guesses within current round
  holBase: null,
  holChal: null,
  holStat: null,
  holRoundWon: false,
  holPlayersThisRound: 0,
  // Builder
  formation: '4-3-3',
  tactic: 'positional',
  placedSlots: {},    // slotIndex → playerIndex
  selectedBenchItem: null,
  // Timer
  timerInterval: null,
};

// ══════════════════════════════════════════════
// UTILITY
// ══════════════════════════════════════════════
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function updateSquadMinis() {
  ['squad-mini-quiz','squad-mini-guess','squad-mini-hol'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '';
    for (let i = 0; i < 11; i++) {
      const dot = document.createElement('div');
      dot.className = 'squad-mini-dot' + (state.squad[i] ? ' filled' : '');
      if (state.squad[i]) {
        const p = state.squad[i];
        dot.textContent = p.name.split(' ').map(w=>w[0]).join('').slice(0,2);
        dot.title = p.name;
      }
      el.appendChild(dot);
    }
  });
}

function getRatingClass(r) {
  if (r >= 88) return 'elite';
  if (r >= 80) return 'good';
  if (r >= 70) return 'avg';
  return 'poor';
}

// ══════════════════════════════════════════════
// LANDING → START
// ══════════════════════════════════════════════
function startGame() {
  state = {
    squad:[], usedPlayerNames: new Set(), stage:0,
    quizQPool:[], quizQNum:0, quizLastCorrect:false,
    guessRound:0,
    holRound:0, holStreak:0, holInRound:0,
    holBase:null, holChal:null, holStat:null,
    holRoundWon:false, holPlayersThisRound:0,
    formation:'4-3-3', tactic:'positional',
    placedSlots:{}, selectedBenchItem:null,
    timerInterval:null
  };
  showStageIntro(1,
    'QUIZ ROUND',
    'Answer 4 football trivia questions. Each correct answer lets you handpick your player. Wrong? You still get one — but fate decides.',
    [
      { cls:'correct', icon:'✓', text:'Correct → Choose from 50 players' },
      { cls:'wrong',   icon:'✗', text:'Wrong → Random player (OVR < 80)' }
    ],
    () => startQuiz()
  );
}

// ══════════════════════════════════════════════
// STAGE INTRO
// ══════════════════════════════════════════════
let _introCb = null;
function showStageIntro(num, title, desc, rewards, cb) {
  _introCb = cb;
  document.getElementById('intro-badge').textContent = `STAGE ${num}`;
  document.getElementById('intro-title').textContent = title;
  document.getElementById('intro-desc').textContent = desc;
  const rw = document.getElementById('intro-reward');
  rw.innerHTML = rewards.map(r =>
    `<div class="reward-item ${r.cls}"><span class="reward-icon">${r.icon}</span><span>${r.text}</span></div>`
  ).join('');
  showScreen('stage-intro');
}

function dismissIntro() {
  if (_introCb) { _introCb(); _introCb = null; }
}

// ══════════════════════════════════════════════
// STAGE 1 — QUIZ
// ══════════════════════════════════════════════
function startQuiz() {
  // Build question pool: Q1=Easy, Q2=E/M, Q3=M, Q4=M/T
  const easy = shuffle(QUESTIONS.filter(q=>q.d==='E'));
  const mod  = shuffle(QUESTIONS.filter(q=>q.d==='M'));
  const tough= shuffle(QUESTIONS.filter(q=>q.d==='T'));
  state.quizQPool = [
    easy[0],
    easy[1] || mod[0],
    mod[0],
    mod[1]||tough[0]
  ];
  state.quizQNum = 0;
  showScreen('screen-quiz');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  showScreen('screen-quiz');
  const num = state.quizQNum;
  const q = state.quizQPool[num];
  updateSquadMinis();
  document.getElementById('q-counter').textContent = `Q ${num+1} / 4`;

  // Difficulty pips
  const labels = ['E','E','M','T'];
  const names = ['EASY','EASY','MODERATE','TOUGH'];
  const diffCols = { E:'easy', M:'moderate', T:'tough' };
  for (let i=0;i<4;i++) {
    const pip = document.getElementById(`diff-${i}`);
    pip.className = 'diff-pip' + (i <= num ? ` active ${diffCols[state.quizQPool[i].d]}` : '');
  }
  document.getElementById('diff-label').textContent = names[num];

  document.getElementById('question-text').textContent = q.q;

  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span>${opt}`;
    btn.onclick = () => handleQuizAnswer(i, q.ans, btn);
    grid.appendChild(btn);
  });

  // Timer bar
  startTimer(20, () => handleQuizAnswer(-1, q.ans, null));
}

function startTimer(seconds, onExpire) {
  clearInterval(state.timerInterval);
  const bar = document.getElementById('timer-bar');
  bar.style.transition = 'none';
  bar.style.width = '100%';
  let remaining = seconds;
  setTimeout(() => {
    bar.style.transition = `width ${seconds}s linear`;
    bar.style.width = '0%';
  }, 50);
  state.timerInterval = setInterval(() => {
    remaining -= 0.1;
    if (remaining <= 0) {
      clearInterval(state.timerInterval);
      onExpire();
    }
  }, 100);
}

function handleQuizAnswer(chosen, correct, clickedBtn) {
  clearInterval(state.timerInterval);
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach((b,i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('correct');
    else if (b === clickedBtn) b.classList.add('wrong');
  });

  const isCorrect = chosen === correct;
  state.quizLastCorrect = isCorrect;

  setTimeout(() => {
    showPlayerSelect(isCorrect, () => {
      state.quizQNum++;
      if (state.quizQNum < 4) {
        renderQuizQuestion();
      } else {
        // Move to Stage 2
        showStageIntro(2,
          'GUESS THE PLAYER',
          'Attributes and rating are revealed. Identify the mystery player from four choices. Elite knowledge = elite reward.',
          [
            { cls:'correct', icon:'✓', text:'Correct → Player with OVR 85+' },
            { cls:'wrong',   icon:'✗', text:'Wrong → Random player (OVR < 80)' }
          ],
          () => startGuess()
        );
      }
    });
  }, 900);
}

// ══════════════════════════════════════════════
// PLAYER SELECT OVERLAY
// ══════════════════════════════════════════════
let _playerSelectCb = null;
let _playerSelectTimeout = null;

// Returns players from a pool that haven't been used yet
function getUnused(pool) {
  const filtered = pool.filter(p => !state.usedPlayerNames.has(p.name));
  // If somehow everyone in pool is used, fall back to the full pool
  return filtered.length > 0 ? filtered : pool;
}

// Adds a player to the squad and marks them as used
function assignPlayer(player) {
  state.usedPlayerNames.add(player.name);
  state.squad.push(player);
}

function showPlayerSelect(isCorrect, cb) {
  // Clear any pending auto-advance timeout from a previous wrong answer
  if (_playerSelectTimeout) { clearTimeout(_playerSelectTimeout); _playerSelectTimeout = null; }
  _playerSelectCb = cb;
  const status = document.getElementById('ps-status');
  const icon = document.getElementById('ps-status').querySelector('.ps-icon');
  const title = document.getElementById('ps-title');
  const hint = document.getElementById('ps-hint');

  if (isCorrect) {
    icon.className = 'ps-icon correct-icon';
    icon.textContent = '✓';
    title.textContent = 'Correct! Choose your player.';
    hint.textContent = 'Showing 50 players · Pick wisely — formation fit matters';
  } else {
    icon.className = 'ps-icon wrong-icon';
    icon.textContent = '✗';
    title.textContent = 'Wrong answer. A player has been assigned.';
    hint.textContent = 'OVR < 80 — sometimes you deserve what you get';
  }

  if (isCorrect) {
    const pool = getUnused(shuffle(playersDatabase)).slice(0, 50);
    renderPlayerGrid(pool, true);
    showScreen('screen-player-select');
  } else {
    // Use slice+sort copy so we don't mutate the original playersDatabase array
    const low = getUnused(playersDatabase.filter(p => p.overall_rating < 80));
    const sortedFallback = getUnused(playersDatabase.slice().sort((a,b) => a.overall_rating - b.overall_rating));
    const picked = low.length > 0 ? rand(low) : sortedFallback[0];
    assignPlayer(picked);
    renderPlayerGrid([picked], false);
    hint.textContent = `Assigned: ${picked.name} (${picked.overall_rating} OVR)`;
    showScreen('screen-player-select');
    _playerSelectTimeout = setTimeout(() => {
      _playerSelectTimeout = null;
      const storedCb = _playerSelectCb;
      _playerSelectCb = null;
      if (storedCb) storedCb();
    }, 2000);
  }
}

function renderPlayerGrid(players, selectable) {
  const grid = document.getElementById('player-grid');
  grid.innerHTML = '';
  players.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.style.animationDelay = `${i * 0.02}s`;
    const rc = getRatingClass(p.overall_rating);
    const attrs = Object.entries(p.attributes).map(([k,v]) =>
      `<div style="font-family:var(--font-ui);font-size:9px;color:var(--white-dim);letter-spacing:0.15em;font-weight:700">${k.toUpperCase()}<br><span style="font-family:var(--font-display);font-size:16px;color:var(--white)">${v}</span></div>`
    ).join('');
    card.innerHTML = `
      <div class="pc-rating ${rc}">${p.overall_rating}</div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-pos">${p.position}</div>
      <div class="pc-role">${p.chemistry_role}</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:4px">${attrs}</div>
    `;
    if (selectable) {
      card.onclick = () => {
        assignPlayer(p);
        updateSquadMinis();
        if (_playerSelectCb) { _playerSelectCb(); _playerSelectCb = null; }
      };
    }
    grid.appendChild(card);
  });
}

// ══════════════════════════════════════════════
// STAGE 2 — GUESS THE PLAYER
// ══════════════════════════════════════════════
function startGuess() {
  state.guessRound = 0;
  showScreen('screen-guess');
  renderGuessRound();
}

function renderGuessRound() {
  updateSquadMinis();
  const round = state.guessRound;
  document.getElementById('guess-counter').textContent = `RD ${round+1} / 3`;

  // Difficulty: Round 1 = distinctive (high unique stats), Round 2 = mid-tier, Round 3 = similar profiles
  let pool;
  if (round === 0) pool = getUnused(playersDatabase.filter(p => p.overall_rating >= 85));
  else if (round === 1) pool = getUnused(playersDatabase.filter(p => p.overall_rating >= 75 && p.overall_rating < 88));
  else pool = getUnused(playersDatabase.filter(p => p.overall_rating >= 70 && p.overall_rating < 84));

  const correct = rand(pool);
  // 3 decoys from same position
  const decoys = shuffle(playersDatabase.filter(p => p.position === correct.position && p.name !== correct.name)).slice(0, 3);
  const options = shuffle([correct, ...decoys]);

  // Render mystery card
  document.getElementById('mystery-pos').textContent = correct.position;
  document.getElementById('mystery-rating-val').textContent = correct.overall_rating;
  document.getElementById('mystery-nation').textContent = correct.nationality;

  const attrsEl = document.getElementById('mystery-attrs');
  attrsEl.innerHTML = Object.entries(correct.attributes).map(([k,v]) =>
    `<div class="mystery-attr"><span class="attr-label">${k.toUpperCase()}</span><span class="attr-val">${v}</span></div>`
  ).join('');

  const optsEl = document.getElementById('guess-options');
  optsEl.innerHTML = '';
  options.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'guess-opt';
    btn.textContent = p.name;
    btn.onclick = () => handleGuessAnswer(p.name === correct.name, btn, optsEl, correct);
    optsEl.appendChild(btn);
  });

  // Animate card
  const mc = document.getElementById('mystery-card');
  mc.style.animation = 'none';
  void mc.offsetWidth;
  mc.style.animation = 'slideUp 0.4s ease both';
}

function handleGuessAnswer(isCorrect, clickedBtn, optsEl, correctPlayer) {
  optsEl.querySelectorAll('.guess-opt').forEach(b => {
    b.disabled = true;
    if (b.textContent === correctPlayer.name) b.classList.add('correct');
    else if (b === clickedBtn && !isCorrect) b.classList.add('wrong');
  });

  let reward;
  if (isCorrect) {
    const pool = getUnused(playersDatabase.filter(p => p.overall_rating >= 85));
    reward = rand(pool);
  } else {
    const pool = getUnused(playersDatabase.filter(p => p.overall_rating < 80));
    reward = rand(pool) || rand(getUnused(playersDatabase));
  }

  setTimeout(() => {
    assignPlayer(reward);
    state.guessRound++;
    if (state.guessRound < 3) {
      renderGuessRound();
    } else {
      showStageIntro(3,
        'HIGHER OR LOWER',
        'Kevin De Bruyne: 94 Passing. Does Toni Kroos have a HIGHER or LOWER passing rating? Get 3 right in a row to unlock a quality player. 4 rounds total.',
        [
          { cls:'correct', icon:'🔥', text:'Streak of 3 → Handpick from top 40 players' },
          { cls:'wrong',   icon:'✗',  text:'Streak broken → Random player (OVR < 80)' }
        ],
        () => startHoL()
      );
    }
  }, 1000);
}

// ══════════════════════════════════════════════
// STAGE 3 — HIGHER OR LOWER
// ══════════════════════════════════════════════
// Stats to compare per position
const HOL_STATS = {
  GK:  ['reflexes','handling','positioning'],
  DEF: ['defending','pace','aerial'],
  MID: ['passing','vision','stamina'],
  ATT: ['finishing','dribbling','pace']
};

function startHoL() {
  state.holRound = 0;
  state.holStreak = 0;
  state.holInRound = 0;
  state.holRoundWon = false;
  showScreen('screen-hol');
  resetStreakPips();
  renderHoLPair();
}

function resetStreakPips() {
  [0,1,2].forEach(i => {
    document.getElementById(`sp-${i}`).className = 'streak-pip';
  });
  state.holStreak = 0;
}

function renderHoLPair() {
  updateSquadMinis();
  const round = state.holRound;
  document.getElementById('hol-round-label').textContent = `RD ${round+1} / 4`;

  // Difficulty: gap narrows each round
  // Round 1: gap ≥ 10, Round 2: gap 5-9, Round 3: gap 2-5
  const minGap = [8, 4, 2][Math.min(round, 2)];
  const maxGap = [25, 12, 6][Math.min(round, 2)];

  let attempts = 0;
  let base, chal, stat, baseVal, chalVal;
  do {
    const pos = rand(['GK','DEF','MID','ATT']);
    const statList = HOL_STATS[pos];
    stat = rand(statList);
    const pool = getUnused(playersDatabase).filter(p => p.position === pos && p.attributes[stat] !== undefined);
    if (pool.length < 2) continue;
    base = rand(pool);
    chal = rand(pool.filter(p => p.name !== base.name));
    if (!chal) continue;
    baseVal = base.attributes[stat];
    chalVal = chal.attributes[stat];
    attempts++;
  } while ((Math.abs(baseVal - chalVal) < minGap || Math.abs(baseVal - chalVal) > maxGap) && attempts < 100);

  state.holBase  = base;
  state.holChal  = chal;
  state.holStat  = stat;

  document.getElementById('hol-base-name').textContent   = base.name;
  document.getElementById('hol-base-val').textContent    = baseVal;
  document.getElementById('hol-base-nation').textContent = base.nationality;
  document.getElementById('hol-stat-name').textContent   = stat.toUpperCase();

  document.getElementById('hol-chal-name').textContent   = chal.name;
  document.getElementById('hol-chal-nation').textContent = chal.nationality;
  const chalValEl = document.getElementById('hol-chal-card').querySelector('.hol-stat-val');
  chalValEl.textContent = '?';
  chalValEl.classList.add('mystery');

  // Reset card flash
  document.getElementById('hol-base-card').className  = 'hol-card base-card';
  document.getElementById('hol-chal-card').className  = 'hol-card challenge-card';
  document.getElementById('hol-result').textContent   = '';

  // Enable buttons
  document.querySelectorAll('.btn-hol').forEach(b => b.disabled = false);
}

function holGuess(direction) {
  document.querySelectorAll('.btn-hol').forEach(b => b.disabled = true);
  const baseVal = state.holBase.attributes[state.holStat];
  const chalVal = state.holChal.attributes[state.holStat];
  const chalCard = document.getElementById('hol-chal-card');
  const chalValEl = chalCard.querySelector('.hol-stat-val');
  chalValEl.textContent = chalVal;
  chalValEl.classList.remove('mystery');

  const actualDirection = chalVal > baseVal ? 'higher' : chalVal < baseVal ? 'lower' : 'equal';
  const isCorrect = direction === actualDirection || actualDirection === 'equal';

  const resultEl = document.getElementById('hol-result');

  if (isCorrect) {
    chalCard.classList.add('flash-correct');
    state.holStreak++;
    document.getElementById(`sp-${state.holStreak-1}`).classList.add('hit');
    resultEl.style.color = 'var(--green-bright)';
    resultEl.textContent = chalVal === baseVal ? `EQUAL — ${chalVal}! Streak continues!` : `CORRECT! ${chalVal} is ${chalVal > baseVal ? 'higher' : 'lower'}!`;

    if (state.holStreak >= 3) {
      // Won the round
      state.holRoundWon = true;
      setTimeout(() => holRoundEnd(true), 1000);
      return;
    }
  } else {
    chalCard.classList.add('flash-wrong');
    document.getElementById(`sp-${state.holStreak}`).classList.add('miss');
    resultEl.style.color = 'var(--red)';
    resultEl.textContent = `WRONG! It was ${chalVal}. Streak broken!`;
    state.holRoundWon = false;
    setTimeout(() => holRoundEnd(false), 1200);
    return;
  }

  // Continue round
  setTimeout(() => {
    renderHoLPair();
  }, 1100);
}

function holRoundEnd(won) {
  const resultEl = document.getElementById('hol-result');
  if (won) {
    resultEl.textContent = '🔥 STREAK COMPLETE! Choose your reward player.';
    resultEl.style.color = 'var(--gold)';
    const pool = shuffle(getUnused(playersDatabase.filter(p => p.overall_rating >= 80))).slice(0, 40);
    setTimeout(() => {
      const ps = document.getElementById('ps-status');
      ps.querySelector('.ps-icon').textContent = '🔥';
      ps.querySelector('.ps-icon').className = 'ps-icon correct-icon';
      document.getElementById('ps-title').textContent = 'Streak! Pick your reward player.';
      document.getElementById('ps-hint').textContent = 'Top 40 players by rating · You earned it';
      renderPlayerGrid(pool, true);
      _playerSelectCb = () => {
        state.holRound++;
        resetStreakPips();
        state.holRoundWon = false;
        if (state.holRound < 4) {
          showScreen('screen-hol');
          renderHoLPair();
        } else {
          showBuilder();
        }
      };
      showScreen('screen-player-select');
    }, 800);
  } else {
    const low = getUnused(playersDatabase.filter(p => p.overall_rating < 80));
    const picked = rand(low) || rand(getUnused(playersDatabase));
    assignPlayer(picked);
    resultEl.textContent = `Round over. Assigned: ${picked.name} (${picked.overall_rating} OVR)`;
    setTimeout(() => {
      state.holRound++;
      resetStreakPips();
      state.holRoundWon = false;
      if (state.holRound < 4) {
        renderHoLPair();
      } else {
        showBuilder();
      }
    }, 2000);
  }
}

// ══════════════════════════════════════════════
// STAGE 4 — LINEUP BUILDER
// ══════════════════════════════════════════════
function showBuilder() {
  state.placedSlots = {};
  document.getElementById('formation-select').value = state.formation;
  document.getElementById('tactic-select').value = state.tactic;
  showScreen('screen-builder');
  renderBench();
  renderPitch();
}

function renderBench() {
  const list = document.getElementById('bench-list');
  list.innerHTML = '';
  state.squad.forEach((p, i) => {
    const item = document.createElement('div');
    const placed = Object.values(state.placedSlots).includes(i);
    item.className = 'bench-item' + (placed ? ' placed' : '');
    item.dataset.idx = i;
    item.innerHTML = `
      <span class="bench-rating">${p.overall_rating}</span>
      <div class="bench-info">
        <div class="bench-name">${p.name}</div>
        <div class="bench-pos">${p.position} · ${p.chemistry_role}</div>
      </div>
    `;
    if (!placed) {
      item.onclick = () => selectBenchItem(i, item);
    }
    list.appendChild(item);
  });
}

function selectBenchItem(idx, el) {
  document.querySelectorAll('.bench-item').forEach(b => b.style.borderColor = '');
  state.selectedBenchItem = idx;
  el.style.borderColor = 'var(--gold)';
}

function changeFormation() {
  state.formation = document.getElementById('formation-select').value;
  state.placedSlots = {};
  renderBench();
  renderPitch();
}

function renderPitch() {
  const formation = FORMATIONS[state.formation];
  const slotsEl = document.getElementById('pitch-slots');
  slotsEl.innerHTML = '';

  const totalRows = formation.rows.length;
  let slotIndex = 0;

  formation.rows.forEach((row, rowIdx) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'pitch-row';
    // Distribute rows vertically
    const topPct = ((rowIdx + 0.5) / totalRows) * 100;
    rowEl.style.cssText = `position:absolute;left:0;right:0;top:${topPct}%;transform:translateY(-50%);justify-content:space-around;display:flex;`;

    row.slots.forEach(slot => {
      const si = slotIndex++;
      const slotEl = document.createElement('div');
      slotEl.className = 'pitch-slot';
      slotEl.dataset.slotIdx = si;
      slotEl.dataset.slotType = slot.t;
      slotEl.dataset.slotLabel = slot.l;

      const placedPlayerIdx = state.placedSlots[si];
      const player = placedPlayerIdx !== undefined ? state.squad[placedPlayerIdx] : null;

      const disc = document.createElement('div');
      disc.className = 'slot-disc' + (player ? ' filled' : '');
      disc.textContent = player ? player.overall_rating : slot.l;

      const name = document.createElement('div');
      name.className = 'slot-name' + (player ? ' filled' : '');
      name.textContent = player ? player.name.split(' ').slice(-1)[0] : '';

      slotEl.appendChild(disc);
      slotEl.appendChild(name);

      slotEl.onclick = () => handleSlotClick(si, slot.t);

      // Tooltip
      if (player) {
        slotEl.onmouseenter = (e) => showTooltip(e, player);
        slotEl.onmouseleave = hideTooltip;
      }

      rowEl.appendChild(slotEl);
    });
    slotsEl.appendChild(rowEl);
  });
}

function handleSlotClick(slotIdx, slotType) {
  // If slot already filled, remove player
  if (state.placedSlots[slotIdx] !== undefined) {
    delete state.placedSlots[slotIdx];
    renderBench();
    renderPitch();
    return;
  }

  // If bench item selected, place it
  if (state.selectedBenchItem !== null) {
    // Check if already placed elsewhere
    const alreadyInSlot = Object.entries(state.placedSlots).find(([,v]) => v === state.selectedBenchItem);
    if (alreadyInSlot) delete state.placedSlots[alreadyInSlot[0]];
    state.placedSlots[slotIdx] = state.selectedBenchItem;
    state.selectedBenchItem = null;
    renderBench();
    renderPitch();
  }
}

function showTooltip(e, player) {
  const tt = document.getElementById('slot-tooltip');
  tt.style.display = 'block';
  tt.innerHTML = `
    <div class="tooltip-name">${player.name}</div>
    <div class="tooltip-rating">${player.overall_rating}</div>
    <div class="tooltip-role">${player.chemistry_role} · ${player.position}</div>
    <div style="margin-top:6px;font-size:11px;color:var(--white-dim)">
      ${Object.entries(player.attributes).map(([k,v])=>`${k}: ${v}`).join(' · ')}
    </div>
  `;
  positionTooltip(e);
  document.getElementById('pitch').onmousemove = positionTooltip;
}

function positionTooltip(e) {
  const tt = document.getElementById('slot-tooltip');
  const x = e.clientX + 12;
  const y = e.clientY - 10;
  const w = tt.offsetWidth;
  const h = tt.offsetHeight;
  tt.style.left = (x + w > window.innerWidth ? x - w - 24 : x) + 'px';
  tt.style.top  = (y + h > window.innerHeight ? y - h : y) + 'px';
}

function hideTooltip() {
  document.getElementById('slot-tooltip').style.display = 'none';
  document.getElementById('pitch').onmousemove = null;
}

// ══════════════════════════════════════════════
// SUBMIT LINEUP — SCORING ENGINE
// ══════════════════════════════════════════════
function submitLineup() {
  const formation = FORMATIONS[state.formation];
  const tactic = document.getElementById('tactic-select').value;

  // Build placed lineup array with slot types
  const allSlots = [];
  formation.rows.forEach(row => row.slots.forEach(s => allSlots.push(s.t)));
  const totalSlots = allSlots.length;

  // Get placed players with their slot types
  const placedEntries = Object.entries(state.placedSlots).map(([slotIdx, pIdx]) => ({
    slotType: allSlots[parseInt(slotIdx)],
    player: state.squad[pIdx]
  }));

  // ── 1. POSITIONAL DISCIPLINE (30 pts) ──
  let posScore = 30;
  const gkCount   = placedEntries.filter(e => e.slotType === 'GK').length;
  const filledGks = placedEntries.filter(e => e.slotType === 'GK' && e.player).length;
  if (filledGks !== 1) posScore -= 10;

  placedEntries.forEach(e => {
    if (!e.player) return;
    // Check position mismatch
    const pt = e.player.position;
    const st = e.slotType;
    if (st === 'GK' && pt !== 'GK') posScore -= 5;
    else if ((st === 'DEF' || st === 'CB' || st === 'LB' || st === 'RB' || st === 'LWB' || st === 'RWB') && pt !== 'DEF') posScore -= 5;
    else if ((st === 'MID' || st === 'CDM' || st === 'CAM' || st === 'CM' || st === 'LM' || st === 'RM' || st === 'LAM' || st === 'RAM') && pt !== 'MID') posScore -= 5;
    else if ((st === 'ATT' || st === 'ST' || st === 'LW' || st === 'RW') && pt !== 'ATT') posScore -= 5;
  });
  posScore = Math.max(0, posScore);

  // ── 2. TACTICAL SYNERGY (40 pts) ──
  const syn = SYNERGY[tactic];
  let tacScore = 0;
  const maxPerPlayer = 40 / 11;
  placedEntries.forEach(e => {
    if (!e.player) return;
    const role = e.player.chemistry_role;
    if (syn.bonus.includes(role))   tacScore += maxPerPlayer;
    else if (syn.penalty.includes(role)) tacScore += 0;
    else tacScore += maxPerPlayer * 0.5;
  });
  tacScore = Math.min(40, Math.round(tacScore));

  // ── 3. FORMATION FAMILIARITY (30 pts) ──
  const compatibles = FORMATION_GROUPS[state.formation] || [state.formation];
  let formScore = 0;
  placedEntries.forEach(e => {
    if (!e.player) return;
    const pf = e.player.best_formation;
    if (pf === state.formation) formScore += 2.7;
    else if (compatibles.some(cf => pf === cf)) formScore += 1;
  });
  formScore = Math.min(30, Math.round(formScore));

  const total = posScore + tacScore + formScore;

  showResults(total, posScore, tacScore, formScore);
}

// ══════════════════════════════════════════════
// RESULTS SCREEN
// ══════════════════════════════════════════════
const VERDICTS = [
  { min:90, label:'ELITE',          msg:'Masterclass. You perfectly balanced player roles with your tactical philosophy. You didn\'t just pick the best players — you built the best team.', cls:'elite' },
  { min:80, label:'CHAMPIONS LEAGUE', msg:'Brilliant setup. You have a clear tactical identity and the right profiles to execute it, with only one or two minor compromises.',         cls:'excellent' },
  { min:70, label:'TOP HALF FINISH',  msg:'A solid, functional team. You understand the basics of squad building, but against an elite tactician, your system has exploitable flaws.',   cls:'excellent' },
  { min:60, label:'MID-TABLE',         msg:'Vibes and individual brilliance. You are relying on star players to bail you out because your tactical synergy is practically non-existent.', cls:'' },
  { min:50, label:'RELEGATION FIGHT',  msg:'A confused mess. You are asking players to perform roles they are not suited for in a system they don\'t understand.',                         cls:'bad' },
  { min:40, label:'SACKED BY CHRISTMAS',msg:'A tactical disaster. The board has lost faith, the fans are protesting, and the players are leaking stories to the press.',                cls:'bad' },
  { min:0,  label:'ARMCHAIR FRAUD',    msg:'Did you put a striker in goal? Turn off the game and go watch golf. You are a danger to the sport of football.',                             cls:'bad' },
];

function showResults(total, pos, tac, form) {
  showScreen('screen-results');
  const verdict = VERDICTS.find(v => total >= v.min) || VERDICTS[VERDICTS.length-1];

  document.getElementById('results-bg').className = `results-bg ${verdict.cls}`;
  document.getElementById('verdict-badge').textContent = verdict.label;
  document.getElementById('verdict-message').textContent = verdict.msg;

  // Animate score counter
  let current = 0;
  const target = total;
  const duration = 2000;
  const step = target / (duration / 16);
  const counter = document.getElementById('score-num');
  const arc = document.getElementById('score-arc');
  const circumference = 534;

  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    counter.textContent = Math.round(current);
    const offset = circumference - (current / 100) * circumference;
    arc.style.strokeDashoffset = offset;
    if (current >= target) clearInterval(interval);
  }, 16);

  // Color the arc by score
  if (total >= 80) arc.style.stroke = '#e8c84a';
  else if (total >= 60) arc.style.stroke = '#4ae87a';
  else arc.style.stroke = '#e84a4a';

  // Breakdown bars
  setTimeout(() => {
    document.getElementById('bar-pos').style.width  = `${(pos/30)*100}%`;
    document.getElementById('bar-tac').style.width  = `${(tac/40)*100}%`;
    document.getElementById('bar-form').style.width = `${(form/30)*100}%`;
    document.getElementById('score-pos').textContent  = `${pos}/30`;
    document.getElementById('score-tac').textContent  = `${tac}/40`;
    document.getElementById('score-form').textContent = `${form}/30`;
  }, 300);

  // Squad summary
  const squadEl = document.getElementById('results-squad');
  squadEl.innerHTML = '';
  state.squad.forEach(p => {
    const card = document.createElement('div');
    card.className = 'player-card';
    const rc = getRatingClass(p.overall_rating);
    card.innerHTML = `
      <div class="pc-rating ${rc}">${p.overall_rating}</div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-pos">${p.position}</div>
      <div class="pc-role">${p.chemistry_role}</div>
    `;
    squadEl.appendChild(card);
  });
}

function restartGame() {
  showScreen('screen-landing');
}
