const words = [['convention', 11], ['cheated', 11], ['please', 10], ['lying', 9], ['belongings', 9], ['anymore', 8], ['abuse', 8], ['fucking', 8], ['fully', 7], ['hiding', 7], ['therapist', 7], ['cheating', 7], ['assaulting', 7], ['trying', 7], ['furcationland', 7], ['disgusting', 7], ['wanted', 6], ['ruined', 6], ['monster', 6], ['questions', 6], ['calling', 6], ['tried', 6], ['times', 6], ['illegally', 6], ['anthrocon', 6], ['lies', 6], ['lied', 5], ['completely', 5], ['loved', 5], ['hate', 5], ['shit', 5], ['said', 5], ['fuck', 5], ['assaulted', 5], ['missing', 5], ['thinking', 4], ['abuser', 4], ['told', 4], ['sleep', 4], ['breaking', 4], ['sexual', 4], ['events', 4], ['safe', 4], ['previous', 4], ['chat', 4], ['okay', 4], ['whats', 4], ['restraining', 4], ['went', 4], ['telling', 4], ['working', 4], ['evicted', 4], ['given', 4], ['done', 4], ['nyc', 4], ['sexually', 4], ['actions', 4], ['got', 4], ['broke', 4], ['bunch', 3], ['soul', 3], ['abused', 3], ['discarded', 3], ['boston', 3], ['used', 3], ['broken', 3], ['willing', 3], ['couples', 3], ['simps', 3], ['known', 3], ['therapy', 3], ['sorry', 3], ['theres', 3], ['problems', 3], ['disrespect', 3], ['contacting', 3], ['found', 3], ['numerous', 3], ['needed', 3], ['terrible', 3], ['reported', 3], ['hardest', 3], ['took', 3], ['communicate', 3], ['gonna', 3], ['making', 3], ['homewrecker', 3], ['continued', 3], ['constantly', 3], ['proceed', 3], ['ignore', 3], ['reality', 3], ['taken', 3], ['treated', 3], ['following', 3], ['getting', 3], ['investigation', 3], ['assault', 3], ['photo', 3], ['towards', 3], ['lost', 3], ['heard', 3], ['sue', 2], ['justice', 2], ['looks', 2], ['hide', 2], ['living', 2], ['constant', 2], ['self', 2], ['stupid', 2], ['predator', 2], ['furry', 2], ['slut', 2], ['anywhere', 2], ['gave', 2], ['immediately', 2], ['hid', 2], ['running', 2], ['proof', 2], ['traumatized', 2], ['feels', 2], ['kept', 2], ['mistress', 2], ['zoophilia', 2], ['path', 2], ['bpd', 2], ['chose', 2], ['recommend', 2], ['pretending', 2], ['happened', 2], ['sent', 2], ['swinger', 2], ['related', 2], ['glad', 2], ['pretended', 2], ['busy', 2], ['ones', 2], ['anytime', 2], ['conventions', 2], ['friends', 2], ['attempt', 2], ['removed', 2], ['does', 2], ['having', 2], ['ugly', 2], ['weird', 2], ['disappointed', 2], ['felt', 2], ['sake', 2], ['thousands', 2], ['dollars', 2], ['years', 2], ['contact', 2], ['press', 2], ['literally', 2], ['mom', 2], ['stress', 2], ['con', 2], ['truthful', 2], ['pride', 2], ['parade', 2], ['knew', 2], ['reporting', 2], ['literal', 2], ['abusers', 2], ['sympathy', 2], ['sway', 2], ['cease', 2], ['desist', 2], ['testimony', 2], ['inform', 2], ['advice', 2], ['proper', 2], ['evicting', 2], ['apartment', 2], ['damages', 2], ['seems', 2], ['request', 2], ['raping', 2], ['sueing', 2], ['defamation', 2], ['outcome', 2], ['banned', 2], ['stated', 2], ['travel', 2], ['fighting', 2], ['animals', 2], ['assaults', 2], ['crossed', 2], ['pennsylvania', 2], ['refuse', 2], ['reciprocate', 2], ['horniness', 2], ['partner', 2], ['messages', 2], ['minutes', 2], ['excuses', 2], ['mutual', 1], ['husbands', 1], ['turned', 1], ['pleasure', 1], ['meaningless', 1], ['cheater', 1], ['believed', 1], ['mate', 1], ['kids', 1], ['marry', 1], ['bullshit', 1], ['opening', 1], ['wasted', 1], ['mattered', 1], ['hearing', 1], ['babyfurcon', 1], ['cub', 1], ['porn', 1], ['talked', 1], ['keeping', 1], ['wraps', 1], ['children', 1], ['thinks', 1], ['fit', 1], ['closure', 1], ['respect', 1], ['held', 1], ['begging', 1], ['polar', 1], ['opposite', 1], ['recommended', 1], ['witnessed', 1], ['came', 1], ['army', 1], ['thoughtless', 1], ['reassuring', 1], ['extent', 1], ['closed', 1], ['hoping', 1], ['nervous', 1], ['adored', 1], ['ignored', 1], ['statements', 1], ['remission', 1], ['headed', 1], ['lives', 1], ['disrespectful', 1], ['nor', 1], ['names', 1], ['none', 1], ['previously', 1], ['verbalize', 1], ['comes', 1], ['camping', 1], ['appreciate', 1], ['honest', 1], ['recall', 1], ['smile', 1], ['crying', 1], ['agony', 1], ['killed', 1], ['respectful', 1], ['asked', 1], ['spotify', 1], ['infront', 1], ['warned', 1], ['trust', 1], ['affording', 1], ['seeming', 1], ['shitty', 1], ['associated', 1], ['whatsoever', 1], ['ahead', 1], ['post', 1], ['canceled', 1], ['remotely', 1], ['factually', 1], ['pleading', 1], ['colors', 1], ['cry', 1], ['beg', 1], ['plead', 1], ['months', 1], ['dating', 1], ['cared', 1], ['trusted', 1], ['infact', 1], ['assistant', 1], ['met', 1], ['god', 1], ['pray', 1], ['fell', 1], ['damn', 1], ['rid', 1], ['astronomically', 1], ['unwell', 1], ['shortly', 1], ['escalate', 1], ['further', 1], ['elses', 1], ['express', 1], ['contingencies', 1], ['vice', 1], ['versa', 1], ['blessing', 1], ['email', 1], ['sink', 1], ['meetup', 1], ['hours', 1], ['search', 1], ['behalf', 1], ['blowing', 1], ['worshipped', 1], ['dying', 1], ['lung', 1], ['cancer', 1], ['miniscule', 1], ['debt', 1], ['bitch', 1], ['double', 1], ['believing', 1], ['coast', 1], ['gone', 1], ['ghosted', 1], ['standing', 1], ['touching', 1], ['tactic', 1], ['passing', 1], ['heat', 1], ['completed', 1], ['ruin', 1], ['charges', 1], ['stops', 1], ['portland', 1], ['contingent', 1], ['responded', 1], ['lack', 1], ['associate', 1], ['england', 1], ['everyday', 1], ['torture', 1], ['exact', 1], ['reasons', 1], ['feared', 1], ['cons', 1], ['instability', 1], ['died', 1], ['wronged', 1], ['worse', 1], ['filing', 1], ['monday', 1], ['served', 1], ['photos', 1], ['portraying', 1], ['letting', 1], ['purchased', 1], ['notice', 1], ['theft', 1], ['fat', 1], ['degenerate', 1], ['losers', 1], ['settled', 1], ['worth', 1], ['morals', 1], ['tour', 1], ['hopes', 1], ['bite', 1], ['hello', 1], ['confirmation', 1], ['received', 1], ['leaked', 1], ['returning', 1], ['items', 1], ['resolution', 1], ['storage', 1], ['promptly', 1], ['count', 1], ['guilty', 1], ['manipulative', 1], ['narcissistic', 1], ['liar', 1], ['sanity', 1], ['unaware', 1], ['avenues', 1], ['resolving', 1], ['renters', 1], ['deposit', 1], ['paying', 1], ['lawyers', 1], ['fees', 1], ['punitive', 1], ['ontop', 1], ['compensatory', 1], ['cctv', 1], ['footage', 1], ['removing', 1], ['household', 1], ['plenty', 1], ['using', 1], ['synthetic', 1], ['pee', 1], ['scared', 1], ['smoking', 1], ['putting', 1], ['guidance', 1], ['shame', 1], ['negative', 1], ['thc', 1], ['forcibly', 1], ['relocated', 1], ['pennslyvania', 1], ['resign', 1], ['honestly', 1], ['distress', 1], ['eviction', 1], ['lawsuit', 1], ['impression', 1], ['discard', 1], ['assure', 1], ['destroyed', 1], ['attend', 1], ['connecticon', 1], ['complete', 1], ['comply', 1], ['aggravated', 1], ['fbi', 1], ['pornography', 1], ['watched', 1], ['delete', 1], ['inkbunny', 1], ['informing', 1], ['forensic', 1], ['release', 1], ['members', 1], ['opinion', 1], ['shared', 1], ['consulting', 1], ['mutuals', 1], ['additional', 1], ['demands', 1], ['coming', 1], ['tainted', 1], ['attending', 1], ['ruining', 1], ['proactive', 1], ['thats', 1], ['fault', 1], ['blame', 1], ['nobody', 1], ['decent', 1], ['lesson', 1], ['waiting', 1], ['nonresponse', 1], ['thigh', 1], ['highs', 1], ['ebike', 1], ['albedo', 1], ['comic', 1], ['writing', 1], ['trash', 1], ['refund', 1], ['happening', 1], ['efficiently', 1], ['grand', 1], ['larceny', 1], ['spoken', 1], ['th', 1], ['precinct', 1], ['detective', 1], ['provided', 1], ['ample', 1], ['efficient', 1], ['physically', 1], ['felon', 1], ['resolved', 1], ['fucked', 1], ['transparent', 1], ['gotten', 1], ['mentally', 1], ['torment', 1], ['purely', 1], ['memories', 1], ['nostalgia', 1], ['mental', 1], ['newer', 1], ['lows', 1], ['furrydelphia', 1], ['thursday', 1], ['leaving', 1], ['interact', 1], ['supposed', 1], ['panic', 1], ['luck', 1], ['journey', 1], ['heads', 1], ['pedophile', 1], ['raped', 1], ['countless', 1], ['passed', 1], ['outed', 1], ['criminal', 1], ['rapes', 1], ['speaking', 1], ['involved', 1], ['chats', 1], ['fingers', 1], ['zoophiles', 1], ['alright', 1], ['suit', 1], ['mail', 1], ['moved', 1], ['downhill', 1], ['badly', 1], ['rape', 1], ['caused', 1], ['ane', 1], ['nuts', 1], ['ripped', 1], ['bruised', 1], ['bloody', 1], ['neither', 1], ['realized', 1], ['staring', 1], ['dogs', 1], ['dick', 1], ['confronted', 1], ['instantly', 1], ['called', 1], ['cops', 1], ['psychward', 1], ['packed', 1], ['traumatizing', 1], ['york', 1], ['downgrade', 1], ['delivery', 1], ['driving', 1], ['k', 1], ['remarkably', 1], ['embarrassing', 1], ['looking', 1], ['stability', 1], ['square', 1], ['suppose', 1], ['despised', 1], ['conflict', 1], ['complain', 1], ['slam', 1], ['doors', 1], ['micro', 1], ['aggressions', 1], ['humanly', 1], ['dynamic', 1], ['acknowledge', 1], ['rules', 1], ['mhm', 1], ['koix', 10], ['hates', 1], ['suing', 1], ['charged', 1], ['actively', 1], ['talks', 1], ['awful', 1], ['begged', 1], ['thirsting', 1], ['cheat', 1], ['thirsty', 1], ['desperate', 1], ['repeatedly', 1], ['intentionally', 1], ['boundaries', 1], ['leash', 1], ['outing', 1], ['repeated', 1], ['dislike', 1], ['altogether', 1], ['sucks', 1], ['nightmare', 1], ['reading', 1], ['coward', 1], ['disturb', 1], ['appointment', 1], ['tuesday', 1], ['deciding', 1], ['immediate', 1], ['greatest', 1], ['quit', 1], ['abusive', 1], ['pa', 1], ['absolutely', 1], ['roommates', 1], ['earth', 1], ['pittsburgh', 1], ['cheats', 1], ['steals', 1], ['hides', 1], ['multiple', 1], ['zoophile', 1], ['supporters', 1], ['fakes', 1], ['mentions', 1], ['irrationally', 1], ['upset', 1], ['normal', 1], ['stuck', 1], ['trauma', 1], ['volunteering', 1], ['brought', 1], ['poverty', 1], ['bitter', 1], ['defended', 1], ['acted', 1], ['opened', 1], ['eyes', 1], ['stopped', 1], ['saw', 1], ['accepted', 1], ['holding', 1], ['hostage', 1], ['refusing', 1], ['civil', 1], ['suits', 1], ['maine', 1], ['pro', 1], ['bono', 1], ['domestic', 1], ['violence', 1], ['tiktok', 1], ['capable', 1], ['belive', 1], ['pussy', 1]];
