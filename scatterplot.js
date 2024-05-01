// Sample data
const rawData = `
name,symbol,YTD,3MO,1YR,3YR,5YR,10YR,Yield,rating,Expense ratio,Mgr tenure,assets,Category
1838 International Equity,INTEX,17.52,21.16,17.52,11.78,,,0,****,1.25,3,52106888.00,International Stocks
59 Wall Street International Equity,FNIEX,16.17,13.06,16.17,,,,0.25,,,1,27474000.00,International Stocks
ABN AMRO International Equity Comm,RIEQX,25.43,22.35,25.43,13.02,11.21,,0.49,****,1.35,1,142858478.00,International Stocks
ABN AMRO International Equity Inv,,24.87,22.33,24.87,12.67,10.9,,0.14,****,1.6,1,1013040.00,International Stocks
Accessor International Equity,ACIEX,16.07,14.45,16.07,13.58,,,0,****,1.55,0,150551215.00,International Stocks
Acorn International,ACINX,15.43,14.08,15.43,11.74,7.9,,0.71,***,1.19,6,1726129086.00,International Stocks
Aetna International I,AEIGX,18.34,14.86,18.34,19.12,12.59,,4.77,****,1.48,3,38887409.00,International Stocks
AIM International Growth Adv,,4.84,17.81,4.84,7.7,,,0.83,***,1.34,2,1217756.00,International Stocks
Alliance International Adv,ALIYX,9.96,15.81,9.96,,,,3.06,,1.47,0,34796757.00,International Stocks
Alliance International Premier Gr Adv,,,21.67,,,,,,,,0,1474209.00,International Stocks
Alliance Worldwide Privatization Adv,AWPYX,9.33,16.35,9.33,,,,1.43,,1.45,,2409360.00,International Stocks
American AAdvantage Intl Equity AMR,AAIAX,12.07,15.3,12.07,13.92,,,2.19,****,0.58,4,512180964.00,International Stocks
American AAdvantage Intl Equity Instl,AAIEX,11.73,15.19,11.73,13.61,11.79,,1.97,****,0.83,7,436052983.00,International Stocks
American AAdvantage Intl Equity Milg,AAEMX,11.12,15.12,11.12,12.91,,,1.34,****,1.48,4,5154725.00,International Stocks
American AAdvantage Intl Equity Plan,AAIPX,11.52,15.15,11.52,13.29,,,1.82,****,1.14,4,47593060.00,International Stocks
American Cent-20th Cent Intl Disc Adv,,,13.68,,,,,,,,0,11210.00,International Stocks
American Cent-20th Cent Intl Disc Is,TIDIX,17.55,13.8,17.55,,,,0,,,0,63104115.00,International Stocks
American Cent-20th Cent Intl Grth Adv,TWGAX,18.86,15.34,18.86,,,,0.05,,1.63,2,23816154.00,International Stocks
American Cent-20th Cent Intl Grth Inv,TWIEX,19.01,15.21,19.01,17.7,11.68,,0.17,****,1.38,5,2640040865.00,International Stocks
American Cent-20th Cent Intl Grth Is,TGRIX,19.27,15.19,19.27,,,,0.38,,1.18,1,14438259.00,International Stocks
Aon International Equity,AIEYX,14.58,17.52,14.58,,,,0.84,,1.4,2,61542675.00,International Stocks
Arch International Equity Instl,,17.45,19.45,17.45,10.6,,,0.44,***,1.44,4,8429722.00,International Stocks
Arch International Equity Tr,ARITX,17.9,19.49,17.9,10.89,,,0.65,***,1.14,4,60504966.00,International Stocks
Armada International Equity Instl,AIEIX,19.98,20.11,19.98,,,,0.48,,,0,175600081.00,International Stocks
Artisan International Intl,ARTIX,32.18,24.86,32.18,22.49,,,0.22,*****,1.45,3,421980000.00,International Stocks
Avatar Advantage Intl Equity Alloc,,,11.87,,,,,,,,0,412591.00,International Stocks
Babson-Stewart Ivory International,BAINX,13.3,16.69,13.3,9.35,8.33,9.99,0.4,****,1.16,10,96586699.00,International Stocks
"Bailard, Biehl & Kaiser Intl Equity",BBIEX,12.01,18.44,12.01,10.51,5.82,4.28,0.87,***,1.44,3,123390428.00,International Stocks
Barr Rosenberg Intl Small Cap Instl,ICSIX,4.12,10.53,4.12,,,,1.05,,1.5,2,41100021.00,International Stocks
Barr Rosenberg Intl Small Cap Sel,,3.64,10.3,3.64,,,,0.71,,1.91,2,2404691.00,International Stocks
BB&T International Tr,BBTIX,11.37,16.09,11.37,,,,0.79,,,1,84213958.00,International Stocks
BEA Intl Equity Instl,RBIEX,20.64,13.66,20.64,15.82,8.24,,1.15,***,1.16,6,687624024.00,International Stocks
Berger/BIAM International,BBINX,14.92,19.38,14.92,,,,4.05,,1.8,2,19623220.00,International Stocks
Berger/BIAM International CORE,BBICX,15.67,19.59,15.67,,,,2.71,,,2,179099805.00,International Stocks
Bernstein International Value,SNIVX,10.95,11.45,10.95,12.51,9.82,,4.98,****,1.27,6,5147500021.00,International Stocks
BlackRock Intl Equity Instl,PNINX,15.45,17.54,15.45,9.65,7.94,,1.67,***,1.06,2,960270601.00,International Stocks
BlackRock Intl Equity Svc,PIESX,15.1,17.46,15.1,9.28,7.44,,1.4,***,1.36,2,142712368.00,International Stocks
BlackRock Intl Small Cap Eq Instl,BISIX,11.12,9.61,11.12,,,,2.24,,,1,17033906.00,International Stocks
BNY Hamilton International Eq Inst,BNUIX,20.84,19.72,20.84,,,,0.13,,,1,169350242.00,International Stocks
Boston 1784 International Equity,SEEQX,12.45,16.75,12.45,8.2,,,0.22,***,1.24,4,446226090.00,International Stocks
Brandes Instl International Equity,BIIEX,14.65,19.28,14.65,,,,1.36,,1.19,2,174376714.00,International Stocks
Brinson Global (Ex-U.S.) Equity I,BNUEX,14.39,17.15,14.39,10.9,9.73,,0.81,****,1,5,487467741.00,International Stocks
Brinson Global (Ex-U.S.) Equity N,,13.96,16.86,13.96,,,,0.76,,,1,13188.00,International Stocks
BT Advisor EAFE Equity Index Instl,BTAEX,19.81,20.05,19.81,,,,2.14,,0.4,2,38358460.00,International Stocks
BT Institutional Intl Eqty I,BEIIX,21.91,17.4,21.91,,,,0.69,,0.95,1,735274125.00,International Stocks
BT Institutional Intl Eqty II,,22.9,17.27,22.9,,,,0.79,,0.75,1,7511164.00,International Stocks
BT Investment International Equity,BTEQX,20.82,17.2,20.82,19.82,15.77,,0.23,*****,1.5,5,1400202775.00,International Stocks
Calvert World Values Intl Equity C,CWVCX,14.92,17.63,14.92,10.32,,,0,***,2.76,4,9366220.00,International Stocks
Chase Vista Select Intl Equity,VSIEX,13.54,15.67,13.54,,,,2.93,,0.07,2,231290132.00,International Stocks
CitiFunds International Growth,CFIPX,17.62,17.79,17.62,8.26,5.81,,0.07,***,1.75,4,20615615.00,International Stocks
CitiFunds Intl Growth & Income,CIGIX,,16.18,,,,,,,,0,17136355.00,International Stocks
Columbia International Stock,CMISX,12.83,21.24,12.83,13.59,8.49,,0.05,***,1.62,6,130141587.00,International Stocks
Commerce International Equity Instl,CFIEX,15.52,17.49,15.52,10.49,,,0.41,***,1.72,1,110643414.00,International Stocks
Consulting Group International Equity,TIEUX,22.61,19.03,22.61,9.34,9.44,,1.26,***,0.97,,1397529000.00,International Stocks
Delaware International Equity Instl,DEQIX,9.35,13.53,9.35,11.32,9.48,,1.83,****,1.4,7,165071943.00,International Stocks
Delaware International Small Cap Inst,,5.83,19,5.83,,,,2.02,,,1,3174874.00,International Stocks
Delaware Overseas Equity Instl,DEWIX,-6.59,8.49,-6.59,1.41,,,8.61,***,1.5,1,61054.00,International Stocks
Delaware Pooled International Equity,DPIEX,10.01,13.7,10.01,11.65,10.26,,2.35,****,0.89,6,648288982.00,International Stocks
Delaware Pooled Labor Select Intl Eq,DELPX,11.9,13.01,11.9,14.83,,,2.23,****,0.92,3,102419354.00,International Stocks
DFA International High Book to Market,DFHBX,14.96,16.96,14.96,6.34,7.83,,2.07,***,0.68,5,1612405655.00,International Stocks
DFA International Small Cap Value,DISVX,5.27,10.22,5.27,-6.35,,,1.99,**,0.9,0,451010000.00,International Stocks
DFA International Small Company,DFISX,8.19,12.39,8.19,,,,1.94,,0.75,2,273990000.00,International Stocks
DFA International Value,DFIVX,14.87,16.96,14.87,6.25,,,1.92,***,0.56,0,435700000.00,International Stocks
DFA International Value II,DIVTX,14.88,17.05,14.88,6.87,,,2.12,***,0.86,0,37310000.00,International Stocks
DFA International Value III,DFVIX,15.09,16.98,15.09,6.45,,,2.21,***,0.45,0,288040000.00,International Stocks
DFA International Value IV,DFVFX,15.55,17.13,15.55,,,,2.16,,,0,98650000.00,International Stocks
DFA Large Cap International,DFALX,18.21,19.56,18.21,9.88,9.57,,1.56,***,0.47,7,114600000.00,International Stocks
Diversified Investors Intl Equity,DVIEX,10.47,16.67,10.47,,,,0.42,,1.41,2,308256943.00,International Stocks
Dresdner RCM Global Small Cap,,19.66,24.14,19.66,,,,0,,1.75,1,5474126.00,International Stocks
Dresdner RCM Intl Growth Equity A,DRIEX,13.81,17.85,13.81,16.99,,,1.5,****,1,0,123402092.00,International Stocks
Dreyfus Intl Growth,DITFX,1.61,14.23,1.61,2.79,0.67,,0,**,1.92,2,57596399.00,International Stocks
Dreyfus Intl Stock Index,DIISX,19.36,20.33,19.36,,,,0.68,,,1,27882079.00,International Stocks
Driehaus International Growth,DRIGX,15.15,5.35,15.15,,,,0,,2.11,2,209406772.00,International Stocks
Enterprise International Growth Y,ENIYX,14.73,17.54,14.73,10.85,,,0.71,****,1.55,3,12618105.00,International Stocks
Excelsior Instl International Equity,EXIIX,10.13,18.21,10.13,6.78,,,1.7,***,0.9,,34059018.00,International Stocks
Excelsior International,UMINX,7.91,16.34,7.91,8.16,5.87,6.87,0.55,***,1.43,2,224162984.00,International Stocks
Fidelity Advisor Intl Capital Apr Is,,10.15,17.09,10.15,,,,0,,,1,4938033.00,International Stocks
Fidelity Advisor Overseas Instl,FAOIX,11.79,17.52,11.79,11.97,,,0.92,****,1.16,2,77745477.00,International Stocks
Fidelity Diversified International,FDIVX,14.39,15.25,14.39,16.01,13.24,,1.26,****,1.23,7,2156898342.00,International Stocks
Fidelity International Growth & Inc,FIGRX,9.98,16.48,9.98,9.91,7.67,8.94,0.42,***,1.15,0,870975160.00,International Stocks
Fidelity International Value,FIVFX,11.74,19.44,11.74,9.71,,,0.37,***,1.28,4,435796443.00,International Stocks
Fidelity Overseas,FOSFX,12.84,17.91,12.84,12.28,9.35,8.68,0.55,****,1.2,2,3846516551.00,International Stocks
Fidelity Spartan International Index,FSIIX,21.24,21.1,21.24,,,,1.62,,0.35,1,34281664.00,International Stocks
First American International Index Y,FIICX,19.72,20.52,19.72,7.99,,,1.3,***,0.74,0,122768796.00,International Stocks
First American International Y,FAICX,26.11,16.66,26.11,16.78,,,0.53,****,1.44,4,383535076.00,International Stocks
Firstar International Equity Instl,FIIEX,-9.55,12.75,-9.55,-5.26,,,2,**,1.5,4,38909973.00,International Stocks
Founders International Equity,FOIEX,17.01,11.9,17.01,17.23,,,0,*****,1.85,2,18995155.00,International Stocks
Founders Passport,FPSSX,12.5,13.41,12.5,11.15,8.89,,0.07,***,1.53,5,124654439.00,International Stocks
Fremont International Growth,FIGFX,9.81,16.28,9.81,4.37,,,0.09,***,1.5,0,44817724.00,International Stocks
Fremont International Small Cap,FRISX,4.12,15.97,4.12,-4.98,,,0.17,**,1.5,0,6246766.00,International Stocks
FTI International Equity,FTIEX,12.86,14.64,12.86,13,,,0.32,****,1.6,3,73912403.00,International Stocks
Gabelli International Growth,GIGRX,17.37,14.66,17.37,15.43,,,0.2,****,2.46,3,26790807.00,International Stocks
Galaxy International Equity Tr,GIETX,21.99,17.16,21.99,15.51,,,0.79,****,1.06,2,368468920.00,International Stocks
GE Instl International Equity,GIEIX,17.32,19.65,17.32,,,,1.02,,,1,136926208.00,International Stocks
GE International Equity C,GEICX,14.17,16.65,14.17,10.83,,,0,***,1.35,4,6885629.00,International Stocks
GE International Equity D,GEIDX,14.6,16.72,14.6,11.21,,,0.06,***,1.01,4,17330006.00,International Stocks
Glenmede Institutional International,GTIIX,15.51,14.79,15.51,13.46,10.83,,1.52,****,0.87,6,103558726.00,International Stocks
Glenmede International,GTCIX,16.18,15.54,16.18,13.73,11.97,11.8,2.41,****,0.14,10,1190096767.00,International Stocks
GMO Currency Hedged Intl Core III,GMOCX,7.29,13.87,7.29,11.77,,,2.54,****,,3,287920724.00,International Stocks
GMO Currency Hedged Intl Core IV,GMHFX,,13.83,,,,,,,,,157516678.00,International Stocks
GMO Foreign II,GMFRX,13.92,16.97,13.92,,,,2.02,,,,60314691.00,International Stocks
GMO Foreign III,GMOFX,13.95,16.9,13.95,,,,2.06,,,,1086174847.00,International Stocks
GMO Foreign IV,GMFFX,,17.01,,,,,,,,,138168956.00,International Stocks
GMO International Core II,GMICX,13.48,15.17,13.48,,,,2.03,,,2,16847220.00,International Stocks
GMO International Core III,GMOIX,13.6,15.17,13.6,7.89,7.61,9.92,2.06,****,0.71,11,3024703426.00,International Stocks
GMO International Core IV,GMCFX,,15.2,,,,,,,,0,640485920.00,International Stocks
Goldman Sachs Core Intl Equity Instl,GCIIX,14.57,19.05,14.57,,,,0.29,,1,1,283175191.00,International Stocks
Goldman Sachs Core Intl Equity Svc,GCISX,14.09,18.97,14.09,,,,0.16,,1.5,1,20953.00,International Stocks
Goldman Sachs Intl Equity Instl,GSIEX,18.72,15.73,18.72,,,,0,,1.08,2,104295517.00,International Stocks
Goldman Sachs Intl Equity Svc,GSISX,18.42,15.57,18.42,,,,0.27,,1.55,2,3567400.00,International Stocks
Goldman Sachs Intl Small Cap Instl,GISIX,,17.38,,,,,,,,0,34709643.00,International Stocks
Goldman Sachs Intl Small Cap Svc,GISSX,,17.25,,,,,,,,0,1593.00,International Stocks
Gradison International,INTFX,12.95,17.9,12.95,7.91,,,0,***,2,3,33689405.00,International Stocks
Hansberger Instl International,HINTX,-6.94,14.61,-6.94,,,,1.2,,1,,200055007.00,International Stocks
Harbor International,HAINX,10.36,18.28,10.36,15.26,13.38,15.09,1.48,*****,0.97,11,5358231706.00,International Stocks
Harbor International Growth,HAIGX,23.49,22.35,23.49,19.09,14.14,,0.56,****,1.02,5,1244381582.00,International Stocks
Harbor International II,HAIIX,7.98,25.13,7.98,,,,1.25,,0.98,2,128461500.00,International Stocks
Harding Loevner International Equity,HLMIX,10.2,17.77,10.2,6.8,,,1.45,***,1,4,347858645.00,International Stocks
Harris Insight International A,HILAX,-4.83,13.47,-4.83,,,,1.06,,1.61,2,1651523.00,International Stocks
Harris Insight International Instl,HILIX,-4.62,13.62,-4.62,,,,1.27,,1.36,2,200018526.00,International Stocks
Hartford Intl Opportunities Y,HAOYX,13.11,15.95,13.11,,,,0.35,,1.2,2,9523758.00,International Stocks
Heritage Eagle Intl Equity Eagle,HEIEX,14.99,18.8,14.99,11.32,,,0,****,2.6,3,35652058.00,International Stocks
HighMark International Equity Fid,HMIQX,15.18,18.15,15.18,3.6,,,0.35,***,1.18,0,97063394.00,International Stocks
Hotchkis & Wiley International,HWINX,6.42,15.5,6.42,9.84,9.05,,2.11,***,0.89,8,1406342610.00,International Stocks
IAI International,IAINX,1.83,11.36,1.83,1.89,3,6.19,0.24,***,1.67,8,32139879.00,International Stocks
Idex International Equity C,,10.13,14.81,10.13,,,,0,,2.25,1,417246.00,International Stocks
IDS International Y,IDIYX,15.5,19.48,15.5,8.89,,,0.57,***,1.06,1,77433199.00,International Stocks
Intrust Intl Multi-Mgr Stk Instl Svc,IMSSX,11.08,15.1,11.08,,,,1.33,,,1,,International Stocks
Invesco International Blue Chip,IIBCX,,,,,,,,,,,7200000.00,International Stocks
Invesco International Growth,FSIGX,7.44,13.07,7.44,5.67,5.15,4.33,0,***,1.71,4,45100627.00,International Stocks
ISG International Equity A,IIEAX,9.48,18.79,9.48,,,,0.25,,1.77,1,27276245.00,International Stocks
Ivy Canada Adv,,,0.22,,,,,,,,1,14798.00,International Stocks
Ivy International I,IVIIX,7.75,16.52,7.75,12.78,,,1.28,****,1.18,4,153495024.00,International Stocks
Ivy International II Adv,,7.08,16.55,7.08,,,,1.23,,,0,449960.00,International Stocks
Jamestown International Equity,JAMIX,23.95,18.11,23.95,,,,0.75,,1.6,0,47085113.00,International Stocks
Janus Overseas,JAOSX,16.03,17.77,16.03,20.9,,,0.49,*****,1.01,4,4329000279.00,International Stocks
John Hancock International Equity,JHIEX,18.77,21.93,18.77,6.09,,,1.09,***,1,3,8900000.00,International Stocks
JP Morgan Instl International Equity,JNUSX,13.62,20.21,13.62,7.74,7.43,,2.98,***,0.93,5,362173417.00,International Stocks
JP Morgan Instl International Opport,JPIOX,3.83,22.09,3.83,,,,2.89,,0.99,1,291496891.00,International Stocks
JP Morgan International Equity,PPIEX,13.48,20.23,13.48,7.57,7.19,,2.78,***,1.12,5,74026091.00,International Stocks
JP Morgan International Opport,PPIOX,3.47,21.81,3.47,,,,2.64,,1.2,1,55230897.00,International Stocks
Julius Baer International Equity A,BJBIX,27.07,18.87,27.07,19.91,2.71,,0,***,1.79,3,73412928.00,International Stocks
Kemper International I,,8.79,14.91,8.79,11.87,,,0,****,1.04,3,16598156.00,International Stocks
Kent International Growth Instl,KNINX,17.91,19.5,17.91,8.58,8.88,,1.1,***,1.05,0,528499548.00,International Stocks
Kent International Growth Invmt,KNIVX,17.6,19.36,17.6,8.28,8.62,,1.09,***,1.3,0,12389637.00,International Stocks
Lazard International Equity Instl,LZIEX,16.04,17.96,16.04,14.49,11.22,,0.89,****,0.89,7,2876842107.00,International Stocks
Lazard International Equity Open,LZIOX,15.82,17.99,15.82,,,,0.56,,1.25,,47237191.00,International Stocks
Lazard International Small Cap Instl,LZISX,7.55,7.01,7.55,7.64,3.92,,0.43,***,1.09,5,177782993.00,International Stocks
Legg Mason International Equity Prim,LMGEX,8.49,14.93,8.49,8.75,,,1.08,***,2.17,3,258530185.00,International Stocks
Lexington International,LEXIX,19.02,17.09,19.02,11.16,8.99,,0.49,***,1.75,4,22898010.00,International Stocks
LKCM International,LKINX,10.1,15.65,10.1,,,,0,,,1,56895222.00,International Stocks
Longleaf Partners International,LLINX,,,,,,,,,,,,International Stocks
Loomis Sayles International Eqty Inst,LSIEX,9.32,15.02,9.32,8.59,6.46,,1.09,***,1,2,76014308.00,International Stocks
Loomis Sayles International Eqty Ret,,9.25,15.17,9.25,,,,1.09,,1.25,1,152889.00,International Stocks
M.S.D.&T. International Equity Instl,MEQUX,11.98,15.94,11.98,8.7,7.73,,1.59,***,1.03,5,82577857.00,International Stocks
MainStay Instl EAFE Index Instl,NIEAX,19.15,19.85,19.15,8.39,8.2,,1.69,***,0.94,7,60948000.00,International Stocks
MainStay Instl EAFE Index Instl Svc,MAESX,18.83,19.65,18.83,8.15,,,1.45,***,1.19,4,447000.00,International Stocks
MainStay Instl Intl Equity Instl,NINQX,22.41,19.29,22.41,13.1,,,2.92,****,1,4,129027000.00,International Stocks
MainStay Instl Intl Equity Instl Svc,MAUSX,22.2,19.29,22.2,12.67,,,2.7,****,1.25,4,618000.00,International Stocks
Managers International Equity,MGITX,14.54,13.86,14.54,12.69,11.16,11.63,0.71,****,1.45,,552786805.00,International Stocks
Marshall International Stock,MRISX,3.26,16.3,3.26,11.06,,,1.96,***,1.59,2,235368658.00,International Stocks
MAS International Equity Instl,MPIEX,10.08,14.92,10.08,11.14,5.56,8.84,1.71,***,0.63,6,508991165.00,International Stocks
MassMutual Instl Intl Equity S,MIEDX,5.05,13.53,5.05,12.96,,,1.3,****,1,4,568869229.00,International Stocks
Masters' Select International,MSILX,11.74,20.79,11.74,,,,0.81,,1.77,,92500000.00,International Stocks
Mentor Perpetual International Y,INTLX,13.53,16.89,13.53,,,,0.96,,1.1,2,11352722.00,International Stocks
Merrill Lynch Consults International,MLCIX,2.91,13.2,2.91,3.91,4.7,,1.61,***,2.37,3,59442263.00,International Stocks
Merrill Lynch International Index A,MAIIX,28.05,27.57,28.05,,,,1.19,,0.86,1,117771486.00,International Stocks
Merrill Lynch International Index D,MDIIX,27.69,27.45,27.69,,,,0.92,,1.11,1,14890668.00,International Stocks
MFS Instl International Equity,MIEIX,9.28,14.83,9.28,,,,1.66,,0.94,2,11394638.00,International Stocks
MFS International Growth & Inc I,,21,15,21,,,,0,,1.64,1,36138.00,International Stocks
MFS Research International I,,13.27,16.09,13.27,,,,0.01,,1.4,1,1276911.00,International Stocks
Montgomery International Growth P,MIGPX,28.65,23.14,28.65,,,,0,,1.9,2,936003.00,International Stocks
Montgomery International Growth R,MNIGX,28.69,23.03,28.69,19.69,,,0,*****,1.65,3,200261524.00,International Stocks
Montgomery International Small Cap R,MNISX,10.58,10.84,10.58,8.05,4.09,,0.08,***,1.9,5,47508474.00,International Stocks
Morgan Grenfell Intl Equity,,23.49,22.48,23.49,11.04,,,0.56,***,0.9,3,6112656.00,International Stocks
Morgan Grenfell Intl Small Cap Equity,MGISX,15.49,12.34,15.49,0.26,0.05,,0,**,1.25,4,26096906.00,International Stocks
MSDW Fund of Funds Intl D,,9.04,18.15,9.04,,,,0,,,1,14428.00,International Stocks
MSDW Instl Active Intl Alloc A,MSACX,20.22,14.44,20.22,12.73,9.52,,2.84,****,0.8,6,266929098.00,International Stocks
MSDW Instl Intl Equity A,MSIQX,18.3,14.95,18.3,17.28,15.14,,1.89,*****,1,9,3395554311.00,International Stocks
MSDW Instl Intl Magnum A,MSIMX,7.33,10.31,7.33,,,,0.9,,1,2,269992067.00,International Stocks
MSDW Instl Intl Magnum B,MIMBX,7.13,10.22,7.13,,,,0.7,,1.25,2,26163899.00,International Stocks
MSDW International Small Cap D,ISMDX,4.55,9.54,4.55,,,,0,,,1,291306.00,International Stocks
Munder Framlington International Gr Y,MFGYX,15.64,19.25,15.64,,,,0.02,,1.37,1,48939653.00,International Stocks
Munder International Equity K,MUIKX,13.16,18.67,13.16,8.69,5.95,,1.26,***,1.25,3,98435462.00,International Stocks
Munder International Equity Y,MUIYX,13.37,18.63,13.37,8.97,6.22,,1.5,***,1,3,94350724.00,International Stocks
Nations International Equity Inv A,NIIAX,16.4,17.71,16.4,8.34,7.06,,0.74,***,1.39,3,13006795.00,International Stocks
Nations International Equity Prim A,NIEQX,16.46,17.7,16.46,8.56,7.32,,0.79,***,1.14,3,756035758.00,International Stocks
Nations International Equity Prim B,NIEPX,15.97,17.89,15.97,,,,0.67,,1.64,2,12.00,International Stocks
Nations International Growth Inv A,CKIEX,19.85,20.96,19.85,10.63,8.95,8.37,0,***,1.4,1,22116295.00,International Stocks
Nations International Growth Inv B,NITBX,19.01,20.71,19.01,,,,0,,2.15,1,726226.00,International Stocks
Nations International Growth Prim A,CKIAX,20.19,21,20.19,10.89,9.22,,0,***,1.15,1,210763671.00,International Stocks
Nations International Value Inv A,NIVLX,11.82,20.13,11.82,15.8,,,1.12,****,1.73,2,6476065.00,International Stocks
Nations International Value Prim A,EMIEX,11.6,20.38,11.6,15.93,,,1.24,****,1.21,2,127128199.00,International Stocks
Navellier International Equity,NPIEX,6.64,19.69,6.64,,,,0,,1.75,1,10726309.00,International Stocks
Neuberger Berman International,NBISX,2.35,16.43,2.35,12.08,,,0,****,1.71,1,124042172.00,International Stocks
Neuberger Berman International Tr,,,16.55,,,,,,,1.7,0,1994614.00,International Stocks
New England International Equity C,NECIX,5.88,14.82,5.88,-0.04,,,1.67,**,2.5,1,860810.00,International Stocks
New England International Equity Y,NEIYX,7.29,15.27,7.29,1.32,3.84,,4.33,***,1.15,1,5551776.00,International Stocks
Nicholas-Applegate Intl Core Gr I,NACIX,21.54,13.9,21.54,,,,0,,1.4,2,88153551.00,International Stocks
Nicholas-Applegate Intl Core Gr Q,,21.22,13.83,21.22,,,,0.72,,0,1,7185727.00,International Stocks
Nicholas-Applegate Intl Sm Cap Gr I,NAGPX,36.34,18.7,36.34,22.53,16.19,,0,*****,1.4,5,72108873.00,International Stocks
Nicholas-Applegate Intl Sm Cap Gr Q,NAGUX,35.96,18.53,35.96,22.24,,,0.42,*****,1.66,3,19088789.00,International Stocks
Northern Institutional Intl Eq Idx A,BIEIX,18.88,19.79,18.88,,,,1.93,,0.51,1,46643103.00,International Stocks
Northern Institutional Intl Growth A,BIGAX,24.56,19.02,24.56,11.73,,,1.84,****,1.06,4,110872824.00,International Stocks
Northern International Growth Equity,NOIGX,23.94,18.84,23.94,11.44,,,0.97,****,1.25,4,206939611.00,International Stocks
Northern International Select Equity,NINEX,22.29,16.21,22.29,11.14,,,0.04,****,1.25,4,124048411.00,International Stocks
Norwest Advantage International I,NVITX,12.6,12.33,12.6,8.36,,,0.92,***,1.5,4,267204013.00,International Stocks
Oakmark International,OAKIX,-7,14.51,-7,7.15,3.92,,2.09,***,1.32,6,815901575.00,International Stocks
Oakmark International Small Cap,OAKEX,9.2,28.22,9.2,3.02,,,2.37,***,1.93,3,65584316.00,International Stocks
One Group Intl Equity Index Fid,OIEAX,21.57,20.46,21.57,11.06,9.41,,2.14,***,0.88,1,584654148.00,International Stocks
Pacific Horizon International Eqty K,,10.76,17.28,10.76,,,,0.79,,1.72,1,916993.00,International Stocks
PaineWebber Pace Intl Equity,PCIEX,14.86,18.18,14.86,11.52,,,1.15,****,,3,175318339.00,International Stocks
Parkstone Intl Discovery Instl,PKIDX,12.66,18.24,12.66,10.16,6.1,,0.02,***,1.56,6,328148818.00,International Stocks
Payden & Rygel International Equity R,PIERX,10.83,14.06,10.83,,,,1.91,,0.9,2,13859669.00,International Stocks
PBHG International,PBHIX,12.74,15.36,12.74,9.54,,,1.46,***,2,3,14979819.00,International Stocks
Pegasus International Equity I,WOIEX,16.43,20.22,16.43,9.43,,,1.4,***,1.1,4,569521656.00,International Stocks
Pictet International Small Companies,PTSCX,5.35,9.5,5.35,,,,0,,1.2,2,5699414.00,International Stocks
Pillar International Growth I,,8.98,17.08,8.98,6.7,,,0.13,***,1.5,3,18917129.00,International Stocks
PIMCo International Developed Admin,,23.41,18.07,23.41,9.81,,,0,***,1.36,4,6974795.00,International Stocks
PIMCo International Developed Instl,PIAIX,23.92,18.26,23.92,10.15,10.88,,0.39,****,1.11,5,120491218.00,International Stocks
PIMCo International Growth Instl,,39.4,25.14,39.4,,,,0.13,,1.36,0,6407523.00,International Stocks
Preferred International,PFIFX,10.6,14.83,10.6,11.45,9.47,,1.07,***,1.2,6,265962032.00,International Stocks
Principal Spec Mkts Intl Securities,PISPX,8.8,17.22,8.8,14.24,9.09,,1.47,***,0.9,5,45197225.00,International Stocks
Principal Spec Mkts Intl Smallcap,PSMSX,11.92,14.33,11.92,,,,0.67,,1,1,74567376.00,International Stocks
Prudential World Intl Stock Z,PISZX,11.14,14.57,11.14,11.61,9.46,,1.03,****,1.5,6,259475966.00,International Stocks
Quantitative International Eqty Instl,QIEAX,11.85,18.83,11.85,5.33,,,0.35,***,1.68,4,1831281.00,International Stocks
Republic International Equity,RINEX,12.44,17.23,12.44,12.39,,,1.03,****,1.11,3,149364954.00,International Stocks
Reserve International Equity,RIEAX,18.97,16.15,18.97,7.97,,,0,***,2,3,11920102.00,International Stocks
RSI Retirement Trust Intl Equity,RSTEX,14.79,16.86,14.79,8.69,7.79,6.74,0,***,1.96,14,34080739.00,International Stocks
Safeco International Stock No Load,SFISX,14.26,19.24,14.26,,,,0,,1.63,2,22110783.00,International Stocks
Saratoga International Equity,SIEPX,13.22,13.86,13.22,8.85,,,0.8,***,1.4,,22349762.00,International Stocks
Schroder International Adv,,,13.4,,,,,,,,1,3000.00,International Stocks
Schroder International Inv,SCIEX,13.52,13.03,13.52,8.85,7.49,8.57,0.99,***,0.99,1,127298376.00,International Stocks
Schwab MarketManager International,SWOIX,13.29,13.4,13.29,,,,1.17,,0.5,2,86000000.00,International Stocks
Scudder International,SCINX,18.62,14.82,18.62,13.63,9.82,10.62,0,****,1.18,5,2878773337.00,International Stocks
Scudder International Barrett Intl,,,14.82,,,,,,,,0,22202788.00,International Stocks
Scudder International Growth & Income,SIGIX,9.45,12.22,9.45,,,,0.79,,1.75,1,52406915.00,International Stocks
Scudder Pathway International,SPIPX,4.83,12.37,4.83,,,,0.79,,,2,9027776.00,International Stocks
SEI International Equity A,SEITX,19.29,19.35,19.29,8.48,7.28,,1.67,***,1.21,1,1190115416.00,International Stocks
Sextant International,SSIFX,5.6,23.83,5.6,12.66,,,0,****,1.51,3,885391.00,International Stocks
Sit International Growth,SNGRX,18.95,19.97,18.95,11.21,7.85,,0.29,***,1.5,7,96108925.00,International Stocks
SSgA Active International,SSAIX,13.54,17.12,13.54,1.99,,,3.89,***,1,3,97767795.00,International Stocks
SSgA International Growth Opport,SINGX,,20.31,,,,,,,1.1,0,29027963.00,International Stocks
Standish International Equity,SDIEX,24.53,16.22,24.53,9.28,4.39,6.37,1.25,***,0.5,2,41677920.00,International Stocks
State Street Research Intl Equity S,SSNCX,23.57,16.21,23.57,5.06,4.67,,2.1,***,1.65,0,13610753.00,International Stocks
Stein Roe International,SRITX,11.48,17.8,11.48,5.23,,,0.9,***,1.55,3,129766096.00,International Stocks
STI Classic International Equity Tr,STITX,11.22,16.88,11.22,15.45,,,0.4,****,1.47,0,564266012.00,International Stocks
STI Classic Intl Equity Index Tr,SIEIX,30.02,21.26,30.02,14.54,,,1.73,****,1.06,4,55258745.00,International Stocks
Strong Foreign MajorMarkets,,,17.83,,,,,,,,,1523276.00,International Stocks
Strong International Stock,STISX,-7.04,9.63,-7.04,-4.8,-1.74,,2.06,**,1.6,0,95373829.00,International Stocks
Strong Overseas,,,24.97,,,,,,,,0,3421560.00,International Stocks
T. Rowe Price Foreign Equity,PRFEX,16.12,18.21,16.12,11.52,8.91,,1.6,***,0.75,10,3600988891.00,International Stocks
T. Rowe Price International Stock,PRITX,16.14,18.34,16.14,11.43,8.87,10.45,1.43,****,0.85,18,9949599017.00,International Stocks
Target International Equity,TAIEX,15.49,18.03,15.49,13.76,11.22,,0.61,****,0.93,5,238104308.00,International Stocks
Templeton Foreign Adv,TFFAX,-4.77,12.12,-4.77,,,,3.05,,0.87,1,56783920.00,International Stocks
Templeton Foreign Sm Companies Adv,,-6.32,6.87,-6.32,,,,2.27,,1.24,,14771751.00,International Stocks
Templeton Instl Foreign Equity,TFEQX,10.16,14.16,10.16,14.28,11.07,,2.14,****,0.84,2,4528689159.00,International Stocks
TIAA-CREF International Equity,TIINX,19.27,21.86,19.27,,,,0.93,,,1,111692000.00,International Stocks
Touchstone International Equity C,TOQCX,18.99,12.59,18.99,14.76,,,0,****,2.35,3,5231703.00,International Stocks
UAM Jacobs International Octagon,JIOPX,-5.01,8.77,-5.01,,,,0.82,,1.49,1,100148673.00,International Stocks
UAM McKee International Equity Instl,MKIEX,8.94,15.29,8.94,10.25,,,0.86,***,0.98,4,141808542.00,International Stocks
UAM MJI International Equity Inst,MJIEX,15.53,18.52,15.53,9.7,,,0.54,***,1.5,1,20881428.00,International Stocks
UAM TS&W International Equity,TSWIX,8.26,12.58,8.26,7.07,5.48,,0.1,***,1.3,6,116221505.00,International Stocks
UBS Non-U.S. Equity,UBNEX,13.44,16.86,13.44,10.12,,,0.24,***,1.81,3,4195488.00,International Stocks
UMB Scout WorldWide,UMBWX,17.96,15.68,17.96,18.2,14.53,,1.69,*****,0.87,5,100161261.00,International Stocks
United International Growth Y,,21.92,13.04,21.92,19.33,,,0.94,*****,0.97,2,8072114.00,International Stocks
USAA International,USIFX,3.95,16.82,3.95,10.53,8.47,9.73,0.96,***,1.05,10,531010714.00,International Stocks
Vanguard International Growth,VWIGX,16.93,17.79,16.93,11.76,10.07,9.74,1.16,****,0.59,17,7491735817.00,International Stocks
Vanguard International Value,VTRIX,19.46,20.62,19.46,7.91,7.71,7.7,4.08,***,0.49,2,809248098.00,International Stocks
Vanguard Total Intl Stock Index,VGTSX,15.6,20.49,15.6,,,,1.88,,0,2,2247609770.00,International Stocks
Vontobel International Equity,VNEPX,16.77,18.6,16.77,14.25,9.38,9.45,0,***,1.5,4,159735852.00,International Stocks
Waddell & Reed International Growth Y,,32.94,17.79,32.94,23.44,,,0,*****,1.59,2,515638.00,International Stocks
Warburg Pincus Advisor Intl Equity,WIETX,4.2,12.82,4.2,2.95,3.64,,0,***,1.76,7,312640639.00,International Stocks
Warburg Pincus Instl Intl Equity,WPIEX,6.15,12.59,6.15,4.78,4.98,,0.9,***,0.95,6,1044857016.00,International Stocks
Warburg Pincus International Grth,WIGCX,20.21,13.59,20.21,,,,1.1,,1.43,6,1620130.00,International Stocks
Warburg Pincus Intl Equity Comm,CUIEX,4.59,12.88,4.59,3.4,4.08,,0,***,1.33,9,1172071964.00,International Stocks
Warburg Pincus Major Forgn Mkts Comm,WPMFX,15.94,13.21,15.94,,,,1,,,1,44668774.00,International Stocks
WEBS Index Canada,,-5.75,14.39,-5.75,,,,0.44,,,2,11713809.00,International Stocks
William Blair International Growth,WBIGX,11.46,16.51,11.46,10.01,7.37,,0.17,***,1.43,2,139693476.00,International Stocks
WPG International,WPGIX,16.28,19.22,16.28,7.33,5.14,,0,***,1.71,0,6374904.00,International Stocks
Wright Intl Blue Chip Equities Stnd,WIBCX,6.14,16.85,6.14,9.17,7.77,,0.41,***,1.31,9,193370136.00,International Stocks
ABN AMRO Small Cap Growth Comm,RSMCX,-6.52,16.05,-6.52,8.96,9.89,,0,*,1.04,0,45754786.00,Small Growth
ABN AMRO Small Cap Growth Inv,,-7.25,15.77,-7.25,8.47,9.46,,0,*,1.29,0,503931.00,Small Growth
AIM Small Cap Growth Adv,,23.38,30.45,23.38,18.01,,,0,**,1.57,0,1072919.00,Small Growth
Alliance Quasar Adv,QUAYX,-4.3,17.44,-4.3,,,,0,,1.37,0,248011295.00,Small Growth
Alliance Quasar Instl I,AIQIX,,15.96,,,,,,,0,,,Small Growth
American Cent-20th Cent Giftrust,TWGTX,-13.09,22.73,-13.09,-3.15,7.35,17.7,0,*,1,2,920329891.00,Small Growth
American Cent-20th Cent New Opp,TWNOX,13.33,28.23,13.33,,,,0,,1.49,2,262309561.00,Small Growth
American Heritage,AHERX,-61.22,-24,-61.22,-13.64,-21.98,-4.29,0,*,5.85,8,6227618.00,Small Growth
Ark Small Cap Equity Instl,ARPEX,19.31,26.08,19.31,13.08,,,0,*,0.95,3,27418441.00,Small Growth
Armada Small Cap Growth Instl,ASMIX,7.56,22.73,7.56,,,,0,,,1,78720643.00,Small Growth
Atlas Emerging Growth A,ATEAX,5.77,14.11,5.77,,,,0,,1.49,1,15497539.00,Small Growth
Baron Asset,BARAX,4.27,26.58,4.27,19.41,19.86,16.86,0.08,***,1.32,11,5212000000.00,Small Growth
Baron Growth & Income,BGINX,0.1,22.56,0.1,18.78,,,0.14,**,1.37,4,343695555.00,Small Growth
Baron Small Cap,BSCFX,2.23,22.42,2.23,,,,0,,1.39,1,403727998.00,Small Growth
BB&T Small Company Growth Tr,BBCGX,3.29,22.26,3.29,12.46,,,0,*,1.79,4,88604656.00,Small Growth
Berger New Generation,BENGX,23,32.04,23,,,,0,,1.72,2,130141665.00,Small Growth
Berger Small Company Growth,BESCX,3.17,26.61,3.17,11.86,16.32,,0,**,1.48,0,616994145.00,Small Growth
Bjurman Micro-Cap Growth,,11.89,25.41,11.89,,,,0,,1.8,1,8945691.00,Small Growth
BlackRock Small Cap Grth Instl,PSGIX,7.38,25.53,7.38,15.55,19.24,,0,**,0.87,5,1251361766.00,Small Growth
BlackRock Small Cap Grth Svc,PCGEX,6.76,25.39,6.76,15.13,18.77,,0,**,1.17,5,174414347.00,Small Growth
BNY Hamilton Small Cap Growth Inst,BNSIX,7.89,20.52,7.89,,,,0,,,1,121040302.00,Small Growth
Brazos/JMIC Micro Cap Growth,BJMIX,32.8,20.51,32.8,,,,0,,,1,58157472.00,Small Growth
Brazos/JMIC Small Cap Growth Secs,BJSCX,13.58,20.88,13.58,,,,0,,1.35,2,382559635.00,Small Growth
Brinson U.S. Small Cap Growth I,BISCX,-6.73,18.94,-6.73,,,,0,,,1,22571694.00,Small Growth
Brown Capital Mgmt Small Co Instl,BCSIX,18.39,20.03,18.39,17.08,17.63,,0,***,1.5,6,14347081.00,Small Growth
BT Investment Small Cap,BTSCX,6.15,28.7,6.15,8.69,19.43,,0,**,1.25,2,184597241.00,Small Growth
Calvert New Vision Small Cap C,CNVCX,-10.31,12.13,-10.31,,,,0,,,1,7419225.00,Small Growth
Cappiello-Rushmore Emerging Growth,CREGX,-8.59,22.96,-8.59,-0.79,4.32,,0,*,1.5,6,15006000.00,Small Growth
Chase Small Capitalization Instl,ATSCX,-1.83,16.64,-1.83,16.82,14.45,,0,**,1,5,64755727.00,Small Growth
Chase Vista Small Cap Equity Instl,VSEIX,3.71,19.51,3.71,,,,0,,1.1,2,297189257.00,Small Growth
CitiFunds Small Cap Growth,CFSGX,4.75,26.52,4.75,18.68,,,0,**,1.35,0,31990399.00,Small Growth
Columbia Small Cap,CMSCX,4.69,17.54,4.69,,,,0,,1.46,2,136126835.00,Small Growth
Consulting Group Small Cap Growth,TSGUX,2.85,25.02,2.85,10.55,15.5,,0,**,0.9,1,1047550000.00,Small Growth
Delaware Trend Instl,DGTIX,13.84,23.08,13.84,14.79,14.29,,0,**,1.09,2,54474210.00,Small Growth
Diversified Investors Special Equity,DVPEX,3.09,20.84,3.09,17.73,,,0,**,1.49,4,846962770.00,Small Growth
Dresdner RCM Small Cap,,1.11,26.1,1.11,17.54,16.33,,0,**,1.02,7,557810198.00,Small Growth
Dreyfus Aggressive Growth,DGVAX,-36.67,19.86,-36.67,-13.69,,,0,*,1.27,0,36067956.00,Small Growth
Enterprise Small Company Growth Y,ENGEX,-3.76,27.19,-3.76,10.56,15.8,,0,**,1.84,0,8722514.00,Small Growth
Evergreen Select Sm Cap Grth Instl,EVSIX,2.13,25.19,2.13,9.82,,,0,*,0.92,1,45910731.00,Small Growth
Excelsior Small Cap A,UMLCX,-12.38,21.57,-12.38,-0.75,4.79,,0,*,0.94,1,46677562.00,Small Growth
Fasciano,FASCX,7.19,7.47,7.19,18.12,17.51,15.6,0.09,***,1.3,11,233151281.00,Small Growth
First American Regional Equity Y,FREIX,-5.52,20.11,-5.52,9.81,,,0.04,**,0.9,4,245150304.00,Small Growth
First American Strategy Aggress Grth,FAAGX,6.82,14.77,6.82,,,,1.83,,0.6,2,68590619.00,Small Growth
Firstar Emerging Growth Inst,FIEMX,8.49,21.11,8.49,,,,0.14,,0.9,1,60492719.00,Small Growth
Firstar MicroCap Instl,FIMPX,-2.45,23.07,-2.45,20.45,,,0,**,1.7,1,97533656.00,Small Growth
Flag Investors Emerging Growth Instl,FLIEX,6.72,33.41,6.72,15.27,,,0,*,1.19,3,7600000.00,Small Growth
Founders Discovery,FDISX,14.19,36.55,14.19,15.71,13.42,,0,*,1.52,1,239346811.00,Small Growth
Fountainhead Special Value,,-3.55,7.77,-3.55,,,,0,,0.97,,6800877.00,Small Growth
Franklin Small Cap Growth Adv,FSGAX,0.35,23.42,0.35,,,,0.86,,0.64,6,3629026.00,Small Growth
Fremont Institutional U.S. Micro-Cap,FIMCX,5.53,46.03,5.53,,,,0,,1.25,1,49132004.00,Small Growth
Fremont U.S. Micro-Cap,FUSMX,2.86,44.06,2.86,17.84,,,0,**,1.88,4,164839242.00,Small Growth
Fremont U.S. Small Cap,,17.63,40.65,17.63,,,,0,,1.5,1,9591221.00,Small Growth
FTI Small Capitalization Equity,FTSCX,3.03,24.04,3.03,14.07,,,0,**,1.5,3,52402688.00,Small Growth
Gabelli ABC,GABCX,11.14,11.91,11.14,10.58,9.44,,1.98,***,2.26,5,39358138.00,Small Growth
Galaxy Small Cap Value Tr,SMCEX,-5.22,9.75,-5.22,16.65,16.03,,0.55,***,0.96,6,217351474.00,Small Growth
Galaxy Small Company Equity Tr,GSETX,-10.66,17.29,-10.66,7.59,,,0,*,1.09,4,217351474.00,Small Growth
Govett Smaller Companies A,GSCQX,-11.73,28.33,-11.73,-11.64,8.46,,0,*,1.95,0,58907828.00,Small Growth
Hartford Capital Appreciation Y,HCAYX,3.68,25.67,3.68,,,,0,,1,2,23655776.00,Small Growth
Hartford Small Company Y,HSCYX,11.05,28.04,11.05,,,,0,,1,1,10143120.00,Small Growth
Henlopen,HENLX,16.76,26.78,16.76,20.22,18.46,,0,***,1.5,6,38504890.00,Small Growth
IAI Capital Appreciation,IACAX,2.21,22.55,2.21,,,,0,,1.4,2,52588047.00,Small Growth
Invesco Small Company Growth,FIEGX,14.9,26.27,14.9,14.91,13.69,,0,**,1.48,3,316793084.00,Small Growth
IPO Plus Aftermarket,IPOSX,18.44,32.74,18.44,,,,0,,,1,9770981.00,Small Growth
Ivy U.S. Emerging Growth Adv,,,,31.27,,,,,,,0,608087.00,Small Growth
Janus Venture,JAVTX,23.22,24.98,23.22,14.44,14.86,16.95,0.01,***,0.92,1,1246207331.00,Small Growth
John Hancock Small Cap Growth,,16.54,36.4,16.54,14.95,,,0,**,0.9,3,2681000.00,Small Growth
JP Morgan U.S. Small Company Opport,JPSOX,5.21,23.09,5.21,,,,0,,1.19,1,168135617.00,Small Growth
"Kalmar ""Growth-With-Value"" Small Cap",KGSCX,-7.66,14.27,-7.66,,,,0,,1.25,1,222311000.00,Small Growth
Kaufmann,KAUFX,0.72,17.07,0.72,11.08,15.38,20.87,0,***,1.88,12,4456076619.00,Small Growth
Kemper Small Capitalization Equity I,,-2.62,22.68,-2.62,10.49,,,0,*,0.53,1,14747460.00,Small Growth
Kobrick Emerging Growth,KFEGX,39.5,37.57,39.5,,,,0,,,0,23636162.00,Small Growth
Loomis Sayles Small Cap Growth Instl,LSSIX,18.73,36.72,18.73,,,,0,,1,1,33059194.00,Small Growth
Loomis Sayles Small Cap Growth Ret,,18.5,36.77,18.5,,,,0,,1.25,1,3644009.00,Small Growth
Managers Special Equity,MGSEX,0.2,19.78,0.2,15.87,15.35,16.75,0,***,1.35,,956513934.00,Small Growth
Marshall Small-Cap Growth,MRSCX,3.41,30.28,3.41,,,,0,,1.8,2,111555871.00,Small Growth
Matrix Emerging Growth,MEGFX,-2.72,15.45,-2.72,7.8,,,0,*,2,3,6824229.00,Small Growth
MFS New Discovery I,,20.18,23.91,20.18,,,,0,,1.18,1,3571805.00,Small Growth
Monetta,MONTX,-9.03,17.68,-9.03,5.26,6.97,11.5,0,*,1.45,12,120801900.00,Small Growth
Monetta Small-Cap Equity,MSCEX,-2.81,16.86,-2.81,,,,0,,,1,3822247.00,Small Growth
Montgomery Small Cap Opportunities P,MSCPX,-10.28,17.59,-10.28,,,,0,,1.75,2,326574.00,Small Growth
Montgomery Small Cap Opportunities R,MNSOX,-9.54,17.97,-9.54,13.08,,,0,*,1.5,3,90910275.00,Small Growth
Montgomery Small Cap P,MNSPX,-8.19,28.95,-8.19,,,,0,,1.49,2,19240229.00,Small Growth
Montgomery Small Cap R,MNSCX,-7.93,28.98,-7.93,10.62,10.49,,0,*,1.24,8,145347215.00,Small Growth
Montgomery U.S. Emerging Growth R,MNMCX,7.94,21.12,7.94,17.77,,,0,**,1.56,4,410438585.00,Small Growth
Morgan Grenfell Smaller Companies Svc,,0.73,19.99,0.73,,,,0.24,,1.5,,1006759.00,Small Growth
MSDW Capital Appreciation D,CAADX,-0.5,13.52,-0.5,,,,0,,,,208378.00,Small Growth
MSDW Developing Growth Secs D,DGRDX,8.93,24.81,8.93,,,,0,,,1,5905060.00,Small Growth
Munder Small Company Growth K,MULKX,-7.5,19.4,-7.5,16.63,14.87,,0,**,1.2,2,139849219.00,Small Growth
Munder Small Company Growth Y,MULYX,-7.22,19.51,-7.22,16.91,15.16,,0.12,**,0.95,2,188676985.00,Small Growth
N/I Numeric Investors Growth,NISGX,2.22,27.14,2.22,,,,0,,1,2,78223304.00,Small Growth
N/I Numeric Investors Micro Cap,NIMCX,16.27,28.66,16.27,,,,0,,1,2,99436823.00,Small Growth
Navellier Aggressive Growth,NPFGX,11.51,27.98,11.51,14.5,,,0,*,2,3,80577165.00,Small Growth
Navellier Aggressive Micro Cap,NPMCX,0.1,16.15,0.1,,,,0,,1.55,1,9682566.00,Small Growth
Navellier Aggressive Small Cap Eq A,NASCX,-0.06,22.43,-0.06,8.67,,,0,*,2.33,1,46910196.00,Small Growth
New England Star Small Cap C,NEJCX,1.41,25.81,1.41,,,,0,,2.95,,15388600.00,Small Growth
Nicholas Limited Edition,NCLEX,1.67,19.56,1.67,18.1,15.77,15.9,0.06,***,0.86,5,367191042.00,Small Growth
Nicholas-Applegate Mini-Cap Gr I,NAMCX,8.43,29.43,8.43,22.03,,,0,**,1.56,3,93908270.00,Small Growth
Nicholas-Applegate Sm Cap Growth I,NAGQX,4.37,26.99,4.37,11.63,12.77,,0,*,1.17,5,191031500.00,Small Growth
Nicholas-Applegate Sm Cap Growth Q,NAEQX,4.26,27.03,4.26,11.56,,,0,*,1.51,3,8716581.00,Small Growth
Norwest Advantage Small Co Stock I,NSCTX,-17.07,14.98,-17.07,4.56,7,,0,*,0.52,5,42686149.00,Small Growth
Oberweis Emerging Growth,OBEGX,-3.1,29.62,-3.1,2.76,8.34,15.83,0,*,1.44,11,93636042.00,Small Growth
Oberweis Micro-Cap,OBMCX,4.42,39.25,4.42,12.37,,,0,*,1.81,3,28307995.00,Small Growth
One Group Small Capitalization Fid,OGGFX,-4.04,15.97,-4.04,,,,0,,1.06,2,110091833.00,Small Growth
Oppenheimer Discovery Y,ODIYX,-1.73,17.49,-1.73,7.79,,,0,*,0.89,4,47090807.00,Small Growth
O'Shaughnessy Cornerstone Growth,OSCGX,3.67,23.82,3.67,,,,0,,1.56,2,116502186.00,Small Growth
Pacific Horizon Aggressive Growth K,PHAKX,0.02,16.56,0.02,,,,0,,1.93,0,4248026.00,Small Growth
PaineWebber Pace Small/Med Co Grth Eq,PCSGX,15.04,24.57,15.04,14.56,,,0,**,,3,334910196.00,Small Growth
Parkstone Small Cap Instl,PKSCX,-5.31,23.08,-5.31,4.38,10.19,16.07,0,*,1.35,0,332754839.00,Small Growth
PBHG Emerging Growth,PBEGX,3,21.48,3,5.12,16.38,,0,**,1.27,5,1043803193.00,Small Growth
PBHG Limited,PBLDX,13.05,24.38,13.05,,,,0,,1.4,0,141505764.00,Small Growth
PBHG Strategic Small Company PBHG,PSSCX,2.13,28.3,2.13,,,,0,,1.45,1,69372090.00,Small Growth
Provident Inv Couns Small Cap Growth,PISCX,5.82,25.04,5.82,7.48,13.95,,0,*,1,5,159034934.00,Small Growth
Provident Inv Couns Small Co Growth,PISMX,5.43,24.97,5.43,,,,0,,1.45,1,32171192.00,Small Growth
Quantitative Small Cap Instl,QBNAX,0.85,19.01,0.85,10.44,13.88,,0,**,1.41,2,5111166.00,Small Growth
Republic Small Cap Equity,RESCX,13.43,23.22,13.43,,,,0.19,,0.91,2,140300907.00,Small Growth
Robertson Stephens Diversified Grth A,RSDGX,16.42,29.93,16.42,,,,0,,1.94,2,69106849.00,Small Growth
Robertson Stephens Emerging Growth A,RSEGX,28.02,38.37,28.02,22.64,19.09,20.18,0,***,1.5,2,394349613.00,Small Growth
Robertson Stephens MicroCap Growth A,RSMGX,-0.63,22.61,-0.63,,,,0,,1.95,2,93222614.00,Small Growth
RSI Retirement Trust Emerg Grth Eqty,RSIGX,-7.08,23.86,-7.08,8.53,13.58,15.23,0,*,1.98,9,55406135.00,Small Growth
Saratoga Small Capitalization,SSCPX,-18.61,15.29,-18.61,5.08,,,0,*,1.28,4,31846734.00,Small Growth
Scudder 21st Century Growth,SCTGX,3.55,21.34,3.55,,,,0,,,2,35206632.00,Small Growth
Scudder Development,SCDVX,8.01,24.81,8.01,8.32,12.63,15.32,0,*,1.41,0,713031807.00,Small Growth
SEI Instl Mgd Small Cap Growth A,SSCGX,5.59,28.29,5.59,10.89,14.19,,0,*,1.1,6,723865403.00,Small Growth
Shelby,SHELX,12.77,25.57,12.77,10.93,13.64,18.31,0,**,1.29,18,38154998.00,Small Growth
Sit Small Cap Growth,SSMGX,1.97,15.56,1.97,8.06,,,0,*,1.5,4,47602676.00,Small Growth
Stagecoach Small Cap Instl,STSIX,-5.39,18.87,-5.39,,,,0,,0.75,2,68905108.00,Small Growth
Standish Small Cap Equity,SDSCX,1.71,25.77,1.71,11.19,11.45,,0,*,0.74,8,170952237.00,Small Growth
Standish Small Cap Equity Asset,SSQAX,,25.65,,,,,,,,0,8089528.00,Small Growth
State Street Research Emerging Grth S,,-3.27,25.68,-3.27,16.44,9.68,,0,*,2.1,1,5227444.00,Small Growth
Stein Roe Special Venture,SRSVX,-21.55,6.66,-21.55,3.44,,,0,*,1.29,4,96954832.00,Small Growth
T. Rowe Price Diversified Sm Cap Grth,PRDSX,3.58,25.24,3.58,,,,0,,1.25,1,64455123.00,Small Growth
Target Small Capitalization Growth,TASGX,2.55,22.49,2.55,13.79,12.42,,0,**,0.79,5,147780528.00,Small Growth
TCW Galileo Earnings Momentum,TGMOX,7.09,29.44,7.09,8.86,,,0,*,1.17,4,36903645.00,Small Growth
TCW Galileo Small Cap Growth,TGSCX,19.8,31.44,19.8,16.89,,,0,*,1.14,4,134830348.00,Small Growth
TCW/DW Small Capitalization Growth D,TSGDX,20.58,33.28,20.58,,,,0,,1.27,1,13090.00,Small Growth
Transamerica Premier Small Comp A,,,,51.55,,,,,,,0,2752.00,Small Growth
Transamerica Premier Small Comp Inv,TPSCX,80.27,51.55,80.27,,,,0,,1.4,1,134363051.00,Small Growth
Transamerica Premier Small Comp M,,,,51.34,,,,,,,0,2883.00,Small Growth
Turner Micro Cap Growth,,,,40.49,,,,,,1.25,0,4734377.00,Small Growth
Turner Small Cap Equity,TSCEX,8.53,24.34,8.53,17.15,,,0,**,1.24,0,188965170.00,Small Growth
UAM Sirach Special Equity Instl,SSEPX,5.64,27.16,5.64,9.63,10.85,,0,*,0.89,9,171437649.00,Small Growth
UAM Sirach Special Equity Instl Svc,SEPSX,5.12,27.31,5.12,,,,0,,1.14,2,3057959.00,Small Growth
USAA Aggressive Growth,USAUX,22.22,37.99,22.22,15.26,17.97,14.83,0,*,0.71,3,833307088.00,Small Growth
Value Line Small Cap Growth,VLSCX,4.61,29.21,4.61,8.79,9.68,,0,*,1.81,5,18745002.00,Small Growth
Value Line Special Situations,VALSX,29.88,27.5,29.88,22.54,19.11,15.43,0,***,1.08,9,164457026.00,Small Growth
Van Wagoner Micro-Cap,VWMCX,13.11,30.64,13.11,4.16,,,0,*,1.95,3,46113497.00,Small Growth
Van Wagoner Post-Venture,VWPVX,37.59,37.59,37.59,,,,0,,1.95,2,19081007.00,Small Growth
Vanguard Explorer,VEXPX,3.52,23.29,3.52,10.59,11.48,13.07,0.35,**,0.62,8,2307141343.00,Small Growth
Vanguard Small Cap Growth Index,VISGX,,22.27,,,,,,,,0,78447493.00,Small Growth
Warburg Pincus Instl Small Co Growth,WISCX,-4,21.25,-4,14.19,,,0,**,0.99,3,235038523.00,Small Growth
Warburg Pincus Small Co Growth Common,WSCGX,-1.4,22.47,-1.4,,,,0,,1.41,2,5344768.00,Small Growth
Wasatch Aggressive Equity,WAAEX,11.17,31.55,11.17,11.72,13.51,17.88,0,***,1.5,12,156600154.00,Small Growth
Wasatch Micro-Cap,WMICX,18.98,24.61,18.98,22.32,,,0,***,2.5,3,154426740.00,Small Growth
Wasatch Mid-Cap,WAMCX,24.81,38.11,24.81,8.75,17.16,,0,**,1.75,6,62538027.00,Small Growth
Wilshire Target Small Co Growth Instl,WSMGX,-3.44,19.77,-3.44,,,,0,,1.19,2,5490280.00,Small Growth
Wilshire Target Small Co Growth Invmt,DTSGX,-3.56,19.7,-3.56,7.07,9.18,,0,*,1.28,6,11780414.00,Small Growth
WPG Tudor,TUDRX,-22.03,10.81,-22.03,0.97,5.56,10.46,0,*,1.24,1,87799743.00,Small Growth
AARP Growth & Income,AGIFX,6.14,11.3,6.14,19.14,18.1,16.37,2.18,****,0.67,12,8079205944.00,Large Value
ABN AMRO Value Comm,RVALX,5.45,15.56,5.45,18.34,16.95,,1.07,***,1.01,5,4806291711.00,Large Value
ABN AMRO Value Inv,,4.66,15.44,4.66,17.84,16.56,,0.66,***,1.26,5,1428512513.00,Large Value
Accessor Value & Income,AVAIX,12.89,18.96,12.89,22.98,19.42,,0.97,****,1.05,0,2018770406.00,Large Value
Aetna Value Opportunity I,,,30.49,,,,,,,1.1,0,3482364972.00,Large Value
AHA Diversified Equity,AHDEX,17.56,21.15,17.56,25.3,21.54,16.91,1.4,****,0.17,11,4284739411.00,Large Value
AIM Basic Value Adv,,6.25,13.86,6.25,16.17,,,0,***,1.64,0,4798245578.00,Large Value
Amana Mutual Funds Trust Income,AMANX,14.07,9.25,14.07,17.04,13.48,11.7,1.01,***,1.36,9,2905050979.00,Large Value
American AAdvantage Growth & Inc AMR,AAGAX,6.51,12.38,6.51,17.91,,,2.19,***,0.34,4,106754409.00,Large Value
American AAdvantage Growth & Inc Inst,AADEX,6.17,12.28,6.17,17.59,16.7,15.38,1.86,***,0.61,11,128804843.00,Large Value
American AAdvantage Growth & Inc Milg,AAGMX,5.88,12.24,5.88,17.4,,,1.6,***,1,4,1273812035.00,Large Value
American AAdvantage Growth & Inc Plan,AAGPX,5.88,12.27,5.88,17.25,,,1.68,***,0.93,4,30908058305.00,Large Value
American Century Equity Growth Adv,BEQAX,25.14,22.98,25.14,,,,0.67,,0.94,1,199986030.00,Large Value
American Century Equity Growth Instl,AMEIX,25.59,23.17,25.59,,,,1.04,,,0,158928577.00,Large Value
American Century Equity Growth Inv,BEQGX,25.45,23.1,25.45,29.54,23.88,,0.85,*****,0.69,1,64160024.00,Large Value
American Century Income & Growth Adv,AMADX,27.37,22.12,27.37,,,,1.02,,0.94,1,1534156450.00,Large Value
American Century Income & Growth Inst,AMGIX,,22.23,,,,,,,,0,827828283.00,Large Value
American Century Income & Growth Inv,BIGRX,27.67,22.18,27.67,28.69,23.74,,1.15,*****,0.66,1,67397885.00,Large Value
AmSouth Equity Prem,AYEQX,18.38,16.87,18.38,,,,1.2,,,,63313094.00,Large Value
Amway Mutual,AMWYX,10.17,10.45,10.17,18.09,15.57,15.92,0.95,***,0.9,3,29025859.00,Large Value
Analysts Stock,,13.82,18.33,13.82,15.81,12.5,,0.57,***,2,5,650922368.00,Large Value
API Capital Income,APIGX,14.17,21,14.17,18.95,16.36,10.93,2.92,***,1.77,10,50457548.00,Large Value
Aquinas Equity Income,AQEIX,5.5,14.19,5.5,17.55,16.42,,1.47,***,1.37,4,389275386.00,Large Value
Arch Equity Income Tr,ARUTX,11.12,10.18,11.12,,,,1.89,,,1,358988366.00,Large Value
Ark Equity-Income Instl,AREIX,8.62,11.54,8.62,,,,2.22,,,2,127619132.00,Large Value
Ark Value Equity Instl,MVEFX,19.39,18.89,19.39,,,,0.72,,1.05,0,40024824.00,Large Value
Armada Equity Income Instl,AEIIX,10.23,11.8,10.23,19.12,,,1.64,***,1.01,0,2328667318.00,Large Value
Atlas Strategic Growth A,ASGAX,11.22,16.49,11.22,20.42,17.59,,0.51,***,1.21,5,468800000.00,Large Value
Babson Value,BVALX,6.07,14.07,6.07,18.11,17.34,15.6,1.19,***,0.97,14,278388870.00,Large Value
BB&T Growth & Income Stock Tr,BBISX,13.1,16.92,13.1,22.53,19.33,,1.28,****,0.86,5,854840528.00,Large Value
BlackRock Large Cap Val Eq Inst,PNVEX,10.48,16.07,10.48,20.86,19.2,,1.79,****,0.78,1,493327565.00,Large Value
BlackRock Large Cap Val Eq Svc,PNVSX,10.23,15.99,10.23,20.52,18.89,,1.5,****,1.09,1,223761171.00,Large Value
Boston Partners Large Cap Value Instl,BPLAX,-0.64,11.4,-0.64,,,,0.33,,1,1,2668578527.00,Large Value
Boston Partners Large Cap Value Inv,,-0.78,11.29,-0.78,,,,0.27,,1.11,1,1749390723.00,Large Value
Buffalo Equity,BUFEX,10.68,19.74,10.68,21.12,,,0.32,***,1.09,3,114871651.00,Large Value
California Investment Equity Income,EQTIX,13.15,17.08,13.15,,,,2.52,,0.78,2,904526383.00,Large Value
Calvert Social Investment Equity C,CSECX,9.76,26.47,9.76,15.82,,,0,**,2.3,0,19453699028.00,Large Value
Centura Large-Cap C,CEICX,15.77,23.38,15.77,,,,1.55,,0.75,2,406403933.00,Large Value
Chase Equity-Income Instl,RIEIX,26.2,18.89,26.2,24.93,20.3,15.65,0.72,****,1,10,2058611171.00,Large Value
Chase Vista Growth & Income Instl,VGIIX,14.5,16.76,14.5,,,,0.61,,0.86,2,114144732.00,Large Value
Chase Vista Large Cap Equity Instl,TREQX,22.18,19.08,22.18,26.23,21.44,,1.02,*****,0.4,4,2111536088.00,Large Value
Chase Vista Select Equity Income,VEISX,11.88,16.86,11.88,,,,2.4,,0.03,2,438849119.00,Large Value
CitiFunds Growth and Income,CFGIX,,17.18,,,,,,,,0,432067351.00,Large Value
Clipper,CFIMX,19.2,12.32,19.2,22.91,21.33,17.63,1.85,****,1.08,14,13559785036.00,Large Value
Consulting Group Large Cap Value Eqty,TLVUX,12.62,16.84,12.62,21.26,18.14,,1.21,****,0.78,,87232273.00,Large Value
CrestFunds Value Tr,CRVAX,18.2,16.41,18.2,21.58,18.19,,0.55,****,1.02,1,143647311.00,Large Value
Davis Growth & Income Y,,,16.41,,,,,,,1.14,0,112658832.00,Large Value
Davis NY Venture Y,DNVYX,15.12,21.43,15.12,,,,0.72,,0.59,2,23707359006.00,Large Value
Delaware Decatur Income Instl,DEDIX,10.1,11.9,10.1,19.91,,,2.71,****,0.68,4,4458353748.00,Large Value
Delaware Decatur Total Return Instl,DERIX,10.9,13.49,10.9,20.65,19.12,,1.67,****,0.83,5,77227405.00,Large Value
DFA U.S. Large Cap Value,DFLVX,11.98,16.78,11.98,19.93,17.9,,1.49,***,0.35,5,890255296.00,Large Value
DFA U.S. Large Cap Value II,DFCVX,11.98,16.78,11.98,19.68,,,1.69,***,0.82,4,594423326.00,Large Value
DFA U.S. Large Cap Value III,DFUVX,12.18,16.83,12.18,20.08,,,1.68,***,0.26,3,3239368523.00,Large Value
Diversified Investors Equity Income,DVEIX,12.45,13.45,12.45,19.68,,,1.13,****,1,4,285188819.00,Large Value
Diversified Investors Equity Value,DVEVX,10.75,10.84,10.75,,,,8.54,,1.07,2,1968149000.00,Large Value
DLB Value,DLBVX,5.25,13.06,5.25,18.14,,,1.73,***,0.71,3,7004825603.00,Large Value
Dodge & Cox Stock,DODGX,5.4,13.26,5.4,18.28,18.34,16.12,1.59,***,0.57,32,658140795.00,Large Value
Dreyfus,DREVX,17.15,20.31,17.15,14.55,12.24,11.83,0.91,**,0.71,1,485840047.00,Large Value
Dreyfus Equity Dividend,DREDX,10.97,10.43,10.97,18.55,,,1.65,***,1.27,3,200000000.00,Large Value
Dreyfus Growth & Income,DGRIX,12.83,18.54,12.83,14.4,12.15,,0.88,**,1.01,1,1080360000.00,Large Value
Dreyfus Growth Opportunity,DREQX,16.13,20.53,16.13,17.78,14.46,12.03,0.66,***,1.06,3,7695881296.00,Large Value
Dreyfus Premier Core Value Instl,DCVFX,7.2,15.07,7.2,17.77,17.37,,0.66,***,1.04,0,202245995.00,Large Value
Dreyfus Premier Core Value R,DTCRX,7.05,15.11,7.05,17.83,,,0.77,***,0.89,0,69363981.00,Large Value
Dreyfus Premier Growth & Income R,DRERX,11.25,18.65,11.25,26.08,,,0.24,****,0.99,3,70865110.00,Large Value
Dreyfus Premier Value R,DPVRX,10.25,16.4,10.25,14.93,,,0.58,**,0.94,3,537851182.00,Large Value
Edgar Lomax Value,,10.84,10.51,10.84,,,,0.62,,,1,15540276.00,Large Value
Endowments Growth and Income,ENDIX,11.19,11.36,11.19,18.92,16.97,15.02,2.81,****,0.73,9,71277472.00,Large Value
Enterprise Managed Y,ENMYX,7.19,11.9,7.19,16.92,,,0.96,***,1.04,3,1369639633.00,Large Value
Evergreen Select Diversified Val Inst,ESUIX,,19.3,,,,,,,,0,231641941.00,Large Value
Evergreen Select Diversified Val InSv,,,19.26,,,,,,,,0,74511828.00,Large Value
Evergreen Select Equity Income Instl,,-3.24,7.37,-3.24,,,,3.12,,,1,156427585.00,Large Value
Evergreen Select Equity Income InSvc,,,7.3,,,,,,,,0,1453785377.00,Large Value
Evergreen Select Strategic Value Inst,,6.23,16.86,6.23,,,,1.35,,,1,56828160.00,Large Value
Evergreen Select Strategic Value InSv,,,16.78,,,,,,,,0,7779327761.00,Large Value
Evergreen Value Y,EGVYX,9.77,11.55,9.77,18.14,17.35,,1.02,***,0.7,0,248975094.00,Large Value
FBP Contrarian Equity,FBPEX,17.76,24.61,17.76,21.94,19.86,,0.5,****,1.12,5,1054619012.00,Large Value
Federated Stock,FSTKX,17.26,16.48,17.26,24.07,20.86,16.24,0.87,****,0.99,1,43140900.00,Large Value
Fidelity Advisor Equity Income Instl,EQPIX,16.77,17.9,16.77,19.45,19.59,15.97,1.1,****,0.67,2,161817837.00,Large Value
Fidelity Advisor Growth Opport Instl,FAGCX,24.63,20.63,24.63,23.97,,,1.15,****,0.7,3,94478050.00,Large Value
Fidelity Equity-Income,FEQIX,12.52,16.16,12.52,20.97,18.52,15.69,1.47,****,0.65,5,846362443.00,Large Value
Fidelity Equity-Income II,FEQTX,22.98,20.55,22.98,22.91,19.34,,1.01,****,0.68,2,216325137.00,Large Value
First American Equity-Income Y,FAQIX,16.22,11.45,16.22,21.31,,,2.48,****,0.75,4,74810751.00,Large Value
First American Large Cap Value Y,FSKIX,9.99,16.64,9.99,20.48,,,1.25,****,0.8,11,1383439.00,Large Value
First Omaha Equity,FOEQX,7.84,10.74,7.84,14.19,15.19,,1.71,***,1.04,6,373400866.00,Large Value
Flag Investors Equity Partners Instl,FLIPX,25.63,30.03,25.63,,,,0.17,,1.1,2,64876764.00,Large Value
Flex-funds Muirfield,FLMFX,29.56,25.45,29.56,17.58,16,13.9,1.51,***,1.29,10,12513875.00,Large Value
Florida Street Growth,,2.85,20.19,2.85,,,,0.15,,,,31933215.00,Large Value
Gabelli Equity-Income,GABEX,20.45,20.53,20.45,21.98,18.68,,7.94,****,1.78,7,123555617.00,Large Value
Galaxy Equity Value Tr,GEVTX,24.15,27.21,24.15,24.58,,,0.23,****,1.04,4,163746412.00,Large Value
Galaxy Growth & Income Tr,SMGIX,15.96,20.76,15.96,21.81,19.76,,0.93,****,1.03,6,2490733232.00,Large Value
Glenmede Large Cap Value,GTMEX,17.51,22.78,17.51,24.86,17.66,,1.46,***,0.13,0,179955405.00,Large Value
Glenmede Tax Managed Equity,GTCEX,14.86,19.08,14.86,26.53,21.27,,1.49,****,0.13,0,2359230306.00,Large Value
GMO U.S. Core II,GMTWX,24.52,19.4,24.52,,,,1.27,,,2,271222023.00,Large Value
GMO U.S. Core III,GMCTX,24.69,19.49,24.69,25.6,23.78,19.74,1.3,*****,0.48,13,18430356088.00,Large Value
GMO U.S. Core IV,GMRFX,,19.5,,,,,,,,0,117050741.00,Large Value
GMO Value III,GMOVX,11.66,12.76,11.66,20.69,19.57,,1.82,****,0.61,8,469422026.00,Large Value
Golden Oak Value Instl,GOVAX,6.18,15.27,6.18,,,,0.45,,,,1724670832.00,Large Value
Goldman Sachs Growth & Inc Instl,GSIIX,-4.98,7.28,-4.98,,,,1.28,,0.83,1,4502602651.00,Large Value
Goldman Sachs Growth & Inc Svc,GSGSX,-5.45,7.15,-5.45,,,,0.76,,1.32,1,22293528.00,Large Value
Harris Insight Equity A,HIEQX,13.7,18.99,13.7,24.37,20.62,17.23,0.32,****,0.94,2,732269314.00,Large Value
Harris Insight Equity Instl,HEQIX,14.09,19.13,14.09,,,,0.58,,0.9,2,831892000.00,Large Value
Harris Insight Equity-Income A,HENAX,22.71,19.67,22.71,,,,0.84,,1.18,2,8518077.00,Large Value
Harris Insight Equity-Income Instl,HEIIX,23.03,19.81,23.03,,,,1.09,,0.93,2,2591099279.00,Large Value
HighMark Income-Equity Fid,HMIEX,15.12,16.71,15.12,19.25,18.09,15.43,1.33,***,0.99,0,1777495964.00,Large Value
HighMark Value Momentum Fid,HMVMX,9.72,18.05,9.72,21.69,19.65,,1.2,****,0.81,0,8315949.00,Large Value
Hotchkis & Wiley Equity-Income,HWEQX,4.32,9.22,4.32,17.11,15.81,14.13,1.95,***,0.87,4,,Large Value
Huntington Income-Equity Tr,HIEFX,17.79,12.24,17.79,20.15,17.09,,2.62,****,0.81,8,202559.00,Large Value
ICAP Discretionary Equity,ICDEX,10.17,14.25,10.17,21.17,,,1.57,****,0.8,4,3915056.00,Large Value
ICAP Equity,ICAEX,11.42,16.48,11.42,22,,,1.29,****,0.8,4,21923940.00,Large Value
ICAP Select Equity,,14.36,17.66,14.36,,,,0.44,,,1,43439262.00,Large Value
Idex Value Equity C,,-7.81,7.31,-7.81,,,,0,,2.05,1,717266774.00,Large Value
IDS Diversified Equity-Income Y,IDQYX,11.9,15.44,11.9,16.93,,,1.92,***,0.76,0,281770612.00,Large Value
IDS Equity Value Y,,9.27,16.27,9.27,18.38,,,1.57,***,0.76,0,25297055.00,Large Value
Intrust Stock Instl Svc,ISISX,9.85,10.34,9.85,,,,0.7,,,1,1060920.00,Large Value
Invesco Value Equity,FSEQX,15.05,16.66,15.05,20.39,18.84,15.61,0.76,****,1.15,5,1217038.00,Large Value
John Hancock Indep Medium Cap,JHMCX,12.25,18,12.25,20.49,,,0.63,***,1,3,272013881.00,Large Value
John Hancock Indep Value,JHIVX,18.79,18.79,18.79,23.25,,,1.17,****,0.95,3,3105277.00,Large Value
Kemper Value S,SCVAX,11.9,17.07,11.9,23.04,19.77,,0.77,****,1.23,6,62085018.00,Large Value
Kemper-Dreman High Return Equity I,,12.54,14.32,12.54,24.49,,,2.76,****,0.83,3,2970182.00,Large Value
Kent Growth & Income Instl,KNVEX,28.07,21.19,28.07,23.84,20.83,,0.71,****,0.92,0,45150424.00,Large Value
Kent Growth & Income Invmt,KNVIX,27.69,21.08,27.69,23.52,20.58,,0.5,****,1.17,0,1209190.00,Large Value
Kobren Moderate Growth,KOMGX,3.44,11.27,3.44,,,,1.78,,0.92,2,1040444.00,Large Value
Lazard Equity Instl,LZEQX,17.31,21.97,17.31,20.74,20.3,16.8,1.15,****,0.86,11,28247548.00,Large Value
Lazard Equity Open,LZEOX,16.98,21.88,16.98,,,,0.89,,1.22,1,72789381.00,Large Value
Legg Mason Value Nav,LMNVX,49.4,36.15,49.4,42.4,,,0,*****,0.73,4,958596279.00,Large Value
Legg Mason Value Prim,LMVTX,48.04,35.86,48.04,41.09,32.01,20.92,0,*****,1.73,16,6324541.00,Large Value
Lexington Corporate Leaders,LEXCX,9.94,8.91,9.94,18.33,18.01,16.43,4.25,****,0.62,10,399763798.00,Large Value
Lipper U.S. Equity Group,LUEGX,11.25,11.92,11.25,,,,0.9,,1.35,2,71677844.00,Large Value
Lipper U.S. Equity Prem,LUEPX,11.44,12.01,11.44,17.88,,,1.09,***,1.1,3,4706649.00,Large Value
Lipper U.S. Equity Ret,LUERX,11.25,11.91,11.25,,,,0.83,,1.35,2,38754750.00,Large Value
Loomis Sayles Core Value Instl,LSGIX,10.54,15.65,10.54,20.05,18.32,,1.26,****,0.84,7,321420353.00,Large Value
Loomis Sayles Core Value Ret,,10.15,15.53,10.15,,,,0.97,,1.1,1,45450000.00,Large Value
Loomis Sayles Strategic Value Instl,,11.84,25.62,11.84,,,,0.15,,1,1,6447978.00,Large Value
Loomis Sayles Strategic Value Ret,,11.57,25.56,11.57,,,,0,,1.25,1,485540000.00,Large Value
MainStay Instl Value Equity Instl,NIVEX,-8.1,6.86,-8.1,11.32,12.56,,1.22,**,0.93,8,6937000.00,Large Value
MainStay Instl Value Equity Instl Svc,MAVSX,-8.3,6.86,-8.3,11.04,,,0.94,**,1.18,4,1334437056.00,Large Value
Managers Income Equity,MGIEX,11.73,14.4,11.73,18.49,17.68,15.66,1.2,***,1.32,,89881458.00,Large Value
Marshall Equity-Income,MREIX,10.48,11.67,10.48,19.52,17.66,,1.85,****,1.22,5,87159545.00,Large Value
MAS Equity Instl,MPEQX,19.67,21.34,19.67,21.99,19.41,17.48,0.9,****,0.59,12,30836358.00,Large Value
Matterhorn Growth,FWLEX,12.27,19.36,12.27,12.14,9.3,12.7,0,**,3.65,1,56796135.00,Large Value
MFS Equity Income I,,17.66,11.97,17.66,,,,1.22,,1.18,1,41038733.00,Large Value
Montgomery Equity Income P,MEIPX,10.11,12.6,10.11,,,,1.86,,1.1,4,103493414.00,Large Value
Montgomery Equity Income R,MNEIX,10.74,12.78,10.74,18.23,,,2.1,***,0.85,4,117621180.00,Large Value
MSDW Instl Value Equity A,MSIVX,8.79,18.45,8.79,18.95,17.3,,1.42,***,0.7,8,94539597.00,Large Value
MSDW Instl Value Equity B,,8.49,18.47,8.49,,,,1.15,,0.95,2,1888622.00,Large Value
MSDW Value-Added Market Eq D,VADDX,12.15,16.73,12.15,,,,1.1,,0.58,1,1150498.00,Large Value
Munder Growth & Income K,MUGKX,10.07,13.69,10.07,18.96,,,1.45,***,1.19,3,1046801.00,Large Value
Munder Growth & Income Y,MUGYX,10.42,13.83,10.42,19.29,,,1.7,****,0.94,3,99602077.00,Large Value
N/I Numeric Investors Larger Cap Val,NILVX,10.78,14.68,10.78,,,,0.82,,,1,7368565.00,Large Value
Nations Value Inv A,NVLEX,17.14,19.39,17.14,21.37,18.66,,0.53,****,1.2,9,935533.00,Large Value
Nations Value Prim A,NVLUX,17.34,19.54,17.34,21.65,18.9,,0.73,****,0.95,9,11908152.00,Large Value
Nations Value Prim B,NVLBX,17.11,19.31,17.11,,,,0.53,,1.45,2,1082492.00,Large Value
Neuberger Berman Focus,NBSSX,13.24,34.51,13.24,17.78,17.55,17.01,0.24,***,0.84,11,25339991.00,Large Value
Neuberger Berman Focus Assets,NBFAX,17.56,40.19,17.56,,,,0,,1.5,2,18135216.00,Large Value
Neuberger Berman Focus Tr,NBFCX,13.17,34.52,13.17,17.78,17.54,,0.13,***,0.94,5,397343277.00,Large Value
Neuberger Berman Guardian,NGUAX,2.35,23.12,2.35,12.48,13.59,14.89,0.57,***,0.79,3,52230917.00,Large Value
Neuberger Berman Guardian Assets,NBGUX,1.67,22.98,1.67,,,,0,,1.5,2,70127586.00,Large Value
Neuberger Berman Guardian Tr,NBGTX,2.36,23.16,2.36,12.4,13.73,,0.45,**,0.87,3,10013945.00,Large Value
Neuberger Berman Partners,NPRTX,6.28,16.37,6.28,20.21,18.17,16.22,0,***,0.8,8,6164896.00,Large Value
Neuberger Berman Partners Assets,NBPBX,5.59,16.17,5.59,,,,0.39,,1.5,8,219304669.00,Large Value
Neuberger Berman Partners Tr,NBPTX,6.14,16.27,6.14,20.11,18.32,,0,***,0.9,8,158761131.00,Large Value
New England Equity Income C,,1.95,11.27,1.95,,,,0.74,,2.25,1,439939884.00,Large Value
New England Growth Opportunities C,NECOX,22.93,18.83,22.93,23.83,,,0,****,2,3,139704701.00,Large Value
New England Value C,NECVX,6.4,17.37,6.4,17.01,,,0,***,2,0,145310000.00,Large Value
New England Value Y,NEVYX,7.39,17.62,7.39,18.11,,,0.35,***,1,0,64421679.00,Large Value
Nicholas-Applegate Value I,NAVIX,20.13,16.99,20.13,,,,0.53,,1,2,2751426.00,Large Value
Nuveen Growth and Income Stock R,NNGRX,10.26,15.54,10.26,,,,1.05,,0.95,2,390694.00,Large Value
Oakmark,OAKMX,3.73,12.53,3.73,16.92,17.29,,1.06,***,1.08,7,29310962.00,Large Value
One Group Large Company Value Fid,HLQVX,13.89,15.5,13.89,19.94,16.78,,1.12,***,0.95,0,41197584.00,Large Value
Oppenheimer Disciplined Value Y,CGRYX,8.91,18.43,8.91,,,,1.15,,0.78,12,3723990.00,Large Value
O'Shaughnessy Dogs of the Market,OSDGX,9.1,14.17,9.1,,,,1.09,,1.46,2,841671085.00,Large Value
OVB Equity-Income A,OVEIX,13.77,12.52,13.77,,,,1.94,,1.11,2,185300007.00,Large Value
OVB Equity-Income B,,13.5,12.5,13.5,,,,1.72,,1.36,2,7275271.00,Large Value
PaineWebber Pace Large Co Value Eqty,PCLVX,18.65,16.55,18.65,22.84,,,0.65,****,,3,375185815.00,Large Value
Payden & Rygel Growth & Income R,PDOGX,18.1,13.72,18.1,,,,1.39,,0.54,2,502978619.00,Large Value
PBHG Large Cap Value PBHG,PLCVX,34.78,28.21,34.78,,,,0.65,,1.17,1,32115636.00,Large Value
Pegasus Equity-Income I,PEINX,0.18,6.25,0.18,13.48,,,2.98,***,0.7,2,265761762.00,Large Value
Pelican,PELFX,11.67,13.02,11.67,19.47,17.94,,1.68,****,1.1,9,207514032.00,Large Value
Philadelphia,PHILX,11.13,8.26,11.13,19.37,14.82,13.31,1.26,***,1.53,11,19685094.00,Large Value
Pillar Equity-Income I,PLIAX,11.42,13.94,11.42,19.02,16.92,,1.98,***,0.8,2,885491.00,Large Value
Preferred Value,PFVLX,14.39,17.21,14.39,22.42,20.49,,1.02,****,0.84,6,18346281.00,Large Value
Profit Value,,31.67,30.11,31.67,,,,0,,1.95,1,7212.00,Large Value
Prudential Equity Z,PEQZX,8.56,14.26,8.56,,,,1.55,,0.63,2,555236657.00,Large Value
Quaker Aggressive Growth,QUAGX,29.78,19.2,29.78,,,,0.43,,1.34,2,13848307.00,Large Value
Regions Value Tr,RVLAX,,15.26,,,,,,,,0,312921412.00,Large Value
Republic Equity A,REPEX,29.2,23.29,29.2,24.18,,,0.29,****,,,57731791.00,Large Value
Republic Equity Y,REQYX,29.59,23.38,29.59,,,,0.49,,,,312182.00,Large Value
Rockhaven,RAMEX,11.88,17.11,11.88,,,,1.16,,1.49,1,10103417.00,Large Value
RSI Retirement Trust Value Equity,RSIVX,17.9,21.01,17.9,25.04,20.96,14.66,0,****,1.2,3,205368870.00,Large Value
RWB/DFA U.S. High Book to Market,DFBMX,12.06,16.84,12.06,,,,1.48,,,2,98445429.00,Large Value
Safeco Income No Load,SAFIX,6.31,14.55,6.31,18.56,16.53,13.46,2.59,***,0.85,2,10367000.00,Large Value
Safeco U.S. Value No Load,SAFVX,12.61,16.27,12.61,,,,0.99,,1.19,1,6924093.00,Large Value
Salomon Brothers Investors O,SAIFX,15.44,17.44,15.44,23.94,20.58,16.6,0.95,****,0.69,1,1702321948.00,Large Value
Salomon Brothers Opportunity,SAOPX,4.86,13.81,4.86,18.58,17.83,14.5,0.84,***,1.12,19,17.00,Large Value
Saratoga Large Capitalization Value,SLCVX,11.77,14.9,11.77,20.25,,,0.43,****,1.3,4,178891567.00,Large Value
Scudder Growth & Income,SCDGX,6.07,11.41,6.07,19.09,17.85,16.38,2.15,****,0.76,12,274613.00,Large Value
Scudder Large Company Value,SCDUX,9.5,15.99,9.5,20.16,15.54,15.44,0.61,***,0.93,3,4837020.00,Large Value
SEI Instl Mgd Equity-Income A,SEEIX,16.12,17.43,16.12,20.11,18.66,15.86,2.11,****,0.85,4,1178255.00,Large Value
SEI Instl Mgd Large Cap Value A,TRMVX,11.35,16.58,11.35,22.41,19.42,14.37,1.26,****,0.85,1,62521729.00,Large Value
SEI Instl Mgd Tax-Managed Large Cap A,TMLCX,,24.61,,,,,,,,,3425420.00,Large Value
Selected American,SLASX,16.27,22.19,16.27,27.81,22.77,18.04,0.48,*****,0.96,1,2500373.00,Large Value
Sequoia,SEQUX,35.25,20.34,35.25,33.1,28.07,21.81,0.22,*****,1,28,614345984.00,Large Value
Stagecoach Equity Value Instl,PCEIX,7.05,14.16,7.05,19.98,,,1.15,***,0.95,1,9580849.00,Large Value
Standish Tax-Sensitive Equity,SDTSX,15.36,24.36,15.36,27.6,,,0.6,*****,0.5,2,235170235.00,Large Value
Star Relative Value Y,STRVX,18.5,21.37,18.5,,,,0.8,,,,686305496.00,Large Value
Strategist Equity-Income,,11.74,15.68,11.74,,,,1.6,,1.25,1,21018805.00,Large Value
Stratton Growth,STRGX,11.46,15.47,11.46,20.08,20.64,15.14,1.62,****,1.11,26,57736840.00,Large Value
Strong Dow 30 Value,SDOWX,16.11,15.36,16.11,,,,1.57,,,1,2102894.00,Large Value
T. Rowe Price Equity-Income,PRFDX,9.23,11.1,9.23,19.21,18.75,15.18,2.19,****,0.79,13,5360392.00,Large Value
Target Large Capitalization Value,TALVX,10.25,12.95,10.25,19.47,18.14,,1.54,****,0.72,5,55277244.00,Large Value
Torray,TORYX,8.19,21.27,8.19,24.18,24.16,,0.38,*****,1.13,8,112375332.00,Large Value
UAM Chicago Asset Mgmt Value/Contr,CAMEX,15.86,16.81,15.86,16.19,,,0.94,***,0.95,4,1272529.00,Large Value
UAM DSI Disciplined Value Instl,DSIDX,10.19,14.2,10.19,18.44,16.69,,1.05,***,1.05,1,100400000.00,Large Value
UAM DSI Disciplined Value Instl Svc,DSVIX,9.88,14.15,9.88,,,,0.77,,1.3,1,50774416.00,Large Value
UAM ICM Equity,ICMEX,-3.37,11.49,-3.37,17.41,16.32,,1.8,***,0.9,0,13975832.00,Large Value
UAM TJ Core Equity Instl Svc,TJCEX,30.1,20.65,30.1,26.15,,,0.5,*****,1.26,3,180017327.00,Large Value
Undiscovered Managers All Cap Value,,14.75,21.04,14.75,,,,0.17,,,1,36494862.00,Large Value
Undiscovered Managers Core Equity,,21.47,16.04,21.47,,,,0.55,,,1,970714.00,Large Value
USAA Growth & Income,USGRX,6.46,17.52,6.46,18.19,17.08,,1,***,0.85,5,617906791.00,Large Value
USAA Income Stock,USISX,8.1,10.71,8.1,17.67,15.79,14.85,3.45,****,0.65,0,12378468.00,Large Value
Vanguard Equity-Income,VEIPX,17.34,13.23,17.34,21.8,19.55,15.62,2.5,****,0.45,10,571504906.00,Large Value
Vanguard Growth & Income,VQNPX,23.94,20.59,23.94,27.41,22.81,19.03,1.03,*****,0.36,12,1336726769.00,Large Value
Vanguard Value Index,VIVAX,14.64,17.5,14.64,21.91,19.79,,1.54,****,0.2,6,17788603.00,Large Value
Vanguard Windsor,VWNDX,0.81,13.46,0.81,15.82,15.09,13.37,1.49,***,0.27,3,243641378.00,Large Value
Vanguard Windsor II,VWNFX,16.36,14.92,16.36,24.13,21.29,17.33,1.97,****,0.37,13,37494157.00,Large Value
Vontobel U.S. Value,VUSVX,14.71,17.92,14.71,23.16,21.27,,0.86,*****,1.58,8,287305636.00,Large Value
Wachovia Quantitative Equity Y,BTQYX,24.59,23.29,24.59,,,,1.04,,0.87,1,22484289.00,Large Value
Warburg Pincus Advisor Growth & Inc,WGITX,12.23,16.49,12.23,12.76,,,0.34,**,1.54,1,1003952129.00,Large Value
Warburg Pincus Growth & Income Comm,RBEGX,12.66,16.54,12.66,13.18,13.44,14.67,0.7,***,1.15,1,8566475.00,Large Value
Warburg Pincus Instl Value,WPIVX,13.75,16.7,13.75,,,,1.08,,0.75,1,9903000.00,Large Value
Westcore Blue Chip,WTMVX,17.88,20.31,17.88,23.22,20.7,16.87,0.44,****,1.15,7,1304803918.00,Large Value
Wilshire Target Large Co Value Instl,WLCVX,10.45,13.73,10.45,,,,1.57,,0.76,2,1880705.00,Large Value
Wilshire Target Large Co Value Invmt,DTLVX,10.31,13.63,10.31,19.24,17.61,,1.44,***,0.86,6,38926819.00,Large Value
Accessor Growth,AGROX,46.65,27.65,46.65,32.79,26.74,,0.11,*****,0.93,0,157202582.00,Large Growth
Advantus Horizon C,,33.43,21.08,33.43,25.26,,,,****,2.07,2,2635642.00,Large Growth
AIM Weingarten Instl,,33.03,27.61,33.03,25.77,21.95,,0.39,****,0.64,7,89623964.00,Large Growth
Alger Capital Appreciation Retirement,ALARX,63.44,33.02,63.44,31.29,26.23,,0,****,1.62,5,6452887.00,Large Growth
Alger Growth Retirement,ALGRX,49.97,27.08,49.97,28.37,23.43,,0,****,1.06,5,44115995.00,Large Growth
American Capital Exchange,ACEHX,29.36,15.94,29.36,28.08,23.91,18.75,0.41,*****,0.88,8,86374055.00,Large Growth
American Cent-20th Cent Growth Adv,TCRAX,36.54,20.44,36.54,,,,,,1.25,0,6859540.00,Large Growth
American Cent-20th Cent Growth Instl,TWGIX,37.16,20.59,37.16,,,,,,0.8,0,178941.00,Large Growth
American Cent-20th Cent Growth Inv,TWCGX,36.82,20.5,36.82,26.71,19.25,18.74,0,****,1,0,6493188956.00,Large Growth
American Cent-20th Cent Ultra Adv,TWUAX,34.23,22.93,34.23,,,,,,1.25,2,119163708.00,Large Growth
American Cent-20th Cent Ultra Inst,TWUIX,34.86,23.05,34.86,,,,,,0.8,2,30569508.00,Large Growth
American Cent-20th Cent Ultra Inv,TWCUX,34.56,23.02,34.56,23.56,20.14,24.04,0,****,1,2,27149970442.00,Large Growth
American Trust Allegiance,,36.22,27.07,36.22,,,,,,1.45,1,11629220.00,Large Growth
Ark Capital Growth Instl,ARCGX,41.21,35.07,41.21,29.1,19.04,,0,****,0.39,2,75073830.00,Large Growth
Armada Equity Growth Instl,AEQIX,29.09,22.87,29.09,28.51,22.1,,0,*****,0.97,0,1291521272.00,Large Growth
Armada Tax Managed Equity Instl,AETIX,,22.87,,,,,,,,,243348283.00,Large Growth
Armstrong Associates,ARMSX,19.29,23.34,19.29,14.22,13.33,11.27,4.02,**,1.3,30,15121159.00,Large Growth
Babson Growth,BABSX,32.24,26.23,32.24,27.27,21.92,16.28,0.17,****,0.8,3,512059968.00,Large Growth
BB&T Large Company Growth Tr,BLCTX,25.18,24.26,25.18,,,,,,,,66139868.00,Large Growth
Bear Stearns S&P Stars Y,BSSPX,40.09,28.56,40.09,28.4,,,,****,1,0,36990796.00,Large Growth
Berger 100,BEONX,16.23,30.38,16.23,14.5,11.2,19.45,0,***,1.3,1,1497912757.00,Large Growth
Berger Growth & Income,BEOOX,22.49,20.89,22.49,20.22,14.38,16.27,0.22,***,1.44,0,318465306.00,Large Growth
BlackRock Large Cap Gr Eq Instl,PNAPX,41.31,26.28,41.31,29.75,21.46,,0,****,0.75,1,1109635752.00,Large Growth
BlackRock Large Cap Gr Eq Svc,PNGEX,40.89,26.26,40.89,29.38,21.11,,0,****,1.05,1,235340427.00,Large Growth
Boston 1784 Growth & Income,SEGWX,22.7,17.32,22.7,21.99,18.79,,0.18,****,0.9,5,579090506.00,Large Growth
Bramwell Growth,BRGRX,34.5,22.7,34.5,26.58,,,,****,1.66,4,248483638.00,Large Growth
Bremer Growth Stock,BSTKX,29.91,26.84,29.91,,,,,,1.05,1,68079293.00,Large Growth
Bridgeway Social Responsibility,BRSRX,37.8,25.92,37.8,26.86,,,,*****,1.5,4,1697266.00,Large Growth
Capital Exchange,CAPEX,25.75,21.53,25.75,27.78,24.87,19.12,0.67,*****,0.64,8,175721832.00,Large Growth
Chase Equity-Growth Instl,RITEX,41.38,27.4,41.38,32.72,23.85,17.84,0.06,*****,1,4,178878495.00,Large Growth
Chase Growth,,29.64,23.69,29.64,,,,,,1.47,1,5693819.00,Large Growth
Chase Vista Select Large Cap Growth,VSLGX,40.83,25.97,40.83,,,,,,0.02,2,746606607.00,Large Growth
Chicago Trust Growth & Income,CHTIX,35.45,23.68,35.45,29.12,24.01,,0.03,*****,1.07,5,428239935.00,Large Growth
CitiFunds Large Cap Growth,CFLGX,37.19,22.62,37.19,27.07,21.12,,0,****,1.05,3,486976534.00,Large Growth
Citizens Index,WAIDX,42.75,27.49,42.75,33.34,,,,*****,1.59,0,437864620.00,Large Growth
Citizens Index Instl,WINIX,43.79,27.75,43.79,,,,,,0.88,0,43704798.00,Large Growth
Columbia Growth,CLMBX,30.34,25.59,30.34,25.79,21.32,18.8,0.18,****,0.71,7,1588204311.00,Large Growth
Consulting Group Large Cap Growth,TLGUX,38.06,26.05,38.06,29.2,23.28,,0.13,*****,0.69,0,2164674000.00,Large Growth
CrestFunds Capital Appreciation Tr,CCATX,28.88,26.34,28.88,25.49,19.13,,0.02,***,1.1,1,133303878.00,Large Growth
CrestFunds Life Vision Maximum Growth,CVMGX,12.31,18.72,12.31,,,,,,,,17438400.00,Large Growth
Delaware Tax Efficient Equity Instl,DVXIX,25.46,22.68,25.46,,,,,,,1,12.00,Large Growth
Delaware U.S. Growth Instl,DEUIX,29.89,25.94,29.89,26.54,,,,****,1.14,1,35051781.00,Large Growth
Diversified Investors Aggressive Eqty,DVAEX,41.75,32.85,41.75,,,,,,1.41,2,68696175.00,Large Growth
Diversified Investors Equity Growth,DVEGX,35.99,29.77,35.99,26.58,,,,****,1.2,4,617103526.00,Large Growth
Diversified Investors Growth & Income,DVGIX,34.66,24.96,34.66,29.97,,,,*****,1.14,4,685996645.00,Large Growth
Dresdner RCM Large Cap Growth,,44.86,29.93,44.86,,,,,,0.95,1,7923541.00,Large Growth
Dreyfus Appreciation,DGAGX,30.85,20.52,30.85,28.11,24.61,18.49,0.54,*****,0.87,8,4168884710.00,Large Growth
Dreyfus Third Century,DRTHX,30.17,24.26,30.17,27.93,21.35,16.82,0,****,0.97,4,1048993656.00,Large Growth
Eastcliff Growth,EASGX,29.23,29.76,29.23,22.83,,,,***,1.3,3,48718113.00,Large Growth
Enterprise Growth Y,ENGYX,32.09,27.52,32.09,,,,,,0.97,2,54986620.00,Large Growth
Excelsior Instl Optimum Growth,EXOAX,65.23,36.46,65.23,,,,,,0.7,2,74019412.00,Large Growth
Excelsior Instl Optimum Growth Tr,,64.66,36.33,64.66,,,,,,1.05,2,9449982.00,Large Growth
Excelsior Large Cap Growth,UMLGX,67.04,39.37,67.04,,,,,,1.05,1,86459380.00,Large Growth
Fidelity Advisor Equity Growth Instl,EQPGX,39.47,24.29,39.47,26.65,23.26,24.92,0.09,*****,0.75,1,1087169370.00,Large Growth
Fidelity Growth Company,FDGRX,27.23,21.16,27.23,20.9,19.26,20.74,0.16,****,0.68,1,11440403608.00,Large Growth
Fidelity Large Cap Stock,FLCSX,36.48,23.49,36.48,27.33,,,,*****,0.84,0,316953443.00,Large Growth
First American Large Cap Growth Y,FADGX,24.05,21.21,24.05,22.96,,,,****,0.8,4,766608868.00,Large Growth
First Mutual,FMFDX,34.2,36.27,34.2,26.1,19.96,16.88,0,***,1.74,17,34034403.00,Large Growth
Firstar Growth Instl,FIGWX,30.46,24.04,30.46,23.74,18.45,,0.1,***,0.89,2,236554942.00,Large Growth
Founders Growth,FRGRX,25.04,21.11,25.04,22.65,21.02,20.31,0.05,****,1.1,0,2377338718.00,Large Growth
Gabelli Growth,GABGX,29.78,30.19,29.78,30.27,23.17,19.78,0,*****,1.43,3,1864025777.00,Large Growth
Galaxy Equity Growth Tr,GEGTX,26.44,24.49,26.44,26.05,,,,****,0.95,4,904013476.00,Large Growth
Globalt Growth,GROWX,25.84,22.43,25.84,24.78,,,,****,1.16,3,13578976.00,Large Growth
GMO Growth III,GMOGX,37.3,27.46,37.3,28.83,24.91,20.83,0.57,*****,0.48,10,156863197.00,Large Growth
Golden Oak Growth Instl,GDGAX,42.51,23.8,42.51,31.03,20.38,,0.09,****,1.1,3,43880079.00,Large Growth
Goldman Sachs Core Large Cap Grth Ins,GCGIX,30.64,25.61,30.64,,,,,,0.72,1,185649328.00,Large Growth
Goldman Sachs Core Large Cap Grth Svc,GSCLX,30.13,25.52,30.13,,,,,,1.17,1,1164462.00,Large Growth
Harbor Capital Appreciation,HACAX,36.8,30.01,36.8,29.17,25.15,21.74,0.16,*****,0.7,8,4180992953.00,Large Growth
Harris Bretall Sullivan Growth Equity,HBSSX,32.14,31.21,32.14,,,,,,1.29,2,15294958.00,Large Growth
HighMark Growth Fid,HMGRX,31.76,25.97,31.76,28.35,21.64,,0.02,****,0.92,0,572217321.00,Large Growth
Huntington Growth Tr,HGWTX,18.55,15.81,18.55,23.27,20.16,,0.57,****,0.8,5,325889080.00,Large Growth
IAI Growth,IAGRX,26.53,27,26.53,20.26,16.61,,0,***,1.25,4,17852673.00,Large Growth
Idex Aggressive Growth C,IAGCX,48.59,29,48.59,24.55,,,,***,2.4,4,7447711.00,Large Growth
Idex Growth C,IDEUX,63.79,27.91,63.79,30.64,24.42,,0,****,2.16,4,41577486.00,Large Growth
IDS Growth Y,IGRYX,22.64,27.12,22.64,22.88,,,,***,0.8,3,686019273.00,Large Growth
IDS New Dimensions Y,IDNYX,28.37,24.26,28.37,25.91,,,,****,0.75,3,4990512369.00,Large Growth
Invesco Growth,FLRFX,41.72,26.85,41.72,29.68,20.84,19.14,0.29,****,1.04,5,1220076726.00,Large Growth
IPS Millennium,IPSMX,40.28,23.33,40.28,28.48,,,,****,1.4,3,28680037.00,Large Growth
ISG Capital Growth Instl,ICGIX,32.4,22.65,32.4,,,,,,0.58,1,173542102.00,Large Growth
Janus,JANSX,38.89,28.44,38.89,26.8,21.15,20.43,0.24,*****,0.86,12,25490647375.00,Large Growth
Janus Equity-Income,JAEIX,40.05,26.34,40.05,,,,,,1.45,2,349235822.00,Large Growth
Janus Growth & Income,JAGIX,34.87,21.49,34.87,31.79,24.31,,0.25,*****,0.96,1,3504140016.00,Large Growth
Janus Mercury,Quote Plus,30.04,58.41,27.76,26.3,,0,,*****,0.96,5,3111545396.00,Large Growth
Janus Olympus,JAOLX,56.97,32.66,56.97,34.29,,,,*****,1.03,1,1288085591.00,Large Growth
Janus Twenty,JAVLX,73.39,29.67,73.39,42.2,29.58,25.76,0.26,*****,0.91,1,15797150428.00,Large Growth
Jensen,JENSX,16.7,17.16,16.7,20.22,16.85,,1.13,***,1.02,6,22897151.00,Large Growth
John Hancock Indep Growth,JHIGX,37.94,27.44,37.94,31.32,,,,*****,0.95,3,7367000.00,Large Growth
Johnson Growth,,29.1,23.05,29.1,26.43,20.56,,0.16,****,0.97,5,42924197.00,Large Growth
Kemper Growth I,,14.68,27.71,14.68,16.28,,,,**,0.65,1,25161002.00,Large Growth
Kobrick Growth,,,,33.59,,,,,,,,1430363.00,Large Growth
Loomis Sayles Growth Instl,LSGRX,12.54,22.01,12.54,18.87,16.2,,0,**,0.85,7,25999964.00,Large Growth
Loomis Sayles Growth Ret,,12.25,21.94,12.25,,,,,,1.1,1,607117.00,Large Growth
Lou Holland Growth,LHGFX,35.75,24.03,35.75,,,,,,1.35,2,9116328.00,Large Growth
MainStay Instl Growth Equity Instl,NIGEX,40.5,27.97,40.5,28.69,23.5,,0,*****,0.93,7,818573000.00,Large Growth
MainStay Instl Growth Equity Instl Sv,MAGSX,40.18,27.91,40.18,28.4,,,,*****,1.18,4,12958000.00,Large Growth
Managers Capital Appreciation,MGCAX,57.34,31.25,57.34,26.34,21.51,19.04,0,****,1.26,,87866575.00,Large Growth
Markman Aggressive Allocation,MMAGX,26.17,31.32,26.17,18.8,,,,***,0.95,3,80539822.00,Large Growth
Marsico Focus,MFOCX,51.3,22.41,51.3,,,,,,1.56,1,1204446583.00,Large Growth
Marsico Growth & Income,MGRIX,43.4,24.26,43.4,,,,,,1.51,1,373739286.00,Large Growth
Memorial Growth Equity Inst,MFGIX,,21.66,,,,,,,,0,33346581.00,Large Growth
Memorial Growth Equity Tr,,,,21.63,,,,,,,0,257809.00,Large Growth
MFS Massachusetts Investors Gr Stk I,MGTIX,40.34,25.68,40.34,,,,,,0.49,3,25644210.00,Large Growth
MFS Strategic Growth I,MSGIX,45.71,28.48,45.71,,,,,,1.08,2,25113470.00,Large Growth
Millennium Growth,MGFQX,84.06,55.39,84.06,,,,,,,1,9601285.00,Large Growth
Monetta Large-Cap Equity,MLCEX,8.99,32.13,8.99,21.15,,,,***,1.51,2,3783722.00,Large Growth
Montag & Caldwell Growth I,MCGIX,32.26,27.08,32.26,,,,,,0.93,2,954752818.00,Large Growth
Montag & Caldwell Growth N,MCGFX,31.85,26.94,31.85,32.14,,,,*****,1.23,4,1157201989.00,Large Growth
MSDW American Value D,AMVDX,32.12,18.19,32.12,,,,,,0.64,1,135305114.00,Large Growth
MSDW Capital Growth Secs D,CAPDX,18.11,20.15,18.11,,,,,,0.82,1,6823709.00,Large Growth
Nations Capital Growth Inv A,NCGIX,29.73,28.21,29.73,26,20.42,,0,****,1.2,3,50166430.00,Large Growth
Nations Capital Growth Prim A,NCGRX,30.14,28.39,30.14,26.3,20.69,,0,****,0.95,3,723062655.00,Large Growth
Nations Capital Growth Prim B,NCPGX,29.34,28.07,29.34,,,,,,1.45,2,278089.00,Large Growth
Nations Marsico Focused Eq Inv A,NFEAX,50.14,22.46,50.14,,,,,,2.52,1,2551145.00,Large Growth
Nations Marsico Focused Eq Prim A,NFEPX,49.64,22.35,49.64,,,,,,1.52,1,60978614.00,Large Growth
Nations Marsico Grth & Inc Inv C,,38.22,20.72,38.22,,,,,,2.09,1,1211720.00,Large Growth
Nations Marsico Grth & Inc Prim A,NGIPX,38.22,20.72,38.22,,,,,,1.09,1,21780848.00,Large Growth
Navellier Large Cap Growth,,41.17,27.71,41.17,,,,,,1.9,1,2401723.00,Large Growth
New England Capital Growth C,NECGX,28.17,25.3,28.17,19.99,,,,***,2.2,4,1494459.00,Large Growth
Nicholas-Applegate Large Cap Gr I,,60.29,37.8,60.29,,,,,,1,2,3791872.00,Large Growth
Nicholas-Applegate Large Cap Gr Q,,59.56,37.56,59.56,,,,,,,1,2623298.00,Large Growth
Noah,NOAHX,52.77,35.95,52.77,,,,,,1.42,2,3700000.00,Large Growth
Northern Growth Equity,NOGEX,33.16,24.77,33.16,26.84,,,,****,1,3,594655528.00,Large Growth
Northern Institutional Divr Growth A,BDVAX,34.97,24.47,34.97,27.67,18.63,,0.39,****,0.67,1,189694578.00,Large Growth
Northern Institutional Focused Grow A,BFGAX,36.53,27.63,36.53,27.66,19.17,,0,***,0.92,1,137301065.00,Large Growth
Northern Select Equity,NOEQX,35.13,27.48,35.13,29.34,,,,*****,1,4,164383842.00,Large Growth
Norwest Advantage Large Co Growth I,NVLCX,48.01,31.64,48.01,35.06,,,,*****,,4,363555000.00,Large Growth
Nuveen Rittenhouse Growth R,NRGRX,25.67,21.37,25.67,,,,,,1.1,1,41888031.00,Large Growth
Old Westbury Core Equity,OWCEX,,25.95,,,,,,,,,45583859.00,Large Growth
One Group Large Company Growth Fid,SEEGX,44.71,24.51,44.71,31.11,24.76,,0,*****,0.99,0,1733613410.00,Large Growth
Oppenheimer Capital Appreciation Y,OTCYX,24.46,26.84,24.46,,,,,,0.69,1,246541136.00,Large Growth
OVB Capital Appreciation A,OCAAX,35.05,29.02,35.05,25.84,20.23,,0,***,1.02,5,132355065.00,Large Growth
OVB Capital Appreciation B,OVCBX,34.63,28.91,34.63,25.52,19.9,,0,***,1.27,5,10015925.00,Large Growth
Pacific Capital Growth Stock Instl,PGRSX,35.94,29.47,35.94,26.85,,,,****,1.09,4,407943379.00,Large Growth
PaineWebber Pace Large Co Growth Eqty,PCLCX,40.79,32.5,40.79,28.67,,,,*****,,3,334910196.00,Large Growth
Papp America-Abroad,PAAFX,23.83,27.81,23.83,27.11,24.85,,0.12,*****,1.11,7,342814176.00,Large Growth
Papp America-Pacific Rim,PAPRX,28.68,26.89,28.68,,,,,,1.25,1,14705830.00,Large Growth
Parkstone Large Capitalization Instl,PLCIX,42.62,25.53,42.62,31.4,,,,*****,1.1,3,428467586.00,Large Growth
PBHG Large Cap 20 PBHG,PLCPX,67.83,31.43,67.83,,,,,,1.41,2,545179455.00,Large Growth
Pegasus Growth I,PGRIX,38.14,27.8,38.14,28.38,,,,*****,0.79,2,865065386.00,Large Growth
Phoenix Duff&Phelps Instl Grth Stk Y,PGSYX,30.2,22.2,30.2,,,,,,0.7,0,42178166.00,Large Growth
Pillar Equity Growth I,PLGIX,31.81,20.71,31.81,,,,,,0.8,1,199930212.00,Large Growth
PIMCo Core Equity Admin,PCEAX,40.47,24.69,40.47,27.34,,,,****,1.08,1,168264081.00,Large Growth
PIMCo Core Equity Instl,,41.06,24.9,41.06,27.75,,,,****,0.83,1,1761551.00,Large Growth
Potomac OTC Plus,POTCX,104.22,43.44,104.22,,,,,,,1,73853034.00,Large Growth
Potomac OTC/Short,POTSX,-52.99,-27.97,-52.99,,,,,,,,808085.00,Large Growth
Preferred Growth,PFGRX,35.89,28.75,35.89,28.62,21.99,,0,****,0.84,0,506581372.00,Large Growth
ProFunds UltraOTC Inv,UOPIX,185.34,72.73,185.34,,,,,,1.07,1,90002118.00,Large Growth
ProFunds UltraOTC Svc,UOPSX,183.98,72.65,183.98,,,,,,1.75,1,23628004.00,Large Growth
Provident Inv Couns Growth,PIPGX,38.6,23.07,38.6,28.85,20.83,,0,****,1.25,6,140143841.00,Large Growth
Prudential Jennison Growth Z,PJFZX,38.07,30.28,38.07,,,,,,0.84,2,1195673409.00,Large Growth
Putnam Investors Y,PNVYX,35.88,25.29,35.88,,,,,,0.7,,216957222.00,Large Growth
Putnam Voyager Y,PVYYX,24.38,26.81,24.38,21.12,,,,***,0.71,4,1454159189.00,Large Growth
Regions Growth Tr,RGRAX,,24.09,,,,,,,,0,256682775.00,Large Growth
Reserve Blue Chip Growth,RBCAX,36.62,30.79,36.62,23.03,,,,***,1.75,4,10479008.00,Large Growth
Reserve Large-Cap Growth,RLVAX,25.16,16.82,25.16,27.54,,,,*****,1.75,2,19923609.00,Large Growth
Reynolds Blue Chip Growth,RBCGX,54.12,31.39,54.12,37.48,27.98,18.25,0,*****,1.4,10,128460822.00,Large Growth
Reynolds Opportunity,ROPPX,59.14,32.59,59.14,27.67,23.59,,0,****,1.5,6,36263924.00,Large Growth
Robertson Stephens Value + Growth A,RSVPX,27.44,24.07,27.44,18.29,23.8,,0,***,1.44,6,678271153.00,Large Growth
Rydex OTC Inv,RYOCX,86.48,35.51,86.48,48.14,,,,*****,1.13,1,1109417355.00,Large Growth
Saratoga Large Capitalization Growth,SLCGX,36.44,34.27,36.44,28.05,,,,*****,1.18,4,106775721.00,Large Growth
Scudder Large Company Growth,SCQGX,33.23,26.48,33.23,27.88,22.28,,0,****,1.21,3,560652539.00,Large Growth
SEI Instl Mgd Large Cap Growth A,SELCX,38.8,29.31,38.8,31.91,,,,*****,0.85,4,1890371448.00,Large Growth
Sit Large Cap Growth,SNIGX,30.56,22.54,30.56,28.38,23.43,18.19,0.01,*****,1,16,119935406.00,Large Growth
Spectra,SPECX,47.94,33.74,47.94,30.14,27.54,25.81,0,*****,2.12,24,224203033.00,Large Growth
State Street Research Athletes S,,,,24.76,,,,,,,0,,Large Growth
State Street Research Growth S,STSGX,26.18,29.45,26.18,16.29,15,14.44,0,**,0.66,1,140471643.00,Large Growth
State Street Research Legacy S,,32.27,23.27,32.27,,,,,,1,1,4351986.00,Large Growth
Steadman Investment,SINVX,50.56,35.35,50.56,9.17,-1.15,0.94,0,*,6.48,0,1562327.00,Large Growth
Steadman Security Trust,SASSX,59.46,31.11,59.46,21.99,7.29,7.61,0,*,7.34,0,4507000.00,Large Growth
Stein Roe Advisor Growth Stock K,,24.59,24.48,24.59,,,,,,1.35,1,4000000.00,Large Growth
Stein Roe Advisor Young Investor A,SAIAX,,20.53,,,,,,,,0,55700000.00,Large Growth
Stein Roe Advisor Young Investor K,,15.33,20.68,15.33,,,,,,,1,400000.00,Large Growth
Stein Roe Growth Stock,SRFSX,25.54,24.78,25.54,25.96,21.13,19.21,0,****,1.07,4,759855536.00,Large Growth
Stein Roe Young Investor,SRYIX,17.65,20.82,17.65,26.14,,,,****,1.31,3,821407830.00,Large Growth
Strategist Growth,STGRX,22.4,27.03,22.4,,,,,,1,1,150035479.00,Large Growth
Strategist Growth Trends,STGTX,28.27,24.23,28.27,,,,,***,1.1,5,1022531226.00,Large Growth
Strong Blue Chip 100,SBCHX,43.92,27.66,43.92,,,,,****,0.73,0,297220033.00,Large Growth
Strong Total Return,STRFX,32.05,22.19,32.05,23.21,18.56,13.9,0.21,,,1,258299000.00,Large Growth
Target Large Capitalization Growth,TALGX,44.22,33.06,44.22,28.25,21.38,,0,,,0,2772.00,Large Growth
Transamerica Premier Equity A,,,,26.8,,,,,*****,1.49,0,266799197.00,Large Growth
Transamerica Premier Equity Inv,TEQUX,33.85,26.88,33.85,36.59,,,,,,0,2726.00,Large Growth
Transamerica Premier Equity M,,,,26.69,,,,,****,1.02,6,123726183.00,Large Growth
Turner Growth Equity,TRGEX,38.07,25.63,38.07,29.32,21.25,,0,,1,1,6355662.00,Large Growth
Turner Ultra Large Cap,,45.22,29.73,45.22,,,,,*****,1.42,3,87094612.00,Large Growth
U.S. Global Leaders Growth,USGLX,31.98,29.43,31.98,31.67,,,,,0.9,2,39763699.00,Large Growth
UAM Sirach Equity Instl,SIEQX,29.93,25.01,29.93,,,,,****,0.9,6,84996347.00,Large Growth
UAM Sirach Growth Instl,SGRWX,25.95,25.58,25.95,27.02,19.65,,0.06,,1.15,6,30208951.00,Large Growth
United Vanguard Y,,31.5,24.5,31.5,19.34,,,,***,0.9,1,5474897.00,Large Growth
USAA First Start Growth,UFSGX,40.46,30.12,40.46,,,,,,1.65,1,74047347.00,Large Growth
Value Line Leveraged Growth Investors,VALLX,39.63,30.98,39.63,28.34,22.78,19.67,0,****,0.86,26,536977539.00,Large Growth
Value Line U.S. Multinational Company,VLUMX,31.12,32.21,31.12,27.39,,,,****,1.69,3,28135257.00,Large Growth
Vanguard Growth Index,VIGRX,42.21,24.64,42.21,33.87,27.79,,0.69,*****,0.2,6,5720962073.00,Large Growth
Vanguard U.S. Growth,VWUSX,39.98,24.73,39.98,30.49,26.16,21.2,0.48,*****,0.41,12,12342642281.00,Large Growth
Vintage Aggressive Growth,AVAGX,25.42,27.25,25.42,23.59,,,,****,1.56,3,109160920.00,Large Growth
White Oak Growth Stock,WOGSX,39.51,37.53,39.51,31.88,30.07,,0,*****,0.98,6,1092285219.00,Large Growth
Wilshire Target Large Co Growth Instl,WLCGX,40.84,25.39,40.84,,,,,,0.62,2,50839211.00,Large Growth
Wilshire Target Large Co Growth Invmt,DTLGX,40.72,25.32,40.72,32.75,26.74,,0.05,*****,0.73,6,154751860.00,Large Growth
1838 Small Cap Equity,ESEQX,-6.08,16.15,-6.08,,,,0,,1.25,2,33980928.00,Small Value
AARP Small Company Stock,ASCSX,-6.24,10.3,-6.24,,,,0.08,,1.75,1,103827266.00,Small Value
Academy Value,ACVFX,-22.45,-2.93,-22.45,2.01,,,0.6,*,1.82,4,5283900.00,Small Value
American Century Small Cap Value Inv,,,14.53,,,,,,,,0,12213098.00,Small Value
Armada Small Cap Value Instl,AMRIX,-6.96,17.79,-6.96,14.75,,,0.33,**,0.97,0,246034696.00,Small Value
Artisan Small Cap Value,ARTVX,-5.76,7.03,-5.76,,,,0,,1.93,1,51399000.00,Small Value
Babson Enterprise,BABEX,-11.36,7.44,-11.36,12.49,11.16,13.74,0.3,**,1.08,14,176339434.00,Small Value
Barr Rosenberg U.S. Small Cap Adv,LIFUX,-4.29,10.54,-4.29,,,,0,,1.4,1,23619901.00,Small Value
Barr Rosenberg U.S. Small Cap Instl,USCIX,-4.03,10.55,-4.03,16.63,18.26,,0.14,***,1.15,9,526692203.00,Small Value
Barr Rosenberg U.S. Small Cap Sel,BRSCX,-4.52,10.44,-4.52,,,,0,,1.59,2,25361877.00,Small Value
Berger Small Cap Value Instl,BSVIX,1.83,15.17,1.83,20.54,18.69,14.97,0.71,****,1.19,13,119184515.00,Small Value
Berger Small Cap Value Inv,BSCVX,1.43,15.04,1.43,,,,0.33,,1.56,1,153967736.00,Small Value
BlackRock Small Cap Value Instl,PNSEX,-6.22,14.03,-6.22,15.13,13.37,,1.59,**,0.85,2,594570914.00,Small Value
BlackRock Small Cap Value Svc,PSESX,-6.5,13.96,-6.5,14.76,13.01,,1.28,**,1.15,2,84486211.00,Small Value
Bridgeway Ultra-Small Company,BRUSX,-13.11,15.87,-13.11,15.87,,,0,**,1.67,4,35373643.00,Small Value
CitiFunds Small Cap Value,CFSVX,,8.2,,,,,,,,0,31895915.00,Small Value
Clover Small Cap Value,TCSVX,2.01,13.64,2.01,,,,0,,1.4,2,16856238.00,Small Value
Consulting Group Small Cap Value Eqty,TSVUX,-8.88,9.65,-8.88,15.73,12.04,,1.62,**,0.9,,801824000.00,Small Value
Corbin Small-Cap Value,,-38.15,-6.07,-38.15,,,,0,,1.23,1,2220710.00,Small Value
CornerCap Growth,CGRFX,-10.64,2.9,-10.64,15.18,12.63,8.41,0,**,1.56,6,13931935.00,Small Value
CRM Small Cap Value Instl,CRISX,-11.36,4.4,-11.36,,,,0.03,,,0,77175288.00,Small Value
CRM Small Cap Value Inv,CRMSX,-12.21,4.37,-12.21,14.08,,,0.03,**,1.5,3,118221816.00,Small Value
Cruelty Free Value,,5.2,17.27,5.2,,,,0,,1.95,1,1668206.00,Small Value
Delafield,DEFIX,-11.47,14.32,-11.47,10.2,12.48,,0.93,***,1.29,5,105300000.00,Small Value
Delaware Small Cap Value Instl,DEVIX,-4.82,12.65,-4.82,15.93,12.48,,0.91,**,1.09,1,114098304.00,Small Value
DFA U.S. 6-10 Value,DFSVX,-7.3,12.32,-7.3,14.03,14.18,,1.73,**,0.6,5,2351270000.00,Small Value
DFA U.S. 6-10 Value II,DFAVX,-7.17,12.32,-7.17,14.03,,,1.85,**,0.85,4,86530000.00,Small Value
Dreyfus Premier Small Cap Value R,,,13.65,,,,,,,,0,461453.00,Small Value
Eclipse Equity,EEQFX,3.4,12.69,3.4,21.42,15.33,14.16,0,***,1.14,11,187201495.00,Small Value
Enterprise Small Company Value Y,EIGYX,6.13,14.33,6.13,19.71,,,0,****,1.3,2,279169.00,Small Value
Evergreen Micro Cap Y,EMCYX,-22.1,2.69,-22.1,8.94,5.01,9.68,0,*,1.39,2,38616882.00,Small Value
Evergreen Small Cap Equity Income Y,ESCEX,-9.39,6.68,-9.39,14,13.7,,2.41,***,1.39,5,81223973.00,Small Value
Fairmont,FAIMX,-4.88,13.54,-4.88,6.49,10.63,9.83,0,*,1.63,17,23715862.00,Small Value
FAM Value,FAMVX,6.19,14.62,6.19,17.98,16,16.02,0.54,****,1.24,12,357665782.00,Small Value
First American Micro Cap Value Y,FMVCX,-6.9,9.87,-6.9,,,,0.22,,0.88,1,103017582.00,Small Value
First American Small Cap Value Y,FSCCX,-8.26,11.89,-8.26,9.95,,,0.31,**,0.88,4,421216421.00,Small Value
First Omaha Small Cap Value,FOSCX,-3.36,14.05,-3.36,,,,1.57,,1.34,2,15036859.00,Small Value
Franklin Value Adv,,-23.83,7.4,-23.83,,,,0,,0.98,1,7697096.00,Small Value
Frontegra Opportunity,,-10.13,9.02,-10.13,,,,0.78,,0.9,,11242957.00,Small Value
Glenmede Small Cap Equity,GTCSX,-13.46,9.54,-13.46,12.04,12.64,,0.89,**,0.12,2,318407535.00,Small Value
Goldman Sachs Small Cap Value Inst,GSSIX,-16.56,13.43,-16.56,,,,0,,1.16,1,16246330.00,Small Value
Goldman Sachs Small Cap Value Svc,GSSSX,-16.92,13.32,-16.92,,,,0,,1.45,6,264580.00,Small Value
Gradison Opportunity Value,GOGFX,-6.95,13.06,-6.95,13.4,12.58,12.82,0.58,**,1.31,14,151198399.00,Small Value
Harris Insight Small Cap Value A,,-6.83,8.29,-6.83,,,,0.23,,,1,635862.00,Small Value
Harris Insight Small Cap Value Inst,HSCVX,-3.94,8.32,-3.94,,,,0.44,,,1,144434591.00,Small Value
Heartland Value,HRTVX,-11.46,4.64,-11.46,9.69,11.74,14.55,0.19,**,1.12,14,1666019130.00,Small Value
Hotchkis & Wiley Small Cap,HWSCX,-15.56,8.8,-15.56,10.41,10.02,12.82,0,**,0.94,3,59234928.00,Small Value
IAI Value,IAAPX,-0.04,18.89,-0.04,13.36,10.5,11.33,0,**,1.25,2,15202079.00,Small Value
ICM/Isabelle Small Cap Value Instl,,,13.07,,,,,,,,,3121460.00,Small Value
ICM/Isabelle Small Cap Value Invmt,,,,13.09,,,,,,,,1098642.00,Small Value
Invesco Small Company Value,IDSCX,-5.82,16.37,-5.82,9.81,10.74,,0.43,**,1.25,4,60027314.00,Small Value
Kemper Small Cap Value I,,-12.28,12.34,-12.28,11.5,,,0,**,0.89,2,9274060.00,Small Value
Lazard Bantam Value Instl,LABVX,-13.82,11.94,-13.82,,,,0,,1.05,2,59952338.00,Small Value
Lazard Small Cap Instl,LZSCX,-12.62,12.92,-12.62,11.52,11.45,,0.05,**,0.82,7,1407860050.00,Small Value
Lazard Small Cap Open,LZCOX,-12.86,12.81,-12.86,,,,0,,1.14,7,93837611.00,Small Value
Lexington SmallCap,LESVX,6.73,15.04,6.73,11.5,,,0.05,**,2.57,0,7954993.00,Small Value
Lindner/Ryback Small-Cap Inv,LDRSX,-6.09,11.65,-6.09,20.62,,,1.1,***,0.87,4,44285127.00,Small Value
Longleaf Partners Small-Cap,LLSCX,12.71,14.46,12.71,23.86,18.5,13.47,0.67,****,1.09,7,1350989083.00,Small Value
Loomis Sayles Small Cap Value Instl,LSSCX,-1.08,18.07,-1.08,17.56,14.51,,0.66,**,0.94,7,346259317.00,Small Value
Loomis Sayles Small Cap Value Ret,LSCRX,-1.34,17.98,-1.34,,,,0.42,,1.25,1,70328516.00,Small Value
MAS Small Cap Value,MPSCX,-1.42,15.32,-1.42,20.29,16.57,17.81,0.35,***,0.86,12,788230784.00,Small Value
Maxus Aggressive Value Inv,MXSAX,,15.7,,,,,,,,0,2799638.00,Small Value
MSDW Special Value D,,-6.38,9.17,-6.38,,,,0,,,1,1552250.00,Small Value
Munder Small-Cap Value K,MCVKX,-6.63,12.7,-6.63,,,,0.62,,1.27,2,60228743.00,Small Value
Munder Small-Cap Value Y,MCVYX,-6.46,12.76,-6.46,,,,0.88,,1.02,2,61661301.00,Small Value
Nations Managed Sm Cap Val Idx Inv A,,-3.12,12.27,-3.12,,,,0.43,,0.75,1,2123604.00,Small Value
Nations Managed Sm Cap Val Idx Inv C,,-3.24,12.32,-3.24,,,,0.2,,1,1,93251.00,Small Value
Nations Managed Sm Cap Val Idx PrmA,,-2.9,12.36,-2.9,,,,0.66,,0.5,1,3470074.00,Small Value
Nations Managed Sm Cap Val Idx PrmB,,-2.9,12.36,-2.9,,,,0.66,,,1,10.00,Small Value
Nations Managed Value Index Inv A,,13.56,17.01,13.56,,,,1.17,,0.75,,3023684.00,Small Value
Nations Managed Value Index Inv C,,13.49,17.01,13.49,,,,1.02,,1,,11072.00,Small Value
Nations Managed Value Index Prim A,,13.71,17.06,13.71,,,,1.38,,0.5,,9430923.00,Small Value
Nations Managed Value Index Prim B,,13.71,17.06,13.71,,,,1.38,,,1,12.00,Small Value
Navellier Small Cap Value,,-8.28,10.76,-8.28,,,,0.78,,1.75,1,861148.00,Small Value
Northern Small Cap,NOSGX,-5.94,11.96,-5.94,13.24,,,0.1,**,1,4,314258197.00,Small Value
Norwest Advantage Performa SmCapVal I,,-5.65,16.64,-5.65,,,,0,,,1,19106993.00,Small Value
Oakmark Small Cap,OAKSX,-13.16,17.65,-13.16,19.48,,,0,***,1.45,3,747672210.00,Small Value
PaineWebber Pace Small/Med Co Val Eq,PCSVX,-9.16,9.37,-9.16,15.13,,,0.55,***,,3,187143040.00,Small Value
Pathfinder,PSLFX,-18.14,5.13,-18.14,2.57,6.43,3.54,0,*,0.99,9,2000000.00,Small Value
PIMCo Small Cap Value Admin,PVADX,-9.38,11.35,-9.38,15.85,,,1.25,***,1.1,3,18779639.00,Small Value
PIMCo Small Cap Value Instl,PSVIX,-9.16,11.42,-9.16,16.14,13.61,,1.34,**,0.85,7,57820439.00,Small Value
Preferred Small Cap,PSMCX,-4.79,14.56,-4.79,14.78,,,0.12,**,0.9,3,119697130.00,Small Value
Prudential Small Company Value Z,PSCZX,-10.62,8.58,-10.62,,,,0,,0.96,2,142604546.00,Small Value
Quaker Small-Cap Value,QUSVX,5.15,18.43,5.15,,,,0,,1.31,2,9259291.00,Small Value
Robertson Stephens Partners A,RSPFX,-27.3,-3.03,-27.3,7.11,,,3.19,**,1.78,3,48211731.00,Small Value
Royce GiftShares Inv,RGFAX,21.23,28.4,21.23,23.65,,,0,****,1.49,3,6976371.00,Small Value
Royce Micro-Cap Consult,RYMCX,,14.38,,,,,,,,0,659733.00,Small Value
Schwartz Value,RCMFX,-10.42,6.44,-10.42,10.7,8.13,11.54,0,**,1.91,15,60582257.00,Small Value
Sefton Small Company Value,SSVLX,-15.69,5.15,-15.69,,,,0.85,,1.59,1,35336493.00,Small Value
SEI Instl Mgd Small Cap Value A,SESVX,-2.84,13.21,-2.84,17.04,,,0.34,***,1.11,4,511816563.00,Small Value
Shadow Stock,SHSTX,-1.49,8.71,-1.49,15.12,12.54,11.87,0.48,***,1.16,11,50462542.00,Small Value
Skyline Small Cap Contrarian,,-28.4,1.13,-28.4,,,,0,,,1,5195283.00,Small Value
Skyline Small Cap Value Plus,SPEQX,-6.66,8.19,-6.66,14.25,12.17,,0,**,1.51,5,134854764.00,Small Value
Skyline Special Equities,SKSEX,-7.17,10.96,-7.17,17.9,13.02,18.26,0,***,1.48,11,445811638.00,Small Value
STI Classic Small Cap Equity Tr,SCETX,-13.45,11.03,-13.45,,,,1.18,,1.21,,299872921.00,Small Value
Stratton Small-Cap Yield,STSCX,-9.58,9.05,-9.58,13.96,12.88,,0.89,**,1.62,5,42602628.00,Small Value
Strong Small Cap Value,SSMVX,6.1,19.89,6.1,,,,0,,,1,24137656.00,Small Value
Target Small Capitalization Value,TASVX,-6.63,14.46,-6.63,13.93,9.41,,0.43,**,0.81,4,137690492.00,Small Value
Third Avenue Small-Cap Value,TASCX,-2.77,13.75,-2.77,,,,0.78,,1.65,1,144301655.00,Small Value
Third Avenue Value,TAVFX,3.92,16.72,3.92,16.21,15.29,,1.25,***,1.13,8,1600120422.00,Small Value
UAM ICM Small Company,ICSCX,-0.51,9.33,-0.51,17.63,15.34,,0.92,***,0.88,9,635366850.00,Small Value
UAM Sterling Small Cap Value Instl,SPSCX,-2.86,15.09,-2.86,,,,0,,1.25,1,33782756.00,Small Value
UMB Scout Regional,UMBHX,-3.68,8.69,-3.68,10.07,10.01,6.13,1.8,**,0.85,12,45398897.00,Small Value
Undiscovered Managers Small Cap Value,,-0.64,11.26,-0.64,,,,0.13,,,1,18926885.00,Small Value
Vanguard Selected Value,VASVX,-11.77,17.51,-11.77,,,,0.75,,0.74,2,151315264.00,Small Value
Vanguard Small Cap Value Index,VISVX,,13.65,,,,,,,,0,105628467.00,Small Value
Wachovia Special Values Y,BSPYX,-1,10.81,-1,,,,1.49,,1.11,1,91844457.00,Small Value
Warburg Pincus Advisor Small Co Value,WPSAX,-14.8,1.24,-14.8,16.36,,,0,**,1.89,3,54833.00,Small Value
Warburg Pincus Small Co Value Comm,WPSVX,-14.88,1.9,-14.88,16.58,,,0,***,1.7,3,66540368.00,Small Value
Wasatch Micro-Cap Value,WMCVX,8.46,21.11,8.46,,,,0,,,1,16887740.00,Small Value
Westcore Small-Cap Opportunity,WTSCX,-5.73,8.76,-5.73,14.8,13.94,,0,**,1.3,4,93442399.00,Small Value
Westport Small Cap I,WPSCX,,27.77,,,,,,,,0,33200000.00,Small Value
Westport Small Cap R,WPSRX,15.4,27.65,15.4,,,,0,,,1,5913492.00,Small Value
William Blair Value Discovery,WBVDX,0.66,11.49,0.66,,,,0.72,,1.5,2,40906000.00,Small Value
Wilshire Target Small Co Value Instl,WSMVX,-5.45,9.51,-5.45,,,,1.32,,0.76,2,12025429.00,Small Value
Wilshire Target Small Co Value Invmt,DTSVX,-5.57,9.43,-5.57,12.18,11.02,,1.25,**,0.85,6,28422907.00,Small Value
Wright Junior Blue Chip Equities,WJBEX,-4.9,14.82,-4.9,12.95,11.05,10.3,0,**,1.18,13,34040672.00,Small Value
Zweig Series Appreciation I,,-1.25,14.5,-1.25,,,,0,,1.22,2,1622605.00,Small Value
        `;

        // Parse the raw data
        const rows = rawData.trim().split('\n').map(row => row.split(','));

        // Extract categories and their respective data
        const categories = {};
        rows.forEach(row => {
            const category = row[row.length - 1];
            if (!categories[category]) {
                categories[category] = [];
            }
            categories[category].push({
                name: row[0],
                assets: parseFloat(row[12].replace(/"/g, '')), // Convert assets to number
                YTD: parseFloat(row[2])
            });
        });

        // Create a scatter plot
        const ctx = document.getElementById('scatterChart').getContext('2d');
        const scatterChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: Object.keys(categories).map((category, index) => ({
                    label: category,
                    data: categories[category].map(item => ({ x: item.assets, y: item.YTD })),
                    backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`, // Random color
                    borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`, // Random border color
                    borderWidth: 1,
                    pointRadius: 5,
                }))
            },
            options: {
                scales: {
                    x: {
                        type: 'logarithmic',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Assets in logarithmic scale'
                        }
                    },
                    y: {
                        type: 'linear',
                        position: 'left',
                        title: {
                            display: true,
                            text: 'YTD'
                        }
                    }
                }
            }
        });