/* Saudi GRC regulatory catalog: discovery only, not authoritative legal text. */
(function(){
'use strict';
const items=[
['NCA-ECC','ضوابط الأمن السيبراني الأساسية','Essential Cybersecurity Controls','الهيئة الوطنية للأمن السيبراني','الأمن السيبراني','عام','ECC'],
['NCA-CSCC','ضوابط الأمن السيبراني للأنظمة الحساسة','Critical Systems Cybersecurity Controls','الهيئة الوطنية للأمن السيبراني','الأمن السيبراني','مشروط'],
['NCA-CCC','ضوابط الأمن السيبراني للحوسبة السحابية','Cloud Cybersecurity Controls','الهيئة الوطنية للأمن السيبراني','الأمن السيبراني','مشروط'],
['NCA-OTCC','ضوابط الأمن السيبراني للأنظمة التشغيلية','Operational Technology Cybersecurity Controls','الهيئة الوطنية للأمن السيبراني','الأمن السيبراني','مشروط'],
['NCA-TCC','ضوابط الأمن السيبراني للعمل عن بعد','Telework Cybersecurity Controls','الهيئة الوطنية للأمن السيبراني','الأمن السيبراني','مشروط'],
['NCA-OSMACC','ضوابط الأمن السيبراني لحسابات التواصل الاجتماعي','Organizational Social Media Accounts Cybersecurity Controls','الهيئة الوطنية للأمن السيبراني','الأمن السيبراني','مشروط'],
['NCA-DCC','ضوابط الأمن السيبراني للبيانات','Data Cybersecurity Controls','الهيئة الوطنية للأمن السيبراني','الأمن السيبراني','مشروط'],
['PDPL','نظام حماية البيانات الشخصية','Personal Data Protection Law','الهيئة السعودية للبيانات والذكاء الاصطناعي','الخصوصية والبيانات','عام','PDPL'],
['PDPL-IR','اللائحة التنفيذية لنظام حماية البيانات الشخصية','PDPL Implementing Regulations','الهيئة السعودية للبيانات والذكاء الاصطناعي','الخصوصية والبيانات','عام'],
['PDPL-TRANSFER','لائحة نقل البيانات الشخصية إلى خارج المملكة','Personal Data Transfer Regulations','الهيئة السعودية للبيانات والذكاء الاصطناعي','الخصوصية والبيانات','مشروط'],
['NDMO','سياسات حوكمة البيانات الوطنية','National Data Governance Policies','مكتب إدارة البيانات الوطنية','الخصوصية والبيانات','مشروط'],
['DATA-CLASS','سياسة تصنيف البيانات','Data Classification Policy','مكتب إدارة البيانات الوطنية','الخصوصية والبيانات','مشروط'],
['DATA-SHARE','سياسة مشاركة البيانات','Data Sharing Policy','مكتب إدارة البيانات الوطنية','الخصوصية والبيانات','مشروط'],
['DATA-OPEN','سياسة البيانات المفتوحة','Open Data Policy','مكتب إدارة البيانات الوطنية','الخصوصية والبيانات','مشروط'],
['SAMA-CSF','إطار الأمن السيبراني للبنك المركزي السعودي','SAMA Cybersecurity Framework','البنك المركزي السعودي','القطاع المالي','قطاعي'],
['SAMA-BCM','متطلبات استمرارية الأعمال للجهات الخاضعة لإشراف البنك المركزي','SAMA Business Continuity Requirements','البنك المركزي السعودي','القطاع المالي','قطاعي'],
['SAMA-AML','قواعد مكافحة غسل الأموال للجهات المالية','Financial Sector AML Rules','البنك المركزي السعودي','القطاع المالي','قطاعي'],
['CMA-CG','لائحة حوكمة الشركات','Corporate Governance Regulations','هيئة السوق المالية','الحوكمة والشركات','قطاعي'],
['CMA-AML','قواعد مكافحة غسل الأموال وتمويل الإرهاب للجهات الخاضعة لهيئة السوق','CMA AML Rules','هيئة السوق المالية','القطاع المالي','قطاعي'],
['COMPANIES','نظام الشركات','Companies Law','وزارة التجارة','الحوكمة والشركات','مشروط'],
['BANKRUPTCY','نظام الإفلاس','Bankruptcy Law','الجهات التنظيمية المختصة','الحوكمة والشركات','مشروط'],
['ECOM','نظام التجارة الإلكترونية','E-Commerce Law','وزارة التجارة','التجارة والمستهلك','مشروط'],
['CONSUMER','أنظمة حماية المستهلك ذات الصلة','Applicable Consumer Protection Regulations','وزارة التجارة','التجارة والمستهلك','مشروط'],
['E-TRANS','نظام التعاملات الإلكترونية','Electronic Transactions Law','الجهات التنظيمية المختصة','التقنية والاتصالات','مشروط'],
['TELECOM','نظام الاتصالات وتقنية المعلومات','Telecommunications and Information Technology Law','هيئة الاتصالات والفضاء والتقنية','التقنية والاتصالات','قطاعي'],
['CST-CLOUD','الإطار التنظيمي للحوسبة السحابية','Cloud Computing Regulatory Framework','هيئة الاتصالات والفضاء والتقنية','التقنية والاتصالات','مشروط'],
['LABOR','نظام العمل','Labor Law','وزارة الموارد البشرية والتنمية الاجتماعية','الموارد البشرية','عام'],
['OSH','أنظمة ولوائح السلامة والصحة المهنية','Occupational Safety and Health Regulations','وزارة الموارد البشرية والتنمية الاجتماعية','الموارد البشرية','مشروط'],
['VAT','نظام ضريبة القيمة المضافة ولائحته التنفيذية','VAT Law and Implementing Regulations','هيئة الزكاة والضريبة والجمارك','الزكاة والضرائب','مشروط'],
['ZAKAT','اللوائح الزكوية ذات الصلة','Applicable Zakat Regulations','هيئة الزكاة والضريبة والجمارك','الزكاة والضرائب','مشروط'],
['E-INVOICE','لائحة الفوترة الإلكترونية','Electronic Invoicing Regulations','هيئة الزكاة والضريبة والجمارك','الزكاة والضرائب','مشروط'],
['AML','نظام مكافحة غسل الأموال','Anti-Money Laundering Law','الجهات التنظيمية المختصة','الامتثال القانوني','مشروط'],
['ANTI-BRIBERY','نظام مكافحة الرشوة','Anti-Bribery Law','الجهات التنظيمية المختصة','الامتثال القانوني','عام'],
['CYBERCRIME','نظام مكافحة جرائم المعلوماتية','Anti-Cybercrime Law','الجهات التنظيمية المختصة','الامتثال القانوني','عام'],
['ENV','نظام البيئة ولوائحه','Environment Law and Regulations','المركز الوطني للرقابة على الالتزام البيئي','البيئة والصحة','مشروط'],
['SFDA','الأنظمة واللوائح الصادرة عن هيئة الغذاء والدواء','SFDA Applicable Regulations','الهيئة العامة للغذاء والدواء','البيئة والصحة','قطاعي'],
['HEALTH','نظام المؤسسات الصحية الخاصة','Private Health Institutions Law','وزارة الصحة','البيئة والصحة','قطاعي'],
['ISO27001','ISO/IEC 27001 لإدارة أمن المعلومات','ISO/IEC 27001','ISO / IEC','المعايير الاختيارية','اختياري','ISO27001'],
['ISO31000','ISO 31000 لإدارة المخاطر','ISO 31000 Risk Management','ISO','المعايير الاختيارية','اختياري'],
['ISO22301','ISO 22301 لاستمرارية الأعمال','ISO 22301 Business Continuity','ISO','المعايير الاختيارية','اختياري'],
['ISO37301','ISO 37301 لنظم إدارة الامتثال','ISO 37301 Compliance Management','ISO','المعايير الاختيارية','اختياري'],
['ISO37001','ISO 37001 لمكافحة الرشوة','ISO 37001 Anti-Bribery','ISO','المعايير الاختيارية','اختياري'],
['COSO','إطار COSO للرقابة الداخلية','COSO Internal Control Framework','COSO','المعايير الاختيارية','اختياري']
];
const cats=['الكل',...new Set(items.map(x=>x[4]))];
let cat='الكل',q='';
const origRender=render;render=function(){origRender();drawCatalog()};
function drawCatalog(){const root=document.getElementById('libraries');if(!root)return;const matches=items.filter(x=>(cat==='الكل'||x[4]===cat)&&(!q||x.join(' ').toLowerCase().includes(q.toLowerCase())));root.innerHTML='<div class="enh-hero"><div><h2>المكتبة التنظيمية السعودية</h2><p>فهرس استكشافي للأنظمة واللوائح والضوابط والمعايير. انطباق المتطلبات يتحدد وفق نشاط المنشأة والجهة المشرفة.</p></div><span class="enh-tag">'+items.length+' مرجعًا</span></div><div class="card"><strong>تنبيه بشأن دقة المكتبة</strong><p class="enh-help">هذه قائمة واسعة وليست حصرًا قانونيًا لجميع أنظمة المملكة أو نسخها السارية. لا تحتوي على النصوص الرسمية الكاملة، ولا يعني ظهور مرجع أنه ينطبق على كل منشأة. تحقّق من المصدر الرسمي والإصدار وتاريخ السريان قبل أي تقييم.</p><p class="enh-help">المراجع الموسومة «متاح للتجربة» تحتوي على ضوابط تمثيلية فقط. باقي المراجع فهرس تعريفي ولا تُنشئ تقييمات أو نسب امتثال وهمية.</p></div><div class="enh-toolbar section"><input id="catalogSearch" type="search" placeholder="ابحث عن نظام أو جهة أو معيار" value="'+esc(q)+'"><select id="catalogCategory">'+cats.map(x=>'<option '+(x===cat?'selected':'')+'>'+esc(x)+'</option>').join('')+'</select></div><p class="muted">'+matches.length+' نتيجة</p><div class="frameworks">'+matches.map(x=>'<div class="card fw" style="cursor:default"><div class="row"><span class="pill">'+esc(x[4])+'</span><span class="enh-badge">'+esc(x[5])+'</span></div><h3 style="margin-top:12px">'+esc(x[1])+'</h3><p class="muted">'+esc(x[2])+'</p><p class="enh-help">'+esc(x[3])+'</p><div class="enh-actions">'+(x[6]?'<button class="btn alt" onclick="frameworkFilter=\''+x[6]+'\';go(\'controls\')">عرض الضوابط التجريبية</button>':'<span class="enh-demo-flag">فهرس فقط — المحتوى التفصيلي قيد الإعداد</span>')+'</div></div>').join('')+'</div>';root.querySelector('#catalogSearch').oninput=e=>{q=e.target.value;drawCatalog();const i=root.querySelector('#catalogSearch');i.focus();i.setSelectionRange(q.length,q.length)};root.querySelector('#catalogCategory').onchange=e=>{cat=e.target.value;drawCatalog()}}
drawCatalog();
})();