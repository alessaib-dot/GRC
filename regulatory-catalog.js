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
items.push(
["HR-WPS","برنامج حماية الأجور","Wage Protection Program","وزارة الموارد البشرية والتنمية الاجتماعية","الموارد البشرية","مشروط"],
["HR-CONTRACT","توثيق عقود العمل عبر قوى","Employment Contract Documentation","وزارة الموارد البشرية والتنمية الاجتماعية","الموارد البشرية","مشروط"],
["HR-SAUDI","برنامج نطاقات ومتطلبات التوطين","Saudization and Nitaqat","وزارة الموارد البشرية والتنمية الاجتماعية","الموارد البشرية","مشروط"],
["HR-WOMEN","ضوابط عمل المرأة","Women Employment Rules","وزارة الموارد البشرية والتنمية الاجتماعية","الموارد البشرية","مشروط"],
["HR-DOMESTIC","لائحة العمالة المنزلية","Domestic Workers Regulations","وزارة الموارد البشرية والتنمية الاجتماعية","الموارد البشرية","قطاعي"],
["HR-INSURANCE","نظام التأمينات الاجتماعية","Social Insurance Law","المؤسسة العامة للتأمينات الاجتماعية","الموارد البشرية","مشروط"],
["HR-UNEMP","نظام التأمين ضد التعطل عن العمل (ساند)","SANED Unemployment Insurance","المؤسسة العامة للتأمينات الاجتماعية","الموارد البشرية","مشروط"],
["HR-TRAIN","متطلبات التدريب والتأهيل المهني","Vocational Training Requirements","وزارة الموارد البشرية والتنمية الاجتماعية","الموارد البشرية","مشروط"],
["HR-VISA","نظام الإقامة ومتطلبات تصاريح العمل","Residency and Work Permit Requirements","الجهات المختصة","الموارد البشرية","مشروط"],
["HR-DISPUTE","إجراءات تسوية الخلافات العمالية","Labor Dispute Settlement Procedures","وزارة الموارد البشرية والتنمية الاجتماعية","الموارد البشرية","مشروط"],
["HR-DISABILITY","متطلبات توظيف الأشخاص ذوي الإعاقة","Disability Employment Requirements","وزارة الموارد البشرية والتنمية الاجتماعية","الموارد البشرية","مشروط"],
["HR-REMOTE","تنظيم العمل عن بعد","Remote Work Regulation","وزارة الموارد البشرية والتنمية الاجتماعية","الموارد البشرية","مشروط"],
["HR-FLEX","تنظيم العمل المرن","Flexible Work Regulation","وزارة الموارد البشرية والتنمية الاجتماعية","الموارد البشرية","مشروط"],
["HR-PARTTIME","تنظيم العمل لبعض الوقت","Part-time Work Regulation","وزارة الموارد البشرية والتنمية الاجتماعية","الموارد البشرية","مشروط"],
["HR-COMMITTEE","لائحة تنظيم العمل الداخلية","Internal Work Regulations","وزارة الموارد البشرية والتنمية الاجتماعية","الموارد البشرية","مشروط"],
["CCHI","نظام الضمان الصحي التعاوني","Cooperative Health Insurance Law","مجلس الضمان الصحي","التأمين والصحة","مشروط"],
["INSURANCE","نظام مراقبة شركات التأمين التعاوني","Cooperative Insurance Companies Control Law","هيئة التأمين","التأمين والصحة","قطاعي"],
["PUBLIC-PROC","نظام المنافسات والمشتريات الحكومية","Government Tenders and Procurement Law","وزارة المالية","المشتريات والعقود","قطاعي"],
["PROC-LOCAL","متطلبات المحتوى المحلي في المشتريات الحكومية","Local Content Procurement Requirements","هيئة المحتوى المحلي والمشتريات الحكومية","المشتريات والعقود","قطاعي"],
["FRANCHISE","نظام الامتياز التجاري","Franchise Law","وزارة التجارة","التجارة والمستهلك","مشروط"],
["COMPETITION","نظام المنافسة","Competition Law","الهيئة العامة للمنافسة","التجارة والمستهلك","مشروط"],
["TRADEMARK","نظام العلامات التجارية","Trademarks Law","الهيئة السعودية للملكية الفكرية","الملكية الفكرية","مشروط"],
["COPYRIGHT","نظام حماية حقوق المؤلف","Copyright Law","الهيئة السعودية للملكية الفكرية","الملكية الفكرية","مشروط"],
["PATENT","نظام براءات الاختراع والتصميمات","Patents and Designs Law","الهيئة السعودية للملكية الفكرية","الملكية الفكرية","مشروط"],
["REAL-ESTATE","نظام الوساطة العقارية","Real Estate Brokerage Law","الهيئة العامة للعقار","العقار والإنشاءات","قطاعي"],
["OFFPLAN","نظام بيع وتأجير مشروعات عقارية على الخارطة","Off-plan Real Estate Projects Law","الهيئة العامة للعقار","العقار والإنشاءات","قطاعي"],
["BUILDING","كود البناء السعودي","Saudi Building Code","اللجنة الوطنية لكود البناء السعودي","العقار والإنشاءات","مشروط"],
["MUNICIPAL","اشتراطات التراخيص البلدية","Municipal Licensing Requirements","وزارة البلديات والإسكان","العقار والإنشاءات","مشروط"],
["TOURISM","نظام السياحة","Tourism Law","وزارة السياحة","السياحة والضيافة","قطاعي"],
["HOSPITALITY","لوائح مرافق الضيافة السياحية","Tourist Hospitality Regulations","وزارة السياحة","السياحة والضيافة","قطاعي"],
["TRANSPORT","نظام النقل البري على الطرق","Road Transport Regulations","الهيئة العامة للنقل","النقل واللوجستيات","قطاعي"],
["AVIATION","نظام الطيران المدني","Civil Aviation Law","الهيئة العامة للطيران المدني","النقل واللوجستيات","قطاعي"],
["PORTS","أنظمة الموانئ والخدمات البحرية","Ports and Maritime Regulations","الهيئة العامة للموانئ","النقل واللوجستيات","قطاعي"],
["ENERGY","نظام الكهرباء","Electricity Law","هيئة تنظيم المياه والكهرباء","الطاقة والمرافق","قطاعي"],
["WATER","أنظمة خدمات المياه","Water Services Regulations","هيئة تنظيم المياه والكهرباء","الطاقة والمرافق","قطاعي"],
["MINING","نظام الاستثمار التعديني","Mining Investment Law","وزارة الصناعة والثروة المعدنية","الصناعة والتعدين","قطاعي"],
["INDUSTRY","متطلبات التراخيص الصناعية","Industrial Licensing Requirements","وزارة الصناعة والثروة المعدنية","الصناعة والتعدين","قطاعي"],
["NONPROFIT","نظام الجمعيات والمؤسسات الأهلية","Associations and Foundations Law","المركز الوطني لتنمية القطاع غير الربحي","القطاع غير الربحي","قطاعي"],
["CHARITY","قواعد جمع التبرعات","Fundraising Regulations","الجهات المختصة","القطاع غير الربحي","قطاعي"],
["EDUCATION","لوائح التعليم الأهلي","Private Education Regulations","وزارة التعليم","التعليم","قطاعي"],
["CAPITAL","نظام السوق المالية","Capital Market Law","هيئة السوق المالية","القطاع المالي","قطاعي"],
["PAYMENT","نظام المدفوعات وخدماتها","Payments and Payment Services Law","البنك المركزي السعودي","القطاع المالي","قطاعي"],
["FINTECH","اللوائح التنظيمية لشركات التقنية المالية","Fintech Regulatory Requirements","البنك المركزي السعودي / هيئة السوق المالية","القطاع المالي","قطاعي"],
["TAX-INCOME","نظام ضريبة الدخل","Income Tax Law","هيئة الزكاة والضريبة والجمارك","الزكاة والضرائب","مشروط"],
["EXCISE","نظام الضريبة الانتقائية","Excise Tax Law","هيئة الزكاة والضريبة والجمارك","الزكاة والضرائب","مشروط"],
["CUSTOMS","نظام الجمارك الموحد","Unified Customs Law","هيئة الزكاة والضريبة والجمارك","الزكاة والضرائب","مشروط"],
["FOREIGN-INVEST","نظام الاستثمار","Investment Law","وزارة الاستثمار","الاستثمار","مشروط"],
["ARBITRATION","نظام التحكيم","Arbitration Law","الجهات المختصة","القضاء والعقود","مشروط"],
["EVIDENCE-LAW","نظام الإثبات","Evidence Law","وزارة العدل","القضاء والعقود","مشروط"],
["CIVIL","نظام المعاملات المدنية","Civil Transactions Law","وزارة العدل","القضاء والعقود","عام"],
["PERSONAL-STATUS","نظام الأحوال الشخصية","Personal Status Law","وزارة العدل","القضاء والعقود","مشروط"],
["COMMERCIAL-COURTS","نظام المحاكم التجارية","Commercial Courts Law","وزارة العدل","القضاء والعقود","مشروط"]
);
const officialSources={
'NCA-ECC':['الهيئة الوطنية للأمن السيبراني — ECC 2:2024','https://nca.gov.sa/ar/regulatory-documents/controls-list/ecc/'],
'NCA-CSCC':['الهيئة الوطنية للأمن السيبراني — الأنظمة الحساسة','https://nca.gov.sa/ar/regulatory-documents/controls-list/cscc/'],
'NCA-CCC':['الهيئة الوطنية للأمن السيبراني — الحوسبة السحابية','https://nca.gov.sa/ar/regulatory-documents/controls-list/ccc/'],
'NCA-OTCC':['الهيئة الوطنية للأمن السيبراني — الأنظمة التشغيلية','https://nca.gov.sa/ar/regulatory-documents/controls-list/otcc/'],
'NCA-DCC':['الهيئة الوطنية للأمن السيبراني — ضوابط البيانات','https://nca.gov.sa/ar/regulatory-documents/controls-list/dcc/'],
'PDPL':['سدايا — النص المنشور لنظام حماية البيانات الشخصية','https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL'],
'PDPL-IR':['سدايا — اللائحة التنفيذية لنظام حماية البيانات الشخصية','https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2']
};
const verifiedArticleExamples={
'PDPL':[
['المادة 12','سياسة الخصوصية','التحقق من اعتماد سياسة خصوصية وإتاحتها لأصحاب البيانات عند الجمع','نسخة السياسة المنشورة وسجل اعتمادها','مسؤول الخصوصية / الشؤون القانونية'],
['المادة 31','سجل أنشطة معالجة البيانات','التحقق من وجود سجل لأنشطة المعالجة وفق النطاق والمتطلبات المنطبقة','سجل أنشطة المعالجة وتاريخ مراجعته','مسؤول حماية البيانات / الإدارات المالكة للبيانات']
]};
const healthcareModules=[
['HEALTH-PRACTICE','نظام مزاولة المهن الصحية','Health Professions Practice Law','وزارة الصحة / الهيئة السعودية للتخصصات الصحية','القطاع الصحي','قطاعي'],
['HEALTH-CBAHI','معايير اعتماد المنشآت الصحية (سباهي)','CBAHI Healthcare Accreditation Standards','المركز السعودي لاعتماد المنشآت الصحية','القطاع الصحي','مشروط'],
['HEALTH-PATIENT','حقوق ومسؤوليات المرضى','Patient Rights and Responsibilities','وزارة الصحة','القطاع الصحي','قطاعي'],
['HEALTH-RECORDS','متطلبات سرية وحماية السجلات الصحية','Health Records and Confidentiality Requirements','وزارة الصحة / سدايا','القطاع الصحي','مشروط'],
['HEALTH-INFECTION','اشتراطات الوقاية من العدوى ومكافحتها','Infection Prevention and Control Requirements','الجهات الصحية المختصة','القطاع الصحي','قطاعي'],
['HEALTH-LAB','متطلبات ترخيص المختبرات الطبية','Medical Laboratory Licensing Requirements','وزارة الصحة','القطاع الصحي','قطاعي'],
['HEALTH-PHARMACY','متطلبات الصيدليات والمنشآت الصيدلانية','Pharmacy and Pharmaceutical Facility Requirements','الجهات الصحية المختصة / هيئة الغذاء والدواء','القطاع الصحي','قطاعي'],
['HEALTH-DEVICES','متطلبات الأجهزة والمستلزمات الطبية','Medical Devices Regulatory Requirements','الهيئة العامة للغذاء والدواء','القطاع الصحي','مشروط']
];
items.push(...healthcareModules);
const healthcareChecks={
'HEALTH':['ترخيص المنشأة ونطاق الخدمات','تجديد الترخيص وفق المواعيد المنطبقة','الاحتفاظ بسجل التفتيش والملاحظات'],
'HEALTH-PRACTICE':['التحقق من التصنيف والتسجيل المهني','التحقق من صلاحية تراخيص الممارسة','التحقق من نطاق ممارسة كل تخصص'],
'HEALTH-CBAHI':['تحديد معايير الاعتماد المنطبقة على نوع المنشأة','تقييم الفجوات مقابل الإصدار المعتمد','توثيق خطط التحسين'],
'HEALTH-PATIENT':['سياسة حقوق المرضى','إجراءات الموافقة المستنيرة','سجل الشكاوى ومعالجتها'],
'HEALTH-RECORDS':['سياسة سرية السجلات الصحية','مراجعة صلاحيات الوصول','ضوابط الاحتفاظ والإتلاف'],
'HEALTH-INFECTION':['برنامج مكافحة العدوى','سجلات التدريب','تقارير المراقبة والإجراءات التصحيحية'],
'HEALTH-LAB':['تراخيص المختبر','ضبط الجودة','سجلات معايرة الأجهزة'],
'HEALTH-PHARMACY':['الترخيص ونطاق النشاط','سجلات التخزين ودرجات الحرارة','التتبع والصرف'],
'HEALTH-DEVICES':['سجلات الأجهزة والصيانة','البلاغات والتتبع','التحقق من المتطلبات المنطبقة']
};
const guidance={"LABOR":["عقود العمل وتوثيقها","ساعات العمل والراحة والعمل الإضافي","الأجور ومواعيد دفعها","الإجازات والاستحقاقات","انتهاء العلاقة التعاقدية ومكافأة نهاية الخدمة","سجلات الموظفين والتظلمات","السلامة والصحة المهنية"],"PDPL":["تحديد أغراض المعالجة والأساس النظامي","إشعارات الخصوصية وحقوق أصحاب البيانات","الاحتفاظ والإتلاف","إدارة الحوادث والإبلاغ","التعاقد مع المعالجين","نقل البيانات خارج المملكة"],"VAT":["التسجيل الضريبي عند الانطباق","الفواتير والسجلات","الإقرارات والمواعيد","الاحتفاظ بالمستندات"],"COMPANIES":["السجل التجاري والوثائق النظامية","صلاحيات الإدارة والحوكمة","محاضر القرارات","الإفصاحات والالتزامات ذات الصلة"],"NCA-ECC":["الحوكمة السيبرانية","إدارة الأصول","إدارة الهوية والوصول","حماية الأنظمة والشبكات","الاستجابة للحوادث","استمرارية الأعمال"]};
Object.assign(guidance,healthcareChecks);
const cats=['الكل',...new Set(items.map(x=>x[4]))];
let cat='الكل',q='';
const origRender=render;render=function(){origRender();drawCatalog()};
const proofMap={'نظام العمل':['توثيق عقود العمل','العقود الموثقة','الموارد البشرية'],'نظام حماية البيانات الشخصية':['توثيق عمليات المعالجة','سجل أنشطة المعالجة','مسؤول حماية البيانات'],'ضوابط الأمن السيبراني الأساسية':['مراجعة صلاحيات الوصول','مصفوفة الصلاحيات','الأمن السيبراني']};
function drawCatalog(){const root=document.getElementById('libraries');if(!root)return;const matches=items.filter(x=>(cat==='الكل'||x[4]===cat)&&(!q||x.join(' ').toLowerCase().includes(q.toLowerCase())));root.innerHTML='<div class="enh-hero"><div><h2>المكتبة التنظيمية السعودية</h2><p>فهرس استكشافي للأنظمة واللوائح والضوابط والمعايير. انطباق المتطلبات يتحدد وفق نشاط المنشأة والجهة المشرفة.</p></div><span class="enh-tag">'+items.length+' مرجعًا</span></div><div class="card"><strong>تنبيه بشأن دقة المكتبة</strong><p class="enh-help">هذه قائمة واسعة وليست حصرًا قانونيًا لجميع أنظمة المملكة أو نسخها السارية. لا تحتوي على النصوص الرسمية الكاملة، ولا يعني ظهور مرجع أنه ينطبق على كل منشأة. تحقّق من المصدر الرسمي والإصدار وتاريخ السريان قبل أي تقييم.</p><p class="enh-help">المراجع الموسومة «متاح للتجربة» تحتوي على ضوابط تمثيلية فقط. باقي المراجع فهرس تعريفي ولا تُنشئ تقييمات أو نسب امتثال وهمية.</p></div><div class="enh-toolbar section"><input id="catalogSearch" type="search" placeholder="ابحث عن نظام أو جهة أو معيار" value="'+esc(q)+'"><select id="catalogCategory">'+cats.map(x=>'<option '+(x===cat?'selected':'')+'>'+esc(x)+'</option>').join('')+'</select></div><p class="muted">'+matches.length+' نتيجة</p><div class="frameworks">'+matches.map(x=>'<div class="card fw" style="cursor:default"><div class="row"><span class="pill">'+esc(x[4])+'</span><span class="enh-badge">'+esc(x[5])+'</span></div><h3 style="margin-top:12px">'+esc(x[1])+'</h3><p class="muted">'+esc(x[2])+'</p><p class="enh-help">'+esc(x[3])+'</p><div class="enh-actions">'+(x[6]?'<button class="btn alt" onclick="frameworkFilter=\''+x[6]+'\';go(\'controls\')">عرض الضوابط التجريبية</button>':'<span class="enh-demo-flag">فهرس فقط — المحتوى التفصيلي قيد الإعداد</span>')+(guidance[x[0]]?'<details style="margin-top:12px"><summary>محاور فحص استرشادية (ليست مواد نظامية)</summary><ul>'+guidance[x[0]].map(t=>'<li>'+esc(t)+'</li>').join('')+'</ul></details>':'')+'</div></div>').join('')+'</div>';root.querySelectorAll('.card.fw').forEach(card=>{const name=card.querySelector('h3')?.textContent||'';const row=items.find(x=>x[1]===name);if(!row)return;const d=document.createElement('details');d.className='catalog-detail';d.style.cssText='margin-top:14px;border-top:1px solid #e2e8e4;padding-top:12px';const summary=document.createElement('summary');summary.textContent='فتح تفاصيل النظام ومتطلبات الإثبات';summary.style.cssText='cursor:pointer;touch-action:manipulation;padding:10px 4px;font-weight:700;color:#17654f';d.appendChild(summary);const body=document.createElement('div');body.className='enh-help';body.style.cssText='padding:10px 4px;line-height:1.9';const fields=[['المرجع',row[1]],['الجهة التنظيمية',row[3]],['القطاع',row[4]],['نطاق الانطباق',row[5]],['حالة التوثيق','فهرس استرشادي؛ لم تُوثّق المواد والإصدارات رسميًا بعد']];fields.forEach(([label,value])=>{const p=document.createElement('p');const strong=document.createElement('strong');strong.textContent=label+': ';p.appendChild(strong);p.appendChild(document.createTextNode(value));body.appendChild(p)});const note=document.createElement('p');note.textContent='منهجية التقييم المقترحة: تحديد المادة النظامية السارية ← صياغة معيار فحص ← تحديد الدليل المطلوب والإدارة المسؤولة ← مراجعة الدليل ← اعتماد حالة الالتزام. لا تُحتسب نتيجة قانونية لهذا المرجع قبل توثيق مواده.';body.appendChild(note);if(row[6]){const hint=document.createElement('p');hint.textContent='توجد ضوابط تجريبية لهذا المرجع؛ يمكنك فتحها من زر عرض الضوابط التجريبية أعلاه.';body.appendChild(hint)}if(verifiedArticleExamples[row[0]]){const heading=document.createElement('h4');heading.textContent='أمثلة ربط مواد بمتطلبات تقييم (للمراجعة والتخصيص)';body.appendChild(heading);verifiedArticleExamples[row[0]].forEach(entry=>{const card=document.createElement('div');card.style.cssText='border:1px solid #e1eae4;border-radius:9px;padding:10px;margin:8px 0';[['المادة',entry[0]],['الالتزام',entry[1]],['معيار الفحص المقترح',entry[2]],['دليل الإثبات المقترح',entry[3]],['الإدارة المسؤولة المقترحة',entry[4]]].forEach(([k,v])=>{const p=document.createElement('p');p.textContent=k+': '+v;card.appendChild(p)});body.appendChild(card)})}if(officialSources[row[0]]){const link=document.createElement('a');link.href=officialSources[row[0]][1];link.target='_blank';link.rel='noopener noreferrer';link.textContent='فتح المصدر الرسمي: '+officialSources[row[0]][0];link.style.cssText='display:inline-block;padding:10px 0;color:#17654f;text-decoration:underline';body.appendChild(link);const sourceNote=document.createElement('p');sourceNote.textContent='رابط المصدر تم التحقق من وجوده؛ لم تُربط مواد هذا المرجع ببطاقات التقييم بعد.';body.appendChild(sourceNote)}d.appendChild(body);card.appendChild(d)});root.querySelectorAll('.card.fw').forEach(card=>{const h=card.querySelector('h3');const p=h&&proofMap[h.textContent];if(!p)return;const d=document.createElement('details');d.className='section';const s=document.createElement('summary');s.textContent='بطاقة الالتزام والأدلة';d.appendChild(s);const t=document.createElement('p');t.className='enh-help';t.textContent='معيار التقييم: '+p[0]+' | دليل الإثبات: '+p[1]+' | الجهة المسؤولة: '+p[2]+' | رقم المادة والإصدار: قيد التحقق من المصدر الرسمي';d.appendChild(t);card.appendChild(d)});const grid=root.querySelector('.frameworks');if(grid){const sections=new Map();Array.from(grid.children).forEach(card=>{const category=card.querySelector('.pill')?.textContent||'أخرى';if(!sections.has(category)){const section=document.createElement('section');section.className='section';const disclosure=document.createElement('details');disclosure.open=Boolean(q||cat!=='الكل');disclosure.style.cssText='border:1px solid #dce7df;border-radius:12px;background:white;padding:14px;margin-bottom:12px';const title=document.createElement('summary');title.textContent=category;title.style.cssText='cursor:pointer;font-size:18px;font-weight:700;padding:10px;touch-action:manipulation';disclosure.appendChild(title);const wrap=document.createElement('div');wrap.className='frameworks';wrap.style.marginTop='14px';disclosure.appendChild(wrap);section.appendChild(disclosure);sections.set(category,section)}sections.get(category).querySelector('.frameworks').appendChild(card)});const container=document.createElement('div');Array.from(sections.keys()).sort((a,b)=>a.localeCompare(b,'ar')).forEach(k=>container.appendChild(sections.get(k)));grid.replaceWith(container)};root.querySelector('#catalogSearch').oninput=e=>{q=e.target.value;drawCatalog();const i=root.querySelector('#catalogSearch');i.focus();i.setSelectionRange(q.length,q.length)};root.querySelector('#catalogCategory').onchange=e=>{cat=e.target.value;drawCatalog()}}
drawCatalog();
})();